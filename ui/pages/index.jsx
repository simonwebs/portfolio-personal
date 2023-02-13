// @ts-nocheck
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BackToTopButton } from '../components/backToTopButton/BackToTopButton';
import { ContactForm } from './contact/ContactForm';
import { Testimony } from './testimony/Testimony';
import { Hero } from './hero/Hero';
import { Skills } from './skills/Skills';
import { Projects } from './projects/Projects';

export const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (

    <>
      <main id='home' className='dark:!bg-none'>
        <Hero />
        <Skills />
        <Projects />
        <Testimony />
        <ContactForm />
        <BackToTopButton />
      </main>
    </>
  );
};
