(this.webpackJsonpteamsplit=this.webpackJsonpteamsplit||[]).push([[0],{54:function(e,t,a){e.exports=a(67)},59:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),i=a(43),h=a(8),o=(a(59),a(25)),m=a(26),s=a(32),u=a(30),d=a(109),k=a(106),f=a(107),b=a(69),g=a(42),v=a.n(g),w=a(110),p=a(108),y=a(97),E=a(98),A=a(111),x=function(e){var t=e.label,a=e.isSelected,n=e.onCheckboxChange;return c.a.createElement(y.a,null,c.a.createElement(E.a,{control:c.a.createElement(A.a,{checked:a,onChange:n,color:"primary",name:t}),label:t}))},C=a(45),j=a(99),O=a(4),S=a(103),z=a(105),P=a(101),B=a(102),M=a(104),R=a(100),N=a(70),T=Object(j.a)({table:{maxWidth:150,float:"left"}}),V=Object(O.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(R.a),W=Object(O.a)((function(e){return{head:{color:e.palette.common.white},body:{fontSize:14}}}))(P.a);Object.size=function(e){var t,a=0;for(t in e)e.hasOwnProperty(t)&&a++;return a};var D=function(e){var t,a=e.totalPlayers,n=Object.size(a),c=Object.values(a).reduce((function(e,t){return e+t.weight}),0),r=Math.ceil(n/2),l=Math.floor(c/2),i=function(e,t){var a=[];return function n(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];r!==t?c!==e.length&&(r+e[c]<=t&&n(c+1,r+e[c],l.concat(e[c])),n(c+1,r,l)):a.push(l)}(),a}((t=a,Object.values(t).map((function(e){return e.weight}))),l).filter((function(e){return e.length===r})),h=i[Math.floor(Math.random()*i.length)],o=Object(C.a)({},a);h.forEach((function(e,t){var a=o.findIndex((function(t){return t.weight===e}));a>-1&&o.splice(a,1)}));var m,s=a.filter((m=o,function(e){return 0===m.filter((function(t){return t.name===e.name&&t.weight===e.weight})).length}));return{teamA:o,teamB:s}};function H(e){var t=T();console.log(e);var a=D(e),n=a.teamA,r=a.teamB;return c.a.createElement(B.a,{component:N.a,style:{maxWidth:300}},c.a.createElement(S.a,{className:t.table,size:"small","aria-label":"simple table"},c.a.createElement(M.a,null,c.a.createElement(R.a,null,c.a.createElement(W,{bgcolor:"red"},"Team Red "))),c.a.createElement(z.a,{className:t.tableBody},n.map((function(e){return c.a.createElement(V,{key:e.name},c.a.createElement(P.a,{component:"th",scope:"row"}," ",e.name," "))})))),c.a.createElement(S.a,{className:t.table,size:"small","aria-label":"simple table"},c.a.createElement(M.a,null,c.a.createElement(R.a,null,c.a.createElement(W,{bgcolor:"blue"},"Team Blue "))),c.a.createElement(z.a,{className:t.tableBody},r.map((function(e){return c.a.createElement(V,{key:e.name},c.a.createElement(P.a,{component:"th",scope:"row"}," ",e.name," "))})))))}var I=a(44);Object.filter=function(e,t){return Object.fromEntries(Object.entries(e).filter(t))},Object.size=function(e){var t,a=0;for(t in e)e.hasOwnProperty(t)&&a++;return a};var F=function(e){return Object.filter(e.checkboxes,(function(e){var t=Object(I.a)(e,2);t[0];return!0===t[1].checked}))},G={Aady:{name:"Aady",weight:4,checked:!1},Adarsh:{name:"Adarsh",weight:3,checked:!1},Adi:{name:"Adi",weight:3,checked:!1},Akshay:{name:"Akshay",weight:5,checked:!1},Amit:{name:"Amit",weight:1,checked:!1},Amog:{name:"Amog",weight:1,checked:!1},Anas:{name:"Anas",weight:4,checked:!1},Atif:{name:"Atif",weight:3,checked:!1},Avi:{name:"Avi",weight:3,checked:!1},Bharath:{name:"Bharath",weight:4,checked:!1},Deep:{name:"Deep",weight:4,checked:!1},Gourav:{name:"Gourav",weight:5,checked:!1},Hardik:{name:"Hardik",weight:1,checked:!1},Maddy:{name:"Maddy",weight:4,checked:!1},Mohit:{name:"Mohit",weight:4,checked:!1},Nilesh:{name:"Nilesh",weight:4,checked:!1},Pavan:{name:"Pavan",weight:1,checked:!1},Prabhanshu:{name:"Prabhanshu",weight:3,checked:!1},Piyush:{name:"Piyush",weight:1,checked:!1},Rahul:{name:"Rahul",weight:2,checked:!1},Rohan:{name:"Rohan",weight:3,checked:!1},Rohith:{name:"Rohith",weight:5,checked:!1},Sheily:{name:"Sheily",weight:2,checked:!1},Shriram:{name:"Shriram",weight:2,checked:!1},Shreyas:{name:"Shreyas",weight:3,checked:!1},Shub:{name:"Shub",weight:4,checked:!1},Sky:{name:"Sky",weight:3,checked:!1},Theo:{name:"Theo",weight:4,checked:!1},Vineet:{name:"Vineet",weight:3,checked:!1},Vivi:{name:"Vivi",weight:3,checked:!1},Zaid:{name:"Zaid",weight:4,checked:!1}},J=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={checkboxes:G},e.selectAll=function(){return e.selectAllCheckboxes(!0)},e.deSelectAll=function(){return e.selectAllCheckboxes(!1)},e.createCheckboxes=function(){return Object.values(G).map((function(t){return e.createCheckbox(t)}))},e.selectAllCheckboxes=function(t){e.setState((function(e){return Object.values(e.checkboxes).forEach((function(e){return e.checked=t})),{checkboxes:e.checkboxes}}))},e.handleCheckboxChange=function(t){var a=t.target.name;e.setState((function(e){var t=e.checkboxes[a];return t.checked=!t.checked,{checkboxes:e.checkboxes}}))},e.createCheckbox=function(t){return c.a.createElement(x,{label:t.name,isSelected:t.checked,onCheckboxChange:e.handleCheckboxChange,key:t.name})},e}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(k.a,{position:"static"},c.a.createElement(f.a,null,c.a.createElement(b.a,{variant:"h6"},"Burnaby FC ",c.a.createElement(v.a,null)))),c.a.createElement(w.a,{display:"flex",justifyContent:"center",alignItems:"center",mb:2,mt:2},(e=this.state,Object.size(F(e))>7?c.a.createElement(H,{totalPlayers:F(this.state)}):null)),c.a.createElement(p.a,{light:!0}),c.a.createElement(b.a,{component:"div",align:"center"},c.a.createElement(w.a,{fontSize:"h3.fontSize",fontFamily:"Monospace",fontWeight:"fontWeightBold",m:1},"Players")),c.a.createElement(p.a,{light:!0}),c.a.createElement(w.a,{display:"flex",justifyContent:"center",borderRight:1,borderLeft:1,mt:4,mb:5,style:{maxHeight:280,overflow:"auto"}},c.a.createElement("div",null,this.createCheckboxes())),c.a.createElement("div",{align:"center"},c.a.createElement(d.a,{variant:"contained",size:"small",color:"primary",onClick:this.selectAll}," Select All "),"\xa0\xa0",c.a.createElement(d.a,{variant:"contained",size:"small",color:"secondary",onClick:this.deSelectAll}," Deselect All ")));var e}}]),a}(n.Component),Z=(c.a.Component,c.a.createElement(i.a,null,c.a.createElement(h.a,{path:"/",component:J})));l.a.render(Z,document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.6df6f600.chunk.js.map