// Comprehensive profession data
const professionsData = [
    {
        id: "frontend",
        title: "Frontend-разработчик",
        category: "development",
        description: "Создает пользовательские интерфейсы веб-приложений. Отвечает за внешний вид, интерактивность и производительность.",
        salary: "80,000 - 250,000 ₽",
        difficulty: "Средняя",
        skills: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Git"],
        dailyTasks: [
            "Разработка компонентов интерфейса",
            "Оптимизация производительности",
            "Адаптивная верстка",
            "Code review"
        ],
        personality: ["внимательность", "креативность", "аналитическое мышление"],
        learningPath: {
            duration: "12-18 месяцев",
            steps: [
                "Основы HTML/CSS (1-2 месяца)",
                "JavaScript и DOM (2-3 месяца)",
                "Фреймворки (React/Vue) (3-4 месяца)",
                "Продвинутые темы (2-3 месяца)",
                "Практика и проекты (4-6 месяцев)"
            ]
        }
    },
    {
        id: "backend",
        title: "Backend-разработчик",
        category: "development",
        description: "Разрабатывает серверную логику приложений. Работает с базами данных, API и бизнес-логикой.",
        salary: "90,000 - 280,000 ₽",
        difficulty: "Высокая",
        skills: ["Python/Java/C#", "SQL", "REST API", "Docker", "Linux"],
        dailyTasks: [
            "Разработка API",
            "Работа с базами данных",
            "Оптимизация запросов",
            "Деплой приложений"
        ],
        personality: ["логическое мышление", "системный подход", "внимание к деталям"],
        learningPath: {
            duration: "14-20 месяцев",
            steps: [
                "Основы программирования (2-3 месяца)",
                "Базы данных и SQL (2 месяца)",
                "Backend фреймворки (3-4 месяца)",
                "Микросервисы и DevOps (3-4 месяца)",
                "Практические проекты (4-6 месяцев)"
            ]
        }
    },
    {
        id: "data-analyst",
        title: "Data Analyst",
        category: "analytics",
        description: "Анализирует данные для принятия бизнес-решений. Строит отчеты, дашборды и выявляет закономерности.",
        salary: "70,000 - 200,000 ₽",
        difficulty: "Средняя",
        skills: ["SQL", "Python", "Excel", "Tableau", "Статистика"],
        dailyTasks: [
            "Анализ бизнес-метрик",
            "Создание отчетов",
            "Визуализация данных",
            "A/B тестирование"
        ],
        personality: ["аналитический склад ума", "любознательность", "внимание к деталям"],
        learningPath: {
            duration: "10-15 месяцев",
            steps: [
                "Основы анализа данных (2 месяца)",
                "SQL и базы данных (2 месяца)",
                "Python для анализа (3 месяца)",
                "Визуализация данных (2 месяца)",
                "Практические кейсы (3-4 месяца)"
            ]
        }
    },
    {
        id: "ux-ui designer",
        title: "UX/UI дизайнер",
        category: "design",
        description: "Создает удобные и красивые интерфейсы. Исследует потребности пользователей и проектирует взаимодействие.",
        salary: "60,000 - 220,000 ₽",
        difficulty: "Средняя",
        skills: ["Figma", "User Research", "Prototyping", "UI Design", "Usability"],
        dailyTasks: [
            "Исследование пользователей",
            "Создание прототипов",
            "Дизайн интерфейсов",
            "Тестирование usability"
        ],
        personality: ["эмпатия", "креативность", "внимание к деталям"],
        learningPath: {
            duration: "12-16 месяцев",
            steps: [
                "Основы дизайна (2 месяца)",
                "Инструменты (Figma/Sketch) (2 месяца)",
                "UX исследования (3 месяца)",
                "UI дизайн (3 месяца)",
                "Портфолио проектов (4 месяца)"
            ]
        }
    },
    {
        id: "qa-engineer",
        title: "QA Инженер",
        category: "development",
        description: "Тестирует программное обеспечение, находит ошибки и обеспечивает качество продукта.",
        salary: "50,000 - 180,000 ₽",
        difficulty: "Низкая",
        skills: ["Тест-кейсы", "Bug Tracking", "Automation", "SQL", "API Testing"],
        dailyTasks: [
            "Написание тест-кейсов",
            "Ручное тестирование",
            "Автоматизация тестов",
            "Регрессионное тестирование"
        ],
        personality: ["внимательность", "системность", "критическое мышление"],
        learningPath: {
            duration: "6-12 месяцев",
            steps: [
                "Основы тестирования (2 месяца)",
                "Тест-дизайн (2 месяца)",
                "Автоматизация (3 месяца)",
                "Инструменты тестирования (2 месяца)",
                "Практика на проектах (3 месяца)"
            ]
        }
    },
    {
        id: "product-manager",
        title: "Продуктовый менеджер",
        category: "management",
        description: "Управляет развитием продукта, определяет стратегию и приоритеты разработки.",
        salary: "120,000 - 350,000 ₽",
        difficulty: "Высокая",
        skills: ["Product Strategy", "Analytics", "Roadmapping", "Stakeholder Management", "UX"],
        dailyTasks: [
            "Анализ рынка и конкурентов",
            "Планирование релизов",
            "Работа с метриками",
            "Координация команд"
        ],
        personality: ["стратегическое мышление", "коммуникабельность", "лидерство"],
        learningPath: {
            duration: "18-24 месяца",
            steps: [
                "Основы менеджмента (3 месяца)",
                "Аналитика и метрики (3 месяца)",
                "Продуктовая стратегия (4 месяца)",
                "Управление командами (4 месяца)",
                "Практика управления продуктом (6-8 месяцев)"
            ]
        }
    }
];

// Test questions
const testQuestions = [
    {
        id: 1,
        text: "Какой тип задач вам больше нравится?",
        options: [
            { id: "1a", text: "Создавать визуально привлекательные интерфейсы", traits: ["creative", "visual"], professions: ["ux-ui designer", "frontend"] },
            { id: "1b", text: "Решать логические задачи и алгоритмы", traits: ["logical", "technical"], professions: ["backend", "qa-engineer"] },
            { id: "1c", text: "Анализировать данные и находить закономерности", traits: ["analytical", "curious"], professions: ["data-analyst"] },
            { id: "1d", text: "Организовывать процессы и работать с людьми", traits: ["organized", "communicative"], professions: ["product-manager"] }
        ]
    },
    {
        id: 2,
        text: "Как вы предпочитаете работать?",
        options: [
            { id: "2a", text: "Самостоятельно, углубляясь в детали", traits: ["focused", "independent"], professions: ["backend", "qa-engineer"] },
            { id: "2b", text: "В команде, обсуждая идеи", traits: ["collaborative", "communicative"], professions: ["frontend", "product-manager"] },
            { id: "2c", text: "Экспериментируя и пробую новое", traits: ["experimental", "creative"], professions: ["ux-ui designer", "data-analyst"] },
            { id: "2d", text: "По четкому плану и процессам", traits: ["structured", "systematic"], professions: ["qa-engineer", "data-analyst"] }
        ]
    },
    {
        id: 3,
        text: "Что для вас важнее в работе?",
        options: [
            { id: "3a", text: "Креативная реализация и самовыражение", traits: ["creative", "expressive"], professions: ["ux-ui designer", "frontend"] },
            { id: "3b", text: "Техническая сложность и вызов", traits: ["technical", "challenge-seeking"], professions: ["backend"] },
            { id: "3c", text: "Польза и практическое применение", traits: ["practical", "result-oriented"], professions: ["data-analyst", "product-manager"] },
            { id: "3d", text: "Стабильность и предсказуемость", traits: ["stable", "reliable"], professions: ["qa-engineer"] }
        ]
    },
    {
        id: 4,
        text: "Как вы учитесь новому?",
        options: [
            { id: "4a", text: "Практикуюсь на реальных проектах", traits: ["practical", "hands-on"], professions: ["frontend", "backend"] },
            { id: "4b", text: "Изучаю теорию и принципы", traits: ["theoretical", "systematic"], professions: ["data-analyst", "backend"] },
            { id: "4c", text: "Смотрю примеры и вдохновляюсь", traits: ["visual-learner", "inspired"], professions: ["ux-ui designer"] },
            { id: "4d", text: "Общаюсь с экспертами и коллегами", traits: ["social-learner", "collaborative"], professions: ["product-manager"] }
        ]
    },
    {
        id: 5,
        text: "Какой результат работы вас радует больше всего?",
        options: [
            { id: "5a", text: "Красивый и удобный интерфейс", traits: ["aesthetic", "user-focused"], professions: ["ux-ui designer", "frontend"] },
            { id: "5b", text: "Работающая и оптимизированная система", traits: ["efficient", "technical"], professions: ["backend", "qa-engineer"] },
            { id: "5c", text: "Понятная визуализация данных и инсайты", traits: ["insightful", "analytical"], professions: ["data-analyst"] },
            { id: "5d", text: "Успешный продукт и довольные пользователи", traits: ["impact-driven", "user-focused"], professions: ["product-manager"] }
        ]
    }
];

// Search functionality
let currentSearchTerm = '';
let currentCategory = 'all';

function handleSearchInput() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const searchBox = document.getElementById('searchBox');
    
    if (searchTerm.length > 0) {
        searchBox.classList.add('active');
    } else {
        searchBox.classList.remove('active');
        // Если поле пустое, сразу показываем все результаты
        currentSearchTerm = '';
        filterProfessions();
    }
}

function handleSearchKeypress(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    currentSearchTerm = searchTerm;
    filterProfessions();
    updateSearchInfo();
}

function updateSearchInfo() {
    const searchInfo = document.getElementById('searchInfo');
    const visibleCards = document.querySelectorAll('.profession-card[style=""]').length + 
                        document.querySelectorAll('.profession-card:not([style])').length;
    const totalCards = document.querySelectorAll('.profession-card').length;

    if (currentSearchTerm || currentCategory !== 'all') {
        let infoText = `Найдено профессий: ${visibleCards} из ${totalCards}`;
        
        if (currentSearchTerm) {
            infoText += ` по запросу "${currentSearchTerm}"`;
        }
        if (currentCategory !== 'all') {
            const categoryNames = {
                'development': 'Разработка',
                'analytics': 'Аналитика', 
                'design': 'Дизайн',
                'management': 'Менеджмент'
            };
            infoText += ` в категории "${categoryNames[currentCategory]}"`;
        }

        searchInfo.innerHTML = infoText;
        searchInfo.style.display = 'block';
    } else {
        searchInfo.style.display = 'none';
    }

    // Показать сообщение если ничего не найдено
    const noResults = document.getElementById('noResults');
    if (visibleCards === 0) {
        if (!noResults) {
            const noResultsDiv = document.createElement('div');
            noResultsDiv.id = 'noResults';
            noResultsDiv.className = 'no-results';
            noResultsDiv.innerHTML = `
                <h3>Ничего не найдено</h3>
                <p>Попробуйте изменить поисковый запрос или выбрать другую категорию</p>
                <button onclick="clearSearch()" class="btn btn-primary" style="margin-top: 1rem;">
                    Показать все профессии
                </button>
            `;
            document.getElementById('professionsGrid').after(noResultsDiv);
        }
    } else if (noResults) {
        noResults.remove();
    }
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = 'all';
    currentSearchTerm = '';
    currentCategory = 'all';
    filterProfessions();
    document.getElementById('searchBox').classList.remove('active');
    
    const noResults = document.getElementById('noResults');
    if (noResults) {
        noResults.remove();
    }
}

// Updated filter function
function filterProfessions() {
    const searchTerm = currentSearchTerm || document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const cards = document.querySelectorAll('.profession-card');

    currentSearchTerm = searchTerm;
    currentCategory = category;

    let visibleCount = 0;

    cards.forEach(card => {
        const title = card.querySelector('.profession-title').textContent.toLowerCase();
        const description = card.querySelector('.profession-description').textContent.toLowerCase();
        const cardCategory = card.dataset.category;
        const skills = Array.from(card.querySelectorAll('.skill-tag'))
            .map(skill => skill.textContent.toLowerCase())
            .join(' ');
        
        const matchesSearch = searchTerm === '' || 
                             title.includes(searchTerm) || 
                             description.includes(searchTerm) ||
                             skills.includes(searchTerm);
        
        const matchesCategory = category === 'all' || cardCategory === category;
        
        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    updateSearchInfo();
}

// Load professions on main page
function loadProfessions() {
    const grid = document.getElementById('professionsGrid');
    if (!grid) return;

    grid.innerHTML = professionsData.map(profession => `
        <div class="profession-card" data-category="${profession.category}">
            <div class="profession-header">
                <h3 class="profession-title">${profession.title}</h3>
            </div>
            <p class="profession-description">${profession.description}</p>
            
            <div class="profession-meta">
                <div class="salary">${profession.salary}</div>
                <div class="difficulty">Сложность: ${profession.difficulty}</div>
            </div>

            <div class="skills-preview">
                <div class="skills-title">Ключевые навыки:</div>
                <div class="skills-list">
                    ${profession.skills.map(skill => 
                        `<span class="skill-tag">${skill}</span>`
                    ).join('')}
                </div>
            </div>

            <div class="profession-actions">
                <button onclick="showProfessionDetails('${profession.id}')" class="btn btn-secondary">
                    Подробнее
                </button>
                <button onclick="startLearningPath('${profession.id}')" class="btn btn-primary">
                    Начать учиться
                </button>
            </div>
        </div>
    `).join('');
}

// Show profession details
function showProfessionDetails(professionId) {
    const profession = professionsData.find(p => p.id === professionId);
    if (!profession) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${profession.title}</h2>
                <button onclick="this.closest('.modal').remove()" class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <p><strong>Описание:</strong> ${profession.description}</p>
                <p><strong>Зарплата:</strong> ${profession.salary}</p>
                <p><strong>Сложность:</strong> ${profession.difficulty}</p>
                
                <div class="section">
                    <h3>Ключевые навыки</h3>
                    <div class="skills-list">
                        ${profession.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>

                <div class="section">
                    <h3>Типовые задачи</h3>
                    <ul>
                        ${profession.dailyTasks.map(task => `<li>${task}</li>`).join('')}
                    </ul>
                </div>

                <div class="section">
                    <h3>Траектория обучения</h3>
                    <p><strong>Длительность:</strong> ${profession.learningPath.duration}</p>
                    <ol>
                        ${profession.learningPath.steps.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
            </div>
            <div class="modal-footer">
                <button onclick="startLearningPath('${profession.id}')" class="btn btn-primary">
                    Начать обучение по этой траектории
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add modal styles
    if (!document.querySelector('#modal-styles')) {
        const styles = document.createElement('style');
        styles.id = 'modal-styles';
        styles.textContent = `
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            }
            .modal-content {
                background: white;
                border-radius: 1rem;
                padding: 2rem;
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
            }
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
            }
            .close-btn {
                background: none;
                border: none;
                font-size: 2rem;
                cursor: pointer;
                color: var(--text-light);
            }
            .section {
                margin: 1.5rem 0;
            }
            .section h3 {
                margin-bottom: 0.5rem;
            }
            .modal-footer {
                margin-top: 2rem;
                text-align: center;
            }
        `;
        document.head.appendChild(styles);
    }
}

// Start learning path
function startLearningPath(professionId) {
    sessionStorage.setItem('selectedProfession', professionId);
    window.location.href = 'roadmap.html';
}

// Navigation function
function goToHome() {
    window.location.href = 'index.html';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('professionsGrid')) {
        loadProfessions();
    }
});