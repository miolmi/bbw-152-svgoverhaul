import React from 'react';
import { Container } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from './logo.svg';
import jetpack from './pictures/jetpackbro.png'
import './App.css';

function App() {
  // initialize AOS library
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
      <div className="App">
        <Parallax bgImage={jetpack} strength={500}>
          <Container>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 data-aos="fade-up" data-aos-duration="1000">
                Super Crazy Baby
              </h1>
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
            </header>
          </Container>
        </Parallax>
      </div>
  );
}

export default App;