angular
	.module(config.nameRoute)
	.controller('HomeCtr', ['$scope', '$timeout', '$sce', '$filter', 'appSystem', function ($scope, $timeout, $sce, $filter, appSystem) {
		$scope.setLang = function(lang) {
			appSystem.setLang(lang);
		};
		$scope.formatDate = function(date) {
			var d = new Date(date);
			const options = { year: 'numeric', month: 'short' };
			return d.toLocaleDateString(appSystem.getLang(), options);
		}
		appSystem.ready(function()
		{
			var lang_json = appSystem.get('lang_json');
			var data_complement_json = appSystem.get('data_complement_json');

			$scope.infos_lang = lang_json;
			$scope.infos_cv = {
				pictureUrl: data_complement_json.pictureUrl,
				lastName: data_complement_json.last_name,
				firstName: data_complement_json.first_name,
				headline: data_complement_json.headline,
				phone: data_complement_json.phone,
				locality: data_complement_json.locality,
				summary: data_complement_json.summary,
				mail: data_complement_json.mail,
				birthday: (b => $filter('date')((new Date()), 'yyyy') - $filter('date')(new Date(b), 'yyyy'))(data_complement_json.birthday),
				social_network: data_complement_json.social_network,
				experience: data_complement_json.experience,
				education: data_complement_json.education,
				skills: data_complement_json.skills,
				skills_pictures: data_complement_json.skills_pictures,
				language: data_complement_json.language,
				interest: data_complement_json.interest,
			};
			$scope.getColorItem = function(id)
			{
				var list_color = [
					'green',
					'red',
					'yellow',
					'blue',
					'orange',
				];
				return (id == 0 ? '' : list_color[(id - 1) % list_color.length]);
			}
			$scope.safeHtml = function(text)
			{
				return $sce.trustAsHtml(text);
			}

			// $timeout(function() {
			// 	for (var index in data_complement_json.skills) {
			// 		for (var index2 in data_complement_json.skills[index].list) {
			// 			var titleElem = $('#'+data_complement_json.skills[index].category+'_'+index2+'>.title.label');
			// 			var heightTitle = titleElem.css('height').substring(0, titleElem.css('height').length - 2);
			// 			$('#'+data_complement_json.skills[index].category+'_'+index2).progress({
			// 				percent: data_complement_json.skills[index].list[index2].advancement,
			// 			}).css({marginTop: heightTitle+'px'});
			// 			titleElem.css({top: '-'+(parseFloat(heightTitle) + 3)+'px'});
			// 		}
			// 	}
			// 	resizeElementFixed();
			// });
			
			// alert(navigator.userAgent);
			var a = document.createElement('div');
			a.innerText = navigator.userAgent;
			document.querySelector('.menu').appendChild(a);

			if (navigator.userAgent.indexOf('HeadlessChrome') != -1) {
				$("body").css({ zoom: "25%" });
				
				$(".mobile").remvove();
				$(".tablet").remvove();
				$(".computer").removeClass("computer");


				$('nav').hide();
				$('.computer.only').hide();
				$('.sixteen.wide.mobile').each(function(index, value) {
					$(value).attr('class', $(value).attr('class').substring(('sixteen wide mobile').length));
				});
				$('div[ui-view="view"]').css({'padding' : '0 50px'});
				$('.phantomjs').removeClass('hide tablet only');
				$('.left.content.phantomjs').css({'width' : '300px'});
				$('.right.content.phantomjs').css({'width' : '450px', 'text-align' : 'justify'});

			}
		});
	}])
;
