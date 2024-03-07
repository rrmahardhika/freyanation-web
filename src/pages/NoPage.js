import { useWindowSize } from "@uidotdev/usehooks";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../components/PrimaryButton";
import { Container, Row, Col } from "react-bootstrap";
import Credit from "../components/PhotoCredit";

const NoPage = () => {
  const size = useWindowSize();
  const { t } = useTranslation();
  return (
    <div
      className={`fn-page-content-bg ${
        size.width < 500 ? "px-2 pb-2" : "px-4 pb-4"
      }`}
      style={{ paddingTop: "95px" }}
    >
      <div className="fn-page-content p-4">
        <div className="fn-content-title mb-3">
          <h3>{t("page_not_found")}</h3>
          <div className="fn-line-title"></div>
          <div className="fn-content-text mt-3">
            <Container className="m-0 p-0">
              <Row>
                <Col xs={12} sm={6} md={4} style={{ overflow: "hidden" }}>
                  <div style={{ position: "relative" }}>
                    <img
                      alt=""
                      src={require("../assets/images/pic/not-found.webp")}
                      height="550"
                      width="100%"
                      style={{ objectFit: "cover" }}
                    />
                    <Credit
                      creditName="amortentia"
                      positionBottom="2vw"
                      positionRight="0px"
                      link="https://x.com/amortentia0213/"
                    />
                  </div>
                </Col>
                <Col xs={12} sm={6} md={8}>
                  <div
                    className="mb-4"
                    dangerouslySetInnerHTML={{
                      __html: t("page_not_found_desc"),
                    }}
                  />
                  <PrimaryButton
                    text={t("btn_back_to_main")}
                    onClick={() => {
                      location.href = "/";
                    }}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
