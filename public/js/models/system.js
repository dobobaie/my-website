angular
	.module(config.nameRoute)
	.factory('appSystem', ['$injector', '$rootScope', '$analytics', 'appNetwork', function($injector, $rootScope, $analytics, appNetwork)
	{
		var pg_url = new URL(window.location.href);
		var pg_lang = pg_url.searchParams.get("lang");

		var _engine = {
			list_ready: [],
			status: false,
			language: pg_lang || 'fr',
			data: {
				lang_json: null,
				data_json: null,
				data_complement_json: null,
				config_json: null,
			},
		};

		var initSystem = function()
		{
			var analyticsConfig = function() {
				$analytics.setUserProperties({
					userId: _engine.data.config_json.google_analytics,
				});
				ga('create', _engine.data.config_json.google_analytics, 'auto');
				ga('send', 'pageview');
			}
			var execListFunc = function() {
				for (var index in _engine.list_ready) {
					_engine.list_ready[index]();
				}
				analyticsConfig();
			}
			var getLang = function() {
				appNetwork
					.get('/assets/app/lang/data_'+_engine.language+'.json')
					.success(function(data, params) {
						_engine.data.lang_json = data;
						_engine.status = true;
						execListFunc();
					})
					.error(function(data, params) {
						// 
					})
				;
			}
			var getDataComplement = function() {
				appNetwork
					.get('/assets/app/complement/data_'+_engine.language+'.json')
					.success(function(data, params) {
						_engine.data.data_complement_json = data;
						getLang();
					})
					.error(function(data, params) {
						if (_engine.language !== "en") {
							_engine.language = "en";
							initSystem();
						}
					})
				;
			}
			var getConfig = function() {
				appNetwork
					.get('/assets/app/config.json')
					.success(function(data, params) {
						_engine.data.config_json = data;
						getDataComplement();
					})
					.error(function(data, params) {
						// 
					})
				;
			}
			getConfig();
		};

		var setLang = function(lang) {
			_engine.language = lang;
			console.log(lang);
			initSystem();
		}

		var getLang = function() {
			return _engine.language;
		}

		var ready = function(func)
		{
			if (_engine.status == true) {
				func();
				return ;
			}
			_engine.list_ready.push(func);
		}

		var get = function(name)
		{
			if (typeof(_engine.data[name]) != 'undefined') {
				return _engine.data[name];
			}

			//
			try
			{
				if (name == null || typeof(name) != 'string') {
					throw ('appSystem => get => invalid parameter');
				}
				return $injector.get(name);
			} catch (e) {
				console.log(e+' => {'+name+'}');
				return null;
			}
		}

		initSystem();

		return {
			get:get,
			ready:ready,
			getLang: getLang,
			setLang: setLang
		}
	}])
;