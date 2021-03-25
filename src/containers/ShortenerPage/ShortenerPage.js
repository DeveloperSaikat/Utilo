import { Component } from 'react';
import './ShortenerPage.css';
import { Form, Button, Card, Modal } from 'react-bootstrap';
import axios from 'axios';

class ShortenerPage extends Component{

    state = {
        link: '',
        shortUrl: '',
        urlResponse: false
    }

    handleChange = (event) => {    
        this.setState({link: event.target.value});  
    }

    handleSubmit = (event) => {
        const shortIt = {
            longUrl: this.state.link,
            slug: ""
        }

        axios.post("https://api.zubku.site/shortLinks", shortIt)
            .then(response => {
                this.setState({shortUrl: "https://zubku.site/"+response.data.slug});
                axios.post("#", response.data)
                    .then(response => {
                        this.setState({urlResponse: true})
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));

        event.preventDefault();
    }

    handleClose = () => {
        this.setState({urlResponse: false});
    };


    render(){
      return (
          <div> 
              <Modal show={this.state.urlResponse} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Your URL</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Short URL: {this.state.shortUrl} </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
              </Modal>

              <Card className="shortener-form">
                <Card.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicLongUrl">
                            <Form.Label>Provide a URL</Form.Label>
                            <Form.Control type="text"  onChange={this.handleChange} placeholder="Enter your long URL" />
                            <Form.Text className="text-muted">
                            We'll never share your short URLs with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
              </Card>
          </div>
      );
    }
  }
  
  
  export default ShortenerPage
  
