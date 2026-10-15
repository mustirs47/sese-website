import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FAQPageJsonLd } from "@/components/StructuredData";

interface FAQSectionProps {
  faqs?: { question: string; answer: string }[];
  title?: string;
  light?: boolean;
  /** Set to false when parent already renders FAQPage JSON-LD for the same items. */
  emitJsonLd?: boolean;
}

const defaultFaqs = [
  { question: "Kann ich mehrere Bereiche gleichzeitig beauftragen?", answer: "Ja. Sicherheit, Facility und Event Service lassen sich frei kombinieren – Sie haben in jedem Fall einen festen Ansprechpartner für das gesamte Objekt." },
  { question: "Welche Zulassungen liegen vor?", answer: "Im Bereich Sicherheit arbeiten wir mit der gesetzlich vorgeschriebenen Bewachungserlaubnis und entsprechend geprüftem Personal. Im Facility und Event Service richten sich Einweisung und Qualifikation nach der konkreten Aufgabe. Bewachungsaufgaben bleiben beim Sicherheitsdienst." },
  { question: "Wie schnell bekomme ich eine Rückmeldung?", answer: "In der Regel innerhalb eines Werktags. Bei kurzfristigem Bedarf melden wir uns am selben Tag und prüfen, was sich kurzfristig realisieren lässt." },
  { question: "Sind Sie auch außerhalb von Magdeburg tätig?", answer: "Ja, wir arbeiten bundesweit. Ob und in welcher Form ein Einsatz in Ihrer Region sinnvoll ist, klären wir kurz im Vorfeld." },
  { question: "Wie wird die Leistung dokumentiert?", answer: "Jeder Einsatz wird mit standardisierten Übergabe- und Meldeprotokollen festgehalten. Sie bekommen Berichte in dem Rhythmus, den wir vorab gemeinsam festlegen." },
  { question: "Gibt es feste Vertragslaufzeiten?", answer: "Nein, die Laufzeit wird individuell vereinbart – vom projektbezogenen Einzeleinsatz bis zur langfristigen Objektbetreuung." },
  { question: "Auch nachts und am Wochenende?", answer: "Ja, Nacht-, Wochenend- und Feiertagseinsätze gehören in den Bereichen Sicherheit, Winterdienst und Bauschlussreinigung zum Standard." },
];

const FAQSection = ({ faqs, title = "Häufig gestellte Fragen", light = false, emitJsonLd = true }: FAQSectionProps) => {
  const ref = useScrollAnimation();
  const items = faqs || defaultFaqs;

  return (
    <section className={light ? "section-light" : "bg-background"}>
      {emitJsonLd && <FAQPageJsonLd faqs={items} />}
      <div ref={ref} className="fade-in-section reading-shell">
        <div className="section-head section-head--left !mb-10">
          <span className="eyebrow">FAQ</span>
          <h2 className="h-section">{title}</h2>
          <p className={`mt-3 prose-body ${light ? "text-muted-fg" : "text-muted-foreground"}`}>
            Antworten auf die Fragen, die uns am häufigsten gestellt werden. Fehlt etwas? Schreiben Sie uns kurz – wir antworten persönlich.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full border-t"
          style={light ? { borderColor: "hsl(var(--section-light-border))" } : { borderColor: "hsl(var(--border) / 0.4)" }}
        >
          {items.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              style={light ? { borderColor: "hsl(var(--section-light-border))" } : undefined}
            >
              <AccordionTrigger style={light ? { color: "hsl(var(--section-light-fg))" } : undefined}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                className={light ? "text-muted-fg" : undefined}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
