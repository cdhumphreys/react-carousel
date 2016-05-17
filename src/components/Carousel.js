import React from 'react';
const PropTypes = React.PropTypes;
import CarouselImage from './CarouselImage';
import styles from "../styles/stylesheet.css";

class Carousel extends React.Component {
	constructor(){
		super();	
		this.threshold = 50;					
		this.state = { activeIndex: 0, moveX:0 };
		propTypes: {
			images: PropTypes.array.isRequired
		}
	}

	
	

	prevImage() {
		if (this.state.activeIndex !== 0) {
			this.setState({activeIndex: this.state.activeIndex-1 });
		}
		else {
			this.setState({activeIndex: this.props.images.length - 1});
		}		
	}

	nextImage() {
		if (this.state.activeIndex !== this.props.images.length - 1) {
			this.setState({activeIndex: this.state.activeIndex + 1});
		}
		else {
			this.setState({activeIndex: 0});
		}		
	}

	startHandler(e) {
		e.preventDefault();
		this.currentImage = e.target;
		// console.log(this.currentImage.getBoundingClientRect());
		this.imageCenter = this.currentImage.getBoundingClientRect().left + (this.currentImage.getBoundingClientRect().width/2);
		console.log(this.imageCenter);
		this.active = true;
		this.startX = e.clientX;
	}

	moveHandler(e) {
		e.preventDefault();
		let moveLimit = 50;

		if (this.active && (Math.abs(e.clientX - this.imageCenter) < moveLimit)) {
			this.setState({moveX: e.clientX - this.imageCenter});
		}
		
	}

	endHandler(e) {
		e.preventDefault();

		this.active = false;
		this.finalX = e.clientX;
		this.setState({moveX: 0});
		if (this.finalX - this.startX > this.threshold) {
			this.nextImage();
		}
		else if (this.startX - this.finalX > this.threshold) {
			this.prevImage();
		}
	}

	render() {
		const styles = {
			container: {
				position: 'relative',
				width: '400px',
				height: '400px',
				border: '1px black solid',
				left: '500px'
				
			},
			listStyles: {
				display: 'inline-block',
				listStyle: 'none',
				transform: 'translate3d('+ (15 + this.state.moveX) +'px,0,0)',
				zIndex: '9'
			},
			leftArrow: {
				position: 'absolute',
				left: '0px',
				top: 'calc(50% - 25px)',
				width: '50px',
				height: '50px',			
				backgroundImage: "url('src/assets/arrow_left.png')",
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				zIndex: '10'

			},
			rightArrow: {
				position: 'absolute',
				right: '0px',
				top: 'calc(50% - 25px)',
				width: '50px',
				height: '50px',								
				backgroundImage: "url('src/assets/arrow_right.png')",
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				zIndex: '10'
			}	
		};

		return (
			<div style={styles.container} 
			onTouchStart={this.startHandler.bind(this)} onTouchMove={this.moveHandler.bind(this)} onTouchEnd={this.endHandler.bind(this)}
			onMouseDown={this.startHandler.bind(this)} onMouseMove={this.moveHandler.bind(this)} onMouseUp={this.endHandler.bind(this)} 
			>
				<div style={styles.leftArrow} className="bounceLeft" onClick={this.prevImage.bind(this)}></div>
					<ul>
						{this.props.images.map((image, index) => {
							return <li style={styles.listStyles} key={index}><CarouselImage imageIndex={index} active={this.state.activeIndex==index ? 'active':''}imageSrc={image}/></li>
						})}
					</ul>
				<div style={styles.rightArrow} className="bounceRight" onClick={this.nextImage.bind(this)}></div>			
			</div>
		)
	}
}

export default Carousel;