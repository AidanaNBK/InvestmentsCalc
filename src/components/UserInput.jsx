import InputElement from "./InputElement.jsx";
export default function UserInput(props) {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputElement
          change={props.change}
          name="initialInvestment"
          data={props.data}
        >
          Initial Investment
        </InputElement>
        <InputElement
          change={props.change}
          name="annualInvestment"
          data={props.data}
        >
          Annual Investment
        </InputElement>
      </div>
      <div className="input-group">
        <InputElement
          change={props.change}
          name="expectedReturn"
          data={props.data}
        >
          Expected Return
        </InputElement>
        <InputElement change={props.change} name="duration" data={props.data}>
          Duration
        </InputElement>
      </div>
    </section>
  );
}
