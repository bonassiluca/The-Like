window.addEventListener('mousemove', (e) => {
    const x = Math.round((e.clientX / window.innerWidth) * 100);
    const y = Math.round((e.clientY / window.innerHeight) * 100);

    document.body.style.setProperty('--mouse-x', `${x}%`);
    document.body.style.setProperty('--mouse-y', `${y}%`);
});