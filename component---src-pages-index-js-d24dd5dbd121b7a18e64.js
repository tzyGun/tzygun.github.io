(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/wnb":function(e,t,a){e.exports={articleBox:"article-module--article-box--12JnP",left:"article-module--left--3PggJ",right:"article-module--right--1dtfA",date:"article-module--date--2XntQ"}},"8k0H":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("hwdJ"),o=a.n(l),i=a("Wbzz"),c=a("Wmhb"),u=a.n(c),m=function(e){return r.a.createElement(i.a,{className:u.a.link,to:e.to},e.text)},s=function(e){return r.a.createElement(i.a,{to:e.to},r.a.createElement("div",{className:u.a.button},e.text))},d=function(e){var t="",a="";return"twitter"===e.site?(t=u.a.buttonTwitter,a="https://twitter.com/"+e.username):"linkedin"===e.site?(t=u.a.buttonLinkedin,a="https://www.linkedin.com/in/"+e.username):"github"===e.site&&(t=u.a.buttonGithub,a="https://www.github.com/"+e.username),r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:t},e.children," "))},b=function(){return r.a.createElement("header",{className:u.a.container},r.a.createElement("div",{className:u.a.row},r.a.createElement(s,{to:"/",text:"My Gatsby Blog"}),r.a.createElement(d,{site:"github",username:"tzygun"}),r.a.createElement(d,{site:"linkedin"}),r.a.createElement(d,{site:"twitter"})),r.a.createElement("div",{className:u.a.row},r.a.createElement(m,{to:"/",text:"Blog"}),r.a.createElement(m,{to:"/about",text:"Articles"})))};a("A5mV"),t.a=function(e){var t=e.children;return r.a.createElement("div",{className:o.a.container},r.a.createElement(b,null),r.a.createElement("div",{className:o.a.content},t))}},A5mV:function(e,t,a){e.exports={container:"footer-module--container--2NQrP",footer:"footer-module--footer--1X1DK"}},"I/Ru":function(e,t,a){"use strict";var n=a("8k0H");t.a=n.a},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return d}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("I/Ru"),i=a("a+ZR"),c=a("/wnb"),u=a.n(c),m=function(e){return console.log(e.keywords),r.a.createElement(l.a,{to:e.to},r.a.createElement("article",{className:u.a.articleBox,key:e.id},r.a.createElement("div",{className:u.a.left},r.a.createElement("img",{src:"https://source.unsplash.com/150x150/?"+e.keywords,alt:e.title})),r.a.createElement("div",{className:u.a.right},r.a.createElement("h3",null,e.title),r.a.createElement("div",{className:u.a.date},e.date),r.a.createElement("div",null,e.excerpt))))},s=function(){return r.a.createElement(l.b,{query:"3964204167",render:function(e){return r.a.createElement("div",null,e.allMarkdownRemark.edges.map((function(e){var t=e.node;return r.a.createElement(m,{id:t.id,to:t.fields.slug,keywords:t.frontmatter.keywords,title:t.frontmatter.title,date:t.frontmatter.date,excerpt:t.excerpt})})))}})},d=(t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{text:"Welcome"}),r.a.createElement("div",null,r.a.createElement(l.a,{to:"/"},"Home")," | ",r.a.createElement(l.a,{to:"/about"},"About")),r.a.createElement(s,null))},"399220996")},Wmhb:function(e,t,a){e.exports={container:"header-module--container--2bXhC",row:"header-module--row--ARqPF",button:"header-module--button--3z6Yl",buttonIcon:"header-module--button-icon--4gHlW",buttonGithub:"header-module--button-github--3lPUW",buttonTwitter:"header-module--button-twitter--3DW6r",buttonLinkedin:"header-module--button-linkedin--39zY9",link:"header-module--link--3pDOs"}},"a+ZR":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("dmJ+"),o=a.n(l);t.a=function(e){return r.a.createElement("section",{className:o.a.container},r.a.createElement("h1",{className:o.a.title},e.text),r.a.createElement("div",{className:o.a.subtitle},e.subtitle))}},"dmJ+":function(e,t,a){e.exports={container:"title-module--container--1OkLh",title:"title-module--title--2I4Ge",subtitle:"title-module--subtitle--fLljM"}},hwdJ:function(e,t,a){e.exports={container:"layout-module--container--280Lj"}}}]);
//# sourceMappingURL=component---src-pages-index-js-d24dd5dbd121b7a18e64.js.map