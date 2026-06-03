import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Tab,
  Tabs
} from '@mui/material';
import { motion } from 'motion/react';
import { ArrowForward } from '@mui/icons-material';
import myLogo from '../../imports/mylogo.jpeg';

type ContentItem = {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  url: string;
  cta?: string;
};

const articles: ContentItem[] = [
  {
    title: "Effective Search in RoomDB: FTS vs LIKE",
    excerpt: "Comparing the performance and use cases of Full-Text Search (FTS) and LIKE queries in RoomDB for Android development.",
    date: "2026",
    image: myLogo,
    category: "RoomDB, Kotlin, FTS,LIKE ,Android",
    url: "https://medium.com/p/f2225f1d528b"
  },
  {
    title: "Seamless Camera and Media Access on Android 14+ and Legacy Versions",
    excerpt: "This post provides a code overview for capturing an image, saving it to storage, and retrieving it on devices running Android 13+, 14+ as well as older versions.",
    date: "2025",
    image: myLogo,
    category: "Android, Kotlin,Media,Camera",
    url: "https://medium.com/proandroiddev/seamless-camera-and-media-access-on-android-14-and-legacy-versions-543d86ac5939"
  },
  {
    title: "Measure Code Execution Time in Android",
    excerpt: "Learn how to measure the execution time of code blocks in Android using SystemClock, Logcat, and benchmarking libraries for performance optimization.",
    date: "2024",
    image: myLogo,
    category: "Android,Kotlin, Performance",
    url: "https://medium.com/@valentinerutto/measure-code-execution-time-in-kotlin-0d308a246616"
  }
];

const talksAndSlides: ContentItem[] = [
  {
    title: "Android Talks Through the Years",
    excerpt: "Browse my Speaker Deck collection featuring Android talks and slide decks from events and meetups through the years, covering design patterns, architecture, security, SOLID principles, performance, and modern Android development practices.",
    date: "Speaker Deck",
    image: myLogo,
    category: "Android, Talks, Slides",
    url: "https://speakerdeck.com/valentinerutto",
    cta: "View Decks"
  }
];

const videosAndPodcasts: ContentItem[] = [];

const contentSections = [
  {
    title: "Articles",
    description: "Written tutorials and technical notes on Android, Kotlin, performance, and architecture.",
    items: articles
  },
  {
    title: "Talks / Slides",
    description: "Presentation decks and talks from events, meetups, and community sessions.",
    items: talksAndSlides
  },
  {
    title: "Videos / Podcasts",
    description: "Recorded conversations, video sessions, and podcast appearances.",
    items: videosAndPodcasts
  }
];

export function Blog() {
  const [activeTab, setActiveTab] = React.useState(0);
  const activeSection = contentSections[activeTab];

  return (
    <Box id="blog" component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: 'rgba(255,255,255,0.01)' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Box mb={8}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Latest Insights
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600 }}>
              Thoughts, tutorials, and updates on mobile development, architecture, and technology.
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
                aria-label="Content sections"
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
                {contentSections.map((section) => (
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
                {activeSection.items.map((post, index) => (
                  <motion.div
                    key={post.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <Card sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: 'background.paper',
                      transition: 'transform 0.3s ease, border-color 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        borderColor: 'primary.main',
                        '& .blog-image': {
                          transform: 'scale(1.05)'
                        }
                      }
                    }}>
                      <Box sx={{ overflow: 'hidden', height: 200, position: 'relative' }}>
                        <CardMedia
                          className="blog-image"
                          component="img"
                          height="200"
                          image={post.image}
                          alt={post.title}
                          sx={{
                            height: 200,
                            objectFit: 'contain',
                            objectPosition: 'center',
                            bgcolor: 'white',
                            p: 3,
                            transition: 'transform 0.5s ease'
                          }}
                        />
                        <Chip
                          label={post.category}
                          color="primary"
                          size="small"
                          sx={{ position: 'absolute', top: 16, right: 16, fontWeight: 600 }}
                        />
                      </Box>
                      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                        <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block', fontWeight: 600 }}>
                          {post.date}
                        </Typography>
                        <Typography variant="h5" component="h3" gutterBottom fontWeight={700}>
                          {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1, lineHeight: 1.6 }}>
                          {post.excerpt}
                        </Typography>
                        <Button
                          variant="text"
                          component={post.url ? 'a' : 'button'}
                          href={post.url}
                          target={post.url ? '_blank' : undefined}
                          rel={post.url ? 'noopener noreferrer' : undefined}
                          disabled={!post.url}
                          endIcon={<ArrowForward />}
                          sx={{ alignSelf: 'flex-start', px: 0, '&:hover': { bgcolor: 'transparent', color: 'primary.light' } }}
                        >
                          {post.cta ?? 'Read'}
                        </Button>
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
