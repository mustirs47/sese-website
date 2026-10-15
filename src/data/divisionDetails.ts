// Vertiefende Textabschnitte je Bereichsseite (Hub). Beantworten die Fragen,
// die Interessenten vor einer Anfrage tatsächlich stellen – und geben den
// Hub-Seiten eigenständigen Inhalt statt nur einer Kachelübersicht.

export interface DivisionDetailBlock {
  heading: string;
  body: string;
}

export const divisionDetails: Record<string, DivisionDetailBlock[]> = {
  facility: [
    { heading: "Ein Umfang, klare Zuständigkeiten", body: "Wir halten fest, welche Gebäude- und Außenflächenleistungen Sie abgeben möchten. Reinigung, Grünpflege, Hausmeister- und Winterdienst erhalten jeweils einen eigenen Umfang und Turnus. Eine feste Ansprechperson führt die Rückmeldungen zusammen." },
    { heading: "Reinigung nach Nutzung", body: "Büros, Sanitärbereiche und Glasflächen brauchen unterschiedliche Verfahren und Intervalle. Wir legen Flächen, Materialien und Zugangszeiten vor dem ersten Einsatz fest. Die Qualitätskontrolle orientiert sich am vereinbarten Leistungsverzeichnis." },
    { heading: "Außenflächen über die Saison", body: "Rasen, Hecken, Beete und Wege betreuen wir nach einem abgestimmten Pflegeplan. Der Winterdienst bleibt ein eigener, vorrangig geplanter Leistungsbaustein: Flächen, Auslösung, Streumittel und Nachweise werden vor Saisonbeginn geregelt." },
    { heading: "Die Grenze zur Facharbeit", body: "Infrastrukturelle Objektbetreuung ersetzt keine technische oder kaufmännische Gebäudeverwaltung. Aufgaben, die einem zugelassenen Fachbetrieb vorbehalten sind, übernehmen wir nicht selbst; wir melden den Bedarf und stimmen die weitere Bearbeitung mit Ihnen ab." },
  ],
  "event-service": [
    { heading: "Vor Beginn ist der Ablauf geklärt", body: "Wir stimmen Ankunftszeiten, erwartete Gästezahl, Servicepunkte und Ansprechpersonen mit Ihrer Veranstaltungsleitung ab. Die eingesetzten Kräfte kennen ihre Aufgaben und Meldewege, bevor die ersten Gäste eintreffen." },
    { heading: "Service bleibt Service", body: "Empfang und Gästebetreuung sorgen für Orientierung und geordnete Abläufe. Bewachung und sicherheitsrelevante Zutrittskontrollen sind Aufgaben des Veranstaltungsschutzes. Bei einer kombinierten Beauftragung bleiben Verantwortlichkeiten und Qualifikationen getrennt." },
    { heading: "Unterstützung statt Gesamtplanung", body: "Sie geben den Veranstaltungsrahmen vor. Wir übernehmen vereinbarte operative Aufgaben vor Ort. Programmplanung, Locationbuchung, technische Facharbeiten und Catering gehören nicht zu diesem Leistungsumfang." },
  ],
  sicherheit: [
    {
      heading: "Wie ein Auftrag bei uns beginnt",
      body: "Am Anfang steht eine Objektbegehung. Wir sehen uns Zufahrten, Nebeneingänge, Beleuchtung und die vorhandene Technik an und sprechen mit den Menschen, die täglich vor Ort sind. Daraus entsteht eine Dienstanweisung, in der steht, wer wann welchen Bereich kontrolliert, wie mit Fremdpersonal umgegangen wird und wen die Kraft nachts erreicht.",
    },
    {
      heading: "Wer bei Ihnen im Dienst steht",
      body: "Jede Kraft ist vor dem ersten Dienst am Objekt eingewiesen. Wir arbeiten mit festen Teams je Standort, weil eine Kraft, die das Objekt kennt, Abweichungen bemerkt, die einem wechselnden Mitarbeitenden entgehen. Urlaub und Krankheit decken benannte Vertretungen ab, die vorher mitgelaufen sind.",
    },
    {
      heading: "Was Sie schriftlich zurückbekommen",
      body: "Rundgänge, Vorkommnisse und Übergaben landen im Wachbuch. Sicherheitsrelevante Ereignisse melden wir noch in derselben Schicht, auf Wunsch gibt es einen monatlichen Bericht mit Kontrollzeiten. Diese Nachweise sind gegenüber Versicherern oft der entscheidende Punkt.",
    },
  ],
  reinigung: [
    {
      heading: "Leistungsverzeichnis vor dem ersten Einsatz",
      body: "Wir schreiben vor Vertragsbeginn Fläche für Fläche auf, was in welchem Intervall gereinigt wird – tägliche Sanitärreinigung, wöchentliche Bodenpflege, monatliche Sockelleisten und Heizkörper. Das Verzeichnis wird Vertragsbestandteil. Sie sehen dadurch jederzeit, wofür Sie zahlen, und können unsere Leistung daran messen.",
    },
    {
      heading: "Feste Kräfte, geregelter Zugang",
      body: "In der Gebäudereinigung entscheidet Kontinuität über Qualität. Wir setzen deshalb feste Kräfte je Objekt ein, die Räume, Zugänge und Eigenheiten kennen. Schlüssel, Transponder und Alarmcodes werden dokumentiert übergeben und gesichert verwahrt; wer Zugang hat, ist jederzeit nachvollziehbar.",
    },
    {
      heading: "Reinigungszeiten und Betriebsablauf",
      body: "Gereinigt wird vor Arbeitsbeginn, nach Feierabend oder in Randzeiten – je nachdem, wann Ihr Betrieb am wenigsten gestört wird. In Objekten mit Publikumsverkehr planen wir Tagesreinigung ein, damit Sanitärbereiche und Eingänge über den Tag präsentabel bleiben.",
    },
    {
      heading: "Qualitätskontrolle und Reklamationen",
      body: "Eine Objektleitung prüft die Ausführung in festen Abständen vor Ort und nimmt Stichproben nach Prüfbogen. Auffälligkeiten bespricht sie direkt mit der Kraft. Reklamationen nehmen wir telefonisch oder per E-Mail an und bearbeiten sie in der Regel bis zum nächsten Reinigungstag.",
    },
    {
      heading: "Verbrauchsmaterial und Technik",
      body: "Auf Wunsch übernehmen wir die Bewirtschaftung von Papier, Seife und Hygieneartikeln, damit niemand aus Ihrem Haus Bestände im Blick behalten muss. Maschinen, Reinigungsmittel und Dosiertechnik stellen wir; die eingesetzten Mittel wählen wir nach Belag aus, nicht nach Gewohnheit.",
    },
  ],
  gruenanlagen: [
    {
      heading: "Ein Pflegeplan über das ganze Jahr",
      body: "Grünpflege ist Saisongeschäft: Rückschnitt und Startdüngung im Frühjahr, Mahd und Bewässerung im Sommer, Laubbeseitigung und Rückschnitt im Herbst, Baum- und Strauchpflege im Winter. Wir legen die Einsätze vorab über das Jahr fest, damit Sie kalkulieren können und nichts auf Zuruf passiert.",
    },
    {
      heading: "Was regelmäßig anfällt",
      body: "Rasenmahd und Kantenschnitt, Hecken- und Strauchschnitt, Pflege von Beeten und Pflanzflächen, Unkrautentfernung auf Wegen und Plätzen, Laubbeseitigung sowie die Entsorgung des Schnittguts. Bewässerungsanlagen nehmen wir zum Saisonstart in Betrieb und im Herbst winterfest.",
    },
    {
      heading: "Verkehrssicherungspflicht im Grünbestand",
      body: "Für Bäume und Gehölze auf Ihrem Grundstück haften Sie als Eigentümer oder Verwalter. Wir achten bei jedem Einsatz auf herabhängende Äste, Sichtbehinderungen an Zufahrten und überwachsene Beleuchtung und melden Auffälligkeiten schriftlich – auch dann, wenn die Behebung nicht Teil des laufenden Auftrags ist.",
    },
    {
      heading: "Gesetzliche Fristen im Blick",
      body: "Zwischen dem 1. März und dem 30. September sind stärkere Rückschnitte und Rodungen nach dem Bundesnaturschutzgesetz nur eingeschränkt zulässig; notwendige Verkehrssicherungsmaßnahmen bleiben davon unberührt. Größere Schnittmaßnahmen planen wir deshalb in die Wintermonate und klären Genehmigungen nach kommunaler Baumschutzsatzung vorab.",
    },
    {
      heading: "Wie abgerechnet wird",
      body: "Wiederkehrende Pflege rechnen wir als Jahrespauschale in monatlichen Teilbeträgen ab – das glättet die Kosten über die Saison. Einmalige Maßnahmen wie Neuanlage, große Rückschnitte oder Fällungen bekommen ein eigenes Angebot mit Festpreis, bevor jemand anrückt.",
    },
  ],
  "facility-management": [
    {
      heading: "Ein Ansprechpartner für den Betrieb",
      body: "Infrastrukturelles Facility Management heißt bei uns: Winterdienst, Hausmeisterdienste, Entsorgung und Parkraum laufen über dieselbe Objektleitung. Sie melden ein Thema an eine Nummer, statt vier Dienstleister zu koordinieren und Zuständigkeiten zu klären.",
    },
    {
      heading: "Winterdienst mit Nachweis",
      body: "Von Anfang November bis Ende März halten wir Bereitschaft und fahren nach Wetterlage an, nicht auf Zuruf. Jeder Einsatz wird mit Datum, Uhrzeit, Fläche, Streumittel und Wetterlage protokolliert – genau diese Nachweise verlangen Versicherer und Gerichte nach einem Sturz.",
    },
    {
      heading: "Kleine Mängel früh erkennen",
      body: "Ein Hausmeister, der ein Objekt kennt, findet die tropfende Leitung im Keller und das klemmende Brandschutztor, bevor daraus eine Rechnung wird. Was wir nicht selbst erledigen dürfen, melden wir mit Foto und Beschreibung, damit Sie den Fachbetrieb gezielt beauftragen können.",
    },
    {
      heading: "Turnus und Erreichbarkeit",
      body: "Je nach Objektgröße vereinbaren wir feste Anwesenheitstage oder eine tägliche Präsenz. Für Störungen außerhalb dieser Zeiten gibt es eine benannte Rufnummer; was tatsächlich ein Notfall ist und was bis zum nächsten Turnus wartet, legen wir vorher gemeinsam fest.",
    },
  ],
};
