//add a reference statement that describes the relationship between the interfaces in module08_loans.ts 
//and module08_loan-programs.ts.
/// <reference path="module08_loans.ts" /> 


/*  TODO Create LoanPrograms namespace. */
namespace LoanPrograms {
    /*  TODO Update the calculateInterestOnlyLoanPayment function. */
    //export + Loans.Loan (updated reference to the Loan interface so it includes the Loans namespace)
    export function calculateInterestOnlyLoanPayment(loanTerms: Loans.Loan): string {
        let payment: number;
        payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
        return 'The interest only loan payment is ' + payment.toFixed(2);
    }
    /*  TODO Update the calculateConventionalLoanPayment function. */  
    export function calculateConventionalLoanPayment(loanTerms: Loans.ConventionalLoan): string {
        let interest: number = calculateInterestRate(loanTerms.interestRate);
        let payment: number;
        payment = loanTerms.principle * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.numberOfMonths)));
        return 'The conventional loan payment is ' + payment.toFixed(2);
    }
    function calculateInterestRate (interestRate: number): number {
        let interest: number = interestRate / 1200;
        return interest
    }
}