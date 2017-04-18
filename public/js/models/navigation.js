angular
	.module(config.nameRoute)
	.factory('appNavigation', ['$location', '$state', function($location, $state)
	{
		var page = function(view, params)
		{
			$state.transitionTo(view, params, { 
				reload: false, inherit: false, notify: true
			});
		}

		var current = function()
		{
			return $state.current.name;
		}

		return {
			page:page,
			current: current,
		}
	}])
;