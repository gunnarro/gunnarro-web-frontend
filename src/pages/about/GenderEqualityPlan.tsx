import { useTranslation } from 'react-i18next';
// bootstrap import
import Card from 'react-bootstrap/Card';

export const GenderEqualityPlan = () => {

    const { t } = useTranslation()

    return (
     <Card className="m-4">
        <Card.Header>
            <h3>{t('genderEqualityPlan')}</h3>
        </Card.Header>
            <Card.Body>
                <section>
                    <h2>Målsetting</h2>
                    <p>
                        I Gunnarro AS har vi som mål at arbeidsmiljøet skal være attraktivt og utviklende for alle medarbeidere uavhengig av kjønn,
                        etnisitet, religion, funksjonsevne, seksuell orientering eller alder. Likestilling skal praktiseres slik at det bidrar til at alle
                        medarbeidere skal ha samme mulighet til kompetanse- og karriereutvikling.
                    </p>
                </section>
                <section>
                    <h2>Likestilling</h2>
                    <p>
                    Gunnarro AS har som mål å ha en jevn kjønnsfordeling på alle stillingsnivåer og fagområder, og at alle får like muligheter for kompetanse og karriereveiledning.
                    </p>
                    <p>
                    Arbeidsoppgaver og kompetanseutviklingstiltak som kan kvalifisere for avansement, fordeles slik at kvinner og menn får samme mulighet til opprykk.
                    </p>
                    <p>
                    Gunnarro as arbeider aktivt for å få ha en lik fordeling mellom kjønnene.
                    </p>
                    <section>
                        <h3>Rekruttering</h3>
                        <div>
                            <p>
                                Hele rekrutteringsprosessen i Gunnarro AS bygger på inkludering og mangfold. Kjønnslikestilling er vektlagt både ved stillingsutlysninger og ansettelser. I vår rekrutteringsprosess skal alle kandidater vurderes ut fra kvaliteter og egenskaper som berører jobbprestasjon. Kriterier som ikke berører jobbprestasjon, ekskluderes fra beslutningsprosessen. Dette fremmer mangfold og hindrer diskriminering.
                            </p>
                            <p>
                                Det er dalig leder som utarbeider kravene til stillingene og har ansvar for hele rekruteringsprosessen.
                            </p>
                        </div>
                    </section>
                </section>

                <section>
                    <h2>Lønn og lønnsutvikling</h2>
                    <div>
                        <p>Tildeling og forhandlinger om lønn skjer i henhold til en lønnspolitikk hvor likestilling mellom kjønnene vektlegges. Lønnspolitikken til Gunnarro AS fastsetter at det ikke skal forekomme diskriminering ut fra kjønn eller om ansatte har en fast eller midlertidig stilling.</p>
                        <p>Alle medarbeidere har rett til en årlig samtale om kompetanse, ansvar, lønn og karriereutvikling. Samtalene skal bidra til likelønn mellom kjønnene.</p>
                    </div>
                </section>

                <section>
                    <h2>Analyser og rapportering</h2>
                    <div>
                        <p>
                        Innenfor rammen av kjønnslikestilling jobber Gunnarro AS aktivt, målrettet og planmessig for å fremme likestilling og hindre diskriminering basert på:
                        </p>
                        <ul>
                            <li>Kjønn</li>
                            <li>Graviditet</li>
                            <li>Permisjon ved fødsel eller adopsjon</li>
                            <li>Omsorgsoppgaver</li>
                            <li>Kjønnsidentitet, kjønnsuttrykk eller kombinasjoner hvor disse elementene inngår</li>
                        </ul>
                        <p>Videre jobbes det for å hindre trakassering, seksuell trakassering og kjønnsbasert vold. Arbeidet omfatter:</p>
                        <ul>
                            <li>Rekruttering</li>
                            <li>Lønns- og arbeidsvilkår</li>
                            <li>Forfremmelser</li>
                            <li>Utviklingsmuligheter</li>
                            <li>Å tilrettelegge og gi mulighet for å kombinere arbeid og familieliv</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2>Ansvar og roller knyttet til likestilling</h2>
                    <div>
                        <p>
                        Det er Gunnarro AS som arbeidsgiver, ved daglig leder, som har hovedansvar for at alle ansatte i virksomheten har et fullt forsvarlig arbeidsmiljø. Herunder at ansatte ikke opplever trakassering, seksuell trakassering eller diskriminering på bakgrunn av blant annet kjønn, kjønnsuttrykk og kjønnsidentitet.
                        </p>
                        <p>
                        Alle ledere og ansatte i Gunnarro AS har et ansvar for å drive og videreutvikle arbeidet med likestilling og mangfold i sin hverdag. Hvor daglig leder har et særlig ansvar for å veilede, følge opp og rapportere arbeidet.
                        </p>
                    </div>
                </section>

                <section>
                    <h2>Status for likestilling mellom kjønnene i Gunnarro AS</h2>
                    <div>
                        <p>
                            Status for likestilling og mangfold rapporteres årlig i forbindelse med innsending av årsregnskapet.
                        </p>
                        <p>
                        Gunnarro AS har kun hatt en ansatt siden oppstart i 2022 og utvidet virksomheten i 2024 med to deltidsansatte, hvorav en junior utvikler og en administrasjonssekretær. Vi ser ikke for oss videre ekspansasjon ut over dette i fremtiden.
                        </p>
                        <p>
                        I 2024 vil kvinneandelen være 33%.
                        </p>

                        <table className="table table-borderless table-hover">
                                <thead>
                                    <tr>
                                         <th scope="col"/>
                                         <th scope="col"/>
                                         <th scope="col"/>
                                         <th scope="col"/>
                                         <th scope="col"/>
                                    </tr>
                                    <tr>
                                        <th scope="col">Stillingsgrupper</th>
                                        <th scope="col">År</th>
                                        <th scope="col">Kvinners andel av alle ansatte i stillingsgruppen</th>
                                        <th scope="col">Ansatte totalt i stillingsgruppen</th>
                                        <th scope="col">Kvinners lønn i prosent av lønn til menn</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    <tr>
                                        <td>Hele virksomheten</td>
                                        <td>2023</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Ledelse</td>
                                        <td>2023</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>IT-konsulent</td>
                                        <td>2023</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Adminstrasjonssekretær</td>
                                        <td>2023</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                       <td>Junior utvikler</td>
                                       <td>2023</td>
                                       <td>0</td>
                                       <td>0</td>
                                       <td></td>
                                    </tr>
                                </tbody>
                                <tfoot className="table-group-divider">
                                    <tr>
                                        <td></td>
                                    </tr>
                                </tfoot>
                            </table>
                    </div>
                </section>
            </Card.Body>
            <Card.Footer>
                 <div>
                    Oslo, 10. mai 22024
                    Gunnar Rønneberg, Daglig leder
                    gunnarro as
                 </div>
            </Card.Footer>
     </Card>
    )
}