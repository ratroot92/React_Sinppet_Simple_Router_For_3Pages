import React from 'react';
import {Jumbotron as Jumbo, Container } from 'react-bootstrap';
import Styled from 'styled-components';
import BoatImage from '../assets/1.jpg';

const Styles=styled.div``;

export const Jumbotron=()=>(
    <Styles>
        <Jumbo fluid className="Jumbo">
        <div className="overlay"></div>
        <Container>
        <h1 className="text-dark">Welcome</h1>
        </Container>
        </Jumbo>
    </Styles>
);
export default Jumbotron;