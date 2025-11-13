import { Container, Table } from "react-bootstrap";

import { generateClient } from 'aws-amplify/data';

import { Amplify } from 'aws-amplify'
import outputs from '../../../amplify_outputs.json'

Amplify.configure(outputs);

/**
 * @type {import('aws-amplify/data').Client<import('../../../amplify/data/resource').Schema>}
 */
const client = generateClient();

const { data: venues } = await client.models.Venue.list();

// Now you should be able to make CRUDL operations with the
// Data client

function VenuesPage() {

    const venueList = venues.map((venue) => 						
                <tr key={venue.key}>
                    <td>{venue.name}</td>
                </tr>
    );
    return (
        <Container fluid>
            <Table className="table"> 
                <tbody>
                    {venueList}
                </tbody>
            </Table> 
        </Container>
    );
}

export default VenuesPage;