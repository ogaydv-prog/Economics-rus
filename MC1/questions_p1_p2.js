/* ==========================================================================
   MIDTERM CONTROL 1 • FULL QUESTION BANK (87 QUESTIONS)
   AlmaU SDTE 2026 • Economic Rus (81 Students)
   ========================================================================== */

const STUDENTS_LIST = [
    // ГРУППА 1 (1 - 42)
    "Азизбеков Максат Арманович",
    "Акимжанов Муслимбек Бекзодұлы",
    "Алпыспаев Мирас Жалғасұлы",
    "Амирханов Даулет Сакенович",
    "Ахметов Андрей Витальевич",
    "Әкімхан Рамазан Қайратұлы",
    "Байдалы Айсер Сабырханұлы",
    "Байдукова Арина Андреевна",
    "Бекешев Дінмухамед Ермекұлы",
    "Гуков Арман Андрейұлы",
    "Долинин Тимур Евгеньевич",
    "Есіркеп Аян Бақытжанұлы",
    "Жалбаслар Дәулет Русланұлы",
    "Жарылгасынова Жасмин Максатовна",
    "Казымов Руслан",
    "Кариева Карина Армановна",
    "Ким Валентин Владиславович",
    "Коваленко Илья Викторович",
    "Конысбаев Айбек Ермаханович",
    "Кошантаев Бексултан Маратович",
    "Масалимов Олжас Ержанович",
    "Медиханов Тимур Фархадович",
    "Морбекова Камилла Ескендеровна",
    "Мусаев Ернур Русланович",
    "Нұржанқызы Балнұр",
    "Омаров Болат Айдосович",
    "Рамазанов Арсен Дауренұлы",
    "Рахимбекова Сагыныш Рахимбековна",
    "Ровнов Владислав Александрович",
    "Сәтпек Нұрлыбек Асланбекұлы",
    "Тастемір Шамиил Қайратұлы",
    "Тәжібай Мухаммедазиз Мұхтарұлы",
    "Терехов Вячеслав Константинович",
    "Титовский Андрей Сергеевич",
    "Тұрсымбай Асқар Сүлейменұлы",
    "Уразалиев Сагит Ильдарович",
    "Филипенко Александр Юрьевич",
    "Хашимова Саида Ренатовна",
    "Хохлов Алексей Игоревич",
    "Шайкенова Камилла Азаматовна",
    "Юсупова Ильнара Дамировна",
    "Яппаров Эмир Фанильевич",

    // ГРУППА 2 (43 - 81)
    "Абдрайм Еркежан Беркинбайкызы",
    "Абдулла Нұрислам Бауыржанұлы",
    "Абраев Радмир Ниязович",
    "Акбаралиев Фахридин Алишерович",
    "Амангелді Айдос Даулетұлы",
    "Асанғалиева Әсия Арманқызы",
    "Асланов Алишер Асланович",
    "Ахметов Танирберген Дауренулы",
    "Әбілдаев Нұрым Тәліпханұлы",
    "Әділ Гүлсезім Әсетқызы",
    "Биманов Алишер Бакытович",
    "Власова Валерия Семеновна",
    "Дүйсенбай Әлімхан Дәулетұлы",
    "Избасар Даниял Тауржанұлы",
    "Истамов Изат",
    "Йылмаз Мухаммедали",
    "Кадирханов Жангир Адилетович",
    "Кенжегузин Санжар Ерланұлы",
    "Кенжегулов Нургазы Сергазыевич",
    "Князьбек Нұрбек Нұрланұлы",
    "Коробов Илья Александрович",
    "Кочетов Руслан Юрьевич",
    "Кукушкин Юрий Кириллович",
    "Қабылбек Жантөре Батырбекұлы",
    "Ли Аделина Сергеевна",
    "Мажитов Султан Канатович",
    "Мазат Ерсұлтан Ердосұлы",
    "Мамаев Станислав Алексеевич",
    "Молдыбай Амина Айратқызы",
    "Мусаева Элина Князьевна",
    "Мухтар Бекасыл Асылбекулы",
    "Нурканат Алиар",
    "Нұрбек Нүркен Анарбекұлы",
    "Нұрғали Айсана",
    "Сейтқасым Әкежан Серікұлы",
    "Смайылова Жасмин Рысбекқызы",
    "Тильдахметов Алмат Зайнуллаұлы",
    "Убниев Бекзат Нурсипатович",
    "Шаймухамбетов Алим Асланулы"
];

// ЧАСТЬ 1: ОСНОВЫ МИКРОЭКОНОМИКИ, ПОЛЕЗНОСТЬ И ИЗДЕРЖКИ
const PART1_POOL = [
    {
        q_en: "Microeconomics is the study of?",
        q_ru: "Микроэкономика — это наука, изучающая:",
        opts_en: ["A) International trading", "B) How households and firms make decisions", "C) Government economic policy", "D) How the economy as a whole works", "E) Inflation and unemployment"],
        opts_ru: ["A) Международную торговлю", "B) Как домохозяйства и фирмы принимают решения", "C) Государственное регулирование", "D) Экономику в целом", "E) Инфляцию и безработицу"],
        ans: "B"
    },
    {
        q_en: "Scarcity exists because?",
        q_ru: "Проблема ограниченности (редкости) существует потому, что:",
        opts_en: ["A) Human wants exceed productive capacity", "B) Resources are unlimited", "C) Capital does not wear out", "D) Population growth declines", "E) Innovation creates unemployment"],
        opts_ru: ["A) Человеческие потребности превышают производственные возможности", "B) Запасы ресурсов неограничены", "C) Капитал не изнашивается", "D) Рост населения замедляется", "E) Инновации вызывают безработицу"],
        ans: "A"
    },
    {
        q_en: "What does an indifference curve show?",
        q_ru: "Что показывают кривые безразличия?",
        opts_en: ["A) Bundles providing different utility", "B) Budget constraints", "C) Alternative sets of goods giving the same level of utility", "D) Minimum demand bundles", "E) Production limits"],
        opts_ru: ["A) Наборы с различным уровнем полезности", "B) Бюджетные ограничения", "C) Альтернативные наборы товаров, обеспечивающие одинаковый уровень полезности", "D) Минимальные наборы спроса", "E) Границы производства"],
        ans: "C"
    },
    {
        q_en: "Who is most interested in maximizing marginal utility?",
        q_ru: "Кто больше всего заинтересован в максимизации предельной полезности в экономике?",
        opts_en: ["A) Landlords", "B) Employers", "C) Consumers", "D) Government", "E) Firms"],
        opts_ru: ["A) Домовладельцы", "B) Работодатели", "C) Потребители", "D) Государство", "E) Фирмы"],
        ans: "C"
    },
    {
        q_en: "Increases of consumers income graphically look like:",
        q_ru: "Увеличение дохода потребителя графически выражается в:",
        opts_en: ["A) Change in budget line slope", "B) Increase in budget line slope", "C) Decrease in budget line slope", "D) Parallel shift of budget line leftward", "E) Parallel shift of budget line rightward"],
        opts_ru: ["A) Изменении наклона бюджетной линии", "B) Увеличении наклона бюджетной линии", "C) Уменьшении наклона бюджетной линии", "D) Параллельном сдвиге бюджетной линии влево", "E) Параллельном сдвиге бюджетной линии вправо"],
        ans: "E"
    },
    {
        q_en: "Total costs (TC) of a firm are defined as:",
        q_ru: "Общие издержки фирмы (TC) — это:",
        opts_en: ["A) Marginal costs", "B) Sum of total fixed and total variable costs", "C) Cost per unit of output", "D) Costs varying with output", "E) Fixed costs only"],
        opts_ru: ["A) Предельные издержки", "B) Сумма общих постоянных и переменных издержек", "C) Издержки на производство единицы продукции", "D) Издержки, меняющиеся с выпуском", "E) Издержки, не зависящие от выпуска"],
        ans: "B"
    },
    {
        q_en: "Marginal cost (MC) is defined as:",
        q_ru: "MC (предельные издержки) — это:",
        opts_en: ["A) Average cost", "B) Marginal revenue", "C) Marginal cost", "D) Average revenue", "E) Fixed cost"],
        opts_ru: ["A) Средние издержки", "B) Предельный доход", "C) Предельные издержки", "D) Средний доход", "E) Постоянные издержки"],
        ans: "C"
    },
    {
        q_en: "How are marginal costs calculated?",
        q_ru: "Как определяются предельные издержки:",
        opts_en: ["A) AC = TC / Q", "B) MC = ΔTC / ΔQ", "C) ACV = VC / Q", "D) AFC = FC / Q", "E) MP = ΔTP / ΔQ"],
        opts_ru: ["A) AC = TC / Q", "B) MC = ΔTC / ΔQ", "C) ACV = VC / Q", "D) AFC = FC / Q", "E) MP = ΔTP / ΔQ"],
        ans: "B"
    },
    {
        q_en: "Total revenue (TR) represents:",
        q_ru: "TR — это:",
        opts_en: ["A) Profit", "B) Average revenue", "C) Fixed income", "D) Marginal revenue", "E) Total revenue"],
        opts_ru: ["A) Прибыль", "B) Средний доход", "C) Постоянный доход", "D) Предельный доход", "E) Общий (совокупный) доход"],
        ans: "E"
    },
    {
        q_en: "The principle where satisfaction decreases with each additional unit consumed is called:",
        q_ru: "Концепция, при которой при приобретении дополнительных единиц продукта степень удовлетворения от него снижается, получила название:",
        opts_en: ["A) Law of diminishing returns", "B) Law of demand", "C) Okun's law", "D) Law of supply", "E) Law of diminishing marginal utility"],
        opts_ru: ["A) Закон убывающей отдачи", "B) Закон спроса", "C) Закон Оукена", "D) Закон предложения", "E) Закон убывающей предельной полезности"],
        ans: "E"
    },
    {
        q_en: "The budget line graphically has the shape of:",
        q_ru: "Линия бюджетного ограничения имеет вид:",
        opts_en: ["A) Vertical line", "B) Positively sloped straight line", "C) Horizontal line", "D) Negatively sloped straight line", "E) U-shaped curve"],
        opts_ru: ["A) Вертикальной прямой", "B) Прямой с положительным наклоном", "C) Горизонтальной прямой", "D) Прямой с отрицательным наклоном", "E) Буквы «U»"],
        ans: "D"
    },
    {
        q_en: "An indifference curve graphically has the shape of:",
        q_ru: "Кривая безразличия имеет вид:",
        opts_en: ["A) Negatively sloped curve", "B) U-shape", "C) Horizontal line", "D) Vertical line", "E) Positively sloped curve"],
        opts_ru: ["A) Кривой, имеющей отрицательный наклон", "B) Буквы «U»", "C) Горизонтальной прямой", "D) Вертикальной прямой", "E) Кривой, имеющей положительный наклон"],
        ans: "A"
    },
    {
        q_en: "Profit considering both explicit and implicit costs is called:",
        q_ru: "Прибыль, которая содержит как явные, так и скрытые издержки, называется:",
        opts_en: ["A) Accounting profit", "B) Economic profit", "C) Financial profit", "D) Total profit", "E) Actual profit"],
        opts_ru: ["A) Бухгалтерской прибылью", "B) Экономической прибылью", "C) Финансовой прибылью", "D) Общей прибылью", "E) Фактической прибылью"],
        ans: "B"
    },
    {
        q_en: "Average Fixed Cost (AFC) is defined as:",
        q_ru: "Средние постоянные издержки (AFC) — это:",
        opts_en: ["A) AFC = π / Q", "B) AFC = TVC / Q", "C) AFC = TFC - TFC", "D) AFC = TFC / Q", "E) AFC = TC / Q"],
        opts_ru: ["A) AFC = π / Q", "B) AFC = TVC / Q", "C) AFC = TFC - TFC", "D) AFC = TFC / Q", "E) AFC = TC / Q"],
        ans: "D"
    },
    {
        q_en: "Average Total Cost (ATC) is defined as:",
        q_ru: "Средние общие издержки (ATC) — это:",
        opts_en: ["A) ATC = TVC / Q", "B) ATC = TC / Q", "C) ATC = π / Q", "D) ATC = TFC / Q", "E) ATC = TFC - TFC"],
        opts_ru: ["A) ATC = TVC / Q", "B) ATC = TC / Q", "C) ATC = π / Q", "D) ATC = TFC / Q", "E) ATC = TFC - TFC"],
        ans: "B"
    },
    {
        q_en: "Average Variable Cost (AVC) is defined as:",
        q_ru: "Средние переменные издержки (AVC) — это:",
        opts_en: ["A) AVC = TFC / Q", "B) AVC = π / Q", "C) AVC = TC / Q", "D) AVC = TFC - TFC", "E) AVC = TVC / Q"],
        opts_ru: ["A) AVC = TFC / Q", "B) AVC = π / Q", "C) AVC = TC / Q", "D) AVC = TFC - TFC", "E) AVC = TVC / Q"],
        ans: "E"
    },
    {
        q_en: "Marginal Cost (MC) is defined as:",
        q_ru: "Предельные издержки (MC) — это:",
        opts_en: ["A) MC = ΔTC / ΔQ", "B) MC = Δπ / ΔQ", "C) MC = ΔTFC / ΔQ", "D) MC = ΔTVC / ΔQ", "E) MC = TFC - TFC"],
        opts_ru: ["A) MC = ΔTC / ΔQ", "B) MC = Δπ / ΔQ", "C) MC = ΔTFC / ΔQ", "D) MC = ΔTVC / ΔQ", "E) MC = TFC - TFC"],
        ans: "A"
    },
    {
        q_en: "The vertical distance between ATC and AVC curves represents:",
        q_ru: "Расстояние по вертикали между кривыми ATC и AVC составляет:",
        opts_en: ["A) Marginal cost", "B) Total fixed cost", "C) Unit economic profit", "D) Average fixed cost (AFC)", "E) Total cost"],
        opts_ru: ["A) Предельные издержки", "B) Совокупные постоянные издержки", "C) Удельную экономическую прибыль", "D) Средние постоянные издержки (AFC)", "E) Общие издержки"],
        ans: "D"
    },
    {
        q_en: "Average Total Cost (ATC) equals:",
        q_ru: "Кривая ATC равна:",
        opts_en: ["A) AFC + AVC", "B) AVC - AFC", "C) MC + AVC", "D) (AFC + AVC) / Q", "E) AFC - AVC"],
        opts_ru: ["A) AFC + AVC", "B) AVC - AFC", "C) MC + AVC", "D) (AFC + AVC) / Q", "E) AFC - AVC"],
        ans: "A"
    },
    {
        q_en: "How are production costs characterized in the short run?",
        q_ru: "Чем характеризуются издержки в краткосрочном периоде?",
        opts_en: ["A) Divided into fixed and variable", "B) All costs are variable", "C) All costs are fixed", "D) Divided into fixed and marginal", "E) Identical to long-run costs"],
        opts_ru: ["A) Делятся на переменные и постоянные", "B) Все издержки переменные", "C) Все издержки постоянные", "D) Делятся на постоянные и предельные", "E) Не отличаются от издержек в долгосрочном периоде"],
        ans: "A"
    }
];

// ЧАСТЬ 2: СПРОС, ПРЕДЛОЖЕНИЕ, ЭЛАСТИЧНОСТЬ, РЫНКИ И ГРАФИКИ
const PART2_POOL = [
    {
        q_en: "Which factor causes a shift in the demand curve?",
        q_ru: "Укажите, под влиянием какого фактора происходит сдвиг кривой спроса?",
        opts_en: ["A) Production costs", "B) Technology change", "C) Price of a substitute good", "D) Price of the good itself", "E) Marginal cost change"],
        opts_ru: ["A) Изменение издержек производства", "B) Изменение технологии производства", "C) Изменение цены субститута", "D) Изменение цены данного товара", "E) Изменение предельных издержек"],
        ans: "C"
    },
    {
        q_en: "If the market price is BELOW the equilibrium price:",
        q_ru: "Если рыночная цена ниже равновесной цены, то:",
        opts_en: ["A) Surplus occurs", "B) Shortage occurs", "C) Seller profit grows", "D) Price falls", "E) Supply increases"],
        opts_ru: ["A) На рынке появляется избыток товаров", "B) На рынке возникает дефицит товаров", "C) Растет прибыль продавца", "D) Падает цена товаров", "E) Растет величина предложения"],
        ans: "B"
    },
    {
        q_en: "Specify the condition for efficient equilibrium output in a perfectly competitive market:",
        q_ru: "Укажите условие эффективного (равновесного) выпуска на совершенно конкурентном рынке:",
        opts_en: ["A) P = MR = AC", "B) P = MC", "C) P = M", "D) P > MR = MC", "E) P = MR > MC"],
        opts_ru: ["A) P = MR = AC", "B) P = MC", "C) P = M", "D) P > MR = MC", "E) P = MR > MC"],
        ans: "B"
    },
    {
        q_en: "Complementary goods are products that are:",
        q_ru: "Товарами-комплементами является товары:",
        opts_en: ["A) Substitutes for each other", "B) Usually consumed together", "C) Free goods", "D) Inferior to luxury goods", "E) All goods"],
        opts_ru: ["A) Заместители друг друга", "B) Обычно потребляемые вместе", "C) Обычно даровые блага", "D) Низшие товары к предметам роскоши", "E) Все товары"],
        ans: "B"
    },
    {
        q_en: "How is Marginal Revenue (MR) calculated?",
        q_ru: "Как определяется MR (предельный доход) от реализации продукции?",
        opts_en: ["A) MR = TR / Q", "B) MR = TC / Q", "C) MR = P * Q", "D) MR = P * 2Q", "E) MR = ΔTR / ΔQ"],
        opts_ru: ["A) MR = TR / Q", "B) MR = TC / Q", "C) MR = P * Q", "D) MR = P * 2Q", "E) MR = ΔTR / ΔQ"],
        ans: "E"
    },
    {
        q_en: "Which factor changes Quantity Demanded WITHOUT shifting the demand curve?",
        q_ru: "Укажите, какой фактор приводит к изменению величины спроса без сдвига кривой?",
        opts_en: ["A) Consumer income", "B) Consumer preferences", "C) Price expectations", "D) Presence of substitutes", "E) Change in price level of the good"],
        opts_ru: ["A) Доходы потребителей", "B) Предпочтение потребителей", "C) Ожидание покупателей будущих цен", "D) Наличие субститутов", "E) Изменение уровня цен самого товара"],
        ans: "E"
    },
    {
        q_en: "The Law of Supply (ceteris paribus) expresses:",
        q_ru: "Закон предложения (при прочих равных условиях) выражает:",
        opts_en: ["A) Inverse relation between price and quantity supplied", "B) Direct relation between price level and quantity supplied", "C) Inverse relation between price and demand", "D) Direct relation between demand and supply", "E) Direct relation between demand and income"],
        opts_ru: ["A) Обратную зависимость величины предложения от уровня цены", "B) Прямую зависимость величины предложения от уровня цен", "C) Обратную зависимость уровня цен от величины спроса", "D) Прямую зависимость величины спроса от величины предложения", "E) Прямую зависимость величины спроса от уровня дохода"],
        ans: "B"
    },
    {
        q_en: "If the market price is ABOVE the equilibrium price:",
        q_ru: "Если рыночная цена выше равновесной, то:",
        opts_en: ["A) Surplus appears on the market", "B) Shortage appears", "C) Seller profit falls", "D) Price rises", "E) Demand increases"],
        opts_ru: ["A) На рынке появляется избыток товаров", "B) На рынке возникает дефицит товаров", "C) Снижается прибыль продавца", "D) Повышается цена товаров", "E) Растет величина спроса"],
        ans: "A"
    },
    {
        q_en: "If two goods are substitutes, a price increase for the first good will cause:",
        q_ru: "Если два товара взаимозаменяемые, то рост цен на первый товар вызовет:",
        opts_en: ["A) Increase in demand for the second good", "B) Fall in demand for the second good", "C) Increase in supply for the second good", "D) Cost increase for the first good", "E) Fall in quantity demanded for the second good"],
        opts_ru: ["A) Рост спроса на второй товар", "B) Падение спроса на второй товар", "C) Увеличение объема предложения на второй товар", "D) Рост объема издержек первого товара", "E) Падение величины спроса на второй товар"],
        ans: "A"
    },
    {
        q_en: "When demand decreases, the demand curve shifts:",
        q_ru: "Если спрос падает, кривая спроса сдвигается:",
        opts_en: ["A) Leftward", "B) Clockwise", "C) Rightward", "D) Counter-clockwise", "E) Upward"],
        opts_ru: ["A) Влево", "B) По вращению часовой стрелки", "C) Вправо", "D) Против вращения часовой стрелки", "E) Вверх"],
        ans: "A"
    },
    {
        q_en: "A change in which factor will shift the demand curve for a firm's product?",
        q_ru: "Изменение какого фактора приведет к сдвигу кривой спроса на продукцию фирмы:",
        opts_en: ["A) Resource price", "B) Production costs", "C) Product price", "D) Number of buyers", "E) Technology"],
        opts_ru: ["A) Рыночная цена ресурсов", "B) Издержки производства", "C) Рыночная цена продукции фирмы", "D) Число покупателей", "E) Технология"],
        ans: "D"
    },
    {
        q_en: "Technological advancement shifts:",
        q_ru: "Совершенствование технологии сдвигает:",
        opts_en: ["A) Supply curve downward and rightward", "B) Demand curve upward and rightward", "C) Demand curve downward and leftward", "D) Supply curve upward and leftward", "E) Does not shift curves"],
        opts_ru: ["A) Кривую предложения вниз и вправо", "B) Кривую спроса вверх и вправо", "C) Кривую спроса вниз и влево", "D) Кривую предложения вверх и влево", "E) Не сдвигает линии спроса и предложения"],
        ans: "A"
    },
    {
        q_en: "The Demand Curve generally has a:",
        q_ru: "Кривая спроса имеет:",
        opts_en: ["A) Vertical shape", "B) Negative slope", "C) Horizontal shape", "D) Positive slope", "E) Parabolic shape"],
        opts_ru: ["A) Вид вертикальной прямой", "B) Отрицательный наклон", "C) Вид горизонтальной прямой", "D) Положительный наклон", "E) Вид параболы"],
        ans: "B"
    },
    {
        q_en: "Which of the following is NOT a demand factor?",
        q_ru: "К факторам спроса не относятся:",
        opts_en: ["A) Tastes", "B) Expectations", "C) Related goods prices", "D) Income", "E) Resource prices"],
        opts_ru: ["A) Вкусы", "B) Ожидания", "C) Цены на взаимосвязанные товары", "D) Доход", "E) Цена на ресурсы"],
        ans: "E"
    },
    {
        q_en: "The Supply Curve generally has a:",
        q_ru: "Кривая предложения имеет:",
        opts_en: ["A) Vertical shape", "B) Positive slope", "C) Horizontal shape", "D) Negative slope", "E) Parabolic shape"],
        opts_ru: ["A) Вид вертикальной прямой", "B) Положительный наклон", "C) Вид горизонтальной прямой", "D) Отрицательный наклон", "E) Вид параболы"],
        ans: "B"
    },
    {
        q_en: "Which of the following is NOT a supply factor?",
        q_ru: "К факторам предложения не относятся:",
        opts_en: ["A) Technology", "B) Expectations", "C) Resource prices", "D) Consumer income", "E) Price"],
        opts_ru: ["A) Технология", "B) Ожидания", "C) Цена на ресурсы", "D) Доход потребителя", "E) Цена"],
        ans: "D"
    },
    {
        q_en: "Demand for a product is considered elastic if:",
        q_ru: "Спрос на товар считается эластичным, если:",
        opts_en: ["A) % change in demand > % change in price", "B) % change in price > % change in quantity demanded", "C) % change in price causes larger % change in quantity demanded", "D) % change in demand < % change in price", "E) No correct answer"],
        opts_ru: ["A) Процентное изменение спроса вызывает значительно большее изменение цены", "B) Процентное изменение цены вызывает значительно меньшее изменение величины спроса", "C) Процентное изменение цены вызывает значительно большее изменение величины спроса", "D) Процентное изменение спроса вызывает значительно меньшее изменение цены", "E) Нет верного ответа"],
        ans: "C"
    },
    {
        q_en: "Demand for a product is considered inelastic if:",
        q_ru: "Спрос на товар считается неэластичным, если:",
        opts_en: ["A) % change in demand > % change in price", "B) % change in price causes smaller % change in quantity demanded", "C) % change in price causes larger % change in quantity demanded", "D) % change in demand < % change in price", "E) No correct answer"],
        opts_ru: ["A) Процентное изменение спроса вызывает значительно большее изменение цены", "B) Процентное изменение цены вызывает значительно меньшее изменение величины спроса", "C) Процентное изменение цены вызывает значительно большее изменение величины спроса", "D) Процентное изменение спроса вызывает значительно меньшее изменение цены", "E) Нет верного ответа"],
        ans: "B"
    },
    {
        q_en: "Perfectly inelastic demand is represented graphically as:",
        q_ru: "Совершенно неэластичный спрос будет отображаться графически в виде:",
        opts_en: ["A) Horizontal line", "B) Steep downward slope", "C) Bisector", "D) Median", "E) Vertical line"],
        opts_ru: ["A) Горизонтальной прямой", "B) Крутой нисходящей", "C) Биссектрисы", "D) Медианы", "E) Вертикальной прямой"],
        ans: "E"
    },
    {
        q_en: "Perfectly elastic demand is represented graphically as:",
        q_ru: "Совершенно эластичный спрос будет отображаться графически в виде:",
        opts_en: ["A) Horizontal line", "B) Steep downward slope", "C) Bisector", "D) Gentle downward slope", "E) Vertical line"],
        opts_ru: ["A) Горизонтальной прямой", "B) Крутой нисходящей", "C) Биссектрисы", "D) Пологой нисходящей", "E) Вертикальной прямой"],
        ans: "A"
    },
    {
        q_en: "The difference between maximum price a consumer is willing to pay and actual price paid is called:",
        q_ru: "Разница между максимальной ценой, которую потребитель готов заплатить за продукт, и его фактической ценой называется:",
        opts_en: ["A) Marginal revenue", "B) Average revenue", "C) Consumer spread", "D) Consumer surplus", "E) Marginal profit"],
        opts_ru: ["A) Предельный доход", "B) Средний доход", "C) Потребительский спред", "D) Излишек потребителя", "E) Маржинальный доход"],
        ans: "D"
    },
    {
        q_en: "The difference between actual price received by producer and minimum acceptable price is called:",
        q_ru: "Разница между фактической ценой, которую получает производитель, и минимально приемлемой для него ценой называется:",
        opts_en: ["A) Total profit", "B) Producer surplus", "C) Marginal revenue", "D) Average revenue", "E) Margin"],
        opts_ru: ["A) Совокупная прибыль", "B) Излишек производителя", "C) Предельный доход", "D) Средний доход", "E) Маржа"],
        ans: "B"
    },
    {
        q_en: "Total revenue increases uniformly when firm operates under:",
        q_ru: "Совокупный доход возрастает равномерно, когда компания работает в условиях:",
        opts_en: ["A) Pure competition", "B) Monopolistic competition", "C) Monopoly", "D) Oligopoly", "E) Duopoly"],
        opts_ru: ["A) Совершенной конкуренции", "B) Монополистической конкуренции", "C) Монополии", "D) Олигополии", "E) Дуополии"],
        ans: "A"
    },
    {
        q_en: "Perfect competition market is characterized by:",
        q_ru: "Рынок совершенной конкуренции характерен:",
        opts_en: ["A) Perfectly inelastic demand", "B) Unitary elasticity", "C) Perfectly elastic demand", "D) Elastic then inelastic demand", "E) Inelastic then elastic demand"],
        opts_ru: ["A) Совершенно неэластичным спросом", "B) Единичной эластичностью", "C) Совершенно эластичным спросом", "D) Сначала эластичным, а затем неэластичным отрезком", "E) Сначала неэластичным, а затем эластичным отрезком"],
        ans: "C"
    },
    {
        q_en: "Marginal revenue equals average revenue (MR = AR) under:",
        q_ru: "Предельные доходы фирмы равны средним доходам в условиях:",
        opts_en: ["A) Oligopoly", "B) Monopolistic competition", "C) Duopoly", "D) Pure competition", "E) Monopoly"],
        opts_ru: ["A) Олигополии", "B) Монополистической конкуренции", "C) Дуополии", "D) Совершенной конкуренции", "E) Монополии"],
        ans: "D"
    },
    {
        q_en: "A manufacturing firm maximizes profit when:",
        q_ru: "Компания, выпускающая продукцию, может максимизировать прибыль при условии:",
        opts_en: ["A) TR = TC", "B) MR = MC", "C) TR > TC", "D) MR > MC", "E) Both A and B"],
        opts_ru: ["A) TR = TC", "B) MR = MC", "C) TR > TC", "D) MR > MC", "E) Верно A и B"],
        ans: "B"
    },
    {
        q_en: "Under perfect competition, the following condition holds:",
        q_ru: "Для рынка совершенной конкуренции характерно выполнение следующего условия:",
        opts_en: ["A) P < MR", "B) P = MR", "C) P > MR", "D) P > AR", "E) P < AR"],
        opts_ru: ["A) P < MR", "B) P = MR", "C) P > MR", "D) P > AR", "E) P < AR"],
        ans: "B"
    }
];

// СЦЕНАРИИ ДЛЯ ГРАФИЧЕСКИХ ВОПРОСОВ
const GRAPH_SCENARIOS = [
    {
        type: "consumer_surplus",
        prompt_en: "Look at the market diagram. What economic concept is represented by the TOP shaded triangle (above Price Pe and below Demand curve D)?",
        prompt_ru: "Внимательно изучите график. Какая экономическая категория представлена ВЕРХНИМ затенённым треугольником (выше уровня цены Pe и ниже кривой спроса D)?",
        opts_en: ["A) Producer Surplus", "B) Consumer Surplus", "C) Deadweight Loss", "D) Total Fixed Cost", "E) Marginal Revenue"],
        opts_ru: ["A) Излишек производителя", "B) Излишек потребителя", "C) Чистые потери общества", "D) Постоянные издержки", "E) Предельный доход"],
        ans: "B"
    },
    {
        type: "producer_surplus",
        prompt_en: "Look at the market diagram. What economic concept is represented by the LOWER shaded triangle (below Price Pe and above Supply curve S)?",
        prompt_ru: "Внимательно изучите график. Какая экономическая категория представлена НИЖНИМ затенённым треугольником (ниже уровня цены Pe и выше кривой предложения S)?",
        opts_en: ["A) Consumer Surplus", "B) Producer Surplus", "C) Total Revenue", "D) Variable Costs", "E) Accounting Profit"],
        opts_ru: ["A) Излишек потребителя", "B) Излишек производителя", "C) Совокупная выручка", "D) Переменные издержки", "E) Бухгалтерская прибыль"],
        ans: "B"
    },
    {
        type: "demand_shift_right",
        prompt_en: "An increase in consumer preference shifts the blue demand curve from D1 to D2. How is this change defined?",
        prompt_ru: "Рост предпочтений покупателей сдвигает кривую спроса из D1 вправо в D2. Как классифицируется данный процесс?",
        opts_en: ["A) Increase in Demand", "B) Decrease in Demand", "C) Change in Quantity Demanded", "D) Decrease in Supply", "E) Price Reduction"],
        opts_ru: ["A) Увеличение спроса", "B) Уменьшение спроса", "C) Изменение величины спроса", "D) Уменьшение предложения", "E) Снижение цены"],
        ans: "A"
    }
];

// АЛГОРИТМ ВЫБОРКИ И ПЕРЕМЕШИВАНИЯ ДЛЯ КАЖДОГО СТУДЕНТА
function getStudentQuestions(studentIdx) {
    const pseudoRandom = (seed) => {
        let x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };

    const shuffleOpts = (qObj, seed) => {
        const letters = ["A", "B", "C", "D", "E"];
        const correctIndex = letters.indexOf(qObj.ans);
        let itemsRu = qObj.opts_ru.map(o => o.replace(/^[A-E]\)\s*/, ''));
        let itemsEn = qObj.opts_en.map(o => o.replace(/^[A-E]\)\s*/, ''));

        let indices = [0, 1, 2, 3, 4];
        for (let i = indices.length - 1; i > 0; i--) {
            let j = Math.floor(pseudoRandom(seed + i * 13) * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }

        let newRu = [], newEn = [], newAns = "A";
        indices.forEach((origIdx, newIdx) => {
            const letter = letters[newIdx];
            newRu.push(`${letter}) ${itemsRu[origIdx]}`);
            newEn.push(`${letter}) ${itemsEn[origIdx]}`);
            if (origIdx === correctIndex) newAns = letter;
        });

        return { q_en: qObj.q_en, q_ru: qObj.q_ru, opts_en: newEn, opts_ru: newRu, ans: newAns };
    };

    const getSelection = (pool, count, offset) => {
        let res = [], used = new Set(), i = 0;
        while (res.length < count) {
            let idx = Math.floor(pseudoRandom(studentIdx * 19 + offset + i * 29) * pool.length);
            if (!used.has(idx)) {
                used.add(idx);
                res.push(shuffleOpts(pool[idx], studentIdx * 100 + idx));
            }
            i++;
        }
        return res;
    };

    return {
        part1: getSelection(PART1_POOL, 4, 101), // Выбирает 4 случайных вопроса из Части 1
        part2: getSelection(PART2_POOL, 4, 202)  // Выбирает 4 случайных вопроса из Части 2
    };
}

function renderQuestionsP1P2(studentIdx, lang) {
    studentIdx = (studentIdx >= 0) ? studentIdx : 0;
    const selected = getStudentQuestions(studentIdx);

    // РЕНДЕР ЧАСТИ 1 (4 ВОПРОСА)
    const container1 = document.getElementById('part1-container');
    if (container1) {
        container1.innerHTML = '';
        selected.part1.forEach((qObj, i) => {
            const qText = lang === 'en' ? qObj.q_en : qObj.q_ru;
            const opts = lang === 'en' ? qObj.opts_en : qObj.opts_ru;

            let optionsHTML = opts.map((optText, oIdx) => {
                const letter = String.fromCharCode(65 + oIdx);
                return `
                    <label class="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:bg-slate-800/80 cursor-pointer transition text-sm text-slate-200">
                        <input type="radio" name="p1-q${i+1}" value="${letter}" data-ans="${qObj.ans}" class="mt-1 accent-indigo-500 w-4 h-4">
                        <span>${optText}</span>
                    </label>`;
            }).join('');

            container1.innerHTML += `
                <div class="card p-6 space-y-4 border-t-2 border-slate-700 hover:border-indigo-500">
                    <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">Вопрос 1.${i + 1}</span>
                    <h4 class="text-base font-bold text-slate-100">${qText}</h4>
                    <div class="space-y-2.5 pt-1">${optionsHTML}</div>
                </div>`;
        });
    }

    // РЕНДЕР ЧАСТИ 2 (4 ТЕОРЕТИЧЕСКИХ + 2 ГРАФИЧЕСКИХ ВОПРОСА = 6 ВОПРОСОВ)
    const container2 = document.getElementById('part2-container');
    if (container2) {
        container2.innerHTML = '';
        
        // 4 теоретических вопроса
        selected.part2.forEach((qObj, i) => {
            const qText = lang === 'en' ? qObj.q_en : qObj.q_ru;
            const opts = lang === 'en' ? qObj.opts_en : qObj.opts_ru;

            let optionsHTML = opts.map((optText, oIdx) => {
                const letter = String.fromCharCode(65 + oIdx);
                return `
                    <label class="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:bg-slate-800/80 cursor-pointer transition text-sm text-slate-200">
                        <input type="radio" name="p2-q${i+1}" value="${letter}" data-ans="${qObj.ans}" class="mt-1 accent-indigo-500 w-4 h-4">
                        <span>${optText}</span>
                    </label>`;
            }).join('');

            container2.innerHTML += `
                <div class="card p-6 space-y-4 border-t-2 border-slate-700 hover:border-indigo-500">
                    <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">Вопрос 2.${i + 1}</span>
                    <h4 class="text-base font-bold text-slate-100">${qText}</h4>
                    <div class="space-y-2.5 pt-1">${optionsHTML}</div>
                </div>`;
        });

        // 2 графических вопроса (2.5 и 2.6)
        [0, 1].forEach((gIdx) => {
            const sc = GRAPH_SCENARIOS[(studentIdx + gIdx) % GRAPH_SCENARIOS.length];
            const prompt = lang === 'en' ? sc.prompt_en : sc.prompt_ru;
            const opts = lang === 'en' ? sc.opts_en : sc.opts_ru;
            const qNum = 5 + gIdx;

            let graphOptionsHTML = opts.map((optText, oIdx) => {
                const letter = String.fromCharCode(65 + oIdx);
                return `
                    <label class="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:bg-slate-800/80 cursor-pointer transition text-sm text-slate-200">
                        <input type="radio" name="p2-q${qNum}" value="${letter}" data-ans="${sc.ans}" class="mt-1 accent-indigo-500 w-4 h-4">
                        <span>${optText}</span>
                    </label>`;
            }).join('');

            container2.innerHTML += `
                <div class="card p-6 space-y-4 border-t-2 border-indigo-500">
                    <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">Вопрос 2.${qNum} (Графический анализ)</span>
                    <p class="text-base font-bold text-slate-100">${prompt}</p>
                    <div class="space-y-4 pt-1">
                        <div class="bg-slate-950 p-3 rounded-xl border border-slate-800 flex justify-center shadow-inner">
                            <canvas id="marketCanvas${qNum}" width="300" height="180"></canvas>
                        </div>
                        <div class="space-y-2.5">${graphOptionsHTML}</div>
                    </div>
                </div>`;

            setTimeout(() => drawScenarioGraph(`marketCanvas${qNum}`, sc.type), 150);
        });
    }
}

// РИСОВАНИЕ ГРАФИКА НА CANVAS
function drawScenarioGraph(canvasId, type) {
    const cvs = document.getElementById(canvasId);
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    ctx.clearRect(0, 0, cvs.width, cvs.height);

    // Оси
    ctx.strokeStyle = '#64748b'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(35, 15); ctx.lineTo(35, 155); ctx.lineTo(280, 155); ctx.stroke();
    ctx.fillStyle = '#94a3b8'; ctx.font = 'bold 12px Inter';
    ctx.fillText('P', 15, 22); ctx.fillText('Q', 270, 172);

    if (type === 'consumer_surplus') {
        // Затенение верхнего треугольника (Излишек потребителя)
        ctx.fillStyle = 'rgba(59, 130, 246, 0.35)';
        ctx.beginPath(); ctx.moveTo(35, 25); ctx.lineTo(150, 90); ctx.lineTo(35, 90); ctx.closePath(); ctx.fill();

        // Спрос и Предложение
        ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(35, 25); ctx.lineTo(250, 145); ctx.stroke();
        ctx.strokeStyle = '#f43f5e'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(35, 145); ctx.lineTo(250, 25); ctx.stroke();
        
        // Линия Pe
        ctx.strokeStyle = '#e2e8f0'; ctx.lineWidth = 1.5; ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.moveTo(35, 90); ctx.lineTo(150, 90); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = '#ffffff'; ctx.fillText('Pe', 10, 94); ctx.fillText('CS', 65, 65);
    } 
    else if (type === 'producer_surplus') {
        // Затенение нижнего треугольника (Излишек производителя)
        ctx.fillStyle = 'rgba(16, 185, 129, 0.35)';
        ctx.beginPath(); ctx.moveTo(35, 145); ctx.lineTo(150, 90); ctx.lineTo(35, 90); ctx.closePath(); ctx.fill();

        // Спрос и Предложение
        ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(35, 25); ctx.lineTo(250, 145); ctx.stroke();
        ctx.strokeStyle = '#f43f5e'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(35, 145); ctx.lineTo(250, 25); ctx.stroke();
        
        // Линия Pe
        ctx.strokeStyle = '#e2e8f0'; ctx.lineWidth = 1.5; ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.moveTo(35, 90); ctx.lineTo(150, 90); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = '#ffffff'; ctx.fillText('Pe', 10, 94); ctx.fillText('PS', 65, 120);
    } 
    else { // demand_shift_right
        ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(40, 35); ctx.lineTo(180, 145); ctx.stroke();
        ctx.strokeStyle = '#60a5fa'; ctx.lineWidth = 2.5; ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(90, 35); ctx.lineTo(230, 145); ctx.stroke(); ctx.setLineDash([]);
        ctx.strokeStyle = '#f43f5e'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(50, 145); ctx.lineTo(220, 30); ctx.stroke();
        ctx.fillStyle = '#60a5fa'; ctx.fillText('D1', 185, 150); ctx.fillText('D2', 235, 150);
    }
}
