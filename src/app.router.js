//路由配置
routing.$inject = ['$routeProvider', '$locationProvider'];

export default function routing($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/home', {
            template: '<home></home>'
        })
        .when('/subject', {
            template: '<subject></subject>'
        })
        .when('/new',{
            template: '<new></new>'
        })
        .when('/edit',{
            template: '<edit></edit>'
        })
        .otherwise('/home');
}