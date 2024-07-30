document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light-mode';

    document.body.classList.add(currentTheme);
    themeToggleButton.textContent = currentTheme === 'light-mode' ? 'Modo Escuro' : 'Modo Claro';

    themeToggleButton.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('light-mode') ? 'dark-mode' : 'light-mode';

        document.body.classList.remove('light-mode', 'dark-mode');
        document.body.classList.add(newTheme);

        themeToggleButton.textContent = newTheme === 'light-mode' ? 'Modo Escuro' : 'Modo Claro';

        localStorage.setItem('theme', newTheme);
    });
});
