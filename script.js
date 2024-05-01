function search() {
    var query = document.getElementById('searchQuery').value;
    document.getElementById('searchResults').innerHTML = 'Search results for ' + query;
}

function postComment() {
    var comment = document.getElementById('userComment').value;
    document.getElementById('commentStatus').innerHTML = 'Comment: ' + comment;
}

