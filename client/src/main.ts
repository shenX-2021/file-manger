import { createApp } from 'vue';
import 'element-plus/theme-chalk/src/message.scss';
import 'element-plus/theme-chalk/src/message-box.scss';
import 'element-plus/theme-chalk/src/overlay.scss';
import '@src/css/index.scss';
import '@src/css/global.scss';
import App from './App.vue';
import { router } from '@src/router';

createApp(App).use(router).mount('#app');
