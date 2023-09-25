/** @format */

import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import ListUser from './components/ListUser';

function App() {
	const [users, setUsers] = useState([]);

	const handleAddNewTask = (val) => {
		const data = {
			content: val,
			createdAt: Date.now(),
			updatedAt: Date.now(),
			createdBy: 'Me',
			isCompleted: false,
		};

		setUsers([...users, data]);
	};

	const handleUpdateTask = (val, index) => {
		const items = users;

		items[index].isCompleted = val;

		setUsers([...items]);
	};

	return (
		<div>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<FormComponent onAddUser={(vals) => handleAddNewTask(vals)} />
						<ListUser
							users={users}
							onChangeState={(val, index) => handleUpdateTask(val, index)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
