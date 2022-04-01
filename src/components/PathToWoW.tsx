import * as React from 'react';
import { Button } from '@mui/material';
import i18n from '../utils/i18n';
// import { dialog } from 'electron';

const PathToWoW = ({
	setPath,
}: {
	setPath: React.Dispatch<React.SetStateAction<string>>,
}) => {
	const handleClick = () => {
		// dialog.showOpenDialog({
		// 	properties: ['openDirectory'],
		// });
		setPath('123');
	};

	return (
		<>
			<Button variant='contained' component='label' onClick={handleClick}>
				{i18n('pathToWow')}
			</Button>
		</>
	);
};

export default PathToWoW;
