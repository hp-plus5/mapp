import { useEffect } from "react";

export default function LifeCalculatorResults(props) {

    useEffect(() => {
        if (props.remainingIncome !== 0 && props.remainingIncome < 5000) {
            document.title = `Oof, you need more money`;
        }
    });

    return(<>
        <p>You would owe ${props.stateTaxOwed} in state taxes</p>
        <p>You would owe ${props.federalTaxOwed} in federal taxes</p>
        <p>You would have ${props.remainingIncome} after taxes</p>
    </>);
}