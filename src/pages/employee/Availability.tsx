import { useTranslation } from 'react-i18next';
// bootstrap import
import Card from 'react-bootstrap/Card';

export const Availability = () => {

    const { t } = useTranslation()

    return (
        <div className="container">
            <div className="card m-3">
                <h3 className="card-header">{t("availabilityTitle")}</h3>
                <div className="card-body">
                    <p className="card-text">{t("availabilityBasicCondition")}</p>
                    <p className="card-text text-secondary">{t("availabilityEmployeesInfo")}</p>
                    <div>
                        <h4 className="card-title">{t("availabilityAvailable")}</h4>
                        <dl className="mb-3 row">
                            <dt className="col-sm-3">{t("availabilityConsultant")}</dt>
                            <dd className="col-sm-8"><a href="@{/public/employees}">Gunnar Rønneberg</a></dd>
                            <dt className="col-sm-3">{t("availabilityAvailable")}</dt>
                            <dd className="col-sm-8">engaged to 31.12.2022</dd>
                            <dt className="col-sm-3">{t("availabilityAvailabilityType")}</dt>
                            <dd className="col-sm-8">on-site/home office</dd>
                            <dt className="col-sm-3">{t("availabilityLocation")}</dt>
                            <dd className="col-sm-8">Oslo</dd>
                        </dl>
                    </div>
                    <div>
                        <h4 className="card-title">{t("availabilityPricing")}</h4>
                        <dl className="mb-3 row">
                            <dt className="col-sm-3">{t("availabilityPricingRate")}</dt>
                            <dd className="col-sm-8">1000 - 1300 nkr</dd>
                            <dt className="col-sm-3">{t("availabilityPricingTerminationCost")}</dt>
                            <dd className="col-sm-8">0</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
 )
}