import { useWindowSize } from "@uidotdev/usehooks";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../components/PrimaryButton";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Credit from "../components/PhotoCredit";

const Article = () => {
  const size = useWindowSize();
  const { t } = useTranslation();
  return (
    <div style={{ paddingTop: "65px" }}>
      <Container fluid className="p-0">
        <Row>
          <Col md={6}>
            <div className="fn-art-main-hl">
              <div className="fn-art-main-img">
                <img
                  alt=""
                  src={require("../assets/images/pic/sample-pictures/sample-3.webp")}
                />
              </div>
              <div className="fn-art-title p-4">
                <Badge
                  className="fn-article-category"
                  bg=""
                  style={{
                    backgroundColor: "rgba(245, 173, 203, 0.85)",
                  }}
                >
                  MEMBER
                </Badge>
                <div className="fn-art-hl-title-text my-3">
                  Contoh Artikel Utama <br /> Lorem Ipsum Dolor Sit Amet
                </div>
                <div className="fn-art-hl-date-text">8 Agustus 2024</div>
                <div className="fn-txt-selengkapnya p-4">Selengkapnya</div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6}>1</Col>
              <Col md={6}>2</Col>
            </Row>
            <Row>
              <Col md={6}>3</Col>
              <Col md={6}>4</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Article;
