import angular from 'angular';
import template from './template.html';
import './subject.less';

class SubjectController {
    constructor( $location) {
        this.name = 'Subject';
        this.color = 'red';

        //this.currentStatus='启用中';//下拉框现有状态/表格显示数据类型
        //这个对于枚举参数的改动，我不清楚是优化了还是复杂了？
        this.enableStatus = 0;
        this.isSelected = false;//下拉框是否获取焦点
        this.statusEnum=[{id:0,value:'启用中'},{id:1,value:'未启用'}];//启用状态下拉框数组
        this.cag=function(enumItem){//选择启用状态函数
            this.enableStatus = enumItem.id;
            console.log(enumItem);
        };
        this.editStatus = false;//编辑状态，用于呼出编辑页
        //路由跳转函数
        this.goToUrl=function(path){
            $location.path(path);
            console.log(path);
        };

        //科目数组
        this.subjects=[
            {id:'SE120n',cnName:'需求工程',enName:'Requirement Engineering',creator:'Johan',createTime:'2018/09/29'},
            {id:'CS210n',cnName:'计算机视觉',enName:'OpenCV',creator:'李飞飞',createTime:'2018/09/29'},
            {id:'CS110n',cnName:'神经网络',enName:'XXX',creator:'李飞飞',createTime:'2018/09/29'},
            {id:'BE210n',cnName:'机器学习',enName:'Machine Learning',creator:'LIFEIFEI',createTime:'2018/09/29'},
            {id:'CS210n',cnName:'深度学习',enName:'Deep Learning',creator:'LIFEIFEI',createTime:'2018/09/29'}
        ];

        //科目编辑--呼出编辑页
        this.editSubject=function(subject){
            console.log(subject);
            this.editStatus = true;
        };
        // 动态加载
        // require.ensure(['./module-a'], function(require) {
        //     var a = require('./module-a');
        //     a();
        // });
    }
}

export default angular.module('xxx.subject', [])
    .component('subject', {
        template    : template,
        controller  : SubjectController,
        controllerAs: 'subjectCtrl'
    })
    .name;