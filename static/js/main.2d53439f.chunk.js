(this.webpackJsonpnetflix_clone=this.webpackJsonpnetflix_clone||[]).push([[0],{22:function(e,t,n){e.exports=n(64)},27:function(e,t,n){},28:function(e,t,n){},46:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=(n(27),n(28),n(4)),l=n.n(i),s=n(5),u=n(3),f=n(17),m=n.n(f).a.create({baseURL:"http://api.themoviedb.org/3/"}),d=(n(46),n(18)),v=n(21),h=n.n(v),p=function(e){var t=e.title,n=e.fetchUrl,c=e.isLargeRow,o=Object(a.useState)([]),i=Object(u.a)(o,2),f=i[0],v=i[1],p=Object(a.useState)(""),g=Object(u.a)(p,2),E=g[0],_=g[1];return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get(n);case 2:return t=e.sent,v(t.data.results),console.log(t.data.results),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}();var t,a,r=document.querySelectorAll(".row__posters"),c=!1;return r.forEach((function(e){e.addEventListener("dragstart",(function(n){c=!0,e.classList.add("active"),t=n.pageX-e.offsetLeft,a=e.scrollLeft})),e.addEventListener("dragleave",(function(){c=!1,e.classList.remove("active")})),e.addEventListener("drag",(function(n){if(c){n.preventDefault();var r=n.pageX-e.offsetLeft-t;e.scrollLeft=a-r}}))})),function(){r.forEach((function(e){e.removeEventListener("drag"),e.removeEventListener("dragleave"),e.removeEventListener("dragstart")}))}}),[n]),r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"row__posters"},f.map((function(e){return r.a.createElement("img",{className:"row__poster ".concat(c&&"row__posterLarge"),onClick:function(){return function(e){_(""),E?_(""):h()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);_(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},key:e.id,src:"".concat("http://image.tmdb.org/t/p/original/").concat(c?e.poster_path:e.backdrop_path),alt:e.name})}))),E&&r.a.createElement(d.a,{videoId:E,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))},g="19f84e11932abbc79e6d83f82d6d1045",E={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/discover/movie?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(g,"&with_genres=99")},_=(n(62),function(){var e,t,n=Object(a.useState)([]),c=Object(u.a)(n,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get(E.fetchNetflixOriginals);case 2:t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("http://image.tmdb.org/t/p/original/'.concat(null===o||void 0===o?void 0:o.backdrop_path,'"')}},r.a.createElement("div",{className:"banner__contents"},r.a.createElement("h1",{className:"banner__title"},(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_name)),r.a.createElement("div",{className:"banner_buttons"},r.a.createElement("button",{className:"banner__button"},"Play"),r.a.createElement("button",{className:"banner__button"},"My List")),r.a.createElement("h1",{className:"banner__description"},(e=null===o||void 0===o?void 0:o.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),r.a.createElement("div",{className:"banner__fadeBottom"}))}),w=(n(63),function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?c(!0):c(!1)})),function(){window.removeEventListener("scroll")}}),[]),r.a.createElement("div",{className:"nav ".concat(n&&"nav_black")},r.a.createElement("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/800px-Logo_Netflix.png",alt:"Netflix Logo"}),r.a.createElement("img",{className:"nav__avatar",src:"http://www.pngall.com/wp-content/uploads/5/Profile.png",alt:"Avatar"}))});var b=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(w,null),r.a.createElement(_,null),r.a.createElement(p,{title:"NETFLIX ORIGINALS",fetchUrl:E.fetchNetflixOriginals,isLargeRow:!0}),r.a.createElement(p,{title:"Trending Now",fetchUrl:E.fetchTrending}),r.a.createElement(p,{title:"TOP RATED",fetchUrl:E.fetchTopRated}),r.a.createElement(p,{title:"ACTION MOVIES",fetchUrl:E.fetchActionMovies}),r.a.createElement(p,{title:"COMEDY MOVIES",fetchUrl:E.fetchComedyMovies}),r.a.createElement(p,{title:"HORROR MOVIES",fetchUrl:E.fetchHorrorMovies}),r.a.createElement(p,{title:"ROMANCE MOVIES",fetchUrl:E.fetchRomanceMovies}),r.a.createElement(p,{title:"DOCUMENTARIES",fetchUrl:E.fetchDocumentaries}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.2d53439f.chunk.js.map