import { MotionGlobalConfig } from 'motion/react';

// Jump Motion animations to their end state so visibility assertions are deterministic
MotionGlobalConfig.skipAnimations = true;
