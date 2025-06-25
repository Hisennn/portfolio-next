'use client';

import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const texts = {
  pt: {
    title: 'Sobre',
    about: `Sou estudante de <strong>frontend</strong> e <strong>desenvolvimento web</strong>, atualmente aprendendo JavaScript e Next.js. Curso <strong>Análise e Desenvolvimento de Sistemas</strong> e estou aprendendo como criar e estruturar sites e aplicações.<br />Também pretendo me aprofundar em Ruby on Rails e Node.js para criar projetos mais completos.`
  },
  en: {
    title: 'About',
    about: `I'm a <strong>frontend</strong> and <strong>web development</strong> student, currently learning JavaScript and Next.js. Studying <strong>Systems Analysis and Development</strong> and getting familiar with how websites and applications are built and structured.<br />I also plan to deepen my knowledge in Ruby on Rails and Node.js to create more complete projects.`
  }
} as const;

type Lang = keyof typeof texts;

export default function About() {
  const { language } = useContext(LanguageContext);
  const lang = (['pt', 'en'].includes(language) ? language : 'pt') as Lang;
  return (
    <div className="flex flex-col gap-2.5 pb-5 border-b border-[color:var(--border-color-extra)] mb-5">
      <div className="flex gap-2 items-center mb-2">
        <h2 className="text-2xl xl:text-3xl font-semibold text-[color:var(--text-title)]">{texts[lang].title}</h2>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#7d8590" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      </div>
      <p 
        className="text-base lg:text-lg leading-snug text-[color:var(--text-primary)]" 
        dangerouslySetInnerHTML={{ __html: texts[lang].about }} 
      />
    </div>
  );
} 