import{S as x,i as A,s as C,e as w,t as m,c as y,a as E,g as p,d as c,b as k,f as g,G as u,j as I,k as L,l as V,I as q,u as G,h as O,V as H}from"../../chunks/vendor-df32a748.js";function S(n,e,l){const s=n.slice();return s[3]=e[l],s[5]=l,s}function T(n){let e,l;return{c(){e=w("div"),l=m("Oh no! We can't get this leaderboard. Try again later."),this.h()},l(s){e=y(s,"DIV",{class:!0,role:!0});var r=E(e);l=p(r,"Oh no! We can't get this leaderboard. Try again later."),r.forEach(c),this.h()},h(){k(e,"class","alert alert-danger"),k(e,"role","alert")},m(s,r){g(s,e,r),u(e,l)},d(s){s&&c(e)}}}function z(n){let e;return{c(){e=m("Loading...")},l(l){e=p(l,"Loading...")},m(l,s){g(l,e,s)},p:q,d(l){l&&c(e)}}}function B(n){let e,l=n[0],s=[];for(let r=0;r<l.length;r+=1)s[r]=W(S(n,l,r));return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=L()},l(r){for(let o=0;o<s.length;o+=1)s[o].l(r);e=L()},m(r,o){for(let t=0;t<s.length;t+=1)s[t].m(r,o);g(r,e,o)},p(r,o){if(o&1){l=r[0];let t;for(t=0;t<l.length;t+=1){const h=S(r,l,t);s[t]?s[t].p(h,o):(s[t]=W(h),s[t].c(),s[t].m(e.parentNode,e))}for(;t<s.length;t+=1)s[t].d(1);s.length=l.length}},d(r){H(s,r),r&&c(e)}}}function W(n){let e,l,s,r=n[5]+1+"",o,t,h=n[3].username+"",_,f,a,i=n[3].statistics.followers+"",j,D,M,F;return{c(){e=w("a"),l=w("div"),s=m("#"),o=m(r),t=m(": "),_=m(h),f=I(),a=w("div"),j=m(i),D=m(" followers"),M=I(),this.h()},l(d){e=y(d,"A",{href:!0,class:!0});var v=E(e);l=y(v,"DIV",{class:!0});var b=E(l);s=p(b,"#"),o=p(b,r),t=p(b,": "),_=p(b,h),f=V(b),a=y(b,"DIV",{class:!0});var N=E(a);j=p(N,i),D=p(N," followers"),N.forEach(c),M=V(b),b.forEach(c),v.forEach(c),this.h()},h(){k(a,"class","float-right inline"),k(l,"class","bg-sky-300 min-h-[20px] mb-2 p-2 w-full rounded text-gray-900"),k(e,"href",F="/users/"+n[3].username),k(e,"class","svelte-qsj75p")},m(d,v){g(d,e,v),u(e,l),u(l,s),u(l,o),u(l,t),u(l,_),u(l,f),u(l,a),u(a,j),u(a,D),u(l,M)},p(d,v){v&1&&h!==(h=d[3].username+"")&&O(_,h),v&1&&i!==(i=d[3].statistics.followers+"")&&O(j,i),v&1&&F!==(F="/users/"+d[3].username)&&k(e,"href",F)},d(d){d&&c(e)}}}function J(n){let e,l,s,r,o,t=n[1]==!0&&T();function h(a,i){return a[2]==!1?B:z}let _=h(n),f=_(n);return{c(){e=w("h1"),l=m("Most Followers Leaderboard"),s=I(),t&&t.c(),r=I(),f.c(),o=L(),this.h()},l(a){e=y(a,"H1",{class:!0});var i=E(e);l=p(i,"Most Followers Leaderboard"),i.forEach(c),s=V(a),t&&t.l(a),r=V(a),f.l(a),o=L(),this.h()},h(){k(e,"class","text-3xl font-bold mb-2")},m(a,i){g(a,e,i),u(e,l),g(a,s,i),t&&t.m(a,i),g(a,r,i),f.m(a,i),g(a,o,i)},p(a,[i]){a[1]==!0?t||(t=T(),t.c(),t.m(r.parentNode,r)):t&&(t.d(1),t=null),_===(_=h(a))&&f?f.p(a,i):(f.d(1),f=_(a),f&&(f.c(),f.m(o.parentNode,o)))},i:q,o:q,d(a){a&&c(e),a&&c(s),t&&t.d(a),a&&c(r),f.d(a),a&&c(o)}}}function K(n,e,l){let s=[{username:"griffpatch"}],r=!1,o=!0;return G(()=>{fetch("/leaderboards/api/followers").then(t=>{if(!t.ok)l(1,r=!0);else return t.json()}).then(t=>{l(0,s=t),l(2,o=!1)})}),[s,r,o]}class Q extends x{constructor(e){super();A(this,e,K,J,C,{})}}export{Q as default};