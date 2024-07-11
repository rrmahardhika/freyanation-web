import { useTranslation } from "react-i18next";
import { useWindowSize } from "@uidotdev/usehooks";
import Credit from "../components/PhotoCredit";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import ScheduleTile from "../components/ScheduleTile";

const Schedule = () => {
  const size = useWindowSize();
  const { t } = useTranslation();
  const [todaySchedules, setTodaySchedules] = useState([]);

  function renderTodaySchedules() {
    let offset = -100;
    return (
      <div className="d-block d-sm-flex py-2">
        {todaySchedules.map((sch) => {
          offset += 100;
          return (
            <div className={size.width <= 576 ? "mb-4" : "me-4"}>
              <ScheduleTile schedule={sch} thumbnail="true" />{" "}
            </div>
          );
        })}
      </div>
    );
  }

  function renderWeekSchedules() {
    let offset = -100;
    return (
      <Row className="flex-wrap">
        {todaySchedules.map((sch) => {
          offset += 100;
          return (
            <Col
              xs={12}
              md={12}
              lg={6}
              xl={4}
              data-aos="zoom-in"
              data-aos-delay={size.width <= 1000 ? 0 : offset}
            >
              <ScheduleTile schedule={sch}> </ScheduleTile>
            </Col>
          );
        })}
      </Row>
    );
  }

  useEffect(() => {
    setTodaySchedules([
      {
        date: "2024-01-02",
        time: "16.00",
        event_name: "Aturan Anti Cinta",
        location: "Theater JKT48, F4 Sudirman",
        category: "SHOW THEATER",
        url: "https://jkt48.com",
      },
      {
        date: "2024-01-07",
        time: "17.00",
        event_name: "Tunas Dibalik Seragam",
        location: "Theater JKT48, F4 Sudirman",
        category: "SHOW THEATER",
        url: "https://jkt48.com",
      },
    ]);
  }, []);

  return (
    <>
      <div className="fn-schedule-background fn-header-page">
        <div className="fn-overlay-black">
          <Credit
            creditName="amortentia"
            positionTop="10vw"
            positionRight="0px"
            link="https://x.com/amortentia0213/"
          />
          <div className="fn-page-description">
            <div
              className="fn-page-text-title"
              dangerouslySetInnerHTML={{ __html: t("freya_schedule") }}
            ></div>
            <div
              className="fn-page-text-subtitle"
              dangerouslySetInnerHTML={{ __html: t("freya_schedule_subtitle") }}
            ></div>
          </div>
        </div>
      </div>
      <div className={`fn-page-content-bg ${size.width < 500 ? "p-2" : "p-4"}`}>
        <div className="fn-page-content p-4">
          <div className="fn-content-title mb-3">
            <h3>Jadwal Terkini</h3>
            <div className="fn-line-title"></div>
          </div>
          <div className="fn-schedule-subheader mt-2">HARI INI</div>
          {renderTodaySchedules()}
          <div className="fn-schedule-subheader mt-2">MINGGU INI</div>
          {renderWeekSchedules()}
          <div className="fn-schedule-subheader mt-4">BULAN INI</div>
          {renderWeekSchedules()}
          <div
            className="fn-schedule-subheader mt-4"
            style={{ fontStyle: "italic" }}
          >
            Sudah Berlalu
          </div>
          {renderWeekSchedules()}
        </div>
      </div>
    </>
  );
};

export default Schedule;
