import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'motion/react';
import { Code, Storage, Speed, Security, PhoneAndroid, Apple, IntegrationInstructions, DeveloperMode } from '@mui/icons-material';

const skillsData = [
 // { name: "React Native", icon: <PhoneAndroid />, level: 95 },
  { name: "Flutter / Dart", icon: <DeveloperMode />, level: 100 },
//  { name: "iOS / Swift", icon: <Apple />, level: 85 },
  { name: "Android / Kotlin", icon: <PhoneAndroid />, level: 100 },
//  { name: "TypeScript", icon: <Code />, level: 92 },
//  { name: "State Mgt (Redux/MobX)", icon: <Storage />, level: 90 },
  { name: "CI/CD & DevOps", icon: <IntegrationInstructions />, level: 100 },
  { name: "App Security & Perf.", icon: <Security />, level: 100 },
];

export function Skills() {
  return (
    <Box id="skills" component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Box mb={8} textAlign="center">
            <Typography variant="h2" sx={{ mb: 2 }}>
              Core Competencies
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              My technical arsenal built over 8+ years of deploying production-ready applications.
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4, 
                  textAlign: 'center', 
                  bgcolor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.05)',
                    borderColor: 'primary.main',
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2, display: 'flex', justifyContent: 'center', '& > svg': { fontSize: 40 } }}>
                  {skill.icon}
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {skill.name}
                </Typography>
                <Box sx={{ mt: 2, height: 4, width: '100%', bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 2, overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                    style={{ height: '100%', backgroundColor: '#6366f1', borderRadius: 8 }}
                  />
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
