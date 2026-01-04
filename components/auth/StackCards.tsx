import * as motion from 'motion/react-client';
import { useState } from 'react';
import SignUpCard from '@/components/auth/SignUpCard';
import LoginCard from '@/components/auth/LoginCard';

export default function StackCards({ mode }: { mode: boolean }) {
  const isLogin = mode === true;

  return (
    <div className="relative -mt-12 h-[420px]">
      {/* Signup card */}
      <motion.div
        animate={{
          rotateY: isLogin ? 90 : 0,
          opacity: isLogin ? 0 : 1,
          zIndex: isLogin ? 0 : 10,
        }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <SignUpCard />
      </motion.div>

      {/* Login card */}
      <motion.div
        animate={{
          rotateY: isLogin ? 0 : 90,
          opacity: isLogin ? 1 : 0,
          zIndex: isLogin ? 10 : 0,
        }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <LoginCard />
      </motion.div>
    </div>
  );
}
