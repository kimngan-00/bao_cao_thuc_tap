import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Rate } from 'antd';
import './Hotel_Profile.scss';

Hotel_Profile.propTypes = {};

function Hotel_Profile(props) {
	return (
		<Row gutter={8}>
			<Col span="12">
				<Row gutter={[8, 8]} >
					<Col className="labelCol">Hotel Name:</Col>
					<Col>Hotel ABC</Col>
				</Row>
				<Row gutter={[8, 8]}>
					<Col className="labelCol">Country Name:</Col>
					<Col>Vietnam</Col>
				</Row>
				<Row gutter={[8, 8]}>
					<Col className="labelCol">State/Province:</Col>
					<Col>Ho Chi Minh</Col>
				</Row>
				<Row gutter={[8, 8]}>
					<Col className="labelCol">City:</Col>
					<Col>Ho Chi Minh city</Col>
				</Row>
				<Row gutter={[8, 8]}>
					<Col className="labelCol">District:</Col>
					<Col>Thu Duc</Col>
				</Row>
				<Row gutter={[8, 8]}>
					<Col className="labelCol">Ward:</Col>
					<Col>Binh Tho</Col>
				</Row>
				<Row gutter={[8, 8]}>
					<Col className="labelCol">Address:</Col>
					<Col>1, Dang Van Bi street</Col>
				</Row>
				<Row gutter={[8, 8]}>
					<Col className="labelCol">Star Rating:</Col>
					<Col>
						<Rate count={7} value={4} disabled style={{ fontSize: '14px' }}></Rate>
					</Col>
				</Row>
				<Row gutter={[8, 8]}>
					<Col className="labelCol">Property Type:</Col>
					<Col>Villa</Col>
				</Row>
				<Row gutter={[8, 8]}>
					<Col className="labelCol">Room Inventory:</Col>
					<Col>100</Col>
				</Row>
				<Row gutter={[8, 8]}>
					<Col className="labelCol">Open Year:</Col>
					<Col>100</Col>
				</Row>
			</Col>
			<Col className="map" span="12">
				ABC
			</Col>
		</Row>
	);
}

export default Hotel_Profile;
