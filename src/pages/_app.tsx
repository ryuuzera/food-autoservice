import '@/styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/transition.css';

const Transition = ({ children }: any) => {
  const { asPath } = useRouter();
  const variants = {
    inactive: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    in: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    out: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <div className='effect-2'>
      <AnimatePresence initial={false} mode='wait'>
        <motion.div key={asPath} variants={variants} initial='in' animate='inactive' exit='out'>
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Transition>
      <Component {...pageProps} />
    </Transition>
  );
}
