function calculateGrade() {
    let marks = parseInt(document.getElementById('marks').value);
    let resultElement = document.getElementById('result');
    let grade;
  
    if (isNaN(marks) || marks < 0 || marks > 100) {
      resultElement.textContent = 'Invalid input! Kindly enter a number between 0 and 100.';
      return;
    }
  
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