(this["webpackJsonpweather-dashboard"]=this["webpackJsonpweather-dashboard"]||[]).push([[0],{39:function(e,t,a){e.exports=a(57)},44:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(28),i=a.n(r),o=(a(44),a(9)),s=a(6),m=a(11),l=a(22),u=a.n(l),p=a(12),d=a(71),h=a(73),f=a(74),b=a(75),g=Object(d.a)({content:{display:"flex",flexDirection:"column",alignItems:"center",height:150},icon:{display:"flex",justifyContent:"center",width:35,marginRight:4},text:{fontSize:"1.3rem",flex:1,color:"white",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},sunrise:{backgroundColor:"#FF8100"},sunset:{backgroundColor:"#6A0D83"}}),E=function(e){var t=e.sunrise,a=e.sunset,n=g();return c.a.createElement(h.a,null,c.a.createElement(f.a,{className:n.content},c.a.createElement(b.a,{className:"".concat(n.info," ").concat(n.text," ").concat(n.sunrise),variant:"h3",component:"h3"},c.a.createElement("div",{className:n.icon},c.a.createElement(p.a,{icon:m.c})),"Sunrise: ",u.a.unix(t).format("HH:mm")),c.a.createElement(b.a,{className:"".concat(n.info," ").concat(n.text," ").concat(n.sunset),variant:"h3",component:"h3"},c.a.createElement("div",{className:n.icon},c.a.createElement(p.a,{icon:m.b})),"Sunset: ",u.a.unix(a).format("HH:mm"))))},y=Object(d.a)((function(e){return{content:Object(s.a)({height:150},e.breakpoints.down("sm"),{height:100}),icon:{display:"flex",justifyContent:"center",width:35,marginRight:4},info:{display:"flex",alignItems:"center"},temp:Object(s.a)({marginBottom:8},e.breakpoints.down("sm"),{fontSize:"2rem"}),secondaryText:Object(s.a)({fontSize:"1.3rem"},e.breakpoints.down("sm"),{fontSize:"1.1rem"})}})),v=function(e){var t=e.temp,a=e.humidity,n=e.pressure,r=y();return c.a.createElement(h.a,null,c.a.createElement(f.a,{className:r.content},c.a.createElement(b.a,{className:"".concat(r.temp," ").concat(r.info),variant:"h3",component:"h3"},c.a.createElement("div",{className:r.icon},c.a.createElement(p.a,{icon:m.d})),t," \xb0C"),c.a.createElement(b.a,{className:"".concat(r.info," ").concat(r.secondaryText),variant:"h5",component:"h5"},c.a.createElement("div",{className:r.icon},c.a.createElement(p.a,{icon:m.e})),"Humidity: ",a," %"),c.a.createElement(b.a,{className:"".concat(r.info," ").concat(r.secondaryText),variant:"h5",component:"h5"},c.a.createElement("div",{className:r.icon},c.a.createElement(p.a,{icon:m.a})),"Pressure: ",n," hPa")))},j=Object(d.a)((function(e){return{content:Object(s.a)({height:150},e.breakpoints.down("sm"),{height:100}),icon:{display:"flex",justifyContent:"center",width:35,marginRight:4},info:{display:"flex",alignItems:"center"},city:Object(s.a)({marginBottom:8},e.breakpoints.down("sm"),{fontSize:"2rem"}),secondaryText:Object(s.a)({fontSize:"1.3rem"},e.breakpoints.down("sm"),{fontSize:"1.1rem"})}})),x=function(e){var t=e.name,a=e.coord,n=j(),r=(new Date).toDateString();return c.a.createElement(h.a,null,c.a.createElement(f.a,{className:n.content},c.a.createElement(b.a,{className:"".concat(n.city," ").concat(n.info),variant:"h3",component:"h3"},t),c.a.createElement(b.a,{className:"".concat(n.info," ").concat(n.secondaryText),variant:"h5",component:"h5"},"lng: ",a.lon," lat: ",a.lat),c.a.createElement(b.a,{className:"".concat(n.info," ").concat(n.secondaryText),variant:"h5",component:"h5"},r)))},w=a(76),O=function(e){var t=e.city,a=e.coord,n=e.temp,r=e.humidity,i=e.pressure,o=e.sun;return c.a.createElement(c.a.Fragment,null,c.a.createElement(w.a,{item:!0,xs:12,md:4},c.a.createElement(x,{name:t,coord:a})),c.a.createElement(w.a,{item:!0,xs:12,md:4},c.a.createElement(v,{temp:n,humidity:r,pressure:i})),c.a.createElement(w.a,{item:!0,xs:12,md:4},c.a.createElement(E,{sunrise:o.sunrise,sunset:o.sunset})))},k=a(31),N=a.n(k),S=Object(d.a)((function(e){return{container:Object(s.a)({display:"flex",flexDirection:"column",alignItems:"flex-start"},e.breakpoints.up("md"),{height:400}),title:{marginBottom:16},canvas:{maxWidth:"100%"}}})),C=function(e){var t,a=e.forecast,r=S();return Object(n.useEffect)((function(){new N.a(t,{type:"bar",options:{legend:{display:!1},responsive:!0,scales:{yAxes:[{display:!0,ticks:{suggestedMin:0},gridLines:{display:!1}}],xAxes:[{stacked:!0,gridLines:{display:!1}}]}},data:{labels:Object.keys(a.temp),datasets:[{label:"",data:Object.values(a.minTemp),backgroundColor:"#4c9bc4"},{label:"",data:Object.values(a.temp),backgroundColor:"#fac76c"}]}})}),[t,a]),c.a.createElement(h.a,null,c.a.createElement(f.a,{className:r.container},c.a.createElement(b.a,{className:r.title,variant:"h5",component:"h2"},"Forecast"),c.a.createElement("canvas",{className:r.canvas,ref:function(e){return t=e}})))},z=a(14),D=a.n(z),I=a(25),T=a(33);function L(e){var t={},a={},n=/^\d{4}-\d*-\d*/g;return e.city&&e.list.forEach((function(e){var c=(new Date).toString().split(" ")[0],r=new Date(e.dt_txt.match(n)).toString().split(" ")[0];switch(!0){case r===c:break;case r in t:t[r].push(e.main.temp),a[r].push(e.main.temp_min);break;default:t[r]=[e.main.temp],a[r]=[e.main.temp_min]}})),{temp:F(t,"max"),minTemp:F(a,"min")}}function F(e,t){return Object.keys(e).forEach((function(a){e[a]=Math[t].apply(Math,Object(T.a)(e[a]))})),e}var P=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),m=s[0],l=s[1],u=Object(n.useState)(!0),p=Object(o.a)(u,2),d=p[0],h=p[1],f=Object(n.useState)(!1),b=Object(o.a)(f,2),g=b[0],E=b[1];return Object(n.useEffect)((function(){function t(){return(t=Object(I.a)(D.a.mark((function t(){var n;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&APPID=").concat("4113401e58085eb572371a1746a847c2"));case 2:n=t.sent,h(!0),n.json().then((function(e){r(e)})).then((function(){a(e)})).catch((function(e){throw E(!0),e}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function a(){return n.apply(this,arguments)}function n(){return(n=Object(I.a)(D.a.mark((function e(){var t,a=arguments;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"Szczecin",e.next=3,fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&units=metric&APPID=").concat("4113401e58085eb572371a1746a847c2"));case 3:e.sent.json().then((function(e){l(L(e)),h(!1)})).catch((function(e){throw E(!0),e}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),{weather:c,forecast:m,isLoading:d,isError:g}},R=a(19),A=a.n(R),H=Object(d.a)((function(e){return{container:Object(s.a)({height:400},e.breakpoints.down("sm"),{height:160}),map:{width:"100%",height:"100%"}}})),B=function(e){var t=e.lat,a=e.lon,r=H();return Object(n.useEffect)((function(){A.a.map("map",{center:[t,a],zoom:10,layers:[A.a.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),A.a.marker([t,a])]}).invalidateSize(!0).dragging.disable()}),[t,a]),c.a.createElement(h.a,null,c.a.createElement(f.a,{className:r.container},c.a.createElement("div",{className:r.map,id:"map"})))},M=Object(d.a)((function(e){return{container:Object(s.a)({backgroundColor:"#e5e5e5",borderRadius:"1rem",padding:"2rem",marginTop:"6rem"},e.breakpoints.down("xs"),{marginTop:"4rem"}),infoText:{color:"white",textAlign:"center"}}})),_=function(e){var t=e.city,a=P(t),n=a.weather,r=a.forecast,i=a.isLoading,o=a.isError,s=M();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:s.container},i?c.a.createElement("h4",{className:s.infoText},"Loading...."):c.a.createElement((function(){return c.a.createElement(c.a.Fragment,null,!o&&r.temp&&n.main?c.a.createElement(w.a,{container:!0,spacing:2},c.a.createElement(O,{city:n.name,coord:n.coord,temp:n.main.temp,humidity:n.main.humidity,pressure:n.main.pressure,sun:n.sys}),c.a.createElement(w.a,{item:!0,xs:12,md:8},c.a.createElement(C,{forecast:r})),c.a.createElement(w.a,{item:!0,xs:12,md:4},c.a.createElement(B,{lat:n.coord.lat,lon:n.coord.lon}))):c.a.createElement("h4",{className:s.infoText},"Cant find results for '",t,"'"))}),null)))},K=a(79),q=a(78),J=a(32),W=a.n(J),G=a(18),Q=a(80),U=a(77),V=Object(d.a)((function(e){return{toolbar:{display:"flex",justifyContent:"center"},search:Object(s.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(G.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(G.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(s.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:220,"&:focus":{width:280}})}})),X=function(e){var t=e.onKeyDown,a=e.value,r=Object(n.useState)(a),i=Object(o.a)(r,2),s=i[0],m=i[1],l=V();return c.a.createElement(U.a,null,c.a.createElement(q.a,{className:l.toolbar},c.a.createElement("div",{className:l.search},c.a.createElement("div",{className:l.searchIcon},c.a.createElement(W.a,null)),c.a.createElement(Q.a,{classes:{input:l.inputInput},value:s,inputProps:{"aria-label":"search"},onChange:function(e){return m(e.target.value)},onKeyDown:t}))))};var Y=function(){var e=Object(n.useState)("Szczecin"),t=Object(o.a)(e,2),a=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(X,{value:a,onKeyDown:function(e){return function(e){"Enter"===e.key&&(e.preventDefault(),r(e.target.value))}(e)}}),c.a.createElement(K.a,{maxWidth:"lg"},c.a.createElement(_,{city:a})))};i.a.render(c.a.createElement(Y,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.468e3e87.chunk.js.map