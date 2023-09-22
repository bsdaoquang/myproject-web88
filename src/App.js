/** @format */

import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import ListUser from './components/ListUser';

function App() {
	const [users, setUsers] = useState([]);

	return (
		<div>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<FormComponent onAddUser={(vals) => setUsers([...users, vals])} />
						<ListUser users={users} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
