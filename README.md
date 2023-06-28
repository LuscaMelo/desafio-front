# Teste Leadster - Desenvolvedor Front-End

## O projeto
Dado o layout, foi proposto o desenvolvimento de uma Landing Page, onde os principais objetivos seriam a: fidelidade ao design, escalabilidade do projeto, manutenibilidade, responsividade e semântica.

## Tecnologias utilizadas
[![My Skills](https://skillicons.dev/icons?i=nextjs,typescript,tailwind,framermotion)](https://skillicons.dev)

## Tomadas de decisão
Primeiramente, é de suma importância a análise do escopo do projeto, onde pude entender o objetivo proposto e tecnologias que seriam necessárias, sem aumentar o grau de complexidade na proposta final.
Um dos pré-requisitos para o projeto foi a utilização do NextJS. Nesse projeto, optei pela utilização do Next na versão 13 (mais atual), utilizando das renderização no lado do servidor (SSR) em componentes estáticos, para garantir um maior desempenho na aplicação. Também foi utilizado o recurso Next Image, para uma renderização eficaz nas imagens utilizadas, garantindo maior velocidade no carregamento da aplicação.
A utilização do framework TailwindCSS para a estilização garantiu uma maior produtividade no processo de desenvolvimento, além de manter um padrão de estilos em toda a aplicação e, também, um excelente controle sobre a responsividade, com a utilização dos padrões de breakpoints.
Não menos importante, também foi utilizado o Typescript para o desenvolvilmento de toda a aplicação, afim de minimizar erros ou bugs em tempo de desenvolvimento, sendo tratados antes mesmo da aplicação ser colocada em produção.

## Organização e Arquitetura do Projeto
O projeto foi desenvolvido utilizando a metodologia KISS (Keep it simple, stupid), onde parte da premissa que uma solução é melhor quando utilizamos menos artifícios, buscando sempre maior legibilidade e compreensão do código, facilitando manutenções futuras, e crescimento do projeto com menor complexidade.
A organização geral foi pensada justamente nesse intuito, onde os arquivos e pastas estão organizados com nome auto-explicativos, com fácil acesso em menores camadas de complexidade.

## Funcionalidades
- Listagem dinâmica dos vídeos, consumidos de um arquivo de configuração json;
- Modal expecífico para cada vídeo clicado, onde é exibida uma visão mais detalhada do vídeo em questão, podendo também ser assistido sem necessidade de acesso à links externos;
- Completamente visual em qualquer dispositivo, independentemente do tamanho do display.

## Como rodar o projeto
é necessária a instalação do [Node.js](https://nodejs.org/en) localmente.
Após instalação, abra seu terminal ou prompt de comando, navegue até a pasta que deseja, e execute os seguintes comandos para clonar o projeto:

```bash
git clone https://github.com/LuscaMelo/desafio-front.git
cd desafio-front
npm i
```

Após a instalação dos pacotes, execute o seguinte comando para rodar um servidor local:

```bash
npm run dev
```

A aplicação rodará em um servidor local, onde você poderá acessá-lo com o link gerado em seu console, diretamente no seu navegador preferido.
