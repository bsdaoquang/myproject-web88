/** @format */

import CardComponent from './components/CardComponent';
import TextComponent from './components/TextComponent';

const App = () => {
	return (
		<div className='container p-4'>
			<TextComponent text='fsajhfjskajkas' />
			<TextComponent text='fsajhfjskajkas' />
			<TextComponent text='fsajhfjskajkas' />
			<TextComponent text='fsajhfjskajkas' color={'red'} />
			<TextComponent text='fsajhfjskajkas' />
			<TextComponent text='fsajhfjskajkas' />
			<TextComponent text='fsajhfjskajkas' />
			<TextComponent text='fsajhfjskajkas' color={'green'} />
		</div>
	);
};

export default App;
