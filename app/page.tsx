import Image from "next/image";

const services = [
  { icon: "/icons/cloud.png", number: "01", title: "System Integration & Cloud", text: "Architetture connesse, infrastrutture cloud e integrazioni affidabili per far dialogare sistemi, dati e processi." },
  { icon: "/icons/data.png", number: "02", title: "Digital Transformation & Data", text: "Percorsi data-driven, automazione e piattaforme digitali che trasformano complessità operative in valore misurabile." },
  { icon: "/icons/security.png", number: "03", title: "Cybersecurity & Compliance", text: "Protezione end-to-end, governance del rischio e presidio normativo: ISO 27001, NIS2, DORA, CRA e PSD2." },
  { icon: "/icons/ams.png", number: "04", title: "Application Management", text: "Servizi AMS strutturati, continuità operativa e supporto evolutivo per applicazioni mission-critical." },
  { icon: "/icons/ecm.png", number: "05", title: "ECM & Document Intelligence", text: "Acquisizione, gestione, firma e conservazione dei contenuti con processi documentali intelligenti e conformi." },
  { icon: "/icons/bpm.png", number: "06", title: "BPM & Sviluppo Custom", text: "Analisi, reingegnerizzazione e sviluppo di workflow, applicazioni moderne e integrazioni avanzate." },
];

const technologies = ["java", "python", "nodejs", "spring", "oracle", "postgresql", "mongodb", "docker", "kubernetes", "php"];

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="logo" href="#top" aria-label="Nexum ICT, torna all'inizio"><Image src="/brand/nexum-ict.png" alt="Nexum ICT" width={145} height={129} priority /></a>
        <nav aria-label="Navigazione principale"><a href="#nexum">Nexum</a><a href="#servizi">Competenze</a><a href="#modello">Modello</a><a href="#ecosistema">Ecosistema</a></nav>
        <a className="button button-small" href="#contatti">Parliamone <span>↗</span></a>
        <details className="mobile-menu"><summary aria-label="Apri il menu"><span /><span /></summary><nav><a href="#nexum">Nexum</a><a href="#servizi">Competenze</a><a href="#modello">Modello</a><a href="#ecosistema">Ecosistema</a><a href="#contatti">Contatti</a></nav></details>
      </header>

      <section className="hero" id="top">
        <Image className="hero-image" src="/images/hero.webp" alt="Ecosistema tecnologico e infrastrutture digitali" fill sizes="100vw" priority />
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow light"><span />Consorzio di eccellenza ICT</p>
          <h1>Più competenze.<br /><em>Un solo partner.</em></h1>
          <p>Uniamo persone, tecnologie e visione per governare la complessità digitale e rendere ogni organizzazione più sicura, efficiente e pronta a crescere.</p>
          <div className="hero-actions"><a className="button" href="#servizi">Esplora le competenze <span>↓</span></a><a className="link-light" href="#nexum">Scopri Nexum ICT <span>↗</span></a></div>
        </div>
        <div className="hero-proof"><strong>End-to-end</strong><span>Dal disegno strategico alla continuità operativa</span></div>
      </section>

      <section className="pillars" aria-label="I tre pilastri della proposta di valore">
        <div><span>01</span><strong>Governance & solidità</strong><p>Un unico interlocutore, una regia chiara.</p></div>
        <div><span>02</span><strong>Continuità & presidio</strong><p>Competenze vicine, servizi sempre presenti.</p></div>
        <div><span>03</span><strong>Scalabilità immediata</strong><p>Un modello hub & spoke che cresce con te.</p></div>
      </section>

      <section className="section intro" id="nexum">
        <div className="intro-heading"><p className="eyebrow"><span />Il valore del consorzio</p><h2>La complessità digitale diventa una forza condivisa.</h2></div>
        <div className="intro-copy"><p className="lead">Nexum-ICT nasce dall’incontro tra realtà italiane con competenze complementari e una visione comune: creare un polo tecnologico solido, specializzato e vicino al cliente.</p><p>Uniamo l’agilità delle imprese specialistiche alla capacità di governare programmi complessi, offrendo un punto di accesso unico a competenze, piattaforme e professionalità di alto livello.</p><a className="text-link" href="#ecosistema">Conosci il nostro ecosistema <span>↗</span></a></div>
      </section>

      <section className="section services" id="servizi">
        <div className="section-top"><div><p className="eyebrow"><span />Competenze integrate</p><h2>Un ecosistema.<br />Ogni sfida digitale.</h2></div><p>Dalla strategia all’operatività, progettiamo e presidiamo l’intero ciclo di vita IT con team multidisciplinari e responsabilità chiare.</p></div>
        <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-head"><span>{service.number}</span><Image src={service.icon} alt="" width={54} height={54} /></div><h3>{service.title}</h3><p>{service.text}</p><a href="#contatti" aria-label={`Parla con noi di ${service.title}`}>Approfondisci <span>↗</span></a></article>)}</div>
      </section>

      <section className="operating" id="modello">
        <div className="operating-copy"><p className="eyebrow light"><span />Il nostro modello</p><h2>Un’unica regia.<br />Competenze che si attivano.</h2><p>Il modello Hub & Spoke abilita rapidamente le professionalità necessarie, mantenendo governance, qualità e responsabilità in un solo punto.</p><div className="model-list"><div><span>01</span><p><strong>Ascolto e disegno</strong>Partiamo dagli obiettivi, non dalla tecnologia.</p></div><div><span>02</span><p><strong>Team su misura</strong>Attiviamo gli specialisti giusti, senza rigidità.</p></div><div><span>03</span><p><strong>Presidio continuo</strong>Misuriamo, miglioriamo e proteggiamo nel tempo.</p></div></div></div>
        <div className="orbit" aria-label="Ciclo di vita dei servizi Nexum ICT"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-core"><Image src="/brand/nexum-mark.png" alt="" width={110} height={108} /><strong>Ciclo di vita<br />del dato</strong></div>{["System integration", "Digital transformation", "Application management", "Sicurezza & GRC", "Sistemi di pagamento", "Sviluppo & ecosistema"].map((label, index) => <span className={`orbit-label orbit-${index + 1}`} key={label}>{label}</span>)}</div>
      </section>

      <section className="section verticals">
        <div className="section-top"><div><p className="eyebrow"><span />Esperienza verticale</p><h2>Dove l’affidabilità non è negoziabile.</h2></div><p>Portiamo competenze specifiche nei contesti ad alta complessità, dove sicurezza, continuità e conformità determinano il valore del servizio.</p></div>
        <div className="vertical-grid"><article className="vertical-main"><span>01 / Finance</span><h3>Pagamenti e monetica</h3><p>Sviluppo e gestione di sistemi e-payment, testing funzionale, stress test e consulenza specialistica per transazioni elettroniche mission-critical.</p><div className="pulse" aria-hidden="true">|||||||||||||||||||||||||||||||||||||||||</div></article><article><span>02 / Content</span><h3>ECM e normativa</h3><p>Document intelligence, workflow di firma, conservazione e servizi compliance by design.</p></article><article><span>03 / Process</span><h3>BPM e modernizzazione</h3><p>Process analysis, application modernization, mobile workflow, audit e performance tuning.</p></article></div>
      </section>

      <section className="human">
        <Image src="/images/vision.webp" alt="Persone connesse da una rete digitale" fill sizes="100vw" />
        <div className="human-shade" />
        <div className="human-content"><p className="eyebrow light"><span />Capitale umano</p><h2>La tecnologia accelera.<br />Le persone fanno la differenza.</h2><p>Academy, laboratorio di innovazione e ricerca continua alimentano competenze aggiornate e team capaci di trasformare nuove opportunità in risultati concreti.</p><div className="human-points"><span>Academy formativa</span><span>Innovation lab</span><span>Talent network</span></div></div>
      </section>

      <section className="section ecosystem" id="ecosistema">
        <div className="ecosystem-copy"><p className="eyebrow"><span />Il consorzio</p><h2>Specialisti per natura.<br />Uniti per visione.</h2><p>Retesi porta la propria esperienza nella progettazione e gestione di soluzioni ICT; I.CON contribuisce con competenze specialistiche e capacità di risposta nei servizi informatici. Insieme, una struttura coordinata per affrontare iniziative complesse e scalabili.</p><div className="partners"><Image src="/partners/retesi.png" alt="Retesi" width={180} height={180} /><Image src="/partners/icon.png" alt="I.CON" width={180} height={180} /></div></div>
        <div className="ecosystem-image"><Image src="/images/ecosystem.webp" alt="Sede tecnologica contemporanea" fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
      </section>

      <section className="technology" aria-label="Tecnologie"><p>Un ecosistema tecnologico aperto</p><div>{technologies.map((tech) => <Image src={`/tech/${tech}.png`} alt={tech} width={100} height={64} key={tech} />)}</div></section>

      <section className="contact" id="contatti"><div><p className="eyebrow light"><span />Costruiamo il prossimo passo</p><h2>La tua prossima sfida<br />inizia da una connessione.</h2></div><div><p>Raccontaci il contesto. Attiveremo le competenze giuste per trasformarlo in un progetto concreto, solido e scalabile.</p><a className="button button-white" href="mailto:info@nexum-ict.it">Parla con Nexum ICT <span>↗</span></a></div></section>

      <footer><a className="footer-logo" href="#top"><Image src="/brand/nexum-ict.png" alt="Nexum ICT" width={130} height={115} /></a><p>Il polo di eccellenza tecnologica<br />per la trasformazione digitale.</p><nav><a href="#nexum">Nexum</a><a href="#servizi">Competenze</a><a href="#modello">Modello</a><a href="#ecosistema">Ecosistema</a><a href="#contatti">Contatti</a></nav><small>© {new Date().getFullYear()} Nexum-ICT. Tutti i diritti riservati.</small></footer>
    </main>
  );
}
