(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{34:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var a,o,r,c,i=t(0),s=t.n(i),l=t(14),d=t.n(l),b=(t(34),t(35),t(15)),u=t(16),p=t(18),m=t(17),h=t(13),j=t(12),f=t(44),x=t(10),g=t(11),O=g.a.div(a||(a=Object(x.a)(["\n  align-items: center;\n  text-align: center;\n  margin-bottom: 30px;\n  .form-label {\n    display: block;\n    margin-bottom: 10px;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-weight: 500;\n    font-size: 20px;\n    color: #6b7b96;\n  }\n  .form-input {\n    display: block;\n    padding: 5px;\n    text-align: center;\n    margin: 0 auto;\n    color: #636161;\n    outline: none;\n  }\n  input:focus {\n    box-shadow: 1px 1px 2px 0 #12bcb0;\n    border: 1px solid #dbd9d9;\n  }\n  .addBtn {\n    margin-top: 20px;\n    padding: 5px;\n    background-color: transparent;\n    border: 2px solid gray;\n    border-radius: 5px;\n    font-weight: 700;\n    background: linear-gradient(45deg, #0b2349 20%, #0d61bc 75%, #8aa9d6);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    &:hover,\n    &:focus {\n      box-shadow: 1px 1px 2px 0 #0b2349;\n    }\n  }\n"]))),C=t(7),y={addContact:Object(C.b)("phoneBook/add",(function(n,e){return{payload:{id:Object(f.a)(),name:n,number:e}}})),deleteContact:Object(C.b)("phoneBook/delete",(function(n){return{payload:n}})),changeFilter:Object(C.b)("phoneBook/changeFilter")},v=t(1),k=function(n){Object(p.a)(t,n);var e=Object(m.a)(t);function t(){var n;Object(b.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={name:"",number:""},n.nameId=Object(f.a)(),n.phoneId=Object(f.a)(),n.handelInputChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(h.a)({},a,o))},n.handelFormSubmit=function(e){var t=n.state,a=t.name,o=t.number;e.preventDefault(),n.props.onSubmit(a,o),n.setState({name:"",number:""})},n}return Object(u.a)(t,[{key:"render",value:function(){return Object(v.jsx)(O,{children:Object(v.jsxs)("form",{className:"contacts-form",onSubmit:this.handelFormSubmit,children:[Object(v.jsxs)("label",{className:"form-label",id:this.nameId,children:["Name",Object(v.jsx)("input",{className:"form-input",type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name can only contains letters, apostrophe, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.",required:!0,id:this.nameId,onChange:this.handelInputChange,autoComplete:"off"})]}),Object(v.jsxs)("label",{className:"form-label",id:this.phoneId,children:["Number",Object(v.jsx)("input",{className:"form-input",type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number can only contains digits (min 8 digits), spaces, dashes, parentheses and can start with +",required:!0,id:this.phoneId,onChange:this.handelInputChange,autoComplete:"off"})]}),Object(v.jsx)("button",{className:"addBtn",type:"submit",children:"Add contact"})]})})}}]),t}(i.Component),w=Object(j.b)(null,(function(n){return{onSubmit:function(e,t){return n(y.addContact(e,t))}}}))(k),N=g.a.ul(o||(o=Object(x.a)(["\n  margin-top: 30px;\n  .item {\n    &:not(:last-child) {\n      margin-bottom: 15px;\n    }\n  }\n  p {\n    display: inline-block;\n    margin-right: 20px;\n  }\n  .name {\n    color: #052f74;\n    font-weight: 600;\n    font-size: 20px;\n  }\n  .number {\n    color: #202733;\n    font-weight: 600;\n    font-size: 17px;\n  }\n  .delBtn {\n    display: block;\n    margin-left: auto;\n    padding: 5px;\n    background: linear-gradient(45deg, #0b2349 20%, #0d61bc 75%, #8aa9d6);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    border: 2px solid gray;\n    border-radius: 5px;\n    font-weight: 700;\n    &:hover,\n    &:focus {\n      box-shadow: 1px 1px 3px 0 #fc0202;\n    }\n  }\n"]))),A=Object(j.b)((function(n){return{contacts:n.contacts.items}}),(function(n){return{onDeleteContact:function(e){return n(y.deleteContact(e))}}}))((function(n){var e=n.contacts,t=n.onDeleteContact;return console.log(e),Object(v.jsx)(N,{children:e.map((function(n){var e=n.id,a=n.name,o=n.number;return Object(v.jsxs)("li",{className:"item",children:[Object(v.jsxs)("p",{className:"name",children:[a,":"]}),Object(v.jsx)("p",{className:"number",children:o}),Object(v.jsx)("button",{className:"delBtn",type:"button",onClick:function(){return t(e)},children:"Delete"})]},e)}))})})),S=g.a.div(r||(r=Object(x.a)(["\n  text-align: center;\n  .title {\n    color: #6b7b96;\n    margin-bottom: 10px;\n  }\n  .finde-input {\n    display: block;\n    padding: 5px;\n    text-align: center;\n    margin: 0 auto;\n    color: #636161;\n    outline: none;\n  }\n  input:focus {\n    box-shadow: 1px 1px 2px 0 #12bcb0;\n    border: 1px solid #dbd9d9;\n  }\n"]))),I=function(n){var e=n.filter,t=n.onChange;return Object(v.jsxs)(S,{children:[Object(v.jsx)("h3",{className:"title",children:"Finde contacts by name"}),Object(v.jsx)("form",{children:Object(v.jsx)("label",{children:Object(v.jsx)("input",{type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name can only contains letters, apostrophe, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.",required:!0,onChange:t,className:"finde-input",autoComplete:"off"})})})]})},z=function(n){Object(p.a)(t,n);var e=Object(m.a)(t);function t(){var n;Object(b.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.changeFilter=function(e){n.setState({filter:e.target.value})},n.getVisibleContacts=function(){var e=n.state.filter.toLowerCase();return n.state.contacts.filter((function(n){return n.name.toLowerCase().includes(e)}))},n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var n=localStorage.getItem("contacts"),e=JSON.parse(n);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(n,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("h1",{children:"Phonebook"}),Object(v.jsx)(w,{}),Object(v.jsx)("h2",{children:"Contacts"}),Object(v.jsx)(I,{filter:this.state.filter,onChange:this.changeFilter}),Object(v.jsx)(A,{})]})}}]),t}(i.Component),B=t(28),F=t(29),D=t(5),J=Object(C.c)([],(c={},Object(h.a)(c,y.addContact,(function(n,e){return[e.payload].concat(Object(F.a)(n))})),Object(h.a)(c,y.deleteContact,(function(n,e){return n.filter((function(n){return n.id!==e.payload}))})),c)),Z=Object(D.b)({items:J}),M=Object(C.a)({reducer:{contacts:Z},devTools:!1});d.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(j.a,{store:M,children:Object(v.jsx)(B.a,{children:Object(v.jsx)(z,{})})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.2aaf7499.chunk.js.map