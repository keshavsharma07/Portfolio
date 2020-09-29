(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(37)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(8),s=a.n(l),c=(a(20),a(9)),o=a(10),r=a(14),u=a(13),m=(a(21),function(e){var t=e.handleSectionClick;return i.a.createElement("div",{className:"sidenav"},i.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/57822876?s=400&u=db21ef929310df37c117571c259b63be491234d0&v=4",className:"avatar",alt:"avatar"}),i.a.createElement("h2",{className:"main-name"},"Keshav Sharma"),i.a.createElement("p",{className:"subtitle"},'"Learning Something New Everyday"'),i.a.createElement("div",{className:"sections-list"},i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("about")}},"About Me"),i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("skills")}},"Skills"),i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("projects")}},"Projects")))}),d=(a(22),function(e){var t=e.bio;return i.a.createElement("div",{className:"about-container"},i.a.createElement("p",null,t))}),p=(a(23),function(e){var t=e.skill;return i.a.createElement("div",{className:"skill-card"},t)}),h=(a(24),function(e){var t=e.skills;return i.a.createElement("div",{className:"skills-container"},i.a.createElement("h3",null,"Tech Skills"),i.a.createElement("div",{className:"industry-skill-container"},t.techSkills.map((function(e){return i.a.createElement(p,{skill:e})}))),i.a.createElement("h3",null,"Softwares"),i.a.createElement("div",{className:"industry-skill-container"},t.industryKnowledge.map((function(e){return i.a.createElement(p,{skill:e})}))),i.a.createElement("h3",null,"Interpersonal Skills"),i.a.createElement("div",{className:"industry-skill-container"},t.interpersonalSkills.map((function(e){return i.a.createElement(p,{skill:e})}))))}),k=(a(25),function(e){var t=e.project;return i.a.createElement("div",{className:"project-card"},i.a.createElement("p",null,i.a.createElement("b",null,"Name:")," ",t.name),i.a.createElement("p",null,i.a.createElement("b",null,"Description:")," ",t.description),i.a.createElement("p",null,i.a.createElement("b",null,"Link:")," ",i.a.createElement("a",{href:t.link,target:"_blank"},t.link)," "))}),v=(a(26),function(e){var t=e.projects;return i.a.createElement("div",{className:"projects-container"},i.a.createElement("div",{className:"industry-skill-container"},t.projectList.map((function(e){return i.a.createElement(k,{project:e})}))))}),f=(a(27),function(e){var t=e.selectedHeading,a=e.selectedQuote,n=e.selectedSection,l=e.about,s=e.skills,c=e.projects;return i.a.createElement("div",{className:"section-container"},i.a.createElement("div",{className:"section-heading-container"},i.a.createElement("h1",{className:"main-heading"},t),i.a.createElement("p",{className:"main-quote"},a)),i.a.createElement("div",{className:"section-component"},{about:i.a.createElement(d,{bio:l.bio}),skills:i.a.createElement(h,{skills:s}),projects:i.a.createElement(v,{projects:c})}[n]))}),g=(a(28),function(e){var t=e.handleSectionClick,a=e.selectedHeading,n=e.selectedQuote,l=e.selectedSection,s=e.about,c=e.skills,o=e.projects;return i.a.createElement("div",{className:"portfolio-container"},i.a.createElement("div",{className:"sidenav-container"},i.a.createElement(m,{handleSectionClick:t})),i.a.createElement("div",{className:"main-section-container"},i.a.createElement(f,{selectedSection:l,selectedHeading:a,selectedQuote:n,about:s,skills:c,projects:o})))}),E={heading:"About Me",quote:"The two most powerful warriors are patience and time.",bio:"A developer,learner,writer and an artist by passion. \n\nI am pursuing a degree in Computer Science Engineering. I have learned valuable skills.I have achieved an exponential growth in this field by working on various projects.I have learned that I enjoy working in this field and that I can prove to be a valuable asset with my present skill set.  I am a team player and I am sure that with an expert team I can take big challenges head-on."},b={heading:"Skills",quote:"Don\u2019t limit yourself, discover new areas of expertise",techSkills:["ReactJS","Core Java","Redux","Data Structures","NodeJS","Java","HTML","Bootstrap","CSS","Git","GitHub","C"],industryKnowledge:["Eclipse","VsCode","Cisco Packet Tracer"],interpersonalSkills:["Communication","Singing","Music Produciton","Leadership","Time Management"]},S={heading:"Projects",quote:"Implementation is the real fun",projectList:[{name:"Weather App",description:"Tracks Weather of locations using API. Technologies used ReactJS",link:"https://keshavsharma07.github.io/WeatherApp/"},{name:"TodoApp",description:"Allow users to make a list by adding and deleting items ",link:"https://keshavsharma07.github.io/ToDoApp/"},{name:"Fitness Website",description:"A fully fledged Fitness Website using ReactJs,Bootstrap.It allow users to calculate BMI,get knowledge about exercises and give feedback.",link:"Project currently in progress"},{name:"TicTacToe",description:"Game Developed using Java and OOPS",link:"Offline"},{name:"Portfolio",description:"Online portfolio using ReactJS",link:""}]},N=(a(29),function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleSectionClick=function(t){e.setState({selectedSection:t,selectedHeading:e.state[t].heading,selectedQuote:e.state[t].quote})},e.state={selectedSection:"",selectedHeading:"",selectedQuote:"",about:null,skills:null,projects:null},e}return Object(o.a)(a,[{key:"componentWillMount",value:function(){this.setState({about:E,skills:b,projects:S,selectedHeading:E.heading,selectedQuote:E.quote,selectedSection:"about"})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,{selectedSection:this.state.selectedSection,selectedHeading:this.state.selectedHeading,selectedQuote:this.state.selectedQuote,about:this.state.about,skills:this.state.skills,projects:this.state.projects,handleSectionClick:this.handleSectionClick}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(30),a(31);var j=a(12);s.a.render(i.a.createElement(j.a,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.883e7d34.chunk.js.map