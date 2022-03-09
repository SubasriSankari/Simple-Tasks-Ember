import Controller from '@ember/controller';
import {action} from '@ember/object';

export default class ApplicationController extends Controller {
    hideMe = false;

    @action
    view(){
        this.toggleProperty('hideMe');
    }
}
