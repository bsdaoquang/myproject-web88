/** @format */

import { Card, Form, Button, Input } from 'antd';
import React from 'react';

function FormComponent({ onAddUser }) {
	const [form] = Form.useForm();

	const handleAddUser = (values) => {
		onAddUser(values.name);

		form.resetFields();
	};
	return (
		<div>
			<Card>
				<Form
					form={form}
					onFinish={handleAddUser}
					layout='
        vertical'>
					<Form.Item name='name' label='Name'>
						<Input />
					</Form.Item>
				</Form>

				<Button onClick={() => form.submit()}>Add user</Button>
			</Card>
		</div>
	);
}

export default FormComponent;
