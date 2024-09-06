import React from "react";

// Components
import Container from "../../../../components/container/container.tsx";
import Clientpage from "../../../../components/clientpage/clientpage.tsx";
import { useTranslation } from "react-i18next";

// Images
import Maxm_banner from "../../../../images/clients/banners/maxm.png";
import Maxm_Tech from "../../../../images/clients/techs/gothes_tech.webp";

import "./maxm.scss";

const Maxm = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <div className="maxmpage">
        <Container>
          <Clientpage
            overimgdescription={t("clients.maxm.overimgdescription")}
            underimgdescription={t("clients.maxm.underimgdescription")}
            quote={t("clients.maxm.quote")}
            nameandposition={t("clients.maxm.nameandposition")}
            discover={t("clients.maxm.discover")}
            challengetitle={t("clients.maxm.challenge.title")}
            challengedescription={t("clients.maxm.challenge.description")}
            solutiontitle={t("clients.maxm.solution.title")}
            solutiondescription={t("clients.maxm.solution.description")}
            resulttitle={t("clients.maxm.result.title")}
            resultdescription={t("clients.maxm.result.description")}
            img={Maxm_banner}
            imgtech={Maxm_Tech}
          />
        </Container>
      </div>
    </>
  );
};

export default Maxm;
