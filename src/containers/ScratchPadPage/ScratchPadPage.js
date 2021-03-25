import { Component } from 'react';
import './ScratchPadPage.css';
import { Form, Button, Card, Modal } from 'react-bootstrap';
import axios from 'axios';

class ScratchPadPage extends Component{
    state = {
        title: '',
        content: '',
        password: '',
        contentSubmission: false
    }

    handleChangeTitle = (event) => {    
        this.setState({title: event.target.value});  
    }

    handleChangeContent = (event) => {    
        this.setState({content: event.target.value});  
    }

    handleChangePassword = (event) => {    
        this.setState({password: event.target.value});  
    }

    handleSubmit = (event) => {
        const createContent = {
            title: this.state.title,
            content: this.state.content,
            password: this.state.password
        }

        axios.post("#", createContent)
            .then(response => {
                this.setState({contentSubmission: true});
                console.log(response.data);
            })
            .catch(error => console.log(error));

        event.preventDefault();
    }

    handleClose = () => {
        this.setState({contentSubmission: false});
    };

    render(){
      return (
          <div> 
              <Modal show={this.state.contentSubmission} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Response</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Content saved successfully </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
              </Modal>

              <Card className="scratchpad-form">
                <Card.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Provide a title</Form.Label>
                            <Form.Control type="text" onChange={this.handleChangeTitle} placeholder="Enter a title" />
                            <Form.Text className="text-muted">
                            This should not have been used by you earlier
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicContent">
                            <Form.Label>Your content that you want to share</Form.Label>
                            <Form.Control as="textarea" onChange={this.handleChangeContent} rows={5} placeholder="Enter your article" />
                        </Form.Group>

                        <Form.Group controlId="formBasicContentPassword">
                            <Form.Label>Provide a password</Form.Label>
                            <Form.Control type="password" onChange={this.handleChangePassword} placeholder="Enter your long URL" />
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
  
  
  export default ScratchPadPage
  
