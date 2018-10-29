import angular from 'angular';
import template from './template.html';

class EditController{
    constructor($location){
        this.goToUrl=function(path){
            $location.path(path);
            console.log(path);
        };
    }
}

export default angular.module('xxx.edit', [])
    .component('edit', {
        template  : template,
        controller: EditController,
        controllerAs:'editCtrl'//别名替代template的this
    })
    .name;