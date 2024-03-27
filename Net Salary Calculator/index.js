function calculateNetSalary() {
    let basicSalary = parseFloat(document.getElementById('basic-salary').value);
    let benefits = parseFloat(document.getElementById('benefits').value);
    
    // Below, the variables are given values so that they can be used easily later in the code
    let payee = calculatePayee(basicSalary);
    let nhifDeductions = calculateNHIF(basicSalary);
    let nssfDeductions = calculateNSSF(basicSalary);
    
    // Below is the arithmetic calculation that should be done to derive the gross salary and net salary
    let grossSalary = basicSalary + benefits;
    let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    
    // Outlined below are strings that are fed into the system to make it easier for the user to code
    document.getElementById('net-salary-output').innerHTML = `
      <p>Gross Salary: ${grossSalary}</p>
      <p>Payee (Tax): ${payee}</p>
      <p>NHIF Deductions: ${nhifDeductions}</p>
      <p>NSSF Deductions: ${nssfDeductions}</p>
      <p>Net Salary: ${netSalary}</p>
    `;
  }
  
  // The function below allows the programmer to calculate the deduction caused by THE TAX SYSTEM
  function calculatePayee(salary) {
 
    let employeeContribution = salary * 0.02;
    let employerContribution = salary * 0.04; 
    let totalContribution = employeeContribution + employerContribution;
    return totalContribution;
  }
  
   // The function below allows the programmer to calculate the deduction caused by NHIF
  function calculateNHIF(salary) {

    let employeeContribution = salary * 0.05;
    let employerContribution = salary * 0.07; 
    let totalContribution = employeeContribution + employerContribution;
    return totalContribution;
  }
  
  // The function below allows the programmer to calculate the deduction caused by NSSF
  function calculateNSSF(salary) {

    let employeeContribution = salary * 0.06; 
    let employerContribution = salary * 0.06; 
    let totalContribution = employeeContribution + employerContribution;
    return totalContribution;
  }
  