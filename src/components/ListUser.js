/** @format */

import React, { useEffect, useState } from 'react';
import { add0ToNumber } from '../utils/add0ToNumber';
import TextComponent from './TextComponent';
import { Button, Card, List, Space } from 'antd';
import ToggleProfile from '../modals/ToggleProfile';

function ListUser({ users, onChangeState }) {
	const [profiles, setProfiles] = useState([]);
	const [profile, setProfile] = useState();
	const [isVisibleModalProfile, setIsVisibleModalProfile] = useState(false);

	const onFinish = (vals) => {
		setProfiles([...profiles, vals]);
	};

	return (
		<>
			<div className='container mt-4'>
				<div className='col-8 offset-2'>
					<Card
						extra={
							<Button onClick={() => setIsVisibleModalProfile(true)}>
								Add Profile
							</Button>
						}>
						<List
							dataSource={profiles}
							renderItem={(item, index) => (
								<List.Item
									key={`profile${index}`}
									extra={
										<Button
											type='link'
											onClick={() => {
												setProfile(item);
												setIsVisibleModalProfile(true);
											}}>
											Edit
										</Button>
									}>
									<List.Item.Meta
										title={item.name}
										description={item.address}
									/>
								</List.Item>
							)}
						/>
					</Card>
				</div>
			</div>

			<ToggleProfile
				isVisible={isVisibleModalProfile}
				onClose={() => {
					setProfile(null);
					setIsVisibleModalProfile(false);
				}}
				onFinish={(val) => onFinish(val)}
				profile={profile}
			/>
		</>
	);
}

export default ListUser;
