(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),u=n.n(a),c=n(3),r=n.n(c),l=n(1);n(9);var o=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(10),o=Object(l.a)(r,2),i=o[0],s=o[1],f=Object(a.useState)(!1),b=Object(l.a)(f,2),m=b[0],d=b[1],p=Object(a.useState)(0),j=Object(l.a)(p,2),O=j[0],E=j[1],h=Object(a.useRef)(null);return Object(a.useEffect)((function(){!0===m&&i>0?setTimeout((function(){s((function(e){return e-1}))}),1e3):0===i&&(d(!1),E(function(e){return e.trim().split(" ").filter((function(e){return" "!==e})).length}(n)))}),[i,m]),u.a.createElement("div",null,u.a.createElement("h1",null,"How fast do you type?"),u.a.createElement("textarea",{onChange:function(e){var t=e.target.value;c(t)},value:n,disabled:!m,ref:h}),u.a.createElement("h4",null,"Time remaining: ",i),u.a.createElement("button",{onClick:function(){c(""),s(10),d(!0),E(0),h.current.disabled=!1,h.current.focus()},disabled:m},"Start"),u.a.createElement("h1",null,"Word count: ",O))};r.a.render(u.a.createElement(o,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.f4892692.chunk.js.map