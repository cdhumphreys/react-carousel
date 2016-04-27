import React from 'react';

// Functional stateless component
function CarouselImage(props) {		
	
	
	const styles = {				
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
	};

	return (
		<img src={props.imageSrc} style={props.active === 'active' ? styles.activeImage : styles.inactiveImage} />
	);
		
	
}

export default CarouselImage;