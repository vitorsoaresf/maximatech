# <strong>Ecommerce MaximaTech</strong>

<br>

<p>Esse projeto corresponde a um e-commerce de venda de produtos onde o usuario pode visualizar os produtos disponíveis na página home, onde pode estar visualizando mais detalhes ao clicar sobre o produto, logo visualizará informações como descrição e preço atual, podendo adicionar ao carrinho caso seja de seu interesse comprar o mesmo.

Na tela do carrinho ao qual representa todos os produtos que o usuário possui interesse, é possível o usuário alterar a quantidade de produtos adicionados, limpar carrinho e finalizar sua compra. </p>

<br>

### <strong>Como você gerencia o estado da aplicação?</strong>

<br>

<p>O estado da aplicação para os contextos mais importantes é utilizado Context API + useReducer como estados globais. Esse recurso facilita a comunicação entre componentes de diferentes localidades do código, evitando assim a passagem demasiada de props (Prop drilling) do componente pai para o componente filho. Com isso temos um código mais limpo, escalável e uma aplicação capaz de se comunicar em todo seu contexto.</p>

<br>

### <strong>Quão bem você divide e organiza os componentes?</strong>

<br>

<p>Partindo do conceito que o Brad Frost difundiu do ATOMIC DESIGN, foi desenvolvido nossos componentes, o quanto possível, seguindo esse padrão. Nesse sentido, pensamos em componentes com a menor granularidade para que seja reutilizável até aqueles que possuem uma composição de pequenos componentes, formando elementos construídos a partir de menores.</p>

<br>

### <strong>Sua aplicação é responsiva em diferentes dispositivos?</strong>

<br>

<p>Nossa aplicação foi desenvolvida sobre o conceito do Luke Wroblewski que difundiu o guide Mobile First, logo essa aplicação contempla os diversos dispositivos existentes: Mobile, Desktop e etc.</p>

<br>

### <strong>Quanto cuidado você demonstra em tornar a aplicação fácil de usar?</strong>

<br>

<p>No conceito de user experience precisamos ter o máximo de cuidado com a usubilidade, talvez nessa o escopo dessa entrega, mas antes de desenvolver qualquer produto, é necesário entender os requisitos e demonstrar um styleguide para que os stakeholders possam opnar com o intuito de garantir uma fluida experiência para os usuários. Nessa entrega foi implementando detalhes de usabilidade para que torne a experiência mais agradável, por exemplo, feedback de botão de filtro selecionado com a cor em destaque, ao passar o cursor sobre um botão modificar a cor para evidenciar o destaque, etc.</p>

<br>

### <strong>Você considera a acessibilidade para garantir que todos possam usar sua aplicação?</strong>

<br>

<p>Ter por princípios o que chamamos de SEO é entender que nossa aplicação é acessada por qualquer pessoa, logo precisamos ter em mente que o aplicativo precisa atender as mais diversificadas configurações. No contexto de acessibildade, foi implementado nesse projeto elementos com as tags HTML adequadas para que usuários com algum tipo de deficiência, consigam fluidamente navegar pelo aplicativo.</p<

<br>

### <strong>Você inclui testes end-to-end para garantir a funcionalidade correta?</strong>

<p>Nossa aplicação atende testes E2E para garantir que quando a aplicação obtiver novas atualizações, os testes garantam que o que já foi desenvolvido não quebre. Foram desenvolvidos alguns testes de interação no intuito de projetar mais testes para o futuro.</p>

<br>

### <strong>Quais padrões você segue ao escrever seu código?</strong>

<p>O refenrecial utilizado para desenvolver esse projeto, o quanto possível, são os seguintes: Atomic Design, SOLID, padrões de projeto como Factory, Observer, etc.
</p>

<br>

### <strong>Como você organiza e descreve seus commits para tornar o histórico do projeto mais compreensível?</strong>

<p>Esse projeto segue os princípios do Convetional Commits para commits e Gitflow para criação de novas branchs e fluidez do projeto</p>

<br>

# <strong>Como executar o projeto?</strong>

- Após baixar o projeto abra a CLI no diretório do mesmo.
- Execute o comando <code>npm -i</code>
- Finalizado as instalações rode o comando <code>npm run dev</code>, uma aba será aberta no browser com o aplicativo

<br>
<br>

# <strong>Como executar o testes E2E?</strong>

- Após baixar o projeto instalar as dependências rode o comando <code>npm run dev</code>
- Logo após rode o comando <code>npm run test</code>
- Será aberto uma aba da biblioteca Playwright a qual foi a selecionada para realizarmos os testes E2E
- Com a aba aberta clique no botão 'Run all' ou pressione F5 que os testes executarão
- Selecione item de teste de algum case de teste: Carrinho, Detalhes dos produtos e Home
- No lado superior direito você verá algumas imagens que correspondem ao automatizador executando o passo a passo de testes.
