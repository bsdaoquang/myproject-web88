/** @format */

import React from 'react';
import { add0ToNumber } from '../utils/add0ToNumber';
import HeaderPage from '../components/Header';
import { Link } from 'react-router-dom';

function Profile() {
	return (
		<div>
			<h1>Profile</h1>
			<Link to={'/'}>Go back to home</Link>
			<Link to={'/posts'}>Go to posts</Link>

			<p>{add0ToNumber(7)}</p>
			<HeaderPage />
		</div>
	);
}

export default Profile;
