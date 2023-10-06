import React from 'react';
import Slider from 'react-slick';

const CustomSlider = ({ gallery }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: true,
		autoPlay: true,
		autoplaySpeed: 1000,
	};
	return (
		<div>
			<Slider {...settings}>
				{gallery.map((element, index) => (
					<div
						key={index}
						className='flex justify-center items-center'
					>
						<img
							src={element}
							alt=''
							className='h-72 object-cover w-full'
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default CustomSlider;
