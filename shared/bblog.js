"use strict";
/**
 * Better Battlelog - Worldwide Leading Browser Addon for Battlelog
 *
 * @author Roland Eigelsreiter (BrainFooLong)
 * @link https://getbblog.com
 * @license GPLv3
 */
var BBLog = {
    /**
     * The BBLog service url
     *
     * @type String
     */
    serviceUrl: 'https://getbblog.com',

    /**
     * BBLog version and build
     *
     * @type String
     */
    version: '5.3.2',
    build: 'Manifest v3 supported version by yakisova41',

    /**
     * All possible config keys
     *
     * @type Array
     */
    configKeys: [
        { "key": 'bblog.click', "init": 0, "group": "general" },
        { "key": 'general.inlineyoutube', "init": 1, "group": "general" },
        { "key": 'general.inlineimages', "init": 1, "group": "general" },
        { "key": 'general.linkintext', "init": 1, "group": "general" },
        { "key": 'general.server.filterset', "init": 1, "group": "general" },
        { "key": 'general.server.markfavorites', "sections": { "mohw": 1, "bf3": 1 }, "init": 1, "group": "general" },
        { "key": 'general.server.hiddeninfo', "init": 1, "group": "general" },
        { "key": 'general.mainserverbrowser', "sections": { "mohw": 1, "bf3": 1 }, "init": 1, "group": "general" },
        { "key": 'general.contextmenu.serverbrowser', "init": 1, "group": "general" },
        { "key": 'general.contextmenu.serverpage', "sections": { "mohw": 1, "bf3": 1 }, "init": 1, "group": "general" },
        { "key": 'bf3.contextmenu.report', "init": 1, "group": "general" },
        { "key": 'general.emblemeditor', "init": 1, "group": "general" },
        { "key": 'general.delayed.contextmenu', "init": 0, "group": "general" },
        { "key": 'general.radar.soldier.sound', "init": 0, "group": "general" },
        { "key": 'general.focus.serverlist', "init": 0, "group": "general" },
        { "key": 'general.remove.unsupportedbrowser', "init": 0, "group": "general" },
        { "key": 'general.scoreboard.tags', "init": 1, "group": "general" },
        { "key": 'general.background', "init": 1, 'button': 'background', "group": "general" },
        { "key": 'general.themes', "init": 1, 'button': 'themes', "group": "general" },
        { "key": 'general.plugins', "init": 1, 'button': 'plugins', "group": "general" },
        { "key": 'general.plugingallery', "init": 1, 'button': 'plugingallery', "group": "general" },
        { "key": 'general.radar.soldier', "init": 1, 'button': 'radar', 'type': 'soldier', "group": "general" },
        { "key": 'general.radar.server', "init": 1, 'button': 'radar', 'type': 'server', "group": "general" },
        { "key": 'general.local.comments', "init": 1, 'button': 'comments', "group": "general" },
        { "key": 'bf3.weapons.list.filters', "init": 1, "sections": { "bf3": 1 }, "group": "bf3" },
        { "key": 'bf3.weapons.list.extradata', "init": 1, "sections": { "bf3": 1 }, "group": "bf3" },
        { "key": 'bf3.weapons.info', "init": 1, "sections": { "bf3": 1 }, "group": "bf3" },
        { "key": 'bf3.weapons.altSort', "init": 0, "sections": { "bf3": 1 }, "group": "bf3" },
        { "key": 'bf3.vehicle.list.filters', "init": 1, "sections": { "bf3": 1 }, "group": "bf3" },
        { "key": 'bf3.vehicle.list.extradata', "init": 1, "sections": { "bf3": 1 }, "group": "bf3" },
        { "key": 'bf3.vehicle.altSort', "init": 0, "sections": { "bf3": 1 }, "group": "bf3" },
        { "key": 'bf3.assignments.bblog', "init": 1, "sections": { "bf3": 1 }, "group": "bf3" },
        { "key": 'bf3.awards.optimize', "init": 1, "sections": { "bf3": 1 }, "group": "bf3" },
        { "key": 'bf3.reports.download', "init": 1, "sections": { "bf3": 1 }, "group": "bf3" },
        { "key": 'bf3.stats.higherlevel', "init": 1, "sections": { "bf3": 1 }, "group": "bf3" },
        { "key": 'bf3.dogtags.counter', "init": 1, "sections": { "bf3": 1 }, "group": "bf3" },
        { "key": 'bf3.dogtags.noanimation', "init": 1, "sections": { "bf3": 1 }, "group": "bf3" },
		{ "key": 'bf4.showdmg.info', "init": 0, "sections": { "bf4": 1 }, "group": "bf4" },
		{ "key": 'bf4.weapons.info', "init": 1, "sections": { "bf4": 1 }, "group": "bf4" },		
        { "key": 'bf4.weapons.list.filters', "init": 1, "sections": { "bf4": 1 }, "group": "bf4" },
        { "key": 'bf4.weapons.list.sort', "init": 1, "sections": { "bf4": 1 }, "group": "bf4" },        
		{ "key": 'bf4.serverbrowser.truecounts', "init": 1, "sections": { "bf4": 1 }, "group": "bf4" },
        { "key": 'bf4.vehicle.list.filters', "init": 1, "sections": { "bf4": 1 }, "group": "bf4" },
        { "key": 'bf4.vehicle.list.sort', "init": 1, "sections": { "bf4": 1 }, "group": "bf4" },
        { "key": 'bf4.stats.higherlevel', "init": 1, "sections": { "bf4": 1 }, "group": "bf4" },
        { "key": 'bf4.serverbrowser.data', "init": 1, "sections": { "bf4": 1 }, "group": "bf4" },		
        { "key": 'bf4.serverbrowser.livescore', "init": 0, "sections": { "bf4": 1 }, "group": "bf4" },
        { "key": 'bf4.unlocks.improvements', "init": 1, "sections": { "bf4": 1 }, "group": "bf4" },
        { "key": 'bf4.assignments.improvements', "init": 1, "sections": { "bf4": 1 }, "group": "bf4" },
        { "key": 'bf4.awards.improvements', "init": 1, "sections": { "bf4": 1 }, "group": "bf4" },
        { "key": 'bfh.weapons.info', "init": 1, "sections": { "bfh": 1 }, "group": "bfh" },
        { "key": 'bfh.weapons.list.filters', "init": 1, "sections": { "bfh": 1 }, "group": "bfh" },
        { "key": 'bfh.vehicle.list.filters', "init": 1, "sections": { "bfh": 1 }, "group": "bfh" },
        { "key": 'bfh.stats.higherlevel', "init": 1, "sections": { "bfh": 1 }, "group": "bfh" },
        { "key": 'bfh.awards.improvements', "init": 1, "sections": { "bfh": 1 }, "group": "bfh" },
        { "key": 'bfh.progression.improvements', "init": 1, "sections": { "bfh": 1 }, "group": "bfh" }
    ],

	chk_url: '0',
	BBWF: {},
	bblognewver: '0',
	
    /**
     * Device info
     *
     * @type Object
     */
    deviceInfo: {
        1: "pc",
        2: "xbox",
        4: "ps3",
        32: "ps4",
        64: "xone",
        "pc": 1,
        "xbox": 2,
        "ps3": 4,
        "ps4": 32,
        "xone": 64,
        "xboxone": "xone",
        "xbox360": "xbox"
    },

    /**
     * The cache time for the api call
     */
    cacheTimeInitCall: 10800,

    /**
     * Initialize BBLog, HOOOO Boy, yes
     */
    init: function () {
        if (BBLog.cache("init")) return;

        BBLog.cache("init", true);
        // detect battlelog login attempt
        if (window.location.hash == "#bblog-authenticate" && S.globalContext.session && S.globalContext.session.user) {
            $("body").text();
            window.location.href = BBLog.serviceUrl + "/auth/battlelogconnectcallback?id=" + S.globalContext.session.user.userId + "&gravatarMd5=" + S.globalContext.session.user.gravatarMd5 + "&name=" + encodeURIComponent(S.globalContext.session.user.username);
            return false;
        }
			
        // detect browser
        BBLog.cache("browser", "ff");
        if (navigator.appVersion.match(/Chrome/)) BBLog.cache("browser", "chrome");
        if (navigator.appVersion.match(/OPR/)) BBLog.cache("browser", "opera");

        // detect mode and stop if no mode is detected
        if ($("#base-bf3-html").length) BBLog.cache("mode", "bf3");
        if ($("#base-mohw-html").length) BBLog.cache("mode", "mohw");
        if ($("#base-bf4-html").length) BBLog.cache("mode", "bf4");
        if ($("#base-bfh-html").length) BBLog.cache("mode", "bfh");
        if ($("body.preorderbf4").length) BBLog.cache("mode", false);
        if (!BBLog.cache("mode")) return;

        // detect language
        BBLog.cache("language", "en");
        BBLog.cache("battlelog.language", "");
        var langRealm = S.globalContext.realm.lang;
        var language = 0;
        for (var i in S.globalContext.staticContext.languages) {
            if (S.globalContext.staticContext.languages[i].value == langRealm) language = S.globalContext.staticContext.languages[i].lang;
        }
        if (language) {
            if (window.location.pathname.match(new RegExp("\/" + language + "(\/|$)"))) {
                BBLog.cache("battlelog.language", language + "/");
            }
            if ($.inArray(language, ["fr", "it", "de", "es", "pl", "jp", "kr", "cz", "tw", "cs", "ru", "pt"]) === -1) language = "en";
            BBLog.cache("language", language);
        }

        // soldier data
        if ($("div.soldierstats-box:first").length) {
            var e = $("div.soldierstats-box:first");
            var data = e.find("a[href*='/stats/']:first").attr("href").match(/([^\/]+)\/stats\/(.*?)\//i);
            if (data) {
                BBLog.cache("soldier.id", data[2]);
                BBLog.cache("soldier.name", data[1]);
            }
            BBLog.cache("account.name", S.globalContext.session.user.username);

            // detect platform
            var platformIV = setInterval(function () {
                var data = e.find(".battlereport-header-info-gameicon").attr("class");
                if (data) {
                    BBLog.cache("platform", data.match(/common-game-[0-9]+-([0-9])/)[1]);
                    clearInterval(platformIV);
                }
            }, 200);
        }

        // prepare some stuff
        for (var i in BBLog.configKeys) {
            var data = BBLog.configKeys[i];
            if (!data) continue;
            if (BBLog.storage(data.key) == null) BBLog.storage(data.key, data.init);
            // include sources
            if (typeof data.button != "undefined" && data.button == "radar") {
                var storageKey = "radar." + data.type + ".sources";
                var storage = BBLog.storage(storageKey);
                if (BBLog.count(storage)) {
                    for (var i in storage) {
                        var d = storage[i];
                        if (!d || !d["url"]) continue;
                        $("head").append('<script type="text/javascript" defer="defer" src="' + d["url"] + '"></script>');
                    }
                }
            }
        }
					 
        // ommit right-click mousedown time
        BBLog.cache("mousedown.time.3", 0);
        $(document).on("mousedown.bblog", function (ev) {
            if (ev.which == 3) BBLog.cache("mousedown.time.3", new Date().getTime());
        })
        // add contextmenu
        $("body").append($('<div id="bblog-contextmenu">').on("click", function (e) {
            e.stopPropagation();
        }).on("show", function (ev, oEv) {
            if (!BBLog.customContextable()) return;
            $(this).show();
            $(this).css("left", "0px").css("right", "");
            var w = $(this).outerWidth();
            $(this).css("top", oEv.pageY + 10 + "px").css("left", oEv.pageX + 10 + "px");
            if (oEv.pageX + 20 + w > window.innerWidth) {
                $(this).css("right", "10px").css("left", "");
            }
        }));
        // developer language
        BBLog.storage("developer.language", 0);
        if (sessionStorage.getItem("bblog-dev-language")) {
            BBLogTranslations = JSON.parse(sessionStorage.getItem("bblog-dev-language"));
            base.showReceipt("BBLog Developer language is active. Untick Developer Language to return to the normal state");
            BBLog.storage("developer.language", 1);
        }
        var timeCache = Date.parse(new Date().toUTCString()) / 1000;
        timeCache = Math.floor(timeCache / 10000) * 10000;
        BBLog.cache("time.cache.value", timeCache);

        // include plugins
        (function () {
            if (!BBLog.storage("general.plugins")) return;
            // own defined plugins
            var data = BBLog.storage("general.plugins.own") || [];
            for (var i in data) {
                var d = data[i];
                if (!d || !d["url"] || !d["active"]) continue;
                $.ajax({
                    url: d["url"],
                    dataType: "script",
                    cache: true
                });
            }
        })();
		 
        // execute code from plugin editor
        (function () {
            if (BBLog.storage("plugin.code.active") && BBLog.storage("general.plugins")) {
                var code = BBLog.storage("plugin.code");
                if (code && code.length) {
                    try {
                        BBLog.runCode(code);
                    } catch (e) {
                        console.error(e);
                    }
                }
            }
        })();		
		
		// check url for extended weapon information
		if (BBLog.chk_url == '0' && (BBLog.cache("mode") == "bf4")){
		  $.get("https://irussao.github.io/index.html").done(function () {
			  BBLog.chk_url = "https://irussao.github.io/bbloex.html";
		  }).fail(function () {
			  BBLog.chk_url = "https://jnjsh7rkprx40kalmasbdq-on.drv.tw/sym/index.html";
		  });
		  // weapon fast access
		  var wpnkey = "";
		  var BBLogWeaponsFast = JSON.parse(JSON.stringify(BBLogbf4Weapons));
		  for (let [fkey, fvalue] of Object.entries(BBLogbf4Weapons)) {	
				for (let [keya, valuea] of Object.entries(fvalue)) {			
					if (BBLogWeaponsFast[fkey][keya].dmgMax) {
							BBLog.BBWF[keya] = BBLogWeaponsFast[fkey][keya];
							BBLog.BBWF[keya].dmgSplash = 0;
							BBLog.BBWF[keya].hsmultiple = parseFloat(BBLogbf4Weapons[fkey].weaponMult);
							BBLog.BBWF[keya].bodyshot = parseFloat(1.00);
							BBLog.BBWF[keya].bodyshotdefensive = parseFloat(0.93);
							BBLog.BBWF[keya].stolegsshot = parseFloat(0.93);		
							BBLog.BBWF[keya].section = fkey;	
							BBLog.BBWF[keya].slug = keya;
							if (fkey == "assault_rifles" || fkey == "carbines" || fkey == "lmgs" || fkey == "pdws") {
								BBLog.BBWF[keya].ShotsPerShell = 1;
								BBLog.BBWF[keya].hsmultiple = parseFloat(BBLogbf4Weapons[fkey].weaponMult);
								BBLog.BBWF[keya].bodyshot = parseFloat(1.00);
								BBLog.BBWF[keya].bodyshotdefensive = parseFloat(0.93);
								BBLog.BBWF[keya].stolegsshot = parseFloat(0.93);
							}
							if (fkey == "sniper_rifles") { 
								BBLog.BBWF[keya].hsmultiple = parseFloat(2.35);
								BBLog.BBWF[keya].ShotsPerShell = 1;
							}
							if (fkey == "dmrs") { 
								BBLog.BBWF[keya].hsmultiple = parseFloat(2.00);
								BBLog.BBWF[keya].ShotsPerShell = 1;
							}
							if (fkey == "handguns") { 
								if (keya == "mare-s-leg"){ BBLog.BBWF[keya].hsmultiple = parseFloat(2.35); }
								BBLog.BBWF[keya].ShotsPerShell = 1;
							}
							if (fkey == "shotguns") { 								
								BBLog.BBWF[keya].hsmultiple = parseFloat(1.00);
								BBLog.BBWF[keya].bodyshotdefensive = parseFloat(0.85);								
								BBLog.BBWF[keya].dmgSplash = 25;
							}										
					}
				}
		   }
			BBLogTranslations["en"]["bf4.showdmg.info"] = "[EWI] Screenshot: Display DMG";
			BBLogTranslations["de"]["bf4.showdmg.info"] = "[EWI] Screenshot: Display DMG";
			var masoldier = BBLog.cache("soldier.id");
			var allowadm = ["350573751", "806262072", "241511593", "992384984", "353041355", "400990007", "1053499150", "1389309154", "225941700", "777484340", "253567412", "1950889960", "1684551890"];		
			var timernd = new Date().getTime();		    			
			try {
			  $.when(
				$.getScript( "https://irussao.github.io/bblogupdate.js?u="+timernd ),
				$.Deferred(function( deferred ){
				$( deferred.resolve );
				})
				).done(function(){					
					if (bblog) {						
						allowadm = bblog.allowadmb;
						if (allowadm.includes(masoldier)) {															
							var checkvaluespr = BBLog.storage("general.dmgspread");	
							var checkvaluesprply = BBLog.storage("general.dmgspreadothers");
							var checkvaluedmg = BBLog.storage("bf4.showrealdmg.info");							
							var checkvaluehide = BBLog.storage("bf4.hidedmgspread.info");
							if (checkvaluehide == null) { checkvaluehide = 0; BBLog.storage("bf4.hidedmgspread.info", 0); }							
							if (checkvaluedmg == null) { checkvaluedmg = 0; BBLog.storage("bf4.showrealdmg.info", 0); }							
							if (checkvaluespr == null) { checkvaluespr = 0; BBLog.storage("general.dmgspread", 0); }
							if (checkvaluesprply == null) { checkvaluesprply = 1; BBLog.storage("general.dmgspreadothers", 1); }
							BBLog.configKeys.unshift({ "key": 'bf4.hidedmgspread.info', "init": checkvaluehide, "sections": { "bf4": 1 }, "group": "bf4" });
							BBLog.configKeys.unshift({ "key": 'bf4.showrealdmg.info', "init": checkvaluedmg, "sections": { "bf4": 1 }, "group": "bf4" });							
							BBLog.configKeys.unshift({ "key": 'general.dmgspreadothers', "init": checkvaluesprply, "sections": { "bf4": 1 }, "group": "bf4" });							
							BBLog.configKeys.unshift({ "key": 'general.dmgspread', "init": checkvaluespr, "sections": { "bf4": 1 }, "group": "bf4" });
							BBLogTranslations["en"]["bf4.showdmg.info"] = "[EWI] Screenshot: Display DMG/Spread";
							BBLogTranslations["de"]["bf4.showdmg.info"] = "[EWI] Screenshot: Display DMG/Spread";							
						}						
					}
			   });						
            } catch (e) {
                  console.error(e);
				  if (allowadm.includes(masoldier)) {
						var checkvaluespr = BBLog.storage("general.dmgspread");	
						var checkvaluesprply = BBLog.storage("general.dmgspreadothers");
						var checkvaluedmg = BBLog.storage("bf4.showrealdmg.info");
						var checkvaluehide = BBLog.storage("bf4.hidedmgspread.info");
						if (checkvaluehide == null) { checkvaluehide = 0; BBLog.storage("bf4.hidedmgspread.info", 0); }							
						if (checkvaluedmg == null) { checkvaluedmg = 0; BBLog.storage("bf4.showrealdmg.info", 0); }							
						if (checkvaluespr == null) { checkvaluespr = 0; BBLog.storage("general.dmgspread", 0); }
						if (checkvaluesprply == null) { checkvaluesprply = 1; BBLog.storage("general.dmgspreadothers", 1); }
						BBLog.configKeys.unshift({ "key": 'bf4.hidedmgspread.info', "init": checkvaluehide, "sections": { "bf4": 1 }, "group": "bf4" });
						BBLog.configKeys.unshift({ "key": 'bf4.showrealdmg.info', "init": checkvaluedmg, "sections": { "bf4": 1 }, "group": "bf4" });						
						BBLog.configKeys.unshift({ "key": 'general.dmgspreadothers', "init": checkvaluesprply, "sections": { "bf4": 1 }, "group": "bf4" });				
						BBLog.configKeys.unshift({ "key": 'general.dmgspread', "init": checkvaluespr, "sections": { "bf4": 1 }, "group": "bf4" });
						BBLogTranslations["en"]["bf4.showdmg.info"] = "[EWI] Screenshot: Display DMG/Spread";
						BBLogTranslations["de"]["bf4.showdmg.info"] = "[EWI] Screenshot: Display DMG/Spread";
					}
            }			
			BBLogTranslations["en"]["bf4.showrealdmg.info"] = "[EWI] Show the real damage value";
			BBLogTranslations["de"]["bf4.showrealdmg.info"] = "[EWI] Show the real damage value";	
			BBLogTranslations["en"]["general.dmgspreadothers"] = "[EWI] Show DMG & Spread - Others";
			BBLogTranslations["en"]["general.dmgspreadothers.tooltip"] = "<h6>Extended Weapon Information</h6>Show DMG & Spread of others players.";
			BBLogTranslations["de"]["general.dmgspreadothers"] = "[EWI] Show DMG & Spread - Others";
			BBLogTranslations["de"]["general.dmgspreadothers.tooltip"] = "<h6>Extended Weapon Information</h6>Show DMG & Spread of others players.";
			BBLogTranslations["en"]["general.dmgspread"] = "[EWI] Show DMG & Spread - Yourself";
			BBLogTranslations["en"]["general.dmgspread.tooltip"] = "<h6>Extended Weapon Information</h6>Show DMG & Spread of yourself.";
			BBLogTranslations["de"]["general.dmgspread"] = "[EWI] Show DMG & Spread - Yourself";
			BBLogTranslations["de"]["general.dmgspread.tooltip"] = "<h6>Extended Weapon Information</h6>Show DMG & Spread of yourself.";
			BBLogTranslations["en"]["bf4.hidedmgspread.info"] = "[EWI] Hide Damage/Spread Help Info";
			BBLogTranslations["de"]["bf4.hidedmgspread.info"] = "[EWI] Hide Damage/Spread Help Info";	
		 }

        // include plugin gallery
        (function () {
            if (!BBLog.storage("general.plugingallery")) return;
            var data = BBLog.storage("plugins.gallery." + BBLog.cache("mode"));
            var initData = BBLog.storage("init.data");
            for (var id in data) {
                var active = data[id];
                if (!active || !initData || !initData["plugins"]) continue;
                for (var i in initData["plugins"]) {
                    if (initData["plugins"][i].id == id) {
                        $.ajax({
                            url: initData["plugins"][i].jsurl,
                            dataType: "script",
                            cache: true
                        });
                    }
                }
            }
        })();

        // add css code from theme editor
        (function () {
            if (BBLog.storage("theme.code.active") && BBLog.storage("general.themes")) {
                var code = BBLog.storage("theme.code");
                if (code && code.length) {
                    $("head").append($('<style type="text/css" id="bblog-editor-css">').html(code));
                }
            }
        })();

        // include themes
        (function () {
            if (!BBLog.storage("general.themes")) return;
            var data = BBLog.storage("theme.gallery." + BBLog.cache("mode"));
            var initData = BBLog.storage("init.data");
            for (var id in data) {
                var active = data[id];
                if (!active || !initData || !initData["themes-new"]) continue;
                for (var i in initData["themes-new"]) {
                    if (initData["themes-new"][i].id == id) {
                        $("head").append('<link rel="stylesheet" type="text/css" href="' + initData["themes-new"][i].cssurl + '" class="bblog-css"/>');
                    }
                }
            }
            var data = BBLog.storage("general.themes.own") || [];
            for (var i in data) {
                var d = data[i];
                if (!d || !d["url"] || !d["active"]) continue;
                $("head").append('<link rel="stylesheet" type="text/css" href="' + d["url"] + '?time=' + timeCache + '" class="bblog-css"/>');
            }
        })();

        // set background
        (function () {
            var bg = BBLog.storage("general.background.text." + BBLog.cache("mode"));
            if (bg && bg.length && BBLog.storage("general.background")) {
                if (bg.match(/^http/)) bg = "url(" + bg + ") top center repeat black";
                $("#base-background").css("background", bg);
            }
        })();
        // domchange mutation handler
        var mutationHandler = function (mutations) {
            BBLog.handle("domchanged.browsercall");
        };
        var observer = null;
        if (typeof WebKitMutationObserver != "undefined") {
            observer = new WebKitMutationObserver(mutationHandler);
        } else if (typeof MutationObserver != "undefined") {
            observer = new MutationObserver(mutationHandler);
        }
        observer.observe(document.body, { childList: true, subtree: true });
        // click handler
        $(document).on("click", function () {
            $("#bblog-options").remove();
            $("#bblog-menu-icon").removeClass("active");
            $("#bblog-contextmenu").hide();
        })
        // bblog api data callback
		
        function callbackBBLogApi(data, isCached) {
            if (!data) return;
            if (isCached !== true) {
                BBLog.storage("last.api.call." + BBLog.version, new Date().getTime() / 1000);
            }
            BBLog.storage("init.data", data);

            var username = BBLog.cache("account.name");
            if (BBLog.searchInObject(data.team, null, username)) {
                BBLog.configKeys.push({ "key": "developer.language", "init": 0, "group": "bblog" });				
            }
        }

        // check if api call is cached, if yes load from storage
        if (BBLog.storage("last.api.call." + BBLog.version) && BBLog.storage("last.api.call." + BBLog.version) > ((new Date().getTime() / 1000) - BBLog.cacheTimeInitCall)) {
            callbackBBLogApi(BBLog.storage("init.data"), true);
        } else {
            BBLog.initRequest(callbackBBLogApi);
        }

        // check if bblog is updated
       		var timernd = new Date().getTime();		    			
			var urlshowi = "https://github.com/irussao/BBLogPlugins";            
			try {
			  $.when(
				$.getScript( "https://irussao.github.io/bblogupdate.js?u="+timernd ),
				$.Deferred(function( deferred ){
				$( deferred.resolve );
				})
				).done(function(){					
					if (BBLog.version != bblog.version) {
						 BBLog.bblognewver = bblog.version;
						 var bblogvideo = bblog.video;
						 var bbloginfo = bblog.info;
						 if (!BBLog.storage("updatepopup." + BBLog.version)) {			
							BBLog.storage("updatepopup." + BBLog.version, 1);
							BBLog.popup('news', BBLog.t("update.title").replace(/\{version\}/ig, bblog.version), '<div style="padding:10px; padding-top:0px; font-size:12px; text-align:center;">' + BBLog.t("update.text.1").replace(/\{hp\}/ig, '<a href="'+urlshowi+'" target="_blank">'+urlshowi+'</a>') + '<br/>Info: '+bbloginfo+'<br/><iframe width="640" height="360" src="'+bblogvideo+'" frameborder="0" allowfullscreen></iframe></div>');
						 }
					}
			    });						
            } catch (e) {
                  console.error(e);
            }
			
        // detect viewport, bind to domchanges and replace anchors in viewport
        (function () {
            var func = function () {
                var h = $(window).height();
                var scroll = $(window).scrollTop();
                var viewportAnchors = BBLog.cache("viewport.anchors") || [];
                for (var i in viewportAnchors) {
                    if (!viewportAnchors[i]) continue;
                    viewportAnchors[i].each(function () {
                        var t = $(this).offset().top;
                        if (t >= scroll && t <= (scroll + h)) {
                            $(this).next().show().find("[data-src]").each(function () {
                                $(this).attr("src", $(this).attr("data-src"));
                            });
                            $(this).remove();
                        }
                    });
                }
            };
            $(window).on("scroll", func);
            BBLog.handle("domchange.addhandler", func);
        })();

        BBLog.handle("append.bblog.icon");
    },

    /**
     * BBLog init request
     *
     * @param callback
     */
    initRequest: function (callback) {
        BBLog.handle("api.json", {
            action: "bblog.init", params: {
                version: BBLog.version,
                soldier: BBLog.cache("soldier.id"),
                language: BBLog.cache("language"),
                themes: BBLog.storage("general.themes") ? BBLog.storage("theme.gallery." + BBLog.cache("mode")) : null,
                browser: BBLog.cache("browser"),
                section: BBLog.cache("mode"),
                plugins: BBLog.storage("general.plugingallery") ? BBLog.storage("plugins.gallery." + BBLog.cache("mode")) : null
            },
            handler: callback
        });
    },

    /**
     * The handler for mostly all option actions
     *
     * @param action
     * @param data Any data
     * @param A callback if process is finished, optional
     * @return mixed
     */
    handle: function (action, data, callback) {
        this.callback = typeof callback == "function" ? callback : function () {
        };
        switch (action) {
            case "append.bblog.icon":
                if ($("#bblog-icon").length) return this.callback();
                var handlerType = BBLog.storage("bblog.click") ? "click" : "mouseenter";
                $("body").append($('<div id="bblog-icon">').on(handlerType + " open", function () {
                    $("#bblog-sidebar").remove();
                    var e = $('<div id="bblog-sidebar" style="left:-' + $(this).width() + 'px"><div class="inner"><div class="scrollArea"></div></div></div>');
                    if (!$("#bblog-sidebar-help").length) $("body").append('<div id="bblog-sidebar-help"><div class="inner"></div></div>');
                    $("body").append(e);
                    e.animate({ left: 0 }, 200);

                    $(document).on("mousemove.bblog", function (ev) {
                        if (!$("#bblog-sidebar").length) return;
                        if (ev.pageX > $("#bblog-sidebar").width() + 20) {
                            $("#bblog-sidebar").animate({ left: -$("#bblog-sidebar").width() }, 200, function () {
                                $(this).remove();
                            });
                        }
                    });

                    var cont = e.find(".scrollArea");
                    cont.height($("#bblog-sidebar").height() - 20);
					var newverhtml = "";					
					if (BBLog.bblognewver != '0') newverhtml = "<br><a href='https://github.com/irussao/BBLogPlugins' target='_blank'>New version available! BBLog " + BBLog.bblognewver + "</a>";
                    cont.append($('<div class="titleb"><center><a href="https://github.com/irussao/BBLogPlugins" target="_blank">Better Battlelog ' + BBLog.version + " </a>" + newverhtml +'</center></div>'));
					// .on("click", function () { window.open('https://getbblog.com/forums/sitemap.html', '_blank'); }));
					
                    cont.append($('<div class="importexport">')
                        .append(
                            $('<input type="file"/>').attr("data-help", BBLog.t("import.settings.tooltip")).on("change", function (ev) {
                                var files = ev.target.files;
                                var storageFix = function (object) {
                                    for (var i in object) {
                                        if (object[i] === "null" || object[i] === "undefined") {
                                            delete object[i];
                                        } else if (typeof object[i] == "object" || typeof object[i] == "object") {
                                            object[i] = storageFix(object[i]);
                                        }
                                    }
                                    return object;
                                };
                                for (var i = 0, f; f = files[i]; i++) {
                                    var reader = new FileReader();
                                    reader.onload = (function (theFile) {
                                        return function (e) {
                                            try {
                                                var json = JSON.parse(e.target.result);
                                                if (json && typeof json["general.inlineimages"] != "undefined") {
                                                    BBLog._storage = storageFix(json);
                                                    BBLog.storage("general.inlineimages", json["general.inlineimages"]);
                                                }
                                            } catch (e) {
                                            }
                                            window.location.href = BBLog.getCleanUrl();
                                        };
                                    })(f);
                                    reader.readAsBinaryString(f);
                                }
                            })
                        ).append(
                            $('<span class="bblog-button import tiny">' + BBLog.t("import.settings") + '</span>')
                        ).append(
                            $('<span class="bblog-button export tiny">' + BBLog.t("export.settings") + '</span>').attr("data-help", BBLog.t("export.settings.tooltip")).on("click", function () {
                                var a = document.createElement("a");
                                var download = function (data, fileName) {
                                    var json = JSON.stringify(data),
                                        blob = new Blob([json], {type: "octet/stream"}),
                                        url = window.URL.createObjectURL(blob);
                                    a.href = url;
                                    a.download = fileName;
                                    document.body.appendChild(a);
                                    a.click();
                                    setTimeout(function () {
                                        document.body.removeChild(a);
                                        window.URL.revokeObjectURL(url);
                                    }, 100);
                                };
                                download(BBLog._storage, "bblog-settings.json");
                            })
                        )
                    );
                    cont.find(".importexport input").width(cont.find(".importexport span:first").outerWidth());

                    var configGroups = {};
                    for (var i in BBLog.configKeys) {
                        var data = BBLog.configKeys[i];
                        if (!data) continue;
                        if (typeof data.sections != "undefined" && typeof data.sections[BBLog.cache("mode")] == "undefined") continue;
                        if (typeof configGroups[data.group] == "undefined") configGroups[data.group] = [];
                        configGroups[data.group].push(data);
                    }

                    for (var group in configGroups) {
                        var groupCont = $('<div class="option-group">');
                        cont.append(groupCont);
                        var minimizeKey = group + '.minimize';
                        var cl = BBLog.storage(minimizeKey) ? 'plus' : '';
                        groupCont.append($('<div class="section-title" data-key="' + minimizeKey + '"><span class="bblog-minimize ' + cl + '"></span> ' + BBLog.t("section." + group) + '</div>').on("click", function () {
                            $(this).next().toggle();
                            $(this).find(".bblog-minimize").toggleClass("plus");
                            BBLog.storage($(this).attr("data-key"), $(this).find(".bblog-minimize").hasClass("plus"));
                            cont.data("jsp").reinitialise();
                        }));
                        var sectionCont = $('<div class="section-configs">');
                        if (BBLog.storage(minimizeKey)) sectionCont.hide();
                        for (var i in configGroups[group]) {
                            var data = configGroups[group][i];

                            var key = data.key;
                            var advanced = data.button;
                            var handler = data.handler;
                            var sections = data.sections;

                            var tooltip = BBLog.t(key + '.tooltip') != key + '.tooltip' ? BBLog.t(key + '.tooltip') : null;
                            var cfg = $('<div class="section-config"><span class="bblog-switch" data-key="' + key + '"></span> <span class="section-text">' + BBLog.t(key) + '</span></div>');
                            if (BBLog.storage(key)) cfg.find(".bblog-switch").addClass("active");
                            if (advanced) cfg.find(".section-text").attr("data-advanced", advanced).addClass("bblog-button tiny");
                            if (typeof handler == "function") cfg.find("span:last").addClass("bblog-button tiny").removeClass("section-text").on("click", handler);
                            if (tooltip) cfg.attr("data-help", tooltip);
                            cfg.find(".section-text").on("click", function () {
                                $(this).prev().trigger("click")
                            });
                            sectionCont.append(cfg);
                        }
                        groupCont.append(sectionCont);
                        groupCont.find("[data-advanced]").off().on("click", function () {
                            var type = $(this).attr("data-advanced");
                            var key = $(this).prev("[data-key]").attr("data-key");
                            var descKey = key + ".tooltip";
                            var loadPopup = function () {
                                var e = $('<div>');
                                var obj = {
                                    "type": type,
                                    "key": key,
                                    "description": BBLog.t(descKey),
                                    "title": BBLog.t(key),
                                    "configObject": BBLog.getConfigData(key),
                                    "container": e,
                                    "loadPopup": loadPopup
                                };
                                BBLog.handle("advanced.option." + type, obj);
                                if (obj.description) e.prepend('<div class="section-description">' + BBLog.t(key + ".tooltip") + '</div>');
                                BBLog.popup("bblog-option", obj.title, e);
                            };
                            loadPopup();
                        });
                    }

                    cont.append('<br/><br/><br/><span class="build-nr">BBLog Build ' + BBLog.build + '</span>');
                    cont.find(".bblog-switch").on("click", function () {
                        $(this).toggleClass("active");
                        var set = $(this).hasClass("active");
                        var key = $(this).attr("data-key");
                        var value = set ? 1 : 0;
                        BBLog.storage(key, value);
                        BBLog.handle("onchange.config", { 'key': key, 'value': value });
                    });
                    cont.find("[data-help]").on("mouseenter", function () {
                        $("#bblog-sidebar-help").stop().css("top", $(this).offset().top).children().html($(this).attr("data-help"));
                        $("#bblog-sidebar-help").show().fadeOut(0).fadeIn(500);
                    }).on("mouseleave", function () {
                        $("#bblog-sidebar-help").hide().stop();
                    });
                    cont.jScrollPane().on("mousewheel", function (ev) {
                        ev.preventDefault();
                    });
                }));
                break;
            case "onchange.config":
                switch (data.key) {
                    case "developer.language":
                        if (data.value) {
                            base.showReceipt("Loading... Please wait... Page reload automatically");
                            $.getScript(BBLog.serviceUrl + "/dev/addon-translations.js", function () {
                                base.showReceipt("Reloading now");
                                sessionStorage.setItem("bblog-dev-language", JSON.stringify(BBLogTranslations));
                                window.location.href = BBLog.getCleanUrl();
                            });
                        } else {
                            base.showReceipt("Reloading now");
                            sessionStorage.removeItem("bblog-dev-language");
                            window.location.href = BBLog.getCleanUrl();
                        }
                        break;
                    default:
                        BBLog.handle("domchange.browsercall");
                        base.showReceipt(BBLog.t("reload.required") + " (F5)");
                }
                break;
            case "advanced.option.favorites":

                var storageKey = "board.favthreads";
                var storage = BBLog.storage(storageKey) || [];

                data.title += " (" + BBLog.count(storage, true) + ")";
                data.description = null;

                var table = $("<table>");
                for (var i in storage) {
                    var tmp = storage[i];
                    if (!tmp) continue;
                    table.append(
                        '<tr>' +
                        '<td style="width:100%"><a href="/' + tmp.source + '/' + BBLog.cache("battlelog.language") + 'forum/threadview/' + tmp.id + '/">' + tmp.title + '</a></td>' +
                        '<td><span class="bblog-delete" data-id="' + i + '"></span></td>' +
                        '</tr>'
                    );
                }

                table.find(".bblog-delete").attr("data-tooltip", BBLog.t("favThreads.delete")).on("click", function () {
                    var id = $(this).attr("data-id");
                    if (typeof storage[id] != "undefined") delete storage[id];
                    BBLog.storage("board.favthreads", storage);
                    $(this).closest("tr").fadeOut(500);
                });

                data.container.append(table);
                break;
            case "advanced.option.radar":

                data.storageKey = "radar." + data.configObject.type;
                data.storage = BBLog.storage(data.storageKey) || [];

                data.sourceKey = data.key + ".sources";
                data.sourceStorageKey = data.storageKey + ".sources";
                data.sourceStorage = BBLog.storage(data.sourceStorageKey) || [];
                data.cacheStorage = BBLog.cache(data.storageKey) || [];

                data.title = BBLog.t(data.key);
                data.description = null;

                // sources
                data.container.append('<b>' + BBLog.t("radar.sources") + ' (' + BBLog.count(data.sourceStorage, true) + ')</b>');
                data.container.append('<div class="section-description">' + BBLog.t(data.sourceKey + ".tooltip") + '</div>');
                data.container.append($('<input type="text" value="' + BBLog.t("example") + ': ' + BBLog.serviceUrl + '/sources/' + data.configObject.type + '.json"/>').attr("data-tooltip", BBLog.t('board.radar.sources.add')).on("keyup", function (e) {
                    if (e.keyCode == 13) {
                        var url = $.trim(this.value);
                        if (url.match(/^http.*\.json/)) {
                            data.sourceStorage.push({ "url": url });
                            BBLog.storage(data.sourceStorageKey, data.sourceStorage);
                            data.loadPopup();
                            base.showReceipt(BBLog.t("reload.required") + " (F5)");
                        }
                    }
                }));

                var table = $("<table>");
                for (var i in data.sourceStorage) {
                    var d = data.sourceStorage[i];
                    if (!d) continue;
                    table.append(
                        '<tr>' +
                        '<td style="width:100%"><a href="' + d["url"] + '" target="_blank">' + d["url"] + '</a></td>' +
                        '<td><span class="bblog-delete" data-id="' + i + '"></span></td>' +
                        '</tr>'
                    );
                }
                table.find(".bblog-delete").on("click", function () {
                    var id = $(this).attr("data-id");
                    if (typeof data.sourceStorage[id] != "undefined") delete data.sourceStorage[id];
                    BBLog.storage(data.sourceStorageKey, data.sourceStorage);
                    base.showReceipt(BBLog.t("reload.required") + " (F5)");
                    data.loadPopup();
                });
                data.container.append(table);

                // radar itself
                data.container.append('<br/><br/><b>' + BBLog.t(data.key) + ' (' + BBLog.count(combined, true) + ')</b>');
                data.container.append('<div class="section-description">' + BBLog.t(data.key + ".tooltip") + '</div>');

                var table = $("<table>");
                var combined = [data.storage, data.cacheStorage];
                for (var c in combined) {
                    for (var i in combined[c]) {
                        var d = combined[c][i];
                        if (!d) continue;
                        var rootUrl = '/' + d.source + '/' + BBLog.cache("battlelog.language");
                        var deleteBtn = '<span class="bblog-delete" data-id="' + i + '"></span>';
                        if (d.fromsource) deleteBtn = "";
                        switch (data.configObject.type) {
                            case "board":
                                table.append(
                                    '<tr>' +
                                    '<td style="width:100%"><a href="' + rootUrl + 'user/' + d["name"] + '/">' + d["name"] + '</a></td>' +
                                    '<td>' + deleteBtn + '</td>' +
                                    '</tr>'
                                );
                                break;
                            case "server":
                                table.append(
                                    '<tr>' +
                                    '<td style="width:100%"><a href="' + rootUrl + 'servers/show/pc/' + d["id"] + '/">' + d["id"] + ' (' + d["name"] + ')</a></td>' +
                                    '<td>' + deleteBtn + '</td>' +
                                    '</tr>'
                                );
                                break;
                            case "soldier":
                                table.append(
                                    '<tr>' +
                                    '<td style="width:100%"><a href="' + rootUrl + 'soldier/' + encodeURIComponent(d.name) + '/stats/' + d["id"] + '/pc/">' + d["id"] + ' (' + d["name"] + ')</a></td>' +
                                    '<td>' + deleteBtn + '</td>' +
                                    '</tr>'
                                );
                                break;
                        }
                    }
                }
                table.find(".bblog-delete").on("click", function () {
                    var id = $(this).attr("data-id");
                    if (typeof data.storage[id] != "undefined") delete data.storage[id];
                    BBLog.storage(data.storageKey, data.storage);
                    base.showReceipt(BBLog.t("reload.required") + " (F5)");
                    data.loadPopup();
                });
                data.container.append(table);
                break;
            case "advanced.option.signature":
                data.container.append($('<textarea cols="5" rows="5">').attr("data-tooltip", BBLog.t(action + ".textarea")).val(BBLog.storage("board.signature.text")).on("blur", function () {
                    this.value = $.trim(this.value);
                    this.value = this.value.replace(/http:\/\/([^\s]+)?(youtube\.com|youtu\.be)/ig, "$1$2");
                    this.value = this.value.replace(/https:\/\/([^\s]+)?(youtube\.com|youtu\.be)/ig, "$1$2");
                    this.value = this.value.replace(/http:\/\/([^\s]+)?(\.png|\.jpg|\.jpeg|\.gif)/ig, "$1$2");
                    this.value = this.value.replace(/https:\/\/([^\s]+)?(\.png|\.jpg|\.jpeg|\.gif)/ig, "$1$2");
                    this.value = this.value.replace(/\n{2,99}/g, "\n");
                    this.value = this.value.substr(0, 127);
                    BBLog.storage("board.signature.text", this.value);
                }));
                break;
            case "advanced.option.background":
                var val = BBLog.storage("general.background.text." + BBLog.cache("mode"));
                var del = true;
                if (!val) {
                    var del = false;
                    val = BBLog.t("example") + ': https://getbblog.com/img/banners/1920x1080.jpg OR url(https://getbblog.com/img/banners/1920x1080.jpg) top center no-repeat'
                }
                data.container.append($('<input type="text"/>').val(val).on("keyup", function (ev) {
                    if (ev.keyCode == 13) {
                        BBLog.storage("general.background.text." + BBLog.cache("mode"), $.trim(this.value));
                        base.showReceipt(BBLog.t("reload.required") + " (F5)");
                        data.loadPopup();
                    }
                }));
                if (del) {
                    data.container.append($('<span class="bblog-button tiny">' + BBLog.t("delete") + '</span>').on("click", function () {
                        BBLog.storage("general.background.text." + BBLog.cache("mode"), null);
                        data.loadPopup();
                        base.showReceipt(BBLog.t("reload.required") + " (F5)");
                    }));
                }
                break;
            case "advanced.option.themes":
                // gallery
                (function () {
                    var storageKey = "theme.gallery." + BBLog.cache("mode");
                    var storage = BBLog.storage(storageKey) || {};
                    data.container.html("<div class='bblog-plugingallery'>Loading...</div>");
                    BBLog.initRequest(function (d) {
                        var container = data.container.find(".bblog-plugingallery");
                        container.html('');

                        var addTheme = function (themeData) {
                            if (themeData.info.game.toLowerCase() == BBLog.cache("mode")) {
                                var info = '<div class="info">';
                                for (var i in themeData.info) {
                                    var tmp = themeData.info[i];
                                    if (i == "lastupdate") {
                                        tmp = '<span data-timestamp="' + tmp + '"></span>';
                                    }
                                    info += '<div>';
                                    info += '<span class="cell-a">' + BBLog.t("theme." + i) + '</span>';
                                    info += '<span class="cell-b">' + tmp + '</span>';
                                    info += '</div>';
                                }
                                info += '</div>';
                                container.append('<div data-id="' + themeData.id + '" class="plugin"><div class="title"><span class="bblog-switch"></span> <a href="' + themeData.url + '" target="_blank">' + themeData.name + '</a> | ' + BBLog.t("theme.creator") + " " + themeData.info.creator + '</div><div class="desc">' + themeData.desc.replace(/[<|>]/ig, "") + '</div><div class="info">' + info + '</div><div class="img"><img src="' + themeData.imgurl + '" alt="" width="100%"/></div></div>');
                            }
                        };
                        var themesArr = [];
                        for (i in d["themes-new"]) themesArr.push(d["themes-new"][i]);
                        if (themesArr) {
                            themesArr.sort(function (a, b) {
                                return b.info.count - a.info.count;
                            });
                        }
                        if (themesArr) {
                            for (var i in themesArr) if (typeof storage[themesArr[i].id] != "undefined" && storage[themesArr[i].id]) addTheme(themesArr[i]);
                            for (var i in themesArr) if (typeof storage[themesArr[i].id] == "undefined" || !storage[themesArr[i].id]) addTheme(themesArr[i]);
                        }
                        container.find(".bblog-switch").attr("data-tooltip", BBLog.t("plugingallery.activate")).on("click", function (ev) {
                            $(this).toggleClass("active");
                            storage = {};
                            if ($(this).hasClass("active")) storage[$(this).closest(".plugin").attr("data-id")] = true;
                            container.find(".plugin").find(".bblog-switch").not(this).removeClass("active");
                            BBLog.storage(storageKey, storage);
                            base.showReceipt(BBLog.t("reload.required") + " (F5)");
                            ev.stopPropagation();
                        });
                        for (var i in storage) {
                            if (storage[i]) container.find(".plugin[data-id='" + i + "']").find(".bblog-switch").addClass("active");
                        }
                        container.find(".plugin").on("click", function () {
                            container.find(".plugin").not(this).removeClass("active");
                            $(this).toggleClass("active");
                        });
                        base.agoIntervalHandler();
                    });
                })();

                // custom
                (function () {
                    var storageKey = data.key + ".own";
                    var storage = BBLog.storage(storageKey) || [];
                    var iData = {};
                    iData.example = BBLog.t("example") + ': ' + BBLog.serviceUrl + '/themes/example.css';
                    iData.tooltip = BBLog.t("custom.themes.add");

                    var table = $("<table>");
                    for (var i in storage) {
                        var tmp = storage[i];
                        if (!tmp) continue;
                        table.append(
                            '<tr>' +
                            '<td><span class="bblog-switch ' + (tmp.active ? 'active' : '') + '" data-id="' + i + '"></span></td>' +
                            '<td style="width:100%"><a href="' + tmp["url"] + '" target="_blank">' + tmp["url"] + '</a></td>' +
                            '<td><span class="bblog-delete" data-id="' + i + '"></span></td>' +
                            '</tr>'
                        );
                    }
                    data.container.append(table);
                    data.container.append($('<input type="text" value=""/>').attr("data-tooltip", iData.tooltip).on("keyup", function (ev) {
                        if (ev.keyCode == 13) {
                            var url = $.trim(this.value);
                            if (url.match(/^http.*/)) {
                                storage.push({ "url": $.trim(url), "active": 1 });
                                BBLog.storage(storageKey, storage);
                                base.showReceipt(BBLog.t("reload.required") + " (F5)");
                                data.loadPopup();
                            }
                        }
                    }));
                    data.container.find(".bblog-switch").on("click", function () {
                        var id = $(this).attr("data-id");
                        if (typeof storage[id] == "undefined") return false;
                        $(this).toggleClass("active");
                        storage[id]["active"] = $(this).hasClass("active");
                        BBLog.storage(storageKey, storage);
                        base.showReceipt(BBLog.t("reload.required") + " (F5)");
                    });
                    data.container.find(".bblog-delete").on("click", function () {
                        var id = $(this).attr("data-id");
                        if (typeof storage[id] != "undefined") delete storage[id];
                        BBLog.storage(storageKey, storage);
                        base.showReceipt(BBLog.t("reload.required") + " (F5)");
                        data.loadPopup();
                    });

                    data.container.append($('<div style="margin-top:10px; font-weight:bold">').text(BBLog.t("theme.editor.title")));
                    data.container.append($('<div style="margin-bottom:10px;">').html(BBLog.t("theme.editor").replace(/\n/ig, "<br/>")));
                    data.container.append($('<div style="margin-top:5px; margin-bottom:5px">').html('<a href="https://getbblog.com/themes/example.css" target="_blank">' + BBLog.t("theme.editor.link1") + '</a> - <a href="https://getbblog.com/board/forum/1349/1/Custom-Themes" target="_blank">' + BBLog.t("theme.editor.link2") + '</a> - <a href="https://www.youtube.com/watch?v=Ypawi2sX9rU" target="_blank">&#10148;  ' + BBLog.t("theme.editor.link3") + '</a>'));
                    data.type = "theme";
                    BBLog.handle("_advanced.option.editor.add", data);
                })();
                break;
            case "advanced.option.plugins":
                var storageKey = data.key + ".own";
                var storage = BBLog.storage(storageKey) || [];
                var iData = {};
                if (action == "advanced.option.channels") {
                    iData.example = "";
                    iData.tooltip = BBLog.t("channels.add");
                } else {
                    iData.example = BBLog.t("example") + ': ' + BBLog.serviceUrl + '/plugins/example.js';
                    iData.tooltip = BBLog.t("custom.plugins.add");
                }

                var table = $("<table>");
                for (var i in storage) {
                    var tmp = storage[i];
                    if (!tmp) continue;
                    table.append(
                        '<tr>' +
                        '<td><span class="bblog-switch ' + (tmp.active ? 'active' : '') + '" data-id="' + i + '"></span></td>' +
                        '<td style="width:100%"><a href="' + tmp["url"] + '" target="_blank">' + tmp["url"] + '</a></td>' +
                        '<td><span class="bblog-delete" data-id="' + i + '"></span></td>' +
                        '</tr>'
                    );
                }
                data.container.append(table);
                data.container.append($('<input type="text" value=""/>').attr("data-tooltip", iData.tooltip).on("keyup", function (ev) {
                    if (ev.keyCode == 13) {
                        var url = $.trim(this.value);
                        if (url.match(/^http.*/)) {
                            var storage = BBLog.storage(storageKey) || [];
                            storage.push({ "url": $.trim(url), "active": 1 });
                            BBLog.storage(storageKey, storage);
                            base.showReceipt(BBLog.t("reload.required") + " (F5)");
                            data.loadPopup();
                        }
                    }
                }));
                data.container.find(".bblog-switch").on("click", function () {
                    var id = $(this).attr("data-id");
                    var storage = BBLog.storage(storageKey) || [];
                    if (typeof storage[id] == "undefined") return false;
                    $(this).toggleClass("active");
                    storage[id]["active"] = $(this).hasClass("active");
                    BBLog.storage(storageKey, storage);
                    base.showReceipt(BBLog.t("reload.required") + " (F5)");
                });
                data.container.find(".bblog-delete").on("click", function () {
                    var id = $(this).attr("data-id");
                    var storage = BBLog.storage(storageKey) || [];
                    if (typeof storage[id] != "undefined") delete storage[id];
                    BBLog.storage(storageKey, storage);
                    base.showReceipt(BBLog.t("reload.required") + " (F5)");
                    data.loadPopup();
                });

                data.container.append($('<div style="margin-top:10px; font-weight:bold">').text(BBLog.t("plugin.editor.title")));
                data.container.append($('<div style="margin-top:5px;">').html('<a href="https://getbblog.com/plugins/example.js" target="_blank">' + BBLog.t("plugin.editor.link1") + '</a> - <a href="https://getbblog.com/board/forum/1353/1/Custom-Plugins" target="_blank">' + BBLog.t("plugin.editor.link2") + '</a> - <a href="https://www.youtube.com/watch?v=ce7FTOJSK4g" target="_blank">&#10148;  ' + BBLog.t("plugin.editor.link3") + '</a>'));
                data.container.append($('<div style="margin-bottom:10px;">').html(BBLog.t("plugin.editor").replace(/\n/ig, "<br/>")));

                data.type = "plugin";
                BBLog.handle("_advanced.option.editor.add", data);
                break;
            case "_advanced.option.editor.add":
                var editor = null;
                if (typeof ace == "undefined") { // url: BBLog.serviceUrl + "/ace/ace.js",
                    $.ajax({
						url: "https://irussao.github.io/bbl/api/ace.js",
                        dataType: "script"
                    });
                }
                data.container.append($('<div id="bblog-code-editor-receipt">'));
                data.container.append(
                    $('<div>').append($('<input type="button" class="bblog-button" style="width:auto;"/>').val(BBLog.t("plugin.editor.fullscreen")).on("click", function () {
                        $("body").append('<div id="bblog-code-editor-fullscreen">');
                        $("#bblog-code-editor-fullscreen").append($('<input type="button" id="bblog-code-editor-return" class="bblog-button" />').val(BBLog.t("plugin.editor.return")).on("click", function () {
                            $("#bblog-code-editor-normal").children("*").remove();
                            $("#bblog-code-editor-normal").append($("#bblog-code-editor"));
                            $("#bblog-code-editor-fullscreen").remove();
                            $(window).trigger("bblog-editor-init");
                            editor.resize();
                            editor.focus();
                            editor.navigateFileStart();
                        })).append($("#bblog-code-editor").css("height", ""));
                        editor.resize();
                        editor.focus();
                        editor.navigateFileStart();
                    })).append(
                        $('<input type="button" class="bblog-button" value="" style="width:auto;" id="bblog-editor-run"/>').attr("data-tooltip", BBLog.t(data.type + ".editor.test.tooltip")).on("click", function () {
                            $(this).toggleClass("active");
                            BBLog.storage(data.type + ".code.active", 0);
                            if ($(this).hasClass("active")) $(this).trigger("run");
                            $(this).trigger("update");
                        }).on("update", function () {
                            $(this).removeClass("active").val(BBLog.t(data.type + ".editor.test.inactive"));
                            if (BBLog.storage(data.type + ".code.active")) {
                                $(this).addClass("active").val(BBLog.t(data.type + ".editor.test.active"));
                            } else {
                                $("#bblog-editor-css").remove();
                            }
                        }).on("run", function () {
                            if (data.type == "theme") {
                                $("#bblog-code-editor-receipt").stop().show().text(BBLog.t(data.type + ".editor.loaded")).css("opacity", 1).fadeTo(5000, 0.5);
                                var e = $("#bblog-editor-css");
                                if (e.length) e.remove();
                                BBLog.storage("general.themes", 1);
                                BBLog.storage(data.type + ".code.active", 1);
                                $("head").append($('<style type="text/css" id="bblog-editor-css">').html(editor.getValue()));
                            } else if (data.type == "plugin") {
                                try {
                                    BBLog.runCode(editor.getValue());
                                    $("#bblog-code-editor-receipt").stop().show().text(BBLog.t(data.type + ".editor.loaded")).css("opacity", 1).fadeTo(5000, 0.5);
                                    BBLog.storage("general.plugins", 1);
                                    BBLog.storage(data.type + ".code.active", 1);
                                } catch (e) {
                                    console.error("BBLog Plugin Test Error - See next message for trace");
                                    console.error(e.message);
                                    console.error(e.stack);
                                    alert("Plugin Test Error - See your browser developer tools (F12) -> console for detailed information");
                                    BBLog.storage("plugin.code.active", 0);
                                    $(this).removeClass("active")
                                }
                            }
                            $(this).trigger("update");
                        }).trigger("update")
                    )
                );
                data.container.append($('<div id="bblog-code-editor-normal">').append($('<div id="bblog-code-editor">').text(BBLog.storage(data.type + ".code") || "")));
                var iv = setInterval(function () {
                    if (typeof ace == "undefined") return;
                    clearInterval(iv);
                    editor = ace.edit("bblog-code-editor");
                    editor.setTheme("ace/theme/chrome");
                    if (data.type == "plugin") editor.getSession().setMode("ace/mode/javascript");
                    if (data.type == "theme") editor.getSession().setMode("ace/mode/css");
                    $(document).on("keydown", function (ev) {
                        if (ev.keyCode == 27 && $("#bblog-code-editor-fullscreen").length) {
                            $("#bblog-code-editor-return").trigger("click");
                        }
                        if (ev.ctrlKey && ev.keyCode == 83) {
                            $("#bblog-code-editor-return").trigger("click");
                            $("#bblog-editor-run").trigger("run");
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                    });
                    editor.on("change", function () {
                        BBLog.storage(data.type + ".code", editor.getValue());
                    });
                    $(window).on("resize bblog-editor-init", function () {
                        var e = $("#bblog-code-editor");
                        if (e.length && !$("#bblog-code-editor-fullscreen").length) {
                            e.height($("#popup-bblog-option .dialog-body").height() - e.position().top);
                        }
                    }).trigger("bblog-editor-init");
                }, 100);
                break;
            case "advanced.option.plugingallery":
                var storageKey = "plugins.gallery." + BBLog.cache("mode");
                var storage = BBLog.storage(storageKey) || {};
                data.container.html("<div class='bblog-plugingallery'>Loading...</div>");
                BBLog.initRequest(function (d) {
                    var container = data.container.find(".bblog-plugingallery");
                    container.html('');
                    var addPlugin = function (pluginData) {
                        if (pluginData.info.games.match(new RegExp(BBLog.cache("mode"), "i"))) {
                            var info = '<div class="info">';
                            for (var i in pluginData.info) {
                                var tmp = pluginData.info[i];
                                if (i == "lastupdate") {
                                    tmp = '<span data-timestamp="' + tmp + '"></span>';
                                }
                                info += '<div>';
                                info += '<span class="cell-a">' + BBLog.t("plugin." + i) + '</span>';
                                info += '<span class="cell-b">' + tmp + '</span>';
                                info += '</div>';
                            }
                            info += '</div>';
                            container.append('<div data-id="' + pluginData.id + '" class="plugin"><div class="title"><span class="bblog-switch"></span> <a href="' + pluginData.url + '" target="_blank">' + pluginData.name + '</a> | ' + BBLog.t("plugin.creator") + " " + pluginData.info.creator + '</div><div class="desc">' + pluginData.desc.replace(/[<|>]/ig, "") + '</div><div class="info">' + info + '</div><div class="img"><img src="' + pluginData.imgurl + '" alt="" width="100%"/></div></div>');
                        }
                    };
                    container.append('<div class="warn">' + BBLog.t("plugingallery.attention") + '</div>');
                    var pluginsArr = [];
                    for (i in d.plugins) pluginsArr.push(d.plugins[i]);
                    if (pluginsArr) {
                        pluginsArr.sort(function (a, b) {
                            return b.info.count - a.info.count;
                        });
                        for (var i in pluginsArr) if (typeof storage[pluginsArr[i].id] != "undefined" && storage[pluginsArr[i].id]) addPlugin(pluginsArr[i]);
                        for (var i in pluginsArr) if (typeof storage[pluginsArr[i].id] == "undefined" || !storage[pluginsArr[i].id]) addPlugin(pluginsArr[i]);
                    }
                    container.find(".bblog-switch").attr("data-tooltip", BBLog.t("plugingallery.activate")).on("click", function (ev) {
                        $(this).toggleClass("active");
                        storage[$(this).closest(".plugin").attr("data-id")] = $(this).hasClass("active");
                        BBLog.storage(storageKey, storage);
                        base.showReceipt(BBLog.t("reload.required") + " (F5)");
                        ev.stopPropagation();
                    });
                    for (var i in storage) {
                        if (storage[i]) container.find(".plugin[data-id='" + i + "']").find(".bblog-switch").addClass("active");
                    }
                    container.find(".plugin").on("click", function () {
                        container.find(".plugin").not(this).removeClass("active");
                        $(this).toggleClass("active");
                    });
                    base.agoIntervalHandler();
                });
                break;
            case "advanced.option.comments":
                data.key = "general.local.comments.data";
                var storage = BBLog.storage(data.key) || {};
                var table = $("<table>");
                for (var type in storage) {
                    for (var i in storage[type]) {
                        var d = storage[type][i];
                        if (!d || !d[0].length) continue;
                        var url = window.location.host != d[3] ? "http://" + d[3] + d[2] : d[2];
                        table.append(
                            '<tr>' +
                            '<td style="white-space:nowrap"><a href="' + url + '" onclick="base.redirect($(this).attr(\'href\')); return false;">' + type.toUpperCase() + " :: " + d[1] + '</a></td>' +
                            '<td style="width:100%">' + d[0].substr(0, 100) + '...</td>' +
                            '</tr>'
                        );
                    }
                }
                data.container.append(table);
                break;
            case "domchange.addhandler":
                data();
                var obj = BBLog.cache("domchange.handler") || [];
                obj.push(data);
                BBLog.cache("domchange.handler", obj);
                break;
            // add plugins
            case "add.plugin":
                if (typeof data != "object") return this.callback();
                if (typeof data.id == "undefined" || data.id.match(/[^0-9a-z\-]/)) {
                    console.error("BBLog Plugin with invalid characters as id parameter");
                    return this.callback();
                }
                // config flags
                if (typeof data.configFlags == "object") {
                    if (typeof data.translations != "object") {
                        console.error("Missing required translations object for plugin " + data.id);
                        return this.callback();
                    }
                    // delete old config keys if plugin has been already added
                    for (var i in BBLog.configKeys) {
                        if (!BBLog.configKeys[i]) continue;
                        if (BBLog.configKeys[i].key.match(new RegExp(data.id, "i"))) delete BBLog.configKeys[i];
                    }
                    for (var i in data.configFlags) {
                        var d = data.configFlags[i];
                        if (typeof d[0] != "undefined") {
                            var newD = { key: d[0], init: d[1] };
                            if (typeof d[2] != "undefined") newD.handler = d[2];
                            d = newD;
                        }
                        d.group = data.id;
                        if (typeof data.translations["en"][d.key] == "undefined") {
                            console.error("Missing required EN translation for plugin " + data.id + " and key " + d.key);
                            return this.callback();
                        }
                        if (typeof d.handler != "undefined") {
                            if (typeof d.handler != "function") {
                                delete d.handler;
                            } else {
                                var tmp = d.handler;
                                d.handler = function () {
                                    tmp(data);
                                }
                            }
                        }
                        d.key = data.id + "." + d.key;
                        if (BBLog.storage(d.key) === null) BBLog.storage(d.key, d.init);
                        BBLog.configKeys.push(d);
                    }
                }
                // translations
                BBLogTranslations["en"]["section." + data.id] = data.name;
                if (typeof data.translations == "object") {
                    if (typeof data.translations["cz"] != "undefined" && typeof data.translations["cs"] == "undefined") data.translations["cs"] = data.translations["cz"];
                    for (var lang in data.translations) {
                        for (var key in data.translations[lang]) {
                            if (key == "plugin.name") BBLogTranslations[lang]["section." + data.id] = data.translations[lang][key];
                            BBLogTranslations[lang][data.id + "." + key] = data.translations[lang][key];
                        }
                    }
                }
                // add some functions
                data.t = function (key) {
                    return BBLog.t(this.id + "." + key);
                }
                data.cache = function (key, value) {
                    return BBLog.cache(this.id + "." + key, value);
                }
                data.storage = function (key, value) {
                    return BBLog.storage(this.id + "." + key, value);
                }
                if (typeof data.init == "function") data.init(data);
                if (typeof data.domchange == "function") BBLog.handle("domchange.addhandler", function () {
                    data.domchange(data)
                });
                break
            // this is called everytime something changed, by the browser
            // we wait some time to prevent mass call of the triggers
            case "domchanged.browsercall":
                clearTimeout(BBLog.cache("domchange.timeout"));
                BBLog.cache("domchange.timeout", setTimeout(function () {
                    // call for each config key, if enabled
                    for (var i in BBLog.configKeys) {
                        var data = BBLog.configKeys[i];
                        if (!data) continue;
                        if (typeof data.sections != "undefined" && typeof data.sections[BBLog.cache("mode")] == "undefined") continue;
                        if (!BBLog.storage(data.key)) continue;
                        BBLog.handle(data.key, data);
                    }
                    // run user defined handler
                    var obj = BBLog.cache("domchange.handler");
                    if (obj) for (var i in obj) obj[i]();
                }, 250));

                break;
            // load data from the getbblog api
            case "api.json":
				 // modificar BBLog.serviceUrl + "/" + BBLog.cache("language") + "/api/" + data.action + "?jsoncallback=?"; // pegar all info do bbloginit, css, jss etc.. e jogar para github				 
                  var url = "https://irussao.github.io/bbl/api/" + data.action + "?jsoncallback=?";
                  $.getJSON(url, data.params, data.handler);
				  // console.log(url);
                break;
            case "source.callback":
                if (BBLog.count(data)) {
                    var type = storageKey = data["type"];
                    switch (type) {
                        case "radar.soldier":
                        case "radar.server":
                            var keyAs = "id";
                            var params = { "name": "name" };
                            break;
                        case "radar.board":
                            var keyAs = "name";
                            var params = {};
                            break;
                        default:
                            return false;
                    }
                    var storage = BBLog.cache(storageKey) || [];
                    data = data.list;
                    for (var i in data) {
                        var pushData = { 'fromsource': true, "source": BBLog.cache("mode") };
                        pushData[keyAs] = i;
                        for (var p in params) pushData[params[p]] = data[i][p];
                        storage.push(pushData);
                    }
                    BBLog.cache(storageKey, storage);
                }
                break;
            case "json.from.battlelog":
                if (data.url) {
                    data.cache = typeof data.cache == "undefined" ? true : data.cache;
                    // check of url is cached
                    if (data.cache) {
                        var cache = BBLog.cache("ajax.cache") || [];
                        var c = 0;
                        var max = 10;
                        for (var i in cache) {
                            if (c++ > max) {
                                delete cache[i];
                                continue;
                            }
                            var d = cache[i];
                            if (!d) continue;
                            if ((data.url && d.props.url == data.url) || (data.regex && new RegExp(data.regex, "i").test(d.props.url))) {
                                return data.callback($.parseJSON(d.responseText));
                            }
                        }
                    }
                    // if not cached, try to fetch it - but only of no regex is given
                    if (data.regex) return this.callback();
                    var cb = data.callback;
                    $.ajax({
                        "url": data.url,
                        success: function (data) {
                            cb(typeof data == "string" ? $.parseJSON(data) : data);
                        },
                        beforeSend: function (xhr, settings) {
                            xhr.overrideMimeType('application/json');
                            xhr.setRequestHeader('X-AjaxNavigation', 1);
                        }
                    });
                }
                break;
            case "json.post.to.battlelog":
                if (data.url) {
                    var cb = data.callback;
                    $.ajax({
                        "url": data.url,
                        "type": "post",
                        "data": data.data,
                        success: function (data) {
                            cb(typeof data == "string" ? $.parseJSON(data) : data);
                        },
                        beforeSend: function (xhr, settings) {
                            xhr.overrideMimeType('application/json');
                            xhr.setRequestHeader('X-AjaxNavigation', 1);
                        }
                    });
                }
                break;
            case "clear.storage":
                BBLog._storage = {};
                BBLog.storage("alive", 1);
                break;
            case "clear.plugins":
                BBLog.storage("general.plugins.own", []);
                break;
            case "clear.themes":
                BBLog.storage("general.themes.own", []);
                BBLog.storage("general.themes.active", null);
                break;
            case "bf3.stats.higherlevel":
                if (BBLog.cache("mode") != "bf3" || !window.location.href.match(/\/soldier\/.*\/stats\//)) return this.callback();
                var e = $(".profile-venicestats-overview-highlight-rank");
                if (BBLog.elementCheck(e, action)) return this.callback();
                var maxRankPoints = 24600000;
                var score = parseInt($(".profile-venicestats-overview-total-score").text().replace(/[^0-9]/ig, ""));
                var rank = 145 + Math.floor((score - maxRankPoints) / 230000);
                if (rank > 145) {
                    var colonelSS = rank - 45;
                    $(".profile-venicestats-overview-highlight-rank-info *:first").append('<br/><div style="font-size:14px;">(' + BBLog.t("bblog.rank") + ' ' + rank + ')</div>');
                    $(".profile-venicestats-overview-highlight-rank-info *:last").append('<br/><div style="font-size:14px;">(' + BBLog.t("bblog.service.star") + ' ' + colonelSS + ')</div>');
                }
                break;
            case "bf4.stats.higherlevel":
                if (BBLog.cache("mode") != "bf4" || !window.location.href.match(/\/soldier\/.*\/stats\//)) return this.callback();
                var e = $("#overview-rank");
                if (BBLog.elementCheck(e, action)) return this.callback();
                var rank = Math.floor(parseInt($("#stat-score").text().replace(/[^0-9]/ig, "")) / 100000);
				var overrank = '<div style="color:white;text-shadow: -1px 0#f24400, 0 1px #fb4a21, 1px 0 #b7430a, 0 -1px #ec4917; float: left; position: absolute; left: -16px; top: -104px;"> .' + rank + '</div>';
                $("#overview-rank .rank").append('<br/><div class="bblog-rank">(' + BBLog.t("bblog.rank") + ' ' + rank + ')'+overrank+'</div>').attr("data-tooltip", BBLog.t("bblog.rank.info"));
                break;
            case "bfh.stats.higherlevel":
                if (BBLog.cache("mode") != "bfh" || !window.location.href.match(/\/agent\/.*\/stats\//)) return this.callback();
                var e = $("#overview-rank");
                if (BBLog.elementCheck(e, action)) return this.callback();
                var score = parseInt($(".box-footer.cash").find(".box-stats-value").first().text().replace(/[^0-9]/ig, ""));
                var rank = Math.floor(score / 100000);
                e.find(".bfh-rank").append('<div class="bblog-rank">(' + BBLog.t("bblog.rank") + ' ' + rank + ')</div>').attr("data-tooltip", BBLog.t("bblog.rank.info"));
                break;
            case "bf4.serverbrowser.truecounts":
                try {
                    if (BBLog.cache("mode") != "bf4" || !serverbrowserwarsaw || !serverbrowserwarsaw.table) return this.callback();
                    if (!window.location.href.match(/\/servers\//i) || window.location.href.match(/\/playnow\//i)) return this.callback();
                    var e = serverbrowserwarsaw.table;

                    e.find("tbody .server-row").each(function () {
                        let $self = $(this)
                        if ($(this).find("td.players").hasClass("bblog-serverbrowser-playercounts-ignore")) return true;
                        $self.find("td.players").addClass("bblog-serverbrowser-playercounts-ignore")

                        $(this).addClass("bblog-serverbrowser-playercounts")
                        var server = $(this).data("server");
                        if (!server) return true;

                        var url = S.globalContext.staticContext.keeperQueryEndpoint + "/snapshot/" + server.guid;
                        $.get(url, function (receievedQueryInfo) {
                            try {
                                if (typeof receievedQueryInfo === "object" && receievedQueryInfo.snapshot) {
                                    let totalPlayers = 0
                                    let joining = 0
                                    if (!receievedQueryInfo.snapshot.teamInfo) return;

                                    Object.keys(receievedQueryInfo.snapshot.teamInfo).forEach(function (key) {
                                        if (key == 0) {
                                            joining += Object.keys(receievedQueryInfo.snapshot.teamInfo[key].players).length
                                        }
                                        else {
                                            totalPlayers += Object.keys(receievedQueryInfo.snapshot.teamInfo[key].players).length
                                        }
                                    });
                                    server.slots[5] = {
                                        current: totalPlayers,
                                        max: server.slots[2].max
                                    }

                                    let countHTML = server.slots[5].current + "/" + server.slots[5].max
                                    if (joining > 0) { countHTML += ` (${joining})` }
                                    let content = '<div class="bblog-slots truecount">' + countHTML + '</div>'
                                    if (!$self.find(".bblog-slots.truecount").length) {
                                        if ($self.find(".bblog-slots.commander").length) {
                                            $self.find(".bblog-slots.commander").before(content);
                                        }
                                        else if ($self.find(".bblog-slots.spectator").length) {
                                            $self.find(".bblog-slots.spectator").before(content);
                                        }
                                        else {
                                            $self.find("td.players").append(content);
                                        }
                                    }
                                    else {
                                        $self.find(".bblog-slots.truecount").html(content);
                                    }

                                    var difference = Math.abs(server.slots[2].current - server.slots[5].current);
                                    let differenceClass = (difference <= 2 ? 'low' : difference <= 5 ? 'mid' : 'high')

                                    $self.find(".bblog-slots.truecount").addClass(differenceClass);
                                    $self.find(".bblog-slots.truecount").css("font-size", "12px");
                                }
							}	                           
                            catch (error) {
                                console.error(error);
                            }
                        }).fail(function () {
                            console.log("UNKNOWN_ERROR");
                        });
                    });

                    if (BBLog.elementCheck(e, action)) return this.callback();

                    var last = e.find("th.server-info a[data-sort]").last();
                    last.after($('<a href="#" data-sort="truecounts" class="ignored-trigger-el">True Counts</a>').data("sort", "truecounts")).after(', ');

                    if (typeof serverbrowserwarsaw.sorter._refreshSortingsTPC == "undefined") {
                        serverbrowserwarsaw.sorter._refreshSortingsTPC = serverbrowserwarsaw.sorter.refreshSortings;
                        serverbrowserwarsaw.sorter.refreshSortings = function () {
                            serverbrowserwarsaw.sorter._refreshSortingsTPC();
                            var ASC = false;
                            var DESC = !ASC;
                            serverbrowserwarsaw.sorter.sortings.truecounts = {
                                defaultOrder: DESC,
                                dataType: "server",
                                sortFunc: function (server) {
                                    return server && server.slots && server.slots[5] ? server.slots[5].current + server.slots[5].max / 1000 : -1;
                                }
                            };
                        };
                    }
                    serverbrowserwarsaw.sorter.toggles.off("click.page.serverbrowser");
                    serverbrowserwarsaw.trigger("pageshow.sort");
                }
                catch (error) {
                    console.error(error)
                }
                break;
            case "bf4.serverbrowser.data":
                if (BBLog.cache("mode") != "bf4" || !serverbrowserwarsaw || !serverbrowserwarsaw.table) return this.callback();
				if (!window.location.href.match(/\/servers\//i) || window.location.href.match(/\/playnow\//i)) return this.callback();
                var e = serverbrowserwarsaw.table;

                e.find("tbody .server-row").each(function () {
                    $(this).addClass("bblog-serverbrowser-filters")
                    var data = $(this).data("server");
                    if (!data) return true;
                    if (data.slots[4] && !$(this).find(".bblog-slots.commander").length) $(this).find("td.players").append('<div class="bblog-slots commander"><span class="bblog-icon"></span>' + data.slots[4].current + "/" + data.slots[4].max + '</div>');
                    if (data.slots[8] && !$(this).find(".bblog-slots.spectator").length) $(this).find("td.players").append('<div class="bblog-slots spectator"><span class="bblog-icon"></span>' + data.slots[8].current + "/" + data.slots[8].max + '</div>');
                });

                if (BBLog.elementCheck(e, action)) return this.callback();

                var last = e.find("th.server-info a[data-sort]").last();
                last.after($('<a href="#" data-sort="commander" class="ignored-trigger-el">Commander</a>').data("sort", "commander")).after(', ');

                if (typeof serverbrowserwarsaw.sorter._refreshSortings == "undefined") {
                    serverbrowserwarsaw.sorter._refreshSortings = serverbrowserwarsaw.sorter.refreshSortings;
                    serverbrowserwarsaw.sorter.refreshSortings = function () {
                        serverbrowserwarsaw.sorter._refreshSortings();
                        var ASC = false;
                        var DESC = !ASC;
                        serverbrowserwarsaw.sorter.sortings.commander = {
                            defaultOrder: DESC,
                            dataType: "server",
                            sortFunc: function (data) {
                                return data && data.slots && data.slots[4] ? data.slots[4].current + data.slots[4].max / 1000 : -1;
                            }
                        };
                    };
                }
                serverbrowserwarsaw.sorter.toggles.off("click.page.serverbrowser");
                serverbrowserwarsaw.trigger("pageshow.sort");
                break;
            case "bf4.serverbrowser.livescore":
                var s = $S("selected-server-scoreboard");
                if (typeof s._render_orig == "undefined") {
                    s._render_orig = s.render;
                    s.render = function (o, b, kwargs) {
                        var ret = this._render_orig(o, b, kwargs);
                        try {
                            if (o && o.scoreboard && o.scoreboard.result) {
                                var maxT = o.scoreboard.result.teams[0].status.ticketsMax;
                                if (maxT > 10) ret = ret.replace(/(\"box-content.*?\"\>)/i, "$1<div class='max_tickets'>" + maxT + " Tickets</div><div class='base-clear'></div>");

                            }
                        } catch (e) {
                            console.error(e)
                        }
                        return ret;
                    };
                    if (s.rendered) s.refresh();
                }
                break;
            case "general.server.hiddeninfo":
                if (!window.location.href.match(/servers\/show\//)) return this.callback();
                if (BBLog.cache("mode") == "bf4") {
                    var e = $("#server-page-gamemode");
                    if (BBLog.elementCheck(e, action)) return this.callback();
                    BBLog.handle("json.from.battlelog", {
                        url: window.location.pathname, callback: function (data) {
                            if (!data.context.server.extendedInfo) return this.callback();
                            var html;

                            var banner = data.context.server.extendedInfo.bannerUrl;
                            if (banner.length) {
                                html = $('<div class="box-content"><img alt="Server-Banner" style="max-width:700px; max-height:300px;"/></div>');
                                html.find("img").attr("src", banner);
                                $("#server-description").after(html);
                            }
                            var message = data.context.server.extendedInfo.message;
                            if (message.length) {
                                html = $('<div class="box-content"><p></p></div>');
                                html.find("p").text('Message: ' + message);
                                $("#server-description").after(html);
                            }
                        }
                    });
                } else {
                    var e = $("#serverguide-show-joinserver-form");
                    if (BBLog.elementCheck(e, action)) return this.callback();
                    BBLog.handle("json.from.battlelog", {
                        url: e.attr("action"), callback: function (data) {
                            if (!data.context.server.extendedInfo) return this.callback();
                            var html;

                            var banner = data.context.server.extendedInfo.bannerUrl;
                            if (banner.length) {
                                html = $('<div id="server-message"><h3>Banner</h3><p><img alt="Server-Banner" style="max-width:700px; max-height:300px;"/></p></div>');
                                html.find("img").attr("src", banner);
                                $("#server-settings").next('.base-clear').after(html);
                            }
                            var message = data.context.server.extendedInfo.message;
                            if (message.length) {
                                html = $('<div id="server-description"><h3>Message</h3><p></p></div>');
                                html.find("p").text(message);
                                $("#server-settings").next('.base-clear').after(html);
                            }
                        }
                    });
                }
                break;
            case "bf3.awards.optimize":
                if (BBLog.cache("mode") != "bf3" || !window.location.href.match(/awards\//)) return this.callback();
                var e = $("#profile-stats-awards-progression");
                if (BBLog.elementCheck(e, action)) return this.callback();
                var all = e.find(".profile-stats-awards-progression-body:first");
                all.children("[data-dependencies]").each(function () {
                    var medEl = $(this);
                    var ribEl = $("#award-ribbon-" + medEl.attr("data-dependencies"));
                    if (!ribEl.length) {
                        var perc = medEl.find(".progress").get(0).style.width;
                        medEl.prepend('<div class="profile-stats-num-awards-taken bblog-required-ribbons">' + perc + '</div>');
                        e.find(".profile-stats-awards-progression-body:first").append(this);
                        return true;
                    }

                    var title = medEl.attr("title");
                    if (!title) title = medEl.attr("data-tooltip");
                    var neededCounts = parseInt(title.match(/([0-9]{2})[\s+]?$/)[1]);
                    if (ribEl.find(".profile-stats-num-awards-taken").length) {
                        var haveCounts = parseInt(ribEl.find(".profile-stats-num-awards-taken").text().replace(/[^0-9]/ig, ""));
                    } else if (!ribEl.hasClass("nottaken")) {
                        var haveCounts = 1;
                    } else {
                        var haveCounts = 0;
                    }

                    var required = ((neededCounts * Math.ceil(haveCounts / neededCounts)) - haveCounts);
                    required = isNaN(required) || required == 0 ? neededCounts : required;

                    // update bubble title with extra infos
                    var newTitle = title + "<br/>" + required + " " + BBLog.t("ribbons.left");
                    medEl.attr("data-tooltip", newTitle);
                    medEl.prepend('<div class="profile-stats-num-awards-taken bblog-required-ribbons">' + required + '</div>');
                });
                // iterate over all ribbons to detected if a corresponding medal exist
                $(".profile-stats-awards-progression-item-ribbon").each(function () {
                    var id = $(this).attr("id").replace(/.*\-/ig, "");
                    if (!e.find("[data-dependencies='" + id + "']").length) {
                        $(".profile-stats-awards-progression-column-ribbons .profile-stats-awards-progression-body").append(this);
                        e.find(".profile-stats-awards-progression-body:last").append(this);
                    }
                })
                break;
            case "bf3.reports.download":
                var match = window.location.href.match(/battlereport\/show\/([0-9]+)\/([0-9]+)\//);
                if (BBLog.cache("mode") != "bf3" || !match) return this.callback();
                var e = $("#battlereport h1:first");
                if (BBLog.elementCheck(e, action)) return this.callback();
                var reportId = match[2];
                var format = match[1];
                var html = $(
                    '<span id="blogger-report" class="bblog-button bblog-report-buttons blogger">' + BBLog.t('report.download') + '</span>'
                ).attr("data-tooltip", BBLog.t('report.download.bubble'));
                var url = window.location.href.replace(/(.*)\/show\/.*/ig, "$1/loadgeneralreport") + "/" + reportId + "/" + format + "/";
                BBLog.handle("json.from.battlelog", {
                    "url": url, callback: function (data) {
                        if ($(".battlereport-header-info a[href*='/servers/']").length) {
                            $(".battlereport-header-info a[href*='/servers/']").text(data.gameReport.gameServer.name);
                        } else {
                            $(".battlereport-header-info [data-timestamp]:first").parent().after(' • <a onclick="return false;" href="" style="cursor:text; color:black; text-decoration:none; font-weight:normal;">' + data.gameReport.gameServer.name + '</a>');
                        }
                    }
                });
                html.on("click", function () {
                    var btn = $(this);
                    btn.text(BBLog.t('report.download.loading'));
                    btn.off("click");
                    var rc = $("#battlereport");
                    var data = {};
                    data.domain = window.location.host;
                    data.url = window.location.href;
                    data.lang = BBLog.cache("language");
                    data.title = rc.find("h1.base-big-title").text();
                    data.timestamp = rc.find(".battlereport-header-info [data-timestamp]").attr("data-timestamp");
                    data.device = rc.find(".battlereport-header-info-gameicon").attr("class").match(/common-game-([0-9]+)-([0-9])/)[2];
                    data.game = rc.find(".battlereport-header-info-gameicon").attr("class").match(/common-game-([0-9]+)/)[1];
                    data.servername = rc.find(".battlereport-header-info:first a:first").text();
                    data.serverlink = rc.find(".battlereport-header-info:first a:first").attr("href");
                    data.roundtime = rc.find(".battlereport-header-info:first span:last").text();
                    data.mapimage = rc.find("#battlereport-teamscores").css("background-image");
                    data.mapname = rc.find(".battlereport-header-info:last span:eq(0)").text();
                    data.mapmode = rc.find(".battlereport-header-info:last span:eq(1)").text();
                    data.rankType = rc.find(".battlereport-header-info:last span:eq(2)").text();
                    data.reportId = reportId;
                    data.teams = [
                        {
                            name: rc.find(".battlereport-teamscores-scores > div:first").clone().children().remove().end().text(),
                            score: rc.find(".battlereport-teamscores-scores > div:first div:first").text(),
                            scoreMsg: rc.find(".battlereport-teamscores-scores > div:first .battlereport-teamscores-score-msg").text(),
                            tableHeaders: [
                                rc.find(".battlereport-teamstats-list:first th:eq(0)").text(),
                                rc.find(".battlereport-teamstats-list:first th:eq(1)").text(),
                                rc.find(".battlereport-teamstats-list:first th:eq(2)").text(),
                                rc.find(".battlereport-teamstats-list:first th:eq(3)").text(),
                                rc.find(".battlereport-teamstats-list:first th:eq(4)").text(),
                                rc.find(".battlereport-teamstats-list:first th:eq(5)").text()
                            ],
                            entries: []
                        },
                        {
                            name: rc.find(".battlereport-teamscores-scores > div:last").clone().children().remove().end().text(),
                            score: rc.find(".battlereport-teamscores-scores > div:last div:first").text(),
                            scoreMsg: rc.find(".battlereport-teamscores-scores > div:last .battlereport-teamscores-score-msg").text(),
                            entries: []
                        }
                    ];
                    data.topscores = [];
                    rc.find(".battlereport-topscores-inner .battlereport-topscores-column").each(function () {
                        data.topscores.push({
                            title: $(this).find("h3").text(),
                            avatar: $(this).find("a.avatar").attr("style").match(/(http.*?)\);/i)[1],
                            username: $(this).find(".battlereport-topscores-column-info a").text(),
                            userlink: $(this).find(".battlereport-topscores-column-info a").attr("href"),
                            text: $(this).find("h6").text(),
                            textsub: $(this).find("p").text()
                        });
                    });
                    rc.find(".battlereport-teamstat-column").each(function (index) {
                        $(this).find("tr[data-personaid]").each(function () {
                            var tmp = {};
                            tmp.pos1 = $(this).is(".pos1.battlereport-teamstats-list-row-top3"),
                                tmp.pos2 = $(this).is(".pos2.battlereport-teamstats-list-row-top3"),
                                tmp.pos3 = $(this).is(".pos3.battlereport-teamstats-list-row-top3"),
                                tmp.bestSquad = $(this).hasClass("bestSquad"),
                                tmp.place = $(this).find(".battlereport-teamstats-pos").text(),
                                tmp.squad = $(this).find(".battlereport-teamstats-squad").text(),
                                tmp.avatar = $(this).find("a.avatar").attr("style").match(/(http.*?)\);/i)[1],
                                tmp.username = $(this).find(".common-playername-personaname-nolink").text(),
                                tmp.userlink = $(this).find(".battlereport-teamstats-user-container-avatar-small a").attr("href"),
                                tmp.userrank = $(this).find(".battlereport-teamstats-user-personarank img").attr("src"),
                                tmp.kills = $(this).find(".battlereport-teamstats-kills").text(),
                                tmp.deaths = $(this).find(".battlereport-teamstats-deaths").text(),
                                tmp.score = $(this).find(".battlereport-teamstats-score").text();
                            tmp.dnf = $(this).hasClass("dnf");
                            data.teams[index].entries.push(tmp);
                        });
                    });
                    $.post(BBLog.serviceUrl + "/en/api/report.pdf", { "data": JSON.stringify(data) }, function (url) {
                        var m = url.match(/^E([0-9])/);
                        if (m) {
                            switch (m[1]) {
                                case "3":
                                    alert(BBLog.t("report.pdf.error.3"));
                                    break;
                            }
                        } else {
                            btn.text(BBLog.t('report.download.done'));
                            window.open(url);
                            btn.on("click", function () {
                                window.open(url);
                            });
                        }
                    });
                });
                e.after(html);
                break;
            case "general.server.filterset":
                var e = $("#serverbrowser-filters, #serverguide-filtertoggle");
                if (!e.length) return this.callback();
                if (BBLog.elementCheck(e, action)) return this.callback();
                var storageKey = BBLog.cache("mode") + ".serverfilter.array";
                if (BBLog.cache("mode") == "bfh") {
                    e = $("#serverbrowser-filters");
                    e.addClass("bblog-bfh-filters");
                    e = e.find("header.serverbrowser-refresh:first");

                    var clone = e.clone(false, false);
                    clone.attr("class", "bblog-bfh-filter-btn");
                    clone.html("&nbsp;");
                    e.before(clone);
                    $("#serverbrowser-filters").after('<div id="bblog-filtersets">');
                } else if (BBLog.cache("mode") == "bf4") {
                    e = $("#serverbrowser-filters");
                    e.addClass("bblog-bf4-filters");
                    e = e.find("header.serverbrowser-refresh:first");

                    var clone = e.clone(false, false);
                    clone.attr("class", "bblog-bf4-filter-btn");
                    clone.html("&nbsp;");
                    e.before(clone);
                    $("#serverbrowser-filters").after('<div id="bblog-filtersets">');
                } else {
                    var btn = $('<div class="bblog-bf3-filter-btn"></div>');
                    $("#serverguide-filtertoggle, #serverguide-apply-filters").addClass("bblog-bf3-filters").append(btn);
                    $("#serverguide-filter-form").after('<div id="bblog-filtersets">');
                }

                var getUrl = function (params) {
                    return window.location.href.replace(/\?.*/ig, "") + "?" + params.replace(/expand\=[0-9]./ig, "");
                }

                var filters = BBLog.storage(storageKey) || [];
                var table = $("<table>");
                if (BBLog.count(filters)) {
                    for (var i in filters) {
                        var tmp = filters[i];
                        if (!tmp) continue;
                        if (tmp.visible) {
                            var btn = $('<span class="btn">');
                            btn.text(tmp.name);
                            btn.attr("data-data", tmp.data);
                            btn.on("click", function () {
                                window.location.href = getUrl($(this).attr("data-data"));
                            });
                            $("#bblog-filtersets").show().append(btn);
                        }
                    }
                }

                $(".bblog-bf3-filter-btn, .bblog-bf4-filter-btn, .bblog-bfh-filter-btn").on("click", function (ev) {
                    ev.stopPropagation();
                    var html = $('<div>' + BBLog.t("filterpopup.text") + '<br/><br/></div>');
                    if (BBLog.count(filters)) {
                        var table = $("<table>");
                        for (var i in filters) {
                            var tmp = filters[i];
                            if (!tmp) continue;
                            table.append(
                                '<tr>' +
                                '<td><span class="bblog-switch ' + (tmp.visible ? 'active' : '') + '" data-id="' + i + '" data-tooltip="' + BBLog.t("filterpopup.visible") + '"></span></td>' +
                                '<td style="width:100%"><a href="#" class="filter-entry" data-id="' + i + '">' + tmp.name + '</a></td>' +
                                '<td><span class="bblog-delete" data-id="' + i + '"></span></td>' +
                                '</tr>'
                            );
                        }
                        html.append(table);

                        html.find(".filter-entry").on("click", function (ev) {
                            window.location.href = getUrl(filters[$(this).attr("data-id")].data);
                            ev.preventDefault();
                        });
                        html.find(".bblog-delete").on("click", function (ev) {
                            delete filters[$(this).attr("data-id")];
                            BBLog.storage(storageKey, filters);
                            BBLog.handle(action, data);
                        });
                        html.find(".bblog-switch").on("click", function (ev) {
                            $(this).toggleClass("active");
                            filters[$(this).attr("data-id")].visible = $(this).hasClass("active");
                            BBLog.storage(storageKey, filters);
                            BBLog.handle(action, data);
                        });
                    }
                    html.append($('<input type="text"/>').attr("data-tooltip", BBLog.t("filterpopup.enter")).on("keyup", function (ev) {
                        if (ev.keyCode == 13) {
                            $("#serverbrowser-filters .filters-container button[type='submit'], #serverguide-apply-filters .serverguide-apply-filter-button, #serverguide-filtertoggle .serverguide-apply-filter-button").trigger("click");
                            var text = $.trim(this.value);
                            BBLog.closeAllPopups();
                            setTimeout(function () {
                                var hash = window.location.href.match(/\?(.*)/)[1];
                                var filters = BBLog.storage(storageKey) || [];
                                filters.push({ name: text, "data": hash, "visible": true });
                                BBLog.storage(storageKey, filters);
                            }, 200);
                        }
                    }));
                    BBLog.popup("bblog-option", BBLog.t("filterpopup.title"), html);
                });
                break;
            case "general.server.markfavorites":
                if (!window.location.href.match(/servers\/(\?|$)/) || !S.globalContext) return this.callback();
                var e = $("#serverguide-server-list");
                for (var i in S.globalContext.favGuids) {
                    var f = S.globalContext.favGuids[i];
                    e.find("div[guid='" + f + "']").addClass("favorite");
                }
                break;
            case "bf3.dogtags.counter":
                if (BBLog.cache("mode") != "bf3" || !window.location.href.match(/dogtags\//)) return this.callback();
                var e = $("#dogtags-list");
                if (!e.length || BBLog.elementCheck(e, action)) return this.callback();
                var all = e.find("ul.profile-stats-dogtags li");
                e.find("div.filter-all").append(' <span>(' + all.length + ')</span>');
                e.find("div.filter-taken").append(' <span>(' + all.filter(".taken").length + ')</span>');
                e.find("div.filter-unlocked").append(' <span>(' + all.filter(".unlocked").length + ')</span>');
                break;
            case "bf3.dogtags.noanimation":
                if (BBLog.cache("mode") != "bf3" || !window.location.href.match(/dogtags\//)) return this.callback();
                var e = $("#dogtags-list");
                if (!e.length || BBLog.elementCheck(e, action)) return this.callback();
                e.find("div.filter-option").closest("li").each(function () {
                    var c = $(this).clone(false, false);
                    c.find("[data-filter]").removeClass("filter-option").addClass("filter-option-legacy").each(function () {
                        $(this).attr("data-filter-legacy", $(this).attr("data-filter"));
                        $(this).removeAttr("data-filter");
                    });
                    $(this).parent().append(c);
                    $(this).remove();
                });
                $("#dogtags-list-isotope .isotope-item").addClass("bblog-fix hide").attr("style", "");
                e.find(".filter-option-legacy").on("click", function () {
                    setTimeout(function () {
                        var filter1 = $("#profile-dogtags-type-filter li.selected .filter-option-legacy").attr("data-filter-legacy");
                        var filter2 = " " + $("#profile-dogtags-criteria-filter li.selected .filter-option-legacy").attr("data-filter-legacy");
                        var items = $("#dogtags-list-isotope .isotope-item");
                        items.addClass("hide");
                        if (filter1) items = items.filter(filter1);
                        if (filter2) items = items.filter(filter2);
                        items.removeClass("hide");
                    }, 80);
                }).filter(":first").trigger("click");
                break;
            case "general.mainserverbrowser":
                var e = $(".main-loggedin-playbar:first");
                if (BBLog.elementCheck(e, action)) return this.callback();
                e.addClass("bblog-mod");
                var copy = $('<button class="common-button-large main-loggedin-playbutton"><p>' + BBLog.t("serverbrowser") + '</p></button>').on("click", function () {
                    base.redirect('/' + BBLog.cache("mode") + '/' + BBLog.cache("battlelog.language") + 'servers/');
                });
                e.append(copy);
                break;
            case "general.linkintext":
                var all = $("#profile-presentation, div.platoon-presentation-padder, div.wallpost-body, section#user .box.presentation .box-content, .feed-comment-body");
                all.each(function () {
                    var e = $(this);
                    if (BBLog.elementCheck(e, action)) return true;
                    var html = (" " + $(this).html() + " ").replace(/(http|ts3server|mumble|https)(\:\/\/[^\n\r\t <\[\]]+)/ig, '<a href="$1$2" target="_blank">$1$2</a>');
                    $(this).html($.trim(html));
                    BBLog.handle("domchange.browsercall");
                });
                break;
            case "general.inlineimages":
                // first run the inlinetext handler
                BBLog.handle("general.linkintext", null, function () {
                    var imageTpl = '<span class="bblog-youtube-anchor"></span><div class="bblog-inlineimage" style="display:none;"><span onclick="window.open($(this).children().attr(\'src\'))"><img data-src="{url}" alt="{url}" title="{url}" onerror="$(this).replaceWith(this.alt)"/></span></div>';
                    $("#profile-presentation, div.platoon-presentation-padder, div.forum-threadview-post-text, .box.presentation .box-content").each(function () {
                        if (BBLog.elementCheck($(this), action)) return true;
                        var links = $(this).find("a[href$='.jpg'], a[href$='.gif'], a[href$='.jpeg'], a[href$='.png'], a[href$='.JPG'], a[href$='.GIF'], a[href$='.JPEG'], a[href$='.PNG']");
                        links.each(function () {
                            var link = $(this).attr("href");
                            $(this).replaceWith(imageTpl.replace(/{url}/ig, link));
                        });
                        var viewportAnchors = BBLog.cache("viewport.anchors") || [];
                        viewportAnchors.push($(this).find(".bblog-youtube-anchor"));
                        BBLog.cache("viewport.anchors", viewportAnchors);
                    });
                });
                break;
            case "general.inlineyoutube":
                // first run the inlinetext handler
                BBLog.handle("general.linkintext", null, function () {
                    var iframeTpl = '<span class="bblog-youtube-anchor"></span><div class="bblog-youtube" style="display:none;"><iframe data-src="https://www.youtube.com/embed/{id}?wmode=transparent&hd=1" frameborder="0" allowfullscreen></iframe></div>';
                    $("#profile-presentation, div.platoon-presentation-padder, div.forum-threadview-post-text, .box.presentation .box-content").each(function () {
                        if (BBLog.elementCheck($(this), action)) return true;
                        // all default youtube urls
                        $(this).find("a[href*='youtube.com/'][href*='v='], a[href*='youtube.com/'][href*='/embed/'], a[href*='youtu.be/']").each(function () {
                            var matchInner = this.href.match(/v=([a-z0-9\-\_]+)/i);
                            if (matchInner) {
                                $(this).replaceWith(iframeTpl.replace(/{id}/ig, matchInner[1]));
                                return true;
                            }
                            matchInner = this.href.match(/(.*?)\/([a-z0-9\-\_]+)(\?|$)/i);
                            if (matchInner) {
                                $(this).replaceWith(iframeTpl.replace(/{id}/ig, matchInner[2]));
                                return true;
                            }
                            matchInner = this.href.match(/\/embed\/([a-z0-9\-\_]+)/i);
                            if (matchInner) {
                                $(this).replaceWith(iframeTpl.replace(/{id}/ig, matchInner[1]));
                                return true;
                            }
                        });
                        var html = $(this).html();
                        html = html.replace(/\[youtube\.com\]|\[youtu\.be\]/g, "");
                        $(this).html(html);
                        var viewportAnchors = BBLog.cache("viewport.anchors") || [];
                        viewportAnchors.push($(this).find(".bblog-youtube-anchor"));
                        BBLog.cache("viewport.anchors", viewportAnchors);
                    });
                });
                break;
            case "bf3.assignments.bblog":
                if (BBLog.cache("mode") != "bf3" || !window.location.href.match(/\/assignments\//)) return this.callback();
                var e = $("#assignments-progress");
                if (!e.length || BBLog.elementCheck(e, action)) return this.callback();
                e.append('<li id="bblog-ass-link"><a href="#bblog-ass">Better Battlelog</a></li>');
                $(".assignments-container").append('<div class="assignments-group" id="bblog-ass"><h1>Better Battlelog</h1><div class="bblog-ass-info">' + BBLog.t("ass.info") + '</div><div class="assignments_list col-2"><input type="button" value="' + BBLog.t("ass.loadbtn") + '" class="bblog-button"/></div><div class="col-2 assignments_details"></div></div><div class="clear"></div>');
                $("#bblog-ass input").attr("data-tooltip", BBLog.t("ass.loadbtn.tooltip")).on("click", function () {
                    $("#bblog-ass, #bblog-ass-link").remove();
                    BBLog.handle("_bf3.assignments.bblog", data, callback);
                });

                // minimize buttons
                var btn = $('<div class="bblog-minimize">');
                btn.on("click", function () {
                    var id = "bf3.assignments.bblog.closed." + $(this).closest(".assignments-group").attr("id");
                    var val = BBLog.storage(id);
                    BBLog.storage(id, !val ? 1 : 0);
                    $(this).trigger("update");
                }).on("update", function () {
                    var id = "bf3.assignments.bblog.closed." + $(this).closest(".assignments-group").attr("id");
                    var val = BBLog.storage(id);
                    if (val) {
                        $(this).addClass("plus");
                        $(this).closest(".assignments-group").addClass("hidden");
                    } else {
                        $(this).removeClass("plus");
                        $(this).closest(".assignments-group").removeClass("hidden");
                    }
                });
                $(".assignments-container .assignments-group > h1").prepend(btn.clone(true, true));
                $(".assignments-container .assignments-group > h1 .bblog-minimize").trigger("update");

                break;
            case "_bf3.assignments.bblog":
                var e = $("#assignments-progress");
                var tabUl = $("#content ul.tabs:first");
                var dogtagsHref = tabUl.find(".dogtags a").attr("href");
                var userId = dogtagsHref.match(/\/dogtags\/([0-9]+)/)[1];
                var username = dogtagsHref.match(/([^\/]+)\/dogtags\//)[1];
                var deviceId = $(".profile-venicestats-header-soldier-info-type-game:first").attr("class").match(/common-game-([0-9]+)-([0-9])/)[2];
                var device = BBLog.deviceInfo[deviceId];
                var assignments = {
                    //0 : {x : 0, y : 0, ready : false},
                    //1 : {x : 1, y : 0, ready : false},
                    2: { x: 2, y: 0, ready: false },
                    3: { x: 3, y: 0, ready: false },
                    4: { x: 4, y: 0, ready: false },
                    5: { x: 0, y: 1, ready: false },
                    6: { x: 1, y: 1, ready: false },
                    7: { x: 2, y: 1, ready: false },
                    8: { x: 3, y: 1, ready: false },
                    9: { x: 4, y: 1, ready: false },
                    10: { x: 0, y: 2, ready: false },
                    11: { x: 1, y: 2, ready: false },
                    12: { x: 2, y: 2, ready: false },
                    13: { x: 3, y: 2, ready: false },
                    14: { x: 4, y: 2, ready: false },
                    15: { x: 0, y: 3, ready: false }
                };
                assignments[2].requirements = { 0: { need: 200, have: 0, perc: 0 } };
                assignments[3].requirements = { 0: { need: 500, have: 0, perc: 0 } };
                assignments[4].requirements = { 0: { need: 10000, have: 0, perc: 0 } };
                assignments[5].requirements = { 0: { need: 5, have: 0, perc: 0 } };
                assignments[6].requirements = {
                    0: { need: 5, have: 0, perc: 0 },
                    1: { need: 5, have: 0, perc: 0 }
                };
                assignments[7].requirements = { 0: { need: 4, have: 0, perc: 0 } };
                assignments[8].requirements = { 0: { need: 6, have: 0, perc: 0 } };
                assignments[9].requirements = { 0: { need: 60, have: 0, perc: 0 } };
                assignments[10].requirements = { 0: { need: 5000, have: 0, perc: 0 } };
                assignments[11].requirements = { 0: { need: 1000, have: 0, perc: 0 } };
                assignments[12].requirements = {
                    0: { need: 1, have: 0, perc: 0 },
                    1: { need: 1, have: 0, perc: 0 },
                    2: { need: 1, have: 0, perc: 0 },
                    3: { need: 1, have: 0, perc: 0 },
                    4: { need: 1, have: 0, perc: 0 },
                    5: { need: 1, have: 0, perc: 0 },
                    6: { need: 1, have: 0, perc: 0 }
                };
                assignments[13].requirements = {
                    0: { need: 100, have: 0, perc: 0 },
                    1: { need: 100, have: 0, perc: 0 },
                    2: { need: 100, have: 0, perc: 0 },
                    3: { need: 100, have: 0, perc: 0 }
                };
                assignments[14].requirements = {
                    0: { need: 250, have: 0, perc: 0 },
                    1: { need: 250, have: 0, perc: 0 },
                    2: { need: 250, have: 0, perc: 0 },
                    3: { need: 250, have: 0, perc: 0 },
                    4: { need: 250, have: 0, perc: 0 }
                };
                assignments[15].requirements = { 0: { need: 20, have: 0, perc: 0 } };
                // dogtags
                BBLog.handle("json.from.battlelog", {
                    url: dogtagsHref, callback: function (data) {
                        var statsPersonaId = data.context.statsPersona.userId;
                        var url = "/bf3/" + BBLog.cache("battlelog.language") + "soldier/dogtagsPopulateStats/" + username + "/" + userId + "/" + statsPersonaId + "/" + deviceId + "/0/";
                        BBLog.handle("json.from.battlelog", {
                            "url": url, callback: function (data) {
                                assignments[2].requirements[0].have = data.data.seenDogTagsIndices.advanced.length + data.data.seenDogTagsIndices.basic.length;
                                assignments[2].ready = true;
                                $("#bblog-ass").trigger("update");
                            }
                        });
                        var url = "/bf3/" + BBLog.cache("battlelog.language") + "coop/createBodyFetch/" + statsPersonaId + "/" + userId + "/";
                        BBLog.handle("json.from.battlelog", {
                            "url": url, callback: function (data) {
                                assignments[8].requirements[0].have = BBLog.count(data.data.takenLevels);
                                assignments[8].ready = true;
                                $("#bblog-ass").trigger("update");
                            }
                        });
                    }
                });
                // weaponsPopulateStats
                var url = "/bf3/" + BBLog.cache("battlelog.language") + "weaponsPopulateStats/" + userId + "/" + deviceId + "/";
                BBLog.handle("json.from.battlelog", {
                    "url": url, callback: function (data) {
                        for (var i in data.data.mainItemStats) {
                            switch (data.data.mainItemStats[i].slug) {
                                case "m67-grenade":
                                    assignments[3].requirements[0].have = assignments[14].requirements[0].have = data.data.mainItemStats[i].performances[0].stat;
                                    break;
                                case "eod-bot":
                                    assignments[13].requirements[0].have = data.data.mainItemStats[i].performances[0].stat;
                                    break;
                                case "repair-tool":
                                    assignments[13].requirements[1].have = data.data.mainItemStats[i].performances[1].stat;
                                    break;
                                case "m15-at-mine":
                                    assignments[14].requirements[1].have = data.data.mainItemStats[i].performances[0].stat;
                                    break;
                                case "c4-explosives":
                                    assignments[14].requirements[2].have = data.data.mainItemStats[i].performances[0].stat;
                                    break;
                                case "mav":
                                    assignments[13].requirements[3].have = data.data.mainItemStats[i].performances[0].stat;
                                    break;
                                case "m18-claymore":
                                    assignments[14].requirements[3].have = data.data.mainItemStats[i].performances[0].stat;
                                    break;
                                case "defibrillator":
                                    assignments[13].requirements[2].have = data.data.mainItemStats[i].performances[0].stat;
                                    break;
                                case "m224-mortar":
                                    assignments[14].requirements[4].have = data.data.mainItemStats[i].performances[0].stat;
                                    break;

                            }
                        }
                        var duplicated = {};
                        for (var i in data.data.mainWeaponStats) {
                            var dup = data.data.mainWeaponStats[i].duplicateOf;
                            if (dup) {
                                if (typeof duplicated[dup] == "undefined") {
                                    duplicated[dup] = true;
                                } else {
                                    continue;
                                }
                            }
                            if (data.data.mainWeaponStats[i].kills > 0) {
                                assignments[9].requirements[0].have++;
                            }
                            if (data.data.mainWeaponStats[i].slug == "acb-90" || data.data.mainWeaponStats[i].slug == "knife") {
                                assignments[11].requirements[0].have = data.data.mainWeaponStats[i].kills;
                            }
                        }
                        assignments[3].ready = true;
                        assignments[9].ready = true;
                        assignments[11].ready = true;
                        assignments[13].ready = true;
                        assignments[14].ready = true;
                        $("#bblog-ass").trigger("update");
                    }
                });
                // vehiclePopulateStats
                var url = "/bf3/" + BBLog.cache("battlelog.language") + "vehiclesPopulateStats/" + userId + "/" + deviceId + "/";
                BBLog.handle("json.from.battlelog", {
                    "url": url, callback: function (data) {
                        for (var i in data.data.mainVehicleStats) {
                            if (data.data.mainVehicleStats[i].destroyXinY) {
                                assignments[10].requirements[0].have += data.data.mainVehicleStats[i].destroyXinY;
                                assignments[10].ready = true;
                            }
                        }
                        assignments[10].ready = true;
                        $("#bblog-ass").trigger("update");
                    }
                });
                // overviewPopulateStats
                var url = "/bf3/" + BBLog.cache("battlelog.language") + "overviewPopulateStats/" + userId + "/none/" + deviceId + "/";
                BBLog.handle("json.from.battlelog", {
                    "url": url, callback: function (data) {
                        assignments[4].requirements[0].have = data.data.overviewStats.revives;
                        assignments[4].ready = true;
                        var maxStars = 0;
                        for (var i in data.data.overviewStats.serviceStars) {
                            maxStars = Math.max(maxStars, data.data.overviewStats.serviceStars[i]);
                        }
                        assignments[5].requirements[0].have = maxStars;
                        assignments[5].ready = true;
                        $("#bblog-ass").trigger("update");
                    }
                });
                var handleApiAssignmentCallback = function (data) {
                    var valid = true;
                    if (!data || !data.assignments) valid = false;
                    if (valid && typeof data.assignments[6] != "undefined") {
                        assignments[6].requirements[0].have = data.assignments[6][0];
                        assignments[6].requirements[1].have = data.assignments[6][1];
                    }
                    if (valid && typeof data.assignments[7] != "undefined") {
                        assignments[7].requirements[0].have = data.assignments[7];
                    }
                    if (valid && typeof data.assignments[12] != "undefined") {
                        for (var i in data.assignments[12]) assignments[12]["requirements"][i].have = data.assignments[12][i];
                    }
                    if (valid && typeof data.assignments[15] != "undefined") {
                        assignments[15].requirements[0].have = data.assignments[15];
                    }
                    assignments[6].ready = true;
                    assignments[7].ready = true;
                    assignments[12].ready = true;
                    assignments[15].ready = true;
                    $("#bblog-ass").trigger("update");
                };
                // check new battlereports for the current logged in user
                if (userId == BBLog.cache("soldier.id")) {
                    var url = "/bf3/" + BBLog.cache("battlelog.language") + "battlereport/loadLatestPlayerPreviews/5/";
                    BBLog.handle("json.from.battlelog", {
                        "url": url, callback: function (data) {
                            var reportIds = {};
                            for (var i in data.data) {
                                reportIds[data.data[i].reportId] = [data.data[i].reportId, data.data[i].platform, data.data[i].personaId];
                            }
                            $.getJSON(BBLog.serviceUrl + "/en/api/bf3.assignments.process?jsoncallback=?", {
                                username: BBLog.cache("soldier.name"),
                                userId: BBLog.cache("soldier.id"),
                                reportIds: reportIds,
                                version: BBLog.version,
                            }, handleApiAssignmentCallback);
                        }
                    });
                } else {
                    $.getJSON(BBLog.serviceUrl + "/en/api/bf3.assignments.load?jsoncallback=?", {
                        username: username,
                        userId: userId
                    }, handleApiAssignmentCallback);
                }

                $("#assignments-progress").append('<li><a href="#bblog-ass" id="bblog-ass-link">Better Battlelog (<span id="bblog-sum-solved"></span>/<span id="bblog-sum-all"></span>)</a></li>');
                $(".assignments-container").append('<div class="assignments-group" id="bblog-ass"><h1>Better Battlelog</h1><div class="bblog-ass-info">' + BBLog.t("ass.info") + '</div><div class="assignments_list col-2"></div><div class="col-2 assignments_details"></div></div><div class="clear"></div>');

                var allAssCount = BBLog.count(assignments);
                $("#bblog-sum-all").text(allAssCount);

                // update for all loading indicators
                $("#bblog-ass").on("update", function () {
                    var solved = 0;
                    for (var i in assignments) {
                        var d = assignments[i];
                        var assAllPerc = 0;
                        var assCount = 0;
                        var finished = true;
                        for (var r in d.requirements) {
                            var req = d.requirements[r];
                            if (assignments[i].requirements[r].have > assignments[i].requirements[r].need) {
                                assignments[i].requirements[r].have = assignments[i].requirements[r].need;
                            } else if (assignments[i].requirements[r].have < assignments[i].requirements[r].need) {
                                finished = false;
                            }
                            if (req.have != 0 && req.perc == 0) {
                                assignments[i].requirements[r].perc = Math.ceil((100 / req.need) * req.have);
                            }
                            assAllPerc += assignments[i].requirements[r].perc;
                            assCount++;
                        }
                        var w = (assAllPerc / assCount);
                        if (finished) {
                            $("#bblog-ass [data-id='" + i + "']").addClass("done");
                            solved++;
                        }
                        ;
                        if (w > 99.4) w = 99.4;
                        $("#bblog-ass [data-id='" + i + "']").find(".loading").attr("style", "width:" + (w) + "%");
                    }
                    var w = $("#assignments-progress li:first").width();
                    var l = (100 / allAssCount) * solved;
                    l = 600 - (w * (l / 100));
                    $("#bblog-sum-solved").text(solved);
                    $("#bblog-ass-link").css("background-position", "-" + l + "px 0px");
                });

                var targetText = $(".assignment_content .container h4:first").text();
                var assTO = null;
                for (var id in assignments) {
                    var data = assignments[id];
                    var x = data.x * 484 * -1;
                    var y = data.y * 121 * -1;
                    var title = BBLog.t("ass." + id + ".title");
                    var info = BBLog.t("ass." + id + ".info");
                    var bubble = '<b>' + title + '</b><br/>' + info;
                    var el = $('<div class="assignment"><div class="done"></div><div class="image"><div class="inner" style="background-position:' + (x * 0.4545) + 'px ' + (y * 0.4545) + 'px;"></div></div><div class="loading"></div></div>').attr("data-tooltip", bubble).attr("data-id", id);
                    el.on("click", [data, x, y, title], function (ev) {
                        clearTimeout(assTO);
                        $(this).closest(".assignments_list").find(".assignment").removeClass("active");
                        $(this).addClass("active");
                        $(this).trigger("update");
                    }).on("update", [data, x, y, title], function (ev) {
                        var self = $(this);
                        var id = $(this).attr("data-id");
                        var evData = ev.data[0];
                        var html = $(
                            '<div class="assignment_content">'
                            + '<div class="image" style="background-position:' + (ev.data[1]) + 'px ' + (ev.data[2]) + 'px;"></div>'
                            + '<div class="container"><h3>' + ev.data[3] + '</h3><h4>' + targetText + '</h4></div>'
                            + '</div>'
                        );
                        if (evData.ready == false) {
                            html.find(".container").html(BBLog.t("ass.datanotready") + '<br/><br/><div class="bblog-loading"></div>');
                            assTO = setTimeout(function () {
                                if ($("#bblog-ass").length) {
                                    self.trigger("update")
                                }
                            }, 300);
                        } else {
                            var div = $('<div class="requirements">');
                            for (var i in evData.requirements) {
                                var d = evData.requirements[i];
                                var w = (d.perc / 100) * 460;
                                div.append('<div class="entry"><div class="indicator" style="width:' + w + 'px;"></div><div class="value">' + (d.have) + ' / ' + (d.need) + '</div><div class="title">' + BBLog.t("ass." + id + ".req." + i) + '</div></div>');
                            }
                            html.find(".container").append(div);
                        }
                        $("#bblog-ass .assignments_details").html(html);
                    });
                    $("#bblog-ass .assignments_list").append(el);
                }
                $("#bblog-ass .assignments_list .assignment:first").trigger("click");
                $("#bblog-ass").trigger("update");
                break;
            case "general.feed.boardurl.last":
                $(".feed-story-heading a[href*='threadview']").each(function () {
                    if (BBLog.elementCheck($(this), action)) return true;
                    $(this).attr("href", $(this).attr("href") + "last/");
                });
                break;
            case "board.gotolastpost":
                if (!window.location.href.match(/\/threadview\/(.*)\/last\/$/)) return this.callback();
                var e = $("div.forum-threadview-post:last");
                if (BBLog.elementCheck(e, action)) return this.callback();
                setTimeout(function () {
                    window.scrollTo(0, e.offset().top - 60);
                }, 150);
                break;
            case "board.copybreadcrumps":
                if (!window.location.href.match(/\/threadview\//)) return this.callback();
                var e = $("div.forum-breadcrumbs:first, ul.breadcrumb");
                if (BBLog.elementCheck(e, action)) return this.callback();
                var clone = e.clone();
                clone.css({
                    height: "20px",
                    paddingTop: "10px"
                });
                $("div.forum-start-border").after(clone);
                break;
            case "board.linksblank":
                if (!window.location.href.match(/\/threadview\//)) return this.callback();
                var all = $("div.forum-threadview-post-text");
                all.each(function () {
                    var e = $(this);
                    if (BBLog.elementCheck(e, action)) return true;
                    $(this).find("a").attr("target", "_blank");
                });
                break;            
            case "general.radar.soldier":
                var key = "radar.soldier";
                var storage = BBLog.combineArray([BBLog.storage(key), BBLog.cache(key)]);

                var e;
                // profile add radar
                if (window.location.href.match(/\/user\//)) {
                    var appendFunc = function (ev) {
                        var id = $(this).attr("data-id");
                        var storageInner = BBLog.storage(key) || [];
                        var found = BBLog.searchInObject(storageInner, "id", id, true);
                        if (found !== null) {
                            delete storageInner[found];
                        } else {
                            storageInner.push({
                                "id": id,
                                "name": $(this).attr("data-username"),
                                "source": BBLog.cache("mode")
                            });
                        }
                        BBLog.storage(key, storageInner);
                        $(this).remove();
                        ev.stopPropagation();
                        ev.preventDefault();
                    };

                    // bf4
                    e = $("#user .avatar-container a");
                    if (e.length && !BBLog.elementCheck(e, action)) {
                        var id = $("#soldiers .soldier-data-container").first().attr("id").split("-")[1];
                        var found = BBLog.searchInObject(storage, "id", id);
                        var t = found === null ? "radar.addsoldier" : "radar.removesoldier";
                        var username = $.trim($("#user .box.username .box-content span").first().text());
                        e.append($('<span class="bblog-button tiny ' + (found ? 'active' : '') + '" data-id="' + id + '">' + BBLog.t(t) + '</span>').attr("data-username", username).on("click", appendFunc));
                    }
                    // bf3, mohw
                    e = $("#profile-secondary-column .profile-avatar a");
                    if (e.length && !BBLog.elementCheck(e, action)) {
                        var id = $("#soldier-list li[data-id]").first().attr("data-id");
                        var found = BBLog.searchInObject(storage, "id", id);
                        var t = found === null ? "radar.addsoldier" : "radar.removesoldier";
                        var cl = $("#profile-header .username h1").clone();
                        cl.children().remove();
                        var username = $.trim(cl.text());
                        e.append($('<span class="bblog-button tiny ' + (found ? 'active' : '') + '" data-id="' + id + '">' + BBLog.t(t) + '</span>').attr("data-username", username).on("click", appendFunc));
                    }
                }

                if (BBLog.count(storage)) {
                    // mark on server browser
                    if (BBLog.cache("mode") == "bf4") {
                        e = $("#serverbrowser-results tr.active.server-row").first();
                        if (e.length && !BBLog.elementCheck(e, action)) {
                            var url = $("#serverbrowser-show footer a").attr("href");
                            BBLog.handle("json.from.battlelog", {
                                "url": url, cache: false, callback: function (data) {
                                    for (var i in data.context.players) {
                                        var p = data.context.players[i];
                                        var id = p.personaId;
                                        var found = BBLog.searchInObject(storage, "id", id, true);
                                        if (found !== null) {
                                            $("#serverbrowser-show").addClass("bblog-radar");
                                            $("#serverbrowser-show button.btn-primary").addClass("bblog-red").before('<div class="bblog-radar-warning">' + BBLog.t("user.onradar") + ': <b>' + p.persona.personaName + '</b></div>');
                                            break;
                                        }
                                    }
                                }
                            });
                        }
                    } else if (BBLog.cache("mode") == "bf3" || BBLog.cache("mode") == "mohw") {
                        if (window.location.href.match(/servers\/(\?|$)/)) {
                            $("#serverinfo-players-all-view:visible").trigger("click");
                            e = $("#serverinfo-players-all-wrapper:visible");
                            if (e.length && e.find(".common-playername-personaname").length && !BBLog.elementCheck(e, action)) {
                                e.find(".common-playername-personaname a").each(function () {
                                    var id = $(this).attr("href").match(/\/([0-9]{5,})\//)[1];
                                    var found = BBLog.searchInObject(storage, "id", id, true);
                                    if (found !== null) {
                                        $(this).closest(".serverguide-show-playerrow").addClass("bblog-radar");
                                        $("#serverguide-show-serverjoin").addClass("bblog-red").before('<div class="bblog-radar-warning">' + BBLog.t("user.onradar") + ': <b>' + $(this).text() + '</b></div>');
                                    }
                                });
                            }
                        }
                    }
                    // mark on server page
                    if (window.location.href.match(/\/servers\/show/)) {
                        var checkRadarSound = function (id) {
                            if (!BBLog.storage("general.radar.soldier.sound")) return;
                            var uniqueEl = $("#server-players-list");
                            var userCache = uniqueEl.data("radar.user.cache") || {};
                            if (typeof userCache[id] == "undefined") {
                                userCache[id] = true;
                                uniqueEl.data("radar.user.cache", userCache);
                                BBLog.playAudio("radar-1.ogg", 60);
                            }
                        };
                        if (BBLog.cache("mode") == "bf4") {
                            $("#server-players-list tr[data-personaid]").each(function () {
                                if (BBLog.elementCheck($(this), action)) return;
                                var id = $(this).attr("data-personaid");
                                var found = BBLog.searchInObject(storage, "id", id, true);
                                if (found !== null) {
                                    $("#server-page-join-buttons [data-track='serverbrowser.server.join']").addClass("bblog-red");
                                    $(this).addClass("bblog-radar").attr("data-tooltip", BBLog.t("user.onradar"));
                                    checkRadarSound(id);

                                }
                            });
                        } else if (BBLog.cache("mode") == "bf3" || BBLog.cache("mode") == "mohw") {
                            e = $("#serverguide-scoreboard ul.teams-list:visible");
                            if (e.length && !BBLog.elementCheck(e, action)) {
                                e.find(".player-name a").each(function () {
                                    var id = $(this).attr("href").match(/\/([0-9]{5,})\//)[1];
                                    var found = BBLog.searchInObject(storage, "id", id, true);
                                    if (found !== null) {
                                        $(this).closest("tr").addClass("bblog-radar-tr");
                                        if (typeof userCache[id] == "undefined") {
                                            $("#server-header").addClass("haswarning");
                                            $("#serverguide-show-joinserver-form").addClass("bblog-red").append('<div class="bblog-radar-warning">' + BBLog.t("user.onradar") + ': <b>' + $(this).text() + '</b></div>');
                                            checkRadarSound(id);
                                        }
                                    }
                                });
                            }
                        }
                    }
                    // mark on battlereport
                    if (window.location.href.match(/battlereport\/show\//)) {
                        $("tr[data-personaid]").each(function () {
                            var found = BBLog.searchInObject(storage, "id", $(this).attr("data-personaid"), true);
                            if (found !== null) {
                                $(this).addClass("bblog-radar").attr("data-tooltip", BBLog.t("user.onradar"));
                            }
                        });
                    }
                }
                break;
            case "general.radar.server":
                var key = "radar.server";
                var storage = BBLog.combineArray([BBLog.storage(key), BBLog.cache(key)]);
                // server add radar
                if (window.location.href.match(/\/servers\/show/)) {
                    if (BBLog.cache("mode") == "bf4" || BBLog.cache("mode") == "bfh") {
                        var e = $("#server-page-gamemode");
                        if (!BBLog.elementCheck(e, action)) {
                            var id = $("#server-page").attr("data-guid");
                            var found = BBLog.searchInObject(storage, "id", id);
                            if (found !== null) {
                                $("#server-page-join-buttons").addClass("bblog-bf4-redbg").attr("data-tooltip", BBLog.t("server.onradar"));
                            }
                            var clone = e.clone(false, false).removeAttr("id");
                            clone.find('p').text('');
                            e.after(clone);
                            e = clone.find("p");
                        }
                    } else {
                        var e = $("#serverguide-middle .serverguide-button-actions-wrapper");
                        if (!BBLog.elementCheck(e, action)) {
                            var id = $("#server-page").find("[data-guid]").first().attr("data-guid");
                            var found = BBLog.searchInObject(storage, "id", id);
                            if (found !== null) {
                                $("#server-header").find("[data-guid]").first().attr("data-tooltip", ($("#server-header").find("[data-guid]").first().attr("data-tooltip") || "") + BBLog.t("server.onradar"));
                                $("#server-header").find("[data-guid]").first().addClass("bblog-red");
                            }
                        }
                    }

                    if (typeof found != "undefined") {
                        var t = found === null ? "radar.addserver" : "radar.removeserver";
                        e.append($('<span class="bblog-button ' + (found ? 'active' : '') + '" data-id="' + id + '">' + BBLog.t(t) + '</span> ').on("click", function () {
                            var id = $(this).attr("data-id");
                            var storageInner = BBLog.storage(key) || [];
                            var found = BBLog.searchInObject(storageInner, "id", id, true);
                            if (found !== null) {
                                delete storageInner[found];
                            } else {
                                storageInner.push({
                                    "id": id,
                                    "name": $.trim($("#server-header h1").text()),
                                    "source": BBLog.cache("mode")
                                });
                            }
                            BBLog.storage(key, storageInner);
                            $(this).remove();
                        }));
                    }

                }
                var e = $("#serverbrowser-filters, #serverguide-filtertoggle");
                // mark on server browser
                if (e.length) {
                    if (BBLog.cache("mode") == "bf4" || BBLog.cache("mode") == "bfh") {
                        $("#serverbrowser-show button.join, #serverbrowser-results tr[data-guid]").each(function () {
                            if (!BBLog.elementCheck($(this), action)) {
                                var id = $(this).attr("data-guid");
                                var found = BBLog.searchInObject(storage, "id", id, true);
                                if (found !== null) {
                                    $(this).addClass("bblog-bf4-redbg").attr("data-tooltip", BBLog.t("server.onradar"));
                                }
                            }
                        });
                    } else {
                        var e = $("#serverguide-show-joinserver-form");
                        if (!BBLog.elementCheck(e, action)) {
                            var id = e.attr("guid");
                            var found = BBLog.searchInObject(storage, "id", id, true);
                            if (found !== null) {
                                $(this).closest(".serverguide-show-playerrow").addClass("bblog-radar");
                                $("#serverguide-show-serverjoin").addClass("bblog-red").before('<div class="bblog-radar-warning">' + BBLog.t("server.onradar") + '</b></div>');
                            }
                        }
                        $("#serverguide-result [guid]").each(function () {
                            if (BBLog.elementCheck($(this), action)) return true;
                            var id = $(this).attr("guid");
                            var found = BBLog.searchInObject(storage, "id", id, true);
                            if (found !== null) {
                                $(this).addClass("bblog-radar");
                            }
                        });
                    }
                }

                break;
            case "board.radar":
                var key = "radar.board";
                var storage = BBLog.combineArray([BBLog.storage(key), BBLog.cache(key)]);
                if (window.location.href.match(/forum\/threadview/)) {
                    $(".forum-threadview-post").each(function () {
                        if (BBLog.elementCheck($(this), action)) return true;
                        var name = $.trim($(this).find(".forum-threadview-post-poster-name").text());
                        var found = BBLog.searchInObject(storage, "name", name, true);
                        if (found === null) return true;
                        var post = $(this);
                        post.addClass("bblog-flame-post-bg");
                        post.wrap('<div class="bblog-flame-post-hidden">');
                        var e = $('<div class="bblog-flame-post">').html(BBLog.t("board.radar.post"));
                        e.on("click", function () {
                            post.unwrap();
                            post.next(".bblog-flame-post").remove();
                        })
                        post.parent().after(e);
                    });
                }
                if (window.location.href.match(/forum\/view/)) {
                    $(".forum-start-forum").each(function () {
                        if (BBLog.elementCheck($(this), action)) return true;
                        var name = $.trim($(this).find(".forum-start-forum-title-username:first a").text());
                        var found = BBLog.searchInObject(storage, "name", name, true);
                        if (found === null) return true;
                        var post = $(this);
                        post.addClass("bblog-flame-post-bg");
                        post.wrap('<div class="bblog-flame-post-hidden">');
                        var e = $('<div class="bblog-flame-post">').html(BBLog.t("board.radar.thread"));
                        e.on("click", function () {
                            post.unwrap();
                            post.next(".bblog-flame-post").remove();
                        })
                        post.parent().after(e);
                    });
                }
                break;
            case "general.contextmenu.serverbrowser":
                var e = $("#serverbrowser-filters, #serverguide-filtertoggle");
                if (!e.length) return this.callback();
                $("#serverguide-result [guid], #serverbrowser-results tr[data-guid]").off("contextmenu.bblog").on("contextmenu.bblog", function (ev) {
                    var id = $(this).attr("guid") ? $(this).attr("guid") : $(this).attr("data-guid");
                    var name = $.trim($(this).find("a.serverguide-cell-name-server-name").length ? $(this).find("a.serverguide-cell-name-server-name").text() : $(this).find(".server-name").text());
                    var key = "radar.server";
                    var storage = BBLog.storage(key) || [];
                    var found = BBLog.searchInObject(storage, "id", id, true);
                    var t = found === null ? "radar.addserver" : "radar.removeserver";
                    $("#bblog-contextmenu").html(
                        $('<div>').text(BBLog.t(t)).on("click", function () {
                                if (found !== null) {
                                    delete storage[found];
                                } else {
                                    storage.push({ "id": id, "name": name, "source": BBLog.cache("mode") });
                                }
                                BBLog.storage(key, storage);
                                $("#bblog-contextmenu").hide();
                            }
                        )).trigger("show", [ev]);
                    if (BBLog.customContextable()) ev.preventDefault();
                });
                break;
            case "general.contextmenu.serverpage":
                if (!window.location.href.match(/\/servers\/show\//)) return this.callback();
                $("#serverguide-scoreboard tr[data-personaid]").off("contextmenu.bblog").on("contextmenu.bblog", function (ev) {
                    var id = $(this).attr("data-personaid");
                    var name = $.trim($(this).find(".player-name a").text());
                    var key = "radar.soldier";
                    var storage = BBLog.storage(key) || [];
                    var found = BBLog.searchInObject(storage, "id", id, true);
                    var t = found === null ? "radar.addsoldier" : "radar.removesoldier";
                    $("#bblog-contextmenu").html(
                        $('<div>').text(BBLog.t(t)).on("click", function () {
                                if (found !== null) {
                                    delete storage[found];
                                } else {
                                    storage.push({ "id": id, "name": name, "source": BBLog.cache("mode") });
                                }
                                BBLog.storage(key, storage);
                                $("#bblog-contextmenu").hide();
                            }
                        )).trigger("show", [ev]);
                    if (BBLog.customContextable()) ev.preventDefault();
                });
                break;
            case "general.local.comments":
                var key = "general.local.comments.data";
                var localComment = $('<div class="bblog-local-comment">').append($('<textarea>').on("keydown blur", function () {
                    var storage = BBLog.storage(key) || {};
                    var data = $(this).parent().data("bblogdata");
                    if (typeof storage[data[1]] == "undefined") storage[data[1]] = {};
                    storage[data[1]][data[2]] = [$.trim(this.value), $.trim(data[5]), data[6], window.location.host];
                    BBLog.storage(key, storage);
                }).on("blur", function () {
                    if (this.value.length) {
                        $(this).height(BBLog.getTextareaHeight(this));
                    } else {
                        $(this).css("height", "").val(BBLog.t("local.comments.default")).one("focus", function () {
                            this.value = "";
                        });
                    }
                })).on("init", function () {
                    var storage = BBLog.storage(key) || {};
                    var data = $(this).data("bblogdata");
                    var value = "";
                    if (typeof storage[data[1]] != "undefined" && typeof storage[data[1]][data[2]] != "undefined" && storage[data[1]][data[2]][0].length) {
                        $(this).children().val(storage[data[1]][data[2]][0]).height(BBLog.getTextareaHeight($(this).children()));
                    } else {
                        $(this).children().val(BBLog.t("local.comments.default")).one("focus", function () {
                            this.value = "";
                        });
                    }
                });
                var elements = [];
                /**
                 * Array format
                 * 0 = The element to insert after/before
                 * 1 = The element type
                 * 2 = The ID
                 * 3 = The insert Method
                 * 4 = That class to to the element from the key=0
                 * 5 = The server name, text to display in the overview list
                 * 6 = The url to the server, without the host
                 */


                // server
                var e;
                if (BBLog.cache("mode") == "bf4" || BBLog.cache("mode") == "bfh") {
                    e = $("#serverbrowser-show");
                    if (e.length && !BBLog.elementCheck(e.find(".server-info"), action)) {
                        elements.push([e.find(".quick-info").first(), 'server', e.find("[data-guid]").first().attr("data-guid"), "After", "", $("#results-container tr.server-row.active .server-name").text(), e.find("footer a").first().attr("href")]);
                    }
                    e = $("#server-page-gamemode");
                    if (e.length && !BBLog.elementCheck(e, action)) {
                        elements.push([e, 'server', $("#server-page").attr("data-guid"), "After", "", $("#server-page h1").first().text(), window.location.pathname]);
                    }
                } else {
                    e = $("#selected-server-name a");
                    if (e.length && !BBLog.elementCheck(e, action)) elements.push([e.closest("h1"), 'server', e.attr("href").match(/\/show\/.*?\/(.*?)\//)[1], "After", "", e.text(), e.attr("href")]);
                    e = $("#serverguide-show-info #server-info");
                    if (e.length && !BBLog.elementCheck(e, action)) elements.push([e, 'server', $("#server-page button[data-guid]").attr("data-guid"), "Before", "", $("#server-header h1").text(), window.location.pathname]);
                }

                // profile
                if (BBLog.cache("mode") == "bf4" || BBLog.cache("mode") == "bfh") {
                    e = $("#user .profile-overview .right-column .box").first();
                    if (e.length && !BBLog.elementCheck(e, action)) {
                        elements.push([e, 'profile', $("#user").attr("data-user-id"), "Before", "", $("#user .box.username span").first().text(), window.location.pathname]);
                    }
                    if (BBLog.cache("mode") == "bfh") {
                        e = $("#game-stats-head").last();
                        if (e.length && !BBLog.elementCheck(e, action)) {
                            elements.push([e, 'profile', $("#game-stats-head a.avatar").first().attr("rel"), "After", "", $("#game-stats-head .soldier-info-name").find("span").last().text(), $("#game-stats-head a[data-track='soldier.profile']").attr("href")]);
                        }
                    } else {
                        e = $("#warsaw-stats > .submenu").first();
                        if (e.length && !BBLog.elementCheck(e, action)) {
                            elements.push([e, 'profile', $("#warsaw-stats a.avatar").first().attr("rel"), "Before", "", $("#warsaw-stats-head .soldier-info-name").find("span").last().text(), $("#warsaw-stats-head a[data-track='soldier.profile']").attr("href")]);
                        }
                    }
                } else {
                    e = $("#profile-user #profile-main-column");
                    var username = $("#profile-header h1").clone().children().remove().end();
                    if (e.length && !BBLog.elementCheck(e, action)) elements.push([e, 'profile', $("#profile-main-column").children(":first").attr("id").replace(/[^0-9]/g, ""), "Before", "", username.text(), $("#profile-header ul.tabs li:first a").attr("href")]);
                    e = $(".profile-venicestats-header-soldier:first").closest(".tabs-outer");
                    if (e.length && !BBLog.elementCheck(e, action)) elements.push([e, 'profile', $(".base-avatar-container[rel]").attr("rel"), "After", 'stats', e.find(".profile-venicestats-header-soldier-info-name span").text(), e.find(".profile-venicestats-header-soldier-info-type a").attr("href")]);
                    e = $("#mohw-overview.profile-venicestats-overview-highlight").closest(".profile-mohw-stats");
                    if (e.length && !BBLog.elementCheck(e, action)) elements.push([e, 'profile', $(".base-avatar-container[rel]").attr("rel"), "Before", 'stats', $(".profile-venicestats-header-soldier-info-name span").text(), $(".profile-venicestats-header-soldier-info-type a").attr("href")]);
                    e = $("#platoon-info").closest(".platoon-page-topright");
                }
                // platoon
                if (BBLog.cache("mode") == "bf4" || BBLog.cache("mode") == "bfh") {

                } else {
                    if (e.length && !BBLog.elementCheck(e, action)) elements.push([e, 'platoon', window.location.pathname.match(/platoon(.*)/)[1].replace(/[^0-9]/g, ""), "After", "", e.find(".platoon-info-title").text(), $(".platoon-menu-main-navigation > div:first a").attr("href")]);

                }
                for (var i in elements) {
                    var d = elements[i];
                    var c = localComment.clone(true, true);
                    if (d[4]) c.addClass(d[4]);
                    c["insert" + d[3]](d[0]).data("bblogdata", d).trigger("init");
                }
                break;
            case "general.focus.serverlist":
                var e = $("#serverbrowser-filters, #serverguide-filtertoggle");
                if (!e.length) return this.callback();
                var e = $("#serverguide-list-outer-wrapper, #serverbrowser-results table");
                if (e.length && BBLog.elementCheck(e, action)) return this.callback();
                window.scrollTo(0, e.offset().top - 100);
                break;
            case "general.removefriend":
                var e = $("#profile-header");
                if (e.length && BBLog.elementCheck(e, action)) return this.callback();
                if (!e.find(".allow-add").length && !$("#profile-status-message").hasClass("profile-your") && !e.find(".base-button-addfriend-wide").length) {
                    e.find(".interact").append($('<input class="base-button-addfriend-wide" type="button" value="' + BBLog.t("friend.remove") + '"/>').on("click", function () {
                        $(this).closest(".interact").remove();
                        var id = $("#profile-header div[rel*='reportProfileDropdown']").attr("rel").match(/reportProfileDropdown\/([0-9]+)/)[1];
                        var url = "/" + BBLog.cache("mode") + "/" + BBLog.cache("battlelog.language") + "friend/removeFriend/" + id + "/";
                        BBLog.handle("json.from.battlelog", {
                            "url": url, callback: function (data) {
                            }
                        });
                    }).attr("data-tooltip", BBLog.t("friend.remove.tooltip")));
                }
                break;
            case "general.remove.unsupportedbrowser":
                $("body").removeClass("unsupportedbrowser");
                $(".base-header-unsupportedbrowser").remove();
                break;
            case "general.scoreboard.tags":
                var tables = $("table.scoreboard");
                if (!tables.length) return this.callback();
                tables.each(function () {
                    var e = $(this);
                    if (BBLog.elementCheck(e, action)) return true;
                    if (window.location.href.match(/\/battlereport\//)) {
                        var playersTmp = Surface.Renderer.state.surface["battlereport"].battleReport.players;
                        var players = {};
                        for (var i in playersTmp) {
                            players[i] = playersTmp[i].persona.clanTag;
                        }
                    }
                    if (window.location.href.match(/\/servers\//)) {
                        var teams = Surface.Renderer.state.surface["serverbrowser-scoreboard"].scoreboard.result.teams;
                        var players = {};
                        for (var i in teams) {
                            var team = teams[i];
                            for (var j in team.players) {
                                players[team.players[j].personaId] = team.players[j].tag;
                            }
                        }
                    }
                    e.find("tr[data-personaid]").not(".bblog-tags").each(function () {
                        var id = $(this).attr("data-personaid");
                        $(this).addClass("bblog-tags");
                        if (typeof players[id] != "undefined") {
                            var tag = players[id];
                            if (tag.length) {
                                $(this).find(".common-playername-personaname-nolink").prepend('<span class="bblog-tag">[' + tag + ']</span>');
                            }
                        }
                    });
                });
                break;

            case "general.emblemeditor":
                if (!$("#emblem-canvas").length) return this.callback();
                if (BBLog.elementCheck($("#emblem-canvas"), action)) return this.callback();
				
				var getEmblemData = function () {
                    return emblem.emblem.data;
                };
				var loadFromCode = function (code) {
                    emblem.emblem.canvas.off("object:removed");
                    emblem.emblem.canvas.clear();
                    emblem.emblem.load(code);
                    emblem.emblem.canvas._clearSelection();
                    emblem.emblem.canvas.discardActiveObject();
                    BBLog.closeAllPopups();
                };			
				if (!$("#bblog-emblem-buttons").length) {
                    if ($("#emblem-side").length) {
                        $("#emblem-side").before('<div id="bblog-emblem-buttons">');
                    } else {
                        $("#emblem-edit header").first().append('<div id="bblog-emblem-buttons">');
                    }                    
                    $("#bblog-emblem-buttons").append($('<span class="bblog-button margin-right">' + BBLog.t("general.emblems.getcode") + '</span>').on("click", function () {
                        var html = $("<div><textarea style='font-family:courier new;width:95%; height:200px;' onclick='this.select()'></textarea>");
                        html.children().val(JSON.stringify(getEmblemData()));
                        BBLog.popup("emblem", BBLog.t("general.emblems.getcode"), html);
                    }));
                    $("#bblog-emblem-buttons").append($('<span class="bblog-button margin-right">' + BBLog.t("general.emblems.import") + '</span>').on("click", function () {
                        var html = $("<div>");
                        html.append(BBLog.t("general.emblems.import.info"));
                        html.append('<br><textarea style="width:95%; height:100px;"></textarea><br/><span class="bblog-button">' + BBLog.t("general.emblems.import") + '</span>');
                        html.find(".bblog-button").on("click", function () {
                            var val = $(this).parent().find("textarea").val();
                            val = val.replace(/[\s]/ig, "");
                            val = val.replace(/^emblem\.emblem\.load\(/ig, "");
                            val = val.replace(/[\)\;]+$/ig, "");
                            loadFromCode(val);
                        });
                        BBLog.popup("emblem", BBLog.t("general.emblems.import"), html);
                    }));
                    var clipboardKey = "general.emblems.clipboard." + BBLog.cache("mode");
                    $("#bblog-emblem-buttons").append($('<span class="bblog-button margin-right">' + BBLog.t("general.emblems.clipboard.copy") + '</span>').on("click", function () {
                        BBLog.storage(clipboardKey, JSON.stringify(getEmblemData()));
                        $("#emblem-clipboard-paste").show();
                    }));
                    $("#bblog-emblem-buttons").append($('<span id="emblem-clipboard-paste" class="bblog-button" style="display:none;">' + BBLog.t("general.emblems.clipboard.paste") + '</span>').on("click", function () {
                        loadFromCode(BBLog.storage(clipboardKey));
                    }));
                    if (BBLog.storage(clipboardKey)) $("#emblem-clipboard-paste").show();
                    emblem.emblem.canvas._onResize();
                }

                var showActiveOptions = function () {
                    if (emblem.emblem.canvas._activeObject) {
                        var html = $('<div>');
                        html.append('<div><layer>Angle</layer><input type="text" data-key="angle" size="6"/></div>');
                        html.append('<div><layer>ScaleX</layer><input type="text" data-key="scaleX" size="6"/></div>');
                        html.append('<div><layer>ScaleY</layer><input type="text" data-key="scaleY" size="6"/></div>');
                        html.append('<div><layer>Top</layer><input type="text" data-key="top" size="6"/></div>');
                        html.append('<div><layer>Left</layer><input type="text" data-key="left" size="6"/></div>');
                        html.find("input").on("blur.bblogemblem update.bblogemblem", function () {
                            if (!emblem.emblem.canvas._activeObject) return true;
                            this.value = this.value.replace(/[\,]/ig, ".").replace(/[^0-9-\.]/ig, "");
                            var v = parseFloat(this.value);
                            var attr = $(this).attr("data-key");
                            var obj = emblem.emblem.canvas.getActiveObject();
                            switch (attr) {
                                case "angle":
                                    obj.setAngle(v);
                                    break;
                                case "scaleX":
                                    obj.setScaleX(v);
                                    break;
                                case "scaleY":
                                    obj.setScaleY(v);
                                    break;
                                case "top":
                                    obj.setTop(v);
                                    break;
                                case "left":
                                    obj.setLeft(v);
                                    break;
                            }
                            obj.setCoords();
                            emblem.emblem.render();
                        }).on("keydown.bblogemblem click.bblogemblem", function (ev) {
                            if (!emblem.emblem.canvas._activeObject) return true;
                            if (ev.keyCode && ev.keyCode == 13) {
                                $(this).trigger("update.bblogemblem");
                            }
                            if (ev.keyCode && ev.keyCode == 27) {
                                emblem.emblem.canvas.deactivateAllWithDispatch();
                                $("#emblem-edit-object-opacity:first").trigger("change");
                                $("#bblog-emblem-options").hide();
                                return;
                            }
                            ev.stopPropagation();
                        }).on("init.bblogemblem focus.bblogemblem", function (ev) {
                            if (!emblem.emblem.canvas._activeObject) return true;
                            var attr = $(this).attr("data-key");
                            this.value = emblem.emblem.canvas._activeObject[attr];
                        }).trigger("init.bblogemblem");
                        $("#bblog-emblem-options").show().find(".box-content").html(html);
                    } else {
                        $("#bblog-emblem-options").hide();
                    }
                };

                $("#emblem-edit .emblem-layer-options").after(
                    $('<div class="box-content bblog-emblem-info">')
                        .html(BBLog.t("general.emblemeditor.text").replace(/\n/ig, "<br/>") + "<br/><br/>")
                        .append('<input type="file" accept="image/*" id="bblog-emblem-file"/>').on("change", function (ev) {
                        var reader = new FileReader();
                        reader.onload = (function (theFile) {
                            return function (e) {
                                if (!$("#bblog-canvas-container").length) $("#emblem-canvas").before('<div id="bblog-canvas-container">');
                                $("#bblog-canvas-container").css("background-image", "url('" + e.target.result + "')");
                                $("#bblog-emblem-file").trigger("blur");
                                $("#emblem-canvas").css("opacity", 0.5);
                            };
                        })(f);
                        reader.readAsDataURL(ev.target.files[0]);
                    })
                );

                $("header.layers-count").parent().before('<div class="box" id="bblog-emblem-options"><header><h1>' + BBLog.t("general.emblemeditor.ld.title") + '</h1></header><div class="box-content"></div></div>');
                $(document).off("click.bblogemblem").on("click.bblogemblem", showActiveOptions);
                $(document).off("keydown.bblogemblem").on("keydown.bblogemblem", function (ev) {
                    if (!$(ev.srcElement || ev.target).is("body")) return true;
                    showActiveOptions();
                    var e = emblem.emblem.canvas.getActiveObject();
                    var imageLayer = $("#bblog-canvas-container");
                    if (imageLayer.length) {
                        var o = parseFloat(imageLayer.css("opacity"));
                        switch (ev.keyCode) {
                            case 65:
                                o -= 0.1;
                                break;
                            case 68:
                                o += 0.1;
                                break;
                        }
                        o = Math.min(1, Math.max(0, o));
                        imageLayer.css("opacity", o);
                        $("#emblem-canvas").css("opacity", 1 - o);
                    }
                    if (e) {
                        var change = false;
                        if (ev.keyCode == 32) {
                            change = true;
                            if (e._oldValues) {
                                for (var i in e._oldValues) {
                                    e[i] = e._oldValues[i];
                                }
                                e._oldValues = false;
                            } else {
                                e._oldValues = {};
                                var values = {
                                    cornerSize: 0,
                                    hasControls: false,
                                    hasBorders: true,
                                    hasRotatingPoint: false,
                                    transparentCorners: true
                                };
                                for (var i in values) {
                                    e._oldValues[i] = e[i];
                                    e[i] = values[i];
                                }
                            }
                            change = true;
                        } else if (ev.keyCode == 27) {
                            change = true;
                            emblem.emblem.canvas.deactivateAllWithDispatch();
                        } else if (ev.ctrlKey && (ev.keyCode == 39 || ev.keyCode == 37)) {
                            e.angle += ev.keyCode == 39 ? 1 : -1;
                            if (e.angle > 359) e.angle = 0;
                            if (e.angle < 0) e.angle = 359;
                            change = true;
                        }
                        if (change) {
                            e.setCoords();
                            emblem.emblem.render();
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                    }
                    showActiveOptions();
                });
                break;
            case "bf3.contextmenu.report":
                if (!window.location.href.match(/battlereport\/show/)) return this.callback();
                var e = $("#battlereport-teamstats");
                if (BBLog.elementCheck(e, action)) return this.callback();
                $("tr[data-personaid]").off("contextmenu.bblog").on("contextmenu.bblog", function (ev) {
                    var id = $(this).attr("data-personaid");
                    var name = $.trim($(this).find(".common-playername-personaname-nolink").text());
                    var key = "radar.soldier";
                    var storage = BBLog.storage(key) || [];
                    var found = BBLog.searchInObject(storage, "id", id, true);
                    var t = found === null ? "radar.addsoldier" : "radar.removesoldier";
                    $("#bblog-contextmenu").html(
                        $('<div>').text(BBLog.t(t)).on("click", function () {
                                if (found !== null) {
                                    delete storage[found];
                                } else {
                                    storage.push({ "id": id, "name": name, "source": BBLog.cache("mode") });
                                }
                                BBLog.storage(key, storage);
                                $("#bblog-contextmenu").hide();
                            }
                        )).trigger("show", [ev]);
                    if (BBLog.customContextable()) ev.preventDefault();
                });
                break;
            case "board.contextmenu.quote":
                if (!window.location.href.match(/forum\/threadview/)) return this.callback();
                var e = $("form.forum-ajax-post");
                if (!e.length || BBLog.elementCheck(e, action)) return this.callback();
                $(".forum-threadview-post-text").off("contextmenu.bblog").on("contextmenu.bblog", function (ev) {
                    var selection = BBLog.getSelection(this);
                    if (selection) {
                        $("#bblog-contextmenu").html(
                            $('<div>').text(BBLog.t("contextmenu.quote")).on("click", function () {
                                    e.find("textarea").trigger("focus").append('\n[quote]' + selection + '[/quote]');
                                    window.scrollTo(0, e.offset().top);
                                    $("#bblog-contextmenu").hide();
                                }
                            )).trigger("show", [ev]);
                        if (BBLog.customContextable()) ev.preventDefault();
                    }
                });
                break;
            case "board.contextmenu.radar":
                if (!window.location.href.match(/forum\/threadview/)) return this.callback();
                var key = "radar.board";
                $(".forum-threadview-post-poster-name").off("contextmenu.bblog").on("contextmenu.bblog", function (ev) {
                    var name = $.trim($(this).text());
                    var storage = BBLog.storage(key) || [];
                    var found = BBLog.searchInObject(storage, "name", name, true);
                    var t = found === null ? "radar.addboarduser" : "radar.removeboarduser";
                    $("#bblog-contextmenu").html(
                        $('<div>').text(BBLog.t(t)).on("click", function () {
                                if (found !== null) {
                                    delete storage[found];
                                } else {
                                    storage.push({ "name": name, "source": BBLog.cache("mode") });
                                }
                                BBLog.storage(key, storage);
                                $("#bblog-contextmenu").hide();
                            }
                        )).trigger("show", [ev]);
                    if (BBLog.customContextable()) ev.preventDefault();
                });
                break;
            case "board.favthreads.add":
                var isActive = BBLog.storage("board.favthreads.add");
                var match = window.location.href.match(/\/threadview\/([0-9]+)\//i);
                if (!match || !isActive) return this.callback();
                var threadId = match[1];
                var e = $("div.common-box-title-clean:first");
                if (BBLog.elementCheck(e, action)) return this.callback();
                var storage = BBLog.storage("board.favthreads") || [];
                var insHtml = $('<div class="bblog-favthread-button"><input type="button" value="' + BBLog.t('favThreads.addbtn') + '" class="bblog-button orange fav"/><span class="bblog-totop">&nbsp;<input type="button" value="' + BBLog.t('goto.top') + '" class="bblog-button orange"/></span></div>');
                var clone = insHtml.clone();
                clone.find(".bblog-totop").remove();
                e.after(insHtml.clone()).before(clone);
                var el = $(e.prev()).add(e.next());
                el.find("input.fav").on("click", function () {
                    storage.push({
                        id: threadId,
                        "title": $("div.forum-start-title:first h1:first").text(),
                        "source": BBLog.cache("mode")
                    });
                    BBLog.storage("board.favthreads", storage);
                    el.find("input.fav").remove();
                });
                el.find(".bblog-totop input").on("click", function () {
                    window.scrollTo(0, 0);
                });
                var found = BBLog.searchInObject(storage, "id", threadId, true);
                if (found !== null) el.find("input.fav").remove();

                // bind the post submit input
                $("input[type='submit'].common-replyform-form-submit").on("click", function () {
                    if (BBLog.storage("board.favthreads.autoadd")) {
                        el.find("input").trigger("click");
                    }
                });
                break;
            case "board.gototop":
                if (!window.location.href.match(/\/threadview\/([0-9]+)\//i)) return this.callback();
                BBLog.handle("board.favthreads.add", null, function () {
                    var e = $("div.common-box-title-clean:first");
                    if (BBLog.elementCheck(e, action)) return true;
                    if (!$(".bblog-totop").length) {
                        var insHtml = $('<div class="bblog-favthread-button"><span class="bblog-totop">&nbsp;<input type="button" value="' + BBLog.t('goto.top') + '" class="bblog-button orange"/></span></div>');
                        insHtml.find(".bblog-totop input").on("click", function () {
                            window.scrollTo(0, 0);
                        });
                        e.after(insHtml);
                    }
                    $(".bblog-totop").show();
                });
                break;
            case "board.collapsequotes":
                if (!window.location.href.match(/\/(threadview|editpost)\/([0-9]+)\//i)) return this.callback();
                if (!$("body").hasClass("bblog-collapsequotes")) $("body").addClass("bblog-collapsequotes");
                break;
            case "board.signature":
                var signature = BBLog.storage("board.signature.text");
                if (!window.location.href.match(/\/(threadview|newthread)\/([0-9]+)\//i) || !signature || !signature.length) return this.callback();
                $("input[type='submit'].common-replyform-form-submit, td.forum-newthread-submit-cell input[type='submit']").each(function () {
                    if (BBLog.elementCheck($(this), action)) return true;
                    $(this).after($('<span class="bblog-append-signature"><input type="checkbox" checked="checked" id="bblog-append-sig"/> ' + BBLog.t("add.signature") + '</span>').attr("data-tooltip", BBLog.t("add.signature.bubble")));
                    $(this).on("click", function (e) {
                        if ($(this).data("signature-added") || !$("#bblog-append-sig:checked").length) return;
                        $(this).data("signature-added", 1);
                        var area = $(this).prev("textarea").add($("#forum-newthread-body"));
                        var val = area.val();
                        val = $.trim(val) + "\n\n" + signature;
                        area.val(val);
                    });
                });
                break;
            case "_bf3.vehicle.weapons.textfilter":
                var tables = $("#profile-stats-weapons-main-column table.statisticstable");
                $(".profile-stats-type-container-filters:first").after('<div class="base-clear">');
                var table = tables.filter(":eq(0)");
                table.before('<div class="bblog-textual-filter" id="bblog-textual-filter">');
                var textfield = $('<span>' + BBLog.t("textfilter") + '</span><input type="text" value=""/>').attr("data-tooltip", BBLog.t("textfilter.weapon.bubble").replace(/\\n/g, "\n"));
                var items = tables.find("td.item-name p");
                textfield.val(BBLog.storage(action + data.type) || "");
                textfield.on("keyup blur focus", [items], function (ev) {
                    BBLog.storage(action + data.type, $(this).val());
                    var val = $(this).val().replace(/[^0-9a-zA-Z,]/g, "").toLowerCase();
                    var vals = val.split(",");
                    if (!val.length) {
                        $(".profile-stats-type-container-filters .last div").trigger("click");
                        return false;
                    } else {
                        $(".profile-stats-type-container-filters .selected").removeClass("selected");
                        ev.data[0].each(function () {
                            var text = $(this).text().replace(/[^0-9a-zA-Z,\ä\ü\ö\Ö\Ü\Ä]/g, "").toLowerCase();
                            for (var i in vals) {
                                if (text.match(vals[i])) {
                                    $(this).closest("tr").show();
                                    return true;
                                }
                            }
                            $(this).closest("tr").hide();
                        });
                    }
                }).triggerHandler("keyup");
                $("#bblog-textual-filter").append(textfield);
                break;

            case "bf4.unlocks.improvements":
            case "bf4.assignments.improvements":
            case "bf4.awards.improvements":
            case "bfh.awards.improvements":
            case "bfh.progression.improvements":
                var u = "";
                switch (action) {
                    case "bf4.unlocks.improvements":
                        u = "vehicleunlocks|weaponunlocks|kits|dogtags";
                        break;
                    case "bf4.assignments.improvements":
                        u = "assignments";
                        break;
                    case "bf4.awards.improvements":
                        u = "awards";
                        break;
                    case "bfh.awards.improvements":
                        u = "assignments|awards|patches";
                        break;
                    case "bfh.progression.improvements":
                        u = "progression";
                        break;
                }
                var m = window.location.href.match(new RegExp("\/(" + u + ")\/"));
                if (!m) return this.callback();
                var e = $("#profile-stats-fetch-url .box").first();
                if (!e.length) return this.callback();
                var e2 = $("#dogtags-filter li[data-filter].active").first();
                if (BBLog.elementCheck(e, action)) return this.callback();

                var e2 = $("#dogtags-filter li[data-filter]").on("click", function () {
                    $("#profile-stats-fetch-url").find(".span8 .box").trigger("init");
                    $("#profile-stats-fetch-url").find(".span8 .box").trigger("update-bblog");
                });
                e = $("#profile-stats-fetch-url");


                e.find(".span8 .box").on("init", function () {
                    $(this).addClass("bblog-overflow-hidden");

                    var index = $(this).prevAll(".box").length;
                    var bblogKeyBase = action + "." + m[1];
                    if ($("#dogtags-filter").length) bblogKeyBase += "." + $("#dogtags-filter li.active").attr("data-filter");
                    $(this).data("bblog-key", bblogKeyBase + "." + index);

                    if ($(this).data("bblog-init")) return true;

                    $(this).data("bblog-init", 1);
                    $(this).find("h1").prepend("&nbsp;").prepend($('<span class="bblog-minimize">').on("click", function () {
                        $(this).toggleClass("plus");
                        $(this).closest(".box").trigger("set-bblog");
                    }));
                }).on("update-bblog", function () {
                    $(this).css("height", ($(this).find("header").height() + 1) + "px");
                    $(this).find(".bblog-minimize").addClass("plus");
                    if (!BBLog.storage($(this).data("bblog-key"))) {
                        $(this).find(".bblog-minimize").removeClass("plus");
                        $(this).css("height", "");
                    }
                }).on("set-bblog", function () {
                    BBLog.storage($(this).data("bblog-key"), $(this).find(".bblog-minimize").hasClass("plus"));
                    $(this).trigger("update-bblog");
                });
                e.find(".span8 .box").trigger("init");
                e.find(".span8 .box").trigger("update-bblog");
                break;
            case "bf3.weapons.list.filters":
                var match = window.location.href.match(/soldier\/(.*?)\/weapons\/([0-9]+)\//);
                if (BBLog.cache("mode") != "bf3" || !match) return this.callback();
                var e = $("#profile-stats-weapons-main-column .profile-stats-type-container-filters:first ul:first");
                if (!e.length || BBLog.elementCheck(e, action)) return this.callback();
                var l = e.find(".last");
                l.before('<li><div class="kit-all" data-extrafilter="pdw" data-tooltip="Personal Defence Weapons"><p>PDW</p></div></li>');
                l.before('<li><div class="kit-all" data-extrafilter="pist" data-tooltip="Pistols"><p>PIST</p></div></li>');
                l.before('<li><div class="kit-all" data-extrafilter="shotgun" data-tooltip="Shotguns"><p>SGUN</p></div></li>');
                e.find("[data-extrafilter]").on("click", function () {
                    var type = $(this).attr("data-extrafilter");
                    var extraFilter = {
                        "pist": BBLogWeapons["weapon-groups"]["pistols"],
                        "shotgun": BBLogWeapons["weapon-groups"]["shotguns"],
                        "pdw": BBLogWeapons["weapon-groups"]["pdw"],
                    };
                    var data = extraFilter[type];
                    var items = $("#profile-stats-weapons-main-column table.statisticstable td.item-name a");
                    items.closest("tr").hide();
                    items.each(function () {
                        for (var i in data) {
                            var r = new RegExp("/" + data[i] + "/", "i");
                            if (r.test($(this).attr("href"))) {
                                $(this).closest("tr").show();
                            }
                        }
                    });
                });
                BBLog.handle("_bf3.vehicle.weapons.textfilter", { type: "weapon" });
                break;
            case "bf3.weapons.list.extradata":
                var match = window.location.href.match(/soldier\/(.*?)\/weapons\/([0-9]+)\//);
                if (BBLog.cache("mode") != "bf3" || !match) return this.callback();
                var e = $("#profile-stats-weapons-main-column");
                if (!e.length || BBLog.elementCheck(e, action)) return this.callback();
                var device = $(".profile-venicestats-header-soldier-info-type-game:first").attr("class").match(/common-game-([0-9]+)-([0-9])/)[2];
                BBLog.handle("json.from.battlelog", {
                    url: "/bf3/" + BBLog.cache("battlelog.language") + "weaponsPopulateStats/" + match[2] + "/" + device + "/",
                    callback: function (data) {
                        // shots and HS rate
                        var items = $("#profile-stats-weapons-main-column table.statisticstable:first td.item-name a");
                        for (var i in data.data.mainWeaponStats) {
                            var weapon = data.data.mainWeaponStats[i];
                            var weaponTr = items.filter("[href*='iteminfo/" + weapon.slug + "/']").closest("tr");
                            if (weaponTr.length) {
                                var td = weaponTr.find("td.last").prev();
                                td.find(".item-object").addClass("bblog-shots-position");
                                var hsRate = ((100 / weapon.kills) * weapon.headshots).toFixed(2).toString();
                                hsRate = hsRate == "NaN" ? "0" : hsRate;
                                var html = $(
                                    '<div class="bblog-shots">'
                                    + '<div class="shots"><span></span> ' + weapon.shotsFired + ' / ' + weapon.shotsHit + '</div>'
                                    + '<div class="hs"><span></span> ' + weapon.headshots + ' (' + hsRate + '%)</div>'
                                    + '</div>'
                                );
                                html.find(".shots").attr("data-tooltip", BBLog.t("weaponlist.shots"));
                                html.find(".hs").attr("data-tooltip", BBLog.t("weaponlist.hs"));
                                td.find(".item-object").append(html);
                            }
                        }
                        // kills to progress bar
                        var items = $("td.item-servicestars");
                        items.each(function () {
                            var kills = $(this).next().find(".item-object").clone();
                            kills.children(":not(:text)").remove();
                            kills = parseInt(kills.text().replace(/[^0-9]/g, ""));
                            var nextUp = Math.ceil(kills / 100) * 100;
                            var up = nextUp - kills;
                            up = up == 0 ? 100 : up;
                            $(this).find(".common-percentbar-container").attr("data-tooltip", up + " " + BBLog.t("kills.remaining")).closest("td").attr("data-remaining", up);
                        });
                        // mini server stars
                        var items = $("#profile-stats-weapons-secondary-column  div.profile-stats-unlock-progression-kit-item a");
                        for (var i in data.data.mainWeaponStats) {
                            var weapon = data.data.mainWeaponStats[i];
                            var weaponTr = items.filter("[href*='iteminfo/" + weapon.slug + "/']").closest("div");
                            // check for duplicates
                            for (var i in BBLogWeapons.duplicates) {
                                if (weapon.slug == BBLogWeapons.duplicates[i]) {
                                    weaponTr = weaponTr.add(items.filter("[href*='iteminfo/" + i + "/']"));
                                }
                            }
                            if (weaponTr.length) {
                                var html = $(
                                    '<span class="bblog-mini-stars">' + Math.floor(weapon.kills / 100) + '</span>'
                                );
                                weaponTr.append(html);
                            }
                        }
                        e.data(action + ".ajax.finished", 1);
                    }
                });
                break;
            case "bf3.vehicle.list.filters":
                var match = window.location.href.match(/soldier\/(.*?)\/vehicles\/([0-9]+)\//);
                if (BBLog.cache("mode") != "bf3" || !match) return this.callback();
                var e = $("#profile-stats-vehicle-statistics");
                if (!e.length || BBLog.elementCheck(e, action)) return this.callback();
                var list = $(
                    '<div class="profile-stats-type-container-filters"><ul class="common-selector">'
                    + '</ul></div>'
                );
                for (var id in BBLogWeapons["vehicle-groups"]) {
                    var name = BBLog.t("vehicle.group." + id);
                    var vehicles = BBLogWeapons["vehicle-groups"][id];
                    list.find("ul").append($('<li><div class="kit-all kit-' + id + '" data-filter="' + id + '"><span></span><p>' + id.toUpperCase() + '</p></div></li>').attr("data-tooltip", name));
                }
                list.find("ul").append('<li><div class="kit-all" data-filter="all"><span></span><p>All</p></div></li>');
                list.find("ul").find("li:first").addClass("first");
                list.find("ul").find("li:last").addClass("last");
                list.find("[data-filter]").on("click", function () {
                    var tb = $("#profile-stats-vehicle-statistics table.statisticstable tbody");
                    var type = $(this).attr("data-filter");
                    if (type == "all") {
                        tb.find("tr").show();
                    } else {
                        var vehicles = BBLogWeapons["vehicle-groups"][type];
                        var items = tb.find("td.item-name a");
                        tb.find("tr").hide();
                        for (var i in vehicles) {
                            var vehicle = vehicles[i];
                            items.filter("[href*='iteminfo/" + vehicle + "/']").closest("tr").show();
                        }
                    }
                });
                e.find("h1:first").after(list);
                BBLog.handle("_bf3.vehicle.weapons.textfilter", { type: "vehicle" });
                break;
            case "bf3.vehicle.list.extradata":
                var match = window.location.href.match(/soldier\/(.*?)\/vehicles\/([0-9]+)\//);
                if (BBLog.cache("mode") != "bf3" || !match) return this.callback();
                var e = $("#profile-stats-vehicle-statistics");
                if (!e.length || BBLog.elementCheck(e, action)) return this.callback();
                var device = $(".profile-venicestats-header-soldier-info-type-game:first").attr("class").match(/common-game-([0-9]+)-([0-9])/)[2];
                BBLog.handle("json.from.battlelog", {
                    url: "/bf3/" + BBLog.cache("battlelog.language") + "vehiclesPopulateStats/" + match[2] + "/" + device + "/",
                    callback: function (data) {
                        // add vehicles destroyed info
                        var items = $("#profile-stats-vehicle-statistics table.statisticstable:first td.item-name a");
                        for (var i in data.data.mainVehicleStats) {
                            var vehicle = data.data.mainVehicleStats[i];
                            var vehicleTr = items.filter("[href*='iteminfo/" + vehicle.slug + "/']").closest("tr");
                            if (vehicleTr.length) {
                                vehicleTr.attr("data-extended", true);
                                var td = vehicleTr.find("td.item-kills");
                                var html = $(
                                    '<div class="bblog-kills">'
                                    + '<span></span> ' + vehicle.destroyXinY
                                    + '</div>'
                                ).attr("data-tooltip", BBLog.t("weaponlist.destroyed"));
                                td.find(".item-object").append(html);
                            }
                        }
                        // add kills per minute
                        $("td.item-kills").each(function () {
                            var time = parseInt($(this).nextAll("td.item-duration").attr("data-sort-value"));
                            var kills = parseInt($(this).attr("data-sort-value"));
                            var kpm = ((kills / time) * 60).toFixed(2);
                            $(this).find(".bblog-kills").append('<div class="bblog-kpm">KPM ' + kpm + '</div>');
                        });

                        // add service star information
                        var vehicleToGroup = {};
                        var groupToVehicle = {};
                        var groupValues = {};
                        for (var i in data.data.mainVehicleStats) {
                            var g = data.data.mainVehicleStats[i].category;
                            var s = data.data.mainVehicleStats[i].slug;
                            vehicleToGroup[s] = g;
                            if (typeof groupToVehicle[g] == "undefined") groupToVehicle[g] = {};
                            groupToVehicle[g][s] = s;
                        }
                        vehicleToGroup["a-10-thunderbolt"] = vehicleToGroup["su-25tm-frogfoot"] = "Vehicle Air Jet Fighter";
                        // first iterate and add correct grouped unlocks
                        e.find("td.item-nextunlock").each(function () {
                            var vehicle = $(this).parent().find(".item-name a:first").attr("href").match(/iteminfo\/(.*?)\//i)[1];
                            var group = vehicleToGroup[vehicle];
                            $(this).closest("tr").find("td.item-servicestars").data("vehicleslug", vehicle).data("vehiclegroup", group);
                        });
                        e.find("td.item-servicestars").each(function () {
                            var vehicle = $(this).data("vehicleslug");
                            var group = $(this).data("vehiclegroup");
                            var dataObj = data.data.unlockProgression[group];
                            if (dataObj && dataObj.length) {
                                var obj = null;
                                for (var i in dataObj) {
                                    obj = dataObj[i].unlockedBy;
                                }
                                dataObj = obj;
                                if (dataObj && !dataObj.license && dataObj.valueNeeded) {
                                    var lastProgressValue = dataObj.valueNeeded;
                                    var haveValue = dataObj.actualValue;
                                    var stars = Math.ceil(haveValue / lastProgressValue);
                                    var nextValue = lastProgressValue * (stars);
                                    var prevValue = nextValue - lastProgressValue;
                                    var currentValue = haveValue - prevValue;
                                    var perc = Math.floor((currentValue / lastProgressValue) * 100);
                                    var bubble = "<div style='text-align:left;'>Star " + (stars - 1) + ": " + prevValue + "<br/>"
                                        + "Current: " + haveValue + "<br/>"
                                        + "Star " + (stars) + ": " + nextValue + "<br/>"
                                        + "Remaining: " + (nextValue - haveValue) + "</div>";
                                    var bubbleStar = perc + '% ' + BBLog.t("vss.have");
                                } else {
                                    var haveValue = 0;
                                    var stars = "-";
                                    var nextValue = 0;
                                    var perc = 100;
                                    var bubble = bubbleStar = ' - No Service Star data available (Shortcut Kit)';
                                }
                                var el = $(this).find("[data-tooltip]");
                                el.attr("data-tooltip", el.attr("data-tooltip") + "\n" + bubble);
                                el.closest("[data-count]").attr("data-points-required", nextValue - haveValue);
                            }
                        });
                        e.data(action + ".ajax.finished", 1);
                    }
                });
                break;
            case "bf3.vehicle.altSort":
                var match = window.location.href.match(/\/vehicles\//);
                if (BBLog.cache("mode") != "bf3" || !match) return this.callback();
                var e = $("#profile-stats-vehicle-statistics");
                if (!e.data("bf3.vehicle.list.extradata.ajax.finished")) return this.callback();
                BBLog.handle("bf3.vehicle.list.extradata", data, function () {
                    var e = $("#statisticstable");
                    if (!e.length || BBLog.elementCheck(e, action)) return;
                    $("#statisticstable th:eq(2)").attr("data-tooltip", BBLog.t("bf3.vehicle.altSort.active"));
                    $("#statisticstable td.item-servicestars").each(function () {
                        $(this).find("[data-count]").removeAttr("data-count");
                        var points = parseInt($(this).find("[data-points-required]").attr("data-points-required"));
                        if (!points) points = 999999;
                        $(this).attr("data-sort-value", points);
                        e.trigger("update");
                    });
                    e.find("th.headerSortUp, th.headerSortDown").trigger("click").trigger("click");
                });
                break;
            case "bf3.weapons.altSort":
                var match = window.location.href.match(/\/weapons\//);
                if (BBLog.cache("mode") != "bf3" || !match) return this.callback();
                var e = $("#profile-stats-weapons-main-column");
                if (!e.data("bf3.weapons.list.extradata.ajax.finished")) return this.callback();
                BBLog.handle("bf3.weapons.list.extradata", data, function () {
                    var e = $("#bf3-weapon-table");
                    if (!e.length || BBLog.elementCheck(e, action)) return;
                    $("#bf3-weapon-table th:eq(2)").attr("data-tooltip", BBLog.t("bf3.weapons.altSort.active"));
                    $("#bf3-weapon-table td.item-servicestars").each(function () {
                        $(this).attr("data-sort-value", $(this).attr("data-remaining"));
                        e.trigger("update");
                    });
                    e.find("th.headerSortUp, th.headerSortDown").trigger("click").trigger("click");
                });
                break;
            case "bf3.weapons.info":
                var match = window.location.href.match(/iteminfo\/(.*?)\/(.*?)\//);
                if (BBLog.cache("mode") != "bf3" || !match) return this.callback();
                var boxContainer = $("div.venice-stats-small-boxes:first");
                if (!boxContainer.length || BBLog.elementCheck(boxContainer, action)) return this.callback();
                var weapon = match[1];
                var wdata = BBLogWeapons[weapon];
                if (typeof wdata == "string") wdata = BBLogWeapons[wdata];
                if (typeof wdata == "undefined") return this.callback();

                var title = boxContainer.parent().find(".common-secondary-column-line");
                title.next().css("margin-top", "0px");
                title.remove();

                // get box tpl
                var getBoxTpl = function (cl, additionalData) {
                    additionalData = typeof additionalData == "undefined" ? "" : additionalData;
                    return '<div class="' + cl + ' common-box-narrow common-box-title-clean venice-single-stats-column"><div class="common-box-container"><div class="common-box-inner-border"><div class="common-box-title"></div><div class="common-box-inner venice-single-stats-column-height"><div class="venice-statsitem-bar-container">' + additionalData + '</div></div></div></div></div>'
                };

                // get item row
                var getItemRow = function (title, value) {
                    if (typeof title == "object") title = title.html();
                    return '<div class="venice-statsitem-box-item"><div class="venice-statsitem-bar-title">' + title + '</div>'
                        + '<div class="venice-statsitem-bar-value">' + value + '</div><div style="clear:both;"></div>'
                };

                var appendTo = $('<div class="base-clear"></div><div class="bblog-weapon-container" id="bblog-weapon-container"></div><div class="base-clear"></div>');
                boxContainer.after(appendTo);
                appendTo = $("#bblog-weapon-container");

                // first row
                if (typeof wdata.supp != "undefined") {
                    var firstBox = $(getBoxTpl("extraInfos first box-1"));
                    var dmgChest = 100;
                    var dmgHead = 200;
                    var dmgLegs = 91;
                    if (typeof wdata.multiChest != "undefined") dmgChest = 100 * wdata.multiChest;
                    if (typeof wdata.multiHead != "undefined") dmgHead = 100 * wdata.multiHead;
                    var secondBox = $(getBoxTpl("damagemodel", '<div class="torso"><span class="chest">' + dmgChest + '%</span><span class="head">' + dmgHead + '%</span><span class="legs">' + dmgLegs + '%</span></div>'));
                    var thirdBox = $(getBoxTpl("damagecharts"));

                    // add some extra weapon info
                    firstBox.find(".common-box-title").html(BBLog.t("weapon.info"));
                    var drop = 15;
                    if (typeof wdata.drop != "undefined") drop = wdata.drop;
                    var dropTime = (wdata.maxdist / wdata.speed).toFixed(1);
                    var maxDrop = (dropTime * drop).toFixed(1) * -1;
                    var url = 'http://chart.googleapis.com/chart?chxt=x,x,y,y&cht=lxy&chf=bg,s,FFFFFF00&chf=bg,s,FFFFFF00&'
                        + 'chd=t:0,0,' + wdata.maxdist + ',' + wdata.maxdist + '|0,0,' + maxDrop + ',' + maxDrop + '&'
                        + 'chls=3.0&chs=250x130&chxl=1:|||3:||&chma=60,0,0,0&'
                        + 'chxr=0,0,' + wdata.maxdist + ',' + (wdata.maxdist / 5) + '|2,' + maxDrop + ',0&chg=10,10,2,2,0&chds=0,' + wdata.maxdist + ',' + maxDrop + ',0'
                        + '&chxs=0N*f*m,aaaaaa|2N*f*m,aaaaaa';
                    var chart = '<div class="bblog-dropchart"><span class="drop">' + BBLog.t("dropchart.drop") + '</span><span class="dist">' + BBLog.t("dropchart.distance") + '</span>';
                    chart += '<img src="' + url + '" alt="Dropchart" width="250" height="130"/>';
                    chart += '</div>';
                    var displayInfos = {
                        "supp": wdata.supp + "%",
                        "speed": wdata.speed + " m/s",
                        "drop": drop + " m/s <span data-tooltip='" + chart + "' style='color:#F80;'>(Chart)</span>",
                        "rld": wdata.rld + "s",
                        "rldem": wdata.rldem + "s",
                        "rldtrs": (wdata.rldtrs * wdata.rld).toPrecision(2) + "s / " + (wdata.rldtrs * wdata.rldem).toPrecision(2) + "s",
                        "maxdist": wdata.maxdist + "m",
                        "maxdisttime": dropTime + " s",
                    };
                    var appendCont = firstBox.find(".venice-statsitem-bar-container");
                    for (var id in displayInfos) {
                        // if some information not exists than remove it
                        if (displayInfos[id].match(/undefined/)) continue;
                        var span = $("<span>").text(BBLog.t("weapon." + id));
                        var key = "weapon." + id + ".bubble";
                        if (BBLog.t(key) != key) {
                            var b = BBLog.t("weapon." + id + ".bubble");
                            b = b.replace(/{chart}/, chart);
                            span.prepend($("<span class='info'></span> " + BBLog.t("weapon." + id)).attr("data-tooltip", b));
                        }
                        appendCont.append(getItemRow(span, displayInfos[id]));
                    }
                    ;

                    // add some damage info
                    secondBox.find(".common-box-title").html(BBLog.t("weapon.damage"));
                    var appendCont = secondBox.find(".venice-statsitem-bar-container");
                    var count = 1;
                    var chd = [];
                    var meterDist = [1, 5, 10, 15, 20, 25, 30, 45, 60, 75, 90, 120];
                    var entries = BBLog.count(meterDist);
                    var minDmg = 999;
                    var maxDmg = 0;
                    for (var i in meterDist) {
                        var dist = meterDist[i];
                        var calculatedDistDmg = 0;
                        if (dist <= wdata.dmgFallStart) { 
                            calculatedDistDmg = wdata.dmgMax;
                        } else if (dist >= wdata.dmgFallEnd) {
                            calculatedDistDmg = wdata.dmgMin;
                        } else {
                            var looseDmgMax = wdata.dmgMax - wdata.dmgMin;
                            var percLoose = (100 / wdata.dmgFallEnd) * dist;
                            calculatedDistDmg = wdata.dmgMax - (looseDmgMax / 100 * percLoose);
                        }
                        if (count == entries) {
                            var text = dist + "m - " + wdata.maxdist + "m";
                        } else {
                            var text = "in " + dist + "m";
                        }
                        calculatedDistDmg = calculatedDistDmg.toFixed(1);
                        minDmg = Math.min(minDmg, calculatedDistDmg);
                        maxDmg = Math.max(maxDmg, calculatedDistDmg);
                        chd.push(calculatedDistDmg);
                        appendCont.append(getItemRow(text, calculatedDistDmg));
                        count++;
                    }
                    
                    // add charts to third box
                    thirdBox.find(".common-box-title").html(BBLog.t("weapon.damage"));
                    minDmg -= 6;
                    maxDmg += 6;
                    var scale = wdata.dmgFallEnd + 10;
                    var appendCont = thirdBox.find(".venice-statsitem-bar-container");
                    var url = 'http://chart.googleapis.com/chart?chxt=x,x,y,y&cht=lxy&chf=bg,s,FFFFFF00&chf=bg,s,FFFFFF00&'
                        + 'chd=t:0,' + wdata.dmgFallStart + ',' + wdata.dmgFallEnd + ',' + scale + '|' + wdata.dmgMax + ',' + wdata.dmgMax + ',' + wdata.dmgMin + ',' + wdata.dmgMin + '&'
                        + 'chls=3.0&chs=300x150&chxl=1:|all data from symthic.com|Distance|3:||Damage&chma=0,0,0,0&'
                        + 'chxr=0,0,' + scale + ',10|2,' + minDmg + ',' + maxDmg + '&chg=' + (100 / scale).toFixed(2) * 10 + ',10,2,2,0&chds=0,' + scale + ',' + minDmg + ',' + maxDmg
                        + '&chxs=0N*f*m,aaaaaa|2N*f*,aaaaaa';
                    appendCont.html('<img src="' + url + '" alt="" style="padding-top:20px;"/>');
                    // add row
                    appendTo.append($('<div class="row">').append(firstBox).append(secondBox).append(thirdBox).append('<div class="base-clear">'));
                }
                if (typeof wdata.spread != "undefined") {
                    // second row
                    firstBox = $('<div class="common-box-narrow common-box-title-clean venice-single-stats-column first">' + BBLog.plotter.getBoxHtml(weapon) + '</div>');
                    secondBox = $(getBoxTpl("plotinfo box-1"));
                    thirdBox = $(getBoxTpl("plotdesc"));

                    // accuracy plot data
                    secondBox.find(".common-box-title").html(BBLog.t("weapon.plotinfo"));
                    var appendCont = secondBox.find(".venice-statsitem-bar-container");
                    for (var i in wdata["recoil"]) {
                        var span = $("<span>").text(BBLog.t("weapon.recoil." + i));
                        var key = "weapon.recoil." + i + ".bubble";
                        if (BBLog.t(key) != key) {
                            span.prepend($("<span class='info'></span>" + BBLog.t("weapon.recoil." + i)).attr("data-tooltip", BBLog.t(key)));
                        }
                        appendCont.append(getItemRow(span, '<span class="recoil-data-' + i + '">' + wdata["recoil"][i] + '</span>'));
                    }
                    for (var i in wdata["spread"]) {
                        text = BBLog.t("weapon.spread." + i);
                        if (text == "weapon.spread." + i) continue;
                        var span = $("<span>").text(BBLog.t("weapon.spread." + i));
                        var key = "weapon.spread." + i + ".bubble";
                        if (BBLog.t(key) != key) {
                            span.prepend($("<span class='info'></span>" + BBLog.t("weapon.spread." + i)).attr("data-tooltip", BBLog.t(key)));
                        }
                        appendCont.append(getItemRow(span, '<span class="spread-data-' + i + '">' + wdata["spread"][i] + '</span>'));
                    }

                    // accuracy plot desc
                    thirdBox.find(".common-box-title").html(BBLog.t("weapon.plot.desc.title"));
                    thirdBox.find(".venice-statsitem-bar-container").html(BBLog.t("weapon.plot.desc"));

                    // append to row
                    appendTo.append($('<div class="row">').append(firstBox).append(secondBox).append(thirdBox).append('<div class="base-clear">'));
                    BBLog.plotter.init(weapon);
                    BBLog.plotter.draw(weapon, {
                        "attachment": false,
                        "aim": "ads",
                        "position": "stand",
                        "action": "base"
                    });
                }

                // third row (TTK ROW)
                if (typeof wdata["ttk"] != "undefined") {
                    var firstBox = $(getBoxTpl("extraInfos first"));
                    var secondBox = $(getBoxTpl("plotinfo"));
                    var thirdBox = $(getBoxTpl("plotdesc"));

                    firstBox.find(".common-box-title").html(BBLog.t("weapon.ttk"));
                    var appendCont = firstBox.find(".venice-statsitem-bar-container");
                    for (var i in wdata["ttk"]) {
                        var text = "in " + i + "m";
                        appendCont.append(getItemRow(text, wdata["ttk"][i] + " / " + wdata["ttk-hc"][i]));
                    }
                    ;

                    secondBox.find(".common-box-title").html(BBLog.t("weapon.btk"));
                    var appendCont = secondBox.find(".venice-statsitem-bar-container");
                    for (var i in wdata["btk"]) {
                        var text = "in " + i + "m";
                        appendCont.append(getItemRow(text, wdata["btk"][i] + " / " + wdata["btk-hc"][i]));
                    }
                    ;

                    // ttk desc info
                    thirdBox.find(".common-box-title").html(BBLog.t("weapon.ttk.info"));
                    thirdBox.find(".venice-statsitem-bar-container").html(BBLog.t("weapon.ttk.desc"));

                    // add row
                    appendTo.append($('<div class="row">').append(firstBox).append(secondBox).append(thirdBox).append('<div class="base-clear">'));
                }

                // full weapon table
                var html = $("<div class='bblog-fullWeaponTable'>");
                html.append('<div class="venice-stats-info-title secondary" onclick="window.open(\'' + BBLog.serviceUrl + "/" + BBLog.cache("language") + '/bf3-weapon-comparison#' + weapon + '\', \'_blank\');" style="cursor:pointer;">' + BBLog.t("weapon.compare") + '</div><table></table>');
                html.append('<div class="common-secondary-column-line">');
                appendTo.append($('<div class="row">').append(html).append('<div class="base-clear">'));

                // sight videos
                var availableSights = {
                    rx01: "Reflex (RDS)",
                    eotech: "Holographic (HOLO)",
                    acog: "ACOG (4x)",
                    irnv: "IRNV (IR 1x)",
                    riflescope: "Rifle Scope (6x)",
                    m145: "M145 (3,4x)",
                    kobra: "KOBRA (RDS)",
                    pkas: "PKA-S (HOLO)",
                    pso: "PSO-1 (4x)",
                    pks07: "PKS-07 (7x)",
                    pka: "PK-A (3,4x)",
                    riflescope8x: "Rifle Scope (8x)",
                    ballistic: "Ballistic (12x)"
                };
                var sights = $("div.profile-stats-unlock-progression-kit-item img");
                if (sights.length) {
                    var html = $("<div class='bblog-sightVideos'>");
                    html.append('<div class="venice-stats-info-title secondary" style="cursor:pointer;">' + BBLog.t("weapon.sight.videos") + '</div>');
                    for (var i in availableSights) {
                        html.append('<div data-sight="' + i + '" class="video" style="display:none;"><div class="play" data-video="' + i + '">' + availableSights[i] + '<div>' + BBLog.t("weapon.sight.startvideo") + '</div></div></div>');
                    }
                    html.append('<div class="common-secondary-column-line">');

                    html.find(".venice-stats-info-title").on("click", function () {
                        $(this).toggleClass("visible");
                        $(this).nextAll().hide();
                        if ($(this).hasClass("visible")) {
                            // remove all not available sights
                            $(this).nextAll().each(function () {
                                var sightE = $(this);
                                var sight = $(this).attr("data-sight");
                                if (sight) {
                                    sights.each(function () {
                                        var thisSight = $(this).attr("src").replace(/(.*)\//ig, "").replace(/\?(.*)/ig, "").replace(/\.(.*)/ig, "").toLowerCase();
                                        if (thisSight == sight) {
                                            sightE.show();
                                            return false;
                                        }
                                    });
                                }
                            });
                        }
                    });

                    html.find(".play").on("click", function () {
                        var p = $(this).parent();
                        $(this).replaceWith('<video width="230" height="144"><source src="' + BBLog.serviceUrl + '/videos/sights/' + $(this).attr("data-video") + '.ogv" type="video/ogg" /></video>')
                        p.children().get(0).play();
                    }).find(".venice-stats-info-title").css("cursor", "pointer").on("click", function () {
                        $(this).parent().find(".video").toggle();
                    });

                    appendTo.append($('<div class="row">').append(html).append('<div class="base-clear">'));
                }

                // weapon switch
                var weapDiv = $('<div class="hidden">');
                for (var group in BBLogWeapons["weapon-groups"]) {
                    var weapons = BBLogWeapons["weapon-groups"][group];
                    weapDiv.append('<div class="title">' + group.toUpperCase() + '</div><div class="base-clear"></div>');
                    for (var w in weapons) {
                        w = weapons[w];
                        if (typeof BBLogWeapons[w] == "undefined") {
                            var name = w;
                        } else {
                            var name = typeof BBLogWeapons[w]["displayname"] != "undefined" ? BBLogWeapons[w]["displayname"] : w;
                        }
                        var url = window.location.href.replace(new RegExp("/" + weapon + "/"), "/" + w + "/");
                        var a = $("<a href='" + url + "'>" + name.toUpperCase() + "</a>");
                        weapDiv.append(a);
                    }
                    weapDiv.append('<div class="base-clear">');
                }
                var html = $("<div class='bblog-weaponSwitch'>");
                html.append('<div class="venice-stats-info-title secondary" style="cursor:pointer;">' + BBLog.t("weapon.switch") + '</div>');
                html.append(weapDiv);
                html.append('<div class="common-secondary-column-line">');

                html.find(".venice-stats-info-title").on("click", function () {
                    $(this).next().toggle();
                });

                appendTo.append($('<div class="row">').append(html).append('<div class="base-clear">'));
                break;
            case "bfh.weapons.info":
            case "bf4.weapons.info":
			 if ((action == "bf4.weapons.info" && BBLog.cache("mode") == "bf4" && window.location.href.match(/\/soldier\//i) && window.location.href.match(/\/pc\//i) && window.location.href.match(/\/stats\//i))) {
				var overcodetest = $("#overview-info div[class=box]").first();
				var whitbox = $("#bblog-hitbox");				
				  if (overcodetest.length && !whitbox.length) {		  				
					var btnleft = 700;					
					var boxcontent = overcodetest.find(".box-content").first();
					var divcont = boxcontent.html();
					if (divcont) { // fix battlelog skill div
						var newdivcont = divcont.replace('<div class="clear"></div>', "");
						newdivcont = newdivcont.replace('</a>', '');
						newdivcont = newdivcont + '</a><div class="clear"></div>';
						boxcontent.html(newdivcont);
					}
					var countdes = overcodetest.find(".description").first().html();
					if (countdes) {
					var howmfwid = countdes.length;	
						if (howmfwid) {
							btnleft = btnleft - (11 * howmfwid);						
						}
					}
					var bcode = '</a><div id="bblog-hitbox" style="float: left; position: relative; left: '+btnleft+'px; top: 12px;"><input id="bblog-weapon-stats-btn" type="button" class="btn btn-tiny" value="Damage &amp; Hitbox Information"></div>';
					overcodetest = $("#overview-info div[class=clear]").first();
					overcodetest.before($(bcode).on("click", function () { 				
						BBLog.popup('weapon-info', 'Damage & Hitbox Information', '<center><iframe id="htmlsource" src="'+BBLog.chk_url+'?weapon=damage-hitbox&bblog=1" width="100%" height="920" scrolling="0" frameborder="none" style="border: none;overflow-y: hidden;"></iframe></center>');
					}));
				  }		 
		     }	
				var bofinfo = `<div style="color:#ADFF2E; font-size: 11px; margin-top: 7px;"><span style="cursor: pointer;" data-tooltip= '<h6>BOF(Bullet-out frame) data</h6>BOF has a realistic "time to kill" in-game, due to the fact that guns can fire the first 2 to 5 bullets faster than the original RPM(rouds per minute).'>** The above TTK(Time To Kill) values are based on the <a href="https://irussao.github.io/images/bof.png" target="_blank">BOF(Bullet-out frame) data</a></span> by <a href="https://web.archive.org/web/20180731220315/http://forum.symthic.com/battlefield-4-technical-discussion/8501-bf4-shooting-mechanics" target="_blank">3VerstsNorth</a>. [ <a href="https://www.youtube.com/watch?v=ZTYGmYe56pk" target="_blank">Video</a>]
							For the Symthic data, put the mouse over the values or look at the image bellow.
							</div>`;
				const titles = {
								"distance":"<h6>Max distance</h1>This is an approximate value of how far the bullet can fly<br>This doesn't take bullet speed changes nor bullet drop into account.",
								"Bulletdrop":"<h6>Bullet drop</h6>m/s²",
								"InitialSpeed":"<h6>Bullet's muzzle velocity</h1>Meters per second.",
								"reloadempty":"<h6>Reload time (empty)</h6>Reload time in seconds when there's not bullet in the chamber (All bullets were fired)",
								"reloadleft":"<h6>Reload time (left)</h6>Reload time in seconds when there's a bullet in the chamber (All bullet's weren't fired)",
								"reloadthreshold":"<h6>Reload time threshold</h6>Read guide-page for complete explanation",
								"magsize":"<h6>Mag size</h6>",
								"recoilup":"<h6>Recoil upwards</h6>This is how much weapon kicks upwards each round (in degrees)",
								"recoilleft":"<h6>Recoil left</h6>This is how much weapon can kick to the left each round (random, in degrees)",
								"recoilright":"<h6>Recoil right</h6>This is how much weapon can kick to the right each round (random, in degrees)",
								"recoildecrease":"<h6>Recoil decrease</h6>This is how fast weapon recovers from the recoil after you stop firing (units unknown)",
								"recoilmultiple":"<h6>First shot recoil multiplier</h6>How much more first round kicks (Multiplier)",
								"ads_spread":"<h6>ADS Spread (Not moving, minimum)</h6>How much off the bullets can fly from the position where you're aiming.<br>Without bullpup: -<br><ul><li>S = Not moving</li><ul>",
								"ads_spreadmoving":"<h6>ADS Spread (Moving penalty, minimum)</h6>How much off the bullets can fly from the position where you're aiming.<br>Without bullpup: -<br><ul><li>M = Moving</li><ul>",
								"hipspreadnotmoving":"<h6>HIP Spread (Not moving, minimum)</h6>How much off the bullets can fly from the position where you're aiming.<br>Without bullpup: <ul><li>S = Stand</li><li>C = Crouch</li><li>P = Prone</li><ul>",
								"hipspreadmoving":"<h6>HIP Spread (Moving penalty, minimum)</h6>How much off the bullets can fly from the position where you're aiming.<br>Without bullpup: <ul><li>S = Stand</li><li>C = Crouch</li><li>P = Prone</li><ul>",
								"spreadincreasepershot":"<h6>Spread increase per shot</h6>This is how much spread increases per shot fired. (Degrees).<br><br>Without bullpup: -",
								"spreaddecreasepersec":"<h6>Spread decrease per second</h6>This is how much spread decreases per second after you stop firing.<br><br>Without bullpup: -"
				}	
				if ((action == "bf4.weapons.info" && BBLog.cache("mode") == "bf4" && window.location.href.match(/\/loadout\//i) && window.location.href.match(/\/pc\//i) && window.location.href.match(/\/kits\//i))) {
					var slotinfo = 0; 
					if (window.location.href.indexOf("/kits/0") > 0) slotinfo = "#slot-0";
					if (window.location.href.indexOf("/kits/1") > 0) slotinfo = "#slot-1";
					if (slotinfo == 0) return this.callback();
					var gamedatastuff;
					if (window.loadout) { gamedatastuff = window.loadout["game_data"]["compact"]["weapons"]; } else { return; }
					var check = $("#item-grid-wrapper");
					var ckweapon = check.find( ".active" );
					var ckweaponi = ckweapon.attr("data-guid");					
					var weapontdo;					
					if (gamedatastuff[ckweaponi]) { weapontdo = gamedatastuff[ckweaponi];
					} else { return this.callback(); }	
					var mea = $(slotinfo);
					var me4 = $("#bblog-weapon-stats-btn");
					var me5 = $("#kit-loadout");
					var boxsizel = 305;
					if (mea.length && !me4.length) {
						var wpnslug = weapontdo["slug"];						
						if(BBLog.BBWF[wpnslug]) {
						   var	btkorstka = ["BTK", "BTK: Bullets To Kill"];
						   var pelletsinfo = "";
						   if (BBLogbf4Weapons["shotguns"][wpnslug]) {
								btkorstka = ["STK", "STK: Shots To Kill"];								
								boxsizel = 320;								
								if (wpnslug == "usas-12-flir"|| wpnslug == "usas-12") { BBLog.BBWF[wpnslug].dmgMax += BBLog.BBWF[wpnslug].dmgSplash; BBLog.BBWF[wpnslug].dmgMin += BBLog.BBWF[wpnslug].dmgSplash; }								
								if (wpnslug != "usas-12-flir" && wpnslug != "usas-12") {
									pelletsinfo = "| <h7>Pellets:</h7> " + BBLog.BBWF[wpnslug].ShotsPerShell;									
									pelletsinfo += "<br><h7>DMG:</h7> [<h7 style='color:#BFC9AF'>Buckshot:</h7> Max: " + BBLog.BBWF[wpnslug].dmgMax + ", total: "+(BBLog.BBWF[wpnslug].dmgMax*BBLog.BBWF[wpnslug].ShotsPerShell).toFixed(1)+" | Min: " + BBLog.BBWF[wpnslug].dmgMin + ", total: "+(BBLog.BBWF[wpnslug].dmgMin*BBLog.BBWF[wpnslug].ShotsPerShell).toFixed(1)+"] ";
									shotboxsize += 35;
									if (wpnslug != "shorty-12g"){																				
										if (BBLog.BBWF[wpnslug].dmgMaxFlechette) pelletsinfo += " [<h7 style='color:#2C63B3'>Dart:</h7> Max: " + BBLog.BBWF[wpnslug].dmgMaxFlechette + ", total: "+(BBLog.BBWF[wpnslug].dmgMaxFlechette*BBLog.BBWF[wpnslug].ShotsPerShell).toFixed(1)+" | Min: " + BBLog.BBWF[wpnslug].dmgMinFlechette + ", total: "+(BBLog.BBWF[wpnslug].dmgMinFlechette*BBLog.BBWF[wpnslug].ShotsPerShell).toFixed(1)+"]";
										if (BBLog.BBWF[wpnslug].dmgMaxSlug) pelletsinfo += " [<h7 style='color:#92DABA'>Slug:</h7> Max: " + BBLog.BBWF[wpnslug].dmgMaxSlug + " | Min: " + BBLog.BBWF[wpnslug].dmgMinSlug + "]";
										if (BBLog.BBWF[wpnslug].dmgMaxFrag) pelletsinfo += " [<h7 style='color:#9AADCB'>Frag:</h7> Max: " + (BBLog.BBWF[wpnslug].dmgMaxFrag+25) + " | Min: " + (BBLog.BBWF[wpnslug].dmgMinFrag+25) + "]";										
									}	
								}	
						   }											   
							var bbexweapon = '<div><center><input id="bblog-weapon-stats-btn" type="button" class="btn btn-tiny" value="'+BBLog.t("bf3.weapons.info")+'"/></center></div><br>'	
							me5.first().prepend($(bbexweapon).on("click", function () {								
							var drawchart = []; 
							if (BBLogbf4Weapons["shotguns"][wpnslug] && (wpnslug != "shorty-12g")) {
								drawchart = BBLog.getchartg(BBLog.BBWF[wpnslug], "loadoutshotgun", "#ffffff", 24, 18);																
							} else { 
								if (wpnslug == "shorty-12g") BBLog.BBWF[wpnslug].slug = wpnslug;
								drawchart = BBLog.getchartg(BBLog.BBWF[wpnslug], "loadoutnormal", "#ffffff", 24, 18); 
							}
							var hsmultiple = BBLog.BBWF[wpnslug].hsmultiple;
							var bodyshot = BBLog.BBWF[wpnslug].bodyshot;
							var bodyshotdefensive = BBLog.BBWF[wpnslug].bodyshotdefensive;
							var stolegsshot = BBLog.BBWF[wpnslug].stolegsshot;
							var wmaxdmg = BBLog.BBWF[wpnslug].dmgMax;
							var wmindmg = BBLog.BBWF[wpnslug].dmgMin;
							var rof = BBLog.BBWF[wpnslug].rateOfFire;
							var bulletrofinfo = 2;
							var uprofto = 900;
							var showrpm = 0;
							if (rof >= 570 && rof < 590) { bulletrofinfo = 7; uprofto = 590; showrpm = 1;}
							if (rof >= 600 && rof < 750) { bulletrofinfo = 2; uprofto = 900; showrpm = 1;}
							if (rof >= 750 && rof < 780) { bulletrofinfo = 3; uprofto = 900; showrpm = 1;}
							if (rof > 770 && rof < 800) { bulletrofinfo = 4; uprofto = 900; showrpm = 1;}
							if (rof >= 800 && rof < 900) { bulletrofinfo = 5; uprofto = 900; showrpm = 1;}
							if (rof >= 950) { bulletrofinfo = 2; uprofto = 1800; showrpm = 1;}
							var showburst = "";							
							if (BBLog.BBWF[wpnslug].burst) showburst = ' | Burst: '+BBLog.BBWF[wpnslug].burst;
							var showrpminfo = '<span style="cursor: pointer;" data-tooltip="Rounds per minute."><h7>RPM:</h7></span> ' + rof + showburst + ' ' + pelletsinfo;
							if (showrpm == 1) { 
								showrpminfo += `(* <span style="color:#ADFF2E;">`+bulletrofinfo+`</span> bullets are fired at <span style="color:#C90101; cursor: pointer;" data-tooltip="<h6>BOF(Bullet-out frame)</h6>This weapon can shoot the first `+bulletrofinfo+` bullets at `+uprofto+`RPM.">`+uprofto+`RPM</span>).`; 
							}

							var recoilinfo = `																			
							<table style="background-color: #090909;border: 1px solid black;">
							<tr>
							<td style="background-color: #070707; padding: 1px;text-align:center;"><div style="background-color: #25292f;">Mag & Reload</div></td>
							<td style="background-color: #070707; padding: 1px;text-align:center;"><div style="background-color: #25292f;">Recoil</div></td>
							<td style="background-color: #070707; padding: 1px;text-align:center;"><div style="background-color: #25292f;">ADS</div></td>
							<td style="background-color: #070707; padding: 1px;text-align:center;"><div style="background-color: #25292f;">HIP Spread</div></td>
							<td style="background-color: #25292f; padding: 0px;"><div style="background-color: #25292f;"> </div></td>
							<td style="background-color: #070707; padding: 1px;text-align:center;"><div style="background-color: #25292f;">Ballistic</div></td>
							</tr><tr>
							<td style="padding: 1px;background-color: #1c1c1c;">
							<table style="background-color: #1c1c1c;">
							<tr><td><span style="cursor: pointer;" data-tooltip="`+titles.reloadleft+`">&nbsp;`+BBLog.BBWF[wpnslug].reloadleft+`</span></td><td></td><td><span style="cursor: pointer;" data-tooltip="`+titles.reloadempty+`">`+BBLog.BBWF[wpnslug].reloadempty+`&nbsp;</span></td></tr>
							<tr><td>&nbsp;Mag Size:&nbsp;</td><td>`+BBLog.BBWF[wpnslug].magsize+`</td><td>&nbsp;&nbsp;</td></tr>
							</table>
							</td>
							<td style="padding: 1px;background-color: #1c1c1c;border: 1px solid black;">
							<div style="background-color: #1c1c1c;">
							<table>
								<tr><td style="width:32px;padding-bottom: 0px;">&nbsp;&nbsp;<span style="color:#adff2f;cursor: pointer;" data-tooltip="`+titles.recoildecrease+`">&#8595;<span style="font-size:9.5px; color:#adff2f;cursor: pointer;">`+BBLog.BBWF[wpnslug].recoildecrease+`</span></span></td><td style="width:32px;padding-bottom: 0px"><center><span style="cursor: pointer;" data-tooltip="`+titles.recoilup+`">`+BBLog.BBWF[wpnslug].recoilup+`</span></center></td><td style="width:32px;padding-bottom: 0px"><span style="color:#ff9000;">&nbsp;&nbsp;&#8593;</span><span style="font-size:8.5px; color:#ff9000; cursor: pointer;" data-tooltip="`+titles.recoilmultiple+`">1st<br>&nbsp;&nbsp;`+BBLog.BBWF[wpnslug].recoilmultiple+`x</span></td></tr>
								<tr><td style="width:32px;padding-bottom: 0px; text-align: right;">&nbsp;<span style="cursor: pointer;" data-tooltip="`+titles.recoilleft+`">`+BBLog.BBWF[wpnslug].recoilleft+`&nbsp;</span>&nbsp;</td><td style="width:32px;padding-bottom: 0px"><div style="margin-top: -12px;">__|__</div></td><td style="width:32px;padding-bottom: 0px">&nbsp;<span style="cursor: pointer;" data-tooltip="`+titles.recoilright+`">`+BBLog.BBWF[wpnslug].recoilright+`</span>&nbsp;</td></tr>
							</table>							
							</div>
							</td>
							<td style="padding: 1px; background-color: #1c1c1c;border: 1px solid black;">
							<div style="background-color: #1c1c1c;">
								<table><tr>
								<td>
									<div class="standbblog"></div>
									<div class="movingbblog"></div>
								</td><td>
								<div><span style="cursor: pointer;" data-tooltip="`+titles.ads_spread+`"><b>`+BBLog.BBWF[wpnslug].ads_spread+`</b>&nbsp;</div>
								<div style="margin-top: 4px;"><span style="cursor: pointer;" data-tooltip="`+titles.ads_spreadmoving+`"><b>`+BBLog.BBWF[wpnslug].ads_spreadmoving+`</b>&nbsp;</div>
								</td>
								</tr></table>		
							</div>
							</td>
							<td style="padding: 1px;background-color: #1c1c1c;border: 1px solid black;">															
								 <table><tr>
								  <td>
								  <center>
								  <div style="font-size:8.5px;line-height: 1.0;margin-left: 4px;cursor: pointer;" onmouseover="this.style.background='#294f87';" onmouseout="this.style.background='#1c1c1c';">
								  <span data-tooltip="`+titles.hipspreadnotmoving+`">
									`+BBLog.BBWF[wpnslug].hipstand+`<br> 
									`+BBLog.BBWF[wpnslug].hipscrouch+`<br>
									`+BBLog.BBWF[wpnslug].hipsprone+`
								   </span>								   								   								 
								  </div>
								<div style="font-size:8.5px;line-height: 1.0;margin-top: 3px;margin-left: 4px;cursor: pointer;" onmouseover="this.style.background='#294f87';" onmouseout="this.style.background='#1c1c1c';">
								  <span data-tooltip="`+titles.hipspreadmoving+`">
									`+BBLog.BBWF[wpnslug].hipmstand+`<br> 
									`+BBLog.BBWF[wpnslug].hipmcrouch+`<br>
									`+BBLog.BBWF[wpnslug].hipmprone+` 
								  </span>	
								</div>
								</center>
								</td><td>
								 <div style="font-size:8.5px;line-height: 1.0;margin-left: 4px;">
								   &nbsp;&nbsp; Stand &nbsp;<br>
								   &nbsp;&nbsp; Crouch &nbsp;<br>
								   &nbsp;&nbsp; Prone
								   </div>
								  <div style="font-size:8.5px;line-height: 1.0;margin-left: 4px;margin-top: 3px"> 
								   &nbsp;&nbsp; Stand &nbsp;<br>
								   &nbsp;&nbsp; Crouch &nbsp;<br>
								   &nbsp;&nbsp; Prone
								   </div>
								</td>
								</tr></table>
							</td>
							<td style="padding: 1px;background-color: #1c1c1c;border: 1px solid black;">
							 
							 
							 <span style="color: #ED810B; cursor: pointer;" data-tooltip="`+titles.spreadincreasepershot+`">&nbsp;&#8593;&nbsp;`+BBLog.BBWF[wpnslug].spreadincreasepershot+`</span>
							 <br>
							 <span style="color: #80C90F; cursor: pointer;" data-tooltip="`+titles.spreaddecreasepersec+`">&nbsp;&#8595;&nbsp;`+BBLog.BBWF[wpnslug].spreaddecreasepersec+`</span>  
							</td>
							<td style="padding: 1px;background-color: #1c1c1c;border: 1px solid black;">
							&nbsp;Drop: <span style="cursor: pointer;" data-tooltip="`+titles.Bulletdrop+`">`+BBLog.BBWF[wpnslug].Bulletdrop+`m/s² &nbsp;</span>
							<br>&nbsp;Distance: <span style="cursor: pointer;" data-tooltip="`+titles.distance+`">`+BBLog.BBWF[wpnslug].distance+`m &nbsp;</span>
							<br>&nbsp;Velocity: <span style="cursor: pointer;" data-tooltip="`+titles.InitialSpeed+`">`+BBLog.BBWF[wpnslug].InitialSpeed+`m/s &nbsp;</span>
							</td>
							</tr>
							</table>
							`;
							
							function cbtk(a,b) { return Math.ceil(a / b);}							
							var ttokhs = BBLog.newcaclttk(100, (BBLog.BBWF[wpnslug].dmgMax*hsmultiple)*BBLog.BBWF[wpnslug].ShotsPerShell, BBLog.BBWF[wpnslug].dmgFallStart, BBLog.BBWF[wpnslug]);
							var ttokhshc = BBLog.newcaclttk(60, (BBLog.BBWF[wpnslug].dmgMax*hsmultiple)*BBLog.BBWF[wpnslug].ShotsPerShell, BBLog.BBWF[wpnslug].dmgFallStart, BBLog.BBWF[wpnslug]);
							var btokhs = cbtk(100, (BBLog.BBWF[wpnslug].dmgMax*BBLog.BBWF[wpnslug].ShotsPerShell)*hsmultiple);
							var btokhshc = cbtk(60, (BBLog.BBWF[wpnslug].dmgMax*BBLog.BBWF[wpnslug].ShotsPerShell)*hsmultiple);						
							var ttokb = BBLog.newcaclttk(100, (BBLog.BBWF[wpnslug].dmgMax*bodyshot)*BBLog.BBWF[wpnslug].ShotsPerShell, BBLog.BBWF[wpnslug].dmgFallStart, BBLog.BBWF[wpnslug]);
							var ttokbhc = BBLog.newcaclttk(60, (BBLog.BBWF[wpnslug].dmgMax*bodyshot)*BBLog.BBWF[wpnslug].ShotsPerShell, BBLog.BBWF[wpnslug].dmgFallStart, BBLog.BBWF[wpnslug]);
							var btokb = cbtk(100, (BBLog.BBWF[wpnslug].dmgMax*BBLog.BBWF[wpnslug].ShotsPerShell)*bodyshot);
							var btokbhc = cbtk(60, (BBLog.BBWF[wpnslug].dmgMax*BBLog.BBWF[wpnslug].ShotsPerShell)*bodyshot);							
							var ttokd = BBLog.newcaclttk(100, (BBLog.BBWF[wpnslug].dmgMax*bodyshotdefensive)*BBLog.BBWF[wpnslug].ShotsPerShell, BBLog.BBWF[wpnslug].dmgFallStart, BBLog.BBWF[wpnslug]);
							var ttokdhc = BBLog.newcaclttk(60, (BBLog.BBWF[wpnslug].dmgMax*bodyshotdefensive)*BBLog.BBWF[wpnslug].ShotsPerShell, BBLog.BBWF[wpnslug].dmgFallStart, BBLog.BBWF[wpnslug]);
							var btokd = cbtk(100, (BBLog.BBWF[wpnslug].dmgMax*BBLog.BBWF[wpnslug].ShotsPerShell)*bodyshotdefensive);
							var btokdhc = cbtk(60, (BBLog.BBWF[wpnslug].dmgMax*BBLog.BBWF[wpnslug].ShotsPerShell)*bodyshotdefensive);							
							var ttokl = ttokd;
							var ttoklhc = ttokdhc;
							var btokl = btokd;
							var btoklhc = btokdhc;
							if (BBLogbf4Weapons["shotguns"][wpnslug]) {
							 ttokl = BBLog.newcaclttk(100, (BBLog.BBWF[wpnslug].dmgMax*bodyshotdefensive)*BBLog.BBWF[wpnslug].ShotsPerShell, BBLog.BBWF[wpnslug].dmgFallStart, BBLog.BBWF[wpnslug]);
							 ttoklhc = BBLog.newcaclttk(60, (BBLog.BBWF[wpnslug].dmgMax*bodyshotdefensive)*BBLog.BBWF[wpnslug].ShotsPerShell, BBLog.BBWF[wpnslug].dmgFallStart, BBLog.BBWF[wpnslug]);
							 btokl = cbtk(100, (BBLog.BBWF[wpnslug].dmgMax*BBLog.BBWF[wpnslug].ShotsPerShell)*bodyshotdefensive);
							 btoklhc = cbtk(60, (BBLog.BBWF[wpnslug].dmgMax*BBLog.BBWF[wpnslug].ShotsPerShell)*bodyshotdefensive);
							} 
							
							var dmginfo = `
							<div style="background-color:#1C1C1C; height: `+boxsizel+`px;">
								<div style="overflow: hidden; margin-left: 10px;">
								   <div style="float: left;width: 165px; margin-left: 10px;"> 
									<h6>Hitbox</h6>
									<div style="background: #037D1B;width: 14px;height: 10px;border-radius: 50%;margin-left: 1px;float: left;margin-top: 3px;"> </div><div style="margin-left: 9px; margin-top: 0px;">
									<span style="color:#037D1B;"><b>Headshot</b></span> (<span style="cursor: pointer;">`+hsmultiple+`x</span>)
									<br>Max. DMG: `+(hsmultiple*wmaxdmg).toFixed(2)+`
									<br>Min. DMG: `+(hsmultiple*wmindmg).toFixed(2)+`
									</div>  
									<div style="background: #343BBA;width: 14px;height: 10px;border-radius: 50%;margin-left: 1px;float: left;margin-top: 3px;"> </div><div style="margin-left: 9px;margin-top: 0px;">
									<span style="color:#343BBA;"><b>Chest and arms</b></span> (<span style="cursor: pointer;">`+bodyshot+`x</span>)
									<br>Max. DMG: `+(bodyshot*wmaxdmg).toFixed(2)+`
									<br>Min. DMG: `+(bodyshot*wmindmg).toFixed(2)+`
									</div>
									<div style="background: #2c63b3;width: 14px;height: 10px;border-radius: 50%;margin-left: 1px;float: left;margin-top: 3px;"> </div><div style="margin-left: 9px;margin-top: 0px;">
									<span style="color:#2c63b3;cursor: pointer;" data-tooltip="Field upgrade."><b>Defensive FU</b></span> (<span style="cursor: pointer;">`+bodyshotdefensive+`x</span>)
									<br>Max. DMG: `+(bodyshotdefensive*wmaxdmg).toFixed(2)+`
									<br>Min. DMG: `+(bodyshotdefensive*wmindmg).toFixed(2)+`
									</div>
									<div style="background: #FCD63C;width: 14px;height: 10px;border-radius: 50%;margin-left: 1px;float: left;margin-top: 3px;"> </div><div style="margin-left: 9px;margin-top: 0px;">
									<span style="color:#FCD63C;"><b>Stomatch & legs</b></span> (<span style="cursor: pointer;">`+stolegsshot+`x</span>)
									<br>Max. DMG: `+(stolegsshot*wmaxdmg).toFixed(2)+`
									<br>Min. DMG: `+(stolegsshot*wmindmg).toFixed(2)+`
									</div>																										
									<div style="background: #C90101;width: 14px;height: 10px;border-radius: 50%;margin-left: 1px;float: left;margin-top: 3px;"> </div><div style="margin-left: 9px;margin-top: 0px;">
									<span style="color:#C90101;"><b>No damage</b></span>
									</div>
									
								  </div>
								   
									<div class="bblog-weapon-container" style="float: left;">
										<div class="torso" style="float: left;margin-left: -30px;"></div>
									</div>
									<div style="overflow: hidden; float: left ;margin-left: 15px;">
										<h6><span style="cursor: pointer;" data-tooltip="<h6>`+btkorstka[1]+ ` - TTK: Time To Kill</h6>">`+btkorstka[0]+` - TTK: Max Damage</span></h6>
										<span style="color:#037D1B;"><b>Headshot</b></span> (<span style="cursor: pointer;">`+hsmultiple+`x</span>)
										<br>`+btkorstka[0]+`: `+btokhs+` | HC: `+btokhshc+`
										<br><span style="cursor: pointer;" data-tooltip="<h6>Symthic: `+ttokhs[1]+`ms | HC: `+ttokhshc[1]+`ms</h6>">TTK: `+ttokhs[0]+`ms | HC: `+ttokhshc[0]+`ms</span>
										<br><span style="color:#343BBA;"><b>Chest and arms</b></span> (<span style="cursor: pointer;">`+bodyshot+`x</span>)
										<br> `+btkorstka[0]+`: `+btokb+` | HC: `+btokbhc+`
										<br><span style="cursor: pointer;" data-tooltip="<h6>Symthic: `+ttokb[1]+`ms | HC: `+ttokbhc[1]+`ms</h6>">TTK: `+ttokb[0]+`ms | HC: `+ttokbhc[0]+`ms</span>
										<BR><span style="color:#2c63b3;cursor: pointer;" data-tooltip="Field upgrade."><b>Defensive FU</b></span> (<span style="cursor: pointer;">`+bodyshotdefensive+`x</span>)
										<br> `+btkorstka[0]+`: `+btokd+` | HC: `+btokdhc+`
										<br><span style="cursor: pointer;" data-tooltip="<h6>Symthic: `+ttokd[1]+`ms | HC: `+ttokdhc[1]+`ms</h6>">TTK: `+ttokd[0]+`ms | HC: `+ttokdhc[0]+`ms</span>
										<br><span style="color:#FCD63C;"><b>Stomatch & legs</b></span> (<span style="cursor: pointer;">`+stolegsshot+`x</span>)
										<br> `+btkorstka[0]+`: `+btokl+` | HC: `+btoklhc+`
										<br><span style="cursor: pointer;" data-tooltip="<h6>Symthic: `+ttokl[1]+`ms | HC: `+ttoklhc[1]+`ms</h6>">TTK: `+ttokl[0]+`ms | HC: `+ttoklhc[0]+`ms</span>
									</div>
									<div style="overflow: hidden; float: left ;margin-left: 0px;">
										<br>
											<div style="margin-left: 10px;">
											`+recoilinfo+`
											</div>
											
											<div style="background-color:#1C1C1C; margin-top:9px;">										
												<div id="chart_div" style="width:483px; height:190px;"></div> 												
											</div>
									</div>
								</div>
								<div style="margin-top: -16px; margin-left: 20px;">
								`+showrpminfo+`
								</div> 								
							 `;
							var symdata = bofinfo+ "<center><h6>Symthic Data</h6></center>";
							if (wpnslug == "phantom") symdata = "<br>";
							var ggscript = ``;
							var htmlloadoutend = "</div>";
							var htmlloadout = " "+dmginfo+" "+ggscript+" "+symdata;						
							var htmlcredit = '<center><span style="color:#ADFF2E;">Screenshots from <a href="https://www.symthic.com" target="_blank">www.symthic.com</a> and <a href="https://sym.gg" target="_blank">sym.gg</a></center>';
							var htmlframe = '<center><iframe id="htmlsourceweapon" src="'+BBLog.chk_url+'?weapon='+wpnslug+'&bblog=1" width="100%" height="1920" scrolling="0" frameborder="none" style="border: none;overflow-y: hidden;"></iframe></center><div style="float:left">'+htmlcredit+'</div>';
							BBLog.popup('weapon-info', BBLog.t("bf3.weapons.info") + ": " + wpnslug.toUpperCase(), '<div style="margin-top: -10px;width:100%;">'+htmlloadout+htmlframe+htmlloadoutend+'</div>'+drawchart); 
								
							})); 	
							var me = mea.find(".box-content").first().find(".item-extended-stats").first();
							if (!BBLog.elementCheck(me, action)) {								
								var metra = me.find("tr").last(); 																					
								metra.find("td").first().text(BBLog.BBWF[wpnslug].magsize);
								metra = me.find("tr").eq(1);
								var mburst = "";
								if (BBLog.BBWF[wpnslug].burst) mburst = '<span style="font-size:9px;"><br>(Burst: '+BBLog.BBWF[wpnslug].burst+')</span>';
								metra.find("td").first().text(BBLog.BBWF[wpnslug].rateOfFire).append(mburst);								
								var newdmgt = me5.find("div[class=item-stats-right-col-1]").first();							
								var metrb = me.find("table").first();
								var spershell = 1;
								var lbtk = Math.ceil(100 / (BBLog.BBWF[wpnslug].dmgMax*spershell));									
								var lbtkhc = Math.ceil(60 / (BBLog.BBWF[wpnslug].dmgMax*spershell));
								var lttk = -1;
								var lttkhc = -1;
								var btkinfo = "";
								var ttkinfo = "";
								var	btkorstk = ["BTK", "BTK - Bullets To Kill"];
								if (BBLogbf4Weapons["shotguns"][wpnslug]) {
									btkorstk = ["STK", "STK - Shots To Kill"];
									spershell = +BBLog.BBWF[wpnslug].ShotsPerShell;									
									lbtk = Math.ceil(100 / (BBLog.BBWF[wpnslug].dmgMax*spershell));	
									var slbtk = Math.ceil(100 / (BBLog.BBWF[wpnslug].dmgMin*spershell));	
									lbtkhc = Math.ceil(60 / (BBLog.BBWF[wpnslug].dmgMax*spershell));																		
									lttk = BBLog.newcaclttk(100, (BBLog.BBWF[wpnslug].dmgMax*spershell), BBLog.BBWF[wpnslug].dmgFallStart, BBLog.BBWF[wpnslug]);
									lttkhc = BBLog.newcaclttk(60, (BBLog.BBWF[wpnslug].dmgMax*spershell), BBLog.BBWF[wpnslug].dmgFallStart, BBLog.BBWF[wpnslug]);								
									metra = me.find("tr").eq(0);
									var roftd = metra.find("th").first().html();																		
									metra.html("<th>"+roftd+"</th><th>Pellets</th>");
									metra = me.find("tr").eq(1);									
									metra.html("<td>"+BBLog.BBWF[wpnslug].rateOfFire+"</td><td>"+BBLog.BBWF[wpnslug].ShotsPerShell+"</td>");								
									var btkinfoa = `
									<h7>Max Damage</h7><br>
									Buckshot: `+BBLog.BBWF[wpnslug].dmgMax+` x `+spershell+`(Pellets), STK: `+lbtk+`, total damage: `+(BBLog.BBWF[wpnslug].dmgMax*spershell).toFixed(2)+`
									- Drop-off start: `+BBLog.BBWF[wpnslug].dmgFallStart+`m | Drop-off end: `+BBLog.BBWF[wpnslug].dmgFallEnd+`m &nbsp;&nbsp;
									`;
									var btkinfob = `
									<br><br><h7>Min Damage</h7><br>
									Buckshot: `+BBLog.BBWF[wpnslug].dmgMin+` x `+spershell+`(Pellets), STK: `+slbtk+`, total damage: `+(BBLog.BBWF[wpnslug].dmgMin*spershell).toFixed(2)+`
									`;
									var ttkinfoa = `<h7>Normal(Max Damage)</h7><br>
									Buckshot: `+lttk[0]+`ms									
									`;
									var ttkinfob = `<br><h7>Hardcore(Max Damage)</h7><br>
									Buckshot: `+lttkhc[0]+`ms
									`;
									btkinfo = btkinfoa + btkinfob;
									ttkinfo = ttkinfoa + ttkinfob;
									if (wpnslug != "shorty-12g") {		
									var ttkslug = BBLog.newcaclttk(100, (BBLog.BBWF[wpnslug].dmgMaxSlug), BBLog.BBWF[wpnslug].dmgFallStartSlug, BBLog.BBWF[wpnslug]);
									var ttkdart = BBLog.newcaclttk(100, (BBLog.BBWF[wpnslug].dmgMaxFlechette*spershell), BBLog.BBWF[wpnslug].dmgFallStart, BBLog.BBWF[wpnslug]);
									var ttkfrag = BBLog.newcaclttk(100, (BBLog.BBWF[wpnslug].dmgMaxFrag+25), BBLog.BBWF[wpnslug].dmgFallStartFrag, BBLog.BBWF[wpnslug]);
									var ttkslughc = BBLog.newcaclttk(60, (BBLog.BBWF[wpnslug].dmgMaxSlug), BBLog.BBWF[wpnslug].dmgFallStartSlug, BBLog.BBWF[wpnslug]);
									var ttkdarthc = BBLog.newcaclttk(60, (BBLog.BBWF[wpnslug].dmgMaxFlechette*spershell), BBLog.BBWF[wpnslug].dmgFallStart, BBLog.BBWF[wpnslug]);
									var ttkfraghc = BBLog.newcaclttk(60, (BBLog.BBWF[wpnslug].dmgMaxFrag+25), BBLog.BBWF[wpnslug].dmgFallStartFrag, BBLog.BBWF[wpnslug]);
									var stkdart = Math.ceil(100 / (BBLog.BBWF[wpnslug].dmgMaxFlechette*spershell));	
									var stkfrag = Math.ceil(100 / (BBLog.BBWF[wpnslug].dmgMaxFrag+25));	
									var stkslug = Math.ceil(100 / (BBLog.BBWF[wpnslug].dmgMaxSlug));
									var stkdartm = Math.ceil(100 / (BBLog.BBWF[wpnslug].dmgMinFlechette*spershell));	
									var stkfragm = Math.ceil(100 / (BBLog.BBWF[wpnslug].dmgMinFrag+25));	
									var stkslugm = Math.ceil(100 / (BBLog.BBWF[wpnslug].dmgMinSlug));
									btkinfo = btkinfoa +`									
									<br>Dart: `+BBLog.BBWF[wpnslug].dmgMaxFlechette+` x `+spershell+`(Pellets), STK: `+stkdart+`, total damage: `+(BBLog.BBWF[wpnslug].dmgMaxFlechette*spershell).toFixed(2)+`
									- Drop-off start: `+BBLog.BBWF[wpnslug].dmgFallStart+`m | Drop-off end: `+BBLog.BBWF[wpnslug].dmgFallEnd+`m &nbsp;&nbsp;
									<br>Frag: `+BBLog.BBWF[wpnslug].dmgMaxFrag+` + 25(Spash), STK: `+stkfrag+`, total damage: `+(BBLog.BBWF[wpnslug].dmgMaxFrag+25)+`
									- Drop-off start: `+BBLog.BBWF[wpnslug].dmgFallStartFrag+`m | Drop-off end: `+BBLog.BBWF[wpnslug].dmgFallEndFrag+`m &nbsp;&nbsp;
									<br>Slug: `+BBLog.BBWF[wpnslug].dmgMaxSlug+`, STK: `+stkslug+`
									- Drop-off start: `+BBLog.BBWF[wpnslug].dmgFallStartSlug+`m | Drop-off end: `+BBLog.BBWF[wpnslug].dmgFallEndSlug+`m &nbsp;&nbsp;
									`+btkinfob+`
									<br>Dart: `+BBLog.BBWF[wpnslug].dmgMinFlechette+` x `+spershell+`(Pellets), STK: `+stkdartm+`, total damage: `+(BBLog.BBWF[wpnslug].dmgMinFlechette*spershell).toFixed(2)+`
									<br>Frag: `+BBLog.BBWF[wpnslug].dmgMinFrag+` + 25(Spash), STK: `+stkfragm+`, total damage: `+(BBLog.BBWF[wpnslug].dmgMinFrag+25)+`
									<br>Slug: `+BBLog.BBWF[wpnslug].dmgMinSlug+`, STK: `+stkslugm+`
									`;									
									ttkinfo = ttkinfoa +`	
									<br>Dart: `+ttkdart[0]+`ms
									<br>Frag: `+ttkfrag[0]+`ms
									<br>Slug `+ttkslug[0]+`ms
									<br>`+ttkinfob+`
									<br>Dart: `+ttkdarthc[0]+`ms
									<br>Frag: `+ttkfraghc[0]+`ms
									<br>Slug `+ttkslughc[0]+`ms
									`;
									}									
								}
								var maxdmgfl = BBLog.BBWF[wpnslug].dmgMax*spershell;
								if (maxdmgfl > 100) maxdmgfl = 100;
								if (ckweapon) { 
									ckweapon.find(".item-stats-right-col-1").first().text(maxdmgfl);
									ckweapon.find(".progress-bar-inner").first().css("width", maxdmgfl + "%")
								}	
								if (lttk < 0) lttk = BBLog.newcaclttk(100, (BBLog.BBWF[wpnslug].dmgMax*spershell), BBLog.BBWF[wpnslug].dmgFallStart, BBLog.BBWF[wpnslug]);
								if (lttkhc < 0) lttkhc = BBLog.newcaclttk(60, (BBLog.BBWF[wpnslug].dmgMax*spershell), BBLog.BBWF[wpnslug].dmgFallStart, BBLog.BBWF[wpnslug]);								
								if (btkinfo == "") {
									btkinfo = `Damage over distance:
									<br>Max Damage under `+BBLog.BBWF[wpnslug].dmgFallStart+`m: `+BBLog.BBWF[wpnslug].dmgMax+`
									<br>Min Damage after `+BBLog.BBWF[wpnslug].dmgFallEnd+`m: `+BBLog.BBWF[wpnslug].dmgMin+`
									`;
								}								
								if (ttkinfo == "") { 
									ttkinfo = `<h7>[BOF(Bullet-out frame) data:</h7><br>
									Normal: `+lttk[0]+`ms | HC: `+lttkhc[0]+`ms
									<br><br><h7>Symthic:</h7><br> Normal: `+lttk[1]+`ms | HC: `+lttkhc[1]+`ms
									`;
								}																													
								var checkbara = mea.find( '.progress-bar-inner').first(); 								
								var fixdmg = BBLog.BBWF[wpnslug].dmgMax * spershell;
								if (fixdmg > 100) fixdmg = 100;
								newdmgt.text(fixdmg);
								checkbara.css("width", fixdmg + "%");																
								var codetoapp = `<div style="margin-top: -8px;">
					<table><tr><td>
								
						<table><tr><td>
							<table style="border: 1px solid black;">
								<tr>
									<td style="padding: 1px;background-color: #0d0c0f">
										<div style="background-color:#0e0f12; height:20px; display:flex; padding:1px; justify-content:center;"><div style="margin-top: 4px;">Recoil</div></div>
									</td>
								</tr>
								<tr>
								<td style="padding: 1px;">
									<table>
										<tr><td style="width:32px;padding-bottom: 0px;"><span style="color:#adff2f;cursor: pointer;" data-tooltip="`+titles.recoildecrease+`">&#8595;<span style="font-size:9.5px; color:#adff2f;cursor: pointer;">`+BBLog.BBWF[wpnslug].recoildecrease+`</span></span></td><td style="width:32px;padding-bottom: 0px"><center><span style="cursor: pointer;" data-tooltip="`+titles.recoilup+`">`+BBLog.BBWF[wpnslug].recoilup+`</span></center></td><td style="width:32px;padding-bottom: 0px"><span style="color:#ff9000;">&#8593;</span><span style="font-size:8.5px; color:#ff9000; cursor: pointer;" data-tooltip="`+titles.recoilmultiple+`">1st<br>`+BBLog.BBWF[wpnslug].recoilmultiple+`x</span></td></tr>
										<tr><td style="width:32px;padding-bottom: 0px;">&nbsp;<span style="cursor: pointer;" data-tooltip="`+titles.recoilleft+`">`+BBLog.BBWF[wpnslug].recoilleft+`</span>&nbsp;</td><td style="width:32px;padding-bottom: 0px"><div style="margin-top: -12px;">__|__</div></td><td style="width:32px;padding-bottom: 0px">&nbsp;<span style="cursor: pointer;" data-tooltip="`+titles.recoilright+`">`+BBLog.BBWF[wpnslug].recoilright+`</span>&nbsp;</td></tr>
									</table>							
								</td>
								</tr>
							</table>
						</td>
							
						<td style="text-align:left;">
								<div style="margin-left: 4px;font-size: 11.4px; line-height: 1.3;">
								<span style="cursor: pointer;"  data-tooltip="<h6>`+btkorstk[1]+` | HC(hardcore)</h6>`+btkinfo+`">`+btkorstk[0]+`: `+lbtk+` | HC: `+lbtkhc+`</span><br>
								<span style="cursor: pointer;" data-tooltip="<h6>TTK - Time To Kill | HC(hardcore)</h6>`+ttkinfo+`">TTK: `+lttk[0]+`ms</span>
								<br>
								<i class="firemode-icon auto disabled" data-tooltip="`+titles.reloadempty+`" style="width: 15px;cursor: pointer;"></i> Reload: `+BBLog.BBWF[wpnslug].reloadempty+`<br>
								<i class="firemode-icon auto" data-tooltip="`+titles.reloadleft+`" style="width: 19px;cursor: pointer;"></i> Reload: `+BBLog.BBWF[wpnslug].reloadleft+`<BR>																
								<span style="cursor: pointer;" data-tooltip="`+titles.InitialSpeed+`">Velocity</span>: `+BBLog.BBWF[wpnslug].InitialSpeed+`m/s <br>
								ADS: <span style="font-size:10.4px;"><span style="cursor: pointer;" data-tooltip="`+titles.ads_spread+`">S: `+BBLog.BBWF[wpnslug].ads_spread+`</span>, <span style="cursor: pointer;" data-tooltip="`+titles.ads_spreadmoving+`">M: `+BBLog.BBWF[wpnslug].ads_spreadmoving+`</span></span>
								</div>																
						  </td></tr>
						</table>
								
					</td></tr>
					<tr><td style="text-align:left;">
					<div style="margin-top: -6px; font-size: 11.4px; line-height: 1.3;">
						
						<span style="cursor: pointer;" data-tooltip="`+titles.hipspreadnotmoving+`">HIP Standing: </span><span style="font-size:10px;">S: `+BBLog.BBWF[wpnslug].hipstand+`, C: `+BBLog.BBWF[wpnslug].hipscrouch+`, P: `+BBLog.BBWF[wpnslug].hipsprone+`</span>
						<br><span style="cursor: pointer;" data-tooltip="`+titles.hipspreadmoving+`">HIP Moving: </span><span style="font-size:10px;">S: `+BBLog.BBWF[wpnslug].hipmstand+`, C: `+BBLog.BBWF[wpnslug].hipmcrouch+`, P: `+BBLog.BBWF[wpnslug].hipmprone+`</span>
					</div>	
					</td></tr><table>
								
								</div>`;
								me.append(codetoapp); 
							}	
						}
					}
				}		
				
                if (action == "bf4.weapons.info" && BBLog.cache("mode") != "bf4" || !window.location.href.match(/\/weapons\//)) return this.callback();
                if (action == "bfh.weapons.info" && BBLog.cache("mode") != "bfh" || !window.location.href.match(/\/weapons\//)) return this.callback();
								
                var e = $("#weapon-details");
                var e4 = $("#bblog-weapon-stats-btn");				
				if (e.length && !e4.length && BBLog.cache("mode") == "bf4") {
					var getwpinfo = $("#weapon-list > table:first tr.active");
                    var weapon = getwpinfo.attr("data-slug");
					var weaponinfo = Surface.Renderer.state.surface["weapon-details"]["detailedWeapon"]; // fix undefined weapon details with sorted weapons
					var weaponname = getwpinfo.find(".item-name").first().text();
					var shotboxsize = 398; // 388
					var stuffbox = 3;
					if (!weapon) { weapon = weaponinfo["info"].slug; weaponname = weapon; }
					// weapon data
						var plyproj = ["BTK", "bullets", "BTK - Bullets To Kill"];						
						var mnodata = ["m320-3gl", "m320-smk", "m320-dart", "ballistic-shield", "mbt-law", "bj-2", "m136-cs", "m320-he", "sa-18-igla", "m320-lvg", "fgm-148-javelin", "fgm-172-sraw", "hvm-ii", "fim-92-stinger", "defibrillator", "repair-tool", "rpg-7v2", "mk153-smaw", "xm25-airburst", "bayonet", "machete", "acb-90", "shank", "c100", "precision", "bowie", "dive", "improvised", "seal", "carbon-fiber", "tactical", "boot", "tanto", "trench", "survival", "weaver", "neck", "scout", "m67-frag", "m34-incendiary", "rgo-impact", "v40-mini", "m84-flashbang", "m18-smoke", "hand-flare", "xm25-dart", "m26-slug", "c4-explosive", "m18-claymore", "m32-mgl", "m15-at-mine", "m2-slam", "ucav", "xm25-smoke", "m224-mortar", "m18-smoke", "m320-fb", "m26-frag", "m26-mass", "aa-mine", "m26-dart"]; 						
						if (mnodata.indexOf(weapon) < 0) {														
							BBLog.BBWF[weapon].category = weaponinfo["info"]["category"];
							BBLog.BBWF[weapon].kills = weaponinfo.kills; 
							BBLog.BBWF[weapon].headshots = weaponinfo.headshots;
							BBLog.BBWF[weapon].accuracy = weaponinfo.accuracy;
							BBLog.BBWF[weapon].shotsHit = weaponinfo.shotsHit;
							BBLog.BBWF[weapon].shotsFired = weaponinfo.shotsFired;
							BBLog.BBWF[weapon].timeEquipped = weaponinfo.timeEquipped;
							var wdata = BBLog.BBWF[weapon];							
							var hsmultiple = wdata.hsmultiple;
							var bodyshot = wdata.bodyshot;
							var bodyshotdefensive = wdata.bodyshotdefensive;
							var stolegsshot = wdata.stolegsshot;
							var flechette = [];
							var wpnkey = "";										
							var pelletsinfo = "";
							var shotmultiplestats = 0;							
							var shotguninfo = [];
							var charsize = [484, 192];
							if (wdata.section == "shotguns") {
								flechette = [parseFloat(1.00), parseFloat(1.00), parseFloat(1.00), parseFloat(0.93)];
								shotguninfo = ['Flechette: '+flechette[0]+'x', 'Flechette: '+flechette[1]+'x', 'Flechette: '+flechette[2]+'x', 'Flechette: '+flechette[3]+'x'];								
								if (weapon == "usas-12-flir"|| weapon == "usas-12") { wdata.dmgMax += wdata.dmgSplash; wdata.dmgMin += wdata.dmgSplash; }								
								if (weapon != "usas-12-flir" && weapon != "usas-12") {
									plyproj = ["STK", "shots", "STK: Shots To Kill"];
									pelletsinfo = "| <h7>Pellets:</h7> " + wdata.ShotsPerShell;									
									pelletsinfo += "<br><h7> Damages:</h7> [<h7 style='color:#BFC9AF'>Buckshot:</h7> Max: " + wdata.dmgMax + " | Min: " + wdata.dmgMin + "]";
									shotboxsize += 17;
									stuffbox = 17;
									charsize = [484, 199];
									if (weapon != "shorty-12g"){
										charsize = [484, 184];
										shotmultiplestats = 1;										
										if (wdata.dmgMaxFlechette) pelletsinfo += "<br> [<h7 style='color:#2C63B3'>Dart:</h7> Max: " + wdata.dmgMaxFlechette + " | Min: " + wdata.dmgMinFlechette + "]";
										if (wdata.dmgMaxSlug) pelletsinfo += " [<h7 style='color:#92DABA'>Slug:</h7> Max: " + wdata.dmgMaxSlug + " | Min: " + wdata.dmgMinSlug + "]";
										if (wdata.dmgMaxFrag) pelletsinfo += " [<h7 style='color:#9AADCB'>Frag:</h7> Max: " + (wdata.dmgMaxFrag+25) + " | Min: " + (wdata.dmgMinFrag+25) + "]";																														
									}	
								}								
							}	
					// end weapon data        			
					 
                       e.find(".box").first().prepend($('<input id="bblog-weapon-stats-btn" type="button" class="btn btn-tiny"/>').attr("value", BBLog.t("bf3.weapons.info")).on("click", function () {
                          if (weapon && BBLog.storage("init.data") && BBLog.storage("init.data")["symthic.frame"]) {
							var weaponori = weaponname.replace(" ", "");
							var plykills = wdata.kills; 
							var plyhs = wdata.headshots;
							var plyacc = parseFloat((wdata.accuracy * 100).toFixed(2));
							var plyhits = wdata.shotsHit;
							var plyfire = wdata.shotsFired;
							var plymiss = wdata.shotsFired - wdata.shotsHit;
							if (plymiss < 0) plymiss = 0;
							var plycate = wdata.category;
							var plytime = wdata.timeEquipped;														
							var htmldivdist = "";													
							var wmaxdmg = parseFloat(wdata.dmgMax*wdata.ShotsPerShell);
							var wmindmg = parseFloat(wdata.dmgMin*wdata.ShotsPerShell);														
							var damage = wdata.dmgMax;
                            var rof = wdata.rateOfFire;
							var bulletrofinfo = 2;
							var uprofto = 900;
							var showrpm = 0;
							if (rof >= 570 && rof < 590) { bulletrofinfo = 7; uprofto = 590; showrpm = 1;}
							if (rof >= 600 && rof < 750) { bulletrofinfo = 2; uprofto = 900; showrpm = 1;}						
							if (rof >= 750 && rof < 780) { bulletrofinfo = 3; uprofto = 900; showrpm = 1;}
							if (rof > 770 && rof < 800) { bulletrofinfo = 4; uprofto = 900; showrpm = 1;}
							if (rof >= 800 && rof < 900) { bulletrofinfo = 5; uprofto = 900; showrpm = 1;}
							if (rof >= 950) { bulletrofinfo = 2; uprofto = 1800; showrpm = 1;}
                            if (isNaN(wdata.rateOfFire)) rof = 6 * 60;
                            var max, curr, playerDamage, btkn, btkhc, btknms, btkhcms;
							function calcbtk(pdmg, wdmg) {
								return Math.ceil(pdmg / (wdmg*wdata.ShotsPerShell));
							}                      
							var distancetk = wdata.dmgFallStart;
							var pbtkhc = +calcbtk(60, damage).toFixed(0);							
							var pbtkhcms = BBLog.newcaclttk(60, damage*wdata.ShotsPerShell, distancetk, wdata);
							var pbtkn = +calcbtk(100, damage).toFixed(0);
							var pbtknms = BBLog.newcaclttk(100, damage*wdata.ShotsPerShell, distancetk, wdata);
							var pbtknhs = calcbtk(100, (damage*hsmultiple)).toFixed(0);
							var pbtknmshs = BBLog.newcaclttk(100, ((damage*wdata.ShotsPerShell)*hsmultiple), distancetk, wdata);
							var plykpm = 0;
							var plykph = 0;
							if (plytime > 0 && plykills > 0) plykpm = parseFloat((plykills/(plytime/60)).toFixed(2));
							if (plyhits > 0 && plykills > 0) plykph =  parseFloat(((plykills*100)/plyhits).toFixed(2));
							var plykphhc = parseFloat(((plykills*60)/plyhits).toFixed(2)) || 0;	
							var plyftoh = 0;
							var plyhtok = 0;
							if (plyhits > 0 && plykills > 0) {
								plyftoh = parseFloat((plyfire/plyhits).toFixed(2));
								plyhtok = parseFloat((plyhits/plykills).toFixed(2));
						    }
							var playeravettk = BBLog.newcaclttk(100, plykph, distancetk, wdata); 
							if (plykills < 1) { playeravettk[0] = 0; playeravettk[1] = 0;}
							var htmldivdistb = BBLog.getalldistance("default", wdata);							
							var hsrkr = 0;
							var days = Math.floor(plytime / 86400);
							var hours = Math.floor((plytime % 86400) / 3600);
							var minutes = Math.floor(((plytime % 86400) % 3600) / 60);
							var seconds = Math.floor(((plytime % 86400) % 3600) % 60);
							var wepotime = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
							if (plyhs > 0) {
								hsrkr = parseFloat(((100 / plykills) * plyhs).toFixed(2));
							}
							var hsbase = 23;							
							var kpmbase = parseFloat(3.4);
							var accbase = 21;
							var kphbase = parseFloat((wdata.dmgMax*wdata.ShotsPerShell).toFixed(2));
							var kphhcbase = parseFloat(((wdata.dmgMax*wdata.ShotsPerShell)*60)/100).toFixed(2);														
							var percalc = Math.floor((wdata.dmgMin/wdata.dmgMax)*100);
							var playermindamage = parseFloat((plykph*percalc)/100).toFixed(2);
							var playermaxdamage = parseFloat(plykph).toFixed(2);						
							var cheatpoints = 0;
							var cheatlowhs = 9;
							var counthmcheat = 0;
							var cheatkills = 100;
							var skipspread = 0;
							var sidearm = 0;
							if (weapon == "m82a3-mid") weapon = weapon.replace("-mid", "");
							if (weapon == "amr-2-mid")  weapon = weapon.replace("-mid", "-cqb");
							if (weapon == "amr-2")  weapon = weapon.replace("-2", "-2-cqb");
							if (weapon == "usas-12-flir")  weapon = weapon.replace("-flir", "");
							if (weapon == "m82a3-cqb")  weapon = weapon.replace("-cqb", "");
							if (plycate.toUpperCase().indexOf("ASSAULTRIFLE") !== -1) { hsbase = 24; kpmbase = parseFloat(3.4); accbase = 22; }
							if (plycate.toUpperCase().indexOf("SNIPER") !== -1 || weapon == "m82a3" || weapon == "amr-2-cqb" || weapon == "rorsch-mk-1") { hsbase = 55; accbase = 40; cheatlowhs = 13; kpmbase = parseFloat(2.1); skipspread = 1; }
							if (plycate.toUpperCase().indexOf("DMR") !== -1) {hsbase = 40; accbase = 30; cheatlowhs = 10; kpmbase = parseFloat(2.3); skipspread = 1; }
							if (plycate.toUpperCase().indexOf("LMG") !== -1 || weapon == "id-p-xp6-iname-m60ult") {hsbase = 17; accbase = 15; cheatlowhs = 8; kpmbase = parseFloat(3.9); }
							if (plycate.toUpperCase().indexOf("SIDEARM") !== -1) {hsbase = 30; accbase = 25; cheatlowhs = 9; kpmbase = parseFloat(6.2); sidearm = 1; }
							if (plycate.toUpperCase().indexOf("SHOTGUN") !== -1 || weapon == "usas-12") { hsbase = 4; accbase = 130; cheatlowhs = 3.5; kpmbase = parseFloat(5.1); }
							if (weapon == "shorty-12g") { hsbase = 7; accbase = 120; cheatlowhs = 4; kpmbase = parseFloat(6.4); }
							if (weapon == "mare-s-leg") { hsbase = 55; accbase = 40; cheatlowhs = 13; kpmbase = parseFloat(3.1); skipspread = 1; }
							if (weapon == "phantom") { hsbase = 30; accbase = 500; cheatlowhs = 4; kpmbase = parseFloat(1.9); skipspread = 1; } 
							if (weapon == "m82a3" || weapon == "amr-2-cqb" || weapon == "rorsch-mk-1") { cheatlowhs = 4; hsbase = 30; accbase = 50; skipspread = 1; }
							if (weapon == "id-p-xp6-iname-m60ult") { hsbase = 8; accbase = 30; cheatlowhs = 4; kpmbase = parseFloat(3.5); skipspread = 1; }														
							if (hsrkr < cheatlowhs) { cheatpoints += 5; counthmcheat += 1; }
							if (hsrkr < (cheatlowhs-2)) { cheatpoints += 5; counthmcheat += 1; }
							if (hsrkr < (cheatlowhs-3)) { cheatpoints += 10; counthmcheat += 1; }	
							var aimbcalc = 0;
							if (accbase < 50) {
								aimbcalc = ((accbase * 35) / 100).toFixed(2);
								if (aimbcalc < 7) aimbcalc = 7;
								if (aimbcalc >= plyacc && hsrkr > hsbase) { cheatpoints += 10; counthmcheat += 1; } 
								if (aimbcalc >= plyacc && hsrkr > (hsbase+10)) { cheatpoints += 10; counthmcheat += 1; } 
								if (aimbcalc >= plyacc && hsrkr > (hsbase+12)) { cheatpoints += 10; counthmcheat += 1; } 
								if (aimbcalc >= plyacc && plykpm >= kpmbase) { cheatpoints += 10; counthmcheat += 1; } 								
							}	
							var hscolor = "#ffffff";
							var chartcor = hscolor;
							var dmgchnace = 0;
							var retcoracc = BBLog.setcor(wdata,plykills,plyhits,plyacc, accbase, 0, 0);							
							var retcorkpm = BBLog.setcor(wdata,plykills,plyhits,(plykpm*10), (kpmbase*10), 0, 0, "kpm"); 
							var retcorhs = BBLog.setcor(wdata,plykills,plyhits,hsrkr, hsbase, 0, 0);							
							var retcorkph = BBLog.setcor(wdata,plykills,plyhits,plykph, kphbase, 1, 1, sidearm);
							cheatpoints += retcorhs[1] + retcorkph[1] + retcoracc[1] + retcorkpm[1];
							counthmcheat += retcorhs[2] + retcorkph[2] + retcoracc[2] + retcorkpm[2];
							dmgchnace = retcorkph[3];
							retcoracc = retcoracc[0];
							retcorkpm = retcorkpm[0];
							retcorhs = retcorhs[0];							
							retcorkph = retcorkph[0];
							chartcor = retcorkph;
							var drawchart = []; 
							if (shotmultiplestats == 1) { drawchart = BBLog.getchartg(wdata, "shotgun", chartcor, plykph, playermindamage); }
							else { drawchart = BBLog.getchartg(wdata, "normal", chartcor, plykph, playermindamage); }	
							var urlParts = window.location.pathname.replace(/\/+$/, "").split('/');
							var splayername = urlParts[urlParts.length - 4];						
							var enoughkillscheat = "";
							var myurlPartsb = window.location.pathname.replace(/\/+$/, "").split('/');
							var ppersonaId = myurlPartsb[myurlPartsb.length - 2];	
							var hiddmginfo = BBLog.storage("bf4.hidedmgspread.info");
							var checkvaluespr = BBLog.storage("general.dmgspread");	
							var checkvaluesprply = BBLog.storage("general.dmgspreadothers");
							var bblsoldier = BBLog.cache("soldier.id");							
							var spreadcolor = "#38a220";
							var dmgtooltip = "";
							var dmgchnacehtml = ".<br>";
							var displaydmgspread = "no";
							var displaydmg = "no";
							var btkcolor = "#ADFF2E";
							var	nsclass = "";		
							if (plyhtok > (pbtkhc+0.9) && plyhtok < pbtkn) btkcolor = "#0065f7";
							if (plyhtok > plyftoh && plyhtok > pbtkn) { btkcolor = "#fff54d"; nsclass = ' class="spread" ';}
							if (ppersonaId != bblsoldier) displaydmg = "yes"; // dont display your own damage.
							if (checkvaluespr == 1 && ppersonaId == bblsoldier) { displaydmg = "yes"; displaydmgspread = "yes"; cheatkills = 50; }
							if (checkvaluesprply == 1 && ppersonaId != bblsoldier) { displaydmg = "yes"; displaydmgspread = "yes"; cheatkills = 50; }

							if (pelletsinfo == "" && plykills > (cheatkills-1)) {
							  var dmgtooltiptemp = `<h6>Damage Modifier</h6>Every weapon has a base damage, if the player has a damage higher than the base damage, then there was a damage modification, this is called &quot;<h7>Damage Mod</h7>&quot; or &quot;<h7>DMG MOD</h7>&quot; <h6>Probability of DMG MOD</h6>It's the chance of the player to be running a damage modification.<br><br>When the player's damage is higher than the Base, Headshot or Hardcore damages(HC Damage: How much damage a &quot;Hardcore Weapon&quot; would do in a full health server), then there is a &quot;Probability of DMG MOD&quot;.<br><br><span style='color:#38a220;'><b>5%</b></span>: It may look suspicious, but there may be hardcore games.<br><span style='color:#38a220;'><b>10%-20%</b></span>: Suspicious, if there are no hardcore games. (No Hand Guns)<br><span style='color:#ef9e2b;'><b>30%</b></span>: Very suspicious, if there are no hardcore games. (No Hand Guns)<br><span style='color:#e2361f;'><b>50%</b></span>: Very suspicious, even if there are hardcore games.<br><span style='color:#e2361f;'><b>50%++</b></span>: Anything above 50% is very suspicious, please check others weapons or use BF4CHEATREPORT.COM to confirm.<h6>Chart</h6><span style='color:#e2361f;'><b>If the player damage line is above the &quot;Max Avg.&quot; and &quot;HC&quot;, then the player is most likely using a damage mod or if the player damage line is above the &quot;base&quot; line(yellow) and under 50% headshot ratio with no hardcore games, then it's most likey a damage mod, because the player will never do Max damage for every hit, since there are different damages over distance and when there is a hit and no kill, then it also lower the player's damage.</b></span><br>`;
							  var spreadtooltip = `<h6>No Spread Detection</h6><center><h7>Experimental feature</h7></center>It tries to detect a certain technique of <h7>No Spread</h7>.<br><br>Take into account that this is a code that tries to show that there may be something wrong by displaying a &quotProbability of No Spread&quot, even if the stats does not trigger the code, there is still a chance of the player to be using <h7>No Spread</h7> <span style='color: #f22626;'><b>Look at the chart, if the player damage is lower than the minimal base damage(yellow line) and both KPM and ACC. are good, then there is a chance of no spread, even if it doesn't detect no spread.</b></span>, when there is something strange, the code will display different colors for BTK:<br><br> <span style='color:#0065f7;'>&#8226 Blue</span> - Hardcore players are hard to detect due the high damage, so if the player's BTK is higher than the HC BTK, but it's lower than the default BTK, then maybe there is something that you need to investigate.<br> <span style='color:#fff54d;'>&#8226 Yellow</span> - Whenever the player's bullets to kill are higher than bullets to hit, then it will display as yellow. <h6>Detection</h6>The detection is a combination of accuracy, KPM, Damage and BTK.<br><br>When the above happens and when the player's Max Damage is always lower than the minimal damage of the current weapon, then there is something wrong, combine that with normal accuracy and good KPM, if good accuracy and good KPM, then it's even more suspicious, as if the player was shooting always at max distance, doing minimal damage and keeping good accuray and KPM.<br><br>Players with low damage most of the time have low accuracy and low KPM, it's more or less the same kind of evidence that aimbot leaves, when the player has 4% accuracy, high headshot ratio and high kpm, then the aimbot becames obvious, the same thing happens with this <h7>No Spread</h7> technique. <br><br><span style='color:#38a220;'><b>3%-10%</b></span>: It may be normal, but suspicious if you see it in every weapon.<br><span style='color:#38a220;'><b>20%-25%</b></span>: It may be normal, but very suspicious if you see it in every weapon.<br><span style='color:#ef9e2b;'><b>30%</b></span>: Suspicious, even more if you see others weapons with low detection.<br><span style='color:#e2361f;'><b>50%</b></span>: Very Suspicious, even more if there are others weapons with low detection.<br><span style='color:#e2361f;'><b>80%</b></span>: Highly Suspicious, if there are more weapons, most likely is the result of no spread.`;
							  if (displaydmg == "yes") {							
								if (dmgchnace > 0) {
									var recbtk = plyhtok - pbtkn;
									var chanhcl = "";
									if (dmgchnace < 50 && plyhtok <= (pbtkhc+1) || dmgchnace < 30) chanhcl = ' (<span style="color:#3b88f7; cursor: pointer;" data-tooltip="<h6>Hardcore game</h6>If the there are HC games, then the damage can be higher than the base damage.">HC: Likely 0%</span>).';// Probability of 
									var dmgtext = dmgchnace + "%";
									var dmtextar = [["Stranger Things.", "Smelling Funny.", "Something fishy.", "Sus?", "Mysterious.", "Dodgy", "Fishy."], ["BINGO!", "BANZAI!", "BAZINGA!", "MLG Doritos.", "MACGYVER.", "KOBE!", "GOOOOL!"]];								
									var myrandtext = Math.floor(Math.random() * 6);
									if (dmgchnace >= 70) dmgtext = dmtextar[0][myrandtext];
									if (dmgchnace == 100) dmgtext = dmtextar[1][myrandtext];
									if (BBLog.storage("bf4.showrealdmg.info")) dmgtext = dmgchnace + "%";
									dmgtooltip = dmgtooltiptemp;
									dmgchnacehtml = `. <span style="color:#e2361f;">`+Math.abs(recbtk).toFixed(2)+`</span> less `+plyproj[1]+` than the default
									<span style="cursor: pointer;" data-tooltip="<h6>`+plyproj[2]+`</h6>`+plyproj[0]+`: `+pbtkn+`<br>Headshot `+plyproj[0]+`: `+pbtknhs+`<br>Hardcore `+plyproj[0]+`: `+pbtkhc+`"><h7>`+plyproj[0]+`</h7></span>(<span style="color:#ADFF2E;">`+pbtkn+`</span>).
									<span style="color:#EA8036; cursor: pointer;" data-tooltip="`+dmgtooltip+`">DMG MOD:</span> <span style="color:`+retcorkph+`;"><b>`+dmgtext+`</b></span>`+chanhcl+`
									<br>`;
								}
							  }	
							 
							  var spreadchance = 0;
							  var cpbtkn = pbtkn;
							  var spreadinfskip = "no";
							    if (plyhtok > plyftoh && plyhtok > (pbtkhc+0.9) && plyhtok < pbtkn && (hsrkr < 35)) { cpbtkn = pbtkhc; spreadinfskip = ". <h7>Suspicous stats</h7> - "; } 
								if (plyhtok > plyftoh && plyhtok > cpbtkn && skipspread < 1) {									
									var cospread1 = +(plyhtok - cpbtkn).toFixed(2); // pbtkn
									var dmgspe = ((wdata.dmgMin - plykph) + plykpm).toFixed(2);
									var limispread = dmgspe;									
									var baseacc = accbase+0.5;								
									var basekpm = kpmbase;
									var btkd = 1.5;																										
									var multiv = 1.56;
									var fixacc = 1.49;
									var tempspread = 0;
									var cflows = [2, 0.8];
									 function spreadchk(btkd, nbase, nkpm) {
										var twox = 1; 
										var newmult = 1;
										var diffmul = 0;
										var accdiff = 0;
										spreadcolor = "#38a220";										
										if (plyhtok > limispread || plyftoh > (wdata.dmgMin - plykph)) return;
										if (plyacc >= accbase) { 
											btkd -= 0.3;
											accdiff = plyacc-accbase;
											if (plyacc > (baseacc+2) && plykpm >= (kpmbase+0.4)) fixacc = 0;
										}	
										if (tempspread > 24) diffmul = 8.4;
										if (tempspread > 48) diffmul = 9.5; //80%: 9.5 100%: -0.5;																																															
										if (wdata.dmgMin >= plykph) {									
											counthmcheat += 1; twox = 2; newmult = 2;												
											if (cospread1 >= 1.9 && cospread1 < 3.51 && plykpm > kpmbase) { fixacc = 0;	baseacc = accbase;}											
											if (cospread1 > 1.8 && plykpm > 1.3 && plykpm < 1.7) { nkpm = 1.65; }
											if (accdiff > 1.0) nkpm -= 0.25;
											if (accdiff > 1.5) nkpm -= 0.20;
											if (accdiff > 2.0) nkpm -= 0.15;
											var checkdiff = 0;																					  
											if (cospread1 >= 1.9 && plykpm > 1.3 && plykpm < kpmbase && baseacc > plyacc && accbase > plyacc) { 
												checkdiff = baseacc-plyacc;												
												if (checkdiff < 6) { 
													if (checkdiff > 2) checkdiff -= 0.79;
													baseacc -= checkdiff;
												}	
												cflows[0] += 1; cflows[1] -= 0.1;																																				
												nkpm = (kpmbase/1.45)-cflows[1];
												fixacc = 0;																
											} else {
												if (accbase <= 21) baseacc = 20+1.5;	
											}											
											if (plykpm >= (kpmbase+1.2)) { 
												newmult = 2.2;
												if (plyacc >= baseacc) btkd -= 0.2;
											}	
										}										
										if ((wdata.dmgMin-7) >= plykph) { 
											fixacc = 0;
											baseacc = baseacc+0.8;
										}
										if (plyacc >= (accbase+6) && nkpm > plykpm) nkpm = nkpm / 1.7;
										if (cospread1 > 3.2 && plykpm >= kpmbase && checkdiff == 0 && (wdata.dmgMin-7) < plykph) { nbase = -1.2; }
										if (cospread1 > 2 && nkpm > 1.0 && nkpm < 1.9 && fixacc > 0) nkpm = 1.5;										 
										if ((cospread1 >= btkd && ((plyacc-fixacc) > (baseacc-nbase)) && plykpm >= nkpm)) { 
											if (twox == 2) multiv = (multiv-diffmul)*newmult; 
											if (twox == 1) {
												if (tempspread == 0) multiv = multiv; 
												if (tempspread != 0) multiv += (multiv-diffmul); 
											}	
											counthmcheat += 1; spreadchance = Math.ceil(multiv); cheatpoints += 5*twox; tempspread = multiv; 
										}
										if (spreadchance > 1 && spreadchance < 3) spreadchance = 3;
										if (spreadchance > 3 && spreadchance < 6) spreadchance = 5;
										if (spreadchance > 5 && spreadchance < 11) spreadchance = 10;
										if (spreadchance > 10 && spreadchance < 20) spreadchance = 20;
										if (spreadchance > 25) spreadcolor = "#ef9e2b";
										if (spreadchance > 49) spreadcolor = "#e2361f";
										return [spreadchance, spreadcolor]; // test
									 }
									 if (plykills > (99)) { // +49 cheatkills+1
									   spreadchk(1.5, 0.89, 1.69);
									   if (spreadchance > 0) {
										 if (cospread1 > 1.49) spreadchk(1.5, 0.8, 1.79);
										 if (cospread1 > 1.89) spreadchk(1.9, 0.2, 1.89);
										 if (cospread1 > 2.19) spreadchk(2.2, 0, kpmbase);
										 if (cospread1 > 2.39) spreadchk(2.4, 0.2, kpmbase);
										 if (cospread1 > 2.89) spreadchk(2.9, 0.8, kpmbase);
									     if (cospread1 > 3.39) spreadchk(3.4, 1.49, 1.89);
									   }	 
									 }   
									if (spreadchance > 80) spreadchance = 80; 
									if (displaydmgspread == "yes") {
									var tempdmgspread = "";								
									if (spreadchance > 0) {
									  if (dmgtooltip != "") {
										tempdmgspread = `. Probability of <span style="color:#EA8036; cursor: pointer;" data-tooltip="`+dmgtooltip+`">DMG MOD:</span> <span style="color:`+retcorkph+`;"><b>`+dmgchnace+`%</b></span> | `;
										tempdmgspread += `Probability of <span style="color:#EA8036; cursor: pointer;" data-tooltip="`+spreadtooltip+`">NO SPREAD</span>: <span style="color:`+spreadcolor+`;"><b>`+spreadchance+`%</b></span><br>`;
									  } else {
										if (spreadinfskip == "no") spreadinfskip = `. <span `+nsclass+` style="color:#e2361f;">`+cospread1+`</span> `+plyproj[1]+` more than the base <span style="cursor: pointer;" data-tooltip="<h6>`+plyproj[2]+`</h6>`+plyproj[0]+`: `+pbtkn+`<br>Headshot `+plyproj[0]+`: `+pbtknhs+`<br>Hardcore `+plyproj[0]+`: `+pbtkhc+`"><h7>`+plyproj[0]+`</h7></span>(<span `+nsclass+` style="color:#ADFF2E;">`+pbtkn+`</span>).`;	
										tempdmgspread = spreadinfskip + ` Probability of <span style="color:#EA8036; cursor: pointer;" data-tooltip="`+spreadtooltip+`">NO SPREAD</span>: <span style="color:`+spreadcolor+`;"><b>`+spreadchance+`%</b></span>
										<br>`;
									  }	
									  dmgchnacehtml = tempdmgspread;
									}									
								   }								   	
								}	
								   if (displaydmgspread == "yes" && spreadchance < 1 && dmgchnace < 1 && hiddmginfo == 0) {
										var dmgnspreadinfo = ".";
										if (splayername.length < 13) dmgnspreadinfo += "<br>";
										dmgnspreadinfo += ` <span id="hidss"><h7>Info:</h7> <span style="color:#9eff79;cursor: pointer;" data-tooltip="`+dmgtooltiptemp+`">Damage Mod</span> | 
										<span style="color:#9eff79;cursor: pointer;" data-tooltip="`+spreadtooltip+`">No Spread</span>
										<br></span>`;
										dmgchnacehtml = dmgnspreadinfo;
								   }								
							}	

							if (counthmcheat > 1 && plykills > (cheatkills-1)) { cheatpoints += counthmcheat; } else { cheatpoints = 0; }	
							var oricheatpoints = cheatpoints;
							var cheatcor = "#9EFF2E";
							if (cheatpoints > 29) cheatcor = "#ef9e2b";
							if (cheatpoints > 50) cheatcor = "#e2361f";
							if (cheatpoints > 100) cheatpoints = 100;
							oricheatpoints = '<span style="color:'+cheatcor+'; cursor: pointer;" data-tooltip="'+oricheatpoints+'%">'+cheatpoints+'%</span>';// testing showing original cheat score before reseting
							if (plykills < cheatkills) { 
								cheatpoints = 0; enoughkillscheat = '<span style="color:'+cheatcor+'; cursor: pointer;" data-tooltip="<h6>Not enough kills('+plykills+')</h6> Cheating score only works if the player has '+cheatkills+' kills or more.">'+cheatpoints+'%</span> '; 
								plykills = '<span style="cursor: pointer;color: #efff1f;" data-tooltip="50 kills or more are needed for cheating score.">'+plykills+'</span>'; 
							} else { enoughkillscheat = '<span style="color:'+cheatcor+';">'+cheatpoints+'%</span>'; } // oricheatpoints 
							var symdata = "<center><h6>Symthic Data</h6></center>";							
							if (weapon == "phantom") { 
								symdata = "<br>";	
								plyproj = ["ATK", "arrows", "ATK: Arrows To Kill"];														
							}							
							var showrpminfo = '<span style="cursor: pointer;" data-tooltip="Rounds per minute."><h7>RPM:</h7></span> ' + rof + ' ' + pelletsinfo;
							if (showrpm == 1) { 
								showrpminfo += `(* <span style="color:#ADFF2E;">`+bulletrofinfo+`</span> bullets are fired at <span style="color:#C90101; cursor: pointer;" data-tooltip="<h6>BOF(Bullet-out frame)</h6> This weapon can shoot the first `+bulletrofinfo+` bullets at `+uprofto+`RPM.">`+uprofto+`RPM</span>).`; 
							}							
							var recoilinfo = `																			
							<table style="background-color: #090909;border: 1px solid black; ">
							<tr>
							<td style="background-color: #070707; padding: 1px;text-align:center;"><div style="background-color: #25292f;">Mag & Reload</div></td>
							<td style="background-color: #070707; padding: 1px;text-align:center;"><div style="background-color: #25292f;">Recoil</div></td>
							<td style="background-color: #070707; padding: 1px;text-align:center;"><div style="background-color: #25292f;">ADS</div></td>
							<td style="background-color: #070707; padding: 1px;text-align:center;"><div style="background-color: #25292f;">HIP Spread</div></td>
							<td style="background-color: #070707; padding: 1px;text-align:center;"><div style="background-color: #25292f;">Ballistic</div></td>
							</tr><tr>
							<td style="padding: 1px;background-color: #1c1c1c;">
							<table style="background-color: #1c1c1c;">
							<tr><td><span style="cursor: pointer;" data-tooltip="`+titles.reloadleft+`">&nbsp;`+wdata.reloadleft+`</span></td><td></td><td><span style="cursor: pointer;" data-tooltip="`+titles.reloadempty+`">`+wdata.reloadempty+`&nbsp;</span></td></tr>
							<tr><td>&nbsp;Mag Size:&nbsp;</td><td>`+wdata.magsize+`</td><td>&nbsp;&nbsp;</td></tr>
							</table>
							</td>
							<td style="padding: 1px; background-color: #1c1c1c;border: 1px solid black;">
							<div style="background-color: #1c1c1c;">
							<table style="background-color: #1c1c1c;">
								<tr><td style="width:32px;padding-bottom: 0px;">&nbsp;&nbsp;<span style="color:#adff2f;cursor: pointer;" data-tooltip="`+titles.recoildecrease+`">&#8595;<span style="font-size:9.5px; color:#adff2f;cursor: pointer;">`+wdata.recoildecrease+`</span></span></td><td style="width:32px;padding-bottom: 0px"><center><span style="cursor: pointer;" data-tooltip="`+titles.recoilup+`">`+wdata.recoilup+`</span></center></td><td style="width:32px;padding-bottom: 0px"><span style="color:#ff9000;">&nbsp;&nbsp;&#8593;</span><span style="font-size:8.5px; color:#ff9000; cursor: pointer;" data-tooltip="`+titles.recoilmultiple+`">1st<br>&nbsp;&nbsp;`+wdata.recoilmultiple+`x</span></td></tr>
								<tr><td style="width:32px;padding-bottom: 0px; text-align: right;">&nbsp;<span style="cursor: pointer;" data-tooltip="`+titles.recoilleft+`">`+wdata.recoilleft+`&nbsp;</span>&nbsp;</td><td style="width:32px;padding-bottom: 0px"><div style="margin-top: -12px;">__|__</div></td><td style="width:32px;padding-bottom: 0px">&nbsp;<span style="cursor: pointer;" data-tooltip="`+titles.recoilright+`">`+wdata.recoilright+`</span>&nbsp;</td></tr>
							</table>							
							</div>
							</td>
							<td style="padding: 1px; background-color: #1c1c1c;border: 1px solid black;">
							<div style="background-color: #1c1c1c;">
								<table><tr>
								<td>
									<div class="standbblog"></div>
									<div class="movingbblog"></div>
								</td><td>
								<div><span style="cursor: pointer;" data-tooltip="`+titles.ads_spread+`"><b>`+wdata.ads_spread+`</b>&nbsp;</div>
								<div style="margin-top: 4px;"><span style="cursor: pointer;" data-tooltip="`+titles.ads_spreadmoving+`"><b>`+wdata.ads_spreadmoving+`</b>&nbsp;</div>
								</td>
								</tr></table>		
							</div>
							</td>
							<td style="padding: 1px; background-color: #1c1c1c;border: 1px solid black;">															
								 <table><tr>
								  <td>
								  <center>
								  <div style="font-size:8.5px;line-height: 1.0;margin-left: 4px;cursor: pointer;" onmouseover="this.style.background='#294f87';" onmouseout="this.style.background='#1c1c1c';">
								  <span data-tooltip="`+titles.hipspreadnotmoving+`">
									`+wdata.hipstand+`<br> 
									`+wdata.hipscrouch+`<br>
									`+wdata.hipsprone+`
								   </span>								   								   								 
								  </div>
								<div style="font-size:8.5px;line-height: 1.0;margin-top: 3px;margin-left: 4px;cursor: pointer;" onmouseover="this.style.background='#294f87';" onmouseout="this.style.background='#1c1c1c';">
								  <span data-tooltip="`+titles.hipspreadmoving+`">
									`+wdata.hipmstand+`<br> 
									`+wdata.hipmcrouch+`<br>
									`+wdata.hipmprone+` 
								  </span>	
								</div>
								</center>
								</td><td>
								 <div style="font-size:8.5px;line-height: 1.0;margin-left: 4px;">
								   &nbsp;&nbsp; Stand<br>&nbsp;&nbsp; Crouch<br>&nbsp;&nbsp; Prone
								   </div>
								  <div style="font-size:8.5px;line-height: 1.0;margin-left: 4px;margin-top: 3px"> 
								   &nbsp;&nbsp; Stand<br>&nbsp;&nbsp; Crouch<br>&nbsp;&nbsp; Prone
								   </div>
								</td>
								</tr></table>
							</td>
							<td style="padding: 1px;background-color: #1c1c1c;border: 1px solid black;">
							&nbsp;Drop: <span style="cursor: pointer;" data-tooltip="`+titles.Bulletdrop+`">`+wdata.Bulletdrop+`m/s² &nbsp;</span>
							<br>&nbsp;Distance: <span style="cursor: pointer;" data-tooltip="`+titles.distance+`">`+wdata.distance+`m &nbsp;</span>
							<br>&nbsp;Velocity: <span style="cursor: pointer;" data-tooltip="`+titles.InitialSpeed+`">`+wdata.InitialSpeed+`m/s &nbsp;</span>
							</td>
							</tr>
							</table>`;
														
							var filenameforss = splayername.replace(/[^a-zA-Z0-9-_]/g, '-') + `-` + weaponname; 
							filenameforss = filenameforss.replace(/(?:\r\n|\r|\n)/g, '');
							filenameforss = filenameforss.replace(/\s/g,'');
							var statsdoss = BBLog.mydoss(filenameforss);							
							var htmlcredit = '<center><span style="color:#ADFF2E;">Screenshots from <a href="https://www.symthic.com" target="_blank">www.symthic.com</a> and <a href="https://sym.gg" target="_blank">sym.gg</a></center>';
							var htmlstats = `
							<center>
							<a href="#" id="btn-download" style="display=none; visibility:hidden;" download="`+filenameforss+`_stats.png">Download</a>
							<span id="cheatscore"></span>													
							<input id="bblog-weapon-stats-btn" data-tooltip="<h6>Upload SS(screenshot) to Imgur</h6>" type="button" class="btn btn-tiny" download="`+splayername+`_`+weaponori+`_stats.png" value="Upload SS" onclick="takess(2); return false;">
							<input id="bblog-weapon-stats-btn" data-tooltip="<h6>Take a screenshot</h6>" type="button" class="btn btn-tiny" download="`+splayername+`_`+weaponori+`_stats.png" value=" SS " onclick="takess(1); return false;">
							<input id="bblog-weapon-stats-btn" data-tooltip="Check BF4DB.com Player's profile for more info or to report." type="button" class="btn btn-tiny" value="BF4DB" onclick="window.open('https://bf4db.com/player/` + ppersonaId + `', '_blank');">
							<input id="bblog-weapon-stats-btn" data-tooltip="Choose a number to load the latest Battle Report stats on bf4cheatreport.com" type="button" class="btn btn-tiny" value="BF4CHEATREPORT" onclick="(function(){
								var getvalsel = document.getElementById('bfcrc');
								var urltopenis = getvalsel.options[getvalsel.selectedIndex].value;
								urltopenis = 'https://www.bf4cheatreport.com/?pid=` + ppersonaId + `&uid=&cnt='+urltopenis+'&startdate=&rid=';
								window.open(urltopenis, '_blank');
							})();return false;">							
							<select id="bfcrc">
								<option selected="selected" value="10">10</option>
								<option value="20">20</option>
								<option value="50">50</option>
								<option value="100">100</option>
								<option value="200">200</option>
							</select>														
							
							<span id="cheatscorea">
							 [ <span style="cursor: pointer;" data-tooltip="<h6>Cheat Score</h6>+`+cheatkills+` kills - A value higher than 0 is not an indication of cheating, but higher than 30 may be an indication of stats padding or trying hard a certain stats, It's not just cheating...">CHEAT SCORE:</span> <b>`+enoughkillscheat+`</b> ] 
							</span>
							<label style="cursor: pointer;" data-tooltip="<h6>Show Cheat Score on the Screenshot</h6>"><input type="checkbox" onchange="showcheatscoress(this)"> Show Cheat Score(SS)</label>
							</center>							
							<div id="imgurstat" class="bblog-local-comment">
							</div>`;
									// 476 div chart					
							var playerweapon = `
						 <div id="sshot" style="width:955px; height:`+(shotboxsize+25)+`px;">
						 <div id="showcheatss"></div>
						 <div style="background-color:#1C1C1C;padding:2px;width:450px;height:`+shotboxsize+`px;float: left;">
							<div class="overview-info-box box">
							<header><h1><center>Hitbox & Weapon Info</center></h1></header>
								<div style="overflow: hidden;">
								   <div style="float: left;width: 165px;"> 
									<br>
									<div style="background: #037D1B;width: 14px;height: 10px;border-radius: 50%;margin-left: 1px;float: left;margin-top: 3px;"> </div><div style="margin-left: 9px; margin-top: 0px;">
									<span style="color:#037D1B;"><b>Headshot</b></span> (`+hsmultiple+`x)
									<br>Max. DMG: `+(hsmultiple*wmaxdmg).toFixed(2)+`
									<br>Min. DMG: `+(hsmultiple*wmindmg).toFixed(2)+`
									</div>  
									<div style="background: #343BBA;width: 14px;height: 10px;border-radius: 50%;margin-left: 1px;float: left;margin-top: 3px;"> </div><div style="margin-left: 9px;margin-top: 0px;">
									<span style="color:#343BBA;"><b>Chest and arms</b></span> (`+bodyshot+`x)
									<br>Max. DMG: `+(bodyshot*wmaxdmg).toFixed(2)+`
									<br>Min. DMG: `+(bodyshot*wmindmg).toFixed(2)+`
									</div>
									<div style="background: #2c63b3;width: 14px;height: 10px;border-radius: 50%;margin-left: 1px;float: left;margin-top: 3px;"> </div><div style="margin-left: 9px;margin-top: 0px;">
									<span style="color:#2c63b3;cursor: pointer;" data-tooltip="Field upgrade."><b>Defensive FU</b></span> (`+bodyshotdefensive+`x)
									<br>Max. DMG: `+(bodyshotdefensive*wmaxdmg).toFixed(2)+`
									<br>Min. DMG: `+(bodyshotdefensive*wmindmg).toFixed(2)+`
									</div>
									<div style="background: #FCD63C;width: 14px;height: 10px;border-radius: 50%;margin-left: 1px;float: left;margin-top: 3px;"> </div><div style="margin-left: 9px;margin-top: 0px;">
									<span style="color:#FCD63C;"><b>Stomatch & legs</b></span> (`+stolegsshot+`x)
									<br>Max. DMG: `+(stolegsshot*wmaxdmg).toFixed(2)+`
									<br>Min. DMG: `+(stolegsshot*wmindmg).toFixed(2)+`
									</div>																										
									<div style="background: #C90101;width: 14px;height: 10px;border-radius: 50%;margin-left: 1px;float: left;margin-top: 3px;"> </div><div style="margin-left: 9px;margin-top: 0px;">
									<span style="color:#C90101;"><b>No damage</b></span>
									</div>
								  </div> 
									<div class="bblog-weapon-container" style="float: left;">
										<div class="torso" style="float: left;margin-left: -30px;"></div>
									</div>
									<div style="width: 186px; overflow: hidden; float: left ;margin-left: 8px;">
										<center><br>
											<div style="cursor: pointer; margin-top: -17px; font-size: 12px;font-weight: bold" data-tooltip="<h6>TTK: Time To Kill , BTK: Bullet To Kill & DMG: Damage</h6><h6>For TTK & BTK, put the mouse over the values.</h6>">TTK, BTK & DMG over distance:<br><br></div>
											<div style="margin-top: -18px;">
											`+htmldivdistb+`
											</div>
											</center>
									<div style="width: 186px; overflow: hidden; margin-left: 1px;background-color:#25292f;margin-top: -16px;">
									<center><b><span style="cursor: pointer;" data-tooltip="<h6>Time to Kill(TTK) - Max damage.</h6>">TTK</span> & <span style="cursor: pointer;" data-tooltip="<h6>Bullets to Kill(BTK) - Max damage.</h6>">BTK</span> at `+wdata.dmgFallStart+`m:</b></center>
										<div style="margin-left: 10px;margin-top: -36px;">										
										<br>
										<BR> TTK: <span style="cursor: pointer;" data-tooltip="<h6>Symthic: `+pbtknms[1]+`ms</h6>">`+pbtknms[0]+` ms</span> | BTK: <span `+nsclass+`>`+pbtkn+`</span>
										<BR> <span style="cursor: pointer;" data-tooltip="Hardcore">HC</span> - TTK: <span style="cursor: pointer;" data-tooltip="<h6> Symthic: `+pbtkhcms[1]+`ms</h6>">`+pbtkhcms[0]+` ms</span> | BTK: `+pbtkhc+`
										<BR> <span style="cursor: pointer;" data-tooltip="Headshot">HS</span> - TTK: <span style="cursor: pointer;" data-tooltip="<h6> Symthic: `+pbtknmshs[1]+`ms</h6>">`+pbtknmshs[0]+` ms</span> | BTK: `+pbtknhs+`
										</div>
										
									</div>	
									</div>
							</div>
						  </div>
							<div style="margin-top: `+stuffbox+`px; margin-left: 4px;">
								`+recoilinfo+`
							</div>								
						</div>
								<div style="background-color:#1C1C1C;padding:2px; width: 483px; height:`+shotboxsize+`px; float: left;margin-left: 8px;">
									<div class="overview-info-box box" style="">
											<header><h1 style="font-size: 14px;">`+splayername+` - `+weaponori.toUpperCase()+` Statistics | <span style="cursor: pointer;"data-tooltip="<h6>Time played</h6>">Time: `+wepotime+`</span></h1></header>
											<div style="margin-left: 4px; font-size: 13px; margin-top:5px;">
												<span style='color:#E4B744;font-weight:bold'>`+splayername.toUpperCase()+`</span> need an average of <span style="color:#ADFF2E;">`+plyftoh+`</span> `+plyproj[1]+` to hit and <span `+nsclass+` style="color:`+btkcolor+`;">`+plyhtok+`</span> `+plyproj[1]+` to kill<span id="dmgss">`+dmgchnacehtml+`</span><span id="adddot"></span>
												<br> <h7>Kills:</h7> `+plykills+` | <h7>Headshots:</h7> `+plyhs+`(<span style="color:`+retcorhs+`;">`+hsrkr+`%</span>) | <span style="cursor: pointer;" data-tooltip="<h6>Kills per minute.</h6>"><h7>KPM:</h7></span> <span style="color:`+retcorkpm+`;">`+plykpm+`</span> | <span style="cursor: pointer;" data-tooltip="Percentage of kills per shot hit--100*kills/shotsHit."><h7>KPH:</h7></span> <span style="color:`+retcorkph+`; cursor: pointer;" data-tooltip="KPH may be high if the player has hardcore games.">`+plykph+`%</span>
												<br> <span style="cursor: pointer;" data-tooltip="Accuracy."><h7>Accuracy:</h7></span> <span style="color:`+retcoracc+`;">`+plyacc+`%</span> <span style="color:#ADFF2E;">[</span> <span style="cursor: pointer;" data-tooltip="Shots fired.">Fired:</span> `+plyfire+` | <span style="cursor: pointer;" data-tooltip="Shots hit.">Hit:</span> `+plyhits+` | <span style="cursor: pointer;" data-tooltip="Shots missed.">Miss:</span> <span style="color:#efff1f;">`+plymiss+`</span> <span style="color:#ADFF2E;">]</span> 												
												<br>
												<br>☠ <h7>Avg. damage</h7>: <span `+nsclass+` style="color:`+retcorkph+`; cursor: pointer;" data-tooltip="Damage may be high if the player has hardcore games.">`+plykph+`</span> (<h7>`+weaponori.toUpperCase()+`</h7> - Max. damage: <span `+nsclass+`>`+(wmaxdmg).toFixed(2)+`</span>)
												<br>☠ <h7>Avg. TTK</h7>: <span style="cursor: pointer;" data-tooltip="<h6>Symthic: `+playeravettk[1]+`ms</h6>">`+playeravettk[0]+`ms</a></span> <span style="cursor: pointer;" data-tooltip="<span style='color:#E38204;font-weight:bold'>Max. damage at `+wdata.dmgFallStart+`m [BOF(Bullet-out frame) data] | Symthic: `+pbtknms[1]+`ms | HC: `+pbtkhcms[1]+`ms</span>">(<h7>`+weaponori.toUpperCase()+`</h7> - TTK: `+pbtknms[0]+`ms | HC: `+pbtkhcms[0]+`ms)</span>
																								    
											</div>
											<center>
											<div style="background-color:#1C1C1C; margin-top:1px;">										
												<div id="chart_div" style="width:`+charsize[0]+`px; height:`+charsize[1]+`px;"></div> 												
											</div>
											</center>
											<div style="margin-top: 1px; margin-left: 4px;">
											`+showrpminfo+`
											</div>
									</div>
								 </div>	
							</div>
							
<script type="text/javascript">
var updatescore = new Date();
updatescore = updatescore.getDay() + 1;
var cscore = document.createElement('script');
        cscore.setAttribute('type', 'text/javascript');
        cscore.setAttribute('src', "https://irussao.github.io/bbl/cheatscore.js?v=`+BBLog.version+`1&up="+updatescore);
        document.head.appendChild(cscore);

function showcheatscoress(ele, what) {
	var cheassa = document.getElementById('cheatscorea');
	var cheassb = document.getElementById('showcheatss');
	if (ele.checked) {
		cheassb.innerHTML = '<center>'+cheassa.innerHTML+'</center>';
		cheassa.style.display = 'none';  
		cheassa.style.visibility = 'hidden';	
	} else { 
		cheassb.innerHTML = ''; 
		cheassa.style.display = 'contents';
		cheassa.style.visibility = 'visible';		
	}	
}
	
`+statsdoss+`									
</script>
`+drawchart;

							htmlstats += playerweapon;
							symdata = bofinfo+symdata;
							var htmlframe = '<div style="margin-top: -16px;" data-html2canvas-ignore>'+symdata+'<center><iframe id="htmlsourceweapon" src="'+BBLog.chk_url+'?weapon='+weapon+'&bblog=1" width="100%" height="1920" scrolling="0" frameborder="none" style="border: none;overflow-y: hidden;"></iframe></center></div>';
							BBLog.popup('weapon-info', BBLog.t("bf3.weapons.info") + ": " + weaponori.toUpperCase(), '<div style="margin-top: -10px;">'+htmlstats+'</div></div>'+htmlframe+htmlcredit); 
                          }
						
                    })); }
                }

                e = e.find(".box-content").first().find(".track-weapon-stats").first();
                if (!BBLog.elementCheck(e, action)) {
                    try {												
						var weaponinfo, weaponinfob, weaponinfoc;
						var isbfh = 0;
						if (BBLog.cache("mode") == "bfh") {
								isbfh = 1;
								weaponinfob = JSON.parse(JSON.stringify(Surface.Renderer.state.surface["weapon-details"]["detailedWeapon"]));								
								weaponinfoc = JSON.parse(JSON.stringify(Surface.Renderer.state.surface["weapon-details"]["detailedWeapon"]["info"]["weaponData"]));	
								weaponinfo = { ...weaponinfoc, ...weaponinfob };																
						} else { weaponinfo = wdata; }								
						var wpnname = weaponinfo.slug;
						var plydmg = 0;
						if (weaponinfo.shotsHit > 0 && weaponinfo.kills > 0) plydmg = parseFloat(((weaponinfo.kills*100)/weaponinfo.shotsHit).toFixed(2));
						if (isbfh == 1) {
							weaponinfo.dmgMax = +(weaponinfo.statDamage*100);
							weaponinfo.ShotsPerShell = 1;
						}	
						var damage = weaponinfo.dmgMax * weaponinfo.ShotsPerShell;
                        var rof = weaponinfo.rateOfFire;							
                        if (typeof weaponinfo.rateOfFire != "undefined") {
                            var c = e.find("li.clearfix").last();
                            var clone;
                            var rof = weaponinfo.rateOfFire;
                            if (isNaN(weaponinfo.rateOfFire)) rof = 6 * 60;
                            var max, curr, playerDamage, btk;
                            playerDamage = 60;							
							var hsinfo = $("#weapon-details");
							var infoli = hsinfo.find(".weapon-statistics");
							var hskillstext = weaponinfo.kills;
							var hsinfotext = weaponinfo.headshots;							
							var hsRate = 0;
							var isnip = 23;		
							var setndamage = e.find("li.clearfix").first();
							var wpndamage = damage;
							if (wpndamage > 100) wpndamage = 100;
							setndamage.find(".progress-bar-inner").css("width", wpndamage + "%");
							if (hsinfotext > 0) {
								if (hsinfotext == 0) {
								hsRate = 0;
								} else {
								hsRate = ((100 / hskillstext) * hsinfotext).toFixed(2).toString();
								hsRate = hsRate || 0;	
								var myweaponData = weaponinfo.category;
								if (typeof myweaponData != "undefined" && myweaponData != null) {
									if (myweaponData.toUpperCase().indexOf("SNIPER") !== -1) isnip = 55;								
									if (myweaponData.toUpperCase().indexOf("DMR") !== -1) isnip = 40;
									if (myweaponData.toUpperCase().indexOf("LMG") !== -1 || wpnname == "id-p-xp6-iname-m60ult") isnip = 17;
									if (myweaponData.toUpperCase().indexOf("SIDEARM") !== -1) isnip = 30;
									if (myweaponData.toUpperCase().indexOf("SHOTGUN") !== -1) isnip = 6;
								}
								var hscolor = "#ffffff";
								if (hsRate > (isnip)) hscolor = "#38a220";
								if (hsRate > (11+isnip)) hscolor = "#ef9e2b";
								if (hsRate > (25+isnip)) hscolor = "#e2361f";
								
								clone = infoli.find("li.clearfix").last().clone();
								curr = btk = Math.ceil(playerDamage / damage);
								max = Math.max(curr, 5);
								clone.attr("data-tooltip", "Headshot ratio");
								clone.find("span").first().html("HEADSHOT (%)");
								clone.find("span").last().text(hsRate);
								if (isbfh == 0 || hscolor != "#ffffff") clone.find("span").last().css("color", hscolor);
								curr -= 1;
								max -= 1;
								clone.find(".progress-bar-inner").css("width", 100 - ((100 / max) * curr) + "%");															
								infoli.find("li.clearfix").eq(2).before(clone);								
								}								
							}						
							if (weaponinfo.kills > 0) {
								var kphbase = parseFloat((weaponinfo.dmgMax*weaponinfo.ShotsPerShell).toFixed(2));	
								var retcorkph = BBLog.setcor(weaponinfo, weaponinfo.kills, weaponinfo.shotsHit, plydmg, kphbase, 1, 1);		
								if (isbfh == 1) { 
									var bfhcor = "";
									if (retcorkph[0] != "#ffffff") bfhcor = 'style="color:'+retcorkph[0]+'"'; 
								}
								infoli.prepend('<li class="clearfix"><span data-tooltip="Player damage" style="cursor: pointer;">Damage</span> <span '+bfhcor+'>'+plydmg+'</span> </li>')
							}							
							var showburst = "";
							var newrpm = hsinfo.find(".track-weapon-stats");
							if (newrpm) {
								var chspan = newrpm.find("li.clearfix").eq(6);								
								var showburst = "";
								if (isbfh == 0) {
									if (BBLog.BBWF[wpnname].burst) showburst = '(Burst: '+BBLog.BBWF[wpnname].burst + ')';
									chspan.find("span").last().text(weaponinfo.rateOfFire + showburst);
								}	
								if (weaponinfo.ShotsPerShell > 1) {
									chspan = newrpm.find("li.clearfix").eq(8);
									var txtfp = chspan.find("span").last().text();
									chspan.find("span").last().text(txtfp + "(" + weaponinfo.ShotsPerShell + " pellets)");
								}	
							} 
                            clone = c.clone();
                            curr = btk = Math.ceil(playerDamage / damage);
                            max = Math.max(curr, 5);
                            clone.attr("data-tooltip", BBLog.t("bf4.weapons.info.btk.hc"));
                            clone.find("span").first().html("Ø BTK HC");
                            clone.find("span").last().text(curr);
                            curr -= 1;
                            max -= 1;
							var resutt = 100 - ((100 / max) * curr);
							if (isbfh == 1) { if (curr > 3) curr -= 0.5; }
                            clone.find(".progress-bar-inner").css("width", 100 - ((100 / max) * curr) + "%");
                            c.after(clone);

							var wpnttkstatsb = BBLog.newcaclttk(playerDamage, (weaponinfo.dmgMax*weaponinfo.ShotsPerShell), weaponinfo.dmgFallStart, weaponinfo); 
                            clone = c.clone();
                            curr = btk == 1 ? 5 : ((1 / (rof / 60)) * btk) * 1000;
                            max = Math.max(curr, 1000);
							if (isbfh == 1) wpnttkstatsb[0] = curr.toFixed(0);
                            clone.attr("data-tooltip", BBLog.t("bf4.weapons.info.ttk.hc"));
                            clone.find("span").first().html("Ø TTK HC (ms)");
                            clone.find("span").last().text(wpnttkstatsb[0]); 
                            clone.find(".progress-bar-inner").css("width", 100 - ((100 / max) * curr) + "%");
                            c.after(clone);

                            playerDamage = 100;								
                            clone = c.clone();
                            curr = btk = Math.ceil(playerDamage / damage);
                            max = Math.max(curr, 5);
                            clone.attr("data-tooltip", BBLog.t("bf4.weapons.info.btk"));
                            clone.find("span").first().html("Ø BTK");
                            clone.find("span").last().text(curr);
                            curr -= 1;
                            max -= 1;
							resutt = 100 - ((100 / max) * curr);
							if (isbfh == 1) { if (curr > 3) curr -= 0.5; }
                            clone.find(".progress-bar-inner").css("width", 100 - ((100 / max) * curr) + "%");
                            c.after(clone);
							
							wpnttkstatsb = BBLog.newcaclttk(playerDamage, (weaponinfo.dmgMax*weaponinfo.ShotsPerShell), weaponinfo.dmgFallStart, weaponinfo); 
                            clone = c.clone();
                            curr = btk == 1 ? 5 : ((1 / (rof / 60)) * btk) * 1000;
                            max = Math.max(curr, 1000);
							if (isbfh == 1) wpnttkstatsb[0] = curr.toFixed(0);
                            clone.attr("data-tooltip", BBLog.t("bf4.weapons.info.ttk"));
                            clone.find("span").first().html("Ø TTK (ms)");
                            clone.find("span").last().text(wpnttkstatsb[0]);
                            clone.find(".progress-bar-inner").css("width", 100 - ((100 / max) * curr) + "%");
                            c.after(clone);	
                        }
                    } catch (e) {
                    }
                }
                break;
            case "bf4.weapons.list.filters":
            case "bf4.vehicle.list.filters":
            case "bfh.vehicle.list.filters":
            case "bfh.weapons.list.filters":
                if ((BBLog.cache("mode") != "bf4" && BBLog.cache("mode") != "bfh") || !window.location.href.match(/\/(weapons|vehicles)\//)) return this.callback();
                var ids = {
                    "bf4.weapons.list.filters": ["#weapon-details", "#weapon-list > table:first", "#weapon-statistics > div.span8"],
                    "bf4.vehicle.list.filters": ["#vehicle-details", "#vehicle-list > table:first", "#vehicle-statistics > div.span8"],
                    "bfh.weapons.list.filters": ["#weapon-details", "#weapon-list > table:first", "#weapon-statistics > div.span8"],
                    "bfh.vehicle.list.filters": ["#vehicle-details", "#vehicle-list > table:first", "#vehicle-statistics > div.span8"]
                }
                var e = $(ids[action][0]);
                var e2 = $(ids[action][1]);
                var e3 = $(ids[action][2]);
                if (!e.length || !e3.length || BBLog.elementCheck(e3, action)) return this.callback();

                e3.prepend('<div class="box bblog-textual-filter"><header><h1>' + BBLog.t("list.filters.search") + '</h1></header><div class="box-content"><div id="bblog-textual-filter"></div></div></div>');
                var textfield = $('<input type="text" value="" data-key="' + action + '.filter"/>');
                textfield.val(BBLog.storage(textfield.attr("data-key")) || "");
                textfield.on("keyup", [ids[action][1]], function (ev) {
                    BBLog.storage($(this).attr("data-key"), $(this).val());

                    var val = $(this).val().replace(/[^0-9a-z\u0400-\u04FF,]/ig, "").toLowerCase();
                    var vals = val.split(",");
                    var table = $(ev.data[0]);
                    var items = table.find("td.item-name p");

                    items.closest("tr").removeClass("bblog-hide");
                    if (val.length) {
                        if ($("#bn-show-all").length) {
                            $("#bn-show-all").trigger("click").remove();
                            setTimeout(function () {
                                textfield.trigger("keyup")
                            }, 100);
                        }
                        items.each(function () {
                            var text = $(this).text().replace(/[^0-9a-z\u0400-\u04FF,\ä\ü\ö\Ö\Ü\Ä]/ig, "").toLowerCase();
                            for (var i in vals) {
                                if (text.match(vals[i])) {
                                    return true;
                                }
                            }
                            $(this).closest("tr").addClass("bblog-hide");
                        });
                    }
                }).triggerHandler("keyup");
                $("#bblog-textual-filter").append(textfield);

                if (action == "bf4.weapons.list.filters" || action == "bfh.weapons.list.filters") {
                    var buttons = $('<div class="buttons">');
                    buttons.append($('<div class="button all" data-id="all"><span>' + BBLog.t("all") + '</span></div>'));
                    for (var id in Surface.Renderer.state.surface["weapon-list"].categoryNiceName) {
                        var tmp = Surface.Renderer.state.surface["weapon-list"].categoryNiceName[id];
                        buttons.append($('<div class="button ' + id + '" data-id="' + id + '"><span>' + tmp + '</span></div>'));
                    }

                    buttons.find(".button").on("click", function () {
                        var to = 0;
                        if ($("#bn-show-all").length) {
                            $("#bn-show-all").trigger("click");
                            to = 100;
                        }
                        var btn = $(this);
                        btn.parent().children(".button").removeClass("active");
                        btn.addClass("active");
                        BBLog.storage(action + ".button", btn.attr("data-id"));
                        setTimeout(function () {
                            var e = $("#weapon-list");
                            if (btn.attr("data-id") == "all") {
                                e.find("tr[data-guid]").removeClass("hide");
                                return;
                            }
                            var weapons = Surface.Renderer.state.surface["weapon-list"].weaponsByCategory[btn.attr("data-id")];
                            e.find("tr[data-guid]").addClass("hide");
                            for (var i in weapons) {
                                var weapon = weapons[i].weaponUnlock;
                                var tmp = e.find("tr[data-guid='" + weapons[i].weaponUnlock.guid + "']");
                                if (tmp.length) {
                                    tmp.removeClass("hide");
                                }
                            }
                        }, to);
                    });
                    var storageButton = BBLog.storage(action + ".button");
                    if (storageButton && storageButton != "all") {
                        buttons.find("." + storageButton).trigger("click");
                    }
                    buttons.append('<div class="base-clear">');
                    $("#bblog-textual-filter").append('<div class="base-clear">');
                    $("#bblog-textual-filter").append(buttons);

                }
                break;
            case "bf4.weapons.list.sort":
            case "bf4.vehicle.list.sort":
                var mode = false;
                if (window.location.href.match(/\/weapons\//) && Surface.Renderer.state.surface["weapon-list"] && action.match(/weapons\.list\.sort/)) mode = "weapon";
                if (window.location.href.match(/\/vehicles\//) && Surface.Renderer.state.surface["vehicle-list"] && action.match(/vehicle\.list\.sort/)) mode = "vehicle";
                if (mode) {
                    var e = $("#" + mode + "-list");
                    if (BBLog.elementCheck(e, action)) return this.callback();

                    if (mode == "weapon") {

                        var sorts = [
                            {
                                "filter": "th:eq(2)",
                                "tdfilter": "td.item-servicestars",
                                "active": 0,
                                "arr": [
                                    {
                                        title: BBLog.t("bf4.weapons.list.sort.stars.star"),
                                        value: "data-sort-value-w-star",
                                        "sort": "headerSortUp",
                                        "defaultVal": 999999
                                    },
                                    {
                                        title: BBLog.t("bf4.weapons.list.sort.stars.kills"),
                                        value: "data-sort-value-w-kills",
                                        "sort": "headerSortDown",
                                        "defaultVal": 999999
                                    }
                                ]
                            },
                            {
                                "filter": "th:eq(3)",
                                "tdfilter": "td.item-nextunlock",
                                "active": 0,
                                "arr": [

                                    {
                                        title: BBLog.t("bf4.weapons.list.sort.unlocks.star"),
                                        value: "data-sort-value-w-percent",
                                        "sort": "headerSortUp",
                                        "defaultVal": 999999
                                    },
                                    {
                                        title: BBLog.t("bf4.weapons.list.sort.unlocks.kills"),
                                        value: "data-sort-value-w-kills",
                                        "sort": "headerSortDown",
                                        "defaultVal": 999999
                                    }
                                ]
                            }
                        ];

                        e.find("td.item-servicestars").each(function () {
                            var sort = $(this).attr("data-sort-value");
                            while (sort > 100) sort -= 100;
                            sort = 100 - sort;
                            $(this).attr("data-sort-value-w-star", $(this).attr("data-sort-value"));
                            $(this).attr("data-sort-value-w-kills", sort);
                            var tmp = $(this).find(".service-star");
                            tmp.attr("data-tooltip", tmp.attr("data-tooltip") + "<br/>" + BBLog.t("kills.remaining") + ": " + sort);
                        });

                        var arr = Surface.Renderer.state.surface["weapon-list"].mainWeapons;
                        for (var i in arr) {
                            var w = arr[i];
                            if (w.nextAccessoryUnlock && w.nextAccessoryUnlock.weaponAddonUnlock && w.nextAccessoryUnlock.weaponAddonUnlock.unlockedBy) {
                                var tmp = w.nextAccessoryUnlock.weaponAddonUnlock.unlockedBy;
                                var sortValue = tmp.valueNeeded - tmp.actualValue;
                                var tr = $("#weapon-list tr[data-guid='" + w.guid + "']");
                                tr.find("td.item-nextunlock")
                                    .attr("data-sort-value", (100 / tmp.valueNeeded) * tmp.actualValue)
                                    .attr("data-sort-value-w-percent", (100 / tmp.valueNeeded) * tmp.actualValue)
                                    .attr("data-sort-value-w-kills", sortValue);
                                var tmp = tr.find("td.item-nextunlock [data-tooltip]").first();
                                tmp.attr("data-tooltip", tmp.attr("data-tooltip") + "<br/>" + BBLog.t("kills.remaining") + ": " + sortValue);
                            }
                        }

                    } else if (mode == "vehicle") {

                        var sorts = [
                            {
                                "filter": "th:eq(2)",
                                "tdfilter": "td.item-servicestars",
                                "active": 0,
                                "arr": [
                                    {
                                        title: BBLog.t("bf4.vehicle.list.sort.stars.star"),
                                        value: "data-sort-value-v-percent",
                                        "sort": "headerSortUp",
                                        "defaultVal": 0
                                    },
                                    {
                                        title: BBLog.t("bf4.vehicle.list.sort.stars.points"),
                                        value: "data-sort-value-v-points",
                                        "sort": "headerSortDown",
                                        "defaultVal": 999999
                                    }
                                ]
                            },
                            {
                                "filter": "th:eq(3)",
                                "tdfilter": "td.item-nextunlock",
                                "active": 0,
                                "arr": [
                                    {
                                        title: BBLog.t("bf4.vehicle.list.sort.unlocks.star"),
                                        value: "data-sort-value-v-percent",
                                        "sort": "headerSortDown",
                                        "defaultVal": 0
                                    },
                                    {
                                        title: BBLog.t("bf4.vehicle.list.sort.unlocks.points"),
                                        value: "data-sort-value-v-points",
                                        "sort": "headerSortDown",
                                        "defaultVal": 999999
                                    }
                                ]
                            }
                        ];

                        e.find("td.item-servicestars").each(function () {
                            $(this).attr("data-sort-value-v-percent", $(this).attr("data-sort-value"));
                        });

                        var cats = Surface.Renderer.state.surface["vehicle-list"].categories;
                        for (var c in cats) {
                            var cat = cats[c];
                            var vehicle = cat.vehicles[0];
                            if (vehicle && vehicle.unlocks) {
                                var highestUnlock = null;
                                var nearestUnlock = null;
                                var currentValue = 0;
                                var tr = e.find("tr[data-category='" + cat.name + "']");
                                for (var u in vehicle.unlocks) {
                                    var unlock = vehicle.unlocks[u];
                                    if (unlock && unlock.unlockedBy) {
                                        unlock = unlock.unlockedBy;
                                        var currentValue = unlock.actualValue;
                                        if (!highestUnlock || highestUnlock.valueNeeded < unlock.valueNeeded) highestUnlock = unlock;
                                        if (unlock.actualValue < unlock.valueNeeded && (!nearestUnlock || unlock.valueNeeded < nearestUnlock.valueNeeded)) nearestUnlock = unlock;
                                        var tmp = tr.find("td.item-nextunlock");
                                    }
                                }
                                if (nearestUnlock) {
                                    tmp.attr("data-sort-value", (100 / nearestUnlock.valueNeeded) * nearestUnlock.actualValue);
                                    tmp.attr("data-sort-value-v-percent", tmp.attr("data-sort-value"));
                                    tmp.attr("data-sort-value-v-points", nearestUnlock.valueNeeded - nearestUnlock.actualValue);
                                    tmp = tmp.find(".vehicleunlock");
                                    tmp.attr("data-tooltip", tmp.attr("data-tooltip") + "<br/>Remaining: " + (nearestUnlock.valueNeeded - nearestUnlock.actualValue));
                                }
                                if (highestUnlock) {
                                    var nextStar = highestUnlock.valueNeeded;
                                    while (nextStar < currentValue) nextStar += highestUnlock.valueNeeded;
                                    var tmp = tr.find("td.item-servicestars .service-star");
                                    tmp.attr("data-tooltip", tmp.attr("data-tooltip") + "<br/>Current: " + currentValue + "<br/>Next: " + nextStar + "<br/>" + BBLog.t("points.remaining") + ": " + (nextStar - currentValue));
                                    tr.find("td.item-servicestars").attr("data-sort-value-v-points", nextStar - currentValue);
                                }
                            }
                        }
                    }
                    var sorter = e.find("table").data("tablesorter");
                    for (var i in sorts) {
                        var s = sorts[i];
                        e.find(s.filter).css("position", "relative").on("mouseenter", { "s": s, "e": e }, function (ev) {
                            var th = $(this);
                            if ($("#bblog-altersort").length) $("#bblog-altersort").remove();
                            var l = $(this).offset().left + 1;
                            var t = $(this).offset().top + $(this).outerHeight() + 1;
                            $("body").append('<div id="bblog-altersort" style="left:' + l + 'px; top:' + t + 'px;"><div class="inner"></div></div>');
                            $("#bblog-altersort").on("mouseleave", function () {
                                $(this).remove();
                            });
                            var cont = $("#bblog-altersort").children();
                            for (var c in ev.data.s.arr) {
                                var entry = ev.data.s.arr[c];
                                var div = $("<div>").text(entry.title).on("click", {
                                    "c": c,
                                    "s": ev.data.s,
                                    "entry": entry,
                                    "e": ev.data.e
                                }, function (ev) {
                                    ev.data.e.find(ev.data.s.tdfilter).each(function () {
                                        $(this).attr("data-sort-value", $(this).attr(ev.data.entry.value));
                                        if (!parseFloat($(this).attr("data-sort-value"))) $(this).attr("data-sort-value", ev.data.entry.defaultVal);
                                    });
                                    ev.data.e.find("table").trigger("update");
                                    th.trigger("click");
                                    setTimeout(function () {
                                        if (!th.hasClass(ev.data.entry.sort)) th.trigger("click");
                                    }, 50);
                                    ev.data.s.active = ev.data.c;
                                    $("#bblog-altersort").remove();
                                });
                                if (c == ev.data.s.active) div.addClass("active").off("click");
                                cont.append(div);
                            }
                        });
                    }
                }
                break;
        }
        return this.callback();
    },

    /**
     * The cache getter/setter
     * Cache means only variable storage until the next page call
     *
     * @param key
     * @param value
     * @return
     */
    _cache: {},
    cache: function (key, value) {
        if (typeof value == "undefined") {
            return typeof BBLog._cache[key] != "undefined" ? BBLog._cache[key] : null;
        } else {
            BBLog._cache[key] = value;
        }
    },

    /**
     * Store and receive data in storage in correct type hints
     * Data is stored parmanently
     *
     * @param key string
     * @param value If given (not undefined) the setter is active
     * @return string
     */
    _storage: {},
    storage: function (key, value) {
        if (!BBLog.count(BBLog._storage)) BBLog._storage = {};
        if (typeof value != "undefined") {
            BBLog._storage[key] = value;
            window.postMessage({ action: "store", data: BBLog._storage }, "*");
            return null;
        }
        return (typeof BBLog._storage[key] != "undefined") ? BBLog._storage[key] : null;
    },

    /**
     * Get translation for a key
     * Fallback to english of key not set
     * If nothing exist, return the key
     *
     * @param key
     * @return string
     */
    t: function (key) {
        if (!BBLog.count(BBLogTranslations)) return key;
        var lang = BBLog.cache("language");
        if (typeof BBLogTranslations[lang] != "undefined" && typeof BBLogTranslations[lang][key] != "undefined") {
            return BBLogTranslations[lang][key];
        }
        if (typeof BBLogTranslations["en"][key] != "undefined") {
            return BBLogTranslations["en"][key];
        }
        return key;
    },

    /**
     * Get the bf3stats mapping name for a weapon
     *
     * @return string
     */
    getBf3StatsMapName: function (weapon) {
        if (weapon == "acb-90") weapon = "knife";
        for (var i in BBLogWeapons["bf3stats-mapping"]) {
            if (BBLogWeapons["bf3stats-mapping"][i] == weapon) {
                return i;
            }
        }
        return null;
    },

    /**
     * Get all configkey data for a key
     *
     * @param key
     * @return object
     */
    getConfigData: function (key) {
        for (var i in BBLog.configKeys) {
            if (!BBLog.configKeys[i]) continue;
            if (key == BBLog.configKeys[i].key) return BBLog.configKeys[i];
        }
        return null;
    },

    /**
     * Search for a given key value pair and return the result
     */
    searchInObject: function (object, key, value, returnIndex) {
        var index = null;
        key = typeof key == "undefined" ? null : key;
        value = typeof value == "undefined" ? null : value;
        // multidimensional search
        if (key !== null && value !== null) {
            for (var i in object) {
                if (!object[i]) continue;
                if (object[i][key] == value) {
                    index = i;
                    break;
                }
            }
            // search for key
        } else if (key !== null && value === null) {
            for (var i in object) {
                if (!object[i]) continue;
                if (i == key) {
                    index = i;
                    break;
                }
            }
            // search for value
        } else if (key === null && value !== null) {
            for (var i in object) {
                if (!object[i]) continue;
                if (object[i].toLowerCase() == value.toLowerCase()) {
                    index = i;
                    break;
                }
            }
        }
        if (index !== null && !returnIndex) return object[index];
        return index;
    },

    /**
     * Count entries of a object/array
     *
     * @param obj
     * @param bool ignoreNull
     * @return int
     */
    count: function (obj, ignoreNull) {
        if (!obj) return 0;
        var c = 0;
        for (var _i in obj) {
            if (ignoreNull) {
                if (obj[_i] === null || obj[_i] === undefined) continue;
                c++;
            } else {
                c++;
            }
        }
        return c;
    },

    /**
     * Get selected text of the document or given element
     *
     * @param element el If set the selection must be match with this el
     * @return string or null
     */
    getSelection: function (el) {
        try {
            var sel = window.getSelection();
            var range = sel.getRangeAt(0);
            var parent = range.commonAncestorContainer.nodeName.toLowerCase() == "#text" ? range.commonAncestorContainer.parentElement : range.commonAncestorContainer;
            var node = sel.anchorNode.parentNode;
            var t = '';
            if (typeof el == "undefined" || $(el).get(0) === $(parent).get(0) || $(el).has(parent).length) {
                t = document.getSelection().toString();
            }
            return t == '' ? null : t;
        } catch (e) {
            return null;
        }

    },

    /**
     * Check element if its processed for given action
     *
     * @return int or null
     */
    elementCheck: function (e, action) {
        var ret = e.data(action);
        e.data(action, 1);
        return ret;
    },

    plotter: {
        /**
         * Init
         */
        init: function (weapon) {
            var el = $("#bblog-plot");
            var data = typeof BBLogWeapons[weapon] != "undefined" ? BBLogWeapons[weapon] : null;
            if (data && typeof data.lastupdate != "undefined") {
                var d = [data.lastupdate.substr(8, 2), data.lastupdate.substr(5, 2), data.lastupdate.substr(0, 4)];
                el.find(".update").text("Updated @ " + d.join("."));
            }
            var colors = [[255, 136, 0], [144, 255, 0], [0, 165, 255], [182, 0, 255]];
            el.data("colors", colors);
            el.find(".bullets div").each(function (index) {
                $(this).find("span").css("background-color", "rgb(" + colors[index].join(",") + ")");
                $(this).append((index + 1) + " Bullet");
            });
            el.find("select").on("change", function () {
                var options = el.data("options");
                if ($(this).attr("class").match(/attachment/)) {
                    if (typeof options["attachment"] != "object") options["attachment"] = {};
                    options["attachment"][$(this).attr("data-slot")] = $(this).val();
                } else {
                    options[$(this).attr("class")] = $(this).val();
                }
                BBLog.plotter.draw(el.data("weapon"), options);
            });
        },

        /**
         * Get html for the box
         *
         * @returns {String}
         */
        getBoxHtml: function (weapon) {
            var attachments = {
                0: BBLog.t("weapon.slot"),
                "heavybarrel": null,
                "soundsuppressor": null,
                "flashsuppressor": null,
                "targetpointer": null,
                "foregrip": null,
                "bipod": null,
            };
            // determine localized wordings
            $("div.profile-stats-unlock-progression-kit-item img").each(function () {
                var m = $(this).attr("src").match(/79x43\/(.*?)\.png/);
                if (!m) return true;
                var name = m[1];
                if (typeof attachments[name] != "undefined") {
                    var title = $(this).closest("[data-tooltip]").attr("data-tooltip").match(/(.*?)</)[1];
                    attachments[name] = title;
                }
            });
            switch (weapon) {
                case "g17c":
                    attachments["targetpointer"] = "Laserpointer";
                    attachments["soundsuppressor"] = "Suppressor";
                    break;
                case "g18":
                case "m9":
                case "m1911":
                case "mp443":
                    attachments["soundsuppressor"] = "Suppressor";
                    break;
                case "m27-iar":
                case "m249":
                case "m240b":
                case "m60e4":
                case "pkp-pecheneg":
                case "rpk-74m":
                case "type-88-lmg":
                case "lsat":
                case "mg36":
                    attachments["bipod"] = "Bipod";
                    break;
                case "l96":
                    attachments["flashsuppressor"] = "Flashsuppressor";
                    break;
            }
            var attachmentOptions = "";
            for (var i in attachments) {
                if (attachments[i] == null) continue;
                attachmentOptions += '<option value="' + i + '">' + attachments[i] + '</option>';
            }
            return '<div id="bblog-plot">\
            <div class="update"></div>\
            <div class="overlay">\
            <div class="bullets">\
            <div><span>&nbsp;</span></div>\
            <div><span>&nbsp;</span></div>\
            <div><span>&nbsp;</span></div>\
            <div><span>&nbsp;</span></div>\
            </div>\
            <div class="chooser">\
            <div>\
            <select class="attachment" data-tooltip="' + BBLog.t("weapon.slot.info") + '" data-slot="1">\
            ' + attachmentOptions.replace(/{nr}/, 1) + '\
            </select>\
            </div>\
            <div>\
            <select class="attachment" data-tooltip="' + BBLog.t("weapon.slot.info") + '" data-slot="2">\
            ' + attachmentOptions.replace(/{nr}/, 2) + '\
            </select>\
            </div>\
            <div>\
            <select class="aim">\
            <option value="ads">' + BBLog.t("weapon.ads") + '</option>\
            <option value="hip">' + BBLog.t("weapon.hip") + '</option>\
            </select>\
            </div>\
            <div>\
            <select class="position">\
            <option value="stand">' + BBLog.t("weapon.stand") + '</option>\
            <option value="crouch">' + BBLog.t("weapon.crouch") + '</option>\
            <option value="prone">' + BBLog.t("weapon.prone") + '</option>\
            </select>\
            </div>\
            <div>\
            <select class="action">\
            <option value="base">' + BBLog.t("weapon.base") + '</option>\
            <option value="move">' + BBLog.t("weapon.move") + '</option>\
            </select>\
            </div>\
            </div>\
            </div>\
            </div>';
        },

        /**
         * Re-Draw the plot
         */
        draw: function (weapon, options) {
            var symthicWeapon = "";
            for (var i in BBLogWeapons["symthic-mapping"]) {
                if (weapon == BBLogWeapons["symthic-mapping"][i]) {
                    symthicWeapon = i;
                    break;
                }
            }
            if (symthicWeapon == "") symthicWeapon = weapon;
            var el = $("#bblog-plot");
            el.data("weapon", weapon);
            el.data("options", options);
            var colors = el.data("colors");
            var data = BBLogWeapons[weapon];
            var circleRadius = 4;
            var bursts = 300;
            var distanceMultiplier = 160;
            var spreadMulti = distanceMultiplier * 0.1;
            var recoilMulti = distanceMultiplier * 0.3;
            var startX = 158;
            var startY = 174;
            var spreadData = data["spread"];
            var bulletsPerBurst = 4;
            el.find("svg").remove();
            var getAttVal = function (key, slot) {
                if (!options.attachment) return false;
                if (typeof BBLogWeapons["attachments"] == "undefined") return false;
                slot = typeof slot == "undefined" ? 1 : slot;
                var att = options.attachment[slot];
                if (typeof BBLogWeapons["attachments"][att] == "undefined") return false;
                if (typeof BBLogWeapons["attachments"][att][symthicWeapon] != "undefined" && typeof BBLogWeapons["attachments"][att][symthicWeapon][key] != "undefined") {
                    return BBLogWeapons["attachments"][att][symthicWeapon][key];
                }
                return false;
            };
            var dimension = [320, 260];
            var weapCont = $("#bblog-weapon-container");

            var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("width", dimension[0]);
            svg.setAttribute("height", dimension[1]);

            var minSpread, minSpreadBase, maxSpread, maxSpreadBase,
                spreadInc, spreadIncBase, spreadDec, spreadDecBase,
                recoilUp, recoilUpBase, recoilLeft, recoilLeftBase, recoilRight, recoilRightBase;

            minSpread = minSpreadBase = spreadData[options.position + "-min-" + options.aim + "-" + options.action];
            // respect spread min for aim and attachment

            if (getAttVal(options.aim + "spread", 1)) minSpread = minSpreadBase = minSpread * getAttVal(options.aim + "spread", 1);
            if (getAttVal(options.aim + "spread", 2)) minSpread = minSpreadBase = minSpread * getAttVal(options.aim + "spread", 2);

            minSpread = minSpread < 0 ? 0 : minSpread;
            minSpread = parseFloat(minSpread.toPrecision(2));

            maxSpread = maxSpreadBase = 99;
            maxSpread = parseFloat(maxSpread.toPrecision(2));

            spreadInc = spreadIncBase = spreadData["inc"];
            // respect spread increase for shot - aim
            if (getAttVal("spreadinc", 1)) spreadInc = spreadIncBase = spreadInc * getAttVal("spreadinc", 1);
            if (getAttVal("spreadinc", 2)) spreadInc = spreadIncBase = spreadInc * getAttVal("spreadinc", 2);

            spreadInc = spreadInc < 0 ? 0 : spreadInc;
            spreadInc = parseFloat(spreadInc.toPrecision(2));

            spreadDec = spreadDecBase = spreadData["dec"];
            // respect spread decrease for shot - aim
            if (getAttVal("spreaddec", 1)) spreadDec = spreadDecBase = spreadDec * getAttVal("spreaddec", 1);
            if (getAttVal("spreaddec", 2)) spreadDec = spreadDecBase = spreadDec * getAttVal("spreaddec", 2);

            var rps = data["rpm"] / 60;
            var spreadDecBullet = spreadDec / rps;
            spreadDec = spreadDec < 0 ? 0 : spreadDec;
            spreadDec = parseFloat(spreadDec.toPrecision(2));

            recoilUp = recoilUpBase = data["recoil"]["u"];
            // respect recoil for attachment
            if (getAttVal("recoilup", 1)) recoilUp = recoilUpBase = recoilUp * getAttVal("recoilup", 1);
            if (getAttVal("recoilup", 2)) recoilUp = recoilUpBase = recoilUp * getAttVal("recoilup", 2);

            recoilUp = recoilUp < 0 ? 0 : recoilUp;
            recoilUp = parseFloat(recoilUp.toPrecision(2));

            recoilLeft = recoilLeftBase = data["recoil"]["l"];
            recoilRight = recoilRightBase = data["recoil"]["r"];
            // respect recoil for attachment
            if (getAttVal("recoilhorz", 1)) {
                recoilLeft = recoilLeftBase = recoilLeft * getAttVal("recoilhorz", 1);
                recoilRight = recoilRightBase = recoilRight * getAttVal("recoilhorz", 1);
            }
            if (getAttVal("recoilhorz", 2)) {
                recoilLeft = recoilLeftBase = recoilLeft * getAttVal("recoilhorz", 2);
                recoilRight = recoilRightBase = recoilRight * getAttVal("recoilhorz", 2);
            }
            recoilLeft = parseFloat(recoilLeft.toPrecision(2));
            recoilRight = parseFloat(recoilRight.toPrecision(2));

            weapCont.find(".spread-data-min").text(minSpread);
            weapCont.find(".spread-data-max").text(maxSpread);
            weapCont.find(".spread-data-inc").text(spreadInc);
            weapCont.find(".spread-data-dec").text(spreadDec);
            weapCont.find(".recoil-data-u").text(recoilUp);
            weapCont.find(".recoil-data-l").text(recoilLeft);
            weapCont.find(".recoil-data-r").text(recoilRight);

            var burst = function () {
                var x = startX;
                var y = startY;
                var spread = minSpread;
                x += BBLog.plotter.floatRandMax(0, spread) * spreadMulti * BBLog.plotter.getShuffleMultiplier();
                y += BBLog.plotter.floatRandMax(0, spread) * spreadMulti * BBLog.plotter.getShuffleMultiplier();
                for (var bullet = 1; bullet <= bulletsPerBurst; bullet++) {
                    // add shuffle spread
                    x += BBLog.plotter.floatRandMax(0, spread) * spreadMulti * BBLog.plotter.getShuffleMultiplier();
                    y += BBLog.plotter.floatRandMax(0, spread) * spreadMulti * BBLog.plotter.getShuffleMultiplier();

                    if (x < 0 || y < 0 || x > dimension[0] || y > dimension[1]) return false;

                    // draw circle
                    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                    circle.setAttribute("cx", x);
                    circle.setAttribute("cy", y);
                    circle.setAttribute("r", circleRadius);
                    circle.setAttribute("style", 'fill:rgb(' + colors[bullet - 1].join(",") + ')');
                    svg.appendChild(circle);

                    // recoil add
                    var bulletRecoilMulti = bullet === 1 ? data["spread"]["first"] : 1;
                    if (BBLog.plotter.rand(0, 1)) {
                        x -= BBLog.plotter.floatRandMax(0, recoilLeft) * recoilMulti * bulletRecoilMulti;
                    } else {
                        x += BBLog.plotter.floatRandMax(0, recoilRight) * recoilMulti * bulletRecoilMulti;
                    }

                    y -= recoilUp * recoilMulti * bulletRecoilMulti;

                    spread += spreadInc;
                    spread -= spreadDecBullet;
                    // respect spread max for aim and attachment
                    spread = Math.min(spread, maxSpread);
                }
            };
            for (var i = 0; i <= bursts; i++) burst();
            document.getElementById("bblog-plot").appendChild(svg);
        },
        /**
         * Helper func
         */
        floatRandMax: function (min, max) {
            var multi = 10000000;
            return BBLog.plotter.rand(min, max * multi) / multi;
        },
        /**
         * Helper func
         */
        getShuffleMultiplier: function () {
            if (BBLog.plotter.rand(0, 1)) return 1;
            return -1;
        },
        /**
         * Helper func
         */
        rand: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    },

    /**
     * Get clean uri without parameters and anchors
     *
     * @returns string
     */
    getCleanUrl: function () {
        return window.location.href.replace(/(\#|\?).*$/ig, "");
    },

    /**
     * Get the real textarea height in pixels
     */
    getTextareaHeight: function (textarea) {
        textarea = $(textarea);
        var cssCopy = ["width", "padding-left", "padding-top", "padding-bottom", "padding-right", "font-size", "font-family", "line-height", "font-variant", "font-weight", "font-style", "display"];
        var el = $('<div>');
        for (var i in cssCopy) el.css(cssCopy[i], textarea.css(cssCopy[i]));
        el.html(textarea.val().replace(/\n/g, "<br/>"));
        el = el.appendTo($("body"));
        var h = el.height();
        el.remove();
        return h;
    },

    /**
     * Play a audio file
     *
     * @return audioElement
     */
    playAudio: function (file, volume) {
        var slugFile = file.replace(/[^0-9a-z]/ig, "-");
        var audioElement = $("#bblog-audio-" + slugFile);
        if (!audioElement.length) {
            $("body").append('<audio id="bblog-audio-' + slugFile + '"><source type="audio/ogg" src="' + BBLog.serviceUrl + '/ogg/' + file + '"></source></audio>');
        }
        audioElement = $("#bblog-audio-" + slugFile).get(0);
        audioElement.volume = volume / 100;
        audioElement.play();
        return audioElement;
    },

    /**
     * Check if the custom contextmenu is allowed now
     *
     * @return bool
     */
    customContextable: function () {
        if (!BBLog.storage("general.delayed.contextmenu")) return true;
        var t = new Date().getTime();
        var t2 = BBLog.cache("mousedown.time.3");
        if (t2 <= (t - 250)) return true;
        return false;
    },

    /**
     * Combine multiple arrays into one flat array
     *
     * @param array [arr1, arr2, ...]
     * @return array
     */
    combineArray: function (multiArr) {
        var newArr = [];
        for (var i in multiArr) {
            if (!multiArr[i]) continue;
            for (var j in multiArr[i]) {
                if (!multiArr[i][j]) continue;
                newArr.push(multiArr[i][j]);
            }
        }
        return newArr;
    },

    /**
     * run javascript code
     */
    runCode: function (code) {
        var script = $('<script type="text/javascript">')[0];
        script.innerHTML = code;
        $("head").append(script);
    },

    /**
     * Show a popup
     *
     * @param {String} id
     * @param {String} title
     * @param {String} text
     * @param {String} footer
     */
    popup: function (id, title, text, footer) {
        BBLog.closeAllPopups();
        id = "popup-" + id;
        $("#dialog-container").show();
        if (!$("#" + id).length) {
            if (!$("#dialog-container .overlay-container").length) $("#dialog-container").prepend('<div class="overlay-container">');			
            $("#dialog-container").show();
            $("#dialog-container").append('<div id="' + id + '" class="bblog-popup dialog"><header><a class="icon-dialog-close" href="#"></a><div id="expandinfo" style="cursor: pointer;" data-tooltip="Click to Expand/Reset!"><h3></h3></div></header><section class="dialog-body"></section><footer></footer></div>');
            $("#dialog-container .overlay-container").html($('<div class="overlay show" style="display:block;">').one("click", BBLog.closeAllPopups));
            $("#" + id).find(".icon-dialog-close").on("click", function (ev) {
                BBLog.closeAllPopups();
                ev.stopPropagation();
                ev.preventDefault();
            })
			$("#expandinfo").on("click", function (ev) {
				var mahc = $(".dialog-body").height();
				if (mahc > 558) {
					$("#" + id).css("height", "60%");
					$("#" + id).css("top", "20%");
					$(".dialog-body").css("height", "558px");
				} else {	
					$("#" + id).css("height", "95%");
					$("#" + id).css("top", "1%");
					$(".dialog-body").css("height", "872px");
				}
			})	
        }
        $("#" + id + " header h3").text(title);
        $("#" + id + " section").html(text);
        if (footer) {
            $("#" + id + " footer").html(footer);
        } else {
            $("#" + id + " footer").remove();
        }
        $("#" + id).show();
        base.agoIntervalHandler();

        $(window).on("resize.bblog-popup", function () {
            $(".bblog-popup .dialog-body").each(function () {
                $(this).height($(this).closest(".bblog-popup").height() - $(this).closest(".bblog-popup").find("header").height() - 16);
            });
        }).trigger("resize.bblog-popup");
    },

    /**
     * Close the popup
     */
    closeAllPopups: function () {
        $("#dialog-container").children("*").remove();
        $(window).off("resize.bblog-popup");
    },

    /**
     * Debug helper
     */
    debug: {
        elementsWithData: function (e, recursive) {
            var f = function () {
                if (BBLog.count($(this).data())) {
                    console.log($(this), $(this).data());
                }
                if (recursive) {
                    $(this).children().each(f);
                }
            };
            $(e).children().each(f);
        },

        /**
         * Clear the whole bblog storage
         */
        clearStorage: function () {
            BBLog._storage = {};
            BBLog.storage("fresh", 1);
        },

        /**
         * Clear the api cache
         */
        clearAPICache: function () {
            BBLog.storage("last.api.call." + BBLog.version, 0);
        },
    },
	
	/**
	* New TTK
	*/
	newcaclttk: function(pdmg, wdmg, dist, weapon){
						var rof = weapon.rateOfFire;
						var bulletVelocity = weapon.InitialSpeed;
						var numShots = 1;
						var msPerShot = 60000 / (rof);
						var damageAtDist = 0;
						var msToTarget = 0;
						var bulletsToKill = 0;
						var bulletFlightSeconds = 0.0;																							
						damageAtDist = wdmg * numShots;
						bulletsToKill = Math.floor(pdmg / (damageAtDist * 1 + 0.00001));						
						bulletFlightSeconds += dist / bulletVelocity;
						msToTarget = bulletFlightSeconds * 1000;
						var timetokill = Math.floor((bulletsToKill * msPerShot + msToTarget));
						var bulletsToKillmax = bulletsToKill;
						var bulletrofmin = 2;
						var showrpm = 0;
						var uprofto = 900;								
						if (rof >= 570 && rof < 590) { bulletrofmin = 7; uprofto = 590; showrpm = 1;}
						if (rof >= 600 && rof < 750) { bulletrofmin = 2; uprofto = 900; showrpm = 1;}
						if (rof >= 750 && rof < 800) { bulletrofmin = 3; uprofto = 900; showrpm = 1;}
						if (rof >= 800 && rof < 900) { bulletrofmin = 5; uprofto = 900; showrpm = 1;}
						if (rof >= 950) { bulletrofmin = 2; uprofto = 1800; showrpm = 1;}
						bulletsToKillmax -= bulletrofmin;								
						var newbleftcount = 0;
						if (bulletsToKillmax > 0) { newbleftcount = bulletsToKillmax; } else { bulletrofmin = bulletsToKill;}
						newbleftcount = (newbleftcount < 1) ? 0 : newbleftcount;								
						var msperbulleta = (60000/uprofto)*bulletrofmin;
						var msperbulletb = (60000/rof)*newbleftcount;
						var delay1stbullet = 0;
						var ttkrpmperbullet = timetokill;
						if (showrpm == 1) { 
							if (bulletsToKill > 1) delay1stbullet = Math.ceil((60000/uprofto)/(uprofto/60));									
							ttkrpmperbullet = Math.floor((msperbulleta+msperbulletb) + msToTarget + delay1stbullet);
						}
						return [(ttkrpmperbullet).toFixed(0), (timetokill).toFixed(0)];
	},
	/**
	* Damage at dist
	*/
	getdmgdist:function(dmgMax, dmgMin, dmgFallStart, dmgFallEnd, distance){
              var dist = distance;
              var calculatedDistDmg = 0;
              if (dist <= dmgFallStart) { 
                    calculatedDistDmg = dmgMax;
              } else if (dist >= dmgFallEnd) {
                    calculatedDistDmg = dmgMin;
              } else {
                    var looseDmgMax = dmgMax - dmgMin;
                    var percLoose = (100 / dmgFallEnd) * dist;
					calculatedDistDmg = dmgMax - (looseDmgMax / 100 * percLoose);
              }
			  return  parseFloat(calculatedDistDmg).toFixed(1);
	},		  
	/**
	* google chart
	*/
	getchartg:function(weapon, what, chartcor, plymaxdmg, plymindmg){
		let Columns, Rows, Colorsc;
		let loadout = 0;
		if (what == "loadoutnormal") {
			what = "normal";
			loadout = 1;			
		}	
		if (what == "loadoutshotgun") {
			what = "shotgun";
			loadout = 1;			
		}	
		if (what == "normal") {
			var hcdamagestart = +parseFloat((((weapon.dmgMax*weapon.ShotsPerShell)*60) / 100) + (weapon.dmgMax*weapon.ShotsPerShell)).toFixed(2);
			var hcdamageend = parseFloat((((weapon.dmgMin*weapon.ShotsPerShell)*60) /100) + (weapon.dmgMin*weapon.ShotsPerShell)).toFixed(2); 
			var wmaxdmg = weapon.dmgMax*weapon.ShotsPerShell;
			var wmindmg = weapon.dmgMin*weapon.ShotsPerShell;
			var virhighdmg = plymaxdmg*0.95;	
			var plyavgvirdmg = +(((wmaxdmg * mhsrkr)*weapon.hsmultiple) + (virhighdmg * (1-mhsrkr))).toFixed(2);		
			Colorsc = `colors: ['#f7ff09', '#2C63B3', '`+chartcor+`', '#f26f0a', '#f20ae7']`; //'#2C63B3' base #BFC9AF	max: #f20ae7		
			
			var mycolum = ` data.addColumn('number', 'Player DMG');`;	
			if (loadout == 0) {
				var LightenDarkenColor = (col,amt) => '#'+col.slice(1).match(/../g).map(x=>(x=+`0x${x}`+amt,x<0?0:(x>255?255:x)).toString(16).padStart(2,0)).join``;
				var baseflat = LightenDarkenColor(chartcor,40);
				Colorsc = `colors: ['#f7ff09', '#2C63B3', '`+baseflat+`', '`+chartcor+`', '#f20ae7', '#0ef6d4']`;	// '#f26f0a' 			
				Columns = `
				data.addColumn('number', 'Base');
				data.addColumn('number', 'HC');
				`;
				mycolum = ` data.addColumn('number', 'Player');				
				`;	
				Columns += mycolum;			
				Rows = `
				[
				[0, `+wmaxdmg+`, `+hcdamagestart+`, `+plymaxdmg+`], [`+weapon.dmgFallStart+`, `+wmaxdmg+`, `+hcdamagestart+`, `+plymaxdmg+`], 
				[`+weapon.dmgFallEnd+`, `+wmindmg+`, `+hcdamageend+`, `+plymaxdmg+`], [`+(weapon.dmgFallEnd+10)+`, `+wmindmg+`, `+hcdamageend+`, `+plymaxdmg+`]			
				]
				`;				
			} else {
				Columns = `
				data.addColumn('number', 'Default DMG');
				data.addColumn('number', 'Hardcore DMG');
				`;
				mycolum = ` data.addColumn('number', 'Headshot DMG');`;
				Columns += mycolum;
				plymaxdmg = weapon.dmgMax*weapon.hsmultiple;
				plymindmg = weapon.dmgMin*weapon.hsmultiple;
				if (weapon["slug"] == "shorty-12g") {
						Colorsc = `colors: ['#2C63B3', '`+chartcor+`', '#BFC9AF']`;
						mycolum = ` data.addColumn('number', 'Pellet DMG');`;
						hcdamagestart = (weapon.dmgMax)*(weapon.ShotsPerShell/1.4);
						hcdamageend = (weapon.dmgMin)*(weapon.ShotsPerShell/6);	
						Columns = `
								data.addColumn('number', 'Pellets Max. DMG');
								data.addColumn('number', 'Avg. Pellets');
								data.addColumn('number', '1 Pellet DMG');
								`;
				}
			Rows = `
			[
				[0, `+wmaxdmg+`, `+hcdamagestart+`, `+plymaxdmg+`], [`+weapon.dmgFallStart+`, `+wmaxdmg+`, `+hcdamagestart+`, `+plymaxdmg+`], 
				[`+weapon.dmgFallEnd+`, `+wmindmg+`, `+hcdamageend+`, `+plymindmg+`], [`+(weapon.dmgFallEnd+10)+`, `+wmindmg+`, `+hcdamageend+`, `+plymindmg+`]			
			]
			`;
			
			}												
			if (weapon.kills > 0 && weapon.headshots > 0 && loadout == 0) {
				Colorsc = `colors: ['#f7ff09', '#2C63B3', '`+chartcor+`', '#0ef6d4', '#f20ae7']`;
				
				var mhsrkr = (((100 / weapon.kills) * weapon.headshots))/100; // 54% hs go over hc
				var maxvirtualdmg = +(((wmaxdmg*mhsrkr)*weapon.hsmultiple) + (wmaxdmg * (1-mhsrkr))).toFixed(2); 
				var percalc = Math.floor((wmindmg/wmaxdmg)*100);
				var minvirtualdmg = parseFloat((maxvirtualdmg*percalc)/100).toFixed(2);				
				
				var plyhcavgvirdmg = +(((hcdamagestart*mhsrkr)*weapon.hsmultiple) + (wmaxdmg * (1-mhsrkr))).toFixed(2);											
				var medhcbase = +(hcdamagestart+wmaxdmg+maxvirtualdmg+plyhcavgvirdmg)/4; // Mean value											
				var virhcbase = +(((medhcbase*mhsrkr)*weapon.hsmultiple) + (medhcbase * (1-mhsrkr))).toFixed(2);	
				
				Columns += `data.addColumn('number', 'Max Avg.'); data.addColumn('number', 'Max Base');`;

			Rows = `
			[
				[0, `+wmaxdmg+`, `+hcdamagestart+`, `+plymaxdmg+`, `+virhcbase+`, `+maxvirtualdmg+`], [`+weapon.dmgFallStart+`, `+wmaxdmg+`, `+hcdamagestart+`, `+plymaxdmg+`, `+virhcbase+`, `+maxvirtualdmg+`], 
				[`+weapon.dmgFallEnd+`, `+wmindmg+`, `+hcdamageend+`, `+plymaxdmg+`, `+virhcbase+`, `+minvirtualdmg+`], [`+(weapon.dmgFallEnd+10)+`, `+wmindmg+`, `+hcdamageend+`, `+plymaxdmg+`, `+virhcbase+`, `+minvirtualdmg+`]			
			]
			`;
			}		

		}
		if (what == "shotgun") {
			var hcdamagestart = parseFloat((((weapon.dmgMax*weapon.ShotsPerShell)*60) / 100) + (weapon.dmgMax*weapon.ShotsPerShell)).toFixed(2);
			var hcdamageend = parseFloat((((weapon.dmgMin*weapon.ShotsPerShell)*60) /100) + (weapon.dmgMin*weapon.ShotsPerShell)).toFixed(2); 
			var wmaxdmg = weapon.dmgMax*weapon.ShotsPerShell;
			var wmindmg = weapon.dmgMin*weapon.ShotsPerShell;
			Colorsc = `colors: ['`+chartcor+`', '#BFC9AF', '#2C63B3', '#92DABA', '#9AADCB']`;
			var pormax = "Player";
			var ShotsPerShell = weapon.ShotsPerShell;
			var avgfallstart = 0;
			var avgfallend = 0;
			if (loadout == 1) {
				pormax = "Pellets Avg.";
				ShotsPerShell = 1;
				
				var avg_wmaxdmg = (weapon.dmgMax)*(weapon.ShotsPerShell/1.34);
				var avg_wmindmg = (weapon.dmgMin)*(weapon.ShotsPerShell/6);
				plymaxdmg = avg_wmaxdmg;
				plymindmg = avg_wmindmg;
				wmaxdmg = weapon.dmgMax;
				wmindmg = weapon.dmgMin;
				avgfallstart = 12;
				avgfallend = 20;
			}	
			Columns = `
			data.addColumn('number', '`+pormax+`');
			data.addColumn('number', 'Buckshot');
			data.addColumn('number', 'Dart');			
			data.addColumn('number', 'Slug');
			data.addColumn('number', 'Frag');
			`;
			 var dmgFallStart = weapon.dmgFallStart;
			 var dmgFallEnd = weapon.dmgFallEnd;
			 var dmgMaxFrag = weapon.dmgMaxFrag+25;
			 var dmgMinFrag = weapon.dmgMinFrag+25;
			 var dmgMaxSlug = weapon.dmgMaxSlug;
			 var dmgMinSlug = weapon.dmgMinSlug;
			 var dmgMaxFlechette = (weapon.dmgMaxFlechette*ShotsPerShell).toFixed(2);
			 var dmgMinFlechette = (weapon.dmgMinFlechette*ShotsPerShell).toFixed(2);
			 var dmgFallStartSlug = weapon.dmgFallStartSlug;
			 var dmgFallEndSlug = weapon.dmgFallEndSlug;
			 var dmgFallStartFrag = weapon.dmgFallStartFrag;
			 var dmgFallEndFrag = weapon.dmgFallEndFrag;
			 var dmgFallStartSlug = weapon.dmgFallStartSlug;
			 var plymaxdmg_slug = BBLog.getdmgdist(plymaxdmg, plymindmg, dmgFallStart-avgfallstart, dmgFallEnd+avgfallend, dmgFallStartSlug);
			 var wmaxdmg_slug = BBLog.getdmgdist(wmaxdmg, wmindmg, dmgFallStart, dmgFallEnd, dmgFallStartSlug);
			 var dmgMaxFlechette_slug = BBLog.getdmgdist(dmgMaxFlechette, dmgMinFlechette, dmgFallStart, dmgFallEnd, dmgFallStartSlug);
			 var dmgMaxSlug_slug = BBLog.getdmgdist(dmgMaxSlug, dmgMinSlug, dmgFallStartSlug, dmgFallEndSlug, dmgFallStartSlug);
			 var dmgMaxFrag_slug = BBLog.getdmgdist(dmgMaxFrag, dmgMinFrag, dmgFallStartFrag, dmgFallEndFrag, dmgFallStartSlug);			 
			 var plymaxdmg_Start = BBLog.getdmgdist(plymaxdmg, plymindmg, dmgFallStart-avgfallstart, dmgFallEnd+avgfallend, dmgFallStart); 
			 var wmaxdmg_Start = BBLog.getdmgdist(wmaxdmg, wmindmg, dmgFallStart, dmgFallEnd, dmgFallStart);
			 var dmgMaxFlechette_Start = BBLog.getdmgdist(dmgMaxFlechette, dmgMinFlechette, dmgFallStart, dmgFallEnd, dmgFallStart);
			 var dmgMaxSlug_Start = BBLog.getdmgdist(dmgMaxSlug, dmgMinSlug, dmgFallStartSlug, dmgFallEndSlug, dmgFallStart);
			 var dmgMaxFrag_Start = BBLog.getdmgdist(dmgMaxFrag, dmgMinFrag, dmgFallStartFrag, dmgFallEndFrag, dmgFallStart);			 
			 var plymaxdmg_frag = BBLog.getdmgdist(plymaxdmg, plymindmg, dmgFallStart-avgfallstart, dmgFallEnd+avgfallend, dmgFallStartFrag); 
			 var wmaxdmg_frag = BBLog.getdmgdist(wmaxdmg, wmindmg, dmgFallStart, dmgFallEnd, dmgFallStartFrag);
			 var dmgMaxFlechette_frag = BBLog.getdmgdist(dmgMaxFlechette, dmgMinFlechette, dmgFallStart, dmgFallEnd, dmgFallStartFrag);
			 var dmgMaxSlug_frag = BBLog.getdmgdist(dmgMaxSlug, dmgMinSlug, dmgFallStartSlug, dmgFallEndSlug, dmgFallStartFrag);
			 var dmgMaxFrag_frag = BBLog.getdmgdist(dmgMaxFrag, dmgMinFrag, dmgFallStartFrag, dmgFallEndFrag, dmgFallStartFrag);			 
			 var plymaxdmg_end = BBLog.getdmgdist(plymaxdmg, plymindmg, dmgFallStart-avgfallstart, dmgFallEnd+avgfallend, dmgFallEnd); 
			 var wmaxdmg_end = BBLog.getdmgdist(wmaxdmg, wmindmg, dmgFallStart, dmgFallEnd, dmgFallEnd);
			 var dmgMaxFlechette_end = BBLog.getdmgdist(dmgMaxFlechette, dmgMinFlechette, dmgFallStart, dmgFallEnd, dmgFallEnd);
			 var dmgMaxSlug_end = BBLog.getdmgdist(dmgMaxSlug, dmgMinSlug, dmgFallStartSlug, dmgFallEndSlug, dmgFallEnd);
			 var dmgMaxFrag_end = BBLog.getdmgdist(dmgMaxFrag, dmgMinFrag, dmgFallStartFrag, dmgFallEndFrag, dmgFallEnd);			 
			 var plymaxdmg_endf = BBLog.getdmgdist(plymaxdmg, plymindmg, dmgFallStart-avgfallstart, dmgFallEnd+avgfallend, dmgFallEndFrag); 
			 var wmaxdmg_endf = BBLog.getdmgdist(wmaxdmg, wmindmg, dmgFallStart, dmgFallEnd, dmgFallEndFrag);
			 var dmgMaxFlechette_endf = BBLog.getdmgdist(dmgMaxFlechette, dmgMinFlechette, dmgFallStart, dmgFallEnd, dmgFallEndFrag);
			 var dmgMaxSlug_endf = BBLog.getdmgdist(dmgMaxSlug, dmgMinSlug, dmgFallStartSlug, dmgFallEndSlug, dmgFallEndFrag);
			 var dmgMaxFrag_endf = BBLog.getdmgdist(dmgMaxFrag, dmgMinFrag, dmgFallStartFrag, dmgFallEndFrag, dmgFallEndFrag);			 
			 var plymaxdmg_ends = plymindmg; 
			 var wmaxdmg_ends = wmindmg;
			 var dmgMaxFlechette_ends = dmgMinFlechette;
			 var dmgMaxSlug_ends = dmgMinSlug;
			 var dmgMaxFrag_ends = dmgMinFrag;
			 
			Rows = `
			[
				[0, `+plymaxdmg+`, `+wmaxdmg+`, `+dmgMaxFlechette+`, `+dmgMaxSlug+`, `+dmgMaxFrag+`],
			 [`+dmgFallStartSlug+`, `+plymaxdmg_slug+`, `+wmaxdmg_slug+`, `+dmgMaxFlechette_slug+`, `+dmgMaxSlug_slug+`, `+dmgMaxFrag_slug+`],
			 [`+dmgFallStart+`, `+plymaxdmg_Start+`, `+wmaxdmg_Start+`, `+dmgMaxFlechette_Start+`, `+dmgMaxSlug_Start+`, `+dmgMaxFrag_Start+`],
			 [`+dmgFallStartFrag+`, `+plymaxdmg_frag+`, `+wmaxdmg_frag+`, `+dmgMaxFlechette_frag+`,`+ dmgMaxSlug_frag+`, `+dmgMaxFrag_frag+`],			 
			 [`+dmgFallEnd+`, `+plymaxdmg_end+`, `+wmaxdmg_end+`, `+dmgMaxFlechette_end+`, `+dmgMaxSlug_end+`, `+dmgMaxFrag_end+`],
			 [`+dmgFallEndFrag+`, `+plymaxdmg_endf+`, `+wmaxdmg_endf+`, `+dmgMaxFlechette_endf+`, `+dmgMaxSlug_endf+`, `+dmgMaxFrag_endf+`],
			 [`+dmgFallEndSlug+`, `+plymaxdmg_ends+`, `+wmaxdmg_ends+`, `+dmgMaxFlechette_ends+`, `+dmgMaxSlug_ends+`, `+dmgMaxFrag_ends+`],
			 [`+(dmgFallEndSlug+10)+`, `+plymaxdmg_ends+`, `+wmaxdmg_ends+`, `+dmgMaxFlechette_ends+`, `+dmgMaxSlug_ends+`, `+dmgMaxFrag_ends+`]
			]
			`;			
		}
		
var jshtml = `
<script type="text/javascript">
 google.charts.load('current', {packages: ['corechart', 'line']});
 google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
	  `+Columns+`

	  data.addRows(`+Rows+`);

      var options = {
        hAxis: {
          title: 'DISTANCE',
          textStyle: {color: '#9a9a9a', fontSize: 10},
          titleTextStyle: { color: '#EA8036' },
          gridlines: {color: '#9a9a9a', minSpacing: 40}
        },
        vAxis: {
          title: 'DAMAGE',
          textStyle: {color: '#9a9a9a', fontSize: 10},
          titleTextStyle: { color: '#EA8036' },
          gridlines: {color: '#9a9a9a', minSpacing: 20}
        },
        series: {          
          0: { lineWidth: 2 },
          1: { lineWidth: 2 },
          2: { lineWidth: 2.5 },
          3: { lineWidth: 1.8 },
          4: { lineWidth: 2 },
          5: { lineWidth: 2 }
        },
        legend: {
        	position: 'top', textStyle: {color: '#9a9a9a', fontSize: 10}
				},
	   `+Colorsc+`,
        backgroundColor: '#1C1C1C'
      };//#25292F 1: {curveType: 'function'}
       var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
       chart.draw(data, options);
    }
</script>
							
	`;	
	return jshtml;	
	},

	mydoss:function(ssname){	
		var dmghidi = "";
	    if (!BBLog.storage("bf4.showdmg.info")) {		
			dmghidi = [`var hidedmgssinfo = document.getElementById('dmgss'); hidedmgssinfo.style.display = 'none'; hidedmgssinfo.style.visibility = 'hidden';`, `hidedmgssinfo.style.display = 'contents'; hidedmgssinfo.style.visibility = 'visible';`];
		}	
		var htmlss = `				
					function takess(dowhat){
						`+dmghidi[0]+`
						document.getElementById('adddot').innerHTML = '<br>';
						var hidedmgss = document.getElementById('hidss');
						if (hidedmgss){
							hidedmgss.style.display = 'none';  
							hidedmgss.style.visibility = 'hidden';	
						}
						var element = $('#sshot')[0];
						document.getElementById("imgurstat").innerHTML = '<center>Loading...</center>';
						var button = document.getElementById('btn-download');
						element.width = window.innerWidth;
						element.height = window.innerHeight;									
						html2canvas(element, { 
							scrollX: 0,
							scrollY: 0,
							letterRendering: 1, 
							backgroundColor: '#000000',
							allowTaint : true, 
							useCORS: true,
							windowWidth: window.innerWidth,
							windowHeight: window.innerHeight+30
							}).then(function (canvas) {
							var myImage = canvas.toDataURL('image/png');
							button.href = myImage;
if (dowhat == 1) {
	button.click();	
	document.getElementById("imgurstat").innerHTML = '';
} else {									
 var imgtoup = myImage.split(',')[1];
 var titleimg = '`+ssname.replace("'","\\'")+`';
 $.ajax({
    url:'https://api.imgur.com/3/image',
    type: 'POST',
    data: {
      image: imgtoup,
      type: 'base64',
      title: titleimg+'_stats'
    },
    beforeSend: function(xhr){
      xhr.setRequestHeader('Authorization', 'Client-ID 12e89a153016eeb')
    },
    success: function(data) {   
      var imgUrl = data.data.link;
	  var imgUrlink = data.data.link.replace(/.png/gi, "");
	  document.getElementById("imgurstat").innerHTML = '<center>Direct Link: <input type="text" value="'+imgUrl+'" size="25" style="cursor: pointer;" data-tooltip="<h6>Click to copy</h6>" onclick="this.select(); document.execCommand(\\'copy\\'); return false;"> <input id="bblog-weapon-stats-btn" type="button" class="btn btn-tiny" value="Imgur Link" onclick="window.open(\\'' + imgUrlink + '\\', \\'_blank\\');"></center>';	  
    },
    error: function(data) {
      console.log(data);
    }
  });
}									
if (hidedmgss){ hidedmgss.style.display = 'block'; hidedmgss.style.visibility = 'visible'; }
`+dmghidi[1]+`
document.getElementById('adddot').innerHTML = '';
						});
}`;
return htmlss;
	},

	getalldistance:function(whatchar, wpndata) {
					function calcbtk(pdmg, wdmg) {
							return Math.ceil(pdmg / (wdmg*wpndata.ShotsPerShell));
					}  
					var htmldivdist = "";
					var count = 1;
                    var chd = [];
                    var meterDist = [1, 5, 10, 15, 20, 25, 30, 45, 60, 75, 90, 120];
                    var entries = BBLog.count(meterDist);
                    var minDmg = 999;
                    var maxDmg = 0;
					var mfloat = 0;
					var bodyparts = "";
                    for (var i in meterDist) {
                        var dist = meterDist[i];
                        var calculatedDistDmg = 0;
                        if (dist <= wpndata.dmgFallStart) { 
                            calculatedDistDmg = wpndata.dmgMax;
                        } else if (dist >= wpndata.dmgFallEnd) {
                            calculatedDistDmg = wpndata.dmgMin;
                        } else {
                            var looseDmgMax = wpndata.dmgMax - wpndata.dmgMin;
                            var percLoose = (100 / wpndata.dmgFallEnd) * dist;
							calculatedDistDmg = wpndata.dmgMax - (looseDmgMax / 100 * percLoose);
                        }
                        if (count == entries) {
							var text = "+" + dist + "m";							
                        } else {
                            var text = "in " + dist + "m";
							
                        }
                        calculatedDistDmg = calculatedDistDmg.toFixed(1);
                        minDmg = Math.min(minDmg, calculatedDistDmg);
                        maxDmg = Math.max(maxDmg, calculatedDistDmg);
                        chd.push(calculatedDistDmg);
						var addfloat = 'style="float:right; width: 86px; background-color:#25292F; padding: 1px;"'; 
						if (mfloat ==0) {
							mfloat = 1;
							addfloat = ' style="float:left;width: 86px; background-color:#25292F; padding: 1px;"'; 
						} else {
							mfloat = 0;
						}
						if (dist > 9) {							
							calculatedDistDmg = calculatedDistDmg * wpndata.ShotsPerShell;
							var ttkhsm = BBLog.newcaclttk(100, (calculatedDistDmg*wpndata.hsmultiple), dist, wpndata);
							var btkhsm = calcbtk(100, (calculatedDistDmg*wpndata.hsmultiple)).toFixed(0);
							var ttkbd = BBLog.newcaclttk(100, (calculatedDistDmg), dist, wpndata);
							var btkbd = calcbtk(100, (calculatedDistDmg)).toFixed(0);
							var ttknls = BBLog.newcaclttk(100, (calculatedDistDmg*wpndata.stolegsshot), dist, wpndata);
							var btknls = calcbtk(100, (calculatedDistDmg*wpndata.stolegsshot)).toFixed(0);							
							var symthicd = ["[Symthic: "+ttkhsm[1]+"ms]", "[Symthic: "+ttkbd[1]+"ms]", "[Symthic: "+ttknls[1]+"ms]"];
							bodyparts = '<span style="color:#037D1B; cursor: pointer;" data-tooltip="<h6>Headshot</h6><span style=\'font-weight:bold\'>BTK: '+btkhsm+' | TTK: '+ttkhsm[0]+'ms '+symthicd[0]+'</span>">' + (wpndata.hsmultiple*calculatedDistDmg).toFixed(2) + 
							'</span> <span style="color:#343BBA;cursor: pointer;" data-tooltip="<h6>Chest and arms</h6><span style=\'font-weight:bold\'>Field upgrade damage: '+(wpndata.bodyshotdefensive*calculatedDistDmg).toFixed(2)+'<br>BTK: '+btkbd+' | TTK: '+ttkbd[0]+'ms '+symthicd[1]+'</span>"> ' + parseFloat(calculatedDistDmg).toFixed(2) + 
							'</span> | <span style="color:#FCD63C; cursor: pointer;" data-tooltip="<h6>Stomatch & legs</h6><span style=\'font-weight:bold\'>BTK: '+btknls+' | TTK: '+ttknls[0]+'ms '+symthicd[2]+'</span>"> ' + (wpndata.stolegsshot*calculatedDistDmg).toFixed(2) + '</span>';
						if (whatchar == "default") htmldivdist += `<div class="venice-statsitem-box-item" `+addfloat+`><div style="background-color:#1C1C1C;" class="venice-statsitem-bar-title">`+text+`: `+bodyparts+`</div><div style="clear:both;"></div></div>`;	
						}			
                        count++;
                    }
                    minDmg -= 6;
                    maxDmg += 6;
					return htmldivdist;
		},
		
		/**
		* Cheat score
		*/
		setcor:function(wdata,plykills,plyhits,hsrkr,hsbase,kphchk,kphchkb,sad){			
								var hscolor, chartcor;
								var dmgchnace = 0;
								var cheatpoints = 0;
								var counthmcheat = 0;
								var MaxDmg = wdata.dmgMax*wdata.ShotsPerShell;
								var kphbase = +parseFloat((MaxDmg).toFixed(2));
								var kphhcbase = +parseFloat(((MaxDmg)*60)/100).toFixed(2);	
								var hcdamage = +parseFloat((kphhcbase) + (MaxDmg)).toFixed(2);								
								var hsdmg = parseFloat(((MaxDmg)*wdata.hsmultiple).toFixed(2));								
								var hsdmg13 = parseFloat((hsdmg/1.3)).toFixed(2);
								var plykpm = 0;
								var plykph = 0;
								var plytime = wdata.timeEquipped;
								if (plyhits > 0 && plykills > 0) plykph =  parseFloat(((plykills*100)/plyhits).toFixed(2));
								if (plytime > 0 && plykills > 0) plykpm = parseFloat((plykills/(plytime/60)).toFixed(2));								
								if (sad == 1 && plykph > kphbase) plykph -= 5.6;
								var plykphhc = parseFloat(((plykph*60)/100).toFixed(2));	
								var plykph95 = parseFloat(((plykph*95)/100).toFixed(2));							
								var plykph90 = parseFloat(((plykph*90)/100).toFixed(2));
								if (sad == 1 && plykph > kphbase) plykph += 2.5;
								var plykph80 = parseFloat(((plykph*80)/100).toFixed(2));
								var plykph70 = parseFloat(((plykph*70)/100).toFixed(2));								
								if (hsrkr == hsbase) hsrkr -= 1;
								if (hsrkr < hsbase) { hscolor = "#ffffff"; if (kphchk == 1) { chartcor = hscolor; return [hscolor, cheatpoints, counthmcheat, dmgchnace]; } }
								if (hsrkr > hsbase) { 
									hscolor = "#38a220";
									var tmpcheat = 0;
									if (kphchk == 1) { 	
									    if (wdata.kills > 0) {											
											var mhsrkr = 0;
											if (wdata.headshots > 0) mhsrkr = (((100 / wdata.kills) * wdata.headshots)).toFixed(2);																						
											var hsratiofdmg = mhsrkr; 
											if (mhsrkr > 0) mhsrkr = mhsrkr/100; 
											var virhighdmg = plykph*0.95;											
											var maxvirtualdmg = +(((MaxDmg*0.54)*wdata.hsmultiple) + (MaxDmg * (1-0.54))).toFixed(2);											
											var maxvirtualdmgr = +(((MaxDmg*mhsrkr)*wdata.hsmultiple) + (MaxDmg * (1-mhsrkr))).toFixed(2);
											var plyavgvirdmg = +(((MaxDmg*mhsrkr)*wdata.hsmultiple) + (virhighdmg * (1-mhsrkr))).toFixed(2);																																	
											var plykphvirdmg = +(((plykph*mhsrkr)*wdata.hsmultiple) + (plykph * (1-mhsrkr))).toFixed(2);
											var plyhcavgvirdmg = +(((hcdamage*mhsrkr)*wdata.hsmultiple) + (MaxDmg * (1-mhsrkr))).toFixed(2);											
											var medhcbase = (hcdamage+MaxDmg+maxvirtualdmgr+plyhcavgvirdmg)/4; // Mean value											
											var virhcbase = +(((medhcbase*mhsrkr)*wdata.hsmultiple) + (medhcbase * (1-mhsrkr))).toFixed(2);											
											var survirdmg = +(((hcdamage*mhsrkr)*wdata.hsmultiple) + (hcdamage * (1-mhsrkr))).toFixed(2);											
											var countchan = 0											
											if (plykph > maxvirtualdmg && hsratiofdmg < 50 && plyavgvirdmg > plykph) {
												dmgchnace = 20; tmpcheat += 5;
											}
											if (hsratiofdmg >= 35) {
											    if (virhcbase > plyavgvirdmg && virhcbase > plykph) {
													return [hscolor, cheatpoints, counthmcheat, dmgchnace];
												}												
											}									
											if (plykph > maxvirtualdmgr && plykph < hcdamage) { 
												dmgchnace = 20; tmpcheat += 5;												
											}
											if (plyavgvirdmg > virhcbase && plykph < hcdamage) { dmgchnace = 30; counthmcheat += 1; tmpcheat += 5; hscolor = "#ef9e2b"; }
											if (plykph > maxvirtualdmg) { dmgchnace = 30; countchan++; hscolor = "#ef9e2b"; }
											if (plyavgvirdmg > virhcbase && plykph > hcdamage) { dmgchnace = 50; counthmcheat += 1; cheatpoints += 30; }
											if (plykph > hcdamage && maxvirtualdmgr > hcdamage && plykph > maxvirtualdmgr) { dmgchnace = 60; counthmcheat += 1; cheatpoints += 40; }
											if (plyavgvirdmg > virhcbase && plykph > hcdamage && plykph < maxvirtualdmgr) { dmgchnace = 70; counthmcheat += 1; cheatpoints += 50; }
											if (plyavgvirdmg > virhcbase && plykph > hcdamage && plykph > maxvirtualdmgr) { dmgchnace = 100; counthmcheat += 2; cheatpoints += 100; }
											if (plykph > hcdamage && plykph > plyavgvirdmg && plyavgvirdmg > maxvirtualdmgr) { dmgchnace = 100; counthmcheat += 2; cheatpoints += 100; countchan++; }										
											if (dmgchnace >= 50) hscolor = "#e2361f";											
										}
										if (plykph > kphbase && plykphhc > kphhcbase && dmgchnace < 20 && hsratiofdmg < 50) {
											chartcor = hscolor;											
											if (plykph95 > kphbase) {
												tmpcheat += 1; dmgchnace = 5;
											}
											if (plykph90 > kphbase) {
												tmpcheat += 2; dmgchnace = 10;
											}
											if (plykph80 > kphbase) {
												tmpcheat += 3; dmgchnace = 20;
											}
											if (plykph70 > kphbase) {
												hscolor = "#ef9e2b"; chartcor = hscolor;											
												counthmcheat += 1; cheatpoints += 20; dmgchnace = 30;
											}
											if (plykph >= hsdmg13) { counthmcheat += 1; cheatpoints += 40; hscolor = "#e2361f"; chartcor = hscolor; dmgchnace = 50; }
																																	
											if (plykphhc > kphbase) { 											
												hscolor = "#e2361f"; chartcor = hscolor;
												if (plykphhc > (kphbase+2)) { 													
													counthmcheat += 1; cheatpoints += 50; dmgchnace = 60;
												}
											}																						
											if (plykph >= hsdmg) { counthmcheat += 2; cheatpoints += 70; hscolor = "#e2361f"; chartcor = hscolor; dmgchnace = 70; }
										}
										cheatpoints += tmpcheat;
										return [hscolor, cheatpoints, counthmcheat, dmgchnace];
									}		
								}
								if (kphchk == 0) {
								if (hsrkr > (11+hsbase)) { 
									hscolor = "#ef9e2b"; 									
										cheatpoints += 5; 
										counthmcheat += 1; 
										if (hsrkr > (14+hsbase)) { counthmcheat += 1; cheatpoints += 10; }
										if (hsrkr > (16+hsbase)) { counthmcheat += 5; cheatpoints += 9; }
										if (hsrkr > (19+hsbase)) { counthmcheat += 1; cheatpoints += 5; }
										if (hsrkr > (21+hsbase)) { counthmcheat += 1; cheatpoints += 3; }
										if (hsrkr > (22+hsbase)) { counthmcheat += 1; cheatpoints += 2; }
										if (hsrkr > (23+hsbase)) { counthmcheat += 1; cheatpoints += 1; }
										if (hsrkr > (24+hsbase)) { counthmcheat += 1; cheatpoints += 0.5; }
								}
								if (hsrkr > (25+hsbase)) { 
									hscolor = "#e2361f"; 
									cheatpoints += 3; 
									counthmcheat += 1; 
									if (hsrkr > (26+hsbase)) { counthmcheat += 1; cheatpoints += 2; }
									if (hsrkr > (27+hsbase)) { counthmcheat += 1; cheatpoints += 1; }
									if (hsrkr > (28+hsbase)) { counthmcheat += 1; cheatpoints += 0.5; }
									if (hsrkr > (30+hsbase)) { counthmcheat += 1; cheatpoints += 0.25; }
									if (plykpm > 4.5 && sad != "kpm") cheatpoints += 5; 
									if (plykpm > 6 && sad != "kpm") cheatpoints += 5; 
								}
								if (hsrkr > (35+hsbase)) { 
									cheatpoints += 8; 
									counthmcheat += 1; 
								}
								if (hsrkr > (45+hsbase)) { 
									cheatpoints += 7; 
									counthmcheat += 1; 
									if (hsrkr > (50+hsbase)) { cheatpoints += 4.25; }
								}
								if (hsrkr > (55+hsbase)) { 
									cheatpoints += 6; 
									counthmcheat += 1; 
									if (hsrkr > (58+hsbase)) { cheatpoints += 10; }
								}
								}
								if (sad == "kpm" && cheatpoints >= 50) counthmcheat = 2;								
								return [hscolor, cheatpoints, counthmcheat];
		}	
};

BBLog.initIV = setInterval(function () {
    if (typeof BBLogTranslations != "undefined" && typeof S != "undefined" && typeof S.globalContext != "undefined" && typeof Surface != "undefined" && $("body").hasClass("is-loggedin")) {
        BBLog._storage = $.parseJSON($("#bblog-storage-init").text());
        clearInterval(BBLog.initIV);
        BBLog.init();
    }
}, 200);