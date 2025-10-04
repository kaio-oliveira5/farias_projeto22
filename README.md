🔑 farias_projeto22 - Hotsite Ibiza Residence
🎯 Descrição do Projeto
Este projeto é um Hotsite (Landing Page) desenvolvido para promover e gerenciar a Confirmação de Presença dos futuros moradores no evento de Entrega das Chaves do empreendimento Ibiza Residence da Construtora Farias.

A página inclui:

Um contador regressivo dinâmico até a data de entrega das chaves (21/02/2026).

Detalhes sobre o empreendimento (visão da obra, lazer, conforto do lar).

Um formulário de confirmação de presença (RSVP) para coleta de dados.

Animações de rolagem suaves com a biblioteca AOS.

🛠️ Tecnologias e Ferramentas
O projeto utiliza uma stack focada em frontend moderno, com pré-processamento de CSS e bundler para desenvolvimento:

Categoria	Tecnologia	Uso
Linguagens	HTML5, JavaScript, Sass (SCSS)	Estrutura, Interatividade e Estilização Avançada.
Bundler	Parcel	Empacotamento, otimização e servidor de desenvolvimento.
Libs/Plugins	AOS (Animate On Scroll)	Animações de elementos na tela durante a rolagem.

Exportar para as Planilhas
⚙️ Instalação e Execução
Siga os passos abaixo para configurar e rodar o projeto em sua máquina local.

Pré-requisitos
Certifique-se de ter o Node.js (que inclui o npm ou yarn) e o Git instalados em sua máquina.

Passo a Passo
Clone o repositório:



git clone https://github.com/kaio-oliveira5/farias_projeto22.git
Acesse o diretório do projeto:


cd farias_projeto22
Instale as dependências:
O projeto utiliza o Parcel como bundler, listado no package.json.


npm install 
 ou
yarn install
Inicie o servidor de desenvolvimento:
Este comando inicia o servidor local com o Parcel, compilando o Sass e o JS automaticamente.



npm run dev
 ou
yarn dev
O hotsite estará acessível em http://localhost:1234 (ou outra porta indicada pelo Parcel).

Gere a build de produção:
Para gerar os arquivos finais otimizados para deploy:



npm run build
ou
yarn build
Os arquivos finais serão gerados na pasta dist/.

💻 Funcionalidades Principais
Contador Regressivo
O script principal em src/scripts/main.js gerencia o temporizador para a entrega das chaves:

Variável	Data	Função
fixedLaunchDate	21/02/2026 18:00:00	Define a data e hora do evento.
updateCountdown()	Função principal	Calcula a diferença entre a data atual e a data de lançamento, atualizando o elemento <span id="contador-regressivo"> a cada segundo.

Exportar para as Planilhas
Animações
A biblioteca AOS é inicializada logo no início do script para aplicar efeitos de entrada nos elementos com o atributo data-aos, como data-aos="zoom-in" ou data-aos="flip-left".

🤝 Autor
Desenvolvido por:

Kaio Oliveira
