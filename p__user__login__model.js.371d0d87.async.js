(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"8bIy":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getPageQuery=n,e.setAuthority=u;var a=r("Qyje");function n(){return(0,a.parse)(window.location.href.split("?")[1])}function u(t){var e="string"===typeof t?[t]:t;localStorage.setItem("antd-pro-authority",JSON.stringify(e));try{window.reloadAuthorized&&window.reloadAuthorized()}catch(t){}return t}},AqAQ:function(t,e,r){"use strict";var a=r("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.fakeAccountLogin=o,e.getFakeCaptcha=s;var n=a(r("d6i3")),u=a(r("1l/V")),i=a(r("t3Un"));function o(t){return c.apply(this,arguments)}function c(){return c=(0,u.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,i.default)("/api/login/account",{method:"POST",data:e}));case 1:case"end":return t.stop()}},t)})),c.apply(this,arguments)}function s(t){return p.apply(this,arguments)}function p(){return p=(0,u.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,i.default)("/api/login/captcha?mobile=".concat(e)));case 1:case"end":return t.stop()}},t)})),p.apply(this,arguments)}},ebWa:function(t,e,r){"use strict";var a=r("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(r("p0pE")),u=a(r("d6i3")),i=r("7DNP"),o=r("AqAQ"),c=r("8bIy"),s={namespace:"userAndlogin",state:{status:void 0},effects:{login:u.default.mark(function t(e,r){var a,n,o,s,p,d;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.payload,r.call,a=r.put,n={status:"ok",type:type,currentAuthority:"admin"},t.next=5,a({type:"changeLoginStatus",payload:n});case 5:if("ok"!==n.status){t.next=20;break}if(o=new URL(window.location.href),s=(0,c.getPageQuery)(),p=s.redirect,!p){t.next=18;break}if(d=new URL(p),d.origin!==o.origin){t.next=16;break}p=p.substr(o.origin.length),p.match(/^\/.*#/)&&(p=p.substr(p.indexOf("#")+1)),t.next=18;break;case 16:return window.location.href=p,t.abrupt("return");case 18:return t.next=20,a(i.routerRedux.replace(p||"/"));case 20:case"end":return t.stop()}},t)}),getCaptcha:u.default.mark(function t(e,r){var a,n;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.payload,n=r.call,t.next=4,n(o.getFakeCaptcha,a);case 4:case"end":return t.stop()}},t)})},reducers:{changeLoginStatus:function(t,e){var r=e.payload;return(0,c.setAuthority)(r.currentAuthority),(0,n.default)({},t,{status:r.status,type:r.type})}}},p=s;e.default=p}}]);