import { lazy } from 'react';

export const GenerationPasswordAsync = lazy(() =>
  import('./GenerationPassword').then((module) => ({
    default: module.GenerationPassword
  })),
);
