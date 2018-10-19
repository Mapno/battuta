(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t){e.exports=function(){return new Promise(function(e,t){var a=window.navigator.geolocation;a||t("No geolocation available"),a.getCurrentPosition(function(t){var a={lat:t.coords.latitude,lng:t.coords.longitude};e(a)},t)})}},121:function(e,t,a){e.exports=a(288)},126:function(e,t,a){},128:function(e,t,a){},288:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),i=(a(126),a(5)),s=a(6),o=a(9),u=a(7),m=a(8),d=(a(128),a(292)),h=a(291),p=a(33),f=a(289),g=a(57),v=a.n(g),E=function e(){var t=this;Object(i.a)(this,e),this.signup=function(e,a,n){return t.service.post("/signup",{username:e,password:a,email:n}).then(function(e){return e.data})},this.signupCarrier=function(e,a,n,r,c,l,i,s){return t.service.post("/signup",{username:e,password:a,email:n,brand:r,model:c,color:l,registration:i,carrier:s}).then(function(e){return e.data})},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/currentuser").then(function(e){return e.data})},this.logout=function(){return t.service.get("/logout").then(function(e){return e.data})},this.find=function(e){return t.service.post("/find",{username:e}).then(function(e){return e.data})},this.service=v.a.create({baseURL:"".concat("https://battuta-mapno.herokuapp.com/api","/auth"),withCredentials:!0})},b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleLogout=function(e){a.props.logout()},a.hasCarrierRole=function(e){return e?e.role.includes("carrier"):null},a.state={loggedInUser:null},a.service=new E,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(p.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){var e,t=this.state.loggedInUser;return this.hasCarrierRole(t)&&(e=r.a.createElement("li",{className:"nav-item active"},r.a.createElement(f.a,{to:"/maps",className:"nav-link"},"New route"))),t?r.a.createElement("nav",{className:"navbar bg-dark navbar-expand-lg navbar-dark"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement("span",{className:"nav-item active title"},r.a.createElement(f.a,{to:"/",alt:"",className:"nav-link"},"Battuta"))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse d-flex justify-content-between",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(f.a,{to:"/my-packages",className:"nav-link"},"My packages")),e),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(f.a,{to:"/profile",className:"nav-link"},"My profile")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(f.a,{to:"/",onClick:this.handleLogout,className:"nav-link"},"Logout"))))):r.a.createElement("nav",{className:"navbar bg-dark navbar-expand-lg navbar-dark"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement("span",{className:"nav-item active title"},r.a.createElement(f.a,{to:"/",alt:"",className:"nav-link"},"Battuta"))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse d-flex justify-content-end",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(f.a,{to:"/signup",className:"nav-link"},"Signup")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(f.a,{to:"/login",className:"nav-link"},"Login")))))}}]),t}(n.Component),y=a(36),j=a(22),k=a.n(j),w=a(17),C=a.n(w),O=a(19),S=a.n(O),N=a(4),x=a.n(N),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){a.props.handleChange(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(x.a,{container:!0,alignItems:"center",justify:"center",direction:"column"},r.a.createElement("h4",null,"Your vehicle"),r.a.createElement(S.a,{className:"d-flex flex-row my-3 justify-content-around"},r.a.createElement(C.a,{className:"signup-label",shrink:!0},"Brand:"),r.a.createElement(k.a,{type:"text",name:"brand",value:this.props.brand,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(S.a,{className:"d-flex flex-row my-3 justify-content-around"},r.a.createElement(C.a,{className:"signup-label",shrink:!0},"Model:"),r.a.createElement(k.a,{type:"text",name:"model",value:this.props.model,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(S.a,{className:"d-flex flex-row my-3 justify-content-around"},r.a.createElement(C.a,{className:"signup-label",shrink:!0},"Color:"),r.a.createElement(k.a,{type:"text",name:"color",value:this.props.color,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(S.a,{className:"d-flex flex-row my-3 justify-content-around"},r.a.createElement(C.a,{className:"signup-label",shrink:!0},"Registration Number:"),r.a.createElement(k.a,{type:"text",name:"registration",value:this.props.registration,onChange:function(t){return e.handleChange(t)},maxLength:"7"})))}}]),t}(n.Component),U=a(21),I=a.n(U),R=a(110),B=a.n(R),T=a(35),P=a.n(T),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password,c=t.email,l=t.carrier,i=t.brand,s=t.model,o=t.color,u=t.registration;l?a.service.signupCarrier(n,r,c,i,s,o,u,l).then(function(e){a.setState({username:"",password:"",email:"",brand:"",model:"",color:"",registration:""}),a.props.getUser(e.user)}).catch(function(e){return console.log(e)}):a.service.signup(n,r,c).then(function(e){a.setState({username:"",password:"",email:""}),a.props.getUser(e.user)}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=e.target.name,r="checkbox"===t.type?t.checked:t.value;a.setState(Object(y.a)({},n,r))},a.state={username:"",password:"",email:"",carrier:!1,brand:"",model:"",color:"",registration:""},a.service=new E,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this;return this.state.carrier&&(e=r.a.createElement(D,{handleChange:this.handleChange,brand:this.state.brand,model:this.state.model,color:this.state.color,registration:this.state.registration})),r.a.createElement("div",{className:"auth"},r.a.createElement(x.a,{container:!0,alignItems:"center",justify:"center",direction:"row",style:{paddingTop:"2vh"}},r.a.createElement(P.a,{style:{backgroundColor:"#ffffffbf",width:"28vw"}},r.a.createElement(x.a,{container:!0,alignItems:"center",justify:"center",direction:"column"},r.a.createElement("h3",{style:{marginBottom:"3vh",marginTop:"3vh"}},"Welcome!, create your account next:"),r.a.createElement(S.a,{style:{marginBottom:"2vh"}},r.a.createElement(C.a,null,"Username:"),r.a.createElement(k.a,{type:"text",name:"username",value:this.state.username,onChange:function(e){return t.handleChange(e)}})),r.a.createElement(S.a,{style:{marginBottom:"2vh"}},r.a.createElement(C.a,null,"Password:"),r.a.createElement(k.a,{type:"password",name:"password",value:this.state.password,onChange:function(e){return t.handleChange(e)}})),r.a.createElement(S.a,{style:{marginBottom:"2vh"}},r.a.createElement(C.a,null,"Email:"),r.a.createElement(k.a,{type:"email",name:"email",value:this.state.email,onChange:function(e){return t.handleChange(e)}})),r.a.createElement(S.a,{style:{marginBottom:"2vh"}},r.a.createElement("span",null,"Become a Carrier:"),r.a.createElement(B.a,{color:"primary",id:"become-button",name:"carrier",onChange:function(e){return t.handleChange(e)}}))),e,r.a.createElement(x.a,{container:!0,alignItems:"center",justify:"center",direction:"column",style:{marginBottom:"2vh"}},r.a.createElement(I.a,{variant:"contained",color:"primary",value:"Sign up",onClick:this.handleFormSubmit},"Sign up")))))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then(function(e){a.setState({username:t,password:n,error:!1}),a.props.getUser(e)}).catch(function(e){a.setState({username:t,password:n,error:!0})})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(y.a)({},n,r))},a.state={username:"",password:""},a.service=new E,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"auth"},r.a.createElement(x.a,{container:!0,alignItems:"center",justify:"center",direction:"column",style:{height:"60vh"}},r.a.createElement(P.a,{style:{backgroundColor:"#ffffffbf",width:"22vw"}},r.a.createElement(x.a,{container:!0,alignItems:"center",justify:"center",direction:"column"},r.a.createElement("h3",{style:{marginBottom:"3vh",marginTop:"3vh"}},"Wellcome back!"),r.a.createElement(S.a,{style:{marginBottom:"2vh"}},r.a.createElement(C.a,null,"Username:"),r.a.createElement(k.a,{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)},required:!0})),r.a.createElement(S.a,{style:{marginBottom:"2vh"}},r.a.createElement(C.a,null,"Password:"),r.a.createElement(k.a,{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)},required:!0})),r.a.createElement(I.a,{type:"submit",value:"Login",onClick:this.handleFormSubmit,variant:"contained",color:"primary"},"Log in"),r.a.createElement("h1",null,this.state.error?"Error":"")))))}}]),t}(n.Component),F=a(60),L=a.n(F),z=a(40),W=a.n(z),q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({address:e})},a.handleSelect=function(e){a.setState({address:e}),Object(F.geocodeByAddress)(e).then(function(e){return Object(F.getLatLng)(e[0])}).then(function(e){a.props.handleSelect(e,a.props.departure,a.state.address)}).catch(function(e){return console.error("Error",e)})},a.resetClick=function(){a.setState({address:""}),a.props.resetClick(a.props.departure)},a.state={address:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){W.a.isEqual(this.props.place,{})||this.setState({address:this.props.place.address})}},{key:"render",value:function(){var e=this;return r.a.createElement(L.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect},function(t){var a=t.getInputProps,n=t.suggestions,c=t.getSuggestionItemProps,l=t.loading;return r.a.createElement("div",{className:"search-bar-container"},r.a.createElement("div",{className:"search-input-container"},r.a.createElement("form",null,r.a.createElement("input",Object.assign({},a({placeholder:"Search Places ...",className:"location-search-input"}),{className:"search-input",required:!0})),r.a.createElement("button",{className:"clear-button",onClick:function(){return e.resetClick()}},"x"))),r.a.createElement("div",{className:"autocomplete-dropdown-container"},l&&r.a.createElement("div",null,"Loading..."),n.map(function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return r.a.createElement("div",c(e,{className:t,style:a}),r.a.createElement("span",null,e.description))})))})}}]),t}(n.Component),_=a(49),Y=a(118),V=a(20),H=a.n(V),J=(a(258),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({startDate:e}),a.props.handleDate(e)},a.state={startDate:H()()},a.handleChange=a.handleChange.bind(Object(_.a)(Object(_.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(Y.a,{selected:this.state.startDate,onChange:this.handleChange,minDate:H()(),className:"border-shadow",showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:15,dateFormat:"DD/MM/YYYY      -      LT",timeCaption:"Time"})}}]),t}(r.a.Component)),G=function e(){var t=this;Object(i.a)(this,e),this.create=function(e,a,n,r,c){return t.service.post("/create",{arrival:e,departure:a,date:n,space:r,price:c}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.search=function(e,a,n){return t.service.post("/search",{arrival:e,departure:a,date:n}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.show=function(e){return t.service.get("/my-routes",{id:e}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.shipping=function(e,a,n,r,c,l){return t.service.post("/new-shipment",{description:e,owner:a,receiver:n,size:r,weight:c,route:l}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.find=function(e){return t.service.post("/find",{user:e}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.accept=function(e){return t.service.put("/accept",{id:e}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.reject=function(e){return t.service.put("/reject",{id:e}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.service=v.a.create({baseURL:"".concat("https://battuta-mapno.herokuapp.com/api","/route"),withCredentials:!0})},K=a(43),$=a.n(K),Q=a(44),X=a.n(Q),Z=a(3),ee=a.n(Z),te=a(58),ae=a.n(te),ne=a(32),re=a.n(ne),ce=a(39),le=a.n(ce),ie=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=this.props.route,n=a.arrival,c=a.departure,l=a.aviableSpace,i=a.driver,s=a.departureTime,o=a.price,u=s.split("").splice(0,10).join("").split("-").sort(function(){return 1}).join("-"),m=s.split("").splice(11,5).join("");return r.a.createElement(x.a,{container:!0,align:"center",justify:"center"},r.a.createElement(le.a,null,r.a.createElement($.a,null,r.a.createElement(ae.a,null,r.a.createElement(re.a,null,r.a.createElement(ee.a,null,"Driver:"),r.a.createElement(ee.a,null,"From:"),r.a.createElement(ee.a,null,"To:"),r.a.createElement(ee.a,null,"Departure date:"),r.a.createElement(ee.a,null,"Departure time:"),r.a.createElement(ee.a,null,"Price:"),r.a.createElement(ee.a,null,"Aviable Space:"))),r.a.createElement(X.a,null,r.a.createElement(re.a,null,r.a.createElement(ee.a,null,i.username),r.a.createElement(ee.a,null,c.name),r.a.createElement(ee.a,null,n.name),r.a.createElement(ee.a,null,u),r.a.createElement(ee.a,null,m),r.a.createElement(ee.a,null,o),r.a.createElement(ee.a,null,l),r.a.createElement(ee.a,null,r.a.createElement(I.a,{onClick:function(){return e.props.handleBook(t)},color:"primary",variant:"contained"},"Book shipment")))))))}}]),t}(r.a.Component),se=a(120),oe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({selectedUser:e}),a.props.handleReceiverSelect(e)},a.state={selectedUser:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.selectedUser;return r.a.createElement(se.a,{options:this.props.users,value:e,onChange:this.handleChange,onInputChange:this.props.findUsers,style:{width:"6vw"}})}}]),t}(r.a.Component),ue=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).findUsers=function(t){e.authService.find(t).then(function(e){return 0===t.length?[]:e.map(function(e){return Object.defineProperty(e,"value",Object.getOwnPropertyDescriptor(e,"_id")),delete e._id,Object.defineProperty(e,"label",Object.getOwnPropertyDescriptor(e,"username")),delete e.username,e})}).then(function(t){return e.setState({usersArray:t})})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(y.a)({},n,r))},e.handleReceiverSelect=function(t){e.setState({receiver:t})},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.description,r=a.size,c=a.weight,l=a.receiver,i=e.props,s=i.selectedRoute,o=i.user;e.routeService.shipping(n,o,l,r,c,s).then(function(e){return console.log(e)}),e.setState({redirect:!0})},e.state={usersArray:[],description:"",size:0,weight:0,receiver:{}},e.authService=new E,e.routeService=new G,e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.usersArray;return this.state.redirect?r.a.createElement(h.a,{to:"/my-packages"}):r.a.createElement(x.a,{container:!0,align:"center",justify:"center",direction:"column",className:"search-page"},r.a.createElement(le.a,{style:{backgroundColor:"#ffffffbf"}},r.a.createElement(x.a,{container:!0,align:"center",justify:"center",direction:"column"},r.a.createElement(S.a,{style:{marginTop:"2vh"}},r.a.createElement(C.a,{htmlFor:"description"},"Description"),r.a.createElement(k.a,{type:"text",name:"description",size:"100",onChange:function(t){return e.handleChange(t)}})),r.a.createElement(S.a,{style:{marginTop:"2vh"}},r.a.createElement(C.a,{htmlFor:"size"},"Size"),r.a.createElement(k.a,{type:"number",name:"size",onChange:function(t){return e.handleChange(t)}})),r.a.createElement(S.a,{style:{marginTop:"2vh"}},r.a.createElement(C.a,{htmlFor:"weight"},"Weight"),r.a.createElement(k.a,{type:"number",name:"weight",onChange:function(t){return e.handleChange(t)}})),r.a.createElement(S.a,{style:{marginTop:"2vh",width:"28vw"}},r.a.createElement(C.a,{htmlFor:"receiver"},"Receiver"),r.a.createElement(oe,{users:t,findUsers:this.findUsers,name:"receviver",handleReceiverSelect:this.handleReceiverSelect})),r.a.createElement(x.a,null,r.a.createElement(I.a,{color:"primary",variant:"contained",onClick:this.handleSubmit},"Book shipment")))))}}]),t}(r.a.Component),me=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleBook=function(e){a.setState({selectedRoute:e.route}),a.setState({redirect:!0})},a.state={data:e.data,redirect:!1,selectedRoute:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.data;return console.log(t),this.state.redirect?r.a.createElement(ue,{selectedRoute:this.state.selectedRoute,user:this.props.user}):r.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center search-page"},r.a.createElement("h3",{className:"mt-3 location-info"},"Routes"),t.map(function(t){return r.a.createElement(ie,{route:t,key:t.driver._id,user:e.props.user,handleBook:e.handleBook})}))}}]),t}(r.a.Component),de=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleSelect=function(e,t,n){t?a.setState({departure:Object(p.a)({},e,{address:n})}):a.setState({arrival:Object(p.a)({},e,{address:n})})},a.resetClick=function(e){e?a.setState({departure:{}}):a.setState({arrival:{}})},a.handleDate=function(e){a.setState({date:e._d})},a.handleSubmit=function(e){if(e.preventDefault(),a.props.user){var t=a.state,n=t.departure,r=t.arrival,c=t.date;a.service.search(r,n,c).then(function(e){return a.setState({data:e})}).then(function(){return a.setState({render:!0})}).catch(function(e){return console.log(e)})}else a.setState({redirect:!0})},a.state={departure:{},arrival:{},date:{},render:!1,data:{},redirect:!1},a.service=new G,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(h.a,{to:"/login"}):this.state.render?r.a.createElement(me,{data:this.state.data,user:this.props.user}):r.a.createElement("div",{className:"d-flex justify-content-center aling-items-center search-container search-page"},r.a.createElement("div",{className:"my-4 d-flex flex-row justify-content-between align-items-center row container-fluid col-10"},r.a.createElement("div",{className:"col-4 d-flex flex-column justify-content-between align-items-center"},r.a.createElement("span",{className:"my-2 location-info"},"Departure"),r.a.createElement(q,{handleSelect:this.handleSelect,departure:!0,resetClick:this.resetClick,place:this.state.departure})),r.a.createElement("div",{className:"col-4 d-flex flex-column justify-content-between align-items-center"},r.a.createElement("span",{className:"my-2 location-info"},"Arrival"),r.a.createElement(q,{handleSelect:this.handleSelect,departure:!1,resetClick:this.resetClick,place:this.state.arrival})),r.a.createElement("div",{className:"col-3 d-flex flex-column justify-content-between align-items-center"},r.a.createElement("span",{className:"my-2 location-info"},"Date"),r.a.createElement(J,{handleDate:this.handleDate})),r.a.createElement("div",{className:"col-1 d-flex flex-column justify-content-between align-items-center mt-5"},r.a.createElement(I.a,{color:"primary",variant:"contained",onClick:this.handleSubmit},"Search"))))}}]),t}(n.Component),he=a(114),pe=a.n(he),fe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){pe()().then(function(e){a.setState({center:e})}).then(function(){return new window.google.maps.Map(document.getElementById("map"),{center:a.state.center,zoom:8})}).then(function(e){a.setState({map:e}),a.setState({directionsService:new window.google.maps.DirectionsService}),a.setState({directionsDisplay:new window.google.maps.DirectionsRenderer({map:e})})})},a.onMarker=function(){var e=a.props.departure,t=e.lat,n=e.lng;new window.google.maps.Marker({position:{lat:t,lng:n},map:a.state.map,title:a.props.departure.addres}),a.state.map.setCenter({lat:t,lng:n}),a.state.directionsDisplay.setMap(null)},a.componentDidUpdate=function(){W.a.isEqual(a.state.map,{})||W.a.isEqual(a.state.directionsDisplay,{})||W.a.isEqual(a.state.directionsService,{})||(W.a.isEqual(a.props.arrival,{})?a.onMarker():a.onRoute())},a.state={map:{},directionsService:{},directionsDisplay:{},center:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onRoute",value:function(){var e=this;this.state.directionsDisplay.setMap(this.state.map);var t={origin:{lat:this.props.departure.lat,lng:this.props.departure.lng},destination:{lat:this.props.arrival.lat,lng:this.props.arrival.lng},travelMode:"DRIVING"};this.state.directionsService.route(t,function(t,a){"OK"===a&&e.state.directionsDisplay.setDirections(t)})}},{key:"render",value:function(){return r.a.createElement("div",{style:{width:500,height:500},id:"map"})}}]),t}(r.a.Component),ge=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleSelect=function(t,a,n){a?e.setState({departure:Object(p.a)({},t,{address:n})}):e.setState({arrival:Object(p.a)({},t,{address:n})})},e.resetClick=function(t){t?e.setState({departure:{}}):e.setState({arrival:{}})},e.forwardClick=function(){e.setState({carrierForm:!0})},e.backwardClick=function(){e.setState({carrierForm:!1})},e.handleDate=function(t){e.setState({date:t._d})},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.arrival,r=a.departure,c=a.date,l=a.space,i=a.price;e.service.create(n,r,c,l,i).then(function(t){return e.setState({redirect:!0})})},e.state={arrival:{},departure:{},date:{},carrierForm:!1,space:0,redirect:!1,price:0},e.service=new G,e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleSpace",value:function(e){this.setState({space:e})}},{key:"handlePrice",value:function(e){this.setState({price:e})}},{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(h.a,{to:"/"}):this.state.carrierForm?r.a.createElement("div",{className:"create-route d-flex justify-content-center align-items-center"},r.a.createElement(x.a,{style:{marginLeft:"18vw",marginRight:"18vw",width:"50vw",marginBottom:"8vh",backgroundColor:"#ffffffbf"}},r.a.createElement(P.a,{style:{backgroundColor:"transparent"}},r.a.createElement(x.a,{container:!0,spacing:16,direction:"row",alignItems:"stretch",justify:"space-around",style:{marginTop:"2vh",marginBottom:"2vh",backgroundColor:"transparent"}},r.a.createElement(x.a,{item:!0,lg:5,container:!0,alignItems:"center",justify:"space-around",direction:"column",style:{backgroundColor:"transparent"}},r.a.createElement(x.a,{style:{width:"80%"}},r.a.createElement(C.a,{className:"my-2 create-label",style:{width:"100%"}},"Departure date & time"),r.a.createElement(J,{handleDate:this.handleDate})),r.a.createElement(x.a,{style:{width:"80%"}},r.a.createElement(C.a,{className:"my-2 create-label",style:{width:"100%"}},"Price/m\xb2"),r.a.createElement("input",{className:"search-input",onChange:function(t){return e.handlePrice(t.currentTarget.value)},placeholder:"Set a price"})),r.a.createElement(x.a,{style:{width:"80%"}},r.a.createElement(C.a,{className:"my-2 create-label"},"Available space"),r.a.createElement(x.a,{className:"d-flex flex-row justify-content-center align-items-center space-wrapper",style:{width:"100%"}},r.a.createElement("input",{type:"text",placeholder:"Available space in meters",id:"space",onChange:function(t){return e.handleSpace(t.currentTarget.value)}}),r.a.createElement("input",{type:"text",id:"spacetwo",value:"m\xb2",disabled:!0}))),r.a.createElement(x.a,{container:!0,alignItems:"center",justify:"space-around"},r.a.createElement(I.a,{variant:"contained",onClick:this.backwardClick},"Back"),r.a.createElement(I.a,{variant:"contained",color:"primary",onClick:this.handleSubmit},"Submit"))),r.a.createElement(x.a,{item:!0,lg:7},r.a.createElement(fe,this.state)))))):r.a.createElement("div",{className:"create-route d-flex justify-content-center align-items-center"},r.a.createElement(x.a,{style:{marginLeft:"18vw",marginRight:"18vw",width:"50vw",marginBottom:"8vh",backgroundColor:"#ffffffbf"}},r.a.createElement(P.a,{style:{backgroundColor:"transparent"}},r.a.createElement(x.a,{container:!0,spacing:16,direction:"row",alignItems:"stretch",justify:"space-around",style:{marginTop:"2vh",marginBottom:"2vh",backgroundColor:"transparent"}},r.a.createElement(x.a,{item:!0,lg:5,container:!0,alignItems:"center",justify:"space-around",direction:"column",style:{backgroundColor:"transparent"}},r.a.createElement(x.a,{style:{zIndex:3,width:"80%"}},r.a.createElement(C.a,{style:{marginBottom:"2vh"},className:"my-2 create-label"},"Departure"),r.a.createElement(q,{style:{marginBottom:"2vh"},handleSelect:this.handleSelect,departure:!0,resetClick:this.resetClick,place:this.state.departure})),r.a.createElement(x.a,{style:{zIndex:2,width:"80%"}},r.a.createElement(C.a,{style:{marginBottom:"2vh"},className:"my-2 create-label"},"Arrival"),r.a.createElement(q,{style:{marginBottom:"2vh"},handleSelect:this.handleSelect,departure:!1,resetClick:this.resetClick,place:this.state.arrival})),r.a.createElement(x.a,{container:!0,justify:"flex-end",style:{paddingRight:"3vw"}},r.a.createElement(I.a,{style:{marginBottom:"2vh"},variant:"contained",onClick:this.forwardClick},"Continue"))),r.a.createElement(x.a,{item:!0,lg:7},r.a.createElement(fe,this.state))))))}}]),t}(r.a.Component),ve=a(50),Ee=a.n(ve),be=a(115),ye=a.n(be),je=a(117),ke=a.n(je),we=a(116),Ce=a.n(we),Oe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={status:e.status},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.status;this.setState({status:e})}},{key:"render",value:function(){var e=this,t=this.state.status,a=this.props,n=a.id,c=a.keyVariable;return"Pending"===t?"asShipper"===c?r.a.createElement("div",null,r.a.createElement(I.a,{color:"primary",variant:"contained",onClick:function(t){return e.props.handleAccept(t.currentTarget.value)},value:n},"Accept"),r.a.createElement(I.a,{color:"secondary",variant:"contained",onClick:function(t){return e.props.handleReject(t.currentTarget.value)},value:n},"Reject")):r.a.createElement(Ee.a,{label:"Pending"}):"Accepted"===t?r.a.createElement(Ee.a,{label:"Accepted",color:"primary",icon:r.a.createElement(ye.a,null)}):"Delivered"===t?r.a.createElement(Ee.a,{label:"Delivered",color:"primary",icon:r.a.createElement(Ce.a,null)}):r.a.createElement(Ee.a,{label:"Rejected",color:"secondary",icon:r.a.createElement(ke.a,null)})}}]),t}(r.a.Component),Se=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleAccept=function(t){e.service.accept(t).then(function(){return e.props.findPackages()})},e.handleReject=function(t){e.service.reject(t).then(function(){return e.props.findPackages()})},e.service=new G,e.state={packages:null},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(p.a)({},this.state,{packages:e.packages}))}},{key:"render",value:function(){var e=this,t=this.props.packages;return r.a.createElement(x.a,{style:{marginBottom:"4vh"}},Object.keys(t).map(function(a){return t[a].length>0?r.a.createElement("div",{key:a},r.a.createElement(x.a,{style:{marginTop:"6vh"}},r.a.createElement("h3",null,"asOwner"===a?"Sent Packages":"asShipper"===a?"Shipments":"Received Packages"),r.a.createElement(le.a,null,r.a.createElement($.a,null,r.a.createElement(ae.a,null,r.a.createElement(re.a,null,r.a.createElement(ee.a,{"data-field":"id"},"Departure"),r.a.createElement(ee.a,{"data-field":"name"},"Destination"),r.a.createElement(ee.a,{"data-field":"price"},"Item"),r.a.createElement(ee.a,{"data-field":"date"},"Date"),r.a.createElement(ee.a,{"data-field":"time"},"Time of departure"),r.a.createElement(ee.a,{"data-field":"owner"},"Owner"),r.a.createElement(ee.a,{"data-field":"receiver"},"Receiver"),r.a.createElement(ee.a,{"data-field":"shipper"},"Shipper"),r.a.createElement(ee.a,{"data-field":"shipper",style:{textAlign:"center"}},"Status"))),t[a].map(function(t){return r.a.createElement(X.a,{key:t._id},r.a.createElement(re.a,null,r.a.createElement(ee.a,null,t.route.departure.name),r.a.createElement(ee.a,null,t.route.arrival.name),r.a.createElement(ee.a,null,t.description),r.a.createElement(ee.a,null,t.route.departureTime.split("").splice(0,10).join("").split("-").sort(function(){return 1}).join("-")),r.a.createElement(ee.a,null,t.route.departureTime.split("").splice(11,5).join("")),r.a.createElement(ee.a,null,t.owner.username),r.a.createElement(ee.a,null,t.receiver.username),r.a.createElement(ee.a,null,t.carrier.username),r.a.createElement(ee.a,{style:{textAlign:"center"}},r.a.createElement(Oe,{status:t.status,handleAccept:e.handleAccept,handleReject:e.handleReject,id:t._id,keyVariable:a}))))}))))):r.a.createElement("div",{key:a})}))}}]),t}(r.a.Component),Ne=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).findPackages=function(){var e=a.state.user,t=!a.state.refresh;a.service.find(e).then(function(e){return a.setState({packages:e,refresh:t})})},a.state={user:e.user,packages:{asOwner:[],asReceiver:[],asShipper:[]},refresh:!1},a.service=new G,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.findPackages()}},{key:"render",value:function(){var e=this.state,t=e.packages,a=e.refresh;return t.asOwner.length>0||t.asShipper.length>0||t.asReceiver.length>0?r.a.createElement("div",{className:"my-packages"},r.a.createElement(x.a,{container:!0,alignItems:"center",justify:"center"},r.a.createElement(Se,{packages:t,findPackages:this.findPackages,refresh:a}))):r.a.createElement("div",{className:"my-packages"},r.a.createElement(x.a,{container:!0,justify:"center",className:"py-5"},r.a.createElement("h5",null,"You have no shipments so far.",r.a.createElement("br",null),"Search for a route to start enjoying Battuta!")))}}]),t}(r.a.Component),xe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={user:e.user},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.state.user,a="";return t.role.forEach(function(e,t){a+=t>0?" & ":"",a+=e.charAt(0).toUpperCase()+e.slice(1)}),t.vehicle&&(e=r.a.createElement(re.a,null,r.a.createElement(ee.a,null,r.a.createElement("span",{className:"profile-data"},"Vehicle")),r.a.createElement(ee.a,null,r.a.createElement("span",{className:"profile-data"},t.vehicle.brand," ",t.vehicle.model," - ",t.vehicle.color," - ",t.vehicle.registrationNumber)))),r.a.createElement("div",{className:"my-profile d-flex justify-content-center align-items-center flex-column"},r.a.createElement("h4",{className:"center-align"},"Profile"),r.a.createElement(x.a,{style:{margin:"6vh"},container:!0,justify:"center"},r.a.createElement(P.a,{style:{backgroundColor:"#ffffffbf"}},r.a.createElement(x.a,{style:{backgroundColor:"transparent"}},r.a.createElement($.a,{className:"centered"},r.a.createElement(X.a,null,r.a.createElement(re.a,null,r.a.createElement(ee.a,null,r.a.createElement("span",{className:"profile-data"},"Name")),r.a.createElement(ee.a,null,r.a.createElement("span",{className:"profile-data"},t.username))),r.a.createElement(re.a,null,r.a.createElement(ee.a,null,r.a.createElement("span",{className:"profile-data"},"Email")),r.a.createElement(ee.a,null,r.a.createElement("span",{className:"profile-data"},t.email))),r.a.createElement(re.a,null,r.a.createElement(ee.a,null,r.a.createElement("span",{className:"profile-data"},"Roles")),r.a.createElement(ee.a,null,r.a.createElement("span",{className:"profile-data"},a))),e))))))}}]),t}(r.a.Component),De=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getTheUser=function(e){a.setState({loggedInUser:e})},a.logout=function(){a.service.logout().then(function(){a.setState({loggedInUser:null})})},a.state={loggedInUser:null},a.service=new E,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.fetchUser(),this.state.loggedInUser?r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",null,r.a.createElement(b,{userInSession:this.state.loggedInUser,logout:this.logout})),r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(de,{user:e.state.loggedInUser})}}),r.a.createElement(d.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(h.a,{to:"/",getUser:e.getTheUser})}}),r.a.createElement(d.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(h.a,{to:"/",getUser:e.getTheUser})}}),r.a.createElement(d.a,{exact:!0,path:"/maps",render:function(){return r.a.createElement(ge,null)}}),r.a.createElement(d.a,{exact:!0,path:"/my-packages",render:function(){return r.a.createElement(Ne,{user:e.state.loggedInUser})}}),r.a.createElement(d.a,{exact:!0,path:"/profile",render:function(){return r.a.createElement(xe,{user:e.state.loggedInUser})}})):r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",null,r.a.createElement(b,{userInSession:this.state.loggedInUser,logout:this.logout})),r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(de,null)}}),r.a.createElement(d.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(A,{getUser:e.getTheUser})}}),r.a.createElement(d.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(M,{getUser:e.getTheUser})}}),r.a.createElement(d.a,{exact:!0,path:"/maps",render:function(){return r.a.createElement(ge,null)}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ue=a(290),Ie=(a(281),a(77)),Re=Object(Ie.createMuiTheme)({palette:{primary:{main:"#3f51b5"},secondary:{main:"#ff1744"}}});l.a.render(r.a.createElement(Ie.MuiThemeProvider,{theme:Re},r.a.createElement(Ue.a,null,r.a.createElement(De,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[121,2,1]]]);
//# sourceMappingURL=main.886223d9.chunk.js.map