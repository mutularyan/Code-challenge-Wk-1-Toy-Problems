// The function below allows the programmer to set values for the variables used in this program
function checkSpeed() {
    let speed = parseInt(document.getElementById('car-speed').value);
    let points = Math.floor((speed - 70) / 5);
    
// The conditional statement below is used to feed the computer the correct outputs depending on the data that has been input
    if (speed <= 70) {
      document.getElementById('speed-result').textContent = 'Ok';
    } else if (points >= 12) {
      document.getElementById('speed-result').textContent = `Points: ${points}, License suspended`;
    } else {
      document.getElementById('speed-result').textContent = `Points: ${points}`;
    }
  }
  