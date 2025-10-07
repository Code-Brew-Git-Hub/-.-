// Roadmap Management
class RoadmapManager {
    constructor() {
        this.selectedProfession = null;
        this.learningPath = null;
    }

    initializeRoadmap() {
        const professionId = sessionStorage.getItem('selectedProfession') || 'frontend';
        this.loadRoadmap(professionId);
    }

    loadRoadmap(professionId) {
        this.selectedProfession = professionsData.find(p => p.id === professionId);
        this.learningPath = learningPaths[professionId];

        if (!this.selectedProfession || !this.learningPath) {
            this.showProfessionSelection();
            return;
        }

        this.renderRoadmap();
    }

    renderRoadmap() {
        const container = document.getElementById('roadmapContainer');
        
        container.innerHTML = `
            <div class="roadmap-container">
                <div class="roadmap-header">
                    <div class="profession-info">
                        <h1>Траектория обучения: ${this.selectedProfession.title}</h1>
                        <p class="profession-description">${this.selectedProfession.description}</p>
                        
                        <div class="roadmap-meta">
                            <div class="meta-item">
                                <span class="meta-icon">⏱️</span>
                                <span>Общее время: ${this.learningPath.estimatedTime}</span>
                            </div>
                            <div class="meta-item">
                                <span class="meta-icon">🎯</span>
                                <span>Уровень: Junior → Middle</span>
                            </div>
                            <div class="meta-item">
                                <span class="meta-icon">💰</span>
                                <span>Зарплата: ${this.selectedProfession.salaryRange.min.toLocaleString()}₽ - ${this.selectedProfession.salaryRange.max.toLocaleString()}₽</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="learning-path">
                    ${this.learningPath.steps.map((step, index) => `
                        <div class="path-step ${index === 0 ? 'current' : ''}">
                            <div class="step-header">
                                <div class="step-number">${index + 1}</div>
                                <div class="step-info">
                                    <h3>${step.stage}</h3>
                                    <div class="step-duration">${step.duration}</div>
                                </div>
                            </div>
                            
                            <div class="step-content">
                                <div class="topics-list">
                                    <h4>Темы для изучения:</h4>
                                    <ul>
                                        ${step.topics.map(topic => `<li>${topic}</li>`).join('')}
                                    </ul>
                                </div>
                                
                                <div class="resources-list">
                                    <h4>Ресурсы и материалы:</h4>
                                    <div class="resources-grid">
                                        ${step.resources.map(resource => `
                                            <div class="resource-card ${resource.type}">
                                                <div class="resource-icon">
                                                    ${this.getResourceIcon(resource.type)}
                                                </div>
                                                <div class="resource-info">
                                                    <div class="resource-name">${resource.name}</div>
                                                    <div class="resource-type">${this.getResourceTypeName(resource.type)}</div>
                                                </div>
                                                <button class="resource-action" onclick="roadmapManager.openResource('${resource.url}')">
                                                    Открыть →
                                                </button>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="career-growth">
                    <h2>Карьерный рост</h2>
                    <div class="growth-timeline">
                        ${Object.entries(this.selectedProfession.growthPath).map(([level, time]) => `
                            <div class="growth-stage">
                                <div class="stage-level">${this.getLevelDisplayName(level)}</div>
                                <div class="stage-time">${time}</div>
                                <div class="stage-description">
                                    ${this.getLevelDescription(level, this.selectedProfession.title)}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="skills-mastery">
                    <h2>Освоение навыков</h2>
                    <div class="skills-roadmap">
                        ${this.selectedProfession.skills.map(skill => `
                            <div class="skill-roadmap-item">
                                <div class="skill-info">
                                    <span class="skill-name">${skill.name}</span>
                                    <span class="skill-importance ${skill.importance}">
                                        ${this.getImportanceName(skill.importance)}
                                    </span>
                                </div>
                                <div class="skill-progress">
                                    <div class="progress-track">
                                        ${this.learningPath.steps.map((step, index) => `
                                            <div class="progress-milestone ${this.getSkillMilestone(skill, index)}" 
                                                 title="${step.stage}">
                                                ${index + 1}
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="roadmap-actions">
                    <button onclick="window.location.href='test.html'" class="btn btn-secondary">
                        Пройти тест заново
                    </button>
                    <button onclick="window.print()" class="btn btn-outline">
                        📄 Сохранить план
                    </button>
                    <button onclick="roadmapManager.startLearning()" class="btn btn-primary">
                        🚀 Начать обучение
                    </button>
                </div>
            </div>
        `;
    }

    getResourceIcon(type) {
        const icons = {
            'course': '📚',
            'tutorial': '🎬',
            'book': '📖',
            'challenge': '🏆',
            'docs': '📋',
            'internship': '💼',
            'practice': '🔧'
        };
        return icons[type] || '📄';
    }

    getResourceTypeName(type) {
        const names = {
            'course': 'Онлайн-курс',
            'tutorial': 'Видеоурок',
            'book': 'Книга',
            'challenge': 'Практика',
            'docs': 'Документация',
            'internship': 'Стажировка',
            'practice': 'Проект'
        };
        return names[type] || type;
    }

    getLevelDisplayName(level) {
        const names = {
            'junior': 'Junior',
            'middle': 'Middle',
            'senior': 'Senior',
            'lead': 'Team Lead'
        };
        return names[level] || level;
    }

    getLevelDescription(level, profession) {
        const descriptions = {
            'junior': `Начальный уровень. Изучение основ ${profession}, работа с ментором.`,
            'middle': `Самостоятельная работа над задачами, углубление специализации.`,
            'senior': `Эксперт в области, наставничество, архитектурные решения.`,
            'lead': `Управление командой, планирование проектов, техническое лидерство.`
        };
        return descriptions[level] || '';
    }

    getImportanceName(importance) {
        const names = {
            'critical': 'Критический',
            'important': 'Важный',
            'nice-to-have': 'Дополнительный'
        };
        return names[importance] || importance;
    }

    getSkillMilestone(skill, stepIndex) {
        // Простая логика прогресса навыков по этапам
        if (stepIndex === 0 && skill.importance === 'critical') return 'completed';
        if (stepIndex <= 1 && skill.importance === 'important') return 'completed';
        if (stepIndex <= 2) return 'in-progress';
        return 'planned';
    }

    openResource(url) {
        if (url && url !== '#') {
            window.open(url, '_blank');
        } else {
            alert('Ресурс находится в разработке. Скоро будет доступен!');
        }
    }

    startLearning() {
        alert('Отличный выбор! Рекомендуем начать с первого этапа обучения.');
        // Здесь можно добавить интеграцию с системой обучения
    }

    showProfessionSelection() {
        const container = document.getElementById('roadmapContainer');
        container.innerHTML = `
            <div class="profession-selection">
                <h2>Выберите профессию для построения траектории</h2>
                <div class="selection-grid">
                    ${professionsData.map(profession => `
                        <div class="profession-option" onclick="roadmapManager.loadRoadmap('${profession.id}')">
                            <h3>${profession.title}</h3>
                            <p>${profession.description}</p>
                            <div class="salary">${profession.salaryRange.min.toLocaleString()}₽ - ${profession.salaryRange.max.toLocaleString()}₽</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

// Initialize roadmap manager
const roadmapManager = new RoadmapManager();

// Initialize roadmap when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('roadmapContainer')) {
        roadmapManager.initializeRoadmap();
    }
});

// Learning resources database
const learningResources = {
    "frontend": [
        {
            stage: "Основы",
            resources: [
                { name: "HTML Academy", type: "course", url: "#", description: "Интерактивный курс по HTML и CSS" },
                { name: "freeCodeCamp", type: "course", url: "#", description: "Бесплатный курс веб-разработки" },
                { name: "MDN Web Docs", type: "docs", url: "#", description: "Документация по веб-технологиям" }
            ]
        },
        {
            stage: "JavaScript",
            resources: [
                { name: "JavaScript.info", type: "tutorial", url: "#", description: "Современный учебник JavaScript" },
                { name: "You Don't Know JS", type: "book", url: "#", description: "Серия книг о JavaScript" },
                { name: "JavaScript30", type: "practice", url: "#", description: "30 дней практики JavaScript" }
            ]
        },
        {
            stage: "Фреймворки",
            resources: [
                { name: "React Official Tutorial", type: "tutorial", url: "#", description: "Официальное руководство React" },
                { name: "Vue.js Guide", type: "docs", url: "#", description: "Документация Vue.js" },
                { name: "React Practice Projects", type: "practice", url: "#", description: "Практические проекты на React" }
            ]
        }
    ],
    "backend": [
        {
            stage: "Основы программирования",
            resources: [
                { name: "Python для начинающих", type: "course", url: "#", description: "Базовый курс программирования" },
                { name: "Java Basics", type: "course", url: "#", description: "Основы Java программирования" },
                { name: "C# Fundamentals", type: "course", url: "#", description: "Фундаментальные знания C#" }
            ]
        },
        {
            stage: "Базы данных",
            resources: [
                { name: "SQL для начинающих", type: "course", url: "#", description: "Основы работы с SQL" },
                { name: "Database Design", type: "course", url: "#", description: "Проектирование баз данных" },
                { name: "MongoDB University", type: "course", url: "#", description: "Курсы по NoSQL базам данных" }
            ]
        }
    ],
    "data-analyst": [
        {
            stage: "Основы анализа",
            resources: [
                { name: "SQL для анализа данных", type: "course", url: "#", description: "Продвинутый SQL для аналитиков" },
                { name: "Python для анализа данных", type: "course", url: "#", description: "Pandas и NumPy" },
                { name: "Статистика для аналитиков", type: "course", url: "#", description: "Основы статистики" }
            ]
        }
    ],
    "ux-ui designer": [
        {
            stage: "Основы дизайна",
            resources: [
                { name: "Figma Basics", type: "course", url: "#", description: "Основы работы в Figma" },
                { name: "UI Design Principles", type: "course", url: "#", description: "Принципы дизайна интерфейсов" },
                { name: "Color Theory", type: "course", url: "#", description: "Теория цвета в дизайне" }
            ]
        }
    ],
    "qa-engineer": [
        {
            stage: "Основы тестирования",
            resources: [
                { name: "Software Testing Fundamentals", type: "course", url: "#", description: "Основы тестирования ПО" },
                { name: "Test Design Techniques", type: "course", url: "#", description: "Техники тест-дизайна" },
                { name: "Bug Tracking Systems", type: "course", url: "#", description: "Работа с системами баг-трекинга" }
            ]
        }
    ],
    "product-manager": [
        {
            stage: "Основы менеджмента",
            resources: [
                { name: "Product Management 101", type: "course", url: "#", description: "Основы продуктового менеджмента" },
                { name: "Agile Methodology", type: "course", url: "#", description: "Гибкие методологии разработки" },
                { name: "Stakeholder Management", type: "course", url: "#", description: "Управление стейкхолдерами" }
            ]
        }
    ]
};

// Roadmap Manager
class RoadmapManager {
    constructor() {
        this.selectedProfession = null;
    }

    initializeRoadmap() {
        const professionId = sessionStorage.getItem('selectedProfession');
        
        if (!professionId) {
            this.showProfessionSelection();
            return;
        }

        this.loadRoadmap(professionId);
    }

    loadRoadmap(professionId) {
        this.selectedProfession = professionsData.find(p => p.id === professionId);
        
        if (!this.selectedProfession) {
            this.showProfessionSelection();
            return;
        }

        this.renderRoadmap();
    }

    renderRoadmap() {
        const roadmapContent = document.getElementById('roadmapContent');
        const resources = learningResources[this.selectedProfession.id] || [];

        roadmapContent.innerHTML = `
            <div class="roadmap-header">
                <h1>Траектория обучения: ${this.selectedProfession.title}</h1>
                <p class="profession-description">${this.selectedProfession.description}</p>
                
                <div class="roadmap-summary">
                    <div class="summary-item">
                        <strong>Длительность:</strong> ${this.selectedProfession.learningPath.duration}
                    </div>
                    <div class="summary-item">
                        <strong>Уровень сложности:</strong> ${this.selectedProfession.difficulty}
                    </div>
                    <div class="summary-item">
                        <strong>Перспективы зарплаты:</strong> ${this.selectedProfession.salary}
                    </div>
                </div>
            </div>

            <div class="learning-path-detailed">
                <h2>Пошаговый план обучения</h2>
                
                ${this.selectedProfession.learningPath.steps.map((step, index) => `
                    <div class="path-step">
                        <div class="step-header">
                            <div class="step-number">${index + 1}</div>
                            <div class="step-info">
                                <h3>${step}</h3>
                            </div>
                        </div>
                        
                        ${resources[index] ? `
                            <div class="step-resources">
                                <h4>Рекомендуемые ресурсы:</h4>
                                <div class="resources-grid">
                                    ${resources[index].resources.map(resource => `
                                        <div class="resource-card">
                                            <div class="resource-type ${resource.type}">
                                                ${this.getResourceTypeIcon(resource.type)}
                                            </div>
                                            <div class="resource-content">
                                                <div class="resource-name">${resource.name}</div>
                                                <div class="resource-description">${resource.description}</div>
                                            </div>
                                            <button class="resource-action" onclick="roadmapManager.openResource('${resource.url}')">
                                                Изучать →
                                            </button>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>

            <div class="career-advice">
                <h2>Советы по развитию карьеры</h2>
                <div class="advice-grid">
                    <div class="advice-card">
                        <h3>🛠️ Практика</h3>
                        <p>Создавайте реальные проекты для портфолио. Начните с небольших задач и постепенно усложняйте.</p>
                    </div>
                    <div class="advice-card">
                        <h3>👥 Сообщество</h3>
                        <p>Присоединяйтесь к IT-сообществам, участвуйте в обсуждениях и находите менторов.</p>
                    </div>
                    <div class="advice-card">
                        <h3>📚 Непрерывное обучение</h3>
                        <p>IT-индустрия быстро меняется. Регулярно изучайте новые технологии и подходы.</p>
                    </div>
                    <div class="advice-card">
                        <h3>🎯 Целеустремленность</h3>
                        <p>Ставьте конкретные цели на каждый этап обучения и отслеживайте прогресс.</p>
                    </div>
                </div>
            </div>

            <div class="next-steps">
                <h2>Следующие шаги</h2>
                <div class="steps-list">
                    <div class="step-item">
                        <strong>1. Начните с основ</strong>
                        <p>Изучите первые 2 этапа траектории и выполните практические задания</p>
                    </div>
                    <div class="step-item">
                        <strong>2. Создайте первый проект</strong>
                        <p>Примените полученные знания в реальном проекте для портфолио</p>
                    </div>
                    <div class="step-item">
                        <strong>3. Найдите стажировку</strong>
                        <p>После освоения основных тем начните искать возможности для стажировки</p>
                    </div>
                    <div class="step-item">
                        <strong>4. Продолжайте развиваться</strong>
                        <p>Осваивайте продвинутые темы и специализируйтесь в выбранном направлении</p>
                    </div>
                </div>
            </div>

            <div class="roadmap-actions">
                <button onclick="window.location.href='test.html'" class="btn btn-secondary">
                    Пройти тест заново
                </button>
                <button onclick="window.location.href='index.html'" class="btn btn-secondary">
                    Смотреть другие профессии
                </button>
                <button onclick="roadmapManager.startLearning()" class="btn btn-primary">
                    Начать обучение
                </button>
            </div>
        `;
    }

    getResourceTypeIcon(type) {
        const icons = {
            'course': '📚',
            'tutorial': '🎬', 
            'book': '📖',
            'docs': '📋',
            'practice': '🔧'
        };
        return icons[type] || '📄';
    }

    openResource(url) {
        if (url && url !== '#') {
            window.open(url, '_blank');
        } else {
            alert('Ресурс скоро будет доступен! Следите за обновлениями.');
        }
    }

    startLearning() {
        const firstStep = this.selectedProfession.learningPath.steps[0];
        alert(`Отличный выбор! Рекомендуем начать с этапа: "${firstStep}"`);
        
        // Здесь можно добавить интеграцию с системой обучения
        // Например, открыть первый рекомендованный ресурс
        const resources = learningResources[this.selectedProfession.id];
        if (resources && resources[0] && resources[0].resources[0]) {
            this.openResource(resources[0].resources[0].url);
        }
    }

    showProfessionSelection() {
        const roadmapContent = document.getElementById('roadmapContent');
        
        roadmapContent.innerHTML = `
            <div class="profession-selection">
                <h1>Выберите профессию для построения траектории</h1>
                <p>Или пройдите тест для получения персональных рекомендаций</p>
                
                <div class="selection-grid">
                    ${professionsData.map(profession => `
                        <div class="profession-option" onclick="roadmapManager.loadRoadmap('${profession.id}')">
                            <h3>${profession.title}</h3>
                            <p>${profession.description}</p>
                            <div class="profession-meta">
                                <span class="salary">${profession.salary}</span>
                                <span class="duration">${profession.learningPath.duration}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div style="text-align: center; margin-top: 2rem;">
                    <button onclick="window.location.href='test.html'" class="btn btn-primary btn-large">
                        Пройти тест для персональных рекомендаций
                    </button>
                </div>
            </div>
        `;
    }
}

// Initialize roadmap manager
const roadmapManager = new RoadmapManager();

// Initialize roadmap when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('roadmapContent')) {
        roadmapManager.initializeRoadmap();
    }
});