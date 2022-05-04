(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(12),s=n.n(a),o=(n(19),n(14)),i=n(10),u=n(5),l=n.n(u),j=n(7),d=n(3),b=n(1),h=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(d.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(""),i=Object(d.a)(o,2),u=i[0],l=i[1],j=Object(c.useState)(!1),h=Object(d.a)(j,2),f=h[0],p=h[1];return Object(b.jsx)("div",{class:"mx",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a?(t({taskInput:a,dayInput:u,reminderInput:f}),s(""),l(""),p(!1)):alert("Please enter a task to add new task")},children:[Object(b.jsxs)("div",{class:"my-1",children:[Object(b.jsx)("label",{class:"form-label",children:"Task"}),Object(b.jsx)("input",{type:"text",id:"task-detail",class:"form-control",value:a,onChange:function(e){s(e.target.value)}})]}),Object(b.jsxs)("div",{class:"my-1",children:[Object(b.jsx)("label",{class:"form-label",children:"Date and Time"}),Object(b.jsx)("input",{type:"datetime-local",id:"date-time-detail",class:"form-control",value:u,onChange:function(e){l(e.target.value)}})]}),Object(b.jsxs)("div",{class:"my-1 pt-1 mydiv",children:[Object(b.jsxs)("div",{class:"ms-3 form-switch form-check",children:[Object(b.jsx)("label",{class:"form-check-label",children:"Set Reminder"}),Object(b.jsx)("input",{class:"form-check-input form-check-control",type:"checkbox",checked:f,value:f,onChange:function(e){p(e.currentTarget.checked)}})]}),Object(b.jsx)("input",{type:"submit",value:"Save Task",class:"btn btn-primary"})]})]})})},f=n(6),p=function(){return Object(b.jsxs)("footer",{children:[Object(b.jsx)("b",{children:"Copyright \xa9 2021"}),Object(b.jsx)("br",{}),Object(b.jsx)(f.b,{to:"/about",children:"About"})]})},O=function(e){var t=e.text,n=e.onclick,c=e.color;return Object(b.jsx)("button",{onClick:n,style:{backgroundColor:c,color:"white"},className:"btn btn-x",children:t})},x=n(2),m=function(e){var t=e.title,n=e.onAdd,c=e.showBtn,r=Object(x.e)();return Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:t}),"/"===r.pathname&&Object(b.jsx)(O,{onclick:n,color:c?"red":"green",text:c?"Close":"Add"})]})};m.defaultProps={title:"Task Tracker"};var v=m,k=n(13),y=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(b.jsxs)("div",{className:"card my-2 py-1 card-space ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(b.jsx)("strong",{children:t.text}),Object(b.jsx)("p",{children:t.day}),Object(b.jsx)(k.a,{className:"icon-ele",onClick:function(){return n(t.id)}})]})},g=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsx)(y,{task:e,onDelete:n,onToggle:c})}))})},w=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h6",{children:"Version 1.0.0"}),Object(b.jsx)(f.b,{to:"/",children:"Go Back"})]})};var T=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(d.a)(a,2),u=s[0],O=s[1];Object(c.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,O(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var m=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:O(u.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,c,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:return n=e.sent,c=Object(i.a)(Object(i.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(c)});case 6:return r=e.sent,e.next=9,r.json();case 9:a=e.sent,O(u.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,c,r,a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.taskInput,c=t.dayInput,r=t.reminderInput,a={text:n,day:c,reminder:r},e.next=4,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 4:return s=e.sent,e.next=7,s.json();case 7:i=e.sent,O([].concat(Object(o.a)(u),[i]));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(f.a,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(v,{onAdd:function(){return r(!n)},showBtn:n}),Object(b.jsxs)(x.c,{children:[Object(b.jsx)(x.a,{path:"/",element:Object(b.jsxs)(b.Fragment,{children:[n&&Object(b.jsx)(h,{onAdd:C}),u.length>0?Object(b.jsx)(g,{tasks:u,onDelete:y,onToggle:T}):"No tasks to show"]})}),Object(b.jsx)(x.a,{path:"/about",element:Object(b.jsx)(w,{})})]}),Object(b.jsx)(p,{})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root")),C()}},[[22,1,2]]]);
//# sourceMappingURL=main.dc3d753e.chunk.js.map