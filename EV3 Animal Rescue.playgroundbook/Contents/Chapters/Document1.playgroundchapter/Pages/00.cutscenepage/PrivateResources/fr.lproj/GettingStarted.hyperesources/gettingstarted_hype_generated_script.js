//	HYPE.documents["GettingStarted"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="GettingStarted.hyperesources",c="GettingStarted",e="gettingstarted_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/gettingstarted_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_584","HYPE_dtl_584",!0==(null!=a&&10>a||false==!0)?"HYPE-584.full.min.js":"HYPE-584.thin.min.js"),false==!0&&(a=a||l("HYPE_w_584","HYPE_wdtl_584","HYPE-584.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"bootstrapApplication",source:"function(hypeDocument, element, event) {\n\tvar locale = window.locale || 'fr';\n\n\tvar t = window.t = libTranslate.getTranslationFunction(window.translationData[locale])\n\n\thypeDocument.goToTimeInTimelineNamed(0, 'Main Timeline')\n\thypeDocument.goToTimeInTimelineNamed(0, 'Text Timeline')\n    hypeDocument.pauseTimelineNamed('Main Timeline')\n    hypeDocument.pauseTimelineNamed('Text Timeline')\n\n    var container = hypeDocument.getElementById('bodymovin')\n\n\twindow.scenes = [\n\t\t{\n            segment: [12, 180],\n            title: 'SCENES_SCENE_1_TITLE'\n        },\n        {\n            segment: [499, 780],\n            title: 'SCENES_SCENE_2_TITLE'\n        },\n        {\n            segment: [1080, 1380],\n            title: 'SCENES_SCENE_3_TITLE'\n        },\n        {\n            segment: [1480, 1780],\n            title: 'SCENES_SCENE_4_7_TITLE',\n            animateTitleOnEnterSceneReverse: false\n        },\n        {\n            segment: [1850, 1980],\n            title: 'SCENES_SCENE_4_7_TITLE',\n            animateTitleOnEnterSceneForward: false,\n            animateTitleOnEnterSceneReverse: false\n        },\n        {\n            segment: [1980, 2280],\n            title: 'SCENES_SCENE_4_7_TITLE',\n            animateTitleOnEnterSceneForward: false,\n            animateTitleOnEnterSceneReverse: false\n        },\n        {\n            segment: [2280, 2580],\n            title: 'SCENES_SCENE_4_7_TITLE',\n            animateTitleOnEnterSceneForward: false\n        },\n        {\n            segment: [2600, 3014],\n            title: 'SCENES_SCENE_8_11_TITLE',\n            animateTitleOnEnterSceneReverse: false\n        },\n        {\n            segment: [3014, 3224],\n            title: 'SCENES_SCENE_8_11_TITLE',\n            animateTitleOnEnterSceneForward: false,\n            animateTitleOnEnterSceneReverse: false\n        },\n        {\n            segment: [3225, 3424],\n            title: 'SCENES_SCENE_8_11_TITLE',\n            animateTitleOnEnterSceneForward: false,\n            animateTitleOnEnterSceneReverse: false\n        },\n        {\n            segment: [3425, 3640],\n            title: 'SCENES_SCENE_8_11_TITLE',\n            animateTitleOnEnterSceneForward: false\n        },\n        {\n            segment: [3641, 3980],\n            title: 'SCENES_SCENE_12_TITLE'\n        }\n\t]\n\n    window.currentSceneIndex = 0;\n    window.playDirection = 1;\n\n\t// Override assets path, when using \"animationData\" as a parameter, you cannot set the assetsPath (derp)\n\tvar assets = window.animationData.assets;\n\tif(assets) {\n    \tvar i, len = assets.length;\n        for(i=0; i<len; i+=1) {\n        \tif(assets[i].u) {\n            \tassets[i].u = 'GettingStarted.hyperesources/'\n            }\n        }\n    }\n\n    window.animation = bodymovin.loadAnimation({\n        container: container,\n        renderer: 'svg',\n        loop: false,\n        autoplay: false,\n        animationData: window.animationData\n    });\n\n    window.animation.addEventListener('DOMLoaded', DOMLoaded);\n    window.animation.addEventListener('data_ready', data_ready);\n    window.animation.addEventListener('segmentStart', segmentStart);\n    window.animation.addEventListener('complete', complete);\n\n\tsetSubTitleText();\n\n\tfunction setSubTitleText() {\n\t\tvar i;\n\t\t// count from 1 to 4\n        for(i=1; i<5; i+=1) {\n\t\t\thypeDocument.getElementById('textoutput' + i).innerText = t('SCENES_SCENE_4_7_BULLET_' + i)\n\t\t\thypeDocument.getElementById('textinput' + i).innerText = t('SCENES_SCENE_8_11_BULLET_' + i)\n        }\n        hypeDocument.getElementById('textscene0').innerText = t('SCENES_SCENE_0_TITLE');\n\n\t}\n\n\tfunction data_ready() {\n\t\tconsole.log('data_ready')\n\t}\n\n\tfunction DOMLoaded() {\n\n\t\thypeDocument.startTimelineNamed('Scene 1 Timeline')\n\n\t\tsetTimeout(function(){\n\t\t\t\thypeDocument.functions().setPagination(hypeDocument, element, event);\n\t\t}, 3000);\n\t}\n\n    function complete() {\n\t\tvar timeline = Math.min(Math.max(parseInt(window.currentSceneIndex), 0), window.scenes.length);\n        hypeDocument.startTimelineNamed('Main Timeline', hypeDocument.kDirectionForward)\n        window.animation.setSpeed(1);\n\n\t\tif (window.currentSceneIndex === 0) {\n\t\t\tsetTitleText()\n\t\t}\n\n\t\t// Reset playDirection to be forward.\n\t\twindow.playDirection = 1;\n    }\n\n\tfunction setTitleText() {\n\t\tvar scene = window.scenes[window.currentSceneIndex];\n\n\t\thypeDocument.getElementById('aText').innerText = t(scene.title)\n\t\tif (scene.animateTitleOnEnterSceneForward === false && window.playDirection === 1) {\n\t\t\thypeDocument.goToTimeInTimelineNamed(hypeDocument.durationForTimelineNamed('Text Timeline'), 'Text Timeline')\n\t\t} else if (scene.animateTitleOnEnterSceneReverse === false && window.playDirection === -1) {\n\t\t\thypeDocument.goToTimeInTimelineNamed(hypeDocument.durationForTimelineNamed('Text Timeline'), 'Text Timeline')\n\t\t} else {\n\t\t\thypeDocument.startTimelineNamed('Text Timeline', hypeDocument.kDirectionForward)\n\t\t}\n\t}\n\n    function segmentStart() {\n\n        hypeDocument.goToTimeInTimelineNamed(0, 'Main Timeline')\n        hypeDocument.goToTimeInTimelineNamed(0, 'Text Timeline')\n\n\t\tif (window.currentSceneIndex !== 0) {\n\t\t\tsetTitleText()\n\t\t}\n\n\t\tvar directionSpecialScenes = window.playDirection === -1 ? hypeDocument.kDirectionReverse : hypeDocument.kDirectionForward;\n\n\t\tif (window.currentSceneIndex === 2) {\n\t\t\tif (window.playDirection === -1) {\n\t\t\t\thypeDocument.continueTimelineNamed('Scene 4 > 11 Timeline', directionSpecialScenes, false)\n\t\t\t}\n\t\t}\n\n\t\tif (window.currentSceneIndex === 3) {\n\t\t\tif (window.playDirection === 1) {\n\t\t\t\thypeDocument.goToTimeInTimelineNamed(0, 'Scene 4 > 11 Timeline')\n\t\t\t\thypeDocument.startTimelineNamed('Scene 4 > 11 Timeline', directionSpecialScenes)\n\t\t\t}\n  \t\t}\n\n\t\tif (window.currentSceneIndex === 10) {\n\t\t\tif (window.playDirection === -1) {\n\t\t\t\tconsole.log('FUCKING BACKWARDS HERE YO')\n\t\t\t\thypeDocument.goToTimeInTimelineNamed(hypeDocument.durationForTimelineNamed('Scene 4 > 11 Timeline'), 'Scene 4 > 11 Timeline')\n\t\t\t\thypeDocument.startTimelineNamed('Scene 4 > 11 Timeline', directionSpecialScenes)\n\t\t\t}\n  \t\t}\n\n\t\tif (window.currentSceneIndex === 11) {\n\t\t\tif (window.playDirection === 1) {\n\t\t\t\tif (hypeDocument.currentTimeInTimelineNamed('Scene 4 > 11 Timeline') >= 9.0) {\n\t\t\t\t\thypeDocument.continueTimelineNamed('Scene 4 > 11 Timeline', directionSpecialScenes, false)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif ([3, 4, 5, 6, 7, 8, 9, 10].includes(window.currentSceneIndex)) {\n\t\t\thypeDocument.continueTimelineNamed('Scene 4 > 11 Timeline', directionSpecialScenes, false)\n\t\t}\n\n    }\n\n}",identifier:"5"},{name:"setPagination",source:"function(hypeDocument, element, event) {\n\t// DEBUG\n \twindow.animation.setSpeed(1);\n\n\tvar t = window.t\n\n\tvar scenes = window.scenes;\n\n\t// var currentScene = hypeDocument.currentSceneName();\n\tvar amountOfScenes = scenes.length;\n\tvar currentSceneIndex = window.currentSceneIndex || 0;\n\n\tvar sceneIndexAdjusted = currentSceneIndex + 1;\n\n\tpagination_end.childNodes[0].childNodes[0].innerText = t('START_CODING');\n\n\tvar text = t('PAGINATION_PAGE_OF', {\n\t\tcurrent: sceneIndexAdjusted,\n\t\ttotal: amountOfScenes\n\t});\n\tpagination_text.innerText = text;\n\n\t// Default, State could also be on the symbol, but repeating here for readability\n\tpagination_previous_on.style.visibility = 'visible';\n\tpagination_next_on.style.visibility = 'visible';\n\tpagination_previous_off.style.visibility = 'hidden';\n\tpagination_end.style.visibility = 'hidden';\n\n\tif (currentSceneIndex === 0) {\n\t\tpagination_previous_off.style.visibility = 'visible';\n\t\tpagination_previous_on.style.visibility = 'hidden';\n\t} else if (currentSceneIndex === amountOfScenes - 1) {\n\t\tpagination_next_on.style.visibility = 'hidden';\n\t\tpagination_end.style.visibility = 'visible';\n\t}\n\n\t// only works for a scene with 1 segment [x,y]\n\t// not using animation.setDirection cause it changes the original array\n\t// even when using slice().reverse(), animation.setDirection changes the segment internally\n\tvar segment = scenes[currentSceneIndex].segment\n\tif (window.playDirection === -1) {\n\t\twindow.animation.setSpeed(4);\n\t\tsegment = scenes[currentSceneIndex + 1].segment.slice().reverse()\n\t}\n\n\twindow.animation.playSegments(segment, true);\n\n}",identifier:"33"},{name:"decreaseCurrentScene",source:"function(hypeDocument, element, event) {\t// not using animation.setDirection cause it changes the original array in-place, not even when using .slice()\n\twindow.playDirection = -1;\n\twindow.currentSceneIndex = window.currentSceneIndex - 1;\n}",identifier:"37"},{name:"increaseCurrentScene",source:"function(hypeDocument, element, event) {\t// not using animation.setDirection cause it changes the original array in-place, not even when using .slice()\n\twindow.playDirection = 1;\n\twindow.currentSceneIndex = window.currentSceneIndex + 1;\n}",identifier:"38"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_584(c,e,{"10":{n:"bodymovin-4.6.8.js"},"2":{p:1,n:"img_0.png",g:"56",t:"@1x"},"-2":{n:"blank.gif"},"3":{p:1,n:"img_2.png",g:"58",t:"@1x"},"11":{p:1,n:"Cutscene-next-red_2x.png",g:"17",t:"@2x"},"4":{p:1,n:"img_3.png",g:"59",t:"@1x"},"5":{p:1,n:"img_4.png",g:"60",t:"@1x"},"12":{n:"translationData.js"},"6":{p:1,n:"img_5.png",g:"61",t:"@1x"},"7":{p:1,n:"img_6.png",g:"62",t:"@1x"},"-1":{n:"PIE.htc"},"0":{n:"animationData.js"},"8":{p:1,n:"img_7.png",g:"63",t:"@1x"},"1":{p:1,n:"img_1.png",g:"57",t:"@1x"},"9":{n:"translate.min.js"}},h,[],d,[{n:"Bootstrap",o:"1",X:[0]}],[{A:{a:[{p:4,h:"5"}]},o:"3",p:"600px",cA:false,Y:1024,Z:768,c:"#EEEEEE",L:[],bY:1,d:1024,U:{"167":{V:{"Timeline principale":"191"},W:"191",n:"Navigation End"},"173":{V:{"Timeline principale":"193"},W:"193",n:"Navigation Next On"},"169":{V:{"Timeline principale":"192"},W:"192",n:"Navigation Previous On"},"11":{V:{"Timeline principale":"189"},W:"189",n:"Pagination"},"163":{V:{"Timeline principale":"190"},W:"190",n:"Navigation Previous Off"}},T:{"190":{b:[],c:"163",z:0,i:"190",a:[],n:"Timeline principale",s:"11",f:30},"42":{i:"42",n:"Text Timeline",z:0.15,b:[],a:[{f:"w",y:0,z:0.15,i:"e",e:1,s:0,o:"161"},{f:"w",y:0,z:0.15,i:"b",e:148,s:100,o:"161"},{y:0.15,i:"e",s:1,z:0,o:"161",f:"c"},{y:0.15,i:"b",s:148,z:0,o:"161",f:"c"}],f:30},"193":{b:[],c:"173",z:0,i:"193",a:[],n:"Timeline principale",s:"11",f:30},"147":{i:"147",n:"Scene 1 Timeline",z:4.06,b:[],a:[{f:"c",y:0,z:1.15,i:"e",e:1,s:-1,o:"177"},{y:1.15,i:"e",s:1,z:0,o:"177",f:"c"},{f:"w",y:3.21,z:0.15,i:"a",e:-1011,s:83,o:"177"},{y:4.06,i:"a",s:-1011,z:0,o:"177",f:"c"}],f:30},"189":{b:[],c:"11",z:0,i:"189",a:[],n:"Timeline principale",s:"11",f:30},"192":{b:[],c:"169",z:0,i:"192",a:[],n:"Timeline principale",s:"11",f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Timeline principale",z:0.15,b:[],a:[{f:"w",y:0,z:0.15,i:"e",e:1,s:0,o:"11"},{f:"w",y:0,z:0.15,i:"b",e:708,s:784,o:"11"},{y:0.15,i:"e",s:1,z:0,o:"11",f:"c"},{y:0.15,i:"b",s:708,z:0,o:"11",f:"c"}],f:30},"191":{b:[],c:"167",z:0,i:"191",a:[],n:"Timeline principale",s:"11",f:30},"72":{i:"72",n:"Scene 4 > 11 Timeline",z:12,b:[],a:[{f:"c",y:2,z:1,i:"e",e:1,s:-0.99999999999999989,o:"184"},{f:"c",y:2,z:1,i:"a",e:466,s:722,o:"184"},{f:"c",y:3,z:0.15,i:"G",e:"#000000",s:"#9E9E9E",o:"185"},{f:"c",y:3,z:2,i:"e",e:1,s:1,o:"184"},{y:3,i:"a",s:466,z:0,o:"184",f:"c"},{f:"c",p:2,y:3.15,z:0.15,i:"ActionHandler",e:{a:[{b:"72",symbolOid:"2",p:7}]},s:{a:[{b:"72",symbolOid:"2",p:7}]},o:"72"},{f:"c",y:3.15,z:0.15,i:"G",e:"#000000",s:"#9E9E9E",o:"187"},{f:"c",y:3.15,z:0.15,i:"G",e:"#9E9E9E",s:"#000000",o:"185"},{f:"c",p:2,y:4,z:0.15,i:"ActionHandler",e:{a:[{b:"72",symbolOid:"2",p:7}]},s:{a:[{b:"72",symbolOid:"2",p:7}]},o:"72"},{f:"c",y:4,z:0.15,i:"G",e:"#000000",s:"#9E9E9E",o:"186"},{f:"c",y:4,z:0.15,i:"G",e:"#9E9E9E",s:"#000000",o:"187"},{y:4,i:"G",s:"#9E9E9E",z:0,o:"185",f:"c"},{f:"c",p:2,y:4.15,z:0.14,i:"ActionHandler",e:{a:[{b:"72",symbolOid:"2",p:7}]},s:{a:[{b:"72",symbolOid:"2",p:7}]},o:"72"},{f:"c",y:4.15,z:0.15,i:"G",e:"#000000",s:"#9E9E9E",o:"188"},{f:"c",y:4.15,z:0.15,i:"G",e:"#9E9E9E",s:"#000000",o:"186"},{y:4.15,i:"G",s:"#9E9E9E",z:0,o:"187",f:"c"},{f:"c",p:2,y:4.29,z:4.01,i:"ActionHandler",e:{a:[{b:"72",symbolOid:"2",p:7}]},s:{a:[{b:"72",symbolOid:"2",p:7}]},o:"72"},{f:"w",y:5,z:0.15,i:"e",e:0,s:1,o:"184"},{f:"c",y:5,z:0.15,i:"G",e:"#9E9E9E",s:"#000000",o:"188"},{y:5,i:"G",s:"#9E9E9E",z:0,o:"186",f:"c"},{f:"c",y:5.15,z:0,i:"e",e:0,s:0,o:"184"},{y:5.15,i:"e",s:0,z:0,o:"184",f:"c"},{y:5.15,i:"G",s:"#9E9E9E",z:0,o:"188",f:"c"},{f:"c",y:8,z:0.15,i:"e",e:1,s:0,o:"178"},{f:"c",y:8.15,z:2,i:"e",e:1,s:1,o:"178"},{f:"c",y:8.15,z:0.15,i:"G",e:"#000000",s:"#9E9E9E",o:"179"},{f:"c",p:2,y:9,z:0.15,i:"ActionHandler",e:{a:[{b:"72",symbolOid:"2",p:7}]},s:{a:[{b:"72",symbolOid:"2",p:7}]},o:"72"},{f:"c",y:9,z:0.15,i:"G",e:"#000000",s:"#9E9E9E",o:"181"},{f:"c",y:9,z:0.15,i:"G",e:"#9E9E9E",s:"#000000",o:"179"},{f:"c",p:2,y:9.15,z:0.15,i:"ActionHandler",e:{a:[{b:"72",symbolOid:"2",p:7}]},s:{a:[{b:"72",symbolOid:"2",p:7}]},o:"72"},{f:"c",y:9.15,z:0.15,i:"G",e:"#000000",s:"#9E9E9E",o:"180"},{f:"c",y:9.15,z:0.15,i:"G",e:"#9E9E9E",s:"#000000",o:"181"},{y:9.15,i:"G",s:"#9E9E9E",z:0,o:"179",f:"c"},{f:"c",p:2,y:10,z:0.15,i:"ActionHandler",e:{a:[{b:"72",symbolOid:"2",p:7}]},s:{a:[{b:"72",symbolOid:"2",p:7}]},o:"72"},{f:"c",y:10,z:0.15,i:"G",e:"#000000",s:"#9E9E9E",o:"182"},{f:"c",y:10,z:0.15,i:"G",e:"#9E9E9E",s:"#000000",o:"180"},{y:10,i:"G",s:"#9E9E9E",z:0,o:"181",f:"c"},{f:"w",y:10.15,z:0.15,i:"e",e:0,s:1,o:"178"},{f:"c",p:2,y:10.15,z:0,i:"ActionHandler",s:{a:[{b:"72",symbolOid:"2",p:7}]},o:"72"},{f:"c",y:10.15,z:0.15,i:"G",e:"#9E9E9E",s:"#000000",o:"182"},{y:10.15,i:"G",s:"#9E9E9E",z:0,o:"180",f:"c"},{f:"c",y:11,z:1,i:"e",e:0,s:0,o:"178"},{y:11,i:"G",s:"#9E9E9E",z:0,o:"182",f:"c"},{y:12,i:"e",s:0,z:0,o:"178",f:"c"}],f:30}},bZ:180,O:["183","161","185","184","177","187","186","179","178","181","180","182","188","171","172","170","169","166","165","164","163","11","162","168","167","175","176","174","173"],n:"Untitled Layout","_":0,v:{"173":{c:44,aE:{a:[{p:4,h:"38"},{p:4,h:"33"}]},bS:257,d:44,e:1,aW:0,cA:false,i:"pagination_next_on",bF:"11",j:"absolute",x:"visible",k:"div",dB:"button",z:13,bX:false,cV:[],bY:1,a:198,bZ:180,b:0},"165":{c:44,bS:4,d:44,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:44,A:"#FFFFFF",x:"visible",j:"absolute",O:0,aJ:44,k:"div",C:"#FFFFFF",z:1,B:"#FFFFFF",D:"#FFFFFF",aK:44,bF:"164",P:0,a:0,aL:44,b:0},"186":{G:"#9E9E9E",aU:8,c:526,d:28,aV:8,r:"inline",s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",bD:"none",t:20,Z:"break-word",aP:"auto",i:"textoutput3",w:"Display can show text and images",bF:"184",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:0,b:146},"178":{x:"visible",k:"div",c:680,d:92,z:7,e:0,a:170,j:"absolute",b:556},"161":{G:"#000000",aU:8,c:593,bS:37,d:108,aV:8,r:"inline",e:0,s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",bD:"none",t:34,Z:"break-word",aP:"auto",i:"aText",w:"Build your own creation and learn to code it",j:"absolute",x:"visible",k:"div",y:"preserve",z:6,aS:8,aT:8,a:207,F:"center",b:100},"182":{G:"#9E9E9E",aU:8,c:134,d:76,aV:8,r:"inline",s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",bD:"none",t:17,Z:"break-word",aP:"auto",i:"textinput4",w:"Ultrasonic Sensor can detect objects",bF:"178",A:"#999999",x:"visible",j:"absolute",B:"#999999",y:"preserve",k:"div",C:"#999999",z:1,aS:8,D:"#999999",aT:8,a:530,F:"center",b:0},"11":{cS:true,x:"visible",a:391,bS:37,b:784,j:"absolute",cA:false,c:242,k:"div",z:4,d:44,cL:"11",bY:1,e:0,bZ:180,cM:true,bX:false,cV:[],bD:"none"},"174":{k:"div",x:"visible",bF:"173",c:44,d:44,z:3,a:0,j:"absolute",bS:13,b:0},"166":{b:0,z:2,K:"None",c:32,L:"None",d:32,aS:6,M:0,bD:"none",N:0,aT:6,bS:4,O:0,dB:"button",aU:6,P:0,h:"17",bF:"164",aV:6,j:"absolute",aI:50,k:"div",aJ:50,aK:50,aL:50,A:"#A0A0A0",p:"no-repeat",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"187":{G:"#9E9E9E",aU:8,c:526,d:56,aV:8,r:"inline",s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",bD:"none",t:20,Z:"break-word",aP:"auto",i:"textoutput2",w:"Brick Status Light can display three different colors",bF:"184",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:0,b:69},"179":{G:"#9E9E9E",aU:8,c:134,d:76,aV:8,r:"inline",s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",bD:"none",t:17,Z:"break-word",aP:"auto",i:"textinput1",w:"Color Sensor can detect colors or intensity of light",bF:"178",A:"#999999",x:"visible",j:"absolute",B:"#999999",y:"preserve",k:"div",C:"#999999",z:4,aS:8,D:"#999999",aT:8,a:0,F:"center",b:0},"170":{x:"visible",k:"div",bF:"169",aY:180,c:44,d:44,z:4,a:0,j:"absolute",bS:13,b:0},"162":{G:"#808080",aU:8,c:138,bS:37,d:28,aV:8,r:"inline",e:1,s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",bD:"none",t:20,Y:28,Z:"break-word",v:"normal",i:"pagination_text",w:"{current} of {total}",bF:"11",j:"absolute",x:"visible",k:"div",y:"preserve",z:10,aS:8,aT:8,a:44,F:"center",b:0},"183":{c:1024,bS:37,d:768,I:"None",s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",J:"None",bD:"none",K:"None",L:"None",M:0,i:"bodymovin",w:"",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,dB:"button",z:1,C:"#D8DDE4",D:"#D8DDE4",P:0,a:0,b:0},"175":{b:0,z:2,K:"None",c:32,L:"None",d:32,aS:6,M:0,bD:"none",N:0,aT:6,bS:4,O:0,dB:"button",aU:6,P:0,h:"17",bF:"174",aV:6,j:"absolute",aI:50,k:"div",aJ:50,aK:50,aL:50,A:"#A0A0A0",p:"no-repeat",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"167":{x:"visible",i:"pagination_end",a:198,b:0,j:"absolute",bF:"11",c:154,k:"div",z:15,d:44,dB:"button",aE:{a:[{j:"@next",p:5,k:false}]},e:1,bY:1,bZ:180,cA:false,bX:false,cV:[]},"188":{G:"#9E9E9E",aU:8,c:526,bS:37,d:28,aV:8,r:"inline",s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",bD:"none",t:20,Z:"break-word",aP:"auto",i:"textoutput4",w:"Speaker can play sounds",bF:"184",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,b:206},"171":{b:0,z:2,K:"None",c:32,L:"None",d:32,aS:6,M:0,bD:"none",N:0,aT:6,bS:4,O:0,dB:"button",aU:6,P:0,h:"17",bF:"170",aV:6,j:"absolute",aI:50,k:"div",aJ:50,aK:50,aL:50,A:"#A0A0A0",p:"no-repeat",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"163":{cN:"none",x:"visible",i:"pagination_previous_off",a:0,b:0,j:"absolute",bF:"11",z:12,k:"div",c:44,d:44,r:"inline",bY:1,e:1,aP:"auto",bZ:180,cA:false,bX:false,cV:[]},"184":{x:"visible",k:"div",c:542,d:176,z:8,e:0,a:466,j:"absolute",r:"inline",b:366},"176":{c:44,bS:4,d:44,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:44,A:"#FFFFFF",x:"visible",j:"absolute",O:0,aJ:44,k:"div",C:"#FFFFFF",z:1,B:"#FFFFFF",D:"#FFFFFF",aK:44,bF:"174",P:0,a:0,aL:44,b:0},"168":{b:0,z:16,K:"None",c:142,L:"None",d:32,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,g:"#FFFFFF",aU:6,P:0,bF:"167",aV:6,j:"absolute",aI:44,k:"div",aJ:44,aK:44,aL:44,A:"#A0A0A0",Y:32,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",D:"#A0A0A0",t:20,F:"center",G:"#FE4B26",aP:"pointer",w:"Start Coding",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"180":{G:"#9E9E9E",aU:8,c:134,d:76,aV:8,r:"inline",s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",bD:"none",t:17,Z:"break-word",aP:"auto",i:"textinput3",w:"Gyro Sensor can sense direction",bF:"178",A:"#999999",x:"visible",j:"absolute",B:"#999999",y:"preserve",k:"div",C:"#999999",z:2,aS:8,D:"#999999",aT:8,a:350,F:"center",b:0},"172":{c:44,bS:4,d:44,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:44,A:"#FFFFFF",x:"visible",j:"absolute",O:0,aJ:44,k:"div",C:"#FFFFFF",z:1,B:"#FFFFFF",D:"#FFFFFF",aK:44,bF:"170",P:0,a:0,aL:44,b:0},"164":{x:"visible",a:0,bS:13,b:0,j:"absolute",bF:"163",c:44,k:"div",z:9,d:44,aY:180,e:0.40000000000000002},"185":{G:"#9E9E9E",aU:8,c:526,bS:37,d:28,aV:8,r:"inline",s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",bD:"none",t:20,Z:"break-word",aP:"auto",i:"textoutput1",w:"Four output ports for connecting motors<br>",bF:"184",j:"absolute",x:"visible",k:"div",y:"preserve",z:5,aS:8,aT:8,a:0,b:0},"177":{G:"#FFFFFF",aU:8,c:841,d:158,aV:8,cY:"0",e:0,s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",r:"inline",bD:"none",t:36,Z:"break-word",i:"textscene0",w:"PROGRAMMING YOUR ROBOT",j:"absolute",x:"visible",k:"div",y:"preserve",z:5,aS:8,aT:8,a:83,F:"center",b:382},"169":{c:44,aE:{a:[{p:4,h:"37"},{p:4,h:"33"}]},bS:4,d:44,r:"inline",e:1,cA:false,i:"pagination_previous_on",bF:"11",j:"absolute",x:"visible",k:"div",dB:"button",z:14,bX:false,cV:[],bY:1,a:0,bZ:180,b:-1},"181":{G:"#9E9E9E",aU:8,c:152,d:76,aV:8,r:"inline",s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",bD:"none",t:17,Z:"break-word",aP:"auto",i:"textinput2",w:"Touch Sensor can \u201cfeel\u201d objects",bF:"178",A:"#999999",x:"visible",j:"absolute",B:"#999999",y:"preserve",k:"div",C:"#999999",z:3,aS:8,D:"#999999",aT:8,a:166,F:"center",b:0}}}],{"11":["162","163","164","165","166","167","168","169","170","171","172","173","174","175","176"]},g,{w:[[0,0,0.77,0,0.175,1,1,1]]},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();