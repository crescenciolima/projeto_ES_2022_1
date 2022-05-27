# projeto_ES_2022_1
Repositório dedicado para o desenvolvimento do projeto da Disciplina de Engenharia de Software semestre 2022.1. 

Neste repositório você vai encontrar os códigos produzidos para o projeto da disciplina Engenharia de Software do Instituto Federal de Educação, Ciência e Tecnologia da Bahia (IFBA) campus Vitória da Conquista semestre 2022.1 do curso Bacharelado em Sistemas de Informação (noturno).

Os vídeos com as gravações dos encontros síncronos realizados durante o período de modalidade de Atividades de Ensino Não Presenciais Emergenciais (AENPE) podem ser encontrados no link a seguir:

[![crescencio-lima](https://img.shields.io/badge/crescencio--lima-channel-green?colorA=ef5350&colorB=d32f2f&style=for-the-badge)](https://www.youtube.com/c/CrescencioLima/) 

# Engenharia de Software

**Participantes :**<br>
- Brendon Lima<br>
- Caroline Araújo<br>
- Felipe Rocha<br>
- Nicássio Couto<br>
- Crescencio Lima<br>

# Versão dos pacotes utilizados<br>
* bcrypt: 5.0.1,<br>
* cors: 2.8.5,<br>
* dayjs: 1.11.2,<br>
* dotenv: 16.0.1,<br>
* express: 4.18.1,<br>
* express-async-errors: 3.1.1,<br>
* jsonwebtoken: 8.5.1,<br>
* pg: 8.7.3,<br>
* reflect-metadata: 0.1.13,<br>
* tsyringe: 4.6.0,<br>
* typeorm: 0.2.44,<br>
* uuid: 8.3.2<br>


# Star

Introduction
------------
O projeto trata-se de um sistema de gestão hospitalar. Realiza a gestão de pacientes, médicos, docentes e residentes, além da gestão de exames e pedidos de exames.


Requirements
---------------------------

  * Node.js
  * Yarn
  * PostgreSQL 4

Installation 
---------------------------

Clone the project

        gitclone https://github.com/cretchas/projeto_ES_2022_1.git

Install requirements

        yarn install

Create the database

        yarn typeorm migration:run
        
Create a file "ormconfig.json" by utilizing the "ormconfig.example.json" as example

Create a medic in database for run system

        yarn seed:medic

Run project
---------------------------

        yarn start


Contributors
---------------------------
Brendon Lima, Caroline Araújo, Felipe Rocha, Nicássio Couto.

[![crescencio-lima](https://img.shields.io/badge/crescencio--lima-github-black?colorA=808080&colorB=000000&style=for-the-badge)](https://www.github.com/crescenciolima)
[![brendon-lima](https://img.shields.io/badge/crescencio--lima-github-black?colorA=808080&colorB=000000&style=for-the-badge)](https://www.github.com/bredbk)
[![caroline-araújo](https://img.shields.io/badge/crescencio--lima-github-black?colorA=808080&colorB=000000&style=for-the-badge)](https://www.github.com/carolineaalmeida)
[![felipe-rocha](https://img.shields.io/badge/crescencio--lima-github-black?colorA=808080&colorB=000000&style=for-the-badge)](https://www.github.com/lipe474)
[![nicássio-couto](https://img.shields.io/badge/crescencio--lima-github-black?colorA=808080&colorB=000000&style=for-the-badge)](https://www.github.com/NicassioCouto)

License
---------------------------
License:<a href="http://www.gnu.org/licenses/gpl.html" target="blank"> GNU GPL v3</a><br>
Content License: <a href="https://creativecommons.org/licenses/by/3.0/" target = "blank">Creative Commons 3.0 BY</a>
