import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import HomeView from './views/Home';
import ProfileView from './views/Profile';

const App = () => {
  return (
		<>
			<HashRouter>
				<Header />
				<Routes>
					<Route path='/profile' element={<ProfileView />} />
					<Route path='/' element={<HomeView />} />
				</Routes>
			</HashRouter>
		</>
  );
}

export default App;