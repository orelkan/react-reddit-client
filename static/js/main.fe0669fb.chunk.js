(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5455:function(t,e,n){t.exports=n(5686)},5686:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(27),i=n.n(a),o=n(19),u=n(11),l=n(2),b=n(25),s=n(5691),O=n(103),d=n.n(O),j=n(104),f=n.n(j),m=n(7),p=n(46),v=n.n(p),h=n(171),g=n.n(h),w=n(66),E=n.n(w);function y(){var t=Object(u.a)(["\n      color: ",";\n    "]);return y=function(){return t},t}function k(){var t=Object(u.a)([""]);return k=function(){return t},t}function x(){var t=Object(u.a)(["\n    ",";\n    ","\n  "]);return x=function(){return t},t}function C(){var t=Object(u.a)(["\n  padding: 7px 0;\n"]);return C=function(){return t},t}function S(){var t=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin: auto 4% auto 0;\n"]);return S=function(){return t},t}var T="#FF8b60",N="#9494FF",_=Object(l.b)(S()),V=Object(l.b)(C()),R={UPVOTE:1,NO_VOTE:0,DOWNVOTE:-1};var M=function(t){var e=Object(c.useState)(R.NO_VOTE),n=Object(o.a)(e,2),r=n[0],a=n[1],i=function(t){return function(){a(t===r?R.NO_VOTE:t)}},u=function(t){switch(t){case R.UPVOTE:return T;case R.DOWNVOTE:return N;default:return"inherit"}}(r),b=function(t){return Object(l.b)(x(),V,r===t&&"color: ".concat(u,";"))},s=b(R.UPVOTE),O=b(R.DOWNVOTE),d=r===R.NO_VOTE?Object(l.b)(k()):Object(l.b)(y(),u);return Object(l.c)("div",{css:_},Object(l.c)(m.m,{css:s,"aria-label":"Upvote",onClick:i(R.UPVOTE)},Object(l.c)(E.a,null)),Object(l.c)(m.w,{variant:"h5",css:d},t.votes+r),Object(l.c)(m.m,{css:O,"aria-label":"Downvote",onClick:i(R.DOWNVOTE)},Object(l.c)(v.a,null)))},W=n(173),B=n.n(W);function I(){var t=Object(u.a)(["\n  margin-bottom: 1em;\n"]);return I=function(){return t},t}function L(){var t=Object(u.a)(["\n  margin: auto 0;\n  h4 {\n    font-size: 12pt;\n  }\n"]);return L=function(){return t},t}var D=Object(l.b)(L()),F=Object(l.b)(I());var P=function(t){var e=t.post,n="https://www.reddit.com".concat(e.permalink);return Object(l.c)("div",{css:D},Object(l.c)(m.w,{variant:"h5",css:F},Object(l.c)("a",{href:n,target:"_blank",rel:"noopener noreferrer"},B.a.decode(e.title))),Object(l.c)("div",null,Object(l.c)(m.w,{variant:"h4"},e.subreddit_name_prefixed)))};function U(){var t=Object(u.a)(["\n  margin: auto 4% auto 0;\n  width: auto;\n  max-height: 7em;\n  padding: 1em 0;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return U=function(){return t},t}var H=Object(l.b)(U());var q=function(t){return Object(l.c)("img",Object.assign({alt:"thumbnail",css:H},t))};function A(){var t=Object(u.a)(["\n  max-height: 30em;\n"]);return A=function(){return t},t}var G=Object(l.b)(A());var z=function(t){var e=t.src;return Object(l.c)("video",{muted:!0,loop:!0,autoPlay:!0,controls:!0,css:G},Object(l.c)("source",{src:e}))},J=n(107),X=function(t,e){return[-(e-window.innerHeight/2)/20,(t-window.innerWidth/2)/20,1.25]},Y=function(t,e,n){return"perspective(1200px) rotateX(".concat(t,"deg) rotateY(").concat(e,"deg) scale(").concat(n,")")};var K=function(t){var e=Object(J.b)(function(){return{xys:[0,0,1],config:{mass:3,tension:400,friction:40}}}),n=Object(o.a)(e,2),c=n[0],a=n[1];return r.a.createElement(J.a.div,{onMouseMove:function(t){var e=t.clientX,n=t.clientY;return a({xys:X(e,n)})},onMouseLeave:function(){return a({xys:[0,0,1]})},style:{transform:c.xys.interpolate(Y)}},t.children)};function Q(){var t=Object(u.a)(["\n  padding: 1em 2em;\n"]);return Q=function(){return t},t}function Z(){var t=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Z=function(){return t},t}function $(){var t=Object(u.a)(["\n  height: fit-content;\n  margin: auto 0 auto auto;\n"]);return $=function(){return t},t}function tt(){var t=Object(u.a)(["\n  max-height: 30em;\n  margin: auto 0;\n  display: block;\n"]);return tt=function(){return t},t}function et(){var t=Object(u.a)(["\n  display: flex;\n  padding: 0.5em 3%;\n"]);return et=function(){return t},t}function nt(){var t=Object(u.a)(["\n  min-width: 275px;\n  margin: 1em auto;\n"]);return nt=function(){return t},t}function ct(){var t=Object(u.a)(["\n  h5 {\n    font-size: 13pt;\n  }\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"]);return ct=function(){return t},t}var rt=Object(l.b)(ct()),at=Object(l.b)(nt()),it=Object(l.b)(et()),ot=Object(l.b)(tt()),ut=Object(l.b)($()),lt=Object(l.b)(Z()),bt=Object(l.b)(Q());var st=function(t){var e=t.post,n=Object(c.useState)(!1),r=Object(o.a)(n,2),a=r[0],i=r[1],u=function(){return i(!a)},b=e.thumbnail.startsWith("http"),s=e.url.split("?")[0],O=[".jpg",".gif",".png"].some(function(t){return s.endsWith(t)}),d=e.selftext&&e.selftext.length>0,j=e.media&&e.media.reddit_video&&e.media.reddit_video.fallback_url,f=O||d||j;return Object(l.c)(m.l,{in:!0,css:rt,timeout:800},Object(l.c)(m.b,{css:at},Object(l.c)("div",{css:it},Object(l.c)(M,{votes:e.ups}),b&&Object(l.c)(q,{src:e.thumbnail,height:e.thumbnail_height,onClick:u}),Object(l.c)(P,{post:e}),f&&Object(l.c)(m.m,{css:ut,onClick:u,"aria-expanded":a},Object(l.c)(v.a,null))),Object(l.c)(m.d,{in:a,timeout:"auto",unmountOnExit:!0,css:lt},O&&Object(l.c)(K,null,Object(l.c)("img",{src:e.url,alt:"source",css:ot})),j&&Object(l.c)(z,{src:e.media.reddit_video.fallback_url}),Object(l.c)("div",{css:bt},d&&Object(l.c)(m.w,{variant:"h5"},Object(l.c)(g.a,{source:e.selftext}))))))},Ot="https://www.reddit.com",dt=[{label:"Hot",value:"hot"},{label:"Top Hour",value:"top hour"},{label:"Top Day",value:"top day"},{label:"Top Week",value:"top week"},{label:"Top Month",value:"top month"},{label:"Top All Time",value:"top all"},{label:"New",value:"new"},{label:"Best",value:"best"},{label:"Controversial",value:"controversial"}],jt="https://github.com/orelkan/react-reddit-client";function ft(){var t=Object(u.a)(["\n  min-width: 120px;\n"]);return ft=function(){return t},t}function mt(){var t=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return mt=function(){return t},t}var pt=Object(l.b)(mt()),vt=Object(l.b)(ft());var ht=function(t){var e=t.subreddit,n=t.filter,c=t.onSelection;return Object(l.c)("div",{css:pt},Object(l.c)(m.w,{variant:"h2"},"/r/".concat(e)),Object(l.c)(m.k,{variant:"outlined",css:vt},Object(l.c)(m.n,null,"Order"),Object(l.c)(m.u,{value:n,onChange:function(t){return c(t.target.value)},input:Object(l.c)(m.t,{labelWidth:43})},dt.map(function(t){var e=t.label,n=t.value;return Object(l.c)(m.s,{key:n,value:n},e)}))))};function gt(){var t=Object(u.a)(["\n  ",";\n  width: 8em !important;\n  height: 8em !important;\n  margin-top: 3em;\n"]);return gt=function(){return t},t}function wt(){var t=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n"]);return wt=function(){return t},t}function Et(){var t=Object(u.a)(["\n  margin: 2em 7%;\n"]);return Et=function(){return t},t}var yt=Object(l.b)(Et()),kt=Object(l.b)(wt()),xt=Object(l.b)(gt(),kt),Ct=function(){return Object(l.c)(m.w,{variant:"h3",gutterBottom:!0},"No such Subreddit")},St="hot";var Tt=Object(c.memo)(function(t){var e=Object(c.useState)(null),n=Object(o.a)(e,2),r=n[0],a=n[1],i=Object(c.useState)(!1),u=Object(o.a)(i,2),b=u[0],s=u[1],O=Object(c.useState)(null),d=Object(o.a)(O,2),j=d[0],p=d[1],v=Object(c.useState)(null),h=Object(o.a)(v,2),g=h[0],w=h[1],E=Object(c.useState)(!1),y=Object(o.a)(E,2),k=y[0],x=y[1],C=Object(c.useState)(St),S=Object(o.a)(C,2),T=S[0],N=S[1],_=T.split(" "),V=Object(o.a)(_,2),R=V[0],M=V[1],W="".concat(Ot,"/r/").concat(t.subreddit,"/").concat(R,".json")+(M?"?t=".concat(M):""),B=function(t){return t.data.data.children.map(function(t){return t.data})};return Object(c.useEffect)(function(){s(!0),f.a.get(W).then(function(t){var e=B(t);s(!1),p(t.data.data),w(null),a(e)}).catch(function(t){s(!1),w(t),a(null)})},[t.subreddit,W]),Object(c.useEffect)(function(){if(k&&!b&&j.after){var t=j.after;f.a.get(W+"?after="+t).then(function(t){var e=B(t);a(function(t){return t&&t.concat(e)}),p(t.data.data),x(!1)}).catch(function(){x(!1)})}else x(!1)},[k,j,b,W]),Object(c.useEffect)(function(){function t(){var t=document.getElementById("root");!k&&t.getBoundingClientRect().bottom<=window.innerHeight&&x(!0)}return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}},[k]),Object(l.c)("div",{css:yt},Object(l.c)(ht,{subreddit:t.subreddit,filter:T,onSelection:N}),b&&Object(l.c)(m.c,{css:xt}),r&&r.map(function(t){return Object(l.c)(st,{post:t,key:t.id})}),g&&!b&&Object(l.c)(Ct,null),k&&Object(l.c)(m.c,{css:kt}))}),Nt=n(32),_t=n(67),Vt=n.n(_t),Rt=n(68),Mt=n.n(Rt),Wt=n(65),Bt=n.n(Wt),It=n(38),Lt=n.n(It),Dt=n(45),Ft=n.n(Dt),Pt=n(39),Ut=n(69),Ht=n.n(Ut),qt=n(70),At=n.n(qt);var Gt=Object(b.withStyles)(function(t){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(Nt.a)({display:"none"},t.breakpoints.up("sm"),{display:"block"}),search:Object(Nt.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(Pt.fade)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(Pt.fade)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing.unit,width:"auto"}),searchIcon:{width:9*t.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(Nt.a)({paddingTop:t.spacing.unit,paddingRight:t.spacing.unit,paddingBottom:t.spacing.unit,paddingLeft:10*t.spacing.unit,transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}})(function(t){var e=t.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(Vt.a,{position:"fixed"},r.a.createElement(Mt.a,null,r.a.createElement(Bt.a,{onClick:t.onMenuClick,className:e.menuButton,color:"inherit","aria-label":"Open drawer"},r.a.createElement(Ht.a,null)),r.a.createElement(Lt.a,{className:e.title,variant:"h6",color:"inherit",noWrap:!0},"React Reddit Client"),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(At.a,null)),r.a.createElement(Ft.a,{placeholder:"Go to subreddit",classes:{root:e.inputRoot,input:e.inputInput},onChange:t.onSubredditChange})))))}),zt=n(72);var Jt=function(t){var e=t.open,n=t.onClose;return r.a.createElement(m.e,{open:e,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(m.i,{id:"alert-dialog-title"},"About"),r.a.createElement(m.g,null,r.a.createElement(m.h,{id:"alert-dialog-description"},"Personal project by Orel Kanditan ",r.a.createElement("br",null),"Made using React, Material UI and Emotion ",r.a.createElement("br",null),"See the source code on "," ",r.a.createElement("a",{href:jt,target:"_blank",rel:"noopener noreferrer"},"GitHub"))),r.a.createElement(m.f,null,r.a.createElement(m.a,{onClick:n,color:"primary",autoFocus:!0},"Close")))};function Xt(){var t=Object(u.a)(["\n  margin: 0.5em;\n"]);return Xt=function(){return t},t}function Yt(){var t=Object(u.a)(["\n  width: 250px;\n"]);return Yt=function(){return t},t}var Kt=Object(l.b)(Yt()),Qt=Object(l.b)(Xt());var Zt=function(t){var e=t.open,n=t.onOpen,r=t.onClose,a=t.onSelection,i=Object(c.useState)(!1),u=Object(o.a)(i,2),b=u[0],s=u[1];return Object(l.c)(m.v,{open:e,onClose:r,onOpen:n},Object(l.c)("div",{css:Kt},Object(l.c)(m.w,{variant:"h5",css:Qt},"React Reddit Client"),Object(l.c)(m.j,null),Object(l.c)(m.o,null,Object(l.c)(m.p,{button:!0,onClick:function(){return a("light")}},Object(l.c)(m.q,null,Object(l.c)(zt.b,null)),Object(l.c)(m.r,{primary:"Light theme"})),Object(l.c)(m.p,{button:!0,onClick:function(){return a("dark")}},Object(l.c)(m.q,null,Object(l.c)(zt.c,null)),Object(l.c)(m.r,{primary:"Dark theme"})),Object(l.c)(m.p,{button:!0,onClick:function(){return s(!0)}},Object(l.c)(m.q,null,Object(l.c)(zt.a,null)),Object(l.c)(m.r,{primary:"About"}))),Object(l.c)(Jt,{open:b,onClose:function(){return s(!1)}})))};var $t=function(t){var e=t.onSubredditChange,n=t.onSelection,a=Object(c.useState)(!1),i=Object(o.a)(a,2),u=i[0],l=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Gt,{onSubredditChange:e,onMenuClick:function(){return l(!0)}}),r.a.createElement(Zt,{open:u,onSelection:function(t){l(!1),n(t)},onOpen:function(){return l(!0)},onClose:function(){return l(!1)}}))};function te(){var t=Object(u.a)(["\n    body {\n      margin: 0;\n      background: ",";\n    }\n  "]);return te=function(){return t},t}function ee(){var t=Object(u.a)(["\n  margin-top: 5em;\n"]);return ee=function(){return t},t}var ne=Object(l.b)(ee()),ce="#181a1b",re="dark";var ae=function(){var t=Object(c.useState)("all"),e=Object(o.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(re),i=Object(o.a)(a,2),u=i[0],O=i[1],j=Object(b.createMuiTheme)({palette:{primary:{main:d.a[800]},type:u},typography:{useNextVariants:!0}}),f="dark"===u?ce:"inherit",m=Object(l.b)(te(),f);return Object(l.c)(s.a,{injectFirst:!0},Object(l.c)(b.MuiThemeProvider,{theme:j},Object(l.c)(l.a,{styles:m}),Object(l.c)($t,{onSubredditChange:function(t){r(t.target.value)},onSelection:O}),Object(l.c)("div",{css:ne},Object(l.c)(Tt,{subreddit:n}))))};i.a.render(r.a.createElement(ae,null),document.getElementById("root"))}},[[5455,1,2]]]);
//# sourceMappingURL=main.fe0669fb.chunk.js.map