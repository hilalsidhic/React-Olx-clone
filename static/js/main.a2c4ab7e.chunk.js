(this.webpackJsonpolx=this.webpackJsonpolx||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var s=c(3),a=c(30),n=c.n(a),i=(c(38),c(10)),j=c(8),l=c.p+"static/media/olx-logo.b3f099a2.png",r=c(2),d=Object(s.createContext)(null),b=Object(s.createContext)(null);function o(e){var t=e.children,c=Object(s.useState)(null),a=Object(i.a)(c,2),n=a[0],j=a[1];return Object(r.jsx)(b.Provider,{value:{User:n,setUser:j},children:t})}c(40);function h(){var e=Object(j.e)(),t=Object(s.useState)(""),c=Object(i.a)(t,2),a=c[0],n=c[1],b=Object(s.useState)(""),o=Object(i.a)(b,2),h=o[0],O=o[1],x=Object(s.useState)(""),u=Object(i.a)(x,2),m=u[0],v=u[1],p=Object(s.useState)(""),f=Object(i.a)(p,2),g=f[0],N=f[1],C=Object(s.useContext)(d).firebase;return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"signupParentDiv",children:[Object(r.jsx)("img",{width:"200px",height:"200px",src:l,alt:"imagesignup "}),Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),C.auth().createUserWithEmailAndPassword(h,g).then((function(t){var c=t.user;console.log(c),c.updateProfile({displayName:a}).then((function(){C.firestore().collection("users").add({Id:c.uid,Name:a,Phone:m}).then((function(){e.push("/login")}))}))})).catch((function(e){e.code,e.message}))},children:[Object(r.jsx)("label",{htmlFor:"fname",children:"Username"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"input",type:"text",id:"fname",value:a,onChange:function(e){n(e.target.value)},name:"name",defaultValue:"John"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"fname",children:"Email"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"input",type:"email",id:"fname",value:h,onChange:function(e){O(e.target.value)},name:"email",defaultValue:"John"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"lname",children:"Phone"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"input",type:"number",id:"lname",value:m,onChange:function(e){v(e.target.value)},name:"phone",defaultValue:"Doe"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"lname",children:"Password"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"input",type:"password",id:"lname",value:g,onChange:function(e){N(e.target.value)},name:"password",defaultValue:"Doe"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{children:"Signup"})]}),Object(r.jsx)("a",{children:"Login"})]})})}var O=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(h,{})})},x=c(18);c(45);var u=function(){var e=Object(s.useContext)(d).firebase,t=Object(s.useState)(""),c=Object(i.a)(t,2),a=c[0],n=c[1],b=Object(s.useState)(""),o=Object(i.a)(b,2),h=o[0],O=o[1],x=Object(j.e)();return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"loginParentDiv",children:[Object(r.jsx)("img",{width:"200px",height:"200px",src:l}),Object(r.jsxs)("form",{onClick:function(t){t.preventDefault(),e.auth().signInWithEmailAndPassword(a,h).then((function(e){var t=e.user;console.log(t),x.push("/")})).catch((function(e){var t=e.code;console.log(t);var c=e.message;console.log(c)}))},children:[Object(r.jsx)("label",{htmlFor:"fname",children:"Email"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"input",type:"email",id:"fname",value:a,onChange:function(e){n(e.target.value)},name:"email",defaultValue:"John"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"lname",children:"Password"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"input",type:"password",id:"lname",value:h,onChange:function(e){O(e.target.value)},name:"password",defaultValue:"Doe"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{children:"Login"})]}),Object(r.jsx)("a",{children:"Signup"})]})})};var m=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(u,{})})};c(46);function v(){return Object(r.jsx)("svg",{width:"48px",height:"48px",viewBox:"0 0 1024 1024","data-aut-id":"icon",className:!0,fillRule:"evenodd",children:Object(r.jsx)("path",{className:"rui-77aaa",d:"M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"})})}function p(e){return Object(r.jsx)("svg",{width:"25px",height:"25px",viewBox:"0 0 1024 1024","data-aut-id":"icon",color:e.color?e.color:"",className:!0,fillRule:"evenodd",children:Object(r.jsx)("path",{className:"rui-77aaa",d:"M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"})})}function f(){return Object(r.jsx)("svg",{width:"24px",height:"24px",viewBox:"0 0 1024 1024","data-aut-id":"icon",className:!0,fillRule:"evenodd",children:Object(r.jsx)("path",{className:"rui-77aaa",d:"M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"})})}function g(){return Object(r.jsx)("svg",{width:104,height:48,viewBox:"0 0 1603 768",className:"_3V9PS",children:Object(r.jsxs)("g",{children:[Object(r.jsx)("path",{className:"all",d:"M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"}),Object(r.jsx)("path",{className:"left",d:"M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"}),Object(r.jsx)("path",{className:"top",d:"M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"}),Object(r.jsx)("path",{className:"right",d:"M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"})]})})}function N(e){return Object(r.jsx)("svg",{width:"16px",height:"16px",viewBox:"0 0 1024 1024","data-aut-id":"icon",className:!0,fillRule:"evenodd",children:Object(r.jsx)("path",{className:"rui-367TP",d:"M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"})})}var C=function(){var e=Object(s.useContext)(b),t=e.User,c=(e.setUser,Object(s.useContext)(d).firebase),a=Object(j.e)();return Object(r.jsx)("div",{className:"headerParentDiv",children:Object(r.jsxs)("div",{className:"headerChildDiv",children:[Object(r.jsx)("div",{className:"brandName",children:Object(r.jsx)(v,{})}),Object(r.jsxs)("div",{className:"placeSearch",children:[Object(r.jsx)(p,{}),Object(r.jsx)("input",{type:"text"}),Object(r.jsx)(f,{})]}),Object(r.jsxs)("div",{className:"productSearch",children:[Object(r.jsx)("div",{className:"input",children:Object(r.jsx)("input",{type:"text",placeholder:"Find car,mobile phone and more..."})}),Object(r.jsx)("div",{className:"searchAction",children:Object(r.jsx)(p,{color:"#ffffff"})})]}),Object(r.jsxs)("div",{className:"language",children:[Object(r.jsx)("span",{children:" ENGLISH "}),Object(r.jsx)(f,{})]}),Object(r.jsxs)("div",{className:"loginPage",children:[t?Object(r.jsxs)("span",{children:["Welcome ",t.displayName]}):Object(r.jsx)("a",{href:"/login",children:"Login"}),Object(r.jsx)("hr",{})]}),t&&Object(r.jsx)("span",{onClick:function(){c.auth().signOut(),a.push("/login")},children:"Logout"}),Object(r.jsxs)("div",{className:"sellMenu",children:[Object(r.jsx)(g,{}),Object(r.jsxs)("div",{className:"sellMenuContent",children:[Object(r.jsx)(N,{}),Object(r.jsx)("span",{onClick:function(){a.push("/Create")},children:"SELL"})]})]})]})})},P=(c(47),function(){var e=Object(j.e)(),t=Object(s.useContext)(b).User,c=Object(s.useContext)(d).firebase,a=Object(s.useState)(""),n=Object(i.a)(a,2),l=n[0],o=n[1],h=Object(s.useState)(""),O=Object(i.a)(h,2),x=O[0],u=O[1],m=Object(s.useState)(""),v=Object(i.a)(m,2),p=v[0],f=v[1],g=Object(s.useState)(null),N=Object(i.a)(g,2),P=N[0],S=N[1],w=new Date;return Object(r.jsxs)(s.Fragment,{children:[Object(r.jsx)(C,{}),Object(r.jsx)("card",{children:Object(r.jsxs)("div",{className:"centerDiv",children:[Object(r.jsx)("label",{htmlFor:"fname",children:"Name"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"input",type:"text",id:"fname",value:l,onChange:function(e){o(e.target.value)},name:"Name",defaultValue:"John"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"fname",children:"Category"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"input",type:"text",id:"fname",value:x,onChange:function(e){u(e.target.value)},name:"category",defaultValue:"John"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"fname",children:"Price"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"input",type:"number",value:p,onChange:function(e){f(e.target.value)},id:"fname",name:"Price"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("img",{alt:"Posts",width:"200px",height:"200px",src:P?URL.createObjectURL(P):null}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{onChange:function(e){S(e.target.files[0])},type:"file"}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(){c.storage().ref("/images/".concat(P.name)).put(P).then((function(s){s.ref.getDownloadURL().then((function(s){c.firestore().collection("Product").add({Name:l,Category:x,Price:p,url:s,userId:t.uid,createdAt:w.toDateString()}).then((function(){e.push("/")}))}))}))},className:"uploadBtn",children:"upload and Submit"})]})})]})}),S=function(){return Object(r.jsxs)(s.Fragment,{children:[Object(r.jsx)(C,{}),Object(r.jsx)(P,{})]})},w=Object(s.createContext)();var D=function(e){var t=e.children,c=Object(s.useState)(),a=Object(i.a)(c,2),n=a[0],j=a[1];return Object(r.jsx)(w.Provider,{value:{postDetails:n,setpostDetails:j},children:t})};c(48);var y=function(){var e=Object(s.useContext)(w),t=e.postDetails,c=(e.setpostDetails,Object(s.useContext)(d).firebase),a=Object(s.useState)(),n=Object(i.a)(a,2),j=n[0],l=n[1];return Object(s.useEffect)((function(){var e=t.userId;c.firestore().collection("users").where("Id","==",e).get().then((function(e){e.forEach((function(e){l(e.data()),console.log(e.data())}))}))}),[]),Object(r.jsxs)("div",{className:"viewParentDiv",children:[Object(r.jsx)("div",{className:"imageShowDiv",children:Object(r.jsx)("img",{src:t.url,alt:""})}),Object(r.jsxs)("div",{className:"rightSection",children:[Object(r.jsxs)("div",{className:"productDetails",children:[Object(r.jsxs)("p",{children:["\u20b9 ",t.Price," "]}),Object(r.jsx)("span",{children:t.Name}),Object(r.jsx)("p",{children:t.Category}),Object(r.jsx)("span",{children:t.createdAt})]}),j&&Object(r.jsxs)("div",{className:"contactDetails",children:[Object(r.jsx)("p",{children:"Seller details"}),Object(r.jsx)("p",{children:j.Name}),Object(r.jsx)("p",{children:j.Phone})]})]})]})};var M=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(C,{}),Object(r.jsx)(y,{})]})};c(49);var A=function(){return Object(r.jsx)("div",{className:"bannerParentDiv",children:Object(r.jsxs)("div",{className:"bannerChildDiv",children:[Object(r.jsxs)("div",{className:"menuBar",children:[Object(r.jsxs)("div",{className:"categoryMenu",children:[Object(r.jsx)("span",{children:"ALL CATEGORIES"}),Object(r.jsx)(f,{})]}),Object(r.jsxs)("div",{className:"otherQuickOptions",children:[Object(r.jsx)("span",{children:"Cars"}),Object(r.jsx)("span",{children:"Motorcy..."}),Object(r.jsx)("span",{children:"Mobile Ph..."}),Object(r.jsx)("span",{children:"For Sale:Houses & Apart..."}),Object(r.jsx)("span",{children:"Scoot..."}),Object(r.jsx)("span",{children:"Commercial & Other Ve..."}),Object(r.jsx)("span",{children:"For Rent: House & Apart..."})]})]}),Object(r.jsx)("div",{className:"banner",children:Object(r.jsx)("img",{src:"../../../Images/banner copy.png",alt:""})})]})})},F=c(25);function I(){return Object(r.jsx)("svg",{width:"24px",height:"24px",viewBox:"0 0 1024 1024","data-aut-id":"icon",className:!0,fillRule:"evenodd",children:Object(r.jsx)("path",{className:"rui-77aaa",d:"M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"})})}c(50);var L=function(){var e=Object(j.e)(),t=Object(s.useContext)(d).firebase,c=(Object(s.useContext)(b).User,Object(s.useState)([])),a=Object(i.a)(c,2),n=a[0],l=a[1],o=Object(s.useContext)(w),h=(o.postDetails,o.setpostDetails);return Object(s.useEffect)((function(){t.firestore().collection("Product").get().then((function(e){var t=e.docs.map((function(e){return console.log(e.data()),Object(F.a)(Object(F.a)({},e.data()),{},{id:e.id})}));console.log(t),l(t)}))}),[]),Object(r.jsxs)("div",{className:"postParentDiv",children:[Object(r.jsxs)("div",{className:"moreView",children:[Object(r.jsxs)("div",{className:"heading",children:[Object(r.jsx)("span",{children:"Quick Menu"}),Object(r.jsx)("span",{children:"View more"})]}),Object(r.jsx)("div",{className:"cards",children:n.map((function(t){return Object(r.jsxs)("div",{className:"card",onClick:function(){h(t),e.push("/view")},children:[Object(r.jsx)("div",{className:"favorite",children:Object(r.jsx)(I,{})}),Object(r.jsx)("div",{className:"image",children:Object(r.jsx)("img",{src:t.url,alt:""})}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsxs)("p",{className:"rate",children:["\u20b9 ",t.Price]}),Object(r.jsx)("span",{className:"kilometer",children:t.Category}),Object(r.jsx)("p",{className:"name",children:t.Name})]}),Object(r.jsx)("div",{className:"date",children:Object(r.jsx)("span",{children:t.createdAt})})]})}))})]}),Object(r.jsxs)("div",{className:"recommendations",children:[Object(r.jsx)("div",{className:"heading",children:Object(r.jsx)("span",{children:"Fresh recommendations"})}),Object(r.jsx)("div",{className:"cards",children:Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"favorite",children:Object(r.jsx)(I,{})}),Object(r.jsx)("div",{className:"image",children:Object(r.jsx)("img",{src:"../../../Images/R15V3.jpg",alt:""})}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("p",{className:"rate",children:"\u20b9 250000"}),Object(r.jsx)("span",{className:"kilometer",children:"Two Wheeler"}),Object(r.jsx)("p",{className:"name",children:" YAMAHA R15V3"})]}),Object(r.jsx)("div",{className:"date",children:Object(r.jsx)("span",{children:"10/5/2021"})})]})})]})]})};c(51);var z=function(){return Object(r.jsxs)("div",{className:"footerParentDiv",children:[Object(r.jsxs)("div",{className:"content",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"heading",children:Object(r.jsx)("p",{children:"POPULAR LOCATIONS"})}),Object(r.jsx)("div",{className:"list",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"kolkata"}),Object(r.jsx)("li",{children:"Mumbai"}),Object(r.jsx)("li",{children:"Chennai"}),Object(r.jsx)("li",{children:"Pune"})]})})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"heading",children:Object(r.jsx)("p",{children:"ABOUT US"})}),Object(r.jsx)("div",{className:"list",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"About OLX Group"}),Object(r.jsx)("li",{children:"Careers"}),Object(r.jsx)("li",{children:"Contact Us"}),Object(r.jsx)("li",{children:"OLXPeople"})]})})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"heading",children:Object(r.jsx)("p",{children:"OLX"})}),Object(r.jsx)("div",{className:"list",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Help"}),Object(r.jsx)("li",{children:"Sitemap"}),Object(r.jsx)("li",{children:"Legal & Privacy information"})]})})]})]}),Object(r.jsxs)("div",{className:"footer",children:[Object(r.jsx)("p",{children:"Other Countries Pakistan - South Africa - Indonesia"}),Object(r.jsx)("p",{children:"Free Classifieds in India. \xa9 2006-2021 OLX"})]})]})};var k=function(e){return Object(r.jsxs)("div",{className:"homeParentDiv",children:[Object(r.jsx)(C,{}),Object(r.jsx)(A,{}),Object(r.jsx)(L,{}),Object(r.jsx)(z,{})]})};var U=function(){var e=Object(s.useContext)(b).setUser,t=Object(s.useContext)(d).firebase;return Object(s.useEffect)((function(){t.auth().onAuthStateChanged((function(t){if(t){e(t);var c=t.uid;console.log(c)}}))})),Object(r.jsx)("div",{children:Object(r.jsx)(D,{children:Object(r.jsxs)(x.a,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/",children:Object(r.jsx)(k,{})}),Object(r.jsx)(j.a,{path:"/signup",children:Object(r.jsx)(O,{})}),Object(r.jsx)(j.a,{path:"/login",children:Object(r.jsx)(m,{})}),Object(r.jsx)(j.a,{path:"/create",children:Object(r.jsx)(S,{})}),Object(r.jsx)(j.a,{path:"/view",children:Object(r.jsx)(M,{})})]})})})},V=c(33),E=(c(54),c(55),V.a.initializeApp({apiKey:"AIzaSyBGKGagFHETkGdO_QfI8uF5YyB5-WJCzjo",authDomain:"react-olx-clone-6102b.firebaseapp.com",projectId:"react-olx-clone-6102b",storageBucket:"react-olx-clone-6102b.appspot.com",messagingSenderId:"865656415187",appId:"1:865656415187:web:3e4d9ff2c786abe2334526",measurementId:"G-N04DJF79HV"}));n.a.render(Object(r.jsx)(d.Provider,{value:{firebase:E},children:Object(r.jsx)(o,{children:Object(r.jsx)(U,{})})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.a2c4ab7e.chunk.js.map