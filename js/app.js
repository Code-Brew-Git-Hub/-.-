/**
 * КОНТУР.ПРОФИ - Модуль профессий и тестирования
 * Управление данными профессий, поиском и профориентационным тестом
 */

/**
 * Данные IT профессий с полной информацией для карточек и модальных окон
 */
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
    // ... остальные профессии
];

// Глобальные переменные для состояния поиска
let currentSearchTerm = '';
let currentCategory = 'all';

/**
 * Менеджер поиска и фильтрации профессий
 */
class SearchManager {
    /**
     * Обработка ввода в поле поиска
     */
    static handleSearchInput() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const searchBox = document.getElementById('searchBox');
        
        // Показываем/скрываем активное состояние поиска
        searchBox.classList.toggle('active', searchTerm.length > 0);
        
        if (searchTerm.length === 0) {
            currentSearchTerm = '';
            this.filterProfessions();
        }
    }

    /**
     * Выполнение поиска по профессиям при нажатии Enter
     */
    static handleSearchKeypress(event) {
        if (event.key === 'Enter') {
            this.performSearch();
        }
    }

    /**
     * Основная функция поиска и фильтрации
     */
    static performSearch() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        currentSearchTerm = searchTerm;
        this.filterProfessions();
    }

    /**
     * Фильтрация профессий по поисковому запросу и категории
     */
    static filterProfessions() {
        const searchTerm = currentSearchTerm;
        const category = document.getElementById('categoryFilter').value;
        const cards = document.querySelectorAll('.profession-card');

        currentCategory = category;

        let visibleCount = 0;

        cards.forEach(card => {
            const title = card.querySelector('.profession-title').textContent.toLowerCase();
            const description = card.querySelector('.profession-description').textContent.toLowerCase();
            const cardCategory = card.dataset.category;
            
            // Поиск по названию, описанию и навыкам
            const matchesSearch = searchTerm === '' || 
                                title.includes(searchTerm) || 
                                description.includes(searchTerm);
            
            const matchesCategory = category === 'all' || cardCategory === category;
            
            // Показываем/скрываем карточку в зависимости от результатов фильтрации
            card.style.display = (matchesSearch && matchesCategory) ? 'block' : 'none';
            
            if (matchesSearch && matchesCategory) visibleCount++;
        });

        this.updateSearchInfo(visibleCount);
        this.toggleNoResultsMessage(visibleCount === 0);
    }

    /**
     * Обновление информации о результатах поиска
     */
    static updateSearchInfo(visibleCount) {
        const searchInfo = document.getElementById('searchInfo');
        const totalCards = document.querySelectorAll('.profession-card').length;

        if (currentSearchTerm || currentCategory !== 'all') {
            let infoText = `Найдено профессий: ${visibleCount} из ${totalCards}`;
            
            if (currentSearchTerm) {
                infoText += ` по запросу "${currentSearchTerm}"`;
            }
            
            searchInfo.innerHTML = infoText;
            searchInfo.style.display = 'block';
        } else {
            searchInfo.style.display = 'none';
        }
    }

    /**
     * Показать/скрыть сообщение об отсутствии результатов
     */
    static toggleNoResultsMessage(show) {
        const noResults = document.getElementById('noResults');
        
        if (show && !noResults) {
            const noResultsDiv = document.createElement('div');
            noResultsDiv.id = 'noResults';
            noResultsDiv.className = 'no-results';
            noResultsDiv.innerHTML = `
                <h3>Ничего не найдено</h3>
                <p>Попробуйте изменить поисковый запрос или выбрать другую категорию</p>
                <button onclick="SearchManager.clearSearch()" class="btn btn-primary">
                    Показать все профессии
                </button>
            `;
            document.getElementById('professionsGrid').after(noResultsDiv);
        } else if (!show && noResults) {
            noResults.remove();
        }
    }

    /**
     * Очистка поиска и фильтров
     */
    static clearSearch() {
        document.getElementById('searchInput').value = '';
        document.getElementById('categoryFilter').value = 'all';
        currentSearchTerm = '';
        currentCategory = 'all';
        this.filterProfessions();
        document.getElementById('searchBox').classList.remove('active');
        
        // Удаляем сообщение "Ничего не найдено"
        const noResults = document.getElementById('noResults');
        if (noResults) noResults.remove();
    }
}

/**
 * Менеджер отображения профессий
 */
class ProfessionsManager {
    /**
     * Загрузка и отображение карточек профессий
     */
    static loadProfessions() {
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
                    <button onclick="ProfessionsManager.showProfessionDetails('${profession.id}')" class="btn btn-secondary">
                        Подробнее
                    </button>
                    <button onclick="ProfessionsManager.startLearningPath('${profession.id}')" class="btn btn-primary">
                        Начать учиться
                    </button>
                </div>
            </div>
        `).join('');
    }

    /**
     * Показать детальную информацию о профессии в модальном окне
     */
    static showProfessionDetails(professionId) {
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
                    <button onclick="ProfessionsManager.startLearningPath('${profession.id}')" class="btn btn-primary">
                        Начать обучение по этой траектории
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }

    /**
     * Начать путь обучения для выбранной профессии
     */
    static startLearningPath(professionId) {
        sessionStorage.setItem('selectedProfession', professionId);
        window.location.href = 'roadmap.html';
    }
}

/**
 * Инициализация при загрузке страницы
 */
document.addEventListener('DOMContentLoaded', function() {
    // Загружаем профессии только если есть контейнер для них
    if (document.getElementById('professionsGrid')) {
        ProfessionsManager.loadProfessions();
    }
});