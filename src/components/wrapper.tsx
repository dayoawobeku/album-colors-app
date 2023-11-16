'use client';

import {motion} from 'framer-motion';

export default function Wrapper({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
          delay: 0.2,
        },
      }}
      exit={{
        opacity: 0,
        y: 20,
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
