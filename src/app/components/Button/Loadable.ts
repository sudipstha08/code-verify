/**
 *
 * Asynchronously loads the component for Button
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Button = lazyLoad(
  () => import('./index'),
  module => module.Button,
);
