import React from 'react';
import { Box, Container, Typography, Stack, Card, CardContent, Chip, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'motion/react';
import { WorkOutline } from '@mui/icons-material';

const experiences = [
  {
    role: "Senior Mobile Applications Developer",
    company: "Burn Manufacturing",
    period: "April 2025 - January 2026",
    description: "Owned and led the native Android platform end-to-end for applications used by field agents across multiple African countries. Managed the complete feature and release lifecycle from requirements gathering to application distribution. Championed UI and data-flow enhancements by implementing robust local data persistence and lifecycle-aware components. Mentored junior developers through technical guidance and code reviews to maintain high architectural consistency.",
    skills: ["Android", "Kotlin", "Java", "Local Persistence", "Leadership"]
  },
  {
    role: "Android Engineer",
    company: "Twiga Foods",
    period: "June 2024 - June 2025",
    description: "Led the development of critical Android applications including a field agent app and a company-wide modularized Warehouse Data Management System. Drove the modernization of legacy codebases by migrating them to Kotlin and modern Android libraries to increase overall developer productivity. Designed and implemented large-scale offline-first scanning and syncing systems using WorkManager for seamless logistics workflows. Acted as the end-to-end technical owner while collaborating closely with cross-functional teams to deliver reliable, high-impact solutions.",
    skills: ["Kotlin", "WorkManager", "Offline-first", "Modularization"]
  },
  {
    role: "Android Engineer",
    company: "D.Light",
    period: "June 2020 - October 2022",
    description: "Spearheaded the development of native Android applications, including a modularized internal tool housing multiple apps and a customer-facing PayGo app. Implemented Clean Architecture with MVVM to significantly improve code maintainability and scalability across the engineering team. Built resilient offline-first features using Room database to ensure a seamless user experience in regions with low connectivity. Optimized application performance by reducing startup times, cutting crash rates by 80%, and boosting overall user retention.",
    skills: ["Kotlin", "MVVM", "Room", "Firebase"]
  },
  {
    role: "Android Engineer",
    company: "KOKO Networks",
    period: "March 2019 - June 2020",
    description: "Developed a media-focused Android application that integrated third-party SDKs to enable multimedia downloads during cooking fuel refill flows. Modernized the legacy Kokofuel Android app by migrating from Java to Kotlin and transitioning the architecture from MVP to MVVM. Improved code reliability and release confidence by writing comprehensive unit tests using MockK and resolving post-release bugs. Refactored callback-heavy asynchronous operations into Kotlin coroutines for better readability, error handling, and lifecycle awareness.",
    skills: ["Java to Kotlin", "Java", "Coroutines", "MockK", "MVVM","UI/UX" ]
  }
];

export function Experience() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box id="experience" component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: 'background.paper', position: 'relative' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Box mb={{ xs: 8, md: 12 }} textAlign={{ xs: 'left', md: 'center' }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Professional Experience
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: { md: 'auto' } }}>
              Over 8 years of building scalable, high-performance Android applications, modernizing legacy systems, and leading technical initiatives across global organizations.
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ position: 'relative', ml: { xs: 2, md: 0 } }}>
          {/* Timeline Center/Left Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: isDesktop ? '50%' : 0,
              width: '2px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              transform: isDesktop ? 'translateX(-50%)' : 'none',
              zIndex: 0,
            }}
          />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: { xs: 'flex-start', md: isEven ? 'flex-start' : 'flex-end' },
                  mb: { xs: 6, md: 8 },
                  width: '100%',
                }}
              >
                {/* Timeline Dot Node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  style={{
                    position: 'absolute',
                    left: isDesktop ? '50%' : 0,
                    top: isDesktop ? '50%' : '32px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main,
                    border: '4px solid',
                    borderColor: theme.palette.background.paper,
                    boxShadow: '0 0 0 2px rgba(255,255,255,0.1)',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                  }}
                />

                {/* Timeline Content */}
                <Box
                  sx={{
                    width: { xs: '100%', md: '45%' },
                    pl: { xs: 4, md: isEven ? 0 : 5 },
                    pr: { xs: 0, md: isEven ? 5 : 0 },
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isDesktop ? (isEven ? -60 : 60) : -40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 70, damping: 15, delay: index * 0.2 }}
                  >
                    <Card
                      sx={{
                        p: { xs: 2, md: 3 },
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
                          borderColor: 'primary.dark',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                        <Stack spacing={3}>
                          <Box>
                            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                              <WorkOutline color="primary" fontSize="small" />
                              <Typography variant="subtitle1" color="primary.light" fontWeight={600}>
                                {exp.period}
                              </Typography>
                            </Stack>
                            <Typography variant="h5" fontWeight={700} gutterBottom>
                              {exp.role}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                              {exp.company}
                            </Typography>
                          </Box>

                          <Box>
                            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, color: 'text.secondary' }}>
                              {exp.description}
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
                              {exp.skills.map((skill) => (
                                <Chip
                                  key={skill}
                                  label={skill}
                                  size="small"
                                  sx={{
                                    bgcolor: 'rgba(255,255,255,0.05)',
                                    color: 'text.primary',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                  }}
                                />
                              ))}
                            </Stack>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
