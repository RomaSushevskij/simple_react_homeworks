(this.webpackJsonpdz_proekt=this.webpackJsonpdz_proekt||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(25),s=a.n(r),o=(a(91),a(75)),i=a.n(o),l=a(4),d=a(16),j=a(29),u=a.n(j),_=a(0);var b=function(e){var t=e.avatar,a=e.name,n=e.message,c=e.time;return Object(d.a)(e,["avatar","name","message","time"]),Object(_.jsxs)("div",{className:u.a.messageWrapper,children:[Object(_.jsx)("div",{className:u.a.avatar,children:Object(_.jsx)("img",{src:t})}),Object(_.jsxs)("div",{className:u.a.messageBlock,children:[Object(_.jsx)("div",{className:u.a.name,children:a}),Object(_.jsx)("div",{className:u.a.message,children:n}),Object(_.jsx)("div",{className:u.a.time,children:c})]})]})},h=a(5),m=a.n(h),p={avatar:a.p+"static/media/userLogo.2e4b3717.png",name:"Some Name",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, mollitia repellendus. Amet, ex incidunt itaque labore necessitatibus nobis saepe vero.",time:(new Date).toLocaleTimeString().slice(0,5)};var O=function(){return Object(_.jsxs)("div",{className:m.a.homeWork_1,children:[Object(_.jsx)("div",{className:m.a.title,children:"homework 1"}),Object(_.jsx)("div",{className:m.a.stand,children:Object(_.jsx)(b,{avatar:p.avatar,name:p.name,message:p.message,time:p.time})})]})},x=a(12),v=a.n(x);var f=function(e){var t=v.a[e.affair.priority],a=Object(_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"3 -2 24 24",children:Object(_.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})});return Object(_.jsx)("div",{children:Object(_.jsxs)("div",{className:v.a.affairBlock,children:[Object(_.jsx)("div",{className:v.a.affairName,children:e.affair.name}),Object(_.jsx)("div",{className:"".concat(v.a.affairPriority," ").concat(t),children:e.affair.priority}),Object(_.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:a})]})})},k=a(134),g=a(137);var N=function(e){var t=e.data.map((function(t){return Object(_.jsx)(k.a,{timeout:400,classNames:v.a,children:Object(_.jsx)(f,{affair:t,deleteAffairCallback:e.deleteAffairCallback})},t._id)})),a=function(t){return e.filter===t&&"all"===t?"".concat(v.a.FilterTypeButtonAll," ").concat(v.a.active):e.filter===t&&"low"===t?"".concat(v.a.FilterTypeButtonLow," ").concat(v.a.active):e.filter===t&&"middle"===t?"".concat(v.a.FilterTypeButtonMiddle," ").concat(v.a.active):e.filter===t&&"high"===t?"".concat(v.a.FilterTypeButtonHigh," ").concat(v.a.active):v.a.FilterTypeButton};return Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:v.a.affairsBlock,children:Object(_.jsx)(g.a,{children:t})}),Object(_.jsxs)("div",{className:v.a.buttonBlock,children:[Object(_.jsx)("button",{className:a("all"),onClick:function(){return e.setFilter("all")},children:"All"}),Object(_.jsx)("button",{className:a("high"),onClick:function(){return e.setFilter("high")},children:"High"}),Object(_.jsx)("button",{className:a("middle"),onClick:function(){return e.setFilter("middle")},children:"Middle"}),Object(_.jsx)("button",{className:a("low"),onClick:function(){return e.setFilter("low")},children:"Low"})]})]})},W=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"Lorem ipsum dolor sit amet, consectetur.",priority:"middle"}];var S=function(){var e=Object(n.useState)(W),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("all"),s=Object(l.a)(r,2),o=s[0],i=s[1],d=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,o);return Object(_.jsxs)("div",{className:m.a.homeWork_2,children:[Object(_.jsx)("div",{className:m.a.title,children:"homework 2"}),Object(_.jsx)("div",{className:m.a.stand,children:Object(_.jsx)(N,{data:d,setFilter:i,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))},filter:o})})]})},B=a(11),y=a(23),C=a.n(y),A=function(e){var t=e.name,a=e.setNameCallback,n=e.onKeyPressSetName,c=e.addUser,r=e.error,s=e.totalUsers,o="".concat(C.a.usersInput," ").concat(C.a.error),i=Object(_.jsx)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1267.000000 1280.000000",preserveAspectRatio:"xMidYMid meet",children:Object(_.jsx)("g",{transform:"translate(0.000000,1280.000000) scale(0.100000,-0.100000)",children:Object(_.jsx)("path",{d:"M6150 12794 c-195 -19 -398 -76 -550 -155 -338 -176 -592 -520 -691\r\n-938 -54 -226 -52 -157 -56 -2058 l-4 -1763 -1712 0 c-1854 0 -1839 0 -2071\r\n-54 -403 -96 -739 -346 -906 -676 -114 -227 -170 -514 -157 -817 17 -398 156\r\n-724 421 -989 200 -199 415 -319 695 -385 204 -49 183 -49 2013 -49 l1717 0 4\r\n-1762 c4 -1902 2 -1833 56 -2059 100 -421 345 -751 688 -927 124 -64 249 -105\r\n402 -134 168 -32 494 -32 663 0 300 56 514 167 713 366 234 236 365 511 421\r\n886 16 105 18 270 21 1873 l4 1757 1717 0 c1888 0 1849 -1 2091 61 400 103\r\n715 350 886 698 151 305 196 741 115 1126 -83 402 -328 720 -697 907 -120 62\r\n-190 87 -332 123 -218 55 -211 55 -2068 55 l-1712 0 -4 1763 c-3 1564 -5 1774\r\n-20 1869 -59 391 -203 678 -463 928 -184 177 -393 280 -669 331 -108 20 -406\r\n33 -515 23z"})})});return Object(_.jsxs)("div",{className:C.a.inputWrapper,children:[Object(_.jsxs)("div",{className:C.a.inputAndButton,children:[Object(_.jsx)("input",{value:t,onBlur:a,onChange:a,onKeyPress:n,className:r?o:C.a.usersInput}),Object(_.jsx)("button",{className:C.a.addUserButton,onClick:c,disabled:!(!r||t),children:i}),Object(_.jsx)("div",{className:C.a.borderTotalUsers,children:Object(_.jsxs)("div",{className:C.a.totalUsers,children:[Object(_.jsx)("h3",{children:s}),Object(_.jsx)("p",{children:"users"})]})})]}),r&&Object(_.jsx)("div",{className:C.a.errorBlockMessage,children:r})]})},w=function(e){var t=e.users,a=e.addUserCallback,c=Object(n.useState)(""),r=Object(l.a)(c,2),s=r[0],o=r[1],i=Object(n.useState)(""),d=Object(l.a)(i,2),j=d[0],u=d[1],b=function(){a(s),o(""),alert("Hello ".concat(s,"!"))},h=t.length;return Object(_.jsx)(A,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(o(t),j&&u("")):(s&&o(""),u("Name required"))},addUser:b,error:j,totalUsers:h,onKeyPressSetName:function(e){"Enter"===e.key&&s&&b()}})},E=a(135);var H=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(_.jsxs)("div",{className:m.a.homeWork_3,children:[Object(_.jsx)("div",{className:m.a.title,children:"homework 3"}),Object(_.jsx)("div",{className:m.a.stand,children:Object(_.jsx)(w,{users:a,addUserCallback:function(e){c([{_id:Object(E.a)(),name:e}].concat(Object(B.a)(a)))}})})]})},I=a(10),T=a(30),F=a.n(T),P=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,o=e.spanClassName,i=e.name,l=(e.title,e.customStyle),j=Object(d.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","name","title","customStyle"]),u="".concat(F.a.error," ").concat(o||""),b="".concat(r?"".concat(F.a.errorInput," ").concat(F.a.superInput):F.a.superInput," ").concat(s);return Object(_.jsxs)("div",{className:l?"".concat(l," ").concat(F.a.inputWrapper):F.a.inputWrapper,children:[Object(_.jsx)("input",Object(I.a)({name:i,type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),c&&"Enter"===e.key&&c()},className:b},j)),r&&Object(_.jsx)("div",{className:u,children:r})]})},M=a(57),R=a.n(M),U=a(58),L=a.n(U),D=function(e){var t=e.red,a=e.className,n=Object(d.a)(e,["red","className"]),c="".concat(t?L.a.red:L.a.default," ").concat(a);return Object(_.jsx)("button",Object(I.a)({className:c},n))},J=a(40),q=a.n(J),z=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,c=(e.spanClassName,e.children),r=Object(d.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(q.a.checkbox," ").concat(n||"");return Object(_.jsxs)("label",{className:q.a.label,children:[Object(_.jsx)("input",Object(I.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:s},r)),Object(_.jsx)("span",{className:q.a.fakeFlag}),c&&Object(_.jsx)("span",{className:q.a.spanClassName,children:c})]})};var G=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],r=a?"":"Field is required",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},o=Object(n.useState)(!1),i=Object(l.a)(o,2),d=i[0],j=i[1];return Object(_.jsxs)("div",{className:m.a.homeWork_4,children:[Object(_.jsx)("div",{className:m.a.title,children:"homework 4"}),Object(_.jsx)("div",{className:m.a.stand,children:Object(_.jsxs)("div",{className:R.a.column,children:[Object(_.jsx)(P,{value:a,onChangeText:c,onEnter:s,error:r}),Object(_.jsx)(P,{className:R.a.green}),Object(_.jsx)(D,{children:"default"}),Object(_.jsx)(D,{red:!0,onClick:s,children:"delete "}),Object(_.jsx)(D,{disabled:!0,children:"disabled"}),Object(_.jsx)(z,{checked:d,onChangeChecked:j,children:"some text "}),Object(_.jsx)(z,{checked:d,onChange:function(e){return j(e.currentTarget.checked)}})]})})]})},K=a(21),V=a.n(K),X=a(27),Y=a(28),Q=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,c=e.spanProps,r=Object(d.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(n.useState)(!1),o=Object(l.a)(s,2),i=o[0],j=o[1],u=c||{},b=u.children,h=u.onDoubleClick,m=u.className,p=Object(d.a)(u,["children","onDoubleClick","className"]),O=function(e){j(!0),h&&h(e)},x="".concat(V.a.editSpan," ").concat(m);return Object(_.jsxs)("div",{className:V.a.editableSpanWrapper,children:[Object(_.jsx)(k.a,{in:i,timeout:400,classNames:V.a,unmountOnExit:!0,mountOnEnter:!0,children:Object(_.jsx)("div",{className:V.a.inputWrapper,children:Object(_.jsx)(P,Object(I.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),a&&a()},onDoubleClick:O,error:r.error,customStyle:V.a.inputStyle},r))})}),Object(_.jsx)(k.a,{in:!i,timeout:500,classNames:V.a,unmountOnExit:!0,mountOnEnter:!0,children:Object(_.jsx)("div",{className:V.a.spanWrapper,children:Object(_.jsxs)("span",Object(I.a)(Object(I.a)({onDoubleClick:O,className:x},p),{},{children:[b||r.value,Object(_.jsx)(X.a,{className:V.a.editPen,icon:Y.b})]}))})})]})};function Z(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function $(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}Z("test",{x:"A",y:1});$("test",{x:"",y:0});var ee=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(_.jsxs)("div",{className:m.a.homeWork_6,children:[Object(_.jsx)("div",{className:m.a.title,children:"homework 6"}),Object(_.jsxs)("div",{className:m.a.stand,children:[Object(_.jsx)(Q,{value:a,onChangeText:c,spanProps:{children:a?void 0:"enter text..."}}),Object(_.jsxs)("div",{className:V.a.buttonsBlock,children:[Object(_.jsx)(D,{onClick:function(){Z("editable-span-value",a)},children:"save"}),Object(_.jsx)(D,{onClick:function(){var e=$("editable-span-value","enter text...");c(e)},children:"restore"})]})]})]})};var te=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(O,{}),Object(_.jsx)(S,{}),Object(_.jsx)(H,{}),Object(_.jsx)(G,{}),Object(_.jsx)(ee,{})]})},ae=a(6),ne=a(50),ce=a.n(ne),re=function(e){var t=e.options,a=e.value,n=e.onChange,c=e.onChangeOption,r=Object(d.a)(e,["options","value","onChange","onChangeOption"]),s=t?t.map((function(e){return Object(_.jsx)("option",{value:e,children:e},e)})):[];return Object(_.jsx)("div",{tabIndex:0,className:ce.a.selectWrapper,children:Object(_.jsx)("div",{className:ce.a.selectValueWrapper,children:Object(_.jsx)("select",Object(I.a)(Object(I.a)({className:ce.a.selectValue,value:a,onChange:function(e){n&&n(e),c&&c(e.currentTarget.value)}},r),{},{children:s}))})})},se=a(76),oe=a.n(se),ie=function(e){e.type;var t=e.name,a=e.options,n=e.value,c=e.onChange,r=e.onChangeOption,s=(Object(d.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e),r&&r(e.currentTarget.value)}),o=a?a.map((function(e,a){return Object(_.jsxs)("label",{className:oe.a.lRadio,children:[Object(_.jsx)("input",{type:"radio",name:t,checked:e===n,value:e,onChange:s}),Object(_.jsx)("span",{children:e})]},t+"-"+a)})):[];return Object(_.jsx)(_.Fragment,{children:o})},le=["x","y","z"];var de=function(){var e=Object(n.useState)(le[1]),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(_.jsxs)("div",{className:m.a.homeWork_7,children:[Object(_.jsx)("div",{className:m.a.title,children:"homework 7"}),Object(_.jsxs)("div",{className:m.a.stand,children:[Object(_.jsx)("div",{children:Object(_.jsx)(re,{options:le,value:a,onChangeOption:c})}),Object(_.jsx)("div",{children:Object(_.jsx)(ie,{name:"radio",options:le,value:a,onChangeOption:c})})]})]})},je=function(e,t){switch(t.type){case"sort":var a=Object(B.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?a:a.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},ue=a(37),_e=a.n(ue),be=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var he=function(){var e=Object(n.useState)(be),t=Object(l.a)(e,2),a=t[0],c=t[1],r=a.map((function(e){return Object(_.jsx)("div",{children:Object(_.jsxs)("div",{className:_e.a.peopleRow,children:[Object(_.jsx)("div",{className:_e.a.peopleBlock,children:e.name}),Object(_.jsx)("div",{className:_e.a.agesBlock,children:e.age})]})},e._id)}));return Object(_.jsxs)("div",{className:m.a.homeWork_8,children:[Object(_.jsx)("div",{className:m.a.title,children:"homeworks 8"}),Object(_.jsxs)("div",{className:m.a.stand,children:[Object(_.jsx)("div",{className:_e.a.peopleTable,children:r}),Object(_.jsxs)("div",{className:_e.a.buttonsBlock,children:[Object(_.jsx)(D,{onClick:function(){return c(je(be,{type:"sort",payload:"up"}))},children:"sort up"}),Object(_.jsx)(D,{onClick:function(){return c(je(be,{type:"sort",payload:"down"}))},children:"sort down"}),Object(_.jsx)(D,{onClick:function(){return c(je(be,{type:"check",payload:18}))},children:"check 18"})]})]})]})},me=a(31),pe=a.n(me);var Oe=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(new Date),s=Object(l.a)(r,2),o=s[0],i=s[1],d=Object(n.useState)(!1),j=Object(l.a)(d,2),u=j[0],b=j[1],h=function(){clearInterval(a)},m=o.toLocaleTimeString(),p=o.toLocaleDateString();return Object(_.jsxs)("div",{className:pe.a.dateBlockWrapper,children:[Object(_.jsxs)("div",{className:pe.a.timeAndDate,children:[Object(_.jsx)("div",{className:pe.a.timeBlock,onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:m}),Object(_.jsx)(k.a,{in:u,timeout:400,classNames:pe.a,unmountOnExit:!0,mountOnEnter:!0,children:Object(_.jsx)("div",{className:pe.a.dateBlock,children:p})})]}),Object(_.jsxs)("div",{className:pe.a.buttonsBlock,children:[Object(_.jsx)(D,{onClick:function(){h();var e=window.setInterval((function(){i(new Date)}),1e3);c(e)},children:"start"}),Object(_.jsx)(D,{onClick:h,children:"stop"})]})]})};var xe,ve=function(){return Object(_.jsxs)("div",{className:m.a.homeWork_3,children:[Object(_.jsx)("div",{className:m.a.title,children:"homeworks 9"}),Object(_.jsx)("div",{className:m.a.stand,children:Object(_.jsx)(Oe,{})})]})},fe=a(77),ke=a.n(fe),ge=a(26);!function(e){e.IS_LOADING="HOMEWORKS/dz_10/IS_LOADING"}(xe||(xe={}));var Ne={isLoading:!1},We=function(e){return{type:xe.IS_LOADING,payload:{isLoading:e}}},Se=a(59),Be=a.n(Se),ye=function(e){var t=e.size,a=e.color;return Object(_.jsx)("div",{className:Be.a.preloaderBlock,children:Object(_.jsx)(X.a,{style:{fontSize:t,color:a},className:Be.a.preloaderIcon,icon:Y.c})})};var Ce=function(){var e=Object(ge.c)((function(e){return e.loading.isLoading})),t=Object(ge.b)();return Object(_.jsxs)("div",{className:m.a.homeWork_10,children:[Object(_.jsx)("div",{className:m.a.title,children:"homeworks 10"}),Object(_.jsx)("div",{className:"".concat(m.a.stand," ").concat(ke.a.stand),children:e?Object(_.jsx)(ye,{size:"20px",color:"#4E7FFE"}):Object(_.jsx)("div",{children:Object(_.jsx)(D,{onClick:function(){t(We(!0)),setTimeout((function(){t(We(!1))}),1e3),console.log("loading...")},children:"set loading..."})})})]})},Ae=a(60),we=a.n(Ae),Ee=a(138),He=a(133);var Ie,Te=function(){var e=Object(n.useState)(20),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([20,40]),s=Object(l.a)(r,2),o=s[0],i=s[1],d=function(e,t,a){if(!Array.isArray(t)){var n=Math.min(t,o[1]-5);c(n),i([n,o[1]])}if(Array.isArray(t))if(0===a){var r=Math.min(t[0],o[1]-5);i([r,o[1]]),c(r)}else{var s=Math.max(t[1],o[0]+5);i([o[0],s]),c(o[0])}};return Object(_.jsxs)("div",{className:m.a.homeWork_11,children:[Object(_.jsx)("div",{className:m.a.title,children:"homework 11"}),Object(_.jsxs)("div",{className:"".concat(m.a.stand," ").concat(we.a.stand),children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("span",{children:a}),Object(_.jsx)(Ee.a,{width:300,children:Object(_.jsx)(He.a,{value:a,"aria-label":"Default",valueLabelDisplay:"auto",onChange:d})})]}),Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{className:we.a.values,children:[Object(_.jsx)("span",{children:a}),Object(_.jsx)("span",{children:o[1]})]}),Object(_.jsx)(Ee.a,{width:300,children:Object(_.jsx)(He.a,{getAriaLabel:function(){return"Minimum distance"},value:o,onChange:d,valueLabelDisplay:"auto",disableSwap:!0})})]})]})]})},Fe=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(de,{}),Object(_.jsx)(he,{}),Object(_.jsx)(ve,{}),Object(_.jsx)(Ce,{}),Object(_.jsx)(Te,{})]})},Pe=a(42),Me=a.n(Pe);!function(e){e.CHANGE_THEME="HOMEWORKS/dz_12/CHANGE_THEME"}(Ie||(Ie={}));var Re={themeName:"some"},Ue=["some","dark","red"];var Le=function(){var e=Object(ge.c)((function(e){return e.theme.themeName})),t=Object(ge.b)();return Object(_.jsxs)("div",{className:"".concat(m.a.homeWork_12," ").concat(Me.a[e]),children:[Object(_.jsx)("div",{className:"".concat(m.a.title," ").concat(Me.a[e+"_text"]),children:"homework 12"}),Object(_.jsx)("div",{className:"".concat(m.a.stand," ").concat(Me.a.stand," ").concat(Me.a[e+"_stand"]),children:Object(_.jsx)(ie,{options:Ue,value:e,onChangeOption:function(e){t(function(e){return{type:Ie.CHANGE_THEME,payload:{themeName:e}}}(e))}})})]})},De=a(18),Je=a.n(De),qe=a(80),ze=a.n(qe),Ge=function(e){return ze.a.post("https://neko-cafe-back.herokuapp.com/auth/test",{success:e}).then((function(e){return{data:e.data,status:e.status}})).catch((function(e){return console.log(Object(I.a)({},e)),console.log(e.response?e.response.data.errorText:e.message),{data:e.response?e.response.data:e.message,status:e.response&&e.response.status}}))},Ke=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(l.a)(r,2),o=s[0],i=s[1],d=Object(n.useState)(""),j=Object(l.a)(d,2),u=j[0],b=j[1],h=Object(n.useState)(null),m=Object(l.a)(h,2),p=m[0],O=m[1],x=Object(n.useState)(!1),v=Object(l.a)(x,2),f=v[0],k=v[1];return Object(_.jsx)("div",{className:Je.a.requestWrapper,children:f?Object(_.jsx)(ye,{size:"30px",color:"#4E7FFE"}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:Je.a.controlBlock,children:[Object(_.jsx)(D,{onClick:function(){k(!0),Ge(a).then((function(e){var t=e.data,a=e.status;k(!1),404===a?(i(null===t||void 0===t?void 0:t.error),O(a)):(i(null===t||void 0===t?void 0:t.errorText),b(null===t||void 0===t?void 0:t.info),O(a))}))},children:"Request"}),Object(_.jsx)(z,{checked:a,onChange:function(e){c(e.currentTarget.checked)},children:"Success"})]}),p&&p>=200&&p<300?Object(_.jsxs)("div",{className:"".concat(Je.a.messagesBlock," ").concat(Je.a.messagesBlockSuccess),children:[Object(_.jsx)("div",{className:"".concat(Je.a.wrapperIcon," ").concat(Je.a.wrapperIconSuccess),children:Object(_.jsx)(X.a,{icon:Y.a,className:Je.a.icon})}),Object(_.jsx)("p",{style:{fontWeight:"bold"},children:o}),Object(_.jsx)("p",{children:u})]}):p&&p>=300?Object(_.jsxs)("div",{className:"".concat(Je.a.messagesBlock," ").concat(Je.a.messagesBlockError),children:[Object(_.jsx)("div",{className:"".concat(Je.a.wrapperIcon," ").concat(Je.a.wrapperIconError),children:Object(_.jsx)(X.a,{icon:Y.d,className:Je.a.icon})}),Object(_.jsx)("p",{style:{fontWeight:"bold"},children:o}),Object(_.jsx)("p",{children:u})]}):null]})})};var Ve=function(){return Object(_.jsxs)("div",{className:m.a.homeWork_13,children:[Object(_.jsx)("div",{className:m.a.title,children:"homework 13"}),Object(_.jsx)("div",{className:"".concat(m.a.stand," ").concat(Je.a.stand),children:Object(_.jsx)(Ke,{})})]})},Xe=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(Le,{}),Object(_.jsx)(Ve,{})]})},Ye=a(43),Qe=a.n(Ye),Ze=a(24),$e=a.p+"static/media/logo.9594cba7.webp";var et=function(){return Object(_.jsxs)("div",{className:Qe.a.notfound,children:[Object(_.jsx)("div",{className:Qe.a.logo,children:Object(_.jsx)("div",{className:Qe.a.logoImg,children:Object(_.jsx)("img",{src:$e,alt:""})})}),Object(_.jsx)("div",{className:Qe.a.notfound_404}),Object(_.jsx)("h1",{children:"404"}),Object(_.jsx)("h2",{children:"Oops! Page Not Be Found"}),Object(_.jsx)("p",{children:"Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable"}),Object(_.jsx)(Ze.b,{to:tt.PRE_JUNIOR,children:"Back to Pre-Junior Page"})]})},tt={PRE_JUNIOR:"/pre-junior",JUNIOR:"/junior",JUNIOR_PLUS:"/junior-plus"};var at=function(){return Object(_.jsx)("div",{children:Object(_.jsxs)(ae.d,{children:[Object(_.jsx)(ae.b,{path:"/",element:Object(_.jsx)(ae.a,{to:tt.PRE_JUNIOR})}),Object(_.jsx)(ae.b,{path:tt.PRE_JUNIOR,element:Object(_.jsx)(te,{})}),Object(_.jsx)(ae.b,{path:tt.JUNIOR,element:Object(_.jsx)(Fe,{})}),Object(_.jsx)(ae.b,{path:tt.JUNIOR_PLUS,element:Object(_.jsx)(Xe,{})}),Object(_.jsx)(ae.b,{path:"*",element:Object(_.jsx)(et,{})})]})})},nt=a(61),ct=a.n(nt);var rt=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(_.jsxs)("div",{tabIndex:0,onBlur:function(){return c(!1)},className:ct.a.level,children:[Object(_.jsx)(D,{onClick:function(){return c(!a)},children:"Select level"}),Object(_.jsx)(k.a,{in:a,classNames:ct.a,timeout:600,unmountOnExit:!0,mountOnEnter:!0,children:Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:Object(_.jsx)(Ze.b,{to:tt.PRE_JUNIOR,children:"Pre-Junior"})}),Object(_.jsx)("li",{children:Object(_.jsx)(Ze.b,{to:tt.JUNIOR,children:"Junior"})}),Object(_.jsx)("li",{children:Object(_.jsx)(Ze.b,{to:tt.JUNIOR_PLUS,children:"Junior-Plus"})})]})})]})};var st=function(){return Object(_.jsx)("div",{children:Object(_.jsxs)(Ze.a,{children:[Object(_.jsx)(rt,{}),Object(_.jsx)(at,{})]})})};var ot=function(){return Object(_.jsx)("div",{className:i.a.App,children:Object(_.jsxs)("div",{className:m.a.header,children:[Object(_.jsx)("div",{className:"".concat(m.a.title," ").concat(m.a.header),children:"react homeworks"}),Object(_.jsx)(st,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var it=a(62),lt=Object(it.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe.IS_LOADING:return Object(I.a)(Object(I.a)({},e),t.payload);default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ie.CHANGE_THEME:return Object(I.a)(Object(I.a)({},e),t.payload);default:return e}}}),dt=Object(it.b)(lt),jt=dt;window.store=dt,s.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(ge.a,{store:jt,children:Object(_.jsx)(ot,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},12:function(e,t,a){e.exports={affairsBlock:"Affairs_affairsBlock__2yMFJ",affairBlock:"Affairs_affairBlock__2xWDH",affairName:"Affairs_affairName___CIX-",affairPriority:"Affairs_affairPriority__11l3B",low:"Affairs_low__2qj5E",high:"Affairs_high__2VeWL",middle:"Affairs_middle__1DTpf",FilterTypeButton:"Affairs_FilterTypeButton__1FA_n",buttonBlock:"Affairs_buttonBlock__4Mr7g",FilterTypeButtonAll:"Affairs_FilterTypeButtonAll__3ftME",FilterTypeButtonLow:"Affairs_FilterTypeButtonLow__3QYMC",FilterTypeButtonMiddle:"Affairs_FilterTypeButtonMiddle__3ba9K",FilterTypeButtonHigh:"Affairs_FilterTypeButtonHigh__2MYCX",active:"Affairs_active__2AZMg",enter:"Affairs_enter__2EZns",enterActive:"Affairs_enterActive__3jxqQ",exit:"Affairs_exit__3sEii",exitActive:"Affairs_exitActive__1vJe-"}},18:function(e,t,a){e.exports={controlBlock:"HW13_controlBlock__1tz7N",stand:"HW13_stand__2yBUP",messagesBlock:"HW13_messagesBlock__2DJic",messagesBlockSuccess:"HW13_messagesBlockSuccess__2KX9T",messagesBlockError:"HW13_messagesBlockError__2r0K_",wrapperIcon:"HW13_wrapperIcon__2lPln",wrapperIconSuccess:"HW13_wrapperIconSuccess__23nad",wrapperIconError:"HW13_wrapperIconError__1Q010",icon:"HW13_icon__2-DoY"}},21:function(e,t,a){e.exports={editableSpanWrapper:"SuperEditableSpan_editableSpanWrapper__9CSTa",inputWrapper:"SuperEditableSpan_inputWrapper__2-nuX",spanWrapper:"SuperEditableSpan_spanWrapper__2NEKS",editSpan:"SuperEditableSpan_editSpan__32Weg",buttonsBlock:"SuperEditableSpan_buttonsBlock__3g843",editPen:"SuperEditableSpan_editPen__deUUX",enter:"SuperEditableSpan_enter__3I6to",enterActive:"SuperEditableSpan_enterActive__3AZ2h",exit:"SuperEditableSpan_exit__28HD0",exitActive:"SuperEditableSpan_exitActive__3arE4"}},23:function(e,t,a){e.exports={inputWrapper:"Greeting_inputWrapper__3Odir",inputAndButton:"Greeting_inputAndButton__D5Jmh",usersInput:"Greeting_usersInput__3A5dW",error:"Greeting_error__qhL8I",errorBlockMessage:"Greeting_errorBlockMessage__KDXsF",addUserButton:"Greeting_addUserButton__3Ur08",borderTotalUsers:"Greeting_borderTotalUsers__2wc6g",totalUsers:"Greeting_totalUsers__r2PBG"}},29:function(e,t,a){e.exports={messageWrapper:"Message_messageWrapper__3mERz",messageBlock:"Message_messageBlock__1r6Fm",name:"Message_name__3_10D",message:"Message_message__1xvgy",time:"Message_time__olr25",avatar:"Message_avatar__3WCxQ"}},30:function(e,t,a){e.exports={inputWrapper:"SuperInputText_inputWrapper__35cp6",superInput:"SuperInputText_superInput__gSi80",errorInput:"SuperInputText_errorInput__jZsqE",error:"SuperInputText_error__3-Pxy"}},31:function(e,t,a){e.exports={dateBlockWrapper:"Clock_dateBlockWrapper__2r2fQ",timeAndDate:"Clock_timeAndDate__1JL8A",dateBlock:"Clock_dateBlock__23qtP",timeBlock:"Clock_timeBlock__3b1kq",buttonsBlock:"Clock_buttonsBlock__2BYt3",enter:"Clock_enter__UBi2y",enterActive:"Clock_enterActive__1n40P",exit:"Clock_exit__2auks",exitActive:"Clock_exitActive__31zkj"}},37:function(e,t,a){e.exports={peopleTable:"HW8_peopleTable__1ScoC",peopleRow:"HW8_peopleRow__2Vhr5",buttonsBlock:"HW8_buttonsBlock__2-SY7",enter:"HW8_enter__2_JR8",enterActive:"HW8_enterActive__e1h3i",exit:"HW8_exit__20ahq",exitActive:"HW8_exitActive__2DB8R"}},40:function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__2Ilqe",label:"SuperCheckbox_label__28YY-",fakeFlag:"SuperCheckbox_fakeFlag__-3EAN"}},42:function(e,t,a){e.exports={stand:"HW12_stand__2HPXK",dark_stand:"HW12_dark_stand__3EGST",red_stand:"HW12_red_stand__3UybD",dark:"HW12_dark__1yw89",dark_text:"HW12_dark_text__2jLQZ",red:"HW12_red__dw6TJ",red_text:"HW12_red_text__hCsb3"}},43:function(e,t,a){e.exports={notfound:"Error404_notfound__3NQZq",logo:"Error404_logo__1Hmc3",logoImg:"Error404_logoImg__1S3nA"}},5:function(e,t,a){e.exports={homeWork_1:"HW_homeWork_1__H5Lqy",homeWork_2:"HW_homeWork_2__371Y7",homeWork_3:"HW_homeWork_3__3Bqaw",homeWork_4:"HW_homeWork_4___418N",homeWork_6:"HW_homeWork_6__V0A5w",homeWork_7:"HW_homeWork_7__1pqyV",homeWork_8:"HW_homeWork_8__3sATy",homeWork_9:"HW_homeWork_9__1Ed0R",homeWork_10:"HW_homeWork_10__18lNJ",homeWork_11:"HW_homeWork_11__PLTNv",homeWork_12:"HW_homeWork_12__3H9Mz",homeWork_13:"HW_homeWork_13__117te",stand:"HW_stand__vpWpA",title:"HW_title__3Ss0k",header:"HW_header__3-LV-"}},50:function(e,t,a){e.exports={selectWrapper:"SuperSelect_selectWrapper__11Ie8",selectValue:"SuperSelect_selectValue__3_eij",selectValueWrapper:"SuperSelect_selectValueWrapper__1mij3"}},57:function(e,t,a){e.exports={green:"HW4_green__3QNvu",column:"HW4_column__h2TDi",testSpanError:"HW4_testSpanError__3vEEc"}},58:function(e,t,a){e.exports={default:"SuperButton_default__WJLRF",red:"SuperButton_red__3SfXn"}},59:function(e,t,a){e.exports={preloaderBlock:"Preloader_preloaderBlock__3hqvI",preloaderIcon:"Preloader_preloaderIcon__2kYb9","rotate-center":"Preloader_rotate-center__1zkEt"}},60:function(e,t,a){e.exports={stand:"HW11_stand__14xJ7",values:"HW11_values__RNzFs"}},61:function(e,t,a){e.exports={level:"Header_level__3pewA",enter:"Header_enter__25Oov",enterActive:"Header_enterActive__2uq3B",exit:"Header_exit__1R42n",exitActive:"Header_exitActive__3h87h"}},75:function(e,t,a){},76:function(e,t,a){e.exports={lRadio:"SuperRadio_lRadio__1XAkB"}},77:function(e,t,a){e.exports={stand:"HW10_stand__2XguC"}},91:function(e,t,a){}},[[118,1,2]]]);
//# sourceMappingURL=main.3990027c.chunk.js.map