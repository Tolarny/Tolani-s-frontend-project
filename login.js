const btnes = document.querySelector('#btnes');
const btness = document.querySelector('#btness');
const main = document.querySelector('.main');



btnes.addEventListener('click', () => {
    main.classList.add('btnes-mode');
});

btness.addEventListener('click', () => {
    main.classList.remove("btnes-mode");
});


