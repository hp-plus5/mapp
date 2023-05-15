// import Counter from "../Counter";
import './LifeCalculator.scss';
import tax_information from "./tax_brackets.json"
import { useState } from "react";
import LifeCalculatorResults from "./LifeCalculatorResults.js";

function LifeCalculator() {
  // DATA IMPORT NOTES
    // if need to pull from actual API using axios:
    // axios.get('http://localhost:8080/src/LifeCalculator/tax_brackets.json').then(response => console.log(response));

    // if i pulled things in in an ideal world:
    /**
     * const federalStats = taxBrackets.2020.federal;
     * const newYorkStats = taxBrackets.2020.new_york;
     * California's 2023 brackets are the same as 2020, so those are correct. Texas continues to have no income tax. Can't speak for OH or NY.
     */
    // var taxBrackets = [
    //     {
    //         2020: {
    //             california: {
    //                 "single": {
    //                   "specialtaxes": [],
    //                   "deductions": [
    //                     {
    //                       "deduction_name": "Standard Deduction (Single)",
    //                       "deduction_amount": 4401
    //                     }
    //                   ],
    //                   "credits": [],
    //                   "annotations": [],
    //                   "income_tax_brackets": [
    //                     {
    //                       "bracket": 0,
    //                       "marginal_rate": 1
    //                     },
    //                     {
    //                       "bracket": 8809,
    //                       "marginal_rate": 2
    //                     },
    //                     {
    //                       "bracket": 20883,
    //                       "marginal_rate": 4
    //                     },
    //                     { "bracket": 32960, "marginal_rate": 6 },
    //                     { "bracket": 45753, "marginal_rate": 8 },
    //                     { "bracket": 57824, "marginal_rate": 9.3 },
    //                     { "bracket": 295373, "marginal_rate": 10.3 },
    //                     { "bracket": 354445, "marginal_rate": 11.3 },
    //                     { "bracket": 590742, "marginal_rate": 12.3 },
    //                     { "bracket": 1000000, "marginal_rate": 13.3 }
    //                   ]
    //                 },
    //                 "married": {
    //                   "specialtaxes": [],
    //                   "deductions": [
    //                     {
    //                       "deduction_name": "Standard Deduction (Married)",
    //                       "deduction_amount": 8802
    //                     }
    //                   ],
    //                   "credits": [],
    //                   "annotations": [],
    //                   "income_tax_brackets": [
    //                     { "bracket": 0, "marginal_rate": 1 },
    //                     { "bracket": 17618, "marginal_rate": 2 },
    //                     { "bracket": 41766, "marginal_rate": 4 },
    //                     { "bracket": 65920, "marginal_rate": 6 },
    //                     { "bracket": 91506, "marginal_rate": 8 },
    //                     { "bracket": 115648, "marginal_rate": 9.3 },
    //                     { "bracket": 590746, "marginal_rate": 10.3 },
    //                     { "bracket": 708890, "marginal_rate": 11.3 },
    //                     { "bracket": 1181484, "marginal_rate": 12.3 },
    //                     { "bracket": 2000000, "marginal_rate": 13.3 }
    //                   ]
    //                 },
    //                 "married_separately": {
    //                   "specialtaxes": [],
    //                   "deductions": [
    //                     {
    //                       "deduction_name": "Standard Deduction (Married Separately)",
    //                       "deduction_amount": 4401
    //                     }
    //                   ],
    //                   "credits": [],
    //                   "annotations": [],
    //                   "income_tax_brackets": [
    //                     { "bracket": 0, "marginal_rate": 1 },
    //                     { "bracket": 8809, "marginal_rate": 2 },
    //                     { "bracket": 20883, "marginal_rate": 4 },
    //                     { "bracket": 32960, "marginal_rate": 6 },
    //                     { "bracket": 45753, "marginal_rate": 8 },
    //                     { "bracket": 57824, "marginal_rate": 9.3 },
    //                     { "bracket": 295373, "marginal_rate": 10.3 },
    //                     { "bracket": 354445, "marginal_rate": 11.3 },
    //                     { "bracket": 590742, "marginal_rate": 12.3 },
    //                     { "bracket": 1000000, "marginal_rate": 13.3 }
    //                   ]
    //                 },
    //                 "head_of_household": {
    //                   "specialtaxes": [],
    //                   "deductions": [
    //                     {
    //                       "deduction_name": "Standard Deduction (Head Of Household)",
    //                       "deduction_amount": 8802
    //                     }
    //                   ],
    //                   "credits": [],
    //                   "annotations": [],
    //                   "income_tax_brackets": [
    //                     { "bracket": 0, "marginal_rate": 1 },
    //                     { "bracket": 17629, "marginal_rate": 2 },
    //                     { "bracket": 41768, "marginal_rate": 4 },
    //                     { "bracket": 53843, "marginal_rate": 6 },
    //                     { "bracket": 66636, "marginal_rate": 8 },
    //                     { "bracket": 78710, "marginal_rate": 9.3 },
    //                     { "bracket": 401705, "marginal_rate": 10.3 },
    //                     { "bracket": 482047, "marginal_rate": 11.3 },
    //                     { "bracket": 803410, "marginal_rate": 12.3 },
    //                     { "bracket": 1000000, "marginal_rate": 13.3 }
    //                   ]
    //                 }
    //               },
    //             new_york: {
    //                 "single": {
    //                   "specialtaxes": [],
    //                   "deductions": [
    //                     {
    //                       "deduction_name": "Standard Deduction (Single)",
    //                       "deduction_amount": 8000
    //                     }
    //                   ],
    //                   "credits": [],
    //                   "annotations": [],
    //                   "income_tax_brackets": [
    //                     { "bracket": 0, "marginal_rate": 4 },
    //                     { "bracket": 8500, "marginal_rate": 4.5 },
    //                     { "bracket": 11700, "marginal_rate": 5.25 },
    //                     { "bracket": 13900, "marginal_rate": 5.9 },
    //                     { "bracket": 21400, "marginal_rate": 6.45 },
    //                     { "bracket": 80650, "marginal_rate": 6.65 },
    //                     { "bracket": 215400, "marginal_rate": 6.85 },
    //                     { "bracket": 1077550, "marginal_rate": 8.82 }
    //                   ]
    //                 },
    //                 "married": {
    //                   "specialtaxes": [],
    //                   "deductions": [
    //                     {
    //                       "deduction_name": "Standard Deduction (Married)",
    //                       "deduction_amount": 16050
    //                     }
    //                   ],
    //                   "credits": [],
    //                   "annotations": [],
    //                   "income_tax_brackets": [
    //                     { "bracket": 0, "marginal_rate": 4 },
    //                     { "bracket": 17150, "marginal_rate": 4.5 },
    //                     { "bracket": 23600, "marginal_rate": 5.25 },
    //                     { "bracket": 27900, "marginal_rate": 5.9 },
    //                     { "bracket": 43000, "marginal_rate": 6.45 },
    //                     { "bracket": 161550, "marginal_rate": 6.65 },
    //                     { "bracket": 323200, "marginal_rate": 6.85 },
    //                     { "bracket": 2155350, "marginal_rate": 8.82 }
    //                   ]
    //                 },
    //                 "married_separately": {
    //                   "specialtaxes": [],
    //                   "deductions": [
    //                     {
    //                       "deduction_name": "Standard Deduction (Married Separately)",
    //                       "deduction_amount": 8000
    //                     }
    //                   ],
    //                   "credits": [],
    //                   "annotations": [],
    //                   "income_tax_brackets": [
    //                     { "bracket": 0, "marginal_rate": 4 },
    //                     { "bracket": 8500, "marginal_rate": 4.5 },
    //                     { "bracket": 11700, "marginal_rate": 5.25 },
    //                     { "bracket": 13900, "marginal_rate": 5.9 },
    //                     { "bracket": 21400, "marginal_rate": 6.45 },
    //                     { "bracket": 80650, "marginal_rate": 6.65 },
    //                     { "bracket": 215400, "marginal_rate": 6.85 },
    //                     { "bracket": 1077550, "marginal_rate": 8.82 }
    //                   ]
    //                 },
    //                 "head_of_household": {
    //                   "specialtaxes": [],
    //                   "deductions": [
    //                     {
    //                       "deduction_name": "Standard Deduction (Head Of Household)",
    //                       "deduction_amount": 11200
    //                     }
    //                   ],
    //                   "credits": [],
    //                   "annotations": [],
    //                   "income_tax_brackets": [
    //                     { "bracket": 0, "marginal_rate": 4 },
    //                     { "bracket": 12800, "marginal_rate": 4.5 },
    //                     { "bracket": 17650, "marginal_rate": 5.25 },
    //                     { "bracket": 20900, "marginal_rate": 5.9 },
    //                     { "bracket": 32200, "marginal_rate": 6.45 },
    //                     { "bracket": 107650, "marginal_rate": 6.65 },
    //                     { "bracket": 269300, "marginal_rate": 6.85 },
    //                     { "bracket": 1616450, "marginal_rate": 8.82 }
    //                   ]
    //                 }
    //               },
    //             ohio: {
    //                 "single": {
    //                   "specialtaxes": [],
    //                   "deductions": [],
    //                   "credits": [],
    //                   "annotations": [],
    //                   "income_tax_brackets": [
    //                     { "bracket": 0, "marginal_rate": 0 },
    //                     { "bracket": 10851, "marginal_rate": 1.98 },
    //                     { "bracket": 16300, "marginal_rate": 2.476 },
    //                     { "bracket": 21750, "marginal_rate": 2.969 },
    //                     { "bracket": 43450, "marginal_rate": 3.465 },
    //                     { "bracket": 86900, "marginal_rate": 3.96 },
    //                     { "bracket": 108700, "marginal_rate": 4.957 },
    //                     { "bracket": 217400, "marginal_rate": 4.997 }
    //                   ]
    //                 },
    //                 "married": {
    //                   "specialtaxes": [],
    //                   "deductions": [],
    //                   "credits": [],
    //                   "annotations": [],
    //                   "income_tax_brackets": [
    //                     { "bracket": 0, "marginal_rate": 0 },
    //                     { "bracket": 10851, "marginal_rate": 1.98 },
    //                     { "bracket": 16300, "marginal_rate": 2.476 },
    //                     { "bracket": 21750, "marginal_rate": 2.969 },
    //                     { "bracket": 43450, "marginal_rate": 3.465 },
    //                     { "bracket": 86900, "marginal_rate": 3.96 },
    //                     { "bracket": 108700, "marginal_rate": 4.957 },
    //                     { "bracket": 217400, "marginal_rate": 4.997 }
    //                   ]
    //                 },
    //                 "married_separately": {
    //                   "specialtaxes": [],
    //                   "deductions": [],
    //                   "credits": [],
    //                   "annotations": [],
    //                   "income_tax_brackets": [
    //                     { "bracket": 0, "marginal_rate": 0 },
    //                     { "bracket": 10851, "marginal_rate": 1.98 },
    //                     { "bracket": 16300, "marginal_rate": 2.476 },
    //                     { "bracket": 21750, "marginal_rate": 2.969 },
    //                     { "bracket": 43450, "marginal_rate": 3.465 },
    //                     { "bracket": 86900, "marginal_rate": 3.96 },
    //                     { "bracket": 108700, "marginal_rate": 4.957 },
    //                     { "bracket": 217400, "marginal_rate": 4.997 }
    //                   ]
    //                 },
    //                 "head_of_household": {
    //                   "specialtaxes": [],
    //                   "deductions": [],
    //                   "credits": [],
    //                   "annotations": [],
    //                   "income_tax_brackets": [
    //                     { "bracket": 0, "marginal_rate": 0 },
    //                     { "bracket": 10851, "marginal_rate": 1.98 },
    //                     { "bracket": 16300, "marginal_rate": 2.476 },
    //                     { "bracket": 21750, "marginal_rate": 2.969 },
    //                     { "bracket": 43450, "marginal_rate": 3.465 },
    //                     { "bracket": 86900, "marginal_rate": 3.96 },
    //                     { "bracket": 108700, "marginal_rate": 4.957 },
    //                     { "bracket": 217400, "marginal_rate": 4.997 }
    //                   ]
    //                 }
    //               },
    //             texas:
    //             {
    //               "single": {
    //                 "type": "none"
    //               },
    //               "married": {
    //                 "type": "none"
    //               },
    //               "married_separately": {
    //                 "type": "none"
    //               },
    //               "head_of_household": {
    //                 "type": "none"
    //               }
    //             }
    //         }
    //     }];
    // let answer = tax_brackets[0];
    // let more = tax_brackets.map((key, value) => {
    //   console.log(value); // returns 0, as that's the value of tax_brackets, technically.
    //   console.log(key); // returns 2020 object and children
    // });
    // console.log(answer["2020"]["california"]);
    // if this is ever wrong, it throws "Uncaught TypeError: Cannot read properties of undefined (reading 'california") to the console

    // END DATA IMPORT NOTES
    const [income, setIncome] = useState('50000');
    const [selectedState, setSelectedState] = useState('california');
    const [stateTaxOwed, setStateTaxOwed] = useState(0);
    const [federalTaxOwed, setFederalTaxOwed] = useState(0);
    const [remainingIncome, setRemainingIncome] = useState(0);

    function handleSubmission(event) {
      event.preventDefault();
      // console.log("submission method reached");
      // var form = event.target;
      // console.log("From the form: ");
      // console.log(form.income.value);
      // console.log(form.selectedState.value);
      // console.log("From the state: ");
      // console.log(income);
      // console.log(selectedState);

      calculateTaxes(income, selectedState);
    }
    
    function handleAddedDigit(event) {
      setIncome(event.target.value);
    }

    function handleStateSelection(event) {
      setSelectedState(event.target.value);
    }

    // function calculateTaxes(income, selectedState) {
    //   const tax_brackets = tax_information[0][2020];
    //   let temporary_static_brackets = tax_brackets[selectedState]["married"]["income_tax_brackets"];

    //   let taxesOwed = 0;
    //   const invertedBrackets = temporary_static_brackets.reverse();
    //   let remainingIncome = income;

    //   for (let i = 0; i < temporary_static_brackets.length; i++) {
    //     if (invertedBrackets[i].bracket <= remainingIncome) {
    //       let amount_to_tax = remainingIncome - invertedBrackets[i].bracket;
    //       let tax_rate = invertedBrackets[i].marginal_rate / 100;
    //       let owedTaxFromBracket = amount_to_tax * tax_rate;
    //       taxesOwed = taxesOwed + owedTaxFromBracket;
    //       remainingIncome = invertedBrackets[i].bracket;
    //     }
    //   }

    //   let presentationTax = prettifyNumber(taxesOwed);
    //   setStateTaxOwed(presentationTax);
    // }


    function calculateTaxes(income, selectedState) {
      // apply standard deductions to get to taxable income
      let federalData = tax_information[0][2020]["federal"]["tax_withholding_percentage_method_tables"]["annual"]["married"];
      let federalDeduction = federalData["deductions"][0]["deduction_amount"];
      let federalTaxBrackets = federalData["income_tax_brackets"];
      let taxableFederalIncome = income - federalDeduction;

      let stateData = tax_information[0][2020][selectedState]["married"];
      let stateDeduction = stateData["deductions"][0]["deduction_amount"];
      let stateTaxBrackets = stateData["income_tax_brackets"];
      let taxableStateIncome = income - stateDeduction;
      // does my data change here from submission to submission? no.
      // console.log(taxableFederalIncome);
      // console.log(taxableStateIncome);

      // apply tax brackets
      let federalTaxesOwed = calculateTaxFromBracketSet(taxableFederalIncome, federalTaxBrackets);
      let stateTaxesOwed = calculateTaxFromBracketSet(taxableStateIncome, stateTaxBrackets);
      // here the numbers are different:
      console.log(federalTaxesOwed);
      console.log(stateTaxesOwed);

      let combinedTax = federalTaxesOwed + stateTaxesOwed;
      let remainingFunds = income - combinedTax;

      // limit the decimal to .00 and add commas
      let presentationFederalTax = prettifyNumber(federalTaxesOwed);
      let presentationStateTax = prettifyNumber(stateTaxesOwed);
      let presentRemainingFunds = prettifyNumber(remainingFunds);

      // revise state
      setFederalTaxOwed(presentationFederalTax);
      setStateTaxOwed(presentationStateTax);
      setRemainingIncome(presentRemainingFunds);
    }

    /**
     * 
     * @param {number} income: 
     * @param {[{}, {}} taxBrackets: 
                // [
                //   { "bracket": 0, "marginal_rate": 0 },
                //   { "bracket": 10851, "marginal_rate": 1.98 },
                //   { "bracket": 16300, "marginal_rate": 2.476 },
                //   { "bracket": 21750, "marginal_rate": 2.969 },
                //   { "bracket": 43450, "marginal_rate": 3.465 },
                //   { "bracket": 86900, "marginal_rate": 3.96 },
                //   { "bracket": 108700, "marginal_rate": 4.957 },
                //   { "bracket": 217400, "marginal_rate": 4.997 }
                // ]
     * @returns taxesOwed: 255.55114
     */
    function calculateTaxFromBracketSet(income, taxBrackets) {
      let taxesOwed = 0;
      // this is so that we stay on the same iteration between a bracket and the marginal rate we want to apply to the income value.
      const climbableBrackets = taxBrackets.reverse();

      for (let i = 0; i < climbableBrackets.length; i++) {
        console.log("regardless of if, this will appear.")
        if (climbableBrackets[i].bracket <= income) {
          let amountToTax = income - climbableBrackets[i].bracket;
          console.log("Amount to tax: "+amountToTax);
          let taxRate = climbableBrackets[i].marginal_rate / 100;
          console.log("Tax rate: "+taxRate);
          let owedTaxFromBracket = amountToTax * taxRate;

          // i'm not sure what in here it is. i was messing with setting the income, which i think may be on the right path? but isn't the answer in its current form.
          income = income - amountToTax;
          taxesOwed = taxesOwed + owedTaxFromBracket;
        }
      }
      
      return taxesOwed;
    }

    function prettifyNumber(taxesOwed) {
      // i'll add commas here one day :(
      return taxesOwed.toFixed(2);
    }

    return (
      <div className="life-calculator">
        <form onSubmit={handleSubmission}>
          <label>
            Annual income
            <input type="text" name="income" value={income} onChange={handleAddedDigit} />
          </label>
          <p className="validation-message"></p>
          <h3>You earned ${income}</h3>
          <label>
            Select your state
            <select name="selectedState" value={selectedState} onChange={handleStateSelection}>
              <option value="california">California</option>
              <option value="new_york">New York</option>
              <option value="ohio">Ohio</option>
              <option value="texas">Texas</option>
            </select>
          </label>
          <button type="submit">Go!</button>
        </form>
        <LifeCalculatorResults stateTaxOwed={stateTaxOwed} federalTaxOwed={federalTaxOwed} remainingIncome={remainingIncome} />
        {/* <Card>
            <Product details={taxBrackets} /> 
        </Card> */}
      </div>
    );
}

export default LifeCalculator;


/**
 * Things I've noticed:
 * - Adding decimals to the input field value vastly skews the end result. Shouldn't do that.
 * - He ugly
 * - I want
 */