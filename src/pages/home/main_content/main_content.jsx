import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Hotel_Profile from './Hotel_Profile/Hotel_Profile';
import "./main_content.scss"

Main_content.propTypes = {};

function Main_content(props) {
	return (
		<div >
			<Router>
				<Switch>
					<Route path="/home/hotelprofile">
						<Hotel_Profile />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default Main_content;
