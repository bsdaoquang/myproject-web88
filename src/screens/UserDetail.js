/** @format */

import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { appInfo } from '../constants/appInfo';
import { Card, List } from 'antd';
import { Link } from 'react-router-dom';
import UserComponent from '../components/UserComponent';

function UserDetail() {
	const [userDetail, setUserDetail] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [posts, setPosts] = useState([]);

	const [params] = useSearchParams();

	const uid = params.get('uid');

	useEffect(() => {
		if (uid) {
			getUserDetailById(uid);
			getPostsByUid(uid);
		}
	}, [uid]);

	const getUserDetailById = async (id) => {
		setIsLoading(true);
		const api = `/users/${id}`;

		await fetch(appInfo.BASE_URL + api)
			.then((result) => result.json())
			.then((res) => {
				setUserDetail(res);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setIsLoading(false);
			});
	};

	const getPostsByUid = async (uid) => {
		const api = '/posts';
		await fetch(appInfo.BASE_URL + api)
			.then((result) => result.json())
			.then((res) => {
				if (res.length > 0) {
					const items = res.filter((element) => `${element.userId}` === uid);

					setPosts(items);
				}
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setIsLoading(false);
			});
	};

	return (
		<div className='col-8 offset-2 mt-4'>
			{userDetail && (
				<Card>
					<h1>{userDetail.name}</h1>
				</Card>
			)}
			{posts.length > 0 && (
				<Card className='mt-4'>
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
								/>
							</List.Item>
						)}
					/>
				</Card>
			)}
		</div>
	);
}

export default UserDetail;
