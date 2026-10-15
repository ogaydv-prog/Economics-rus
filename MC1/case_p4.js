/* ==========================================================================
   MIDTERM CONTROL 1 • MODULE FOR PART 4
   Interactive Case Analysis & Market Dynamics
   AlmaU SDTE 2026 • Economic Rus (81 Students)
   File: MC1/case_p4.js
   ========================================================================== */

let p4Chart1Inst = null;
let p4Chart2Inst = null;

// ==========================================
// 1. BASE DATA MODELS & DYNAMIC GENERATION
// ==========================================

const p4_basePcTable = [
    { q: 0, tvc: 0,   tc: 100, mc: null, avc: null,  atc: null },
    { q: 1, tvc: 90,  tc: 190, mc: 90,   avc: 90, atc: 190 },
    { q: 2, tvc: 170, tc: 270, mc: 80,   avc: 85, atc: 135 },
    { q: 3, tvc: 240, tc: 340, mc: 70,   avc: 80, atc: 113 },
    { q: 4, tvc: 300, tc: 400, mc: 60,   avc: 75, atc: 100 },
    { q: 5, tvc: 370, tc: 470, mc: 70,   avc: 74, atc: 94 },
    { q: 6, tvc: 450, tc: 550, mc: 80,   avc: 75, atc: 92 },
    { q: 7, tvc: 540, tc: 640, mc: 90,   avc: 77, atc: 91 },
    { q: 8, tvc: 650, tc: 750, mc: 110,  avc: 81, atc: 94 },
    { q: 9, tvc: 780, tc: 880, mc: 130,  avc: 87, atc: 98 },
    { q: 10, tvc: 930, tc: 1030, mc: 150, avc: 93, atc: 103 }
];

const p4_baseMcData = {
    'SR': [
        { q: 0, p: 125, mr: null, mc: null, atc: null, tr: 0, tc: 100 },
        { q: 1, p: 115, mr: 115, mc: 45, atc: 145, tr: 115, tc: 145 },
        { q: 2, p: 105, mr: 95,  mc: 35, atc: 90,  tr: 210, tc: 180 },
        { q: 3, p: 95,  mr: 75,  mc: 45, atc: 75,  tr: 285, tc: 225 },
        { q: 4, p: 85,  mr: 55,  mc: 55, atc: 68,  tr: 340, tc: 272 }, 
        { q: 5, p: 75,  mr: 35,  mc: 75, atc: 69,  tr: 375, tc: 345 },
        { q: 6, p: 65,  mr: 15,  mc: 95, atc: 73,  tr: 390, tc: 438 },
        { q: 7, p: 55,  mr: -5,  mc: 115, atc: 79, tr: 385, tc: 553 },
        { q: 8, p: 45,  mr: -25, mc: 135, atc: 86, tr: 360, tc: 688 },
        { q: 9, p: 35,  mr: -45, mc: 155, atc: 93, tr: 315, tc: 837 },
        { q: 10, p: 25, mr: -65, mc: 175, atc: 101, tr: 250, tc: 1010 }
    ],
    'LR': [
        { q: 0, p: 120, mr: null, mc: null, atc: null, tr: 0, tc: 100 },
        { q: 1, p: 105, mr: 105, mc: 45, atc: 145, tr: 105, tc: 145 },
        { q: 2, p: 90,  mr: 75,  mc: 35, atc: 90,  tr: 180, tc: 180 },
        { q: 3, p: 75,  mr: 45,  mc: 45, atc: 75,  tr: 225, tc: 225 }, 
        { q: 4, p: 60,  mr: 15,  mc: 55, atc: 68,  tr: 240, tc: 272 }, 
        { q: 5, p: 45,  mr: -15, mc: 75, atc: 69,  tr: 225, tc: 345 },
        { q: 6, p: 30,  mr: -45, mc: 95, atc: 73,  tr: 180, tc: 438 },
        { q: 7, p: 15,  mr: -75, mc: 115, atc: 79, tr: 105, tc: 553 },
        { q: 8, p: 0,   mr: -105,mc: 135, atc: 86, tr: 0,   tc: 688 },
        { q: 9, p: 0,   mr: -135,mc: 155, atc: 93, tr: 0,   tc: 837 },
        { q: 10, p: 0,  mr: -165,mc: 175, atc: 101, tr: 0,  tc: 1010 }
    ]
};

const p4_baseMonoTable = [
    { q: 0, p: 170, tr: 0, mr: null, tc: 110, mc: null, atc: null },
    { q: 1, p: 160, tr: 160, mr: 160, tc: 200, mc: 90, atc: 200 },
    { q: 2, p: 150, tr: 300, mr: 140, tc: 280, mc: 80, atc: 140 },
    { q: 3, p: 140, tr: 420, mr: 120, tc: 350, mc: 70, atc: 117 },
    { q: 4, p: 130, tr: 520, mr: 100, tc: 410, mc: 60, atc: 103 },
    { q: 5, p: 120, tr: 600, mr: 80, tc: 480, mc: 70, atc: 96 },
    { q: 6, p: 110, tr: 660, mr: 60, tc: 560, mc: 80, atc: 93 },
    { q: 7, p: 100, tr: 700, mr: 40, tc: 650, mc: 90, atc: 93 },
    { q: 8, p: 90, tr: 720, mr: 20, tc: 760, mc: 110, atc: 95 },
    { q: 9, p: 80, tr: 720, mr: 0, tc: 890, mc: 130, atc: 99 },
    { q: 10, p: 70, tr: 700, mr: -20, tc: 1040, mc: 150, atc: 104 }
];

let p4_pcTableData = [];
let p4_mcData = {};
let p4_monoTableData = [];
let activeMult = 1.0;

function roundInt(val) {
    return val !== null && val !== undefined ? Math.round(val) : null;
}

// ==========================================
// 2. MAIN RENDER FUNCTION
// ==========================================

function renderCaseP4(studentIdx, lang) {
    const container = document.getElementById('part4-container');
    if (!container) return;

    if (p4Chart1Inst) { p4Chart1Inst.destroy(); p4Chart1Inst = null; }
    if (p4Chart2Inst) { p4Chart2Inst.destroy(); p4Chart2Inst = null; }

    // Ротация 3 типов рынков ровно распределяется среди 81 студента (по 27 студентов на тип рынка)
    const marketType = studentIdx % 3; // 0: PC, 1: MC, 2: Monopoly
    
    const variantShift = (studentIdx * 7) % 23; 
    activeMult = 1.05 + ((studentIdx * 4) % 7) * 0.08;

    p4_pcTableData = p4_basePcTable.map(d => ({
        q: d.q,
        tvc: roundInt((d.tvc + variantShift) * activeMult),
        tc: roundInt((d.tc + variantShift) * activeMult),
        mc: roundInt((d.mc ? d.mc + variantShift * 0.2 : null) * activeMult),
        avc: roundInt((d.avc ? d.avc + variantShift * 0.2 : null) * activeMult),
        atc: roundInt((d.atc ? d.atc + variantShift * 0.2 : null) * activeMult)
    }));

    p4_mcData = {
        'SR': p4_baseMcData['SR'].map(d => ({
            q: d.q, 
            p: roundInt((d.p + variantShift) * activeMult), 
            mr: roundInt((d.mr !== null ? d.mr + variantShift : null) * activeMult),
            mc: roundInt((d.mc !== null ? d.mc + variantShift * 0.2 : null) * activeMult), 
            atc: roundInt((d.atc !== null ? d.atc + variantShift * 0.2 : null) * activeMult),
            tr: roundInt((d.tr + d.q * variantShift) * activeMult), 
            tc: roundInt((d.tc + variantShift) * activeMult)
        })),
        'LR': p4_baseMcData['LR'].map(d => ({
            q: d.q, 
            p: roundInt((d.p + variantShift) * activeMult), 
            mr: roundInt((d.mr !== null ? d.mr + variantShift : null) * activeMult),
            mc: roundInt((d.mc !== null ? d.mc + variantShift * 0.2 : null) * activeMult), 
            atc: roundInt((d.atc !== null ? d.atc + variantShift * 0.2 : null) * activeMult),
            tr: roundInt((d.tr + d.q * variantShift) * activeMult), 
            tc: roundInt((d.tc + variantShift) * activeMult)
        }))
    };

    p4_monoTableData = p4_baseMonoTable.map(d => ({
        q: d.q, 
        p: roundInt((d.p + variantShift) * activeMult), 
        tr: roundInt((d.tr + d.q * variantShift) * activeMult),
        mr: roundInt((d.mr !== null ? d.mr + variantShift : null) * activeMult), 
        tc: roundInt((d.tc + variantShift) * activeMult),
        mc: roundInt((d.mc !== null ? d.mc + variantShift * 0.2 : null) * activeMult), 
        atc: roundInt((d.atc !== null ? d.atc + variantShift * 0.2 : null) * activeMult)
    }));

    const titles = {
        en: [
            "Case 1: Grain Exporter Strategy & Market Volatility (Perfect Competition)", 
            "Case 2: SaaS Platform Expansion & Entry Dynamics (Monopolistic Competition)", 
            "Case 3: Cloud Infrastructure & Tariff Optimization (Pure Monopoly)"
        ],
        ru: [
            "Кейс 1: Стратегия экспортера зерна и ценовые шоки (Совершенная конкуренция)", 
            "Кейс 2: Экспансия SaaS-платформы и вход конкурентов (Монополистическая конкуренция)", 
            "Кейс 3: Облачная инфраструктура и оптимизация тарифов (Чистая монополия)"
        ]
    };

    const mcQ9 = p4_pcTableData[9].mc || 130;
    const mcQ6 = p4_pcTableData[6].mc || 80;
    const avcMin = p4_pcTableData[5].avc || 74;

    const pBoomInt = roundInt(mcQ9 + 2); 
    const pRecInt = roundInt(mcQ6 + 1);  
    const pCrisInt = roundInt(avcMin - 12);

    const instructions = {
        en: [
            `<b>EXECUTIVE TASK (Perfect Competition):</b><br>
            1. Test market scenarios: <b>Boom</b> (Price P = €${pBoomInt}), <b>Recession</b> (P = €${pRecInt}), and <b>Crisis</b> (P = €${pCrisInt}).<br>
            2. Analyze curves on charts to find optimal output <b>Q</b> using <b>MR = MC</b> condition.<br>
            3. Explain your decision in the essay below: calculate economic profit/loss based on chart data and justify output choice for each scenario.`,
            
            `<b>EXECUTIVE TASK (Monopolistic Competition):</b><br>
            1. Toggle between <b>Short-Run (SR)</b> brand monopoly and <b>Long-Run (LR)</b> market equilibrium.<br>
            2. Examine chart curves to locate optimal volume <b>Q</b> where <b>MR = MC</b>.<br>
            3. In your essay, explain how entry of competitors affects demand and why long-run tangency leads to <b>Excess Capacity</b>.`,
            
            `<b>EXECUTIVE TASK (Pure Monopoly):</b><br>
            1. Adjust Tariff Rate (<b>P</b>) and Service Volume (<b>Q</b>) while inspecting the charts.<br>
            2. Determine optimal output where <b>MR = MC</b> on the graph.<br>
            3. In your essay, calculate total revenue, profit, and explain deadweight loss from monopoly output restriction.`
        ],
        ru: [
            `<b>ЗАДАНИЕ КЕЙСА (Совершенная конкуренция):</b><br>
            1. Протестируйте 3 сценария цен: <b>Бум</b> (P = ${pBoomInt} €), <b>Спад</b> (P = ${pRecInt} €) и <b>Кризис</b> (P = ${pCrisInt} €).<br>
            2. Анализируйте графики кривых издержек, чтобы найти оптимальный объем <b>Q</b> по правилу <b>MR = MC</b>.<br>
            3. В эссе ниже рассчитайте прибыль/убыток по графикам и обоснуйте выбор объемов для каждого сценария (включая правило закрытия).`,
            
            `<b>ЗАДАНИЕ КЕЙСА (Монополистическая конкуренция):</b><br>
            1. Переключайте режимы между <b>Краткосрочным (SR)</b> и <b>Долгосрочным (LR)</b> периодами.<br>
            2. Найдите по графикам точку равновесия <b>Q</b>, где <b>MR = MC</b>.<br>
            3. В эссе ниже обоснуйте, как вход новых сервисов сдвигает спрос и почему возникает феномен <b>Избыточных мощностей (Excess Capacity)</b>.`,
            
            `<b>ЗАДАНИЕ КЕЙСА (Чистая монополия):</b><br>
            1. Управляйте тарифом (<b>P</b>) и объемом услуг (<b>Q</b>), отслеживая графики TR, TC, MR, MC.<br>
            2. Определите по графикам объем, максимизирующий монопольную прибыль (<b>MR = MC</b>).<br>
            3. В эссе сопоставьте монопольное ценообразование с конкурентным рынком и объясните потери общества.`
        ]
    };

    const essayHTML = `
        <div class="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2 mt-4">
            <div class="flex justify-between items-center">
                <label class="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <i class="fas fa-pen-nib text-indigo-400"></i>
                    ${lang === 'en' ? 'Executive Strategy Justification (Min 60 Words)' : 'Стратегическое обоснование (Минимум 60 слов)'}
                </label>
                <span id="p4-word-counter" class="text-[10px] font-mono font-bold text-rose-400">0 / 60 ${lang === 'en' ? 'words' : 'слов'}</span>
            </div>
            
            <textarea id="p4-essay-input" 
                class="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-slate-200 h-44 focus:ring-2 focus:ring-indigo-500 outline-none resize-none custom-scrollbar" 
                placeholder="${lang === 'en' ? 'Write your analysis based on chart curves...' : 'Опишите ваше обоснование на основе графиков: определите пересечение MR=MC, сравните P и ATC, рассчитайте прибыль и укажите стратегию...'}"
                onpaste="notify('${lang === 'en' ? 'Pasting is disabled. Type manually.' : 'Вставка заблокирована. Введите текст вручную.'}', true); return false;"
                oninput="p4_checkWordCount()"></textarea>
            
            <p class="text-[9px] text-slate-500 leading-tight">
                ${lang === 'en' ? 'Direct copy-paste is disabled. Minimum 60 words required.' : 'Защита от вставки активирована. Для отправки требуется минимум 60 слов.'}
            </p>
        </div>
    `;

    let html = `
    <div class="card p-6 space-y-6 bg-slate-900/90 border border-slate-800">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-4 gap-4">
            <div>
                <span class="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                    ${lang === 'en' ? 'Economics Interactive Case' : 'Интерактивный кейс-симулятор'}
                </span>
                <h3 class="text-xl font-black text-white mt-1">${titles[lang][marketType]}</h3>
            </div>
            <div class="bg-indigo-950/60 border border-indigo-500/30 px-3 py-1.5 rounded-lg text-xs text-indigo-300 font-mono font-bold">
                ${lang === 'en' ? 'Student Variant Scale Factor: ' : 'Индивидуальный коэффициент варианта: '}${activeMult.toFixed(2)}x
            </div>
        </div>

        <!-- Task Instructions Box -->
        <div class="bg-indigo-950/30 border border-indigo-500/20 p-4 rounded-xl text-xs text-slate-200 leading-relaxed space-y-1">
            ${instructions[lang][marketType]}
        </div>
    `;

    // TYPE 0: PERFECT COMPETITION HTML
    if (marketType === 0) {
        html += `
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div class="xl:col-span-5 space-y-4">
                <div class="flex flex-wrap gap-2 mb-2">
                    <button onclick="p4_setPcScenario(${pBoomInt})" id="p4-pc-btn-boom" class="scenario-btn bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">P = ${pBoomInt} € (${lang==='en'?'Boom':'Бум'})</button>
                    <button onclick="p4_setPcScenario(${pRecInt})" id="p4-pc-btn-rec" class="scenario-btn bg-amber-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">P = ${pRecInt} € (${lang==='en'?'Recession':'Спад'})</button>
                    <button onclick="p4_setPcScenario(${pCrisInt})" id="p4-pc-btn-cris" class="scenario-btn bg-rose-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">P = ${pCrisInt} € (${lang==='en'?'Crisis':'Кризис'})</button>
                </div>

                <div class="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-3">
                    <div class="flex justify-between items-center">
                        <label class="text-xs font-bold text-slate-300 uppercase">${lang==='en'?'Export Volume (Q)':'Объем экспорта (Q)'}</label>
                        <span id="p4-pc-val-q" class="text-lg font-black text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">0 ед.</span>
                    </div>
                    <input type="range" id="p4-pc-slider-q" min="0" max="10" value="0" step="1" class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500" oninput="p4_updatePcDashboard()">
                </div>

                <div class="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">TR</span><span id="p4-pc-val-tr" class="text-white font-bold text-base">0 €</span></div>
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">TC</span><span id="p4-pc-val-tc" class="text-white font-bold text-base">0 €</span></div>
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">World Price (MR)</span><span id="p4-pc-val-mr" class="text-emerald-400 font-bold text-base">0 €</span></div>
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">MC</span><span id="p4-pc-val-mc" class="text-amber-400 font-bold text-base">0 €</span></div>
                </div>

                ${essayHTML}
            </div>

            <div class="xl:col-span-7 space-y-4">
                <div class="bg-slate-950 border border-slate-800 p-4 rounded-xl h-[360px] relative">
                    <canvas id="p4Chart1Canvas"></canvas>
                </div>
                <div class="bg-slate-950 border border-slate-800 p-4 rounded-xl h-[360px] relative">
                    <canvas id="p4Chart2Canvas"></canvas>
                </div>
            </div>
        </div>
        `;
    } 
    // TYPE 1: MONOPOLISTIC COMPETITION HTML
    else if (marketType === 1) {
        html += `
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div class="xl:col-span-5 space-y-4">
                <div class="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-4">
                    <div class="flex gap-2">
                        <label class="flex-1 cursor-pointer">
                            <input type="radio" name="p4-mc-period" value="SR" class="hidden" checked onchange="p4_updateMcDashboard()">
                            <div id="p4-mc-toggle-sr" class="text-center py-2 rounded-lg border border-indigo-500 bg-indigo-600 text-white text-xs font-bold">${lang==='en'?'Short-Run (Brand Monopoly)':'Краткосрочный период'}</div>
                        </label>
                        <label class="flex-1 cursor-pointer">
                            <input type="radio" name="p4-mc-period" value="LR" class="hidden" onchange="p4_updateMcDashboard()">
                            <div id="p4-mc-toggle-lr" class="text-center py-2 rounded-lg border border-slate-700 text-slate-400 text-xs font-bold">${lang==='en'?'Long-Run (Entrant Competition)':'Долгосрочный период'}</div>
                        </label>
                    </div>

                    <div>
                        <div class="flex justify-between items-center mb-1">
                            <label class="text-xs font-bold text-slate-300 uppercase">${lang==='en'?'Sales Quantity (Q)':'Объем продаж (Q)'}</label>
                            <span id="p4-mc-val-q" class="text-lg font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">0 ед.</span>
                        </div>
                        <input type="range" id="p4-mc-slider-q" min="0" max="10" value="0" step="1" class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" oninput="p4_updateMcDashboard()">
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">Price (P)</span><span id="p4-mc-val-p" class="text-purple-400 font-bold text-base">0 €</span></div>
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">ATC</span><span id="p4-mc-val-atc" class="text-slate-300 font-bold text-base">0 €</span></div>
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">MR</span><span id="p4-mc-val-mr" class="text-emerald-400 font-bold text-base">0 €</span></div>
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">MC</span><span id="p4-mc-val-mc" class="text-amber-400 font-bold text-base">0 €</span></div>
                </div>

                ${essayHTML}
            </div>

            <div class="xl:col-span-7 space-y-4">
                <div class="bg-slate-950 border border-slate-800 p-4 rounded-xl h-[360px] relative">
                    <canvas id="p4Chart1Canvas"></canvas>
                </div>
                <div class="bg-slate-950 border border-slate-800 p-4 rounded-xl h-[360px] relative">
                    <canvas id="p4Chart2Canvas"></canvas>
                </div>
            </div>
        </div>
        `;
    } 
    // TYPE 2: PURE MONOPOLY HTML
    else {
        const minTariff = p4_monoTableData[10].p;
        const maxTariff = p4_monoTableData[0].p;
        const defTariff = p4_monoTableData[0].p;
        const stepTariff = roundInt(10 * activeMult);

        html += `
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div class="xl:col-span-5 space-y-4">
                <div class="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-4">
                    <div>
                        <div class="flex justify-between items-center mb-1">
                            <label class="text-xs font-bold text-slate-300 uppercase">${lang==='en'?'Tariff Rate (P)':'Тариф на услуги (P)'}</label>
                            <span id="p4-mo-slider-val-p" class="text-lg font-black text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">${defTariff} €</span>
                        </div>
                        <input type="range" id="p4-mo-slider-p" min="${minTariff}" max="${maxTariff}" value="${defTariff}" step="${stepTariff}" class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500">
                    </div>

                    <div>
                        <div class="flex justify-between items-center mb-1">
                            <label class="text-xs font-bold text-slate-300 uppercase">${lang==='en'?'Service Volume (Q)':'Объем услуг (Q)'}</label>
                            <span id="p4-mo-val-q" class="text-lg font-black text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">0 ед.</span>
                        </div>
                        <input type="range" id="p4-mo-slider-q" min="0" max="10" value="0" step="1" class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500">
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">MR</span><span id="p4-mo-val-mr" class="text-emerald-400 font-bold text-base">0 €</span></div>
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">ATC</span><span id="p4-mo-val-atc" class="text-rose-400 font-bold text-base">0 €</span></div>
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800 col-span-2"><span class="text-slate-500 block text-[9px] uppercase">MC</span><span id="p4-mo-val-mc" class="text-amber-400 font-bold text-base">0 €</span></div>
                </div>

                ${essayHTML}
            </div>

            <div class="xl:col-span-7 space-y-4">
                <div class="bg-slate-950 border border-slate-800 p-4 rounded-xl h-[360px] relative">
                    <canvas id="p4Chart1Canvas"></canvas>
                </div>
                <div class="bg-slate-950 border border-slate-800 p-4 rounded-xl h-[360px] relative">
                    <canvas id="p4Chart2Canvas"></canvas>
                </div>
            </div>
        </div>
        `;
    }

    container.innerHTML = html;

    setTimeout(() => {
        if (marketType === 0) p4_initPcModule(pBoomInt);
        else if (marketType === 1) p4_initMcModule();
        else p4_initMoModule();
    }, 50);
}

// ==========================================
// 3. LOGIC & CHART CONTROLLERS
// ==========================================

function p4_checkWordCount() {
    const txt = document.getElementById('p4-essay-input').value.trim();
    const words = txt ? txt.split(/\s+/).length : 0;
    const counter = document.getElementById('p4-word-counter');
    if (counter) {
        counter.innerText = `${words} / 60 ${typeof currentLang !== 'undefined' && currentLang === 'en' ? 'words' : 'слов'}`;
        counter.className = words >= 60 ? "text-[10px] font-mono font-bold text-emerald-400" : "text-[10px] font-mono font-bold text-rose-400";
    }
}

// PC Module
let p4_pcCurrentPrice = 0;

function p4_initPcModule(defaultBoomPrice) {
    const ctx1 = document.getElementById('p4Chart1Canvas').getContext('2d');
    p4Chart1Inst = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: p4_pcTableData.map(d => d.q),
            datasets: [
                { label: 'TR', data: [], borderColor: '#3b82f6', borderWidth: 3 },
                { label: 'TC', data: p4_pcTableData.map(d => d.tc), borderColor: '#f43f5e', borderWidth: 3 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'TR / TC (Выручка и затраты)', color: '#fff' } }, scales: { y: { grid: { color: '#1e293b' } }, x: { grid: { color: '#1e293b' } } } }
    });

    const ctx2 = document.getElementById('p4Chart2Canvas').getContext('2d');
    p4Chart2Inst = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: p4_pcTableData.map(d => d.q),
            datasets: [
                { label: 'Цена (MR)', data: [], borderColor: '#10b981', borderDash: [5, 5], borderWidth: 2 },
                { label: 'MC', data: p4_pcTableData.map(d => d.mc), borderColor: '#f59e0b', borderWidth: 3 },
                { label: 'AVC', data: p4_pcTableData.map(d => d.avc), borderColor: '#a855f7', borderWidth: 2 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'P / MC / AVC', color: '#fff' } }, scales: { y: { grid: { color: '#1e293b' } }, x: { grid: { color: '#1e293b' } } } }
    });

    p4_setPcScenario(defaultBoomPrice);
}

function p4_setPcScenario(price) {
    p4_pcCurrentPrice = price;

    p4Chart1Inst.data.datasets[0].data = p4_pcTableData.map(d => roundInt(d.q * price));
    p4Chart1Inst.update();
    p4Chart2Inst.data.datasets[0].data = p4_pcTableData.map(d => price);
    p4Chart2Inst.update();

    p4_updatePcDashboard();
}

function p4_updatePcDashboard() {
    const q = parseInt(document.getElementById('p4-pc-slider-q').value);
    const data = p4_pcTableData[q];
    const tr = roundInt(q * p4_pcCurrentPrice);

    document.getElementById('p4-pc-val-q').innerText = `${q} ед.`;
    document.getElementById('p4-pc-val-tr').innerText = `${tr} €`;
    document.getElementById('p4-pc-val-tc').innerText = `${data.tc} €`;
    document.getElementById('p4-pc-val-mr').innerText = `${p4_pcCurrentPrice} €`;
    document.getElementById('p4-pc-val-mc').innerText = data.mc ? `${data.mc} €` : '-';
}

// MC Module
function p4_initMcModule() {
    const ctx1 = document.getElementById('p4Chart1Canvas').getContext('2d');
    p4Chart1Inst = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: p4_mcData['SR'].map(d => d.q),
            datasets: [
                { label: 'TR', data: p4_mcData['SR'].map(d => d.tr), borderColor: '#8b5cf6', borderWidth: 3 },
                { label: 'TC', data: p4_mcData['SR'].map(d => d.tc), borderColor: '#f43f5e', borderWidth: 3 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'Динамика TR / TC', color: '#fff' } }, scales: { y: { grid: { color: '#1e293b' } }, x: { grid: { color: '#1e293b' } } } }
    });

    const ctx2 = document.getElementById('p4Chart2Canvas').getContext('2d');
    p4Chart2Inst = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: p4_mcData['SR'].map(d => d.q),
            datasets: [
                { label: 'Цена (P)', data: p4_mcData['SR'].map(d => d.p), borderColor: '#a855f7', borderWidth: 3 },
                { label: 'MR', data: p4_mcData['SR'].map(d => d.mr), borderColor: '#34d399', borderDash: [5,5], borderWidth: 2 },
                { label: 'MC', data: p4_mcData['SR'].map(d => d.mc), borderColor: '#f59e0b', borderWidth: 3 },
                { label: 'ATC', data: p4_mcData['SR'].map(d => d.atc), borderColor: '#cbd5e1', borderWidth: 2 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'P / MR / MC / ATC', color: '#fff' } }, scales: { y: { grid: { color: '#1e293b' } }, x: { grid: { color: '#1e293b' } } } }
    });

    p4_updateMcDashboard();
}

function p4_updateMcDashboard() {
    const period = document.querySelector('input[name="p4-mc-period"]:checked').value;
    const q = parseInt(document.getElementById('p4-mc-slider-q').value);
    
    document.getElementById('p4-mc-toggle-sr').className = period === 'SR' ? "text-center py-2 rounded-lg border border-indigo-500 bg-indigo-600 text-white text-xs font-bold" : "text-center py-2 rounded-lg border border-slate-700 text-slate-400 text-xs font-bold";
    document.getElementById('p4-mc-toggle-lr').className = period === 'LR' ? "text-center py-2 rounded-lg border border-indigo-500 bg-indigo-600 text-white text-xs font-bold" : "text-center py-2 rounded-lg border border-slate-700 text-slate-400 text-xs font-bold";

    const dataset = p4_mcData[period];
    const data = dataset.find(d => d.q === q);

    p4Chart1Inst.data.datasets[0].data = dataset.map(d => d.tr);
    p4Chart1Inst.data.datasets[1].data = dataset.map(d => d.tc);
    p4Chart1Inst.update();

    p4Chart2Inst.data.datasets[0].data = dataset.map(d => d.p);
    p4Chart2Inst.data.datasets[1].data = dataset.map(d => d.mr);
    p4Chart2Inst.update();

    document.getElementById('p4-mc-val-q').innerText = `${q} ед.`;
    document.getElementById('p4-mc-val-p').innerText = `${data.p} €`;
    document.getElementById('p4-mc-val-atc').innerText = data.atc ? `${data.atc} €` : '-';
    document.getElementById('p4-mc-val-mr').innerText = data.mr !== null ? `${data.mr} €` : '-';
    document.getElementById('p4-mc-val-mc').innerText = data.mc !== null ? `${data.mc} €` : '-';
}

// Monopoly Module
function p4_initMoModule() {
    const ctx1 = document.getElementById('p4Chart1Canvas').getContext('2d');
    p4Chart1Inst = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: p4_monoTableData.map(d => d.q),
            datasets: [
                { label: 'TR', data: p4_monoTableData.map(d => d.tr), borderColor: '#8b5cf6', borderWidth: 3 },
                { label: 'TC', data: p4_monoTableData.map(d => d.tc), borderColor: '#f43f5e', borderWidth: 3 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'TR / TC (Доходы и издержки)', color: '#fff' } }, scales: { y: { grid: { color: '#1e293b' } }, x: { grid: { color: '#1e293b' } } } }
    });

    const ctx2 = document.getElementById('p4Chart2Canvas').getContext('2d');
    p4Chart2Inst = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: p4_monoTableData.map(d => d.q),
            datasets: [
                { label: 'Тариф (P)', data: p4_monoTableData.map(d => d.p), borderColor: '#3b82f6', borderWidth: 3 },
                { label: 'MR', data: p4_monoTableData.map(d => d.mr), borderColor: '#10b981', borderDash: [5,5], borderWidth: 3 },
                { label: 'MC', data: p4_monoTableData.map(d => d.mc), borderColor: '#f59e0b', borderWidth: 3 },
                { label: 'ATC', data: p4_monoTableData.map(d => d.atc), borderColor: '#f43f5e', borderWidth: 2 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'Тариф (P) / MR / MC / ATC', color: '#fff' } }, scales: { y: { grid: { color: '#1e293b' } }, x: { grid: { color: '#1e293b' } } } }
    });

    const sliderQ = document.getElementById('p4-mo-slider-q');
    const sliderP = document.getElementById('p4-mo-slider-p');

    sliderQ.addEventListener('input', (e) => {
        const q = parseInt(e.target.value);
        sliderP.value = p4_monoTableData[q].p;
        p4_updateMoDashboard();
    });

    sliderP.addEventListener('input', (e) => {
        const p = parseFloat(e.target.value);
        const match = p4_monoTableData.find(d => Math.abs(d.p - p) < 5);
        if (match) {
            sliderQ.value = match.q;
            p4_updateMoDashboard();
        }
    });

    p4_updateMoDashboard();
}

function p4_updateMoDashboard() {
    const q = parseInt(document.getElementById('p4-mo-slider-q').value);
    const data = p4_monoTableData[q];

    document.getElementById('p4-mo-val-q').innerText = `${q} ед.`;
    document.getElementById('p4-mo-slider-val-p').innerText = `${data.p} €`;
    document.getElementById('p4-mo-val-mr').innerText = data.mr !== null ? `${data.mr} €` : '-';
    document.getElementById('p4-mo-val-atc').innerText = data.atc !== null ? `${data.atc} €` : '-';
    document.getElementById('p4-mo-val-mc').innerText = data.mc !== null ? `${data.mc} €` : '-';
}

// ==========================================
// 4. AUTOMATED SLIDER SCORING FOR PART 4
// ==========================================

function p4_getSliderScore() {
    if (typeof currentStudentIdx === 'undefined' || currentStudentIdx === -1) return 0;
    const marketType = currentStudentIdx % 3;
    
    if (marketType === 0) {
        const q = parseInt(document.getElementById('p4-pc-slider-q')?.value || 0);
        const mcQ9 = p4_pcTableData[9].mc;
        const mcQ6 = p4_pcTableData[6].mc;

        if (Math.abs(p4_pcCurrentPrice - (mcQ9 + 2)) < 3) return q === 9 ? 10 : (Math.abs(q - 9) === 1 ? 5 : 0);
        if (Math.abs(p4_pcCurrentPrice - (mcQ6 + 1)) < 3) return q === 6 ? 10 : (Math.abs(q - 6) === 1 ? 5 : 0);
        return q === 0 ? 10 : 0;
    } else if (marketType === 1) {
        const period = document.querySelector('input[name="p4-mc-period"]:checked')?.value || 'SR';
        const q = parseInt(document.getElementById('p4-mc-slider-q')?.value || 0);
        if (period === 'SR') return q === 4 ? 10 : (Math.abs(q - 4) === 1 ? 5 : 0);
        return q === 3 ? 10 : (Math.abs(q - 3) === 1 ? 5 : 0);
    } else {
        const q = parseInt(document.getElementById('p4-mo-slider-q')?.value || 0);
        return q === 5 ? 10 : (Math.abs(q - 5) === 1 ? 5 : 0);
    }
}
