// Seleciona elementos do HTML
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button[data-num], button[data-op]');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

// Clique nos números e operadores
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        display.value += btn.dataset.num || btn.dataset.op;

        // Cores dinâmicas do display
        const cores = ['#e0f7fa','#b2ebf2','#80deea','#4dd0e1'];
        display.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
    });
});

// Limpar display
clear.addEventListener('click', () => {
    display.value = '';
});

// Calcular resultado
equals.addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Erro';
    }
});