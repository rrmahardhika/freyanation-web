import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useRef } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import Credit from "../components/PhotoCredit";

const Profile = () => {
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
            <h3>Galeri Freya</h3>
            <div className="fn-line-title"></div>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          eleifend feugiat mattis. Curabitur malesuada posuere nulla in
          imperdiet. Cras non egestas turpis. Proin nec laoreet metus. Sed
          rhoncus odio eget lectus gravida auctor vel ut ex. Aenean ligula
          tortor, auctor ac semper ut, condimentum sed tellus. Proin ut nisl
          ante. Maecenas nec elementum ante. Fusce congue libero sit amet lectus
          vulputate consectetur. Fusce quis consequat leo. Nulla porttitor,
          augue vel vestibulum gravida, metus urna dictum odio, vitae ultrices
          lacus ex sit amet diam. Sed pulvinar tellus non facilisis sagittis.
          Mauris porta maximus lacinia. Phasellus et lectus fringilla, placerat
          neque ut, interdum tellus. Quisque quis tempor augue. Etiam eu
          elementum lectus, at aliquet neque. Nunc vitae venenatis lacus, et
          tempor turpis. Fusce ut imperdiet justo. Aliquam vitae tortor elit.
          Donec sit amet ante bibendum, iaculis tortor eu, vulputate magna.
          Nullam justo urna, dignissim in tempus id, ullamcorper ut eros. Nam in
          dignissim ex. Pellentesque consequat eleifend mi, vitae pulvinar est
          sagittis vel. In hac habitasse platea dictumst. Curabitur cursus
          tellus eleifend turpis interdum tincidunt. Donec sapien nunc,
          pellentesque ullamcorper ullamcorper malesuada, rhoncus at augue. Duis
          commodo nisl in urna venenatis euismod. Pellentesque porttitor nibh in
          massa auctor, ut hendrerit leo vehicula. Vivamus consequat pretium
          nisl id ultricies. Phasellus condimentum dignissim nulla, sed dictum
          nibh consequat sed. In hac habitasse platea dictumst. Proin et cursus
          magna, at dictum lectus. Sed vel ex in turpis rutrum feugiat at et
          tellus. Etiam lacinia ipsum at elit convallis, non lobortis elit
          lobortis. Donec libero erat, iaculis cursus ex dignissim, tempus
          ornare erat. Nunc tempor lobortis justo in eleifend. Donec non justo
          accumsan, molestie velit eu, ultrices lacus. Mauris vel accumsan
          augue, at dignissim nisl. Duis dolor libero, convallis eget lacus sit
          amet, pellentesque laoreet magna. Integer iaculis odio nibh, id
          malesuada ligula finibus vitae. Nulla eleifend nibh pharetra, mollis
          nisi non, auctor diam. Vestibulum arcu eros, ullamcorper nec aliquet
          et, condimentum sit amet nibh. Mauris eget nisi malesuada, iaculis
          erat ut, aliquam metus. Duis et sodales lorem. Aliquam facilisis diam
          mauris, at tempus nisi laoreet varius. Integer venenatis nunc at quam
          lobortis varius. Phasellus in tellus at orci pretium tempus. Aenean
          eget pharetra risus. In suscipit est sed mi mattis condimentum.
          Praesent vitae leo et risus mattis semper. Suspendisse at vulputate
          libero. Morbi at viverra lacus. Suspendisse eu consequat lacus.
        </div>
      </div>
    </>
  );
};

export default Profile;
