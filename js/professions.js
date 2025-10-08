// Данные всех IT направлений и профессий
const allITFields = {
    qa: {
        title: "🔍 Тестирование и QA",
        description: "Профессии, связанные с обеспечением качества программного обеспечения",
        icon: "🔍",
        roles: [
            {
                name: "QA Engineer (Тестировщик)",
                description: "Проводит ручное тестирование приложений, ищет баги и составляет отчеты",
                skills: ["Тест-кейсы", "Багрепорты", "Ручное тестирование", "Документация"],
                level: "Начальный",
                salary: "₽60,000 - ₽120,000",
                demand: "Высокая",
                roadmap: [
                    "Основы тестирования",
                    "Составление тест-кейсов", 
                    "Работа с баг-трекерами",
                    "Основы SQL и API"
                ],
                learnMoreUrl: "https://en.wikipedia.org/wiki/Test_engineer"
            },
            {
                name: "QA Automation Engineer",
                description: "Разрабатывает автоматизированные тесты для проверки функциональности приложений",
                skills: ["Selenium", "Python/Java", "TestNG/JUnit", "CI/CD", "API Testing"],
                level: "Средний",
                salary: "₽120,000 - ₽250,000",
                demand: "Очень высокая",
                roadmap: [
                    "Программирование на Python/Java",
                    "Фреймворки автоматизации",
                    "Интеграция с CI/CD",
                    "Performance testing"
                ],
                learnMoreUrl: "https://en.m.wikipedia.org/wiki/Automation_engineering"
            },
            {
                name: "Game QA Tester",
                description: "Специализируется на тестировании компьютерных игр",
                skills: ["Геймдизайн", "Баланс игрового процесса", "Платформенное тестирование", "Локализация"],
                level: "Начальный",
                salary: "₽50,000 - ₽100,000",
                demand: "Средняя",
                roadmap: [
                    "Основы геймдизайна",
                    "Тестирование игровых механик",
                    "Работа с игровыми движками",
                    "Мультиплатформенное тестирование"
                ],
                learnMoreUrl: "https://en.m.wikipedia.org/wiki/Game_testing#Game_tester"
            }
        ]
    },

    backend: {
        title: "⚙️ Backend разработка", 
        description: "Создание серверной логики, API и работа с базами данных",
        icon: "⚙️",
        roles: [
            {
                name: "Backend Developer (Python)",
                description: "Разрабатывает серверную часть приложений на Python",
                skills: ["Python", "Django/FastAPI", "PostgreSQL", "REST API", "Docker"],
                level: "Средний",
                salary: "₽120,000 - ₽300,000",
                demand: "Очень высокая",
                roadmap: [
                    "Python и фреймворки",
                    "Базы данных и SQL",
                    "REST API разработка",
                    "Микросервисная архитектура"
                ],
                learnMoreUrl: "https://blog.sf.education/backend-razrabotchik-na-python"
            },
            {
                name: "Java Backend Developer",
                description: "Создает высоконагруженные системы на Java",
                skills: ["Java", "Spring Boot", "Hibernate", "Kafka", "Kubernetes"],
                level: "Средний/Старший",
                salary: "₽150,000 - ₽400,000", 
                demand: "Высокая",
                roadmap: [
                    "Java Core и Spring",
                    "Производительность и оптимизация",
                    "System design"
                ],
                learnMoreUrl: "https://ru.ruwiki.ru/wiki/Backend-разработчик"
            },
            {
                name: "Node.js Developer",
                description: "Разрабатывает серверные приложения на JavaScript",
                skills: ["Node.js", "Express.js", "MongoDB", "WebSockets", "TypeScript"],
                level: "Средний",
                salary: "₽100,000 - ₽250,000",
                demand: "Высокая",
                roadmap: [
                    "JavaScript/TypeScript",
                    "Node.js и фреймворки",
                    "NoSQL базы данных",
                    "Real-time приложения"
                ],
                learnMoreUrl: "https://ru.ruwiki.ru/wiki/Node_js_разработчик"
            }
        ]
    },

    design: {
        title: "🎨 UI/UX Дизайн",
        description: "Создание пользовательских интерфейсов и улучшение пользовательского опыта",
        icon: "🎨",
        roles: [
            {
                name: "UI/UX Designer",
                description: "Проектирует интерфейсы, проводит исследования и создает прототипы",
                skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems"],
                level: "Начальный/Средний",
                salary: "₽80,000 - ₽200,000",
                demand: "Высокая",
                roadmap: [
                    "Основы дизайна и композиции",
                    "Работа в Figma",
                    "UX исследования",
                    "Создание дизайн-систем"
                ],
                learnMoreUrl: "https://en.wikipedia.org/wiki/User_interface_design"
            },
            {
                name: "Product Designer", 
                description: "Участвует в полном цикле разработки продукта, от идеи до реализации",
                skills: ["Product Thinking", "Data Analysis", "A/B Testing", "Stakeholder Management"],
                level: "Средний/Старший",
                salary: "₽150,000 - ₽350,000",
                demand: "Высокая",
                roadmap: [
                    "Продуктовое мышление",
                    "Аналитика и метрики",
                    "Управление продуктом",
                    "Работа с командами"
                ],
                learnMoreUrl: "https://en.wikipedia.org/wiki/Product_design"
            }
        ]
    },

    management: {
        title: "👥 Управление проектами",
        description: "Организация рабочих процессов, управление командами и проектами",
        icon: "👥",
        roles: [
            {
                name: "Project Manager",
                description: "Управляет проектами, сроками, бюджетом и командой разработки",
                skills: ["Agile/Scrum", "Jira", "Risk Management", "Team Leadership", "Communication"],
                level: "Средний",
                salary: "₽120,000 - ₽300,000",
                demand: "Высокая",
                roadmap: [
                    "Методологии управления",
                    "Инструменты PM",
                    "Управление рисками",
                    "Лидерство и коммуникации"
                ],
                learnMoreUrl: "https://en.wikipedia.org/wiki/Project_manager"
            },
            {
                name: "Product Manager",
                description: "Отвечает за развитие продукта, анализ рынка и принятие решений",
                skills: ["Product Strategy", "Market Research", "Roadmapping", "Data-Driven Decisions"],
                level: "Средний/Старший",
                salary: "₽150,000 - ₽400,000",
                demand: "Очень высокая",
                roadmap: [
                    "Стратегия продукта",
                    "Анализ рынка и конкурентов",
                    "Управление бэклогом",
                    "Работа с метриками"
                ],
                learnMoreUrl: "https://en.wikipedia.org/wiki/Product_manager"
            }
        ]
    },

    devops: {
        title: "🔧 DevOps и инфраструктура",
        description: "Автоматизация процессов разработки, развертывания и мониторинга",
        icon: "🔧",
        roles: [
            {
                name: "DevOps Engineer",
                description: "Автоматизирует процессы CI/CD, управляет инфраструктурой",
                skills: ["Docker", "Kubernetes", "AWS/GCP", "Terraform", "CI/CD"],
                level: "Средний/Старший",
                salary: "₽150,000 - ₽400,000",
                demand: "Очень высокая",
                roadmap: [
                    "Linux и сети",
                    "Контейнеризация",
                    "Облачные платформы",
                    "Инфраструктура как код"
                ],
                learnMoreUrl: "https://ru.ruwiki.ru/wiki/DevOps-инженер"
            },
            {
                name: "Site Reliability Engineer (SRE)",
                description: "Обеспечивает надежность и производительность систем",
                skills: ["Monitoring", "Incident Management", "Capacity Planning", "Performance"],
                level: "Старший",
                salary: "₽200,000 - ₽500,000",
                demand: "Высокая",
                roadmap: [
                    "Мониторинг и алертинг",
                    "Управление инцидентами",
                    "Надежность систем",
                    "Производительность"
                ],
                learnMoreUrl: "https://en.wikipedia.org/wiki/Site_reliability_engineering"
            }
        ]
    },

    dataScience: {
        title: "📊 Data Science & AI",
        description: "Работа с данными, машинное обучение и искусственный интеллект",
        icon: "📊",
        roles: [
            {
                name: "Data Scientist",
                description: "Строит модели машинного обучения для анализа и прогнозирования",
                skills: ["Python", "ML", "Statistics", "Pandas", "SQL"],
                level: "Средний/Старший",
                salary: "₽150,000 - ₽400,000",
                demand: "Очень высокая",
                roadmap: [
                    "Python для анализа данных",
                    "Статистика и математика",
                    "Библиотеки ML",
                    "Feature engineering"
                ],
                learnMoreUrl: "https://cyclowiki.org/wiki/Data_Scientist"
            },
            {
                name: "Data Analyst",
                description: "Анализирует данные и создает отчеты для бизнес-решений",
                skills: ["SQL", "Excel", "Tableau", "Statistics", "Visualization"],
                level: "Начальный/Средний",
                salary: "₽80,000 - ₽180,000",
                demand: "Высокая",
                roadmap: [
                    "SQL и базы данных",
                    "Визуализация данных",
                    "Бизнес-аналитика",
                    "Инструменты BI"
                ],
                learnMoreUrl: "https://ru.ruwiki.ru/wiki/Аналитик_данных"
            }
        ]
    },

    cybersecurity: {
        title: "🛡️ Кибербезопасность",
        description: "Защита информационных систем и данных от угроз",
        icon: "🛡️",
        roles: [
            {
                name: "Security Analyst",
                description: "Мониторит и анализирует угрозы безопасности систем",
                skills: ["SIEM", "Networking", "Analytics", "Incident Response", "Linux"],
                level: "Начальный/Средний",
                salary: "₽100,000 - ₽250,000",
                demand: "Высокая",
                roadmap: [
                    "Основы сетей и безопасности",
                    "SIEM системы",
                    "Анализ угроз",
                    "Реагирование на инциденты"
                ],
                learnMoreUrl: "https://en.wikipedia.org/wiki/Security_analysis"
            },
            {
                name: "Penetration Tester",
                description: "Тестирует системы на уязвимости методом этичного взлома",
                skills: ["Kali Linux", "Metasploit", "Networking", "Web Security", "Reporting"],
                level: "Средний/Старший",
                salary: "₽150,000 - ₽350,000",
                demand: "Высокая",
                roadmap: [
                    "Этичный хакинг",
                    "Инструменты тестирования",
                    "Веб-безопасность",
                    "Составление отчетов"
                ],
                learnMoreUrl: " https://ru.ruwiki.ru/wiki/Пентестер"
            }
        ]
    },

    mobile: {
        title: "📱 Мобильная разработка",
        description: "Создание приложений для iOS и Android устройств",
        icon: "📱",
        roles: [
            {
                name: "iOS Developer",
                description: "Разрабатывает приложения для iPhone и iPad на Swift",
                skills: ["Swift", "UIKit", "Xcode", "Core Data", "App Store"],
                level: "Начальный/Средний",
                salary: "₽120,000 - ₽300,000",
                demand: "Высокая",
                roadmap: [
                    "Swift и iOS SDK",
                    "UIKit/SwiftUI",
                    "Работа с API",
                    "Публикация в App Store"
                ],
                learnMoreUrl: "https://en.m.wikipedia.org/wiki/Apple_Developer"
            },
            {
                name: "Android Developer",
                description: "Создает приложения для устройств на Android",
                skills: ["Kotlin", "Android SDK", "Java", "Material Design", "Google Play"],
                level: "Начальный/Средний",
                salary: "₽100,000 - ₽250,000",
                demand: "Высокая",
                roadmap: [
                    "Kotlin/Java",
                    "Android SDK",
                    "Material Design",
                    "Публикация в Google Play"
                ],
                learnMoreUrl: "https://en.m.wikipedia.org/wiki/Android_software_development"
            }
        ]
    },

    frontend: {
        title: "🎨 Frontend разработка",
        description: "Создание пользовательских интерфейсов для веб-приложений",
        icon: "🎨",
        roles: [
            {
                name: "Frontend Developer",
                description: "Разрабатывает клиентскую часть веб-приложений",
                skills: ["JavaScript", "React", "HTML/CSS", "TypeScript", "Webpack"],
                level: "Начальный/Средний",
                salary: "₽100,000 - ₽250,000",
                demand: "Очень высокая",
                roadmap: [
                    "HTML/CSS/JavaScript",
                    "React/Vue/Angular",
                    "TypeScript",
                    "Сборка и оптимизация"
                ],
                learnMoreUrl: "https://en.wikipedia.org/wiki/Front-end_web_development"
            },
            {
                name: "Fullstack Developer",
                description: "Работает и с frontend, и с backend частями приложения",
                skills: ["JavaScript", "Node.js", "React", "Databases", "DevOps"],
                level: "Средний/Старший",
                salary: "₽150,000 - ₽350,000",
                demand: "Высокая",
                roadmap: [
                    "Frontend + Backend",
                    "Базы данных",
                    "Деплой и DevOps",
                    "Архитектура приложений"
                ],
                learnMoreUrl: "https://skillcrush.com/blog/front-end-back-end-full-stack"
            }
        ]
    },

    gameDev: {
        title: "🎮 Game Development",
        description: "Разработка компьютерных игр и игровых движков",
        icon: "🎮",
        roles: [
            {
                name: "Game Developer",
                description: "Разрабатывает игровую логику и механики на Unity/Unreal",
                skills: ["C++", "Unity", "Unreal Engine", "Game Physics", "AI"],
                level: "Средний/Старший",
                salary: "₽100,000 - ₽300,000",
                demand: "Средняя",
                roadmap: [
                    "Игровые движки",
                    "C++/C#",
                    "Геймдизайн",
                    "Оптимизация производительности"
                ],
                learnMoreUrl: "https://ru.wikipedia.org/wiki/Разработчик_компьютерных_игр"
            },
            {
                name: "Game Designer",
                description: "Проектирует геймплей, уровни и игровые механики",
                skills: ["Design", "Balance", "Prototyping", "Narrative", "UX"],
                level: "Начальный/Средний",
                salary: "₽80,000 - ₽200,000",
                demand: "Средняя",
                roadmap: [
                    "Основы геймдизайна",
                    "Прототипирование",
                    "Балансировка игр",
                    "Работа с нарративом"
                ],
                learnMoreUrl: "https://ru.wikipedia.org/wiki/Геймдизайнер"
            }
        ]
    },

    blockchain: {
        title: "⛓️ Blockchain & Web3",
        description: "Разработка децентрализованных приложений и смарт-контрактов",
        icon: "⛓️",
        roles: [
            {
                name: "Blockchain Developer",
                description: "Разрабатывает смарт-контракты и децентрализованные приложения",
                skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "Cryptography"],
                level: "Средний/Старший",
                salary: "₽150,000 - ₽400,000",
                demand: "Растущая",
                roadmap: [
                    "Блокчейн основы",
                    "Solidity",
                    "Смарт-контракты",
                    "DeFi и dApps"
                ],
                learnMoreUrl: "https://ru.ruwiki.ru/wiki/Блокчейн_разработчик"
            }
        ]
    },

    embedded: {
        title: "🔌 Embedded & IoT",
        description: "Программирование встроенных систем и интернета вещей",
        icon: "🔌",
        roles: [
            {
                name: "Embedded Developer",
                description: "Программирует встроенные системы и микроконтроллеры",
                skills: ["C/C++", "RTOS", "Electronics", "Debugging", "Hardware"],
                level: "Средний/Старший",
                salary: "₽100,000 - ₽250,000",
                demand: "Стабильная",
                roadmap: [
                    "C/C++ для embedded",
                    "Работа с микроконтроллерами",
                    "Real-time OS",
                    "Аппаратная отладка"
                ],
                learnMoreUrl: "https://ru.ruwiki.ru/wiki/Программист_микроконтроллеров"
            }
        ]
    }
};

// Простая функция для прокрутки вверх
function scrollToTop() {
    console.log('scrollToTop вызвана - ДОСТУПНА');
    
    // Проверяем, что функция доступна
    if (typeof window.scrollTo !== 'function') {
        console.error('window.scrollTo не доступен');
        return;
    }
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    console.log('Прокрутка запущена');
}

// Глобальная функция для прокрутки к направлению
function scrollToField(directionKey) {
    console.log('Функция scrollToField вызвана с ключом:', directionKey);
    
    // Закрываем все открытые списки профессий
    document.querySelectorAll('.direction-professions').forEach(container => {
        container.remove();
    });
    document.querySelectorAll('.show-roles-btn').forEach(btn => {
        btn.textContent = 'Показать профессии';
    });
    
    // Прокручиваем к разделу "Все IT направления"
    const allDirectionsSection = document.querySelector('.all-directions');
    console.log('Найден раздел all-directions:', allDirectionsSection);
    
    if (allDirectionsSection) {
        allDirectionsSection.scrollIntoView({ behavior: 'smooth' });
        console.log('Прокрутка выполнена');
        
        // Ждем завершения прокрутки и подсвечиваем нужное поле
        setTimeout(() => {
            const targetField = document.querySelector(`.field-category[data-field="${directionKey}"]`);
            console.log('Найдено поле:', targetField, 'по селектору:', `.field-category[data-field="${directionKey}"]`);
            
            if (targetField) {
                targetField.style.transition = 'all 0.3s ease';
                targetField.style.boxShadow = '0 0 0 3px var(--primary)';
                targetField.style.borderRadius = '1rem';
                console.log('Подсветка применена');
                
                setTimeout(() => {
                    targetField.style.boxShadow = '';
                }, 2000);
            }
        }, 800);
    }
}

// Управление отображением профессий
class ProfessionsManager {
    constructor() {
        this.init();
    }

    init() {
    this.setupLogoClick();
    this.renderAllFields();
    this.setupEventListeners();
    this.setupDirectionCards();
    }

    setupLogoClick() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Закрываем все открытые списки профессий
            document.querySelectorAll('.direction-professions').forEach(container => {
                container.remove();
            });
            document.querySelectorAll('.show-roles-btn').forEach(btn => {
                btn.textContent = 'Показать профессии';
            });
        });
    }
    }

    setupDirectionCards() {
        const directionCards = document.querySelectorAll('.direction-card');
        directionCards.forEach(card => {
            const direction = card.dataset.direction;
            const showButton = card.querySelector('.show-roles-btn');
            
            if (showButton) {
                showButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.showDirectionProfessions(direction, card);
                });
            }
        });
    }

    renderAllFields() {
        const grid = document.getElementById('allFieldsGrid');
        if (!grid) return;

        grid.innerHTML = Object.entries(allITFields).map(([key, field]) => `
            <div class="field-category" data-field="${key}">
                <div class="field-header">
                    <div class="field-icon">${field.icon}</div>
                    <h4>${field.title}</h4>
                </div>
                <p class="field-description">${field.description}</p>
                <div class="field-roles-preview">
                    ${field.roles.slice(0, 2).map(role => `
                        <div class="role-preview">
                            <strong>${role.name}</strong>
                            <span class="role-level-badge">${role.level}</span>
                        </div>
                    `).join('')}
                    ${field.roles.length > 2 ? `<div class="more-roles">+${field.roles.length - 2} еще</div>` : ''}
                </div>
                <button class="btn btn-outline show-field-details" data-field="${key}">
                    Исследовать направление
                </button>
            </div>
        `).join('');
    }

    setupEventListeners() {
        // Обработчики для кнопок показа профессий
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('show-field-details')) {
                const fieldKey = e.target.dataset.field;
                this.showFieldDetails(fieldKey);
            }
        });
    }

    showDirectionProfessions(directionKey, directionCard) {
        const field = allITFields[directionKey];
        if (!field) return;

        let professionsContainer = directionCard.querySelector('.direction-professions');
        
        if (professionsContainer) {
            professionsContainer.remove();
            directionCard.querySelector('.show-roles-btn').textContent = 'Показать профессии';
        } else {
            professionsContainer = document.createElement('div');
            professionsContainer.className = 'direction-professions';
            professionsContainer.innerHTML = `
                <div class="direction-professions-list">
                    <h5>Профессии в этом направлении:</h5>
                    <div class="professions-mini-grid">
                        ${field.roles.map(role => `
                            <div class="profession-mini-card" data-field="${directionKey}">
                                <div class="mini-card-header">
                                    <h6>${role.name}</h6>
                                    <span class="mini-level ${role.level.toLowerCase()}">${role.level}</span>
                                </div>
                                <p class="mini-description">${role.description}</p>
                                <div class="mini-meta">
                                    <span class="mini-salary">${role.salary}</span>
                                    <span class="mini-demand ${role.demand.toLowerCase()}">${role.demand}</span>
                                </div>
                                <div class="mini-skills">
                                    ${role.skills.slice(0, 3).map(skill => 
                                        `<span class="mini-skill-tag">${skill}</span>`
                                    ).join('')}
                                    ${role.skills.length > 3 ? `<span class="mini-more">+${role.skills.length - 3}</span>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            const showButton = directionCard.querySelector('.show-roles-btn');
            directionCard.appendChild(professionsContainer);
            showButton.textContent = 'Скрыть профессии';

            // Добавляем обработчики для мини-карточек
            professionsContainer.querySelectorAll('.profession-mini-card').forEach(card => {
                card.style.cursor = 'pointer';
                card.addEventListener('click', function() {
                    const fieldKey = this.dataset.field;
                    console.log('Клик по профессии направления:', fieldKey);
                    scrollToField(fieldKey);
                });
            });
        }
    }

    showFieldDetails(fieldKey) {
    const field = allITFields[fieldKey];
    const detailSection = document.getElementById('professionsDetail');
    
    if (!field || !detailSection) return;

    detailSection.innerHTML = `
        <div class="field-detail">
            <div class="detail-header">
                <div class="detail-icon">${field.icon}</div>
                <div class="detail-title">
                    <h3>${field.title}</h3>
                    <p>${field.description}</p>
                </div>
                <button class="close-detail" onclick="this.closest('.field-detail').remove()">×</button>
            </div>

            <div class="roles-detail">
                <h4>Профессии в этом направлении</h4>
                <div class="roles-grid">
                    ${field.roles.map(role => `
                        <div class="role-card">
                            <div class="role-card-header">
                                <h5>${role.name}</h5>
                                <div class="role-meta">
                                    <span class="role-level ${role.level.toLowerCase()}">${role.level}</span>
                                    <span class="role-salary">${role.salary}</span>
                                </div>
                            </div>
                            <p class="role-card-description">${role.description}</p>
                            
                            <div class="role-demand">
                                <strong>Востребованность:</strong>
                                <span class="demand-badge ${role.demand.toLowerCase()}">${role.demand}</span>
                            </div>

                            <div class="role-skills">
                                <strong>Ключевые навыки:</strong>
                                <div class="skills-tags">
                                    ${role.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                                </div>
                            </div>

                            <div class="role-roadmap">
                                <strong>Путь развития:</strong>
                                <div class="roadmap-steps">
                                    ${role.roadmap.map(step => `
                                        <div class="roadmap-step">→ ${step}</div>
                                    `).join('')}
                                </div>
                            </div>

                            <div class="role-actions">
                                <button class="btn btn-outline btn-small" onclick="window.open('${role.learnMoreUrl}', '_blank')" ${!role.learnMoreUrl || role.learnMoreUrl === 'ххх' ? 'disabled' : ''}>
                                    Изучить подробнее
                                </button>
                                <button class="btn btn-primary btn-small">Начать обучение</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    detailSection.scrollIntoView({ behavior: 'smooth' });
}

    getLearningDuration(level) {
        const durations = {
            'Начальный': '3-6 месяцев',
            'Средний': '6-12 месяцев', 
            'Старший': '1-2 года',
            'Эксперт': '2+ года'
        };
        return durations[level] || '6-12 месяцев';
    }
}

// Инициализация для главной страницы
function initializeHomePage() {
    const manager = new ProfessionsManager();
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен, инициализация...');
    
    // Инициализация главной страницы
    if (document.getElementById('allFieldsGrid')) {
        console.log('Главная страница обнаружена, инициализация...');
        initializeHomePage();
    }
});

// Делаем функцию глобально доступной
window.scrollToTop = function() {
    console.log('scrollToTop вызвана!');
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Закрываем все открытые списки профессий
    document.querySelectorAll('.direction-professions').forEach(container => {
        container.remove();
    });
    document.querySelectorAll('.show-roles-btn').forEach(btn => {
        btn.textContent = 'Показать профессии';
    });
};

// Плавная прокрутка к разделу профессий
function smoothScrollToProfessions(event) {
    event.preventDefault();
    
    const professionsSection = document.getElementById('professions');
    if (professionsSection) {
        professionsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}