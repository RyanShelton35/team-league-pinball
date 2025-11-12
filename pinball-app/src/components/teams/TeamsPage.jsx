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

console.log("Number of Teams: %d", teams.length );



// Now you should be able to make CRUDL operations with the
// Data client

function TeamsPage() {

    const teamList = teams.map((team) => 						
                        <tr key={index}> 
							<td>{team.key}</td> 
							<td>{item.venueKey}</td> 
                            <td>{item.name}</td> 
						</tr> 
    );
    return (
        <Container fluid>
            <Table striped bordered hover className="custom-table"> 
				<thead> 
					<tr> 
						<th>Key</th> 
						<th>Venue</th> 
                        <th>Name</th>
					</tr> 
				</thead> 
				<tbody> 
					{teamList}
				</tbody> 
			</Table> 
        </Container>
    );
}

export default TeamsPage;