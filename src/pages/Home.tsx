import { useTranslation } from 'react-i18next';
// bootstrap import
import Card from 'react-bootstrap/Card';

export const Home = () => {

    const { t } = useTranslation()

    return (
     <Card className="m-4">
        <Card.Header>
         <h3>{t('home')}</h3>
        </Card.Header>
            <Card.Body>

                        <h1 style={{ color: "green"}}>
                            Bootstrap stacked table
                        </h1>
                        <div className="d-flex flex-wrap">
                            <div className="flex-grow-1 col-md-6 col-lg-4 bg-primary p-4 text-start">
                                <span> Column 1 </span>
                            </div>
                            <div className="flex-grow-1 col-md-6 col-lg-4 bg-secondary p-4 text-start">
                                <span> Column 2 </span>
                            </div>
                            <div className="flex-grow-1 col-md-6 col-lg-4 bg-danger p-4 text-start">
                                <span> Column 3 </span>
                            </div>
                            <div className="flex-grow-1 col-md-6 col-lg-4 bg-info p-4 text-start">
                                <span> Column 4 </span>
                            </div>
                        </div>
            </Card.Body>
            <Card.Body>
                        <div class="row">
                            <div class="col-xs-6 col-md-12 col-lg-4">
                                <div className="bg-primary text-center p-4">
                                    <h4> Column 1 </h4>
                                    <p> GeeksForGeeks is awesome!</p>
                                </div>
                            </div>
                           <div class="col-xs-6 col-md-12 col-lg-4">
                                <div className="bg-secondary text-center p-4">
                                    <h4> Column 2 </h4>
                                    <p>GeeksForGeeks is actually for geeks!</p>
                                </div>
                            </div>
                            <div class="col-xs-6 col-md-12 col-lg-4">
                                <div className="bg-danger text-center p-4">
                                    <h4> Column 3 </h4>
                                    <p> I will switch to vertical as the screen goes smaller!</p>
                                </div>
                            </div>
                        </div>
            </Card.Body>
            <Card.Body>
            <div class="container my-4">
              <table class="table table-striped table-custom-stacked">
                <thead>
                  <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="First Name">Jane</td>
                    <td data-label="Last Name">Doe</td>
                    <td data-label="Role">Developer</td>
                  </tr>
                  <tr>
                    <td data-label="First">John</td>
                    <td data-label="Last Name">Smith</td>
                    <td data-label="Role">Designer</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </Card.Body>
            <Card.Body>
                <div class="row d-none d-md-flex font-weight-bold border-bottom pb-2">
                  <div class="col-md-2">Status</div>
                  <div class="col-md-2">Antall</div>
                  <div class="col-md-2">Produktkode</div>
                  <div class="col-md-2">Batch</div>
                  <div class="col-md-2">Holdbarhet</div>
                  <div class="col-md-2">Av</div>
                </div>

                <div class="row border-bottom py-2">
                  <div class="col-12 col-md-4">
                    <span class="d-md-none font-weight-bold">Status: </span>Jane
                  </div>
                   <div class="col-12 col-md-4">
                        <span class="d-md-none font-weight-bold">Antall: </span>Jane
                   </div>
                  <div class="col-12 col-md-4">
                    <span class="d-md-none font-weight-bold">Produktkode: </span>Doe
                  </div>
                  <div class="col-12 col-md-4">
                    <span class="d-md-none font-weight-bold">Batch: </span>Developer
                  </div>
                   <div class="col-12 col-md-4">
                      <span class="d-md-none font-weight-bold">Holdbarhet: </span>Developer
                   </div>
                   <div class="col-12 col-md-4">
                      <span class="d-md-none font-weight-bold">Av: </span>Developer
                    </div>
                </div>
            </Card.Body>
            <Card.Body>
              <div class="row col-12">
                  <div class="col-2 align-self-center">
                        <h2><span class="badge text-bg-secondary">230</span></h2>
                  </div>
                  <div class="col-10">
                      <dl class="row gx-0 gy-0">
                        <dt class="col-5 fs-6">Produktkode</dt>
                        <dd class="col-7 fw-light">12343453253</dd>

                        <dt class="col-5 fs-6">Btach</dt>
                        <dd class="col-7 fw-light">DD-34345</dd>

                        <dt class="col-5 fs-6">Holdbarhet</dt>
                        <dd class="col-7 font-monospace">2028-09</dd>

                        <dt class="col-5 fs-6">Plukket av</dt>
                        <dd class="col-7 fw-light">gunnarr</dd>
                      </dl>
                  </div>
              </div>
            </Card.Body>
     </Card>
    )
}