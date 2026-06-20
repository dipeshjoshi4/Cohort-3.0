document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskTitleInput = document.getElementById('task-title');
    const taskCategorySelect = document.getElementById('task-category');
    const tasksListContainer = document.getElementById('tasks-list');
    const filterButtons = document.querySelectorAll('.filter-btn');

    let currentFilter = 'all';

    // Form Submit Event Handler
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = taskTitleInput.value.trim();
        const category = taskCategorySelect.value;

        if (title && category) {
            createTaskCard(title, category);
            taskForm.reset();
        }
    });

    // Core Dynamic Element Builder Module
    function createTaskCard(title, category) {
        const uniqueId = 'task_' + Date.now();

        // 1. Create the parent container card using createElement()
        const cardElement = document.createElement('div');
        cardElement.className = 'task-card';

        // 2. Set Attributes vs Properties explicitly
        // Custom data attributes for system tracking and filtering
        cardElement.setAttribute('data-id', uniqueId);
        cardElement.setAttribute('data-status', 'pending');
        cardElement.setAttribute('data-category', category);

        // Meta Elements Area
        const metaDiv = document.createElement('div');
        metaDiv.className = 'task-meta';

        // Category Badge
        const categoryBadge = document.createElement('span');
        categoryBadge.className = 'badge badge-category';
        const categoryText = document.createTextNode(category);
        categoryBadge.appendChild(categoryText);

        // Status Badge
        const statusBadge = document.createElement('span');
        statusBadge.className = 'badge badge-status';
        const statusText = document.createTextNode('⏳ Pending');
        statusBadge.appendChild(statusText);

        metaDiv.append(categoryBadge, statusBadge);

        // Main Title Content Area
        const mainDiv = document.createElement('div');
        mainDiv.className = 'task-main';
        
        const titleSpan = document.createElement('span');
        titleSpan.className = 'task-title-text';
        const titleTextNode = document.createTextNode(title);
        titleSpan.appendChild(titleTextNode);
        
        mainDiv.appendChild(titleSpan);

        // Actions / Operations Control Area
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'task-actions';

        const completeBtn = document.createElement('button');
        completeBtn.className = 'action-btn complete-btn';
        completeBtn.appendChild(document.createTextNode('Complete'));

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'action-btn delete-btn';
        deleteBtn.appendChild(document.createTextNode('Delete'));

        actionsDiv.append(completeBtn, deleteBtn);

        // Compose final element structure via appendChild & append
        cardElement.appendChild(metaDiv);
        cardElement.appendChild(mainDiv);
        cardElement.appendChild(actionsDiv);

        // Interactive Event Listeners bounded locally inside the module
        completeBtn.addEventListener('click', () => {
            const status = cardElement.getAttribute('data-status');
            if (status === 'pending') {
                cardElement.setAttribute('data-status', 'completed');
                cardElement.classList.add('completed');
                statusBadge.textContent = '✅ Completed';
                completeBtn.style.display = 'none';
            }
            applyActiveFilter();
        });

        deleteBtn.addEventListener('click', () => {
            cardElement.remove();
        });

        // Insert card seamlessly into DOM without a page reload
        tasksListContainer.appendChild(cardElement);
        applyActiveFilter();
    }

    // Interactive Filters Handling Engine
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.getAttribute('data-filter');
            applyActiveFilter();
        });
    });

    function applyActiveFilter() {
        const allCards = tasksListContainer.querySelectorAll('.task-card');
        allCards.forEach(card => {
            const status = card.getAttribute('data-status');
            if (currentFilter === 'all') {
                card.style.display = 'block';
            } else if (currentFilter === 'pending' && status === 'pending') {
                card.style.display = 'block';
            } else if (currentFilter === 'completed' && status === 'completed') {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
