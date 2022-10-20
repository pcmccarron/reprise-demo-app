import {
	Container,
	Grid,
	Card,
	CardHeader,
	CardContent,
	Typography,
} from '@mui/material';
import type {ReactElement} from 'react';
import React from 'react';
import UserSettings from './user-settings';

const horizontalLayout = ({
	tiers,
	flags,
}: {
	tiers: Array<{title: string; icon: ReactElement; description: string[]}>;
	flags: any;
}) => (
	<Container maxWidth="lg" component="main">
		<Grid container spacing={5} alignItems="flex-end">
			{tiers.map((tier) => (
				<Grid key={tier.title} item xs={12} md={4}>
					<Card
						sx={{
							minHeight: 200,
							opacity: 1,
						}}
					>
						<CardHeader
							title={tier.icon}
							titleTypographyProps={{align: 'left'}}
						/>
						<CardContent>
							<Typography variant="h6">{tier.title}</Typography>
							<br />
							<ul>
								{tier.description.map((line) => (
									<Typography key={line} component="li" variant="body1">
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
);

export default horizontalLayout;
