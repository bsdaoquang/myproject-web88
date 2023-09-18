/** @format */

import { Card, Input, List, message } from 'antd';
import React, { useState } from 'react';
import TaskComponent from './components/TaskComponent';

function App() {
	const [tasks, setTasks] = useState([]);
	const [content, setContent] = useState('');

	const handleAddNewTask = () => {
		if (content) {
			setTasks([...tasks, content]);

			setContent('');
		} else {
			message.error('Missing content task');
		}
	};

	const handleRemoveTask = (index) => {
		const items = tasks;

		items.splice(index, 1);

		setTasks([...items]);
	};

	return (
		<div className='container mt-4'>
			<div className='row'>
				<div className='col-8 offset-2'>
					<Card title='My task' size='small'>
						<Input
							placeholder='What do you want today?'
							value={content}
							onChange={(val) => setContent(val.target.value)}
							onPressEnter={handleAddNewTask}
						/>

						<List
							dataSource={tasks}
							className='mt-4'
							renderItem={(item, index) => (
								<TaskComponent
									text={item}
									index={index}
									onRemove={(val) => handleRemoveTask(val)}
								/>
							)}
						/>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default App;
