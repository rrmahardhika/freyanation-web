import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import config from "../config";

const NavBar = () => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(null);

  function changeLanguage(e) {
    const code = e.value;
    setLanguage(code);
    localStorage.setItem("lang", JSON.stringify(e));
    if (i18n.language !== code) {
      i18n.changeLanguage(code);
    }
  }

  function initLanguage() {
    const lang = localStorage.getItem("lang");
    if (lang) {
      changeLanguage(JSON.parse(lang));
    } else {
      changeLanguage({
        value: "id",
        text: "Bahasa Indonesia",
        icon: "idn-logo.png",
        textLabel: "IDN",
      });
    }
  }

  const langOptions = [
    {
      value: "id",
      text: "Bahasa Indonesia",
      icon: "idn-logo.png",
      textLabel: "IDN",
    },
    {
      value: "en",
      text: "English",
      icon: "eng-logo.png",
      textLabel: "ENG",
    },
  ];

  const renderLangLabel = () => {
    const selectedLang = langOptions.find((l) => l.value == language);
    const langLabelElement = (
      <div className="lang-label p-1">
        <img
          alt=""
          src={require(`../assets/images/icon/${selectedLang.icon}`)}
          width="30"
          className="d-inline-block me-2"
        />
        {selectedLang.textLabel}
        <FontAwesomeIcon icon={faAngleDown} className="ms-2" />
      </div>
    );
    return langLabelElement;
  };

  const isAutoScrolled = () => {
    const pathNames = [
      "/galeri-freya",
      "/galeri-freyanation",
      "/detail-galery",
      "/profil",
      "/freyanation",
      "/jadwal",
    ];
    const notScrolledUrl = pathNames.some(
      (path) =>
        window.location.pathname.startsWith(path) ||
        window.location.pathname == "/"
    );
    return !notScrolledUrl;
  };

  const menus = [
    {
      title: t("navbar.home"),
      link: "/",
    },
    {
      items: [
        { title: t("navbar.freya-gallery"), link: "/galeri-freya" },
        { title: t("navbar.freyanation-gallery"), link: "/galeri-freyanation" },
      ],
      title: t("navbar.gallery"),
    },
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.onscroll = () => {
      if (isAutoScrolled()) setScrolled(true);
      else {
        if (window.scrollY >= 120) setScrolled(true);
        else setScrolled(false);
      }
    };

    if (isAutoScrolled()) setScrolled(true);
    initLanguage();
  }, []);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={` fn-font-title ${
        scrolled ? "scrolled-nav" : "unscrolled-nav"
      }`}
    >
      <Container fluid>
        <Navbar.Brand
          href="#"
          id="navbarBrand"
          style={{ marginRight: "100px" }}
        >
          <img
            alt=""
            src={require("../assets/images/icon/fn-logo.png")}
            width="40"
            className="d-inline-block"
          />
          {""}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={`${scrolled ? "" : "mt-2"}`}
          style={{ backgroundColor: "white" }}
        />
        <Navbar.Collapse id="basic-navbar-nav" className="fn-navbar-nav">
          <Nav
            style={{ height: "100%", width: "100%" }}
            activeKey={location.pathname}
          >
            {menus.map((menu) => {
              let NavbarElement = (
                <Nav.Link
                  className={`px-3 mx-1 fn-navbar-text`}
                  href={`${config.basename}/#${menu.link}`}
                  key={menu.link}
                >
                  {menu.title.toUpperCase()}
                </Nav.Link>
              );
              if (menu.items) {
                const navDropdownTitle = (
                  <>
                    {" "}
                    <div className="me-2">{menu.title.toUpperCase()}</div>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </>
                );
                NavbarElement = (
                  <>
                    <NavDropdown
                      className={`px-3 mx-1 fn-navbar-text ${
                        location.pathname.includes("galeri") ? "active" : ""
                      }`}
                      title={navDropdownTitle}
                    >
                      {menu.items.map((item) => {
                        return (
                          <NavDropdown.Item
                            className="py-2"
                            href={`${config.basename}/#${item.link}`}
                            key={item.link}
                          >
                            {item.title}
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                  </>
                );
              }
              return NavbarElement;
            })}
          </Nav>
          <Nav class="language-select">
            {language && (
              <Dropdown activeKey={language} className="px-3 mx-1">
                <Dropdown.Toggle id="lang-dropdown" as="button">
                  {renderLangLabel()}
                </Dropdown.Toggle>
                <Dropdown.Menu align={"end"}>
                  {langOptions.map((lang) => {
                    return (
                      <Dropdown.Item
                        key={lang.value}
                        onClick={() => changeLanguage(lang)}
                        className={language == lang.value ? "active" : ""}
                      >
                        {lang.text}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
