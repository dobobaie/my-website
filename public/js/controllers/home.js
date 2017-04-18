angular
	.module(config.nameRoute)
	.controller('HomeCtr', ['$scope', '$timeout', '$sce', 'appSystem', function ($scope, $timeout, $sce, appSystem) {
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
				birthday: data_complement_json.birthday,
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

			resizeElementFixed();
		
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
			

			console.log('Good', data_json, data_complement_json, lang_json);


		});
	}])
;