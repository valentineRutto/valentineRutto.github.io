import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Box, Container, IconButton, useScrollTrigger,
  Dialog, DialogTitle, DialogContent, DialogActions, TextField, Stack, Drawer, List, ListItem, ListItemButton, ListItemText 
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

function ElevationScroll(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
      backdropFilter: trigger ? 'blur(10px)' : 'none',
      borderBottom: trigger ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
      transition: 'all 0.3s ease-in-out',
    }
  });
}

export function Header() {
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const navItems = [
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Writing & Community', id: 'blog' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleSendMessage = () => {
    const mailtoSubject = encodeURIComponent(subject || 'New Inquiry from Portfolio');
    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:vruttoapps@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setIsHireMeOpen(false);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="transparent" sx={{ boxShadow: 0 }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ minHeight: '80px !important' }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontWeight: 800, letterSpacing: '-0.05em', cursor: 'pointer' }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                VR<Box component="span" sx={{ color: 'primary.main' }}>.</Box>
              </Typography>

              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                {navItems.map((item) => (
                  <Button 
                    key={item.id} 
                    sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button variant="contained" color="primary" sx={{ ml: 2 }} onClick={() => setIsHireMeOpen(true)}>
                  Hire Me
                </Button>
              </Box>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        anchor="right"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: 'background.paper',
            backgroundImage: 'none',
            borderLeft: '1px solid rgba(255,255,255,0.05)'
          }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <Typography variant="h6" fontWeight={800} letterSpacing="-0.05em">
            Menu
          </Typography>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ pt: 2, px: 1 }}>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton 
                onClick={() => {
                  scrollToSection(item.id);
                  handleDrawerToggle();
                }}
                sx={{ borderRadius: 1, mb: 1 }}
              >
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 500 }} />
              </ListItemButton>
            </ListItem>
          ))}
          <Box sx={{ mt: 2, px: 2 }}>
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth 
              onClick={() => {
                handleDrawerToggle();
                setIsHireMeOpen(true);
              }}
            >
              Hire Me
            </Button>
          </Box>
        </List>
      </Drawer>

      <Dialog 
        open={isHireMeOpen} 
        onClose={() => setIsHireMeOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'background.paper',
            backgroundImage: 'none',
            border: '1px solid rgba(255,255,255,0.05)'
          }
        }}
      >
        <DialogTitle component="div" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" component="span" fontWeight={700}>Let's Work Together</Typography>
          <IconButton onClick={() => setIsHireMeOpen(false)} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <Stack spacing={3} sx={{ mt: 1 }}>
            <TextField
              autoFocus
              label="Name"
              fullWidth
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Subject"
              fullWidth
              variant="outlined"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <TextField
              label="Message"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setIsHireMeOpen(false)} color="inherit">
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSendMessage} disabled={!name || !message}>
            Send Message
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
