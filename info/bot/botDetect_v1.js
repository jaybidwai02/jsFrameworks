function trackMIS(paramsToTrack, path) {

    var _this                   = this;
    var path                    =  window.location.href;
    var botConfig               = {};

    //get domain from logger and remove hard coded
    var domain                  = isDefined(paramsToTrack) ? paramsToTrack.domain : "https://www.naukrigulf.com", //can be removed
        url                     = isDefined(paramsToTrack) ? paramsToTrack.tURLS : "",
        //logurl                  = paramsToTrack.logURLS,
        divToAttach             = isDefined(paramsToTrack) ? paramsToTrack.divToAttach : [],
        eventsNamesToAttach     = isDefined(paramsToTrack) ? paramsToTrack.eventsNamesToAttach : [],
        eventsElementsToAttach  = isDefined(paramsToTrack) ? paramsToTrack.eventsElementsToAttach : [],//chk with upasana
        eventsIdsToAttach       = isDefined(paramsToTrack) ? paramsToTrack.eventsIdsToAttach : [],
        eventsTagsToAttach      = isDefined(paramsToTrack) ? paramsToTrack.eventsTagsToAttach : [],
        eventsToAttach          = isDefined(paramsToTrack) ? paramsToTrack.eventsToAttach : [],
        pageSet                 = isDefined(paramsToTrack) ? paramsToTrack.currentPageSet : {},
        pathSPA                 = isDefined(paramsToTrack) ? ( isDefined(paramsToTrack.spa) ? path.substring(0, path.indexOf('?') ) : "" ) : "",
        spaFlag                 = isDefined(paramsToTrack) ? ( isDefined(paramsToTrack.spa) ? paramsToTrack.spa : false ) : false,
        pageType                = isDefined(paramsToTrack) ? paramsToTrack.pageType : 'page',

        currentURL              = null,
        addedListeners          = {},
        lastEventType           = "",
        lX                      = -1,
        lY                      = -1,
        disp                    = -1,
        tabCount                = 0,
        potentialTarget         = "null",
        last_user_interaction   = undefined,
        href_movement           = undefined,
        focussedTarget          = null,
        xhrDataArray            = [],
        bufferTimeout           = null,
        eventChunk              = 0;

    //var actStr not in use
    // actStr                  = null,
    var motion_reported         = 0,
        last_id                 = null,
        first_move_report       = false,
        first_keyboard_hit      = false,
        max_action_reported     = {
            'form' : 5,
            'page' : 10
        },
        log_first_action        = true,
        
        deviceFingerPrint;

        //public var
        _this.userNGObj;
        _this.totalActions      = {};
        _this.start_focus_time  = new Date();

    _this.init = function(params){
        botConfig.logurl    = params.dataURL;
        botConfig.appId     = params.appId;
        botConfig.tagName   = params.tagName;

        run();
    }


    function isDefined(data){
        if(typeof data != "undefined"){
            return true;
        }else{
            return false;
        }
    }

    function ngUser() {
        var storePresence   = "",
            cookiePresence  = "",
            presenceOther   = "0",
            obj,
            isTouch         = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));

        storePresence       = botUtils.hasStore();
        cookiePresence      = botUtils.hasCookies();       
        presenceOther       = botUtils.knownsFinder();  

        this.loadInit = function() {
            currentURL      = location.href;
            storePresence   = botUtils.hasStore();
            cookiePresence  = botUtils.hasCookies();

            obj = storePresence + "-" + cookiePresence + "-" + presenceOther + "-" + (isTouch ? 1 : 0);
        };

        this.postCall = function(act, action1, tm1, tm2, name, tm, keyPressed, pushSpecialEventName, trustType, mouseEventType, clickedPixel) {

            action1 = action1 || "null";
            name = name || "null";
            tm1 = tm1 || 0;
            tm2 = tm2 || 0;
            tm = ( tm ? tm.toISOString() : tm) || 0;
            trustType = trustType || false;
            keyPressed = keyPressed || "null";
            pushSpecialEventName = pushSpecialEventName || "null";
			mouseEventType = mouseEventType || null;
                                   
            function dataParams(fe){
                var actionData = {                   
                   key:(keyPressed != 'null'  ? keyPressed : -1),
                   fe: log_first_action ? true : false,
                   tru:trustType,
                   mmType:mouseEventType
                };

                if(typeof action1 != "object"){
                   actionData["type"] = action1
                }else{
                    for(var i in action1){
                        actionData[i] = action1[i]
                    }
                }

                var params = {
                    cUrl: window.location.href,
                    logType: "03",
                    act: actionData,
                    dtime: (tm1 - tm2) / 1000,
                    jt: tm,
                    pgN: botUtils.getNxPgSet(),
                    appId:  botConfig.appId,
                    tagName:  botConfig.tagName,
                    dfp: deviceFingerPrint,
                }

                   return params;
            }

            switch (act) {

                case "load":

                    var url = {
                       jsid: botUtils.getCookieValue("NGSessionId"),
                       logType: "02",
                       cUrl : window.location.href,
                       cap : obj,
                       ua : navigator.userAgent,
                       pgN : botUtils.getNxPgSet(),
                       appId :  botConfig.appId,
                       tagName :  botConfig.tagName,
                       dfp : deviceFingerPrint,
                    }
                    xhrDataArray.push(url);


                    botUtils.ajaxCall(0, function(){
                        obj = null;
                        xhrDataArray = [];
                    }, xhrDataArray);

                    break;

                case "move":
                    
                    if (name != "null" && name == last_id && pageType == 'form')
                        return;

                    var url = {
                        jsid: botUtils.getCookieValue("NGSessionId"),
                        ec: motion_reported,
                        loc: clickedPixel
                    }
                    var commonParams = dataParams();
                    for(var i in commonParams){
                        url[i] = commonParams[i]
                    }

                    xhrDataArray.push(url);

                    last_id = name;

                    botUtils.createBuffer(1, function(){
                        lX = -1, lY = -1, disp = -1, tabCount = 0, potentialTarget = "null", _this.start_focus_time = last_user_interaction;
                        href_movement = undefined, motion_reported = motion_reported + 1;
                    }, xhrDataArray);

                    log_first_action = false;

                    break;

                case "m1":
                    var url = {
                        jsid: botUtils.getCookieValue("NGSessionId")
                    }
                    var commonParams = dataParams(1);
                    for(var i in commonParams){
                        url[i] = commonParams[i]
                    }
                    xhrDataArray.push(url);

                    log_first_action = false;

                    botUtils.ajaxCall(1, function(){
                        _this.start_focus_time = last_user_interaction;
                        xhrDataArray = [];
                    }, xhrDataArray);

                    break;

                case "spl":

                    var url = {
                        jsid: botUtils.getCookieValue("NGSessionId"),
                        tagId: pushSpecialEventName,
                        counts: _this.totalActions[pushSpecialEventName]
                    }
                    var commonParams = dataParams();
                    for(var i in commonParams){
                        url[i] = commonParams[i]
                    }
                    xhrDataArray.push(url);

                     log_first_action = false;

                    botUtils.createBuffer(1, function(){
                        motion_reported = 0; 
                        _this.start_focus_time = last_user_interaction;
                    }, xhrDataArray);

                    break;
            }
        }

    }

    function inUserActionLogger(oevent) {
        if (!oevent)
            oevent = window.event;
        evntSrc = (oevent.target || oevent.srcElement);
        var trust = 2;
        if ( typeof oevent.isTrusted != "undefined" ) {
            trust = (oevent.isTrusted);
        }
        potentialTarget = oevent.type;
        var char = oevent.which || oevent.keyCode;
        lastEventType = "";
        var tagName = evntSrc.nodeName;

        var tm = (Date.now() / 1000) || 0;
        if (evntSrc.getBoundingClientRect) {
            var rect = evntSrc.getBoundingClientRect(),
                vWidth = window.innerWidth || document.documentElement.clientWidth,
                vHeight = window.innerHeight || document.documentElement.clientHeight,
                efp = function(x, y) { // j bot : not in use
                    return document.elementFromPoint(x, y)
                };

            // Return false if it's not in the viewport
            if (rect.right < 0 || rect.bottom < 0 ||
                rect.left > vWidth || rect.top > vHeight)
                r = 0;
            else
                r = 1;
        } else
            r = 2;


        if (oevent != undefined && oevent.type.indexOf("keydown") !== -1) {

            if (evntSrc.tabIndex != undefined && evntSrc.tabIndex == -1)
                tabCount = 0;

            tabCount = tabCount + 1;
        }

        if (first_keyboard_hit == false && potentialTarget.indexOf('mouse') == -1 /*This can also be a touch event*/) {
            console.log('first move');
            first_keyboard_hit = true;
            tabCount = 0;
            last_user_interaction = new Date();
            _this.userNGObj.postCall("m1", potentialTarget, last_user_interaction, _this.start_focus_time, tagName, last_user_interaction, char, null, trust, null, null);
            return;
        }

        var clickX = -1;
        var clickY = -1;
        if(potentialTarget.indexOf('mouse') != -1){
            clickX = (oevent.pageX) || (oevent.clientX + document.documentElement.scrollLeft);
            clickY = (oevent.pageY) || (oevent.clientY + document.documentElement.scrollTop);
        }
        var payload = {
            disp:'dsp',
            tabCount:'tc',
            view: (r ? true : false),
            type:potentialTarget
        };

        if (motion_reported < max_action_reported[pageType]) {
            last_user_interaction = new Date();
            console.log('in move');
            _this.userNGObj.postCall("move", payload, last_user_interaction, _this.start_focus_time, tagName, last_user_interaction, char, null, trust, null, ''+clickX+'.'+clickY);
        }
    }

	var clX = 0, clY = 0; 
    function handleMouseMove(oevent) {
       // log_first_action = false;

        var dot, eventDoc, doc, body, pageX, pageY;
        if (!oevent)
            oevent = window.oevent;
        var trust = 2, eventType = 'mousemove';
        if ("undefined" != typeof oevent.isTrusted) {
            trust = (oevent.isTrusted);
        }
        focussedTarget = document.activeElement;
		
        if ((lX == -1) && (lY == -1)) {

            lX = (oevent.pageX) || (oevent.clientX + document.documentElement.scrollLeft);
            lY = (oevent.pageY) || (oevent.clientY + document.documentElement.scrollTop);
        } else {
            var e = (oevent.pageX) || (oevent.clientX + document.documentElement.scrollLeft);
            var f = (oevent.pageY) || (oevent.clientY + document.documentElement.scrollTop);
            var a = e - lX;
            var b = f - lY;
			if(clX != e && clY != f){
				clX=e;
				clY=f;
				disp = Math.floor(Math.sqrt(Math.abs(a * a - b * b)));
			}else if(clX == e && clY != f){
				eventType = 'mousemoveY';
				clY=f;
				disp = Math.floor(Math.sqrt(Math.abs(a * a - b * b)));
			}else if(clX != e && clY == f){
				eventType = 'mousemoveX';
				clX=e;
				disp = Math.floor(Math.sqrt(Math.abs(a * a - b * b)));
			}else{
				eventType = 'mousemoveEx';  //any case which is not covered above.
				disp = Math.floor(Math.sqrt(Math.abs(a * a - b * b)));
			}

            //disp = Math.floor(Math.sqrt(Math.abs(a * a - b * b)));
        }
        if (first_move_report == false && parseInt(disp) > 0) {
			if(eventType === 'mousemove')
            first_move_report = true;
			
        last_user_interaction = new Date();
            _this.userNGObj.postCall("m1", oevent.type, last_user_interaction, _this.start_focus_time, null, last_user_interaction, null, null, trust, eventType, null);
        }

        return;
    }

    function pushSpecialEvent(oevent, pushSpecialEventName, pushSpecialEventTarget) {
        if (!oevent)
            oevent = window.oevent;
        var char = oevent.which || oevent.keyCode;
        var evntSrc = (oevent.target || oevent.srcElement);
        if (evntSrc.getAttribute("name") + "-" + evntSrc.getAttribute("id") ==
            pushSpecialEventTarget.getAttribute("name") + "-" + pushSpecialEventTarget.getAttribute("id")) {
            if (isNaN(_this.totalActions[pushSpecialEventName]))
                _this.totalActions[pushSpecialEventName] = 0;
            _this.totalActions[pushSpecialEventName] = _this.totalActions[pushSpecialEventName] + 1;
            last_user_interaction = new Date();
            _this.userNGObj.postCall("spl", oevent.type, last_user_interaction, _this.start_focus_time, null, last_user_interaction, char, pushSpecialEventName, null, null, null);
        }
    }   

    function ngUserWelcome(e) {

        _this.userNGObj.loadInit();
        _this.userNGObj.postCall("load");
        // console.log('fingPrint', deviceFingerPrint);
        _this.start_focus_time = new Date();
        last_user_interaction = new Date();

        for (i = 0; i < divToAttach.length; i++) {
            var mydiv = document.querySelectorAll(divToAttach[i])[0];
            mydiv.appendChild(botUtils.createNewTag(i));
        }

        attachSpecialEvents();
        if (typeof document != undefined && typeof document.cookie != undefined && !(document.cookie.indexOf("NGSessionId") !== -1))
            motion_reported = 100;

    }

    function splEvntHelper(myElem, byName, found, index){
        if (myElem != null) {
            if (found == false)
                found = true;
            (function(index, elementAttache) {
                botUtils.eventAttacher(elementAttache, eventsToAttach[index],
                    function attachSpecialEventByIndex(e) {
                        var targetToAttach = byName ? document.getElementsByName(eventsNamesToAttach[index])[0] : eventsElementsToAttach[index];

                        if (eventsToAttach[index] == "submit" && spaFlag === true)
                            pushSpecialEvent(e, eventsTagsToAttach[pathSPA], document.getElementById(eventsIdsToAttach[pathSPA]) );
                        else
                            pushSpecialEvent(e, eventsTagsToAttach[index], targetToAttach); // j bot : diff in else part
                    }
                );
            })(index, myElem);
        }

        return found;
    }

    function attachSpecialEvents() {
        var found = false;
        if (eventsIdsToAttach != null && typeof(eventsIdsToAttach) != undefined) {
            var keysIds = Object.keys(eventsIdsToAttach);
            var eventsIdsToAttachOnThisPage = eventsIdsToAttach[pathSPA]
            for (i = 0; i < Object.keys(eventsIdsToAttach).length; i++) {
                if (eventsIdsToAttach[keysIds[i]] != eventsIdsToAttachOnThisPage)
                    continue;

                var myElem = document.getElementById(eventsIdsToAttachOnThisPage);
                found = splEvntHelper(myElem, false, found, i);             
            }
        } else if (eventsNamesToAttach != null && typeof(eventsNamesToAttach) != undefined) {

            for (i = 0; i < eventsNamesToAttach.length; i++) {

                var myElem = document.getElementsByName(eventsNamesToAttach[i])[0];
                found = splEvntHelper(myElem, true, found,i);
            }
        } else
            found = true;

        if (found == false) {
            setTimeout(attachSpecialEvents, 500);
        }
    }   



    var botUtils = {        
        getDeviceFingerPrint: function(){
            return new Fingerprint2().get(function(result, components){
                      deviceFingerPrint = result;
                      console.log('res',result); //a hash, representing your device fingerprint
                      console.log(components); // an array of FP components
                    });
        },
        setCookie : function(cname, cvalue) {
            var d = new Date();
            d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        },
        getCookieValue : function(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2)
                return parts.pop().split(";").shift();
        },
        createNewTag : function(i) {
            var aTag = document.createElement('a');
            aTag.setAttribute('href', domain + url[i]);
            aTag.style.display = 'none';
            aTag.innerHTML = "";
            return aTag;
        },
        eventAttacher : function(documentBody, eventToAttach, functionToAttach) {
            if (addedListeners[eventToAttach]) return;
            addedListeners[eventToAttach] = functionToAttach;
            botUtils.removeEvent(documentBody, eventToAttach, functionToAttach)
            documentBody.addEventListener ? documentBody.addEventListener(eventToAttach, functionToAttach, !+true) : document.attachEvent && documentBody.attachEvent("on" + eventToAttach, functionToAttach)
        },
        removeEvent : function(documentBody, eventAttach, functionToAttach) {
            if (documentBody.removeEventListener) {
                documentBody.removeEventListener(eventAttach, functionToAttach, false)
            } else if (documentBody.detachEvent) {
                documentBody.detachEvent("on" + eventAttach, functionToAttach)
            }
        },
        getRandom : function() {
            return Math.floor(Math.random() * 11);
        },
        hasStore : function() {
            var presenceFlag = "0";
            if (typeof localStorage != 'undefined') {
                var val1 = botUtils.getRandom();
                var val2 = botUtils.getRandom();
                localStorage.setItem(val1, val2);

                if (localStorage.getItem(val1) != undefined &&
                    localStorage.getItem(val1) == val2) {
                    localStorage.removeItem(val1);
                    presenceFlag = "1";
                }
            }
            return presenceFlag;
        },
        hasCookies : function() {
            var cookiePre = "0";
            try {
                if (typeof document != 'undefined' && document.cookie != undefined) {
                    var val1 = botUtils.getRandom();
                    var val2 = botUtils.getRandom();

                    document.cookie = val1 + "=" + val2 + ";";

                    if ((document.cookie).indexOf(val1 + "=" + val2) !== -1) {
                        cookiePre = "1";
                        document.cookie = val1 + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                    }
                }
            } catch (err) {
                cookiePre = "0";
            }

            return cookiePre;
        },
        createBuffer : function(flag, fn){
            eventChunk++;
            if(eventChunk > 4) {
                clearTimeout(bufferTimeout);
                eventChunk = 0;
                botUtils.ajaxCall(flag, fn, xhrDataArray);
                xhrDataArray = [];
                return;
            }

            if(!bufferTimeout){
                bufferTimeout = setTimeout(function(){
                    // console.log(888);
                    bufferTimeout = null
                    botUtils.ajaxCall(flag, fn, xhrDataArray);
                    xhrDataArray = [];
                    eventChunk = 0;
                },4000);
            }
        },
        ajaxCall : function(i, func, urlParams) {
            // console.log(123);
            var asyncDetection = (!isDefined(urlParams.submit));
            //var dataURL = (i>0) ? botConfig.dataActionURL : botConfig.logurl;
            xmlObj = new XMLHttpRequest();
            xmlObj.open("POST", botConfig.logurl, asyncDetection);
            xmlObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            // xmlObj.setRequestHeader("Content-type", "application/json");
            xmlObj.onreadystatechange = function() {
                if (xmlObj != undefined && xmlObj.readyState == 4 && xmlObj.status == 200)
                    func();
            };
            //var datatosend = [];
            //datatosend.push(urlParams);
            // xmlObj.send( urlParams );
            xmlObj.send( JSON.stringify(urlParams) );
        },
        nanoKnownsFinder : function() {
            try {
                if (window.document.$cdc_.cache_) return !+[]
            } catch (e) {}
            try {
                if (window.document.$wdc_.cache_) return !+[]
            } catch (e) {}

            try {
                if (window.document.documentElement.getAttribute("webdriver")) return !~-1
            } catch (e) {}
            
            try {
                if (document.getElementsByTagName('html')[0].getAttribute('webdriver')) return !~-1
            } catch (e) {}          
            
            try {
                if ("_Selenium_IDE_Recorder" in window) return !+[]
            } catch (e) {}
            try {
                if ("__webdriver_script_fn" in document) return !+""
            } catch (e) {}
            return !+true
        },
        knownsFinder : function() {
            var presenceOther = "0";
            try {
                //Phantom check
                if (typeof window.callPhantom === 'function' || typeof window._phantom != 'undefined')
                    presenceOther = "1";
                else if (botUtils.nanoKnownsFinder())
                    presenceOther = "2";
                else if (typeof window.__phantomas != 'undefined') {
                    presenceOther = "3";
                }
                //Node JS Browser
                else if (typeof window.Buffer != 'undefined') {
                    presenceOther = "4";
                }
                //Couch JS
                else if (typeof window.emit != 'undefined')
                    presenceOther = "5";
                //Rhino Knowns
                else if (typeof window.spawn != 'undefined')
                    presenceOther = "6";
                //Selenium The Great firefox
                else if (document.getElementsByTagName("html")[0].getAttribute('webdriver') === 'true')
                    presenceOther = "7";
                //Hi Chromium
                else if (typeof window.domAutomation != 'undefined' || typeof window.domAutomationController != 'undefined')
                    presenceOther = "8";
            } catch (e) {}
            /*if (presenceOther != "0")
                return true;
            return false;*/

            return presenceOther;

        },
        getNxPgSet : function() {
            for (keys in pageSet)
                if (window.location.pathname.indexOf(keys) != -1 && window.location.pathname == keys)
                    return pageSet[keys];

            return -1;
        } 
    };    

    function run(){
        _this.userNGObj = new ngUser();
        _this.addBotEvents = new botDataLayerStack();

        botUtils.eventAttacher(document, "mousedown", inUserActionLogger);
        botUtils.eventAttacher(document, "mousemove", handleMouseMove);
        botUtils.eventAttacher(document, "keydown", inUserActionLogger);
        botUtils.eventAttacher(document, "touchstart", inUserActionLogger);

        var options = {excludeAdBlock: true};
        new Fingerprint2(options).get(function(result, components){
          deviceFingerPrint = result;
          ngUserWelcome();
        });
    }
    
    
    function botDataLayerStack() {
        var callbacks = {};
    
        this.addBotEvents = function(_case, fn) {
            callbacks[_case] = callbacks[_case] || [];
            callbacks[_case].push(fn);
        }
    
        this.callBotEvent = function(obj) {
            if (obj['event'] && callbacks[obj['event']]) {
                callbacks[obj['event']].forEach(function(fn) {
                    fn();
                });
            }
        }
    }
    //new resman
    _this.botEventAttachForPageSubmit = function(submitPageName) {
        var p1SubmitOld = submitPageName;
        if (isNaN(this.totalActions[p1SubmitOld]))
                this.totalActions[p1SubmitOld] = 0;

        var last_user_interaction = new Date();
        this.totalActions[p1SubmitOld] = this.totalActions[p1SubmitOld] + 1;
        this.userNGObj.postCall("spl", "submit", last_user_interaction, this.start_focus_time, null, last_user_interaction, null, p1SubmitOld, null, null);
    }



    /* test-code */
    _this._testOnly_ = {};
    _this._testOnly_.botConfig = botConfig;
    _this._testOnly_.run = run;
    _this._testOnly_.isDefined = isDefined;
    _this._testOnly_.botUtils = botUtils;
    _this._testOnly_.inUserActionLogger = inUserActionLogger;
    /* end-test-code */
    
}
//for intigrating with new Monk
var botDetection = new trackMIS();

botDetection.init({
    tagName: 'bot',
    dataURL: 'https://dev.30860.cluster.infoedge.com/ni/nimnj/mnj_loadLogHP.php',
    //dataActionURL: 'https://www.naukrigulf.com/ni/nimnj/mnj_actionLogHP.php',
    appId: '200'
});
