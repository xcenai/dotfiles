"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[4338],{51810:(e,s,i)=>{i.r(s),i.d(s,{default:()=>ai});var a=i(67294),t=i(94184),n=i.n(t),r=i(32667),l=i(47647),d=i(39714),c=i(74257),o=i(46802),u=i(96206),m=i(23701),f=i(37415),h=i(26492),g=i(51674),x=i(8716),b=i(32648),j=i(5229),p=i(15852),y=i(50054),N=i(42441),v=i.n(N),C=i(88842),k=i(31638);const E="72px",D="230px",I="160px",S="270px",w="270px",_="384px";var F=i(85893);const L=parseInt(E,10),O=parseInt(S,10),T=parseInt(D,10),B=parseInt(_,10),U=parseInt(I,10),A=({size:e,setSize:s,elementRef:i,isBuddyFeedEmpty:t,showAddFriends:n})=>{(0,a.useEffect)((()=>(v().bind(C.lb.BUDDY_FEED_DECREASE_WIDTH,(()=>{e&&s(e-10)})),v().bind(C.lb.BUDDY_FEED_INCREASE_WIDTH,(()=>{e&&s(e+10)})),()=>{v().unbind(C.lb.BUDDY_FEED_DECREASE_WIDTH),v().unbind(C.lb.BUDDY_FEED_INCREASE_WIDTH)})),[s,e]);const r=!t&&!n,l=r?L:O;return(0,F.jsx)(k.A,{elementRef:i,placement:"inline-start",label:u.ag.get("resize.sidebar"),cssCustomProperty:"--buddy-feed-width",onCSSPropertyChange:e=>{s(e)},initialValue:e,min:l,minExpanded:r?T:l,max:B,thresholdCollapsed:U},l)};var z=i(98197),P=i(34011),R=i(35032),M=i(14134),H=i(73012),Y=i(22867);let Z;!function(e){e[e.LOADING=0]="LOADING",e[e.CONNECTED=1]="CONNECTED",e[e.DISCONNECTED=2]="DISCONNECTED"}(Z||(Z={}));var W=i(24697),q=i(44295),J=i(22247),K=i(88767);var Q=i(91552),G=i(22647),V=i(50266),X=i(1646);const $="w5nHQ74JGTytKwWanjvB",ee="u11kJflcqt7CSXo9qL_T",se="MmENkh6tW0MyjTtTtPHZ",ie="Gl0dkNQbAyNjVZ1IpghI",ae=({name:e,following:s,imageUrl:i,uri:t})=>{const c=(0,V.q)(),o=(0,h.o)(),m=a.createRef(),[f,g]=(0,a.useState)(s);(0,X.d)(G.rA.OPERATION_COMPLETE,(e=>{if(e.data.uris.includes(t))switch(e.data.operation){case G.BM.FOLLOW_USER:g(!0);break;case G.BM.UNFOLLOW_USER:g(!1)}}));const b=(0,a.useCallback)((()=>{f?c.unfollowUsers([t]):(c.followUsers([t]),o({intent:"follow",type:"click",itemIdSuffix:"buddyfeed"})),m.current&&m.current.blur()}),[f,m,t,c,o]);return(0,F.jsxs)("div",{className:$,children:[(0,F.jsx)(Q.q,{label:e,width:40,userIconSize:16,images:(0,a.useMemo)((()=>[{width:40,height:40,url:i}]),[i])}),(0,F.jsxs)("div",{className:n()(ee,"ellipsis-one-line"),children:[(0,F.jsx)(r.D,{as:"p",variant:"mestoBold",className:"ellipsis-one-line",children:e}),f&&(0,F.jsx)(r.D,{as:"p",variant:"finale",className:"ellipsis-one-line",children:u.ag.get("following")})]}),(0,F.jsx)("div",{className:se,children:(0,F.jsx)(x.E,{className:ie,size:"sm",ref:m,onClick:b,ariaLabel:f?u.ag.get("buddy-feed.button.remove-friend"):u.ag.get("buddy-feed.button.add-friend"),icon:f?d.k:l.t})})]})},te="nGInMrf62TCFD9MBnEzz";function ne({facebookFriends:e}){return(0,F.jsx)("div",{className:te,children:e.map((({uri:e,following:s,title:i,image:a})=>(0,F.jsx)(ae,{uri:e,name:i,imageUrl:a,following:s},`fb-friend-${e}`)))})}const re="n6rSk6R7nfmSGSgTRR5_";function le(){return(0,F.jsx)("div",{className:re,children:Array(20).fill(0).map(((e,s)=>(0,F.jsx)(J.C,{isLoading:!0,charCount:100,as:"p",variant:"canon"},s)))})}const de="pZFwflwH1vXVCmAO5vbz",ce="yPL55nV5rC97vJhAf7ke",oe="qpgo9DQ9rVZbO5pLJog5",ue="A3hvkJOGkBNa6zWj6oZa",me="pIyez6N1SF3jW0U5VUx4",fe="lIxuZR4lYTrEKkMYedty",he="VEmC3OHK3uAasHvO5OuA",ge="wzGPtuvvLpOpY1PDu4Qv",xe="YoJTUV4hazVCFNbfKoNq",be=({onBackButtonClick:e})=>{const[s,i]=(0,a.useState)(""),{isLoading:t,friends:n}=(e=>{const s=(0,Y.I)(),i=e.trim().toLowerCase(),{data:a,isLoading:t}=(0,K.useQuery)("useFacebookFriends",(async()=>(await s.fetchFacebookFriends()).sort(((e,s)=>e.title>s.title?1:-1))));return{isLoading:t,friends:a?.filter((({title:e})=>-1!==e.trim().toLowerCase().indexOf(i)))??[]}})(s),l=(0,W.y1)((e=>{i(e.target.value)}),100),d=(0,a.useCallback)((e=>{null!==e&&e.focus()}),[]);return(0,F.jsxs)("div",{className:de,children:[(0,F.jsx)(x.E,{ariaLabel:u.ag.get("buddy-feed.button.back"),onClick:e,ref:d,className:ce,icon:z.e,size:"sm",testId:"back-to-friends"}),(0,F.jsxs)("div",{className:oe,children:[(0,F.jsx)("div",{className:ue,children:(0,F.jsx)(R.z,{className:me,iconSize:32})}),(0,F.jsx)("div",{className:fe,children:t?(0,F.jsx)(J.C,{isLoading:!0,charCount:25,as:"p",variant:"mesto"}):(0,F.jsx)(r.D,{as:"p",variant:"mesto",children:u.ag.get("buddy-feed.number-of-friends",n.length)})})]}),t?(0,F.jsx)(le,{}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)("div",{className:he,children:[(0,F.jsx)(q.j,{className:xe,iconSize:16,role:"presentation"}),(0,F.jsx)("input",{onChange:l,className:ge,placeholder:u.ag.get("buddy-feed.find-in-playlists")})]}),(0,F.jsx)(ne,{facebookFriends:n})]})]})};var je=i(57492);function pe({isOpen:e,onClose:s,onConfirm:i}){return(0,F.jsx)(je.Q,{onClose:s,"aria-label":u.ag.get("web-player.buddy-feed.connect-with-facebook-title"),onConfirm:i,titleText:u.ag.get("web-player.buddy-feed.connect-with-facebook-title"),descriptionText:u.ag.get("web-player.buddy-feed.connect-with-facebook-description"),cancelText:u.ag.get("queue.cancel-button"),confirmText:u.ag.get("web-player.buddy-feed.connect-button"),isOpen:e})}const ye="EmZCbU1_B_J9RAHebolL",Ne="Ym6Yyx83U7mNKOMw9dxw",ve="NXcZaSipzomJ6d4_nM94",Ce="b9rqRkvRvhrSY4FYHQVC",ke="xHc_2FQr3NxfCgfDSVhY",Ee="QAJYN0xWh3h2A5d8_C1g",De="PKhH1CknobkjJdVITsb4",Ie="HgRmCE3NxfiYNtv6pF3H",Se="HnA5mipUMkheAlbxqCn_",we="mvp0xhvZTo0xv0TIwi9u",_e=e=>{const s=(0,h.o)(),{onBackButtonClick:i,feedIsEmpty:t,goToAddFriends:n=!1}=e,l=function(){const e=(0,Y.I)(),[s,i]=(0,a.useState)(Z.LOADING);return(0,a.useEffect)((()=>e.subscribeToFacebookConnectionState((e=>{i(e.connection?Z.CONNECTED:Z.DISCONNECTED)})).cancel),[e]),s}(),d=(0,Y.I)(),[c,o]=(0,a.useState)(!1),[m,f]=(0,a.useState)(!1),[g,b]=(0,a.useState)(!1),j=(0,a.useCallback)((e=>{null!==e&&e.focus()}),[]);if(m)return(0,F.jsxs)("div",{className:Se,children:[(0,F.jsx)(x.E,{onClick:i,ref:j,className:ve,ariaLabel:u.ag.get("buddy-feed.button.back"),icon:z.e,size:"sm"}),(0,F.jsxs)("div",{className:we,children:[(0,F.jsx)(r.D,{as:"h1",variant:"balladBold",className:Ne,children:u.ag.get("error-dialog.generic.header")}),(0,F.jsx)(r.D,{as:"p",variant:"mesto",className:Ce,children:u.ag.get("error-dialog.generic.body")}),(0,F.jsx)(P.D,{colorSet:"invertedLight",onClick:location.reload,children:u.ag.get("error.reload")})]})]});const p=(n||g)&&l===Z.CONNECTED;return(0,F.jsxs)("div",{className:ye,children:[p&&(0,F.jsx)(be,{onBackButtonClick:()=>{t&&b(!1),i()}}),!p&&(0,F.jsxs)("div",{className:Ee,children:[(0,F.jsx)(x.E,{ariaLabel:u.ag.get("buddy-feed.button.back"),onClick:i,className:ve,ref:j,icon:z.e,size:"sm"}),(0,F.jsx)(r.D,{as:"h1",variant:"balladBold",className:Ne,children:u.ag.get("buddy-feed.friend-activity")}),(0,F.jsx)(r.D,{as:"p",variant:"mesto",className:Ce,children:u.ag.get("buddy-feed.facebook.connect-with-friends-default")}),(0,F.jsx)("div",{className:De,children:(0,F.jsx)(P.D,{className:Ie,buttonSize:"sm",iconLeading:R.z,UNSAFE_colorSet:(0,M.Ev)("#2374E1",H.$_Y.white),onClick:()=>{s({intent:"connect-to-facebook",type:"click",itemIdSuffix:"buddyfeed"}),l!==Z.CONNECTED?o(!0):b(!0)},children:u.ag.get("buddy-feed.facebook.button")})}),(0,F.jsx)(r.D,{as:"p",variant:"finale",className:ke,children:u.ag.get("buddy-feed.facebook.disclaimer")}),(0,F.jsx)(pe,{isOpen:c,onClose:()=>{o(!1)},onConfirm:()=>{d.connectToFacebook().then((()=>{b(!0),o(!1)})).catch((()=>{f(!0)}))}})]})]})};var Fe=i(73727),Le=i(38370);const Oe="main-buddyFeed-buddyFeedRoot",Te="main-buddyFeed-buddyFeed",Be="main-buddyFeed-header",Ue="main-buddyFeed-username",Ae="main-buddyFeed-headerTitle",ze="main-buddyFeed-scrollableArea",Pe="main-buddyFeed-friendActivity",Re="qgeL6mhrwhk2RldoRar8",Me="SQHCRmgNjRywo1Lt7rP3",He="SCwzmMSXoZsmhGtGX81s",Ye="VLKqDIGaQn2bILzJKSZ0",Ze="main-buddyFeed-friendsFeedContainer",We="main-buddyFeed-avatarContainer",qe="main-buddyFeed-overlay",Je="Irsd58UNEmDPxdhXKXCs",Ke="main-buddyFeed-activityMetadata",Qe="main-buddyFeed-usernameAndTimestamp",Ge="main-buddyFeed-timestamp",Ve="main-buddyFeed-artistAndTrackName",Xe="main-buddyFeed-playbackContextIcon",$e="main-buddyFeed-playbackContext",es="main-buddyFeed-playbackContextLink",ss="main-buddyFeed-findFriendsButton",is="main-buddyFeed-addFriendPlaceholder",as="QXcmb_46WM1geLhhkcdq",ts="main-buddyFeed-addFriendPlaceholderBtn",ns="MObmOrMxbQpO10ebAtZA",rs="cBPbfBWIIPDzhIT6i3ih",ls="PjDcsgAPmXlcTBJRGpIu",ds="IRpPQFA57qgQ5jicWWaD",cs="Hm3nIbegLclY1uCAmnx_",os="bhRoVUHjWdo9mgUkU6fe",us="BliqfY7vu_qE2C9zs5Ou",ms="qdYWuHZd4HdSWfd4pSQB",fs="DhvYWKjDc7uyF3HfkDJJ",hs="ralK8s_OmE8a8zWcfNKM",gs=({showOnlineIndicator:e})=>(0,F.jsxs)("div",{className:ls,children:[(0,F.jsxs)("div",{className:ds,children:[(0,F.jsx)(Le.f,{iconSize:24}),e?(0,F.jsx)("div",{className:cs}):null]}),(0,F.jsxs)("div",{className:os,children:[(0,F.jsx)("div",{className:n()(us,ms)}),(0,F.jsx)("div",{className:us}),(0,F.jsx)("div",{className:us})]})]}),xs=()=>(0,F.jsxs)("div",{"data-testid":"buddy-feed-empty-state",className:ns,children:[(0,F.jsx)(r.D,{as:"p",className:rs,children:u.ag.get("buddy-feed.let-followers-see-your-listening")}),(0,F.jsx)(gs,{showOnlineIndicator:!0}),(0,F.jsx)(gs,{showOnlineIndicator:!0}),(0,F.jsx)(gs,{}),(0,F.jsx)(r.D,{as:"p",className:rs,children:u.ag.get("buddy-feed.enable-share-listening-activity")}),(0,F.jsx)(Fe.rU,{to:"/preferences",className:fs,children:(0,F.jsx)(P.D,{colorSet:"invertedLight",className:hs,children:u.ag.get("desktop.settings.settings")})})]});var bs=i(94537),js=i(61075);const ps="jUF2eKgYMm64aYykubct",ys="zhL_lhJqzKfJVy7L5VuY",Ns="XqquM_o2eODcnD8Y4QhS",vs="UGtycHBJ4egymBSmD_lX",Cs="ND2ydDPzwQZB7HyaGCN8",ks="D9YN554UFGJle2CPP1TA",Es="v7Zcy9UKVUTDZIMKB6ZF",Ds="RX3U6eAasqazEkuFdnj0",Is=({children:e,page:s})=>{const i=0===s,a=e.filter(((e,i)=>i!==s));return(0,F.jsx)(bs.Z,{component:null,children:a.map((e=>(0,F.jsx)(js.Z,{in:i,timeout:500,classNames:{enter:i?ps:Cs,enterActive:i?ys:ks,exit:i?Ns:Es,exitActive:i?vs:Ds},children:e},i?"first-page":"second-page")))})};function Ss(e){return e.sort(((e,s)=>s.timestamp-e.timestamp))}function ws(e,s){return s.some((s=>s.user.uri===e.user.uri))?s:Ss([...s,e])}function _s(e,s){return s.filter((s=>s.user.uri!==e))}var Fs=i(69518),Ls=i.n(Fs);function Os(e){const s=(0,Y.I)(),[i,t]=(0,a.useState)(Ss(e)),{subscribeToFriend:n,unSubscribeFromFriend:r}=function(e,s){const i=(0,Y.I)(),t=(0,a.useRef)(e),n=(0,a.useRef)({}),r=(0,a.useRef)(s);r.current=s;const l=(0,a.useCallback)((e=>{const s=Ls().from(e)?.username;return i.subscribeToBuddyActivity(s,(e=>{e&&r.current(e)}))}),[i]),d=(0,a.useCallback)((e=>{n.current[e]?.cancel(),delete n.current[e]}),[]);return(0,a.useEffect)((()=>{n.current=t.current.reduce(((e,s)=>{const i=s.user.uri,a=l(i);return e[i]=a,e}),{})}),[l]),(0,a.useEffect)((()=>{const e=n.current;return()=>{Object.values(e).forEach((e=>{e.cancel()}))}}),[]),{subscribeToFriend:l,unSubscribeFromFriend:d}}(e,(e=>{t((s=>function(e,s){return Ss(s.map((s=>s.user.uri===e.user.uri?e:s)))}(e,s)))}));return(0,X.d)(G.rA.OPERATION_COMPLETE,(async e=>{const a=e.data.uris;if(e.data.operation!==G.BM.FOLLOW_USER){if(e.data.operation===G.BM.UNFOLLOW_USER)for(const e of a)i.find((s=>s.user.uri===e))&&(r(e),t((s=>_s(e,s))))}else for(const e of a)if(!i.find((s=>s.user.uri===e))){const i=(await s.fetchFriendActivity([e]))[0];t((e=>ws(i,e))),n(e)}})),i}var Ts=i(12690),Bs=i(4232),Us=i(80507),As=i(35410),zs=i(86514),Ps=i(88214),Rs=i(43480),Ms=i(67892),Hs=i(83813),Ys=i(57784),Zs=i(18261),Ws=i(49343),qs=i(42922),Js=i(84242),Ks=i(634),Qs=i(83692);const Gs=e=>{if(!Number.isInteger(e))return"";const s=Date.now()-Number(e),i=Math.round(s/1e3/60),a=Math.round(s/1e3/60/60),t=Math.round(s/1e3/60/60/24),n=Math.round(s/1e3/60/60/24/7);return t>=7?u.ag.get("time.weeks.short",n):a>=24?u.ag.get("time.days.short",t):i>=60?u.ag.get("time.hours.short",a):i>0?u.ag.get("time.minutes.short",i):u.ag.get("time.now")},Vs=e=>{const{timestamp:s,isNowPlaying:i}=e;return i?(0,F.jsx)(Qs.w,{label:u.ag.get("time.now"),children:(0,F.jsx)(Ks.h,{"aria-label":u.ag.get("time.now"),iconSize:16})}):(0,F.jsx)("span",{children:Gs(s)})},Xs=e=>Date.now()-e<9e5,$s=(e,s)=>{const i=Ls().from(e)?.type;switch(i){case Ls().Type.PLAYLIST:case Ls().Type.PLAYLIST_V2:return(0,F.jsx)(As.X,{uri:e});case Ls().Type.EPISODE:case Ls().Type.SHOW:return(0,F.jsx)(zs.M,{uri:e});case Ls().Type.ALBUM:return(0,F.jsx)(Bs.Y,{uri:e,artistUri:s});case Ls().Type.ARTIST:return(0,F.jsx)(Us.m,{uri:e});default:return null}},ei=e=>{const{show:s=!0,spec:i,friend:t}=e,l=(0,a.useMemo)((()=>t.user.imageUrl?[{url:t.user.imageUrl,width:0,height:0}]:[]),[t.user.imageUrl]),d=(0,h.o)(),c=(0,p.$P)(),o=t.track,m=o.uri,f=o?.context?.uri,{usePlayContextItem:g}=(0,Js.n)({uri:f},{featureIdentifier:"buddy_feed",referrerIdentifier:"buddy_feed"}),{togglePlay:x,isPlaying:b,isActive:j}=g({uri:m}),y=(0,a.useCallback)((()=>{x(),d({intent:b?"pause":"play",type:"click",itemIdSuffix:"buddyfeed_play",targetUri:m});const e=i.friendRowFactory().playButtonFactory();j?b?c.logInteraction(e.hitPause({itemToBePaused:m})):c.logInteraction(e.hitResume({itemToBeResumed:m})):c.logInteraction(e.hitPlay({itemToBePlayed:m}))}),[x,d,b,m,i,j,c]),N=(0,a.useCallback)(((e,s)=>{c.logInteraction(i.friendRowFactory().friendRowLinkFactory({identifier:e}).hitUiNavigate({destination:s}))}),[c,i]),v=(0,Ys.O1)([m],o.name),C=(0,Ys.O1)([o.artist?.uri],o.artist?.name),k=(0,Ys.O1)([o.context?.uri],o.context?.name);return s?(0,F.jsxs)("div",{className:n()(Pe,{[Re]:e.isCollapsed}),children:[(0,F.jsx)(Zs._,{menu:$s(o.context?.uri,o.artist?.uri),children:(0,F.jsxs)("div",{className:We,children:[(0,F.jsx)(Q.q,{label:t.user.name,width:40,userIconSize:16,images:l,withBadge:Xs(t.timestamp)}),(0,F.jsx)(Hs.I,{className:qe,iconClassName:Je,isPlaying:b,isLocked:!1,onClick:y,playAriaLabel:b?u.ag.get("pause"):`${u.ag.get("play")} ${o.artist.name} ${o.name}`})]})}),!e.isCollapsed&&(0,F.jsxs)("div",{className:n()(Ke),children:[(0,F.jsxs)("div",{className:Qe,children:[(0,F.jsx)(r.D,{as:"p",variant:"mestoBold",className:n()(Ue,"ellipsis-one-line"),children:(0,F.jsx)(qs.ZP,{value:"/buddyfeed_user_profile",children:(0,F.jsx)(Zs._,{menu:(0,F.jsx)(Rs.I,{uri:t.user.uri}),children:(0,F.jsx)(Ms.r,{title:t.user.name,to:t.user.uri,dir:"auto",onClick:()=>N("profile_link",t.user.uri),children:t.user.name})})})}),(0,F.jsx)(r.D,{as:"p",variant:"finale",className:n()(Ge),children:(0,F.jsx)(Vs,{timestamp:t.timestamp,isNowPlaying:Xs(t.timestamp)})})]}),(0,F.jsxs)(r.D,{as:"p",variant:"finale",className:Ve,children:[(0,F.jsx)(qs.ZP,{value:"/buddyfeed_track",children:(0,F.jsx)(Zs._,{menu:(0,F.jsx)(Ps.$,{uri:o.uri,contextUri:o.context?.uri,albumUri:o.album?.uri,artists:[o.artist]}),children:(0,F.jsx)(Ms.r,{title:o.name,to:m,className:"ellipsis-one-line",dir:"auto",draggable:!0,onDragStart:v,onClick:()=>N("track_link",m),children:o.name})})}),(0,F.jsx)("span",{"aria-hidden":!0,children:" • "}),(0,F.jsx)(qs.ZP,{value:"/buddyfeed_artist",children:(0,F.jsx)(Zs._,{menu:o.artist?(0,F.jsx)(Us.m,{uri:o.artist.uri}):null,children:(0,F.jsx)(Ms.r,{title:o.artist?.name,to:o.artist?.uri,className:"ellipsis-one-line",dir:"auto",draggable:!0,onDragStart:C,onClick:()=>N("artist_link",o.artist?.uri),children:o.artist?.name})})})]}),(0,F.jsx)(r.D,{as:"p",variant:"finale",className:n()("ellipsis-one-line",$e),children:(0,F.jsx)(qs.ZP,{value:"/buddyfeed_context",children:(0,F.jsx)(Zs._,{menu:$s(o.context?.uri,o.artist?.uri),children:(0,F.jsxs)(Ms.r,{title:o.context?.name,to:o.context?.uri,className:es,draggable:!0,onDragStart:k,onClick:()=>N("context_link",o.context?.uri),children:[(0,F.jsx)(Ws.t,{type:Ls().from(o.context?.uri)?.type,iconSize:16,className:Xe}),(0,F.jsx)("span",{dir:"auto",className:"ellipsis-one-line",children:o.context?.name})]})})})})]})]},t.user.uri):null};function si({friends:e,isCollapsed:s,spec:i}){return(0,F.jsx)(Ts.U5,{flipKey:e.map((e=>e.user.uri)).join(""),children:(0,F.jsx)("ol",{children:e.map(((e,a)=>(0,F.jsx)(Ts.$3,{flipId:e.user.uri,children:(0,F.jsx)("li",{children:(0,F.jsx)(ei,{friend:e,show:a<100,isCollapsed:s,spec:i},e.user.uri)})},e.user.uri)))})})}const ii=parseInt(w,10),ai=({initialFriends:e})=>{const s=(0,a.useRef)(null),i=(0,h.o)(),t=(0,m.n)(),[N,v]=(0,j.z)("buddy-feed-width",ii),C=Os(e),k=N===L,{setValue:E}=(0,y.r)(),D=(0,p.$P)(),{spec:I}=(0,p.fU)(o.createDesktopFriendActivityEventFactory,{});(0,a.useEffect)((()=>{i({intent:"view",type:"impression",itemIdSuffix:"buddyfeed"})}),[i]);const[S,w]=(0,a.useState)(!1),_=()=>{S||D.logInteraction(I.addFriendButtonFactory().hitUiReveal()),w(!S)},O=0===C.length,T=(0,a.useCallback)((()=>{E("ui.show_friend_feed",!1),D.logInteraction(I.closeButtonFactory().hitUiHide())}),[D,E,I]);return(0,F.jsx)(b.DJ.Provider,{value:"buddy_feed",children:(0,F.jsxs)("aside",{"aria-label":u.ag.get("buddy-feed.friend-activity"),className:Oe,children:[(0,F.jsx)(A,{elementRef:s,size:N,setSize:v,isBuddyFeedEmpty:O,showAddFriends:S}),(0,F.jsx)("div",{ref:s,className:n()(Te,{[as]:O}),tabIndex:-1,children:(0,F.jsxs)(Is,{page:S?1:0,children:[(0,F.jsx)("div",{className:Ye,children:(0,F.jsx)(_e,{onBackButtonClick:_,feedIsEmpty:O,goToAddFriends:S})}),(0,F.jsxs)("div",{className:Ze,children:[!k&&(0,F.jsxs)("div",{className:n()(Be),children:[(0,F.jsx)(r.D,{as:"h1",variant:"balladBold",className:n()(Ae),children:u.ag.get("buddy-feed.friend-activity")}),!t&&(0,F.jsx)(g._,{label:u.ag.get("buddy-feed.add-friends"),children:(0,F.jsx)(x.E,{ariaLabel:u.ag.get("buddy-feed.add-friends"),className:n()(ss),testId:"add-friends-button",size:"sm",onClick:_,icon:l.t})}),(0,F.jsx)(g._,{label:u.ag.get("buddy-feed.close"),children:(0,F.jsx)(x.E,{ariaLabel:u.ag.get("buddy-feed.close"),className:n()(ss),size:"sm",onClick:T,icon:d.k})})]}),(0,F.jsxs)(f.U,{className:ze,children:[(0,F.jsx)("div",{className:is,children:(0,F.jsx)(x.E,{ariaLabel:u.ag.get("buddy-feed.add-friends"),className:ts,size:"sm",onClick:_,icon:l.t})}),O?(0,F.jsx)(xs,{}):(0,F.jsx)(si,{friends:C,isCollapsed:k,spec:I})]}),t&&!k&&(0,F.jsx)("div",{className:Me,children:(0,F.jsx)(c.P,{className:He,"data-testid":"add-friends-button",buttonSize:"sm",onClick:_,title:u.ag.get("buddy-feed.find-friends"),children:u.ag.get("buddy-feed.find-friends")})})]})]})})]})})}}}]);
//# sourceMappingURL=xpui-routes-buddy-feed.js.map