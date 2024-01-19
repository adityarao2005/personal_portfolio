import React, { useEffect, useContext, createContext } from "react";

class ModalData {
	constructor(visible = false, content = <div></div>, title = "default") {
		this.visible = visible;
		this.content = content;
		this.title = title;
	}
}

export const ModalContext = createContext(null);

export function ModalProvider(props) {
	const [modalData, setModalData] = useState(new ModalData());

	useEffect(() => {
		
	}, []);

	return (
		<ModalContext.Provider value={modalData}>
			<div>
				<ModalView />
				{props.children}
			</div>
		</ModalContext.Provider>
	);
}

export function showModal(content, title = "default") {
}

export function closeModal() {

}

function ModalView(props) {
	const modalData = useContext(ModalContext);
	let visible = modalData.visible;

	useEffect(() => {

		if (visible == true) document.body.style.overflowY = "hidden";
		else document.body.style.overflowY = "unset";
		return () => {
			document.body.style.overflowY = "unset";
		};
	}, []);

	return (
		<div
			className={
				"absolute inset-0 w-full h-full bg-gray-700/50 z-20 backdrop-blur-sm drop-shadow-md z-40" +
				(visible == true ? "" : " hidden")
			}
		>
			<div className='flex flex-row h-full'>
				<div className='basis-1/4' />
				<div className='basis-1/2 flex flex-col'>
					<div className='flex-1 my-10 bg-white rounded-2xl p-5'>
						asdfasdf
					</div>
				</div>
				<div className='basis-1/4' />
			</div>
		</div>
	);
}
