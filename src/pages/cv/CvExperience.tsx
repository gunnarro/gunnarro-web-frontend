export const CvExperience = () => {
return (

<section id="experience" className="bsb-timeline-4 p-1">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-10 col-md-12 col-xl-10 col-xxl-9">
                <ul className="timeline">
                    {/* gunnarro as */}
                    <li className="timeline-item right">
                        <div className="timeline-body">
                            <div className="timeline-meta">
                                <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                    <span className="fw-bold">2023</span>
                                    <span>Mai</span>
                                </div>
                            </div>
                            <div className="timeline-content timeline-indicator timeline-content-no-padding-bottom">
                                <div className="card border-0 shadow">
                                    <div className="card-header p-xl-2 bg-transparent no-border"><small
                                            className="text-muted">nå</small></div>
                                    <div className="card-body p-xl-2">
                                        <h5 className="card-title mb-2">IT konsulent</h5>
                                        <h6 className="card-subtitle text-secondary mb-2">gunnarro as</h6>
                                        <hr/>
                                        <div className="card-header p-xl-0 text-end bg-transparent no-border"><small
                                                className="text-muted">8 måneder</small></div>
                                        <h6 className="card-subtitle text-secondary mb-2">Tech lead</h6>
                                        <h6 className="card-subtitle text-secondary mb-2">CatalystOne Solutions AS</h6>
                                        <div className="card-text m-0">
                                            Engasjert for å modernisere HR web applikasjon over til en microservice
                                            basert arkitektur.
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
                            <div className="timeline-content timeline-indicator timeline-content-no-padding-top">
                                <div className="card border-0 shadow">
                                    <div className="card-body p-xl-2">
                                        <div className="card-header p-xl-0 text-end bg-transparent no-border"><small
                                                className="text-muted">1 år 4 måneder</small></div>
                                        <h6 className="card-subtitle text-secondary mb-2">System utvikler</h6>
                                        <h6 className="card-subtitle text-secondary mb-2">Mastercard Payment
                                            Services</h6>
                                        <div className="card-text m-0">
                                            Engasjert for å moderniserer og oppgradere delvis monolitisk
                                            applikasjons porteføljen til å bruke nyere versjon av Java og Spring
                                            Boot rammeverket, etc
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* Telenor AS */}
                    <li className="timeline-item left">
                        <div className="timeline-body">
                            <div className="timeline-meta">
                                <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                    <span className="fw-bold">2013</span>
                                    <span>August</span>
                                </div>
                            </div>
                            <div className="timeline-content timeline-indicator">
                                <div className="card border-0 shadow">
                                    <div className="card-header p-xl-2 text-end bg-transparent no-border"><small
                                            className="text-muted">8 år 5 måneder</small></div>
                                    <div className="card-body p-xl-2">
                                        <h5 className="card-title mb-2">System arkitekt</h5>
                                        <h6 className="card-subtitle text-secondary mb-2">Telenor AS</h6>
                                        <div className="card-text m-0">
                                            Arkitekt for Telenors microservice plattform for TV tjenester, kjent som
                                            Telenor T-We og tidligere CanalDigital Kabel.
                                            <ul>
                                                <li>Forvaltet og videreutviklt hele livsløpet til integrasjons - og
                                                    microservice plattformen for Telenors TV tjenester
                                                </li>
                                                <li>Ansvar for systemarkitektur og applikasjonsdrift</li>
                                                <li>Ansvar for TV integrasjonsplattformen, basert på Oracle Service
                                                    Bus, Oracle SOA Suite og Oracle Database
                                                </li>
                                                <li>Bruk av både synkrone og asynkrone REST tjenester over en
                                                    meldingsbasert arkitektur
                                                </li>
                                                <li>Tjenestene eksponert via en tilpasset Apache API Gateway over
                                                    2-way-TLS
                                                </li>
                                                <li>Brukt Prometheus og Grafana til monitorering</li>
                                                <li>Testdreven utvikling</li>
                                                <li>Agile team</li>
                                                <li>Java chapter lead</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* teliasonera as */}
                    <li className="timeline-item right">
                        <div className="timeline-body">
                            <div className="timeline-meta">
                                <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                    <span className="fw-bold">2008</span>
                                    <span>Januar</span>
                                </div>
                            </div>
                            <div className="timeline-content timeline-indicator">
                                <div className="card border-0 shadow">
                                    <div className="card-header p-xl-2 bg-transparent no-border"><small
                                            className="text-muted">6 år 2 måneder</small></div>
                                    <div className="card-body p-xl-2">
                                        <h5 className="card-title mb-2">Senior system utvikler</h5>
                                        <h6 className="card-subtitle text-secondary mb-2">TeliaSonera Norge
                                            AS</h6>
                                        <div className="card-text m-0">
                                            Utvikling av integrasjonslaget til TeliaSoneras web service
                                            baserte ordre grensesnitt.
                                            <ul>
                                                <li>Ansvar for applicasjons drift</li>
                                                <li>Brukt Testdreven utviklings metodikk og scrum team</li>
                                                <li>Teknoligi har vært Java, Spring Boot og Oracle
                                                    database
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* software innovation */}
                    <li className="timeline-item left">
                        <div className="timeline-body">
                            <div className="timeline-meta">
                                <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                    <span className="fw-bold">2007</span>
                                    <span>Desember</span>
                                </div>
                            </div>
                            <div className="timeline-content timeline-indicator timeline-content-no-padding-bottom">
                                <div className="card border-0 shadow">
                                    <div className="card-header p-xl-2 text-end bg-transparent no-border"><small
                                            className="text-muted">2 år 6 måneder</small></div>
                                    <div className="card-body p-xl-2">
                                        <h5 className="card-title mb-2">Senior IT konsulent</h5>
                                        <h6 className="card-subtitle text-secondary mb-2">Software Innovation
                                            AS</h6>
                                        <hr/>
                                        <div className="card-header p-xl-0 text-end bg-transparent no-border">
                                            <small className="text-muted">1 år 5 måneder</small></div>
                                        <h6 className="card-subtitle text-secondary mb-2">System utvikler</h6>
                                        <h6 className="card-subtitle text-secondary mb-2">Tomra Systems ASA</h6>
                                        <div className="card-text m-0">
                                            Lage ett nytt web basert administrasjons grensesnitt for
                                            panteautomater.
                                            Hvor det ble brukt java, JSF, tomcat og Oracle database
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
                                    <span className="fw-bold">2005</span>
                                    <span>Juni</span>
                                </div>
                            </div>
                            <div className="timeline-content timeline-indicator timeline-content-no-padding-top">
                                <div className="card border-0 shadow">
                                    <div className="card-body p-xl-2">
                                        <div className="card-header p-xl-0 text-end bg-transparent no-border">
                                            <small className="text-muted">1 år</small></div>
                                        <h6 className="card-subtitle text-secondary mb-2">Senior utvikler</h6>
                                        <h6 className="card-subtitle text-secondary mb-2">Toll- og
                                            avgiftsdirektoratet</h6>
                                        <div className="card-text m-0">
                                            Modernisere saksbehandlersystemet til java tykk klient ved hjelp
                                            av Genova og UML.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* Telenor AS */}
                    <li className="timeline-item right">
                        <div className="timeline-body">
                            <div className="timeline-meta">
                                <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                    <span className="fw-bold">2002</span>
                                    <span>Januar</span>
                                </div>
                            </div>
                            <div className="timeline-content timeline-indicator">
                                <div className="card border-0 shadow">
                                    <div className="card-header p-xl-2 bg-transparent no-border">
                                        <small className="text-muted">3 år 4 måneder</small>
                                    </div>
                                    <div className="card-body p-xl-2">
                                        <h5 className="card-title mb-2">Senior utvikler</h5>
                                        <h6 className="card-subtitle text-secondary mb-2">Telenor AS</h6>
                                        <div className="card-text m-0">
                                            Utvikling og forvaltning av en IP-basert kontaktsenterløsning.
                                            <ul>
                                                <li>Ansvar for Java swing klient som ble installert på
                                                    kundens locale pc
                                                </li>
                                                <li>Bistå kunder med tekniske utfordringer</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* Accenture ANS */}
                    <li className="timeline-item left">
                        <div className="timeline-body">
                            <div className="timeline-meta">
                                <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                    <span className="fw-bold">2000</span>
                                    <span>Februar</span>
                                </div>
                            </div>
                            <div className="timeline-content timeline-indicator timeline-content-no-padding-bottom">
                                <div className="card border-0 shadow">
                                    <div className="card-header p-xl-2 text-end bg-transparent no-border">
                                        <small className="text-muted">1 år 10 måneder</small>
                                    </div>
                                    <div className="card-body p-xl-2">
                                        <h5 className="card-title mb-2">IT konsulent</h5>
                                        <h6 className="card-subtitle text-secondary mb-2">Accenture ANS</h6>
                                        <hr/>
                                        <div className="card-header p-xl-0 text-end bg-transparent no-border">
                                            <small className="text-muted">1 år 10 måneder</small>
                                        </div>
                                        <h6 className="card-subtitle text-secondary mb-2">Java utvikler</h6>
                                        <h6 className="card-subtitle text-secondary mb-2">Postbanken</h6>
                                        <div className="card-text m-0">
                                            Engasjert for å videreutvikle potsbankens nettbank løsning.
                                            <ul>
                                                <li>Programmeringsspråk java</li>
                                                <li>Lagde ett test verktøy for å sjekke om webservice tjenester
                                                    var oppe
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* UIO, IFI*/}
                    <li className="timeline-item right">
                        <div className="timeline-body">
                            <div className="timeline-meta">
                                <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                    <span className="fw-bold">1999</span>
                                    <span>Mai</span>
                                </div>
                            </div>
                            <div className="timeline-content timeline-indicator ">
                                <div className="card border-0 shadow">
                                    <div className="card-header p-xl-2 bg-transparent no-border">
                                        <small className="text-muted">8 måneder</small>
                                    </div>
                                    <div className="card-body p-xl-2">
                                        <h5 className="card-title mb-2">Forsker</h5>
                                        <h6 className="card-subtitle text-secondary mb-2">Universitetet i Oslo,
                                            Institutt for informatikk</h6>
                                        <div className="card-text m-0">Utviklet en SCI nettverk simulator i
                                            Opnet som ble godkjent og lagt inn i standard biblioteket til
                                            Opnet.
                                            <ul>
                                                <li>Ugitte publikasjoner <a
                                                        href="https://www.researchgate.net/scientific-contributions/Gunnar-Ronneberg-81751114">researchgate
                                                    scientific-contributions Gunnar-Ronneberg</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul> {/* end timeline */}
            </div> {/* end grid */}
        </div> {/* end row justify */}
    </div> {/* end container */}
</section>
)
}