// The function below allows the user to set the variables in place in order to execute the code
function calculateGrade() {
    let marks = parseInt(document.getElementById('marks').value);
    let resultElement = document.getElementById('result');
    let grade;
  
    // The conditional below is set in place to ensure that the user enters a number greater than 0 but less than 100
    if (isNaN(marks) || marks < 0 || marks > 100) {
      resultElement.textContent = 'Invalid input! Kindly enter a number between 0 and 100.';
      return;
    }
  
    // This last part is made up of conditional statements that allows me to
      // ...feed the computer the appropriate grades to output
    if (marks > 79) {
      grade = 'A';
    } else if (marks >= 60) {
      grade = 'B';
    } else if (marks >= 50) {
      grade = 'C';
    } else if (marks >= 40) {
      grade = 'D';
    } else {
      grade = 'E';
    }
  
    resultElement.textContent = `This student's grade is: ${grade}`;
  }