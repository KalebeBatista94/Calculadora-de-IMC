const inputAltura = document.getElementById('inputAltura');
const inputPeso = document.getElementById('inputPeso');
const calcular = document.getElementById('calcular');
const textArea = document.getElementById('text-area');
const loadingImage = document.getElementById('loading-image');

inputAltura.addEventListener('keyup', (e) => { // Substituindo vírgula por ponto
    const el = e.target
    if(el.value.includes(',')){
        el.value = el.value.replace(/,/g,'.')
    }
});

calcular.addEventListener('click', () => {
    const result = inputPeso.value / (Math.pow(inputAltura.value,2));

    let text;

    if(result < 18.5){
        text = ` Seu IMC é de ${result.toFixed(2)}, De acordo com a Organização Mundial da Saúde, seu IMC está abaixo do recomendado para a sua altura.`;
    }

    if(result >= 18 && result <= 24.9){
        text = ` Seu IMC é de ${result.toFixed(2)}, De acordo com a Organização Mundial da Saúde, seu IMC é considerado normal para a sua altura.`;
    }

    if(result >= 25 && result <= 29.9){
        text = ` Seu IMC é de ${result.toFixed(2)}, De acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado para a sua altura. Você presica praticar exercícios!`;
    }

    if(result >= 30 && result <= 34.9){
        text = ` Seu IMC é de ${result.toFixed(2)}, Obesidade grau I, de acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado para a sua altura. Tenha uma vida saudável, pratique exercícios!`;
    }

    if(result >= 35 && result <= 40 ){
        text = ` Seu IMC é de ${result.toFixed(2)}, Obesidade grau II, de acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado para a sua altura. Tenha uma vida saudável, pratique exercícios!`;
    }

    if(result > 40 ){
        text = ` Seu IMC é de ${result.toFixed(2)}, Obesidade grau III, de acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado para a sua altura. Tenha uma vida saudável, pratique exercícios!`;
    }
   
    loadingImage.style.display = 'unset'

    setInterval(() => {
        loadingImage.style.display = 'none'
        textArea.innerHTML = text;
        textArea.style.display = 'unset';
    }, 2000);


})

