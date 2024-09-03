import React from "react";

// Components
import Container from "../../../../components/container/container.tsx";
import Clientpage from "../../../../components/clientpage/clientpage.tsx";
import { useTranslation } from "react-i18next";

// Images
import Maxm_banner from "../../../../images/clients/banners/maxm.png";
import Gothes_Tech from "../../../../images/clients/techs/gothes_tech.webp";

import "./maxm.scss";

const Maxm = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <div className="gothespage">
        <Container>
          <Clientpage
            overimgdescription={t("clients.gothes.overimgdescription")}
            underimgdescription={t("clients.gothes.underimgdescription")}
            quote={t("clients.gothes.quote")}
            nameandposition={t("clients.gothes.nameandposition")}
            discover={t("clients.gothes.discover")}
            challengetitle={t("clients.gothes.challenge.title")}
            challengedescription={t("clients.gothes.challenge.description")}
            solutiontitle={t("clients.gothes.solution.title")}
            solutiondescription={t("clients.gothes.solution.description")}
            resulttitle={t("clients.gothes.result.title")}
            resultdescription={t("clients.gothes.result.description")}
            img={Maxm_banner}
            imgtech={Gothes_Tech}
          />
        </Container>
      </div>
    </>
  );
};

export default Maxm;
