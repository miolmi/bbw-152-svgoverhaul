import React from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import {Background, Parallax} from 'react-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import sky from '../../pictures/sky_2.jpg'
import child_1 from '../../pictures/child_1.png'
import child_2 from '../../pictures/child_2.png'
import child_3 from '../../pictures/child_3.png'
import video_bg from '../../pictures/manyRocketsBg.mp4'

function Home() {
    // initialize AOS library
    React.useEffect(() => {
        AOS.init();
    }, []);

    /* chatgpt helped with svg but most of the things were our ideas,
     we barely used any extra websites beside "AI's"

     the following links where used as a source for the css of the image onhover animation
     https://codepen.io/alexkleinubing/pen/abBzMKe*/

    return (
        <div>
            <Parallax bgImage={sky} strength={500}>
                <Container>
                    <header className="App-header">
                        <svg width="100" height="100">
                            <rect x="30" y="80" width="40" height="20" rx="5" fill="#ff8800">
                                <animate attributeName="height" attributeType="XML"
                                         values="20;60;20" dur="1s" repeatCount="indefinite"/>
                                <animate attributeName="y" attributeType="XML"
                                         values="80;40;80" dur="1s" repeatCount="indefinite"/>
                            </rect>
                            <rect x="20" y="60" width="60" height="20" rx="5" fill="#ffbb33">
                                <animate attributeName="height" attributeType="XML"
                                         values="20;80;20" dur="1s" repeatCount="indefinite"/>
                                <animate attributeName="y" attributeType="XML"
                                         values="60;20;60" dur="1s" repeatCount="indefinite"/>
                            </rect>
                            <rect x="10" y="40" width="80" height="20" rx="5" fill="#ffdd66">
                                <animate attributeName="height" attributeType="XML"
                                         values="20;100;20" dur="1s" repeatCount="indefinite"/>
                                <animate attributeName="y" attributeType="XML"
                                         values="40;0;40" dur="1s" repeatCount="indefinite"/>
                            </rect>
                        </svg>
                        <h1 data-aos="fade-right" data-aos-duration="1000">
                            Super Crazy Baby
                        </h1>
                        <p className="title" data-aos="fade-left" data-aos-duration="1000">
                            conquer the sky with us.
                        </p>
                    </header>
                </Container>
            </Parallax>

            <Parallax>

                <Background>
                    <video src={video_bg} autoPlay loop muted/>
                </Background>

                <h2 className={"mt-5"}>Jetpack Products:</h2>

                <Container>
                    <Row xs={1} md={1} lg={1} className={"g-5 m-5"}>
                        <Col>
                            <Card className="d-flex flex-row" data-aos="fade-right" data-aos-duration="2000">
                                <Card.Img className="card-img-left" src={child_1}/>
                                <Card.Body>
                                    <Card.Title>Jetpack Model A</Card.Title>
                                    <Card.Text>
                                        This model we usually sell to our starter clients. Our Crazy Baby Model A is
                                        made for beginners in the jetpack baby industry. Because of the price, it is
                                        very attractive for new clients, the baby can do basic tricks.
                                    </Card.Text>
                                    <Button variant="primary">1'200$</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="d-flex flex-row" data-aos="fade-left" data-aos-duration="2000">
                                <Card.Body>
                                    <Card.Title>Jetpack Model B</Card.Title>
                                    <Card.Text>
                                        This model we usually sell to our more advanced clients. Our Crazy Baby Model B
                                        is made for our advanced customers, the customers that have already had their
                                        experience with a few babies. Even though it is more pricey, the price comes
                                        with a skilled baby.
                                    </Card.Text>
                                    <Button variant="primary">4'200$</Button>
                                </Card.Body>
                                <Card.Img className="card-img-right" src={child_2}/>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="d-flex flex-row" data-aos="fade-right" data-aos-duration="2000">
                                <Card.Img className="card-img-left" src={child_3}/>
                                <Card.Body>
                                    <Card.Title>Jetpack Pro</Card.Title>
                                    <Card.Text>
                                        This is the model for our clients, that are seriously involved in the baby
                                        jetpack industry. This Model includes the most skilled baby, with basically no
                                        restrictions, but it comes at a price. If you want to conquer the world with a
                                        baby wearing a jetpack, this is your choice!
                                    </Card.Text>
                                    <Button variant="primary">10'000$</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Parallax>
        </div>

    );
}

export default Home;