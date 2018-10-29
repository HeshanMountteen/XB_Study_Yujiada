
/**
 * 模块的语言包，key建议用正常的变量名，而不是用数字等
 * 页面上的文案全部替换成绑定变量
 * 不同语言包相同字段的key要一样
 * 建议不要在语言包里加别的功能
 */

let $lang = {
    pleaseInput: '请输入科目编号/中文名称/英文名称',
    newSubjectType: '新建科目',
    suNum: "编号",
    suCName: "中文名称",
    suEName: "英文名称",
    createBy: "创建人",
    createAt: "创建时间",

    suCode: '科目编号',
    suDescription: '描述',

    save: '保存',
    return: '返回',

    errmsgsuCode: '请输入科目编号！',
    errmsgsuCname: '请输入中文名称！',
    errmsgsuEname: '请输入英文名称！',

    success: '操作成功！',

    editbtn: '编辑',

    status: '状态',
    disable: '未启用',
    enable: '启用中',

    disableConfirm:'禁用后科目将不能使用，确定禁用该科目？',
    enableConfirm:'确定启用该科目？',

    sure:'确定',
    cancel:'取消',

    教学设置:'教学设置',

    leaveSure:'当前操作将离开该页面，确定离开吗？',
    remindConfirm:'确认离开',
    remindCancel: '继续编辑',
    subjecttypelist:'科目',
    subjecttypeedit:'编辑科目',
    subjecttypenew:'新建科目',
    subjecttypedetail:'科目详情',
    '启用中':'启用中',
    '未启用':'未启用',
    '禁用':'禁用',
    '启用':'启用',
    '禁用成功':'禁用成功！',
    '启用成功':'启用成功！',
    "课程体系": "课程体系",
    "请认真选择":"课程体系选择后，将不可修改，请认真选择"
}
export default $lang
