import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { APP_NAME } from '../constants/app';

const Header = () => {
	const pages = [
		{
			to: '/',
			label: 'Home',
		},
		{
			to: '/profile',
			label: 'Profile',
		},
	];
	return (
		<>
			<AppBar>
				<Container>
					<Toolbar>
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{ mr: 2, display: 'flex' }}
						>
							{APP_NAME}
						</Typography>
						<Box
							sx={{
								flexGrow: 1,
								display: 'flex',
							}}
						>
							{pages.map(({ to, label }) => (
								<Button
									key={to}
									to={to}
									component={Link}
									sx={{
										my: 2,
										color: 'white',
										display: 'block',
									}}
								>
									{label}
								</Button>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
};

export default Header;
