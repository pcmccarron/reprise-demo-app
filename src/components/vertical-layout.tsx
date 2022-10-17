import {
	Container,
	Grid,
	Card,
	CardHeader,
	CardContent,
	Typography,
	Box,
} from '@mui/material';
import type {ReactElement} from 'react';
import React from 'react';
import {Image} from 'mui-image';
import UserSettings from './user-settings';

const horizontalLayout = ({
	tiers,
	flags,
}: {
	tiers: Array<{title: string; icon: ReactElement; description: string[]}>;
	flags: any;
}) => (
	<Container maxWidth="lg" component="main">
		<Grid container spacing={2} columnSpacing={5}>
			<Grid item direction="column">
				{tiers.map((tier) => (
					<Grid key={tier.title} item paddingBottom={2}>
						<Card
							sx={{
								backgroundColor: '#414042',
								maxHeight: 180,
								minWidth: 400,
								maxWidth: 400,
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
											variant="h6"
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
		</Grid>
		{flags.showBetaOptIn ? <UserSettings /> : null}
	</Container>
);

export default horizontalLayout;
