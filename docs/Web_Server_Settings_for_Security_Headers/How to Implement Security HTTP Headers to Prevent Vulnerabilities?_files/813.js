var refEn=0,tagsInitDone=0,gptAdSlots=[],adDomain="geekflare.com",breakpoints={desktop:"1024",tablet:"768",mobile:"0"},domainValid=1,PREBID_TIMEOUT=1500,interstitialDone=0,waldoTimeOuts=[],waldoAdRefreshes=[],allAdUnits=[],blockAdsOn=[],pubwiseSiteId="",adTagsInitFlag=0,siteId=813,bidDivAvailable=0,waldoTagsStatus=[],googletag=googletag||{},pbjs=pbjs||{},switchUserSync=0,waldoRestrictIp=1,waldoImpressionDone=0,blockedPageAds="",waldoGDPR=1,waldoCountry=waldoReadCookie("waldo_country"),waldoContinent=waldoReadCookie("waldo_continent"),waldoDataPointsDone=waldoReadCookie("waldo_data_points_done");function adDomainCheck(){if(blockAdsOn.length){var e=window.location.pathname;for(i=0;i<blockAdsOn.length;i++)if(blockAdsOn[i]==e)return!1}var a=window.location.href;a=decodeURI(a),a=decodeURIComponent(a);var t=/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.exec(a);return null===t||-1!==t[0].indexOf("volkmarkt.com")||(waldoEmailDetected(a),!1)}function waldoInitScripts(){var e=document.createElement("style");e.type="text/css";var a="";a+=".waldo-sticky-footer{position: fixed; width: 100%; bottom: 0px; left: 0px; text-align: center; z-index: 9995;}",a+=".waldo-sticky-footer iframe {margin-left: auto;margin-right: auto;}",a+=".waldo-sticky-sidebar{position: fixed; top: 10px;z-index: 90}",a+=".waldo-sticky-css{position: sticky; top: 10px; z-index: 90}",a+=".waldo-overlay{position: fixed;height: 100%;width: 100%;top: 0;left: 0;z-index: 105;background: rgba(0,0,0,0.7);}",a+="#waldo-counter {position: absolute;bottom: 0;right: 0;color: #fff;font-size: 30px;padding: 15px;}",browserWidth>=breakpoints.desktop&&(a+=".waldo-bfleft {position: fixed; left: 0; top: 10px;z-index:101;}",a+=".waldo-bfright {position: fixed; right: 0; top: 10px;z-index:101;}"),a+="#waldo-close-button a {",a+="border: 1px solid rgba(0,0,0,.35);",a+="padding: 3px;",a+="font-size: 12px;",a+="color: #fff;",a+="font-weight: bold;",a+="background-color: #777;",a+="}",e.appendChild(document.createTextNode(a)),document.getElementsByTagName("head")[0].appendChild(e);var t=document.createElement("script");t.async=!0,t.type="text/javascript";var i="https:"==document.location.protocol;t.src=(i?"https:":"http:")+"//www.googletagservices.com/tag/js/gpt.js";var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(t,d);var s=document.createElement("script");s.type="text/javascript",s.text="googletag.cmd.push(function() {",s.text+="gptAdSlots[814] = googletag.defineSlot('/8491498/geekflare_728x90FL_1', [728, 90], 'waldo-tag-814').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[728, 90]]).addSize([768, 0], [[728, 90]]).addSize([0, 0], [[728, 90]]).build()).addService(googletag.pubads()).setCollapseEmptyDiv(true,true);",s.text+="gptAdSlots[2669] = googletag.defineSlot('/8491498/geekflare_728x90FL_1_Universal_Passback_5bc804c2bfbbb', [728, 90], 'waldo-tag-2669').addService(googletag.pubads());",s.text+="gptAdSlots[838] = googletag.defineSlot('/8491498/geekflare_300x250FL_1', [300, 250], 'waldo-tag-838').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[300, 250]]).addSize([768, 0], [[300, 250]]).addSize([0, 0], [[300, 250]]).build()).addService(googletag.pubads()).setCollapseEmptyDiv(true,true);",s.text+="gptAdSlots[2672] = googletag.defineSlot('/8491498/geekflare_300x250FL_1_Universal_Passback_5bc804c825feb', [300, 250], 'waldo-tag-2672').addService(googletag.pubads());",s.text+="gptAdSlots[914] = googletag.defineSlot('/8491498/geekflare_300x250FL_3', [[300, 250], [300, 600], [160, 600]], 'waldo-tag-914').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[300, 250], [300, 600], [160, 600]]).addSize([768, 0], [[300, 250], [300, 600], [160, 600]]).addSize([0, 0], [[300, 250], [300, 600], [160, 600]]).build()).addService(googletag.pubads()).setCollapseEmptyDiv(true,true);",s.text+="gptAdSlots[2712] = googletag.defineSlot('/8491498/geekflare_300x250FL_3_Universal_Passback_5bc8052f3dbf2', [[300, 250], [160, 600]], 'waldo-tag-2712').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[300, 250]]).addSize([768, 0], [[160, 600]]).addSize([0, 0], [[160, 600]]).build()).addService(googletag.pubads());",s.text+="gptAdSlots[915] = googletag.defineSlot('/8491498/appsychology_728x90FL_3', [[728, 90], [970, 90], [970, 250], [320, 50]], 'waldo-tag-915').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[728, 90], [970, 90], [970, 250]]).addSize([768, 0], [[320, 50]]).addSize([0, 0], [[320, 50]]).build()).addService(googletag.pubads()).setCollapseEmptyDiv(true,true);",s.text+="gptAdSlots[2713] = googletag.defineSlot('/8491498/geekflare_728x90FL_3_Universal_Passback_5bc80531ec3e6', [[728, 90], [320, 50]], 'waldo-tag-2713').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[728, 90]]).addSize([768, 0], [[320, 50]]).addSize([0, 0], [[320, 50]]).build()).addService(googletag.pubads());",s.text+="googletag.pubads().enableSingleRequest();",s.text+="googletag.enableServices();",s.text+="googletag.pubads().addEventListener('impressionViewable', function(event) {hb_refresh(event); hb_sroll_pause(event);});",s.text+="googletag.pubads().addEventListener('slotRenderEnded', function(event) {waldoAddCloseBtn(event); waldoPassbackInit(event);waldoInterstitialInit(event);})",s.text+="});",document.getElementsByTagName("head")[0].appendChild(s);var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.thisiswaldo.com/sites/all/modules/custom/ad_delivery/prebid.js";var o=document.getElementsByTagName("head")[0];o.insertBefore(r,o.firstChild);var n=document.createElement("script");n.type="text/javascript",n.text='!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");';var m=document.getElementsByTagName("head")[0];m.insertBefore(n,m.firstChild)}Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var a=Object(this),t=a.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var i=arguments[1],d=0;d<t;){var s=a[d];if(e.call(i,s,d,a))return s;d++}},configurable:!0,writable:!0}),null===waldoCountry&&(PREBID_TIMEOUT+=500);var browserWidth=Math.max(document.documentElement.clientWidth,window.innerWidth||0),adUnits=[{code:"waldo-tag-814",mediaTypes:{banner:{sizes:[]}},customParams:{slotNo:"814",amp_code:"/8491498/geekflare_728x90FL_1",mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"60",max:"100"},mobile:{min:"60",max:"100"},min:"60",max:"100",limit:"0"},passback:"2669",passback_refresh:"0",mobile_refresh:1},sizeMapping:[{minWidth:"1024",sizes:[[728,90]],bids:[{bidder:"districtm",params:{placementId:"11972751"}},{bidder:"appnexus",params:{placementId:"12660571"}},{bidder:"sovrn",params:{tagid:"507836"}},{bidder:"gumgum",params:{inSlot:"7726"}},{bidder:"ix",params:{siteId:"285094",size:[728,90]}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"171904"}},{bidder:"lockerdome",params:{adUnitId:"11595274237973862"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"47W7"}},{bidder:"sharethrough",params:{pkey:"DDst6TPmS97ZYEiy3jYGsVDn"}},{bidder:"sonobi",params:{ad_unit:"/8491498/geekflare_728x90FL_1"}}]},{minWidth:"768",sizes:[[728,90]],bids:[{bidder:"districtm",params:{placementId:"11972751"}},{bidder:"appnexus",params:{placementId:"12660571"}},{bidder:"sovrn",params:{tagid:"507836"}},{bidder:"gumgum",params:{inSlot:"7726"}},{bidder:"ix",params:{siteId:"285095",size:[728,90]}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"171904"}},{bidder:"lockerdome",params:{adUnitId:"11595274237973862"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"47W7"}},{bidder:"sharethrough",params:{pkey:"DDst6TPmS97ZYEiy3jYGsVDn"}},{bidder:"sonobi",params:{ad_unit:"/8491498/geekflare_728x90FL_1"}}]},{minWidth:"0",sizes:[[728,90]],bids:[{bidder:"districtm",params:{placementId:"11972751"}},{bidder:"appnexus",params:{placementId:"12660571"}},{bidder:"sovrn",params:{tagid:"507836"}},{bidder:"gumgum",params:{inSlot:"7726"}},{bidder:"ix",params:{siteId:"285095",size:[728,90]}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"171904"}},{bidder:"lockerdome",params:{adUnitId:"11595274237973862"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"47W7"}},{bidder:"sharethrough",params:{pkey:"DDst6TPmS97ZYEiy3jYGsVDn"}},{bidder:"sonobi",params:{ad_unit:"/8491498/geekflare_728x90FL_1"}}]}],affiliate_banners:[]},{code:"waldo-tag-838",mediaTypes:{banner:{sizes:[]}},customParams:{slotNo:"838",amp_code:"/8491498/geekflare_300x250FL_1",mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"60",max:"120"},mobile:{min:"60",max:"120"},min:"60",max:"120",limit:"0"},passback:"2672",passback_refresh:"0",mobile_refresh:1},sizeMapping:[{minWidth:"1024",sizes:[[300,250]],bids:[{bidder:"sovrn",params:{tagid:"507837"}},{bidder:"districtm",params:{placementId:"11972732"}},{bidder:"appnexus",params:{placementId:"12660551"}},{bidder:"ix",params:{siteId:"285100",size:[300,250]}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"171901"}},{bidder:"lockerdome",params:{adUnitId:"11595269808788838"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"eu2l"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sonobi",params:{ad_unit:"/8491498/geekflare_300x250FL_1"}}]},{minWidth:"768",sizes:[[300,250]],bids:[{bidder:"sovrn",params:{tagid:"507837"}},{bidder:"districtm",params:{placementId:"11972732"}},{bidder:"appnexus",params:{placementId:"12660551"}},{bidder:"ix",params:{siteId:"285103",size:[300,250]}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"171901"}},{bidder:"lockerdome",params:{adUnitId:"11595269808788838"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"eu2l"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sonobi",params:{ad_unit:"/8491498/geekflare_300x250FL_1"}}]},{minWidth:"0",sizes:[[300,250]],bids:[{bidder:"sovrn",params:{tagid:"507837"}},{bidder:"districtm",params:{placementId:"11972732"}},{bidder:"appnexus",params:{placementId:"12660551"}},{bidder:"ix",params:{siteId:"285103",size:[300,250]}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"171901"}},{bidder:"lockerdome",params:{adUnitId:"11595269808788838"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"eu2l"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sonobi",params:{ad_unit:"/8491498/geekflare_300x250FL_1"}}]}],affiliate_banners:[]},{code:"waldo-tag-914",mediaTypes:{banner:{sizes:[]}},customParams:{slotNo:"914",amp_code:"/8491498/geekflare_300x250FL_3",mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"60",max:"120"},mobile:{min:"60",max:"120"},min:"60",max:"120",limit:"0"},passback:"2712",passback_refresh:"0",mobile_refresh:1},sizeMapping:[{minWidth:"1024",sizes:[[300,250],[300,600],[160,600]],bids:[{bidder:"sovrn",params:{tagid:"509821"}},{bidder:"sovrn",params:{tagid:"509824"}},{bidder:"districtm",params:{placementId:"11972739"}},{bidder:"appnexus",params:{placementId:"12660497"}},{bidder:"gumgum",params:{inSlot:"7722"}},{bidder:"gumgum",params:{inSlot:"7723"}},{bidder:"ix",params:{siteId:"285097",size:[300,250]}},{bidder:"ix",params:{siteId:"285101",size:[300,600]}},{bidder:"ix",params:{siteId:"285102",size:[160,600]}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"171902"}},{bidder:"lockerdome",params:{adUnitId:"11595269808788838"}},{bidder:"lockerdome",params:{adUnitId:"11595273365558630"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"qT2e"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"5GHY"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"UzG9"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sharethrough",params:{pkey:"Fz7FdWrdW7mbDLJqhtmCh59N"}},{bidder:"sonobi",params:{ad_unit:"/8491498/geekflare_300x250FL_3"}}]},{minWidth:"768",sizes:[[300,250],[300,600],[160,600]],bids:[{bidder:"sovrn",params:{tagid:"509821"}},{bidder:"sovrn",params:{tagid:"509824"}},{bidder:"districtm",params:{placementId:"11972739"}},{bidder:"appnexus",params:{placementId:"12660497"}},{bidder:"gumgum",params:{inSlot:"7722"}},{bidder:"gumgum",params:{inSlot:"7723"}},{bidder:"ix",params:{siteId:"285098",size:[300,250]}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"171902"}},{bidder:"lockerdome",params:{adUnitId:"11595269808788838"}},{bidder:"lockerdome",params:{adUnitId:"11595273365558630"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"qT2e"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"5GHY"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"UzG9"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sharethrough",params:{pkey:"Fz7FdWrdW7mbDLJqhtmCh59N"}},{bidder:"sonobi",params:{ad_unit:"/8491498/geekflare_300x250FL_3"}}]},{minWidth:"0",sizes:[[300,250],[300,600],[160,600]],bids:[{bidder:"sovrn",params:{tagid:"509821"}},{bidder:"sovrn",params:{tagid:"509824"}},{bidder:"districtm",params:{placementId:"11972739"}},{bidder:"appnexus",params:{placementId:"12660497"}},{bidder:"gumgum",params:{inSlot:"7722"}},{bidder:"gumgum",params:{inSlot:"7723"}},{bidder:"ix",params:{siteId:"285098",size:[300,250]}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"171902"}},{bidder:"lockerdome",params:{adUnitId:"11595269808788838"}},{bidder:"lockerdome",params:{adUnitId:"11595273365558630"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"qT2e"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"5GHY"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"UzG9"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sharethrough",params:{pkey:"Fz7FdWrdW7mbDLJqhtmCh59N"}},{bidder:"sonobi",params:{ad_unit:"/8491498/geekflare_300x250FL_3"}}]}],affiliate_banners:[]},{code:"waldo-tag-915",mediaTypes:{banner:{sizes:[]}},customParams:{slotNo:"915",amp_code:"/8491498/appsychology_728x90FL_3",mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"60",max:"120"},mobile:{min:"60",max:"120"},min:"60",max:"120",limit:"0"},passback:"2713",passback_refresh:"0",mobile_refresh:1},sizeMapping:[{minWidth:"1024",sizes:[[728,90],[970,90],[970,250]],bids:[{bidder:"sovrn",params:{tagid:"509826"}},{bidder:"sovrn",params:{tagid:"509827"}},{bidder:"sovrn",params:{tagid:"509829"}},{bidder:"districtm",params:{placementId:"11972760"}},{bidder:"appnexus",params:{placementId:"12660496"}},{bidder:"ix",params:{siteId:"285109",size:[728,90]}},{bidder:"ix",params:{siteId:"285110",size:[970,90]}},{bidder:"ix",params:{siteId:"285111",size:[970,250]}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"171905"}},{bidder:"lockerdome",params:{adUnitId:"11595274237973862"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"7t7C"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"ZUmA"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"Cukr"}},{bidder:"sharethrough",params:{pkey:"DDst6TPmS97ZYEiy3jYGsVDn"}},{bidder:"sharethrough",params:{pkey:"myEtNmA9iqbiibwzNYA6kHtj"}},{bidder:"sonobi",params:{ad_unit:"/8491498/appsychology_728x90FL_3"}}]},{minWidth:"768",sizes:[[320,50]],bids:[{bidder:"sovrn",params:{tagid:"509826"}},{bidder:"sovrn",params:{tagid:"509827"}},{bidder:"sovrn",params:{tagid:"509829"}},{bidder:"districtm",params:{placementId:"11972760"}},{bidder:"appnexus",params:{placementId:"12660496"}},{bidder:"gumgum",params:{inSlot:"7725"}},{bidder:"ix",params:{siteId:"285112",size:[320,50]}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"171905"}},{bidder:"lockerdome",params:{adUnitId:"11595272660915558"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"4djE"}},{bidder:"sonobi",params:{ad_unit:"/8491498/appsychology_728x90FL_3"}}]},{minWidth:"0",sizes:[[320,50]],bids:[{bidder:"sovrn",params:{tagid:"509826"}},{bidder:"sovrn",params:{tagid:"509827"}},{bidder:"sovrn",params:{tagid:"509829"}},{bidder:"districtm",params:{placementId:"11972760"}},{bidder:"appnexus",params:{placementId:"12660496"}},{bidder:"gumgum",params:{inSlot:"7725"}},{bidder:"ix",params:{siteId:"285112",size:[320,50]}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"171905"}},{bidder:"lockerdome",params:{adUnitId:"11595272660915558"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"4djE"}},{bidder:"sonobi",params:{ad_unit:"/8491498/appsychology_728x90FL_3"}}]}],affiliate_banners:[]}],passbackAdUnits=[{code:"waldo-tag-2669",customParams:{slotNo:"2669",amp_code:"/8491498/geekflare_728x90FL_1",mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"60",max:"100"},mobile:{min:"60",max:"100"},min:"60",max:"100",limit:"0"},passback_refresh:"0",mobile_refresh:1}},{code:"waldo-tag-2672",customParams:{slotNo:"2672",amp_code:"/8491498/geekflare_300x250FL_1",mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"60",max:"120"},mobile:{min:"60",max:"120"},min:"60",max:"120",limit:"0"},passback_refresh:"0",mobile_refresh:1}},{code:"waldo-tag-2712",customParams:{slotNo:"2712",amp_code:"/8491498/geekflare_300x250FL_3",mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"60",max:"120"},mobile:{min:"60",max:"120"},min:"60",max:"120",limit:"0"},passback_refresh:"0",mobile_refresh:1}},{code:"waldo-tag-2713",customParams:{slotNo:"2713",amp_code:"/8491498/appsychology_728x90FL_3",mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"60",max:"120"},mobile:{min:"60",max:"120"},min:"60",max:"120",limit:"0"},passback_refresh:"0",mobile_refresh:1}}];allAdUnits=adUnits.concat(passbackAdUnits),adUnits.forEach(function(e){if(!e.bids){var a=e.sizeMapping.find(function(e){return browserWidth>0?browserWidth>=e.minWidth:0==e.minWidth}).bids,t=e.sizeMapping.find(function(e){return browserWidth>0?browserWidth>=e.minWidth:0==e.minWidth}).sizes;e.mediaTypes.banner.sizes=t,e.bids=a,delete e.sizeMapping}});var affiliateBanners,amazonAdUnits=[{slotID:"waldo-tag-814",slotName:"8491498/geekflare_728x90FL_1",device_sizes:[{minWidth:"1024",sizes:[[728,90]]},{minWidth:"768",sizes:[[728,90]]},{minWidth:"0",sizes:[[728,90]]}],slotNo:"814"},{slotID:"waldo-tag-838",slotName:"8491498/geekflare_300x250FL_1",device_sizes:[{minWidth:"1024",sizes:[[300,250]]},{minWidth:"768",sizes:[[300,250]]},{minWidth:"0",sizes:[[300,250]]}],slotNo:"838"},{slotID:"waldo-tag-914",slotName:"8491498/geekflare_300x250FL_3",device_sizes:[{minWidth:"1024",sizes:[[300,250],[300,600],[160,600]]},{minWidth:"768",sizes:[[300,250],[300,600],[160,600]]},{minWidth:"0",sizes:[[300,250],[300,600],[160,600]]}],slotNo:"914"},{slotID:"waldo-tag-915",slotName:"8491498/appsychology_728x90FL_3",device_sizes:[{minWidth:"1024",sizes:[[728,90],[970,90],[970,250]]},{minWidth:"768",sizes:[[320,50]]},{minWidth:"0",sizes:[[320,50]]}],slotNo:"915"}];if(amazonAdUnits.forEach(function(e){if(!e.sizes){var a=e.device_sizes.find(function(e){return browserWidth>0?browserWidth>=e.minWidth:0==e.minWidth}).sizes;e.sizes=a}}),googletag.cmd=googletag.cmd||[],googletag.cmd.push(function(){googletag.pubads().disableInitialLoad(),googletag.pubads().collapseEmptyDivs()}),adDomainCheck()){function fetchHeaderBids(){var e=["a9","prebid"],a={adserverRequestSent:!1};function t(t){!0!==a.adserverRequestSent&&("a9"===t?a.a9=!0:"prebid"===t&&(a.prebid=!0),e.map(function(e){return a[e]}).filter(Boolean).length===e.length&&i())}function i(){!0!==a.adserverRequestSent&&(a.adserverRequestSent=!0,pbjs.adserverRequestSent=!0,a.sendAdserverRequest=!0,googletag.cmd.push(function(){apstag.setDisplayBids(),pbjs.setTargetingForGPTAsync(),googletag.pubads().refresh()}))}e.forEach(function(e){a[e]=!1}),apstag.fetchBids({slots:amazonAdUnits,timeout:PREBID_TIMEOUT},function(e){t("a9")}),pbjs.que.push(function(){"EU"!=waldoReadCookie("waldo_continent")&&"RO"!=waldoReadCookie("waldo_country")||pbjs.setConfig({consentManagement:{cmpApi:"iab",timeout:2e3,allowAuctionWithoutConsent:!0}}),pbjs.addAdUnits(adUnits),pbjs.setConfig({userSync:{filterSettings:{all:{bidders:["aardvark"],filter:"include"}}}}),pbjs.requestBids({bidsBackHandler:function(e){t("prebid")}})}),setTimeout(function(){i()},3e3)}function waldoInitCmp(){var e=waldoReadCookie("waldo_continent"),a=waldoReadCookie("euconsent");if("EU"==e&&null===a){var t=document.createElement("script");t.type="text/javascript",t.src="//thisiswaldo.com/sites/all/modules/custom/ad_delivery/cmp/build/cmp.complete.bundle.js";var i=document.getElementsByTagName("head")[0];i.insertBefore(t,i.firstChild)}}function hb_sroll_pause(e){for(var a=0,t=allAdUnits.length;a<t;a++)e.slot.getSlotElementId()==allAdUnits[a].code&&allAdUnits[a].customParams.mobile_pause>0&&browserWidth<breakpoints.tablet&&(document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",function(e){setTimeout(function(){document.documentElement.style.overflow="",document.body.style.overflow=""},1e3*allAdUnits[e].customParams.mobile_pause)}(a))}function hb_refresh(e){if(!refEn)return!1;for(var a=0,t=adUnits.length;a<t;a++)e.slot.getSlotElementId()==allAdUnits[a].code&&"viewability"==allAdUnits[a].customParams.refresh.type&&function(e){setTimeout(function(){hbRefreshBid(allAdUnits[e])},1e3*allAdUnits[e].customParams.refresh.seconds)}(a)}function waldoAddCloseBtn(e){for(var a=0,t=adUnits.length;a<t;a++)if(e.slot.getSlotElementId()==adUnits[a].code&&adUnits[a].customParams.sticky_footer&&!e.isEmpty){var i=adUnits[a].customParams.slotNo,d=document.getElementById(e.slot.getSlotElementId()),s=d.getElementsByTagName("div")[0],r=s.getElementsByTagName("iframe")[0],o=r.getAttribute("width"),n=document.createElement("div");n.setAttribute("id","waldo-close-button"),n.style.width=o+"px",n.style.marginLeft="auto",n.style.marginRight="auto",n.style.textAlign="right",n.innerHTML='<a style="text-decoration: none;" href="#">Close X</a>',r.style.width=o+"px",s.parentNode.insertBefore(n,s),n.getElementsByTagName("a")[0].onclick=function(e){e.preventDefault(),d.parentNode.removeChild(d),clearTimeout(waldoTimeOuts[i])}}}function waldoPassbackInit(e){for(var a=0,t=adUnits.length;a<t;a++)if(e.slot.getSlotElementId()==adUnits[a].code&&adUnits[a].customParams.passback){var i=adUnits[a].customParams.passback,d=document.getElementById("waldo-tag-"+adUnits[a].customParams.passback);if(e.isEmpty){if(r=document.getElementById(e.slot.getSlotElementId())){var s=r.getElementsByTagName("div")[0];r.removeChild(s)}if(!d){var r=document.getElementById(e.slot.getSlotElementId()),o=waldoLoadPassback(adUnits[a].customParams.passback),n=document.createElement("div");n.setAttribute("id",o.code),r.parentNode.insertBefore(n,r),waldoInitTags([o]),googletag.pubads().refresh([gptAdSlots[adUnits[a].customParams.passback]]),0==adUnits[a].customParams.passback_refresh&&(clearTimeout(waldoTimeOuts[i]),clearTimeout(waldoTimeOuts[adUnits[a].customParams.slotNo]))}}else if(d){waldoTimeOuts[i]&&clearTimeout(waldoTimeOuts[i]);var m=document.getElementById("waldo-tag-"+adUnits[a].customParams.passback);m&&m.parentNode.removeChild(m)}}}function waldoInterstitialInit(e){if(interstitialDone)return!1;for(var a=0,t=adUnits.length;a<t;a++)if(e.slot.getSlotElementId()==adUnits[a].code&&adUnits[a].customParams.interstitial){interstitialDone=1;var i=document.getElementById(adUnits[a].code);if(browserWidth>=breakpoints.desktop&&!e.isEmpty){var d=adUnits[a].customParams.interstitial_duration,s=document.createElement("div");s.setAttribute("id","waldo-counter"),s.innerHTML='Ad will close in <span class="count">'+d+"</span> seconds",i.appendChild(s),i.className="waldo-overlay",i.style.display="block";var r=i.getElementsByTagName("iframe")[0],o=i.getElementsByTagName("div")[0];o.style.left="50%",o.style.top="50%",o.style.position="absolute",o.style.width=r.clientWidth+"px",o.style.height=r.clientHeight+"px",o.style.marginLeft="-"+parseInt(r.clientWidth)/2+"px",o.style.marginTop="-"+parseInt(r.clientHeight)/2+"px";var n=setInterval(function(){var e=d--;s.getElementsByTagName("span")[0].innerHTML=e,0==e&&(clearInterval(n),i.parentNode.removeChild(i))},1e3)}}}function waldoInitTags(e){var a,t=[];for(l=document.documentElement||document.body.parentNode||document.body,index=0;index<e.length;++index){var i=e[index],d=i.code,s=document.getElementById(d);if(s&&void 0===waldoTagsStatus[d]){t.push(i.customParams.slotNo),waldoTagsStatus[d]=1,bidDivAvailable=1,waldoAdRefreshes[i.customParams.slotNo]=0;var r=document.createElement("script");if(r.type="text/javascript",r.text="googletag.cmd.push(function() { googletag.display('"+d+"'); });",s.appendChild(r),i.customParams.sticky_sidebar&&browserWidth>=breakpoints.desktop&&(a=s),i.customParams.sticky_footer?s.className="waldo-sticky-footer":i.customParams.sticky_left||i.customParams.sticky_right?browserWidth>=breakpoints.desktop?i.customParams.sticky_left?s.className="waldo-bfleft":s.className="waldo-bfright":s.style.display="none":i.customParams.interstitial&&(s.style.display="none"),"min_max"==i.customParams.refresh.type){var o=1;browserWidth<breakpoints.desktop&&0==i.customParams.mobile_refresh&&(o=0),o&&hbRandomMinMaxRefresh(e[index])}s.setAttribute("data-processed",!0)}if(a&&"/"!=window.location.pathname){var n,m=a.offsetTop,l=document.documentElement||document.body.parentNode||document.body,p=void 0!==window.pageYOffset;m+=550,window.onscroll=function(e){n=p?window.pageYOffset:l.scrollTop,a.className=n>=m?"waldo-sticky-sidebar":""}}}!waldoImpressionDone&&t&&(waldoRecordImpression(t),waldoImpressionDone=1)}function hbRefreshBid(e){var a,t=["prebid"],d=[];if(d[e.customParams.slotNo]={a9:!1,prebid:!1},5==waldoAdRefreshes[e.customParams.slotNo]){e.bids;for(i=0;i<e.bids.length;i++)"openx"!=e.bids[i].bidder&&"aol"!=e.bids[i].bidder&&"sovrn"!=e.bids[i].bidder||(pbjs.removeAdUnit(e.code),e.bids.splice(i,1),pbjs.addAdUnits([e]))}if(void 0!==e.customParams.amazon){for(t.push("a9"),i=0;i<amazonAdUnits.length;i++)amazonAdUnits[i].slotNo==e.customParams.slotNo&&(a=amazonAdUnits[i]);apstag.fetchBids({slots:[a],timeout:PREBID_TIMEOUT},function(e){s("a9")})}function s(a){"a9"===a?d[e.customParams.slotNo].a9=!0:"prebid"===a&&(d[e.customParams.slotNo].prebid=!0),t.map(function(a){return d[e.customParams.slotNo][a]}).filter(Boolean).length===t.length&&googletag.cmd.push(function(){apstag.setDisplayBids(),pbjs.setTargetingForGPTAsync([e.code]),googletag.pubads().refresh([gptAdSlots[e.customParams.slotNo]])})}pbjs.que.push(function(){pbjs.requestBids({timeout:PREBID_TIMEOUT,adUnitCodes:[e.code],bidsBackHandler:function(e){s("prebid")}})})}function hbRandomMinMaxRefresh(e){if(browserWidth>=breakpoints.desktop)var a=parseInt(e.customParams.refresh.desktop.min),t=parseInt(e.customParams.refresh.desktop.max);else a=parseInt(e.customParams.refresh.mobile.min),t=parseInt(e.customParams.refresh.mobile.max);var i=e.customParams.slotNo,d=parseInt(e.customParams.refresh.limit),s=getRandomNumber(a,t);waldoTimeOuts[i]=setTimeout(function(){waldoAdRefreshes[i]?waldoAdRefreshes[i]++:waldoAdRefreshes[i]=1,hbRefreshBid(e),waldoAdRefreshes[i]!=d&&hbRandomMinMaxRefresh(e)},1e3*s)}function getRandomNumber(e,a){return Math.floor(Math.random()*(a-e+1)+e)}function waldoGeoBidsCheck(e){for(i=0;i<adUnits.length;i++){var a=adUnits[i].bids;a=a.filter(function(a){return"sovrn"!=a.bidder?1:"US"==e||"CA"==e||"GB"==e||"AU"==e?1:void 0}),adUnits[i].bids=a}}waldoInitScripts(),pbjs.que=pbjs.que||[],pbjs.que.push(function(){pbjs.aliasBidder("appnexus","districtm"),pbjs.aliasBidder("appnexus","9284")}),apstag.init({pubID:"094e2c86-72d9-47d6-a647-d95ce39ad4c7",adServer:"googletag",bidTimeout:PREBID_TIMEOUT}),0==bidDivAvailable&&(document.addEventListener("DOMContentLoaded",function(){adTagsInitFlag||(waldoInitTags(adUnits),adTagsInitFlag=1)},!1),window.addEventListener("load",function(){adTagsInitFlag||(waldoInitTags(adUnits),adTagsInitFlag=1)},!1)),setTimeout(function(){refEn=1},3e4),null===waldoCountry?waldoGetUserData():(waldoInitCmp(),waldoGeoBidsCheck(waldoCountry),fetchHeaderBids())}function waldoDisplayPassbacksBlockedPages(){for(var e=0;e<adUnits.length;e++){var a=adUnits[e],t=document.getElementById(a.code);if(t){var i=waldoLoadPassback(a.customParams.passback),d=document.createElement("div");d.setAttribute("id",i.code),a.customParams.sticky_footer&&(d.className="waldo-sticky-footer"),t.parentNode.insertBefore(d,t);var s=document.createElement("script");s.type="text/javascript",s.text="googletag.cmd.push(function() { googletag.display('"+i.code+"'); });",d.appendChild(s),googletag.cmd.push(function(){googletag.pubads().refresh([gptAdSlots[a.customParams.passback]])}),console.log("ref")}}}function waldoGetUserData(){var e="https:"==document.location.protocol,a=(new XMLHttpRequest,(e?"https:":"http:")+"//ipfind.co/me?auth=3757a9b9-5759-4813-bc1a-7fa0b8ba94c1"),t=new XMLHttpRequest;t.onreadystatechange=function(){if(t.readyState===XMLHttpRequest.DONE)if(200===t.status){var e=JSON.parse(t.responseText);waldoCreateCookie("waldo_country",e.country_code,90),waldoCreateCookie("waldo_continent",e.continent_code,90),waldoInitCmp(),waldoGeoBidsCheck(e.country_code),fetchHeaderBids()}else waldoInitCmp(),waldoGeoBidsCheck(""),fetchHeaderBids()},t.open("GET",a,!0),t.timeout=550,t.send()}function waldoLoadPassback(e){for(i=0;i<passbackAdUnits.length;i++)if(passbackAdUnits[i].customParams.slotNo==e)return passbackAdUnits[i]}function waldoCreateCookie(e,a,t){var i="";if(t){var d=new Date;d.setTime(d.getTime()+24*t*60*60*1e3),i="; expires="+d.toUTCString()}document.cookie=e+"="+a+i+"; path=/"}function waldoReadCookie(e){for(var a=e+"=",t=document.cookie.split(";"),i=0;i<t.length;i++){for(var d=t[i];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null}function waldoEmailDetected(e){var a=new XMLHttpRequest,t="url="+e;a.open("POST","https://thisiswaldo.com/email-detected",!0),a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.send(t)}function waldoRecordImpression(e){var a=e.join(","),t="https:"==document.location.protocol,i=new XMLHttpRequest,d=(t?"https:":"http:")+"//thisiswaldo.com/new-impression",s="site_id="+siteId+"&zone_ids="+a;i.open("POST",d,!0),i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),i.send(s)}var waldo=waldo||{};waldo.refreshTag=function(e){for(var a=0;a<adUnits.length;a++)adUnits[a].code==e&&hbRefreshBid(adUnits[a])},waldo.refreshAllTags=function(){fetchHeaderBids()};