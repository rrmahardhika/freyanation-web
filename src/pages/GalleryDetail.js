import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useRef } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import Credit from "../components/PhotoCredit";
import { Container, Row, Col } from "react-bootstrap";

const DetailGallery = () => {
  const size = useWindowSize();
  const { t } = useTranslation();

  return (
    <>
      <div className="fn-gallery-background fn-header-page">
        <div className="fn-overlay-black">
          <Credit
            creditName="amortentia"
            positionTop="10vw"
            positionRight="0px"
            link="https://x.com/amortentia0213/"
          />
          <div className="fn-page-description">
            <div className="fn-page-text-title">
              GALERI <span style={{ color: "#F5ADCB" }}>FREYA </span>
            </div>
            <div className="fn-page-text-subtitle">
              Potret keseharian Freya melalui berbagai aktivitas baik di media
              sosial, <br /> show theater hingga event - event offair maupun
              onair
            </div>
          </div>
        </div>
      </div>
      <div className={`fn-page-content-bg ${size.width < 500 ? "p-2" : "p-4"}`}>
        <div className="fn-page-content p-4">
          <div className="fn-content-title mb-3">
            <h3>
              Galeri Album :{" "}
              <span style={{ color: "#F5ADCB" }}>Instastory</span>
            </h3>
            <div className="fn-line-title"></div>
          </div>
          <Container fluid className="p-0 m-0">
            <Row>
              {[0, 1, 2, 3].map(() => {
                let offset = 0;
                return (
                  <Col
                    xs={12}
                    sm={6}
                    md={3}
                    className={size.width <= 500 ? "p-2" : "pe-3"}
                  >
                    <div className="fn-gallery-thumbnail">
                      <img
                        alt=""
                        src={require(`../assets/images/pic/schedule-page-bg.webp`)}
                        className="fn-gallery-image-title"
                      />
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default DetailGallery;
