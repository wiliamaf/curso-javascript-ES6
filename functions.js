function executarFunctions()
{
    //FUNCTION CONVENCIONAL
    function fn() 
    {
        return "Função";
    }
    
    //ARROW FUNCTION
    const arrowFn = () => "Função arrow function";
    console.log(arrowFn());

    //ARROW FUNCTION PARA MAIS DE 1 EXPRESSÃO
    const arrowFn2 = () => 
    {
        const data = new Date();
        return "Hoje é: " + data;
    };
    console.log(arrowFn2());

    //FUNÇÕES TAMBÉM SÃO OBJETOS
    //CRIANDO UM ATRIBUTO
    fn.prop = "Propriedade adicionada à função fn";
    console.log(fn.prop);
    
    // Receber parâmetros
    const logValue = value => console.log(value);
    logValue("Valor de teste");
    
    const resultado = parametroFuncao => console.log(parametroFuncao() + " parâmetroFunção");
    resultado(fn);
    
    
    function teste()
    {
        console.log("Testando ...");
    }

    // ARROW FUNCTION COM PARÂMETROS EM 2 NÍVEIS
    // RECEBENDO E RETORNANDO FUNÇÕES
    const controlFnExec = fnParam => allowed => 
    {
        if (allowed) 
        {
            fnParam();
        }
    };
    
    // CÓDIGO ANTERIOR COMO FUNÇÃO CONVENCIONAL
    function controlFnExec2(fnParam) 
    {
      return function(allowed) 
      {
        if (allowed) 
        {
            fnParam();
        }
      };
    }
    
    const handleFnExecution = controlFnExec(teste); //passa o 1º parâmetro
    handleFnExecution(true); // passa o 2º parâmetro - true
    
    handleFnExecution(); // passa o 2º parâmetro - false
    
    controlFnExec2(teste)(true); //Outra forma de executar a função parâmetros em 2 níveis
}

/** DEMONSTRAÇÃO DA DIFERENÇA ENTRE FUNÇÃO CONVENCIONAL E ARROW FUNCTION **/
(() => 
{
    this.name = "Contexto de execução geral - arrow function";
  
    const getNameArrowFn = () => this.name;
  
    function getName() 
    {
      return this.name;
    }
  
    const user = 
    {
      name: "Contexto de execução local - função convencional",
      getNameArrowFn,
      getName
    };
  
    console.log(user.getNameArrowFn());
    console.log(user.getName());
}
)();


function primeiraClasse()
{
    const getName = () => 
    {
        return "Primeira Classe e Ordem Maior";
    };
    
    const log = value => 
    {
        console.log(value);
    };
    
    const main = fn => 
    {
        return () => log(fn());
    };
    
    const logName = main(getName);
    
    logName();
}