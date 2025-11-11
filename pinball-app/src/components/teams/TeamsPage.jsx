import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function TeamsPage() {
    return (
        <Container fluid>
            <h1 className="font-weight-light">Current Teams</h1>
            <p className="mt-4">
                List of Teams
            </p>
            <Button variant="outline-primary">Go Home &gt;&gt;</Button>
        </Container>
    );
}

export default TeamsPage;