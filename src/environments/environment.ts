import { environment as defaultEnvironment } from './environment.default';

export const environment= {
  ...defaultEnvironment,
  i18nDirectory: '/assets/i18n/',
  appName: 'adasrc',
  production: false,
  squidexBaseUrl: 'https://cloud.squidex.io/api',



};
