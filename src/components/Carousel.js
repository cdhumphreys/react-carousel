import React from 'react';

import CarouselImage from './CarouselImage';


class Carousel extends React.Component {
	constructor(){
		super();
		this.state = {
			styles: {
				container: {
					position: 'relative',
					width: '400px',
					height: '400px',
					border: '1px black solid'
				},
				listStyles: {
				display: 'inline-block',
				listStyle: 'none'
				},
				leftArrow: {
					position: 'absolute',
					left: '0px',
					top: 'calc(50% - 25px)',
					width: '50px',
					height: '50px',
					backgroundColor: 'blue'
				},
				rightArrow: {
					position: 'absolute',
					right: '0px',
					top: 'calc(50% - 25px)',
					width: '50px',
					height: '50px',
					backgroundColor: 'red'
				}	
			},
			activeIndex: 0
				
		}
	}
	
	prevImage(e) {
		if (this.state.activeIndex !== 0) {
			this.setState({activeIndex: this.state.activeIndex-1 });
		}		
	}

	nextImage(e) {
		if (this.state.activeIndex !== this.props.images.length - 1) {
			this.setState({activeIndex: this.state.activeIndex + 1});
		}		
	}
	

	render() {
		return (
			<div style={this.state.styles.container}>
				<div style={this.state.styles.leftArrow} onClick={this.prevImage.bind(this)}></div>
					<ul>
						{this.props.images.map((image, index) => {
							return <li style={this.state.styles.listStyles} key={index}><CarouselImage imageIndex={index} active={this.state.activeIndex==index ? 'active':''}imageSrc={image}/></li>
						})}
					</ul>
				<div style={this.state.styles.rightArrow} onClick={this.nextImage.bind(this)}></div>			
			</div>
		)
	}
}

export default Carousel;