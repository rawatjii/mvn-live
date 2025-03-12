import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function FormTesting() {

    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        message: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <Container className="mt-5">
            <h2>Contact Form</h2>
            <Formik>
                <Form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <Form.Group controlId="formName" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                        />
                    </Form.Group>

                    {/* Number Field */}
                    <Form.Group controlId="formNumber" className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="tel"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                        />
                    </Form.Group>

                    {/* Email Field */}
                    <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    </Form.Group>

                    {/* Message Field */}
                    <Form.Group controlId="formMessage" className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message"
                        />
                    </Form.Group>

                    {/* Submit Button */}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Formik>

        </Container>
    );
}

export default FormTesting;