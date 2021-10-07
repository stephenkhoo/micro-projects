(function(e){function t(t){for(var r,i,l=t[0],s=t[1],a=t[2],b=0,u=[];b<l.length;b++)i=l[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&u.push(c[i][0]),c[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(u.length)u.shift()();return n.push.apply(n,a||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,l=1;l<o.length;l++){var s=o[l];0!==c[s]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},c={cc_dashboard1:0},n=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/micro-projects/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var d=s;n.push([4,"chunk-vendors"]),o()})({4:function(e,t,o){e.exports=o("7e34")},"7e34":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("7a23"),c={class:"relative flex items-stretch h-screen m-auto max-w-screen-2xl w-full bg-white"},n=Object(r["f"])("div",{class:"absolute hidden md:block top-0 right-full w-1/3 h-full bg-gradient-to-l from-blue-500 to-gray-200"},null,-1),i=Object(r["f"])("div",{class:"absolute hidden md:block top-0 left-full w-1/3 h-full bg-gradient-to-r from-white to-gray-200"},null,-1),l={id:"main",class:"flex-1 flex flex-col overflow-y-auto"},s={class:"px-6 my-2 flex shadow-md md:shadow-none justify-between items-center h-12 w-full"},a={class:"md:hidden"},d={class:"py-2 flex items-center justify-between font-bold w-full"},b={class:"flex"},u={class:"ml-2 mr-4"},v=Object(r["f"])("div",{class:"py-2 capitalize"},"brand name",-1),f=Object(r["g"])('<div class="md:block hidden relative text-gray-600"><span class="absolute inset-y-0 left-0 pl-2 transform flex items-center"><button type="submit" class="p-1 focus:outline-none focus:shadow-outline"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button></span><input type="search" name="q" class="w-80 text-sm rounded-full pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search here" autocomplete="off"></div>',1),j={class:"md:block hidden h-full"},h={id:"summary",class:"grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 text-black px-4"},m={class:"min-h-[400px] flex-1 flex flex-col lg:flex-row items-stretch space-y-4 lg:space-y-0 lg:space-x-4 px-6 my-4"};function p(e,t,o,p,w,O){var g=Object(r["p"])("Sidebar"),x=Object(r["p"])("Icon"),k=Object(r["p"])("Avatar"),y=Object(r["p"])("Summary"),S=Object(r["p"])("RecentOrders"),M=Object(r["p"])("RecentCustomers"),z=Object(r["p"])("QuickNavigateForMobile");return Object(r["k"])(),Object(r["e"])("div",c,[n,i,Object(r["i"])(g,{active:w.active,closeSidebar:O.closeSidebar,showSidebar:w.showSidebar},null,8,["active","closeSidebar","showSidebar"]),Object(r["f"])("div",l,[Object(r["f"])("div",s,[Object(r["f"])("div",a,[Object(r["f"])("div",d,[Object(r["f"])("div",b,[Object(r["f"])("div",u,[Object(r["i"])(x,{icon:"logo"})]),v])])]),Object(r["f"])("button",{class:"focus:outline-none",onClick:t[0]||(t[0]=function(){return O.toggleShowText&&O.toggleShowText.apply(O,arguments)})},[Object(r["i"])(x,{icon:"menu"})]),f,Object(r["f"])("div",j,[Object(r["i"])(k)])]),Object(r["f"])("div",h,[Object(r["i"])(y,{title:"daily views",icon:"eye"}),Object(r["i"])(y,{title:"sales",icon:"shopping-cart"}),Object(r["i"])(y,{title:"comments",icon:"chat-alt2"}),Object(r["i"])(y,{type:"money",title:"earning",icon:"cash"})]),Object(r["f"])("div",m,[Object(r["i"])(S),Object(r["i"])(M)])]),Object(r["i"])(z,{hideQuickNavigate:w.showSidebar},null,8,["hideQuickNavigate"])])}var w={class:"flex w-full"},O={id:"icons",class:"my-2 w-full"},g={class:"py-2 pb-6 flex justify-between font-bold text-white w-full"},x={class:"flex"},k={class:"ml-2 mr-4"};function y(e,t,o,c,n,i){var l=Object(r["p"])("Icon"),s=Object(r["p"])("NavItem");return Object(r["k"])(),Object(r["e"])("div",{id:"sidebar",class:Object(r["j"])([{hidden:!o.showSidebar},"md:w-auto w-full bg-blue-500 pl-2 md:block overflow-y-auto"])},[Object(r["f"])("nav",w,[Object(r["f"])("div",O,[Object(r["f"])("div",g,[Object(r["f"])("div",x,[Object(r["f"])("div",k,[Object(r["i"])(l,{icon:"logo"})]),Object(r["f"])("div",{class:Object(r["j"])([{"w-48":o.showSidebar,"w-0":!o.showSidebar},"overflow-hidden md:transition-width duration-300 whitespace-nowrap py-2 capitalize"])},"brand name",2)]),Object(r["f"])("button",{class:"focus:outline-none ml-2 mr-4 md:hidden",onClick:t[0]||(t[0]=function(){return o.closeSidebar&&o.closeSidebar.apply(o,arguments)})},[Object(r["i"])(l,{icon:"close"})])]),Object(r["f"])("div",{onMouseover:t[1]||(t[1]=function(e){return n.sidebarHovered=!0}),onMouseleave:t[2]||(t[2]=function(e){return n.sidebarHovered=!1})},[Object(r["i"])(s,{sidebarHovered:n.sidebarHovered,showText:o.showSidebar,icon:"home",text:"dashboard",active:o.active},null,8,["sidebarHovered","showText","active"]),Object(r["i"])(s,{sidebarHovered:n.sidebarHovered,showText:o.showSidebar,icon:"user-group",text:"customers",active:o.active},null,8,["sidebarHovered","showText","active"]),Object(r["i"])(s,{sidebarHovered:n.sidebarHovered,showText:o.showSidebar,icon:"chat",text:"message",active:o.active},null,8,["sidebarHovered","showText","active"]),Object(r["i"])(s,{sidebarHovered:n.sidebarHovered,showText:o.showSidebar,icon:"information-circle",text:"help",active:o.active},null,8,["sidebarHovered","showText","active"]),Object(r["i"])(s,{sidebarHovered:n.sidebarHovered,showText:o.showSidebar,icon:"cog",text:"settings",active:o.active},null,8,["sidebarHovered","showText","active"]),Object(r["i"])(s,{sidebarHovered:n.sidebarHovered,showText:o.showSidebar,icon:"lock-closed",text:"password",active:o.active},null,8,["sidebarHovered","showText","active"]),Object(r["i"])(s,{sidebarHovered:n.sidebarHovered,showText:o.showSidebar,icon:"logout",text:"sign out",active:o.active},null,8,["sidebarHovered","showText","active"])],32)])])],2)}var S={class:"p-2"},M=Object(r["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"},null,-1),z=[M],H=Object(r["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"},null,-1),C=[H],B=Object(r["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"},null,-1),T=[B],I=Object(r["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"},null,-1),N=[I],A=Object(r["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),q=[A],P=Object(r["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"},null,-1),L=Object(r["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1),R=[P,L],V=Object(r["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"},null,-1),_=[V],E=Object(r["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},null,-1),Q=[E],F=Object(r["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1),D=[F],J=Object(r["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1),Y=[J],Z=Object(r["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1),$=Object(r["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"},null,-1),G=[Z,$],K=Object(r["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"},null,-1),U=[K],W=Object(r["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"},null,-1),X=[W],ee=Object(r["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"},null,-1),te=[ee],oe={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},re=Object(r["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"},null,-1),ce=[re];function ne(e,t,o,c,n,i){return Object(r["k"])(),Object(r["e"])("div",S,[Object(r["t"])((Object(r["k"])(),Object(r["e"])("svg",{class:Object(r["j"])(i.getSize()),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},z,2)),[[r["r"],"logo"==o.icon]]),Object(r["t"])((Object(r["k"])(),Object(r["e"])("svg",{class:Object(r["j"])(i.getSize()),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},C,2)),[[r["r"],"home"==o.icon]]),Object(r["t"])((Object(r["k"])(),Object(r["e"])("svg",{class:Object(r["j"])(i.getSize()),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},T,2)),[[r["r"],"user-group"==o.icon]]),Object(r["t"])((Object(r["k"])(),Object(r["e"])("svg",{class:Object(r["j"])(i.getSize()),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},N,2)),[[r["r"],"chat"==o.icon]]),Object(r["t"])((Object(r["k"])(),Object(r["e"])("svg",{class:Object(r["j"])(i.getSize()),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},q,2)),[[r["r"],"information-circle"==o.icon]]),Object(r["t"])((Object(r["k"])(),Object(r["e"])("svg",{class:Object(r["j"])(i.getSize()),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},R,2)),[[r["r"],"cog"==o.icon]]),Object(r["t"])((Object(r["k"])(),Object(r["e"])("svg",{class:Object(r["j"])(i.getSize()),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},_,2)),[[r["r"],"lock-closed"==o.icon]]),Object(r["t"])((Object(r["k"])(),Object(r["e"])("svg",{class:Object(r["j"])(i.getSize()),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Q,2)),[[r["r"],"logout"==o.icon]]),Object(r["t"])((Object(r["k"])(),Object(r["e"])("svg",{class:Object(r["j"])(i.getSize()),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},D,2)),[[r["r"],"menu"==o.icon]]),Object(r["t"])((Object(r["k"])(),Object(r["e"])("svg",{class:Object(r["j"])(i.getSize()),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Y,2)),[[r["r"],"close"==o.icon]]),Object(r["t"])((Object(r["k"])(),Object(r["e"])("svg",{class:Object(r["j"])(i.getSize()),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},G,2)),[[r["r"],"eye"==o.icon]]),Object(r["t"])((Object(r["k"])(),Object(r["e"])("svg",{class:Object(r["j"])(i.getSize()),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},U,2)),[[r["r"],"shopping-cart"==o.icon]]),Object(r["t"])((Object(r["k"])(),Object(r["e"])("svg",{class:Object(r["j"])(i.getSize()),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},X,2)),[[r["r"],"chat-alt2"==o.icon]]),Object(r["t"])((Object(r["k"])(),Object(r["e"])("svg",{class:Object(r["j"])(i.getSize()),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},te,2)),[[r["r"],"cash"==o.icon]]),Object(r["t"])((Object(r["k"])(),Object(r["e"])("svg",oe,ce,512)),[[r["r"],"map"==o.icon]])])}o("99af"),o("a9e3");var ie={name:"Icon",methods:{getSize:function(){var e=this.size||6;return"w-".concat(e," h-").concat(e)}},props:{icon:String,size:Number}},le=o("6b0d"),se=o.n(le);const ae=se()(ie,[["render",ne]]);var de=ae,be={class:"ml-2 mr-4"},ue=Object(r["f"])("path",{d:"M 50 25\n               A 25 25, 0, 0, 1, 25 50\n               L 50 50 Z",fill:"white"},null,-1),ve=[ue],fe=Object(r["f"])("path",{d:"M 25 0\n               A 25 25, 0, 0, 1, 50 25\n               L 50 0 Z",fill:"white"},null,-1),je=[fe];function he(e,t,o,c,n,i){var l=Object(r["p"])("Icon");return Object(r["k"])(),Object(r["e"])("div",{class:Object(r["j"])([{"bg-white text-blue-500":o.active==o.text&&!o.sidebarHovered,"hover:bg-white hover:text-blue-500":o.active!=o.text||o.sidebarHovered},"group relative py-2 rounded-tl-full rounded-bl-full flex font-bold text-white cursor-pointer"])},[Object(r["f"])("div",be,[Object(r["i"])(l,{icon:o.icon},null,8,["icon"])]),Object(r["f"])("div",{class:Object(r["j"])([{"w-48":o.showText,"w-0":!o.showText},"overflow-hidden whitespace-nowrap md:transition-width duration-200 py-2 capitalize"])},Object(r["q"])(o.text),3),(Object(r["k"])(),Object(r["e"])("svg",{class:Object(r["j"])([{"md:block":o.active==o.text&&!o.sidebarHovered,"md:group-hover:block":o.active!=o.text||o.sidebarHovered},"absolute h-full right-0 bottom-full pointer-events-none hidden"]),preserveAspectRatio:"xMaxYMin meet",viewBox:"0 0 50 50"},ve,2)),(Object(r["k"])(),Object(r["e"])("svg",{class:Object(r["j"])([{"md:block":o.active==o.text&&!o.sidebarHovered,"md:group-hover:block":o.active!=o.text||o.sidebarHovered},"absolute h-full right-0 top-full pointer-events-none hidden"]),preserveAspectRatio:"xMaxYMax meet",viewBox:"0 0 50 50"},je,2))],2)}var me={name:"NavItem",components:{Icon:de},props:{icon:String,text:String,showText:Boolean,active:String,sidebarHovered:Boolean}};const pe=se()(me,[["render",he]]);var we=pe,Oe={name:"Sidebar",components:{Icon:de,NavItem:we},props:{showSidebar:Boolean,closeSidebar:Function,active:String},data:function(){return{sidebarHovered:!1}}};const ge=se()(Oe,[["render",y]]);var xe=ge,ke=(o("ac1f"),o("5319"),o("d3b7"),o("25f0"),{class:"shadow-md whitespace-nowrap overflow-hidden flex justify-between items-center mx-2 md:my-2 px-4 pt-2 py-1 md:p-6 md:pb-5 rounded-md group hover:bg-blue-500"}),ye={class:"flex flex-row-reverse items-center md:block"},Se={class:"text-blue-500 group-hover:text-white text-lg md:text-3xl"},Me={class:"text-gray-400 group-hover:text-white capitalize mr-2 md:mr-0 md:after:content-[''] after:content-[':']"},ze={class:"text-gray-400"},He={class:"hidden md:block group-hover:text-white"},Ce={class:"md:hidden group-hover:text-white"};function Be(e,t,o,c,n,i){var l=Object(r["p"])("Icon");return Object(r["k"])(),Object(r["e"])("div",ke,[Object(r["f"])("div",ye,[Object(r["f"])("div",Se,Object(r["q"])(n.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1),Object(r["f"])("div",Me,Object(r["q"])(o.title),1)]),Object(r["f"])("div",ze,[Object(r["f"])("div",He,[Object(r["i"])(l,{icon:o.icon,size:"10"},null,8,["icon"])]),Object(r["f"])("div",Ce,[Object(r["i"])(l,{icon:o.icon,size:"6"},null,8,["icon"])])])])}var Te=o("359c"),Ie=o.n(Te),Ne={name:"Summary",components:{Icon:de},data:function(){return{value:Ie.a.random.number()}},props:{type:String,title:String,icon:String}};const Ae=se()(Ne,[["render",Be]]);var qe=Ae,Pe={id:"recent-orders",class:"w-full lg:flex-1 flex flex-col shadow-md px-4 pt-2 py-1 md:p-6 md:pb-5 rounded-md"},Le=Object(r["f"])("div",{class:"w-full my-1 flex justify-between"},[Object(r["f"])("div",{class:"text-blue-500 font-bold text-xl capitalize"},"recent orders"),Object(r["f"])("button",{class:"capitalize text-white py-1 px-2 bg-blue-500 rounded-md"},"view all")],-1),Re={class:"flex-1 w-full overflow-y-auto"},Ve=Object(r["g"])('<div class="font-bold capitalize h-12 p-2 hidden sm:flex items-center space-x-2 hover:bg-blue-500 hover:text-white"><div class="flex-1">name</div><div class="w-2/12">price</div><div class="w-2/12">payment</div><div class="w-3/12 text-right">status</div></div>',1);function _e(e,t,o,c,n,i){var l=Object(r["p"])("Order");return Object(r["k"])(),Object(r["e"])("div",Pe,[Le,Object(r["f"])("div",Re,[Ve,(Object(r["k"])(),Object(r["e"])(r["a"],null,Object(r["n"])(100,(function(e){return Object(r["i"])(l,{key:e})})),64))])])}o("b0c0");var Ee={class:"group sm:h-12 p-2 flex flex-col sm:flex-row sm:items-center sm:space-x-2 hover:bg-blue-500 hover:text-white border-b border-b-gray-300"},Qe={class:"flex sm:block sm:flex-1 group-hover:text-white"},Fe=Object(r["f"])("div",{class:"sm:hidden font-bold w-24 inline-block after:content-[':']"},"Name",-1),De={class:"flex-1"},Je={class:"flex sm:block sm:w-2/12 group-hover:text-white"},Ye=Object(r["f"])("div",{class:"sm:hidden font-bold w-24 inline-block after:content-[':']"},"Price",-1),Ze={class:"flex-1"},$e={class:"flex sm:block sm:w-2/12 group-hover:text-white"},Ge=Object(r["f"])("div",{class:"sm:hidden font-bold w-24 inline-block after:content-[':']"},"Payment",-1),Ke={class:"flex-1"},Ue={class:"sm:w-3/12 text-white flex sm:justify-end"},We=Object(r["f"])("div",{class:"sm:hidden text-black font-bold w-24 inline-block after:content-[':']"},"Status",-1);function Xe(e,t,o,c,n,i){return Object(r["k"])(),Object(r["e"])("div",Ee,[Object(r["f"])("div",Qe,[Fe,Object(r["f"])("div",De,Object(r["q"])(n.name),1)]),Object(r["f"])("div",Je,[Ye,Object(r["f"])("div",Ze,"$"+Object(r["q"])(n.price),1)]),Object(r["f"])("div",$e,[Ge,Object(r["f"])("div",Ke,Object(r["q"])(n.payment),1)]),Object(r["f"])("div",Ue,[We,Object(r["f"])("span",{class:Object(r["j"])("".concat(n.status.bgColor," px-1 rounded-md capitalize"))},Object(r["q"])(n.status.text),3)])])}var et={name:"Customer",data:function(){return{name:Ie.a.name.findName(),price:Ie.a.random.number(),payment:["Paid","Due"][Ie.a.random.number()%2],status:[{text:"delivered",bgColor:"bg-green-300"},{text:"pending",bgColor:"bg-yellow-400"},{text:"return",bgColor:"bg-red-500"},{text:"in progress",bgColor:"bg-blue-400"}][Ie.a.random.number()%4]}}};const tt=se()(et,[["render",Xe]]);var ot=tt,rt={name:"RecentOders",components:{Order:ot}};const ct=se()(rt,[["render",_e]]);var nt=ct,it={id:"recent-customers",class:"w-full lg:w-80 flex flex-col shadow-md px-4 pt-2 py-1 md:p-6 md:pb-5 rounded-md"},lt=Object(r["f"])("div",{class:"w-full my-1"},[Object(r["f"])("div",{class:"text-blue-500 font-bold text-xl capitalize"},"recent customers")],-1),st={class:"flex-1 w-full overflow-y-auto"};function at(e,t,o,c,n,i){var l=Object(r["p"])("Customer");return Object(r["k"])(),Object(r["e"])("div",it,[lt,Object(r["f"])("div",st,[(Object(r["k"])(),Object(r["e"])(r["a"],null,Object(r["n"])(100,(function(e){return Object(r["i"])(l,{key:e})})),64))])])}var dt={class:"group h-16 p-2 flex items-center space-x-2 hover:bg-blue-500 hover:text-white"},bt={class:"flex-1"},ut={class:"font-bold"},vt={class:"group-hover:text-white text-gray-400 text-xs"};function ft(e,t,o,c,n,i){var l=Object(r["p"])("Avatar");return Object(r["k"])(),Object(r["e"])("div",dt,[Object(r["i"])(l),Object(r["f"])("div",bt,[Object(r["f"])("div",ut,Object(r["q"])(n.name),1),Object(r["f"])("div",vt,Object(r["q"])(n.location),1)])])}var jt={class:"h-full overflow-hidden p-1"},ht=["src"];function mt(e,t,o,c,n,i){return Object(r["k"])(),Object(r["e"])("div",jt,[Object(r["f"])("img",{class:"rounded-full h-full",src:n.avatar_url,alt:""},null,8,ht)])}var pt={name:"Avatar",data:function(){return{avatar_url:Ie.a.image.avatar()}}};const wt=se()(pt,[["render",mt]]);var Ot=wt,gt={name:"Customer",components:{Avatar:Ot},data:function(){return{name:Ie.a.name.findName(),location:Ie.a.address.country()}}};const xt=se()(gt,[["render",ft]]);var kt=xt,yt={name:"RecentCustomers",components:{Customer:kt}};const St=se()(yt,[["render",at]]);var Mt=St;function zt(e,t,o,c,n,i){var l=Object(r["p"])("Icon");return Object(r["k"])(),Object(r["e"])("div",{class:Object(r["j"])([{hidden:o.hideQuickNavigate},"lg:hidden fixed bottom-0 right-0 mr-3 mb-3"])},[Object(r["f"])("button",{onClick:t[0]||(t[0]=function(){return i.navigateNext&&i.navigateNext.apply(i,arguments)}),class:"focus:outline-none rounded-full h-12 w-12 flex justify-center items-center bg-blue-200"},[Object(r["i"])(l,{icon:"map"})])],2)}o("7db0");var Ht={name:"QuickNavigateForMobile",components:{Icon:de},props:{hideQuickNavigate:Boolean},methods:{navigateNext:function(){[document.getElementById("summary"),document.getElementById("recent-orders"),document.getElementById("recent-customers")].find((function(e){var t=e.getBoundingClientRect().top;if(console.log(t,document.getElementById("main").scrollTop),t>64)return document.getElementById("main").scrollTo({top:t+document.getElementById("main").scrollTop}),e}))||document.getElementById("main").scrollTo({top:top+document.getElementById("main").scrollTop})}}};const Ct=se()(Ht,[["render",zt]]);var Bt=Ct,Tt={name:"Dashboard",components:{Sidebar:xe,Icon:de,Avatar:Ot,Summary:qe,RecentOrders:nt,RecentCustomers:Mt,QuickNavigateForMobile:Bt},methods:{toggleShowText:function(){this.showSidebar=!this.showSidebar},closeSidebar:function(){this.showSidebar=!1}},data:function(){return{showSidebar:!0,active:"dashboard"}}};const It=se()(Tt,[["render",p]]);var Nt=It;Object(r["b"])(Nt).mount("#app")}});
//# sourceMappingURL=cc_dashboard1.c0741fca.js.map