/** @format */

import { Form, Input, Modal } from 'antd';
import React, { useEffect } from 'react';

function ToggleProfile(props) {
	const { isVisible, onClose, profile, onFinish } = props;

	const [form] = Form.useForm();

	useEffect(() => {
		isVisible && profile ? form.setFieldsValue(profile) : form.resetFields();
	}, [isVisible, profile]);

	const handleToggleProfile = (values) => {
		onFinish(values);
		form.resetFields();
		onClose();
	};

	return (
		<Modal
			open={isVisible}
			onCancel={onClose}
			onOk={() => form.submit()}
			okText={profile ? 'Update' : 'Submit'}
			title={profile ? 'Update profile' : 'Add new profile'}>
			<Form
				form={form}
				layout='vertical'
				size='large'
				onFinish={handleToggleProfile}>
				<Form.Item name={'name'} label='Name'>
					<Input />
				</Form.Item>
				<Form.Item name={'email'} label='Emai'>
					<Input />
				</Form.Item>
				<Form.Item name={'phone'} label='Phone number'>
					<Input />
				</Form.Item>
				<Form.Item name={'address'} label='Address'>
					<Input />
				</Form.Item>
			</Form>
		</Modal>
	);
}

export default ToggleProfile;
