import {signOut} from 'aws-amplify/auth'

import { Container, Dropdown } from 'react-bootstrap';

function SiteNav(props) {

    const handleLogout = async () => {
        try {
            console.log('Logout');
            await signOut()

            props.updateAuthStatus(false)
        } catch (err) { console.log(err) }
    }


    return (
        <header>
            <Container className="float-start">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Home
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/">Home</Dropdown.Item>
                        <Dropdown.Item href="/teams">Teams</Dropdown.Item>
                        <Dropdown.Item href="/venues">
                            Venues
                        </Dropdown.Item>
                        <Dropdown.Item href="/machines">Machines</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="/register">Register</Dropdown.Item>
                        <Dropdown.Item href="/login">Login</Dropdown.Item>
                        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </header>
    );
}

export default SiteNav;