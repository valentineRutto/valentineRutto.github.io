import React from 'react';
import { Box, Container, Typography, Stack, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion } from 'motion/react';
import { OpenInNew, GitHub } from '@mui/icons-material';
import divine from '../../imports/divine.png';
import zen from '../../imports/zen.png';
import rick from '../../imports/rick.png';


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
    title: "Rick and Morty Location Explorer",
    description: "A cross-platform  app consuming the Rick and Morty API to display locations, characters, and episodes. Built with Flutter, it features a clean UI, infinite scrolling, and detailed character profiles.",
    image: rick,
    tags: ["Flutter", "Dart", "Offline-first","Responsive UI","Rest API","clean architecture"],
    live: "#",
    github: "https://github.com/valentineRutto/RickandMortyLocationExplorer"
  },
  {
    title: "Zen Timer App",
    description: "An ambient Pomodoro style countdown and count up timer with relaxing sounds and customizable themes. Lets users add the focus tasks, and set work intervals , select focus music.",
    image: zen,
    tags: ["TypeScript", "VibeCoded","Gemini", "AI"],
    live: "https://zen-timer-focus.vercel.app/",
    github: "https://github.com/valentineRutto/ZenTimer"
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
