"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[376],{43914:(e,t,a)=>{a.d(t,{D:()=>d});var n=a(67294),i=a(96206),r=a(65830),l=a(88503),s=a(26492),o=a(53678),c=a(85893);const d=({id:e,children:t,targetURI:a,fadeOut:d=!1})=>{const m=(0,n.useCallback)((()=>{window.open((0,l.cd)(a).href)}),[a]),u={getTitle:()=>i.ag.get("action-trigger.available-in-app-only"),getDescription:()=>i.ag.get("action-trigger.listen-mixed-media-episode"),primaryButtonText:()=>i.ag.get("action-trigger.button.get-app"),secondaryButtonText:()=>i.ag.get("action-trigger.button.not-now"),isCTA:!0,intentPrimaryButton:"download-app",onLogInteraction:(0,s.o)(),shouldHideOnScroll:!0,fadeOut:d};return(0,c.jsx)(r.P,{className:o.Z.container,id:e,onPrimaryButtonClick:m,options:u,children:t})}},22578:(e,t,a)=>{a.d(t,{$:()=>h});var n=a(64593),i=a(96206),r=a(69691),l=a(8341),s=a(89952),o=a(67294),c=a(51615),d=a(24183);var m=a(85893);function u(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const h=({children:e,usePlayingItem:t})=>{let a=u(e);(e=>{const{mainLandmarkRef:t}=(0,d.Oh)(),a=(0,c.k6)(),n=a.location?.state?.preventMoveFocus,i=(0,o.useRef)(a.length<2);i.current=a.length<2,(0,o.useEffect)((()=>{const a=t.current;!n&&!i.current&&a&&e&&(a.setAttribute("aria-label",e),a.focus())}),[e,t,n])})(e);const{isPlaying:h}=(0,r.IK)(),g=(0,l.Y)((e=>e?.item));return g&&(h||t)&&((0,s.G_)(g)?a=[g.name,g.artists.map((e=>e.name)).join(i.ag.getSeparator())].join(" • "):(0,s.iw)(g)?a=[g.name,g.show.name].join(" • "):(0,s.k6)(g)&&(a=u(i.ag.get("ad-formats.advertisement")))),(0,m.jsx)(n.q,{defaultTitle:"Spotify",defer:!1,children:(0,m.jsx)("title",{children:a})})}},70369:(e,t,a)=>{a.d(t,{$:()=>n.$});var n=a(22578)},61348:(e,t,a)=>{a.d(t,{w:()=>x});var n=a(67294),i=a(65598),r=a.n(i),l=a(32667);const s=/(\((?:[0-9]{1,3}:){1,2}[0-9]{2}\))/g;var o=a(99027),c=a(67892);const d="playlist-playlist-playlistDescription",m="QD13ZfPiO5otS0PU89wG",u="ZbLneLRe2x_OBOYZMX3M",h="rjdQaIDkSgcGmxkdI2vU",g="umouqjSkMUbvF4I_Xz6r";var p=a(85893);const x=n.memo((function({html:e,onTimeStampClick:t,enableTimestamps:a=!1,semanticColor:i="textSubdued"}){const l=(0,n.useMemo)((()=>{const n=a?e.split(s).map((e=>e.match(s)?`(<time>${e.replace("(","").replace(")","")}</time>)`:e)).join(""):e;let l;try{l=r()(n,{transform:f(t,i),dangerouslySetChildren:[]})}catch{l=e}return l}),[a,e,t,i]);return(0,p.jsx)("div",{className:d,children:l})}));function f(e,t){let a=0;return{p:e=>(0,p.jsx)(l.D,{as:"p",variant:"ballad",semanticColor:t,className:g,children:e.children}),a:t=>t.href?.startsWith("#t=")?(0,p.jsx)(o.E,{onClick:e,children:t.children}):t.href?(0,p.jsx)(c.r,{to:t.href,children:t.children}):(0,p.jsx)(p.Fragment,{children:t.children}),ul:e=>(0,p.jsx)("ul",{className:u,children:e.children}),ol:e=>(0,p.jsx)("ol",{className:u,children:e.children}),li:e=>(0,p.jsx)(l.D,{as:"li",variant:"ballad",semanticColor:t,className:h,children:e.children}),br:()=>(0,p.jsx)("br",{}),h1:e=>(0,p.jsx)(l.D,{as:"h1",variant:"balladBold",semanticColor:t,className:m,children:e.children}),h2:e=>(0,p.jsx)(l.D,{as:"h2",variant:"balladBold",semanticColor:t,className:m,children:e.children}),h3:e=>(0,p.jsx)(l.D,{as:"h3",variant:"balladBold",semanticColor:t,className:m,children:e.children}),h4:e=>(0,p.jsx)(l.D,{as:"h4",variant:"balladBold",semanticColor:t,className:m,children:e.children}),h5:e=>(0,p.jsx)(l.D,{as:"h5",variant:"balladBold",semanticColor:t,className:m,children:e.children}),h6:e=>(0,p.jsx)(l.D,{as:"h6",variant:"balladBold",semanticColor:t,className:m,children:e.children}),time:t=>(0,p.jsx)(o.E,{onClick:e,children:t.children}),_:(e,t,i)=>{const r=void 0===t?e:i;return(0,p.jsx)(n.Fragment,{children:r},"fragment"+a++)}}}},31610:(e,t,a)=>{a.d(t,{o:()=>c,q:()=>r.q});var n=a(67294),i=a(4383),r=a(43683),l=a(26492),s=a(85893);const o=n.memo((function({uri:e,bookUri:t,size:a=r.q.md,className:o,onClick:c=(()=>{}),isLocked:d=!0}){const[m,u]=(0,i.Z)(t),h=(0,l.o)(),g=(0,n.useCallback)((()=>{h({targetUri:t,intent:"add-to-library",type:"click"}),u(!0)}),[h,t,u]);return(0,s.jsx)(r.o,{className:o,isFollowing:m,canDownload:!d,onFollow:g,uri:e,size:a,onClick:c})})),c=n.memo((function(e){return(0,s.jsx)(o,{...e})}))},11486:(e,t,a)=>{a.d(t,{V:()=>o});var n=a(69518),i=a.n(n),r=a(87577),l=a(8247),s=a(42781);const o=(e,t)=>{if(!(0,r.W6)(l.sT,{loadingValue:!1})||!t)return null;if("episode"===e&&t.type===s.p.EPISODE&&"Made on Spotify"===t.description){const e=i().from(t.uri)?.id;return e?`/user-song/${e}`:null}if("show"===e&&t.type===s.p.SHOW&&"All songs recorded, edited, and published on Spotify."===t.description){const e=i().from(`spotify:user:${t.publisherName}`);return i().from(e).toURLPath(!0)}return null}},87834:(e,t,a)=>{a.d(t,{C:()=>l});var n=a(67294),i=a(94960),r=a(85893);const l=({pageId:e,uri:t,children:a})=>{const l=(0,i.b)(),s=(0,i.H)();return(0,n.useEffect)((()=>{l?.reportPageView({pageId:e,navigationalRoot:s??void 0,entityUri:t})}),[e,s,l,t]),(0,r.jsx)(r.Fragment,{children:a})}},80219:(e,t,a)=>{a.d(t,{s:()=>u});var n=a(67294),i=a(26492);const r=e=>e<=64?"small":e>640?"xlarge":e>300?"large":"standard";function l(e,t){return e.filter((e=>e.label?e.label===t:e.width?r(e.width)===t:!!e.height&&r(e.height)===t))[0]}var s=a(67789);function o(e){const t=l(e,"standard"),a=l(e,"large"),n=l(e,"small"),i=l(e,"xlarge");return{image_url:t?.url,image_height:t?.height?.toString(),image_width:t?.width?.toString(),image_url_large:a?.url,image_height_large:a?.height?.toString(),image_width_large:a?.width?.toString(),image_url_small:n?.url,image_height_small:n?.height?.toString(),image_width_small:n?.width?.toString(),image_url_xlarge:i?.url,image_height_xlarge:i?.height?.toString(),image_width_xlarge:i?.width?.toString()}}var c=a(23716),d=a(69691),m=a(42781);function u(e,t){const a=(0,i.o)(),r=(0,c.g)(),{isPlaying:l,isActive:u}=(0,d.$o)(e?.uri||""),{isActive:h}=(0,d.cR)(t?.uri||"");return(0,n.useCallback)((n=>{if(!t||!e)return;const i=function(e,t){const a=(e.coverArt?.sources||[]).sort(((e,t)=>(t.width||0)-(e.width||0))),n=(0,s.Xb)(e,t),i=(0,s.Ie)(t)||n;return{uri:e.uri,title:e.name,subtitle:t.name,type:"episode",album_uri:t.uri,album_title:t.name,artist_uri:t.uri,artist_name:t.name,...o(a),media_type:"audio",externalResolvedUrl:e.audio?.items?.find((e=>e.externallyHosted))?.url,isTrailer:n,anonymousPlaybackAllowed:i}}(e,t);h&&!l&&u&&!n?r.resume():h&&l&&!n?(a({type:"click",intent:"pause",targetUri:e.uri}),r.pause()):(a({type:"click",intent:"play",targetUri:e.uri}),r.play({uri:t.uri,pages:[{items:[{type:m.p.EPISODE,uri:e.uri,uid:null,metadata:i,provider:null}]}]},{referrerIdentifier:r.getReferrer(),featureIdentifier:"episode"},n))}),[u,l,h,r,a,t,e])}},51441:(e,t,a)=>{a.d(t,{qE:()=>g,ul:()=>h,JM:()=>p});var n=a(67294),i=a(94184),r=a.n(i);const l={PlayButton:"main-playButton-PlayButton",primary:"main-playButton-primary",secondary:"main-playButton-secondary",transparent:"main-playButton-transparent",lockIcon:"main-playButton-lockIcon"};var s=a(96206),o=a(82749),c=a(92386),d=a(15358),m=a(51674),u=a(85893);let h,g;!function(e){e.primary="primary",e.secondary="secondary",e.transparent="transparent"}(h||(h={})),function(e){e[e.xxs=16]="xxs",e[e.xs=32]="xs",e[e.sm=40]="sm",e[e.md=48]="md",e[e.lg=56]="lg",e[e.xl=64]="xl"}(g||(g={}));const p=n.memo((0,n.forwardRef)((function(e,t){const{onClick:a,isPlaying:n,locked:i,version:p=h.primary,size:x=g.sm,disabled:f=!1,children:b,ariaPauseLabel:y,ariaPlayLabel:j,isLoading:k}=e,v=40===x?16:x/2,C={"--size":`${x}px`};let w=s.ag.get("play");w=i?s.ag.get("mwp.header.content.unavailable"):n?y??s.ag.get("pause"):j??s.ag.get("play");const S=n?(0,u.jsx)(o.k,{"aria-hidden":!0}):(0,u.jsx)(c.J,{"aria-hidden":!0});return(0,u.jsx)(m._,{label:w,children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("button",{style:C,className:r()(l.PlayButton,l[p],"encore-bright-accent-set"),onClick:e=>{const{currentTarget:t,detail:n}=e;a(e),n>0&&t&&t.blur()},disabled:f||k,"aria-label":w,ref:t,"data-testid":"play-button",children:[S,i&&(0,u.jsx)(d.Z,{color:"black",className:l.lockIcon,iconSize:v})]}),b]})})})))},97656:(e,t,a)=>{a.d(t,{o:()=>v});var n=a(67294),i=a(96206);const r="CTqnyEX1E8bCstZSENX_",l="wuGkmgD03o8t6Ekc6PUk",s="l1ZEvEBLXHaRxKZTgG2Q",o="KXlcyuHuR1UPYVsnF3zF";var c=a(69559),d=a(32667),m=a(61348),u=a(85893);const h=n.memo((function({text:e,onTimeStampClick:t,children:a,className:i,enableTimestamps:r=!1}){const l=(0,n.useMemo)((()=>(0,u.jsx)(m.w,{html:e,onTimeStampClick:t,enableTimestamps:r})),[e,r,t]);return(0,u.jsxs)(d.D,{as:"div",variant:"ballad",className:i,children:[l,a]})})),g="AFGg70Z_GfjSDTYBWyEq",p=(0,n.memo)((function({text:e,onTimeStampClick:t,onToggle:a,className:n,enableTimestamps:r}){return(0,u.jsx)(h,{className:n,text:e,onTimeStampClick:t,enableTimestamps:r,children:(0,u.jsx)("button",{"aria-expanded":!1,className:g,onClick:a,children:(0,u.jsxs)(d.D,{variant:"balladBold",children:["… ",i.ag.get("mwp.see.more")]})})})})),x=(e,t,a)=>{const n=i.ag.get("mwp.see.more").length,r=e.length+n+6;return a<=1&&r<t},f=(0,n.memo)((function({paragraphs:e,clickHandler:t,maxCharactersPerLine:a,maxLines:n,toggleExpandedState:r,className:l,enableTimestamps:s}){let o=!1,c=0;const d=e.map(((d,m)=>{const g=Math.round(d.length/a);if(c+=g>0?g:1,o)return null;const f=n-(c-g);if(!(m+1===e.length&&(x(d,a,f)||g<=f))&&c>=n){o=!0;const e=((e,t,a)=>{const n=i.ag.get("mwp.see.more").length;if(x(e,t,a))return e;const r=t*a-n-6;return e.slice(0,r)})(d,a,f);return(0,u.jsx)(p,{text:e,onTimeStampClick:t,onToggle:r,className:l,enableTimestamps:s},m)}return(0,u.jsx)(h,{className:l,text:d,onTimeStampClick:t,enableTimestamps:s},m)})).filter((e=>null!==e)).map(((e,t,a)=>t+1===a.length?e:[e," "])).flat();return(0,u.jsx)(u.Fragment,{children:d})})),b={isOpen:!1,contentWidth:0},y=(e,t)=>({...e,...t}),j=(e="")=>e.split(/[ \u00a0]{2}/).filter(Boolean),k=(e="")=>e.replace("<p>","").split(/(?:<\/p>)/).filter(Boolean),v=(0,n.memo)((function({content:e,htmlContent:t,maxLines:a=2,className:g,onTimeStampClick:p=(()=>{}),onExpanded:x,enableTimestamps:v=!1}){const[C,w]=(0,n.useReducer)(y,b),{isOpen:S,contentWidth:_}=C,T=(0,n.useCallback)((()=>{w({isOpen:!S}),x&&x(!S)}),[S,x]);(0,n.useEffect)((()=>{w({isOpen:!1})}),[e]);const N=_?_/7.8:Number.MAX_VALUE,B=(0,n.useRef)(null),P=(0,n.useCallback)((e=>{e&&(B.current=e,w({contentWidth:e.clientWidth}))}),[]),D=(0,n.useMemo)((()=>t?k(t).map((e=>(0,u.jsx)(m.w,{html:e,onTimeStampClick:p,enableTimestamps:v}))):((e,t,a)=>j(e).map(((e,n)=>(0,u.jsx)(h,{className:l,text:e,onTimeStampClick:t,enableTimestamps:a},n))))(e,p,v)),[e,v,t,p]),E=(0,n.useMemo)((()=>t?k(t):j(e)),[e,t]);return(0,c.a)((()=>{B.current&&w({contentWidth:B.current.clientWidth})})),(0,u.jsx)("div",{className:g,children:(0,u.jsxs)("div",{ref:P,className:r,children:[S&&(0,u.jsxs)(u.Fragment,{children:[D,(0,u.jsx)("button",{"aria-expanded":!0,className:o,onClick:T,children:(0,u.jsx)(d.D,{className:s,variant:"balladBold",children:i.ag.get("show_less")})})]}),!S&&(0,u.jsx)(f,{className:l,paragraphs:E,clickHandler:p,enableTimestamps:v,maxCharactersPerLine:N,maxLines:a,toggleExpandedState:T})]})})}))},60410:(e,t,a)=>{a.d(t,{S:()=>i});var n=a(86649);function i(e){return!e.playability?.playable&&(e.playability?.reason===n.WY.PaymentRequired||e.playability?.reason===n.WY.Anonymous)}}}]);
//# sourceMappingURL=376.js.map