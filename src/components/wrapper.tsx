'use client';

import {motion} from 'framer-motion';

export default function Wrapper({children}: {children: React.ReactNode}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{
        opacity: 1,
        y: 0,
        transition: {duration: 0.5, ease: 'easeOut', delay: 0.2},
      }}
      exit={{opacity: 0, y: 20}}
    >
      {children}
    </motion.div>
  );
}
