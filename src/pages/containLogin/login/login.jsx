import React from 'react';
import PropTypes from 'prop-types';
import './login.scss';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Typography, Space, Divider } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
const { Text, Link } = Typography;

Login.propTypes = {};

function Login(props) {
	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<div >
			<Form
				name="basic"
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<Form.Item
					name="username"
					rules={[
						{
							required: true,
							message: 'Please input your email!',
						},
					]}
				>
					<Input placeholder="Enter Email" prefix={<MailOutlined />} />
				</Form.Item>

				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: 'Please input your password!',
						},
					]}
				>
					<Input.Password placeholder="Enter Password" prefix={<LockOutlined />} />
				</Form.Item>
				<div className="forgotPass">
					<Form.Item name="remember" valuePropName="checked">
						<Checkbox>Remember Me</Checkbox>
					</Form.Item>
					<Form.Item className="linkForgotPass">
						<Link href="#" target="_blank">
							Forgot Password?
						</Link>
					</Form.Item>
				</div>
				<div className="btnLoginGroup">
					<Form.Item>
						<Space direction="vertical" style={{ width: '100%' }} align="center">
							<Button type="primary" htmlType="submit" className="btnLogin">
								Login{' '}
							</Button>
							<Divider type="horizontal">OR</Divider>
							<a href="/register">Register</a>
						</Space>
					</Form.Item>
				</div>
			</Form>
		</div>
	);
}

export default Login;
