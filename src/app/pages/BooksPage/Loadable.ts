/**
 *
 * Asynchronously loads the component for BooksPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BooksPage = lazyLoad(
  () => import('./index'),
  module => module.BooksPage,
);
