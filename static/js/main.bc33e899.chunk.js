(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(8),s=a.n(l),c=(a(15),a(2)),r=a(3),i=a(5),m=a(4),u=a(1),p=a(6),d=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).modalClose=a.modalClose.bind(Object(u.a)(a)),a.modalButtonEvent=a.modalButtonEvent.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"modalClose",value:function(){this.props.modalClose(this.props.modalId)}},{key:"modalButtonEvent",value:function(e){var t=e.target.getAttribute("data-buttonindex"),a=this.props.modalIndex;this.props.modalButtonEvent(Number(t),Number(a))}},{key:"render",value:function(){var e=this,t=this.props,a=t.buttons,n=t.hasCloseButton;return o.a.createElement("div",{className:"btns"},a.map(function(t,a){return o.a.createElement("button",{key:a,type:"button","data-buttonindex":a,className:t.class,onClick:e.modalButtonEvent},t.name)}),n?o.a.createElement("button",{type:"button",className:"btn_type4",onClick:this.modalClose},"\ub2eb\uae30"):o.a.createElement("span",null))}}]),t}(o.a.Component);d.defaultProps={buttons:[],hasCloseButton:!1};var b=d,h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).modalClose=a.modalClose.bind(Object(u.a)(a)),a.modalButtonEvent=a.modalButtonEvent.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"modalClose",value:function(e){var t=e||this.props.modalId,a=document.getElementById(t);a.classList?a.classList.remove("open"):a.className=a.className.replace(new RegExp("(^|\\b)"+"open".split(" ").join("|")+"(\\b|$)","gi")," ")}},{key:"modalButtonEvent",value:function(e,t){this.props.modalButtonEvent(e,t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.width,n=t.modalId,l=t.className,s=t.title,c=t.titleClass,r=t.hasIcon,i=t.buttons,m=t.hasCloseButton,u=t.modalIndex,p={width:a+"px"};return o.a.createElement("div",{id:n,className:"pop_modal"},o.a.createElement("div",{className:l,style:p},o.a.createElement("div",{className:"inner"},o.a.createElement("strong",{className:c},r?o.a.createElement("span",{className:"ico_comm2 ico_alert"}):o.a.createElement("span",null),s),this.props.children,o.a.createElement(b,{buttons:i,modalButtonEvent:this.modalButtonEvent,hasCloseButton:m,modalClose:this.modalClose,modalIndex:u}))),o.a.createElement("div",{className:"overlay",onClick:function(t){return e.modalClose("".concat(n))}}))}}]),t}(o.a.Component);h.defaultProps={titleClass:"fc_blue tit_popup"};var v=h,E=(a(16),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).PopupOpen=function(){var e=setInterval(function(){a.setState({percentage:a.state.percentage+1}),100===a.state.percentage&&a.StopInterval(e)},10);return a.state={percentage:0}},a.StopInterval=function(e){clearInterval(e)},a.state={percentage:0},a.handleReject=a.handleReject.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"handleReject",value:function(){!function(e){if("popUpload"===e){var t=document.getElementById("popUpload");t.classNameList?t.classNameList.add("open"):t.className+=" open"}}("popUpload"),this.PopupOpen()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("button",{className:"btn_type7",onClick:this.handleReject},"\uc5c5\ub85c\ub4dc"),o.a.createElement(v,{modalId:"popUpload",title:"\ub3d9\uc601\uc0c1 \uc5c5\ub85c\ub4dc \uc911...",className:"popup_type1 popup_upload",hasCloseButton:!1,modalIndex:0,width:"425",buttons:[{name:"\ud655\uc778",class:"btn_type2"},{name:"\ucde8\uc18c",class:"btn_type3"}]},o.a.createElement("p",{className:"percent"},o.a.createElement("em",null,this.state.percentage),"%"),o.a.createElement("span",{className:"progress_bar"},o.a.createElement("span",{style:{width:this.state.percentage+"%"}},"\xa0")),o.a.createElement("button",{type:"button",className:"btn_comm btn_close",title:"\ub2eb\uae30"},"\ub2eb\uae30")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.bc33e899.chunk.js.map