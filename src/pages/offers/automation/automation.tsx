import React from "react";
import "./automation.scss";

// Components
import Container from "../../../components/container/container.tsx";
import InformationBox from "../../../components/information-box/information-box.tsx";

// Images
import AdminTaskImage from "../../../images/other/admin-task.webp";

const Automation = () => {
  return (
    <>
      <div className="automationPage">
        <Container>
          <div className="gradient-container">
            <div className="automation-title">
              Intelligent automation
              <br />
            </div>
            <div className="automation-description1">
              Vill du öka produktivitet och trivsel hos dina medarbetare,
              eliminera kostnader och förbättra er kundupplevelse?
            </div>
            <div className="automation-description2">
              Violet Automation har en bred erfarenhet av att automatisera
              processer i olika typer av system. Vi automatiserar stora och små
              processer och kan hjälpa er att ta nästa steg även med komplexa
              uppgifter och AI-agenter.
            </div>
          </div>
        </Container>
        <Container>
          <InformationBox
            reverse={true}
            title={"Adminstrativa uppgifter"}
            description={
              "Maximera effektiviteten i er verksamhet genom att automatisera tidskrävande administrativa uppgifter. Våra skräddarsydda lösningar hanterar allt från datainmatning och genomgång av stora datamängder till avancerad tolkning av texter och dokument. Tänk er ett system som självständigt kan läsa och förstå PDF-filer med avtal, order och fakturor, eller extrahera viktig information från e-postmeddelanden."
            }
            description2={
              " Vi automatiserar hela arbetsflöden och anpassar lösningen efter era specifika arbetssätt och regler. Resultatet blir en sömlös end-to-end lösning med exceptionellt hög automationsgrad. Oavsett om det gäller fakturahantering, kundserviceärenden eller personaladministration"
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
            title={"Komplexa uppgifter"}
            description={
              "Revolutionera era affärsprocesser genom att utnyttja kraften i stora språkmodeller (LLM) och AI-agenter. Våra lösningar går bortom traditionell automation genom att använda AI som  resonemang för att hantera komplexa arbetsflöden. Genom direkt integration med era företagsdatakällor och applikationer utför vår AI inte bara analyser – den agerar."
            }
            description2={
              "T.ex intern AI-agent som fungerar som säljassistent som ger era säljare omedelbar tillgång till detaljerad teknisk produktinformation, svarar på komplexa förfrågningar med precision och automatiskt genererar skräddarsydda offerter baserade på kundens specifika behov."
            }
            img={AdminTaskImage}
            point1title="Värde:"
            point1text1="Hjälp att komma igång och veta vad som ska prioriteras."
            point1text2="Inspiration? Öppna ögon för hur man kan göra."
            point1text3="Konkreta förslag på vad som kan göras."
            point2title="Processkartläggning innefattar:"
            point2text1="Har ni redan en färdig process som ni vet behöver automatiseras! Boka en kostnadsfri processkartläggning här!"
          />
        </Container>
      </div>
    </>
  );
};

export default Automation;
