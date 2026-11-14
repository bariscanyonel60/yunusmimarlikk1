/** Merkezi motion süre / easing — tutarlı animasyon dili */
export const motion = {
  micro: 0.2,
  hover: 0.28,
  text: 0.65,
  image: 0.85,
  section: 0.95,
  ease: {
    out: 'power3.out',
    inOut: 'power2.inOut',
    soft: 'power2.out',
  },
} as const;

export const breakpoints = {
  horizontalProjects: 900,
} as const;
