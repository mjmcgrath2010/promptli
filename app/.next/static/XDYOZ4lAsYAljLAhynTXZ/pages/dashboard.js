(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5Uns":function(t,e,n){"use strict";n.r(e);var a=n("ln6h"),i=n.n(a),o=n("O40h"),r=n("0iUn"),s=n("sLSF"),c=n("MI3g"),l=n("a7VT"),u=n("Tit0"),d=n("q1tI"),p=n.n(d),f=n("/MKj"),h=n("v8KW"),m=n("dpnd"),b=n("m/Pd"),g=n.n(b),v=n("6AFH"),w=p.a.createElement,O=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(c.a)(this,Object(l.a)(e).call(this,t))).props.initDashboard(),n}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return w(v.a,null,w(g.a,null,w("title",null,"Dashboard | Promptli")))}}]),e}(d.Component);O.getInitialProps=function(){var t=Object(o.a)(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{hello:"world"});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();e.default=Object(f.b)(null,function(t){return{dispatch:t,initDashboard:function(){return t(m.a.initDashboardRequest())}}})(Object(h.a)(O))},"6AFH":function(t,e,n){"use strict";var a=n("0iUn"),i=n("sLSF"),o=n("MI3g"),r=n("a7VT"),s=n("AT/M"),c=n("Tit0"),l=n("vYYK"),u=n("q1tI"),d=n.n(u),p=n("/MKj"),f=n("Ji2X"),h=n("gtzJ"),m=n("vOnD"),b=n("IIOH"),g=n("eD//"),v=n("wb2y"),w=n("tVbE"),O=n("IsqK"),y=n("YFqc"),j=n.n(y),x=n("ucgz"),N=n("bXiM"),k=n("lO0E"),T=n("Z3vd"),I=n("PsDL"),L=n("uniG"),D=n.n(L),C=n("AqyA"),E=n("dpnd"),_=n("Sgle"),P=n("nOHt"),S=n.n(P),M=n("R/WZ"),A=d.a.createElement,q=Object(M.a)(function(t){return{breadcrumb:{color:"#fff"}}}),R=function(t){var e=Object(u.useState)([]),n=e[0],a=e[1],i=q();return Object(u.useEffect)(function(){var t=function(t){var e=t.split("/").filter(function(t){return!!t}).map(function(t){return{text:t.toUpperCase()}});a(e)};return S.a.events.on("routeChangeComplete",t),t(window.location.pathname),function(){S.a.events.off("routeChangeComplete",t)}},[]),A(_.a,{className:i.breadcrumb,"aria-label":"breadcrumb"},n.map(function(t){return A("span",{className:i.breadcrumb,key:t.text},t.text)}))},U=d.a.createElement,z=function(t){function e(t){var n;return Object(a.a)(this,e),n=Object(o.a)(this,Object(r.a)(e).call(this,t)),Object(l.a)(Object(s.a)(n),"logOut",function(){n.props.logout()}),n.state={open:!1},n.onNavToggle=n.onNavToggle.bind(Object(s.a)(n)),n}return Object(c.a)(e,t),Object(i.a)(e,[{key:"onNavToggle",value:function(){var t=!this.state.open;this.setState({open:t})}},{key:"renderPrimaryList",value:function(){var t=this.props.classes;return U(g.a,null,[{text:"Dashboard",path:"/dashboard",icon:"home"},{text:"Reservations",path:"/dashboard/reservations",icon:"insert_invitation"},{text:"Services",path:"/dashboard/services",icon:"schedule"},{text:"Packages",path:"/dashboard/packages",icon:"local_offer"},{text:"Design + Publish",path:"/dashboard/design",icon:"build"}].map(function(e){return U(j.a,{href:e.path,key:e.path},U(w.a,{button:!0},U(C.a,{className:t.iconListItem},e.icon),U(O.a,{primary:e.text})))}))}},{key:"renderSecondaryList",value:function(){var t=this.props.classes;return U(g.a,null,[{text:"Profile",path:"/dashboard/profile",icon:"account_box"},{text:"Settings",path:"/dashboard/settings",icon:"settings_applications"}].map(function(e){return U(j.a,{href:e.path,key:e.path},U(w.a,{button:!0},U(C.a,{className:t.iconListItem},e.icon),U(O.a,{primary:e.text})))}))}},{key:"render",value:function(){var t=this.props,e=(t.profile,t.isLoggedIn,t.classes),n=this.state.open;return U("div",{className:e.root},U(b.a,{open:n,onClose:this.onNavToggle},U("div",{className:e.list,role:"presentation",onClick:this.onNavToggle,onKeyDown:this.onNavToggle},U("div",{className:e.navTitle},U("img",{alt:"logo",className:e.drawerLogo,src:"../../static/logos/promptli-color.png"})),U(v.a,null),this.renderPrimaryList(),U(v.a,null),this.renderSecondaryList())),U(N.a,{position:"static"},U(k.a,null,U(I.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:this.onNavToggle},U(D.a,null)),U("div",{className:e.breadcrumbs},U(R,null)),U("div",{className:e.appName},U("img",{alt:"logo",className:e.logo,src:"../../static/logos/promptli-white.png"})),U(T.a,{color:"inherit",onClick:this.logOut},"Logout"))))}}]),e}(u.Component),H=Object(p.b)(function(t){return{profile:t.dashboard.profile,isLoggedIn:t.auth.isLoggedIn}},function(t){return{dispatch:t,logout:function(){return t(E.b.makeLogoutRequest())}}})(Object(x.a)({root:{flexGrow:1},menuButton:{marginRight:"1em"},iconListItem:{marginRight:".5em"},breadcrumbs:{justifyContent:"space-evenly",flex:1,textAlign:"left"},list:{width:250},appName:{position:"absolute",left:"calc(50% - 75px)",width:"150px",textAlign:"center",zIndex:-1},drawerLogo:{width:"100px",margin:".5em auto"},logo:{width:"150px",margin:".5em auto 0"},navTitle:{width:"100%",textAlign:"center",fontSize:"18px",display:"block",position:"relative",margin:".5em auto 0"}})(z)),B=d.a.createElement,K=Object(m.a)(f.a).withConfig({displayName:"layouts__DashboardContainer",componentId:"sc-1p7gadc-0"})(["margin-top:24px;"]),F=function(t){function e(){for(var t,n,i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return Object(a.a)(this,e),n=Object(o.a)(this,(t=Object(r.a)(e)).call.apply(t,[this].concat(c))),Object(l.a)(Object(s.a)(n),"initDrift",function(t){var e=t.email,n=t.name;!function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error("Drift snippet included twice."));t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}},t.methods.forEach(function(e){t[e]=t.factory(e)}),t.load=function(t){var e=3e5*Math.ceil(new Date/3e5),n=document.createElement("script");n.type="text/javascript",n.async=!0,n.crossorigin="anonymous",n.src="https://js.driftt.com/include/"+e+"/"+t+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a)}}}(),drift.SNIPPET_VERSION="0.3.1",drift.load("86kungi7t23i"),drift.identify(n,{email:e})}),n}return Object(c.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.profile;t&&t.email&&(h.b(function(e){e.setUser({email:t.email})}),this.initDrift(t))}},{key:"render",value:function(){return B("div",null,B(H,null),B(K,{fixed:!0},this.props.children))}}]),e}(u.Component);e.a=Object(p.b)(function(t){return{profile:t.dashboard.profile}},null)(F)},TUfB:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){var t=n("5Uns");return{page:t.default||t}}])},uniG:function(t,e,n){"use strict";var a=n("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("q1tI")),o=(0,a(n("8/g6")).default)(i.default.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");e.default=o}},[["TUfB",1,0]]]);