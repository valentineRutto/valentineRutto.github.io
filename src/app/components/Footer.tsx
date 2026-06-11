import React from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 8, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: '-0.05em', mb: 1 }}>
              Valentine Rutto<Box component="span" sx={{ color: 'primary.main' }}>.</Box>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Senior Mobile Developer | Global Talent
            </Typography>
          </Box>
          
          <Stack direction="row" spacing={2}>
            <IconButton
              color="inherit"
              aria-label="GitHub"
              component="a"
              href="https://github.com/valentinerutto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="LinkedIn"
              component="a"
              href="https://www.linkedin.com/in/valentinerutto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="Email"
              component="a"
              href="mailto:vruttoapps@gmail.com"
            >
              <Email />
            </IconButton>
          </Stack>
        </Stack>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 8, opacity: 0.6 }}>
          © {new Date().getFullYear()} Valentine Rutto. All rights reserved. 2026
        </Typography>
      </Container>
    </Box>
  );
}
