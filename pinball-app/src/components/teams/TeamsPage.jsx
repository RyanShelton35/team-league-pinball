import { Container, Table } from "react-bootstrap";

import { generateClient } from 'aws-amplify/data';

import { Amplify } from 'aws-amplify'
import outputs from '../../../amplify_outputs.json'

Amplify.configure(outputs);

/**
 * @type {import('aws-amplify/data').Client<import('../../../amplify/data/resource').Schema>}
 */
const client = generateClient();

const { data: teams } = await client.models.Team.list();

// Now you should be able to make CRUDL operations with the
// Data client

function TeamsPage() {

    const teamList = teams.map((team) => 						
                <tr key={team.key}>
                    <td className="text-xs-right">{team.venueKey}</td>
                    <td>{team.name} ({team.key})</td>
                </tr>
    );
    return (
        <Container fluid>
            <Table className="table"> 
                <tbody>
				    {teamList}
                </tbody>
			</Table> 
        </Container>
    );
}

export default TeamsPage;