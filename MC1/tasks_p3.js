/* ==========================================================================
   MIDTERM CONTROL 1 • MODULE FOR PART 3
   File: MC1/tasks_p3.js
   AlmaU SDTE 2026 • Economic Rus (81 Students)
   ========================================================================== */

let costChartInstance = null;

const p3_productCatalog = [
    { en: "mechanical watches", ru: "механических наручных часов" },
    { en: "chocolate bars", ru: "шоколадных батончиков" },
    { en: "specialty coffee bags", ru: "упаковок спешелти-кофе" },
    { en: "eco-smartphones", ru: "эко-смартфонов" },
    { en: "electric scooters", ru: "электросамокатов" },
    { en: "organic matcha canisters", ru: "банок чая матча" },
    { en: "wireless headphones", ru: "беспроводных наушников" },
    { en: "craft bakery boxes", ru: "наборов крафтовой выпечки" },
    { en: "smart watches", ru: "умных часов" },
    { en: "fitness trackers", ru: "фитнес-браслетов" }
];

function sanitizeDecimalInput(inputElement) {
    if (!inputElement) return;
    inputElement.value = inputElement.value.replace(',', '.').replace(/[^0-9.-]/g, '');
}

function renderTasksP3(studentIdx, lang) {
    const container = document.getElementById('part3-container');
    if (!container) return;

    // Расчет персонального seed с поддержкой всех 81 студентов
    const seed = (typeof studentIdx === 'number' && studentIdx >= 0) ? studentIdx : 0;
    const k = seed + 1; 
    const prod = p3_productCatalog[seed % p3_productCatalog.length];

    // -------------------------------------------------------------------------
    // ЗАДАЧА 3.1: Точка безубыточности (Q_BEP = TFC / (P - AVC))
    // -------------------------------------------------------------------------
    const TFC_val = 60000 + (k % 7) * 5000;
    const Price_val = 20 + (k % 6) * 2;
    const AVC_val = 12 + (k % 4);
    const expectedBEP = Math.round(TFC_val / (Price_val - AVC_val));

    // -------------------------------------------------------------------------
    // ЗАДАЧА 3.2: Заполнение TC и MC по известным средним издержкам (AC)
    // -------------------------------------------------------------------------
    const baseAC = [0, 0, 28 + (k%3), 25 + (k%3), 21 + (k%3), 18 + (k%3), 17 + (k%3), 19 + (k%3), 22 + (k%3)];
    const expectedTC6 = baseAC[6] * 6; // TC для Q = 6
    const expectedMC6 = expectedTC6 - (baseAC[5] * 5); // MC для 6-й единицы

    // -------------------------------------------------------------------------
    // ЗАДАЧА 3.3: Конкурентная фирма P = MC (TC = FC + Q^2 => MC = 2Q)
    // -------------------------------------------------------------------------
    const FC_comp = 100 + k * 10;
    const Market_P = 60 + (k % 8) * 5;
    const expectedOptQ = Number((Market_P / 2).toFixed(2));

    // -------------------------------------------------------------------------
    // ЗАДАЧА 3.4: Полная матрица на 10 единиц (U-образные кривые издержек)
    // -------------------------------------------------------------------------
    const FC = 50 + (k % 5) * 10;
    const m0 = 10 + (k % 3) * 2;
    const q_min = 2;
    const alpha = 1.5 + (k % 4) * 0.2;

    const mcArr = [0];
    const vcArr = [0];
    let cumVC = 0;

    for (let q = 1; q <= 10; q++) {
        let mcVal = Math.round(m0 + alpha * Math.pow(q - q_min, 2));
        mcArr.push(mcVal);
        cumVC += mcVal;
        vcArr.push(cumVC);
    }

    const P_mkt = 40 + (k % 5) * 5;
    let optQ_Table = 1;
    for (let q = 1; q <= 10; q++) {
        if (mcArr[q] <= P_mkt) optQ_Table = q;
    }

    // Тексты заданий
    const t1Text = lang === 'en' ?
        `A company producing <span class="font-bold text-indigo-400">${prod.en}</span> has Total Fixed Costs of <span class="font-bold text-emerald-400">$${TFC_val.toLocaleString()}</span>, unit price <span class="font-bold text-sky-400">$${Price_val}</span>, and AVC <span class="font-bold text-amber-400">$${AVC_val}</span>. Calculate Break-Even Volume Q<sub>BEP</sub>.` :
        `Фирма по выпуску <span class="font-bold text-indigo-400">${prod.ru}</span> имеет общие постоянные издержки <span class="font-bold text-emerald-400">${TFC_val.toLocaleString()} €</span>, рыночную цену <span class="font-bold text-sky-400">${Price_val} €</span> и AVC = <span class="font-bold text-amber-400">${AVC_val} €</span>. Рассчитайте точку безубыточности Q<sub>BEP</sub>.`;

    const t2Text = lang === 'en' ?
        `Given output Q=5 (AC=$${baseAC[5]}) and Q=6 (AC=$${baseAC[6]}). Calculate Total Cost (TC) for Q=6 and Marginal Cost (MC) of the 6th unit.` :
        `Даны средние затраты AC при выпуске Q=5 (AC = ${baseAC[5]} €) и Q=6 (AC = ${baseAC[6]} €). Рассчитайте общие издержки TC для Q=6 и предельные издержки MC для 6-й единицы.`;

    const t3Text = lang === 'en' ?
        `A competitive firm has Total Cost function <span class="font-bold text-indigo-400">TC = ${FC_comp} + Q<sup>2</sup></span> (MC = 2Q). At market price <span class="font-bold text-amber-400">P = $${Market_P}</span>, calculate profit-maximizing output Q*.` :
        `Конкурентная фирма имеет функцию издержек <span class="font-bold text-indigo-400">TC = ${FC_comp} + Q<sup>2</sup></span> (MC = 2Q). При рыночной цене <span class="font-bold text-amber-400">P = ${Market_P} €</span> найдите оптимальный выпуск Q*.`;

    // РЕНДЕРИНГ HTML
    container.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <!-- Задача 3.1 -->
            <div class="card p-6 space-y-4">
                <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">${lang === 'en' ? 'Task 3.1' : 'Задача 3.1'}</span>
                <h4 class="text-base font-bold text-slate-100">${lang === 'en' ? 'Break-Even Analysis' : 'Точка безубыточности'}</h4>
                <p class="text-sm text-slate-200 leading-relaxed">${t1Text}</p>
                <div class="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2 text-sm">
                    <label class="block text-slate-400 font-medium">${lang === 'en' ? 'Output Q_BEP (units):' : 'Объем Q_BEP (ед.):'}</label>
                    <input type="text" id="ans-t1" data-expected="${expectedBEP}" placeholder="Q_BEP" oninput="sanitizeDecimalInput(this)" class="w-full bg-slate-900 border border-slate-700 p-3 rounded-lg text-white font-mono text-base focus:border-indigo-500 outline-none">
                </div>
            </div>

            <!-- Задача 3.2 -->
            <div class="card p-6 space-y-4">
                <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">${lang === 'en' ? 'Task 3.2' : 'Задача 3.2'}</span>
                <h4 class="text-base font-bold text-slate-100">${lang === 'en' ? 'TC & MC from Average Costs' : 'Расчет TC и MC по таблице AC'}</h4>
                <p class="text-sm text-slate-200 leading-relaxed">${t2Text}</p>
                <div class="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-3 text-sm">
                    <div>
                        <label class="block text-slate-400 font-medium mb-1">${lang === 'en' ? 'Total Cost for Q=6 (TC_6):' : 'Общие издержки TC при Q=6:'}</label>
                        <input type="text" id="ans-t2-tc" data-expected="${expectedTC6}" placeholder="TC_6 (€)" oninput="sanitizeDecimalInput(this)" class="w-full bg-slate-900 border border-slate-700 p-2.5 rounded-lg text-white font-mono text-base focus:border-indigo-500 outline-none">
                    </div>
                    <div>
                        <label class="block text-slate-400 font-medium mb-1">${lang === 'en' ? 'Marginal Cost for 6th unit (MC_6):' : 'Предельные издержки MC_6:'}</label>
                        <input type="text" id="ans-t2-mc" data-expected="${expectedMC6}" placeholder="MC_6 (€)" oninput="sanitizeDecimalInput(this)" class="w-full bg-slate-900 border border-slate-700 p-2.5 rounded-lg text-white font-mono text-base focus:border-indigo-500 outline-none">
                    </div>
                </div>
            </div>

            <!-- Задача 3.3 -->
            <div class="card p-6 space-y-4">
                <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">${lang === 'en' ? 'Task 3.3' : 'Задача 3.3'}</span>
                <h4 class="text-base font-bold text-slate-100">${lang === 'en' ? 'Profit Maximization (P = MC)' : 'Максимизация прибыли'}</h4>
                <p class="text-sm text-slate-200 leading-relaxed">${t3Text}</p>
                <div class="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2 text-sm">
                    <label class="block text-slate-400 font-medium">${lang === 'en' ? 'Optimal Output Q* (units):' : 'Оптимальный выпуск Q* (ед.):'}</label>
                    <input type="text" id="ans-t3" data-expected="${expectedOptQ}" placeholder="Q*" oninput="sanitizeDecimalInput(this)" class="w-full bg-slate-900 border border-slate-700 p-3 rounded-lg text-white font-mono text-base focus:border-indigo-500 outline-none">
                </div>
            </div>
        </div>

        <!-- Задача 3.4: Динамическая матрица издержек и интерактивный график -->
        <div class="card p-6 space-y-5">
            <div class="border-b border-slate-800 pb-4 flex justify-between items-center flex-wrap gap-3">
                <div>
                    <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block mb-1.5">${lang === 'en' ? 'Task 3.4' : 'Задача 3.4'}</span>
                    <h3 class="text-base md:text-lg font-bold text-slate-100">${lang === 'en' ? '10-Unit Short-Run Cost Matrix' : 'Матрица издержек фирмы на 10 единиц выпуска'}</h3>
                </div>
                <span class="text-sm md:text-base text-indigo-300 font-bold bg-indigo-950/80 border border-indigo-700/80 px-4 py-2 rounded-xl">Рыночная цена P = ${P_mkt} €</span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div class="lg:col-span-7 space-y-4">
                    <p class="text-sm text-slate-200 font-medium leading-relaxed">${lang === 'en' ? 'Complete the cost matrix for output Q = 1 to 10:' : 'Заполните таблицу издержек для выпуска Q от 1 до 10:'}</p>
                    <div class="overflow-x-auto custom-scrollbar">
                        <table class="w-full text-sm text-center border-collapse border border-slate-800">
                            <thead>
                                <tr class="bg-slate-900/90 text-indigo-300 border-b border-slate-800 font-bold text-xs uppercase">
                                    <th class="p-2.5 border border-slate-800">Q</th>
                                    <th class="p-2.5 border border-slate-800">FC</th>
                                    <th class="p-2.5 border border-slate-800">VC</th>
                                    <th class="p-2.5 border border-slate-800 text-indigo-400">TC</th>
                                    <th class="p-2.5 border border-slate-800 text-slate-400">AFC</th>
                                    <th class="p-2.5 border border-slate-800 text-amber-400">AVC</th>
                                    <th class="p-2.5 border border-slate-800 text-sky-400">ATC</th>
                                    <th class="p-2.5 border border-slate-800 text-emerald-400">MC</th>
                                </tr>
                            </thead>
                            <tbody id="t4-tbody" class="font-mono text-sm">
                                ${generateTableRowsHTML(FC, vcArr)}
                            </tbody>
                        </table>
                    </div>
                    <div class="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2 text-sm">
                        <label class="block text-amber-400 font-bold text-sm md:text-base">${lang === 'en' ? 'Optimal Output Q* (where P >= MC):' : 'Оптимальный объем Q* (где P >= MC):'}</label>
                        <input type="text" id="ans-t4-q" data-expected="${optQ_Table}" placeholder="Q*" oninput="sanitizeDecimalInput(this)" class="w-full bg-slate-900 border border-slate-700 p-3 rounded-lg text-white font-mono text-base focus:border-indigo-500 outline-none">
                    </div>
                </div>

                <div class="lg:col-span-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
                    <div class="text-xs uppercase font-bold text-slate-300 tracking-wider flex justify-between items-center border-b border-slate-800 pb-2">
                        <span>${lang === 'en' ? 'Unit Cost Curves (10 Units)' : 'Кривые издержек на единицу (10 Единиц)'}</span>
                        <span class="text-emerald-400 font-mono text-xs"><i class="fas fa-chart-line mr-1"></i>Realtime Chart.js</span>
                    </div>
                    <div class="h-96 relative w-full">
                        <canvas id="costChartCanvas"></canvas>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.querySelectorAll('.t4-input').forEach(input => {
        input.addEventListener('input', (e) => {
            sanitizeDecimalInput(e.target);
            updateCostChartFromTableInputs();
        });
    });

    setTimeout(() => init10UnitCostChart(), 100);
}

function generateTableRowsHTML(FC, vcArr) {
    let html = '';
    for (let q = 1; q <= 10; q++) {
        html += `
            <tr class="border-b border-slate-800 hover:bg-slate-900/40 transition">
                <td class="p-2 border border-slate-800 font-bold text-white">${q}</td>
                <td class="p-2 border border-slate-800 text-slate-400">${FC}</td>
                <td class="p-2 border border-slate-800 text-slate-400">${vcArr[q]}</td>
                <td class="p-1.5 border border-slate-800"><input type="text" id="t4-tc-${q}" class="t4-input w-14 bg-slate-900 border border-slate-700 text-center text-white font-bold rounded p-1.5 focus:border-indigo-500 outline-none"></td>
                <td class="p-1.5 border border-slate-800"><input type="text" id="t4-afc-${q}" class="t4-input w-14 bg-slate-900 border border-slate-700 text-center text-white font-bold rounded p-1.5 focus:border-indigo-500 outline-none"></td>
                <td class="p-1.5 border border-slate-800"><input type="text" id="t4-avc-${q}" class="t4-input w-14 bg-slate-900 border border-slate-700 text-center text-white font-bold rounded p-1.5 focus:border-indigo-500 outline-none"></td>
                <td class="p-1.5 border border-slate-800"><input type="text" id="t4-atc-${q}" class="t4-input w-14 bg-slate-900 border border-slate-700 text-center text-white font-bold rounded p-1.5 focus:border-indigo-500 outline-none"></td>
                <td class="p-1.5 border border-slate-800"><input type="text" id="t4-mc-${q}" class="t4-input w-14 bg-slate-900 border border-slate-700 text-center text-white font-bold rounded p-1.5 focus:border-indigo-500 outline-none"></td>
            </tr>
        `;
    }
    return html;
}

function init10UnitCostChart() {
    const cvs = document.getElementById('costChartCanvas');
    if (!cvs) return;
    const ctx = cvs.getContext('2d');

    if (costChartInstance) {
        costChartInstance.destroy();
        costChartInstance = null;
    }

    const labels = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10'];

    costChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                { label: 'AFC', data: Array(10).fill(null), borderColor: '#94a3b8', borderWidth: 2, borderDash: [3, 3], pointRadius: 5, tension: 0.3, spanGaps: true },
                { label: 'AVC', data: Array(10).fill(null), borderColor: '#f59e0b', borderWidth: 2.5, pointRadius: 5, tension: 0.3, spanGaps: true },
                { label: 'ATC', data: Array(10).fill(null), borderColor: '#38bdf8', borderWidth: 2.5, pointRadius: 5, tension: 0.3, spanGaps: true },
                { label: 'MC', data: Array(10).fill(null), borderColor: '#10b981', borderWidth: 3, pointRadius: 6, tension: 0.3, spanGaps: true }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { boxWidth: 12, color: '#cbd5e1', font: { size: 11, weight: 'bold' } } }
            },
            scales: {
                x: { ticks: { color: '#94a3b8', font: { size: 11, weight: 'bold' } }, grid: { color: 'rgba(51, 65, 85, 0.3)' } },
                y: { ticks: { color: '#94a3b8', font: { size: 11, weight: 'bold' } }, grid: { color: 'rgba(51, 65, 85, 0.3)' } }
            }
        }
    });
}

function updateCostChartFromTableInputs() {
    if (!costChartInstance) return;
    let newAFC = [], newAVC = [], newATC = [], newMC = [];

    for (let q = 1; q <= 10; q++) {
        const valAFC = parseFloat(document.getElementById(`t4-afc-${q}`)?.value.replace(',', '.'));
        const valAVC = parseFloat(document.getElementById(`t4-avc-${q}`)?.value.replace(',', '.'));
        const valATC = parseFloat(document.getElementById(`t4-atc-${q}`)?.value.replace(',', '.'));
        const valMC = parseFloat(document.getElementById(`t4-mc-${q}`)?.value.replace(',', '.'));

        newAFC.push(!isNaN(valAFC) ? valAFC : null);
        newAVC.push(!isNaN(valAVC) ? valAVC : null);
        newATC.push(!isNaN(valATC) ? valATC : null);
        newMC.push(!isNaN(valMC) ? valMC : null);
    }

    costChartInstance.data.datasets[0].data = newAFC;
    costChartInstance.data.datasets[1].data = newAVC;
    costChartInstance.data.datasets[2].data = newATC;
    costChartInstance.data.datasets[3].data = newMC;
    costChartInstance.update();
}
