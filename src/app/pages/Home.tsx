import React from 'react';
import { Hero } from '../components/Hero';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Blog } from '../components/Blog';

export function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Blog />
    </>
  );
}
