(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(18),l=n.n(i),r=n(6),a=(n(25),n(26),n(0));function o(){return Object(a.jsxs)("div",{className:"content-column",children:[Object(a.jsxs)("div",{className:"about-me-title",children:[Object(a.jsx)("h1",{className:"content-title",children:"Carter Figgins"}),Object(a.jsx)("p",{className:"content-subtitle",children:"The Computing Fig"}),Object(a.jsx)("p",{className:"content-subtitle-sm",children:"Hello, welcome to my website!"})]}),Object(a.jsxs)("div",{className:"content-body about-me-body",children:[Object(a.jsxs)("div",{className:"content-body__text fade-in-from-top",children:[Object(a.jsxs)("p",{children:["In a galaxy not far away...\ud83c\udf0e The force is strong with me as I wield my lightsaber of full stack development at ",Object(a.jsxs)("b",{children:[Object(a.jsx)("a",{href:"https://www.atomicjolt.com/",target:"blank",className:"link-in-text",children:"Atomic Jolt"}),"!"]})," \ud83d\udcbb\u2694\ufe0f A Jedi master in ",Object(a.jsx)("b",{children:"JavaScript, Ruby, Python, and Go"}),", I stand ready to defend the digital realm from the dark side! \ud83d\ude80\ud83c\udf1f"]}),Object(a.jsxs)("p",{children:["With the wisdom of the Jedi Council, I harness the power of ",Object(a.jsx)("b",{children:"React, GraphQL, Ruby On Rails, Vue, ORM tools, and Git."})," The force flows through these tools, guiding me in my web development quests! \ud83d\udd2e\ud83d\udcab"]}),Object(a.jsx)("p",{children:"Amidst these cosmic endeavors, I treasure my time with my dear wife and young Padawans, for family bonds are stronger than any lightsaber crystal! \u2764\ufe0f\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66"}),Object(a.jsxs)("p",{children:["So, brave rebels, join me on this epic journey. Together, we shall bring balance to the digital force, one line of code at a time! ",Object(a.jsx)("b",{children:"May the code be with you!"}),"\u26a1"]})]}),Object(a.jsx)("div",{className:"image-container fade-in",children:Object(a.jsx)("img",{className:"about-me-img",alt:"me",src:"/images/carter_jedi.png"})})]}),Object(a.jsx)("div",{className:"content-body about-me-footer",children:Object(a.jsx)("p",{className:"fade-in",children:"*Image and text enhanced by AI"})})]})}var d=n(8),j=n(20);function h(e){var t=e.pageNum,n=e.numberOfPages,c=e.setPageNum;return Object(a.jsx)("div",{className:"pagination",children:Object(j.a)(Array(n).keys()).map((function(e){return Object(a.jsx)("button",{className:"page-number-button ".concat(e+1===t&&"selected"),onClick:function(){var n;(n=e+1)!==t&&c(n)},children:e+1},e)}))})}function b(){return Object(a.jsx)("img",{className:"loader",alt:"loader",src:"/images/loading.gif"})}function m(){var e=Object(c.useState)(1),t=Object(d.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(null),l=Object(d.a)(i,2),r=l[0],o=l[1],j=Object(c.useState)(null),m=Object(d.a)(j,2),u=m[0],f=m[1];Object(c.useEffect)((function(){fetch("https://swapi.dev/api/people/?page=".concat(n)).then((function(e){return e.json()})).then((function(e){var t;o(e),f(Math.ceil((null!==(t=null===e||void 0===e?void 0:e.count)&&void 0!==t?t:0)/10))}))}),[n]);return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"content-column",children:Object(a.jsx)("h1",{className:"content-title",children:"Star Wars API"})}),Object(a.jsxs)("div",{className:"table-flex",children:[Object(a.jsxs)("table",{className:"table-demo",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Eye Color"}),Object(a.jsx)("th",{children:"Gender"}),Object(a.jsx)("th",{children:"Hair Color"}),Object(a.jsx)("th",{children:"Height"}),Object(a.jsx)("th",{children:"Mass"}),Object(a.jsx)("th",{children:"Skin Color"})]})}),r&&Object(a.jsx)("tbody",{children:r.results.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.eye_color}),Object(a.jsx)("td",{children:e.gender}),Object(a.jsx)("td",{children:e.hair_color}),Object(a.jsx)("td",{children:e.height}),Object(a.jsx)("td",{children:e.mass}),Object(a.jsx)("td",{children:e.skin_color})]},t)}))})]}),!r&&Object(a.jsx)(b,{}),Object(a.jsx)(h,{pageNum:n,numberOfPages:u||0,setPageNum:function(e){o(null),s(e)}})]})]})}function u(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(!0),l=Object(d.a)(i,2),r=l[0],o=l[1];return Object(c.useEffect)((function(){fetch("https://hp-api.onrender.com/api/characters").then((function(e){return e.json()})).then((function(e){s(e),o(!1)}))}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"content-column",children:Object(a.jsx)("h1",{className:"content-title",children:"Harry Potter API"})}),r&&Object(a.jsx)(b,{}),Object(a.jsx)("div",{className:"harry-potter-list",children:(null===n||void 0===n?void 0:n.length)&&n.map((function(e){var t=e.image?e.image:"male"===e.gender?"/images/wizard.png":"/images/witch.png";return Object(a.jsxs)("div",{className:"harry-potter-item",children:[Object(a.jsx)("img",{src:t,className:"harry-image"}),Object(a.jsxs)("div",{className:"item-info",children:[Object(a.jsx)("h2",{children:e.name}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Alive:"})," ",e.alive?"Yes":"No"]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"House:"})," ",e.house]}),e.wand.wood&&Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Wand:"})," ",e.wand.wood," ",e.wand.core," ",e.wand.length]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Patronus:"})," ",e.patronus]}),e.ancestry&&Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Ancestry:"})," ",e.ancestry]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Gender:"})," ",e.gender]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Species:"})," ",e.species]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Eye Color:"})," ",e.eyeColour]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Hair Color:"})," ",e.hairColour]})]})]})}))})]})}var f=n(2);function g(){return Object(a.jsx)("div",{className:"show-demo",children:Object(a.jsxs)(f.d,{children:[Object(a.jsx)(f.b,{path:"/demos/star-wars",children:Object(a.jsx)(m,{})}),Object(a.jsx)(f.b,{path:"/demos/harry",children:Object(a.jsx)(u,{})})]})})}function O(e){var t=e.drawURL,n="".concat(t,"?start=result");return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"drawing",children:Object(a.jsx)("iframe",{src:n,className:"drawing-iframe",width:"100%",height:"200",frameBorder:"0",marginWidth:"0",marginHeight:"0",allowfullscreen:!0})})})}function x(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),n=t[0],s=t[1],i=[{link:"https://trinket.io/embed/python/04dad69445",name:"Cherry Tree"},{link:"https://trinket.io/embed/python/411b16cb81",name:"Sierpinski's Triangle"},{link:"https://trinket.io/embed/python/998b5c1e8a",name:"Spikes"}],l=n+1>=i.length,r=n<=0;return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"content-column",children:[Object(a.jsx)("h1",{className:"content-title",children:"Recursive Art"}),Object(a.jsxs)("p",{className:"content-subtitle-sm",children:["Using the ",Object(a.jsx)("a",{className:"link-in-text",href:"https://docs.python.org/3/library/turtle.html",target:"_blank",rel:"noreferrer",children:"Python Turtle"})," library to draw the art below."]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{disabled:r,className:"nav-btn",onClick:function(){return s(n-1)},children:"Prev"}),Object(a.jsx)("a",{className:"link-button",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/CarterFiggins/drawings",children:"View Code"}),Object(a.jsx)("button",{disabled:l,className:"nav-btn",onClick:function(){return s(n+1)},children:"Next"})]}),Object(a.jsx)("h2",{children:i[n].name}),Object(a.jsx)("div",{className:"drawing-boxes",children:Object(a.jsx)(O,{drawURL:i[n].link})})]})})}function p(e){var t=e.imgSrc,n=e.title,c=e.description,s=e.codeLink,i=e.siteLink,l=e.needsZoom,r=function(e){e.preventDefault(),i?window.open(i):s&&window.open(s)};return Object(a.jsxs)("div",{className:"project",children:[t&&Object(a.jsx)("div",{className:"project-center",onClick:r,children:Object(a.jsx)("img",{className:"project-img ".concat(l?"zoom":""),alt:n,src:t})}),Object(a.jsxs)("div",{className:"project-info",children:[Object(a.jsx)("div",{className:"project-title",children:n}),Object(a.jsx)("div",{className:"project-description",children:c}),Object(a.jsxs)("div",{children:[i&&Object(a.jsx)("div",{className:"project-link",children:Object(a.jsxs)("a",{href:i,target:"_blank",rel:"noopener noreferrer",children:["View ",n]})}),s&&Object(a.jsx)("div",{className:"project-link",children:Object(a.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:"View Source Code"})})]})]})]})}var v=[{title:"Werewolf Bot",imgSrc:"/images/werewolf.jpg",description:"A Discord bot that is the narrator for the game Werewolf which is a fun social deduction game. Made with Node.js using the Discord.js library. Using mongodb as the database",codeLink:"https://github.com/CarterFiggins/werewolfBot",siteLink:"https://discord.gg/NcZU9bQhJZ"},{title:"MTB 5 Day Forecast",imgSrc:"/images/mtb_forecast.png",description:"Helps you find the perfect day and time to go mountain biking. Shows the temp, weather, and wind with easy color scheme. All green means it is a perfect time to go biking.",codeLink:"https://github.com/CarterFiggins/MTB_Forecast",siteLink:"",needsZoom:!0},{title:"Food Storage",imgSrc:"/images/meal_plan.png",description:"This web app calculates the total ingredients used from meals in x amount of days. It can let you know what ingredients are about to run out when planing meals for the week. Using React, Node.js, Typescript, TypeORM, and PostgreSQL.",codeLink:"https://github.com/CarterFiggins/food-plan",needsZoom:!0},{title:"3D Printing Monitor",imgSrc:"/images/3dMonitor.png",description:"The 3D Printing Monitor is a raspberry pi with a night vision camera. It sets up a flask server on the local network that can be accessed from the browser. I used a phone goose mount to hold the RPi in place. It is perfect for watching over 3D printing Projects.",codeLink:"https://github.com/CarterFiggins/Baby_Monitor"},{title:"Bingo Caller",imgSrc:"/images/bingo.png",description:"High stakes bingo! This app generates bingo numbers with a push of a button. It orders the results in a table and shows the last 5 numbers called.",codeLink:"https://github.com/CarterFiggins/bingo-caller",needsZoom:!0},{title:"Spotify Silencer",imgSrc:"/images/mute.png",description:"I love listening to spotify when I code, but the ads can be quite annoying. So the Spotify Silencer is my solution. When an ad starts to play it will mute it and unmute it when the music turns back on. Now I enjoy the sound of silence instead of ads.",codeLink:"https://github.com/CarterFiggins/muteSpotify"}];function w(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"content-column",children:[Object(a.jsx)("h1",{className:"padding-bot content-title",children:"Projects"}),Object(a.jsx)("div",{className:"flip",children:v.map((function(e){return Object(a.jsx)(p,{title:e.title,imgSrc:e.imgSrc,description:e.description,codeLink:e.codeLink,siteLink:e.siteLink,needsZoom:e.needsZoom},e.title)}))})]})})}function N(){return Object(a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 370.2631578947368 121.94996577095182",preserveAspectRatio:"xMidYMid meet",className:"logo",children:[Object(a.jsx)("defs",{id:"SvgjsDefs1634"}),Object(a.jsx)("g",{id:"SvgjsG1635",featurekey:"symbolFeature-0",transform:"matrix(4.989035087719298,0,0,4.989035087719298,0,1.0328947368421062)",fill:"#ffffff",children:Object(a.jsx)("g",{xmlns:"http://www.w3.org/2000/svg",fill:"#ffffff",children:Object(a.jsx)("g",{fill:"#ffffff",children:Object(a.jsx)("path",{d:"M2.075,12h19.85c0.173,0,0.334-0.09,0.425-0.237c0.091-0.147,0.1-0.331,0.022-0.486l-3.566-7.136    c-0.009-0.019-0.02-0.037-0.032-0.054C18.432,3.424,17.743,3,17,3H7C6.258,3,5.57,3.424,5.228,4.083    C5.215,4.102,5.204,4.122,5.194,4.141l-3.566,7.136c-0.078,0.155-0.069,0.339,0.022,0.486C1.741,11.909,1.902,12,2.075,12z M22,13    H2c-1.103,0-2,0.897-2,2v4c0,1.103,0.897,2,2,2h20c1.103,0,2-0.897,2-2v-4C24,13.896,23.103,13,22,13z M6,15c0.551,0,1,0.449,1,1    s-0.449,1-1,1c-0.551,0-1-0.449-1-1S5.449,15,6,15z M3,15c0.551,0,1,0.449,1,1s-0.449,1-1,1c-0.551,0-1-0.449-1-1S2.449,15,3,15z     M21.5,19h-19C2.224,19,2,18.776,2,18.5S2.224,18,2.5,18h19c0.276,0,0.5,0.224,0.5,0.5S21.776,19,21.5,19z",fill:"#ffffff"})})})}),Object(a.jsx)("g",{id:"SvgjsG1636",featurekey:"nameFeature-0",transform:"matrix(0.6420656311910251,0,0,0.6420656311910251,139.44965982363496,-7.337465702438094)",fill:"#ffffff",children:Object(a.jsx)("path",{d:"M0.85714 17.714 l0 -6.2857 l24.286 0 l0 6.2857 l-8.4571 0 l0 22.286 l-7.4286 0 l0 -22.286 l-8.4 0 z M46.629000000000005 11.428999999999998 l7.4286 0 l0 28.571 l-7.4286 0 l0 -11.143 l-10.286 0 l0 11.143 l-7.4857 0 l0.057143 -28.571 l7.4286 0 l0 11.143 l10.286 0 l0 -11.143 z M84.05728571428571 17.714 l-16.857 0 l0 4.8571 l14.571 0 l0 6.2857 l-14.571 0 l0 4.8571 l16.857 0 l0 6.2857 l-20 0 l-4.2857 -4.2857 l0 -24.286 l24.286 0 l0 6.2857 z M120.62899999999999 17.714 l-9.1429 0 l0 16 l9.1429 0 l2.2857 -2.2857 l5.4286 0 l0 4.2857 l-4.2857 4.2857 l-15.714 0 l-4.2857 -4.2857 l0 -20 l4.2857 -4.2857 l15.714 0 l4.2857 4.2857 l0 4.2857 l-5.4286 0 z M154.914 11.428999999999998 l4.2857 4.2857 l0 20 l-4.2857 4.2857 l-16.571 0 l-4.2857 -4.2857 l0 -20 l4.2857 -4.2857 l16.571 0 z M151.771 33.7143 l0 -16 l-10.286 0 l0 16 l10.286 0 z M186.05714285714285 11.428999999999998 l7.4286 0 l0 28.571 l-7.4286 0 l0 -16 l-5.0286 9.7143 l-3.7143 0 l-4.9714 -9.7143 l0 16 l-7.4286 0 l0 -28.571 l7.4286 0 l6.8571 12.971 z M199.19995714285713 40 l0 -28.571 l20.857 0 l4.2857 4.2857 l0 12 l-4.2857 4.2857 l-13.429 0 l0 8 l-7.4286 0 z M206.62885714285713 25.714 l10.286 0 l0 -8 l-10.286 0 l0 8 z M230.0571 35.7143 l0 -24.286 l7.4286 0 l0 22.286 l10.286 0 l0 -22.286 l7.4286 0 l0 24.286 l-4.2857 4.2857 l-16.571 0 z M258.91428285714284 17.714 l0 -6.2857 l24.286 0 l0 6.2857 l-8.4571 0 l0 22.286 l-7.4286 0 l0 -22.286 l-8.4 0 z M286.0571428571428 40 l0 -5.7143 l2.2857 0 l0 -17.143 l-2.2857 0 l0 -5.7143 l12 0 l0 5.7143 l-2.2857 0 l0 17.143 l2.2857 0 l0 5.7143 l-12 0 z M320.62814285714285 11.428999999999998 l7.4286 0 l0 28.571 l-6.5714 0 l-11.143 -16 l0 16 l-7.4286 0 l0 -28.571 l6.5714 0 l11.143 15.886 l0 -15.886 z M351.7712857142857 17.714 l-10.571 0 l0 16 l10.857 0 l0 -4.8571 l-6.5714 0 l0 -6.2857 l14 0 l0 13.143 l-4.2857 4.2857 l-17.143 0 l-4.2857 -4.2857 l0 -20 l4.2857 -4.2857 l17.143 0 l4.2857 4.2857 l0 4.2857 l-5.4286 0 z",fill:"#ffffff"})}),Object(a.jsx)("g",{id:"SvgjsG1637",featurekey:"nameFeature-1",transform:"matrix(3.276105446924649,0,0,3.276105446924649,130.6388611774226,-9.439668826267862)",fill:"#ffffff",children:Object(a.jsx)("path",{d:"M27.143 17.714 l-16.857 0 l0 4.8571 l14.571 0 l0 6.2857 l-14.571 0 l0 11.143 l-7.4286 0 l0 -24.286 l4.2857 -4.2857 l20 0 l0 6.2857 z M30.57142857142857 40 l0 -5.7143 l2.2857 0 l0 -17.143 l-2.2857 0 l0 -5.7143 l12 0 l0 5.7143 l-2.2857 0 l0 17.143 l2.2857 0 l0 5.7143 l-12 0 z M65.42842857142857 17.714 l-10.571 0 l0 16 l10.857 0 l0 -4.8571 l-6.5714 0 l0 -6.2857 l14 0 l0 13.143 l-4.2857 4.2857 l-17.143 0 l-4.2857 -4.2857 l0 -20 l4.2857 -4.2857 l17.143 0 l4.2857 4.2857 l0 4.2857 l-5.4286 0 z",fill:"#ffffff"})})]})}var y="__close_menu__";window.addEventListener("click",(function(){return window.dispatchEvent(new CustomEvent(y))}));var k=y,C=n(17);function S(e){var t=e.onClick;return Object(a.jsx)("button",Object(C.a)(Object(C.a)({className:e.className,type:e.type,disabled:e.disabled},t?{onClick:t}:{}),{},{children:e.name}))}function M(e){var t=e.button,n=e.children,s=e.buttonName,i=e.menuClass,l=Object(c.useState)(!1),r=Object(d.a)(l,2),o=r[0],j=r[1];return Object(c.useEffect)((function(){var e=function(){return j(!1)};return o?window.addEventListener(k,e):window.removeEventListener(k,e),function(){return window.removeEventListener(k,e)}}),[o]),Object(a.jsxs)("div",{className:"menu ".concat(o&&"menu-active"," ").concat(i),children:[t((function(){return j(!0)}),s),Object(a.jsx)("ul",{className:"menu__list",role:"menu",children:n})]})}function _(){var e=Object(f.g)().pathname.includes("demo");return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(r.c,{activeClassName:"is-active",to:"/about-me",children:Object(a.jsx)(N,{})}),Object(a.jsxs)("div",{className:"nav-bar",children:[Object(a.jsx)(r.c,{className:"header-link",activeClassName:"is-active",to:"/about-me",children:"About Me"}),Object(a.jsxs)(M,{buttonName:"API Demos",menuClass:"header-link ".concat(e&&"is-active"),children:[Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"/demos/star-wars",children:"Star Wars"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"/demos/harry",children:"Harry Potter"})})]}),Object(a.jsx)(r.c,{className:"header-link",activeClassName:"is-active",to:"/projects",children:"Projects"}),Object(a.jsx)(r.c,{className:"header-link",activeClassName:"is-active",to:"/draw",children:"Recursive Art"}),Object(a.jsx)("a",{href:"https://www.linkedin.com/in/carter-figgins-064642139/",target:"_blank",className:"header-logo-link",children:Object(a.jsx)("img",{src:"/images/In-White.png",className:"sm-logo"})}),Object(a.jsx)("a",{href:"https://discord.gg/NcZU9bQhJZ",target:"_blank",className:"header-logo-link",children:Object(a.jsx)("img",{src:"/images/discord-mark-white.png",className:"sm-logo"})})]})]})}function z(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(_,{}),Object(a.jsxs)(f.d,{children:[Object(a.jsx)(f.b,{path:"/about-me",children:Object(a.jsx)(o,{})}),Object(a.jsx)(f.b,{path:"/demos",children:Object(a.jsx)(g,{})}),Object(a.jsx)(f.b,{path:"/projects",children:Object(a.jsx)(w,{})}),Object(a.jsx)(f.b,{path:"/draw",children:Object(a.jsx)(x,{})}),Object(a.jsx)(f.b,{path:"/",children:Object(a.jsx)(f.a,{to:"/about-me"})})]})]})}M.defaultProps={button:function(e,t){return Object(a.jsx)(S,{className:"menu__button",type:"button",name:t,onClick:e})}};var L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),c(e),s(e),i(e),l(e)}))};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(r.a,{children:Object(a.jsx)(z,{})})}),document.getElementById("root")),L()}},[[36,1,2]]]);
//# sourceMappingURL=main.75cd9821.chunk.js.map