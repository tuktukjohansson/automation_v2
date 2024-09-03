import React from "react";

// Components
import Container from "../../../components/container/container.tsx";
import InformationBox from "../../../components/information-box/information-box.tsx";

// Images

import "./analytics.scss";
import AdminTaskImage from "../../../images/other/admin-task.webp";

const Analytics = () => {
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <div className="analyticsPage">
        <Container>
          <div className="gradient-container">
            <div className="analytics-title">
              Analys
              <br />
            </div>
            <div className="analytics-description1">
              Vet ni att ni vill komma igång med generativ AI och automation men
              undrar vad som är första steget? Tvekar ni på om ni ska sätta
              igång med förändringsresan nu eller vänta ett tag till?
            </div>
            <div className="analytics-description2">
              Analys är Violet Automations konsulttjänster som analyserar och
              rådger företag på AI-resan och kommer i två tappningar Strategisk
              kartläggning och Processkartläggning.
            </div>
          </div>
        </Container>
        <Container>
          <InformationBox
            reverse={true}
            title={"Analys - Processkartläggning"}
            description={
              "Har ni identifierat ett område eller en specifik process som ni vill effektivisera? Då är vår kostnadsfria tjänst ProcessAnalys för er. Vi inleder med ett video introduktionsmöte där ni ger en överblick av processen. Vi gör en bedömning och finns förutsättningar bokar vi därefter upp en detaljerad kartläggning via videomöte där ni demonstrerar hur nuvarande manuella arbetsflödet sker det, vilka system använder ni, vilken data används och vilka aktiviteter som sker. Efter eventuella kompletterande frågor tar vi fram ett lösningsförslag till er, komplett med prisuppgift och implementeringsplan."
            }
            img={AdminTaskImage}
            point1title="Värde:"
            point1text1="Hjälp att komma igång och veta vad som ska prioriteras."
            point1text2="Inspiration? Öppna ögon för hur man kan göra."
            point1text3="Konkreta förslag på vad som kan göras."
            point2title="AI Transformation Insights innefattar:"
            point2text1="Interaktiv workshop för att komma igång. Inspirera, utbilda och aktivera organisationen."
            point2text2="Kartläggning med intervjuer."
            point2text3="Rådgivning. Business Case med insikter."
            point2text4="Implementation. Plan för implementation med tidsplaner och prisförslag."
          />
        </Container>
        <Container>
          <InformationBox
            reverse={false}
            title={"Analys - Strategisk kartläggning"}
            description={
              "Med AI Transformation Insights går ditt team igenom en noggrant strukturerad process som kombinerar workshops och djupgående intervjuer. Violet Automations erfarna konsulter hjälper er att identifiera områden för tillämpning av automation och generativ AI. Vi erbjuder ett enkelt och effektivt sätt att komma igång, där ni efter bara fyra veckor får konkreta förslag på åtgärder och produkter med potential att öka både produktivitet och lönsamhet på sista raden."
            }
            description2={
              "Vi inleder processen med en strategisk workshop för att få en djupgående förståelse för era kärnprocesser och aktuella utmaningar. Efter workshopen väljer vi tillsammans ut ett par specifika intervjuer för att säkerställa en omfattande analys. Därefter presenterar vi ett första förslag för er att ta ställning till, inklusive flera idéer – både omedelbara automationer med tydlig ROI (Return on Investment) och spännande nya tjänster som har potential att transformera ert företag."
            }
            description3="Vi analyserar även hur tekniken och människan ska samverka och tar fram en roadmap som säkerställer en smidig implementering för era medarbetare. Genom denna strukturerade och snabba approach säkerställer vi att ni får de bästa lösningarna för att inte bara optimera er verksamhet, utan också positionera er för framtida tillväxt och innovation."
            img={AdminTaskImage}
            point1title="Värde:"
            point1text1="Hjälp att komma igång och veta vad som ska prioriteras."
            point1text2="Inspiration? Öppna ögon för hur man kan göra."
            point1text3="Konkreta förslag på vad som kan göras."
            point2title="AI Transformation Insights innefattar:"
            point2text1="Interaktiv workshop för att komma igång. Inspirera, utbilda och aktivera organisationen."
            point2text2="Kartläggning med intervjuer."
            point2text3="Rådgivning. Business Case med insikter."
            point2text4="Implementation. Plan för implementation med tidsplaner och prisförslag."
          />
        </Container>
      </div>
    </>
  );
};

export default Analytics;
