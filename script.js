document.addEventListener('DOMContentLoaded', function() {
    // Optionally to display default search results at load
    displayDefaultResults();
});

function search() {
    var query = document.getElementById('searchQuery').value.toLowerCase();
    var results = getSearchResults(query);
    displayResults(results);
}

function getSearchResults(query) {
    // Example data to show after searching
    var database = [
        { title: "Stored XSS", description: "A Malicious script stored on a server, affecting the users in the vulnerable website. (Do search for vulnerabilities)" },
        { title: "Reflected XSS", description: "A Malicious script reflected off of a server, targeting users through manipulated URLs. (Do search for vulnerabilities)" },
        { title: "DOM based XSS", description: "A Harmful code manipulates a web page's DOM, executing attacks in a users browser" },
        { title: "Vulnerabilities", description: "img based payloads are trendy these days... I wonder where you would rant..." }
    ];

    // query based databe filter
    if (query.trim() === "") return [];
    return database.filter(item => item.title.toLowerCase().includes(query));
}

function displayResults(results) {
    var resultsContainer = document.getElementById('searchResults');
    if (results.length > 0) {
        var html = results.map(item => `<div><strong>${item.title}</strong>: ${item.description}</div>`).join('');
        resultsContainer.innerHTML = html;
    } else {
        resultsContainer.innerHTML = 'No Rant results found';
    }//the default when results are found
}

function displayDefaultResults() {
    // Display some default data so they have an idea what to search for
    document.getElementById('searchResults').innerHTML = '<div>Enter a Rant term to see results</div> <div>Stored XSS</div> <div>Reflected XSS</div> <div>DOM based XSS</div>';
}

function postComment() {//the vulnerable comment section
    var comment = document.getElementById('userComment').value;
    document.getElementById('commentStatus').innerHTML = 'Rant: ' + comment;
}


