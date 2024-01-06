import Button from "react-bootstrap/Button";

function SocmedButton(props) {
  return (
    <Button
      className="fn-primary-btn"
      onClick={() => {
        window.open(props.url);
      }}
    >
      <div className="d-flex" style={{ color: "white" }}>
        <img
          alt=""
          src={require(`../assets/images/icon/${props.logo}`)}
          width="45"
          height="45"
          className="d-inline-block"
        />
        <div className="ms-2 ps-1 d-none d-sm-block" style={{ width: "100px" }}>
          <div
            style={{ fontWeight: 600, fontSize: "16px", textAlign: "start" }}
          >
            {props.name}
          </div>
          <div
            style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "15px",
              textAlign: "start",
            }}
          >
            {props.account}
          </div>
        </div>
      </div>{" "}
    </Button>
  );
}

export default SocmedButton;
