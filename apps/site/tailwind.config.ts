import { baseTailwindConfig } from '@bpvs/tailwind';
import { createGlobPatternsForDependencies } from '@nrwl/next/tailwind';
import { join } from 'path';
import type { Config } from 'tailwindcss';

export default {
  presets: [baseTailwindConfig],
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
} satisfies Config;
