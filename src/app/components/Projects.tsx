import React from 'react';
import { Box, Container, Typography, Stack, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion } from 'motion/react';
import { OpenInNew, GitHub } from '@mui/icons-material';
import divine from '../../imports/divine.png';


const projects = [
  {
    title: "Divine Reflection APP",
    description: "An AI-powered emotional Bible companion that suggests scripture and reflections based on how you feel. Features include sentiment analysis, personalized devotionals with prayer, Full bible , Bible verse recommendations, and notes sections.",
    image: divine,
    tags: ["Android", "Kotlin", "AI [Hugging Face]", "Jetpack Compose","Offline-First with RoomDB","FTS Search"],
    live: "#",
    github: "https://github.com/valentineRutto/DivineDataGPT"
  },
  {
    title: "Global Connect Platform",
    description: "A cross-platform social networking app designed to handle 1M+ DAU. Features include WebRTC video calls, instant messaging, and AI-driven content moderation.",
    image: "https://images.unsplash.com/photo-1663427929917-333d88949f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBjb25uZWN0aXZpdHklMjBuZXR3b3JrJTIwZWFydGh8ZW58MXx8fHwxNzc4NzY3MjM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Flutter", "Dart", "Firebase", "WebRTC"],
    live: "#",
    github: "#"
  },
  {
    title: "HealthTrack Pro UI",
    description: "A modern health and fitness tracking UI. Focused on sleek animations, dark mode capabilities, and seamless user experiences on iOS and Android.",
    image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMHNjcmVlbiUyMG1vZGVybnxlbnwxfHx8fDE3Nzg3NjcyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Swift", "Kotlin", "UI/UX"],
    live: "#",
    github: "#"
  }
];

export function Projects() {
  return (
    <Box id="projects" component="section" sx={{ py: { xs: 10, md: 16 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Box mb={8}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Featured Projects
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600 }}>
              A selection of my recent mobile development work showcasing technical depth and modern UI/UX principles.
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                bgcolor: 'rgba(255,255,255,0.02)',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  borderColor: 'primary.main',
                  '& .project-image': {
                    transform: 'scale(1.05)'
                  }
                }
              }}>
                <Box sx={{ overflow: 'hidden', height: 240 }}>
                  <CardMedia
                    className="project-image"
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      height: 240,
                      objectFit: 'contain',
                      objectPosition: 'center',
                      bgcolor: 'rgba(255,255,255,0.04)',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight={700}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1, lineHeight: 1.6 }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
                    {project.tags.map(tag => (
                      <Chip key={tag} label={tag} size="small" variant="outlined" sx={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                    ))}
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Button size="small" startIcon={<OpenInNew />} href={project.live} target="_blank">
                      Live App
                    </Button>
                    <Button size="small" color="inherit" startIcon={<GitHub />} href={project.github} target="_blank">
                      Source
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
