/* eslint-disable unicorn/filename-case */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import StarIcon from '@mui/icons-material/Star';
import ScienceTwoToneIcon from '@mui/icons-material/ScienceTwoTone';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, {useMemo} from 'react';
import {useFlags} from 'launchdarkly-react-client-sdk';
import {
	Box,
	createTheme,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Switch,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';

const tiers = [
	{
		title: 'Release Confidently',
		description: ['Deploy when you want', "Release when you're ready"],
		icon: <RocketLaunchIcon fontSize="large" color="warning" />,
	},
	{
		title: 'Improve Reliability',
		description: [
			'Rest easy with instant rollbacks',
			'Resolve incidents as soon as they happen',
		],
		icon: <StarIcon fontSize="large" color="error" />,
	},
	{
		title: 'Safely Migrate',
		description: [
			'Take the risk of uncertainty out of the cloud, microservices, and database migrations',
		],
		icon: <CloudDoneIcon fontSize="large" color="success" />,
	},
];

function AppToolBar() {
	return (
		<AppBar
			position="static"
			color="default"
			elevation={0}
			sx={{
				minHeight: 90,
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

function UserSettings() {
	return (
		<Grid container spacing={5} alignItems="flex-end" sx={{pt: 8, pb: 6}}>
			<Grid item xs={12} md={12}>
				<Card
					sx={{
						backgroundColor: '#414042',
					}}
				>
					<CardHeader
						title="User Settings"
						titleTypographyProps={{align: 'center'}}
						subheaderTypographyProps={{
							align: 'center',
						}}
						sx={{
							backgroundColor: '#282828',
						}}
					/>
					<CardContent>
						<List
							sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
						>
							<ListItem>
								<ListItemIcon>
									<ScienceTwoToneIcon />
								</ListItemIcon>
								<ListItemText
									id="switch-list-label-wifi"
									primary="Opt-In to Experimental Features"
								/>
								<Switch
									edge="end"
									inputProps={{
										'aria-labelledby': 'switch-list-label-wifi',
									}}
								/>
							</ListItem>
						</List>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}

function Content() {
	const flags = useFlags();

	return (
		<>
			<AppToolBar />
			<Container>
				<Container
					disableGutters
					maxWidth="sm"
					component="main"
					sx={{pt: 4, pb: 6}}
				>
					<Typography
						gutterBottom
						component="h1"
						variant="h2"
						align="center"
						color="text.primary"
					>
						LaunchDarkly <br /> Feature Management
					</Typography>
					<Typography
						variant="h5"
						align="center"
						color="text.secondary"
						component="p"
					>
						Ship features fast and fearlessly with dark launches
					</Typography>
				</Container>

				<Container maxWidth="lg" component="main">
					<Grid container spacing={5} alignItems="flex-end">
						{tiers.map((tier) => (
							<Grid key={tier.title} item xs={12} md={4}>
								<Card
									sx={{
										backgroundColor: '#414042',
										minHeight: 200,
									}}
								>
									<CardHeader
										title={tier.title}
										titleTypographyProps={{align: 'center'}}
										action={tier.icon}
										subheaderTypographyProps={{
											align: 'center',
										}}
										sx={{
											backgroundColor: '#282828',
										}}
									/>
									<CardContent>
										<ul>
											{tier.description.map((line) => (
												<Typography
													key={line}
													component="li"
													variant="subtitle1"
													align="center"
												>
													{line}
												</Typography>
											))}
										</ul>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
					{flags.showBetaOptIn ? <UserSettings /> : null}
				</Container>
			</Container>
		</>
	);
}

export default function Pricing() {
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: 'dark',
					primary: {
						main: '#405BFF',
					},
					success: {
						main: '#A34FDE',
					},
					error: {
						main: '#405BFF',
					},
					warning: {
						main: '#FF386B',
					},
				},
			}),
		[],
	);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles
				styles={{
					ul: {margin: 0, padding: 0, listStyle: 'none'},
					backgroundColor: '#e6e6e6',
				}}
			/>
			<CssBaseline />
			<Content />
		</ThemeProvider>
	);
}
