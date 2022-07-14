const form = document.querySelector('.form');

form.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const inputReal = evento.target.querySelector('.real');

    const real = Number(inputReal.value);
    //const dolar = 5.43;
   convert(real);

});

function convert(real) {
    const converter = real * 5.43;
    const conversao = document.querySelector('.resultado');
    conversao.innerHTML = `${converter.toFixed(2)}`;
};

