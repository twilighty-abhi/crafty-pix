// homescreen.js

function performSearch() {
    const searchText = document.getElementById('search-bar').value;
    const geminiPrompt = `Gemini, how do I make ${searchText}. Explain how to make it. explain as to a 5 year old. show the way as different steps. show also relevant links'
    `; // text concatnator
  
    // ... (your API interaction logic) ...
  
    console.log(geminiPrompt); 
    document.getElementById('search-bar').value = '';
  }
  
  // Event listener for Enter key press in search bar
  document.getElementById('search-bar').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      performSearch();
    }
  });
  
  // Event listener for search button click
  document.getElementById('search-button').addEventListener('click', performSearch);