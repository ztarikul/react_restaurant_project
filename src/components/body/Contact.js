import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";

class Contact extends Component{

//////////// NO Need for React-Redux-Form //////////
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         firstname: "",
    //         lastname: "",
    //         telnum: "",
    //         email: "",
    //         agree: false,
    //         contactType: 'Tel. ',
    //         message: ""

    //     }
    //     this.handleInputChange = this.handleInputChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handleInputChange = (event) => {
    //     const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    //     const name = event.target.name;
    //     this.setState({
    //         [name]: value
    //     })
    // }
////////// No Need for React-Redux-Form/////////////    

    handleSubmit = (values) =>{
        console.log(values);
    }

    render(){
        document.title = "Contact";
        return(
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left"}}>
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-7">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <FormGroup row> 
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" name="firstname" placeholder="First Name" className="form-control" />
                                </Col>
                            </FormGroup>
                            <FormGroup row> 
                                <Label htmlFor="lastname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" name="lastname" placeholder="Last Name" className="form-control" />
                                </Col>
                            </FormGroup>
                            <FormGroup row> 
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" name="telnum" placeholder="Tel. Number" className="form-control"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row> 
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" name="email" placeholder="Email" className="form-control" />
                                </Col>
                            </FormGroup>
                            <FormGroup row> 
                                <Col md={{size: 6, offset:2}}>
                                    <FormGroup check> 
                                        <Label check>
                                        <Control.checkbox model=".agree" name="agree" className="form-check-input"/> <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType" className="form-control">
                                    <option>Tel. </option>
                                    <option>Email. </option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" name="message" className="form-control"/>
                                    <Button type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </LocalForm>
                    </div>

                </div>
            </div>
        );
    }
}

export default Contact;