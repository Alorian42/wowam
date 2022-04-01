import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Paper, Stack } from '@mui/material';
import { styled } from '@mui/system';
import PathToWoW from '../components/PathToWoW';

const HomeView = () => {
	const [path, setPath] = React.useState('');

	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	}));

	return (
		<>
			<Grid sx={{ width: '100%' }} item>
				<Stack spacing={2}>
					<Item>
						<PathToWoW setPath={setPath} />
					</Item>
					<Item>Addon List</Item>
				</Stack>
			</Grid>
		</>
	);
}

export default HomeView