/* eslint-disable unicorn/filename-case */
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import StarIcon from '@mui/icons-material/StarHalf';
import ToggleOn from '@mui/icons-material/ToggleOn';
import CloudIcon from '@mui/icons-material/Cloud';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, { useMemo, useEffect } from 'react';
import { useFlags, useLDClient } from 'launchdarkly-react-client-sdk';
import { Box, createTheme } from '@mui/material';
import Audimat3000 from '../public/fonts/Audimat3000-Regulier.woff2';
import SohneBuch from '../public/fonts/Sohne-Buch.woff2';
import SohneKraftig from '../public/fonts/Sohne-Kraftig.woff2';
import AppToolBar from './components/app-bar';
import HorizontalLayout from './components/horizontal-layout';
import VerticalLayout from './components/vertical-layout';

const tiers = [
	{
		title: 'Release Confidently',
		description: ['Deploy when you want', "Release when you're ready"],
		icon: <ToggleOn fontSize="large" color="warning" />,
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
		icon: <CloudIcon fontSize="large" color="success" />,
	},
];

function Content() {
	const flags = useFlags();

	return (
		<div style={{
			backgroundSize: "cover",
			backgroundColor: "#282828",
			position: "relative",
			height: "100vh",
			width: "100 %",
			opacity: "100",
			backgroundImage: `url(${flags.bgImg})`
		}}>
			<AppToolBar />
			<Container
				disableGutters
				maxWidth="sm"
				component="main"
				sx={{
					pt: 4,
					pb: 6,
				}}
			>
				<Typography
					gutterBottom
					component="h1"
					variant="h2"
					align="center"
					className="heroText"
				>
					LaunchDarkly <br /> Feature Management
				</Typography>
				<Typography
					variant="h5"
					align="center"
					color={flags.background}
					component="p"
				>
					Ship features fast and fearlessly with dark launches
				</Typography>
			</Container>
			<Box
				sx={{
					display: 'flex',
					alignContent: 'center',
					justifyContent: 'center',
				}}
			>
				{flags.pageLayout === 'vertical' ? (
					<VerticalLayout tiers={tiers} flags={flags} />
				) : (
					<HorizontalLayout tiers={tiers} flags={flags} />
				)}
			</Box>
		</div>
	);
}

export default function App() {

	const theme = useMemo(
		() =>
			createTheme({
				typography: {
					h2: {
						fontFamily: 'Audimat',
					},
					h5: {
						fontFamily: 'Kraftig',
					},
					h6: {
						fontFamily: 'Kraftig',
						fontWeight: 'bold',
						fontSize: '18px',
					},
					body1: {
						fontFamily: 'Buch',
						color: '#e6e6e6',
					},
				},
				components: {
					MuiCard: {
						styleOverrides: {
							root: {
								backgroundColor: '#414042',
								opacity: 1,
							},
						},
					},
					MuiCssBaseline: {
						styleOverrides: `
							@font-face {
								font-family: "Audimat";
								src: url(${Audimat3000}) format('woff2');
								font-weight: bold;
							}

							@font-face {
								font-family: 'Kraftig';
								src: url(${SohneKraftig}) format('woff2');
							}

							@font-face {
								font-family: 'Buch';
								src: local('Buch'), url(${SohneBuch}) format('woff2');
								font-weight: normal;
							}
						`,
					},
				},
				palette: {
					mode: 'dark',
					primary: {
						main: '#405BFF',
					},
					success: {
						main: '#A34FDE',
					},
					error: {
						main: '#EBFF38',
					},
					warning: {
						main: '#3DD6F5',
					},
				},
			}),
		[],
	);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles
				styles={{
					ul: { margin: 0, padding: 0, listStyle: 'none' },
					backgroundColor: "#282828",
				}}
			/>
			<CssBaseline />
			<Content />
		</ThemeProvider>
	);
}
