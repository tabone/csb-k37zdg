(this.webpackJsonparaldika=this.webpackJsonparaldika||[]).push([[0],[,,,,,,,,,,,,,function(e,a,n){},,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var i=n(1),l=n.n(i),r=n(3),t=n(4),c=(n(13),n(0));function s(e){var a=e.name,n=e.visible,i=void 0===n||n,r=l.a.useMemo((function(){var e=["Heraldry"];return!1===i&&e.push("Heraldry--Hidden"),e.join(" ")}),[i]);return Object(c.jsxs)("figure",{className:r,children:[Object(c.jsx)("img",{width:"100%",className:"HeraldryImage",alt:"".concat(a," heraldry"),src:"/images/".concat(a,".png")}),Object(c.jsx)("figcaption",{children:a})]})}var m=l.a.memo(s),o=[{name:"bonnici",link:""},{name:"fenech",link:""},{name:"camillieri",link:""},{name:"demajo",link:""},{name:"farrugia",link:""},{name:"genovese",link:""},{name:"stafrace",link:""},{name:"stellini",link:""},{name:"xuereb",link:""},{name:"abdilla",link:""},{name:"abela",link:""},{name:"aguis",link:""},{name:"alessi",link:""},{name:"aloisio",link:""},{name:"amato",link:""},{name:"antionelli",link:""},{name:"aquilina",link:""},{name:"arpa",link:""},{name:"attard",link:""},{name:"barbaro",link:""},{name:"barbara",link:""},{name:"ellul",link:""},{name:"dupont",link:""},{name:"duca",link:""},{name:"delicata",link:""},{name:"desira",link:""},{name:"depares",link:""},{name:"coppini",link:""},{name:"cali",link:""},{name:"fabri",link:""},{name:"cini",link:""},{name:"bonello",link:""}];n(15);function u(e){var a=e.filter,n=void 0===a?"":a,i=l.a.useMemo((function(){return o.reduce((function(e,a){var i=a.name.toLowerCase().includes(n.toLowerCase());return e.push(Object(c.jsx)(m,{name:a.name,visible:i},a.name)),e}),[])}),[n]);return Object(c.jsx)("div",{className:"Heraldries",children:0===i.length?"No Match":i})}var d=l.a.memo(u);n(16),n(17);function k(e){var a=e.value,n=e.onChange,i=l.a.useCallback((function(e){n(e.target.value)}),[n]);return Object(c.jsx)("input",{className:"Filter",type:"text",placeholder:"Filter Heraldry",value:a,onChange:i})}var b=l.a.memo(k);function j(){var e=l.a.useState(""),a=Object(t.a)(e,2),n=a[0],i=a[1],r=l.a.useMemo((function(){return(new window.Date).getFullYear()}),[]);return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("header",{className:"AppHeader",children:[Object(c.jsx)("h1",{className:"AppTitle",children:"araldika"}),Object(c.jsx)("h2",{className:"AppSubtitle",children:"maltese heraldry"})]}),Object(c.jsx)(b,{value:n,onChange:i}),Object(c.jsx)(d,{filter:n}),Object(c.jsxs)("footer",{className:"AppFooter",children:["\xa9 ",r," Luca Tabone"]})]})}n(18);var h=document.getElementById("root");Object(r.createRoot)(h).render(Object(c.jsx)(i.StrictMode,{children:Object(c.jsx)(j,{})}))}],[[19,1,2]]]);
//# sourceMappingURL=main.dbf27835.chunk.js.map