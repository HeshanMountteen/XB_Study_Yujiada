import angular from 'angular';
import template from './template.html';
//import style from './home.less';

class CampusController {
    //scope->scope.
    //or controllerAs->this
    constructor($location) {
        this.data=[
            {id:0,name:'俞文则',usedCampus:'CPU校区',description:'语文课/每周1节',creator:'机构管理员',createTime:'2018/09/29'},
            {id:1,name:'新校区改造计划Ⅰ',usedCampus:'CPU校区',description:'语文课/每周1节',creator:'机构管理员',createTime:'2018/09/29'},
            {id:2,name:'屏峰校区一期工程',usedCampus:'屏峰校区',description:'语文课/每周1节',creator:'机构管理员',createTime:'2018/09/29'},
            {id:3,name:'新校区改建计划Ⅱ',usedCampus:'CPU校区',description:'语文课/每周1节',creator:'机构管理员',createTime:'2018/09/29'},
            {id:4,name:'新校区改造计划Ⅲ',usedCampus:'CPU校区',description:'语文课/每周1节',creator:'机构管理员',createTime:'2018/09/29'},
            {id:5,name:'新校区招生计划Ⅰ',usedCampus:'CPU校区',description:'语文课/每周1节',creator:'机构管理员',createTime:'2018/09/29'},
            {id:6,name:'新校区招生计划Ⅱ',usedCampus:'CPU校区',description:'语文课/每周1节',creator:'机构管理员',createTime:'2018/09/29'},
            {id:7,name:'新校区招生计划Ⅲ',usedCampus:'CPU校区',description:'语文课/每周1节',creator:'机构管理员',createTime:'2018/09/29'},
        ];
        this.campus=['CPU校区','屏峰校区','朝晖校区','德清校区'];
        this.currentCampus = 'CPU校区';
        this.selectItem = function(item){
            this.currentCampus = item;
            console.log(item);
        };
        this.toggle=function()
        {
            console.log( this.isSelected);
        };
        this.testComponent = 'ceshizujian';
        this.isSelected = false;
        this.goToUrl=function(path){
            $location.path(path);
            console.log(path);
        };
    }
}

export default angular.module('xxx.home', [])
    .component('home', {
        template  : template,
        controller: CampusController,
        controllerAs:'campCtrl'//别名替代template的this
    })
    .name;