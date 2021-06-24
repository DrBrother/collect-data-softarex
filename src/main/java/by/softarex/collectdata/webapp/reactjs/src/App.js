import React from 'react';
import './App.css';

import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavigationBar from "./components/NavigationBar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import FieldList from "./components/FieldList";

function App() {
    const marginTop = {
        marginTop: "20px"
    }

    return (
        <Router>
            <NavigationBar/>
            <Container>
                <Row>
                    <Col lg={12} style={marginTop}>
                        <Switch>
                            <Route path="/" exact component={Welcome}/>
                            <Route path="/fields" exact component={FieldList}/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </Router>
    );
}

export default App;
