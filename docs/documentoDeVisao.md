# Visão da solução

Esta biblioteca javascript visa abstrair a criação de uma página com todos os elementos necessários para a criação de um Cockpit. 

Por Cockpit se entende um ambiente(página html) que possui um ou mais paineis. Cada painel possui um ou mais relatórios em formato de grafico ou tabelas.

O que se espera é que o usuário tenha a experiencia semelhante a de um piloto que, em seu cockpit, visualiza diversos painéis de instrumentos os quais contém mostradores que indicam algum aspecto do funcionamento do veículo. 

A biblioteca tem o objetivo de facilitar a construção deste ambiente.

## Conceitos:

__CR__: É a biblioteca propriamente dita. Como se trata de um objeto Javascript, todos os objetos e funções construtoras estarão dentro deste namespace.


__Cockpit__: É o objeto principal da biblioteca. É ele que contém os Dashboards que serão exibidos. 


__Período__: Normalmente um painel de instrumentos exibe os valores correntes de algo como: velocidade, rotação e pressão do motor, temperatura interna e externa etc.
Mas também exibe valores que estão relacionados a um período de tempo como: odômetro, consumo de combustível etc.
Estes últimos estão relacionados a um intervalo de tempo.
Assim como estes, Período define um intervalo de tempo e será considerado para todos os mostradores (Relatórios).
Ele está associado a um Cockpit.


__Dashboard__: É o painel de instrumentos. Ele contém um conjunto de mostradores, neste caso, gráficos ou tabelas produzidos com base em relatórios e que estão relacionados a uma mesma área de interesse (do ponto de vista do usuário alvo do projeto).
Possui uma barra lateral com a persolização dos relatórios.


__Relatório__: É a informação que será exibida em forma de gráfico ou tabela. 
Pode possuir filtros e configurações que serão exibidos na barra lateral do Dashboard.


__Gráfico__: É o componente responsável pela exibição do relatório em formado de gráfico (pizza, colunas, linhas, gauge etc).


__Tabela__: É o componente responsável pela exibição do relatório em formato de tabela.


__Conjunto de dados__: É o elemento responsável por disponibilizar dados para um ou mais relatórios.

__Fonte de dados remota__: É o elemento responsável por obter dados através de uma conexão remota. Este elemento obtém os parâmetros necessários para a requisição do conjunto de dados, se conecta a fonte remota, encaminha os dados a um elemento que os trata e devolve os dados tratados para o conjunto de dados;