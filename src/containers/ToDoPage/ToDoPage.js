import { Component } from 'react';
import './ToDoPage.css';
import { Row, Form, Button, Card, Table, Modal } from 'react-bootstrap';
import axios from 'axios';

class ToDoPage extends Component{
    state = {
        taskName: '',
        startDate: new Date(),
        endDate: new Date(),
        taskSubmission: false
    }
    
    changeTaskName = (event) => {    
        this.setState({taskName: event.target.value});  
    }

    changeStartDate = (event) => {         
        this.setState({startDate: new Date(event.target.value).toLocaleDateString('en-GB')});  
    }

    changeEndDate = (event) => {    
        this.setState({endDate: new Date(event.target.value).toLocaleDateString('en-GB')});  
    }

    handleSubmit = (event) => {
        console.log('A task was submitted: ' + this.state.taskName);
        console.log('A task was submitted: ' + this.state.startDate);
        console.log('A task was submitted: ' + this.state.endDate);

        const tasks = this.state;

        axios.post("https://utilo-fd532-default-rtdb.firebaseio.com/todo.json", tasks)
            .then(response => {
                this.setState({taskSubmission: true});
                console.log(response.data);
            })
            .catch(error => console.log(error));

        event.preventDefault();
    }

    handleClose = () => {
        this.setState({taskSubmission: false});
    };

    
    render(){
      return (
          <div className="todo-bg"> 
             <Modal show={this.state.taskSubmission} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Response</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Your task details has been submitted</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
              </Modal>


              <Row className="todo-row">
              <Card className="todo-form">
                <Card.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicTaskName">
                            <Form.Label>Task Name</Form.Label>
                            <Form.Control type="text" onChange={this.changeTaskName} placeholder="Enter your task details" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicDates">
                            <Row className="todo-form-row">
                                <Form.Label className="todo-form-row-element">Start Date</Form.Label>
                                <Form.Control className="todo-form-row-element" type="date" onChange={this.changeStartDate} placeholder="Enter Start Date" />

                                <Form.Label className="todo-form-row-element">End Date</Form.Label>
                                <Form.Control className="todo-form-row-element" type="date" onChange={this.changeEndDate} placeholder="Enter Completion Date" />
                            </Row>                           
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
              </Card>
              
              <Card className="todo-tasks">
                    <Card.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Created At</th>
                                <th>Task Name</th>
                                <th>End Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>Larry the Bird</td>
                                <td>Ontario</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
              </Card>
              </Row>
          </div>
      );
    }
  }
  
  
  export default ToDoPage
  