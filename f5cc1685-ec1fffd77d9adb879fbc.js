"use strict";(self.webpackChunkxd=self.webpackChunkxd||[]).push([[530],{5193:function(e,t,i){i.d(t,{j:function(){return k}});var a=i(2982),s=i(4942),r=i(5007),n=i(6029),l=i(3184),o=i(8870),c=i(6085),d=i(590),u=i(158);function m(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}var p=[{title:"Last updated",value:"last_updated",filter:function(e){return e.sort((function(e,t){var i=e.lastUpdated,a=t.lastUpdated;return new Date(a)>new Date(i)?1:new Date(a)<new Date(i)?-1:0}))}},{title:"Name",value:"name",filter:function(e){return e.sort((function(e,t){var i=e.name,a=t.name;return i.localeCompare(a)}))}},{title:"Custom",value:"id",filter:function(e,t){void 0===t&&(t=[]);var i=[];return t.forEach((function(t){var a=e.find((function(e){return e.id===t}));a&&i.push(a)})),i}}],v={name:"qtxyu6",styles:"margin:var(--gap) 0 0 var(--gap)"},f={name:"qtxyu6",styles:"margin:var(--gap) 0 0 var(--gap)"},g={name:"jfisvt",styles:"height:auto;margin-bottom:0!important"},y={name:"lb9ais",styles:"font-size:var(--spectrum-global-dimension-size-200)"},b={name:"18q6r0i",styles:"margin-top:0!important;margin-bottom:var(--spectrum-global-dimension-size-100)!important"},h={name:"4iuuc6",styles:"height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-600);margin-bottom:var(--spectrum-global-dimension-size-200)"},w={name:"1b40y0w",styles:"height:var(--spectrum-global-dimension-size-3000);overflow:auto;text-align:left"},x={name:"82a6rk",styles:"flex:1"},Z={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},z={name:"16hp6jg",styles:"margin-top:var(--spectrum-global-dimension-size-100);display:flex;flex-direction:column"},j={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},O={name:"1e17bzi",styles:"display:flex;align-items:flex-start;flex-direction:column"},C={name:"wyj2j9",styles:"display:flex;align-items:flex-end;width:var(--spectrum-global-dimension-size-3000);flex-direction:column"},N={name:"1xl5zih",styles:"display:flex;align-items:center;height:var(--spectrum-global-dimension-size-800);justify-content:flex-end;margin-right:var(--spectrum-global-dimension-size-400)"},k=function(e){var t=e.clouds,i=void 0===t?[]:t,k=e.products,D=void 0===k?[]:k,P=e.interaction,S=void 0!==P&&P,A=e.orderBy,B=void 0===A?"last_updated":A,E=e.filterByCloud,H=void 0===E?[]:E,X=e.filterByIds,q=void 0===X?[]:X;q.length&&(B="id");var F=p.find((function(e){return e.value===B}));F.ids=q;var I=(0,r.useState)(F.value),L=I[0],U=I[1],_=(0,r.useState)(F.filter(D,F.ids)),M=_[0],Q=_[1],V=(0,r.useState)(H),G=V[0],J=V[1];(0,r.useEffect)((function(){!function(e,t,i,a){var s=e.filter((function(e){var i=e.cloud;return t.some((function(e){return i===e}))})),r=p.find((function(e){return e.value===i}));a(r.filter(s,r.ids))}(D,G.length?G:i,L,Q)}),[G,L]);var K="calc(var(--spectrum-global-dimension-size-4600) - var(--spectrum-global-dimension-size-500))",R="calc(var(--spectrum-global-dimension-size-4600) - var(--spectrum-global-dimension-size-800))";return(0,n.tZ)("section",{className:"spectrum--light",css:(0,n.iv)("max-width:",u.Av,";margin:var(--spectrum-global-dimension-size-400) auto;","")},S&&(0,n.tZ)("div",{css:N},(0,n.tZ)(c.c,{isQuiet:!0,items:p.slice(0,2).map((function(e){return e.value===B?function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?m(Object(i),!0).forEach((function(t){(0,s.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({selected:!0},e):e})),"aria-label":"Filter by name or last updated product",onChange:function(e){U(p[e].value)}})),(0,n.tZ)("div",{css:(0,n.iv)("display:flex;@media screen and (max-width: ",u.Av,"){align-items:flex-start;flex-wrap:wrap;}","")},S&&(0,n.tZ)("div",{css:C},(0,n.tZ)("div",{css:O},(0,n.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:j},"Filter by"),(0,n.tZ)("div",{css:z},i.map((function(e,t){return(0,n.tZ)(o.X,{key:t,value:e,onChange:function(t){J(t?[].concat((0,a.Z)(G),[e]):G.filter((function(t){return t!==e})))},css:Z},e)}))))),(0,n.tZ)("div",{css:x},(0,n.tZ)("div",{css:(0,n.iv)("display:grid;grid-template-columns:repeat(auto-fit, ",R,");grid-auto-rows:",K,";justify-content:center;gap:var(--spectrum-global-dimension-size-400);@media screen and (max-width: ",u.Av,"){margin-top:var(--spectrum-global-dimension-size-400);display:flex;flex-wrap:wrap;}","")},M.map((function(e){return(0,n.tZ)("div",{key:e.id,role:"figure",tabIndex:"0",className:"spectrum-Card spectrum-Card--sizeM",css:(0,n.iv)("width:",R,";height:",K,";&:hover{border-color:var(--spectrum-global-color-gray-200);}@media screen and (max-width: ",u.Av,"){width:0;}","")},(0,n.tZ)("div",{className:"spectrum-Card-body",css:w},(0,n.tZ)("div",null,e.icon&&(0,n.tZ)("div",{css:h},(0,n.tZ)(d.E,{src:e.icon,"aria-hidden":"true",alt:""}))),(0,n.tZ)("div",{className:"spectrum-Card-header spectrum-Heading spectrum-Heading--sizeXXS",css:b},(0,n.tZ)("div",{className:"spectrum-Card-title",css:y},(0,n.tZ)("strong",null,e.name))),(0,n.tZ)("div",{className:"spectrum-Card-content spectrum-Body spectrum-Body--sizeS",css:g},e.description)),(0,n.tZ)("div",{className:"spectrum-Card-footer"},(0,n.tZ)("div",{css:(0,n.iv)("display:flex;justify-content:flex-end;flex-wrap:wrap;--gap:var(--spectrum-global-dimension-size-200);margin:calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));width:calc(100% + var(--gap));@media screen and (max-width: ",u.Av,"){justify-content:center;}","")},e.discover&&(0,n.tZ)("div",{css:f},(0,n.tZ)(l.A,{href:e.discover,variant:"secondary",style:"outline"},(0,n.tZ)("span",{class:"spectrum-Button-label"},"Learn more"))),e.docs&&(0,n.tZ)("div",{css:v},(0,n.tZ)(l.A,{href:e.docs,variant:"accent",style:"outline"},(0,n.tZ)("span",{class:"spectrum-Button-label"},"View docs"))))))}))))))}}}]);
//# sourceMappingURL=f5cc1685-ec1fffd77d9adb879fbc.js.map