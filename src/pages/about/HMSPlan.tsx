import { useTranslation } from 'react-i18next';
import ReactDOM from 'react-dom';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
// project import
import { HMSPlanPdf } from './HMSPlanPdf';
export const HMSPlan = () => {

    const { t } = useTranslation()

    return (
        <div>
            <PDFDownloadLink document={<HMSPlanPdf />} fileName='hms-plan.pdf'>
                <div>
                 <span>Download</span>
                </div>
            </PDFDownloadLink>
            <PDFViewer>
                <HMSPlanPdf />
            </PDFViewer>
        </div>
    )
}