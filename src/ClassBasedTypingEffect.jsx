import React from 'react';

class Terminal extends React.Component {
	state = {
		introArray: [],
	};

	componentDidMount() {
		// Data to import from sanity
		const starterArray = [
			'The very first line that needs to finish typing before going to the next line',
			'The second line that needs to start being typed after the first line',
		];

		const createTypingEffect = async (text, index) => {
			return Promise.all(
				text.split('').map(
					(c, i) =>
						new Promise((res) => {
							setTimeout(() => {
								let arrayCopy =
									this.state.introArray.slice();
								this.setState((state) => ({
									introArray: [
										...state.introArray.slice(
											0,
											index,
										),
										arrayCopy[index] +
											c,
										...state.introArray.slice(
											index + 1,
										),
									],
								}));
								res(null);
							}, 100 * i);
						}),
				),
			);
		};

		const cycle = async () => {
			let i = 0;
			for (const starterText of starterArray) {
				// Setting empty string for each line in starterArray so we dont get undefined as first character
				this.setState((state) => ({
					introArray: [...state.introArray, ''],
				}));

				await createTypingEffect(starterText, i);
				i++;
			}
		};

		cycle();
	}
	render() {
		console.log(this.state.introArray);
		return (
			<div className='w-1/2 h-1/2 p-5 flex items-start justify-start bg-clip-padding bg-slate-900 backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-900 rounded'>
				<div className='flex flex-col'>
					{this.state.introArray.map((introLine, index) => (
						<div
							className='flex items-center'
							key={index}
						>
							<p className='text-white'>
								{introLine}
							</p>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Terminal;
