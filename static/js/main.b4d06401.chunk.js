(this.webpackJsonpmoive_app=this.webpackJsonpmoive_app||[]).push([[0],{43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a(2),n=a.n(i),c=a(13),r=a.n(c),o=a(4),l=a.n(o),m=a(14),d=a(15),v=a(16),j=a(19),u=a(18),p=a(17),h=a.n(p);a(43);var b=function(e){e.id;var t=e.year,a=e.title,i=e.summary,n=e.poster;return console.log(a),Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("img",{src:n,alt:a,title:a}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)("h3",{className:"movie_title",children:a}),Object(s.jsx)("h5",{className:"movie_year",children:t}),Object(s.jsx)("p",{className:"movie_summary",children:i})]})]})},O=(a(44),function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(l.a.mark((function t(){var a,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,s=a.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(s.jsx)("div",{className:"container",children:t?Object(s.jsxs)("div",{className:"loader",children:[" ",Object(s.jsx)("span",{className:"loader_text",children:"loading"})," "]}):Object(s.jsx)("div",{className:"movies",children:a.map((function(e){return console.log(e.title),Object(s.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image},e.id)}))})})}}]),a}(n.a.Component));r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.b4d06401.chunk.js.map