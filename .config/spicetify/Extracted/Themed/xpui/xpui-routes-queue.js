"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[3727],{22578:(e,i,t)=>{t.d(i,{$:()=>x});var s=t(64593),a=t(96206),r=t(69691),n=t(8341),l=t(89952),o=t(67294),u=t(51615),c=t(24183);var d=t(85893);function m(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const x=({children:e,usePlayingItem:i})=>{let t=m(e);(e=>{const{mainLandmarkRef:i}=(0,c.Oh)(),t=(0,u.k6)(),s=t.location?.state?.preventMoveFocus,a=(0,o.useRef)(t.length<2);a.current=t.length<2,(0,o.useEffect)((()=>{const t=i.current;!s&&!a.current&&t&&e&&(t.setAttribute("aria-label",e),t.focus())}),[e,i,s])})(e);const{isPlaying:x}=(0,r.IK)(),g=(0,n.Y)((e=>e?.item));return g&&(x||i)&&((0,l.G_)(g)?t=[g.name,g.artists.map((e=>e.name)).join(a.ag.getSeparator())].join(" • "):(0,l.iw)(g)?t=[g.name,g.show.name].join(" • "):(0,l.k6)(g)&&(t=m(a.ag.get("ad-formats.advertisement")))),(0,d.jsx)(s.q,{defaultTitle:"Spotify",defer:!1,children:(0,d.jsx)("title",{children:t})})}},70369:(e,i,t)=>{t.d(i,{$:()=>s.$});var s=t(22578)},69376:(e,i,t)=>{t.d(i,{n:()=>A});var s=t(67294),a=t(94184),r=t.n(a),n=t(51615),l=t(32667),o=t(34142),u=t(47921),c=t(96206),d=t(24697),m=t(32648),x=t(85951);var g=t(32626),h=t(43031),p=t(30005),j=t(21691);const y="main-topBar-contentArea",f="muYk5XIwKmqR9iNibk_f",v="queue-tabBar-headerItem",b="queue-tabBar-moreButton",k="queue-tabBar-moreButtonActive",C="yxf_6IsQEmHjijEBUMTP",N="queue-tabBar-active",P="queue-tabBar-headerItemLink",E="queue-tabBar-header",I="queue-tabBar-chevron";var U=t(85893);const w=({items:e,activeItemId:i})=>(0,U.jsx)(p.v,{children:e.map((e=>e.disabled?(0,U.jsx)(j.s,{disabled:!0,role:"menuitemradio",className:C,onClick:e.handleClick,children:e.title},e.uri):(0,U.jsx)(j.s,{role:"menuitemradio",to:e.to,exact:!0,"aria-checked":e.itemId===i,className:C,activeClassName:N,onClick:e.handleClick,children:e.title},e.uri)))}),A=(0,s.memo)((function({isCentered:e,links:i,landmarkLabel:t,className:a}){const p=(0,s.useRef)(null),[j,C]=(0,s.useState)([]),[A,R]=(0,s.useState)(0),[T,D]=(0,s.useState)([]),O=function(){const[e,i]=(0,s.useState)(window.innerWidth),{scrollNodeChildRef:t}=(0,s.useContext)(m.VX),a=(0,d.y1)((e=>{e?.width&&i(e.width)}),250);return(0,x.y)({refOrElement:t,observeOnly:"width",onResize:a}),e}()??1/0,{pathname:S}=(0,n.TH)(),q=i.find((e=>e.to===S));return(0,s.useEffect)((()=>{p.current&&R(p.current.clientWidth)}),[O]),(0,s.useEffect)((()=>{if(!p.current)return;const e=Array.from(p.current.children).map((e=>e.clientWidth));C(e)}),[i]),(0,s.useEffect)((()=>{if(!p.current)return;if(j.slice(0,-1).reduce(((e,i)=>e+i),0)<=A)return void D([]);const e=j.reduce(((e,i)=>e>i?e:i),0),i=[];let t=e;j.forEach(((e,s)=>{A>=t+e?t+=e:i.push(s)})),D(i)}),[A,j]),(0,U.jsx)("nav",{className:r()(a,y),"aria-label":t,children:(0,U.jsxs)("ul",{className:e?f:E,ref:p,children:[i.filter(((e,i)=>!T.includes(i))).map((e=>(e?.render??(e=>e))((0,U.jsx)("li",{className:v,children:e.disabled?(0,U.jsx)("div",{className:P,children:(0,U.jsx)(l.D,{variant:"mestoBold",children:e.title})}):(0,U.jsx)(h.O,{exact:!0,className:P,activeClassName:N,to:e.to,onClick:e.handleClick,children:(0,U.jsx)(l.D,{variant:"mestoBold",children:e.title})})},e.to)))),T.length||0===j.length?(0,U.jsx)("li",{className:v,children:(0,U.jsx)(g.xV,{renderInline:!0,menu:(0,U.jsx)(w,{items:i.filter(((e,i)=>T.includes(i))),activeItemId:q?.itemId}),children:(e,i,t)=>(0,U.jsxs)("button",{className:r()(b,{[k]:q}),type:"button",onClick:i,ref:t,children:[(0,U.jsx)(l.D,{variant:"mestoBold",children:q?q.title:c.ag.get("more")}),e?(0,U.jsx)(o.U,{iconSize:16,className:I,"aria-hidden":"true"}):(0,U.jsx)(u.i,{iconSize:16,className:I,"aria-hidden":"true"})]})})}):null]})})}))},32594:(e,i,t)=>{t.r(i),t.d(i,{default:()=>Le});var s=t(67294),a=t(51615),r=t(73305),n=t(74414),l=t(96335),o=t(68960),u=t(12164),c=t(32667),d=t(96206),m=t(22141);const x="gTvMl6pwfRD9PobMSB5x",g="hNAQG0TAe2WFYyf_iZEB",h="Zhzrb2k9nQRActS2lp4U";var p=t(85893);const j=()=>(0,p.jsxs)("div",{className:x,children:[(0,p.jsx)(m.Y,{iconSize:64,"aria-hidden":"true"}),(0,p.jsx)(c.D,{as:"h1",variant:"alto",semanticColor:"textBase",className:g,children:d.ag.get("history.empty-title")}),(0,p.jsx)("p",{children:d.ag.get("history.empty-description")})]});var y=t(63766),f=t(47991),v=t(42922),b=t(89952),k=t(42781),C=t(38470),N=t(49961),P=t(69518),E=t.n(P),I=t(25988),U=t(26921),w=t(88214),A=t(21509),R=t(94107),T=t(82760),D=t(18261),O=t(85576),S=t(87257),q=t(57978),L=t(19986),_=t(84242),M=t(84788),Q=t(22345),F=t(43028);const B=s.memo((function({uri:e,name:i,duration_ms:t,index:s,imgUrl:a,artists:r,album:n,isExplicit:l,isMOGEFRestricted:o,type:u}){const{isActive:c,isPlaying:m,triggerPlay:x,togglePlay:g}=(0,_.n)({uri:e},{featureIdentifier:"history"}),h=u===k.p.TRACK,j=u===k.p.EPISODE,y=u===k.p.CHAPTER,f=(0,L._)(e),b=(0,F.k)(e),{badges:C,hasBadges:N}=(0,M.r)({downloadAvailability:f,isExplicit:l,isMOGEFRestricted:o}),P=r?.map((e=>e.name)).join(d.ag.getSeparator())||"";let B;return j?B=(0,p.jsx)(I.k,{uri:e,contextUri:e,showUri:n.uri}):y?B=(0,p.jsx)(Q.r,{uri:e,contextUri:e,showUri:n.uri}):h&&E().isLocalTrack(e)?B=(0,p.jsx)(U.N,{uri:e,contextUri:e}):h&&(B=(0,p.jsx)(w.$,{uri:e,contextUri:e,albumUri:n.uri,artists:r})),(0,p.jsx)(v.ZP,{value:"row",index:s,children:(0,p.jsx)(D._,{menu:B,children:(0,p.jsxs)(T.c,{uri:e,contextUri:e,index:s,ariaRowIndex:s,onTriggerPlay:()=>{x()},isActive:c,isPlayable:b,ageRestricted:o,dragMetadata:{name:i,createdBy:P},children:[(0,p.jsxs)(A.vZ,{ariaColIndex:0,children:[(0,p.jsx)(A.VG,{uri:e,src:a,isPlaying:m,isActive:c,isLocked:!1,onClick:()=>{g()},isEpisode:E().isEpisode(e),playAriaLabel:d.ag.get("tracklist.a11y.play",i,P)}),(0,p.jsxs)(A.vm,{children:[(0,p.jsx)(A.Wh,{titleText:i,children:i}),N&&(0,p.jsxs)(A.g3,{children:[C.download&&(0,p.jsx)(O.G,{size:16}),C.explicit&&(0,p.jsx)(S.N,{}),C.nineteen&&(0,p.jsx)(q.X,{className:R.Z.nineteen,size:16})]}),(0,p.jsx)(A.K9,{children:E().isTrack(e)?(0,p.jsx)(A.T6,{artists:r}):r[0]?.name??""})]})]}),(0,p.jsx)(A.UA,{ariaColIndex:2,children:(0,p.jsx)(A.BM,{nonInteractive:E().isLocalTrack(e),uri:n.uri,name:n.name,creatorUri:r?.[0]?.uri,children:n.name})}),(0,p.jsxs)(A.mU,{ariaColIndex:1,children:[!E().isLocalTrack(e)&&!y&&(0,p.jsx)(A.qS,{uri:e,type:u}),(0,p.jsx)(A.A$,{duration:t}),(0,p.jsx)(A.Zv,{menu:B,label:d.ag.get("more.label.track",i,P)})]})]})})})}),((e,i)=>e.uri===i.uri)),G=s.memo((function({items:e}){const i=(0,s.useCallback)(((e,i)=>{const t=(0,N.X)(e.images??[],{desiredSize:40});return(0,b.G_)(e)?e.isLocal?(0,p.jsx)(B,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.album,artists:e.artists,isExplicit:e.isExplicit??!1,isMOGEFRestricted:e.is19PlusOnly??!1,type:k.p.TRACK},i+e.uri):(0,p.jsx)(B,{index:i,uri:(0,f.$)(e),name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.album,artists:e.artists,isExplicit:e.isExplicit??!1,isMOGEFRestricted:e.is19PlusOnly??!1,type:k.p.TRACK},i+e.uri):(0,b.iw)(e)?(0,p.jsx)(B,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.show,artists:[],isExplicit:!1,isMOGEFRestricted:!1,type:k.p.EPISODE},i+e.uri):(0,b.G7)(e)?(0,p.jsx)(B,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.book,artists:[],isExplicit:!1,isMOGEFRestricted:!1,type:k.p.CHAPTER},i+e.uri):((0,b.k6)(e)||(0,b.RB)(e)||(0,C._)(e),(0,p.jsx)(y.hU,{height:`${y.dN}px`}))}),[]),t=(0,s.useMemo)((()=>[y.QD.TITLE,y.QD.ALBUM_OR_PODCAST,y.QD.DURATION]),[]),a=(0,s.useCallback)((e=>e.uri),[]);return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(v.ZP,{value:"play-history-tracklist",children:(0,p.jsx)(y.Pv,{ariaLabel:"play-history",hasHeaderRow:!0,columns:t,renderRow:i,resolveUri:a,tracks:e,nrTracks:e.length,rowPlaceholder:y.hU,limit:50})})})})),$="dt3fysZYdQ6hhWfpmjAu",W="n6LsTkKvpO88xeRyRTdw",K=()=>{const e=(0,l.U5)();return e&&e.items.length>0?(0,p.jsxs)("div",{className:$,children:[(0,p.jsx)(c.D,{as:"h1",variant:"canon",semanticColor:"textBase",className:W,children:d.ag.get("view.recently-played")}),(0,p.jsx)(G,{items:e.items})]}):(0,p.jsx)(j,{})};var Z=t(94184),z=t.n(Z),H=t(56081),X=t(70369),Y=t(67892),V=t(23716),J=t(34891),ee=t(86081);var ie=t(14472),te=t(15852),se=t(74257);const ae=({onClick:e})=>(0,p.jsx)(se.P,{onClick:e,buttonSize:"sm",children:d.ag.get("queue.clear-queue")});var re=t(73012),ne=t(86025),le=t(34011),oe=(t(31143),t(84465));const ue="i9rTNwKyT_NMDghd8q65",ce="DXBMXJD8Zoj4V8MxIVTB",de="UEtqSfWDubkNdPIaEkfA",me="I_Rc74Je7W4sk6KAVR05",xe=s.memo((function({onClose:e,onConfirm:i,isOpen:t,itemCount:a}){const r=(0,s.useCallback)((t=>{i(),e(t)}),[i,e]),n=d.ag.get("queue.confirm-title",a);return(0,p.jsx)(oe.Z,{shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,onRequestClose:e,contentLabel:n,isOpen:t,children:(0,p.jsxs)("div",{className:ue,children:[(0,p.jsx)(c.D,{as:"h2",variant:"cello",className:ce,children:n}),(0,p.jsx)(c.D,{as:"p",variant:"mesto",className:de,paddingBottom:re.g4V,children:d.ag.get("queue.confirm-message")}),(0,p.jsxs)("div",{className:z()("encore-light-theme",me),children:[(0,p.jsx)(ne.o,{onClick:e,children:d.ag.get("queue.cancel-button")}),(0,p.jsx)(le.D,{onClick:r,children:d.ag.get("queue.confirm-button")})]})]})})}));var ge=t(73727),he=t(15935);const pe=()=>(0,p.jsxs)("div",{className:x,children:[(0,p.jsx)(he.S,{iconSize:64,"aria-hidden":"true"}),(0,p.jsx)(c.D,{as:"h1",variant:"alto",semanticColor:"textBase",className:g,children:d.ag.get("queue.empty-title")}),(0,p.jsx)("p",{children:d.ag.get("queue.empty-description")}),(0,p.jsx)(ge.OL,{to:"/search",className:h,children:(0,p.jsx)(le.D,{colorSet:"invertedLight",children:d.ag.get("queue.fine-something")})})]});let je;!function(e){e[e.NowPlaying=0]="NowPlaying",e[e.NextInQueue=1]="NextInQueue",e[e.NextUp=2]="NextUp"}(je||(je={}));var ye=t(26492),fe=t(74548),ve=t(1848),be=t(57784),ke=t(69691);let Ce;!function(e){e.TRACK="track",e.EPISODE="episode",e.CHAPTER="chapter",e.LOCAL="local",e.AD="ad"}(Ce||(Ce={}));const Ne=s.memo((function({uri:e,uid:i,contextUri:t,name:a,duration_ms:r,artists:n,index:l,rowNumberOffset:o,imgUrl:u,isExplicit:c,isPlayable:m,isMOGEFRestricted:x,album:g,type:h,section:j,usePlayContextItem:y,isAutoPlay:f=!1,isEnhanced:b,queueSpec:k}){const C=(0,te.$P)(),N=(0,V.g)(),{triggerPlay:P,togglePlay:_}=y({uid:i,uri:e,index:l}),{spec:B}=(0,te.fU)(ve.createDesktopTrackListRowEventFactory,{data:{position:l,reason:"",uri:e}}),{isActive:G,isPlaying:$}=(0,ke.$o)(e),W=(0,s.useCallback)(((t,s)=>{i?P({loggingParams:s},(()=>N.skipToNext({uri:e,uid:i}))):P({loggingParams:s})}),[N,P,e,i]),K=(0,s.useCallback)((t=>{i?_({loggingParams:t},(()=>G?$?N.pause():N.resume():N.skipToNext({uri:e,uid:i}))):_({loggingParams:t})}),[N,_,e,i,G,$]),Z=h===Ce.TRACK,z=h===Ce.EPISODE,H=h===Ce.CHAPTER,X=z&&"video"===g?.mediaType,Y=h===Ce.LOCAL,J=h===Ce.AD,ee=n?.map((e=>e.name)).join(d.ag.getSeparator())||"",ie=(0,L._)(e),se=(0,F.k)(e,m,E().isLocalTrack(e)),{badges:ae,hasBadges:re}=(0,M.r)({downloadAvailability:ie,isExplicit:c,isMOGEFRestricted:x,isEnhanced:b});let ne;ne=z?(0,p.jsx)(I.k,{uri:e,uid:f?void 0:i,showUri:g.uri,contextUri:t}):H?(0,p.jsx)(Q.r,{uri:e,uid:f?void 0:i,showUri:g.uri,contextUri:t}):Y?(0,p.jsx)(U.N,{uri:e,uid:f?void 0:i,contextUri:t}):J?null:(0,p.jsx)(w.$,{uri:e,uid:f?void 0:i,albumUri:g.uri,artists:n,contextUri:t});const le=(0,s.useCallback)(((t,s)=>{const{meta:a,uris:r}=t,n=r.map((e=>({uri:e,uid:null})));let l;l=s===T.W.Before?{before:{uri:e,uid:i??null}}:{after:{uri:e,uid:i??null}},a.section===je.NowPlaying?N.addToQueue(n):a.origin===je.NowPlaying?N.insertIntoQueue(n,l):N.reorderQueue(n,l)}),[N,i,e]),oe=(0,s.useCallback)(((t,s)=>{const{uids:a}=t,r=a.map((e=>({uri:"",uid:e})));let n;n=s===T.W.Before?{before:{uri:e,uid:i??null}}:{after:{uri:e,uid:i??null}},N.reorderQueue(r,n)}),[N,i,e]),ue=f?[]:[be.aN[E().Type.TRACK],be.aN[E().Type.EPISODE]];return(0,p.jsx)(v.ZP,{value:"row",index:l,children:(0,p.jsx)(D._,{menu:ne,children:(0,p.jsxs)(T.c,{uri:e,contextUri:t,index:l,onTriggerPlay:W,isActive:j===je.NowPlaying&&G,ariaRowIndex:l,isPlayable:se,ageRestricted:x,spec:B,dragMetadata:{name:a,createdBy:ee,sectionId:j},onInsert:(i,t,s,a,r)=>{le({uris:i,dropIndex:t,meta:r},s),k&&C.logInteraction(k.dragAddItemToQueue({itemToAddToQueue:e}))},onMove:(e,i,t,s)=>{oe({uids:e,dropIndex:i,meta:s},t),k&&C.logInteraction(k.dragSort())},allowedDropTypes:ue,children:[(0,p.jsx)(A.Dd,{ariaColIndex:0,children:(0,p.jsx)(A.Du,{uri:e,playAriaLabel:d.ag.get("tracklist.a11y.play",a,ee),isPlaying:j===je.NowPlaying&&$,isActive:j===je.NowPlaying&&G,spec:B,onClick:(e,i)=>{K(i)},children:(0,p.jsx)(A.km,{children:l+o+1})})}),(0,p.jsxs)(A.vZ,{ariaColIndex:1,children:[(0,p.jsx)(A.lD,{src:u,isVideo:X,isEpisode:z||H}),(0,p.jsxs)(A.vm,{children:[(0,p.jsx)(A.Wh,{titleText:a,children:a}),re&&(0,p.jsxs)(A.g3,{children:[ae.enhanced&&(0,p.jsx)(fe._,{iconSize:16,className:R.Z.enhanced,title:d.ag.get("web-player.enhance.button_text_enhanced"),"aria-label":d.ag.get("web-player.enhance.button_text_enhanced")}),ae.download&&(0,p.jsx)(O.G,{size:16}),ae.explicit&&(0,p.jsx)(S.N,{}),ae.nineteen&&(0,p.jsx)(q.X,{className:R.Z.nineteen,size:16})]}),(0,p.jsxs)(A.K9,{children:[Z&&(0,p.jsx)(A.T6,{artists:n,spec:B}),(z||Y)&&!X&&ee]})]})]}),(0,p.jsx)(A.UA,{ariaColIndex:2,children:(0,p.jsx)(A.BM,{nonInteractive:Y,uri:g.uri,name:g.name,creatorUri:n?.[0]?.uri,spec:B,children:g.name})}),(0,p.jsxs)(A.mU,{ariaColIndex:3,children:[!Y&&!H&&(0,p.jsx)(A.qS,{uri:e,type:h}),(0,p.jsx)(A.A$,{duration:r}),(0,p.jsx)(A.Zv,{menu:ne,label:d.ag.get("more.label.track",a,ee),spec:B})]})]})})})}),((e,i)=>e.uri===i.uri&&e.index===i.index&&e.name===i.name)),Pe=s.memo((function({tracks:e,ariaLabel:i,contextUri:t,rowNumberOffset:a=0,section:r,usePlayContextItem:n}){const l=(0,ye.o)(),o=(0,V.g)(),u=(0,s.useCallback)(((e,i)=>{l({intent:"remove-from-queue",type:"click"}),o.removeFromQueue(e.map((e=>({uid:e.id,uri:e.uri})))).then(i)}),[o,l]),c=(0,s.useCallback)(((e,i)=>{if((0,b.iw)(e)){const s=(0,N.X)(e.show?.images,{desiredSize:40});return(0,p.jsx)(Ne,{index:i,rowNumberOffset:a,imgUrl:s?.url||"",uri:(0,f.$)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.show.name,uri:e.show.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:Ce.EPISODE,section:r,usePlayContextItem:n,isAutoPlay:"autoplay"===e.provider},`${i}${a}${e.uid}`)}if((0,b.G7)(e)){const s=(0,N.X)(e.images||void 0,{desiredSize:40});return(0,p.jsx)(Ne,{index:i,rowNumberOffset:a,imgUrl:s?.url||"",uri:(0,f.$)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.book.name,uri:e.book.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:Ce.CHAPTER,section:r,usePlayContextItem:n,isAutoPlay:"autoplay"===e.provider},`${i}${a}${e.uid}`)}if((0,b.k6)(e)){const s=(0,N.X)(e.images||void 0,{desiredSize:40});return(0,p.jsx)(Ne,{index:i,rowNumberOffset:a,imgUrl:s?.url||"",uri:e.uri,uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.advertiser??e.title??d.ag.get("ad-formats.advertisement"),artists:[],album:{name:"",uri:""},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:Ce.AD,section:r,usePlayContextItem:n,isAutoPlay:"autoplay"===e.provider,isEnhanced:!1},`${i}${a}${e.uid}`)}if((0,b.G_)(e)||(0,b.RB)(e)){const s=(0,N.X)(e?.album?.images,{desiredSize:40}),l=e.type===k.p.TRACK?e:null;return(0,p.jsx)(Ne,{index:i,rowNumberOffset:a,imgUrl:s?.url||"",uri:(0,f.$)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,album:e.album,isExplicit:l?.isExplicit??!1,isPlayable:!0,isMOGEFRestricted:l?.is19PlusOnly??!1,type:l?.isLocal?Ce.LOCAL:Ce.TRACK,section:r,usePlayContextItem:n,isAutoPlay:"autoplay"===e.provider,isEnhanced:"enhanced_recommendation"===e.metadata?.provider},`${i}${a}${e.uid}`)}return(0,p.jsx)(y.Lb,{height:`${y.dN}px`})}),[a,t,r,n]),m=(0,s.useMemo)((()=>[y.QD.INDEX,y.QD.TITLE,y.QD.ALBUM,y.QD.DURATION]),[]),x=(0,s.useCallback)((e=>e.uri),[]),g=(0,s.useCallback)((e=>e.uid??e.uri),[]);return(0,p.jsx)(y.Pv,{ariaLabel:i,tracks:e,nrTracks:e.length,onRemove:u,renderRow:c,resolveUri:x,resolveUid:g,columns:m})})),Ee="rHpv7osDRvs3SUPMpQ_g",Ie="DG9CsoFIptJhAneKoo_F",Ue="jf2HafzDEI9jn7Yo05eM",we="H3Puuvc2nV0GoZRrfpRS",Ae="HckHyQocDDePWQL2baOY",Re=()=>{const{uri:e,description:i}=(0,ie.$)(),{spec:t,logger:a,UBIFragment:n}=(0,te.fU)(H.createDesktopNowPlayingQueueEventFactory,{data:{identifier:r.Wg.NOWPLAYING_QUEUE,uri:e??""}}),l=(0,s.useMemo)((()=>t.nowPlayingSectionFactory()),[t]),o=(0,s.useMemo)((()=>t.nextInQueueSectionFactory()),[t]),u=(0,s.useMemo)((()=>t.nextFromSectionFactory()),[t]),m=(0,V.g)(),{current:x,nextUp:g,queued:h}=function(){const e=(0,V.g)(),[i,t]=(0,s.useState)(e.getQueue());return(0,ee.G)(J.rg.QUEUE_UPDATE,(e=>t(e.data))),i}(),[j,y]=(0,s.useState)(!1),f=(0,s.useCallback)((()=>{y(!1)}),[y]),b=(0,s.useCallback)((()=>{m.clearQueue(),y(!1)}),[m]),k=(0,s.useCallback)((async()=>{let e;const i=o.clearQueueButtonFactory();h.length>0&&(e=i.hitRemoveItemsFromQueue({numberOfItemsToRemoveFromQueue:h.length}),a.logInteraction(e)),y(!0)}),[a,o,h]),{usePlayContextItem:C}=(0,_.n)({uri:e??""},{featureIdentifier:"queue"}),N="autoplay"===x?.provider,P=g.filter((e=>N?e:"autoplay"!==e.provider)),E=!!h?.length,I=!!P?.length,U=!1===(x||E||I),w=(0,s.useCallback)((async()=>{if(!I)return;const i=t.nextFromSectionFactory().queueContextLinkFactory().hitUiNavigate({destination:e??""});a.logInteraction(i)}),[I,a,t,e]);return U?(0,p.jsx)(pe,{}):(0,p.jsxs)("div",{className:Ee,children:[(0,p.jsx)(X.$,{children:d.ag.get("queue.page-title")}),(0,p.jsx)(c.D,{as:"h1",variant:"canon",semanticColor:"textBase",className:Ie,children:d.ag.get("playback-control.queue")}),x&&e&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c.D,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",children:d.ag.get("queue.now-playing")}),(0,p.jsx)(n,{spec:l,children:(0,p.jsx)(v.ZP,{value:"now-playing",children:(0,p.jsx)(Pe,{ariaLabel:d.ag.get("queue.now-playing"),tracks:[x],contextUri:e,section:je.NowPlaying,usePlayContextItem:C})})})]}),E&&e&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:z()(Ae,Ue),children:[(0,p.jsx)(c.D,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",children:d.ag.get("queue.next-in-queue")}),E&&(0,p.jsx)(ae,{onClick:k})]}),(0,p.jsx)(n,{spec:o,children:(0,p.jsx)(v.ZP,{value:"next-in-queue",children:(0,p.jsx)(Pe,{ariaLabel:d.ag.get("queue.next-in-queue"),tracks:h,rowNumberOffset:1,contextUri:"spotify:app:queue:NextInQueue",section:je.NextInQueue,usePlayContextItem:C})})})]}),I&&e&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c.D,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",className:z()(Ue,"standalone-ellipsis-one-line"),children:i&&!N?(0,p.jsxs)(p.Fragment,{children:[d.ag.get("queue.next-from")," ",(0,p.jsx)(Y.r,{className:we,to:e,onClick:w,children:i})]}):d.ag.get("queue.next-up")}),(0,p.jsx)(n,{spec:u,children:(0,p.jsx)(v.ZP,{value:"next-up",children:(0,p.jsx)(Pe,{ariaLabel:d.ag.get("queue.next-up"),tracks:P,rowNumberOffset:1+(h?.length||0),contextUri:"spotify:app:queue:NextUp",section:je.NextUp,usePlayContextItem:C})})})]}),(0,p.jsx)(xe,{itemCount:h?.length||0,isOpen:j,onClose:f,onConfirm:b})]})};var Te=t(69376),De=t(28638),Oe=t(63138);const Se="queue-tabBar-nav",qe=()=>{const e=(0,o.Y)(),i=(0,s.useCallback)((e=>(0,p.jsx)(Oe.v,{placement:"bottomEnd",arrow:"topStart",title:d.ag.get("pick-and-shuffle.upsell.title.queue"),children:e})),[]),t=(0,s.useMemo)((()=>[{title:d.ag.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue",render:i,disabled:e},{title:d.ag.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}]),[e,i]);return(0,p.jsx)(De.w,{children:(0,p.jsx)(Te.n,{className:Se,links:t})})},Le=()=>{const e=(0,l.nF)(),i=(0,o.Y)();return(0,p.jsxs)("section",{className:"contentSpacing",children:[(0,p.jsxs)(a.rs,{children:[i&&(0,p.jsx)(n.o,{from:"/queue",to:"/history"}),e&&(0,p.jsx)(a.AW,{path:"/history",children:(0,p.jsx)(u.K,{pageId:r.Wg.NOWPLAYING_HISTORY,children:(0,p.jsx)(K,{})})}),(0,p.jsx)(a.AW,{path:"/queue",children:(0,p.jsx)(u.K,{pageId:r.Wg.NOWPLAYING_QUEUE,children:(0,p.jsx)(s.Suspense,{fallback:null,children:(0,p.jsx)(Re,{})})})})]}),e&&(0,p.jsx)(qe,{})]})}},47991:(e,i,t)=>{t.d(i,{$:()=>s});const s=e=>e?.linked_from?.uri||e.uri}}]);
//# sourceMappingURL=xpui-routes-queue.js.map