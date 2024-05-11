/*  TODO Add the import statement. */
import * as Loans from './module07_loans.js'; //imported Loan and Conventional Loan interfaces 

/*  TODO Update the calculateInterestOnlyLoanPayment function. */
export function calculateInterestOnlyLoanPayment(loanTerms: Loans.Loan): string {  //Loans from the import keyword and specifying that I am trying to access the Loan interface
    let payment: number;
    payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
/*  TODO Update the calculateConventionalLoanPayment function. */
export function calculateConventionalLoanPayment(loanTerms: Loans.ConventionalLoan): string {
    let interest: number = calculateInterestRate(loanTerms.interestRate);
    let payment: number;
    payment = loanTerms.principle * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
function calculateInterestRate (interestRate: number): number { // A WORKER FUNCTION THAT CALCULATES THE MONTHLY INTEREST RATE OF THE LOAN
    let interest: number = interestRate / 1200;
    return interest
}