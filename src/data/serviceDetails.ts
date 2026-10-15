// Vertiefende Fachabschnitte je Leistung. Werden auf den Detailseiten
// unter "Über diese Leistung" ausgegeben und geben Interessenten die
// Informationen, die sonst erst im Telefonat kommen.

export interface ServiceDetailBlock {
  heading: string;
  body: string;
}

export const serviceDetails: Record<string, ServiceDetailBlock[]> = {
  "empfang-und-akkreditierung": [
    { heading: "Ankunft und Anmeldung abstimmen", body: "Vor dem Einsatz klären wir, wann Gäste ankommen, welche Anmeldepunkte besetzt werden und wer Rückfragen entscheiden kann. Vorbereitete Unterlagen, Namensschilder und Wegweiser werden an den vereinbarten Stellen bereitgehalten." },
    { heading: "Mit Gästedaten sparsam umgehen", body: "Der Zugriff auf Anmeldedaten wird auf die vorgesehenen Kräfte und den konkreten Zweck beschränkt. Umfang, Übergabe und Löschung legen wir mit Ihnen vorab fest. Listen werden weder für eigene Werbung noch für andere Veranstaltungen verwendet." },
    { heading: "Übergabe an den Veranstaltungsschutz", body: "Bei sicherheitsrelevanten Fragen entscheidet nicht das Empfangsteam. Die zuständigen Sicherheitskräfte werden über den vereinbarten Meldeweg hinzugezogen. So bleibt der Empfang ansprechbar, ohne Zuständigkeiten zu vermischen." },
  ],
  gaestebetreuung: [
    { heading: "Orientierung mit verlässlichen Informationen", body: "Die Kräfte kennen Räume, Wege und den freigegebenen Veranstaltungsablauf. Für Fragen, die sie nicht selbst beantworten können, gibt es benannte Ansprechpersonen in Ihrer Organisation." },
    { heading: "Änderungen abgestimmt weitergeben", body: "Wenn sich Zeiten oder Programmpunkte ändern, erhält das Team die Information von Ihrer Veranstaltungsleitung. Auskünfte bleiben dadurch einheitlich. Besondere Anliegen werden weitergeleitet, nicht improvisiert entschieden." },
    { heading: "Einsatzpunkte und Zeiten festlegen", body: "Wir planen die Betreuung nach Ankunft, Pausen und Veranstaltungsende. Sie nennen die erwartete Gästezahl und die Bereiche, in denen Unterstützung gebraucht wird; daraus legen wir Besetzung und Übergaben fest." },
  ],
  "operative-eventunterstuetzung": [
    { heading: "Aufgaben vor Ort eindeutig verteilen", body: "Service- und Informationspunkte, Übergaben und Rückmeldewege werden vor Beginn festgelegt. Das Team arbeitet nach Ihrem Ablaufplan und übernimmt die vereinbarten Tätigkeiten, nicht die Gesamtleitung der Veranstaltung." },
    { heading: "Direkter Kontakt zur Veranstaltungsleitung", body: "Für Rückfragen und Abweichungen gibt es eine benannte Ansprechperson. Neue Aufgaben werden mit dieser abgestimmt, bevor der Leistungsumfang verändert wird." },
    { heading: "Nach dem Einsatz", body: "Offene Punkte und besondere Vorkommnisse werden im vereinbarten Umfang übergeben. Bei wiederkehrenden Veranstaltungen fließen diese Rückmeldungen in die nächste Einsatzabstimmung ein." },
  ],
  // ---------- Sicherheit ----------
  objektschutz: [
    {
      heading: "Wie ein Objektschutz bei uns aufgesetzt wird",
      body: "Vor dem ersten Dienst gehen wir das Objekt gemeinsam ab: Zufahrten, Nebeneingänge, Technikräume, Bereiche ohne Sicht. Daraus entsteht eine Dienstanweisung, die festlegt, wer wann welchen Bereich kontrolliert, wie mit Fremdpersonal umgegangen wird und wen die Kraft nachts erreicht. Jede eingesetzte Kraft wird vor Ort eingewiesen – niemand steht ohne Objektkenntnis im Dienst.",
    },
    {
      heading: "Was Sie an Dokumentation bekommen",
      body: "Rundgänge, Vorkommnisse und Übergaben werden im Wachbuch festgehalten. Auf Wunsch erhalten Sie einen monatlichen Bericht mit Kontrollzeiten und besonderen Vorkommnissen – hilfreich gegenüber Versicherern und bei der Nachbereitung von Schadensfällen. Bei sicherheitsrelevanten Ereignissen informieren wir Sie noch in derselben Schicht.",
    },
    {
      heading: "Wann sich ein fester Objektschutz lohnt",
      body: "Sinnvoll ist ständige Präsenz überall dort, wo Werte, Technik oder Personen dauerhaft geschützt werden müssen: Produktionsstandorte, Logistikzentren, Verwaltungsgebäude mit Publikumsverkehr, Lager mit hochwertigem Material. Bei geringerem Risiko ist ein Streifendienst mit unregelmäßigen Kontrollzeiten oft die wirtschaftlichere Lösung – das sagen wir Ihnen offen.",
    },
  ],
  veranstaltungsschutz: [
    {
      heading: "Planung vor der Veranstaltung",
      body: "Wir sehen uns Gelände oder Location vorab an und klären die Punkte, die im Ernstfall zählen: Besucherzahl, Ein- und Auslässe, Flucht- und Rettungswege, Zusammenarbeit mit Sanitätsdienst und Feuerwehr. Daraus ergibt sich die Anzahl der Kräfte und ihre Positionierung – keine Pauschalzahl, sondern eine an Ihrem Ablaufplan orientierte Aufstellung.",
    },
    {
      heading: "Einlass, Akkreditierung und Backstage",
      body: "Typische Aufgaben sind Einlasskontrolle inklusive Taschenkontrolle, Ticket- und Ausweisprüfung, Akkreditierung von Künstlern und Dienstleistern, Absicherung von Backstage- und Technikbereichen sowie die Bestreifung von Parkflächen. Ansprechbar bleiben und deeskalieren steht dabei vor allem anderen.",
    },
    {
      heading: "Vorlaufzeit und kurzfristige Anfragen",
      body: "Für planbare Veranstaltungen ist ein Vorlauf von zwei bis drei Wochen ideal, weil sich dann auch Spitzenbedarf sauber besetzen lässt. Kurzfristige Anfragen prüfen wir trotzdem – wir sagen Ihnen dann direkt, ob wir die benötigte Kräftezahl seriös stellen können oder nicht.",
    },
  ],
  baustellenbewachung: [
    {
      heading: "Warum Baustellen ein eigenes Profil brauchen",
      body: "Auf Baustellen wechseln Zustand und Risiko fast wöchentlich: mal ist Material offen gelagert, mal steht teure Technik in der Halle, mal sind Gewerke rund um die Uhr im Einsatz. Wir passen Kontrollintervalle und Standzeiten daran an, statt ein starres Schema über die gesamte Bauzeit zu legen.",
    },
    {
      heading: "Brandwache und Nachtwache",
      body: "Nach Heißarbeiten wie Schweißen, Löten oder Trennschleifen ist eine Brandwache oft vertraglich oder brandschutztechnisch gefordert. Unsere Kräfte kontrollieren den Arbeitsbereich über die vorgegebene Nachbeobachtungszeit, dokumentieren die Kontrollgänge und wissen, wo Löschmittel und Auslöseeinrichtungen liegen.",
    },
    {
      heading: "Zufahrtskontrolle und Materialschutz",
      body: "Auf Wunsch übernehmen wir zusätzlich die Zufahrtskontrolle: Wer betritt wann die Baustelle, welches Fahrzeug fährt mit welchem Material wieder heraus. Das reduziert nicht nur Diebstahl, sondern schafft auch eine belastbare Grundlage, wenn es später um Nachträge oder Schadensfragen geht.",
    },
  ],
  "empfangs-und-pfortendienst": [
    {
      heading: "Erster Eindruck und Sicherheitsfunktion zugleich",
      body: "Am Empfang treffen zwei Anforderungen aufeinander: Gäste sollen freundlich und schnell weitergeleitet werden, gleichzeitig darf niemand unkontrolliert ins Gebäude. Wir setzen dafür Kräfte ein, die beides können – sicheres Auftreten gegenüber Besuchern und ein klares Vorgehen, wenn jemand ohne Anmeldung oder Berechtigung erscheint.",
    },
    {
      heading: "Typischer Aufgabenumfang",
      body: "Besucheranmeldung und Ausweisvergabe, Telefonzentrale, Annahme und Weiterleitung von Post und Paketen, Schlüssel- und Ausweisverwaltung, Bedienung von Schranken und Toren sowie die Überwachung von Alarm- und Videotechnik. Welche Punkte davon übernommen werden, halten wir schriftlich fest, damit es später keine Grauzonen gibt.",
    },
    {
      heading: "Sprachen und Vertretung",
      body: "Für Standorte mit internationalem Besuch stellen wir Kräfte mit Englischkenntnissen. Urlaub und Krankheit decken wir aus dem eigenen Personalpool ab – Sie bekommen dabei nach Möglichkeit dieselben Vertretungskräfte, die den Standort bereits kennen.",
    },
  ],
  "kontroll-und-streifendienst": [
    {
      heading: "Unregelmäßige Kontrollen statt fester Uhrzeiten",
      body: "Ein Streifendienst wirkt nur, wenn er nicht vorhersehbar ist. Wir variieren Kontrollzeiten und Fahrtrichtung bewusst, damit sich kein Muster einprägt. Kontrolliert werden Türen und Fenster, Beleuchtung, Zäune und Tore, auffällige Fahrzeuge sowie technische Auffälligkeiten wie Wasseraustritt oder offene Rolltore.",
    },
    {
      heading: "Mehrere Objekte in einer Tour",
      body: "Der Revierdienst ist die wirtschaftliche Alternative zur ständigen Präsenz: Mehrere Objekte werden in einer Tour angefahren, Sie zahlen nur die tatsächliche Kontrollzeit. Für Gewerbeparks, Wohnanlagen und Filialketten ist das meist die passende Lösung.",
    },
    {
      heading: "Alarmverfolgung und Schlüsseldienst",
      body: "Auf Wunsch übernehmen wir die Alarmverfolgung: Bei einer Meldung Ihrer Anlage fährt die Streife das Objekt an, prüft die Lage, informiert Sie und bei Bedarf Polizei oder Feuerwehr. Schlüssel und Codes werden gesichert verwahrt und nur an eingewiesene Kräfte ausgegeben.",
    },
  ],
  sicherheitskonzepte: [
    {
      heading: "Was in der Bestandsaufnahme passiert",
      body: "Wir sehen uns an, was tatsächlich vorhanden ist: bauliche Sicherung, Schließanlage, Alarm- und Videotechnik, Zutrittsregelungen, Abläufe bei Schlüsselverlust oder Alarm. Dazu kommen Gespräche mit den Menschen, die täglich im Objekt arbeiten – dort liegen die realen Schwachstellen meist offener als in jeder Planungsunterlage.",
    },
    {
      heading: "Vom Befund zur Maßnahme",
      body: "Sie erhalten eine schriftliche Auswertung mit priorisierten Maßnahmen: was sofort ohne Investition änderbar ist, was mittelfristig baulich oder technisch angegangen werden sollte und wo Personal die sinnvollere Lösung als Technik ist. Wir schreiben dabei keine Wunschliste, sondern etwas, das zu Ihrem Budget passt.",
    },
    {
      heading: "Umsetzung und Nachkontrolle",
      body: "Auf Wunsch begleiten wir die Umsetzung, weisen Ihr eigenes Personal ein und prüfen nach einigen Monaten, ob die Maßnahmen im Alltag tatsächlich gelebt werden. Ein Konzept, das in der Schublade liegt, verändert nichts – deshalb gehört die Nachkontrolle für uns dazu.",
    },
  ],

  // ---------- Reinigung ----------
  unterhaltsreinigung: [
    {
      heading: "Leistungsverzeichnis statt Bauchgefühl",
      body: "Bevor wir starten, halten wir Fläche für Fläche fest, was in welchem Intervall gereinigt wird: tägliche Sanitärreinigung, wöchentliche Bodenpflege, monatliche Sockelleisten und Heizkörper. Dieses Leistungsverzeichnis ist Vertragsbestandteil – Sie sehen jederzeit, was Sie bezahlen, und wir können unsere Leistung daran messen lassen.",
    },
    {
      heading: "Festes Personal und Vertretung",
      body: "In der Unterhaltsreinigung entscheidet Kontinuität über die Qualität. Wir setzen deshalb feste Kräfte pro Objekt ein, die die Räume, die Zugänge und die Eigenheiten kennen. Für Urlaub und Krankheit gibt es benannte Vertretungen, die vorab eingewiesen wurden – kein wöchentlich wechselndes Gesicht.",
    },
    {
      heading: "Reinigungszeiten und Zugang",
      body: "Gereinigt wird in der Regel vor Arbeitsbeginn, nach Feierabend oder in Randzeiten, damit der Betrieb nicht gestört wird. Schlüssel, Transponder und Alarmcodes werden dokumentiert übergeben und gesichert verwahrt; welche Kraft Zugang hat, ist jederzeit nachvollziehbar.",
    },
    {
      heading: "Qualitätskontrolle",
      body: "Eine Objektleitung prüft die Ausführung in festen Abständen vor Ort und nimmt Stichproben nach einem Prüfbogen. Auffälligkeiten werden mit der Kraft direkt besprochen. Reklamationen nehmen wir telefonisch oder per E-Mail an und bearbeiten sie in der Regel bis zum nächsten Reinigungstag.",
    },
  ],
  "glas-und-fensterreinigung": [
    {
      heading: "Welches Verfahren wann eingesetzt wird",
      body: "Bis in mittlere Höhen arbeiten wir mit Osmose- und Teleskoptechnik: entmineralisiertes Wasser trocknet rückstandsfrei ab, ohne Leiter oder Gerüst. Innenverglasungen und schwer zugängliche Flächen reinigen wir klassisch mit Wischer und Abzieher. Bei hohen Fassaden kommen Hebebühne oder Höhenzugangstechnik zum Einsatz.",
    },
    {
      heading: "Was mitgereinigt wird",
      body: "Zum Standardumfang gehören Glasflächen innen und außen, Rahmen und Falze sowie Fensterbänke. Jalousien, Rollladenkästen, Wintergartendächer und Glasdächer nehmen wir auf Wunsch mit auf – sinnvoll ist das meist in einem größeren Intervall als die reine Glasreinigung.",
    },
    {
      heading: "Intervalle, die sich rechnen",
      body: "Bürogebäude in ruhiger Lage fahren mit einem Quartalsintervall meist gut. Ladenflächen, Gastronomie und Objekte an stark befahrenen Straßen brauchen monatliche oder zweiwöchentliche Reinigung, sonst setzen sich Verschmutzungen im Glas fest. Wir schauen uns die Lage an und schlagen ein Intervall vor, statt eines pauschal anzusetzen.",
    },
    {
      heading: "Sicherheit bei Höhenarbeiten",
      body: "Arbeiten oberhalb der Leiterhöhe führen wir ausschließlich mit geeigneter Zugangstechnik und geschultem Personal aus. Absperrungen im Verkehrsbereich, Genehmigungen für Bühnenstandflächen und die Abstimmung mit Ihrem Betriebsablauf organisieren wir mit.",
    },
  ],
  grundreinigung: [
    {
      heading: "Belagsgerechte Technik",
      body: "Ob Scheuersaugmaschine, Einscheibenmaschine, Sprühextraktion oder Handarbeit hängt vom Belag ab. PVC und Linoleum werden nach der Grundreinigung neu eingepflegt, Naturstein braucht pH-neutrale Mittel, Teppich wird extrahiert statt geschrubbt. Falsche Chemie kostet mehr, als sie spart – deshalb prüfen wir den Belag vorher.",
    },
    {
      heading: "Ablauf und Ausfallzeit",
      body: "Grundreinigungen legen wir nach Möglichkeit auf Wochenenden, Betriebsferien oder Nachtzeiten, damit keine Fläche ausfällt. Für Bereiche, die nicht geräumt werden können, arbeiten wir abschnittsweise. Wie lange die Fläche danach nicht betreten werden darf, sagen wir vorher – meist einige Stunden bis zur vollständigen Trocknung der Pflegefilme.",
    },
    {
      heading: "Wann eine Grundreinigung ansteht",
      body: "Typische Anlässe sind Mieterwechsel, Abschluss von Renovierungen, sichtbar aufgebaute Pflegefilme oder ein jährliches Intervall im Rahmen des Reinigungsvertrags. Eine regelmäßige Grundreinigung verlängert die Lebensdauer des Belags spürbar und ist fast immer günstiger als eine vorzeitige Neuverlegung.",
    },
  ],
  "bauschluss-und-sonderreinigung": [
    {
      heading: "Bauzwischen- und Bauschlussreinigung",
      body: "Die Bauzwischenreinigung entfernt groben Bauschutt und Staub, damit die nachfolgenden Gewerke sauber arbeiten können. Die Bauschlussreinigung ist die Übergabereinigung: Feinstaub von allen Oberflächen, Entfernung von Etiketten, Farb- und Mörtelresten, Reinigung von Fenstern, Rahmen und Falzen, Sanitär und Böden bis zur Abnahmefähigkeit.",
    },
    {
      heading: "Sonderreinigung nach besonderen Anlässen",
      body: "Dazu zählen Reinigung nach Wasser- oder Brandschaden, Entfernung von Nikotin- und Fettbelägen, Graffitientfernung, Reinigung nach Mieterwechsel sowie die Aufbereitung stark vernachlässigter Objekte. Wir sehen uns solche Fälle vorher an, weil sich der Aufwand aus der Ferne nicht seriös schätzen lässt.",
    },
    {
      heading: "Terminierung im Bauablauf",
      body: "Bautermine verschieben sich – das ist der Normalfall. Wir planen mit einem Zeitfenster statt mit einem starren Tag und stimmen den konkreten Start kurzfristig mit Bauleitung oder Objektbetreuung ab. Für Abnahmetermine unter Zeitdruck stellen wir bei Bedarf zusätzliche Kräfte.",
    },
    {
      heading: "Entsorgung, Wasser und Strom auf der Baustelle",
      body: "Restmüll aus der Reinigung, Verpackungen und Schutzfolien entsorgen wir auf Wunsch mit, statt sie im Container des Bauherrn zu parken. Wichtig ist die Vorabklärung, ob Bauwasser und Baustrom zum Reinigungstermin noch anliegen – fehlt beides, brauchen wir Tanktechnik und Aggregat, was Aufwand und Preis verändert. Wir fragen das vor dem Angebot ab, damit es am Tag der Ausführung keine Überraschung gibt.",
    },
    {
      heading: "Was wir vorher wissen müssen",
      body: "Für ein belastbares Angebot brauchen wir Quadratmeter nach Nutzungsart, die Anzahl der Fenster inklusive Rahmen und Falze, den Bodenbelag, den Bauzustand und den gewünschten Abnahmetermin. Bei Sanierungen im Bestand kommt die Frage dazu, ob Flächen bewohnt oder in Betrieb bleiben. Auf dieser Grundlage kalkulieren wir Kräftezahl und Dauer – und nennen einen Festpreis statt einer Spanne.",
    },
  ],

  // ---------- Grünanlagen ----------
  pflege: [
    {
      heading: "Pflegeplan über das Jahr",
      body: "Grünpflege ist Saisongeschäft: Rückschnitt und Startdüngung im Frühjahr, Mahd und Bewässerung im Sommer, Laub und Rückschnitt im Herbst, Baum- und Strauchpflege im Winter. Wir legen die Einsätze vorab über das Jahr fest, damit Sie planen können und nichts auf Zuruf passiert.",
    },
    {
      heading: "Was zum Umfang gehört",
      body: "Rasenmahd und Kantenschnitt, Hecken- und Strauchschnitt, Pflege von Beeten und Pflanzflächen, Unkrautentfernung auf Wegen und Plätzen, Laubbeseitigung sowie die Entsorgung des Schnittguts. Bewässerungsanlagen nehmen wir auf Wunsch in Betrieb und winterfest.",
    },
    {
      heading: "Verkehrssicherheit im Grünbestand",
      body: "Als Eigentümer oder Verwalter haften Sie für Ihren Grünbestand. Wir achten bei jedem Einsatz auf herabhängende Äste, Sichtbehinderungen an Zufahrten und Wegen sowie überwachsene Beleuchtung und melden Auffälligkeiten schriftlich – auch dann, wenn die Behebung nicht Teil des laufenden Auftrags ist.",
    },
    {
      heading: "Mahdrhythmus und Rasenqualität",
      body: "Repräsentative Rasenflächen brauchen in der Hauptwachstumszeit einen wöchentlichen Schnitt, extensive Flächen kommen mit zwei bis vier Mahdgängen im Jahr aus. Wer selten mäht und dann tief abnimmt, schwächt die Grasnarbe und züchtet sich Moos und Lücken heran. Wir stimmen den Rhythmus deshalb an der Nutzung der Fläche aus und nicht am Kalender – bei Trockenheit setzen wir Schnitte bewusst aus, statt die Fläche zu verbrennen.",
    },
    {
      heading: "Schnittgut, Laub und Entsorgung",
      body: "Rasenschnitt, Heckenschnitt und Laub nehmen wir mit und führen sie der Verwertung zu; auf Wunsch bleibt Mulchgut auf geeigneten Flächen liegen und spart Dünger. Für Objekte mit vielen Bäumen lohnt sich im Herbst ein zweiter oder dritter Laubgang – nasses Laub auf Gehwegen ist eine der häufigsten Rutschursachen und fällt unter dieselbe Verkehrssicherungspflicht wie Schnee.",
    },
    {
      heading: "Was ein Angebot bestimmt",
      body: "Preisbestimmend sind Rasenfläche in Quadratmetern, laufende Meter Hecke mit Höhe, Anzahl und Größe der Beete, die Erreichbarkeit für Maschinen sowie die Menge des anfallenden Schnittguts. Ein Vor-Ort-Termin dauert meist eine halbe Stunde und ersetzt jede Schätzung aus der Ferne. Danach erhalten Sie eine Jahrespauschale mit hinterlegtem Einsatzplan.",
    },
  ],
  baumpflege: [
    {
      heading: "Regelkontrolle nach anerkannter Praxis",
      body: "Die Baumkontrolle erfolgt als Sichtprüfung vom Boden aus, in der Regel ein- bis zweimal jährlich – bei Bäumen an stark frequentierten Wegen häufiger. Geprüft werden Kronenaufbau, Totholz, Pilzfruchtkörper, Rindenschäden, Wurzelbereich und Stammfuß. Auffällige Bäume werden nachkontrolliert oder eingehend untersucht.",
    },
    {
      heading: "Dokumentation als Haftungsnachweis",
      body: "Sie erhalten je Baum einen Befund mit Zustand, Handlungsbedarf und Frist. Diese Dokumentation ist der Nachweis, dass Sie Ihrer Verkehrssicherungspflicht nachgekommen sind – im Schadensfall der entscheidende Unterschied gegenüber der Versicherung.",
    },
    {
      heading: "Schnitt, Fällung und gesetzliche Fristen",
      body: "Wir führen Kronenpflege, Totholzentfernung, Lichtraumprofilschnitt und Fällungen einschließlich Seilklettertechnik aus. Zwischen 1. März und 30. September sind stärkere Rückschnitte und Fällungen nach Bundesnaturschutzgesetz nur eingeschränkt zulässig; Verkehrssicherungsmaßnahmen bleiben möglich. Nötige Genehmigungen nach kommunaler Baumschutzsatzung klären wir mit.",
    },
    {
      heading: "Wann eine eingehende Untersuchung nötig wird",
      body: "Zeigt die Sichtkontrolle Auffälligkeiten – Pilzfruchtkörper am Stammfuß, Risse, einseitig lichte Krone, frühere Kappungen –, reicht der Blick von unten nicht mehr aus. Dann folgt eine eingehende Untersuchung, je nach Befund mit Kronenbegang, Schalltomografie oder Zugversuch. Das Ergebnis entscheidet, ob Kronensicherung, Einkürzung oder Fällung die richtige Maßnahme ist; wir empfehlen keine Fällung, solange der Baum mit vertretbarem Aufwand erhalten werden kann.",
    },
    {
      heading: "Absicherung des Arbeitsbereichs",
      body: "Bäume stehen selten dort, wo Platz ist. Vor Beginn klären wir Absperrungen, Halteverbote, gesperrte Stellplätze und die Abstimmung mit Anliegern; bei Arbeiten über Verkehrsflächen holen wir die verkehrsrechtliche Anordnung ein. Wo kein Hubsteiger hinkommt, arbeiten wir in Seilklettertechnik und seilen Kronenteile kontrolliert ab, statt sie fallen zu lassen.",
    },
    {
      heading: "Nach der Maßnahme",
      body: "Schnittgut wird gehäckselt und abgefahren, Stubben auf Wunsch gefräst, damit die Fläche wieder nutzbar oder bepflanzbar ist. Sie erhalten die aktualisierte Baumdokumentation mit ausgeführten Maßnahmen und dem Termin der nächsten Regelkontrolle – damit die Kette der Nachweise nicht abreißt.",
    },
  ],

  // ---------- Facility Management ----------
  winterdienst: [
    {
      heading: "Räum- und Streupflicht klar geregelt",
      body: "Die Räum- und Streupflicht liegt beim Eigentümer und wird üblicherweise an Mieter oder einen Dienstleister übertragen. Sie gilt an Werktagen regelmäßig von 7 bis 20 Uhr, sonn- und feiertags meist ab 9 Uhr – die genauen Zeiten regelt die kommunale Satzung. Wir tragen die für Ihren Standort geltenden Zeiten in den Vertrag ein, damit im Streitfall klar ist, wer wofür einsteht.",
    },
    {
      heading: "Bereitschaft und Auslösung",
      body: "In der Wintersaison von Anfang November bis Ende März halten wir Bereitschaft. Ausgelöst wird nach Wetterlage, nicht nach Anruf: Wir beobachten die Prognose und fahren die Objekte an, bevor der Berufsverkehr einsetzt. Bei anhaltendem Schneefall wird nachgeräumt, damit die Flächen über den Tag begehbar bleiben.",
    },
    {
      heading: "Dokumentation jedes Einsatzes",
      body: "Jeder Einsatz wird mit Datum, Uhrzeit, Fläche, eingesetztem Streumittel und Wetterlage protokolliert. Genau diese Nachweise verlangen Versicherer und Gerichte nach einem Sturz. Sie erhalten das Protokoll auf Anfrage jederzeit, spätestens am Saisonende gesammelt.",
    },
    {
      heading: "Streumittel und Umweltauflagen",
      body: "Auf Gehwegen setzen wir vorrangig abstumpfende Mittel wie Splitt ein, weil Streusalz in vielen Kommunen dort untersagt ist. Auf Zufahrten, Rampen und Parkflächen kommt Salz zum Einsatz, wo es zulässig und sicherheitstechnisch nötig ist. Nach der Saison räumen wir den Splitt wieder ab.",
    },
  ],
  hausmeisterdienste: [
    {
      heading: "Feste Zuständigkeit statt wechselnder Dienstleister",
      body: "Ein Hausmeister, der ein Objekt kennt, findet Probleme, bevor sie teuer werden – die tropfende Leitung im Keller, das klemmende Brandschutztor, die Leuchte im Treppenhaus, die seit Wochen aus ist. Wir setzen deshalb feste Kräfte pro Objekt ein und benennen Ihnen einen Ansprechpartner mit direkter Nummer.",
    },
    {
      heading: "Typische Aufgaben",
      body: "Kleinreparaturen an Türen, Fenstern, Sanitär und Elektrik im zulässigen Rahmen, Kontrolle von Heizung und Technikräumen, Lampen- und Filterwechsel, Ablesungen, Treppenhaus- und Außenpflege, Mülltonnendienst, Schnee- und Laubbeseitigung sowie Einweisung und Begleitung von Handwerkern.",
    },
    {
      heading: "Prüf- und Meldepflichten",
      body: "Auf Wunsch übernehmen wir wiederkehrende Kontrollen, die Sie ohnehin nachweisen müssen: Fluchtwege frei, Rauchmelder vorhanden, Feuerlöscher im Prüfintervall, Beleuchtung funktionsfähig. Was wir nicht selbst erledigen dürfen, melden wir mit Foto und Beschreibung, damit Sie den Fachbetrieb gezielt beauftragen können.",
    },
  ],
  entsorgungsmanagement: [
    {
      heading: "Ordnung im Abfallbereich",
      body: "Überfüllte Tonnen, falsch befüllte Container und Sperrmüll neben der Sammelstelle kosten Geld und ärgern Nutzer wie Nachbarn. Wir betreuen den Abfallbereich laufend: Tonnen zum Abfuhrtermin herausstellen und zurückstellen, Sammelstelle sauber halten, Fehlwürfe erkennen und Ihnen zurückmelden.",
    },
    {
      heading: "Behältergrößen und Abfuhrrhythmus prüfen",
      body: "Häufig sind Behälter zu groß, zu klein oder im falschen Rhythmus bestellt. Wir dokumentieren die tatsächlichen Füllstände über einige Wochen und schlagen dann eine angepasste Konfiguration vor – in vielen Objekten lassen sich die Entsorgungskosten allein dadurch spürbar senken.",
    },
    {
      heading: "Gewerbeabfall und Nachweise",
      body: "Für gewerbliche Abfälle gelten Getrenntsammlungs- und Dokumentationspflichten. Wir helfen bei der Einrichtung der Trennung vor Ort, koordinieren Entsorgungsfachbetriebe für Sperrmüll, Elektroschrott oder Bauabfälle und sammeln die zugehörigen Nachweise, damit sie im Bedarfsfall vorliegen.",
    },
  ],
  parkraumbewirtschaftung: [
    {
      heading: "Flächen wieder für die Berechtigten frei bekommen",
      body: "Fremdparker auf Mitarbeiter- oder Kundenstellplätzen sind ein Dauerthema an Standorten in innerstädtischer Lage. Wir kontrollieren die Flächen in unregelmäßigen Intervallen, prüfen Parkausweise und dokumentieren Verstöße nachvollziehbar mit Zeitstempel und Fotobeleg.",
    },
    {
      heading: "Beschilderung und rechtliche Grundlage",
      body: "Damit Kontrollen auf Privatgrund durchsetzbar sind, braucht es eine eindeutige, gut sichtbare Beschilderung am Zufahrtsbereich mit klarer Nutzungsregelung. Wir prüfen den vorhandenen Bestand, weisen auf Lücken hin und stimmen die Regelungen mit Ihnen ab, bevor der erste Kontrollgang stattfindet.",
    },
    {
      heading: "Vergabe, Technik und Winterbetrieb",
      body: "Auf Wunsch verwalten wir die Stellplatzvergabe samt Ausweisen und Wechseln, betreuen Schranken und Parkscheinautomaten im Störfall und stimmen die Flächen mit dem Winterdienst ab – damit Räumung und Belegung sich nicht gegenseitig blockieren.",
    },
  ],
};
