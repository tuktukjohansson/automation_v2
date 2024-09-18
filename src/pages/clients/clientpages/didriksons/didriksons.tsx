import React from "react";

// Components
import Container from "../../../../components/container/container.tsx";
import Clientpage from "../../../../components/clientpage/clientpage.tsx";
import { useTranslation } from "react-i18next";

// Images
import Maxm_banner from "../../../../images/clients/banners/maxm.png";
import Maxm_Tech from "../../../../images/clients/techs/gothes_tech.webp";

import "./didriksons.scss";

const Didriksons = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <div className="maxmpage">
        <Container>
          <Clientpage
            overimgdescription={t("clients.didriksons.overimgdescription")}
            underimgdescription={t("clients.didriksons.underimgdescription")}
            quote={t("clients.didriksons.quote")}
            nameandposition={t("clients.didriksons.nameandposition")}
            discover={t("clients.didriksons.discover")}
            challengetitle={t("clients.didriksons.challenge.title")}
            challengedescription={t("clients.didriksons.challenge.description")}
            solutiontitle={t("clients.didriksons.solution.title")}
            solutiondescription={t("clients.didriksons.solution.description")}
            resulttitle={t("clients.didriksons.result.title")}
            resultdescription={t("clients.didriksons.result.description")}
            img={Maxm_banner}
            imgtech={Maxm_Tech}
          />
        </Container>
      </div>
    </>
  );
};

export default Didriksons;
