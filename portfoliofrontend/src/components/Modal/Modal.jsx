import { useEffect } from "react";

// modal view
export default function Modal(props) {
	useEffect(() => {
		if (props.visible == true) document.body.style.overflowY = "hidden";
		else document.body.style.overflowY = "unset";
		return () => {
			document.body.style.overflowY = "unset";
		};
	}, [props.visible]);

	return (
		<div
			className={
				"fixed inset-0 w-full h-full bg-gray-700/50 z-20 backdrop-blur-sm shadow-2xl drop-shadow-xl" +
				(!props.visible && " hidden")
			}
		>
			<div className='flex flex-row h-full'>
				{/*TODO: Consider shrinking the basises to 1/6, 2/3, 1/6 respectively for a smaller screen size */}
				<div className='basis-1/4' />
				<div className='basis-1/2 flex flex-col'>
					<div className='flex-1 flex flex-col my-10 bg-white rounded-2xl'>
						{/* Header */}
						{(props.backgroundColor || props.backgroundImage) && (
							<div
								className='h-40 rounded-t-2xl bg-cover bg-no-repeat bg-center'
								style={{
									backgroundImage: `url('${props.backgroundImage}')`,
									backgroundColor: props.backgroundColor,
								}}
							></div>
						)}
						<div className='flex-1 p-5'>{props.children}</div>
						{/* Footer */}
						<div className='p-5 flex flex-row-reverse'>
							<button
								onClick={props.toggleVisibility}
								className='bg-blue-600 text-white font-bold py-2 px-4 rounded-xl '
							>
								Close
							</button>
						</div>
					</div>
				</div>
				<div className='basis-1/4' />
			</div>
		</div>
	);
}
