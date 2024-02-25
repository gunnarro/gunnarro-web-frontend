
export const CvEducation = () => {
return (
<section id="education" className="bsb-timeline-4 p-1">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-10 col-md-12 col-xl-10 col-xxl-9">
                <ul className="timeline">
                    {/* UIO, IFI */}
                    <li className="timeline-item right">
                        <div className="timeline-body">
                            <div className="timeline-meta">
                                <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                    <span className="fw-bold">1995</span>
                                    <span>August</span>
                                </div>
                            </div>
                            <div className="timeline-content timeline-indicator ">
                                <div className="card border-0 shadow">
                                    <div className="card-header p-xl-2 bg-transparent no-border">
                                        <small className="text-muted">Mai 1999</small>
                                    </div>
                                    <div className="card-body p-xl-2">
                                        <h5 className="card-title mb-2">Cand. Scient</h5>
                                        <h6 className="card-subtitle text-secondary mb-2">Universitetet i Oslo</h6>
                                        <h6 className="card-subtitle text-secondary mb-2">Institutt for informatikk</h6>
                                        <div className="card-text m-0">Hovedfag gikk ut på å utbedre
                                            <a href="https://bibsys-almaprimo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=BIBSYS_ILS71475964080002201&context=L&vid=UIO&lang=no_NO&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=default_tab&query=any,contains,gunnar%20r%C3%B8nneberg&mode=Basic">flyt kontroll
                                                protokollen i ett SCI-nettverk</a>.
                                            Publikasjoner basert på resultatet, ref <a
                                                    href="https://www.researchgate.net/scientific-contributions/Gunnar-Ronneberg-81751114">researchgate scientific-contributions Gunnar-Ronneberg</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* Høgskolen i Sør-Trøndelag */}
                    <li className="timeline-item left">
                        <div className="timeline-body">
                            <div className="timeline-meta">
                                <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                    <span className="fw-bold">1993</span>
                                    <span>August</span>
                                </div>
                            </div>
                            <div className="timeline-content timeline-indicator ">
                                <div className="card border-0 shadow">
                                    <div className="card-header p-xl-2 text-end bg-transparent no-border">
                                        <small className="text-muted">Juni 1995</small>
                                    </div>
                                    <div className="card-body p-xl-2">
                                        <h5 className="card-title mb-2">Ingeniør</h5>
                                        <h6 className="card-subtitle text-secondary mb-2">Høgskolen i Sør-Trøndelag</h6>
                                        <h6 className="card-subtitle text-secondary mb-2">Elektro</h6>
                                        <div className="card-text m-0">Egendefinert hovedfagsoppgave som var teoretisk
                                            modell for en portabel hastighetsmåler basert på diode-laser teknologi og doppler effekt. konklusjonen
                                            ble at det ikke var realiserbart med ønsket nøyaktighet.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* Trondheim Tekniske Fagskole */}
                    <li className="timeline-item right">
                        <div className="timeline-body">
                            <div className="timeline-meta">
                                <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-center timeline-meta-fixed-width">
                                    <span className="fw-bold">1991</span>
                                    <span>August</span>
                                </div>
                            </div>
                            <div className="timeline-content timeline-indicator ">
                                <div className="card border-0 shadow">
                                    <div className="card-header p-xl-2 bg-transparent no-border">
                                        <small className="text-muted">Juni 1993</small>
                                    </div>
                                    <div className="card-body p-xl-2">
                                        <h5 className="card-title mb-2">Fagskole Tekniker</h5>
                                        <h6 className="card-subtitle text-secondary mb-2">Trondheim Tekniske Fagskole</h6>
                                        <h6 className="card-subtitle text-secondary mb-2">Elektronikk</h6>
                                        <div className="card-text m-0">Startet på videreutdanning etter endt fagprøve som
                                            telemontør i Telenor AS.
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