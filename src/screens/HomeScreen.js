/** @format */

import React, { useEffect, useState } from 'react';
import ListUser from '../components/ListUser';
import { Link } from 'react-router-dom';
import { appInfo } from '../constants/appInfo';
import { Button, Card, List, message } from 'antd';
import UserComponent from '../components/UserComponent';

function HomeScreen() {
	const [isLoading, setIsLoading] = useState(false);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getAllPosts();
	}, []);

	const getAllPosts = async () => {
		setIsLoading(true);
		await fetch(`${appInfo.BASE_URL}/posts`)
			.then((result) => result.json())
			.then((res) => {
				setPosts(res);
				setIsLoading(false);
			})
			.catch((error) => {
				message.error(error.message);
				setIsLoading(false);
			});
	};

	return (
		<div>
			<h1>Home screen</h1>

			<div className='container'>
				<div className='col-8 offet-2'>
					<Card>
						<List
							itemLayout='vertical'
							isLoading={isLoading}
							dataSource={posts}
							renderItem={(item) => (
								<List.Item key={`${item.id}`}>
									<List.Item.Meta
										title={
											<Link to={`/posts/post-detail?postId=${item.id}`}>
												{item.title}
											</Link>
										}
										description={item.body}
									/>
									<UserComponent userId={item.userId} isShowAvatar />
								</List.Item>
							)}
						/>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default HomeScreen;
