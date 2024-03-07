import { useTranslation } from "react-i18next";
const Credit = (props) => {
  const { t } = useTranslation();
  const style = {
    position: "absolute",
    right: props.positionRight,
    top: props.positionTop,
    left: props.positionLeft,
    bottom: props.positionBottom,
  };
  return (
    <a href={props.link} title={t("visit_link")} target="_blank">
      <div
        style={style}
        className={`picture-credit ${props.small ? "small" : ""}`}
      >
        {t("picture_credit")} <br />
        <span style={{ fontWeight: 600 }}>{props.creditName}</span>
      </div>
    </a>
  );
};

export default Credit;
