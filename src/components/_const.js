import { useTranslation } from "react-i18next";
export const menus = () => {
  const { t } = useTranslation();
  const menus = [
    {
      title: t("navbar.home"),
      link: "/",
    },
    {
      items: [
        { title: t("freya-gallery"), link: "/galeri-freya" },
        { title: t("freyanation-gallery"), link: "/galeri-freyanation" },
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
  return menus;
};
