import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, Chip, Button, Stack } from '@mui/material';
import { motion } from 'motion/react';
import { ArrowForward } from '@mui/icons-material';

const blogPosts = [
  {
    title: "The Future of Mobile Architecture in 2026",
    excerpt: "Exploring the evolution from clean architecture to modern reactive patterns in iOS and Android development.",
    date: "May 10, 2026",
    image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwYmxvZ3xlbnwxfHx8fDE3Nzg5NTM3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Architecture",
    url: "https://medium.com/p/f2225f1d528b"
  },
  {
    title: "Optimizing React Native Performance",
    excerpt: "A deep dive into reducing bundle size, utilizing the new architecture, and maximizing frame rates.",
    date: "April 28, 2026",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwc2NyZWVufGVufDF8fHx8MTc3ODk1Mzc5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "React Native",
    url: "https://medium.com/proandroiddev/seamless-camera-and-media-access-on-android-14-and-legacy-versions-543d86ac5939"
  },
  {
    title: "Designing for Accessibility First",
    excerpt: "Why starting with accessibility guidelines improves the UX for everyone using your mobile application.",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3Nzg4NzYxMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "UI/UX"
  }
];

export function Blog() {
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

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
          {blogPosts.map((post, index) => (
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
                    sx={{ transition: 'transform 0.5s ease' }}
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
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
