import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Menubar = () => {
  const { t } = useTranslation();
  const menus = [
    {
      title: t("navbar.home"),
      link: "/",
    },
    { title: t("navbar.freya-gallery"), link: "/galeri-freya" },
    { title: t("navbar.freyanation-gallery"), link: "/galeri-freyanation" },
    {
      title: t("navbar.blog"),
      link: "/blog",
    },
    {
      title: t("navbar.schedule"),
      link: "/jadwal",
    },
    {
      title: t("navbar.profile"),
      link: "/profil",
    },
    {
      title: t("navbar.about-freyanation"),
      link: "/freyanation",
    },
  ];
  return (
    <>
      <Container fluid className="fn-footer py-3 px-4">
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={3} className="py-3">
            <div className="d-flex align-items-center">
              <img
                alt=""
                src={require("../assets/images/icon/fn-logo.png")}
                width="30"
              />
              <div className="ms-3 fn-txt-freyanation-footer">
                <h5>FREYANATION</h5>
              </div>
            </div>
            <div
              className="mt-2"
              dangerouslySetInnerHTML={{ __html: t("footer_desc") }}
            ></div>
          </Col>
          <Col xs={12} md={6} lg={3} className="py-3">
            <div className="fn-footer-title mb-2">
              <h5>{t("footer.fast-links")}</h5>
            </div>
            {menus.map((menu) => {
              return (
                <div className="py-1 fn-footer-link">
                  <a href={menu.link}>{menu.title} </a>
                </div>
              );
            })}
          </Col>
          <Col xs={12} md={6} lg={3} className="py-3">
            <div className="fn-footer-title mb-2">
              <h5>{t("footer.join-us")}</h5>
            </div>
            <div className="py-1 fn-footer-link">Email</div>
          </Col>
        </Row>
      </Container>
      <Container className="text-center fn-copyright-text my-3">
        2024 - All Right Reserved. Proudly Presented by Freyanation
      </Container>
    </>
  );
};

export default Menubar;
