angular
	.module(config.nameRoute)
	.controller('HomeCtr', ['$scope', '$timeout', '$sce', '$filter', 'appSystem', function ($scope, $timeout, $sce, $filter, appSystem) {
		appSystem.ready(function ()
		{
			var lang_json = appSystem.get('lang_json');
			var data_json = appSystem.get('data_json');
			var data_complement_json = appSystem.get('data_complement_json');

			$scope.infos_lang = lang_json;
			$scope.infos_cv = {
				pictureUrl: data_complement_json.pictureUrl,
				lastName: data_json.lastName,
				firstName: data_json.firstName,
				headline: data_json.headline,
				birthday: $filter('date')((new Date()), 'yyyy') - $filter('date')(data_complement_json.birthday, 'yyyy'),
				experience: data_complement_json.experience,
				education: data_complement_json.education,
				skills: data_complement_json.skills,
				language: data_complement_json.language,
				interest: data_complement_json.interest,
			};
			$scope.getColorItem = function(id)
			{
				var list_color = [
					'red',
					'blue',
					'green',
					'yellow',
					'orange',
				];
				return (id == 0 ? '' : list_color[id - 1]);
			}
			$scope.safeHtml = function(text)
			{
				return $sce.trustAsHtml(text);
			}

			$timeout(function() {
				for (var index in data_complement_json.skills) {
					for (var index2 in data_complement_json.skills[index].list) {
						var titleElem = $('#'+data_complement_json.skills[index].category+'_'+index2+'>.title.label');
						var heightTitle = titleElem.css('height').substring(0, titleElem.css('height').length - 2);
						$('#'+data_complement_json.skills[index].category+'_'+index2).progress({
							percent: data_complement_json.skills[index].list[index2].advancement,
						}).css({marginTop: heightTitle+'px'});
						titleElem.css({top: '-'+(parseFloat(heightTitle) + 3)+'px'});
					}
				}
			});
			
			if (navigator.userAgent.indexOf('PhantomJS') != -1) {
				$('nav').hide();
				$('.computer.only').hide();
				$('.sixteen.wide.mobile').each(function(index, value) {
					$(value).attr('class', $(value).attr('class').substring(('sixteen wide mobile').length));
				});
				$('div[ui-view="view"]').css({'padding' : '0 50px'});
			}

			resizeElementFixed();
		
			console.log('Good', data_json, data_complement_json, lang_json);
		});
	}])
;