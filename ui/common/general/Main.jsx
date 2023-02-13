// @ts-nocheck
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RoutePaths } from './RoutePaths';
import { Home } from '../../pages/index';
import { Projects } from '../../pages/projects/Projects';
import { NotFound } from '../../pages/notFound/NotFound';
import { About } from '../../pages/about/About';
import { ContactForm } from '../../pages/contact/ContactForm';
import { Testimony } from '../../pages/testimony/Testimony';
import { Skills } from '../../pages/skills/Skills';

export const Main = () => (
  <>
    <Routes>
      <Route path={RoutePaths.HOME} element={<Home />} />
      <Route element={<ContactForm />} path={RoutePaths.CONTACTFORM} />
       <Route element={<Projects />} path={RoutePaths.PROJECTS} />
      <Route element={<About />} path={RoutePaths.ABOUT} />
       <Route element={<Skills />} path={RoutePaths.SKILLS} />
      <Route element={<Testimony />} path={RoutePaths.TESTIMONY} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);
