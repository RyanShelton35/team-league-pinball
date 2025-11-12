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
        <div className="nav-bar py-0">
            <div className="btn-group">
                <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    <img src="/icon_128.png" width="38" height="38" /><span className="px-1 text-uppercase">HOME</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="/">HOME</Dropdown.Item>
                <Dropdown.Item href="http://pinballstats.info/search/">PLAYER LOOKUP</Dropdown.Item>
                <Dropdown.Item href="/teams">TEAMS</Dropdown.Item>
                <Dropdown.Item href="/schedule">SCHEDULE</Dropdown.Item>
                <Dropdown.Item href="/standings">STANDINGS</Dropdown.Item>
                <Dropdown.Item href="/matches">MATCHES</Dropdown.Item>
                <Dropdown.Item href="/stats">STATS</Dropdown.Item>
                <Dropdown.Item href="/venues">VENUES</Dropdown.Item>
                <Dropdown.Item href="/machines">MACHINES</Dropdown.Item>
                <Dropdown.Item href="/ratings">RATINGS</Dropdown.Item>
                <Dropdown.Item href="/leaguerules">LEAGUE RULES</Dropdown.Item>
                <Dropdown.Item href="/matchrules">MATCH RULES</Dropdown.Item>
                <Dropdown.Item href="http://tinyurl.com/mnparchive">ARCHIVES</Dropdown.Item>
                <Dropdown.Item href="/scoresheet">SCORESHEET PDF</Dropdown.Item>      
                <Dropdown.Item href="/ifparules">IFPA RULES</Dropdown.Item>
                <Dropdown.Item href="/signup">ACCOUNT SIGN-UP</Dropdown.Item>
                <Dropdown.Item href="/NEWPLAYERS">NEW PLAYER INFORMATION</Dropdown.Item>
                <Dropdown.Item href="/CONDUCT">REPORT PLAYER CONDUCT</Dropdown.Item>
                <Dropdown.Item href="/login">LOGIN</Dropdown.Item>
                <Dropdown.Item href="/profile">PROFILE</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default SiteNav;