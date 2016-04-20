import React from 'react';
import ReactDOM from 'react-dom';

import Carousel from './components/Carousel';
const images = [
		'http://i.istockimg.com/file_thumbview_approve/68125355/6/stock-photo-68125355-abstract-hexagon-pattern-background.jpg',
		'http://i.istockimg.com/file_thumbview_approve/84374361/6/stock-illustration-84374361-watercolor-background.jpg',
		'http://i.istockimg.com/file_thumbview_approve/61052940/6/stock-illustration-61052940-technology-background.jpg',
		'http://i.istockimg.com/file_thumbview_approve/65600133/6/stock-illustration-65600133-abstract-background.jpg',
		'http://i.istockimg.com/file_thumbview_approve/79975655/6/stock-illustration-79975655-festive-christmas-bokeh-background.jpg',
		'http://i.istockimg.com/file_thumbview_approve/61490150/6/stock-photo-61490150-multicolor-abstract-geometric-rumpled-triangular-low-poly-style-illustration.jpg',
		'http://i.istockimg.com/file_thumbview_approve/77938125/6/stock-illustration-77938125-vector-glowing-stars-ghts-and-sparkles.jpg'
	];

class Layout extends React.Component {
	constructor() {
		super();
	
	}
	render() {
		return (
			<Carousel images={images}/>
		)
	}
}

ReactDOM.render(<Layout />, document.getElementById('app'));