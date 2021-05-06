import GhostContentAPI from '@tryghost/content-api';

export const GHOST_API_URL = 'http://localhost:2368';
export const GHOST_API_KEY = 'cf127e843be0ef9e383d451ec9';
export const GHOST_API_VERSION = 'v3';

export const GHOST_API = new GhostContentAPI({
  url: GHOST_API_URL,
  key: GHOST_API_KEY,
  version: GHOST_API_VERSION
});
