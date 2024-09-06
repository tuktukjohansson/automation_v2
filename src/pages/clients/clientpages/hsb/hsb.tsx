import React from "react";

// Components
import Container from "../../../../components/container/container.tsx";
import Clientpage from "../../../../components/clientpage/clientpage.tsx";
import { useTranslation } from "react-i18next";

// Images
import Hsb_Banner from "../../../../images/clients/banners/hsb.webp";
import Hsb_tech from "../../../../images/clients/techs/gothes_tech.webp";

import "./hsb.scss";

const Hsb = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <div className="hsbpage">
        <Container>
          <Clientpage
            overimgdescription={t("clients.hsb.overimgdescription")}
            underimgdescription={t("clients.hsb.underimgdescription")}
            quote={t("clients.hsb.quote")}
            nameandposition={t("clients.hsb.nameandposition")}
            discover={t("clients.hsb.discover")}
            challengetitle={t("clients.hsb.challenge.title")}
            challengedescription={t("clients.hsb.challenge.description")}
            solutiontitle={t("clients.hsb.solution.title")}
            solutiondescription={t("clients.hsb.solution.description")}
            resulttitle={t("clients.hsb.result.title")}
            resultdescription={t("clients.hsb.result.description")}
            img={Hsb_Banner}
            imgtech={Hsb_tech}
          />
        </Container>
      </div>
    </>
  );
};

export default Hsb;
