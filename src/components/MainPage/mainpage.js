import React from 'react';
import MainPageDetails from '../MainPageDetails/mainpagedetails';
import './mainpage.css'
import { Jumbotron, Button } from 'react-bootstrap';

const mainpage = function(){
    return (
        <div>
            <Jumbotron className="jumbotron-content">
                <h1>Hello, world!</h1>
                <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
                </p>
                <p>
                <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron> 
            <MainPageDetails></MainPageDetails>
        </div>           
    )
};

export default mainpage