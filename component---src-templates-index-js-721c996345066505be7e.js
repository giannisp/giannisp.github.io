(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{221:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return m});var n=t(0),r=t.n(n),s=t(81),l=t(113),c=t.n(l),i=t(217),m="312343037";a.default=function(e){var a=e.data,t=e.pageContext,n=t.currentPage,l=t.hasNextPage,m=t.hasPrevPage,o=t.prevPagePath,p=t.nextPagePath,d=a.allMarkdownRemark.edges;return r.a.createElement(i.a,null,n>1&&r.a.createElement(c.a,{title:"Posts Archive - Page "+n}),r.a.createElement("div",{className:"posts"},d.map(function(e){var a=e.node.frontmatter,t=a.path,n=a.title,l=a.date;return r.a.createElement("div",{className:"post",key:t},r.a.createElement("h1",{className:"post-title"},r.a.createElement(s.a,{to:t},n)),r.a.createElement("span",{className:"post-date"},l))})),r.a.createElement("div",{className:"pagination"},l&&r.a.createElement(s.a,{to:p,className:"pagination-item older"},"Older"),!l&&r.a.createElement("span",{className:"pagination-item older"},"Older"),m&&r.a.createElement(s.a,{to:o,className:"pagination-item newer"},"Newer"),!m&&r.a.createElement("span",{className:"pagination-item newer"},"Newer")))}}}]);
//# sourceMappingURL=component---src-templates-index-js-721c996345066505be7e.js.map