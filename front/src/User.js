import React, { useState } from "react";
import PropTypes from "prop-types";

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
	      <form onSubmit={submit}>
	        <input type="text" placeholder="username" onChange={usernameChange} />
	        <input type="submit" value="Login" />
	      </form>
	    </div>
	);
}

export default User;
