'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeProps {
  children: ReactNode;
}
export default function FadeAnimation({ children }: FadeProps) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 1, scale: 1 }}
      viewport={{ amount: 0.1, once: true }}
      transition={{ duration: 0.8, ease: 'easeIn' }}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.section>
  );
}
