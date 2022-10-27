import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import LeftSideShared from '../Shared/LeftSideShared/LeftSideShared';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container>
                <Row>
                    <Col lg='4'>
                        <LeftSideShared></LeftSideShared>
                    </Col>

                    <Col lg='8'>
                        <Outlet></Outlet>
                    </Col>

                </Row>
            
            </Container>
        
            <Footer></Footer>
            
        </div>
    );
};

export default Main;