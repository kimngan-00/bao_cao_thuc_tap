import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import "./SideMenu.scss"

SideMenu.propTypes = {};

function SideMenu(props) {
	return (
		<div className="container_sideMenu">
			<Menu defaultOpenKeys={['my_hotel', 'my_compset']} mode="inline">
				<Menu.SubMenu key="my_hotel" title="My Hotel">
					<Menu.Item key="hotel_profile">Hotel Profile</Menu.Item>
					<Menu.Item key="hotel_data">Hotel Data</Menu.Item>
				</Menu.SubMenu>
				<Menu.SubMenu key="my_compset" title="My Compset">
					<Menu.Item key="compset_list">Compset List</Menu.Item>
					<Menu.Item key="create_compset">Create A Compset</Menu.Item>
				</Menu.SubMenu>
			</Menu>
		</div>
	);
}

export default SideMenu;
