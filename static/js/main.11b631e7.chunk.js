(this.webpackJsonpuderdir=this.webpackJsonpuderdir||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(2),c=n.n(r),a=n(12),o=n.n(a),i=function(){return Object(s.jsxs)("div",{className:"jumbotron",children:[Object(s.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(s.jsx)("hr",{className:"my-4"})]})},l=n(13),j=n(14),h=n(17),u=n(16),d=n(15),m=n.n(d),b={getRandomUsers:function(){return m.a.get("https://randomuser.me/api/?results=50&nat=us")}},p=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={root:[],employees:[],sort:!1},e.changeFunction=function(t){var n=t.target.value,s=e.state.root.filter((function(e){return e.name.first.includes(n)||e.name.last.includes(n)}));e.setState({employees:s})},e.sortByThis=function(){var t=e.state.root;t.sort((function(t,n){var s=t.name.first.toUpperCase(),r=n.name.first.toUpperCase();return s>r?e.state.sort?1:-1:r>s?e.state.sort?-1:1:0})),e.setState({sort:!e.state.sort}),e.setState({employees:t})},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"getUsers",value:function(){var e=this;b.getRandomUsers().then((function(t){return e.setState({employees:t.data.results})})).then((function(t){return e.setState({root:e.state.employees})})).then((function(t){return console.log(e.state.employees)}))}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("nav",{className:"navbar navbar-dark bg-dark justify-content-center",children:Object(s.jsx)("form",{className:"form-inline",children:Object(s.jsx)("input",{className:"form-control mr-sm-2",onChange:this.changeFunction,placeholder:"Search by name"})})}),Object(s.jsxs)("table",{className:"table table-dark",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"Image"}),Object(s.jsxs)("th",{scope:"col",children:["Name ",Object(s.jsx)("button",{className:"btn btn-info",onClick:this.sortByThis,children:"Sort"})]}),Object(s.jsx)("th",{scope:"col",children:"Phone"}),Object(s.jsx)("th",{scope:"col",children:"Email"})]})}),Object(s.jsx)("tbody",{children:this.state.employees.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("img",{src:e.picture.thumbnail,alt:e.name.first})}),Object(s.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(s.jsx)("td",{children:e.phone}),Object(s.jsx)("td",{children:e.email})]})}))})]})]})}}]),n}(c.a.Component);var O=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{}),Object(s.jsx)(p,{})]})};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.11b631e7.chunk.js.map