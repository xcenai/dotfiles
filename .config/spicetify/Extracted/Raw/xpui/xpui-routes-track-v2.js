"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[4179],{29464:(e,a,t)=>{t.d(a,{E:()=>l});var s=t(42922),i=t(34722),r=t(13768),n=t(85893);const l=({album:e,index:a,artistURI:t})=>(0,n.jsx)(s.ZP,{value:"card",index:a,children:(0,n.jsx)(r.i,{index:a,latest:!1,showType:!0,...(0,i.B$)(e,t,e.name)})})},57060:(e,a,t)=>{t.d(a,{R:()=>d});var s=t(96206),i=t(42922),r=t(7073),n=t(34722),l=t(19480),c=t(29464),o=t(85893);const d=({albums:e,artistName:a,artistId:t,artistUri:d,className:u})=>e?(0,o.jsx)(i.ZP,{value:"shelf/albums",children:(0,o.jsx)(l.P,{total:e.totalCount,title:s.ag.get("rich-page.popular-albums-by-artist",{artist:a}),seeAllUri:`${(0,n.GJ)(t)}:discography:${r.VZ.Album.toLowerCase()}`,seeAllLabel:s.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,className:u,children:(0,n.Hr)(e.items).map(((e,a)=>(0,o.jsx)(c.E,{album:e,index:a,artistURI:d},e.uri)))})}):null},70880:(e,a,t)=>{t.d(a,{j:()=>u});var s=t(67294),i=t(69518),r=t.n(i),n=t(32667),l=t(96206),c=t(84242),o=t(39119),d=t(85893);const u=({artistName:e,artistUri:a,headerClassName:t,rowClassName:i,topTracks:u,topTracksTransformer:m,uri:h})=>{const g=r().from(h),p=(0,s.useMemo)((()=>u?.items.map((e=>m(e,h)))),[u?.items,m,h]),{usePlayContextItem:x}=(0,c.n)({uri:a},{featureIdentifier:"artist"});return p&&p.length>0?(0,d.jsxs)("div",{className:i,children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(n.D,{variant:"mesto",children:l.ag.get("rich-page.popular-tracks")}),(0,d.jsx)(n.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:t,children:e})]}),(0,d.jsx)(o.k,{nrTracks:p.length,initialTracks:p,usePlayContextItem:x,parentEntityId:"track"===g?.type?g?.getBase62Id():""})]}):null}},55095:(e,a,t)=>{t.d(a,{y:()=>d});var s=t(96206),i=t(42922),r=t(7073),n=t(34722),l=t(19480),c=t(29464),o=t(85893);const d=({artistId:e,artistName:a,artistUri:t,className:d,singles:u})=>u?(0,o.jsx)(i.ZP,{value:"shelf/singles-and-eps",children:(0,o.jsx)(l.P,{total:u.totalCount,title:s.ag.get("rich-page.popular-singles-and-eps-by-artist",{artist:a}),seeAllUri:`${(0,n.GJ)(e)}:discography:${r.VZ.Single.toLowerCase()}`,seeAllLabel:s.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,className:d,children:(0,n.Hr)(u.items).map(((e,a)=>(0,o.jsx)(c.E,{album:e,index:a,artistURI:t},e.uri)))})}):null},2438:(e,a,t)=>{t.d(a,{L:()=>s.L});var s=t(3702)},98759:(e,a,t)=>{t.d(a,{X7:()=>n,pf:()=>r,qo:()=>i});var s=t(7073);const i=e=>`spotify:artist:${e}`,r=e=>({artists:e.artists.items.map((e=>({uri:e.uri,name:e.profile.name}))),images:e.coverArt?.sources||[],name:e.name,uri:e.uri,year:e.date?.year,type:e.type,sharingInfo:e.sharingInfo??null}),n=({track:{uri:e,name:a,playcount:t,duration:{totalMilliseconds:i},contentRating:r,artists:{items:n},albumOfTrack:l,playability:{playable:c}}},o)=>({uri:e,contextUri:o,totalMilliseconds:i,name:a,contentRating:r?.label||s.KS.None,isPlayable:c,playcount:parseInt(t||"0",10),artists:n.map((e=>({uri:e.uri,name:e.profile.name}))),imageUrl:l?.coverArt?.sources?.length?l?.coverArt.sources[0].url:"",albumUri:l?.uri||""})},54704:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ga});var s=t(67294),i=t(86706),r=t(51615),n=t(69518),l=t.n(n),c=t(30373),o=t(96206),d=t(18270),u=t(43683),m=t(48690),h=t(88214),g=t(70369),p=t(60289),x=t(59482),I=t(72907),E=t(6158),y=t(55120),S=t(53538),j=t(44065),v=t(32626),_=t(85522),k=t(48817),Z=t(32667),L=t(12902);let b;!function(e){e.LOADING="LOADING",e.LOADED="LOADED",e.UNAVAILABLE="UNAVAILABLE"}(b||(b={}));const f=(0,L.ZP)(((e,a)=>{switch(a.type){case"LYRICS_LOADING":e[a.uri]={status:b.LOADING};break;case"LYRICS_LOADED":e[a.uri]={status:b.LOADED,data:{lyrics:{...a.response.lyrics}}};break;case"LYRICS_ERROR":e[a.uri]={status:b.UNAVAILABLE};break;default:throw new Error(`Unhandled lyrics action with type: ${a.type}`)}}));var N=t(87961),C=t(85807);var A=t(85893);const w={status:b.LOADING},R={status:b.UNAVAILABLE},D=s.createContext(void 0),U=({children:e,initialState:a={}})=>{const t=s.useReducer(f,a);return(0,A.jsx)(D.Provider,{value:t,children:e})},T=(e,a)=>{const t=s.useContext(D);if(void 0===t)throw new Error("useSEOLyrics must be used within a LyricsSEOProvider");if(!e||!l().isTrack(e)||a)return R;const[i,r]=t,n=i[e];return n||(r({type:"LYRICS_LOADING",uri:e}),(async e=>{const a=l().from(e);return(await C.Zz.getSEOTrackLyrics(N.b.getInstance(),a.getBase62Id())).body})(e).then((a=>{r({type:"LYRICS_LOADED",uri:e,response:a})})).catch((()=>{r({type:"LYRICS_ERROR",uri:e})})),w)},B="_WZNTY8cs6JMVcAp9j8A",P="br3AcUgf2WazXovcTr0L",O=({padded:e})=>(0,A.jsx)(Z.D,{as:"p",dir:"auto",variant:"finale",className:`${B} ${e?P:""}`,children:"Lyrics powered by Musixmatch."}),M=({uri:e})=>{const{status:a}=T(e);return a!==b.LOADED?null:(0,A.jsx)(O,{})};var $=t(4383),G=t(84242),z=t(15852),V=t(26492),Y=t(45623),F=t(82789),H=t(87577),K=t(57481),Q=t(8247),W=t(8271);function J(){const e=(0,H.W6)(Q.Um,{loadingValue:null}),a=(0,i.v9)((e=>e.session?.user?.id)),t=(0,W.s4)();(0,s.useEffect)((()=>{if(!e)return;const s={category:"multivisit_exposure_event",action:"render",label:"dwp-multivisit",os:(0,K.y)(),variant:e};t.send(a?(0,F.x)(s):(0,Y.k)(s))}),[t,e,a])}var q=t(80322),X=t(4236),ee=t(29255),ae=t(72627),te=t(67892),se=t(57060),ie=t(70880),re=t(42922),ne=t(7073),le=t(34722),ce=t(19480),oe=t(29464);const de=({artistName:e,artistId:a,artistUri:t,className:s,releases:i})=>i?(0,A.jsx)(re.ZP,{value:"shelf/releases",children:(0,A.jsx)(ce.P,{total:10,title:o.ag.get("rich-page.popular-releases-by-artist",{artist:e}),seeAllUri:`${(0,le.GJ)(a)}:discography:${ne.VZ.Album.toLowerCase()}`,seeAllLabel:o.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,className:s,children:i.items.map(((e,a)=>(0,A.jsx)(oe.E,{album:e,index:a,artistURI:t},e.uri)))})}):null;var ue=t(55095);const me="JtmUDerSLCaN8LuQv9tM",he="mQtVA857h95uvEmY9SPP",ge="bObO_7Z_b1atmqMnYiU2",pe="vHqxBD3S0NJpGMsVRwHT",xe="pxMz7QGxCF9LYKHJzOlY",Ie="PTVcqp5lumB25L7FY7ai",Ee="DqqPRJJPXjVNE52h_cPt";var ye=t(26375),Se=t(48528),je=t(94184),ve=t.n(je),_e=t(37761),ke=t(42781),Ze=t(7469);let Le;!function(e){e.SMALL="small",e.LARGE="large"}(Le||(Le={}));const be=({art:e,disabled:a=!1,LinkComponent:t,name:s,size:i=Le.SMALL,type:n,uri:c})=>{const d=e?[e]:[],u=i===Le.SMALL?(0,Se.R)(n):function(e){switch(e){case ye.albumType.SINGLE:return o.ag.get("track-page.from-the-single");case ye.albumType.EP:return o.ag.get("track-page.from-the-ep");case ye.albumType.COMPILATION:return o.ag.get("track-page.from-the-compilation");case ye.albumType.ALBUM:default:return o.ag.get("track-page.from-the-album")}}(n),m=(0,r.k6)();return(0,A.jsxs)("div",{className:ve()(me,{[ge]:i===Le.SMALL,[he]:a}),children:[(0,A.jsx)("div",{className:pe,children:(0,A.jsx)(_e.O,{images:d,size:Ze.m$.SIZE_80,title:s,type:ke.p.ALBUM})}),(0,A.jsxs)("div",{className:xe,children:[(0,A.jsx)(Z.D,{variant:i===Le.SMALL?"minuetBold":"finale",children:u}),(0,A.jsx)(t,{to:c,children:(0,A.jsx)(Z.D,{as:"div",className:Ie,variant:"balladBold",dir:"auto",children:s})})]}),(0,A.jsx)("div",{onClick:()=>{m.push(l().from(c).toURLPath(!0))},className:Ee})]})};var fe=t(98759),Ne=t(2438),Ce=t(75987);const Ae="oTRKhYD0MZlNPm66W3Tw",we="sc95MwPalcHwYGZ7j3xN",Re="zrCZCfYv4zZiB1HYv9i8",De="RnlxIDmWcYTbbwNSJNjA",Ue="SHkxfN1vy0wpRMP1hK7I",Te="COXBS6zLyyxKNYuEAzjZ",Be="sR5IpdOUvoUGYKlC9Dk1",Pe="FHMr3WxshoYjZ7jd3YwI",Oe="Evcwc4KM2tf9xrLbfB8B",Me=({richTrack:e})=>{const a=(0,r.k6)(),t=(0,s.useCallback)((()=>new URLSearchParams(a.location.search.slice(1)).get("highlight")||""),[a.location.search])(),{tracklistRef:i}=(0,Ce.W)(),n=e.albumOfTrack,l=(0,q.Y)(n?.uri||""),{usePlayContextItem:c}=(0,G.n)({uri:l},{featureIdentifier:"album"}),o=(0,s.useMemo)((()=>({items:[],total_count:0})),[]);return n?(0,A.jsx)("div",{ref:i,className:Be,children:(0,A.jsx)(Ne.L,{ariaLabel:n.name,nrTracks:n.tracks.totalCount,albumUri:n.uri,highlightUri:t,discs:o,usePlayContextItem:c,hasHeaderRow:!1,parentEntityId:e.id})}):null},$e=(0,s.memo)((function({track:e}){const a=(0,X.k)(),t=e.albumOfTrack,s=t?.playability?.playable,i=e.artistsWithRoles.items[0]?.artist,r=i?.discography?.topTracks,n=i?.discography?.popularReleasesAlbums,l=i?.discography?.albums,c=i?.discography?.singles,o={artistId:i?.id,artistName:i?.profile?.name,artistUri:i?.uri};return(0,A.jsxs)("div",{"data-testid":"rich-track",children:[(0,A.jsx)(ie.j,{artistName:i?.profile?.name,artistUri:i?.uri,headerClassName:Oe,rowClassName:Ue,topTracks:r,topTracksTransformer:fe.X7,uri:e.uri}),(0,A.jsx)(de,{className:Pe,releases:n,...o}),(0,A.jsx)(se.R,{albums:l,className:Pe,...o}),(0,A.jsx)(ue.y,{className:Pe,singles:c,...o}),t&&(0,A.jsx)(be,{art:t.coverArt?.sources[0],disabled:!s||!a,LinkComponent:te.Z,name:t.name,type:t.type,size:Le.LARGE,uri:t.uri}),(0,A.jsx)(Me,{richTrack:e})]})})),Ge=$e;var ze=t(86025),Ve=t(34011);const Ye="QhDsXG1Gmo7XmQWLggAO",Fe="bZgWQj7UxvK8GYKWDA7N",He="AW61P3tnW5cKJCWtbhFh",Ke=({buttonText:e,onSecondaryButtonClick:a,onPrimaryButtonClick:t,secondaryButtonText:s,text:i})=>(0,A.jsxs)("div",{className:Ye,"data-testid":"static-activation-trigger",children:[(0,A.jsx)(Z.D,{className:Fe,variant:"cello",children:i}),(0,A.jsxs)("div",{className:He,children:[(0,A.jsx)(ze.o,{onClick:a,semanticColor:"textBase",children:s}),(0,A.jsx)(Ve.D,{onClick:t,colorSet:"invertedLight",children:e})]})]}),Qe="FTTfxsCa1sJIu1Y7utDO",We="vrjrGtquvKnX8rzOuAaA",Je="HeVBalD_EHmtuqfIkkjo",qe="GQqQDXMybjyriRQKH_ID",Xe="DX4i2V_0jaKraBkfcDnR",ea="zCVFaVQz6MUyNwqjGS4c",aa="USV2e_90ZCdBCH9Dr5Vw",ta="PhpDpIcERAEMvFD0NvPk";let sa;!function(e){e.SMALL="small",e.LARGE="large"}(sa||(sa={}));const ia=e=>{const{disabled:a,images:t,LinkComponent:s,name:i,size:n,uri:c}=e,d=n===sa.SMALL,u=(0,r.k6)();return(0,A.jsxs)("div",{className:ve()(We,{[Je]:a}),"data-testid":"track-artist-link-card",children:[(0,A.jsx)(_e.O,{shape:_e.K.CIRCLE,images:t,size:Ze.m$.SIZE_80,title:i,type:ke.p.ARTIST}),(0,A.jsxs)("div",{className:ve()(Xe,{[ea]:d}),children:[(0,A.jsx)(Z.D,{variant:"minuetBold",className:qe,children:o.ag.get("card.tag.artist")}),(0,A.jsx)(s,{to:c,children:(0,A.jsx)(Z.D,{as:"div",dir:"ltr",className:aa,variant:"balladBold",children:i})})]}),(0,A.jsx)("div",{onClick:()=>{u.push(l().from(c).toURLPath(!0))},className:ta})]})},ra=({size:e=sa.LARGE,disabled:a=!1,...t})=>(0,A.jsx)("div",{className:Qe,children:t.artists.map((s=>(0,A.jsx)(ia,{name:s.name,uri:s.uri,images:s.images,size:e,LinkComponent:t.LinkComponent,disabled:a},s.id)))});var na=t(42286);const la="kyenoI4FJbhfBk7_5hWj",ca="o7c89JiqZPfyQtLPjgrK",oa="uzdLGhPskgWtE64HOVL8",da=({lines:e=[]})=>0===e.length?null:(0,A.jsxs)("div",{className:la,children:[(0,A.jsx)(Z.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:ca,children:o.ag.get("web-player.lyrics.title")}),e.map((({words:e},a)=>(0,A.jsx)(Z.D,{as:"p",dir:"auto",variant:"ballad",className:oa,children:e},`lyrics-seo-line-${a}`)))]}),ua=({uri:e})=>{const{status:a,data:t}=T(e);return a!==b.LOADED?null:(0,A.jsx)(da,{lines:t?.lyrics.lines})},ma=e=>{const{albumArtists:a,columnCount:t,uri:r}=e,n=t-2,l={"--column-count":t,"--left-column-end":n-2,"--right-column-start":n},{isAnonymous:c}=(0,i.v9)(ee.Gg),d=(0,X.k)(),{data:u,status:m}=T(r,c),h=!!u&&m!==b.UNAVAILABLE||c;return(0,A.jsxs)(s.Suspense,{fallback:null,children:[h&&(0,A.jsx)("div",{className:ve()(Re,{[De]:t>5}),style:{...l},children:c?(0,A.jsx)(Ke,{buttonText:o.ag.get("sign_up"),secondaryButtonText:o.ag.get("login"),text:o.ag.get("track-page.sign-in-to-view-lyrics"),onPrimaryButtonClick:na.L6,onSecondaryButtonClick:na.h$}):(0,A.jsx)(ua,{uri:r})}),(0,A.jsx)("div",{className:ve()(Ae,{[we]:t>5&&h}),style:{...l},children:(0,A.jsx)(ra,{artists:a,LinkComponent:te.Z,disabled:!d})})]})},ha=({uri:e,track:a})=>{const t=(0,V.o)(),r=(0,X.k)(),{isAnonymous:n}=(0,i.v9)(ee.Gg),{artistsWithRoles:l,albumOfTrack:E,duration:Z,name:L}=a,b=E?.coverArt,f=E?.copyright.items,N=E?.courtesyLine,C=E?.date?.isoString,w=b?.extractedColors?.colorRaw.hex,R=(b?.sources||[]).map((e=>({url:e.url,width:e.width||void 0,height:e.height||void 0}))),D=l.items.map((e=>({name:e.artist.profile.name,images:(e.artist.visuals.avatarImage?.sources||[]).map((e=>({url:e.url,width:e.width,height:e.height}))),uri:e.artist.uri,id:e.artist.uri}))),{spec:T,logger:B}=(0,z.fU)(c.createDesktopTrackEventFactory,{data:{uri:e}}),P=a.playability.playable,O=(0,q.Y)(e),{togglePlay:Y,isPlaying:F,isActive:H}=(0,G.n)({uri:O},{featureIdentifier:"track"}),[K,Q]=(0,$.Z)(e),W=(0,s.useCallback)((async()=>{t({targetUri:e,intent:K?"unsave":"save",type:"click"});const a=T.actionBarFactory().saveButtonFactory();B.logInteraction(K?a.hitRemoveLike({itemNoLongerLiked:e}):a.hitLike({itemToBeLiked:e}));try{await Q(!K)}catch{}}),[t,e,K,T,B,Q]);J();const ae=(0,s.useCallback)((()=>((e,a)=>`${e} - song and lyrics by ${a.map((e=>e.name)).join(o.ag.getSeparator())}`)(a.name,D)),[D,a.name]),te=(0,s.useCallback)(((e,a)=>{B.logInteraction(T.headerFactory().artistLinkFactory({position:a.position,uri:a.creator.uri}).hitUiNavigate({destination:a.creator.uri}))}),[B,T]),se=(0,s.useCallback)((()=>{const a=(0,S.aK)({isPlaying:F,isActive:H,spec:T.actionBarFactory().playButtonFactory(),logger:B,uri:e});Y({loggingParams:a})}),[H,F,B,T,Y,e]),ie=(0,s.useCallback)((()=>{B.logInteraction(T.actionBarFactory().contextButtonFactory().hitUiReveal())}),[B,T]);return(0,A.jsxs)("section",{"data-testid":"track-page",children:[(0,A.jsx)(g.$,{children:ae()}),(0,A.jsxs)(p.gF,{backgroundColor:w,children:[(0,A.jsxs)(x.W,{children:[(0,A.jsx)(y.$,{size:"md",onClick:se,disabled:!P,isPlaying:F,uri:e}),(0,A.jsx)(I.i,{text:L,dragUri:e,dragLabel:L})]}),(0,A.jsx)(v._P,{menu:(0,A.jsx)(h.$,{uri:e}),children:(0,A.jsx)(p.Oz,{dragUri:e,images:R,name:L,placeholderType:"album"})}),(0,A.jsxs)(p.sP,{children:[(0,A.jsx)(p.dy,{small:!0,uppercase:!0,children:o.ag.get("song")}),(0,A.jsx)(v._P,{menu:(0,A.jsx)(h.$,{uri:e}),children:(0,A.jsx)(p.xd,{dragUri:e,dragLabel:L,children:L})}),(0,A.jsx)(p.QS,{creators:D,releaseDate:C,durationMilliseconds:Z.totalMilliseconds,onCreatorClick:te,isTrack:!0})]})]}),(0,A.jsx)(d.o,{backgroundColor:w,children:(0,A.jsxs)(d.F,{children:[(0,A.jsx)(p.rn,{children:(0,A.jsx)(y.$,{onClick:se,isPlaying:F,disabled:!P,size:"lg",uri:e})}),(0,A.jsx)(p.rn,{children:(0,A.jsx)(j.H,{isAdded:!!K,onClick:W,disabled:!r,size:j.q.md})}),(0,A.jsx)(u.o,{uri:e,isFollowing:!!K,onFollow:W,size:u.q.md}),(0,A.jsx)(v.yj,{menu:(0,A.jsx)(h.$,{uri:e}),onShow:ie,children:(0,A.jsx)(m.z,{label:o.ag.get("more.label.context",L)})})]})}),(0,A.jsxs)(U,{children:[(0,A.jsxs)("div",{className:"contentSpacing",children:[(0,A.jsx)("div",{className:Ue,children:(0,A.jsx)(k.T,{render:({columnCount:a})=>(0,A.jsx)(ma,{albumArtists:D.slice(0,1),columnCount:a,uri:e})})}),(0,A.jsx)(Ge,{track:a})]}),(0,A.jsx)("div",{className:"contentSpacing",children:(0,A.jsxs)("div",{className:Te,children:[(0,A.jsx)(_.k,{copyrights:f||[],courtesyLine:N}),!n&&(0,A.jsx)(M,{uri:e})]})})]})]})},ga=(0,s.memo)((function(){const{trackId:e}=(0,r.UO)(),a=l().trackURI(e).toURI(),t=(0,ae.QN)({uri:a});return t.loading||"Track"!==t.data?.trackUnion?.__typename?(0,A.jsx)(E.h,{hasError:null!==t.error,errorMessage:o.ag.get("track-page.error")}):(0,A.jsx)(ha,{uri:a,track:t.data.trackUnion})}))},75987:(e,a,t)=>{t.d(a,{W:()=>i});var s=t(97650);function i(){const{ref:e,inView:a}=(0,s.YD)({initialInView:!1}),{ref:t,inView:i}=(0,s.YD)({initialInView:!1});return{titleRef:e,tracklistRef:t,displayTopBar:!a&&i}}},85522:(e,a,t)=>{t.d(a,{k:()=>n});var s=t(32667);const i="rTMkDBDp47Eo12ZEQv4U";var r=t(85893);const n=({copyrights:e,courtesyLine:a})=>{const t=(e||[]).map(((e,a)=>{const t=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let i;return i="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,(0,r.jsx)(s.D,{as:"p",variant:"finale",dir:"auto",children:`${i} ${t}`},a)}));return a&&t.unshift((0,r.jsx)(s.D,{as:"p",variant:"finale",dir:"auto",children:a},t.length)),(0,r.jsx)("div",{className:i,children:t})}},37761:(e,a,t)=>{t.d(a,{O:()=>v,K:()=>j});var s=t(67294),i=t(94184),r=t.n(i),n=t(89104),l=t(7469);const c="g3kBhX1E4EYEC2NFhhxG",o="O5_0cReFdHe81E0xFAD1",d="H71KtIrytVayf_dFofu7",u="SBpny8HrUTBzSjk7Vtk1",m="CxurIfvXVb_TqGF4q8Yf",h="OadpZJiOaGfX6Qp4j6n5",g="iJp40IxKg6emF6KYJ414",p="vreceNX3ABcxyddeS83B",x="Ozitxbqs1vcOukDz3GDw",I="AeEoI6ueagbJtaHl2cRd";var E=t(49343),y=t(85893);const S=({title:e,type:a,className:t})=>(0,y.jsx)("div",{"aria-label":e,className:r()(x,t),children:(0,y.jsx)(E.t,{type:a,className:I})});let j;!function(e){e[e.ROUNDED_CORNERS=0]="ROUNDED_CORNERS",e[e.CIRCLE=1]="CIRCLE",e[e.SQUARE=2]="SQUARE"}(j||(j={}));const v=(0,s.memo)((function({loadingMode:e="lazy",type:a,title:t,images:s=[],shape:i=j.SQUARE,size:x=l.m$.SIZE_56,className:I,onContextMenu:E=(()=>{}),onTouchStart:v=(()=>{}),onTouchEnd:_=(()=>{})}){const k=function(e=[]){const a=e.filter((e=>Boolean(e.width))),t=a.filter((e=>e.url&&e.width&&e.width>=l.eM[l.m$.SIZE_56])).sort(((e,a)=>e.width-a.width));return t.length?t:a}(s),Z=k.length>0?k[0].url:"",L=k.map((({url:e,width:a})=>`${e} ${a/2}w, ${e} ${a}w`)).join(", "),b=()=>({[c]:l.pj.includes(x),[o]:l.wL.includes(x),[d]:l.VZ.includes(x),[u]:l.B_.includes(x)});return(0,y.jsx)("div",{className:r()(p,I),onContextMenu:E,onTouchStart:v,onTouchEnd:_,style:{width:`${l.eM[x]}px`,height:`${l.eM[x]}px`},children:(0,y.jsx)(n.E,{loading:e,src:Z,alt:t,ariaHidden:!0,className:r()(g,{[h]:i===j.CIRCLE,[m]:i===j.SQUARE,...b()}),srcSet:L||void 0,testid:"entity-image",children:(0,y.jsx)(S,{title:t,type:a,className:r()({[h]:i===j.CIRCLE,[m]:i===j.SQUARE,...b()})})})})}))},7469:(e,a,t)=>{let s;t.d(a,{B_:()=>c,VZ:()=>l,eM:()=>i,m$:()=>s,pj:()=>r,wL:()=>n}),function(e){e[e.SIZE_48=0]="SIZE_48",e[e.SIZE_56=1]="SIZE_56",e[e.SIZE_64=2]="SIZE_64",e[e.SIZE_72=3]="SIZE_72",e[e.SIZE_80=4]="SIZE_80",e[e.SIZE_96=5]="SIZE_96",e[e.SIZE_104=6]="SIZE_104",e[e.SIZE_112=7]="SIZE_112",e[e.SIZE_120=8]="SIZE_120",e[e.SIZE_128=9]="SIZE_128",e[e.SIZE_136=10]="SIZE_136",e[e.SIZE_144=11]="SIZE_144",e[e.SIZE_152=12]="SIZE_152",e[e.SIZE_160=13]="SIZE_160",e[e.SIZE_168=14]="SIZE_168",e[e.SIZE_176=15]="SIZE_176",e[e.SIZE_184=16]="SIZE_184",e[e.SIZE_200=17]="SIZE_200",e[e.SIZE_232=18]="SIZE_232"}(s||(s={}));const i={[s.SIZE_48]:48,[s.SIZE_56]:56,[s.SIZE_64]:64,[s.SIZE_72]:72,[s.SIZE_80]:80,[s.SIZE_96]:96,[s.SIZE_104]:104,[s.SIZE_112]:112,[s.SIZE_120]:120,[s.SIZE_128]:128,[s.SIZE_136]:136,[s.SIZE_144]:144,[s.SIZE_152]:152,[s.SIZE_160]:160,[s.SIZE_168]:168,[s.SIZE_176]:176,[s.SIZE_184]:184,[s.SIZE_200]:200,[s.SIZE_232]:232},r=[s.SIZE_48,s.SIZE_56,s.SIZE_64],n=[s.SIZE_72,s.SIZE_80,s.SIZE_96,s.SIZE_104,s.SIZE_112,s.SIZE_120,s.SIZE_128],l=[s.SIZE_136,s.SIZE_144,s.SIZE_152,s.SIZE_160,s.SIZE_168,s.SIZE_176],c=[s.SIZE_184,s.SIZE_200,s.SIZE_232]}}]);
//# sourceMappingURL=xpui-routes-track-v2.js.map