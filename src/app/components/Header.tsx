import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Box, Container, IconButton, useScrollTrigger,
  Dialog, DialogTitle, DialogContent, DialogActions, TextField, Stack, Drawer, List, ListItem, ListItemButton, ListItemText,
  Alert, CircularProgress
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
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSending, setIsSending] = useState(false);

  const navItems = [
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Writing & Community', id: 'blog' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const resetContactForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setFormStatus('idle');
    setIsSending(false);
  };

  const closeHireMeDialog = () => {
    setIsHireMeOpen(false);
    resetContactForm();
  };

  const submitContactMessage = async (signal: AbortSignal) => {
    const formData = new FormData();
    formData.append('name', name.trim());
    formData.append('email', email.trim());
    formData.append('subject', subject.trim() || 'New Inquiry from Portfolio');
    formData.append('message', message.trim());
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    const response = await fetch('https://formsubmit.co/ajax/vruttoapps@gmail.com', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
      signal,
    });

    if (!response.ok) {
      throw new Error('Unable to send message');
    }
  };

  const handleSendMessage = async () => {
    if (isSending) return;

    setIsSending(true);
    setFormStatus('idle');

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => {
      controller.abort();
    }, CONTACT_FORM_TIMEOUT_MS);

    try {
      await submitContactMessage(controller.signal);

      setFormStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch {
      setFormStatus('error');
    } finally {
      window.clearTimeout(timeoutId);
      setIsSending(false);
    }
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
        onClose={closeHireMeDialog}
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
          <IconButton onClick={closeHireMeDialog} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <Stack spacing={3} sx={{ mt: 1 }}>
            {formStatus === 'success' && (
              <Alert severity="success">
                Your message has been recieved. I will be intouch soon.
              </Alert>
            )}
            {formStatus === 'error' && (
              <Alert severity="error">
                Sorry, something went wrong while sending your message. Please try again.
              </Alert>
            )}
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
              required
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
              required
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
          <Button onClick={closeHireMeDialog} color="inherit">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            disabled={!name || !email || !message || isSending}
            startIcon={isSending ? <CircularProgress color="inherit" size={16} /> : undefined}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const CONTACT_FORM_TIMEOUT_MS = 10_000;
