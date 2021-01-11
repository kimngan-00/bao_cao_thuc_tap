import React from 'react';
import PropTypes from 'prop-types';
import HeaderHome from './header/HeaderHome';
import './home.scss';
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
import SideMenu from './side_menu/SideMenu';
import Main_content from './main_content/main_content';

HomePage.propTypes = {};

function HomePage(props) {
	return (
		<Col>
			<HeaderHome />
			<Row>
				<Col>
					<SideMenu />
				</Col>
				<Col>
					<Main_content />
				</Col>
			</Row>
		</Col>
	);
}

export default HomePage;
