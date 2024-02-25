export const CvSkills = () => {
return (
<section id="skills" className="resume-section">
    <div className="resume-section-content">
        <ul className="mb-3 text-list">
            <li>Roller/Ansvar
                <ul>
                    <li>Engasjert som Tech lead og system utvikler</li>
                    <li>System Arkitekt for plattfom og applikasjoner</li>
                    <li>System ansvarlig for plattform, applikasjoner</li>
                    <li>Java Chapter lead</li>
                    <li>AM, AO for applikasjoner</li>
                </ul>
            </li>
            <li>2 års erfaring som selvstendig konsulent. Engasjert som system utvikler og tech lead hvor begge oppdrage har vært modernisering av monolith og over til en microservice basert arkitektur.</li>
            <ul>
                <li>Jobbet med applikasjons arkitektur og design av databsemodell for HR løsning</li>
                <li>Test og produksjonsmiljø i Azure og ReadHat servere</li>
                <li>Jobbet med Java og spring boot rammeverket</li>
                <li>Brukt Oracle og SQL server database</li>
                <li>Brukt gradle og maven</li>
                <li>Jobbet med EAV database model</li>
                <li>Brukt Gitlab og Github</li>
                <li>Implementert REST tjenenster</li>
            </ul>
            <li>3 års erfaring som arkitekt og utvikler i Telenor med å bygge opp ny microservice plattform for TV
                tjenester. Plattformen betjener blant annet Telenor Mine sider med hundretusenvis av brukere.
                <ul>
                    <li>Laget applikasjonsmal for microservice, basert på <span className="text-brand">Spring Boot</span> rammeverket, ved hjelp av <span className="text-brand">Maven</span> archetype.
                    </li>
                    <li>Laget retningslinjer og best praksis for utvikling av <span className="text-brand">Spring Boot</span> baserte microservicer og REST tjenester.
                    </li>
                    <li>Installert monitorering av tjenester og platform ved hjelp av <span className="text-brand">Prometheus</span>,
                        <span className="text-brand">Alertmanager</span> og <span className="text-brand">Grafana</span>.
                        Hvor alarmer sendes til en <span className="text-brand">Slack</span> gruppe.
                    </li>
                    <li>Installert og konfigurert <span className="text-brand">RabbitMQ</span>, som blant annet brukes
                        til asynkron kommunikasjon mellom microservicene.
                    </li>
                    <li>Installert og konfiguret <span className="text-brand">Apache</span> som API gateway, hvor det
                        brukes 2-way-tls mot tjenestene. Laget java modul for å forenkle httpd konfigurering, samt
                        full CI/CD pipeline for deploy av httpd konfigurasjon.
                    </li>
                    <li>Implementert <span className="text-brand">Swagger</span> for API dokumentasjon.</li>
                    <li>Satt opp CD/CI pipeline i <span className="text-brand">Bamboo</span>, hvor <span
                            className="text-brand">Maven</span>, <span className="text-brand">GitLab</span> og <span
                            className="text-brand">Sonarqube</span> brukes som hjelpe verktøy. Hvor microservicene
                        deployes til <span className="text-brand">RedHat</span> servere som selvstendige applikasjoner.
                    </li>
                    <li>Opprettet system, applikasjon og tjenestedokumentasjon på <span className="text-brand">Confluence</span>.
                        Hvor <span className="text-brand">Gliffy</span> er brukt til å tegne arkitektur og
                        sekvensdiagrammer.
                    </li>
                    <li>Tilrettelagt for å kjøre <span className="text-brand">Spring</span> boot applikasjonene i <span className="text-brand">Docker</span> container ved bruk av <span className="text-brand">Google jib.</span>.
                    </li>
                </ul>
            </li>
            <li>7 år erfaring som systemarkitekt for Telenors mellomvareplattform for TV tjenester basert på <span
                    className="text-brand">Oracle Service Bus</span> og <span className="text-brand">Oracle Soa Suite</span>.
                Hvor vi har brukt SOAP, REST, JMS, FTP, SMTP, JDBC.
            </li>
            <li>Lang erfaring med bruk av <span className="text-brand">Splunk</span>, installert <span
                    className="text-brand">Splunk</span> forwardere og opprettet dashboard, alarmer og rapporter.
            </li>
            <li>Arbeidet med sikkerhet og integasjonstesting av REST og SOAP tjenester ved bruk av <span
                    className="text-brand">SoapUI</span>, <span className="text-brand">Junit</span> og sikkerhets script.
            </li>
            <li>Opplæring og guiding av både ansatte og konsulenter på Telenors TV plattform</li>
            <li>Systemarkitektur, applikasjonsarkitektur og design har vært mine oppgaver, samt vedlikehold,
                monitorering og drift av applikasjoner har vært mitt ansvar.
            </li>
            <li>Har stort sett jobbet Agilt, hvor testdrevet utvikling har vært i fokus. Hvor jeg også har har hatt
                en ledende rolle hva oppgaver og utvikling angår.
            </li>
            <li>Både lang erfaring og god kjennskap med bruk av følgende teknologier:
                <dl className="mb-3 row">
                    <dt className="col-sm-3 dt-style">Operativsystem</dt>
                    <dd className="col-sm-8 text-gradient">centos, redhat, ubuntu, windows</dd>
                    <dt className="col-sm-3 dt-style">Programmeringsspråk</dt>
                    <dd className="col-sm-8 text-gradient">java, bash script, android sdk, python, javascript</dd>
                    <dt className="col-sm-3 dt-style">Rammeverk</dt>
                    <dd className="col-sm-8 text-gradient">spring framework, apache camel, apache cxf, junit, mockito, log4j2, logback, thymeleaf,
                        bootstrap, hibernate, html, css, jsf, jsp
                    </dd>
                    <dt className="col-sm-3 dt-style">Utviklingsverktøy</dt>
                    <dd className="col-sm-8 text-gradient">intellij, intellij, maven, gradle, git, soapui, sqlDeveloper, swagger,
                        android studio, sql server management studio
                    </dd>
                    <dt className="col-sm-3 dt-style">Sikkerhet</dt>
                    <dd className="col-sm-8 text-gradient">2-veis-tls, sso, 2-faktor-authentisering</dd>
                    <dt className="col-sm-3 dt-style">Database</dt>
                    <dd className="col-sm-8 text-gradient">oracle, sql server, mysql, mariadb, hsql, h2</dd>
                    <dt className="col-sm-3 dt-style">Støttesystemer</dt>
                    <dd className="col-sm-8 text-gradient">bamboo, jenkins, gitlab, bitbucket, gitlab, github ci/cd, jira, confluence, splunk, nexus, prometheus,
                        sonarqube, grafana, snyk, backstage
                    </dd>
                    <dt className="col-sm-3 dt-style">Meldingskø/bus</dt>
                    <dd className="col-sm-8 text-gradient">oracle service bus, jms, rabbitmq, activemq</dd>
                    <dt className="col-sm-3 dt-style">Applikasjons container</dt>
                    <dd className="col-sm-8 text-gradient">tomcat, jetty, netty, undertow</dd>
                    <dt className="col-sm-3 dt-style">Applikasjons servere</dt>
                    <dd className="col-sm-8 text-gradient">weblogic, apache</dd>
                    <dt className="col-sm-3 dt-style">Skyløsninger</dt>
                    <dd className="col-sm-8 text-gradient">openshift, google cloud, Azure</dd>
                </dl>
            </li>
        </ul>
    </div>
</section>
)
}