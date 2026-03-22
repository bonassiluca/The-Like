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

btn.addEventListener('mouseup', () => {
    btn.style.transform = 'translate(-50%, 0) scale(1)';
});