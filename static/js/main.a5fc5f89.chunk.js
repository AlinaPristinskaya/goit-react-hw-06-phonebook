(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={stats:"PersoneEditor_stats__2-912",item:"PersoneEditor_item__3KpS4",button:"PersoneEditor_button__okw1i"}},14:function(t,e,n){t.exports={label:"Filter_label__3XIsX"}},25:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(9),o=n.n(r),i=(n(25),n(15)),s=n(36),u=n(8),l=n.n(u),b=n(4),d=n(3),j=Object(d.b)("contacts/add",(function(t){return{payload:{id:Object(s.a)(),name:t.name,number:t.number}}})),m=Object(d.b)("contacts/deleted"),f={addContacts:j,filterContacts:Object(d.b)("contacts/filter"),deleteContacts:m,changeFilterContacts:Object(d.b)("contacts/changeFilter")},O=n(1);var h=Object(b.b)(null,(function(t){return{onSubmit:function(e){return t(f.addContacts(e))}}}))((function(t){var e=t.onSubmit,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1],u=Object(c.useState)(""),b=Object(i.a)(u,2),d=b[0],j=b[1],m=Object(s.a)(),f=Object(s.a)(),h=function(){o(""),j("")};return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("form",{className:l.a.form,onSubmit:function(t){t.preventDefault(),e({name:r,number:d}),h()},children:[Object(O.jsx)("label",{htmlFor:m,children:" Name "}),Object(O.jsx)("input",{className:l.a.input,id:m,onChange:function(t){var e=t.currentTarget.value;o(e)},value:r,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(O.jsx)("label",{htmlFor:f,children:" Number "}),Object(O.jsx)("input",{className:l.a.input,id:f,onChange:function(t){var e=t.currentTarget.value;j(e)},value:d,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(O.jsx)("button",{className:l.a.button,type:"submit",children:"Add contact"})]})})})),p=n(11),C=n.n(p);var x=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},g=Object(b.b)((function(t){var e=t.contacts,n=e.items,c=e.filter;return{persons:x(n,c)}}),(function(t){return{onDeleteContacts:function(e){return t(f.deleteContacts(e))}}}))((function(t){var e=t.persons,n=t.onDeleteContacts;return Object(O.jsx)("div",{children:e.length?Object(O.jsx)("ul",{className:C.a.stats,children:e.map((function(t){return Object(O.jsxs)("li",{className:C.a.item,children:[t.name,":",t.number,Object(O.jsx)("button",{className:C.a.button,type:"button",onClick:function(){return n(t.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t.id)}))}):Object(O.jsx)("p",{children:"No entries in the phone book"})})})),v=n(14),_=n.n(v),y=Object(b.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(f.changeFilterContacts(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(O.jsxs)("label",{className:_.a.label,children:[Object(O.jsx)("b",{children:"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438"}),Object(O.jsx)("input",{className:_.a.input,type:"Text",value:e,onChange:n})]})}));var F,N=Object(b.b)((function(t){return{items:t.contacts.items,filter:t.contacts.filter}}),(function(t){return{formSubmitHandler:function(e){return t(f.addContacts(e))},getVisibleContacts:function(e){return t(f.filterContacts(e))},deleteContacts:function(e){return t(f.deleteContacts(e))}}}))((function(t){return t.getVisibleContacts,t.formSubmitHandler,t.deleteContacts,Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(h,{}),Object(O.jsx)(y,{}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(g,{})]})})),S=n(6),k=n(19),w=n(2),A=Object(d.c)([],(F={},Object(S.a)(F,f.addContacts,(function(t,e){var n=e.payload;return t.find((function(t){return t.name===n.name}))?alert("".concat(n.name," is already on contacts")):[].concat(Object(k.a)(t),[n])})),Object(S.a)(F,f.deleteContacts,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),F)),z=Object(d.c)("",Object(S.a)({},f.changeFilterContacts,(function(t,e){return e.payload}))),P=Object(w.b)({items:A,filter:z}),E=n(5),q=n(17),B={key:"items",storage:n.n(q).a,blacklist:["filter"]},D=Object(d.a)({reducer:{contacts:Object(E.g)(B,P)},middleware:Object(d.d)({serializableCheck:{ignoredActions:[E.a,E.f,E.b,E.c,E.d,E.e]}})}),J=Object(E.h)(D),T=n(18);console.log(D),console.log(D.getState()),o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(b.a,{store:D,children:Object(O.jsx)(T.a,{loading:null,persistor:J,children:Object(O.jsx)(N,{})})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"Form_form__1rzQP",input:"Form_input__1SsCq",button:"Form_button__2vBSw"}}},[[35,1,2]]]);
//# sourceMappingURL=main.a5fc5f89.chunk.js.map