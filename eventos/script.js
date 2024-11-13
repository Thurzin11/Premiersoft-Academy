const log = document.getElementById('log');

function logEvent(elemento, fase) {
    log.innerHTML += `<div>Elemento: ${elemento} - Fase: ${fase}</div>`;
}

// Demonstração de Bubbling (terceiro parâmetro false ou omitido)
document.getElementById('filho').addEventListener('click', function() {
    logEvent('Filho', 'Bubbling');
});

document.getElementById('pai').addEventListener('click', function() {
    logEvent('Pai', 'Bubbling');
});

document.getElementById('avo').addEventListener('click', function() {
    logEvent('Avô', 'Bubbling');
});