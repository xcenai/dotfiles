"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[6450],{71836:(e,n,s)=>{s.d(n,{q:()=>k});var i=s(69518),r=s.n(i),t=s(63495),a=s(36590),o=s(8498),c=s(21610),l=s(16257),d=s(85893);const u=({name:e="",uri:n="",images:s=[],isHero:i,onClick:r,testId:t,index:u})=>i?(0,d.jsx)(c.Z,{featureIdentifier:"unknown",index:u,onClick:r,headerText:e,uri:n,isPlayable:!1,renderCardImage:()=>(0,d.jsx)(o.x,{isHero:i,images:s}),renderSubHeaderContent:()=>(0,d.jsx)(l.k,{}),testId:t}):(0,d.jsx)(a.C,{index:u,featureIdentifier:"unknown",onClick:r,headerText:e,uri:n,isPlayable:!1,renderCardImage:()=>(0,d.jsx)(o.x,{isHero:i,images:s}),renderSubHeaderContent:()=>(0,d.jsx)("span",{}),testId:t});var m=s(74895),g=s(143),x=s(64269),h=s(3634),p=s(89477);const f=({name:e,uri:n,href:s,images:i,isHero:r,testId:t,description:c,index:l,requestId:u,color:m})=>(0,d.jsx)(a.C,{index:l,featureIdentifier:"artist_concerts",onClick:()=>{window.location.href=s},headerText:e,uri:n,isPlayable:!1,renderCardImage:()=>(0,d.jsx)(o.x,{isHero:r,images:i,color:m}),renderSubHeaderContent:()=>(0,d.jsx)("span",{children:c||""}),testId:t,requestId:u,delegateNavigation:!0});var j=s(61864),I=s(8890),y=s(46309),v=s(30523),b=s(52778),w=s(95332),C=s(97891);const k=({entity:e,index:n,testId:s,isHero:i=!1})=>{const a=(r().from(e.uri)||{}).type,o={testId:s,isHero:i,index:n,sharingInfo:e.sharingInfo};if(("string"==typeof e.uri||e.uri instanceof String)&&e.uri.startsWith("spotify:merch:"))return(0,d.jsx)(I.T,{...o,name:e.name,uri:e.uri,href:e.href,images:e.images,description:e.description});if(("string"==typeof e.uri||e.uri instanceof String)&&e.uri.startsWith("spotify:artist:")&&e.uri.endsWith(":concerts"))return(0,d.jsx)(f,{...o,name:e.name,uri:e.uri,href:e.href,images:e.images,description:e.description});switch(a){case r().Type.ALBUM:case r().Type.COLLECTION_ALBUM:{const n=e;return(0,d.jsx)(h.r,{...o,name:n.name,uri:n.uri,images:n.images,artists:n.artists})}case r().Type.ARTIST:{const n=e;return(0,d.jsx)(p.I,{...o,name:n.name,uri:n.uri,images:n.images})}case r().Type.EPISODE:{const n=e;return(0,d.jsx)(j.B,{...o,name:n.name,uri:n.uri,images:n.images,showImages:n.show?.images||[],durationMilliseconds:n.duration_ms,releaseDate:n.release_date,resume_point:n.resume_point,description:n.description,isExplicit:n.explicit,is19PlusOnly:!!n.tags?.includes("MOGEF-19+")})}case r().Type.PLAYLIST:case r().Type.PLAYLIST_V2:{const n=e,s=n.owner?.display_name||e.owner?.displayName||"";return(0,d.jsx)(y.Z,{...o,name:n.name,uri:n.uri,images:n.images,description:n.description,authorName:s})}case r().Type.USER:return(0,d.jsx)(v.P,{...o,name:e.name,uri:e.uri,images:e.images});case r().Type.SHOW:{const n=e;return(0,d.jsx)(w._,{...o,name:n.name,uri:n.uri,images:n.images,publisher:n.publisher,mediaType:{audio:g.E.AUDIO,video:g.E.VIDEO,mixed:g.E.MIXED}[n.media_type]??g.E.AUDIO})}case r().Type.APPLICATION:return(0,d.jsx)(t.s,{...o,name:e.name,uri:e.uri,images:e.images,description:e.description});case r().Type.RADIO:return(0,d.jsx)(b.I,{testId:s,index:n,name:e.name,uri:e.uri,images:e.images});case r().Type.TRACK:{const n=e;return(0,d.jsx)(C.G,{...o,name:n.name,uri:n.uri,images:n.album?.images||[],artists:n.artists,album:n.album,isExplicit:n.explicit,is19PlusOnly:n.tags?.includes("MOGEF-19+")})}case r().Type.COLLECTION:return e.uri.endsWith("your-episodes")?(0,d.jsx)(x.T,{index:n}):(0,d.jsx)(m.p,{index:n});default:return console.warn("Rendering a generic Card for unknown type:",a),(0,d.jsx)(u,{...o,name:e.name,uri:e.uri,images:e.images})}}},63495:(e,n,s)=>{s.d(n,{s:()=>l});var i=s(96206),r=s(36590),t=s(8498),a=s(21610),o=s(16257),c=s(85893);const l=({name:e,uri:n,images:s,isHero:l,onClick:d,testId:u,description:m,index:g,requestId:x,color:h})=>l?(0,c.jsx)(a.Z,{featureIdentifier:"genre",index:g,onClick:d,headerText:e,uri:n,isPlayable:!1,renderCardImage:()=>(0,c.jsx)(t.x,{isHero:l,images:s,color:h}),renderSubHeaderContent:()=>(0,c.jsx)(o.k,{children:m||i.ag.get("card.tag.genre")}),testId:u,requestId:x}):(0,c.jsx)(r.C,{index:g,featureIdentifier:"genre",onClick:d,headerText:e,uri:n,isPlayable:!1,renderCardImage:()=>(0,c.jsx)(t.x,{isHero:l,images:s,color:h}),renderSubHeaderContent:()=>(0,c.jsx)("span",{children:m||""}),testId:u,requestId:x})},8890:(e,n,s)=>{s.d(n,{T:()=>a});var i=s(36590),r=s(8498),t=s(85893);const a=({name:e,uri:n,href:s,images:a,isHero:o,testId:c,description:l,index:d,requestId:u,color:m})=>(0,t.jsx)(i.C,{index:d,featureIdentifier:"merch",onClick:()=>{window.location.href=s},headerText:e,uri:n,isPlayable:!1,renderCardImage:()=>(0,t.jsx)(r.x,{isHero:o,images:a,color:m}),renderSubHeaderContent:()=>(0,t.jsx)("span",{children:l||""}),testId:c,requestId:u,delegateNavigation:!0})},70369:(e,n,s)=>{s.d(n,{$:()=>i.$});var i=s(22578)},82630:(e,n,s)=>{s.r(n),s.d(n,{DISALLOWED_VIEWS:()=>Y,View:()=>Z,default:()=>B});var i=s(67294),r=s(94184),t=s.n(r),a=s(86706),o=s(14908),c=s(96206),l=s(95888),d=s(37081),u=s(49552),m=s(70937),g=s(15852),x=s(21794),h=s(70369),p=s(60289),f=s(59482),j=s(72907),I=s(6158),y=s(71836),v=s(18686),b=s(42922),w=s(32667),C=s(87577),k=s(49207),T=s(67892);const A="EPMDgp7znILo0hvyirzv",P="noUm6pjQ6KWq7mVxYDor",E="PqnKjxzJ1Zvr9qKRlRbO",N="uuBQS9Ym_VPmAQrLhPQb";var H=s(85893);const S=e=>(0,C.W6)(k.sE)?(0,H.jsxs)(T.Z,{to:e.uri,target:"_blank",className:A,children:[(0,H.jsx)("div",{className:P}),(0,H.jsx)(w.D,{className:E,as:"h2",variant:"alto",children:e.label}),(0,H.jsx)(w.D,{className:N,as:"p",variant:"mesto",children:e.tagline})]}):null,D=e=>(0,H.jsx)(i.Suspense,{fallback:null,children:(0,H.jsx)(S,{...e})}),L=e=>e.id?.startsWith("scc-corona"),q=({spaces:e,viewName:n,viewId:s,isAnonymous:r})=>{const t=(0,i.useCallback)(((e,n)=>{const i=((e,n)=>{let{uri:s}=e;return e.href.includes("https://api.spotify.com/v1/views/")&&(s=e.href.replace("https://api.spotify.com/v1/views/","spotify:genre:"),"hub-browse-grid"===n&&(s=s.replace(":view:",":genre:"))),s})(e,s);return(0,H.jsx)(y.q,{index:n,entity:{...e,uri:i}},e.href)}),[s]),a=(0,i.useCallback)(((e,n)=>(0,H.jsx)(b.JL,{value:"card",index:n,children:(0,H.jsx)(y.q,{index:n,entity:e})},e.uri||n)),[]),o=(0,i.useCallback)(((e,n)=>"link"===e.type?t(e,n):a(e,n)),[a,t]),c=(0,i.useCallback)((e=>!!L(e)||!((e=>"HEADER"===e.rendering)(e)||0===e.content.total||r&&"uniquely-yours-shelf"===e.id)),[r]);return e&&0!==e.length?e[0].content?(0,H.jsx)(H.Fragment,{children:e.filter(c).map(((e,n)=>{const i=e.content&&(0,x.p)((0,x.S)(e.href));if(L(e)){const n=e.content.items[0];return n&&n.name&&n.description&&n.href?(0,H.jsx)(D,{label:n.name,tagline:n.description,uri:n.href},"corona-banner"):null}return(0,H.jsx)(b.JL,{value:"headered-grid",index:n,children:(0,H.jsx)(v.q,{total:e.content.total,seeAllUri:i,pageId:s,title:e.name,tagline:e.tag_line||void 0,index:n,id:e.id,children:e.content.items.map(o)})},e.id)}))}):(0,H.jsx)(b.JL,{value:"headered-grid",children:(0,H.jsx)(v.q,{showAll:!0,title:n,total:e?.length||0,index:0,id:s??"spaces-see-all-grid",children:e?.map(o)})}):null};var M=s(29255);const O="XD65NhAD6ebYxMaW9cZZ",_="AJqEY1gblQDvIgjU0jAH",W="Ft1cMGlqDsCbqmXQyeKN",R="zlBEnsMyvUhuHSEtst4Q",F="INYpiFRlwWIZ0vH30xW2",U=e=>"HEADER"===e.rendering,G=(e,n=[],s)=>{if(!e)return(0,H.jsx)("div",{className:F});const i=n.filter((e=>"background"===e.name));return(0,H.jsxs)(p.gF,{backgroundImages:i,backgroundColor:s,size:0===i.length?p.fR.SMALL:p.fR.DEFAULT,children:[(0,H.jsx)(f.W,{children:(0,H.jsx)(j.i,{text:e})}),(0,H.jsx)(p.sP,{children:(0,H.jsx)(p.xd,{children:e})})]})},V=e=>{const{title:n,images:s,backgroundColor:i}=e;return(0,H.jsx)(H.Fragment,{children:G(n,s,i)})},Y=["ginger-genre-affinity"],Z=i.memo((function({viewData:e,viewId:n,backgroundColor:s,isFullyLoaded:r,isGenre:a,isAnonymous:u,getNextPage:x}){const f=e?.name,{spec:j,UBIFragment:y}=(0,g.fU)(o.createDesktopGenreEventFactory,{data:{identifier:n,uri:`spotify:genre:${n}`}}),v=(0,i.useCallback)((()=>Y.some((n=>e?.href?.includes(n)))),[e]),b=(0,i.useCallback)((()=>{if(!e)return;const n=v();r||n||x()}),[e,v,r,x]),w=(0,i.useMemo)((()=>{const{content:{items:n=[]}={}}=e||{},s=n.filter(U);return s.length>0?s[0]:null}),[e]),C=(0,i.useMemo)((()=>{const{name:n}=e||{};return w?w.name:s&&n}),[s,w,e]),k=(0,i.useMemo)((()=>a||Boolean(C)),[a,C]),T=(0,i.useMemo)((()=>!(!e||!Array.isArray(e.content.items))&&k),[k,e]),A=(0,p.oX)(n)?(0,H.jsx)(p.YD,{isAnonymous:u}):(0,H.jsx)(V,{title:w?.name||C,images:w?.images||[],backgroundColor:s}),P=e?.content.items,E=(0,i.useMemo)((()=>j.shelvesFactory()),[j]);return e?(0,H.jsxs)(H.Fragment,{children:[f?(0,H.jsx)(h.$,{children:f}):null,(0,H.jsx)(m.C,{onReachBottom:b,children:(0,H.jsxs)("section",{className:O,children:[T&&(0,H.jsx)(d.H,{color:s||null}),k?A:(0,H.jsx)("div",{className:F}),(0,H.jsxs)("div",{className:W,children:[k&&A&&(0,H.jsx)(l.I,{backgroundColor:s}),(0,H.jsx)("div",{className:t()(_,"contentSpacing",{[R]:a}),children:(0,H.jsx)(y,{spec:E,children:(0,H.jsx)(q,{spaces:P,viewName:e.name,viewId:n,isAnonymous:u})})})]})]})})]}):(0,H.jsx)(I.h,{hasError:!1,errorMessage:c.ag.get("error.not_found.title.page")})})),B=i.memo((function({viewId:e}){const{isAnonymous:n}=(0,a.v9)(M.Gg),{view:s,getNextPage:i}=(0,u.P)(e),r=!s||null===s.content.next,t=e.endsWith("-page")?e:`${e}-page`,o=(0,a.v9)((e=>e.browse.allItemsStyle?.[t]?.color||"")),c=n=>n.viewId===e||"href"in n&&n.href===(0,x.p)(e),l=(0,a.v9)((e=>e?.browse?.browseAll?.items.some(c)||e?.browse?.topGenres?.items.some(c)||!!o));return(0,H.jsx)(Z,{viewData:s,isFullyLoaded:r,viewId:e,backgroundColor:o,isGenre:l,isAnonymous:n,getNextPage:i})}))},49552:(e,n,s)=>{s.d(n,{P:()=>m});var i=s(67294),r=s(88767),t=s(87961),a=s(85807),o=s(86706),c=s(87577),l=s(94321),d=s(29255),u=s(8247);const m=(e,n)=>{const s=(()=>{const e=(0,c.W6)(u.Xf),n=(0,o.v9)(l.rZ),{locale:s,overrides:r}=(0,o.v9)(d.Gg),t=r?.country||n,a=r?.locale||s;return(0,i.useMemo)((()=>{const n=["album","playlist","artist","show","station","episode","merch","artist_concerts"];return e&&n.push("uri_link"),{country:t,locale:a,types:n.join(",")}}),[t,e,a])})(),{data:m,fetchNextPage:g}=(0,r.useInfiniteQuery)(["useView",e,s],(async({pageParam:n})=>void 0===n?async function(e,n){const{body:s}=await a.kO.getView(t.b.getInstance(),e,n);return s}(e,s):async function(e){const{body:n}=await a.TV.getGeneric(t.b.getInstance(),e);return n}(n)),{cacheTime:n?.cacheTime??18e5,staleTime:n?.staleTime??3e5,getNextPageParam:e=>e.content.next??void 0,getPreviousPageParam:e=>e.content.previous??void 0});return{view:(0,i.useMemo)((()=>m?.pages.reduce(((e,n)=>({...e,content:{...e.content,href:n.content.href,next:n.content.next,offset:n.content.offset,previous:n.content.previous,total:n.content.total,items:e.content.items.concat(n.content.items)}})))),[m?.pages]),getNextPage:g}}},70937:(e,n,s)=>{s.d(n,{C:()=>d});var i=s(67294),r=s(97650),t=s(94184),a=s.n(t);const o="eqw9lvuoZHrkWMTdyTpY",c="lb08f71wES9AQnKx6e0R";var l=s(85893);const d=i.memo((function(e){const{triggerOnInitialLoad:n=!1,onReachBottom:s,showScrollbar:t=!0,horizontalScroll:d=!1,className:u}=e,{ref:m,inView:g}=(0,r.YD)({initialInView:n});return(0,i.useEffect)((()=>{g&&s&&s()}),[g,s]),(0,l.jsxs)("div",{className:a()({[c]:!t,[o]:d},u),"data-testid":"infinite-scroll-list",children:[e.children,(0,l.jsx)("div",{ref:m})]})}))}}]);
//# sourceMappingURL=xpui-routes-view.js.map