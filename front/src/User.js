import React, { useState } from "react";
import PropTypes from "prop-types";

function User(props) {
	const [username, setUsername] = useState("");

	function usernameChange(evt) {
		setUsername(evt.target.value);
	}

	function submit(event) {
		const users = props.player;
		let len = users.length;
		console.log("players:", users);
		for (let x = 0; x < len; x++){
			console.log("checking user");
			if (users[x].name === username){
				event.preventDefault();
				props.handleChange(username);
				sessionStorage.setItem("username", username);
				return;
			}
		}
		alert("Error: no user with that name. Try logging in again or create a new account.");
	}

	return (
		<div>
			<div>
				<form onSubmit={submit}>
					<input type="text" placeholder="username" onChange={usernameChange} />
					<input type="submit" value="Login" />
				</form>
			</div>
			<div>
				<form action="/newUser" method="post">
					<input type="text" name="newUsername" onChange={usernameChange} />
					<input type="submit" value="Create User" />
				</form>
			</div>
		</div>
	);
}

User.propTypes ={
  player: PropTypes.array,
};

export default User;
