"use strict";(self.webpackChunktfm_notes=self.webpackChunktfm_notes||[]).push([[678],{7704:function(e,t,n){n.r(t);var r=n(6156),o=n(5444),c=n(7294);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={color:"#232129",padding:96,fontFamily:"-apple-system, Roboto, sans-serif, serif"},a={marginBottom:96,paddingLeft:0};l(l({},{color:"#8954A8",fontWeight:"bold",fontSize:16,verticalAlign:"5%"}),{},{listStyleType:"none",marginBottom:24});t.default=function(e){var t=e.data,n={Song:0,Film:0,Composer:0,Lyrics:0,Artists:0,Link:0},r=function(e){e.context.Song&&n.Song++,e.context.Film&&n.Film++,e.context.Composer&&n.Composer++,e.context.Lyrics&&n.Lyrics++,e.context.Artists&&n.Artists++,e.context.Link&&n.Link++};return t.notes.nodes.forEach(r),t.legacy.nodes.forEach(r),c.createElement("main",{style:s},"Quality Metrics:",c.createElement("ul",{style:a},Object.entries(n).map((function(e){var t=e[0],n=e[1];return c.createElement("li",null,t,": ",n)}))),"Completed:",c.createElement("ul",{style:a},t.notes.nodes.map((function(e){return c.createElement("li",null,c.createElement(o.Link,{to:e.path},e.context.Film," - ",e.context.Song))}))),"Remaining:",c.createElement("ul",{style:a},t.legacy.nodes.map((function(e){return c.createElement("li",null,c.createElement(o.Link,{to:e.path},e.context.Film," - ",e.context.Song))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-6bf0539e6bd3ead90bec.js.map