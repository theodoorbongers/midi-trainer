(this["webpackJsonpmidi-trainer"]=this["webpackJsonpmidi-trainer"]||[]).push([[0],{16:function(e,t,n){e.exports={app:"App_app__PQN_E",middleRow:"App_middleRow__sVF2U",main:"App_main__26IeJ",console:"App_console__3DjJV",status:"App_status__3rE2Z",keyboard:"App_keyboard__3n2bg"}},27:function(e,t,n){e.exports={statusPanel:"StatusPanel_statusPanel__3ZieZ",midiInputs:"StatusPanel_midiInputs__2wQ-e",toggle:"StatusPanel_toggle___QE6_"}},39:function(e,t,n){e.exports={switch:"Switch_switch__38k5d",label:"Switch_label__3xeTg"}},51:function(e,t,n){e.exports={panel:"Panel_panel__Mjifb"}},55:function(e,t,n){e.exports={consolePanel:"ConsolePanel_consolePanel__gBp5J"}},57:function(e,t,n){e.exports=n(66)},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(43),c=n.n(i),l=n(24),s=n(67),o=n(69),u=n(23),d=n(70),p=n(68),m=n(11),f=n(45),h=n(71),y=n(72),b=n(37),O=n(73),v=n(74),g=Object(s.a)((function(){return navigator.requestMIDIAccess()})).pipe(Object(p.a)((function(e){return Object(o.a)(Object(u.a)(e.inputs.values()),Object(d.a)(e,"statechange").pipe(Object(m.a)((function(e){return e.port})),Object(f.a)((function(e){return"input"===e.type&&"connected"===e.state})))).pipe(Object(h.a)((function(e){return e.id})),Object(m.a)((function(t){return{name:t.name,connected$:Object(d.a)(e,"statechange").pipe(Object(f.a)((function(e){return e.port.id===t.id})),Object(m.a)((function(e){return"connected"===e.port.state})),Object(y.a)(!0),Object(b.a)(),Object(O.a)()),messages$:j(t)}})))})),Object(v.a)()),j=function(e){return Object(d.a)(e,"midimessage").pipe(Object(v.a)())},E={get:function(){return 1+(15&this.event.data[0])}},x={get:function(){return 127&this.event.data[1]}},k={get:function(){return 127&this.event.data[2]}},w=function(e){var t=e.displayName,n=e.properties,a=e.matcher,r=Symbol(t);return{type:r,matches:a,create:function(e){return Object.create(function(e,t,n){return Object.assign(Object.create(null,e),{type:n,toString:function(){var n=this;return"".concat(t," MIDI message (").concat(Object.keys(e).map((function(e){return"".concat(e,": ").concat(n[e])})).join(", "),")")}})}(n,t,r),{event:{value:e,writable:!1}})}}},_=w({displayName:"Note Off",properties:{channel:E,key:x,velocity:k},matcher:function(e){return 128===(240&e.data[0])}}),N=w({displayName:"Note On",properties:{channel:E,key:x,velocity:k},matcher:function(e){return 144===(240&e.data[0])}}),P=w({displayName:"Unknown",properties:{status:{get:function(){return this.event.data[0]}},data1:{get:function(){return this.event.data[1]}},data2:{get:function(){return this.event.data[2]}}},matcher:function(){return!0}}),C=w({displayName:"Control Change",properties:{channel:E,controller:{get:function(){return 127&this.event.data[1]}},value:{get:function(){return 127&this.event.data[2]}}},matcher:function(e){return 176===(240&e.data[0])}}),$=w({displayName:"Program Change",properties:{channel:E,patch:{get:function(){return 127&this.event.data[1]}}},matcher:function(e){return 192===(240&e.data[0])}}),M=w({displayName:"Pitch Bend Change",properties:{channel:E,value:{get:function(){return 127&this.event.data[1]|(127&this.event.data[2])<<7}}},matcher:function(e){return 224===(240&e.data[0])}}),S=[_,N,C,$,M,P],A=n(75),G=n(9),W=function(){return function(e){return e.pipe(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(f.a)((function(e){return t.includes(e.type)}))}(N.type,_.type),Object(A.a)((function(e,t){return(t.type===N.type&&t.velocity?e.add(t.key):e.delete(t.key)).sort()}),Object(G.b)()))}},B=n(2),I=n(46),K=n(50),z=n(44),U=n(79),V=n(77),D=n(76),L=n(78),R=n(47),F=n.n(R),J=n(48),H=n.n(J),Q=n(80),T=n(49),Z=n.n(T),Y=n(7),q=n(81),X=["C","D\u266d","D","E\u266d","E","F","F\u266f","G","A\u266d","A","B\u266d","B"],ee=[[function(e){return"".concat(e,"m9 (A)")},[3,7,10,14]],[function(e){return"".concat(e,"m9 (B)")},[10,14,15,19]],[function(e){return"".concat(e,"maj9 (A)")},[4,7,11,14]],[function(e){return"".concat(e,"maj9 (B)")},[11,14,16,19]],[function(e){return"".concat(e,"13 (A)")},[4,9,10,14]],[function(e){return"".concat(e,"13 (B)")},[10,14,16,21]]],te=function(e,t){return t.map((function(t){return e+t}))},ne=function(e){return e.map((function(t){return t-e.first()}))},ae=new F.a,re=function(){var e=new B.a,t=new I.a(!1);e.add(t.subscribe((function(e){e?ae.enable():ae.disable()})));var n=new I.a(!1),a=g.pipe(Object(z.a)((function(e){return e.connected$.pipe(Object(m.a)((function(t){return{input:e,connected:t}})))})),Object(A.a)((function(e,t){var n=t.input;return t.connected?e.add(n.name):e.delete(n.name)}),Object(G.b)()),Object(m.a)((function(e){return e.toArray()}))),r=g.pipe(Object(z.a)((function(e){return e.messages$})),Object(v.a)()).pipe(Object(m.a)((function(e){return S.find((function(t){return t.matches(e)})).create(e)}))),i=r.pipe(Object(U.a)()).pipe(Object(A.a)((function(e,t){return e.push(t)}),Object(G.a)()),Object(y.a)(G.a));i.connect();var c=r.pipe(W(),Object(y.a)(Object(G.b)()));return e.add(c.connect()),{allMidiInputNames$:a,keyboardKeyState$:c,exercises$:ie(c).exercises$,setWakeLock:function(e){return t.next(e)},wakeLockActive$:Object(u.a)(t),setConsoleVisible:function(e){return n.next(e)},consoleVisible$:Object(u.a)(n),allConsoleMessages$:i,destroy:function(){return e.unsubscribe()}}},ie=function(e){return{exercises$:Object(s.a)((function(){return Object(K.a)(function(e){var t=e.pressedKeys$,n=new Y.a,a=H()(0,11),r=Z()(ee),i=Object(l.a)(r,2),c=i[0],s=i[1],o=Object(G.a)(s).sort(),d=te(a,o),p=Object(q.a)(t.pipe(Object(z.a)((function(e){return e.size?d.some((function(t,n){return t%12===e.first()%12&&ne(d.slice(n)).isSuperset(ne(e))}))?d.size===e.size?[!0]:[]:[!1]:[]})),Object(Q.a)()),t.pipe(Object(Q.a)((function(e){return!e.size})),Object(D.a)()));return{displayName:c(X[a]),result$:p,consoleMessages$:Object(u.a)(n)}}({pressedKeys$:e}))})).pipe(Object(V.a)((function(e){return Object(o.a)(e,e.pipe(Object(z.a)((function(e){return e.result$})),Object(D.a)()))})),Object(L.a)(),Object(v.a)())}},ce=n(16),le=n.n(ce),se=Object(a.createContext)(null),oe=function(e){var t=Object(a.useState)(null),n=Object(l.a)(t,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){if(e){var t=e.subscribe(i);return function(){return t.unsubscribe()}}}),[e]),r},ue=n(22),de=n.n(ue),pe=n(51),me=n.n(pe),fe=function(e){var t=e.children,n=e.className;return r.a.createElement("div",{className:de()(me.a.panel,n)},t)},he=function(e){var t=e.className,n=Object(a.useContext)(se),i=oe(n.exercises$),c=oe(null===i||void 0===i?void 0:i.result$);return r.a.createElement(fe,{className:t},r.a.createElement("svg",{viewBox:"0 0 160 30",width:"100%",height:"100%",preserveAspectRatio:"xMidYMid meet"},r.a.createElement("text",{x:"50%",y:"50%",dominantBaseline:"central",textAnchor:"middle",style:{fontSize:25}},null===i||void 0===i?void 0:i.displayName),null!==c&&r.a.createElement("rect",{x:"0",y:"95%",width:"100%",height:"5%",fill:c?"green":"red"})))},ye=n(52),be=n.n(ye),Oe=n(53),ve=n.n(Oe),ge=[0,5.414,9.0444307,15.837,18.0888614,27.1332921,31.859,36.1777228,42.282,45.2221535,52.705,54.2665842],je=function(e){var t=e.lowestKey,n=void 0===t?21:t,a=e.highestKey,i=void 0===a?108:a,c=e.keyState,l=e.x,s=e.y,o=e.width,u=e.height;return r.a.createElement("svg",{version:"1.1",x:l,y:s,width:o,height:u,viewBox:we(n,i),preserveAspectRatio:"xMidYMin meet"},r.a.createElement("defs",{id:"defs2"},r.a.createElement("linearGradient",{id:"linearGradient3981"},r.a.createElement("stop",{id:"stop3977",style:{stopColor:"#f2f2f2",stopOpacity:"1"},offset:"0"}),r.a.createElement("stop",{id:"stop3979",style:{stopColor:"#cccccc",stopOpacity:"1"},offset:"1"})),r.a.createElement("linearGradient",{id:"linearGradient4915",gradientUnits:"userSpaceOnUse",x1:"107.723",x2:"107.723",y1:"131.52364",y2:"129.08444",xlinkHref:"#linearGradient3981"}),r.a.createElement("clipPath",{id:"clipPath3812"},r.a.createElement("rect",{height:"36.348648",id:"rect3814",style:{display:"inline",opacity:"0.17105264",strokeWidth:"0.26458332"},width:"5.57514",x:"107.723",y:"125.41296"})),r.a.createElement("clipPath",{id:"clipPath3973"},r.a.createElement("rect",{height:"56.66114",id:"rect3975",style:{display:"inline",fill:"#808000",strokeWidth:"0.26458332"},width:"9.0444307",x:"102.62053",y:"125.41296"})),r.a.createElement("g",{id:"whiteKey",transform:"translate(-102.62054,-125.41296)"},r.a.createElement("rect",{height:"56.66114",id:"rect3912-3-8",style:{display:"inline",fill:"#1a1a1a",strokeWidth:"0.26458332"},width:"9.0444307",x:"102.62054",y:"125.41296"}),r.a.createElement("rect",{height:"56.472153",id:"rect3912",style:{display:"inline",fill:"#666666",strokeWidth:"0.26075235"},width:"8.8138103",x:"102.73585",y:"125.41296"}),r.a.createElement("rect",{height:"58.599155",id:"rect3912-2",style:{display:"inline",fill:"url(#linearGradient4915)",fillOpacity:"1",strokeWidth:"0.26452145"},width:"8.7103424",clipPath:"url(#clipPath3973)",rx:"0.2",ry:"0.2",transform:"matrix(0.96598043,0,0,0.99499097,3.6446156,0.62819669)",x:"102.78758",y:"123.2748"})),r.a.createElement("rect",{height:"56.66114",id:"whiteKeyPressMask",style:{display:"inline",fill:"green",mixBlendMode:"hard-light",strokeWidth:"0.26458332"},width:"9.0444307",x:"0",y:"0"}),r.a.createElement("linearGradient",{id:"linearGradient3883"},r.a.createElement("stop",{id:"stop3879",style:{stopColor:"#000000",stopOpacity:"1"},offset:"0"}),r.a.createElement("stop",{id:"stop3881",style:{stopColor:"#1a1a1a",stopOpacity:"1"},offset:"1"})),r.a.createElement("linearGradient",{id:"linearGradient3837"},r.a.createElement("stop",{id:"stop3833",style:{stopColor:"#7d7d7d",stopOpacity:"1"},offset:"0"}),r.a.createElement("stop",{id:"stop3835",style:{stopColor:"#b2b2b2",stopOpacity:"1"},offset:"1"})),r.a.createElement("linearGradient",{id:"linearGradient5265",gradientUnits:"userSpaceOnUse",x1:"110.46354",x2:"110.46354",y1:"145.41296",y2:"153.55803",xlinkHref:"#linearGradient3837"}),r.a.createElement("linearGradient",{id:"linearGradient5267",gradientUnits:"userSpaceOnUse",x1:"110.3957",x2:"113.298",y1:"148.06406",y2:"148.33133",xlinkHref:"#linearGradient3883"}),r.a.createElement("clipPath",{id:"clipPath3812"},r.a.createElement("rect",{height:"36.348648",id:"rect3814",style:{display:"inline",opacity:"0.17105264",strokeWidth:"0.26458332"},width:"5.57514",x:"107.723",y:"125.41296"})),r.a.createElement("clipPath",{id:"clipPath3973"},r.a.createElement("rect",{height:"56.66114",id:"rect3975",style:{display:"inline",fill:"#808000",strokeWidth:"0.26458332"},width:"9.0444307",x:"102.62053",y:"125.41296"})),r.a.createElement("g",{id:"blackKey",transform:"matrix(0.99993528,0,0,1,-107.71603,-125.41296)"},r.a.createElement("rect",{height:"36.348648",id:"rect5255",style:{display:"inline",opacity:"1",fill:"#4d4d4d",fillOpacity:"1",strokeWidth:"0.26458332"},width:"5.57514",x:"107.71603",y:"125.41296"}),r.a.createElement("rect",{height:"35.657352",id:"rect5257",style:{fill:"url(#linearGradient5265)",fillOpacity:"1",strokeWidth:"0.23320046"},width:"4.0383401",clipPath:"url(#clipPath3812)",rx:"1.5",ry:"1.5",transform:"matrix(0.99992069,0,0,1,0.0087649,0)",x:"108.49162",y:"123.00336"}),r.a.createElement("path",{id:"path5259",style:{strokeWidth:"0.26458332"},d:"m 112.96463,160.73864 c 0.10641,0.33021 0.19199,1.02296 0.19199,1.02296 -1.6,0 -1.79647,3.5e-4 -2.64612,4e-4 -0.84965,-5e-5 -1.04612,-4e-4 -2.64612,-4e-4 0,0 0.0856,-0.69275 0.19199,-1.02296 0.1363,-0.42296 0.22321,-0.9238 0.5654,-1.20731 0.49755,-0.4122 1.33085,-0.49564 1.88873,-0.50274 0.55788,0.007 1.39118,0.0905 1.88873,0.50274 0.34219,0.28351 0.4291,0.78435 0.5654,1.20731 z"}),r.a.createElement("path",{id:"path5261",style:{fill:"url(#linearGradient5267)",fillOpacity:"1",strokeWidth:"0.05778855"},d:"m 107.723,125.41296 h 0.49315 c 0,0 0.0205,31.37403 0,32.46519 -0.0205,1.09117 -0.49315,3.88346 -0.49315,3.88346 z m 5.575,0 h -0.49315 c 0,0 -0.0205,31.37403 0,32.46519 0.0205,1.09117 0.49315,3.88346 0.49315,3.88346 z"})),r.a.createElement("rect",{height:"36.348648",id:"blackKeyPressMask",style:{display:"inline",opacity:"1",fill:"green",mixBlendMode:"hard-light",fillOpacity:"1",strokeWidth:"0.26458332"},width:"5.57514"})),ve()(be()(n,i+1),xe).map((function(e){return r.a.createElement(Ee,{key:e,keyNumber:e,isPressed:null===c||void 0===c?void 0:c.has(e)})})))},Ee=function(e){var t=e.keyNumber,n=e.isPressed;return r.a.createElement(r.a.Fragment,null,r.a.createElement("use",{href:xe(t)?"#blackKey":"#whiteKey",x:ke(t)}),n&&r.a.createElement("use",{href:xe(t)?"#blackKeyPressMask":"#whiteKeyPressMask",x:ke(t)}))},xe=function(e){return[1,3,6,8,10].includes(e%12)},ke=function(e){return Math.floor(e/12)*(7*9.0444307)+ge[e%12]},we=function(e,t){var n=ke(e),a=ke(t)-ke(e)+(xe(t)?5.575:9.0444307);return"".concat(n," ").concat(0," ").concat(a," ").concat(56.66114)},_e=function(e){var t=e.className,n=Object(a.useContext)(se),i=oe(n.keyboardKeyState$);return r.a.createElement(fe,{className:t},r.a.createElement(je,{keyState:i}))},Ne=n(39),Pe=n.n(Ne),Ce=n(54),$e=n.n(Ce),Me=function(e){var t=e.label,n=e.value,a=e.onChange;return r.a.createElement("div",{className:Pe.a.switch,onClick:function(){return a(!n)}},r.a.createElement("span",{className:Pe.a.label},t),r.a.createElement($e.a,{value:!!n,onToggle:function(e){a(!e)}}))},Se=n(27),Ae=n.n(Se),Ge=function(e){var t=e.className,n=Object(a.useContext)(se),i=oe(n.allMidiInputNames$),c=oe(n.wakeLockActive$),l=oe(n.consoleVisible$);return r.a.createElement(fe,{className:de()(t,Ae.a.statusPanel)},r.a.createElement("div",{className:Ae.a.midiInputs},"Connected MIDI input(s): ",(null===i||void 0===i?void 0:i.length)?i.join(", "):r.a.createElement("i",null,"none")),r.a.createElement("div",{className:Ae.a.toggle},r.a.createElement(Me,{label:"show console",value:!!l,onChange:n.setConsoleVisible})),r.a.createElement("div",{className:Ae.a.toggle},r.a.createElement(Me,{label:"prevent sleep mode",value:!!c,onChange:n.setWakeLock})))},We=n(55),Be=n.n(We),Ie=n(56),Ke=n.n(Ie),ze=function(e){var t=e.className,n=Object(a.useRef)(),i=Object(a.useContext)(se),c=oe(i.allConsoleMessages$)||[];return Object(a.useLayoutEffect)((function(){n.current.scrollIntoView()}),[c]),r.a.createElement(fe,{className:de()(t,Be.a.consolePanel)},r.a.createElement("pre",null,c.map((function(e,t){var n=e.value,a=e.timestamp;return r.a.createElement(r.a.Fragment,{key:t},"".concat(Ke()(a).format("LTS"),": ").concat(n),"\n")})),r.a.createElement("div",{ref:n})))},Ue=function(){var e=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=re();return r(e),function(){e.destroy&&e.destroy()}}),[]),n}(),t=oe(null===e||void 0===e?void 0:e.consoleVisible$);return e&&r.a.createElement(se.Provider,{value:e},r.a.createElement("div",{className:le.a.app},r.a.createElement(Ge,{className:le.a.status}),r.a.createElement("div",{className:le.a.middleRow},r.a.createElement(he,{className:le.a.main}),t&&r.a.createElement(ze,{className:le.a.console})),r.a.createElement(_e,{className:le.a.keyboard})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.5276a003.chunk.js.map