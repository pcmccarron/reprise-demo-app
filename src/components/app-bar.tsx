import {AppBar, Toolbar, Box} from '@mui/material';
import React from 'react';

export default function AppToolBar() {
	return (
		<AppBar
			position="static"
			color="default"
			elevation={0}
			sx={{
				minHeight: 110,
				borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
				backgroundColor: '#282828',
				// AlignItems: 'center',
				justifyContent: 'center',
				zIndex: (theme) => theme.zIndex.drawer + 1,
			}}
		>
			<Toolbar>
				<Box
					component="img"
					src="primary-lockup-white.png"
					sx={{
						maxHeight: 50,
					}}
				/>
				{/* and that is how you push the feature menu to the right */}
				<Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}} />
				{/* with this stupid box above this comment */}
			</Toolbar>
		</AppBar>
	);
}
