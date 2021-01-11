import React from 'react';
import PropTypes from 'prop-types';
import './containLogin.scss';
import 'antd/dist/antd.css';
import Login from './login/login';
import { Typography, Carousel, Col, Row } from 'antd';
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Register from './register/register';
const { Text, Link } = Typography;

ContainLogin.propTypes = {};

function ContainLogin(props) {
	return (
		<div className="container">
			<Col span={18}>
				<Carousel autoplay autoplaySpeed={3000} dotPosition="bottom">
					<div className="imgBackground1"></div>
					<div className="imgBackground2"></div>
					<div className="imgBackground3"></div>
				</Carousel>
			</Col>
			<Col span={6} className="loginForm">
				<div className="Title">
					<Text strong>Welcome To</Text>
					<Text strong>Hotel Benchmarking Platform</Text>
				</div>

				<div className="imgLogo"></div>

				<Router>
					<Switch>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/register">
							<Register />
						</Route>
						<Route>
							<Redirect to="/login" />
						</Route>
					</Switch>
				</Router>
			</Col>
		</div>
	);
}

export default ContainLogin;
