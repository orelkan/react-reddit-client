(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,n){e.exports=n(237)},237:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),i=n(12),u=n(8),l=n(4),b=n(123),s=n(298),d=n(299),O=n(86),j=n.n(O),m=n(54),f=n.n(m),h=n(112),p=n(41),v=n(282),g=n(275),w=n(276),x=n(272),y=n(70),E=n.n(y),k=n(46),C=n.n(k),S=n(117),T=n.n(S);function R(){var e=Object(u.a)(["\n      color: ",";\n    "]);return R=function(){return e},e}function _(){var e=Object(u.a)([""]);return _=function(){return e},e}function I(){var e=Object(u.a)(["\n    ",";\n    ","\n  "]);return I=function(){return e},e}function N(){var e=Object(u.a)(["\n  padding: 7px 0;\n  width: 40px;\n"]);return N=function(){return e},e}function V(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  margin: auto 4% auto 0;\n"]);return V=function(){return e},e}var D="#FF8b60",B="#9494FF",P=Object(l.b)(V()),L=Object(l.b)(N()),M={UPVOTE:1,NO_VOTE:0,DOWNVOTE:-1};var W=function(e){var t,n=Object(a.useState)(M.NO_VOTE),r=Object(i.a)(n,2),c=r[0],o=r[1],u=function(e){return function(){o(e===c?M.NO_VOTE:e)}},b=function(e){switch(e){case M.UPVOTE:return D;case M.DOWNVOTE:return B;default:return"inherit"}}(c),s=function(e){return Object(l.b)(I(),L,c===e&&"color: ".concat(b,";"))},d=s(M.UPVOTE),O=s(M.DOWNVOTE),j=c===M.NO_VOTE?Object(l.b)(_()):Object(l.b)(R(),b);return Object(l.c)("div",{css:P},Object(l.c)(x.a,{css:d,"aria-label":"Upvote",onClick:u(M.UPVOTE)},Object(l.c)(T.a,null)),Object(l.c)(p.a,{variant:"h5",css:j},(t=e.votes+c)>999?(t/1e3).toFixed(1)+"k":t),Object(l.c)(x.a,{css:O,"aria-label":"Downvote",onClick:u(M.DOWNVOTE)},Object(l.c)(E.a,null)))};function Y(){var e=Object(u.a)(["\n  margin-bottom: 1em;\n"]);return Y=function(){return e},e}function F(){var e=Object(u.a)(["\n  margin: auto 0;\n  h4 {\n    font-size: 12pt;\n  }\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"]);return F=function(){return e},e}var H=Object(l.b)(F()),U=Object(l.b)(Y());var z=Object(a.memo)(function(e){var t=e.post,n="https://www.reddit.com".concat(t.permalink);return Object(l.c)("div",{css:H},Object(l.c)(p.a,{variant:"h5",css:U},Object(l.c)("a",{href:n,target:"_blank",rel:"noopener noreferrer"},C.a.decode(t.title))),Object(l.c)("div",null,Object(l.c)(p.a,{variant:"h4"},t.subreddit_name_prefixed)))});function A(){var e=Object(u.a)(["\n  margin: auto 4% auto 0;\n  width: auto;\n  max-height: 7em;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  @media only screen and (max-width: 768px) {\n    max-width: 25%;\n    height: auto;\n    align-self: center;\n  }\n"]);return A=function(){return e},e}var G=Object(l.b)(A());var J=function(e){return Object(l.c)("img",Object.assign({alt:"thumbnail",css:G},e))},q=localStorage.getItem("autoExpand"),K=q&&JSON.parse(q)||!1,X=r.a.createContext(K);function Q(e){var t=e.children,n=Object(a.useState)(K),c=Object(i.a)(n,2),o=[c[0],c[1]];return r.a.createElement(X.Provider,{value:o},t)}function Z(){var e=Object(a.useContext)(X),t=Object(i.a)(e,2),n=t[0],r=t[1];return[n,function(e){e!==n&&(localStorage.setItem("autoExpand",e),r(e))}]}var $=n(118),ee=n.n($);function te(){var e=Object(u.a)(["\n  max-height: 30em;\n  max-width: 100%;\n"]);return te=function(){return e},e}var ne=Object(l.b)(te());var ae=Object(a.memo)(function(e){var t=e.src;return Object(l.c)("video",{muted:!0,loop:!0,autoPlay:!0,controls:!0,css:ne},Object(l.c)("source",{src:t}))}),re=n(50),ce=function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.25]},oe=function(e,t,n){return"perspective(1200px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(n,")")};var ie=Object(a.memo)(function(e){var t=Object(re.b)(function(){return{xys:[0,0,1],config:{mass:3,tension:400,friction:40}}}),n=Object(i.a)(t,2),a=n[0],c=n[1];return r.a.createElement(re.a.div,{onMouseMove:function(e){var t=e.clientX,n=e.clientY;return c({xys:ce(t,n)})},onMouseLeave:function(){return c({xys:[0,0,1]})},style:{transform:a.xys.interpolate(oe)}},e.children)}),ue=n(119);var le=function(e){var t=e.isOpen,n=e.children,c=function(){var e=Object(a.useRef)(),t=Object(a.useState)({left:0,top:0,width:0,height:0}),n=Object(i.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(function(){return new ue.a(function(e){var t=Object(i.a)(e,1)[0];return c(t.contentRect)})}),u=Object(i.a)(o,1)[0];return Object(a.useEffect)(function(){return e.current&&u.observe(e.current),function(){return u.disconnect()}},[u]),[{ref:e},r]}(),o=Object(i.a)(c,2),u=o[0],l=o[1].height,b=Object(re.b)({height:t?l:0,from:{height:t?0:l}});return r.a.createElement(re.a.div,{style:b},r.a.createElement("div",u,n))};function be(){var e=Object(u.a)(["\n  max-width: 100%;\n  width: 70vw;\n  height: 80vh;\n  justify-content: center;\n  display: flex;\n"]);return be=function(){return e},e}function se(){var e=Object(u.a)(["\n  overflow: auto;\n  @media only screen and (max-width: 768px) {\n    max-width: 85%;\n    margin: 0 auto;\n  }\n  p {\n    margin-top: 0;\n  }\n"]);return se=function(){return e},e}function de(){var e=Object(u.a)(["\n  max-height: 70vh;\n  max-width: 100%;\n  margin: auto 0;\n  display: block;\n"]);return de=function(){return e},e}function Oe(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 0 2em 1em 2em;\n  @media only screen and (max-width: 768px) {\n    padding: 5%;\n    padding-top: 0;\n  }\n"]);return Oe=function(){return e},e}var je=Object(l.b)(Oe()),me=Object(l.b)(de()),fe=Object(l.b)(se()),he=Object(l.b)(be());var pe=function(e){var t=e.post,n=e.expanded,a=e.hasImage,r=e.hasVideo,c=e.hasEmbed,o=e.hasText,i=e.htmlEmbed;return Object(l.c)(le,{isOpen:n},Object(l.c)("div",{css:je},r?Object(l.c)(ae,{src:t.media.reddit_video.fallback_url}):c?Object(l.c)("div",{css:he,dangerouslySetInnerHTML:{__html:i}}):a?Object(l.c)(ie,null,Object(l.c)("img",{src:t.url,alt:"source",css:me})):o?Object(l.c)(p.a,{variant:"h5",css:fe},Object(l.c)(ee.a,{source:C.a.decode(t.selftext)})):null))};function ve(){var e=Object(u.a)(["\n    transform: rotate(","deg);\n  "]);return ve=function(){return e},e}function ge(){var e=Object(u.a)(["\n  height: fit-content;\n  margin: auto 0 auto auto;\n  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n"]);return ge=function(){return e},e}function we(){var e=Object(u.a)(["\n  display: flex;\n  padding: 1em 3%;\n"]);return we=function(){return e},e}function xe(){var e=Object(u.a)(["\n  min-width: 275px;\n  margin: 1em auto;\n  h5 {\n    font-size: 13pt;\n  }\n"]);return xe=function(){return e},e}var ye=Object(l.b)(xe()),Ee=Object(l.b)(we()),ke=Object(l.b)(ge());function Ce(e){var t=e.post,n=e.width,r=e.growIn,c=void 0===r||r,o=Z(),u=Object(i.a)(o,1)[0],b=Object(a.useState)(u),s=Object(i.a)(b,2),d=s[0],O=s[1],j=d?180:0,m=Object(l.b)(ve(),j),f=function(){return O(!d)};Object(a.useEffect)(function(){O(u)},[u]);var h=Boolean(t.thumbnail.startsWith("http")),p=t.url.split("?")[0],v=Boolean([".jpg",".jpeg",".gif",".png"].some(function(e){return p.endsWith(e)})),y=Boolean(t.selftext&&t.selftext.length>0),k=Boolean(t.media&&t.media.reddit_video&&t.media.reddit_video.fallback_url),S=Boolean(t.media_embed&&t.media_embed.content),T=v||y||k||S,R=Object(a.useMemo)(function(){var e=S&&n<=768?t.media_embed.content.replace(/width="[0-9]+"/,"").replace(/height="[0-9]+"/,""):t.media_embed.content,a=S&&e.replace(/style="[a-z:;]+"/,"");return S&&C.a.decode(a)},[n,S,t]);return Object(l.c)(g.a,{in:c,timeout:500},Object(l.c)(w.a,{css:ye},Object(l.c)("div",{css:Ee},Object(l.c)(W,{votes:t.ups}),h&&Object(l.c)(J,{src:t.thumbnail,height:t.thumbnail_height,onClick:f}),Object(l.c)(z,{post:t}),T&&Object(l.c)(x.a,{css:[ke,m],onClick:f,"aria-expanded":d},Object(l.c)(E.a,null))),T&&Object(l.c)(pe,{post:t,expanded:d,htmlEmbed:R,hasEmbed:S,hasImage:v,hasText:y,hasVideo:k})))}Ce.whyDidYouRender=!0;var Se=Object(a.memo)(Ce);function Te(e){var t=e.posts,n=e.loadingPosts;return t&&t.map(function(e){return Object(l.c)(Se,{post:e,key:e.id,growIn:!n})})}Te.whyDidYouRender=!0;var Re=Object(a.memo)(Te),_e="https://www.reddit.com",Ie=[{label:"Hot",value:"hot"},{label:"Top Hour",value:"top hour"},{label:"Top Day",value:"top day"},{label:"Top Week",value:"top week"},{label:"Top Month",value:"top month"},{label:"Top All Time",value:"top all"},{label:"New",value:"new"},{label:"Best",value:"best"},{label:"Controversial",value:"controversial"}],Ne="https://github.com/orelkan/react-reddit-client",Ve=n(277),De=n(278),Be=n(303),Pe=n(300),Le=n(305),Me=n(281);function We(){var e=Object(u.a)(["\n  overflow-wrap: break-word;\n"]);return We=function(){return e},e}function Ye(){var e=Object(u.a)(["\n  @media only screen and (max-width: 768px) {\n    padding-bottom: 1em;\n  }\n"]);return Ye=function(){return e},e}function Fe(){var e=Object(u.a)(["\n  min-width: 120px;\n"]);return Fe=function(){return e},e}var He=Object(l.b)(Fe()),Ue=Object(l.b)(Ye()),ze=Object(l.b)(We());function Ae(e){var t=e.subreddit,n=e.filter,a=e.onSelection;return Object(l.c)(Ve.a,{container:!0,justify:"space-between"},Object(l.c)(Ve.a,{item:!0,xs:12,sm:6,md:6,lg:6,css:Ue},Object(l.c)(p.a,{variant:"h2",css:ze},"/r/".concat(t))),Object(l.c)(Ve.a,{item:!0},Object(l.c)(De.a,{variant:"outlined",css:He},Object(l.c)(Be.a,null,"Order"),Object(l.c)(Pe.a,{value:n,onChange:function(e){return a(e.target.value)},input:Object(l.c)(Le.a,{labelWidth:43})},Ie.map(function(e){var t=e.label,n=e.value;return Object(l.c)(Me.a,{key:n,value:n},t)})))))}Ae.whyDidYouRender=!0;var Ge=Object(a.memo)(Ae);function Je(){var e=Object(u.a)(["\n  ",";\n  width: 8em !important;\n  height: 8em !important;\n  margin-top: 3em;\n"]);return Je=function(){return e},e}function qe(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n"]);return qe=function(){return e},e}function Ke(){var e=Object(u.a)(["\n  margin: 2em 7%;\n  @media only screen and (max-width: 768px) {\n    margin: 2em 4%;\n  }\n"]);return Ke=function(){return e},e}var Xe=Object(l.b)(Ke()),Qe=Object(l.b)(qe()),Ze=Object(l.b)(Je(),Qe),$e=function(e){var t=e.error;return Object(l.c)(p.a,{variant:"h3",gutterBottom:!0},t.response?"No such Subreddit":"Network Error")},et="hot";function tt(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(!1),u=Object(i.a)(o,2),b=u[0],s=u[1],d=Object(a.useState)(null),O=Object(i.a)(d,2),j=O[0],m=O[1],p=Object(a.useState)(null),g=Object(i.a)(p,2),w=g[0],x=g[1],y=Object(a.useState)(!1),E=Object(i.a)(y,2),k=E[0],C=E[1],S=Object(a.useState)(et),T=Object(i.a)(S,2),R=T[0],_=T[1],I=R.split(" "),N=Object(i.a)(I,2),V=N[0],D=N[1],B="".concat(_e,"/r/").concat(e.subreddit,"/").concat(V,".json")+(D?"?t=".concat(D):""),P=function(e){return e.data.data.children.map(function(e){return e.data})},L=function(e){return c(Object(h.uniqBy)(e,"id"))};return Object(a.useEffect)(function(){s(!0),f.a.get(B).then(function(e){var t=P(e);s(!1),m(e.data.data),x(null),L(t)}).catch(function(e){s(!1),x(e),c(null)})},[e.subreddit,B]),Object(a.useEffect)(function(){if(k&&!b&&j.after){var e=j.after;f.a.get(B+"?after="+e).then(function(e){var t=P(e);L(r&&r.concat(t)),m(e.data.data),C(!1)}).catch(function(){C(!1)})}else C(!1)},[k,j,b,B,r]),Object(a.useEffect)(function(){function e(){var e=document.getElementById("root");!k&&e.getBoundingClientRect().bottom<=window.innerHeight&&C(!0)}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[k]),Object(l.c)("div",{css:Xe},Object(l.c)(Ge,{subreddit:e.subreddit,filter:R,onSelection:_}),b&&Object(l.c)(v.a,{css:Ze}),Object(l.c)(Re,{posts:r,loadingPosts:b}),w&&!b&&Object(l.c)($e,{error:w}),k&&Object(l.c)(v.a,{css:Qe}))}tt.whyDidYouRender=!0;var nt=Object(a.memo)(tt),at=n(33),rt=n(301),ct=n(283),ot=n(284),it=n(304),ut=n(85),lt=n(5),bt=n(120),st=n.n(bt),dt=n(122),Ot=n.n(dt);function jt(e){var t=e.classes,n=Object(a.useState)([]),c=Object(i.a)(n,2),o=c[0],u=c[1];function l(t){"Enter"===t.key&&(window.scrollTo(0,0),e.onSubredditChange(t))}return r.a.createElement("div",{className:t.root},r.a.createElement(ct.a,{position:"fixed"},r.a.createElement(ot.a,{className:t.toolbar},r.a.createElement(x.a,{onClick:e.onMenuClick,className:t.menuButton,color:"inherit","aria-label":"Open drawer"},r.a.createElement(st.a,null)),r.a.createElement(p.a,{className:t.title,variant:"h6",color:"inherit",noWrap:!0},"React Reddit Client"),r.a.createElement("div",{className:t.grow}),r.a.createElement(rt.a,{id:"subreddit-textbox",options:o,onInputChange:function(e,t,n){var a;"input"===n&&(a=t,f.a.get("".concat(_e,"/api/search_reddit_names.json?query=").concat(a)).then(function(e){u(e.data.names)}).catch(function(e){u([])}))},getOptionSelected:function(e,t){return e.toLowerCase()===t.toLowerCase()},renderInput:function(e){return r.a.createElement("div",{className:t.search,ref:e.InputProps.ref},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(Ot.a,null)),r.a.createElement(it.a,Object.assign({},e.inputProps,{placeholder:"Go to subreddit",classes:{root:t.inputRoot,input:t.inputInput},onKeyPress:l})))}}))))}jt.whyDidYouRender=!0;var mt=Object(lt.a)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(at.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(at.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ut.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ut.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(at.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}}),toolbar:{minHeight:"52px"}}})(jt),ft=n(302),ht=n(291),pt=n(280),vt=n(238),gt=n(292),wt=n(294),xt=n(296),yt=n(306),Et=n(293),kt=n(295),Ct=n(297),St=n(285),Tt=n(286),Rt=n(287),_t=n(288),It=n(289),Nt=n(290);var Vt=function(e){var t=e.open,n=e.onClose;return r.a.createElement(St.a,{open:t,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(Tt.a,{id:"alert-dialog-title"},"About"),r.a.createElement(Rt.a,null,r.a.createElement(_t.a,{id:"alert-dialog-description"},"Personal project by Orel Kanditan ",r.a.createElement("br",null),"Made using React, Material UI and Emotion ",r.a.createElement("br",null),"See the source code on "," ",r.a.createElement("a",{href:Ne,target:"_blank",rel:"noopener noreferrer"},"GitHub"))),r.a.createElement(It.a,null,r.a.createElement(Nt.a,{onClick:n,color:"primary",autoFocus:!0},"Close")))};function Dt(){var e=Object(u.a)(["\n  .label {\n    font-size: 1rem;\n    margin-left: 8px;\n  }\n"]);return Dt=function(){return e},e}function Bt(){var e=Object(u.a)(["\n  height: 3em;\n"]);return Bt=function(){return e},e}function Pt(){var e=Object(u.a)(["\n  margin: 0.5em;\n"]);return Pt=function(){return e},e}function Lt(){var e=Object(u.a)(["\n  width: 250px;\n"]);return Lt=function(){return e},e}var Mt=Object(l.b)(Lt()),Wt=Object(l.b)(Pt()),Yt=Object(l.b)(Bt()),Ft=Object(l.b)(Dt());function Ht(e){var t=e.open,n=e.onOpen,r=e.onClose,c=e.onSelection,o=Object(a.useState)(!1),u=Object(i.a)(o,2),b=u[0],s=u[1],d=Z(),O=Object(i.a)(d,2),j=O[0],m=O[1];return Object(l.c)(ft.a,{open:t,onClose:r,onOpen:n},Object(l.c)("div",{css:Mt},Object(l.c)(p.a,{variant:"h5",css:Wt},"React Reddit Client"),Object(l.c)(ht.a,null),Object(l.c)(pt.a,null,Object(l.c)(vt.a,{button:!0,onClick:function(){return c("light")}},Object(l.c)(gt.a,null,Object(l.c)(Et.a,null)),Object(l.c)(wt.a,{primary:"Light theme"})),Object(l.c)(vt.a,{button:!0,onClick:function(){return c("dark")}},Object(l.c)(gt.a,null,Object(l.c)(kt.a,null)),Object(l.c)(wt.a,{primary:"Dark theme"})),Object(l.c)(vt.a,{button:!0,css:Yt},Object(l.c)(xt.a,{css:Ft,classes:{label:"label"},control:Object(l.c)(yt.a,{checked:j,onChange:function(){r(),m(!j)}}),label:"Auto Expand"})),Object(l.c)(vt.a,{button:!0,onClick:function(){return s(!0)}},Object(l.c)(gt.a,null,Object(l.c)(Ct.a,null)),Object(l.c)(wt.a,{primary:"About"}))),Object(l.c)(Vt,{open:b,onClose:function(){return s(!1)}})))}Ht.whyDidYouRender=!0;var Ut=Ht;function zt(e){var t=e.onSubredditChange,n=e.onSelection,c=Object(a.useState)(!1),o=Object(i.a)(c,2),u=o[0],l=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(mt,{onSubredditChange:t,onMenuClick:function(){return l(!0)}}),r.a.createElement(Ut,{open:u,onSelection:function(e){l(!1),n(e)},onOpen:function(){return l(!0)},onClose:function(){return l(!1)}}))}zt.whyDidYouRender=!0;var At=zt;function Gt(){var e=Object(u.a)(["\n    ","\n    body {\n      margin: 0;\n      background: ",";\n    }\n    ","\n  "]);return Gt=function(){return e},e}function Jt(){var e=Object(u.a)(["\n    a {\n      color: lightblue;\n    }\n  "]);return Jt=function(){return e},e}function qt(){var e=Object(u.a)(["\n  body::-webkit-scrollbar {\n    width: 0.5em;\n  }\n  body::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n  }\n  body::-webkit-scrollbar-thumb {\n    background-color: #383838;\n    outline: 1px solid slategrey;\n  }\n"]);return qt=function(){return e},e}function Kt(){var e=Object(u.a)(["\n  margin-top: 4.5em;\n"]);return Kt=function(){return e},e}var Xt=Object(l.b)(Kt()),Qt=Object(l.b)(qt()),Zt="#181a1b",$t=localStorage.getItem("theme")||"dark";function en(){var e=Object(a.useState)("all"),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)($t),o=Object(i.a)(c,2),u=o[0],O=o[1];var m=Object(b.a)({palette:{primary:{main:j.a[800]},secondary:{main:j.a[300]},type:u},typography:{useNextVariants:!0,allVariants:{color:"dark"===u?"white":"inherit"}}}),f=Object(l.b)(Jt()),h="dark"===u?Zt:"inherit",p=Object(l.b)(Gt(),Qt,h,"dark"===u&&f);return Object(l.c)(d.b,{injectFirst:!0},Object(l.c)(s.a,{theme:m},Object(l.c)(l.a,{styles:p}),Object(l.c)(Q,null,Object(l.c)(At,{onSubredditChange:function(e){r(e.target.value.trim())},onSelection:function(e){localStorage.setItem("theme",e),O(e)}}),Object(l.c)("div",{css:Xt},Object(l.c)(nt,{subreddit:n})))))}en.whyDidYouRender=!0;var tn=en;o.a.render(r.a.createElement(tn,null),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.6202e214.chunk.js.map