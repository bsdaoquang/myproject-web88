/** @format */

import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { appInfo } from '../constants/appInfo';

function UserDetail() {
	const [userDetail, setUserDetail] = useState();
	const [isLoading, setIsLoading] = useState(false);

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

					console.log(items);
				}
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setIsLoading(false);
			});
	};

	return <div>UserDetail</div>;
}

export default UserDetail;
