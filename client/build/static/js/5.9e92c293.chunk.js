(this["webpackJsonpe-commerce-cloths"]=this["webpackJsonpe-commerce-cloths"]||[]).push([[5],{109:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n);t(81);var l=e=>{let{handleChange:a,label:t,...n}=e;return s.a.createElement("div",{className:"group"},s.a.createElement("input",Object.assign({className:"form-input",onChange:a},n)),t?s.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},t):null)},r=t(29),i=t(17);t(82);class m extends s.a.Component{constructor(e){super(e),this.handleSubmit=async e=>{e.preventDefault();const{email:a,password:t}=this.state;try{await i.a.signInWithEmailAndPassword(a,t),this.setState({email:"",password:""})}catch(n){console.error(n)}},this.handleChange=e=>{const{name:a,value:t}=e.target;this.setState({[a]:t})},this.state={email:"",password:""}}render(){const{email:e,password:a}=this.state;return s.a.createElement("div",{className:"sign-in"},s.a.createElement("h2",null,"I already have an account"),s.a.createElement("span",null,"Sign in with your email and password"),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement(l,{name:"email",type:"email",value:e,handleChange:this.handleChange,label:"Email",required:!0}),s.a.createElement(l,{name:"password",type:"password",value:a,handleChange:this.handleChange,label:"Password",required:!0}),s.a.createElement("div",{className:"buttons"},s.a.createElement(r.a,{type:"submit"},"Sign in "),s.a.createElement(r.a,{onClick:i.e,isGoogleSignIn:!0},"Sign in With Google"))))}}var o=m;t(83);class c extends s.a.Component{constructor(){super(),this.handleSubmit=async e=>{e.preventDefault();const{displayName:a,email:t,password:n,confirmPassword:s}=this.state;if(n===s)try{const{user:e}=await i.a.createUserWithEmailAndPassword(t,n);await Object(i.c)(e,{displayName:a}),this.setState({displayName:"",email:"",password:"",confirmPassword:""})}catch(l){console.error(l)}else alert("passwords don't match")},this.handleChange=e=>{const{name:a,value:t}=e.target;this.setState({[a]:t})},this.state={displayName:"",email:"",password:"",confirmPassword:""}}render(){const{displayName:e,email:a,password:t,confirmPassword:n}=this.state;return s.a.createElement("div",{className:"sign-up"},s.a.createElement("h2",{className:"title"},"I do not have an account"),s.a.createElement("span",null,"Sign up with your email and password"),s.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},s.a.createElement(l,{type:"text",name:"displayName",value:e,onChange:this.handleChange,label:"Display Name",required:!0}),s.a.createElement(l,{type:"email",name:"email",value:a,onChange:this.handleChange,label:"Email",required:!0}),s.a.createElement(l,{type:"password",name:"password",value:t,onChange:this.handleChange,label:"Password",required:!0}),s.a.createElement(l,{type:"password",name:"confirmPassword",value:n,onChange:this.handleChange,label:"Confirm Password",required:!0}),s.a.createElement(r.a,{type:"submit"},"SIGN UP")))}}var h=c;t(84);a.default=()=>s.a.createElement("div",{className:"sign-in-and-sign-up"},s.a.createElement(o,null),s.a.createElement(h,null))},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){}}]);
//# sourceMappingURL=5.9e92c293.chunk.js.map