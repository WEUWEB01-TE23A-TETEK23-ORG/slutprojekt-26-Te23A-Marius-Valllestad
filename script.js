function ändraFärg() {
    const rubrik = document.querySelector('header h1');
    
    if (rubrik.style.color === 'white') {
        rubrik.style.color = '#ffcc00'; // Guld/Gul
    } else {
        rubrik.style.color = 'white';
    }
}