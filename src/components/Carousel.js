import React from 'react';
const PropTypes = React.PropTypes;
import CarouselImage from './CarouselImage';
import styles from "../styles/stylesheet.css";

class Carousel extends React.Component {
	constructor(){
		super();						
		this.state = { activeIndex: 0 };

		propTypes: {
			images: PropTypes.array.isRequired
		}
	}

	
	

	prevImage() {
		if (this.state.activeIndex !== 0) {
			this.setState({activeIndex: this.state.activeIndex-1 });
		}		
	}

	nextImage() {
		if (this.state.activeIndex !== this.props.images.length - 1) {
			this.setState({activeIndex: this.state.activeIndex + 1});
		}		
	}

	render() {
		const styles = {
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
				backgroundImage: "url('src/assets/arrow_left.png')",
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center'

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
				backgroundPosition: 'center center'
			}	
		};

		return (
			<div style={styles.container}>
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