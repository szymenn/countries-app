(this["webpackJsonpcountries-app"]=this["webpackJsonpcountries-app"]||[]).push([[0],{355:function(e,t,n){},356:function(e,t,n){},604:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(0),i=n(14),c=n.n(i),o=(n(355),n.p,n(356),n(171)),s=n(306),l=Object(o.withScriptjs)(Object(o.withGoogleMap)((function(e){var t=window.google,n=e.countries.map((function(e){if(0!==e.latlng.length)return Object(a.jsx)("div",{children:Object(a.jsx)(s.MarkerWithLabel,{position:{lat:e.latlng[0],lng:e.latlng[1]},labelAnchor:new t.maps.Point(0,0),labelStyle:{fontSize:"10px",backgroundColor:"none",color:"red"},children:Object(a.jsx)("div",{children:e.name})})},e.name)}));return Object(a.jsx)(o.GoogleMap,{defaultZoom:2,defaultCenter:{lat:-34.397,lng:150.644},children:n})}))),d=n(329),j=n(25),u=n(92),p=n(42),h=n(213),b=n(5),g=n(650),O=n(46),m=n(674),x=n(652),f=n(654),w=n(655),v=n(659),y=n(661),S=n(656),C=n(311),E=n.n(C),N=n(312),A=n.n(N),L=n(313),k=n.n(L),B=n(608),M=n(662),T=n(676),G=n(658),I=n(113),P="UPDATE_COUNTRIES",R="OPEN_CLOSE_DRAWER",D="CHANGE_COMPONENT",F=n(307),z=n.n(F).a.create(),H="https://restcountries.eu/rest/v2",J=function(e){return{type:P,payload:{countries:e}}},_=function(e){return function(t){return z.get("".concat(H,"/region/").concat(e)).then((function(e){t(J(e.data))})).catch((function(e){throw e}))}},U=n(314),W=n.n(U),q=n(315),K=n.n(q),V=n(675),Z=n(660),Q=n(657),X=n(670),Y=240,$=Object(g.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),margin:0},appBarShift:{width:"calc(100% - ".concat(Y,"px)"),marginLeft:Y,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:Y,flexShrink:0},drawerPaper:{width:Y},drawerHeader:Object(h.a)(Object(h.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},inputRoot:{margin:e.spacing(1),color:"inherit"},inputInput:{marginTop:e.spacing(2),color:"white"},title:{flexGrow:1},formControl:{margin:e.spacing(1),minWidth:120,color:"white"},selectEmpty:{marginTop:e.spacing(2)},select:{borderColor:"white",color:"white"},inputLabel:{color:"white"}}})),ee=Object(I.b)((function(e){return{countries:e.countries.countries,drawer:e.drawer.drawer}}))((function(e){var t=$(),n=Object(O.a)(),i=Object(r.useState)(""),c=Object(p.a)(i,2),o=c[0],s=c[1],l=Object(r.useState)(""),d=Object(p.a)(l,2),j=d[0],h=d[1],g=function(){e.dispatch({type:R})},C=function(t){e.dispatch(function(e){return{type:D,payload:{drawer:{component:e}}}}(t))};return Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)(x.a,{}),Object(a.jsx)(f.a,{position:"fixed",className:Object(b.a)(t.appBar,Object(u.a)({},t.appBarShift,e.drawer.open)),children:Object(a.jsxs)(w.a,{children:[Object(a.jsx)(S.a,{color:"inherit","aria-label":"open drawer",onClick:g,edge:"start",className:Object(b.a)(t.menuButton,e.drawer.open&&t.hide),children:Object(a.jsx)(E.a,{})}),Object(a.jsxs)(Q.a,{className:t.formControl,children:[Object(a.jsx)(V.a,{id:"demo-simple-select-helper-label",className:t.inputLabel,children:"Region"}),Object(a.jsxs)(X.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:j,onChange:function(t){h(t.target.value),e.dispatch(_(t.target.value))},className:t.select,children:[Object(a.jsx)(Z.a,{value:"Africa",children:"Africa"}),Object(a.jsx)(Z.a,{value:"Americas",children:"Americas"}),Object(a.jsx)(Z.a,{value:"Asia",children:"Asia"}),Object(a.jsx)(Z.a,{value:"Europe",children:"Europe"}),Object(a.jsx)(Z.a,{value:"Oceania",children:"Oceania"})]})]}),Object(a.jsx)(G.a,{placeholder:"Search",classes:{root:t.inputRoot,input:t.inputInput},onChange:function(t){var n;s(t.target.value),console.log(o),""!==t.target.value&&e.dispatch((n=t.target.value,function(e){return z.get("".concat(H,"/name/").concat(n)).then((function(t){e(J(t.data))})).catch((function(e){throw e}))}))}})]})}),Object(a.jsxs)(m.a,{className:t.drawer,variant:"persistent",anchor:"left",open:e.drawer.open,classes:{paper:t.drawerPaper},children:[Object(a.jsx)("div",{className:t.drawerHeader,children:Object(a.jsx)(S.a,{onClick:g,children:"ltr"===n.direction?Object(a.jsx)(A.a,{}):Object(a.jsx)(k.a,{})})}),Object(a.jsx)(y.a,{}),Object(a.jsx)(v.a,{children:["Map","Chart"].map((function(e,t){return Object(a.jsxs)(B.a,{button:!0,onClick:function(){return C(e)},children:[Object(a.jsx)(M.a,{children:0===t?Object(a.jsx)(W.a,{}):Object(a.jsx)(K.a,{})}),Object(a.jsx)(T.a,{primary:e})]},e)}))})]}),Object(a.jsx)("main",{className:Object(b.a)(t.content,Object(u.a)({},t.contentShift,e.drawer.open)),children:Object(a.jsx)("div",{className:t.drawerHeader})})]})})),te=n(667),ne=n(669),ae=(n(555),n(673)),re=n(668),ie=n(666),ce=n(327),oe=n(328),se=n(173),le=n(140),de=n(333),je=n(326),ue=n(132),pe=n(677),he=(Object(ue.a)(pe.a).range(),function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}),be=function(e){var t=e.countries.map((function(e){return{name:e.name,population:e.population}}));return Object(a.jsx)("div",{style:{width:"100%",height:"85vh"},children:Object(a.jsx)(ae.a,{children:Object(a.jsxs)(re.a,{data:t,margin:{top:50,right:40,left:220,bottom:5},children:[" ",Object(a.jsx)(ie.a,{strokeDasharray:"3 3"}),Object(a.jsx)(ce.a,{dataKey:"name"}),Object(a.jsx)(oe.a,{}),Object(a.jsx)(se.a,{}),Object(a.jsx)(le.a,{}),Object(a.jsx)(de.a,{dataKey:"population",fill:"#8884d8",children:t.map((function(e,t){return Object(a.jsx)(je.a,{fill:he()},"cell-".concat(t))}))})]})})})},ge=Object(g.a)((function(e){return{root:{flexGrow:1,width:"100%"},paper:{padding:e.spacing(2),textAlign:"center"},charts:{padding:e.spacing(2),textAlign:"center",marginLeft:-200},chartsContainer:{width:100},content:{transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-200},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}})),Oe=Object(I.b)((function(e){return{countries:e.countries.countries,drawer:e.drawer.drawer}}))((function(e){var t=ge();return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:Object(b.a)(t.content,Object(u.a)({},t.contentShift,e.drawer.open)),children:[Object(a.jsx)(ee,{}),Object(a.jsx)(ne.a,{flexDirection:"row",children:Object(a.jsx)(ne.a,{style:{width:"100%"},children:"Map"===e.drawer.component?Object(a.jsx)(l,{countries:e.countries,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBpJFnOEgJOdSsSSd3jzGdVqzz4EGqb5s0&v=3.exp&libraries=geometry,drawing,places",loadingElement:Object(a.jsx)("div",{style:{height:"100%"}}),containerElement:Object(a.jsx)("div",{style:{height:"100vh"}}),mapElement:Object(a.jsx)("div",{style:{height:"100%"}})}):Object(a.jsx)(te.a,{children:Object(a.jsx)(be,{countries:e.countries})})})})]})})})),me=function(){return Object(a.jsx)(d.a,{children:Object(a.jsx)(j.c,{children:Object(a.jsx)(j.a,{path:"/",component:Oe})})})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,680)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},fe=n(79),we={countries:[]},ve={drawer:{open:!1,component:"Map"}},ye=Object(fe.c)({countries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object.assign({},e,{countries:t.payload.countries});default:return e}},drawer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object.assign({},e,{drawer:{open:!e.drawer.open,component:e.drawer.component}});case D:return Object.assign({},e,{drawer:{open:e.drawer.open,component:t.payload.drawer.component}});default:return e}}}),Se=n(331),Ce=Object(fe.a)(Se.a),Ee=Object(fe.e)(ye,Object(fe.d)(Ce,window.devToolsExtension?window.devToolsExtension():function(e){return e}));c.a.render(Object(a.jsx)(I.a,{store:Ee,children:Object(a.jsx)(me,{})}),document.getElementById("root")),xe()}},[[604,1,2]]]);
//# sourceMappingURL=main.2460be35.chunk.js.map