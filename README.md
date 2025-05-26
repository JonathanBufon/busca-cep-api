# Consulta CEP 📬

Um simples aplicativo web para consultar endereços a partir de um CEP (Código de Endereçamento Postal) brasileiro, utilizando a API ViaCEP. O projeto também inclui um modo escuro para melhor visualização.

---

##  Screenshots 📸

   Modo Escuro:
   
![Modo Escuro](https://github.com/JonathanBufon/busca-cep-api/blob/main/cep-print/black.png)


   Modo Claro:

![Modo Claro](https://github.com/JonathanBufon/busca-cep-api/blob/main/cep-print/white.png)

---

## Funcionalidades ✨

* **Consulta de CEP:** Busca e exibe informações de endereço (logradouro, bairro, cidade, estado) com base no CEP fornecido.
* **Validação de CEP:** Verifica se o CEP inserido possui 8 dígitos.
* **Modo Escuro/Claro:** Permite alternar entre temas claro e escuro para melhor conforto visual.
* **Responsividade:** Interface adaptável para diferentes tamanhos de tela.
* **Busca com "Enter":** Permite iniciar a busca pressionando a tecla "Enter" no campo do CEP.

---

## Tecnologias Utilizadas 💻

* **Frontend:**
    * HTML5
    * CSS3 (com variáveis para temas)
    * JavaScript (Vanilla)
* **Backend:**
    * PHP
* **API:**
    * ViaCEP (https://viacep.com.br)

---

## Como Executar Localmente 🚀

Siga os passos abaixo para executar o projeto em sua máquina local usando o servidor embutido do PHP:

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/JonathanBufon/busca-cep-api.git](https://github.com/JonathanBufon/busca-cep-api.git)
    ```

2.  **Navegue até o Diretório do Projeto:**
    ```bash
    cd busca-cep-api
    ```

3.  **Inicie o Servidor PHP:**
    Abra o terminal na pasta raiz do projeto e execute o seguinte comando:
    ```bash
    php -S localhost:8000
    ```
    Este comando iniciará um servidor web local na porta 8000.

4.  **Acesse no Navegador:**
    Abra seu navegador de preferência e acesse a seguinte URL:
    ```
    http://localhost:8000
    ```
    Você deverá ver a página inicial da aplicação "Consulta CEP".

5.  **Utilize a Aplicação:**
    * Digite um CEP válido de 8 dígitos no campo "Digite o CEP".
    * Clique no botão "Buscar" ou pressione "Enter".
    * Os resultados da consulta serão exibidos abaixo do formulário.
    * Para alternar entre o modo claro e escuro, clique no botão "🌙 Modo Escuro" / "☀️ Modo Claro" no canto superior direito.

---

## Estrutura do Projeto 📁
 ```
busca-cep-api/
├── consulta.php       # Script PHP backend para consultar a API ViaCEP
├── favicon.ico        # Ícone da aba do navegador
├── index.html         # Arquivo principal HTML da aplicação
├── script.js          # Lógica JavaScript do frontend (busca, dark mode, etc.)
└── style.css          # Estilos CSS para a aplicação, incluindo temas claro/escuro
 ```

---

## Contribuições 🤝

Contribuições são bem-vindas! Sinta-se à vontade para abrir *issues* ou enviar *pull requests*.

---

## Licença 📝

Este projeto é de código aberto. Sinta-se livre para usá-lo e modificá-lo como desejar.
