// Referência aos elementos da página
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultsContainer = document.getElementById("resultsContainer");

// Dados fictícios de livros
const livros = [
    { titulo: "O Senhor dos Anéis", genero: "Fantasia", autor: "J.R.R. Tolkien" },
    { titulo: "Harry Potter e a Pedra Filosofal", genero: "Fantasia", autor: "J.K. Rowling" },
    { titulo: "As Crônicas de Nárnia", genero: "Fantasia", autor: "C.S. Lewis" },
    { titulo: "O Hobbit", genero: "Fantasia", autor: "J.R.R. Tolkien" },
    { titulo: "Eragon", genero: "Fantasia", autor: "Christopher Paolini" },
    { titulo: "O Mago", genero: "Fantasia", autor: "Raymond E. Feist" },
    { titulo: "A Roda do Tempo", genero: "Fantasia", autor: "Robert Jordan" },
    { titulo: "Mistborn: O Império Final", genero: "Fantasia", autor: "Brandon Sanderson" },
    { titulo: "A Canção do Sangue", genero: "Fantasia", autor: "Anthony Ryan" },
    { titulo: "A Fúria dos Reis", genero: "Fantasia", autor: "George R.R. Martin" },
    { titulo: "O Nome do Vento", genero: "Fantasia", autor: "Patrick Rothfuss" },
    { titulo: "A Guerra dos Tronos", genero: "Fantasia", autor: "George R.R. Martin" }
];

// Evento de clique no botão de busca
searchButton.addEventListener("click", function () {
    const query = searchInput.value.trim();

    if (query === "") {
        resultsContainer.classList.remove("show");
        resultsContainer.classList.add("hidden");
        resultsContainer.innerHTML = "";
        return;
    }

    const livrosFiltrados = livros.filter(livro => 
        livro.titulo.toLowerCase().includes(query.toLowerCase()) ||
        livro.genero.toLowerCase().includes(query.toLowerCase()) ||
        livro.autor.toLowerCase().includes(query.toLowerCase())
    );

    let tabelaHTML = `
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Gênero</th>
                    <th>Autor(a)</th>
                </tr>
            </thead>
            <tbody>
    `;

    if (livrosFiltrados.length > 0) {
        livrosFiltrados.forEach(livro => {
            tabelaHTML += `
                <tr>
                    <td>${livro.titulo}</td>
                    <td>${livro.genero}</td>
                    <td>${livro.autor}</td>
                </tr>`;
        });
    } else {
        tabelaHTML += `<tr><td colspan="3">Nenhum livro encontrado.</td></tr>`;
    }

    tabelaHTML += `</tbody></table>`;

    resultsContainer.innerHTML = tabelaHTML;
    resultsContainer.classList.remove("hidden");
    void resultsContainer.offsetWidth;
    resultsContainer.classList.add("show");
});

// Evento de input no campo de busca para esconder a tabela se o campo for apagado
searchInput.addEventListener("input", function () {
    if (searchInput.value.trim() === "") {
        resultsContainer.classList.remove("show");
        resultsContainer.classList.add("hidden");
        resultsContainer.innerHTML = ""; // limpa a tabela
    }
});