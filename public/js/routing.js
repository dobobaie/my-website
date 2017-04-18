appRoute
	.config(function($httpProvider, $compileProvider)
	{
		//
		$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ms-appx|ms-appdata|x-wmapp0|tel|file|filesystem|http|local|data|ftp|mailto|chrome-extension):/);
		$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ms-appx|ms-appdata|x-wmapp0|tel|file|filesystem|http|local|data|ftp|mailto|chrome-extension):/);

		//
		$httpProvider.defaults.headers.common = {};
		$httpProvider.defaults.headers.post = {};
		$httpProvider.defaults.headers.put = {};
		$httpProvider.defaults.headers.patch = {};
		$httpProvider.defaults.useXDomain = true;	
	})
	.config(function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider)
	{
		$urlRouterProvider.otherwise('/app/home');

		$stateProvider
			.state('app',
			{
				url: '/app',
				abstract: true,
				resolve: {
					deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							files: [
								'./js/models/network.js',
								'./js/models/system.js',
							]
						});
					}]
				},
				views: {
					'nav': {
						templateUrl: './templates/nav.html',
					},
				}
			})
			.state('app.home',
			{
				url: '/home',
				views: {
				  'view@': {
						templateUrl: './templates/home.html',
						controller: 'HomeCtr',
						resolve: {
							loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
								return $ocLazyLoad.load({
									files: [
										'./js/controllers/home.js',
									] 
								});
							}],
						}
					}
				}
			})
		;

		$ocLazyLoadProvider.config({
			debug: false,
			events: false,
		});
	})
;