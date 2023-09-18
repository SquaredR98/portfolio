import React from 'react';
import Slider from 'react-slick';

const CustomSlider = ({ gallery }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
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
							className='h-72 object-cover'
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default CustomSlider;
