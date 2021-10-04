import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';

class MapYand extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	static defaultProps = {
		mapState: {
			center: [10.8439968, 106.7414595],
			zoom: 14,
			behaviors: ["disable('scrollZoom')", 'drag'],
			controls: []
		},
		placeMarkOptions: {
			iconLayout: 'default#image',
			iconImageHref: '/assets/images/pin.svg',
			iconImageSize: [24, 33],
			iconImageOffset: [-12, -17]
		}
	};

	render() {
		return (
			<Fragment>
				<YMaps query={{ lang: 'vi_VN' }}>
					<Map
						defaultState={this.props.mapState}
						modules={['templateLayoutFactory', 'layout.ImageWithContent']}
					>
						<Placemark
							geometry={this.props.mapState.center}
							options={this.props.placeMarkOptions}
							properties={{
								hintContent: 'Cửa hàng của chúng tôi',
								balloonContent:
									'Cổng 1 Chung Cư 4s Linh Đông đường 30, phường Linh Đông, Q Thủ Đức'
							}}
						/>
						<ZoomControl
							options={{
								size: 'small'
							}}
						/>
					</Map>
				</YMaps>
			</Fragment>
		);
	}
}

export default MapYand;
