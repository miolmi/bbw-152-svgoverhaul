import {Container, Row, Col} from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col className={"col-md-3"}>
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem impsum</li>
                            <li>Lorem impsum</li>
                            <li>Lorem impsum</li>
                            <li>Lorem impsum</li>
                        </ul>
                    </Col>
                    <Col className={"col-md-3"}>
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem impsum</li>
                            <li>Lorem impsum</li>
                            <li>Lorem impsum</li>
                            <li>Lorem impsum</li>
                        </ul>
                    </Col>
                    <Col className={"col-md-3"}>
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem impsum</li>
                            <li>Lorem impsum</li>
                            <li>Lorem impsum</li>
                            <li>Lorem impsum</li>
                        </ul>
                    </Col>
                    <Col className={"col-md-3"}>
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem impsum</li>
                            <li>Lorem impsum</li>
                            <li>Lorem impsum</li>
                            <li>Lorem impsum</li>
                        </ul>
                    </Col>
                </Row>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Super Baby App - All Rights
                    </p>
                </div>
            </Container>
        </footer>
    );
}
export default Footer;