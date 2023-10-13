/** @format */

import React, { useEffect, useState } from 'react';
import { appInfo } from '../constants/appInfo';
import { Avatar, Space, message } from 'antd';

function UserComponent({ userId, isShowAvatar }) {
	const [userDetail, setUserDetail] = useState();

	useEffect(() => {
		userId && getUserDetailById();
	}, [userId]);

	const getUserDetailById = async () => {
		await fetch(`${appInfo.BASE_URL}/users/${userId}`)
			.then((result) => result.json())
			.then((res) => {
				setUserDetail(res);
			})
			.catch((error) => message.error(error.message));
	};

	return userDetail ? (
		<Space>
			{isShowAvatar && (
				<Avatar>
					{userDetail.name ? userDetail.name.substring(0, 1) : ''}
				</Avatar>
			)}
			<p
				style={{
					fontSize: 12,
					color: '#212121',
					fontWeight: '400',
					margin: 0,
				}}>
				{userDetail.name}
			</p>
		</Space>
	) : (
		<></>
	);
}

export default UserComponent;
