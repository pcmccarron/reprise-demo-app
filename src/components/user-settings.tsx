import {
	Grid,
	Card,
	CardHeader,
	CardContent,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Switch,
} from '@mui/material';
import {ScienceTwoTone} from '@mui/icons-material';
import React from 'react';

export default function UserSettings() {
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
									<ScienceTwoTone />
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
