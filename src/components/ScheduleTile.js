import { Container, Row, Col, Badge } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faClockFour } from "@fortawesome/free-solid-svg-icons";
import { useWindowSize } from "@uidotdev/usehooks";

const ScheduleTile = (props) => {
  const { t } = useTranslation();
  const size = useWindowSize();

  function getImages(category, showName) {
    switch (category) {
      case "SHOW THEATER":
        switch (showName) {
          case "Aturan Anti Cinta":
            return "rkj.webp";
            break;
          case "Tunas Dibalik Seragam":
            return "ramune.webp";
            break;
          default:
            return "event.webp";
            break;
        }
        break;
      case "VIDEO CALL":
        return "vc.webp";
        break;
      default:
        return "event.webp";
        break;
    }
  }

  function getCategoryBadgeColor(category) {
    switch (category) {
      case "SHOW THEATER":
        return "#E64A4A";
        break;
      case "VIDEO CALL":
        return "#8FE64A";
      case "EVENT OFF AIR":
        return "#4AA4E6";
      //set category lain
      default:
        return "#E64A4A";
        break;
    }
  }
  return (
    <div className="d-flex schedule-tile my-2">
      <div className="schedule-tile-date py-2">
        <div style={{ fontSize: "40px", lineHeight: 1.1, fontWeight: 400 }}>
          {props.schedule.date.substr(-2)}
        </div>
        <div style={{ fontSize: "20px", fontWeight: 600, marginTop: "-5px" }}>
          {t(`month.${props.schedule.date.substr(5, 2)}`)}
        </div>
      </div>
      <img
        alt=""
        src={require(`../assets/images/icon/${getImages(
          props.schedule.category,
          props.schedule.event_name
        )}`)}
        className="schedule-img d-none d-sm-block"
      />
      <div className="schedule-desc p-2">
        <Container className="p-0">
          <div className="d-sm-flex d-block justify-content-between">
            <div className="schedule-show">
              {props.schedule ? props.schedule.event_name : ""}
            </div>
            <div className={size.width <= 576 ? "text-start my-2" : "text-end"}>
              <Badge
                pill
                className="fn-badge-schedule"
                bg=""
                style={{
                  backgroundColor: getCategoryBadgeColor(
                    props.schedule.category
                  ),
                }}
              >
                {props.schedule ? props.schedule.category : ""}
              </Badge>
            </div>
          </div>
          <Row>
            <Col className="schedule-loc">
              {props.schedule ? props.schedule.location : ""}
            </Col>
          </Row>
          <Row className="mt-1">
            <Col className="schedule-time">
              <FontAwesomeIcon icon={faClockFour} /> &nbsp;
              {props.schedule ? props.schedule.time : ""}
            </Col>
            <Col className="schedule-more align-self-end">
              <a
                href={props.schedule ? props.schedule.url : "#"}
                target="_blank"
              >
                {t("full_info")}
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ScheduleTile;
