(function(e){function t(t){for(var a,u,l=t[0],c=t[1],i=t[2],p=0,b=[];p<l.length;p++)u=l[p],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&b.push(r[u][0]),r[u]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);s&&s(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={entry:0},o=[];function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/micro-projects/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var s=c;o.push([1,"chunk-vendors"]),n()})({"01dd":function(e,t,n){},1:function(e,t,n){e.exports=n("b316")},3577:function(e,t,n){"use strict";n("5e64")},"5e64":function(e,t,n){},"6b00":function(e,t,n){"use strict";n("b0c0");var a=n("7a23"),r={class:"group relative mx-auto max-w-[300px] my-8 w-1/2 flex justify-between border-b-2 focus-within:border-blue-500"},o=["id","name","value"],u=["for"];function l(e,t,n,l,c,i){return Object(a["j"])(),Object(a["e"])("div",r,[Object(a["f"])("input",{placeholder:" ",class:"focus:outline-none mt-2 mb-1 px-1 bg-transparent",id:n.name,name:n.name,value:n.value,onInput:t[0]||(t[0]=function(t){return e.$emit("update:value",t.target.value)})},null,40,o),Object(a["f"])("label",{class:"placeholder:text-transparent origin-top-left group-focus-within:-translate-y-5 group-focus-within:scale-75 group-focus-within:text-blue-500 absolute top-0 left-0 mt-2 mb-1 px-1 -z-1 duration-200 transition-transform",for:n.name},Object(a["p"])(n.placeholder),9,u)])}var c={name:"MaterialInput",emits:["update:value"],props:{placeholder:String,name:String,value:null}},i=(n("3577"),n("6b0d")),s=n.n(i);const p=s()(c,[["render",l],["__scopeId","data-v-4df8a151"]]);t["a"]=p},9244:function(e,t,n){"use strict";var a=n("7a23"),r={class:"container mx-auto h-screen shadow flex flex-col"},o={class:"w-full py-4 bg-gray-100 text-center flex flex-start"},u={key:0},l=["href"],c={class:"mx-4"},i={class:"flex-1 overflow-auto my-2"};function s(e,t,n,s,p,b){return Object(a["j"])(),Object(a["e"])("div",r,[Object(a["f"])("div",o,[n.home?(Object(a["j"])(),Object(a["e"])("div",u,[Object(a["f"])("a",{href:"".concat(p.publicPath,"v-system"),class:"text-center my-2 mx-auto w-32 font-bold py-2 px-4 rounded"},"Home",8,l)])):Object(a["d"])("",!0),Object(a["f"])("span",c,Object(a["p"])(n.title),1)]),Object(a["f"])("div",i,[Object(a["n"])(e.$slots,"default")])])}var p={name:"App",props:{title:String,home:Boolean},data:function(){return{publicPath:"/micro-projects/"}}},b=(n("a72b"),n("6b0d")),f=n.n(b);const d=f()(p,[["render",s]]);t["a"]=d},a72b:function(e,t,n){"use strict";n("01dd")},b316:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=["href"],o={id:"date",class:"text-xl"},u={id:"entry-body",class:"text-xl"};function l(e,t,n,l,c,i){var s=Object(a["o"])("MaterialInput"),p=Object(a["o"])("Input"),b=Object(a["o"])("App");return Object(a["j"])(),Object(a["c"])(b,{title:"Entry for "+e.Type,home:!0},{default:Object(a["q"])((function(){return[Object(a["f"])("a",{href:e.publicPath+"v-system/entry.html?type="+e.OppositeType,class:"text-center my-2 mx-auto block w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},"Change to "+Object(a["p"])(e.OppositeType),9,r),Object(a["f"])("div",o,[Object(a["i"])(s,{name:"year",placeholder:"Year",value:e.year,"onUpdate:value":t[0]||(t[0]=function(t){return e.year=t})},null,8,["value"]),Object(a["i"])(s,{name:"month",placeholder:"Month",value:e.month,"onUpdate:value":t[1]||(t[1]=function(t){return e.month=t})},null,8,["value"]),Object(a["i"])(s,{name:"date",placeholder:"Date",value:e.date,"onUpdate:value":t[2]||(t[2]=function(t){return e.date=t})},null,8,["value"])]),Object(a["f"])("div",u,[Object(a["i"])(p,{name:"t",placeholder:"T",value:e.T,"onUpdate:value":t[3]||(t[3]=function(t){return e.T=t})},null,8,["value"]),Object(a["i"])(p,{name:"k",placeholder:"K",value:e.K,"onUpdate:value":t[4]||(t[4]=function(t){return e.K=t})},null,8,["value"]),Object(a["i"])(p,{name:"cy",placeholder:"CY",value:e.CY,"onUpdate:value":t[5]||(t[5]=function(t){return e.CY=t})},null,8,["value"]),Object(a["i"])(p,{name:"beng",placeholder:"Beng",value:e.Beng,"onUpdate:value":t[6]||(t[6]=function(t){return e.Beng=t})},null,8,["value"]),Object(a["i"])(p,{name:"hoon",placeholder:"Hoon",value:e.Hoon,"onUpdate:value":t[7]||(t[7]=function(t){return e.Hoon=t})},null,8,["value"]),Object(a["i"])(p,{name:"sim",placeholder:"Sim",value:e.Sim,"onUpdate:value":t[8]||(t[8]=function(t){return e.Sim=t})},null,8,["value"])]),Object(a["f"])("button",{onClick:t[9]||(t[9]=function(){return i.submit&&i.submit.apply(i,arguments)}),class:"text-center my-2 mx-auto block w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},"Submit")]})),_:1},8,["title"])}var c=n("5530"),i=n("1da1"),s=(n("96cf"),n("99af"),n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("ac1f"),n("841c"),n("9244")),p=(n("b0c0"),{class:"mx-auto max-w-[300px] my-8 w-1/2 flex justify-between border-b-2 focus-within:border-blue-500"}),b=["for"],f=Object(a["h"])(" : "),d=["id","name","value"];function v(e,t,n,r,o,u){return Object(a["j"])(),Object(a["e"])("div",p,[Object(a["f"])("label",{class:"mt-2 mb-1 px-1 flex-1 flex justify-between",for:n.name},[Object(a["f"])("span",null,Object(a["p"])(n.placeholder),1),f],8,b),Object(a["f"])("input",{placeholder:" ",class:"w-2/3 focus:outline-none mt-2 mb-1 px-4",id:n.name,name:n.name,value:n.value,onInput:t[0]||(t[0]=function(t){return e.$emit("update:value",t.target.value)})},null,40,d)])}var m={name:"Input",emits:["update:value"],props:{placeholder:String,name:String,value:null}},h=n("6b0d"),j=n.n(h);const O=j()(m,[["render",v]]);var y=O,g=n("6b00"),x={name:"Entry",components:{App:s["a"],MaterialInput:g["a"],Input:y},methods:{submit:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r,o,u,l,i,s,p,b,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.T,n=this.K,a=this.CY,r=this.Beng,o=this.Hoon,u=this.Sim,l=this.year,i=this.month,s=this.date,p=this.Type,b="".concat(l,"-").concat(("00"+i).substr(-2),"-").concat(("00"+s).substr(-2)),f=Date.parse(b),fetch("https://notion-api.imaginepen.com/v1/pages",{method:"POST",body:JSON.stringify({parent:{database_id:"d5a1624f88e54bf0a458dacde772b34f"},properties:Object(c["a"])(Object(c["a"])({},isNaN(f)?{}:{Date:{start:b}}),{},{version:1,T:parseInt(t),K:parseInt(n),CY:parseInt(a),Beng:parseInt(r),Hoon:parseInt(o),Sim:parseInt(u),Type:{name:p}})})}).then((function(e){e.json().then((function(e){e.status>300?(alert("Fail"),console.log("data",e)):(alert("Success"),console.log("data",e))}))})).catch((function(e){return console.log("Fail",e)}));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},data:function(){var e=new URLSearchParams(window.location.search),t=e.get("type");-1==["vitagen","vitagen-less-sugar"].indexOf(null!==t&&void 0!==t?t:"vitagen")&&(window.location.href=window.location.pathname);var n=t||"vitagen";return{year:(new Date).getFullYear(),month:(new Date).getMonth()+1,date:(new Date).getDate(),T:0,K:0,CY:0,Beng:0,Hoon:0,Sim:0,Type:n,OppositeType:"vitagen"==n?"vitagen-less-sugar":"vitagen",publicPath:"/micro-projects/"}}};n("e9cd");const w=j()(x,[["render",l],["__scopeId","data-v-d18a1d24"]]);var S=w;Object(a["b"])(S).mount("#app")},b711:function(e,t,n){},e9cd:function(e,t,n){"use strict";n("b711")}});
//# sourceMappingURL=entry.4d68580b.js.map