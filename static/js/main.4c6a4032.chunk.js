(this["webpackJsonpclick-me"]=this["webpackJsonpclick-me"]||[]).push([[0],{13:function(e){e.exports=JSON.parse('[{"id":1,"img":"./img/num1.png"},{"id":2,"img":"/img/num2.png"},{"id":3,"img":"/img/num3.png"}]')},16:function(e,t,a){e.exports=a(21)},21:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(6),c=a(8),l=a(7),o=a(9),i=a(0),s=a.n(i),u=a(13),m=function(e){return s.a.createElement("div",null,s.a.createElement("img",{alt:"g",src:e.image,onClick:function(){return e.handleClick(e.id)},style:{width:"100px",height:"100px"}}))};var d=function(e){return s.a.createElement("div",null,s.a.createElement("nav",{class:"navbar navbar-light bg-light"},s.a.createElement("span",{class:"navbar-brand mb-0 h1"},"Click ME if your feeling luckly"),s.a.createElement("span",null," Score : ",e.score," | Top Score : ",e.topScore)),s.a.createElement("div",{class:"jumbotron jumbotron-fluid"},s.a.createElement("div",{class:"container"},s.a.createElement("h1",{class:"display-4"},"Numbers Memeber"),s.a.createElement("p",{class:"lead"},"This is a memorey Game. If you click the same image more than once you lose. If you are able to keep clicking a new image every time you win. My the odds ever be in your favor"))))},h=a(24),f=a(22),p=a(23),g=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={numbers:u,clickedArr:[],score:0,topScore:0},a.shuffledata=function(e){console.log(e),console.log("shuffle data");for(var t=e.length-1;t>0;){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n,t--}return e},a.handleNumberClick=function(e){if(console.log("clicked"),a.state.clickedArr.includes(e))a.setState({score:0,clickedArr:[]}),setTimeout((function(){a.setState({message:"Click an image to Play"})}),3e3);else{var t=a.state.score+1,n=Math.max(t,a.state.topScore);a.setState({clickedArr:a.state.clickedArr.concat(e),topScore:n,score:t}),console.log("new top score: "+a.state.topScore),setTimeout((function(){a.setState({message:""})}),3e3)}a.shuffledata(a.state.numbers)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){console.log(this.state.numbers),this.setState({numbers:this.shuffledata(this.state.numbers)})}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(d,{score:this.state.score,topScore:this.state.topScore}),s.a.createElement("div",null,s.a.createElement(f.a,null,s.a.createElement(p.a,null,s.a.createElement(h.a,null,this.state.numbers.map((function(t){return s.a.createElement(m,{key:t.id,id:t.id,image:t.img,handleClick:e.handleNumberClick})})))))))}}]),t}(i.Component),b=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(g,null))}}]),t}(i.Component),k=a(15);a.n(k).a.render(s.a.createElement(b,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4c6a4032.chunk.js.map