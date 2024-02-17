import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddSkillComponent = () => {
    const [show, setShow] = useState(false);
    const [skillName, setSkillName] = useState('');
    const [skillDescription, setSkillDescription] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSave = () => {
        // Here, you can handle the saving of the skill name and description
        // For example, sending them to a backend or updating a state
        console.log(skillName, skillDescription);
        handleClose();
    };

    return (
        <>
            <div className="main-card mt-3 ms-1 me-1 add-skill mb-3" onClick={handleShow}>
                +
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Skill</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="skillName">
                            <Form.Label>Skill Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter skill name"
                                value={skillName}
                                onChange={(e) => setSkillName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="skillDescription">
                            <Form.Label>Skill Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter skill description"
                                value={skillDescription}
                                onChange={(e) => setSkillDescription(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddSkillComponent;
