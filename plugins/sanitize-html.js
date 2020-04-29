import Vue from 'vue';
import sanitizeHTML from 'sanitize-html';

Vue.prototype.$sanitize = sanitizeHTML;
