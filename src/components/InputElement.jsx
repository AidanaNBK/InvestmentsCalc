export default function InputElement(props) {
  return (
    <>
      <label>{props.children}</label>
      <input
        type="number"
        required
        value={props.data[props.name]}
        onChange={(event) => {
          props.change(props.name, event.target.value);
        }}
      ></input>
    </>
  );
}
