(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(e,s,c){},12:function(e,s,c){"use strict";c.r(s);var a=c(1),l=c.n(a),t=c(5),n=c.n(t),r=(c(10),c(2)),u=(c(4),c(0));var j=function(e){return Object(u.jsxs)("button",{className:"".concat(e.className),onClick:function(){return e.onClick(e.keyValue)},children:[e.keyValue," "]})};var i=function(){var e=Object(a.useState)(null),s=Object(r.a)(e,2),c=s[0],l=s[1],t=Object(a.useState)("0"),n=Object(r.a)(t,2),i=n[0],o=n[1],k=Object(a.useState)(null),b=Object(r.a)(k,2),y=b[0],m=b[1];Object(a.useEffect)((function(){}),[y,i,c]);var O={"/":function(e,s){return e/s},"*":function(e,s){return e*s},"+":function(e,s){return e+s},"-":function(e,s){return e-s},"=":function(e,s){return s}},x=function(e){var s;Number.isInteger(e)?(s=parseInt(e,10),o("0"===i?String(s):i+s)):e in O?(null===y&&(m(e),l(i),o("")),y&&m(e),c&&y&&i&&function(){var e=O[y](parseFloat(c),parseFloat(i));m(null),o(String(e)),l(null)}()):"c"===e?o("0"):"."===e?/\./.test(i)||o(i+"."):"%"===e&&(o(parseFloat(i)/100),c&&""===i&&l(parseFloat(c)/100))};return Object(u.jsxs)("div",{className:"calculator",children:[Object(u.jsx)("h1",{className:" heading",children:"Calculator "}),Object(u.jsxs)("div",{className:"calculator_wrapper",children:[Object(u.jsx)("div",{className:"calculator-input",children:Object(u.jsxs)("div",{className:"result",children:[i," "]})}),Object(u.jsxs)("div",{className:"calculator-keypad",children:[Object(u.jsxs)("div",{className:"1st-row",children:[Object(u.jsx)(j,{className:"keys-function clear",keyValue:"c",onClick:x}),Object(u.jsx)(j,{className:"keys-function",keyValue:"<-",onClick:x}),Object(u.jsx)(j,{className:"keys-function",keyValue:"%",onClick:x}),Object(u.jsx)(j,{className:"keys-operators",keyValue:"/",onClick:x})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{className:"keys-numbers",keyValue:7,onClick:x}),Object(u.jsx)(j,{className:"keys-numbers",keyValue:8,onClick:x}),Object(u.jsx)(j,{className:"keys-numbers",keyValue:9,onClick:x}),Object(u.jsx)(j,{className:"keys-operators",keyValue:"*",onClick:x})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{className:"keys-numbers",keyValue:4,onClick:x}),Object(u.jsx)(j,{className:"keys-numbers",keyValue:5,onClick:x}),Object(u.jsx)(j,{className:"keys-numbers",keyValue:6,onClick:x}),Object(u.jsx)(j,{className:"keys-operators",keyValue:"-",onClick:x})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{className:"keys-numbers",keyValue:1,onClick:x}),Object(u.jsx)(j,{className:"keys-numbers",keyValue:2,onClick:x}),Object(u.jsx)(j,{className:"keys-numbers",keyValue:3,onClick:x}),Object(u.jsx)(j,{className:"keys-operators",keyValue:"+",onClick:x})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{className:"key-zero",keyValue:0,onClick:x}),Object(u.jsx)(j,{className:"keys-numbers key-dot",keyValue:".",onClick:x}),Object(u.jsx)(j,{className:"keys-operators equals",keyValue:"=",onClick:x})]})]})]})]})};var o=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(i,{})})};n.a.render(Object(u.jsx)(l.a.StrictMode,{children:Object(u.jsx)(o,{})}),document.getElementById("root"))},4:function(e,s,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.014d3633.chunk.js.map