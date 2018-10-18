(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t){e.exports=function(){return new Promise(function(e,t){var a=window.navigator.geolocation;a||t("No geolocation available"),a.getCurrentPosition(function(t){var a={lat:t.coords.latitude,lng:t.coords.longitude};e(a)},t)})}},121:function(e,t,a){e.exports=a(288)},126:function(e,t,a){},128:function(e,t,a){},288:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),i=(a(126),a(3)),s=a(4),o=a(6),u=a(5),m=a(7),d=(a(128),a(292)),h=a(291),p=a(32),f=a(289),v=a(55),g=a.n(v),E=function e(){var t=this;Object(i.a)(this,e),this.signup=function(e,a,n){return t.service.post("/signup",{username:e,password:a,email:n}).then(function(e){return e.data})},this.signupCarrier=function(e,a,n,r,c,l,i,s){return t.service.post("/signup",{username:e,password:a,email:n,brand:r,model:c,color:l,registration:i,carrier:s}).then(function(e){return e.data})},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/currentuser").then(function(e){return e.data})},this.logout=function(){return t.service.get("/logout").then(function(e){return e.data})},this.find=function(e){return t.service.post("/find",{username:e}).then(function(e){return e.data})},this.service=g.a.create({baseURL:"".concat("https://battuta-mapno.herokuapp.com","/auth"),withCredentials:!0})},b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleLogout=function(e){a.props.logout()},a.hasCarrierRole=function(e){return e?e.role.includes("carrier"):null},a.state={loggedInUser:null},a.service=new E,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(p.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){var e,t=this.state.loggedInUser;return this.hasCarrierRole(t)&&(e=r.a.createElement("li",{className:"nav-item active"},r.a.createElement(f.a,{to:"/maps",className:"nav-link"},"New route"))),t?r.a.createElement("nav",{className:"navbar bg-dark navbar-expand-lg navbar-dark"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement("span",{className:"nav-item active title"},r.a.createElement(f.a,{to:"/",alt:"",className:"nav-link"},"Battuta"))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse d-flex justify-content-between",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(f.a,{to:"/my-packages",className:"nav-link"},"My packages")),e),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(f.a,{to:"/profile",className:"nav-link"},"My profile")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(f.a,{to:"/",onClick:this.handleLogout,className:"nav-link"},"Logout"))))):r.a.createElement("nav",{className:"navbar bg-dark navbar-expand-lg navbar-dark"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement("span",{className:"nav-item active title"},r.a.createElement(f.a,{to:"/",alt:"",className:"nav-link"},"Battuta"))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse d-flex justify-content-end",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(f.a,{to:"/signup",className:"nav-link"},"Signup")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(f.a,{to:"/login",className:"nav-link"},"Login")))))}}]),t}(n.Component),y=a(35),j=a(31),O=a.n(j),k=a(19),w=a.n(k),C=a(28),S=a.n(C),N=a(10),x=a.n(N),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){a.props.handleChange(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(x.a,{container:!0,alignItems:"center",justify:"center",direction:"column"},r.a.createElement("h4",null,"Your vehicle"),r.a.createElement(S.a,{className:"d-flex flex-row my-3 justify-content-around"},r.a.createElement(w.a,{className:"signup-label",shrink:!0},"Brand:"),r.a.createElement(O.a,{type:"text",name:"brand",value:this.props.brand,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(S.a,{className:"d-flex flex-row my-3 justify-content-around"},r.a.createElement(w.a,{className:"signup-label",shrink:!0},"Model:"),r.a.createElement(O.a,{type:"text",name:"model",value:this.props.model,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(S.a,{className:"d-flex flex-row my-3 justify-content-around"},r.a.createElement(w.a,{className:"signup-label",shrink:!0},"Color:"),r.a.createElement(O.a,{type:"text",name:"color",value:this.props.color,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(S.a,{className:"d-flex flex-row my-3 justify-content-around"},r.a.createElement(w.a,{className:"signup-label",shrink:!0},"Registration Number:"),r.a.createElement(O.a,{type:"text",name:"registration",value:this.props.registration,onChange:function(t){return e.handleChange(t)},maxLength:"7"})))}}]),t}(n.Component),U=a(27),I=a.n(U),R=a(110),B=a.n(R),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password,c=t.email,l=t.carrier,i=t.brand,s=t.model,o=t.color,u=t.registration;l?a.service.signupCarrier(n,r,c,i,s,o,u,l).then(function(e){a.setState({username:"",password:"",email:"",brand:"",model:"",color:"",registration:""}),a.props.getUser(e.user)}).catch(function(e){return console.log(e)}):a.service.signup(n,r,c).then(function(e){a.setState({username:"",password:"",email:""}),a.props.getUser(e.user)}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=e.target.name,r="checkbox"===t.type?t.checked:t.value;a.setState(Object(y.a)({},n,r))},a.state={username:"",password:"",email:"",carrier:!1,brand:"",model:"",color:"",registration:""},a.service=new E,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this;return this.state.carrier&&(e=r.a.createElement(D,{handleChange:this.handleChange,brand:this.state.brand,model:this.state.model,color:this.state.color,registration:this.state.registration})),r.a.createElement(x.a,{container:!0,alignItems:"center",justify:"center",direction:"row"},r.a.createElement(x.a,{container:!0,alignItems:"center",justify:"center",direction:"column"},r.a.createElement("h3",{style:{marginBottom:"3vh",marginTop:"3vh"}},"Welcome!, create your account next:"),r.a.createElement(S.a,{style:{marginBottom:"2vh"}},r.a.createElement(w.a,null,"Username:"),r.a.createElement(O.a,{type:"text",name:"username",value:this.state.username,onChange:function(e){return t.handleChange(e)}})),r.a.createElement(S.a,{style:{marginBottom:"2vh"}},r.a.createElement(w.a,null,"Password:"),r.a.createElement(O.a,{type:"password",name:"password",value:this.state.password,onChange:function(e){return t.handleChange(e)}})),r.a.createElement(S.a,{style:{marginBottom:"2vh"}},r.a.createElement(w.a,null,"Email:"),r.a.createElement(O.a,{type:"email",name:"email",value:this.state.email,onChange:function(e){return t.handleChange(e)}})),r.a.createElement(S.a,{style:{marginBottom:"2vh"}},r.a.createElement("span",null,"Become a Carrier:"),r.a.createElement(B.a,{color:"primary",id:"become-button",name:"carrier",onChange:function(e){return t.handleChange(e)},value:!0}))),e,r.a.createElement(I.a,{variant:"contained",color:"primary",value:"Sign up",onClick:this.handleFormSubmit},"Sign up"))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then(function(e){a.setState({username:t,password:n,error:!1}),a.props.getUser(e)}).catch(function(e){a.setState({username:t,password:n,error:!0})})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(y.a)({},n,r))},a.state={username:"",password:""},a.service=new E,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(x.a,{container:!0,alignItems:"center",justify:"center",direction:"column"},r.a.createElement("h3",{style:{marginBottom:"3vh",marginTop:"3vh"}},"Wellcome back!"),r.a.createElement(S.a,{style:{marginBottom:"2vh"}},r.a.createElement(w.a,null,"Username:"),r.a.createElement(O.a,{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)},required:!0})),r.a.createElement(S.a,{style:{marginBottom:"2vh"}},r.a.createElement(w.a,null,"Password:"),r.a.createElement(O.a,{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)},required:!0})),r.a.createElement(I.a,{type:"submit",value:"Login",onClick:this.handleFormSubmit,variant:"contained",color:"primary"},"Log in"),r.a.createElement("h1",null,this.state.error?"Error":""))}}]),t}(n.Component),A=a(57),M=a.n(A),F=a(38),L=a.n(F),z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({address:e})},a.handleSelect=function(e){a.setState({address:e}),Object(A.geocodeByAddress)(e).then(function(e){return Object(A.getLatLng)(e[0])}).then(function(e){a.props.handleSelect(e,a.props.departure,a.state.address)}).catch(function(e){return console.error("Error",e)})},a.resetClick=function(){a.setState({address:""}),a.props.resetClick(a.props.departure)},a.state={address:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){L.a.isEqual(this.props.place,{})||this.setState({address:this.props.place.address})}},{key:"render",value:function(){var e=this;return r.a.createElement(M.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect},function(t){var a=t.getInputProps,n=t.suggestions,c=t.getSuggestionItemProps,l=t.loading;return r.a.createElement("div",{className:"search-bar-container"},r.a.createElement("div",{className:"search-input-container"},r.a.createElement("form",null,r.a.createElement("input",Object.assign({},a({placeholder:"Search Places ...",className:"location-search-input"}),{className:"search-input",required:!0})),r.a.createElement("button",{className:"clear-button",onClick:function(){return e.resetClick()}},"x"))),r.a.createElement("div",{className:"autocomplete-dropdown-container"},l&&r.a.createElement("div",null,"Loading..."),n.map(function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return r.a.createElement("div",c(e,{className:t,style:a}),r.a.createElement("span",null,e.description))})))})}}]),t}(n.Component),W=a(46),q=a(118),_=a(18),Y=a.n(_),H=(a(256),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({startDate:e}),a.props.handleDate(e)},a.state={startDate:Y()()},a.handleChange=a.handleChange.bind(Object(W.a)(Object(W.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(q.a,{selected:this.state.startDate,onChange:this.handleChange,minDate:Y()(),className:"border-shadow",showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:15,dateFormat:"  DD/MM/YYYY        -        LT",timeCaption:"Time"})}}]),t}(r.a.Component)),J=function e(){var t=this;Object(i.a)(this,e),this.create=function(e,a,n,r){return t.service.post("/create",{arrival:e,departure:a,date:n,space:r}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.search=function(e,a,n){return t.service.post("/search",{arrival:e,departure:a,date:n}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.show=function(e){return t.service.get("/my-routes",{id:e}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.shipping=function(e,a,n,r,c,l){return t.service.post("/new-shipment",{description:e,owner:a,receiver:n,size:r,weight:c,route:l}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.find=function(e){return t.service.post("/find",{user:e}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.accept=function(e){return t.service.put("/accept",{id:e}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.reject=function(e){return t.service.put("/reject",{id:e}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.service=g.a.create({baseURL:"".concat("https://battuta-mapno.herokuapp.com","/route"),withCredentials:!0})},V=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=this.props.route,n=a.arrival,c=a.departure,l=a.aviableSpace,i=a.driver,s=a.departureTime,o=s.split("").splice(0,10).join("").split("-").sort(function(){return 1}).join("-"),u=s.split("").splice(11,5).join("");return r.a.createElement("div",{className:"d-flex flex-row row border-bottom border-secondary mb-5 py-5 container-fluid"},r.a.createElement("div",{className:"d-flex flex-column justify-content-start align-items-center col-2"},r.a.createElement("div",{className:"d-flex justify-content-center border-bottom mb-4"},r.a.createElement("h4",null,"Driver")),r.a.createElement("div",{className:"d-flex flex-row justify-content-around aling-items-center row container-fluid"},r.a.createElement("span",null,"Name: ",i.username))),r.a.createElement("div",{className:"d-flex flex-column justify-content-around align-items-center col-7 "},r.a.createElement("div",{className:"d-flex justify-content-center border-bottom mb-4"},r.a.createElement("h4",null,"Shipment")),r.a.createElement("div",{className:"d-flex flex-row justify-content-around aling-items-center row container-fluid border-right border-left"},r.a.createElement("div",{className:"d-flex flex-column justify-content-around col-4"},r.a.createElement("span",null,"From:"),r.a.createElement("span",null,"To:"),r.a.createElement("span",null,"Departure date:"),r.a.createElement("span",null,"Departure time:"),r.a.createElement("span",null,"Price:"),r.a.createElement("span",null,"Aviable Space:")),r.a.createElement("div",{className:"d-flex flex-column justify-content-around col-4"},r.a.createElement("span",null,c.name),r.a.createElement("span",null,n.name),r.a.createElement("span",null,o),r.a.createElement("span",null,u),r.a.createElement("span",null,"20\u20ac"),r.a.createElement("span",null,l)))),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center col-3"},r.a.createElement("button",{onClick:function(){return e.props.handleBook(t)},className:"btn btn-dark bookBtn"},"Book space")))}}]),t}(r.a.Component),G=a(120),K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({selectedUser:e}),a.props.handleReceiverSelect(e)},a.state={selectedUser:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.selectedUser;return r.a.createElement(G.a,{options:this.props.users,value:e,onChange:this.handleChange,onInputChange:this.props.findUsers})}}]),t}(r.a.Component),$=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).findUsers=function(t){e.authService.find(t).then(function(e){return 0===t.length?[]:e.map(function(e){return Object.defineProperty(e,"value",Object.getOwnPropertyDescriptor(e,"_id")),delete e._id,Object.defineProperty(e,"label",Object.getOwnPropertyDescriptor(e,"username")),delete e.username,e})}).then(function(t){return e.setState({usersArray:t})})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(y.a)({},n,r))},e.handleReceiverSelect=function(t){e.setState({receiver:t})},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.description,r=a.size,c=a.weight,l=a.receiver,i=e.props,s=i.selectedRoute,o=i.user;e.routeService.shipping(n,o,l,r,c,s).then(function(e){return console.log(e)}),e.setState({redirect:!0})},e.state={usersArray:[],description:"",size:0,weight:0,receiver:{}},e.authService=new E,e.routeService=new J,e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.usersArray;return this.state.redirect?r.a.createElement(h.a,{to:"/my-packages"}):r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("input",{type:"text",name:"description",size:"100",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"size"},"Size"),r.a.createElement("input",{type:"number",name:"size",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"weight"},"Weight"),r.a.createElement("input",{type:"number",name:"weight",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"receiver"},"Receiver"),r.a.createElement(K,{users:t,findUsers:this.findUsers,name:"receviver",handleReceiverSelect:this.handleReceiverSelect})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Book shipment"))))}}]),t}(r.a.Component),Q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleBook=function(e){a.setState({selectedRoute:e.route}),a.setState({redirect:!0})},a.state={data:e.data,redirect:!1,selectedRoute:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.data;return this.state.redirect?r.a.createElement($,{selectedRoute:this.state.selectedRoute,user:this.props.user}):r.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center mx-5"},r.a.createElement("h3",{className:"mt-3"},"Routes"),t.map(function(t){return r.a.createElement(V,{route:t,key:t.driver._id,user:e.props.user,handleBook:e.handleBook})}))}}]),t}(r.a.Component),X=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleSelect=function(e,t,n){t?a.setState({departure:Object(p.a)({},e,{address:n})}):a.setState({arrival:Object(p.a)({},e,{address:n})})},a.resetClick=function(e){e?a.setState({departure:{}}):a.setState({arrival:{}})},a.handleDate=function(e){a.setState({date:e._d})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.departure,r=t.arrival,c=t.date;a.service.search(r,n,c).then(function(e){return a.setState({data:e})}).then(function(){return a.setState({render:!0})}).catch(function(e){return console.log(e)})},a.state={departure:{},arrival:{},date:{},render:!1,data:{}},a.service=new J,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.render?r.a.createElement(Q,{data:this.state.data,user:this.props.user}):r.a.createElement("div",{className:"d-flex justify-content-center aling-items-center search-container"},r.a.createElement("div",{className:"my-4 d-flex flex-row justify-content-between align-items-center row container-fluid col-10"},r.a.createElement("div",{className:"col-4 d-flex flex-column justify-content-between align-items-center"},r.a.createElement("span",{className:"my-2 location-info"},"Departure"),r.a.createElement(z,{handleSelect:this.handleSelect,departure:!0,resetClick:this.resetClick,place:this.state.departure})),r.a.createElement("div",{className:"col-4 d-flex flex-column justify-content-between align-items-center"},r.a.createElement("span",{className:"my-2 location-info"},"Arrival"),r.a.createElement(z,{handleSelect:this.handleSelect,departure:!1,resetClick:this.resetClick,place:this.state.arrival})),r.a.createElement("div",{className:"col-3 d-flex flex-column justify-content-between align-items-center"},r.a.createElement("span",{className:"my-2 location-info"},"Date"),r.a.createElement(H,{handleDate:this.handleDate})),r.a.createElement("div",{className:"col-1 d-flex flex-column justify-content-between align-items-center mt-5"},r.a.createElement(I.a,{color:"primary",variant:"contained",onClick:this.handleSubmit},"Search"))))}}]),t}(n.Component),Z=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer bg-light fixed-bottom"},r.a.createElement("div",{className:"align-self-center footer-div d-flex align-content-center justify-content-center flex-column"},r.a.createElement("p",{className:"text-muted footer-text"},"Battuta 2018 \xa9")))}}]),t}(r.a.Component),ee=a(114),te=a.n(ee),ae=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){te()().then(function(e){a.setState({center:e})}).then(function(){return new window.google.maps.Map(document.getElementById("map"),{center:a.state.center,zoom:8})}).then(function(e){a.setState({map:e}),a.setState({directionsService:new window.google.maps.DirectionsService}),a.setState({directionsDisplay:new window.google.maps.DirectionsRenderer({map:e})})})},a.onMarker=function(){var e=a.props.departure,t=e.lat,n=e.lng;new window.google.maps.Marker({position:{lat:t,lng:n},map:a.state.map,title:a.props.departure.addres}),a.state.map.setCenter({lat:t,lng:n}),a.state.directionsDisplay.setMap(null)},a.componentDidUpdate=function(){L.a.isEqual(a.state.map,{})||L.a.isEqual(a.state.directionsDisplay,{})||L.a.isEqual(a.state.directionsService,{})||(L.a.isEqual(a.props.arrival,{})?a.onMarker():a.onRoute())},a.state={map:{},directionsService:{},directionsDisplay:{},center:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onRoute",value:function(){var e=this;this.state.directionsDisplay.setMap(this.state.map);var t={origin:{lat:this.props.departure.lat,lng:this.props.departure.lng},destination:{lat:this.props.arrival.lat,lng:this.props.arrival.lng},travelMode:"DRIVING"};this.state.directionsService.route(t,function(t,a){"OK"===a&&e.state.directionsDisplay.setDirections(t)})}},{key:"render",value:function(){return r.a.createElement("div",{style:{width:500,height:500},id:"map"})}}]),t}(r.a.Component),ne=a(76),re=a.n(ne),ce=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleSelect=function(t,a,n){a?e.setState({departure:Object(p.a)({},t,{address:n})}):e.setState({arrival:Object(p.a)({},t,{address:n})})},e.resetClick=function(t){t?e.setState({departure:{}}):e.setState({arrival:{}})},e.forwardClick=function(){e.setState({carrierForm:!0})},e.backwardClick=function(){e.setState({carrierForm:!1})},e.handleDate=function(t){e.setState({date:t._d})},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.arrival,r=a.departure,c=a.date,l=a.space;e.service.create(n,r,c,l).then(function(t){return e.setState({redirect:!0})})},e.state={arrival:{},departure:{},date:{},carrierForm:!1,space:0,redirect:!1},e.service=new J,e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleSpace",value:function(e){typeof e===Number&&this.setState({space:e})}},{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(h.a,{to:"/"}):this.state.carrierForm?r.a.createElement(x.a,{style:{marginTop:"2vh",marginLeft:"18vw",marginRight:"18vw"}},r.a.createElement(re.a,null,r.a.createElement(x.a,{container:!0,spacing:16,direction:"row",alignItems:"stretch",justify:"space-around",style:{marginTop:"2vh",marginBottom:"2vh"}},r.a.createElement(x.a,{item:!0,lg:5,container:!0,alignItems:"center",justify:"space-around",direction:"column"},r.a.createElement(x.a,{style:{width:"80%"}},r.a.createElement(w.a,{className:"my-2 location-info",style:{width:"100%"}},"Departure date & time"),r.a.createElement(H,{handleDate:this.handleDate})),r.a.createElement(x.a,{style:{width:"80%"}},r.a.createElement(w.a,{className:"my-2 location-info"},"Available space"),r.a.createElement(x.a,{className:"d-flex flex-row justify-content-center align-items-center space-wrapper",style:{width:"100%"}},r.a.createElement("input",{type:"text",placeholder:"meters",id:"space",onChange:function(t){return e.handleSpace(t.currentTarget.value)}}),r.a.createElement("input",{type:"text",id:"spacetwo",value:"m\xb2",disabled:!0}))),r.a.createElement(x.a,{container:!0,alignItems:"center",justify:"space-around"},r.a.createElement(I.a,{variant:"contained",onClick:this.backwardClick},"Back"),r.a.createElement(I.a,{variant:"contained",color:"primary",onClick:this.handleSubmit},"Submit"))),r.a.createElement(x.a,{item:!0,lg:7},r.a.createElement(ae,this.state))))):r.a.createElement(x.a,{style:{marginTop:"2vh",marginLeft:"18vw",marginRight:"18vw"}},r.a.createElement(re.a,null,r.a.createElement(x.a,{container:!0,spacing:16,direction:"row",alignItems:"stretch",justify:"space-around",style:{marginTop:"2vh",marginBottom:"2vh"}},r.a.createElement(x.a,{item:!0,lg:5,container:!0,alignItems:"center",justify:"space-around",direction:"column"},r.a.createElement(x.a,{style:{zIndex:3,width:"80%"}},r.a.createElement(w.a,{style:{marginBottom:"2vh"},className:"my-2 location-info"},"Departure"),r.a.createElement(z,{style:{marginBottom:"2vh"},handleSelect:this.handleSelect,departure:!0,resetClick:this.resetClick,place:this.state.departure})),r.a.createElement(x.a,{style:{zIndex:2,width:"80%"}},r.a.createElement(w.a,{style:{marginBottom:"2vh"},className:"my-2 location-info"},"Arrival"),r.a.createElement(z,{style:{marginBottom:"2vh"},handleSelect:this.handleSelect,departure:!1,resetClick:this.resetClick,place:this.state.arrival})),r.a.createElement(x.a,{container:!0,justify:"flex-end",style:{paddingRight:"3vw"}},r.a.createElement(I.a,{style:{marginBottom:"2vh"},variant:"contained",onClick:this.forwardClick},"Continue"))),r.a.createElement(x.a,{item:!0,lg:7},r.a.createElement(ae,this.state)))))}}]),t}(r.a.Component),le=a(44),ie=a.n(le),se=a(45),oe=a.n(se),ue=a(12),me=a.n(ue),de=a(74),he=a.n(de),pe=a(34),fe=a.n(pe),ve=a(54),ge=a.n(ve),Ee=a(59),be=a.n(Ee),ye=a(115),je=a.n(ye),Oe=a(117),ke=a.n(Oe),we=a(116),Ce=a.n(we),Se=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={status:e.status},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.status;this.setState({status:e})}},{key:"render",value:function(){var e=this,t=this.state.status,a=this.props.id;return"Pending"===t?r.a.createElement("div",null,r.a.createElement(I.a,{color:"primary",variant:"contained",onClick:function(t){return e.props.handleAccept(t.currentTarget.value)},value:a},"Accept"),r.a.createElement(I.a,{color:"secondary",variant:"contained",onClick:function(t){return e.props.handleReject(t.currentTarget.value)},value:a},"Reject")):"Accepted"===t?r.a.createElement(be.a,{label:"Accepted",color:"primary",icon:r.a.createElement(je.a,null)}):"Delivered"===t?r.a.createElement(be.a,{label:"Delivered",color:"primary",icon:r.a.createElement(Ce.a,null)}):r.a.createElement(be.a,{label:"Rejected",color:"secondary",icon:r.a.createElement(ke.a,null)})}}]),t}(r.a.Component),Ne=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleAccept=function(t){e.service.accept(t).then(function(){return e.props.findPackages()})},e.handleReject=function(t){e.service.reject(t).then(function(){return e.props.findPackages()})},e.service=new J,e.state={packages:null},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(p.a)({},this.state,{packages:e.packages}))}},{key:"render",value:function(){var e=this,t=this.props.packages;return r.a.createElement(x.a,{style:{marginBottom:"4vh"}},Object.keys(t).map(function(a){return t[a].length>0?r.a.createElement("div",{key:a},r.a.createElement(x.a,{style:{marginTop:"6vh"}},r.a.createElement("h3",null,"asOwner"===a?"Sent Packages":"asShipper"===a?"Shipments":"Received Packages"),r.a.createElement(ge.a,null,r.a.createElement(ie.a,null,r.a.createElement(he.a,null,r.a.createElement(fe.a,null,r.a.createElement(me.a,{"data-field":"id"},"Departure"),r.a.createElement(me.a,{"data-field":"name"},"Destination"),r.a.createElement(me.a,{"data-field":"price"},"Item"),r.a.createElement(me.a,{"data-field":"date"},"Date"),r.a.createElement(me.a,{"data-field":"time"},"Time of departure"),r.a.createElement(me.a,{"data-field":"owner"},"Owner"),r.a.createElement(me.a,{"data-field":"receiver"},"Receiver"),r.a.createElement(me.a,{"data-field":"shipper"},"Shipper"),r.a.createElement(me.a,{"data-field":"shipper",style:{textAlign:"center"}},"Status"))),t[a].map(function(t){return r.a.createElement(oe.a,{key:t._id},r.a.createElement(fe.a,null,r.a.createElement(me.a,null,t.route.departure.name),r.a.createElement(me.a,null,t.route.arrival.name),r.a.createElement(me.a,null,t.description),r.a.createElement(me.a,null,t.route.departureTime.split("").splice(0,10).join("").split("-").sort(function(){return 1}).join("-")),r.a.createElement(me.a,null,t.route.departureTime.split("").splice(11,5).join("")),r.a.createElement(me.a,null,t.owner.username),r.a.createElement(me.a,null,t.receiver.username),r.a.createElement(me.a,null,t.carrier.username),r.a.createElement(me.a,{style:{textAlign:"center"}},r.a.createElement(Se,{status:t.status,handleAccept:e.handleAccept,handleReject:e.handleReject,id:t._id}))))}))))):r.a.createElement("div",{key:a})}))}}]),t}(r.a.Component),xe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).findPackages=function(){var e=a.state.user,t=!a.state.refresh;a.service.find(e).then(function(e){return a.setState({packages:e,refresh:t})})},a.state={user:e.user,packages:{asOwner:[],asReceiver:[],asShipper:[]},refresh:!1},a.service=new J,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.findPackages()}},{key:"render",value:function(){var e=this.state,t=e.packages,a=e.refresh;return t.asOwner.length>0||t.asShipper.length>0||t.asReceiver.length>0?r.a.createElement(x.a,{container:!0,alignItems:"center",justify:"center"},r.a.createElement(Ne,{packages:t,findPackages:this.findPackages,refresh:a})):r.a.createElement("div",null,"no pakcages bro")}}]),t}(r.a.Component),De=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={user:e.user},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.state.user,a="";return t.role.forEach(function(e,t){a+=t>0?" & ":"",a+=e.charAt(0).toUpperCase()+e.slice(1)}),t.vehicle&&(e=r.a.createElement(fe.a,null,r.a.createElement(me.a,null,"Vehicle"),r.a.createElement(me.a,null,t.vehicle.brand," ",t.vehicle.model," - ",t.vehicle.color," - ",t.vehicle.registrationNumber))),r.a.createElement(x.a,{style:{margin:"6vh"},container:!0,spacing:16},r.a.createElement(x.a,{item:!0,xs:6},r.a.createElement("h4",{className:"center-align"},"Profile"),r.a.createElement(ie.a,{className:"centered"},r.a.createElement("caption",null),r.a.createElement(oe.a,null,r.a.createElement(fe.a,null,r.a.createElement(me.a,null,"Name"),r.a.createElement(me.a,null,t.username)),r.a.createElement(fe.a,null,r.a.createElement(me.a,null,"Email"),r.a.createElement(me.a,null,t.email)),r.a.createElement(fe.a,null,r.a.createElement(me.a,null,"Roles"),r.a.createElement(me.a,null,a)),e))))}}]),t}(r.a.Component),Ue=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getTheUser=function(e){a.setState({loggedInUser:e})},a.logout=function(){a.service.logout().then(function(){a.setState({loggedInUser:null})})},a.state={loggedInUser:null},a.service=new E,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.fetchUser(),console.log("https://battuta-mapno.herokuapp.com"),this.state.loggedInUser?r.a.createElement("div",{className:""},r.a.createElement("header",{className:""},r.a.createElement(b,{userInSession:this.state.loggedInUser,logout:this.logout})),r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(X,{user:e.state.loggedInUser})}}),r.a.createElement(d.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(h.a,{to:"/",getUser:e.getTheUser})}}),r.a.createElement(d.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(h.a,{to:"/",getUser:e.getTheUser})}}),r.a.createElement(d.a,{exact:!0,path:"/maps",render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(d.a,{exact:!0,path:"/my-packages",render:function(){return r.a.createElement(xe,{user:e.state.loggedInUser})}}),r.a.createElement(d.a,{exact:!0,path:"/profile",render:function(){return r.a.createElement(De,{user:e.state.loggedInUser})}}),r.a.createElement(Z,null)):r.a.createElement("div",{className:""},r.a.createElement("header",{className:""},r.a.createElement(b,{userInSession:this.state.loggedInUser,logout:this.logout})),r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(X,null)}}),r.a.createElement(d.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(T,{getUser:e.getTheUser})}}),r.a.createElement(d.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(P,{getUser:e.getTheUser})}}),r.a.createElement(d.a,{exact:!0,path:"/maps",render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(Z,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ie=a(290),Re=(a(281),a(77)),Be=Object(Re.createMuiTheme)({palette:{primary:{main:"#3f51b5"},secondary:{main:"#ff1744"}}});l.a.render(r.a.createElement(Re.MuiThemeProvider,{theme:Be},r.a.createElement(Ie.a,null,r.a.createElement(Ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[121,2,1]]]);
//# sourceMappingURL=main.861ee303.chunk.js.map