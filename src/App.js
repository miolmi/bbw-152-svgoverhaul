import React from 'react';
import {Button, Card, Container} from 'react-bootstrap';
import {Parallax} from 'react-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import jetpack from './pictures/jetpackmf.jpg'
import './App.css';

function App() {
    // initialize AOS library
    React.useEffect(() => {
        AOS.init();
    }, []);

    // chatgpt helped with svg

    return (
        <div className="App">
            <Parallax bgImage={jetpack} strength={500}>
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
                        <h1 data-aos="fade-up" data-aos-duration="1000">
                            Super Crazy Baby
                        </h1>
                        <h1 data-aos="fade-up" data-aos-duration="1000">
                            We sell jetpacks no one has ever seen before, since we sell them paired with babies.
                        </h1>
                    </header>
                </Container>
            </Parallax>
            <Container className="my-5" data-aos="fade-up" data-aos-duration="1000">
                <h2 className="text-center mb-5">Jetpack Products</h2>
                <div className="d-flex flex-wrap justify-content-center">
                    <Card style={{width: '18rem'}} data-aos="fade-right" data-aos-duration="1000">
                        <Card.Img variant="top" src={jetpack} style={{width: '100%'}}/>
                        <Card.Body>
                            <Card.Title>Jetpack Model A</Card.Title>
                            <Card.Text>
                                This model we usually sell to our starter clients. Our Crazy Baby Model A is made for
                                beginners in the jetpack baby industry.
                                Because of the price, it is very attractive for new clients, the baby can do basic
                                tricks.
                            </Card.Text>
                            <Button variant="primary">1'200$</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{width: '18rem'}} data-aos="fade-right" data-aos-duration="1000">
                        <Card.Img variant="top" src={jetpack} style={{width: '100%'}}/>
                        <Card.Body>
                            <Card.Title>Jetpack Model B</Card.Title>
                            <Card.Text>
                                This model is perfect for intermediate pilots who want a little more speed and altitude.
                                It can reach speeds of up to 750 mph and fly up to 20,000 feet.
                            </Card.Text>
                            <Button variant="primary">2'500$</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{width: '18rem'}} data-aos="fade-right" data-aos-duration="1000">
                        <Card.Img variant="top" src={jetpack} style={{width: '100%'}}/>
                        <Card.Body>
                            <Card.Title>Jetpack Model C</Card.Title>
                            <Card.Text>
                                This is our top-of-the-line model, designed for experienced pilots who demand the best.
                                It can reach speeds of up to 1000 mph and fly up to 30,000 feet.
                            </Card.Text>
                            <Button variant="primary">5'000$</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
}

export default App;