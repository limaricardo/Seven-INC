# SVN - Sistema de gestão de funcionários 

# Sobre o projeto

https://seven-front-end.netlify.app/

SVN é uma aplicação front-end web com responsividade para ser acessada por mobile construída durante o processo seletivo para o Grupo Seven.

A aplicação consiste em um sistema de gestão de funcionários, onde será possível realizar uma listagem dos funcionários, exibir todas as informações destes, assim como um formulário para criar novos funcionários. Também será possível editar
funcionários existentes assim como excluí-los.

Requisitos:

- Listagem de funcionários, contendo nome, e-mail, telefone, salário e data da contratação;
- Tela com a exibição dos detalhes de um funcionário
- Formulário para a criação de um novo funcionário;
- Formulário para a edição dos dados de um funcionário;
- Botão para remoção de um funcionário.

## Layout responsivo para mobile
### Página principal                                                                                                
![Mobile 1](https://user-images.githubusercontent.com/81928006/188368304-281e73c7-38a0-46f9-9bdd-9bc858cea37d.PNG) 

### Informações detalhadas do Funcionário 
![Mobile 2](https://user-images.githubusercontent.com/81928006/188368390-117caf28-d124-481e-934f-12a578fd6200.PNG) 

### Cadastro de novo funcionário                                                                                   
![Mobile 3](https://user-images.githubusercontent.com/81928006/188368499-72771821-420b-41e6-89ed-c3430f722bd9.PNG) 

### Tela para editar informações do usuário + Notificação Toastify
![Mobile 4](https://user-images.githubusercontent.com/81928006/188368559-20552b8e-e66d-4103-9eec-8042bd89d1ba.PNG)

## Layout web
### Página principal
![image](https://user-images.githubusercontent.com/81928006/188366610-1fd89a09-0694-47e3-a9fa-d655f6fbb652.PNG)
### Páginação - (Segunda página da tabela)
![image](https://user-images.githubusercontent.com/81928006/188366705-96d2293d-bd45-41f9-9597-20b9922edf00.PNG)
### Tela de cadastro - (Botão 'disabled' com validação do form)
![image](https://user-images.githubusercontent.com/81928006/188366777-099e1ad4-a74b-4667-a6ef-104c8ca33682.PNG)
### Notificação Toastify - Usuário cadastrado com sucesso
![image](https://user-images.githubusercontent.com/81928006/188366853-630684ff-427c-4c6e-b46b-c174f7249a42.PNG)
### Informações detalhadas do funcionário
![image](https://user-images.githubusercontent.com/81928006/188367060-6d8f249d-f8ba-4a8e-a68a-841899718b25.PNG)
### Tela para editar informações do usuário - (Botão validado + Notificação Toastify)
![image](https://user-images.githubusercontent.com/81928006/188367259-a796c8d9-b511-4b99-b28f-6f7946f85741.PNG)


## Front end
- HTML / CSS / JS / 
- ReactJS
- MaterialUI
- Styled Components
- Formik
- React Toastify


## Implantação em produção
- Front end web: Netlify


## Front end web
Pré-requisitos: npm / yarn

```bash

# clonar repositório
git clone https://github.com/limaricardo/Seven-INC


# instalar dependências do projeto, caso necessário:
npm install

npm i @date-io/dayjs dayjs
npm i @emotion/react @emotion/styled
npm i @mui/icons-material @mui/material @mui/styled-engine-sc @mui/x-date-pickers
npm i formik
npm i react-router-dom
npm i styled-components
npm i yup
npm i react-toastify



# executar o projeto
npm start
```

# Autor

Ricardo Pereira Lima

https://www.linkedin.com/in/ricardo-pereira-274b22aa/
