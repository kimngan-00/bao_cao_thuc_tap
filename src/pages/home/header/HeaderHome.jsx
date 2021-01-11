import React from 'react';
import PropTypes from 'prop-types';
import './header_home.scss';
import { Button, Col, Row, Select, Avatar } from 'antd';
import 'antd/dist/antd.css';
import { RocketOutlined, UserOutlined } from '@ant-design/icons';

HeaderHome.propTypes = {};

function HeaderHome(props) {
	return (
		<Row className="containerHeader" justify="end" align="middle" gutter={16}>
			<Col>
				<Select defaultValue="en">
					<Select.Option value="en">English</Select.Option>
					<Select.Option value="vn">Vietnam</Select.Option>
				</Select>
			</Col>
			<Col>
				<Button icon={<RocketOutlined />} className="btnUpgrade">
					Upgrade
				</Button>
			</Col>
			<Col>
				<Row gutter={4} align="middle">
					<Col className="user_info">
						<div>kimngan@gmail.com</div>
						<div>Kim Ngan</div>
					</Col>
					<Col>
						<Avatar icon={<UserOutlined />} />
					</Col>
				</Row>
			</Col>
		</Row>
	);
}

export default HeaderHome;
