window.addEventListener('mousemove', (e) => {
    const x = Math.round((e.clientX / window.innerWidth) * 100);
    const y = Math.round((e.clientY / window.innerHeight) * 100);

    document.body.style.setProperty('--mouse-x', `${x}%`);
    document.body.style.setProperty('--mouse-y', `${y}%`);
});

window.addEventListener('mousemove', (e) => {
    const x = Math.round((e.clientX / window.innerWidth) * 100);
    const y = Math.round((e.clientY / window.innerHeight) * 100);
    document.body.style.setProperty('--mouse-x', x + '%');
    document.body.style.setProperty('--mouse-y', y + '%');
});

const btn = document.querySelector('.fx-liquid');

btn.addEventListener('mousedown', () => {
    btn.style.transform = 'translate(-50%, 2px) scale(0.95)';
});

window.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');

    // Dopo 2 secondi (2000ms) esegue la sparizione
    setTimeout(() => {
        splash.style.opacity = '0'; // Fa l'effetto sfumato
        
        // Dopo che la sfumatura è finita (0.8s), rimuove il blocco
        setTimeout(() => {
            splash.style.display = 'none';
            document.body.style.overflow = 'auto'; // Riabilita lo scroll
        }, 800);

    }, 2500);
});