(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,o){},16:function(e,t,o){},18:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(3),s=o.n(r),c=(o(14),o(4)),i=o(5),l=o(7),d=o(6),m=o(8),u=o(1),v=(o(16),function(e){function t(e){var o;return Object(c.a)(this,t),(o=Object(l.a)(this,Object(d.a)(t).call(this,e))).addTodo=o.addTodo.bind(Object(u.a)(Object(u.a)(o))),o.removeTodo=o.removeTodo.bind(Object(u.a)(Object(u.a)(o))),o.state={todos:[],errorMsg:""},o}return Object(m.a)(t,e),Object(i.a)(t,[{key:"addTodo",value:function(e){e.preventDefault(),this.state.todos.filter(function(t){return t===e.target.todo.value})[0]===e.target.todo.value?this.setState({errorMsg:"Already Exists! Please Enter A New Todo..."}):this.setState({todos:this.state.todos.concat(e.target.todo.value),errorMsg:""}),e.target.todo.value=""}},{key:"removeTodo",value:function(e){this.setState({todos:this.state.todos.filter(function(t){return t!==e}),errorMsg:""})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 mb-3"},n.a.createElement("h1",null,"Today's Todos..."),n.a.createElement("form",{className:"form-inline",onSubmit:this.addTodo},n.a.createElement("input",{type:"text",name:"todo",className:"form-control mr-sm-2"}),n.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Add Todo"}),n.a.createElement("small",{className:"form-text text-danger ml-3"},this.state.errorMsg))),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("ul",{className:"list-group"},this.state.todos.map(function(t,o){return n.a.createElement("li",{className:"list-group-item list-group-item-secondary",key:o},t,n.a.createElement("button",{className:"btn btn-danger btn-sm rounded ml-3",onClick:function(o){return e.removeTodo(t)}},"\xd7"))})))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,o){e.exports=o(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.3a8d23f4.chunk.js.map