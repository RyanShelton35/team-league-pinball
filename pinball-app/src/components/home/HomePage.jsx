import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function HomePage() {
    return (
        <Container>
            <h1 className="font-weight-light">Three Bull Brewing Pinball League</h1>
            <p className="mt-4">
                Site for the weekly pinball league at Three Bull Brewing in Snohomish, WA
            </p>
            <Button variant="outline-primary">Get Started &gt;&gt;</Button>
        </Container>
    );
}

export default HomePage;