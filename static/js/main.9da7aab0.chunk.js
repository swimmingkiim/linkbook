(this.webpackJsonplinkbook=this.webpackJsonplinkbook||[]).push([[0],{35:function(e,n,t){e.exports=t(52)},52:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(29),i=t.n(o),c=t(2),u=t(1),l=t(30);function s(){var e=Object(c.a)(["\n  ","\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    color: #000000;\n  }\n  html, body, #root {\n    width: 100%;\n    min-height: 100vh;\n    background-color: #f2e07d;\n  }\n"]);return s=function(){return e},e}var d=Object(u.createGlobalStyle)(s(),l.normalize),f=t(5),m=t(14),p=t(3);function h(){var e=Object(c.a)(["\n  color: ",";\n  background-color: ",";\n"]);return h=function(){return e},e}function b(){var e=Object(c.a)(["\n  width: 100%;\n  height: 10rem;\n  ","\n"]);return b=function(){return e},e}var g=u.default.header(b(),(function(e){return e.theme.centerByFlex})),v=u.default.h1(h(),(function(e){return e.theme.color.themeColor}),(function(e){return e.theme.color.backgroundColor})),w=function(){return a.a.createElement(g,null,a.a.createElement(v,null,"LinkBook"))},k=t(4),y=t.n(k),E=t(9),j=t(16);t(42),t(44);j.initializeApp({apiKey:"AIzaSyDRU9VcUXfdJ0cDNG7XSm06cEdOYa0YdU8",authDomain:"linkbook-5270e.firebaseapp.com",databaseURL:"https://linkbook-5270e.firebaseio.com",projectId:"linkbook-5270e",storageBucket:"linkbook-5270e.appspot.com",messagingSenderId:"84748375155",appId:"1:84748375155:web:b6e98d16dd923694850606"});var O=j.auth(),x=j.firestore(),C=j;function S(){var e=Object(c.a)(["\n  font-size: 150%;\n  padding: 5%;\n  background-color: ",";\n  color: ",";\n  border: none;\n  border-radius: 0.5rem;\n\n  &:focus {\n    outline: none;\n  }\n\n  & > a {\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n  }\n"]);return S=function(){return e},e}var F=u.default.button(S(),(function(e){return e.theme.color.backgroundColor}),(function(e){return e.theme.color.themeColor})),A=function(e){var n=e.type,t=e.displayContent,r=e.onClickFunc;return a.a.createElement(F,{type:n,onClick:r},t)};function z(){var e=Object(c.a)(["\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: fit-content;\n  display: ",";\n  background-color: ",";\n\n  button {\n    display: inline-block;\n    float: right;\n  }\n\n  input + input {\n    margin-top: 5%;\n  }\n\n  i {\n    font-size: 250%;\n  }\n"]);return z=function(){return e},e}function L(){var e=Object(c.a)(["\n  color: ",";\n  background-color: ",";\n  font-size: 120%;\n  padding: 1% 2.5%;\n  border-radius: 0.25rem;\n  display: inline-block;\n  width: fit-content;\n  margin-bottom: 2.5%;\n"]);return L=function(){return e},e}function R(){var e=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  diplay: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n\n  label + label {\n    margin-left: 2%;\n  }\n"]);return R=function(){return e},e}function T(){var e=Object(c.a)(["\n  color: black;\n  font-weight: 700;\n  font-size: 150%;\n  display: block;\n  margin-bottom: 5%;\n"]);return T=function(){return e},e}function P(){var e=Object(c.a)(["\n  width: 25%;\n  position: absolute;\n  top: 5%;\n  right: 1%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  i {\n    font-size: 100%;\n  }\n"]);return P=function(){return e},e}function D(){var e=Object(c.a)(["\n  width: 100%;\n  width: 100%;\n  background-color: #ffffff;\n  padding: 5% 3%;\n  border-radius: 1.5rem;\n  position: relative;\n\n  button {\n    padding: 0.25%;\n    margin: 2.5%;\n    display: none;\n  }\n  &:hover {\n    button {\n      display: inline-block;\n    }\n  }\n"]);return D=function(){return e},e}var U=u.default.li(D()),q=u.default.div(P()),B=u.default.a(T()),I=u.default.div(R()),_=u.default.label(L(),(function(e){return e.theme.color.backgroundColor}),(function(e){return e.theme.color.themeColor})),G=u.default.form(z(),(function(e){return e.show}),(function(e){return e.theme.color.backgroundColor}));function N(){var e=Object(c.a)(["\n  width: 100%;\n  padding: 5%;\n  font-size: ",";\n  border: none;\n\n  @media only screen and (max-width: 768px) {\n    font-size: ",";\n  }\n"]);return N=function(){return e},e}var W=u.default.input(N(),(function(e){return e.theme.fontSize.desktop}),(function(e){return e.theme.fontSize.mobile})),J=function(e){var n=e.name,t=e.value,r=e.type,o=e.placeholder,i=e.onChangeFunc,c=e.isRequired;return a.a.createElement(W,Object.assign({type:r,name:n,value:t,placeholder:o},{required:c,onChange:i}))};function X(){var e=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  font-size: 250%;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return X=function(){return e},e}var Y=u.default.i(X()),K=function(e){var n=e.name;return a.a.createElement(Y,{className:"material-icons"},n)},V=function(e){var n=e.id,t=e.title,o=e.link,i=e.tags,c=Object(r.useState)(!1),u=Object(f.a)(c,2),l=u[0],s=u[1],d=Object(r.useState)(t),m=Object(f.a)(d,2),p=m[0],h=m[1],b=Object(r.useState)(o),g=Object(f.a)(b,2),v=g[0],w=g[1],k=Object(r.useState)(i.join(",")),j=Object(f.a)(k,2),O=j[0],C=j[1],S=function(){var e=Object(E.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("Are you sure? After deletion, you can't undo that.")){e.next=4;break}return e.next=4,x.collection("links").doc(n).delete();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),window.alert("There was an error while deletion, please try again after a while");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(E.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x.collection("links").doc(n).update({title:p,link:v,tags:(r=O,r.split(",").map((function(e){return e.trim()}))),createdAt:Date.now()});case 3:s(!1);case 4:case"end":return e.stop()}var r}),e)})));return function(n){return e.apply(this,arguments)}}(),z=function(e){var n=e.target,t=n.value;switch(n.name){case"updatedTitle":h(t);break;case"updatedLink":w(t);break;case"updatedTags":C(t)}};return a.a.createElement(U,null,a.a.createElement(q,null,a.a.createElement(A,{type:"button",displayContent:a.a.createElement(K,{name:"delete_forever"}),onClickFunc:S}),a.a.createElement(A,{type:"button",displayContent:a.a.createElement(K,{name:"create"}),onClickFunc:function(){return s((function(e){return!e}))}})),a.a.createElement(B,{href:o,target:"_blank"},t),a.a.createElement(I,null,i.map((function(e,n){return a.a.createElement(_,{key:t+"tag".concat(n)},e)}))),a.a.createElement(G,{onSubmit:F,show:l?"block":"none"},a.a.createElement(J,{type:"text",name:"updatedTitle",value:p,onChangeFunc:z,isRequired:!0}),a.a.createElement(J,{type:"text",name:"updatedLink",value:v,onChangeFunc:z,isRequired:!0}),a.a.createElement(J,{type:"text",name:"updatedTags",value:O,onChangeFunc:z,isRequired:!0}),a.a.createElement(A,{type:"submit",displayContent:a.a.createElement(K,{name:"save_alt"})})))};function H(){var e=Object(c.a)(["\n  width: fit-content;\n  font-size: 150%;\n  color: ",";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n"]);return H=function(){return e},e}function M(){var e=Object(c.a)(["\n  display: block;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-content: center;\n\n  button {\n    flex: 1;\n  }\n"]);return M=function(){return e},e}function Q(){var e=Object(c.a)(["\n  list-style-type: none;\n  display: block;\n  width: 100%;\n\n  li + li {\n    margin-top: 5%;\n  }\n"]);return Q=function(){return e},e}function Z(){var e=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  color: ",";\n  min-height: 360px;\n  position: relative;\n\n  a {\n    text-decoration: none;\n    font-weight: 700;\n  }\n"]);return Z=function(){return e},e}var $=u.default.div(Z(),(function(e){return e.theme.color.themeColor})),ee=u.default.ul(Q()),ne=u.default.div(M()),te=u.default.h3(H(),(function(e){return e.theme.color.themeColor})),re=function(e){var n=e.user,t=Object(r.useState)([]),o=Object(f.a)(t,2),i=o[0],c=o[1],u=Object(r.useState)("desc"),l=Object(f.a)(u,2),s=l[0],d=l[1],h=Object(p.f)(),b=Object(r.useCallback)((function(){try{return x.collection("links").where("creator","==",n.uid).orderBy("createdAt","desc").onSnapshot((function(e){var n=[];e.forEach((function(e){var t=e.data(),r=t.title,a=t.link,o=t.tags,i=t.createdAt;n.push({id:e.id,title:r,link:a,tags:o,createdAt:i})})),c(n)}))}catch(e){return console.log("Error while fetching linkList : "+e.toString()),function(){return null}}}),[n]),g=function(){var e=Object(E.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.signOut();case 2:h.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=b();return function(){return e()}}),[b]),a.a.createElement($,null,a.a.createElement(ne,null,a.a.createElement(A,{type:"button",displayContent:a.a.createElement(K,{name:"power_settings_new"}),onClickFunc:g}),a.a.createElement(A,{type:"button",displayContent:a.a.createElement(m.b,{to:"/add-link"},a.a.createElement(K,{name:"add_comment"}))}),a.a.createElement(A,{type:"button",displayContent:"asc"===s?a.a.createElement(K,{name:"call_made"}):a.a.createElement(K,{name:"call_received"}),onClickFunc:function(){return d((function(e){return"asc"===e?"desc":"asc"}))}})),a.a.createElement(ee,null,i.length>0&&i.sort((function(e,n){return"asc"===s?e.createdAt-n.createdAt:n.createdAt-e.createdAt})).map((function(e){var n=e.id,t=e.title,r=e.link,o=e.tags;return a.a.createElement(V,{key:t,id:n,title:t,link:r,tags:o})}))),!Boolean(i.length)&&a.a.createElement(te,null,"Save A New Link :D"))};function ae(){var e=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n"]);return ae=function(){return e},e}function oe(){var e=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n  input {\n    margin: 5% 0;\n  }\n"]);return oe=function(){return e},e}function ie(){var e=Object(c.a)(["\n  color: ",";\n  min-height: 360px;\n"]);return ie=function(){return e},e}var ce=u.default.div(ie(),(function(e){return e.theme.color.themeColor})),ue=u.default.form(oe()),le=u.default.div(ae()),se=function(e){var n=e.changeUser,t=Object(r.useState)(!1),o=Object(f.a)(t,2),i=o[0],c=o[1],u=Object(r.useState)(""),l=Object(f.a)(u,2),s=l[0],d=l[1],m=Object(r.useState)(""),p=Object(f.a)(m,2),h=p[0],b=p[1],g=function(e){var n=e.target,t=n.value,r=n.type;"email"===r?d(t):"password"===r&&b(t)},v=function(){var e=Object(E.a)(y.a.mark((function e(){var t,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.createUserWithEmailAndPassword(s,h);case 3:t=e.sent,r=t.user,n(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),window.alert("Something went wrong...Please try again a while later.");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(E.a)(y.a.mark((function e(){var t,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.signInWithEmailAndPassword(s,h);case 3:t=e.sent,r=t.user,n(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),(a=String(e.t0)).includes("invalid")?window.alert("Email or Password is not correct."):a.includes("no user")?window.alert("There is no such user, maybe you should Sign up first :D"):window.alert("Something went wrong... please try again a while after.");case 11:case"end":return e.stop()}var a}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(E.a)(y.a.mark((function e(t){var r,a,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new C.auth.GoogleAuthProvider,e.next=4,O.signInWithPopup(r);case 4:a=e.sent,o=a.user,n(o),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error in google login: ",e.t0.toString());case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),j=function(){var e=Object(E.a)(y.a.mark((function e(t){var r,a,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new C.auth.GithubAuthProvider,e.next=4,O.signInWithPopup(r);case 4:a=e.sent,o=a.user,n(o),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error in github login: ",e.t0.toString());case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();return a.a.createElement(ce,null,a.a.createElement(ue,{onSubmit:function(e){e.preventDefault(),i?v():w()}},a.a.createElement(J,{type:"email",name:"loginEmail",value:s,placeholder:"Email",isRequired:!0,onChangeFunc:g}),a.a.createElement(J,{type:"password",name:"loginPassword",value:h,placeholder:"Password",isRequired:!0,onChangeFunc:g}),a.a.createElement(A,{type:"submit",displayContent:i?"Sign UP":"Login"}),a.a.createElement(A,{type:"button",displayContent:i?"Change to Login":"I'm a new user!",onClickFunc:function(){return c((function(e){return!e}))}})),a.a.createElement(le,null,a.a.createElement(A,{type:"button",displayContent:"Login with Google",onClickFunc:k}),a.a.createElement(A,{type:"button",displayContent:"Login with Github",onClickFunc:j})))};function de(){var e=Object(c.a)(["\n  color: ",";\n  text-align: center;\n"]);return de=function(){return e},e}function fe(){var e=Object(c.a)(["\n  width: 100%;\n  height: 5rem;\n  margin-top: 2.5rem;\n  ","\n  flex-direction: column;\n"]);return fe=function(){return e},e}var me=u.default.footer(fe(),(function(e){return e.theme.centerByFlex})),pe=u.default.h4(de(),(function(e){return e.theme.color.themeColor})),he=function(){return a.a.createElement(me,null,a.a.createElement(pe,null,"\xa9 LinkBook"),a.a.createElement(pe,null,"Contact : swimmingkiim@gmail.com"))};function be(){var e=Object(c.a)(["\n  width: 360px;\n  min-height: 550px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  @media only screen and (max-width: 360px) {\n    width: 100%;\n    padding: 2% 5%;\n  }\n"]);return be=function(){return e},e}function ge(){var e=Object(c.a)(["\n  ","\n  width: 100%;\n  min-height: 100vh;\n  background-color: ",";\n"]);return ge=function(){return e},e}var ve=u.default.div(ge(),(function(e){return e.theme.centerByFlex}),(function(e){return e.theme.color.backgroundColor})),we=u.default.main(be());function ke(){var e=Object(c.a)(["\n  width: 100%;\n  min-height: 360px;\n  padding: 2.5%;\n  display: flex;\n  flex-direction: column;\n\n  input + input {\n    margin-top: 5%;\n  }\n"]);return ke=function(){return e},e}var ye=u.default.form(ke()),Ee=function(e){var n=e.user,t=Object(r.useState)(""),o=Object(f.a)(t,2),i=o[0],c=o[1],u=Object(r.useState)(""),l=Object(f.a)(u,2),s=l[0],d=l[1],m=Object(r.useState)(""),h=Object(f.a)(m,2),b=h[0],g=h[1],v=Object(p.f)(),w=function(e){var n=e.target,t=n.value;switch(n.name){case"newTitle":c(t);break;case"newTags":d(t);break;case"newLink":g(t)}},k=function(){var e=Object(E.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,x.collection("links").add({title:i,link:b,tags:(r=s,r.split(",").map((function(e){return e.trim()}))),creator:n.uid,bookmark:!1,createdAt:Date.now()});case 4:v.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("Document creation failed\nError : ".concat(e.t0.toString()));case 10:case"end":return e.stop()}var r}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}();return a.a.createElement(ye,{onSubmit:k},a.a.createElement(J,{type:"text",name:"newTitle",value:i,onChangeFunc:w,placeholder:"Title",isRequired:!0}),a.a.createElement(J,{type:"text",name:"newTags",value:s,onChangeFunc:w,placeholder:"Tags(comma between keywords)",isRequired:!0}),a.a.createElement(J,{type:"text",name:"newLink",value:b,onChangeFunc:w,placeholder:"Link URL",isRequired:!0}),a.a.createElement(A,{type:"submit",displayContent:a.a.createElement(K,{name:"save_alt"})}))},je=function(){var e=Object(r.useState)(!1),n=Object(f.a)(e,2),t=n[0],o=n[1],i=Object(r.useState)(null),c=Object(f.a)(i,2),u=c[0],l=c[1],s=function(e){return l(e)};return Object(r.useEffect)((function(){O.onAuthStateChanged((function(e){if(e){var n=e.displayName,t=e.photoURL,r=e.uid;s({displayName:n,photoURL:t,uid:r})}else s(null);o(!0)}))}),[]),a.a.createElement(m.a,null,a.a.createElement(ve,null,a.a.createElement(we,null,a.a.createElement(p.a,{path:"*",component:w}),a.a.createElement(p.c,null,a.a.createElement(p.a,{exact:!0,path:"/"},t&&!u&&a.a.createElement(se,{changeUser:s}),t&&u&&a.a.createElement(re,{user:u})),a.a.createElement(p.a,{path:"/add-link"},u&&a.a.createElement(Ee,{user:u}))),a.a.createElement(p.a,{path:"*",component:he}))))},Oe={color:{themeColor:"#d4451f",backgroundColor:"#f2e07d"},fontFamily:"font-family: 'Nanum Gothic', sans-serif",fontSize:{mobile:"100%",desktop:"150%"},centerByFlex:"display: flex; flex-direction: row; justify-content: center; align-items: center;"},xe=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(d,null),a.a.createElement(u.ThemeProvider,{theme:Oe},a.a.createElement(je,null)))},Ce=t(34);t.n(Ce).a.config(),i.a.render(a.a.createElement(xe,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.9da7aab0.chunk.js.map