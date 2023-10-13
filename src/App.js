/** @format */

import { Layout } from 'antd';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import SiderComponent from './components/SiderComponent';

import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';
import PostsScreen from './screens/posts/PostsScreen';
import PostDetail from './screens/posts/PostDetail';

const { Content } = Layout;

function App() {
	return (
		<BrowserRouter>
			<div style={{ height: '100vh' }}>
				<Layout>
					<HeaderComponent />
					<Layout>
						<SiderComponent />
						<Content className='container mt-4'>
							<Routes>
								<Route path='/' element={<HomeScreen />} />
								<Route path='profile' element={<Profile />} />
								<Route path='posts'>
									<Route path='' element={<PostsScreen />} />
									<Route path='post-detail' element={<PostDetail />} />
								</Route>
							</Routes>
						</Content>
					</Layout>
				</Layout>
			</div>
		</BrowserRouter>
	);
}

export default App;
