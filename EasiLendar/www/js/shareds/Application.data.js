/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 09/05/2015
 * type: module all shared variables used for this app
 */

angular.module('MainApp.shareds.data', [])
/**
 * All shared variables
 * Each group (object) is one services
 */

// Search filter variables
// Ngo Duc Dung
.factory('eSearchFilter', function(){
	return {
		mTitle: '',		/*Name of meeting*/
		mDuration: 0,	/*Duration of meeting */
		mLocation: '',	/*Location of meeting*/

		mFrom: 0,		/*Time to start searching: Minute(s) from 24:00am*/
		mTo: 0,			/*Time to end searching: Minute(s) from 24:00am*/
		mFromDay: null,	/*Day to start searching: format: ddmmyy*/
		mToDay: null,		/*Day to end searching: format: ddmmyy*/

		mBreakfast: null,	/*Avoid/Prioritize*/
		mLunch: null,		/*avoid = true;*/
		mDinner: null,		/*prioritize = false ;*/
		mOffice: null,		/*none(default) = null;*/
		mHoliday: null, 	/**/

		resetData: function(){
			this.mTitle = '';
			this.mDuration = 0;
			this.mLocation = '';

			this.mFrom = 0;
			this.mTo = 0;
			this.mFromDay = null;
			this.mToDay = null;

			this.mBreakfast = null;
			this.mLunch = null;
			this.mDinner = null;
			this.mOffice = null;
			this.mHoliday = null;
		}
	};
})

// Setting variables
// Can Duy Cat
.factory('eSettings', function(){
	return {
		sEvent: true,			/*Show/hide event*/
		sHoliday: true,			/*Show/hide holiday*/
		sBirthday: true,		/*Show/hide friend's birthday*/
		sLocalCalendar: true,	/*Use (or not) local calendar*/
		sGmailCalendar: true,	/*Use (or not) Gmail calendar*/
		sFaceCalendar: true,	/*Use (or not) Facebook calendar*/
		sOutlookCalendar: true,	/*Use (or not) Facebook calendar*/

		sDefaultView: 'month',		/*enum{"day", "week", "month", "list") calendar on home page*/
		sDayView: 'eventList',		/*enum{"timeGrid", "eventList") day calendar*/
		sMonthView: 'eventList',	/*enum{"timeGrid", "eventList") day calendar*/
		sFirstDay: 'Monday',		/*enum{"Saturday", "Sunday", "Monday") first day of week*/
		sShowWeekNumber: true,		/*Show week number option*/

		sAutoSync: null,				/*Auto sync (not supported now)*/
		sSyncWith: 'both 3G and wifi',	/*enum{"wifi only", "both 3G and wifi") Sync with (not supported now)*/

		sDefaultDuration: 60,	/*new event take place in sDefaultDuration minute(s)*/

		sDeviceTimeZone: true,	/*Use the time zone of device or not*/
		sTimeZone: 0,			/*UTC integer from -12 to +14*/
		sZoneList: [{location:'Africa/Abidjan', zone:0},{location:'Africa/Accra', zone:0},{location:'Africa/Addis Ababa', zone:3},{location:'Africa/Algiers', zone:1},{location:'Africa/Asmara', zone:3},{location:'Africa/Asmera', zone:3},{location:'Africa/Bamako', zone:0},{location:'Africa/Bangui', zone:1},{location:'Africa/Banjul', zone:0},{location:'Africa/Bissau', zone:0},{location:'Africa/Blantyre', zone:2},{location:'Africa/Brazzaville', zone:1},{location:'Africa/Bujumbura', zone:2},{location:'Africa/Cairo', zone:2},{location:'Africa/Casablanca', zone:0},{location:'Africa/Ceuta', zone:1},{location:'Africa/Conakry', zone:0},{location:'Africa/Dakar', zone:0},{location:'Africa/Dar es Salaam', zone:3},{location:'Africa/Djibouti', zone:3},{location:'Africa/Douala', zone:1},{location:'Africa/El Aaiun', zone:0},{location:'Africa/Freetown', zone:0},{location:'Africa/Gaborone', zone:2},{location:'Africa/Harare', zone:2},{location:'Africa/Johannesburg', zone:2},{location:'Africa/Juba', zone:3},{location:'Africa/Kampala', zone:3},{location:'Africa/Khartoum', zone:3},{location:'Africa/Kigali', zone:2},{location:'Africa/Kinshasa', zone:1},{location:'Africa/Lagos', zone:1},{location:'Africa/Libreville', zone:1},{location:'Africa/Lome', zone:0},{location:'Africa/Luanda', zone:1},{location:'Africa/Lubumbashi', zone:2},{location:'Africa/Lusaka', zone:2},{location:'Africa/Malabo', zone:1},{location:'Africa/Maputo', zone:2},{location:'Africa/Maseru', zone:2},{location:'Africa/Mbabane', zone:2},{location:'Africa/Mogadishu', zone:3},{location:'Africa/Monrovia', zone:0},{location:'Africa/Nairobi', zone:3},{location:'Africa/Ndjamena', zone:1},{location:'Africa/Niamey', zone:1},{location:'Africa/Nouakchott', zone:0},{location:'Africa/Ouagadougou', zone:0},{location:'Africa/Porto-Novo', zone:1},{location:'Africa/Sao Tome', zone:0},{location:'Africa/Timbuktu', zone:0},{location:'Africa/Tripoli', zone:1},{location:'Africa/Tunis', zone:1},{location:'Africa/Windhoek', zone:1},{location:'America/Adak', zone:-10},{location:'America/Anchorage', zone:-9},{location:'America/Anguilla', zone:-4},{location:'America/Antigua', zone:-4},{location:'America/Araguaina', zone:-3},{location:'America/Argentina/Buenos Aires', zone:-3},{location:'America/Argentina/Catamarca', zone:-3},{location:'America/Argentina/ComodRivadavia', zone:-3},{location:'America/Argentina/Cordoba', zone:-3},{location:'America/Argentina/Jujuy', zone:-3},{location:'America/Argentina/La Rioja', zone:-3},{location:'America/Argentina/Mendoza', zone:-3},{location:'America/Argentina/Rio Gallegos', zone:-3},{location:'America/Argentina/Salta', zone:-3},{location:'America/Argentina/San Juan', zone:-3},{location:'America/Argentina/San Luis', zone:-3},{location:'America/Argentina/Tucuman', zone:-3},{location:'America/Argentina/Ushuaia', zone:-3},{location:'America/Aruba', zone:-4},{location:'America/Asuncion', zone:-4},{location:'America/Atikokan', zone:-5},{location:'America/Atka', zone:-10},{location:'America/Bahia', zone:-3},{location:'America/Bahia Banderas', zone:-6},{location:'America/Barbados', zone:-4},{location:'America/Belem', zone:-3},{location:'America/Belize', zone:-6},{location:'America/Blanc-Sablon', zone:-4},{location:'America/Boa Vista', zone:-4},{location:'America/Bogota', zone:-5},{location:'America/Boise', zone:-7},{location:'America/Buenos Aires', zone:-3},{location:'America/Cambridge Bay', zone:-7},{location:'America/Campo Grande', zone:-4},{location:'America/Cancun', zone:-6},{location:'America/Catamarca', zone:-3},{location:'America/Cayenne', zone:-3},{location:'America/Cayman', zone:-5},{location:'America/Chicago', zone:-6},{location:'America/Chihuahua', zone:-7},{location:'America/Coral Harbour', zone:-5},{location:'America/Cordoba', zone:-3},{location:'America/Costa Rica', zone:-6},{location:'America/Creston', zone:-7},{location:'America/Cuiaba', zone:-4},{location:'America/Curacao', zone:-4},{location:'America/Danmarkshavn', zone:0},{location:'America/Dawson', zone:-8},{location:'America/Dawson Creek', zone:-7},{location:'America/Denver', zone:-7},{location:'America/Detroit', zone:-5},{location:'America/Dominica', zone:-4},{location:'America/Edmonton', zone:-7},{location:'America/Eirunepe', zone:-5},{location:'America/El Salvador', zone:-6},{location:'America/Ensenada', zone:-8},{location:'America/Fort Wayne', zone:-5},{location:'America/Fortaleza', zone:-3},{location:'America/Glace Bay', zone:-4},{location:'America/Godthab', zone:-3},{location:'America/Goose Bay', zone:-4},{location:'America/Grand Turk', zone:-5},{location:'America/Grenada', zone:-4},{location:'America/Guadeloupe', zone:-4},{location:'America/Guatemala', zone:-6},{location:'America/Guayaquil', zone:-5},{location:'America/Guyana', zone:-4},{location:'America/Halifax', zone:-4},{location:'America/Havana', zone:-5},{location:'America/Hermosillo', zone:-7},{location:'America/Indiana/Indianapolis', zone:-5},{location:'America/Indiana/Knox', zone:-6},{location:'America/Indiana/Marengo', zone:-5},{location:'America/Indiana/Petersburg', zone:-5},{location:'America/Indiana/Tell City', zone:-6},{location:'America/Indiana/Valparaiso', zone:-6},{location:'America/Indiana/Vevay', zone:-5},{location:'America/Indiana/Vincennes', zone:-5},{location:'America/Indiana/Winamac', zone:-5},{location:'America/Indianapolis', zone:-5},{location:'America/Inuvik', zone:-7},{location:'America/Iqaluit', zone:-5},{location:'America/Jamaica', zone:-5},{location:'America/Jujuy', zone:-3},{location:'America/Juneau', zone:-9},{location:'America/Kentucky/Louisville', zone:-5},{location:'America/Kentucky/Monticello', zone:-5},{location:'America/Knox IN', zone:-6},{location:'America/Kralendijk', zone:-4},{location:'America/La Paz', zone:-4},{location:'America/Lima', zone:-5},{location:'America/Los Angeles', zone:-8},{location:'America/Louisville', zone:-5},{location:'America/Lower Princes', zone:-4},{location:'America/Maceio', zone:-3},{location:'America/Managua', zone:-6},{location:'America/Manaus', zone:-4},{location:'America/Marigot', zone:-4},{location:'America/Martinique', zone:-4},{location:'America/Matamoros', zone:-6},{location:'America/Mazatlan', zone:-7},{location:'America/Mendoza', zone:-3},{location:'America/Menominee', zone:-6},{location:'America/Merida', zone:-6},{location:'America/Metlakatla', zone:-8},{location:'America/Mexico City', zone:-6},{location:'America/Miquelon', zone:-3},{location:'America/Moncton', zone:-4},{location:'America/Monterrey', zone:-6},{location:'America/Montevideo', zone:-3},{location:'America/Montreal', zone:-5},{location:'America/Montserrat', zone:-4},{location:'America/Nassau', zone:-5},{location:'America/New York', zone:-5},{location:'America/Nipigon', zone:-5},{location:'America/Nome', zone:-9},{location:'America/Noronha', zone:-2},{location:'America/North Dakota/Beulah', zone:-6},{location:'America/North Dakota/Center', zone:-6},{location:'America/North Dakota/New Salem', zone:-6},{location:'America/Ojinaga', zone:-7},{location:'America/Panama', zone:-5},{location:'America/Pangnirtung', zone:-5},{location:'America/Paramaribo', zone:-3},{location:'America/Phoenix', zone:-7},{location:'America/Port of Spain', zone:-4},{location:'America/Port-au-Prince', zone:-5},{location:'America/Porto Acre', zone:-5},{location:'America/Porto Velho', zone:-4},{location:'America/Puerto Rico', zone:-4},{location:'America/Rainy River', zone:-6},{location:'America/Rankin Inlet', zone:-6},{location:'America/Recife', zone:-3},{location:'America/Regina', zone:-6},{location:'America/Resolute', zone:-6},{location:'America/Rio Branco', zone:-5},{location:'America/Rosario', zone:-3},{location:'America/Santa Isabel', zone:-8},{location:'America/Santarem', zone:-3},{location:'America/Santiago', zone:-4},{location:'America/Santo Domingo', zone:-4},{location:'America/Sao Paulo', zone:-3},{location:'America/Scoresbysund', zone:-1},{location:'America/Shiprock', zone:-7},{location:'America/Sitka', zone:-9},{location:'America/St Barthelemy', zone:-4},{location:'America/St Kitts', zone:-4},{location:'America/St Lucia', zone:-4},{location:'America/St Thomas', zone:-4},{location:'America/St Vincent', zone:-4},{location:'America/Swift Current', zone:-6},{location:'America/Tegucigalpa', zone:-6},{location:'America/Thule', zone:-4},{location:'America/Thunder Bay', zone:-5},{location:'America/Tijuana', zone:-8},{location:'America/Toronto', zone:-5},{location:'America/Tortola', zone:-4},{location:'America/Vancouver', zone:-8},{location:'America/Virgin', zone:-4},{location:'America/Whitehorse', zone:-8},{location:'America/Winnipeg', zone:-6},{location:'America/Yakutat', zone:-9},{location:'America/Yellowknife', zone:-7},{location:'Antarctica/Casey', zone:11},{location:'Antarctica/Davis', zone:5},{location:'Antarctica/DumontDUrville', zone:10},{location:'Antarctica/Macquarie', zone:11},{location:'Antarctica/Mawson', zone:5},{location:'Antarctica/McMurdo', zone:12},{location:'Antarctica/Palmer', zone:-4},{location:'Antarctica/Rothera', zone:-3},{location:'Antarctica/South Pole', zone:12},{location:'Antarctica/Syowa', zone:3},{location:'Antarctica/Troll', zone:0},{location:'Antarctica/Vostok', zone:6},{location:'Arctic/Longyearbyen', zone:1},{location:'Asia/Aden', zone:3},{location:'Asia/Almaty', zone:6},{location:'Asia/Amman', zone:2},{location:'Asia/Anadyr', zone:12},{location:'Asia/Aqtau', zone:5},{location:'Asia/Aqtobe', zone:5},{location:'Asia/Ashgabat', zone:5},{location:'Asia/Ashkhabad', zone:5},{location:'Asia/Baghdad', zone:3},{location:'Asia/Bahrain', zone:3},{location:'Asia/Baku', zone:4},{location:'Asia/Bangkok', zone:7},{location:'Asia/Beirut', zone:2},{location:'Asia/Bishkek', zone:6},{location:'Asia/Brunei', zone:8},{location:'Asia/Choibalsan', zone:8},{location:'Asia/Chongqing', zone:8},{location:'Asia/Chungking', zone:8},{location:'Asia/Dacca', zone:6},{location:'Asia/Damascus', zone:2},{location:'Asia/Dhaka', zone:6},{location:'Asia/Dili', zone:9},{location:'Asia/Dubai', zone:4},{location:'Asia/Dushanbe', zone:5},{location:'Asia/Gaza', zone:2},{location:'Asia/Ha Noi', zone:7},{location:'Asia/Harbin', zone:8},{location:'Asia/Hebron', zone:2},{location:'Asia/Ho Chi Minh', zone:7},{location:'Asia/Hong Kong', zone:8},{location:'Asia/Hovd', zone:7},{location:'Asia/Irkutsk', zone:8},{location:'Asia/Istanbul', zone:2},{location:'Asia/Jakarta', zone:7},{location:'Asia/Jayapura', zone:9},{location:'Asia/Jerusalem', zone:2},{location:'Asia/Kamchatka', zone:12},{location:'Asia/Karachi', zone:5},{location:'Asia/Kashgar', zone:8},{location:'Asia/Khandyga', zone:9},{location:'Asia/Krasnoyarsk', zone:7},{location:'Asia/Kuala Lumpur', zone:8},{location:'Asia/Kuching', zone:8},{location:'Asia/Kuwait', zone:3},{location:'Asia/Macao', zone:8},{location:'Asia/Macau', zone:8},{location:'Asia/Magadan', zone:10},{location:'Asia/Makassar', zone:8},{location:'Asia/Manila', zone:8},{location:'Asia/Muscat', zone:4},{location:'Asia/Nicosia', zone:2},{location:'Asia/Novokuznetsk', zone:7},{location:'Asia/Novosibirsk', zone:6},{location:'Asia/Omsk', zone:6},{location:'Asia/Oral', zone:5},{location:'Asia/Phnom Penh', zone:7},{location:'Asia/Pontianak', zone:7},{location:'Asia/Pyongyang', zone:9},{location:'Asia/Qatar', zone:3},{location:'Asia/Qyzylorda', zone:6},{location:'Asia/Riyadh', zone:3},{location:'Asia/Saigon', zone:7},{location:'Asia/Sakhalin', zone:11},{location:'Asia/Samarkand', zone:5},{location:'Asia/Seoul', zone:9},{location:'Asia/Shanghai', zone:8},{location:'Asia/Singapore', zone:8},{location:'Asia/Taipei', zone:8},{location:'Asia/Tashkent', zone:5},{location:'Asia/Tbilisi', zone:4},{location:'Asia/Tel Aviv', zone:2},{location:'Asia/Thimbu', zone:6},{location:'Asia/Thimphu', zone:6},{location:'Asia/Tokyo', zone:9},{location:'Asia/Ujung Pandang', zone:8},{location:'Asia/Ulaanbaatar', zone:8},{location:'Asia/Ulan Bator', zone:8},{location:'Asia/Urumqi', zone:8},{location:'Asia/Ust-Nera', zone:10},{location:'Asia/Vientiane', zone:7},{location:'Asia/Vladivostok', zone:10},{location:'Asia/Yakutsk', zone:9},{location:'Asia/Yekaterinburg', zone:5},{location:'Asia/Yerevan', zone:4},{location:'Atlantic/Azores', zone:-1},{location:'Atlantic/Bermuda', zone:-4},{location:'Atlantic/Canary', zone:0},{location:'Atlantic/Cape Verde', zone:-1},{location:'Atlantic/Faeroe', zone:0},{location:'Atlantic/Faroe', zone:0},{location:'Atlantic/Jan Mayen', zone:1},{location:'Atlantic/Madeira', zone:0},{location:'Atlantic/Reykjavik', zone:0},{location:'Atlantic/South Georgia', zone:-2},{location:'Atlantic/St Helena', zone:0},{location:'Atlantic/Stanley', zone:-3},{location:'Australia/ACT', zone:10},{location:'Australia/Brisbane', zone:10},{location:'Australia/Canberra', zone:10},{location:'Australia/Currie', zone:10},{location:'Australia/Hobart', zone:10},{location:'Australia/Lindeman', zone:10},{location:'Australia/Melbourne', zone:10},{location:'Australia/NSW', zone:10},{location:'Australia/Perth', zone:8},{location:'Australia/Queensland', zone:10},{location:'Australia/Sydney', zone:10},{location:'Australia/Tasmania', zone:10},{location:'Australia/Victoria', zone:10},{location:'Australia/West', zone:8},{location:'Brazil/Acre', zone:-5},{location:'Brazil/DeNoronha', zone:-2},{location:'Brazil/East', zone:-3},{location:'Brazil/West', zone:-4},{location:'Canada/Atlantic', zone:-4},{location:'Canada/Central', zone:-6},{location:'Canada/Eastern', zone:-5},{location:'Canada/East-Saskatchewan', zone:-6},{location:'Canada/Mountain', zone:-7},{location:'Canada/Pacific', zone:-8},{location:'Canada/Saskatchewan', zone:-6},{location:'Canada/Yukon', zone:-8},{location:'Chile/Continental', zone:-4},{location:'Chile/EasterIsland', zone:-6},{location:'Cuba', zone:-5},{location:'Egypt', zone:2},{location:'Europe/Amsterdam', zone:1},{location:'Europe/Andorra', zone:1},{location:'Europe/Athens', zone:2},{location:'Europe/Belfast', zone:0},{location:'Europe/Belgrade', zone:1},{location:'Europe/Berlin', zone:1},{location:'Europe/Bratislava', zone:1},{location:'Europe/Brussels', zone:1},{location:'Europe/Bucharest', zone:2},{location:'Europe/Budapest', zone:1},{location:'Europe/Busingen', zone:1},{location:'Europe/Chisinau', zone:2},{location:'Europe/Copenhagen', zone:1},{location:'Europe/Dublin', zone:0},{location:'Europe/Gibraltar', zone:1},{location:'Europe/Guernsey', zone:0},{location:'Europe/Helsinki', zone:2},{location:'Europe/Isle of Man', zone:0},{location:'Europe/Istanbul', zone:2},{location:'Europe/Jersey', zone:0},{location:'Europe/Kaliningrad', zone:2},{location:'Europe/Kiev', zone:2},{location:'Europe/Lisbon', zone:0},{location:'Europe/Ljubljana', zone:1},{location:'Europe/London', zone:0},{location:'Europe/Luxembourg', zone:1},{location:'Europe/Madrid', zone:1},{location:'Europe/Malta', zone:1},{location:'Europe/Mariehamn', zone:2},{location:'Europe/Minsk', zone:3},{location:'Europe/Monaco', zone:1},{location:'Europe/Moscow', zone:3},{location:'Europe/Nicosia', zone:2},{location:'Europe/Oslo', zone:1},{location:'Europe/Paris', zone:1},{location:'Europe/Podgorica', zone:1},{location:'Europe/Prague', zone:1},{location:'Europe/Riga', zone:2},{location:'Europe/Rome', zone:1},{location:'Europe/Samara', zone:4},{location:'Europe/San Marino', zone:1},{location:'Europe/Sarajevo', zone:1},{location:'Europe/Simferopol', zone:3},{location:'Europe/Skopje', zone:1},{location:'Europe/Sofia', zone:2},{location:'Europe/Stockholm', zone:1},{location:'Europe/Tallinn', zone:2},{location:'Europe/Tirane', zone:1},{location:'Europe/Tiraspol', zone:2},{location:'Europe/Uzhgorod', zone:2},{location:'Europe/Vaduz', zone:1},{location:'Europe/Vatican', zone:1},{location:'Europe/Vienna', zone:1},{location:'Europe/Vilnius', zone:2},{location:'Europe/Volgograd', zone:3},{location:'Europe/Warsaw', zone:1},{location:'Europe/Zagreb', zone:1},{location:'Europe/Zaporozhye', zone:2},{location:'Europe/Zurich', zone:1},{location:'GB', zone:0},{location:'GB-Eire', zone:0},{location:'GMT', zone:0},{location:'Greenwich', zone:0},{location:'Hongkong', zone:8},{location:'Iceland', zone:0},{location:'Indian/Antananarivo', zone:3},{location:'Indian/Chagos', zone:6},{location:'Indian/Christmas', zone:7},{location:'Indian/Comoro', zone:3},{location:'Indian/Kerguelen', zone:5},{location:'Indian/Mahe', zone:4},{location:'Indian/Maldives', zone:5},{location:'Indian/Mauritius', zone:4},{location:'Indian/Mayotte', zone:3},{location:'Indian/Reunion', zone:4},{location:'Israel', zone:2},{location:'Jamaica', zone:-5},{location:'Japan', zone:9},{location:'Kwajalein', zone:12},{location:'Libya', zone:2},{location:'Mexico/BajaNorte', zone:-8},{location:'Mexico/BajaSur', zone:-7},{location:'Mexico/General', zone:-6},{location:'Navajo', zone:-7},{location:'NZ', zone:12},{location:'Pacific/Apia', zone:13},{location:'Pacific/Auckland', zone:12},{location:'Pacific/Chuuk', zone:10},{location:'Pacific/Easter', zone:-6},{location:'Pacific/Efate', zone:11},{location:'Pacific/Enderbury', zone:13},{location:'Pacific/Fakaofo', zone:13},{location:'Pacific/Fiji', zone:12},{location:'Pacific/Funafuti', zone:12},{location:'Pacific/Galapagos', zone:-6},{location:'Pacific/Gambier', zone:-9},{location:'Pacific/Guadalcanal', zone:11},{location:'Pacific/Guam', zone:10},{location:'Pacific/Honolulu', zone:-10},{location:'Pacific/Johnston', zone:-10},{location:'Pacific/Kiritimati', zone:14},{location:'Pacific/Kosrae', zone:11},{location:'Pacific/Kwajalein', zone:12},{location:'Pacific/Majuro', zone:12},{location:'Pacific/Midway', zone:-11},{location:'Pacific/Nauru', zone:12},{location:'Pacific/Niue', zone:-11},{location:'Pacific/Noumea', zone:11},{location:'Pacific/Pago Pago', zone:-11},{location:'Pacific/Palau', zone:9},{location:'Pacific/Pitcairn', zone:-8},{location:'Pacific/Pohnpei', zone:11},{location:'Pacific/Ponape', zone:11},{location:'Pacific/Port Moresby', zone:10},{location:'Pacific/Rarotonga', zone:-10},{location:'Pacific/Saipan', zone:10},{location:'Pacific/Samoa', zone:-11},{location:'Pacific/Tahiti', zone:-10},{location:'Pacific/Tarawa', zone:12},{location:'Pacific/Tongatapu', zone:13},{location:'Pacific/Truk', zone:10},{location:'Pacific/Wake', zone:12},{location:'Pacific/Wallis', zone:12},{location:'Pacific/Yap', zone:10},{location:'Poland', zone:1},{location:'Portugal', zone:0},{location:'PRC', zone:8},{location:'ROC', zone:8},{location:'ROK', zone:9},{location:'Singapore', zone:8},{location:'Turkey', zone:2},{location:'UCT', zone:0},{location:'Universal', zone:0},{location:'US/Alaska', zone:-9},{location:'US/Aleutian', zone:-10},{location:'US/Arizona', zone:-7},{location:'US/Central', zone:-6},{location:'US/Eastern', zone:-5},{location:'US/East-Indiana', zone:-5},{location:'US/Hawaii', zone:-10},{location:'US/Indiana-Starke', zone:-6},{location:'US/Michigan', zone:-5},{location:'US/Mountain', zone:-7},{location:'US/Pacific', zone:-8},{location:'US/Samoa', zone:-11},{location:'W-SU', zone:3},{location:'Zulu', zone:0}],
		sZoneName: ['UTC-11:00', 'UTC-10:00', 'UTC-09:00', 'UTC-08:00', 'UTC-07:00', 'UTC-06:00', 'UTC-05:00', 'UTC-04:00', 'UTC-03:00', 'UTC-02:00', 'UTC-01:00', 'UTC', 'UTC+01:00', 'UTC+02:00', 'UTC+03:00', 'UTC+04:00', 'UTC+05:00', 'UTC+06:00', 'UTC+07:00', 'UTC+08:00', 'UTC+09:00', 'UTC+10:00', 'UTC+11:00', 'UTC+12:00', 'UTC+13:00', 'UTC+14:00'],

		sInternet: 'wifi', /*enum{"wifi", "3G", "none"} Check device conection*/

		resetData: function(){
			this.sEvent = true;
			this.sHoliday = true;
			this.sBirthday = true;
			this.sLocalCalendar = true;
			this.sGmailCalendar = true;
			this.sFaceCalendar = true;
			this.sOutlookCalendar = true;

			this.sDefaultView = 'month';
			this.sDayView = 'eventList';
			this.sMonthView = 'eventList';
			this.sFirstDay = 'Monday';
			this.sShowWeekNumber = true;

			this.sAutoSync = null;
			this.sSyncWith = 'both 3G and wifi';

			this.sDefaultDuration = 60;

			this.sDeviceTimeZone = true;
			this.sTimeZone = 0;

			this.sInternet = 'wifi';
		}
	};
})

// User information
// Nguyen Minh Trang
.factory('eUser', function(eTodo){
	return {
		uID: '',			/*4-15 characters (A-Z, a-z, 0-9, _), unique*/

		uName: '',			/*UTF-8*/
		uAvatar: '0',
		uEmail: '',			/*gmail*/
		uPassword: '',		/*8-16 characters*/

		uGender: null,		/*male or female*/
		uBirthday: null,		/*ddmmyyyy*/
		uPhone: null,
		uAddress: null,

		uIsDoneFriend: false,
		uIsDoneNoti: false,

		uRemember: false,	/*remember me*/
		uFriend: [],		/*array of objects { id, name }*/
		uVIP : false,
		isLogin: false,
		uTodo: null,

		uGmailCalendar: null,	/*Google API JSON	Calendar*/
		uLocalCalendar: null,	/*Google API JSON	Calendar*/
		uFaceCalendar: null,	/*Google API JSON	Calendar*/
		uOutlookCalendar: null,	/*Google API JSON	Calendar*/

		uRequested: {},
		uFRequest: {},	/*List of requests*/
		uFAccepted: {},	/*List of requests accepted*/
		uFRLength: 0,
		uFALength: 0,

		resetData: function(){
			this.uID = '';

			this.uName = '';
			this.uAvatar = '0';
			this.uEmail = '';
			this.uPassword = '';

			this.uGender = null;
			this.uBirthday = null;
			this.uPhone = null;
			this.uAddress = null;

			this.uRemember = false;
			this.uFriend = [];
			this.uVIP  = false;
			this.isLogin = false;
			this.uTodo= null;

			this.uGmailCalendar = null;
			this.uLocalCalendar = null;
			this.uFaceCalendar = null;
			this.uOutlookCalendar = null;

			this.uRequested = {};
			this.uFRequest = {};
			this.uFAccepted = {};
			this.uFRLength = 0;
			this.uFALength = 0;
		}
	};
})

// $rootScope.eUser.uFRequest["huongdung1"] = { id: "huongdung1", name: "Ngo Duc Huong", ava: 1};
// $rootScope.eUser.uFRequest["ttdungsexy"] = { id: "ttdungsexy", name: "Tran Thu Dung", ava: 3};
// $rootScope.eUser.uFRequest["minhchui02"] = { id: "minhchui02", name: "Nguyen Minh Chui", ava: 5};
// $rootScope.eUser.uFRequest["manhvan003"] = { id: "manhvan003", name: "Nguyen Manh Van", ava: 8};
// $rootScope.eUser.uFRequest["boykorea58"] = { id: "boykorea58", name: "Kim Seung Trang", ava: 7};
// $rootScope.eUser.uFRequest["hotgirlno1"] = { id: "hotgirlno1", name: "Nguyen Thi Cam Duy", ava: 4};
// $rootScope.eUser.uFRequest["justinbb02"] = { id: "justinbb02", name: "Justin Bieber", ava: 4};
// $rootScope.eUser.uFRequest["kimkashi07"] = { id: "kimkashi07", name: "Kim Kadashian", ava: 8};
// $rootScope.eUser.uFRequest["gotgon1158"] = { id: "gotgon1158", name: "Yoona", ava: 7};
// $rootScope.eUser.uFRequest["badboyking"] = { id: "badboyking", name: "Son Tung MTP", ava: 0};
// $rootScope.eUser.uFRLength = 10;

// $rootScope.eUser.uFAccepted["huongnd95"] = { id: "huongnd95", name: "Ngo Duc Huong", ava: 1};
// $rootScope.eUser.uFAccepted["dungttd96"] = { id: "dungttd96", name: "Tran Thu Dung", ava: 3};
// $rootScope.eUser.uFAccepted["vannm9896"] = { id: "vannm9896", name: "Nguyen Manh Van", ava: 8};
// $rootScope.eUser.uFAccepted["trangks99"] = { id: "trangks99", name: "Kim Seung Trang", ava: 7};
// $rootScope.eUser.uFAccepted["duyntc00a"] = { id: "duyntc00a", name: "Nguyen Thi Cam Duy", ava: 4};
// $rootScope.eUser.uFAccepted["luongnt58"] = { id: "luongnt58", name: "Nguyen Thi Luong", ava: 8};
// $rootScope.eUser.uFAccepted["taylor989"] = { id: "taylor989", name: "Taylor Swift", ava: 6};
// $rootScope.eUser.uFAccepted["obamano01"] = { id: "obamano01", name: "Barack Obama", ava: 0};
// $rootScope.eUser.uFALength = 8;

// Friend's information
// Nguyen Minh Trang
.factory('eFriend', function(){
	return {
		fName: '',		/*UTF-8*/
		fAvatar: 0,		/*avatar index from 0 to 8*/
		fVIP: false,		/*VIP or not*/
		fID: '',
		fInfor: null,
		fFriend: {},

		fBusy: true,

		fMultiCal: null,	/*MultiCalendar object	Calendar*/

		resetData: function(){
			this.fName = '';
			this.fAvatar = 0;
			this.fVIP = false;
			this.fID = '';
			this.fInfor = null;
			this.fFriend = {};

			this.fBusy = true;

			this.fMultiCal = null;
		}
	};
})

// Calendar's information
// Ngo Duc Dung
.factory('eDate', function(){
	return {
		cDate: null, 	//Object Date that user click on month calendar

		resetData: function(){
			this.cDate = null;
		}
	};
})

// Todo list service
// Can Duy Cat
.factory('eTodo', function() {
	return {
		tChecklist: [{
			listName: "Getting Started Checklist",
			list: [{
				title: "Check me when done",
				description: null,
				important: 0,
				done: false,
			},{
				title: "I am a done task",
				description: null,
				important: 0,
				done: true,
			},{
				title: "Swipe me left for option",
				description: null,
				important: 0,
				done: false,
			},{
				title: "Hold me to edit",
				description: null,
				important: 0,
				done: false,
			},{
				title: "Touch create bar to add task",
				description: null,
				important: 0,
				done: false,
			},{
				title: "Swipe up from bottom for action",
				description: null,
				important: 0,
				done: false,
			},{
				title: "Swipe header bar down to close",
				description: null,
				important: 0,
				done: false,
			},{
				title: "Checklist title is touchable",
				description: null,
				important: 0,
				done: false,
			},{
				title: "I have a description",
				description: "My description",
				important: 0,
				done: false,
			},{
				title: "Touch me to see my description",
				description: "This is my description. You can write as long as you want, but it sould not have a break line. It will be removed automatically.",
				important: 0,
				done: false,
			},{
				title: "I am a important task",
				description: null,
				important: 1,
				done: false,
			},{
				title: "I am a very important task",
				description: null,
				important: 2,
				done: false,
			},{
				title: "Touch star symbol to change important",
				description: null,
				important: 0,
				done: false,
			},],
			important: 2,
			undone: 12,
			done: false,
		}, {
			listName: "Example Done Checklist",
			list: [{
				title: "I am a done task",
				description: null,
				important: 0,
				done: true,
			},{
				title: "I am one more done task",
				description: null,
				important: 0,
				done: true,
			},{
				title: "I am too",
				description: null,
				important: 0,
				done: true,
			},{
				title: "We are done tasks",
				description: null,
				important: 0,
				done: true,
			},{
				title: "I can be undone",
				description: null,
				important: 0,
				done: true,
			},{
				title: "Touch me to undone",
				description: null,
				important: 0,
				done: true,
			},],
			important: 0,
			undone: 0,
			done: true,
		}, {
			listName: "Today Checklist",
			list: [{
				title: "First today task",
				description: null,
				important: 0,
				done: false,
			},{
				title: "Fist today done task",
				description: null,
				important: 0,
				done: true,
			},{
				title: "Second today task",
				description: null,
				important: 0,
				done: false,
			},{
				title: "Today important task",
				description: null,
				important: 1,
				done: false,
			},{
				title: "A Very important task",
				description: null,
				important: 2,
				done: false,
			},{
				title: "Task with description",
				description: "Description here",
				important: 0,
				done: false,
			},],
			important: 2,
			undone: 5,
			done: false,
		}, {
			listName: "Tomorrow Checklist",
			list: [{
				title: "First tomorrow task",
				description: null,
				important: 0,
				done: false,
			},{
				title: "Fist tomorrow done task",
				description: null,
				important: 0,
				done: true,
			},{
				title: "Second tomorrow task",
				description: null,
				important: 0,
				done: false,
			},{
				title: "Tomorrow important task",
				description: null,
				important: 1,
				done: false,
			},{
				title: "A Very important task",
				description: null,
				important: 2,
				done: false,
			},{
				title: "Task with description",
				description: "Description here",
				important: 0,
				done: false,
			},],
			important: 1,
			undone: 5,
			done: false,
		}, ],

		resetData: function() {
			this.tChecklist = [];
		}
	};
})
