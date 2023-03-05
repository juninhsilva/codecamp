/* 🌱 Sobre o Desafio

Após vocês promoverem diversas atividades a favor da natureza, a liderança e a diretoria da Oil Corp convidaram vocês para os ajudarem a preservar a natureza e a serem uma empresa sustentável. Para isso, eles precisam de ajuda para criar o algoritmo que direciona os resíduos da água para a estação de tratamento correta antes de ser descartada no rio Jacará-Mirim.

Via de regra, as moléculas que possuem até 5 caracteres passam pelo Filtro Normal, as que possuem até 10 caracteres passam pelo Filtro Específico e as que possuem mais que 10 caracteres passam pelo Filtro Duplo Especifico. Essas moléculas estão misturadas nos resíduos, se houver ao menos uma que tenha o número específico de caracteres esse resíduo já deve passar pelo filtro correto.

Crie um código que implemente essas regras e imprima o filtro adequado para cada molécula:

    <= 5 - Imprimir "Filtro Normal";
    > 5 e <= 10 - Imprimir "Filtro Específico";
    > 10 - Imprimir "Filtro Duplo Específico";

🏭 Entradas e Saídas 

As entradas serão listas contendo as moléculas contidas na água analisada. A saída deverá ser se o filtro utilizado deve ser o "Filtro Normal", o "Filtro Específico" ou o "Filtro Duplo Específico".
🌳 Exemplo 
Entrada          	  Saída 
HNO, H3ON, HN3FO 	O filtro deve ser: Filtro Normal
HNO3FOH, H3O, FOH3 	O filtro deve ser: Filtro Específico */

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let gets = () => {
    return 'HNO3FOH, H3O, FOH3';
}

function print(s){
    console.log(s);
}

const arr = gets().split(', ')
let qualFiltro = 0;
//TODO: Print no console qual filtro deve ser utilizado de acordo com as moléculas na entrada
arr.forEach(item => {
    if(item.length>qualFiltro) qualFiltro = item.length
});

if(qualFiltro<=5)print('O filtro deve ser: Filtro Normal')
else if(qualFiltro>5 && qualFiltro<=10)print('O filtro deve ser: Filtro Específico')
else print('O filtro deve ser: Filtro Duplo Específico')