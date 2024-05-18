function searchBooks() {
    var query = document.getElementById("searchInput").value;
    var url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayResults(data) {
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (data.docs.length === 0) {
        resultsDiv.innerHTML = "<p>Sonuç bulunamadı.</p>";
        return;
    }

    data.docs.forEach(book => {
        var title = book.title;
        var author = book.author_name ? book.author_name.join(", ") : "Bilinmiyor";
        var coverId = book.cover_i ? book.cover_i : "";
        var coverUrl = coverId ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` : "https://via.placeholder.com/100";

        var html = `
            <div class="book">
                <img src="${coverUrl}" alt="${title}">
                <div>
                    <h2>${title}</h2>
                    <p>Yazar(lar): ${author}</p>
                </div>
            </div>
        `;
        resultsDiv.innerHTML += html;
    });
}


