(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(3),o=a.n(c),r=a(1),l=a(4),i=a(5),u=a(7),m=a(6),b=(a(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={basket:[]},e.toToggle=function(t){var a=t.target,n=e.state.basket,s=a.parentElement.firstChild.textContent;a.parentElement.classList.toggle("selected"),n.includes(s)?e.toCancel(s):e.toSelect(s)},e.toSelect=function(t){var a=e.state.basket;e.setState({basket:[].concat(Object(r.a)(a),[t])})},e.toCancel=function(t){var a=e.state.basket,n=a.indexOf(t),s=a;s.splice(n,1),e.setState({basket:Object(r.a)(s)})},e.toReset=function(){Object(r.a)(document.querySelectorAll(".good")).map((function(e){return e.classList.remove("selected")})),e.setState({basket:[]})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"basket"},s.a.createElement("button",{type:"button",className:"basket__button",onClick:this.toReset},"X"),s.a.createElement("h1",null,"Basket:",this.state.basket.join(", "))),s.a.createElement("div",{className:"goods"},b.map((function(t){return s.a.createElement("div",{className:"good"},s.a.createElement("p",null,t),s.a.createElement("button",{className:"button",type:"button",onClick:e.toToggle},"Add / Remove"))}))))}}]),a}(s.a.Component);o.a.render(s.a.createElement(d,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.84f41b99.chunk.js.map