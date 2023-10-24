import React from 'react';
import { Provider } from 'react-redux';
import { useStore } from '../components/Redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);
	const store = useStore(pageProps.initialReduxState);

	return (
		<Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
	);
}

export default MyApp;


