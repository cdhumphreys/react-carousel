import React from 'react';


class CarouselImage extends React.Component {
	constructor() {
		super();
		this.state = {
				styles: {
					activeImage: {
						display: 'inline-block',
						position: 'absolute',
						width: '300px',
						height: 'auto',
						left: 'calc(50% - 150px)',
						top: 'calc(50% - 150px)'

					},
					inactiveImage: {
						display: 'none',
						position: 'absolute',
						width: '300px',
						height: 'auto'
					}
			}
		}
	}
	
	render() {
		return (
			<img src={this.props.imageSrc} style={this.props.active === 'active' ? this.state.styles.activeImage : this.state.styles.inactiveImage} />
			)
		
	}
}

export default CarouselImage;