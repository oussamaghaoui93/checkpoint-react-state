import React, { Component } from "react";

export default class Person extends Component {
	constructor(props) {
		super(props);
		this.person = {
			fullName: "Student",
			bio: "web dev js student",
			imgSrc:
				"https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
			profession: "web developer JS",
		};
		this.state = { count: 0 };
		this.interval = null;  // To store the interval reference
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState(
				(prevState) => ({
					count: prevState.count + 1,
				}),
				() => console.log(this.state.count) // Callback after state is updated
			);
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval); // Clearing the interval properly
	}

	render() {
		return (
			<div>
				<h2>This is my profile</h2>
				<h3>{this.person.fullName}</h3>
				<h3>Counter: {this.state.count}</h3>
				<img width={"400px"} src={this.person.imgSrc} alt='myprofile' />
				<h3>{this.person.bio}</h3>
				<h3>{this.person.profession}</h3>
			</div>
		);
	}
}
