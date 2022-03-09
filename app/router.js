import EmberRouter from '@ember/routing/router';
import config from 'tasks-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('zoho-corporation');
  this.route('file-upload');
  this.route('chat');
  this.route('bmi-calculator');
});
