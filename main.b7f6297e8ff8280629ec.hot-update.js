/*! For license information please see main.b7f6297e8ff8280629ec.hot-update.js.LICENSE.txt */
self.webpackHotUpdatesaucepan("main",{"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[5].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[4]!./src/scss/style.scss":()=>{throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nExpected expression.\n[34m   ╷[0m\n[34m48 │[0m       margin-top: [31m[0m;\n[34m   │[0m [31m                  ^[0m\n[34m   ╵[0m\n  src/scss/layouts/_footer.scss 48:19  @import\n  src/scss/style.scss 13:9             root stylesheet")}},(function(e){e.h=()=>"11c688c6bf2176bcaa77",(()=>{var r,o,n,d,t,c=e.hmrS_jsonp=e.hmrS_jsonp||{main:0},s={};function i(o,n){return r=n,new Promise(((r,n)=>{s[o]=r;var d=e.p+e.hu(o),t=new Error;e.l(d,(e=>{if(s[o]){s[o]=void 0;var r=e&&("load"===e.type?"missing":e.type),d=e&&e.target&&e.target.src;t.message="Loading hot update chunk "+o+" failed.\n("+r+": "+d+")",t.name="ChunkLoadError",t.type=r,t.request=d,n(t)}}))}))}function a(r){function s(r){for(var o=[r],n={},d=o.map((function(e){return{chain:[e],id:e}}));d.length>0;){var t=d.pop(),c=t.id,s=t.chain,a=e.c[c];if(a&&(!a.hot._selfAccepted||a.hot._selfInvalidated)){if(a.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:c};if(a.hot._main)return{type:"unaccepted",chain:s,moduleId:c};for(var l=0;l<a.parents.length;l++){var u=a.parents[l],p=e.c[u];if(p){if(p.hot._declinedDependencies[c])return{type:"declined",chain:s.concat([u]),moduleId:c,parentId:u};-1===o.indexOf(u)&&(p.hot._acceptedDependencies[c]?(n[u]||(n[u]=[]),i(n[u],[c])):(delete n[u],o.push(u),d.push({chain:s.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:r,outdatedModules:o,outdatedDependencies:n}}function i(e,r){for(var o=0;o<r.length;o++){var n=r[o];-1===e.indexOf(n)&&e.push(n)}}e.f&&delete e.f.jsonpHmr,o=void 0;var a={},l=[],u={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var f in n)if(e.o(n,f)){var h=n[f],m=h?s(f):{type:"disposed",moduleId:f},v=!1,y=!1,g=!1,E="";switch(m.chain&&(E="\nUpdate propagation: "+m.chain.join(" -> ")),m.type){case"self-declined":r.onDeclined&&r.onDeclined(m),r.ignoreDeclined||(v=new Error("Aborted because of self decline: "+m.moduleId+E));break;case"declined":r.onDeclined&&r.onDeclined(m),r.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+m.moduleId+" in "+m.parentId+E));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(m),r.ignoreUnaccepted||(v=new Error("Aborted because "+f+" is not accepted"+E));break;case"accepted":r.onAccepted&&r.onAccepted(m),y=!0;break;case"disposed":r.onDisposed&&r.onDisposed(m),g=!0;break;default:throw new Error("Unexception type "+m.type)}if(v)return{error:v};if(y)for(f in u[f]=h,i(l,m.outdatedModules),m.outdatedDependencies)e.o(m.outdatedDependencies,f)&&(a[f]||(a[f]=[]),i(a[f],m.outdatedDependencies[f]));g&&(i(l,[m.moduleId]),u[f]=p)}n=void 0;for(var I,_=[],w=0;w<l.length;w++){var b=l[w],j=e.c[b];j&&(j.hot._selfAccepted||j.hot._main)&&u[b]!==p&&!j.hot._selfInvalidated&&_.push({module:b,require:j.hot._requireSelf,errorHandler:j.hot._selfAccepted})}return{dispose:function(){var r;d.forEach((function(e){delete c[e]})),d=void 0;for(var o,n=l.slice();n.length>0;){var t=n.pop(),s=e.c[t];if(s){var i={},u=s.hot._disposeHandlers;for(w=0;w<u.length;w++)u[w].call(null,i);for(e.hmrD[t]=i,s.hot.active=!1,delete e.c[t],delete a[t],w=0;w<s.children.length;w++){var p=e.c[s.children[w]];p&&(r=p.parents.indexOf(t))>=0&&p.parents.splice(r,1)}}}for(var f in a)if(e.o(a,f)&&(s=e.c[f]))for(I=a[f],w=0;w<I.length;w++)o=I[w],(r=s.children.indexOf(o))>=0&&s.children.splice(r,1)},apply:function(o){for(var n in u)e.o(u,n)&&(e.m[n]=u[n]);for(var d=0;d<t.length;d++)t[d](e);for(var c in a)if(e.o(a,c)){var s=e.c[c];if(s){I=a[c];for(var i=[],p=[],f=[],h=0;h<I.length;h++){var m=I[h],v=s.hot._acceptedDependencies[m],y=s.hot._acceptedErrorHandlers[m];if(v){if(-1!==i.indexOf(v))continue;i.push(v),p.push(y),f.push(m)}}for(var g=0;g<i.length;g++)try{i[g].call(null,I)}catch(e){if("function"==typeof p[g])try{p[g](e,{moduleId:c,dependencyId:f[g]})}catch(n){r.onErrored&&r.onErrored({type:"accept-error-handler-errored",moduleId:c,dependencyId:f[g],error:n,originalError:e}),r.ignoreErrored||(o(n),o(e))}else r.onErrored&&r.onErrored({type:"accept-errored",moduleId:c,dependencyId:f[g],error:e}),r.ignoreErrored||o(e)}}}for(var E=0;E<_.length;E++){var w=_[E],b=w.module;try{w.require(b)}catch(n){if("function"==typeof w.errorHandler)try{w.errorHandler(n,{moduleId:b,module:e.c[b]})}catch(e){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:b,error:e,originalError:n}),r.ignoreErrored||(o(e),o(n))}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:b,error:n}),r.ignoreErrored||o(n)}}return l}}}self.webpackHotUpdatesaucepan=(o,d,c)=>{for(var i in d)e.o(d,i)&&(n[i]=d[i],r&&r.push(i));c&&t.push(c),s[o]&&(s[o](),s[o]=void 0)},e.hmrI.jsonp=function(r,o){n||(n={},t=[],d=[],o.push(a)),e.o(n,r)||(n[r]=e.m[r])},e.hmrC.jsonp=function(r,s,l,u,p,f){p.push(a),o={},d=s,n=l.reduce((function(e,r){return e[r]=!1,e}),{}),t=[],r.forEach((function(r){e.o(c,r)&&void 0!==c[r]?(u.push(i(r,f)),o[r]=!0):o[r]=!1})),e.f&&(e.f.jsonpHmr=function(r,n){o&&e.o(o,r)&&!o[r]&&(n.push(i(r)),o[r]=!0)})},e.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(e.p+e.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})()}));
//# sourceMappingURL=main.b7f6297e8ff8280629ec.hot-update.js.map