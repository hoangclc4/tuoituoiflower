import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { themeSettings } from '../lib/settings';
import { deliveryData } from '../../locales/deliveryData';

class HomeContacts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			townId: 0
		};
	}

	onTownChange = event => {
		this.setState({
			townId: event.target.value
		});
	};

	render() {
		const {
			props: { delivery = deliveryData, settings }
		} = this;

		return (
			<Fragment>
				<div className="contacts-company">
					<div className="contacts-company__address">
						{themeSettings.footer_contacts[0].text},{' '}
						{themeSettings.footer_contacts[1].text}
					</div>
					<div className="contacts-company__worktime contacts-worktime">
						<h3 className="contacts-worktime__title">Giờ Làm việc</h3>
						<div className="contacts-worktime__table">
							<div className="contacts-worktime__row">
								<div className="contacts-worktime__col">T2-T7:</div>
								<div className="contacts-worktime__col">07:00-20:00</div>
							</div>
							<div className="contacts-worktime__row">
								<div className="contacts-worktime__col">CN:</div>
								<div className="contacts-worktime__col">09:00-17:00</div>
							</div>
						</div>
						<div className="contacts-company__call">
							<div className="contacts-company__phone">089 908 93 99</div>
							<a
								href="tel:0899089399"
								className="contacts-company__button button button_call"
							>
								Gọi điện
							</a>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default HomeContacts;
