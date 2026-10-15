/* ==========================================================================
   grading_ai_engine.js — Universal AI Audit & Auto-Submit Engine
   AlmaU SDTE 2026 | Course: Economics (RU)
   Module: Midterm Control 1 (MC1)
   ========================================================================== */

// URL вашей Google Таблицы "Economics MC1 SE RUS":
const GOOGLE_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwzzVi2L5YHIpCmUEpv3sUy5YkpKN2SdGZMQKghjTBglU-R-llziHnQ9dLAELmzKg4M/exec";

// ==========================================
// 1. АВТОРИЗАЦИЯ ПРЕПОДАВАТЕЛЯ
// ==========================================

function verifyTeacherKey() {
    toggleModal('teacher-modal', false);
    const profPanel = document.getElementById('prof-grade-panel');
    if (profPanel) {
        profPanel.classList.remove('hidden');
    }
    notify(typeof currentLang !== 'undefined' && currentLang === 'en' ? "Professor panel unlocked!" : "Панель преподавателя разблокирована!");
}

// ==========================================
// 2. РАСЧЕТ ИИ-РИСКА ДЛЯ ЭССЕ
// ==========================================

function calculateAIRisk(text) {
    if (!text) return "0% Risk (No text)";

    const lowerText = text.toLowerCase();
    let aiRisk = 10;

    const simulatorActions = [
        "switched the model", "switched to the", "looked at the graph", "second graph", 
        "first graph", "fist graph", "demand curve", "go up to", "tr line", "tc line",
        "переключил модель", "посмотрел на график", "кривая спроса", "поднимаюсь к", "линия tr"
    ];

    let actionCount = 0;
    simulatorActions.forEach(act => {
        if (lowerText.includes(act)) actionCount++;
    });
    if (actionCount > 0) aiRisk += actionCount * 20;

    const missingSpaceMatches = text.match(/[a-zа-я]\.[A-ZА-Я]/g);
    if (missingSpaceMatches && missingSpaceMatches.length > 0) {
        aiRisk += missingSpaceMatches.length * 15;
    }

    const aiCliches = [
        "furthermore", "it is crucial to note", "in conclusion", "moreover", 
        "в данном контексте", "следует отметить", "таким образом", "важно подчеркнуть"
    ];

    let clichéCount = 0;
    aiCliches.forEach(cliche => {
        if (lowerText.includes(cliche)) clichéCount++;
    });
    if (clichéCount > 0) aiRisk += clichéCount * 15;

    aiRisk = Math.min(99, Math.max(5, Math.round(aiRisk)));

    if (aiRisk <= 30) return `${aiRisk}% (Низкий риск / Собственный текст)`;
    if (aiRisk <= 65) return `${aiRisk}% (Средний риск / Помощь ИИ)`;
    return `${aiRisk}% (Высокий риск ИИ)`;
}

// ==========================================
// 3. ОТПРАВКА СЕССИИ И РАСЧЕТ БАЛЛОВ ПО ЧАСТЯМ
// ==========================================

function compileFinalToken() {
    if (typeof currentStudentIdx === 'undefined' || currentStudentIdx === -1) {
        notify(typeof currentLang !== 'undefined' && currentLang === 'en' ? "Please select your name first!" : "Сначала выберите свое ФИО!", true);
        return;
    }

    // --- ЧАСТЬ 1 и ЧАСТЬ 2: ТЕСТЫ (10 вопросов x 3 балла = 30 баллов MAX) ---
    const p1_p2_answers = {};
    let scoreP1P2 = 0;

    document.querySelectorAll('#part1-container input:checked, #part2-container input:checked').forEach(input => {
        p1_p2_answers[input.name] = input.value;
        if (input.dataset.ans && input.value === input.dataset.ans) {
            scoreP1P2 += 3;
        }
    });

    // --- ЧАСТЬ 3: ЗАДАЧИ И ТАБЛИЦА (30 баллов MAX) ---
    const p3_answers = {};
    document.querySelectorAll('#part3-container input[type="number"], #part3-container input[type="text"]').forEach(input => {
        p3_answers[input.id] = input.value.trim();
    });

    let scoreP3 = 0;
    
    // Задача 3.1 — 5 баллов
    const t1Input = document.getElementById('ans-t1');
    if (t1Input && t1Input.value.trim() !== '') {
        const val1 = parseFloat(t1Input.value.replace(',', '.'));
        const exp1 = parseFloat(t1Input.dataset.expected);
        if (!isNaN(val1) && Math.abs(val1 - exp1) < 1) {
            scoreP3 += 5;
        }
    }
    
    // Задача 3.2 — 5 баллов (TC6 и MC6)
    const t2TcInput = document.getElementById('ans-t2-tc');
    const t2McInput = document.getElementById('ans-t2-mc');
    let task2Score = 0;
    if (t2TcInput && t2TcInput.value.trim() !== '') {
        const valTc = parseFloat(t2TcInput.value.replace(',', '.'));
        const expTc = parseFloat(t2TcInput.dataset.expected);
        if (!isNaN(valTc) && Math.abs(valTc - expTc) < 1) task2Score += 2.5;
    }
    if (t2McInput && t2McInput.value.trim() !== '') {
        const valMc = parseFloat(t2McInput.value.replace(',', '.'));
        const expMc = parseFloat(t2McInput.dataset.expected);
        if (!isNaN(valMc) && Math.abs(valMc - expMc) < 1) task2Score += 2.5;
    }
    scoreP3 += task2Score;

    // Задача 3.3 — 5 баллов
    const t3Input = document.getElementById('ans-t3');
    if (t3Input && t3Input.value.trim() !== '') {
        const val3 = parseFloat(t3Input.value.replace(',', '.'));
        const exp3 = parseFloat(t3Input.dataset.expected);
        if (!isNaN(val3) && Math.abs(val3 - exp3) < 0.1) {
            scoreP3 += 5;
        }
    }

    // Задача 3.4 (Таблица + График + Q*) — 15 баллов MAX
    let t4Score = 0;
    
    // 1) Точность выбора Q* (+5 баллов)
    const t4qInput = document.getElementById('ans-t4-q');
    if (t4qInput && t4qInput.value.trim() !== '') {
        const val4 = parseInt(t4qInput.value);
        const exp4 = parseInt(t4qInput.dataset.expected);
        if (!isNaN(val4) && val4 === exp4) {
            t4Score += 5;
        }
    }

    // 2) Проверка таблицы издержек (+5 баллов, допускается максимум 1 пустая в MC)
    let mcEmptyCount = 0;
    let otherEmptyCount = 0;

    for (let q = 1; q <= 10; q++) {
        const mcVal = document.getElementById(`t4-mc-${q}`)?.value.trim();
        if (!mcVal) mcEmptyCount++;

        ['tc', 'afc', 'avc', 'atc'].forEach(col => {
            const val = document.getElementById(`t4-${col}-${q}`)?.value.trim();
            if (!val) otherEmptyCount++;
        });
    }

    if (mcEmptyCount <= 1 && otherEmptyCount === 0) {
        t4Score += 5;
    }

    // 3) Отрисовка графиков (+5 баллов)
    let filledGraphPoints = 0;
    for (let q = 1; q <= 10; q++) {
        const valATC = document.getElementById(`t4-atc-${q}`)?.value.trim();
        const valAVC = document.getElementById(`t4-avc-${q}`)?.value.trim();
        if (valATC && valAVC) filledGraphPoints++;
    }
    if (filledGraphPoints >= 9) {
        t4Score += 5;
    }

    scoreP3 += t4Score;

    // --- ЧАСТЬ 4: КЕЙС, СЛАЙДЕРЫ И ЭССЕ (40 баллов MAX) ---
    const p4_essay = document.getElementById('p4-essay-input') ? document.getElementById('p4-essay-input').value.trim() : "";
    const p4_words = p4_essay ? p4_essay.split(/\s+/).length : 0;
    const lowerEssay = p4_essay.toLowerCase();

    if (p4_words < 60) {
        notify(typeof currentLang !== 'undefined' && currentLang === 'en' 
            ? `Part 4 analysis requires at least 60 words (Current: ${p4_words}).` 
            : `Анализ в Части 4 должен содержать не менее 60 слов (Сейчас: ${p4_words}).`, true);
        return;
    }

    let rawSliderRatio = (typeof p4_getSliderScore === 'function') ? Math.max(0, p4_getSliderScore() / 10) : 1;
    let sliderScore = Math.round(rawSliderRatio * 20);

    const econKeywords = [
        "прибыль", "убыт", "издержк", "предельн", "постоянн", "переменн", 
        "выпуск", "отдач", "покрыв", "затрат", "цена", "монопол", "спрос", "равновес",
        "profit", "loss", "cost", "marginal", "variable", "fixed", "output", "cover", "avc", "atc", "mc", "mr", "demand"
    ];
    let keyMatches = 0;
    econKeywords.forEach(kw => { if (lowerEssay.includes(kw)) keyMatches++; });
    const hasNumbers = /\d+/.test(p4_essay);

    let textScore = 0;
    if (p4_words >= 60 && keyMatches >= 4 && hasNumbers) {
        textScore = 20;
    } else if (p4_words >= 60 && keyMatches >= 2) {
        textScore = 12;
    } else {
        textScore = 5;
    }

    let scoreP4 = Math.min(40, sliderScore + textScore);

    // Итоговый балл (MAX 100)
    let calculatedTotalScore = Math.min(100, Math.round(scoreP1P2 + scoreP3 + scoreP4));
    let aiRiskText = calculateAIRisk(p4_essay);

    const payload = {
        studentIdx: currentStudentIdx,
        studentName: STUDENTS_LIST[currentStudentIdx],
        variant: currentStudentIdx + 1,
        timestamp: new Date().toLocaleString(),
        scoreP1P2: scoreP1P2,
        scoreP3: scoreP3,
        scoreP4: scoreP4,
        scoreTotal: calculatedTotalScore,
        essay: p4_essay,
        aiRisk: aiRiskText,
        p1_p2: p1_p2_answers,
        p3: p3_answers
    };

    const jsonStr = JSON.stringify(payload);
    const internalToken = "MC1-RUS-" + btoa(encodeURIComponent(jsonStr));

    const pStudent = document.getElementById('p-student');
    const pVariant = document.getElementById('p-variant');
    const pTime = document.getElementById('p-time');

    if (pStudent) pStudent.innerText = payload.studentName;
    if (pVariant) pVariant.innerText = `Вариант #${payload.variant}`;
    if (pTime) pTime.innerText = payload.timestamp;

    const tokenDisplay = document.getElementById('p-token');
    if (tokenDisplay) tokenDisplay.innerText = internalToken;

    const passportBlock = document.getElementById('passport-block');
    if (passportBlock) passportBlock.classList.remove('hidden');

    sendDirectToGoogleSheet(payload, internalToken);
}

function sendDirectToGoogleSheet(payload, token) {
    if (!GOOGLE_SHEET_WEBAPP_URL || GOOGLE_SHEET_WEBAPP_URL.includes("ВСТАВЬТЕ_СЮДА")) {
        notify(typeof currentLang !== 'undefined' && currentLang === 'en' ? "Session completed successfully!" : "Работа успешно завершена!");
        return;
    }

    fetch(GOOGLE_SHEET_WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            timestamp: payload.timestamp,
            studentName: payload.studentName,
            variant: payload.variant,
            scoreP1P2: payload.scoreP1P2,
            scoreP3: payload.scoreP3,
            scoreP4: payload.scoreP4,
            scoreTotal: payload.scoreTotal,
            essay: payload.essay,
            rawToken: token,
            aiRisk: payload.aiRisk
        })
    }).then(() => {
        notify(typeof currentLang !== 'undefined' && currentLang === 'en' ? "Exam recorded in Google Sheet!" : "Работа записана в ведомость Google Таблицы!");
    }).catch(err => {
        console.error("Sync Error:", err);
    });
}

// ==========================================
// 4. РАСШИФРОВКА И ИИ-АУДИТ В ПАНЕЛИ
// ==========================================

function decryptAndScoreToken() {
    const rawToken = document.getElementById('prof-token-input').value.trim();
    if (!rawToken.includes("-")) {
        notify(typeof currentLang !== 'undefined' && currentLang === 'en' ? "Invalid token format!" : "Неверный формат токена!", true);
        return;
    }

    try {
        const base64Data = rawToken.split("-")[1];
        const jsonStr = decodeURIComponent(atob(base64Data));
        const data = JSON.parse(jsonStr);

        const decStudent = document.getElementById('dec-student');
        const decVariant = document.getElementById('dec-variant');
        const decScore = document.getElementById('dec-score');
        const decBrief = document.getElementById('dec-brief');

        if (decStudent) decStudent.innerText = data.studentName;
        if (decVariant) decVariant.innerText = `Вариант #${data.variant}`;
        if (decScore) decScore.innerText = `${data.scoreTotal} / 100 (Ч1-2: ${data.scoreP1P2}, Ч3: ${data.scoreP3}, Ч4: ${data.scoreP4})`;
        if (decBrief) decBrief.innerText = `"${data.essay}"`;

        runAIAudit(data.essay);

        const gradePanelOutput = document.getElementById('grade-panel-output');
        if (gradePanelOutput) gradePanelOutput.classList.remove('hidden');
        notify(typeof currentLang !== 'undefined' && currentLang === 'en' ? "AI Audit complete!" : "ИИ-аудит завершен!");
    } catch (e) {
        notify(typeof currentLang !== 'undefined' && currentLang === 'en' ? "Failed to parse session!" : "Ошибка чтения данных токена!", true);
    }
}

function runAIAudit(text) {
    if (!text) return;
    const aiRiskText = calculateAIRisk(text);

    const badge = document.getElementById('ai-score-badge');
    if (badge) {
        badge.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30";
        badge.innerText = aiRiskText;
    }

    const details = document.getElementById('ai-analysis-details');
    if (details) {
        details.innerHTML = `<div>• <b>Результат проверки:</b> ${aiRiskText}</div>`;
    }
}
