(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(2),o=a.n(r);a(12),a(13);function c(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home"))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.togglemode,role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode")))))}function s(e){const[t,a]=Object(l.useState)("Enter Text Here"),r=""===t.trim();return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h1",null,e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",value:t,style:{backgroundColor:"dark"===e.mode?"#090626":"white",color:"dark"===e.mode?"white":"black"},onChange:e=>{console.log("HandleChange is clicked"),a(e.target.value)},id:"myBox",rows:"8"})),n.a.createElement("button",{className:"btn btn-primary",onClick:()=>{console.log("HandleUp is clicked"+t);let l=t.toUpperCase();a(l),e.showalert("Converted to UpperCase","success")}},"Convert To UpperCase"),n.a.createElement("button",{className:"btn btn-primary mx-3",onClick:()=>{console.log("HandleUp is clicked"+t);let l=t.toLowerCase();a(l),e.showalert("Converted to LowerCase","success")}},"Convert To LowerCase")),n.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h2",null,"Your Text Summary"),r?n.a.createElement("p",null,"No words and 0 characters"):n.a.createElement("p",null,t.split(" ").length," words and ",t.length," characters")))}c.defaultProps={title:"Add title here",aboutText:"Add text here"};var m=function(e){return e.alert&&n.a.createElement("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show")},n.a.createElement("strong",null,e.alert.type),": ",e.alert.msg)};var i=function(e){const[t,a]=Object(l.useState)("light"),[r,o]=Object(l.useState)(null),i=(e,t)=>{o({msg:e,type:t}),setTimeout(()=>{o(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,{title:"TextWeb",aboutText:"About",mode:t,togglemode:()=>{"dark"===t?(a("light"),document.body.style.backgroundColor="white",i("Light Mode has enabled","success"),document.title="TextWeb-lightMode",setInterval(()=>{document.title="TextWeb-is amazing website"},2e3),setInterval(()=>{document.title="TextWeb-is install Now"},1500)):(a("dark"),document.body.style.backgroundColor="#090626",i("Dark Mode has enabled","success"),document.title="TextWeb-DarkMode")}}),n.a.createElement(m,{alert:r}),n.a.createElement("div",{className:"container"},n.a.createElement(s,{showalert:i,heading:"Analyze The Text Area",mode:t})))};var d=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:r,getTTFB:o}=t;a(e),l(e),n(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i,null))),d()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.e2318e38.chunk.js.map