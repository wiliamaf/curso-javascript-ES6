
//rest parameters
function teste1()
{
    const [a,b,...restante] = [1,2,3,4,5,6,7,8,9,10];

    console.log(restante);
    console.log(a);
}

//currying
function soma(a)
{
    return function(b)
    {
        return a + b;
    }
}

function teste2()
{
    const soma3 = soma(3);
    console.log(soma3(5));
    console.log(soma3(20));
}

//hoisting de variável
function teste3()
{
    console.log(frase);
    var frase = "Esta é uma frase.";
    console.log(frase);
}

//hoisting de função
function teste3_()
{
    log("Isto aqui é uma frase");
    
    function log(frase)
    {
        console.log(frase);
    }
}

//Imutabilidade
const estudantes = 
[
   {name: "Grace", grade: 7},
   {name: "Paul",grade: 4},
   {name: "Jennifer",grade: 10}
];
  
function getEstudantesAprovados(listaEstudantes) 
{
   return listaEstudantes.filter(estudante => estudante.grade >= 7);
}
//Não altera a referência e, sim, faz uma cópia do elemento
function teste4()
{
    const aprovados = getEstudantesAprovados(estudantes);

    console.log("APROVADOS:")
    console.log(aprovados);
    console.log("TODOS OS ESTUDANTES:")
    console.log(estudantes);
}

function teste5()
{
    const familia = ["William", "Aline", "João Vitor"];

    familia.push("Mais um"); //alterar propriedade é permitido

    console.log(familia);

    familia = []; //não permite

    console.log(familia); //dá um erro
}

function teste6()
{
    const condicao = parseInt(prompt("Insira 0 ou 1:"));
    condicao ? console.log("verdadeiro") : console.log ("falso");
}

function teste7()
{
    const notas = ['mi', 'fá'];
    //operador spread ...
    const escala = ['dó','ré', ...notas, 'sol', 'lá', 'si'];

    function musica(n1,n2,n3,n4,n5,n6,n7)
    {
        console.log(n1,n2,n3,n4,n5,n6,n7);
    }
    //chamado spread
    musica(...escala);
}

function teste8()
{
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;        // retorna verdadeiro
3 in arvores;        // retorna verdadeiro
6 in arvores;        // retorna falso
"cedro" in arvores;  // retorna falso (você deve especificar o número do índice,
                     // não o valor naquele índice)
"length" in arvores; // retorna verdadeiro (length é uma propriedade de Array)

// Objetos predefinidos
"PI" in Math;            // retorna verdadeiro
var minhaString = new String("coral");
"length" in minhaString; // retorna verdadeiro

// Objetos personalizados
var meucarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meucarro;  // retorna verdadeiro
"modelo" in meucarro; // retorna verdadeiro
}

function teste9()
{
    const valor = parseInt(prompt());
    switch (valor)
    {
        case 0:
            console.log("nada");
            break;
        case 1:
            console.log("começando");
            break;
        case 2:
        case 3:
        case 4:
            console.log("mediano");
            break;
        case 5:
            console.log("Avançado");
            break;
        default:
            console.log("Inválido");
    }
}

function teste10()
{
    let vetor = ['Meia-noite em Paris', 'Machete', 'Taxi Driver', 'Matrix'];
    vetor.tipo = "numerico";
    
    //10, 20, 30
    //só vai exibir os numéricos
    for (const value of vetor) 
        console.log(value);
    
    //0, 1, 2, tipo
    for (let value in vetor)
        console.log(value);

}

function testePrototype()
{
    //letras.__proto__ --> Array.prototype --> Object.prototype --> null
    const letras = ['a','b','c'];
    console.log(letras);
}