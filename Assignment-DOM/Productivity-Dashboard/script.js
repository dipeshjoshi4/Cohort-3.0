document.addEventListener('DOMContentLoaded', () => {

    // --- STATE ENGINE WITH INTEGRATED SCORE METRICS ---
    let appState = {
        todos: JSON.parse(localStorage.getItem('glass_todos')) || [],
        goals: JSON.parse(localStorage.getItem('glass_goals')) || [],
        theme: localStorage.getItem('glass_theme') || 'dark',
        pomoCycles: parseInt(localStorage.getItem('glass_pomo_cycles')) || 0,
        totalScore: 0
    };

    // --- NAVIGATION MANAGEMENT ---
    const navButtons = document.querySelectorAll('.nav-menu .nav-btn');
    const viewSections = document.querySelectorAll('.view-viewport .view-section');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            navButtons.forEach(b => b.classList.remove('active'));
            viewSections.forEach(s => s.classList.add('hidden'));

            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.remove('hidden');
        });
    });

    // --- THEME IMPLEMENTATION (WITH ICON UPDATES) ---
    const themeBtn = document.getElementById('theme-toggle-btn');
    const applyTheme = (themeValue) => {
        document.documentElement.setAttribute('data-theme', themeValue);
        localStorage.setItem('glass_theme', themeValue);
        appState.theme = themeValue;
        themeBtn.textContent = themeValue === 'light' ? '🌙' : '☀️';
    };
    themeBtn.addEventListener('click', () => {
        applyTheme(appState.theme === 'light' ? 'dark' : 'light');
    });
    applyTheme(appState.theme);

    // --- SYSTEM TIME CLOCK ---
    function updateClock() {
        const now = new Date();
        document.getElementById('display-time').textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
        document.getElementById('display-date').textContent = now.toLocaleDateString([], {weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'});
    }
    setInterval(updateClock, 1000);
    updateClock();

    // --- INTERACTIVE PRODUCTIVITY ALGORITHM SCORE ENGINE ---
    function evaluateScore() {
        const completedTodosCount = appState.todos.filter(t => t.completed).length;
        const completedGoalsCount = appState.goals.filter(g => g.completed).length;

        appState.totalScore = (completedTodosCount * 10) + (completedGoalsCount * 20) + (appState.pomoCycles * 30);
        
        document.getElementById('total-score').textContent = appState.totalScore;
        document.getElementById('stat-completed-pomo').textContent = appState.pomoCycles;
        document.getElementById('stat-focused-time').textContent = `${appState.pomoCycles * 25}m`;
    }

    // --- TODO LIST FEATURE ---
    const todoInput = document.getElementById('todo-input');
    const todoAddBtn = document.getElementById('todo-add-btn');
    const todoListContainer = document.getElementById('todo-list');
    const todoSubmitBtn = document.getElementById('todo-submit-btn');

    function renderTodos() {
        todoListContainer.innerHTML = '';
        appState.todos.forEach((todo, idx) => {
            const li = document.createElement('li');
            if(todo.completed) li.classList.add('completed');
            li.innerHTML = `
                <span>${todo.text}</span>
                <div class="item-actions">
                    <button class="comp-btn">✓</button>
                    <button class="del-btn">✕</button>
                </div>
            `;
            li.querySelector('.comp-btn').addEventListener('click', () => { appState.todos[idx].completed = !appState.todos[idx].completed; renderTodos(); evaluateScore(); });
            li.querySelector('.del-btn').addEventListener('click', () => { appState.todos.splice(idx, 1); renderTodos(); evaluateScore(); });
            todoListContainer.appendChild(li);
        });
    }

    todoAddBtn.addEventListener('click', () => {
        if(!todoInput.value.trim()) return;
        appState.todos.push({ text: todoInput.value.trim(), completed: false });
        todoInput.value = '';
        renderTodos();
    });

    todoSubmitBtn.addEventListener('click', () => {
        localStorage.setItem('glass_todos', JSON.stringify(appState.todos));
        alert('Todo settings successfully committed to storage cloud!');
    });

    // --- DAILY GOALS FEATURE ---
    const goalInput = document.getElementById('goal-input');
    const goalAddBtn = document.getElementById('goal-add-btn');
    const goalsListContainer = document.getElementById('goals-list');
    const progressText = document.getElementById('goals-progress');
    const goalsSubmitBtn = document.getElementById('goals-submit-btn');

    function renderGoals() {
        goalsListContainer.innerHTML = '';
        let completedCount = 0;
        appState.goals.forEach((goal, idx) => {
            if(goal.completed) completedCount++;
            const li = document.createElement('li');
            if(goal.completed) li.classList.add('completed');
            li.innerHTML = `
                <span>${goal.text}</span>
                <div class="item-actions">
                    <button class="comp-goal-btn">✓</button>
                    <button class="del-goal-btn">✕</button>
                </div>
            `;
            li.querySelector('.comp-goal-btn').addEventListener('click', () => { appState.goals[idx].completed = !appState.goals[idx].completed; renderGoals(); evaluateScore(); });
            li.querySelector('.del-goal-btn').addEventListener('click', () => { appState.goals.splice(idx, 1); renderGoals(); });
            goalsListContainer.appendChild(li);
        });
        progressText.textContent = `Progress Check: ${completedCount} / ${appState.goals.length} Completed`;
    }

    goalAddBtn.addEventListener('click', () => {
        if(!goalInput.value.trim()) return;
        appState.goals.push({ text: goalInput.value.trim(), completed: false });
        goalInput.value = '';
        renderGoals();
    });

    goalsSubmitBtn.addEventListener('click', () => {
        localStorage.setItem('glass_goals', JSON.stringify(appState.goals));
        alert('Daily Targets safely synced locally!');
    });

    // --- POMODORO METRICS SYSTEM ---
    let timerInterval = null;
    let timeRemaining = 25 * 60;
    const timerDisplay = document.getElementById('timer-display');

    function updateTimerUI() {
        const mins = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
        const secs = (timeRemaining % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `${mins}:${secs}`;
    }

    document.querySelector('.start-timer').addEventListener('click', () => {
        if(timerInterval) return;
        timerInterval = setInterval(() => {
            if(timeRemaining > 0) {
                timeRemaining--;
                updateTimerUI();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                appState.pomoCycles++;
                localStorage.setItem('glass_pomo_cycles', appState.pomoCycles);
                alert('Session finalized! Work points applied to score container.');
                timeRemaining = 25 * 60;
                updateTimerUI();
                evaluateScore();
            }
        }, 1000);
    });

    document.querySelector('.pause-timer').addEventListener('click', () => {
        clearInterval(timerInterval);
        timerInterval = null;
    });

    document.querySelector('.reset-timer').addEventListener('click', () => {
        clearInterval(timerInterval);
        timerInterval = null;
        timeRemaining = 25 * 60;
        updateTimerUI();
    });

    // --- WEATHER GEOLOCATION PROVIDER ---
    function fetchWeather() {
        const tempEl = document.getElementById('weather-temp');
        const descEl = document.getElementById('weather-desc');

        navigator.geolocation.getCurrentPosition(async (pos) => {
            try {
                const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&current_weather=true`);
                const data = await response.json();
                if(data.current_weather) {
                    tempEl.textContent = `${Math.round(data.current_weather.temperature)}°C`;
                    descEl.textContent = "Clear Live Atmospheric Readings";
                }
            } catch {
                tempEl.textContent = "22°C";
                descEl.textContent = "Standard Sandbox Mode Active";
            }
        }, () => {
            tempEl.textContent = "24°C";
            descEl.textContent = "Default Location View (Permissions Denied)";
        });
    }

    // --- BACKGROUND PERSISTENT QUOTES ENGINE ---
    const quoteText = document.getElementById('ticker-quote-text');
    const quoteAuthor = document.getElementById('ticker-quote-author');
    const refreshQuoteBtn = document.getElementById('ticker-quote-refresh-btn');

    async function fetchQuote() {
        try {
            const res = await fetch('https://api.quotable.io/random');
            if(!res.ok) throw new Error();
            const data = await res.json();
            quoteText.textContent = `"${data.content}"`;
            quoteAuthor.textContent = `- ${data.author}`;
        } catch {
            const staticQuotes = [
                {c: "Focus on execution, not the dynamic loop.", a: "Tim Ferriss"},
                {c: "Action establishes momentum.", a: "Picasso"},
                {c: "Simplicity is the ultimate sophistication.", a: "Da Vinci"}
            ];
            const choice = staticQuotes[Math.floor(Math.random() * staticQuotes.length)];
            quoteText.textContent = `"${choice.c}"`;
            quoteAuthor.textContent = `- ${choice.a}`;
        }
    }

    // Manual Refresh
    refreshQuoteBtn.addEventListener('click', fetchQuote);
    
    // Constant silent automated background refresh interval (Every 30 seconds - No visible clock text)
    setInterval(fetchQuote, 30000);

    // --- APP RUNTIME STARTERS ---
    renderTodos();
    renderGoals();
    fetchWeather();
    fetchQuote();
    evaluateScore();
    updateTimerUI();
});