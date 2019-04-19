import React from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { connect } from "react-redux";

// Cloned ModalTitles.js

class SurveyTitles extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			title: "",
			question_1: "",
			question_2: "",
			question_3: "",
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	render() {
		return (
			<div className="survey-title">
				{/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Survey Title and Description</ModalHeader>
          <ModalBody> */}
				<p>First, enter a Title and three Questions.</p>
				<div className="survey-inputbox">
					<label className="survey-inputlabel title-label">Title</label>
					<input
						type="text"
						value={this.props.state.title}
						name="title"
						placeholder="Title of survey"
						onChange={this.props.titleChangeHandler}
					/>
				</div>
				<div className="survey-inputbox">
					<label className="survey-inputlabel">Question 1</label>
					<input
						type="text"
						value={this.props.state.question_1}
						name="question_1"
						placeholder="Survey question 1"
						onChange={this.props.titleChangeHandler}
					/>
				</div>
				<div className="survey-inputbox">
					<label className="survey-inputlabel">Question 2</label>
					<input
						type="text"
						value={this.props.state.question_2}
						name="question_2"
						placeholder="Survey question 2"
						onChange={this.props.titleChangeHandler}
					/>
				</div>
				<div className="survey-inputbox">
					<label className="survey-inputlabel">Question 3</label>
					<input
						type="text"
						value={this.props.state.question_3}
						name="question_3"
						placeholder="Survey question 3"
						onChange={this.props.titleChangeHandler}
					/>
				</div>
				{/* </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Return</Button>{' '}
          </ModalFooter>
        </Modal> */}
			</div>
		);
	}
}

export default SurveyTitles;
