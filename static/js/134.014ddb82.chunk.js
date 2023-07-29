"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[134],{126:function(e,r,t){t.d(r,{e:function(){return o}});var n=t(689),a=t(87),c=t(184),o=function(e){var r=e.movies,t=(0,n.TH)();return(0,c.jsx)("ul",{className:"trendingFilms",children:r.map((function(e){var r=e.original_title,n=e.id;return(0,c.jsx)("li",{children:(0,c.jsxs)(a.rU,{to:"/movies/".concat(n),state:{from:t},children:[" ",r," "]})},n)}))})}},134:function(e,r,t){t.r(r);var n=t(861),a=t(439),c=t(757),o=t.n(c),u=t(791),i=t(87),s=t(51),p=t(126),h=t(184);r.default=function(){var e,r=(0,i.lr)(),t=(0,a.Z)(r,2),c=t[0],l=t[1],f=(0,u.useState)(),v=(0,a.Z)(f,2),d=v[0],m=v[1],g=(0,u.useState)(null),x=(0,a.Z)(g,2),w=x[0],j=x[1],b=(0,u.useState)(!1),Z=(0,a.Z)(b,2),y=Z[0],M=Z[1],k=null!==(e=c.get("query"))&&void 0!==e?e:"";return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(o().mark((function e(){var r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""!==k){e.next=3;break}return e.abrupt("return");case 3:return M(!0),e.next=6,(0,s.jc)(k);case 6:r=e.sent,t=r.results,m(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),j(e.t0);case 14:return e.prev=14,M(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[k]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{children:"Movies"}),(0,h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===e.target.elements.search.value)return l({});l({query:e.target.elements.search.value.trim()}),e.target.reset()},children:[(0,h.jsx)("input",{type:"text",name:"search"}),(0,h.jsx)("button",{type:"submit",children:"Search"})]}),y&&(0,h.jsx)("p",{children:"Loading..."}),w&&(0,h.jsx)("p",{children:"Oops.. Something went wrong..."}),d&&d.length>0?(0,h.jsx)(p.e,{movies:d}):!y&&(0,h.jsx)("p",{children:"No movies found"})]})}},51:function(e,r,t){t.d(r,{Pi:function(){return l},Vw:function(){return i},a8:function(){return h},jc:function(){return s},lj:function(){return p}});var n=t(861),a=t(757),c=t.n(a),o=t(243),u="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjM0ZWM0ZTI0OTcxNjMxMzkxMDg0MzkxYmFhMTJlYSIsInN1YiI6IjY0OWRlMzNlYzA3MmEyMDEwZGY1NGFiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ll7H07uCb_HQAjxOXMouSO9cZMVYrxWH6XhbusM7MJI",i=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",{headers:{accept:"application/json",Authorization:"Bearer ".concat(u)}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("No information on request");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie",{params:{query:r,include_adult:!1,language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer ".concat(u)}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("No information on request");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r),{params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer ".concat(u)}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("No information on request");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits?language=en-US'"),{headers:{accept:"application/json",Authorization:"Bearer ".concat(u)}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("No information on request");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?language=en-US'"),{headers:{accept:"application/json",Authorization:"Bearer ".concat(u)}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("No information on request");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=134.014ddb82.chunk.js.map