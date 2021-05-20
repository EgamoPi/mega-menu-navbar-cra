import { createElement as $ } from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
// Nav
import Nav from './components/navigation/Nav';
// Page Import
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
	return $(
		'div',
		{ className: 'App' },
		$(GlobalStyles),
		$(Nav),
		$(
			Switch,
			null,
			$(Route, { exact: true, path: '/' }, $(Home)),
			$(Route, { exact: true, path: '/about' }, $(About)),
			$(Route, { exact: true, path: '/contact' }, $(Contact))
		)
	);
}

export default App;
