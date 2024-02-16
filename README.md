Exercício porposto na aula de javascript com o tema de "Single Page Application - SPA"

Descrição da atividade:

Crie uma página simples para uma "doceria", de forma que: 

1) contenha a página principal, a de brigadeiros, a de cupcakes, e a de doces, cada uma num módulo Javascript:

1.1) a estrutura de cada página deverá ser retornada por uma função com o nome da página (principal, brigadeiros, cupcakes, doces)

1.2) utilize a declaração export default para exportar cada função

1.3) a página principal deverá conter três botões:

1.3.1) um para redirecionar para a página de brigadeiros

1.3.2) um para redirecionar para a página de cupcakes

1.3.3) e um para redirecionar a página de doces

1.4) as demais páginas deverão conter apenas uma descrição do objetivo da página e um botão que, quando clicado, deverá redirecionar para a página principal

1.5) as páginas deverão ser carregadas utilizando o conceito de SPA, sendo que, ao clicar em cada botão, o navegador não deve "recarregar" a página inteira, mas apenas o elemento do DOM específico deve ser atualizado

2) o arquivo index.html conterá apenas uma div vazia com id igual a “root” e todo o conteúdo das páginas deverá ser dinamicamente renderizado nessa div

3) deve ser criado um módulo que conterá um roteador, responsável por gerenciar as páginas web de acordo com sua respectiva url

3.1) a função, retornada pelo módulo através da declaração export default, deverá retornar um objeto com a seguinte estrutura:

{

    "path1": function() { ... },

    "path2": function() { ... },

    ...

    getPage: function(path) {

        retorna o elemento HTML relacionado ao parâmetro `path`

    }

}

3.2) cada página criada deverá ser importada nesse módulo e adicionada no objeto, segundo a sua url 

4) deve ser criado um módulo para um evento customizado:

4.1) a função, retornada pelo módulo através da declaração export default, deverá receber como parâmetro uma path e retornar um CustomEvent do tipo onstatechange, sendo que o parâmetro options do evento customizado deverá conter o seguinte objeto como valor:

{ path: "path da página que deve ser renderizada" }

4.2) tal função deverá ser importada no módulo de cada página

5) quando um dos botões de redirecionamento das páginas for clicado, a função executada pelo "click" deverá ser executada, sendo que:

5.1) um evento customizado deve ser criado a partir da função do módulo de evento customizado, passando como parâmetro o path da página de destino do redirecionamento 

5.2) logo depois o evento deverá ser executado 

5.3) a execução desse evento irá resultar no redirecionamento da página

6) ○ o arquivo principal (index.js) deverá: 

6.1) importar o módulo de roteamento, salvando o objeto de rotas retornado numa constante

6.2) e criar um ouvinte para o evento onstatechange, que deverá:

6.2.1) obter o path da página de redirecionamento através do atributo path do evento

6.2.2) chamar o método getPage do objeto de rotas, salvando o seu retorno numa constante page (essa constante conterá toda a estrutura da página que deverá ser renderizada na div "root")

6.2.3) alterar o endereço do navegador com o método pushState do objeto history

6.2.4) e renderizar o conteúdo da constante page na div "root" da página
