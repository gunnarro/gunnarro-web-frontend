import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const  TableDataForm = () => (
    <Form>
           <Form.Group className="mb-3" controlId="formInventarStatus">
         <Form.Check type="radio" label="Todo" />
         <Form.Check type="radio" label="In progress" />
         <Form.Check type="radio" label="Utført" />
       </Form.Group>

      <Form.Group className="mb-3" controlId="formInventar">
        <Form.Label>Legg til inventar på formatet rom:inventar, f.eks kjøkken:kjøleskap</Form.Label>
        <Form.Control type="text" placeholder="Inventar" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formHandling">
        <Form.Label>Velg hva som skal gjøres med inventar</Form.Label>
        <Form.Check type="radio" label="La stå" />
        <Form.Check type="radio" label="Selges" />
        <Form.Check type="radio" label="Kastes" />
        <Form.Check type="radio" label="Eies av" />
        <Form.Check type="radio" label="Arves av" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPersonCheckbox">
        <Form.Label>Kryss av for hvem som eier, skal ha, eller ta ansvar for inventar</Form.Label>
        <Form.Check type="checkbox" label="Stein" />
        <Form.Check type="checkbox" label="Siri" />
        <Form.Check type="checkbox" label="Gunnar" />
      </Form.Group>
      <Button variant="primary" type="submit">Legg til</Button>
    </Form>
)