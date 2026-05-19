import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router';
import { theme } from '../theme';
import { Header } from './Header';
import { Footer } from './Footer';
import { Box } from '@mui/material';

export function Layout() {
  return (
    <React.Fragment>
      {React.createElement(
        ThemeProvider,
        { theme },
        <React.Fragment>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
              <Outlet />
            </Box>
            <Footer />
          </Box>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
