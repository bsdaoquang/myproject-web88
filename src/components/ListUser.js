/** @format */

import { List, Checkbox } from 'antd';
import React from 'react';
import TextComponent from './TextComponent';

function ListUser({ users, onChangeState }) {
	const renderTaskItem = (item, index) => {
		return (
			<div key={`task${index}`}>
				<Checkbox
					style={{ marginBottom: 12 }}
					onChange={(val) => onChangeState(val.target.checked, index)}
					value={item.isCompleted}>
					<TextComponent
						styles={{ margin: 0 }}
						text={item.content}
						color={item.isCompleted ? '#e0e0e0' : '#212121'}
					/>
				</Checkbox>
			</div>
		);
	};

	return <>{users.map((item, index) => renderTaskItem(item, index))}</>;
}

export default ListUser;
