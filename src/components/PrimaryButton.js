import Button from "react-bootstrap/Button";

function PrimaryButton(props) {
  return (
    <Button className="fn-primary-btn" onClick={props.onClick}>
      {props.text}
    </Button>
  );
}

export default PrimaryButton;
