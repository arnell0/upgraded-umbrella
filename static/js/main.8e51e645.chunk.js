(this["webpackJsonpupgraded-umbrella"]=this["webpackJsonpupgraded-umbrella"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(16),r=n.n(i),o=(n(23),n(12)),c=n(11),l=(n(24),n.p+"static/media/pdi__light.0bc56cd4.svg"),d=n.p+"static/media/pdi__dark.a43aac2b.svg",j=n(2),m=n(5),p=(n(9),n(0));function b(e){return Object(p.jsx)(m.b,{className:"LinkButton__wrapper",to:e.to,children:Object(p.jsx)("div",{className:"LinkButton",children:Object(p.jsx)("h2",{children:e.text})})})}var h=n.p+"static/media/arrow-right-light.a6728fef.svg";function u(e){return Object(p.jsx)(m.b,{to:e.to,children:Object(p.jsxs)("div",{className:"LinkArrow LinkArrowLight",children:[Object(p.jsx)("h4",{children:e.text}),Object(p.jsx)("img",{src:h,alt:"",srcset:""})]})})}var g=n.p+"static/media/arrow-right.a55b4c2d.svg";function k(e){return Object(p.jsx)(m.b,{to:e.to,children:Object(p.jsxs)("div",{className:"LinkArrow LinkArrowDark",children:[Object(p.jsx)("p",{children:Object(p.jsx)("span",{children:e.text})}),Object(p.jsx)("img",{src:g,alt:"",srcset:""})]})})}function x(e){return Object(p.jsx)(m.b,{to:e.to,children:Object(p.jsxs)("div",{className:"LinkArrow LinkArrowBold",children:[Object(p.jsx)("h4",{children:e.text}),Object(p.jsx)("img",{src:h,alt:"",srcset:""})]})})}var O=n.p+"static/media/arrow-down-light.86bff14f.svg";function v(){return Object(p.jsxs)("div",{className:"ScrollDown",children:[Object(p.jsx)("p",{children:"scrolla ner"}),Object(p.jsx)("img",{src:O,alt:""})]})}function _(e){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(p.jsxs)("div",{className:"component__inner",children:[Object(p.jsxs)("div",{className:"component__inner__header",children:[Object(p.jsxs)("div",{className:"component__title",children:[Object(p.jsxs)("h2",{children:["Fr\xe5ga ",e.question.id," av ",e.questionsLang]}),Object(p.jsx)("hr",{})]}),Object(p.jsxs)("h1",{children:[" ",e.question.title," "]})]}),Object(p.jsx)("span",{className:"component__spacer"}),Object(p.jsx)(v,{}),Object(p.jsx)("span",{className:"component__spacer"}),Object(p.jsx)("div",{className:"component__answers",children:e.question&&e.question.options.map((function(t,n){return Object(p.jsx)(f,Object(o.a)({option:t},e),n)}))})]})}function f(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),s=n[0],i=n[1];return Object(p.jsxs)("div",{className:"RadioButton",children:[Object(p.jsx)("div",{className:"RadioButton__outer",onClick:function(){return t=e.option.score,e.updateScore(t),void window.scrollTo(0,0);var t},onTouchStart:function(){return i(!0)},onTouchEnd:function(){return i(!1)},children:Object(p.jsx)("div",{className:"RadioButton__inner ".concat(s?"RadioButton__inner__hover--active":"")})}),Object(p.jsx)("div",{className:"RadioButton__text",children:e.option.option}),Object(p.jsx)("span",{className:"component__spacer"})]})}var N=n.p+"static/media/restart.33d0d40f.svg";function w(e){return Object(p.jsxs)(m.b,{to:e.to,className:"RefreshButton",children:[Object(p.jsx)("h2",{children:e.text}),Object(p.jsx)("img",{src:N,alt:"",srcset:""})]})}var y=[{id:"1",title:"Du har blivit antagen vid Uppsala universitet och f\xe5r bara ta med en grej. Vad v\xe4ljer du?",options:[{id:"1-1",option:"Min minir\xe4knare, som jag har programmerat Tetris p\xe5 f\xf6r maximal tenta-underh\xe5llning.",score:{en:0,ha:0,it:1,bi:0,ma:0,sa:0,pr:0}},{id:"1-2",option:"Solkr\xe4m, f\xf6r att skydda mig mot solen under introduktionsveckan.",score:{en:0,ha:0,it:0,bi:1,ma:0,sa:0,pr:0}},{id:"1-3",option:"En st\xe5ltermos s\xe5klart! Inga pappmuggar f\xf6r mig.",score:{en:0,ha:1,it:0,bi:0,ma:0,sa:0,pr:0}},{id:"1-4",option:"Min hemmabyggda h\xf6gtalare, perfekt f\xf6r korridorsfester!",score:{en:0,ha:0,it:0,bi:0,ma:0,sa:0,pr:1}}]},{id:"2",title:"Du \xe4r framme i Uppsala och ser domkyrkan. Vad t\xe4nker du d\xe5?",options:[{id:"2-1",option:"\u201cD\xe4r uppe bl\xe5ser det nog en del, det skulle fungera utm\xe4rkt f\xf6r tv\xe5 vindkraftverk.\u201d",score:{en:1,ha:0,it:0,bi:0,ma:0,sa:0,pr:0}},{id:"2-2",option:"\u201dHur starkt wi-fi kr\xe4vs f\xf6r att kunna surfa h\xf6gst upp i domkyrkotornen?\u201d",score:{en:0,ha:0,it:1,bi:0,ma:0,sa:0,pr:0}},{id:"2-3",option:"\u201dH\xe4ftig byggnad! Hur f\xe5r vi dagens byggnader att h\xe5lla lika l\xe4nge?\u201d",score:{en:0,ha:1,it:0,bi:0,ma:0,sa:1,pr:0}},{id:"2-4",option:"\u201dWow! Imponerande konstruktion. Undrar vilket material som anv\xe4nts till tornen?\u201d",score:{en:0,ha:0,it:0,bi:0,ma:1,sa:1,pr:0}}]},{id:"3",title:"Dags f\xf6r grupparbete! Vad skulle du vilja utveckla?",options:[{id:"3-1",option:"Robot som vattnar mina blommor med regnvatten under tentaperioden.",score:{en:0,ha:1,it:1,bi:0,ma:0,sa:0,pr:0}},{id:"3-2",option:"Solcellsdriven m\xe4tare som kan avg\xf6ra n\xe4r avokadon \xe4r mogen.",score:{en:1,ha:0,it:0,bi:0,ma:0,sa:0,pr:1}},{id:"3-3",option:"Schampo som h\xe5ller h\xe5ret rent i en m\xe5nad.",score:{en:0,ha:0,it:0,bi:1,ma:0,sa:0,pr:1}},{id:"3-4",option:"En smartphone gjort av ett helt nedbrytbart material.",score:{en:0,ha:1,it:0,bi:0,ma:1,sa:0,pr:0}}]},{id:"4",title:"H\xe4lften av terminen har g\xe5tt \u2013 vad l\xe4gger du upp p\xe5 sociala medier?",options:[{id:"4-1",option:"Min f\xf6rsta 3D-printade prototyp av den m\xe4nskliga hj\xe4rnan.",score:{en:0,ha:0,it:0,bi:1,ma:1,sa:0,pr:1}},{id:"4-2",option:"En modell av en bakterie som omvandlar solenergi till biobr\xe4nsle.",score:{en:0,ha:0,it:0,bi:1,ma:0,sa:0,pr:0}},{id:"4-3",option:"Sociala medier? Jag anv\xe4nder bara appar jag utvecklat sj\xe4lv.",score:{en:0,ha:0,it:1,bi:0,ma:0,sa:0,pr:0}},{id:"4-4",option:"En selfie fr\xe5n studiebes\xf6ket p\xe5 k\xe4rnkraftverket.",score:{en:1,ha:0,it:0,bi:0,ma:0,sa:1,pr:0}}]},{id:"5",title:"Du har f\xe5tt punktering p\xe5 cykeln och \xe4r sen till en f\xf6rel\xe4sning. Vad g\xf6r du?",options:[{id:"5-1",option:"Cykel? Jag har byggt en longboard med elmotor.",score:{en:1,ha:0,it:0,bi:0,ma:0,sa:0,pr:1}},{id:"5-2",option:"Fixar punkan med materialet som l\xf6ser allt: silvertejp!",score:{en:0,ha:0,it:0,bi:0,ma:1,sa:0,pr:0}},{id:"5-3",option:"\xd6nskar jag hade haft robotf\xf6tter f\xf6r att kunna springa dit i tid.",score:{en:0,ha:0,it:1,bi:1,ma:0,sa:0,pr:0}},{id:"5-4",option:"Flyger min programmerade dr\xf6nare till campus f\xf6r att se f\xf6rel\xe4sningen p\xe5 distans.",score:{en:0,ha:0,it:1,bi:0,ma:0,sa:0,pr:0}}]},{id:"6",title:"Dags f\xf6r sommarlov! Vad skulle du vilja g\xf6ra?",options:[{id:"6-1",option:"\xc5ka till ishotellet i Jukkasj\xe4rvi f\xf6r att f\xe5 inspiration till vinterns sn\xf6grottor.",score:{en:0,ha:0,it:0,bi:0,ma:1,sa:0,pr:0}},{id:"6-2",option:"Skippa flyget och vandra till Sveriges h\xf6gsta vattenfall.",score:{en:0,ha:1,it:0,bi:0,ma:0,sa:0,pr:0}},{id:"6-3",option:"\xc5ka h\xf6gteknologiska snabbt\xe5g i Tokyo.",score:{en:0,ha:0,it:0,bi:0,ma:0,sa:1,pr:0}},{id:"6-4",option:"Bes\xf6ka v\xe4rldens st\xf6rsta solcellspark i Egypten.",score:{en:1,ha:0,it:0,bi:0,ma:0,sa:0,pr:0}}]}],S={title:"H\xe5llbarhet och milj\xf6teknik",text:"Passar dig som gillar teknik och \xe4r duktig p\xe5 att hitta nya l\xf6sningar p\xe5 problem. Vill du arbeta med klimat- och milj\xf6, att minska samh\xe4llets f\xf6rbrukning av naturresurser och skapa ett mer h\xe5llbart samh\xe4lle med hj\xe4lp av teknik?",links:[{title:"Civilingenj\xf6rsprogrammet i elektroteknik",link:""},{title:"Civilingenj\xf6rsprogrammet i energisystem",link:""},{title:"Civilingenj\xf6rsprogrammet i milj\xf6- och vattenteknik",link:""},{title:"Civilingenj\xf6rsprogrammet i teknisk fysik med materialvetenskap",link:""},{title:"H\xf6gskoleingenj\xf6rsprogrammet i byggteknik",link:""},{title:"H\xf6gskoleingenj\xf6rsprogrammet i elektroteknik",link:""},{title:"H\xf6gskoleingenj\xf6rsprogrammet i h\xe5llbar utveckling i industriell teknik",link:""},{title:"H\xf6gskoleingenj\xf6rsprogrammet i k\xe4rnkraftsteknik",link:""},{title:"H\xf6gskoleingenj\xf6rsprogrammet i maskinteknik",link:""}]};function E(){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(p.jsxs)("div",{className:"component__wrapper",children:[Object(p.jsx)("div",{className:"component__background",children:Object(p.jsx)("div",{className:"component__inner",children:Object(p.jsxs)("div",{className:"component__inner__header",children:[Object(p.jsx)("h1",{children:"VILKEN TYP AV INGENJ\xd6R \xc4R DU?"}),Object(p.jsx)("span",{className:"component__spacer"}),Object(p.jsx)(b,{text:"starta test",to:"/questions"}),Object(p.jsx)("span",{className:"component__spacer"}),Object(p.jsx)(u,{text:"l\xe4s mer om utbildningarna",to:"/"}),Object(p.jsx)("span",{className:"component__spacer"})]})})}),Object(p.jsx)("div",{className:"component__footer"})]})}function D(){Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]);var e=Object(j.f)(),t=Object(a.useState)({en:0,ha:0,it:0,bi:0,ma:0,sa:0,pr:0}),n=Object(c.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)(0),l=Object(c.a)(r,2),d=l[0],m=l[1];return Object(p.jsxs)("div",{className:"component__wrapper",children:[Object(p.jsx)("div",{className:"component__background",children:Object(p.jsx)(_,{question:y[d],questionsLang:y.length,updateScore:function(t){var n=Object(o.a)({},s),a=Object.keys(n),r=Object.values(n),c=Object.values(t);r.map((function(e,t){return n[a[t]]=e+c[t]})),i(n),d===y.length-1&&e.push("/results"),m(d+1)}})}),Object(p.jsx)("div",{className:"component__footer"})]})}function L(){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(p.jsxs)("div",{className:"component__wrapper",children:[Object(p.jsx)("div",{className:"component__background",children:Object(p.jsxs)("div",{className:"component__inner",children:[Object(p.jsx)("div",{className:"component__title",children:Object(p.jsx)("h2",{children:"Ditt omr\xe5de:"})}),Object(p.jsxs)("div",{className:"component__inner__header",children:[Object(p.jsx)("h1",{children:S.title}),Object(p.jsx)("span",{className:"component__spacer--small"}),Object(p.jsx)("div",{className:"component__text",children:S.text}),Object(p.jsx)("span",{className:"component__spacer--small"}),Object(p.jsx)("div",{className:"component__text component__text--end",children:"Dessa program passar kanske dig:"})]}),Object(p.jsx)("span",{className:"component__spacer"}),Object(p.jsx)(v,{}),Object(p.jsx)("span",{className:"component__spacer"}),Object(p.jsxs)("div",{className:"component__answers",children:[S.links.map((function(e,t){return Object(p.jsx)("div",{className:"component__answer",children:Object(p.jsx)("div",{className:"component__answer--inner",children:Object(p.jsx)(x,{text:e.title,to:e.link})})},t)})),Object(p.jsx)(w,{to:"/",text:"G\xf6r testet igen"})]})]})}),Object(p.jsx)("span",{className:"component__spacer"}),Object(p.jsx)("div",{className:"component__footer",children:Object(p.jsxs)("div",{className:"component__endtext",children:[Object(p.jsx)("div",{className:"component__endtext--title",children:"Psst! K\xe4nner du inte igen dig?"}),Object(p.jsx)("p",{children:"Testet \xe4r bara ett inspirerande och kul s\xe4tt att se vilken ingenj\xf6rsutbildning som skulle kunna passa dig."}),Object(p.jsx)(k,{text:"l\xe4s mer om alla v\xe5ra ingenj\xf6rsutbildningarna",to:"/"})]})})]})}function B(){return Object(p.jsx)(m.a,{children:Object(p.jsxs)("div",{className:"wrapper__switch",children:[Object(p.jsx)("div",{className:"wrapper__pillar",children:Object(p.jsx)("div",{className:"pillar",children:Object(p.jsx)(m.b,{to:"/",children:Object(p.jsx)("img",{className:"pillar__logo",src:l,alt:"pillar-logo"})})})}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{path:"/questions",children:Object(p.jsx)(D,{})}),Object(p.jsx)(j.a,{path:"/results",children:Object(p.jsx)(L,{})}),Object(p.jsx)(j.a,{path:"/",children:Object(p.jsx)(E,{})})]}),Object(p.jsx)("footer",{children:Object(p.jsx)("img",{className:"footer__logo",src:d,alt:"footer-logo"})})]})})}r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[34,1,2]]]);
//# sourceMappingURL=main.8e51e645.chunk.js.map