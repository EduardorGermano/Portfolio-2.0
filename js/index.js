function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    if (currentTheme === 'dark') {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        document.getElementById('theme-toggle').textContent = 'Modo Escuro'; // Atualiza o texto
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        document.getElementById('theme-toggle').textContent = 'Modo Claro'; // Atualiza o texto
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').textContent = 'Modo Claro'; // Atualiza o texto ao carregar
    } else {
        document.body.classList.add('light-mode');
        document.getElementById('theme-toggle').textContent = 'Modo Escuro'; // Atualiza o texto ao carregar
    }
});

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);