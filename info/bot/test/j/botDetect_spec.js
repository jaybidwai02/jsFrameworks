describe('bot', function() {
	var botDetection,
		botConfig = {};

	beforeEach(function() {
		botDetection = new trackMIS();

		jasmine.Ajax.install();

		botDetection.init({
		    tagName: 'bot',
		    dataURL: 'https://dev.30860.cluster.infoedge.com/ni/nimnj/mnj_loadLogHP.php',
		    //dataActionURL: 'https://www.naukrigulf.com/ni/nimnj/mnj_actionLogHP.php',
		    appId: '200'
		});

		spyOn(botDetection,'init').and.callThrough();

		spyOn(botDetection._testOnly_,'run').and.callThrough();
		spyOn(botDetection._testOnly_.botUtils,'setCookie').and.callThrough();
		spyOn(botDetection._testOnly_.botUtils,'getCookieValue').and.callThrough();
		spyOn(botDetection._testOnly_.botUtils,'eventAttacher').and.callThrough();
		spyOn(botDetection._testOnly_.botUtils,'hasStore').and.callThrough();
		spyOn(botDetection._testOnly_.botUtils,'hasCookies').and.callThrough();
	});

	afterEach(function() {
		jasmine.Ajax.uninstall();
	});


	describe('Bot initialization', function() {


		it('should have defined these public variable and method', function() {
			expect(botDetection.init).toBeDefined();
			//expect(botDetection.userNGObj).toBeDefined();
			expect(botDetection.totalActions).toBeDefined();
			expect(botDetection.start_focus_time).toBeDefined();
			expect(botDetection.botEventAttachForPageSubmit).toBeDefined();
		});

		it('should be toBeDefined', function() {
			expect(botDetection.userNGObj).toBeDefined();
		});

		it('botUtils should be defined', function() {
			expect(botDetection._testOnly_.botUtils).toBeDefined();
		});
	});

	describe('Method call', function() {

		it('init should havebeen called', function() {
			botDetection.init({
			    tagName: 'bot',
			    dataURL: 'https://dev.30860.cluster.infoedge.com/ni/nimnj/mnj_loadLogHP.php',
			    //dataActionURL: 'https://www.naukrigulf.com/ni/nimnj/mnj_actionLogHP.php',
			    appId: '200'
			});
			expect(botDetection.init).toHaveBeenCalled();
		});

		it('should have set botConfig to specified settings', function() {
			expect(botDetection._testOnly_.botConfig).toBeDefined();
			var botSetting = {
			    tagName: 'bot',
			    dataURL: 'https://dev.30860.cluster.infoedge.com/ni/nimnj/mnj_loadLogHP.php',
			    //dataActionURL: 'https://www.naukrigulf.com/ni/nimnj/mnj_actionLogHP.php',
			    appId: '200'
			};
			botDetection.init(botSetting);
			expect(botDetection._testOnly_.botConfig.logurl).toBe(botSetting.dataURL);
			expect(botDetection._testOnly_.botConfig.appId).toBe(botSetting.appId);
			expect(botDetection._testOnly_.botConfig.tagName).toBe(botSetting.tagName);
		});

		describe('isDefined should return true for defined variable', function() {
			it('should return true', function() {
				var test = 0;
				expect(botDetection._testOnly_.isDefined(test)).toBeTruthy();
			});
		});

		describe('botUtils methods', function() {
			
			describe('cookie methods', function() {

				beforeEach(function() {
					botDetection._testOnly_.botUtils.setCookie('name','test');
				});

				it('should set cookies', function() {
					expect(botDetection._testOnly_.botUtils.setCookie).toHaveBeenCalled();
					expect(botDetection._testOnly_.botUtils.setCookie).toHaveBeenCalledWith('name','test');
				});

				it('should getCookies', function() {
					var cookieVal = botDetection._testOnly_.botUtils.getCookieValue('name');
					expect(cookieVal).toBe('test');
				});
			});

			describe('create tag', function() {
				it('it should create element', function() {
					var ele = botDetection._testOnly_.botUtils.createNewTag('google.com');
					$('body').append('<div id="test"></div>');
					$("#test").append(ele);

					expect($("#test").children().length).toBe(1);

					$('body').empty();

				});
			});

			describe('event attacher', function() {
				var evnt;
				beforeEach(function() {
					evnt = {
						mousedown:botDetection._testOnly_.inUserActionLogger,
						mousemove:function(){

						}
					}

					spyOn(evnt,'mousedown');
					spyOn(evnt,'mousemove');
				});

				it('should attach mousedown events to element', function() {
					var test = botDetection._testOnly_.botUtils.eventAttacher(document, "click", evnt.mousedown);

					$('body').trigger('click');
					expect(evnt.mousedown).toHaveBeenCalled();
				});

				/*it('should attach mousedown events to element', function() {
					var test = botDetection._testOnly_.botUtils.eventAttacher(document, "mousemove", evnt.mousemove);

					event = $.Event('mousemove');

					// coordinates
					event.pageX = 100;
					event.pageY = 100; 

					// trigger event
					$(document).trigger(event);

					expect(evnt.mousemove).toHaveBeenCalled();
				});*/



			});

			describe('hasStore method', function() {
				it('should return 1', function() {
					var isStorePrensent = botDetection._testOnly_.botUtils.hasStore();

					expect(isStorePrensent).toBe('1');
				});
			});

			describe('hasCookies method', function() {
				it('should return 1', function() {
					var isCookiePrensent = botDetection._testOnly_.botUtils.hasCookies();

					expect(isCookiePrensent).toBe('1');
				});

				
			});

		});



		describe('event handler', function() {
			
			beforeEach(function() {		
				spyOn(botDetection._testOnly_,'inUserActionLogger').and.callThrough();
			});

			describe('botDetection._testOnly_ event handler', function() {
				it('should call inUserActionLogger handler', function() {
					var test = botDetection._testOnly_.botUtils.eventAttacher(document, "click", botDetection._testOnly_.inUserActionLogger);

					$('body').trigger('click');
					expect(botDetection._testOnly_.inUserActionLogger).toHaveBeenCalled();
				});
			});

		});

	});

	describe('XHR test', function() {

		var testResponse = {
			"status":200,
			"contentType": "text/plain",
			"responseText": "hello world"
		},
		data = {
			payload:10
		};

		var request;



		it('specify response', function() {
			var doneFn = jasmine.createSpy("success");

			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function(args) {
				if (this.readyState == this.DONE) {
					doneFn(this.responseText);
				}
			};

			xhr.open("GET", "/some/cool/url");
			xhr.send(); 

			expect(jasmine.Ajax.requests.mostRecent().url).toBe('/some/cool/url');
			expect(doneFn).not.toHaveBeenCalled();

			 jasmine.Ajax.requests.mostRecent().respondWith({
				"status":200,
				"contentType": "text/plain",
				"responseText": "hello world"
			});

			expect(doneFn).toHaveBeenCalledWith('hello world');

		});

		describe('Test botUtils ajaxCall', function() {
			it('should call botUtils.ajaxCall', function() {
				var successFun = jasmine.createSpy('success');
				botDetection._testOnly_.botConfig.logurl = "test/url";
				botDetection._testOnly_.botUtils.ajaxCall(0, successFun, data);

				request = jasmine.Ajax.requests.mostRecent();

				expect(request.url).toBe("test/url");

				request.respondWith(testResponse);
				expect(successFun).toHaveBeenCalled();
			});
		});


	});

});