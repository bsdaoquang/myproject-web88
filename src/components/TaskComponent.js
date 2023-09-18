/** @format */

import { Button, List } from 'antd';
import React from 'react';

function TaskComponent({ text, onCompleted, onRemove, index }) {
	return (
		<List.Item
			key={`task${index}`}
			extra={
				<Button onClick={() => onRemove(index)} type='primary' danger>
					Del
				</Button>
			}>
			<List.Item.Meta title={text} />
		</List.Item>
	);
}

export default TaskComponent;
