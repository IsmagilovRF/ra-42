(this["webpackJsonphw42-layouts"]=this["webpackJsonphw42-layouts"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),o=c(3),r=c.n(o),a=(c(9),c(10),c(4)),i=c(0);function l(e){var t=e.icon;return Object(i.jsx)("div",{className:"set-view",children:Object(i.jsx)("div",{className:"material-icons",onClick:function(){e.onSwitch()},children:t})})}function m(e){var t=e.items,c=t.name,s=t.price,n=t.color,o=t.img;return Object(i.jsxs)("div",{className:"item",children:[Object(i.jsx)("h2",{className:"name",children:c}),Object(i.jsx)("span",{className:"color",children:n}),Object(i.jsx)("img",{src:o,alt:"".concat(c,"-").concat(n)}),Object(i.jsxs)("div",{className:"item-bottom",children:[Object(i.jsxs)("span",{className:"price",children:["$",s]}),Object(i.jsx)("span",{className:"button",children:"Add to cart"})]})]})}function j(e){var t=e.cards;return Object(i.jsx)("div",{className:"cards-view",children:t.map((function(e){return Object(i.jsx)(m,{items:e})}))})}function u(e){var t=e.items,c=t.name,s=t.price,n=t.color,o=t.img;return Object(i.jsxs)("div",{className:"item",children:[Object(i.jsx)("img",{src:o,alt:"".concat(c,"-").concat(n)}),Object(i.jsx)("h2",{className:"name",children:c}),Object(i.jsx)("span",{className:"color",children:n}),Object(i.jsxs)("span",{className:"price",children:["$",s]}),Object(i.jsx)("span",{className:"button",children:"Add to cart"})]})}function h(e){var t=e.items;return Object(i.jsx)("div",{className:"list-view",children:t.map((function(e){return Object(i.jsx)(u,{items:e})}))})}function d(){var e=[{name:"Nike Metcon 2",price:"130",color:"red",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"},{name:"Nike Metcon 2",price:"130",color:"green",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"},{name:"Nike Metcon 2",price:"130",color:"blue",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"},{name:"Nike Metcon 2",price:"130",color:"black",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"},{name:"Nike free run",price:"170",color:"black",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"},{name:"Nike Metcon 3",price:"150",color:"green",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"}],t=Object(s.useState)("view_list"),c=Object(a.a)(t,2),n=c[0],o=c[1];return console.log(n),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{icon:n,onSwitch:function(){console.log("change state here"),o((function(e){return"view_list"===e?"view_module":"view_list"}))}}),"view_list"===n&&Object(i.jsx)(j,{cards:e})||Object(i.jsx)(h,{items:e})]})}var g=function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(d,{}),Object(i.jsx)("p",{children:" learn react "})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),o(e),r(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),b()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.69670d24.chunk.js.map