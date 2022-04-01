import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import HomeView from './views/Home';
import ProfileView from './views/Profile';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const App = () => {
	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: '#1976d2',
			},
		},
	});

	return (
		<>
			<HashRouter>
				<CssBaseline />
				<ThemeProvider theme={darkTheme}>
					<Header />
					<Paper
						sx={{
							borderRadius: 0,
							height: 'calc(100vh - 69px)',
							marginTop: '85px',
						}}
					>
						<Grid
							container
							spacing={2}
							minWidth={'100%'}
							maxWidth={'100%'}
							height={'100%'}
							overflow={'auto'}
							marginRight={'0'}
							marginLeft={'0'}
						>
							<Routes>
								<Route
									path='/profile'
									element={<ProfileView />}
								/>
								<Route path='/' element={<HomeView />} />
							</Routes>
						</Grid>
					</Paper>
				</ThemeProvider>
			</HashRouter>
		</>
	);
};

export default App;
