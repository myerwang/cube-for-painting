(function(e){function n(n){for(var r,c,a=n[0],l=n[1],s=n[2],f=0,d=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(n);while(d.length)d.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,a=1;a<t.length;a++){var l=t[a];0!==o[l]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},i=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var u=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2395:function(e,n,t){},"31f2":function(e,n,t){"use strict";t("ebce")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("HelloWorld")],1)},i=[],c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"container"}})},a=[],l=t("5a89"),s=t("ae37")(l),u={data:function(){return{camera:null,scene:null,renderer:null,mesh:null,controls:null}},mounted:function(){this.init(),this.animate()},methods:{init:function(){this.scene=new l["Scene"];var e=new l["SphereGeometry"],n=new l["Mesh"](e,new l["MeshNormalMaterial"](16711680)),t=new l["BoxHelper"](n);this.scene.add(t);var r=document.getElementById("container");this.camera=new l["PerspectiveCamera"](70,r.clientWidth/r.clientHeight,.01,10),this.camera.position.z=1,this.renderer=new l["WebGLRenderer"]({antialias:!0}),this.renderer.setSize(r.clientWidth,r.clientHeight),r.appendChild(this.renderer.domElement),this.controls=new s(this.camera,this.renderer.domElement)},animate:function(){requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera)}}},f=u,d=(t("31f2"),t("2877")),p=Object(d["a"])(f,c,a,!1,null,null,null),h=p.exports,m={components:{HelloWorld:h}},v=m,b=(t("7c55"),Object(d["a"])(v,o,i,!1,null,null,null)),g=b.exports,w=t("2f62"),y=t("0e44");r["a"].use(w["a"]);var O=new w["a"].Store({state:{},mutations:{},actions:{},modules:{},plugins:[Object(y["a"])()]}),j=t("9483");Object(j["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({store:O,render:function(e){return e(g)}}).$mount("#app")},"7c55":function(e,n,t){"use strict";t("2395")},ebce:function(e,n,t){}});
//# sourceMappingURL=app.2c6dd2e3.js.map