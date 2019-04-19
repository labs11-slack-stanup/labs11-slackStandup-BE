import React from 'react';
import './Modal.css'

class SurveyCurieTitles extends React.Component {
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
			<div className="confirmation-container">
				<p>Final step: Verfiy that this information is correct, then submit.</p>
				<div className="survey-confirmation">
					<div className="confirmation-title"><p>Title:</p>{this.props.state.title}</div>
					<div className="confirmation-description"><p>Question 1:</p>{this.props.state.question_1}</div>
					<div className="confirmation-description"><p>Question 2:</p>{this.props.state.question_2}</div>
					<div className="confirmation-description"><p>Question 3:</p>{this.props.state.question_3}</div>
					<div className="confirmation-frequency"><p>Frequency:</p>{this.props.state.dailyWeeklyMonthly}</div>
					<div className="confirmation-time"><p>Time:</p>{this.props.state.hour}:{this.props.state.min} {this.props.state.amPm} {this.props.state.timeZone}</div>
					<button className="create-survey" onClick={this.props.createCurieSurvey}>Create Survey</button>
				</div>
			</div>
		);
	}
}

export default SurveyCurieTitles;
