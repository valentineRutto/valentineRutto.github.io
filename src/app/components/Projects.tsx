import React from 'react';
import { Box, Container, Typography, Stack, Card, CardContent, CardMedia, Button, Chip, Tab, Tabs } from '@mui/material';
import { motion } from 'motion/react';
import { OpenInNew, GitHub } from '@mui/icons-material';
import divine from '../../imports/divine.png';
import zen from '../../imports/zen.png';
import rick from '../../imports/rick.png';
import offlineCountryPicker from '../../imports/offline-country-picker.png';

type ProjectItem = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  live: string;
  github: string;
};

const apps: ProjectItem[] = [
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
  }
];

const libraries: ProjectItem[] = [
  {
    title: "Offline country picker library",
    description: "A Jetpack Compose Android library for fully offline country selection, supporting searchable country names, country codes, phone codes, currencies, languages, and capitals with customizable UI and efficient performance.",
    image: offlineCountryPicker,
    tags: ["Android library","jetpack compose","kotlin","offline first"],
    live: "https://central.sonatype.com/artifact/io.github.valentinerutto/offline-country-picker/overview",
    github: "https://github.com/valentineRutto/OfflineCountryPicker/tree/main?tab=readme-ov-file"
  }
];

const utilities: ProjectItem[] = [
  {
    title: "Zen Timer App and Chrome Extension",
    description: "An ambient Pomodoro style countdown and count up timer with relaxing sounds and customizable themes. Lets users add the focus tasks, and set work intervals , select focus music.",
    image: zen,
    tags: ["TypeScript","web audio"],
    live: "https://zen-timer-focus.vercel.app/",
    github: "https://github.com/valentineRutto/ZenTimer"
  }
];

const webApps: ProjectItem[] = [
  {
    title: "Zen Timer App and Chrome Extension",
    description: "An ambient Pomodoro style countdown and count up timer with relaxing sounds and customizable themes. Lets users add the focus tasks, and set work intervals , select focus music.",
    image: zen,
    tags: ["TypeScript","web audio"],
    live: "https://zen-timer-focus.vercel.app/",
    github: "https://github.com/valentineRutto/ZenTimer"
  }
];

const projectSections = [
  {
    title: "Apps",
    description: "Production-minded mobile apps with offline-first data, clean architecture, and polished user experiences.",
    items: apps
  },
  {
    title: "Libraries",
    description: "Reusable Android and Kotlin libraries designed to make app development faster and more reliable.",
    items: libraries
  },
  {
    title: "Utilities",
    description: "Focused tools and workflows that solve practical productivity, timing, or developer experience problems.",
    items: utilities
  },
  {
    title: "Web Apps",
    description: "Browser-based products and experiments built with modern frontend tooling.",
    items: webApps
  }
];

export function Projects() {
  const [activeTab, setActiveTab] = React.useState(0);
  const activeSection = projectSections[activeTab];

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <Box>
            <Box
              sx={{
                borderBottom: '1px solid',
                borderColor: 'divider',
                mb: 3,
                overflowX: 'auto'
              }}
            >
              <Tabs
                value={activeTab}
                onChange={(_, value) => setActiveTab(value)}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="Project categories"
                sx={{
                  minHeight: 48,
                  '& .MuiTab-root': {
                    minHeight: 48,
                    textTransform: 'none',
                    fontWeight: 700,
                    color: 'text.secondary',
                    px: { xs: 2, sm: 3 }
                  },
                  '& .Mui-selected': {
                    color: 'primary.main'
                  }
                }}
              >
                {projectSections.map((section) => (
                  <Tab key={section.title} label={section.title} />
                ))}
              </Tabs>
            </Box>

            <Box sx={{ mb: 2.5 }}>
              <Typography variant="h4" component="h3" fontWeight={700} sx={{ mb: 1 }}>
                {activeSection.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 720, lineHeight: 1.7 }}>
                {activeSection.description}
              </Typography>
            </Box>

            {activeSection.items.length > 0 ? (
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
                {activeSection.items.map((project, index) => (
                  <motion.div
                    key={project.title}
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
            ) : (
              <Card sx={{ bgcolor: 'background.paper', p: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  Coming soon.
                </Typography>
              </Card>
            )}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
