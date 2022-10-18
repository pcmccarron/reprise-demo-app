/* eslint-disable unicorn/filename-case */
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import StarIcon from '@mui/icons-material/StarHalf';
import ToggleOn from '@mui/icons-material/ToggleOn';
import CloudIcon from '@mui/icons-material/Cloud';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, {useMemo} from 'react';
import {useFlags} from 'launchdarkly-react-client-sdk';
import {Box, createTheme} from '@mui/material';
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
		<div className="hero">
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
					color="text.secondary"
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
					fontFamily: [
						'Audimat3000-Regulier',
						'Sohne-Buch',
						'Sohne-Kraftig',
					].join(','),
					h5: {
						'@font-face': {
							fontFamily: 'Sohne-Kraftig',
						},
					},
					h3: {
						'@font-face': {
							fontFamily: 'Sohne-Kraftig',
						},
					},
					body1: {
						'@font-face': {
							fontFamily: 'Sohne-Kraftig',
						},
					},
					body2: {
						'@font-face': {
							fontFamily: 'Sohne-Kraftig',
						},
					},
				},
				components: {
					MuiCard: {
						styleOverrides: {
							root: {
								backgroundColor: '#414042',
								opacity: 1,
								fontFamily: 'Sohne-Kraftig',
							},
						},
					},
					MuiCssBaseline: {
						styleOverrides: `
							@font-face {
								font-family: 'Audimat3000-Regulier';
								src: local('Audimat3000-Regulier'), url(${Audimat3000}) format('woff2');
								unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
								font-weight: 100;
							}
							@font-face {
								font-family: 'Sohne-Kraftig';
								src: local('Sohne-Kraftig'), url(${SohneKraftig}) format('woff2');
								unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
								font-weight: 200;
							}
							@font-face {
								font-family: 'Sohne-Buch';
								src: local('Sohne-Buch'), url(${SohneBuch}) format('woff2');
								unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
								font-weight: 300;
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
					ul: {margin: 0, padding: 0, listStyle: 'none'},
					backgroundColor: '#282828',
				}}
			/>
			<CssBaseline />
			<Content />
		</ThemeProvider>
	);
}
