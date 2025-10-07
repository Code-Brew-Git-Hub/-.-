// New test questions system
const testQuestions = [
    // Блок 1: Рабочий стиль и мотивация
    {
        block: 1,
        blockName: "Рабочий стиль и мотивация",
        text: "Мне комфортнее работать по четкому, предсказуемому плану, чем в условиях неопределенности.",
        number: 1
    },
    {
        block: 1,
        blockName: "Рабочий стиль и мотивация",
        text: "Я получаю больше удовольствия от работы, когда могу глубоко сконцентрироваться на одной задаче в одиночестве.",
        number: 2
    },
    {
        block: 1,
        blockName: "Рабочий стиль и мотивация",
        text: "Для меня важнее решить интересную интеллектуальную задачу, чем увидеть быстрый визуальный результат.",
        number: 3
    },
    {
        block: 1,
        blockName: "Рабочий стиль и мотивация",
        text: "Мне нравится оптимизировать и улучшать существующие процессы, делая их более эффективными.",
        number: 4
    },
    {
        block: 1,
        blockName: "Рабочий стиль и мотивация",
        text: "Я легко переключаюсь между разными задачами и проектами в течение дня.",
        number: 5
    },
    // Блок 2: Логика и аналитическое мышление
    {
        block: 2,
        blockName: "Логика и аналитическое мышление",
        text: "Когда я сталкиваюсь с ошибкой в системе, моя первая цель — понять ее коренную причину, а не просто устранить симптом.",
        number: 6
    },
    {
        block: 2,
        blockName: "Логика и аналитическое мышление",
        text: "Я получаю удовольствие от работы с цифрами, таблицами и данными, чтобы находить в них скрытые закономерности и инсайты.",
        number: 7
    },
    {
        block: 2,
        blockName: "Логика и аналитическое мышление",
        text: "Мне проще думать о сложных системах в целом, чем продумывать мелкие детали их реализации.",
        number: 8
    },
    {
        block: 2,
        blockName: "Логика и аналитическое мышление",
        text: "При выборе технологии или решения я предпочитаю проверенные, надежные варианты, а не самые новейшие и непредсказуемые.",
        number: 9
    },
    {
        block: 2,
        blockName: "Логика и аналитическое мышление",
        text: "При принятии решений я полагаюсь на системный анализ и факты, а не на интуицию или общее впечатление.",
        number: 10
    },
    // Блок 3: Творчество и визуальное восприятие
    {
        block: 3,
        blockName: "Творчество и визуальное восприятие",
        text: "Я часто замечаю и критически оцениваю дизайн и удобство интерфейсов сайтов и приложений, которыми пользуюсь.",
        number: 11
    },
    {
        block: 3,
        blockName: "Творчество и визуальное восприятие",
        text: "Мне больше нравится придумывать общую концепцию продукта, чем заниматься детальной проработкой его элементов.",
        number: 12
    },
    {
        block: 3,
        blockName: "Творчество и визуальное восприятие",
        text: "Для меня в продукте первостепенная важность удобства и логичности, а не его внешней красоты.",
        number: 13
    },
    {
        block: 3,
        blockName: "Творчество и визуальное восприятие",
        text: "Мне комфортнее работать в рамках готовых стандартов и гайдлайнов, чем иметь полную творческую свободу.",
        number: 14
    },
    {
        block: 3,
        blockName: "Творчество и визуальное восприятие",
        text: "Я часто замечаю мелкие визуальные несоответствия (например, разные отступы, цвета, шрифты).",
        number: 15
    },
    // Блок 4: Коммуникация и управление
    {
        block: 4,
        blockName: "Коммуникация и управление",
        text: "Мне комфортно выступать перед аудиторией, отстаивать свою точку зрения и брать на себя роль лидера.",
        number: 16
    },
    {
        block: 4,
        blockName: "Коммуникация и управление",
        text: "Мне легко объяснять сложные технические вещи простыми словами людям, далеким от этой темы.",
        number: 17
    },
    {
        block: 4,
        blockName: "Коммуникация и управление",
        text: "Мне нравится организовывать рабочие процессы, расставлять приоритеты и следить за соблюдением сроков.",
        number: 18
    },
    {
        block: 4,
        blockName: "Коммуникация и управление",
        text: "Мне было бы интересно быть связующим звеном между техническими специалистами и бизнес-заказчиками.",
        number: 19
    },
    {
        block: 4,
        blockName: "Коммуникация и управление",
        text: "В ситуации конфликта в команде я стараюсь найти компромисс и восстановить рабочий процесс.",
        number: 20
    },
    // Блок 5: Технический интерес и внимание к деталям
    {
        block: 5,
        blockName: "Технический интерес и внимание к деталям",
        text: "Мне очень интересно понимать, как устроены технологии \"изнутри\", на глубоком уровне.",
        number: 21
    },
    {
        block: 5,
        blockName: "Технический интерес и внимание к деталям",
        text: "Я получаю удовольствие от тонкой настройки программ и систем, чтобы добиться их идеальной работы.",
        number: 22
    },
    {
        block: 5,
        blockName: "Технический интерес и внимание к деталям",
        text: "Я могу долго и тщательно выполнять монотонную работу, требующую высокой концентрации внимания (например, проверку кода, данных).",
        number: 23
    },
    {
        block: 5,
        blockName: "Технический интерес и внимание к деталям",
        text: "Мне интереснее работать над созданием нового продукта \"с нуля\", чем поддерживать и развивать существующий.",
        number: 24
    },
    {
        block: 5,
        blockName: "Технический интерес и внимание к деталям",
        text: "Меня больше привлекает создание внутренней логики и архитектуры системы (бэкенд), чем разработка ее пользовательского интерфейса (фронтенд).",
        number: 25
    }
];

// Career profiles mapping - РАСШИРЕННАЯ ВЕРСИЯ
const careerProfiles = {
    1: {
        title: "ВНИМАТЕЛЬНЫЙ ИСПОЛНИТЕЛЬ",
        role: "QA-инженер (тестировщик)",
        description: "Вы — главный контролер качества. Ваша внимательность к деталям и терпение помогают находить даже самые скрытые баги. Вы не позволяете команде выпустить сырой продукт, защищая репутацию компании и спокойствие пользователей.",
        characteristics: "Ценит порядок, стабильность, доводит задачи до идеала, внимателен к деталям",
        roadmap: [
            {
                stage: "🎯 СТАРТ",
                title: "Освоить теорию и практику тестирования",
                courses: [
                    "QA-инженер: основы ручного тестирования",
                    "Тест-аналитика и дизайн тест-кейсов",
                    "Багрепорты и документация"
                ]
            },
            {
                stage: "⚙️ РАЗВИТИЕ",
                title: "Погрузиться в автоматизацию",
                courses: [
                    "Основы SQL для тестировщиков",
                    "Авто-тесты на Selenium WebDriver",
                    "Тестирование API: Postman и Swagger"
                ]
            },
            {
                stage: "🚀 ТРУДОУСТРОЙСТВО",
                title: "Подготовиться к работе в команде",
                courses: [
                    "Тестирование мобильных приложений",
                    "Портфолио QA-инженера: реальные кейсы",
                    "Подготовка к собеседованию QA"
                ]
            }
        ],
        alternativeRoles: [
            "Тестировщик игр (Game QA)",
            "QA Automation Engineer",
            "Performance Test Engineer",
            "Security QA Engineer",
            "QA Team Lead"
        ]
    },
    2: {
        title: "АНАЛИТИК И КОНСТРУКТОР", 
        role: "Backend-разработчик",
        description: "Вы — мастер логики. Вам нравится создавать сложные системы, работать с алгоритмами и данными. Ваша работа — это мощный «мозг» любого приложения, который не виден пользователю, но без которого ничего не работает.",
        characteristics: "Мыслит системно, любит данные, алгоритмы и структуры",
        roadmap: [
            {
                stage: "🎯 СТАРТ", 
                title: "Освоить базовый язык и основы",
                courses: [
                    "Python/Java/C# с нуля",
                    "Основы Git для разработчика",
                    "Алгоритмы и структуры данных"
                ]
            },
            {
                stage: "⚙️ РАЗВИТИЕ",
                title: "Научиться создавать полноценные приложения", 
                courses: [
                    "Django/Spring/.NET: фреймворки разработки",
                    "Базы данных и SQL для Backend-разработки",
                    "REST API и микросервисы"
                ]
            },
            {
                stage: "🚀 ТРУДОУСТРОЙСТВО",
                title: "Прокачать скиллы для джуна",
                courses: [
                    "Проектирование систем и архитектура",
                    "Подготовка к собеседованию Backend-разработчика",
                    "Оптимизация и производительность"
                ]
            }
        ],
        alternativeRoles: [
            "Java Developer",
            "Python Developer",
            "C# .NET Developer",
            "Node.js Developer",
            "Go Developer",
            "System Architect"
        ]
    },
    3: {
        title: "ВИЗУАЛЬНЫЙ СОЗИДАТЕЛЬ",
        role: "UI/UX-дизайнер", 
        description: "Вы — голос пользователя в команде. Вы чувствуете эстетику, обращаете внимание на детали и думаете о том, как сделать продукт не только красивым, но и удобным. Вы создаете тот самый интерфейс, с которым будут взаимодействовать люди.",
        characteristics: "Внимателен к деталям, эмпатичен к пользователю, ценит эстетику и удобство",
        roadmap: [
            {
                stage: "🎯 СТАРТ",
                title: "Понять основы дизайна и освоить Figma",
                courses: [
                    "UI/UX-дизайн: от идеи к первому макету", 
                    "Figma с нуля до PRO",
                    "Основы типографики и композиции"
                ]
            },
            {
                stage: "⚙️ РАЗВИТИЕ",
                title: "Научиться создавать полные дизайн-системы",
                courses: [
                    "UX-исследования: как понять пользователя",
                    "Мобильный дизайн: платформы iOS и Android",
                    "Прототипирование и анимация интерфейсов"
                ]
            },
            {
                stage: "🚀 ТРУДОУСТРОЙСТВО", 
                title: "Собрать сильное портфолио",
                courses: [
                    "Веб-дизайн: от лендинга до сложной системы",
                    "Создание портфолио для дизайнера",
                    "Работа в продуктовой команде"
                ]
            }
        ],
        alternativeRoles: [
            "Product Designer",
            "UX Researcher",
            "Visual Designer",
            "Interaction Designer",
            "Motion Designer",
            "Design System Manager"
        ]
    },
    4: {
        title: "ОРГАНИЗАТОР И ЛИДЕР",
        role: "Project/Product Manager",
        description: "Вы — мотор и компас команды. Вы видите проект целиком, умеете расставлять приоритеты, общаться с заказчиками и мотивировать разработчиков. Вы отвечаете за то, чтобы проект был сделан в срок, в рамках бюджета и решил нужную бизнесу задачу.",
        characteristics: "Хорошо объясняет, организует процессы, мотивирует команду, видит картину целиком", 
        roadmap: [
            {
                stage: "🎯 СТАРТ",
                title: "Понять методологии и основы управления",
                courses: [
                    "Project Management: основы и Agile (Scrum, Kanban)",
                    "Инструменты менеджера: Jira, Confluence, Notion",
                    "Основы бизнес-анализа"
                ]
            },
            {
                stage: "⚙️ РАЗВИТИЕ",
                title: "Освоить работу с требованиями и командой",
                courses: [
                    "Бизнес-анализ для IT-менеджеров",
                    "Управление командой разработки",
                    "Управление продуктом (Product Management)"
                ]
            },
            {
                stage: "🚀 ТРУДОУСТРОЙСТВО",
                title: "Подготовиться к поиску работы", 
                courses: [
                    "Финансы и бюджетирование проектов",
                    "Кейсы для собеседования в IT-менеджмент",
                    "Переговоры и презентации"
                ]
            }
        ],
        alternativeRoles: [
            "Scrum Master",
            "Product Owner",
            "Program Manager",
            "Delivery Manager",
            "Business Analyst",
            "Product Lead"
        ]
    },
    5: {
        title: "ИНЖЕНЕР И ИССЛЕДОВАТЕЛЬ", 
        role: "DevOps-инженер",
        description: "Вы — гарант стабильности и качества. Вам интересно, как код становится работающим приложением, как его настроить для миллионов пользователей и как автоматизировать всё, что можно. Вы стоите на страже процессов и надежности.",
        characteristics: "Любит копаться в технологиях, настраивать, оптимизировать, обеспечивать надежность",
        roadmap: [
            {
                stage: "🎯 СТАРТ",
                title: "Получить базовые IT-навыки",
                courses: [
                    "Автоматизированное тестирование на Python",
                    "Linux для начинающих",
                    "Основы сетей и инфраструктуры"
                ]
            },
            {
                stage: "⚙️ РАЗВИТИЕ", 
                title: "Освоить ключевые DevOps-инструменты",
                courses: [
                    "Docker и Kubernetes: контейнеризация и оркестрация", 
                    "Непрерывная интеграция и доставка (CI/CD)",
                    "Инфраструктура как код (Terraform, Ansible)"
                ]
            },
            {
                stage: "🚀 ТРУДОУСТРОЙСТВО",
                title: "Углубиться в облака и инфраструктуру",
                courses: [
                    "Облачные платформы: AWS Fundamentals",
                    "Мониторинг и логирование: Prometheus, Grafana",
                    "Безопасность инфраструктуры"
                ]
            }
        ],
        alternativeRoles: [
            "Site Reliability Engineer (SRE)",
            "Cloud Engineer",
            "Infrastructure Engineer",
            "Platform Engineer",
            "DevSecOps Engineer",
            "Systems Administrator"
        ]
    }
};

// Дополнительные IT направления и профессии
const additionalITFields = {
    dataScience: {
        title: "DATA SCIENCE & AI",
        roles: [
            {
                name: "Data Scientist",
                description: "Строит модели машинного обучения для прогнозирования и анализа данных",
                skills: ["Python", "ML", "Статистика", "Pandas", "SQL"],
                level: "Средний/Старший"
            },
            {
                name: "Data Analyst", 
                description: "Анализирует данные и создает отчеты для бизнес-решений",
                skills: ["SQL", "Excel", "Tableau", "Статистика", "Визуализация"],
                level: "Начальный/Средний"
            },
            {
                name: "ML Engineer",
                description: "Разрабатывает и внедряет модели машинного обучения в production",
                skills: ["Python", "TensorFlow", "MLOps", "Docker", "AWS"],
                level: "Средний/Старший"
            },
            {
                name: "AI Researcher",
                description: "Исследует и разрабатывает новые алгоритмы искусственного интеллекта",
                skills: ["Python", "Математика", "Research", "PyTorch", "Алгоритмы"],
                level: "Старший/Эксперт"
            }
        ]
    },
    cybersecurity: {
        title: "КИБЕРБЕЗОПАСНОСТЬ",
        roles: [
            {
                name: "Security Analyst",
                description: "Мониторит и анализирует угрозы безопасности",
                skills: ["SIEM", "Сети", "Аналитика", "Incident Response", "Linux"],
                level: "Начальный/Средний"
            },
            {
                name: "Penetration Tester",
                description: "Тестирует системы на уязвимости методом этичного взлома",
                skills: ["Kali Linux", "Metasploit", "Сети", "Web Security", "Reporting"],
                level: "Средний/Старший"
            },
            {
                name: "Security Engineer",
                description: "Разрабатывает и внедряет системы безопасности",
                skills: ["Python", "Firewalls", "Cryptography", "AWS Security", "DevSecOps"],
                level: "Средний/Старший"
            }
        ]
    },
    mobile: {
        title: "МОБИЛЬНАЯ РАЗРАБОТКА",
        roles: [
            {
                name: "iOS Developer",
                description: "Разрабатывает приложения для iPhone и iPad",
                skills: ["Swift", "UIKit", "Xcode", "Core Data", "App Store"],
                level: "Начальный/Средний"
            },
            {
                name: "Android Developer",
                description: "Создает приложения для устройств на Android",
                skills: ["Kotlin", "Android SDK", "Java", "Material Design", "Google Play"],
                level: "Начальный/Средний"
            },
            {
                name: "React Native Developer",
                description: "Разрабатывает кроссплатформенные мобильные приложения",
                skills: ["JavaScript", "React", "Native Modules", "Redux", "TypeScript"],
                level: "Средний"
            },
            {
                name: "Flutter Developer",
                description: "Создает приложения для iOS и Android на одном коде",
                skills: ["Dart", "Flutter SDK", "Widgets", "Bloc", "Firebase"],
                level: "Начальный/Средний"
            }
        ]
    },
    frontend: {
        title: "FRONTEND РАЗРАБОТКА",
        roles: [
            {
                name: "Frontend Developer",
                description: "Создает пользовательские интерфейсы для веб-приложений",
                skills: ["JavaScript", "React", "HTML/CSS", "TypeScript", "Webpack"],
                level: "Начальный/Средний"
            },
            {
                name: "Frontend Architect",
                description: "Проектирует архитектуру сложных frontend-приложений",
                skills: ["Architecture", "Performance", "Micro-frontends", "SSR", "Testing"],
                level: "Старший/Эксперт"
            },
            {
                name: "Fullstack Developer",
                description: "Работает и с frontend, и с backend частями приложения",
                skills: ["JavaScript", "Node.js", "React", "Databases", "DevOps"],
                level: "Средний/Старший"
            }
        ]
    },
    gameDev: {
        title: "GAME DEVELOPMENT",
        roles: [
            {
                name: "Game Developer",
                description: "Разрабатывает игровую логику и механику",
                skills: ["C++", "Unity", "Unreal Engine", "Game Physics", "AI"],
                level: "Средний/Старший"
            },
            {
                name: "Game Designer",
                description: "Проектирует геймплей, уровни и игровые механики",
                skills: ["Design", "Balance", "Prototyping", "Narrative", "UX"],
                level: "Начальный/Средний"
            },
            {
                name: "VR/AR Developer",
                description: "Создает приложения виртуальной и дополненной реальности",
                skills: ["Unity", "3D Math", "VR SDK", "Optimization", "3D Modeling"],
                level: "Средний/Старший"
            }
        ]
    },
    blockchain: {
        title: "BLOCKCHAIN & WEB3",
        roles: [
            {
                name: "Blockchain Developer",
                description: "Разрабатывает смарт-контракты и децентрализованные приложения",
                skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "Cryptography"],
                level: "Средний/Старший"
            },
            {
                name: "Smart Contract Auditor",
                description: "Проверяет безопасность смарт-контрактов",
                skills: ["Solidity", "Security", "Testing", "DeFi", "Audit Tools"],
                level: "Старший/Эксперт"
            }
        ]
    },
    embedded: {
        title: "EMBEDDED & IOT",
        roles: [
            {
                name: "Embedded Developer",
                description: "Программирует встроенные системы и микроконтроллеры",
                skills: ["C/C++", "RTOS", "Electronics", "Debugging", "Hardware"],
                level: "Средний/Старший"
            },
            {
                name: "IoT Engineer",
                description: "Разрабатывает решения для интернета вещей",
                skills: ["Python", "MQTT", "Sensors", "Cloud IoT", "Networking"],
                level: "Средний"
            }
        ]
    }
};

// Test Management
class TestManager {
    constructor() {
        this.currentQuestionIndex = 0;
        this.answers = [];
        this.results = null;
        this.blockScores = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
        this.blockCounts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    }

    initializeTest() {
        this.showWelcomeScreen();
    }

    showWelcomeScreen() {
        const testContent = document.getElementById('testContent');
        testContent.innerHTML = `
            <div class="welcome-card">
                <div class="welcome-icon">🧩</div>
                <h2>Инструкция к тесту</h2>
                <div class="instruction">
                    <p><strong>Оцените, насколько каждое из следующих утверждений похоже на вас, по шкале от 1 до 5:</strong></p>
                    <div class="scale-info">
                        <div class="scale-item">
                            <span class="scale-number">1</span>
                            <span class="scale-label">Совсем не про меня</span>
                        </div>
                        <div class="scale-item">
                            <span class="scale-number">2</span>
                            <span class="scale-label">Скорее не про меня</span>
                        </div>
                        <div class="scale-item">
                            <span class="scale-number">3</span>
                            <span class="scale-label">Отчасти похоже, отчасти нет</span>
                        </div>
                        <div class="scale-item">
                            <span class="scale-number">4</span>
                            <span class="scale-label">Скорее про меня</span>
                        </div>
                        <div class="scale-item">
                            <span class="scale-number">5</span>
                            <span class="scale-label">Очень точно про меня</span>
                        </div>
                    </div>
                    <p class="instruction-note">Тест состоит из 25 вопросов, разделенных на 5 блоков. Отвечайте честно - это поможет получить наиболее точный результат!</p>
                </div>
                <button onclick="testManager.startTest()" class="btn btn-primary btn-hero">
                    <span class="btn-icon">🧩</span>
                    Начать тест
                </button>
            </div>
        `;
        this.updateProgress(0, 1);
    }

    startTest() {
        this.currentQuestionIndex = 0;
        this.answers = [];
        this.blockScores = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
        this.blockCounts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
        this.showQuestion();
    }

    showQuestion() {
        const question = testQuestions[this.currentQuestionIndex];
        const testContent = document.getElementById('testContent');

        testContent.innerHTML = `
            <div class="question-card">
                <div class="question-header">
                    <div class="block-indicator">Блок ${question.block}: ${question.blockName}</div>
                    <div class="question-number">Вопрос ${question.number}/25</div>
                </div>
                <h2 class="question-text">${question.text}</h2>
                <div class="rating-scale">
                    <div class="scale-labels">
                        <span>Совсем не про меня</span>
                        <span>Очень точно про меня</span>
                    </div>
                    <div class="rating-options">
                        ${[1, 2, 3, 4, 5].map(rating => `
                            <label class="rating-option">
                                <input type="radio" name="answer" value="${rating}" onchange="testManager.selectAnswer(${rating})">
                                <span class="rating-circle">${rating}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
                <div class="question-navigation">
                    <button onclick="testManager.previousQuestion()" class="btn btn-secondary" ${this.currentQuestionIndex === 0 ? 'disabled' : ''}>
                        ← Назад
                    </button>
                    <button onclick="testManager.nextQuestion()" class="btn btn-primary" id="nextButton" disabled>
                        ${this.currentQuestionIndex === testQuestions.length - 1 ? 'Завершить тест' : 'Далее →'}
                    </button>
                </div>
            </div>
        `;

        this.updateProgress(this.currentQuestionIndex + 1, question.block);
    }

    selectAnswer(rating) {
        const nextButton = document.getElementById('nextButton');
        nextButton.disabled = false;
        
        // Add visual feedback
        const options = document.querySelectorAll('.rating-option');
        options.forEach(option => {
            const input = option.querySelector('input');
            if (input.value == rating) {
                option.classList.add('selected');
            } else {
                option.classList.remove('selected');
            }
        });
    }

    nextQuestion() {
        const selectedRating = document.querySelector('input[name="answer"]:checked');
        if (!selectedRating && this.currentQuestionIndex < testQuestions.length - 1) {
            alert('Пожалуйста, выберите оценку перед переходом к следующему вопросу');
            return;
        }

        if (selectedRating) {
            const question = testQuestions[this.currentQuestionIndex];
            const rating = parseInt(selectedRating.value);
            
            this.answers.push({
                questionId: question.number,
                block: question.block,
                rating: rating
            });

            // Update block scores
            this.blockScores[question.block] += rating;
            this.blockCounts[question.block]++;
        }

        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < testQuestions.length) {
            this.showQuestion();
        } else {
            this.calculateResults();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            // Remove the last answer if exists
            if (this.answers.length > this.currentQuestionIndex - 1) {
                const lastAnswer = this.answers[this.currentQuestionIndex - 1];
                this.blockScores[lastAnswer.block] -= lastAnswer.rating;
                this.blockCounts[lastAnswer.block]--;
                this.answers.pop();
            }
            
            this.currentQuestionIndex--;
            this.showQuestion();
        }
    }

    updateProgress(current, block) {
        const progress = (current / testQuestions.length) * 100;
        document.getElementById('testProgress').style.width = `${progress}%`;
        document.getElementById('currentQuestion').textContent = current;
        document.getElementById('currentBlock').textContent = block;
    }

    calculateResults() {
        // Calculate average scores for each block
        const blockAverages = {};
        for (let block = 1; block <= 5; block++) {
            if (this.blockCounts[block] > 0) {
                blockAverages[block] = this.blockScores[block] / this.blockCounts[block];
            } else {
                blockAverages[block] = 0;
            }
        }

        // Find the block with highest average
        let maxBlock = 1;
        let maxScore = blockAverages[1];
        
        for (let block = 2; block <= 5; block++) {
            if (blockAverages[block] > maxScore) {
                maxScore = blockAverages[block];
                maxBlock = block;
            }
        }

        this.results = {
            profile: careerProfiles[maxBlock],
            blockScores: blockAverages,
            dominantBlock: maxBlock
        };

        this.showResults();
    }

    showResults() {
        const testContent = document.getElementById('testContent');
        const profile = this.results.profile;
        
        // Сортируем блоки по убыванию среднего балла
        const sortedBlocks = Object.entries(this.results.blockScores)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 3);

        const topProfiles = sortedBlocks.map(([blockNumber]) => ({
            block: parseInt(blockNumber),
            profile: careerProfiles[blockNumber],
            score: this.results.blockScores[blockNumber]
        }));

        testContent.innerHTML = `
            <div class="results-container">
                <div class="results-header">
                    <div class="success-icon">🎉</div>
                    <h1>Тест завершен!</h1>
                    <p>Ваш профессиональный профиль определен</p>
                </div>

                <!-- Основной профиль -->
                <div class="profile-card main-profile">
                    <div class="profile-header">
                        <div class="profile-badge main-badge">🏆 Основная рекомендация</div>
                        <h2>${profile.title}</h2>
                        <h3>${profile.role}</h3>
                        <div class="profile-score">
                            Совпадение: ${(this.results.blockScores[this.results.dominantBlock] * 20).toFixed(0)}%
                        </div>
                    </div>
                    
                    <div class="profile-description">
                        <p>${profile.description}</p>
                        <div class="characteristics">
                            <strong>Ключевые характеристики:</strong>
                            <p>${profile.characteristics}</p>
                        </div>
                    </div>

                    <!-- Альтернативные роли в основном направлении -->
                    <div class="alternative-roles">
                        <h4>🎯 Смежные роли в этом направлении:</h4>
                        <div class="roles-tags">
                            ${profile.alternativeRoles.map(role => `
                                <span class="role-tag">${role}</span>
                            `).join('')}
                        </div>
                    </div>

                    <div class="roadmap-section">
                        <h3>🚀 Ваша траектория развития</h3>
                        ${profile.roadmap.map(step => `
                            <div class="roadmap-step">
                                <div class="step-header">
                                    <span class="step-stage">${step.stage}</span>
                                    <h4>${step.title}</h4>
                                </div>
                                <div class="step-courses">
                                    ${step.courses.map(course => `
                                        <div class="course-item">
                                            <span class="course-icon">📚</span>
                                            <span>${course}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Альтернативные варианты -->
                ${topProfiles.length > 1 ? `
                    <div class="alternative-profiles">
                        <h3>💡 Другие подходящие варианты</h3>
                        <div class="alternative-cards">
                            ${topProfiles.slice(1).map(altProfile => `
                                <div class="alternative-card">
                                    <div class="alt-profile-header">
                                        <div class="alt-badge">#${topProfiles.indexOf(altProfile) + 1}</div>
                                        <h4>${altProfile.profile.title}</h4>
                                        <h5>${altProfile.profile.role}</h5>
                                        <div class="alt-score">
                                            Совпадение: ${(altProfile.score * 20).toFixed(0)}%
                                        </div>
                                    </div>
                                    <div class="alt-description">
                                        <p>${altProfile.profile.description}</p>
                                    </div>
                                    <div class="alt-roadmap">
                                        <strong>Быстрый старт:</strong>
                                        <div class="alt-courses">
                                            ${altProfile.profile.roadmap[0].courses.map(course => `
                                                <div class="alt-course">📚 ${course}</div>
                                            `).join('')}
                                        </div>
                                    </div>
                                    <div class="alt-skills">
                                        <strong>Смежные роли:</strong>
                                        <div class="alt-skill-tags">
                                            ${altProfile.profile.alternativeRoles.slice(0, 3).map(role => `
                                                <span class="alt-skill-tag">${role}</span>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Статистика по блокам -->
                <div class="blocks-stats">
                    <h3>📊 Результаты по блокам</h3>
                    <div class="stats-grid">
                        ${Object.entries(this.results.blockScores).map(([block, score]) => `
                            <div class="stat-block ${block == this.results.dominantBlock ? 'dominant' : ''}">
                                <div class="stat-block-header">
                                    <span class="block-name">Блок ${block}</span>
                                    <span class="block-score">${(score * 20).toFixed(0)}%</span>
                                </div>
                                <div class="stat-progress">
                                    <div class="stat-progress-bar" style="width: ${score * 20}%"></div>
                                </div>
                                <div class="block-profile">${careerProfiles[block].role}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Дополнительные IT направления -->
                <div class="additional-fields">
                    <h3>🌐 Другие перспективные IT-направления</h3>
                    <div class="fields-grid">
                        ${Object.entries(additionalITFields).map(([key, field]) => `
                            <div class="field-category" data-field="${key}">
                                <h4>${field.title}</h4>
                                <div class="field-roles">
                                    ${field.roles.map(role => `
                                        <div class="field-role">
                                            <div class="role-header">
                                                <strong>${role.name}</strong>
                                                <span class="role-level">${role.level}</span>
                                            </div>
                                            <p class="role-description">${role.description}</p>
                                            <div class="role-skills">
                                                ${role.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="results-actions">
                    <button onclick="testManager.restartTest()" class="btn btn-secondary">
                        Пройти тест снова
                    </button>
                    <button onclick="window.location.href='index.html'" class="btn btn-primary">
                        Смотреть все профессии
                    </button>
                </div>
            </div>
        `;

        this.updateProgress(100, 5);
    }

    restartTest() {
        this.currentQuestionIndex = 0;
        this.answers = [];
        this.results = null;
        this.blockScores = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
        this.blockCounts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
        this.showWelcomeScreen();
    }
}

// Initialize test manager
const testManager = new TestManager();

// Initialize test when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('testContent')) {
        testManager.initializeTest();
    }
});