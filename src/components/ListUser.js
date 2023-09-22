/** @format */

import { List } from 'antd';
import React from 'react';

function ListUser({ users }) {
	return (
		<div>
			<List
				dataSource={users}
				renderItem={(item) => (
					<List.Item>
						<List.Item.Meta title={item.name} />
					</List.Item>
				)}
			/>
		</div>
	);
}

export default ListUser;
