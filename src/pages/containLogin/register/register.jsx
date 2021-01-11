import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Checkbox, Button, Typography, Space, Divider, Row, Col } from 'antd';
import './register.scss';
Register.propTypes = {};
const { Link } = Typography;

function Register(props) {
	return (
		<Form
			layout="vertical"
			className="register"
			labelCol={{ style: { paddingBottom: '4px' } }}
		>
			<Form.Item name="email" label="Email" required>
				<Input />
			</Form.Item>

			<Form.Item name="password" label="Password" required>
				<Input.Password />
			</Form.Item>

			<Form.Item
				name="confirm"
				label="Confirm Password"
				dependencies={['password']}
				hasFeedback
				rules={[
					{
						required: true,
						message: 'Please confirm your password!',
					},
					({ getFieldValue }) => ({
						validator(_, value) {
							if (!value || getFieldValue('password') === value) {
								return Promise.resolve();
							}

							return Promise.reject('The two passwords that you entered do not match!');
						},
					}),
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item>
				<Row align="middle" justify="space-between">
					<Col>
						<Checkbox>
							I agree with&nbsp;
							<Link>Term Of Services</Link>
						</Checkbox>
					</Col>
				</Row>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit" className="btnRegister">
					Register
				</Button>{' '}
				<Divider type="horizontal">OR</Divider>
				<a href="/login">Login</a>
			</Form.Item>
		</Form>
	);
}

export default Register;
