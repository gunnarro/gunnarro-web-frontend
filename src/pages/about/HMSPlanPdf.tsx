import { useTranslation } from 'react-i18next';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export const HMSPlanPdf = () => {

    const { t } = useTranslation()

    return (
         <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text>HMS plan</Text>
              </View>
              <View style={styles.section}>
                <Text>Målsetting</Text>
              </View>
            </Page>
          </Document>
    )
}