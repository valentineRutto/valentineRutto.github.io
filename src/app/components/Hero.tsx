import React from 'react';
import { Box, Container, Typography, Button, Stack, Avatar } from '@mui/material';
import { motion } from 'motion/react';
import { ArrowForward, Download } from '@mui/icons-material';
import profilePicture from '../../imports/ppic.jpg';
import resumePdf from '../../imports/ValentineRutto_CV.pdf';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <Box 
      component="section" 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <Box 
        sx={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(10,10,10,0) 70%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack 
          direction={{ xs: 'column-reverse', md: 'row' }} 
          spacing={{ xs: 6, md: 4 }} 
          alignItems="center"
        >
          <Box flex={1} component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants}>
              <Typography variant="overline" color="primary" sx={{ fontWeight: 700, letterSpacing: 2, mb: 1, display: 'block' }}>
                Senior Mobile Developer
              </Typography>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '5rem' }, mb: 3, lineHeight: 1.1 }}>
                Building Mobile Experiences for a{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  Global Audience.
                </Box>
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 5, maxWidth: 600, fontWeight: 400, lineHeight: 1.6 }}>
                Hi, I'm Valentine Rutto. With 8+ years of technical experience, I design and ship Android and cross-platform systems with offline-first data, smooth UI architecture, reliable delivery pipelines, and thoughtful product craft.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button 
                  variant="contained" 
                  size="large" 
                  endIcon={<ArrowForward />}
                  onClick={() => {
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  sx={{ px: 4, py: 1.5 }}
                >
                  View My Work
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  component="a"
                  href={resumePdf}
                  download="ValentineRutto_CV.pdf"
                  startIcon={<Download />}
                  sx={{ px: 4, py: 1.5, borderColor: 'rgba(255,255,255,0.2)', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.05)' } }}
                >
                  Download Resume
                </Button>
              </Stack>
            </motion.div>
          </Box>
          
          <Box 
            flex={1} 
            display="flex" 
            justifyContent="center" 
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Box 
              sx={{ 
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: -20,
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  zIndex: -1,
                }
              }}
            >
              <Avatar
                src={profilePicture}
                alt="Valentine Rutto"
                sx={{ 
                  width: { xs: 280, md: 400 }, 
                  height: { xs: 280, md: 400 },
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  border: '4px solid',
                  borderColor: 'background.paper'
                }}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
