import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import axios from 'axios';
import { 
  Container,
  Jumbotron, 
  Row, 
  Col, 
  Input, 
  InputGroup, 
  InputGroupAddon, 
  Button 
} from 'reactstrap';

import '../styles/first-section.css';
import '../styles/second-section.css';
import '../styles/third-section.css';
import '../styles/fourth-section.css';
import '../styles/fifth-section.css';
import '../styles/footer.css';

import imgOne from '../APReactTest/1.png';
import imgTwo from '../APReactTest/2.png';
import imgThree from '../APReactTest/3.png';
import imgFour from '../APReactTest/4.png';
import imgFive from '../APReactTest/5.png';
import imgSix from '../APReactTest/6.png';

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    },
    this.handleChange = this.handleChange.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  subscribe() {
    axios.post('http://dev3.apppartner.com/Reactors/scripts/add-email.php', {
      email: this.state.email,
    }).then(res => console.log(res))
  }

  render() {
    return (
      <div>
        <Jumbotron className="jumbotron" fluid>
          <AppNavbar login />
          <Container fluid>
            <h1>Hello, welcome to Reactor</h1>
          </Container>
        </Jumbotron>
        <Container>
        <Row className="about">
          <Col sm="7">
            <h2>WHAT WE DO</h2>
          </Col>
          <Col className="right-side-text" sm="3">
            <h6>We Do</h6>
            <br/>
            <p>
              The quick, brown fox jumps over a lazy dog. 
              DJs flock when MTV ax quiz prog.
              Junk MTX quiz graced by fox whelps.
              Bawds job, flick quartz, vex nymphs.
            </p>
          </Col>
        </Row>
        </Container>
        <Container fluid className="more-info">
          <Row className="content-adj">
            <Col sm="6">
              <Row className="content-1">
                <Col sm='6'>
                  <img className="table" src={imgOne} />
                </Col>
                <Col sm='6'>
                  <h4 className="third-title">Regional Cuisine Down Home Southern Cooking</h4>
                  <br />
                  <p className="content-text">
                    The quick, brown fox jumps over a lazy dog. 
                    DJs flock when MTV ax quiz prog.
                    Junk MTX quiz graced by fox whelps.
                    Bawds job, flick quartz, vex nymphs.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col sm="6">
              <Row className="content-2">
                <Col sm='6'>
                  <img className="table" src={imgTwo} />
                </Col>
                <Col sm='6'>
                  <h4 className="third-title">Pos Hardware More Options In Less Space</h4>
                  <br />
                  <p className="content-text">
                    The quick, brown fox jumps over a lazy dog. 
                    DJs flock when MTV ax quiz prog.
                    Junk MTX quiz graced by fox whelps.
                    Bawds job, flick quartz, vex nymphs.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container fluid className="places">
          <h3 className="places-title">Maui By Air The Best Way Around The Island</h3>
          <Row className="places-adj">
            <Col sm="3">
              <img className="table" src={imgThree} />
              <h5>East Josianefurt</h5>
              <p className="grey-p">085 Daria Via</p>
            </Col>
            <Col sm="3">
              <img className="table" src={imgFour} />
              <h5>South Cristopherport</h5>
              <p className="grey-p">162 Chandler Ville</p>
            </Col>
            <Col sm="3">
              <img className="table" src={imgFive} />
              <h5>Concepcionbury</h5>
              <p className="grey-p">7643 Kylie Burgs</p>
            </Col>
            <Col sm="3">
              <img className="table" src={imgSix} />
              <h5>Reychester</h5>
              <p className="grey-p">5590 Gabe Views Apt. 044</p>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container className="fifth-section" fluid>
          <h2>SUBSCRIBE TO NEWSLETTER</h2>
          <br />
          <br />
          <InputGroup className="subscribe-form">
            <Input onChange={this.handleChange} name="email" className="input" placeholder="Your Email" />
            <Button onClick={this.subscribe} className="sub-button">Subscribe</Button>
          </InputGroup>
        </Container>
        <Container fluid className="footer">
          <h6>Footer</h6>
        </Container>
      </div>
    );
  }
}

export default LandingPage;
