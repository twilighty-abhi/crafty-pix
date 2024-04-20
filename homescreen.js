// homescreen.js
document.getElementById('search-bar').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      const searchText = event.target.value;
      const geminiPrompt = `Gemini, please provide information about: ${searchText}`;
      
      // Here, you would send the geminiPrompt to your backend or API
      // to interact with the Gemini model and get the response.
  
      // For demonstration, we'll just log the prompt to the console:
      console.log(geminiPrompt);
      
      // Clear the search bar
      event.target.value = '';
    }
  });