/** @format */

import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

function SiderComponent() {
	return (
		<Sider theme='light' style={{ height: '100vh' }}>
			<Menu
				items={[
					{
						key: 'home',
						label: <Link to='/'>Home</Link>,
					},
					{
						key: 'profile',
						label: <Link to='/profile'>Profile</Link>,
					},
					{
						key: 'posts',
						label: <Link to='/posts'>Posts</Link>,
					},
				]}
			/>
		</Sider>
	);
}

export default SiderComponent;
