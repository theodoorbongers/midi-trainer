(this["webpackJsonpmidi-trainer"]=this["webpackJsonpmidi-trainer"]||[]).push([[0],{46:function(e,t,n){e.exports=n(58)},51:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(36),c=n.n(i),l=(n(51),n(10)),o=n(37),s=n(3),u=n(59),d=s.a.create((function(e){navigator.requestMIDIAccess().then((function(t){if(0!==t.inputs.size){var n,r=Object(o.a)(t.inputs);try{for(r.s();!(n=r.n()).done;){Object(l.a)(n.value,2)[1].onmidimessage=function(t){e.next(t)}}}catch(a){r.e(a)}finally{r.f()}}else e.error("No MIDI inputs available")}),e.error)})).pipe(Object(u.a)()),h=n(24),f={get:function(){return 1+(15&this.event.data[0])}},p={get:function(){return 127&this.event.data[1]}},y={get:function(){return 127&this.event.data[2]}},m=function(e){var t=e.displayName,n=e.properties,r=e.matcher,a=Symbol(t);return{type:a,matches:r,create:function(e){return Object.create(function(e,t,n){return Object.assign(Object.create(null,e),{type:n,toString:function(){var n=this;return"".concat(t," MIDI message (").concat(Object.keys(e).map((function(e){return"".concat(e,": ").concat(n[e])})).join(", "),")")}})}(n,t,a),{event:{value:e,writable:!1}})}}},E=m({displayName:"Note Off",properties:{channel:f,key:p,velocity:y},matcher:function(e){return 128===(240&e.data[0])}}),g=m({displayName:"Note On",properties:{channel:f,key:p,velocity:y},matcher:function(e){return 144===(240&e.data[0])}}),b=m({displayName:"Unknown",properties:{status:{get:function(){return this.event.data[0]}},data1:{get:function(){return this.event.data[1]}},data2:{get:function(){return this.event.data[2]}}},matcher:function(){return!0}}),v=m({displayName:"Control Change",properties:{channel:f,controller:{get:function(){return 127&this.event.data[1]}},value:{get:function(){return 127&this.event.data[2]}}},matcher:function(e){return 176===(240&e.data[0])}}),k=m({displayName:"Program Change",properties:{channel:f,patch:{get:function(){return 127&this.event.data[1]}}},matcher:function(e){return 192===(240&e.data[0])}}),O=m({displayName:"Pitch Bend Change",properties:{channel:f,value:{get:function(){return 127&this.event.data[1]|(127&this.event.data[2])<<7}}},matcher:function(e){return 224===(240&e.data[0])}}),x=[E,g,v,k,O,b],w=n(60),j=n(14),S=n(38),G=function(){return function(e){return e.pipe(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(S.a)((function(e){return t.includes(e.type)}))}(g.type,E.type),Object(w.a)((function(e,t){return(t.type===g.type&&t.velocity?e.add(t.key):e.delete(t.key)).sort()}),Object(j.b)()))}},P=n(61),C=n(62),M=n(63),W=n(68),N=n(18),A=n(64),B=n(65),K=n(67),R=n(66),I=n(39),U=n.n(I),$=function(e){return Object(h.a)((function(t){return{type:e,value:t}}))},z=function(e){return function(t){return t.pipe(Object(S.a)((function(t){return t.type===e})),Object(h.a)((function(e){return e.value})))}},L=n(40),T=n.n(L),D=n(42),F=n(41),X=n.n(F),H=["C","D\u266d","D","E\u266d","E","F","F\u266f","G","A\u266d","A","B\u266d","B"],J=[[function(e){return"".concat(e,"m9 (A)")},[3,7,10,14]],[function(e){return"".concat(e,"m9 (B)")},[10,14,15,19]],[function(e){return"".concat(e,"maj9 (A)")},[4,7,11,14]],[function(e){return"".concat(e,"maj9 (B)")},[11,14,16,19]],[function(e){return"".concat(e,"13 (A)")},[4,9,10,14]],[function(e){return"".concat(e,"13 (B)")},[10,14,16,21]]],Y=function(e,t){return t.map((function(t){return e+t}))},q=function(e){return e.map((function(t){return t-e.first()}))},Q={EXERCISE:Symbol("EXERCISE"),RESULT:Symbol("RESULT")},V=new U.a,Z=function(){var e=new P.a(!1);e.subscribe((function(e){e?V.enable():V.disable()}));var t=d.pipe(Object(h.a)((function(e){return x.find((function(t){return t.matches(e)})).create(e)}))),n=t.pipe(G()),r=Object(C.a)((function(){return Object(M.a)(function(){var e=T()(0,11),t=X()(J),n=Object(l.a)(t,2),r=n[0],a=n[1],i=Object(j.a)(a).sort(),c=Y(e,i);return{displayName:r(H[e]),getResult:function(e){return e.pipe(G(),Object(D.a)((function(e){return e.size?c.some((function(t,n){return t%12===e.first()%12&&q(c.slice(n)).isSuperset(q(e))}))?c.size===e.size?[!0]:[]:[!1]:[]})),Object(K.a)())}}}())})).pipe(Object(A.a)((function(e){return Object(W.a)(e.pipe($(Q.EXERCISE)),e.pipe(Object(B.a)((function(e){return e.getResult(t)})),Object(K.a)(),$(Q.RESULT)))})),Object(R.a)(),Object(u.a)());return{keyboardKeyState$:n,exercise$:r.pipe(z(Q.EXERCISE)),solutions$:r.pipe(z(Q.RESULT)),onToggleWakeLock:function(){return e.pipe(Object(K.a)()).subscribe((function(t){return e.next(!t)}))},wakeLockActive$:Object(N.a)(e)}},_=function(e){var t=Object(r.useState)(null),n=Object(l.a)(t,2),a=n[0],i=n[1];return Object(r.useEffect)((function(){if(e){var t=e.subscribe(i);return function(){return t.unsubscribe()}}}),[e]),a},ee=n(43),te=n.n(ee),ne=n(44),re=n.n(ne),ae=[0,5.414,9.0444307,15.837,18.0888614,27.1332921,31.859,36.1777228,42.282,45.2221535,52.705,54.2665842],ie=function(e){var t=e.lowestKey,n=void 0===t?21:t,r=e.highestKey,i=void 0===r?108:r,c=e.keyState,l=e.x,o=e.y,s=e.width,u=e.height;return a.a.createElement("svg",{version:"1.1",x:l,y:o,width:s,height:u,viewBox:se(n,i),preserveAspectRatio:"xMidYMin meet"},a.a.createElement("defs",{id:"defs2"},a.a.createElement("linearGradient",{id:"linearGradient3981"},a.a.createElement("stop",{id:"stop3977",style:{stopColor:"#f2f2f2",stopOpacity:"1"},offset:"0"}),a.a.createElement("stop",{id:"stop3979",style:{stopColor:"#cccccc",stopOpacity:"1"},offset:"1"})),a.a.createElement("linearGradient",{id:"linearGradient4915",gradientUnits:"userSpaceOnUse",x1:"107.723",x2:"107.723",y1:"131.52364",y2:"129.08444",xlinkHref:"#linearGradient3981"}),a.a.createElement("clipPath",{id:"clipPath3812"},a.a.createElement("rect",{height:"36.348648",id:"rect3814",style:{display:"inline",opacity:"0.17105264",strokeWidth:"0.26458332"},width:"5.57514",x:"107.723",y:"125.41296"})),a.a.createElement("clipPath",{id:"clipPath3973"},a.a.createElement("rect",{height:"56.66114",id:"rect3975",style:{display:"inline",fill:"#808000",strokeWidth:"0.26458332"},width:"9.0444307",x:"102.62053",y:"125.41296"})),a.a.createElement("g",{id:"whiteKey",transform:"translate(-102.62054,-125.41296)"},a.a.createElement("rect",{height:"56.66114",id:"rect3912-3-8",style:{display:"inline",fill:"#1a1a1a",strokeWidth:"0.26458332"},width:"9.0444307",x:"102.62054",y:"125.41296"}),a.a.createElement("rect",{height:"56.472153",id:"rect3912",style:{display:"inline",fill:"#666666",strokeWidth:"0.26075235"},width:"8.8138103",x:"102.73585",y:"125.41296"}),a.a.createElement("rect",{height:"58.599155",id:"rect3912-2",style:{display:"inline",fill:"url(#linearGradient4915)",fillOpacity:"1",strokeWidth:"0.26452145"},width:"8.7103424",clipPath:"url(#clipPath3973)",rx:"0.2",ry:"0.2",transform:"matrix(0.96598043,0,0,0.99499097,3.6446156,0.62819669)",x:"102.78758",y:"123.2748"})),a.a.createElement("rect",{height:"56.66114",id:"whiteKeyPressMask",style:{display:"inline",fill:"green",mixBlendMode:"hard-light",strokeWidth:"0.26458332"},width:"9.0444307",x:"0",y:"0"}),a.a.createElement("linearGradient",{id:"linearGradient3883"},a.a.createElement("stop",{id:"stop3879",style:{stopColor:"#000000",stopOpacity:"1"},offset:"0"}),a.a.createElement("stop",{id:"stop3881",style:{stopColor:"#1a1a1a",stopOpacity:"1"},offset:"1"})),a.a.createElement("linearGradient",{id:"linearGradient3837"},a.a.createElement("stop",{id:"stop3833",style:{stopColor:"#7d7d7d",stopOpacity:"1"},offset:"0"}),a.a.createElement("stop",{id:"stop3835",style:{stopColor:"#b2b2b2",stopOpacity:"1"},offset:"1"})),a.a.createElement("linearGradient",{id:"linearGradient5265",gradientUnits:"userSpaceOnUse",x1:"110.46354",x2:"110.46354",y1:"145.41296",y2:"153.55803",xlinkHref:"#linearGradient3837"}),a.a.createElement("linearGradient",{id:"linearGradient5267",gradientUnits:"userSpaceOnUse",x1:"110.3957",x2:"113.298",y1:"148.06406",y2:"148.33133",xlinkHref:"#linearGradient3883"}),a.a.createElement("clipPath",{id:"clipPath3812"},a.a.createElement("rect",{height:"36.348648",id:"rect3814",style:{display:"inline",opacity:"0.17105264",strokeWidth:"0.26458332"},width:"5.57514",x:"107.723",y:"125.41296"})),a.a.createElement("clipPath",{id:"clipPath3973"},a.a.createElement("rect",{height:"56.66114",id:"rect3975",style:{display:"inline",fill:"#808000",strokeWidth:"0.26458332"},width:"9.0444307",x:"102.62053",y:"125.41296"})),a.a.createElement("g",{id:"blackKey",transform:"matrix(0.99993528,0,0,1,-107.71603,-125.41296)"},a.a.createElement("rect",{height:"36.348648",id:"rect5255",style:{display:"inline",opacity:"1",fill:"#4d4d4d",fillOpacity:"1",strokeWidth:"0.26458332"},width:"5.57514",x:"107.71603",y:"125.41296"}),a.a.createElement("rect",{height:"35.657352",id:"rect5257",style:{fill:"url(#linearGradient5265)",fillOpacity:"1",strokeWidth:"0.23320046"},width:"4.0383401",clipPath:"url(#clipPath3812)",rx:"1.5",ry:"1.5",transform:"matrix(0.99992069,0,0,1,0.0087649,0)",x:"108.49162",y:"123.00336"}),a.a.createElement("path",{id:"path5259",style:{strokeWidth:"0.26458332"},d:"m 112.96463,160.73864 c 0.10641,0.33021 0.19199,1.02296 0.19199,1.02296 -1.6,0 -1.79647,3.5e-4 -2.64612,4e-4 -0.84965,-5e-5 -1.04612,-4e-4 -2.64612,-4e-4 0,0 0.0856,-0.69275 0.19199,-1.02296 0.1363,-0.42296 0.22321,-0.9238 0.5654,-1.20731 0.49755,-0.4122 1.33085,-0.49564 1.88873,-0.50274 0.55788,0.007 1.39118,0.0905 1.88873,0.50274 0.34219,0.28351 0.4291,0.78435 0.5654,1.20731 z"}),a.a.createElement("path",{id:"path5261",style:{fill:"url(#linearGradient5267)",fillOpacity:"1",strokeWidth:"0.05778855"},d:"m 107.723,125.41296 h 0.49315 c 0,0 0.0205,31.37403 0,32.46519 -0.0205,1.09117 -0.49315,3.88346 -0.49315,3.88346 z m 5.575,0 h -0.49315 c 0,0 -0.0205,31.37403 0,32.46519 0.0205,1.09117 0.49315,3.88346 0.49315,3.88346 z"})),a.a.createElement("rect",{height:"36.348648",id:"blackKeyPressMask",style:{display:"inline",opacity:"1",fill:"green",mixBlendMode:"hard-light",fillOpacity:"1",strokeWidth:"0.26458332"},width:"5.57514"})),re()(te()(n,i+1),le).map((function(e){return a.a.createElement(ce,{key:e,keyNumber:e,isPressed:c.has(e)})})))},ce=function(e){var t=e.keyNumber,n=e.isPressed;return a.a.createElement(a.a.Fragment,null,a.a.createElement("use",{href:le(t)?"#blackKey":"#whiteKey",x:oe(t)}),n&&a.a.createElement("use",{href:le(t)?"#blackKeyPressMask":"#whiteKeyPressMask",x:oe(t)}))},le=function(e){return[1,3,6,8,10].includes(e%12)},oe=function(e){return Math.floor(e/12)*(7*9.0444307)+ae[e%12]},se=function(e,t){var n=oe(e),r=oe(t)-oe(e)+(le(t)?5.575:9.0444307);return"".concat(n," ").concat(0," ").concat(r," ").concat(56.66114)},ue=(n(57),function(){var e=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){var e=Z();a(e)}),[]),n}(),t=_(null===e||void 0===e?void 0:e.keyboardKeyState$)||Object(j.c)(),n=_(null===e||void 0===e?void 0:e.exercise$),i=_(null===e||void 0===e?void 0:e.solutions$),c=_(null===e||void 0===e?void 0:e.wakeLockActive$);return e&&a.a.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 160 90",preserveAspectRatio:"xMidYMid meet",onClick:e.onToggleWakeLock,style:{backgroundColor:c?"hsl(120, 5%, 30%)":"hsl(120, 5%, 60%)"}},a.a.createElement("filter",{id:"dropShadow",height:"130%"},a.a.createElement("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"1"}),a.a.createElement("feOffset",{dx:"1",dy:"1",result:"offsetblur"}),a.a.createElement("feComponentTransfer",null,a.a.createElement("feFuncA",{type:"linear",slope:"0.5"})),a.a.createElement("feMerge",null,a.a.createElement("feMergeNode",null),a.a.createElement("feMergeNode",{in:"SourceGraphic"}))),a.a.createElement("rect",{x:"5%",y:"5%",width:"90%",height:"90%",fill:"white",stroke:"black",strokeWidth:"0.1",style:{filter:"url(#dropShadow)"}}),a.a.createElement("svg",{x:"6%",y:"6%",width:"88%",height:"88%"},a.a.createElement(ie,{keyState:t,x:"0%",y:"0%",width:"100%"}),a.a.createElement("text",{x:"50%",y:"50%",dominantBaseline:"central",textAnchor:"middle",style:{fontSize:25}},null===n||void 0===n?void 0:n.displayName),null!==i&&a.a.createElement("rect",{x:"0",y:"95%",width:"100%",height:"5%",fill:i?"green":"red"})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.371d6285.chunk.js.map