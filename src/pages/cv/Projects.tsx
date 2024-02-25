export const Projects = () => {
return (
<section id="projects" className="bsb-timeline-4 p-1">
    <div className="resume-section-content">
        <h2 className="mb-3">Prosjekter</h2>
        <hr className="bg-primary"/>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 col-md-12 col-xl-10 col-xxl-9">
                    <ul className="timeline">
                        <li className="timeline-item left">
                            <div className="timeline-body">
                                <div className="timeline-meta">
                                    <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                        <span className="fw-bold">2023</span>
                                        <span>Mai</span>
                                    </div>
                                </div>
                                <div className="timeline-content timeline-indicator">
                                    <div className="card border-0 shadow">
                                        <div className="card-header text-end p-xl-2 bg-transparent no-border">
                                            <small className="text-muted">8 måneder</small>
                                        </div>
                                        <div className="card-body p-xl-2">
                                            <h4 className="card-title mb-2">HRIS Modernisering</h4>
                                            <h5 className="card-subtitle text-secondary mb-2">Tech lead</h5>
                                            <h6 className="card-subtitle text-secondary mb-2">CatalystOne Solutions AS</h6>
                                            <div className="card-text m-0">
                                                Prosjekt for dele opp en monolittisk HR web applikasjon til
                                                en microservic basert arkitektur, basert på Spring Boot rammeverket.
                                                <ul>
                                                    <li>Fremlagt plan for hvordan monolith kan forbedres og deles opp</li>
                                                    <li>Utarbeidet ER diagram for utbedring av databasemodell</li>
                                                    <li>Jobbet med løsningsdesign for nye HR tjenester</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item right">
                            <div className="timeline-body">
                                <div className="timeline-meta">
                                    <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                        <span className="fw-bold">2022</span>
                                        <span>Februar</span>
                                    </div>
                                </div>
                                <div className="timeline-content timeline-indicator">
                                    <div className="card border-0 shadow">
                                        <div className="card-header p-xl-2 bg-transparent no-border">
                                            <small className="text-muted">1 år 4 måneder</small>
                                        </div>
                                        <div className="card-body p-xl-2">
                                            <h4 className="card-title mb-2">Oppgradere Efaktura løsningen</h4>
                                            <h5 className="card-subtitle text-secondary mb-2">Senior system utvikler</h5>
                                            <h6 className="card-subtitle text-secondary mb-2">Mastercard Payment Services</h6>
                                            <div className="card-text m-0">
                                                Prosjekt for å oppgradere delvis monolittisk applikasjons porteføljen til
                                                å bruke nyere versjon av Java og Spring Boot, etc.
                                                <ul>
                                                    <li>Opprettet ny tjeneste for håndtering av vipps kickback</li>
                                                    <li>Oppgradert deler av fakturaløsningen i efaktura porteføljen </li>
                                                    <li>Oppgradert appliasjoner i efaktura porteføljen </li>
                                                    <li>Oppgradert og forbedret Fitnesse Test Suiten</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item left">
                            <div className="timeline-body">
                                <div className="timeline-meta">
                                    <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                        <span className="fw-bold">2020</span>
                                        <span>Januar</span>
                                    </div>
                                </div>
                                <div className="timeline-content timeline-indicator">
                                    <div className="card border-0 shadow">
                                        <div className="card-header text-end p-xl-2 bg-transparent no-border">
                                            <small className="text-muted">2 år</small>
                                        </div>
                                        <div className="card-body p-xl-2">
                                            <h4 className="card-title mb-2">Prefix</h4>
                                            <h5 className="card-subtitle text-secondary mb-2">System arkitekt</h5>
                                            <h6 className="card-subtitle text-secondary mb-2">Telenor AS</h6>
                                            <div className="card-text m-0">
                                                Prosjekt for å etablere ny infrastruktur for TV tjenesteplattformen.
                                                <ul>
                                                    <li>Opprettet ny infrastruktur og tjenester for microservice plattformen</li>
                                                    <li>Utviklet en standard mal for spring boot microservice</li>
                                                    <li>Opprettet CI/CD pipeline for microservices</li>
                                                    <li>Installert og konfigurert monitorering, Prometheus og Grafana</li>
                                                    <li>Installert og konfigurert Quality Gate, SonarQube</li>
                                                    <li>Installert og konfigurert Message Broker, RabbitMq</li>
                                                    <li>Installert og konfigurert API gateway for å sikre REST tjenester</li>
                                                    <li>Dokumentert plattform og microservices på confluence</li>
                                                    <li>Dokumentert API&apos;er ved bruk av swagger</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item right">
                            <div className="timeline-body">
                                <div className="timeline-meta">
                                    <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                        <span className="fw-bold">2019</span>
                                        <span>Desember</span>
                                    </div>
                                </div>
                                <div className="timeline-content timeline-indicator">
                                    <div className="card border-0 shadow">
                                        <div className="card-header p-xl-2 bg-transparent no-border">
                                            <small className="text-muted">3 år</small>
                                        </div>
                                        <div className="card-body p-xl-2">
                                            <h4 className="card-title mb-2">Exit Oracle</h4>
                                            <h5 className="card-subtitle text-secondary mb-2">System arkitekt</h5>
                                            <h6 className="card-subtitle text-secondary mb-2">Telenor AS</h6>
                                            <div className="card-text m-0">
                                                Prosjekt for å fase ut Oracle plattform, basert på Oracle Service
                                                Bus, SOA Suite og Oracle database.
                                                <ul>
                                                    <li>Portert eksisterende SOAP tjenester over til ny meldingsbasert microservice arkitektur</li>
                                                    <li>Utviklet mal for felles Spring Boot microservice komponent</li>
                                                    <li>Portert SOAP tjenester til REST tjenester</li>
                                                    <li>Innført Message Broker, RabbitMq</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item left">
                            <div className="timeline-body">
                                <div className="timeline-meta">
                                    <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                        <span className="fw-bold">2019</span>
                                        <span>Oktober</span>
                                    </div>
                                </div>
                                <div className="timeline-content timeline-indicator">
                                    <div className="card border-0 shadow">
                                        <div className="card-header text-end p-xl-2 bg-transparent no-border">
                                            <small className="text-muted">1 år 6 måneder</small>
                                        </div>
                                        <div className="card-body p-xl-2">
                                            <h4 className="card-title mb-2">Tv And Diagnostic Tool</h4>
                                            <h5 className="card-subtitle text-secondary mb-2">System arkitekt</h5>
                                            <h6 className="card-subtitle text-secondary mb-2">Telenor AS</h6>
                                            <div className="card-text m-0">
                                                GUI til kundeservice for å kunne diagnostisere en kundes TV produkter
                                                <ul>
                                                    <li>Opprettet REST tjenester for TV og Diagnose verktøy</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item right">
                            <div className="timeline-body">
                                <div className="timeline-meta">
                                    <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                        <span className="fw-bold">2018</span>
                                        <span>August</span>
                                    </div>
                                </div>
                                <div className="timeline-content timeline-indicator">
                                    <div className="card border-0 shadow">
                                        <div className="card-header p-xl-2 bg-transparent no-border">
                                            <small className="text-muted">2 år</small>
                                        </div>
                                        <div className="card-body p-xl-2">
                                            <h4 className="card-title mb-2">NextGenCPE</h4>
                                            <h5 className="card-subtitle text-secondary mb-2">System arkitekt</h5>
                                            <h6 className="card-subtitle text-secondary mb-2">Telenor AS</h6>
                                            <div className="card-text m-0">
                                                Stort prosjekt for å bytte til ny TV plattform. Samt utgivelse av ny TV dekoder.
                                                Dette prosjektet berørte alle våre TV kunder.
                                                <ul>
                                                    <li>Arkitekt bak ny tjensteplattform for TV tjenester, basert på Spring Boot, første steg på vei mot ny microservice plattform.</li>
                                                    <li>Utviklet integrasjons lag mot ny TV plattform for provisjonering av TV utstyr og tjenester</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item left">
                            <div className="timeline-body">
                                <div className="timeline-meta">
                                    <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                        <span className="fw-bold">2017</span>
                                        <span>Desember</span>
                                    </div>
                                </div>
                                <div className="timeline-content timeline-indicator">
                                    <div className="card border-0 shadow">
                                        <div className="card-header text-end p-xl-2 bg-transparent no-border">
                                            <small className="text-muted">1 år</small>
                                        </div>
                                        <div className="card-body p-xl-2">
                                            <h4 className="card-title mb-2">Star2</h4>
                                            <h5 className="card-subtitle text-secondary mb-2">System arkitekt</h5>
                                            <h6 className="card-subtitle text-secondary mb-2">Telenor AS</h6>
                                            <div className="card-text m-0">
                                                Gigantisk Telenor prosjekt for å hente ut synergier mellom ulike IT avdelinger og områder
                                                <ul>
                                                    <li>Rådgivende rolle for TV plattformen</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item right">
                            <div className="timeline-body">
                                <div className="timeline-meta">
                                    <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                        <span className="fw-bold">2017</span>
                                        <span>August</span>
                                    </div>
                                </div>
                                <div className="timeline-content timeline-indicator">
                                    <div className="card border-0 shadow">
                                        <div className="card-header p-xl-2 bg-transparent no-border">
                                            <small className="text-muted">9 måneder</small>
                                        </div>
                                        <div className="card-body p-xl-2">
                                            <h4 className="card-title mb-2">GDPR Anonymisering av personopplysninger</h4>
                                            <h5 className="card-subtitle text-secondary mb-2">System arkitekt</h5>
                                            <h6 className="card-subtitle text-secondary mb-2">Telenor AS</h6>
                                            <div className="card-text m-0">
                                                Analysere og implementere støtte for å anonymisere/slette sensetive kundedata i database og
                                                logger.
                                                <ul>
                                                    <li>Opprettet REST tjeneste for å lese terminerte kunder</li>
                                                    <li>Slette/anonymisere kundedata i logger</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item left">
                            <div className="timeline-body">
                                <div className="timeline-meta">
                                    <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                        <span className="fw-bold">2017</span>
                                        <span>Mai</span>
                                    </div>
                                </div>
                                <div className="timeline-content timeline-indicator">
                                    <div className="card border-0 shadow">
                                        <div className="card-header text-end p-xl-2 bg-transparent no-border">
                                            <small className="text-muted">8 måneder</small>
                                        </div>
                                        <div className="card-body p-xl-2">
                                            <h4 className="card-title mb-2">TV provisjonering linje prosjekt</h4>
                                            <h5 className="card-subtitle text-secondary mb-2">System arkitekt</h5>
                                            <h6 className="card-subtitle text-secondary mb-2">Telenor AS</h6>
                                            <div className="card-text m-0">
                                                Forbedre integrasjonen av TV provisjonering av kundedata til TV plattformen
                                                <ul>
                                                    <li>Utvikling SOAP tjenester og oppsett av JMS køer på Oracle Service Bus (OSB)</li>
                                                    <li>Monitorering og logging til Splunk for Oracle Service Bus (OSB)</li>
                                                    <li>Utvikling av API gateway for SOAP tjenester</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item right">
                            <div className="timeline-body">
                                <div className="timeline-meta">
                                    <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                        <span className="fw-bold">2014</span>
                                        <span>Oktober</span>
                                    </div>
                                </div>
                                <div className="timeline-content timeline-indicator">
                                    <div className="card border-0 shadow">
                                        <div className="card-header p-xl-2 bg-transparent no-border">
                                            <small className="text-muted">8 måneder</small>
                                        </div>
                                        <div className="card-body p-xl-2">
                                            <h4 className="card-title mb-2">OSB linje prosjekt</h4>
                                            <h5 className="card-subtitle text-secondary mb-2">System arkitekt</h5>
                                            <h6 className="card-subtitle text-secondary mb-2">Telenor AS</h6>
                                            <div className="card-text m-0">
                                                Sette opp CI/CD pripeline for OSB og SOA Suite
                                                <ul>
                                                    <li>Opprettet CI/CD pipeline, bruk av maven, bamboo, bash og python script</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item left">
                            <div className="timeline-body">
                                <div className="timeline-meta">
                                    <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                        <span className="fw-bold">2008</span>
                                        <span>November</span>
                                    </div>
                                </div>
                                <div className="timeline-content timeline-indicator">
                                    <div className="card border-0 shadow">
                                        <div className="card-header text-end p-xl-2 bg-transparent no-border">
                                            <small className="text-muted">2 år 6 måneder</small>
                                        </div>
                                        <div className="card-body p-xl-2">
                                            <h4 className="card-title mb-2">Nettbasert Bestillingsløsning</h4>
                                            <h5 className="card-subtitle text-secondary mb-2">Senior systemutvikler</h5>
                                            <h6 className="card-subtitle text-secondary mb-2">TeliaSonera Norge AS</h6>
                                            <div className="card-text m-0">
                                                Ny nettbasert bestillingsløsning for mobil og bredbåndsprodukter.
                                                <ul>
                                                    <li>Jobbet med ariktektur og utvikling av backend lag ved hjelp av Spring boot og Oracle database.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
)
}
