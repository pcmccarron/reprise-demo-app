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
		<Grid
			container
			spacing={2}
			columnSpacing={5}
			sx={{alignContent: 'center', justifyContent: 'center'}}
		>
			<Grid item direction="column">
				{tiers.map((tier) => (
					<Grid key={tier.title} item paddingBottom={2}>
						<Card
							sx={{
								maxHeight: 180,
								minWidth: 500,
								maxWidth: 500,
								opacity: 1,
							}}
						>
							<CardHeader
								avatar={tier.icon}
								title={<Typography variant="h6">{tier.title}</Typography>}
								titleTypographyProps={{align: 'left'}}
								sx={{
									paddingLeft: '80px',
								}}
							/>
							<CardContent
								sx={{
									paddingLeft: '130px',
									paddingRight: '50px',
								}}
							>
								<ul>
									{tier.description.map((line) => (
										<Typography
											key={line}
											component="li"
											align="left"
											variant="body1"
											color="#E6E6E6"
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
