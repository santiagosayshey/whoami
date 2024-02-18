import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const GratitudeCard = ({ question, onAnswerUpdate, initialAnswer }) => {
    const [showModal, setShowModal] = useState(false);
    const [answer, setAnswer] = useState(initialAnswer || "");

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleSaveAnswer = (e) => {
        e.preventDefault();
        const newAnswer = e.target.elements.answer.value;
        setAnswer(newAnswer);
        onAnswerUpdate(question, newAnswer); // Function to update answer in parent state or global state
        handleCloseModal();
    };

    return (
        <>
            <div className='main-card mb-3'>
                <h6 className='grati-question'>{question}</h6>
                <p>{answer || ""}</p>
                <div className="text-end">
                    <Button variant="primary" onClick={handleShowModal} className='answer-button'>
                        {answer ? "Edit Answer" : "Add Answer"}
                    </Button>
                </div>
            </div>


            <Modal show={showModal} onHide={handleCloseModal}>
                <Form onSubmit={handleSaveAnswer}>
                    <Modal.Header closeButton>
                        <Modal.Title>{answer ? "Edit Answer" : "Add Answer"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" name="answer" defaultValue={answer} placeholder={question} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button type="submit" variant="primary">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

export default GratitudeCard;
