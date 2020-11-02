import React, { useState } from "react";

function User(props) {
	const [username, setUsername] = useState("");

	function usernameChange(evt) {
		setUsername(evt.target.value);
	}

	function submit(event) {
		event.preventDefault();
		props.handleChange(username);
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

export default User;
