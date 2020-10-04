import React, { FC, useContext } from 'react';
import { EventContext, Styled } from 'direflow-component';
import styles from './App.css';

interface IProps {
	componentTitle: string;
	sampleList: string[];
	height: string;
	width: string;
}

const App: FC<IProps> = (props) => {
	const dispatch = useContext(EventContext);

	const handleClick = () => {
		const event = new Event('my-event');
		dispatch(event);
	};

	return (
		<Styled styles={styles}>
			<div className="app">
				<p>Scan with the PayUI app to complete your purchase</p>
				<img
					id="barcode"
					src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&size=100x100"
					alt=""
					title="HELLO"
					width={props.width || '150'}
					height={props.height || '150'}
				/>
			</div>
		</Styled>
	);
};

App.defaultProps = {
	componentTitle: 'PayUI SDK',
	sampleList: ['Create with React', 'Build as Web Component', 'Use it anywhere!'],
};

export default App;
