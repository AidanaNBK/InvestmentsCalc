import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Result(props) {
  const result = calculateInvestmentResults(props.data);
  // console.log(result);
  let initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((elem) => {
          let totalInterest =
            elem.valueEndOfYear -
            elem.annualInvestment * elem.year -
            initialInvestment;
          let totalAmountInvested = elem.valueEndOfYear - totalInterest;
          return (
            <tr key={elem.year}>
              <td>{elem.year}</td>
              <td>{formatter.format(elem.valueEndOfYear)}</td>
              <td>{formatter.format(elem.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
