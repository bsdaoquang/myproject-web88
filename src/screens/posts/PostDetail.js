/** @format */

import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { appInfo } from '../../constants/appInfo';
import { Spin, message, Card } from 'antd';

function PostDetail() {
	const [postDetail, setPostDetail] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [params] = useSearchParams();

	const id = params.get('postId');

	useEffect(() => {
		id && getPostDetailById(id);
	}, [id]);

	const getPostDetailById = async (id) => {
		const api = `posts/${id}`;
		setIsLoading(true);

		await fetch(`${appInfo.BASE_URL}/${api}`)
			.then((result) => result.json())
			.then((res) => {
				if (res.title) {
					setPostDetail(res);
				}
				setIsLoading(false);
			})
			.catch((error) => {
				message.error(error.message);
				setIsLoading(false);
			});
	};
	return isLoading ? (
		<Spin />
	) : !postDetail ? (
		<p>Post detail not found</p>
	) : (
		<>
			<div className='col-8 offset-2 mt-4'>
				<Card>
					<h3>{postDetail.title}</h3>
					<p>{postDetail.body}</p>
				</Card>
			</div>
		</>
	);
}

export default PostDetail;
