// const inputIdade = document.getElementById('inputIdade');
const inputAltura = document.getElementById('inputAltura');
const inputPeso = document.getElementById('inputPeso');
const calcular = document.getElementById('calcular');

inputAltura.addEventListener('keyup', (e) => { // Substituindo vírgula por ponto
    const el = e.target
    if(el.value.includes(',')){
        el.value = el.value.replace(/,/g,'.')
    }
});

calcular.addEventListener('click', () => {
    const result = inputPeso.value / (inputAltura.value * inputAltura.value);

    if(result < 18.5){
        alert(` Seu IMC é de ${result.toFixed(2)}, De acordo com a Organização Mundial da Saúde, seu IMC está abaixo do recomendado para a sua altura.`);
    }

    if(result >= 18 && result <= 24.9){
        alert(` Seu IMC é de ${result.toFixed(2)}, De acordo com a Organização Mundial da Saúde, seu IMC é considerado normal para a sua altura.`);
    }

    if(result >= 25 && result <= 29.9){
        alert(` Seu IMC é de ${result.toFixed(2)}, De acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado para a sua altura. Você presica praticar exercícios!`);
    }

    if(result >= 30 && result <= 34.9){
        alert(` Seu IMC é de ${result.toFixed(2)}, Obesidade grau I, de acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado para a sua altura. Tenha uma vida saudável, pratique exercícios!`);
    }

    if(result >= 35 && result <= 40 ){
        alert(` Seu IMC é de ${result.toFixed(2)}, Obesidade grau II, de acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado para a sua altura. Tenha uma vida saudável, pratique exercícios!`);
    }

    if(result > 40 ){
        alert(` Seu IMC é de ${result.toFixed(2)}, Obesidade grau III, de acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado para a sua altura. Tenha uma vida saudável, pratique exercícios!`);
    }

});