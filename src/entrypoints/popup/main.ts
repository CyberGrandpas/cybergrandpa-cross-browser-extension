import '@/styles/style.scss';
import { languageUpdates, setTitle } from '@/utils/bootstrap';
import { mount } from 'svelte';
import App from './popup.svelte';

languageUpdates();
setTitle(i18n.t('extension.name') + ' ' + i18n.t('extension.subname'));

const app = mount(App, {
  target: document.getElementById('app')!,
});

export default app;
