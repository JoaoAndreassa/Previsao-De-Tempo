# 🌡️ Projeto de Temperatura Atual  

Este projeto é uma aplicação simples que exibe a temperatura atual de uma localização específica. Ele foi desenvolvido utilizando **TypeScript** no backend para realizar as chamadas à API de clima e **HTML/CSS** no frontend para apresentar os dados ao usuário.  

## 🚀 Funcionalidades  

- Consultar a temperatura atual de uma cidade.  
- Interface simples e amigável.  
- Dados precisos obtidos através de uma API de clima.  

## 🛠️ Tecnologias Utilizadas  

### Backend  
- **Node.js** com **TypeScript**  
- **Fetch API** para realizar requisições à API de clima  

### Frontend  
- **HTML** e **CSS** para construção e estilização da interface  

## ⚙️ Instalação e Configuração  

### Pré-requisitos  
Certifique-se de ter instalado em sua máquina:  
- **Node.js** (v16 ou superior)  
- **npm** ou **yarn**  

### Passos para rodar o projeto  

1. **Clone o repositório:**  
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>

2. **Instale as dependências:**
- npm install

3. **Configure a API de clima:**
- Obtenha uma chave de API gratuita em OpenWeatherMap ou outro serviço similar.
- adicione uma constante utilizando a chave que obteve:
const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}`)

4. **Inicie o servidor**
- compile o código typescript: npx tsc --watch

5. **Abra o index.html**
- execute o liveServer na pagina do html.