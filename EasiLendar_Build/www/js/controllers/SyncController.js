/**
 * starter: Can Duy Cat
 * owner: Nguyen Manh Duy
 * last update: 14/04/2015
 * type: paticular controller
 */

var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var f=encodeURIComponent,g=window,k=decodeURIComponent,n="shift",p="replace",q="split",u="push",y="test",B="length",C="join";var D=g,E=document,aa=D.location,ba=function(){},ca=/\[native code\]/,G=function(a,b,c){return a[b]=a[b]||c},da=function(a){for(var b=0;b<this[B];b++)if(this[b]===a)return b;return-1},ea=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a[B];d++){var e=a[d];e!=c&&b[u](e);c=e}return b},H=function(){var a;if((a=Object.create)&&ca[y](a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a},I=G(D,"gapi",{});var J;J=G(D,"___jsl",H());G(J,"I",0);G(J,"hel",10);var K=function(){var a=aa.href,b;if(J.dpo)b=J.h;else{b=J.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=k(a[2])}catch(e){}}return b},fa=function(a){var b=G(J,"PQ",[]);J.PQ=[];var c=b[B];if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},h=0;h<c;h++)b[h](e)},L=function(a){return G(G(J,"H",H()),a,H())};var M=G(J,"perf",H()),N=G(M,"g",H()),ga=G(M,"i",H());G(M,"r",[]);H();H();var O=function(a,b,c){var d=M.r;"function"===typeof d?d(a,b,c):d[u]([a,b,c])},Q=function(a,b,c){b&&0<b[B]&&(b=P(b),c&&0<c[B]&&(b+="___"+P(c)),28<b[B]&&(b=b.substr(0,28)+(b[B]-28)),c=b,b=G(ga,"_p",H()),G(b,c,H())[a]=(new Date).getTime(),O(a,"_p",c))},P=function(a){return a[C]("__")[p](/\./g,"_")[p](/\-/g,"_")[p](/\,/g,"_")};var S=H(),T=[],U=function(a){throw Error("Bad hint"+(a?": "+a:""));};T[u](["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?J[b]=G(J,b,[]).concat(c):G(J,b,c)}if(b=a.u)a=G(J,"us",[]),a[u](b),(b=/^https:(.*)$/.exec(b))&&a[u]("http:"+b[1])}]);var ha=/^(\/[a-zA-Z0-9_\-]+)+$/,ia=/^[a-zA-Z0-9\-_\.,!]+$/,ja=/^gapi\.loaded_[0-9]+$/,ka=/^[a-zA-Z0-9,._-]+$/,oa=function(a,b,c,d){var e=a[q](";"),h=e[n](),l=S[h],m=null;l?m=l(e,b,c,d):U("no hint processor for: "+h);m||U("failed to generate load url");b=m;c=b.match(la);(d=b.match(ma))&&1===d[B]&&na[y](b)&&c&&1===c[B]||U("failed sanity: "+a);return m},qa=function(a,b,c,d){a=pa(a);ja[y](c)||U("invalid_callback");b=V(b);d=d&&d[B]?V(d):null;var e=function(a){return f(a)[p](/%2C/g,",")};return[f(a.e)[p](/%2C/g,",")[p](/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.a?"/am="+e(a.a):"",a.c?"/rs="+e(a.c):"",a.d?"/t="+e(a.d):"","/cb=",e(c)][C]("")},pa=function(a){"/"!==a.charAt(0)&&U("relative path");for(var b=a.substring(1)[q]("/"),c=[];b[B];){a=b[n]();if(!a[B]||0==a.indexOf("."))U("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c[u](a)}a={};for(var d=0,e=b[B];d<e;++d){var h=b[d][q]("="),l=k(h[0]),m=k(h[1]);2==h[B]&&l&&m&&(a[l]=a[l]||m)}b="/"+c[C]("/");ha[y](b)||U("invalid_prefix");c=W(a,"k",!0);d=W(a,"am");e=W(a,"rs");a=W(a,"t");return{e:b,version:c,a:d,c:e,d:a}},V=function(a){for(var b=[],c=0,d=a[B];c<d;++c){var e=a[c][p](/\./g,"_")[p](/-/g,"_");ka[y](e)&&b[u](e)}return b[C](",")},W=function(a,b,c){a=a[b];!a&&c&&U("missing: "+b);if(a){if(ia[y](a))return a;U("invalid: "+b)}return null},na=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,ma=/\/cb=/g,la=/\/\//g,ra=function(){var a=K();if(!a)throw Error("Bad hint");return a};S.m=function(a,b,c,d){(a=a[0])||U("missing_hint");return"https://apis.google.com"+qa(a,b,c,d)};var X=decodeURI("%73cript"),Y=function(a,b){for(var c=[],d=0;d<a[B];++d){var e=a[d];e&&0>da.call(b,e)&&c[u](e)}return c},sa=function(a){"loading"!=E.readyState?Z(a):E.write("<"+X+' src="'+encodeURI(a)+'"></'+X+">")},Z=function(a){var b=E.createElement(X);b.setAttribute("src",a);b.async="true";(a=E.getElementsByTagName(X)[0])?a.parentNode.insertBefore(b,a):(E.head||E.body||E.documentElement).appendChild(b)},ta=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<T[B];d++){var e=T[d][0],h=T[d][1];h&&Object.prototype.hasOwnProperty.call(c,e)&&h(c[e],a,b)}},va=function(a,b){ua(function(){var c;c=b===K()?G(I,"_",H()):H();c=G(L(b),"_",c);a(c)})},xa=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);ta(a,c);var d=a?a[q](":"):[],e=c.h||ra(),h=G(J,"ah",H());if(h["::"]&&d[B]){for(var l=[],m=null;m=d[n]();){var v=m[q]("."),v=h[m]||h[v[1]&&"ns:"+v[0]||""]||e,t=l[B]&&l[l[B]-1]||null,z=t;t&&t.hint==v||(z={hint:v,b:[]},l[u](z));z.b[u](m)}var A=l[B];if(1<A){var F=c.callback;F&&(c.callback=function(){0==--A&&F()})}for(;d=l[n]();)wa(d.b,c,d.hint)}else wa(d||[],c,e)},wa=function(a,b,c){a=ea(a)||[];var d=b.callback,e=b.config,h=b.timeout,l=b.ontimeout,m=null,v=!1;if(h&&!l||!h&&l)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var t=G(L(c),"r",[]).sort(),z=G(L(c),"L",[]).sort(),A=[].concat(t),F=function(a,b){if(v)return 0;D.clearTimeout(m);z[u].apply(z,r);var d=((I||{}).config||{}).update;d?d(e):e&&G(J,"cu",[])[u](e);if(b){Q("me0",a,A);try{va(b,c)}finally{Q("me1",a,A)}}return 1};0<h&&(m=D.setTimeout(function(){v=!0;l()},h));var r=Y(a,z);if(r[B]){var r=Y(a,t),w=G(J,"CP",[]),x=w[B];w[x]=function(a){if(!a)return 0;Q("ml1",r,A);var b=function(b){w[x]=null;F(r,a)&&fa(function(){d&&d();b()})},c=function(){var a=w[x+1];a&&a()};0<x&&w[x-1]?w[x]=function(){b(c)}:b(c)};if(r[B]){var R="loaded_"+J.I++;I[R]=function(a){w[x](a);I[R]=null};a=oa(c,r,"gapi."+R,t);t[u].apply(t,r);Q("ml0",r,A);b.sync||D.___gapisync?sa(a):Z(a)}else w[x](ba)}else F(r)&&d&&d()};var ua=function(a){if(J.hee&&0<J.hel)try{return a()}catch(b){J.hel--,xa("debug_error",function(){try{g.___jsl.hefn(b)}catch(a){throw b;}})}else return a()};I.load=function(a,b){return ua(function(){return xa(a,b)})};N.bs0=g.gapi._bs||(new Date).getTime();O("bs0");N.bs1=(new Date).getTime();O("bs1");delete g.gapi._bs;})();gapi.load("client",{callback:window["handleClientLoad"],_c:{"jsl":{"ci":{"llang":"vi","client":{"headers":{"response":["Cache-Control","Content-Disposition","Content-Encoding","Content-Language","Content-Length","Content-MD5","Content-Range","Content-Type","Date","ETag","Expires","Last-Modified","Location","Pragma","Range","Server","Transfer-Encoding","WWW-Authenticate","Vary","X-Goog-Safety-Content-Type","X-Goog-Safety-Encoding","X-Goog-Upload-Chunk-Granularity","X-Goog-Upload-Control-URL","X-Goog-Upload-Size-Received","X-Goog-Upload-Status","X-Goog-Upload-URL","X-Goog-Diff-Download-Range","X-Goog-Hash","X-Goog-Updated-Authorization","X-Server-Object-Version","X-Guploader-Customer","X-Guploader-Upload-Result","X-Guploader-Uploadid"],"request":["Accept","Accept-Language","Authorization","Cache-Control","Content-Disposition","Content-Encoding","Content-Language","Content-Length","Content-MD5","Content-Range","Content-Type","Date","GData-Version","Host","If-Match","If-Modified-Since","If-None-Match","If-Unmodified-Since","Origin","OriginToken","Pragma","Range","Slug","Transfer-Encoding","X-ClientDetails","X-GData-Client","X-GData-Key","X-Goog-AuthUser","X-Goog-PageId","X-Goog-Encode-Response-If-Executable","X-Goog-Correlation-Id","X-Goog-Request-Info","X-Goog-Experiments","x-goog-iam-role","x-goog-iam-authorization-token","X-Goog-Spatula","X-Goog-Upload-Command","X-Goog-Upload-Content-Disposition","X-Goog-Upload-Content-Length","X-Goog-Upload-Content-Type","X-Goog-Upload-File-Name","X-Goog-Upload-Offset","X-Goog-Upload-Protocol","X-Goog-Visitor-Id","X-HTTP-Method-Override","X-JavaScript-User-Agent","X-Pan-Versionid","X-Origin","X-Referer","X-Upload-Content-Length","X-Upload-Content-Type","X-Use-HTTP-Status-Code-Override","X-YouTube-VVT","X-YouTube-Page-CL","X-YouTube-Page-Timestamp"]},"rms":"migrated","cors":false},"plus_layer":{"isEnabled":false},"enableMultilogin":true,"drive_share":{"useStandaloneSharingService":true},"disableRealtimeCallback":false,"isLoggedIn":true,"iframes":{"additnow":{"methods":["launchurl"],"url":"https://apis.google.com/additnow/additnow.html?usegapi\u003d1"},"person":{"url":":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1"},"visibility":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1"},"photocomments":{"url":":socialhost:/:session_prefix:_/widget/render/photocomments?usegapi\u003d1"},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1"},"playreview":{"url":"https://play.google.com/store/ereview?usegapi\u003d1"},"signin":{"methods":["onauth"],"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1"},"share":{"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1"},"commentcount":{"url":":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1"},"page":{"url":":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1"},"hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1"},"youtube":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1"},"zoomableimage":{"url":"https://ssl.gstatic.com/microscope/embed/"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1"},"reportabuse":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi\u003d1"},"follow":{"url":":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1"},"shortlists":{"url":""},"plus":{"url":":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1"},"configurator":{"url":":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1"},":socialhost:":"https://apis.google.com","post":{"params":{"url":""},"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1"},"community":{"url":":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1"},":gplus_url:":"https://plus.google.com","rbr_s":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1"},":source:":"3p","blogger":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet"},"rbr_i":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"},"appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},"udc_webconsentflow":{"params":{"url":""},"url":"https://www.google.com/settings/webconsent?usegapi\u003d1"},"savetodrive":{"methods":["save"],"url":"https://drive.google.com/savetodrivebutton?usegapi\u003d1"},":im_socialhost:":"https://plus.googleapis.com","ytshare":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1"},":signuphost:":"https://plus.google.com","plusone":{"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1"},"comments":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1"},"ytsubscribe":{"url":"https://www.youtube.com/subscribe_embed?usegapi\u003d1"}},"isPlusUser":true,"debug":{"host":"https://apis.google.com","forceIm":false,"reportExceptionRate":0.05,"rethrowException":false},"deviceType":"desktop","inline":{"css":1},"lexps":[99,97,79,109,45,17,117,115,81,127,123,122,61,30],"include_granted_scopes":true,"oauth-flow":{"usegapi":false,"disableOpt":true,"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay","idpIframeUrl":"https://accounts.google.com/o/oauth2/iframe"},"report":{"apiRate":{"gapi\\.signin\\..*":0.05},"host":"https://apis.google.com","rate":0.001,"apis":["iframes\\..*","gadgets\\..*","gapi\\.appcirclepicker\\..*","gapi\\.auth\\..*","gapi\\.client\\..*"]},"csi":{"rate":0.01},"googleapis.config":{"auth":{"useFirstPartyAuthV2":true}}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.vi.xOu1rTaJ5ww.O/m\u003d__features__/am\u003dIQ/rt\u003dj/d\u003d1/t\u003dzcms/rs\u003dAGLTcCMfcCwdK8B7APyOCCyNML4-_x4JdQ","u":"https://apis.google.com/js/client.js?onload\u003dhandleClientLoad","hee":true,"fp":"3b56cb80132f18d02435de4a3a2291627f86122a","dpo":false},"fp":"3b56cb80132f18d02435de4a3a2291627f86122a","annotation":["interactivepost","recobar","autocomplete","profile","signin2"],"bimodal":["signin","share"]}});

angular.module('MainApp.controllers.sync', [])

.controller('SyncController', function($scope, $rootScope, $window, $document, $cordovaCalendar) {

	$scope.logIN = -1;

	$scope.logInResult = false;
	var email = '';

	var apiKey = 'AIzaSyAmBIdo6sEPU5QK3lqVrflqNNyoRhCBF7I';
	var clientId = '164260242142-4er9a46uufjlu6h6hsbv3s7479mqv6pr.apps.googleusercontent.com';
	var scopes = 'https://www.googleapis.com/auth/calendar';

	// function should be called in the first Sign-In (for Page):

	$rootScope.logInToGmailCalendar = function() {

		// Log in to google account:

		gapi.auth.authorize({
			client_id: clientId,
			scope: scopes,
			immediate: true,
			approval_prompt: 'force',
			include_granted_scopes: false,
			cookie_policy: 'single_host_origin'
		}, $scope.testLogInResult);

		return $scope.logInResult;

	}

	$scope.testLogInResult = function(authResult) {

		if (authResult && !authResult.error) {
			$scope.logInResult = true;
			$scope.logIN = 1;

			makeApiCall();
		} else {
			$scope.logInResult = false;
			$scope.logIN = 0;
		}
	}

	// function to load Google API and start all mode when click sync button:

	$scope.handleClientLoad = function() {
		if ($scope.logIN == -1) {
			window.setTimeout($scope.checkAuth, 1);
		}
	}

	$scope.checkAuth = function() {
		gapi.auth.authorize({
			client_id: clientId,
			scope: scopes,
			immediate: true,
			cookie_policy: 'single_host_origin'
		}, $scope.handleAuthResult);

	}

	$scope.buttonAffect = function() {

		var authorizeButton = document.getElementById('authorize-button');
		var updateButton = document.getElementById('update-button');

		var hello = document.getElementById('hello');

		authorizeButton.style.visibility = "visible";

		if ($scope.logIN == 0) {
			authorizeButton.className = "button icon-left ion-social-googleplus button-calm easi-no-border";
			authorizeButton.onclick = $scope.handleAuthClick;
			authorizeButton.innerHTML = "Log in your google account";
			hello.style.visibility = "hidden";

			updateButton.style.visibility = "hidden";
			document.getElementById('div-log-in').style.marginTop = "-20px";
		} else if ($scope.logIN == 1) {
			authorizeButton.className = "button icon-left icon icon ion-log-out button-calm easi-no-border";
			authorizeButton.style.backgroundColor = "#416969";
			authorizeButton.style.width = "270px";

			authorizeButton.onclick = $scope.logMeOut;
			authorizeButton.innerHTML = "Log out your google account";

			if (email != '') {
				hello.style.visibility = "visible";
				hello.innerHTML = "Hi, " + email;
			}

			updateButton.style.width = "270px";
			updateButton.className = "button icon-left ion-loop";
			updateButton.style.visibility = "visible";
			updateButton.innerHTML = "Update your google calendar";
			updateButton.onclick = $scope.makeApiCall;
			document.getElementById('div-log-in').style.marginTop = "45px";
		}
	}

	$scope.handleAuthResult = function(authResult) {
		var authorizeButton = document.getElementById('authorize-button');

		if (authResult && !authResult.error) {
			$scope.logIN = 1;
			//result= authResult.access_token;
			var temp;

			gapi.client.load('calendar', 'v3', function() {
				var request = gapi.client.calendar.events.list({
					'calendarId': 'primary',
					"singleEvents": "true",
					'maxResults': 1,
					"orderBy": "startTime",
				});
				request.execute(function(resp) {
					if (resp.items.length != 0) {
						email = resp.items[0].creator.email;
						$scope.buttonAffect();
					}
				});
			});
		} else {
			$rootScope.showAlert("You have never signed in. Please log in to synchronize with your Google Calendar!");
			$scope.logIN = 0;
			$scope.buttonAffect();
		}
	}

	$scope.doNoThing = function(authResult) {

	}

	$scope.logMeOut = function() {
		$scope.logIN = 0;

		$rootScope.showAlert("In order to log out, you have to sign out your google account by your web browser");

		$scope.buttonAffect();

		// code for local host:

		// code can not be used for local host:

		/*var theUrl= 'https://accounts.google.com/o/oauth2/revoke?token='+result;

		var li = document.createElement('li');

		li.appendChild(document.createTextNode(theUrl));
		document.getElementById('events').appendChild(li);

		var xmlHttp = null;

		xmlHttp = new XMLHttpRequest();
		xmlHttp.open( "GET", theUrl, false );
		xmlHttp.send( null ); */
	}

	$scope.handleResult = function(authResult) {

		if (authResult && !authResult.error) {
			$scope.logIN = 1;

			//result= authResult.access_token;

			// Load calendar:

			$scope.makeApiCall();
		}
	}

	$scope.handleAuthClick = function(event) {
		if ($scope.logIN != 0) {
			//do nothing...
			return true;
		} else {
			gapi.auth.authorize({
				client_id: clientId,
				scope: scopes,
				approval_prompt: 'force',
				include_granted_scopes: false,
				immediate: false,
				cookie_policy: 'single_host_origin'
			}, $scope.handleResult);

			return false;
		}
	}

	$scope.makeApiCall = function() {
		if ($scope.logIN == 1) {

			// default max result = 250
			// default farthest day is one year ago

			var toDay = new Date();
			var dd = toDay.getDate();
			var mm = toDay.getMonth() + 1; //January is 0!
			var yyyy = toDay.getFullYear();

			if (dd < 10) {
				dd = '0' + dd;
			}

			if (mm < 10) {
				mm = '0' + mm;
			}

			toDay = mm + '/' + dd + '/' + yyyy;

			// form of timeMax: "yyyy-mm-dd T hh:mm:ss - offset

			var oneYearAgo = (yyyy - 1) + '-' + mm + '-' + dd + 'T' + '00:00:00-00:00';

			// Load calendar from one year ago:

			document.getElementById('authorize-button').onclick = $scope.doNoThing;
			document.getElementById('update-button').onclick = $scope.doNoThing;

			gapi.client.load('calendar', 'v3', function() {
				var request = gapi.client.calendar.events.list({
					'calendarId': 'primary',
					"singleEvents": "true",
					'maxResults': 1000,
					"orderBy": "startTime",

					'timeMin': oneYearAgo
				});

				request.execute(function(resp) {

					if (resp.items.length != 0) {
						email = resp.items[0].creator.email;
					}

					$scope.buttonAffect();

					$rootScope.eUser.uGmailCalendar = resp.items;

					$scope.convertMe();

					console.log($rootScope.eUser.uGmailCalendar);

					$rootScope.showAlert("Your calendar was update");

				});
			});
		}
	}

	// tomorrow of Date:

	$scope.tomorrow = function(today) {
		var d = today.getTime();
		var result = new Date(d + (24 * 60 * 60 * 1000));
		return result;
	}

	// yesterday of Date:

	$scope.yesterday = function(today) {
		var d = today.getTime();
		var r = new Date(d - (24 * 60 * 60 * 1000));
		return r;
	}

	$scope.convertMe = function() {
		if ($rootScope.eUser.uGmailCalendar.length == 0) return;

		// change time:

		var uGC = {};
		uGC = $rootScope.eUser.uGmailCalendar;

		// array result is a array of array:

		$rootScope.eUser.uGmailCalendar = new Array();

		var listNewEvent = new Array();

		for (var i = 0; i < uGC.length; i++) {

			// Handle all-day events (event.start and event.end has value "date" instead of "dateTime"):

			// Convert to form 00h00 dd/mm/yyyy -> 00h00 dd/mm/yyyy:

			if ((uGC[i].end.dateTime == undefined || uGC[i].start.dateTime == undefined)) {
				uGC[i].start.dateTime = new Date(uGC[i].start.date);
				uGC[i].end.dateTime = new Date(uGC[i].end.date);

				uGC[i].start.dateTime.setHours(0);
				uGC[i].start.dateTime.setMinutes(0);
				uGC[i].end.dateTime.setHours(0);
				uGC[i].end.dateTime.setMinutes(0);
			}

			// Handle long-time events (event.start.dateTime and event.end.dateTime have two different date) and save to array newHandleCalendar:

			var end = new Date(uGC[i].end.dateTime);
			var start = new Date(uGC[i].start.dateTime);
			uGC[i].end.dateTime = new Date(uGC[i].end.dateTime);
			uGC[i].start.dateTime = new Date(uGC[i].start.dateTime);
			// each event ends in 0h00 -> convert to 23h59 of previous day:

			if (end.getHours() == 0 && end.getMinutes() == 0 && end.getSeconds() == 0) {
				end.setHours(23);
				end.setMinutes(59);
				end.setSeconds(59);
				end = $scope.yesterday(end);
			}

			// separate each long-time event to list of event:

			if (end.getFullYear() != start.getFullYear() || end.getDate() != start.getDate() || end.getMonth() != start.getMonth()) {
				var x = 0;

				var tempEnd = start;
				tempEnd.setHours(23);
				tempEnd.setMinutes(59);
				tempEnd.setSeconds(59);

				var tempStart = start;

				while (tempEnd.getTime() < end.getTime() + 24 * 60 * 60 * 1000) {

					// start day:

					if (x == 0) {

						uGC[i].start.dateTime = new Date(uGC[i].start.dateTime);
						uGC[i].position = new Date(uGC[i].start.dateTime.getFullYear(), uGC[i].start.dateTime.getMonth(), uGC[i].start.dateTime.getDate());

						tempStart = $scope.tomorrow(tempStart);

						tempStart.setHours(0);
						tempStart.setMinutes(0);
						tempStart.setSeconds(0);

						tempEnd = $scope.tomorrow(tempEnd);

						uGC[i].mStatus = false;
					}

					// all next day from start day:
					else {
						var newEvent = JSON.parse(JSON.stringify(uGC[i]));
						newEvent.start.dateTime = new Date(newEvent.start.dateTime);
						newEvent.end.dateTime = new Date(newEvent.end.dateTime);
						newEvent.position = new Date(tempStart.getFullYear(), tempStart.getMonth(), tempStart.getDate());

						// all- day events:

						if (tempEnd.getTime() < end.getTime()) {

							tempStart = $scope.tomorrow(tempStart);
							tempEnd = $scope.tomorrow(tempEnd);
						}

						// non all-day event:
						else {

							tempStart = $scope.tomorrow(tempStart);
							tempEnd = $scope.tomorrow(tempEnd);
						}

						newEvent.mStatus = false;
						listNewEvent.push(newEvent);
					}

					x++;
				}
			} else {
				var position = new Date(start.getFullYear(), start.getMonth(), start.getDate());

				uGC[i].position = position;

				uGC[i].mStatus = false;

				uGC[i].start.dateTime = start;
				uGC[i].end.dateTime = end;
			}
		}

		if (listNewEvent.length > 0) {
			for (var i = 0; i < listNewEvent.length; i++) {
				uGC.push(listNewEvent[i]);
			}
		}

		for (var i = 0; i < uGC.length; i++) {
			// make a empty array of each day:

			if ($rootScope.eUser.uGmailCalendar[uGC[i].position] == undefined)
				$rootScope.eUser.uGmailCalendar[uGC[i].position] = new Array();
		}

		for (var i = 0; i < uGC.length; i++) {
			$rootScope.eUser.uGmailCalendar[uGC[i].position].push(uGC[i]);
		}
	}

	/*  Sync to local calendar
		Use Cordova.calendar  */

	$scope.syncToLocal = function() {

		// Fail to connect:

		if ($window.plugins == undefined) {
			$scope.showAlert("Can not sync with your local calendar");
			return;
		}

		// Access:

		$cordovaCalendar.listCalendars().then(function(result) {
			//success:

			$rootScope.eUser.uLocalCalendar = result;
			$scope.showAlert("Your local calendar was update");

		}, function(err) {
			// error:

			$scope.showAlert("Can not sync with your local calendar");
		});
	}
})
