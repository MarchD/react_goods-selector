(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(3),r=a.n(c),o=a(1),l=a(4),i=a(5),u=a(7),m=a(6),b=(a(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={basket:[]},e.toSelect=function(t){var a=t.target;a.parentElement.classList.add("selected");var n=b.find((function(e){return e===a.parentElement.firstChild.textContent})),s=e.state.basket;e.setState({basket:[].concat(Object(o.a)(s),[n])})},e.toCancel=function(t){var a=t.target,n=a.parentElement.firstChild.textContent,s=e.state.basket.indexOf(n);e.state.basket.splice(s,1);var c=e.state.basket;c.splice(1,s),e.setState({basket:Object(o.a)(c)}),e.state.basket.includes(n)||a.parentElement.classList.remove("selected")},e.toReset=function(){Object(o.a)(document.querySelectorAll(".good")).map((function(e){return e.classList.remove("selected")})),e.setState({basket:[]})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"basket"},s.a.createElement("button",{type:"button",className:"basket__button",onClick:this.toReset},"X"),s.a.createElement("h1",null,"Basket:",this.state.basket.join(", "))),s.a.createElement("div",{className:"goods"},b.map((function(t){return s.a.createElement("div",{className:"good"},s.a.createElement("p",null,t),s.a.createElement("button",{className:"button",type:"button",onClick:e.toSelect},"Select"),s.a.createElement("button",{className:"button",type:"button",onClick:e.toCancel},"Cancel"))}))))}}]),a}(s.a.Component);r.a.render(s.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.77e2d647.chunk.js.map