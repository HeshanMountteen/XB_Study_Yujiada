import angular from 'angular';
import template from './template.html';
import $lang from './lang.cn';

class NewController{
    constructor($location){
        //var dialog = new Dialog($scope, $timeout);
        this.goToUrl=function(path){
            $location.path(path);
            console.log(path);
        };
        this.isSelected = false;
        this.lessonEnum=[
            {id:0,value:'请选择'},
            {id:1,value:'国内课程体系'},
            {id:2,value:'CS'},
            {id:3,value:'SE'},
            {id:4,value:'BE'},
        ];
        this.lessonIndex = 0;
        this.cag = function(enumItem){
            this.lessonIndex = enumItem.id;
            console.log(enumItem);
        };
        this.subjectNo='';
        this.cnSubjectName = '';
        this.save = () => {
            if(this.subjectNo == ''){
                alert($lang.errmsgsuCode);
            }

            if(this.cnSubjectName == ''){
                alert($lang.errmsgsuCname);
            }

            if(this.enSubjectName == '')
            {
                alert($lang.errmsgsuEname);
            }
            
        };
    }
}

export default angular.module('xxx.new', [])
    .component('new', {
        template  : template,
        controller: NewController,
        controllerAs:'newCtrl'//别名替代template的this
    })
    .name;