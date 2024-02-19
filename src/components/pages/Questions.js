import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const QuestionsPage = ({ user }) => {
    const [questions, setQuestions] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
    const [newQuestion, setNewQuestion] = useState('');
    const [questionToDelete, setQuestionToDelete] = useState(null);

    // Define fetchQuestions here so it can be reused
    const fetchQuestions = () => {
        if (user && user._id) {
            axios.get(`http://127.0.0.1:5000/questions/${user._id}`)
                .then(response => {
                    setQuestions(response.data.questions);
                })
                .catch(error => {
                    console.error('Error fetching questions:', error);
                });
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, [user]); // Dependency array ensures this runs when the user changes

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);
    const handleQuestionChange = (e) => setNewQuestion(e.target.value);

    const submitNewQuestion = () => {
        if (user && user._id && newQuestion) {
            axios.post(`http://127.0.0.1:5000/questions/${user._id}`, { text: newQuestion })
                .then(response => {
                    if (response.status === 201) {
                        // Directly fetch questions again to update the list
                        fetchQuestions(); // Make sure you have a fetchQuestions function
                        setNewQuestion('');
                        handleModalClose();
                    }
                })
                .catch(error => {
                    console.error('There was an error posting the question!', error);
                });
        }
    };


    const handleDeleteClick = (question) => {
        setShowDeleteConfirmModal(true);
        setQuestionToDelete(question); // question is now the full question object
    };

    const deleteQuestion = () => {
        if (questionToDelete && user && user._id) {
            axios.delete(`http://127.0.0.1:5000/questions/${user._id}/${questionToDelete._id}`)
                .then(() => {
                    fetchQuestions(); // Refresh the list after deletion
                    setShowDeleteConfirmModal(false);
                })
                .catch(error => {
                    console.error('There was an error deleting the question!', error);
                });
        }
    };


    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className='header'>My Questions</h4>
                <Button className="btn-primary" onClick={handleModalShow}>
                    Add Question
                </Button>
            </div>
            <ul className="list-group">
                {questions.length > 0 ? (
                    questions.map((question) => (
                        <li key={question._id} className="list-group-item d-flex justify-content-between align-items-center question">
                            {question.text} {/* Use question.text to display the question */}
                            <Button className="btn-danger" onClick={() => handleDeleteClick(question)}>
                                Delete
                            </Button>
                        </li>
                    ))
                ) : (
                    <p>No questions found</p>
                )}
            </ul>

            {/* Add Question Modal */}
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton className="custom-modal-header">
                    <Modal.Title>Add a New Question</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Enter your question" value={newQuestion} onChange={handleQuestionChange} className="white-placeholder" />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={submitNewQuestion}>
                        Save Question
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteConfirmModal} onHide={() => setShowDeleteConfirmModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this question?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={deleteQuestion}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default QuestionsPage;
