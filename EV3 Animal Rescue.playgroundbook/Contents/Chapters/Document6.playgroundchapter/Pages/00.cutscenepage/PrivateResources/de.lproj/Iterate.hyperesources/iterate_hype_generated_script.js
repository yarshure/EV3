//	HYPE.documents["Iterate"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="Iterate.hyperesources",c="Iterate",e="iterate_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/iterate_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_584","HYPE_dtl_584",!0==(null!=a&&10>a||false==!0)?"HYPE-584.full.min.js":"HYPE-584.thin.min.js"),false==!0&&(a=a||l("HYPE_w_584","HYPE_wdtl_584","HYPE-584.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"bootstrap",source:"function(hypeDocument, element, event) {\n\tvar locale = window.locale || 'de';\n\tvar t = window.t ? window.t : (window.t = libTranslate.getTranslationFunction(window.translationData[locale]))\n\n\tvar scenes = hypeDocument.sceneNames();\n\tvar currentScene = hypeDocument.currentSceneName();\n\tvar amountOfScenes = scenes.length;\n\tvar sceneIndex = scenes.indexOf(currentScene);\n\n\tvar sceneIndexAdjusted = sceneIndex + 1;\n\n\t// current scene's title\n\thypeDocument.getElementById('title' + sceneIndexAdjusted).innerText = t('SCENES_SCENE_' + sceneIndexAdjusted + '_TITLE');\n\t\n\tpagination_end.childNodes[0].childNodes[0].innerText = t('START_CODING');\n\t\n\tvar text = t('PAGINATION_PAGE_OF', {\n\t\tcurrent: sceneIndexAdjusted, \n\t\ttotal: amountOfScenes\n\t});\n\tpagination_text.innerText = text;\n\t\t\n\t// Default\n\tpagination_previous_on.style.visibility = 'visible';\n\tpagination_next_on.style.visibility = 'visible';\n\tpagination_previous_off.style.visibility = 'hidden';\n\tpagination_end.style.visibility = 'hidden';\n\n\tif (sceneIndex === 0) {\n\t\tpagination_previous_off.style.visibility = 'visible';\n\t\tpagination_previous_on.style.visibility = 'hidden';\n\t} else if (sceneIndex === amountOfScenes - 1) {\n\t\tpagination_next_on.style.visibility = 'hidden';\n\t\tpagination_end.style.visibility = 'visible';\n\t} \t\n}",identifier:"673"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_584(c,e,{"3":{p:1,n:"Cutscene-next-red_2x.png",g:"5",t:"@2x"},"-2":{n:"blank.gif"},"4":{n:"translate.min.js"},"0":{p:1,n:"cs4-1_2x.png",g:"775",t:"@2x"},"5":{n:"translationData.js"},"1":{p:1,n:"cs4-2_2x.png",g:"777",t:"@2x"},"-1":{n:"PIE.htc"},"2":{p:1,n:"cs4-3_2x.png",g:"779",t:"@2x"}},h,[],d,[{n:"First",o:"768",X:[0]},{n:"Second",o:"1",X:[1]},{n:"Third",o:"484",X:[2]}],[{o:"774",A:{a:[{p:4,h:"673"}]},p:"600px",a:100,Y:1024,Z:768,b:100,cA:false,c:"#EEEEEE",L:[],bY:1,d:1024,U:{"685":{V:{"Main Timeline":"798"},W:"798",n:"Pagination"},"781":{V:{"Main Timeline":"799"},W:"799",n:"Navigation End"},"788":{V:{"Main Timeline":"801"},W:"801",n:"Navigation Previous On"},"792":{V:{"Main Timeline":"802"},W:"802",n:"Navigation Previous Off"},"784":{V:{"Main Timeline":"800"},W:"800",n:"Navigation Next On"}},T:{"801":{b:[],c:"788",z:0,i:"801",a:[],n:"Main Timeline",s:"685",f:30},"802":{b:[],c:"792",z:0,i:"802",a:[],n:"Main Timeline",s:"685",f:30},"798":{b:[{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"800"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"802"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"799"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"801"}],c:"685",z:0,i:"798",a:[],n:"Main Timeline",s:"685",f:30},kTimelineDefaultIdentifier:{f:30,z:1.15,i:"kTimelineDefaultIdentifier",n:"Main Timeline",j:{"0":[[512,162,512,162,512,208,512,208]]},a:[{f:"w",y:0,z:0.18,i:"e",e:1,s:0,o:"796"},{f:"w",y:0,z:0.18,i:"b",e:0,s:-16,o:"796"},{o:"797",y:0,z:0.18,i:"a",e:175.5,a:"0",f:"w",s:175.5},{f:"w",y:0,z:0.18,i:"e",e:1,s:0,o:"797"},{o:"797",y:0,z:0.18,i:"b",e:146,a:"0",f:"w",s:100},{y:0.18,i:"a",s:175.5,z:0,o:"797",f:"c"},{y:0.18,i:"e",s:1,z:0,o:"796",f:"w"},{y:0.18,i:"b",s:0,z:0,o:"796",f:"c"},{y:0.18,i:"e",s:1,z:0,o:"797",f:"c"},{y:0.18,i:"b",s:146,z:0,o:"797",f:"c"},{f:"c",y:1,z:0.15,i:"b",e:708,s:784,o:"685"},{f:"c",y:1,z:0.15,i:"e",e:1,s:0,o:"685"},{y:1.15,i:"b",s:708,z:0,o:"685",f:"c"},{y:1.15,i:"e",s:1,z:0,o:"685",f:"c"}],b:[]},"799":{b:[],c:"781",z:0,i:"799",a:[],n:"Main Timeline",s:"685",f:30},"800":{b:[],c:"784",z:0,i:"800",a:[],n:"Main Timeline",s:"685",f:30}},bZ:180,O:["796","797","790","791","789","788","795","794","793","792","685","783","782","781","786","787","785","784"],n:"Untitled Layout","_":0,v:{"788":{x:"visible",i:"pagination_previous_on",a:0,b:-1,j:"absolute",bF:"685",c:44,k:"div",z:14,d:44,bS:4,dB:"button",aE:{a:[{d:0.5,p:1,g:1,f:2}]},r:"inline",bY:1,bZ:180,cA:false,bX:false,cV:[]},"783":{G:"#808080",aU:8,c:138,bS:37,d:28,aV:8,r:"inline",s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",t:20,Y:28,Z:"break-word",v:"normal",i:"pagination_text",w:"x of y<br>",bF:"685",j:"absolute",x:"visible",k:"div",y:"preserve",z:10,aS:8,aT:8,a:44,F:"center",b:0},"794":{c:44,bS:4,d:44,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:44,A:"#FFFFFF",x:"visible",j:"absolute",O:0,aJ:44,k:"div",C:"#FFFFFF",z:1,B:"#FFFFFF",D:"#FFFFFF",aK:44,bF:"793",P:0,a:0,aL:44,b:0},"797":{b:100,G:"#000000",aU:8,c:657,bS:37,d:108,aE:{a:[{d:1.1000000000000001,p:1,g:2,f:2}]},cY:"0",e:0,s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",aV:8,r:"inline",t:34,Z:"break-word",i:"title1",w:"A lot of animals like fruit!",j:"absolute",x:"visible",k:"div",y:"preserve",dB:"button",z:7,aS:8,tX:0.5,aT:8,a:175.5,F:"center",tY:0.5},"786":{b:0,z:2,K:"None",c:32,L:"None",d:32,aS:6,M:0,bD:"none",N:0,aT:6,bS:4,O:0,dB:"button",aU:6,P:0,h:"5",bF:"785",aV:6,j:"absolute",aI:50,k:"div",aJ:50,aK:50,aL:50,A:"#A0A0A0",p:"no-repeat",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"781":{x:"visible",i:"pagination_end",a:198,b:0,aE:{a:[{j:"@next",p:5,k:false}]},j:"absolute",c:154,k:"div",z:15,d:44,bF:"685",dB:"button",bY:1,bZ:180,cA:false,bX:false,cV:[]},"792":{cN:"none",x:"visible",i:"pagination_previous_off",a:0,b:0,j:"absolute",bF:"685",c:44,k:"div",z:12,d:44,r:"inline",bY:1,aP:"auto",bZ:180,cA:false,bX:false,cV:[]},"789":{x:"visible",k:"div",bF:"788",aY:180,c:44,d:44,z:4,a:0,j:"absolute",bS:13,b:0},"784":{c:44,aE:{a:[{d:1.1000000000000001,p:1,g:1,f:1}]},bS:257,d:44,e:1,aW:0,cA:false,i:"pagination_next_on",bF:"685",j:"absolute",x:"visible",k:"div",dB:"button",z:13,bX:false,cV:[],bY:1,a:198,bZ:180,b:0},"790":{b:0,z:2,K:"None",c:32,L:"None",d:32,aS:6,M:0,bD:"none",N:0,aT:6,bS:4,O:0,dB:"button",aU:6,P:0,h:"5",bF:"789",aV:6,j:"absolute",aI:50,k:"div",aJ:50,aK:50,aL:50,A:"#A0A0A0",p:"no-repeat",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"795":{b:0,z:2,K:"None",c:32,L:"None",d:32,aS:6,M:0,bD:"none",N:0,aT:6,bS:4,O:0,dB:"button",aU:6,P:0,h:"5",bF:"793",aV:6,j:"absolute",aI:50,k:"div",aJ:50,aK:50,aL:50,A:"#A0A0A0",p:"no-repeat",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"685":{cS:true,x:"visible",a:391,bS:37,b:784,j:"absolute",cA:false,c:242,k:"div",z:8,cL:"685",d:44,bY:1,e:0,bZ:180,cM:true,bX:false,cV:[]},"787":{c:44,bS:4,d:44,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:44,A:"#FFFFFF",x:"visible",j:"absolute",O:0,aJ:44,k:"div",C:"#FFFFFF",z:1,B:"#FFFFFF",D:"#FFFFFF",aK:44,bF:"785",P:0,a:0,aL:44,b:0},"782":{b:0,z:16,K:"None",c:142,L:"None",d:32,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,g:"#FFFFFF",aU:6,P:0,bF:"781",aV:6,j:"absolute",aI:44,k:"div",aJ:44,aK:44,aL:44,A:"#A0A0A0",Y:32,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",D:"#A0A0A0",t:20,F:"center",G:"#FE4B26",aP:"pointer",w:"Start Coding",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"793":{x:"visible",a:0,bS:13,b:0,j:"absolute",bF:"792",c:44,k:"div",z:9,d:44,aY:180,e:0.40000000000000002},"796":{w:"",h:"775",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:-16,j:"absolute",dB:"img",z:6,k:"div",bS:37,d:768,c:1024,r:"inline",e:0},"785":{k:"div",x:"visible",bF:"784",c:44,d:44,z:3,a:0,j:"absolute",bS:13,b:0},"791":{c:44,bS:4,d:44,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:44,A:"#FFFFFF",x:"visible",j:"absolute",O:0,aJ:44,k:"div",C:"#FFFFFF",z:1,B:"#FFFFFF",D:"#FFFFFF",aK:44,bF:"789",P:0,a:0,aL:44,b:0}}},{o:"3",A:{a:[{p:4,h:"673"}]},p:"600px",a:100,Y:1024,Z:768,b:100,cA:false,c:"#EEEEEE",L:[],bY:1,d:1024,U:{"685":{V:{"Main Timeline":"798"},W:"798",n:"Pagination"},"781":{V:{"Main Timeline":"799"},W:"799",n:"Navigation End"},"788":{V:{"Main Timeline":"801"},W:"801",n:"Navigation Previous On"},"792":{V:{"Main Timeline":"802"},W:"802",n:"Navigation Previous Off"},"784":{V:{"Main Timeline":"800"},W:"800",n:"Navigation Next On"}},T:{"801":{b:[],c:"788",z:0,i:"801",a:[],n:"Main Timeline",s:"685",f:30},"802":{b:[],c:"792",z:0,i:"802",a:[],n:"Main Timeline",s:"685",f:30},"798":{b:[{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"800"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"802"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"799"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"801"}],c:"685",z:0,i:"798",a:[],n:"Main Timeline",s:"685",f:30},kTimelineDefaultIdentifier:{f:30,z:1.15,i:"kTimelineDefaultIdentifier",n:"Main Timeline",j:{"1":[[512,162,512,162,512,208,512,208]]},a:[{f:"w",y:0,z:0.18,i:"e",e:1,s:0,o:"804"},{f:"w",y:0,z:0.18,i:"b",e:0,s:-16,o:"804"},{o:"803",y:0,z:0.18,i:"a",e:175.5,a:"1",f:"w",s:175.5},{f:"w",y:0,z:0.18,i:"e",e:1,s:0,o:"803"},{o:"803",y:0,z:0.18,i:"b",e:146,a:"1",f:"w",s:100},{y:0.18,i:"a",s:175.5,z:0,o:"803",f:"c"},{y:0.18,i:"e",s:1,z:0,o:"804",f:"w"},{y:0.18,i:"b",s:0,z:0,o:"804",f:"c"},{y:0.18,i:"e",s:1,z:0,o:"803",f:"c"},{y:0.18,i:"b",s:146,z:0,o:"803",f:"c"},{f:"c",y:1,z:0.15,i:"b",e:708,s:784,o:"685"},{f:"c",y:1,z:0.15,i:"e",e:1,s:0,o:"685"},{y:1.15,i:"b",s:708,z:0,o:"685",f:"c"},{y:1.15,i:"e",s:1,z:0,o:"685",f:"c"}],b:[]},"799":{b:[],c:"781",z:0,i:"799",a:[],n:"Main Timeline",s:"685",f:30},"800":{b:[],c:"784",z:0,i:"800",a:[],n:"Main Timeline",s:"685",f:30}},bZ:180,O:["804","803","790","791","789","788","795","794","793","792","685","783","782","781","786","787","785","784"],n:"Untitled Layout","_":1,v:{"788":{c:44,aE:{a:[{d:0.5,p:1,g:1,f:2}]},bS:4,d:44,r:"inline",cA:false,i:"pagination_previous_on",bF:"685",j:"absolute",x:"visible",k:"div",dB:"button",z:14,cM:true,bX:false,cV:[],bY:1,a:0,bZ:180,b:-1},"783":{G:"#808080",aU:8,c:138,bS:37,d:28,aV:8,r:"inline",s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",t:20,Y:28,Z:"break-word",v:"normal",i:"pagination_text",w:"x of y<br>",bF:"685",j:"absolute",x:"visible",k:"div",y:"preserve",cM:true,z:10,aS:8,aT:8,a:44,F:"center",b:0},"794":{c:44,bS:4,d:44,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:44,A:"#FFFFFF",x:"visible",O:0,j:"absolute",aJ:44,k:"div",C:"#FFFFFF",z:1,cM:true,D:"#FFFFFF",aK:44,B:"#FFFFFF",bF:"793",P:0,a:0,aL:44,b:0},"804":{w:"",h:"777",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:-16,j:"absolute",dB:"img",z:6,k:"div",s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",d:768,bS:37,c:1024,e:0,r:"inline"},"786":{b:0,z:2,K:"None",c:32,L:"None",d:32,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,bS:4,aU:6,P:0,h:"5",bF:"785",aV:6,j:"absolute",k:"div",aI:50,aJ:50,aK:50,aL:50,A:"#A0A0A0",p:"no-repeat",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",cM:true,x:"visible",I:"None",a:0,y:"preserve",J:"None"},"781":{x:"visible",i:"pagination_end",a:198,b:0,j:"absolute",bF:"685",c:154,k:"div",z:15,d:44,dB:"button",aE:{a:[{j:"@next",p:5,k:false}]},bY:1,bZ:180,cM:true,cA:false,bX:false,cV:[]},"792":{cN:"none",x:"visible",i:"pagination_previous_off",a:0,b:0,j:"absolute",bF:"685",z:12,k:"div",c:44,d:44,r:"inline",bY:1,aP:"auto",bZ:180,cM:true,cA:false,bX:false,cV:[]},"789":{x:"visible",a:0,bS:13,b:0,j:"absolute",bF:"788",z:4,k:"div",c:44,d:44,aY:180,cM:true},"784":{c:44,aE:{a:[{d:1.1000000000000001,p:1,g:1,f:1}]},bS:257,d:44,e:1,aW:0,cA:false,i:"pagination_next_on",bF:"685",j:"absolute",x:"visible",k:"div",bX:false,z:13,dB:"button",cM:true,cV:[],bY:1,a:198,bZ:180,b:0},"790":{b:0,z:2,K:"None",c:32,L:"None",d:32,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,bS:4,aU:6,P:0,h:"5",bF:"789",aV:6,j:"absolute",k:"div",aI:50,aJ:50,aK:50,aL:50,A:"#A0A0A0",p:"no-repeat",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",cM:true,x:"visible",I:"None",a:0,y:"preserve",J:"None"},"795":{b:0,z:2,K:"None",c:32,L:"None",d:32,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,bS:4,aU:6,P:0,h:"5",bF:"793",aV:6,j:"absolute",k:"div",aI:50,aJ:50,aK:50,aL:50,A:"#A0A0A0",p:"no-repeat",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",cM:true,x:"visible",I:"None",a:0,y:"preserve",J:"None"},"685":{cS:true,x:"visible",a:391,bS:37,b:784,j:"absolute",cA:false,c:242,k:"div",z:8,cL:"685",d:44,bY:1,e:0,bZ:180,cM:true,bX:false,cV:[]},"787":{c:44,bS:4,d:44,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:44,A:"#FFFFFF",x:"visible",O:0,j:"absolute",aJ:44,k:"div",C:"#FFFFFF",z:1,cM:true,D:"#FFFFFF",aK:44,B:"#FFFFFF",bF:"785",P:0,a:0,aL:44,b:0},"782":{b:0,z:16,K:"None",c:142,L:"None",d:32,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,g:"#FFFFFF",aU:6,P:0,bF:"781",aV:6,j:"absolute",k:"div",aI:44,aJ:44,aK:44,aL:44,A:"#A0A0A0",Y:32,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",D:"#A0A0A0",t:20,F:"center",G:"#FE4B26",aP:"pointer",w:"Start Coding",cM:true,x:"visible",I:"None",a:0,y:"preserve",J:"None"},"793":{x:"visible",a:0,bS:13,b:0,j:"absolute",bF:"792",z:9,k:"div",c:44,d:44,aY:180,e:0.40000000000000002,cM:true},"803":{b:100,G:"#000000",aU:8,c:657,bS:37,d:108,aE:{a:[{d:1.1000000000000001,p:1,g:2,f:2}]},cY:"0",e:0,s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",aV:8,r:"inline",t:34,Z:"break-word",i:"title2",w:"Sometimes finding it is just a matter of getting there first!",j:"absolute",x:"visible",k:"div",y:"preserve",dB:"button",z:7,aS:8,tX:0.5,aT:8,a:175.5,F:"center",tY:0.5},"785":{x:"visible",k:"div",bF:"784",c:44,cM:true,d:44,z:3,a:0,j:"absolute",bS:13,b:0},"791":{c:44,bS:4,d:44,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:44,A:"#FFFFFF",x:"visible",O:0,j:"absolute",aJ:44,k:"div",C:"#FFFFFF",z:1,cM:true,D:"#FFFFFF",aK:44,B:"#FFFFFF",bF:"789",P:0,a:0,aL:44,b:0}}},{o:"490",A:{a:[{p:4,h:"673"}]},p:"600px",a:100,Y:1024,Z:768,b:100,cA:false,c:"#EEEEEE",L:[],bY:1,d:1024,U:{"685":{V:{"Main Timeline":"798"},W:"798",n:"Pagination"},"781":{V:{"Main Timeline":"799"},W:"799",n:"Navigation End"},"788":{V:{"Main Timeline":"801"},W:"801",n:"Navigation Previous On"},"792":{V:{"Main Timeline":"802"},W:"802",n:"Navigation Previous Off"},"784":{V:{"Main Timeline":"800"},W:"800",n:"Navigation Next On"}},T:{"801":{b:[],c:"788",z:0,i:"801",a:[],n:"Main Timeline",s:"685",f:30},"802":{b:[],c:"792",z:0,i:"802",a:[],n:"Main Timeline",s:"685",f:30},"798":{b:[{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"800"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"802"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"799"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"801"}],c:"685",z:0,i:"798",a:[],n:"Main Timeline",s:"685",f:30},kTimelineDefaultIdentifier:{f:30,z:1.15,i:"kTimelineDefaultIdentifier",n:"Main Timeline",j:{"2":[[512,162,512,162,512,208,512,208]]},a:[{f:"w",y:0,z:0.18,i:"e",e:1,s:0,o:"806"},{f:"w",y:0,z:0.18,i:"b",e:0,s:-16,o:"806"},{o:"805",y:0,z:0.18,i:"a",e:175.5,a:"2",f:"w",s:175.5},{f:"w",y:0,z:0.18,i:"e",e:1,s:0,o:"805"},{o:"805",y:0,z:0.18,i:"b",e:146,a:"2",f:"w",s:100},{y:0.18,i:"a",s:175.5,z:0,o:"805",f:"c"},{y:0.18,i:"e",s:1,z:0,o:"806",f:"w"},{y:0.18,i:"b",s:0,z:0,o:"806",f:"c"},{y:0.18,i:"e",s:1,z:0,o:"805",f:"c"},{y:0.18,i:"b",s:146,z:0,o:"805",f:"c"},{f:"c",y:1,z:0.15,i:"b",e:708,s:784,o:"685"},{f:"c",y:1,z:0.15,i:"e",e:1,s:0,o:"685"},{y:1.15,i:"b",s:708,z:0,o:"685",f:"c"},{y:1.15,i:"e",s:1,z:0,o:"685",f:"c"}],b:[]},"799":{b:[],c:"781",z:0,i:"799",a:[],n:"Main Timeline",s:"685",f:30},"800":{b:[],c:"784",z:0,i:"800",a:[],n:"Main Timeline",s:"685",f:30}},bZ:180,O:["806","805","790","791","789","788","795","794","793","792","685","783","782","781","786","787","785","784"],n:"Untitled Layout","_":2,v:{"806":{w:"",h:"779",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:-16,j:"absolute",dB:"img",z:6,k:"div",bS:37,d:768,c:1024,r:"inline",e:0},"788":{c:44,aE:{a:[{d:0.5,p:1,g:1,f:2}]},bS:4,d:44,r:"inline",cA:false,i:"pagination_previous_on",bF:"685",j:"absolute",x:"visible",k:"div",dB:"button",z:14,cM:true,bX:false,cV:[],bY:1,a:0,bZ:180,b:-1},"783":{G:"#808080",aU:8,c:138,bS:37,d:28,aV:8,r:"inline",s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",t:20,Y:28,Z:"break-word",v:"normal",i:"pagination_text",w:"x of y<br>",bF:"685",j:"absolute",x:"visible",k:"div",y:"preserve",cM:true,z:10,aS:8,aT:8,a:44,F:"center",b:0},"794":{c:44,bS:4,d:44,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:44,A:"#FFFFFF",x:"visible",O:0,j:"absolute",aJ:44,k:"div",C:"#FFFFFF",z:1,cM:true,D:"#FFFFFF",aK:44,B:"#FFFFFF",bF:"793",P:0,a:0,aL:44,b:0},"786":{b:0,z:2,K:"None",c:32,L:"None",d:32,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,bS:4,aU:6,P:0,h:"5",bF:"785",aV:6,j:"absolute",k:"div",aI:50,aJ:50,aK:50,aL:50,A:"#A0A0A0",p:"no-repeat",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",cM:true,x:"visible",I:"None",a:0,y:"preserve",J:"None"},"781":{x:"visible",i:"pagination_end",a:198,b:0,j:"absolute",bF:"685",c:154,k:"div",z:15,d:44,dB:"button",aE:{a:[{j:"@next",p:5,k:false}]},bY:1,bZ:180,cM:true,cA:false,bX:false,cV:[]},"792":{cN:"none",x:"visible",i:"pagination_previous_off",a:0,b:0,j:"absolute",bF:"685",z:12,k:"div",c:44,d:44,r:"inline",bY:1,aP:"auto",bZ:180,cM:true,cA:false,bX:false,cV:[]},"789":{x:"visible",a:0,bS:13,b:0,j:"absolute",bF:"788",z:4,k:"div",c:44,d:44,aY:180,cM:true},"784":{c:44,aE:{a:[{d:1.1000000000000001,p:1,g:1,f:1}]},bS:257,d:44,e:1,aW:0,cA:false,i:"pagination_next_on",bF:"685",j:"absolute",x:"visible",k:"div",bX:false,z:13,dB:"button",cM:true,cV:[],bY:1,a:198,bZ:180,b:0},"790":{b:0,z:2,K:"None",c:32,L:"None",d:32,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,bS:4,aU:6,P:0,h:"5",bF:"789",aV:6,j:"absolute",k:"div",aI:50,aJ:50,aK:50,aL:50,A:"#A0A0A0",p:"no-repeat",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",cM:true,x:"visible",I:"None",a:0,y:"preserve",J:"None"},"795":{b:0,z:2,K:"None",c:32,L:"None",d:32,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,bS:4,aU:6,P:0,h:"5",bF:"793",aV:6,j:"absolute",k:"div",aI:50,aJ:50,aK:50,aL:50,A:"#A0A0A0",p:"no-repeat",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",cM:true,x:"visible",I:"None",a:0,y:"preserve",J:"None"},"685":{cS:true,x:"visible",a:391,bS:37,b:784,j:"absolute",cA:false,c:242,k:"div",z:8,cL:"685",d:44,bY:1,e:0,bZ:180,cM:true,bX:false,cV:[]},"787":{c:44,bS:4,d:44,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:44,A:"#FFFFFF",x:"visible",O:0,j:"absolute",aJ:44,k:"div",C:"#FFFFFF",z:1,cM:true,D:"#FFFFFF",aK:44,B:"#FFFFFF",bF:"785",P:0,a:0,aL:44,b:0},"805":{b:100,G:"#000000",aU:8,c:657,bS:37,d:108,aV:8,cY:"0",e:0,s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",r:"inline",t:34,Z:"break-word",i:"title3",w:"Redesign your turtle so it can get to the fruit faster!",j:"absolute",x:"visible",k:"div",y:"preserve",z:7,aS:8,tX:0.5,aT:8,a:175.5,F:"center",tY:0.5},"782":{b:0,z:16,K:"None",c:142,L:"None",d:32,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,g:"#FFFFFF",aU:6,P:0,bF:"781",aV:6,j:"absolute",k:"div",aI:44,aJ:44,aK:44,aL:44,A:"#A0A0A0",Y:32,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",D:"#A0A0A0",t:20,F:"center",G:"#FE4B26",aP:"pointer",w:"Start Coding",cM:true,x:"visible",I:"None",a:0,y:"preserve",J:"None"},"793":{x:"visible",a:0,bS:13,b:0,j:"absolute",bF:"792",z:9,k:"div",c:44,d:44,aY:180,e:0.40000000000000002,cM:true},"785":{x:"visible",k:"div",bF:"784",c:44,cM:true,d:44,z:3,a:0,j:"absolute",bS:13,b:0},"791":{c:44,bS:4,d:44,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:44,A:"#FFFFFF",x:"visible",O:0,j:"absolute",aJ:44,k:"div",C:"#FFFFFF",z:1,cM:true,D:"#FFFFFF",aK:44,B:"#FFFFFF",bF:"789",P:0,a:0,aL:44,b:0}}}],{"685":["781","782","783","784","785","786","787","788","789","790","791","792","793","794","795"]},g,{w:[[0,0,0.77,0,0.175,1,1,1]]},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
