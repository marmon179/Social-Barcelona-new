(this["webpackJsonpmy-app-social"]=this["webpackJsonpmy-app-social"]||[]).push([[0],{125:function(e,t,a){e.exports={message:"Message_message__3jJmh"}},129:function(e,t,a){e.exports={wrapper:"Preloader_wrapper__2ZuKK"}},15:function(e,t,a){e.exports={navbar:"Navbar_navbar__14eAf",list:"Navbar_list__9BMCG",link:"Navbar_link__2N6MG",activeLink:"Navbar_activeLink__3gIL1"}},160:function(e,t,a){},28:function(e,t,a){e.exports={wrapper:"Dialogs_wrapper__i2TJU",wrapperImage:"Dialogs_wrapperImage__31RUS",wrapperWrapper:"Dialogs_wrapperWrapper__3N0Am",dialogsWrapper:"Dialogs_dialogsWrapper__3NLDW",wrapperTextarea:"Dialogs_wrapperTextarea__1l0_e",button:"Dialogs_button__3I2uW"}},282:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(62),i=a.n(r),o=(a(160),a(20)),c=a(21),u=a(23),l=a(22),d=a(84),p=a.n(d),j=a(11),b=a(15),g=a.n(b),f=a(0),O=function(){return Object(f.jsx)("nav",{className:g.a.navbar,children:Object(f.jsxs)("ul",{className:g.a.list,children:[Object(f.jsx)("li",{children:Object(f.jsx)(j.b,{exact:!0,to:"/login",className:g.a.link,activeClassName:g.a.activeLink,children:"Login"})}),Object(f.jsx)("li",{children:Object(f.jsx)(j.b,{to:"/profile",className:g.a.link,activeClassName:g.a.activeLink,children:"Profile"})}),Object(f.jsx)("li",{children:Object(f.jsx)(j.b,{to:"/dialogs",className:g.a.link,activeClassName:g.a.activeLink,children:"Dialogs"})}),Object(f.jsx)("li",{children:Object(f.jsx)(j.b,{to:"/settings",className:g.a.link,activeClassName:g.a.activeLink,children:"Settings"})}),Object(f.jsx)("li",{children:Object(f.jsx)(j.b,{to:"/users",className:g.a.link,activeClassName:g.a.activeLink,children:"Users"})})]})})},h=a(10),m=a(40),_=a(4),x={dialogs:[{id:1,name:"Sascha"},{id:2,name:"Maksim"},{id:3,name:"Katia"}],messages:[{id:1,message:"Hello"},{id:2,message:"Hi!"},{id:3,message:"hello"}]},v=a(28),w=a.n(v),N=a(87),P=a.n(N),S=function(e){var t="/dialogs/"+e.id;return Object(f.jsx)("div",{children:Object(f.jsx)(j.b,{to:t,className:P.a.dialogName,activeClassName:P.a.activeLink,children:e.name})})},I=a(125),C=a.n(I),y=function(e){return Object(f.jsx)("div",{className:C.a.message,children:e.message})},D=a(122),L=a(123),T=a(42),E=a(88),k=a.n(E),A=function(e){e.input;var t=e.meta,a=Object(T.a)(e,["input","meta"]),n=t.touched&&t.error;return Object(f.jsxs)("div",{className:k.a.formControl+" "+(n?k.a.error:""),children:[Object(f.jsx)("div",{children:a.children}),n&&Object(f.jsx)("span",{children:t.error})]})},U=function(e){var t=e.input,a=(e.meta,Object(T.a)(e,["input","meta"]));return Object(f.jsx)(A,Object(_.a)(Object(_.a)({},e),{},{children:Object(f.jsx)("textarea",Object(_.a)(Object(_.a)({},t),a))}))},M=function(e){var t=e.input,a=(e.meta,Object(T.a)(e,["input","meta"]));return Object(f.jsx)(A,Object(_.a)(Object(_.a)({},e),{},{children:Object(f.jsx)("input",Object(_.a)(Object(_.a)({},t),a))}))},F=function(e){if(!e)return"Field is required"},G=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},z=G(50),B=Object(L.a)({form:"dialogAddMessageForm"})((function(e){return Object(f.jsxs)("form",{onSubmit:e.handleSubmit,className:w.a.wrapperTextarea,children:[Object(f.jsx)("div",{children:Object(f.jsx)(D.a,{component:U,name:"newMessageBody",placeholder:"Enter your message",validate:[F,z]})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{className:w.a.button,children:"Add post"})})]})})),W=a(9),R=function(e){return{isAuth:e.auth.isAuth}};function Y(e){return Object(W.b)(R)((function(t){var a=t.isAuth,n=Object(T.a)(t,["isAuth"]);return a?Object(f.jsx)(e,Object(_.a)({},n)):Object(f.jsx)(h.a,{to:"/login"})}))}var H=a(8),Z=function(e){return e.dialogsPage.dialogs},J=function(e){return e.dialogsPage.messages},V=Object(W.b)((function(e){return{dialogs:Z(e),messages:J(e)}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD_POST_DIALOG",newMessageBody:e}}(t))}}})),K=Object(H.d)(V,Y)((function(e){var t=e.dialogs.map((function(e){return Object(f.jsx)(S,{name:e.name,id:e.id},e.id)})),a=e.messages.map((function(e){return Object(f.jsx)("div",{children:Object(f.jsx)(y,{message:e.message,id:e.id},e.id)})}));return Object(f.jsxs)("div",{className:w.a.wrapper,children:[Object(f.jsx)("div",{className:w.a.wrapperImage,children:Object(f.jsx)("img",{src:"https://www.fcbarcelona.com/photo-resources/2020/11/02/d2c1d3ab-437b-400a-8df2-3e420b9f0799/imatge_avatars02.jpg?width=1024&height=448",alt:"Barca"})}),Object(f.jsxs)("div",{className:w.a.wrapperWrapper,children:[Object(f.jsxs)("div",{className:w.a.dialogsWrapper,children:[Object(f.jsx)("div",{children:t}),Object(f.jsx)("div",{children:a})]}),Object(f.jsx)(B,{onSubmit:function(t){e.addPost(t.newMessageBody)}})]})]})})),Q=a(128),X=a.n(Q).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9cd2c268-195b-4b42-abcf-5a1644af026e"}}),q=function(e,t){return X.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},$=function(e){return console.warn("Obsolete method.Please profileAPI object."),ee.getUserProfile(e)},ee={getUserProfile:function(e){return X.get("profile/"+e)},getStatus:function(e){return X.get("profile/status/"+e)},updateStatus:function(e){return X.put("profile/status/",{status:e})}},te=function(){return X.get("auth/me")},ae=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return X.post("auth/login",{email:e,password:t,rememberMe:a})},ne=function(){return X.delete("auth/login")},se={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},re=function(e){return{type:"FOLLOW",userID:e}},ie=function(e){return{type:"UNFOLLOW",userID:e}},oe=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},ce=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},ue=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userID:t}},le=a(29),de=a.n(le),pe=a.p+"static/media/user-male.3759889a.png",je=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),a=[],n=1;n<=t;n++)a.push(n);return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:a.map((function(t){return Object(f.jsx)("span",{className:e.currentPage===t?de.a.selectedPage:"",onClick:function(){e.onPageChanged(t)},children:t})}))}),Object(f.jsx)("div",{className:de.a.wrapper,children:e.users.users.map((function(t){return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{children:[Object(f.jsx)(j.b,{to:"/profile/"+t.id,children:Object(f.jsx)("img",{src:null!=t.photos.small?t.photos.small:pe,alt:"image",className:de.a.userPhoto})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:de.a.name,children:t.name}),Object(f.jsx)("div",{className:de.a.status,children:t.status})]}),t.followed?Object(f.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),className:de.a.button,onClick:function(){e.unfollow(t.id)},children:"UnFollow"}):Object(f.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),className:de.a.button,onClick:function(){e.follow(t.id)},children:"Follow"})]})},t.id)}))})]})},be=a.p+"static/media/Ball-1s-200px.0c804b5d.svg",ge=a(129),fe=a.n(ge),Oe=function(e){return Object(f.jsx)("div",{className:fe.a.wrapper,children:Object(f.jsx)("img",{src:be})})},he=function(e){return e.userPage.users},me=function(e){return e.userPage.pageSize},_e=function(e){return e.userPage.totalUsersCount},xe=function(e){return e.userPage.currentPage},ve=function(e){return e.userPage.isFetching},we=function(e){return e.userPage.followingInProgress},Ne=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[this.props.isFetching?Object(f.jsx)(Oe,{}):null,Object(f.jsx)(je,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress})]})}}]),a}(s.a.Component),Pe=Object(W.b)((function(e){return{users:he(e),pageSize:me(e),totalUsersCount:_e(e),currentPage:xe(e),isFetching:ve(e),followingInProgress:we(e)}}),{follow:re,unfollow:ie,setCurrentPage:oe,toggleFollowingProgress:ue,getUsers:function(e,t){return function(a){a(ce(!0)),q(e,t).then((function(t){a(ce(!1)),a(oe(e)),a({type:"SET_USERS",users:t.items}),a({type:"SET_TOTAL_USERS_COUNT",count:t.totalCount})}))}}}),Se=Object(H.d)(Pe)(Ne),Ie=a(35),Ce={userId:null,email:null,login:null,isAuth:!1},ye=function(e,t,a,n){return{type:"SET-USER-DATA",payload:{userID:e,email:t,login:a,isAuth:n}}},De=function(){return function(e){return te().then((function(t){if(0===t.data.resultCode){var a=t.data.data,n=a.id,s=a.login,r=a.email;e(ye(n,r,s,!0))}}))}},Le=a(43),Te=a.n(Le),Ee=function(e){return e.auth.isAuth},ke=function(e){return e.auth.userId},Ae=Object(L.a)({form:"login"})((function(e){return Object(f.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(f.jsx)("div",{children:Object(f.jsx)(D.a,{placeholder:"Email",name:"email",component:M,validate:[F],className:Te.a.superInput})}),Object(f.jsx)("div",{children:Object(f.jsx)(D.a,{placeholder:"Password",name:"password",type:"password",component:M,validate:[F],className:Te.a.superInput})}),Object(f.jsx)("div",{children:Object(f.jsx)(D.a,{className:Te.a.checkbox,type:"checkbox",name:"rememberMe",component:M})}),e.error&&Object(f.jsx)("div",{className:Te.a.formSummaryError,children:e.error}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{className:Te.a.button,children:"Login"})})]})})),Ue=Object(W.b)((function(e){return{isAuth:Ee(e)}}),{login:function(e,t,a){return function(n){ae(e,t,a).then((function(e){if(0===e.data.resultCode)n(De());else{var t=e.data.messages.length>0?e.data.messages[0]:"Some error";n(Object(Ie.a)("login",{_error:t}))}}))}}})((function(e){return e.isAuth?Object(f.jsx)(h.a,{to:"/profile"}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Login"}),Object(f.jsx)(Ae,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Me=a(66),Fe=a.n(Me),Ge=a(41),ze=a.n(Ge),Be=a(53),We=a.n(Be),Re=function(e){return Object(f.jsxs)("div",{className:We.a.postItem,children:[Object(f.jsx)("div",{className:We.a.avatar,children:Object(f.jsx)("img",{src:"https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg",alt:"avatar"})}),Object(f.jsx)("div",{className:We.a.angle}),Object(f.jsx)("div",{className:We.a.postMessage,children:e.message})]})},Ye=G(10),He=Object(L.a)({form:"ProfileAddNewPostForm"})((function(e){return Object(f.jsxs)("form",{onSubmit:e.handleSubmit,className:ze.a.wrapperTextarea,children:[Object(f.jsx)("div",{children:Object(f.jsx)(D.a,{component:U,name:"newMessageBody",placeholder:"Enter your message",validate:[F,Ye]})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{className:ze.a.button,children:"Add post"})})]})})),Ze={dialogsData:[{id:1,message:"Hello people!!!!"},{id:2,message:"How are you?"},{id:3,message:"Very nice!!!"}],profile:null,status:""},Je=function(e){return{type:"SET-STATUS",status:e}},Ve=Object(W.b)((function(e){return{dialogsData:e.profilePage.dialogsData,profile:e.profilePage.profile,status:e.profilePage.status}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newMessageBody:e}}(t))}}}))((function(e){var t=e.dialogsData.map((function(e){return Object(f.jsx)(Re,{message:e.message,id:e.id},e.id)}));return Object(f.jsxs)("div",{className:ze.a.postList,children:[Object(f.jsx)("div",{className:ze.a.wrapperDialogs,children:t}),Object(f.jsx)(He,{onSubmit:function(t){e.addPost(t.newMessageBody)}})]})})),Ke=a(33),Qe=a.n(Ke),Xe=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[!this.state.editMode&&Object(f.jsx)("div",{children:Object(f.jsx)("span",{onClick:this.activateEditMode,children:this.props.status||"----"})}),this.state.editMode&&Object(f.jsx)("div",{children:Object(f.jsx)("input",{onChange:this.onStatusChange,onBlur:this.deactivateEditMode,value:this.state.status,autoFocus:!0})})]})}}]),a}(s.a.Component),qe=function(e){return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:Qe.a.wrapperInfo,children:[Object(f.jsx)("div",{className:Qe.a.imgAvatar,children:Object(f.jsx)("img",{src:e.profile.photos.large,alt:"img"})}),Object(f.jsxs)("div",{className:Qe.a.wrapperStatus,children:[Object(f.jsxs)("div",{className:Qe.a.wrapperTextInfo,children:[Object(f.jsx)("div",{className:Qe.a.name,children:e.profile.fullName}),Object(f.jsx)("h4",{children:e.profile.aboutMe})]}),Object(f.jsx)("div",{className:Qe.a.status,children:Object(f.jsx)(Xe,{status:e.status,updateStatus:e.updateStatus})})]})]})})},$e=function(e){if(!e.profile)return Object(f.jsx)(Oe,{});return Object(f.jsxs)("div",{className:Fe.a.wrapper,children:[Object(f.jsx)("div",{className:Fe.a.wrapperImg,children:Object(f.jsx)("img",{src:"https://store.fcbarcelona.com/medias/Secciones-Desktop-copy.jpg?context=bWFzdGVyfHJvb3R8NDUyNDkyfGltYWdlL2pwZWd8aDQzL2g1OC84ODc4MzQwMDQ2ODc4L1NlY2Npb25lc19EZXNrdG9wIGNvcHkuanBnfGQwOWY1YzQ2OWYxZGY2ZDUyMzcxMThkMjgwNGNlNDBjZWM1YTc5ZDJlYzFkN2Y3ODFiYWI0NzEwNWVjMWI4MWU",alt:"Barca"})}),Object(f.jsx)(qe,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(f.jsx)("div",{className:Fe.a.wrapperDialogs,children:Object(f.jsx)(Ve,{})})]})},et=function(e){return e.profilePage.profile},tt=function(e){return e.profilePage.status},at=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),null!=e&&this.props.getUserProfile(e),null!=e&&this.props.getStatus(e)}},{key:"render",value:function(){return Object(f.jsx)($e,Object(_.a)(Object(_.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(s.a.Component),nt=Object(W.b)((function(e){return{profile:et(e),status:tt(e),authorizedUserId:ke(e),isAuth:Ee(e)}}),{getUserProfile:function(e){return function(t){$(e).then((function(e){t({type:"SET_USER_PROFILE",profile:e.data})}))}},getStatus:function(e){return function(t){ee.getStatus(e).then((function(e){t(Je(e.data))}))}},updateStatus:function(e){return function(t){ee.updateStatus(e).then((function(a){0===a.data.resultCode&&t(Je(e))}))}}}),st=Object(H.d)(nt,h.f,Y)(at),rt=a(44),it=a.n(rt),ot=function(e){return Object(f.jsxs)("div",{className:it.a.header,children:[Object(f.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",alt:"Logo"}),Object(f.jsx)("div",{className:it.a.loginBlock,children:e.isAuth?Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:it.a.login,children:e.login}),Object(f.jsx)("button",{className:it.a.button,onClick:e.logout,children:"Log out"})]}):Object(f.jsx)(j.b,{to:"/login",className:it.a.login,children:"Login"})})]})},ct=function(e){return e.auth.isAuth},ut=function(e){return e.auth.login},lt=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(f.jsx)(ot,Object(_.a)({},this.props))}}]),a}(s.a.Component),dt=Object(W.b)((function(e){return{isAuth:ct(e),login:ut(e)}}),{logout:function(){return function(e){ne().then((function(t){0===t.data.resultCode&&e(ye(null,null,null,!1))}))}}})(lt),pt={initialized:!1},jt=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(f.jsxs)("div",{className:p.a.wrapper,children:[Object(f.jsx)(dt,{}),Object(f.jsx)(O,{}),Object(f.jsxs)("div",{className:p.a.appWrapperContent,children:[Object(f.jsx)(h.b,{path:"/profile/:userId?",render:function(){return Object(f.jsx)(st,{})}}),Object(f.jsx)(h.b,{path:"/dialogs",render:function(){return Object(f.jsx)(K,{})}}),Object(f.jsx)(h.b,{path:"/users",render:function(){return Object(f.jsx)(Se,{})}}),Object(f.jsx)(h.b,{path:"/login",render:function(){return Object(f.jsx)(Ue,{})}})]})]}):Object(f.jsx)(Oe,{})}}]),a}(s.a.Component),bt=Object(W.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(De());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}),gt=Object(H.d)(h.f,bt)(jt),ft=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,283)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))},Ot=a(130),ht=a(124),mt=Object(H.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:4,message:t.newMessageBody};return Object(_.a)(Object(_.a)({},e),{},{dialogsData:[].concat(Object(m.a)(e.dialogsData),[a])});case"SET-STATUS":return Object(_.a)(Object(_.a)({},e),{},{status:t.status});case"SET_USER_PROFILE":return Object(_.a)(Object(_.a)({},e),{},{profile:t.profile});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST_DIALOG":var a={id:4,message:t.newMessageBody};return Object(_.a)(Object(_.a)({},e),{},{messages:[].concat(Object(m.a)(e.messages),[a])})}return e},userPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(_.a)(Object(_.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(_.a)(Object(_.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(_.a)(Object(_.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(_.a)(Object(_.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(_.a)(Object(_.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(_.a)(Object(_.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(_.a)(Object(_.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(_.a)(Object(_.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(_.a)(Object(_.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(m.a)(e.followingInProgress),[t.userID]):e.followingInProgress.filter((function(e){return e!=t.userID}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(_.a)(Object(_.a)({},e),t.payload);default:return e}},form:ht.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{initialized:!0});default:return e}}}),_t=Object(H.e)(mt,Object(H.a)(Ot.a));i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(j.a,{children:Object(f.jsxs)(W.a,{store:_t,children:[Object(f.jsx)(gt,{}),","]})})}),document.getElementById("root")),ft()},29:function(e,t,a){e.exports={userPhoto:"Users_userPhoto__233Xx",name:"Users_name__1hCad",status:"Users_status__2s9Ux",button:"Users_button__1Z6Yu"}},33:function(e,t,a){e.exports={wrapperInfo:"ProfileInfo_wrapperInfo___Xmfc",wrapperTextInfo:"ProfileInfo_wrapperTextInfo__22zT5",imgAvatar:"ProfileInfo_imgAvatar__15bpd",status:"ProfileInfo_status__14Bi-",name:"ProfileInfo_name__iI2qA"}},41:function(e,t,a){e.exports={postList:"Posts_postList__1J7dT",wrapperDialogs:"Posts_wrapperDialogs__115nu",wrapperTextarea:"Posts_wrapperTextarea__3bl8m",button:"Posts_button__2MiVu"}},43:function(e,t,a){e.exports={checkbox:"Login_checkbox__otMMC",superInput:"Login_superInput__3nBB4",button:"Login_button__2fCTi"}},44:function(e,t,a){e.exports={header:"Header_header__3Fm84",loginBlock:"Header_loginBlock__1OZ0X",login:"Header_login__31mpt",button:"Header_button__2KLTW"}},53:function(e,t,a){e.exports={postItem:"Post_postItem__ukIZz",avatar:"Post_avatar__2zfO_",postMessage:"Post_postMessage__25xok",angle:"Post_angle__11NYP"}},66:function(e,t,a){e.exports={wrapper:"Profile_wrapper__1wbHz",wrapperImg:"Profile_wrapperImg__1o1XL",wrapperDialogs:"Profile_wrapperDialogs__1Rflb"}},84:function(e,t,a){e.exports={wrapper:"App_wrapper__2V1M4"}},87:function(e,t,a){e.exports={dialogName:"DialogItem_dialogName__2VBZG",activeLink:"DialogItem_activeLink__3IK2h"}},88:function(e,t,a){e.exports={formControl:"FormsControls_formControl__zLuG8",error:"FormsControls_error__2GwQV",formSummaryError:"FormsControls_formSummaryError__3iDYp"}}},[[282,1,2]]]);
//# sourceMappingURL=main.a3d0f452.chunk.js.map