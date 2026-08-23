'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// Word-by-Word Staggered Headline Animation
export function AnimatedHeading({
  text,
  className = '',
  italicWord,
}: {
  text: string;
  className?: string;
  italicWord?: string;
}) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`flex flex-wrap gap-x-[0.28em] gap-y-[0.1em] sm:gap-y-[0.15em] items-baseline ${className}`}
    >
      {words.map((word, index) => {
        const isItalic = italicWord && word.toLowerCase().includes(italicWord.toLowerCase());
        return (
          <motion.span
            key={index}
            variants={child}
            className={`inline-block ${isItalic ? 'italic text-[#9a7b4f] font-normal' : ''}`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

// Smooth Fade-Up Paragraph on Scroll
export function AnimatedParagraph({
  children,
  className = '',
  delay = 0.2,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
