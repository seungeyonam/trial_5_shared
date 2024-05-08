document.addEventListener('DOMContentLoaded', function() {
  // Function to handle the "Game Start" button click
  function startGame() {
    // Show the game area
    document.getElementById('game-area').style.display = 'block';
    // Hide the "Game Start" button
    document.getElementById('start-button').style.display = 'none';
  }

  // Function to handle the first button click
  function chooseOption1() {
    // Redirect the user to the next page for option 1
    window.location.href = "option1.html";
  }

  // Function to handle the second button click
  function chooseOption2() {
    // Redirect the user to the next page for option 2
    window.location.href = "option2.html";
  }

  // Event listener for the "Game Start" button click
  document.getElementById('start-button').addEventListener('click', startGame);

  // Event listener for the first button click
  document.getElementById('option1').addEventListener('click', chooseOption1);

  // Event listener for the second button click
  document.getElementById('option2').addEventListener('click', chooseOption2);
});
