import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import StickyFooter from './StickyFooter';
import StarIcon from '@mui/icons-material/Star';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useFlags, useLDClient } from 'launchdarkly-react-client-sdk';
import { Drawer } from '@mui/material';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const tiers = [
  {
    title: 'Release Confidently',
    description: [
      'Deploy when you want',
      'Release when you\'re ready',
    ],
    icon: <RocketLaunchIcon />
  },
  {
    title: 'Improve Reliability',
    description: [
      'Rest easy with instant rollbacks',
      'Resolve incidents as soon as they happen'
    ],
    icon: <StarIcon />
  },
  {
    title: 'Safely Migrate',
    description: [
      'Take the risk of uncertainty out of the cloud, microservices, and database migrations'
    ],
    icon: <CloudDoneIcon />
  },
];

function Content({availableThemes}: { availableThemes: string[]}) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  console.log('available themese length', availableThemes.length)

  return (
    <>
        <Drawer open={availableThemes.length > 1} anchor="bottom" variant="persistent">
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.default',
              color: 'text.primary',
              borderRadius: 1,
              p: 3,
            }}
          >
            {theme.palette.mode} mode
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Drawer>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ minHeight:125, borderBottom: (theme) => `1px solid ${theme.palette.divider}`, backgroundColor: '#282828', alignItems: 'center', justifyContent: 'center'  }}
      >
        <Toolbar sx={{ flexWrap: 'wrap'}}>
          <Box component="img" src="primary-lockup-white.png" sx={{
            maxHeight: 100
          }} />
        </Toolbar>
      </AppBar>

      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          LaunchDarkly <br/> Feature Management
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Ship features fast and fearlessly with dark launches
        </Typography>
      </Container>

      <Container maxWidth="lg" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.icon}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: 'neutral'
                  }}
                />
                <CardContent>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
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
        <StickyFooter />
      </Container>
    </>
  );
}

export default function Pricing() {
  const { availableThemes } = useFlags();

  console.log('availabe themes', availableThemes)
  const themes = availableThemes ? availableThemes.split(',') : ['light'];
  
  const [mode, setMode] = React.useState<'light' | 'dark'>(themes[0]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' }, backgroundColor: '#e6e6e6' }} />
        <CssBaseline />
        <Content availableThemes={themes}/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}