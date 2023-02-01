import {AppBar, Toolbar, Box} from '@mui/material';
import React, {useEffect} from 'react';
import {useFlags, useLDClient} from 'launchdarkly-react-client-sdk';
import NavBar from './navbar';


export default function AppToolBar() {
	const [location, getLocation] = React.useState("");
	useEffect(() => { 
		fetch('/city')
		.then(response => 
			response.text()) 
		.then(data => {
			getLocation(data)}
		)}, [])

	console.log(location);

	const flags = useFlags();
	console.log(flags.login);
	console.log(flags.background);

	const [userName, setUserName] = React.useState();
	const ldClient = useLDClient();
	
	useEffect(() => {
		if (userName) {
			ldClient.identify({kind: "development", key: userName, name: userName, organization: "LaunchDarkly", location: location});
		}
	}, [userName]);

	return (
		<AppBar
			position="static"
			color="default"
			elevation={0}
			sx={{
				minHeight: 110,
				// BorderBottom: (theme) => `1px solid ${theme.palette.divider}`,
				backgroundColor: 'transparent',
				// AlignItems: 'center',
				justifyContent: 'center',
				// ZIndex: (theme) => theme.zIndex.drawer + 1,
			}}
		>
			<Toolbar>
				<Box
					component="img"
					src="primary-lockup-white.png"
					sx={{
						maxHeight: 70,
						marginTop: '20px',
						marginLeft: '20px',
					}}
				/>
				{/* and that is how you push the feature menu to the right */}
				<Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}} />
				{/* with this stupid box above this comment */}
				{flags.login ? (
					<Box sx={{float: 'right'}}>
						<NavBar userName={userName} setUserName={setUserName} />
					</Box>
				) : null}
			</Toolbar>
		</AppBar>
	);
}
