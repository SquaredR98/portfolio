import React, { useEffect, useState } from 'react';

const TypingEffect = () => {
	const [introArray, setIntroArray] = useState([]);

	useEffect(() => {
		const starterArray = [
			'SOFTWARE ENGINEER with more than 2 Years of experience',
			'Experience with Fullstack development and design',
			'JS, Node, MongoDB, AWS DevOps, UI/UX',
		];

		const createTypingEffect = async (text, index) => {
			return Promise.all(
				text.split('').map(
					(c, i) =>
						new Promise((res) => {
							console.log(res, 'Res');
							setTimeout(() => {
								let arrayCopy =
									introArray.slice();
								setIntroArray([
									...introArray.slice(
										0,
										index,
									),
									arrayCopy[index] + c,
									...introArray.slice(
										index + 1,
									),
								]);
								res(null);
							}, 100 * i);
						}),
				),
			);
		};

		const cycle = async () => {
			let i = 0;
			for (const text of starterArray) {
				setIntroArray(['']);

				await createTypingEffect(text, i);
				i++;
			}
		};

		cycle();
	});
	console.log(introArray);

	return (
		<ul>
			{introArray.map((introLine, index) => (
				<li className='' key={index}>
					{introLine}
				</li>
			))}
		</ul>
	);
};

export default TypingEffect;
