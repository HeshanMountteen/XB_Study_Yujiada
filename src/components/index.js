import Home from './home';
import Subject from './subject';
import New from './new-subject';
import Edit from './edit-subject';
import angular from 'angular';

export default angular.module('xxx.components', [
    Home,
    Subject,
    New,
    Edit
]).name;