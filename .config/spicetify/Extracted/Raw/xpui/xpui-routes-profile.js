"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[2499],{70369:(e,a,t)=>{t.d(a,{$:()=>i.$});var i=t(22578)},20701:(e,a,t)=>{t.d(a,{T:()=>c});var i=t(57784),r=t(37925),s=t(25678),o=t(60289),l=t(23401);const n="profile-editImage-imageContainer",u="profile-editImage-editImageButtonContainer";var d=t(85893);const c=function({onClick:e,name:a,images:t,canEdit:c,placeholderType:m,shape:g=o.Kc.SQUARE,dragUri:p=""}){const[h,f]=(0,r.RH)(t),v=(0,s.VO)(h,f)===s.KO.loaded,x=(0,i.O1)([p],a);return(0,d.jsxs)("div",{className:n,"data-testid":`${m}-image`,draggable:!!p,onDragStart:x,children:[(0,d.jsx)(o.Oe,{loading:"eager",name:a,images:t,placeholderType:m,shape:g}),c&&(0,d.jsx)("div",{className:u,children:(0,d.jsx)(l.F,{overlay:v,onClick:e,rounded:g===o.Kc.CIRCLE})})]})}},1850:(e,a,t)=>{t.d(a,{e:()=>c});var i=t(67294),r=t(94184),s=t.n(r),o=t(96206);const l="idI9vydtCzXVhU1BaKLw",n="fEbcweEiUPPy2eaIaD3F",u="Qq16641w1flRfBavPaAn";var d=t(85893);const c=(0,i.memo)((function({isFollowing:e,onClick:a,disabled:t=!1,buttonText:i}){const r=e?o.ag.get("following"):o.ag.get("follow");return(0,d.jsx)("button",{type:"button",className:s()(l,{[n]:e,[u]:t}),onClick:a,children:i||r})}))},68513:(e,a,t)=>{t.d(a,{S:()=>c});var i=t(94184),r=t.n(i),s=t(31397),o=t(32667);const l="CmR9tHJ5ta6oWJlKBm3k",n="artist-artistVerifiedBadge-badge",u="bn2UNQDs5GLY5rjp5Ljh";var d=t(85893);const c=({text:e,iconSize:a=24,className:t})=>(0,d.jsxs)("span",{className:r()(l,t),children:[(0,d.jsx)("div",{className:`${n} ${u}`}),(0,d.jsx)(s.T,{semanticColor:"textAnnouncement",className:n,iconSize:a}),e?(0,d.jsx)(o.D,{variant:"mesto",children:e}):null]})},35761:(e,a,t)=>{t.d(a,{I:()=>s});var i=t(67294),r=t(67448);function s(e,a){const t=(0,r.z)();(0,i.useEffect)((()=>{const i=t.getEvents(),r=e=>a(e);return i.addListener(e,r),()=>{i.removeListener(e,r)}}),[e,t,a])}},39279:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Ha});var i=t(67294),r=t(51615),s=t(69518),o=t.n(s),l=t(73305),n=t(12164),u=t(70369),d=t(87972),c=t(85807),m=t(27999),g=t(46877),p=t(61864),h=t(19480),f=t(85893);const v={totalCount:0,nextOffset:0,items:[]};const x=({uri:e})=>{const{data:a}=(0,d.J)(c.n5.getProfile,[{uri:e,playlists:0,artists:0,episodes:0}]),t=function(e){const a=(0,m.zZ)(),[t,r]=(0,i.useState)(v),s=(0,i.useCallback)((async()=>{if(!e)return;const t=await a.getContents(e,{offset:0,limit:50});r(t)}),[e,a]);return(0,i.useEffect)((()=>{s()}),[s]),t}(a?.user_created_show?.uri);return(0,f.jsx)(h.P,{className:"contentSpacing",total:t.items.length,title:g.ag.get("episodes"),showAll:!0,children:t.items.map(((e,a)=>e&&(0,f.jsx)(p.B,{index:a,uri:e.uri,name:e.name,images:e.coverArt,showImages:[],durationMilliseconds:e.duration.milliseconds,releaseDate:e.releaseDate?.isoString,resume_point:null,description:e.description,isExplicit:!1,is19PlusOnly:!1,sharingInfo:e.sharingInfo},e.uri)))})},b=({uri:e})=>(0,f.jsxs)("section",{children:[(0,f.jsx)(u.$,{children:"Podcasts from the user"}),(0,f.jsx)(x,{uri:e})]});var y=t(94184),I=t.n(y),j=t(96206),k=t(30523),N=t(6158);const _="umiKMm5NVr5UeBJCHS6U",P="jzhwZKbfx4vrC_MYd_7c",w="MWWPQQjbjRfoGdPD8D68",R="rMpf7sfaPDcj387_52fA",S="kWCnF32FrVtGHmTy8QeV",U="uJxNEI2k7x8UCDdMKELt",O="wDIZ2yYKjfGI68I4cZ98",D=e=>{const{uri:a}=e,{data:t,loading:i,error:r}=(0,d.J)(c.n5.getFollowers,[a]),s=t?.profiles;return i?(0,f.jsx)(N.h,{hasError:null!==r,errorMessage:j.ag.get("error.not_found.title.page")}):(0,f.jsx)(h.P,{className:I()("contentSpacing",w),title:j.ag.get("followers"),total:s?.length,showAll:!0,children:s?.map(((e,a)=>(0,f.jsx)(k.P,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))})},A=e=>{const{uri:a}=e,{data:t,loading:i,error:r}=(0,d.J)(c.n5.getFollowing,[a]),s=t?.profiles;return i?(0,f.jsx)(N.h,{hasError:null!==r,errorMessage:j.ag.get("error.not_found.title.page")}):(0,f.jsx)(h.P,{className:I()("contentSpacing",w),title:j.ag.get("following"),total:s?.length,showAll:!0,children:s?.map(((e,a)=>(0,f.jsx)(k.P,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))})};var C=t(86706),E=t(87577),T=t(45546),M=t(18270),L=t(48690),W=t(89477),F=t(46309),H=t(43480),J=t(20701),B=t(60289),K=t(98778),z=t(59482),G=t(72907),V=t(1850),$=t(32667),Q=t(39714),Z=t(6060),X=t(34011),q=t(84465),Y=t(93659),ee=t(64578),ae=t(18525),te=t(37925),ie=t(25678);const re="F8_EX1AeKxXNSeh1qiHq",se="valcBm4lLe9qFBcg0sFY",oe="tAIzXn8C9KriGwGuBfWg",le="PsrXxenHUFXYM1ub1xWw",ne="U_VWfeeLWnDPhUTxCmrQ",ue=function({onClickEdit:e,onClickRemove:a,name:t,images:i}){const[r,s]=(0,te.RH)(i),o=(0,ie.VO)(r,s)===ie.KO.loaded;return(0,f.jsxs)("div",{className:re,children:[(0,f.jsx)(B.Oe,{loading:"eager",name:t,images:i,placeholderType:"user",shape:B.Kc.CIRCLE}),(0,f.jsxs)("div",{className:I()(se,{[le]:o}),children:[(0,f.jsx)("button",{className:oe,"aria-haspopup":"true",onClick:e,type:"button",children:(0,f.jsx)($.D,{variant:"ballad",children:j.ag.get("user.edit-details.choose-photo")})}),(0,f.jsx)("div",{className:I()(ne,"icon"),children:(0,f.jsx)(ae.y,{iconSize:48,"aria-hidden":!0})}),(0,f.jsx)("button",{className:oe,onClick:a,type:"button",children:(0,f.jsx)($.D,{variant:"ballad",children:j.ag.get("user.edit-details.remove-photo")})})]})]})};var de=t(16516),ce=t(15429),me=t(62100);const ge={paths:""},pe={encode(e,a=me.Writer.create()){for(const t of e.paths)a.uint32(10).string(t);return a},decode(e,a){const t=e instanceof Uint8Array?new me.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={...ge};for(r.paths=[];t.pos<i;){const e=t.uint32();if(e>>>3==1)r.paths.push(t.string());else t.skipType(7&e)}return r},fromJSON(e){const a={...ge};if(a.paths=[],void 0!==e.paths&&null!==e.paths)for(const t of e.paths)a.paths.push(String(t));return a},fromPartial(e){const a={...ge};if(a.paths=[],void 0!==e.paths&&null!==e.paths)for(const t of e.paths)a.paths.push(t);return a},toJSON(e){const a={};return e.paths?a.paths=e.paths.map((e=>e)):a.paths=[],a}};t(82801);var he=t(43720),fe=t(48764).lW;const ve={value:0},xe={value:!1},be={value:""};const ye={encode:(e,a=me.Writer.create())=>(a.uint32(8).int32(e.value),a),decode(e,a){const t=e instanceof Uint8Array?new me.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={...ve};for(;t.pos<i;){const e=t.uint32();if(e>>>3==1)r.value=t.int32();else t.skipType(7&e)}return r},fromJSON(e){const a={...ve};return void 0!==e.value&&null!==e.value?a.value=Number(e.value):a.value=0,a},fromPartial(e){const a={...ve};return void 0!==e.value&&null!==e.value?a.value=e.value:a.value=0,a},toJSON(e){const a={};return void 0!==e.value&&(a.value=e.value),a}},Ie={encode:(e,a=me.Writer.create())=>(a.uint32(8).bool(e.value),a),decode(e,a){const t=e instanceof Uint8Array?new me.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={...xe};for(;t.pos<i;){const e=t.uint32();if(e>>>3==1)r.value=t.bool();else t.skipType(7&e)}return r},fromJSON(e){const a={...xe};return void 0!==e.value&&null!==e.value?a.value=Boolean(e.value):a.value=!1,a},fromPartial(e){const a={...xe};return void 0!==e.value&&null!==e.value?a.value=e.value:a.value=!1,a},toJSON(e){const a={};return void 0!==e.value&&(a.value=e.value),a}},je={encode:(e,a=me.Writer.create())=>(a.uint32(10).string(e.value),a),decode(e,a){const t=e instanceof Uint8Array?new me.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={...be};for(;t.pos<i;){const e=t.uint32();if(e>>>3==1)r.value=t.string();else t.skipType(7&e)}return r},fromJSON(e){const a={...be};return void 0!==e.value&&null!==e.value?a.value=String(e.value):a.value="",a},fromPartial(e){const a={...be};return void 0!==e.value&&null!==e.value?a.value=e.value:a.value="",a},toJSON(e){const a={};return void 0!==e.value&&(a.value=e.value),a}};me.util.Long!==he&&(me.util.Long=he,(0,me.configure)());const ke=globalThis;ke.atob,ke.btoa;const Ne={maxWidth:0,maxHeight:0,url:""},_e={},Pe={},we={encode:(e,a=me.Writer.create())=>(a.uint32(8).int32(e.maxWidth),a.uint32(16).int32(e.maxHeight),a.uint32(26).string(e.url),a),decode(e,a){const t=e instanceof Uint8Array?new me.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={...Ne};for(;t.pos<i;){const e=t.uint32();switch(e>>>3){case 1:r.maxWidth=t.int32();break;case 2:r.maxHeight=t.int32();break;case 3:r.url=t.string();break;default:t.skipType(7&e)}}return r},fromJSON(e){const a={...Ne};return void 0!==e.maxWidth&&null!==e.maxWidth?a.maxWidth=Number(e.maxWidth):a.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?a.maxHeight=Number(e.maxHeight):a.maxHeight=0,void 0!==e.url&&null!==e.url?a.url=String(e.url):a.url="",a},fromPartial(e){const a={...Ne};return void 0!==e.maxWidth&&null!==e.maxWidth?a.maxWidth=e.maxWidth:a.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?a.maxHeight=e.maxHeight:a.maxHeight=0,void 0!==e.url&&null!==e.url?a.url=e.url:a.url="",a},toJSON(e){const a={};return void 0!==e.maxWidth&&(a.maxWidth=e.maxWidth),void 0!==e.maxHeight&&(a.maxHeight=e.maxHeight),void 0!==e.url&&(a.url=e.url),a}},Re={encode(e,a=me.Writer.create()){void 0!==e.username&&void 0!==e.username&&je.encode({value:e.username},a.uint32(10).fork()).ldelim(),void 0!==e.name&&void 0!==e.name&&je.encode({value:e.name},a.uint32(18).fork()).ldelim();for(const t of e.images)we.encode(t,a.uint32(26).fork()).ldelim();return void 0!==e.verified&&void 0!==e.verified&&Ie.encode({value:e.verified},a.uint32(34).fork()).ldelim(),void 0!==e.editProfileDisabled&&void 0!==e.editProfileDisabled&&Ie.encode({value:e.editProfileDisabled},a.uint32(42).fork()).ldelim(),void 0!==e.reportAbuseDisabled&&void 0!==e.reportAbuseDisabled&&Ie.encode({value:e.reportAbuseDisabled},a.uint32(50).fork()).ldelim(),void 0!==e.abuseReportedName&&void 0!==e.abuseReportedName&&Ie.encode({value:e.abuseReportedName},a.uint32(58).fork()).ldelim(),void 0!==e.abuseReportedImage&&void 0!==e.abuseReportedImage&&Ie.encode({value:e.abuseReportedImage},a.uint32(66).fork()).ldelim(),void 0!==e.hasSpotifyName&&void 0!==e.hasSpotifyName&&Ie.encode({value:e.hasSpotifyName},a.uint32(74).fork()).ldelim(),void 0!==e.hasSpotifyImage&&void 0!==e.hasSpotifyImage&&Ie.encode({value:e.hasSpotifyImage},a.uint32(82).fork()).ldelim(),void 0!==e.color&&void 0!==e.color&&ye.encode({value:e.color},a.uint32(90).fork()).ldelim(),a},decode(e,a){const t=e instanceof Uint8Array?new me.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={..._e};for(r.images=[];t.pos<i;){const e=t.uint32();switch(e>>>3){case 1:r.username=je.decode(t,t.uint32()).value;break;case 2:r.name=je.decode(t,t.uint32()).value;break;case 3:r.images.push(we.decode(t,t.uint32()));break;case 4:r.verified=Ie.decode(t,t.uint32()).value;break;case 5:r.editProfileDisabled=Ie.decode(t,t.uint32()).value;break;case 6:r.reportAbuseDisabled=Ie.decode(t,t.uint32()).value;break;case 7:r.abuseReportedName=Ie.decode(t,t.uint32()).value;break;case 8:r.abuseReportedImage=Ie.decode(t,t.uint32()).value;break;case 9:r.hasSpotifyName=Ie.decode(t,t.uint32()).value;break;case 10:r.hasSpotifyImage=Ie.decode(t,t.uint32()).value;break;case 11:r.color=ye.decode(t,t.uint32()).value;break;default:t.skipType(7&e)}}return r},fromJSON(e){const a={..._e};if(a.images=[],void 0!==e.username&&null!==e.username?a.username=String(e.username):a.username=void 0,void 0!==e.name&&null!==e.name?a.name=String(e.name):a.name=void 0,void 0!==e.images&&null!==e.images)for(const t of e.images)a.images.push(we.fromJSON(t));return void 0!==e.verified&&null!==e.verified?a.verified=Boolean(e.verified):a.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?a.editProfileDisabled=Boolean(e.editProfileDisabled):a.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?a.reportAbuseDisabled=Boolean(e.reportAbuseDisabled):a.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?a.abuseReportedName=Boolean(e.abuseReportedName):a.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?a.abuseReportedImage=Boolean(e.abuseReportedImage):a.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?a.hasSpotifyName=Boolean(e.hasSpotifyName):a.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?a.hasSpotifyImage=Boolean(e.hasSpotifyImage):a.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?a.color=Number(e.color):a.color=void 0,a},fromPartial(e){const a={..._e};if(a.images=[],void 0!==e.username&&null!==e.username?a.username=e.username:a.username=void 0,void 0!==e.name&&null!==e.name?a.name=e.name:a.name=void 0,void 0!==e.images&&null!==e.images)for(const t of e.images)a.images.push(we.fromPartial(t));return void 0!==e.verified&&null!==e.verified?a.verified=e.verified:a.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?a.editProfileDisabled=e.editProfileDisabled:a.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?a.reportAbuseDisabled=e.reportAbuseDisabled:a.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?a.abuseReportedName=e.abuseReportedName:a.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?a.abuseReportedImage=e.abuseReportedImage:a.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?a.hasSpotifyName=e.hasSpotifyName:a.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?a.hasSpotifyImage=e.hasSpotifyImage:a.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?a.color=e.color:a.color=void 0,a},toJSON(e){const a={};return void 0!==e.username&&(a.username=e.username),void 0!==e.name&&(a.name=e.name),e.images?a.images=e.images.map((e=>e?we.toJSON(e):void 0)):a.images=[],void 0!==e.verified&&(a.verified=e.verified),void 0!==e.editProfileDisabled&&(a.editProfileDisabled=e.editProfileDisabled),void 0!==e.reportAbuseDisabled&&(a.reportAbuseDisabled=e.reportAbuseDisabled),void 0!==e.abuseReportedName&&(a.abuseReportedName=e.abuseReportedName),void 0!==e.abuseReportedImage&&(a.abuseReportedImage=e.abuseReportedImage),void 0!==e.hasSpotifyName&&(a.hasSpotifyName=e.hasSpotifyName),void 0!==e.hasSpotifyImage&&(a.hasSpotifyImage=e.hasSpotifyImage),void 0!==e.color&&(a.color=e.color),a}},Se={encode:(e,a=me.Writer.create())=>(void 0!==e.mask&&void 0!==e.mask&&pe.encode(e.mask,a.uint32(10).fork()).ldelim(),void 0!==e.userProfile&&void 0!==e.userProfile&&Re.encode(e.userProfile,a.uint32(18).fork()).ldelim(),a),decode(e,a){const t=e instanceof Uint8Array?new me.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={...Pe};for(;t.pos<i;){const e=t.uint32();switch(e>>>3){case 1:r.mask=pe.decode(t,t.uint32());break;case 2:r.userProfile=Re.decode(t,t.uint32());break;default:t.skipType(7&e)}}return r},fromJSON(e){const a={...Pe};return void 0!==e.mask&&null!==e.mask?a.mask=pe.fromJSON(e.mask):a.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?a.userProfile=Re.fromJSON(e.userProfile):a.userProfile=void 0,a},fromPartial(e){const a={...Pe};return void 0!==e.mask&&null!==e.mask?a.mask=pe.fromPartial(e.mask):a.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?a.userProfile=Re.fromPartial(e.userProfile):a.userProfile=void 0,a},toJSON(e){const a={};return void 0!==e.mask&&(a.mask=e.mask?pe.toJSON(e.mask):void 0),void 0!==e.userProfile&&(a.userProfile=e.userProfile?Re.toJSON(e.userProfile):void 0),a}},Ue=`${de.XA}/identity`;async function Oe(e,a,{name:t,imageUploadToken:i}){void 0!==t&&await async function(e,a,t){const i=Se.encode(Se.fromPartial({mask:{paths:["name"]},userProfile:null!==t?{name:t}:{}}));await e.build().withHost(Ue).withMethod("POST").withPath(`/v3/user/username/${encodeURIComponent((0,ce.C)(a))}`).withEndpointIdentifier("/v3/user/username/{username}").withBody(i.finish()).withoutMarket().send()}(e,a,t),void 0!==i&&(null!==i?await async function(e,a,t){await e.build().withHost(Ue).withMethod("POST").withPath(`/v3/profile-image/${encodeURIComponent((0,ce.C)(a))}/${t}`).withEndpointIdentifier("/v3/profile-image/{username}/{uploadToken}").withoutMarket().send()}(e,a,i):await async function(e,a){await e.build().withHost(Ue).withMethod("DELETE").withPath(`/v3/profile-image/${encodeURIComponent((0,ce.C)(a))}`).withEndpointIdentifier("/v3/profile-image/{username}").withoutMarket().send()}(e,a))}var De=t(87961);const Ae={type:"error",get message(){return j.ag.get("user.edit-details.error.file-size-exceeded",10)}},Ce={type:"error",get message(){return j.ag.get("user.edit-details.error.too-small",300,300)}},Ee={type:"error",get message(){return j.ag.get("user.edit-details.error.missing-name")}},Te={type:"error",get message(){return j.ag.get("user.edit-details.error.failed-to-save")}},Me={type:"error",get message(){return j.ag.get("user.edit-details.error.file-upload-failed")}};function Le(e){return{type:"setLoading",loading:e}}function We(e){return{type:"setMessage",message:e}}function Fe(e,a){switch(a.type){case"setName":return{...e,name:a.name};case"setMessage":return{...e,message:a.message,loading:!1};case"setLoading":return{...e,loading:a.loading,message:null};case"setImageData":return{...e,imageData:a.data,removeImage:!1};case"setImageToken":return{...e,imageToken:a.token,removeImage:!1};case"removeImage":return{...e,imageToken:void 0,imageData:void 0,image:void 0,removeImage:!0};default:return e}}const He="XwNfIrI6_hCa_9_T2cQB",Je="so0bdX3oZH6YW5_nGxIR",Be="aM3plU4zzDqjWlvUHGYb",Ke="zHeo4VUxytwm6Ptr0QyA",ze="vAeyAmeLkDEDKdL9Hou0",Ge="dnmzO6yYKkxUV8jl7O1Z",Ve="oN9QVvJKEtdTH3HGfCu1",$e="uj7hczcCH1dZpse8Kfmi",Qe="wvLAEV5wF5C5ej6rvimT",Ze="gAQfzAUp1FuSXODeZJfP",Xe="dMhJaxli87_22jb_3d9x",qe="MDb7QhAtHeyM4gKj8j8t",Ye="zGbjZMZ1DTx4futEbN9l",ea=i.memo((function({uri:e,name:a,image:t,onClose:r,shouldOpenImagePicker:s}){const[o,l]=(0,Y.Hs)(),[n,u]=function({name:e,image:a}){return(0,i.useReducer)(Fe,{loading:!1,message:null,name:e,image:a})}({name:a,image:t}),d=(0,i.useMemo)((()=>{const e=n.imageData||n.image;return e?[{url:e,width:300,height:300}]:[]}),[n.image,n.imageData]);(0,i.useEffect)((()=>{s&&l()}),[l,s]);const c=(0,i.useCallback)((e=>{e===Y.Hy.FILE_TOO_BIG?u(We(Ae)):e===Y.Hy.IMAGE_TOO_SMALL&&u(We(Ce))}),[u]),m=(0,i.useCallback)((()=>{u({type:"removeImage"})}),[u]),g=(0,i.useCallback)((async a=>{a.preventDefault();if(0!==n.name.trim().length){u(Le(!0));try{const a=n.removeImage?null:n.imageToken;await async function(e,{name:a,imageUploadToken:t}){await Oe(De.b.getInstance(),e,{name:a,imageUploadToken:t})}(e,{name:n.name,imageUploadToken:a}),r({name:n.name,image:n.imageData||n.image})}catch(e){u(We(Te))}}else u(We(Ee))}),[u,r,n.image,n.imageData,n.imageToken,n.name,n.removeImage,e]);return(0,f.jsx)(q.Z,{isOpen:!0,contentLabel:j.ag.get("user.edit-details.title"),onRequestClose:()=>r(),children:(0,f.jsxs)("div",{className:He,children:[(0,f.jsxs)("div",{className:Be,children:[(0,f.jsx)($.D,{as:"h1",variant:"canon",children:j.ag.get("user.edit-details.title")}),(0,f.jsx)("button",{className:Ke,onClick:()=>r(),"aria-label":j.ag.get("close"),children:(0,f.jsx)(Q.k,{iconSize:16})})]}),n.message&&(0,f.jsx)(ee.X,{isErrorMessage:"error"===n.message.type,message:n.message.message}),(0,f.jsxs)("form",{className:Je,onSubmit:g,children:[(0,f.jsx)(Y.uL,{isOpen:o,minImageWidth:300,minImageHeight:300,maxFileSizeMB:10,onChange:async function(e){if(!e)return;const{imageFile:a,imageDataUrl:t}=e;if(u(We(null)),u({type:"setImageData",data:t}),a)try{u(Le(!0));const e=await async function(e){const a=await De.b.getInstance().build().withEndpointIdentifier("image-upload/v4/user-profile").withHost("https://image-upload.spotify.com/v4").withMethod("POST").withPath("/user-profile").withBody(e).withoutGlobalHeaders().withHeaders([{key:"Content-Type",value:"image/jpeg"}]).withoutMarket().send();if(!a.body)throw new Error("No upload token recieved");return a.body.uploadToken}(a);u({type:"setImageToken",token:e}),u(Le(!1))}catch{u(We(Me))}},onError:c}),(0,f.jsxs)("div",{className:ze,children:[(0,f.jsx)(ue,{name:a,images:d,onClickEdit:l,onClickRemove:m}),n.loading&&(0,f.jsx)("div",{className:Ge,children:(0,f.jsx)(Z.T,{})})]}),(0,f.jsxs)("div",{className:$e,children:[(0,f.jsx)("label",{htmlFor:"user-edit-name",className:Qe,children:(0,f.jsx)($.D,{variant:"finaleBold",className:Ze,children:j.ag.get("user.edit-details.name-label")})}),(0,f.jsx)("input",{"data-testid":"user-edit-name-input",id:"user-edit-name",type:"text",dir:"auto",className:I()(Ve,Xe),onChange:e=>{u(function(e){return{type:"setName",name:e}}(e.target.value))},placeholder:j.ag.get("user.edit-details.name-placeholder"),maxLength:32,value:n.name})]}),(0,f.jsx)("div",{className:qe,children:(0,f.jsx)(X.D,{colorSet:"invertedLight",onClick:g,disabled:n.loading,children:j.ag.get("save")})}),(0,f.jsx)($.D,{as:"p",variant:"finaleBold",className:Ye,children:j.ag.get("image-upload.legal-disclaimer")})]})]})})}));var aa=t(13218),ta=t(7658),ia=t(57389),ra=t(81612),sa=t(35761),oa=t(70842),la=t(99125);const na=({className:e,isCurrentUser:a,userId:t,username:r,userDisplayName:s})=>{const{projects:l,fetchProjects:n}=(0,ra.w)(a,r),u=l?.filter((e=>!(0,ia.o)(e))),d=l?.filter((e=>(0,ia.o)(e)&&!e.isPrivate)),c=l?.filter((e=>(0,ia.o)(e)&&e.isPrivate));return(0,i.useEffect)((()=>{const e=setInterval((()=>{const e=l?.filter((e=>e.publishingState===oa.H.IN_PROGRESS));e&&e.length>0&&n()}),3e4);return()=>clearInterval(e)}),[n,l]),(0,sa.I)(la.O.USER_PROJECTS_UPDATED,(async()=>n())),l?(0,f.jsxs)(f.Fragment,{children:[u.length>0&&(0,f.jsxs)("section",{className:e,children:[(0,f.jsx)(aa.r,{title:j.ag.get("web-player.soundtrap.unpublished-projects.title"),tagline:j.ag.get("web-player.soundtrap.unpublished-projects.tagline"),seeAllUri:o().profileURI(t,["soundtrap","unpublished"]).toURI(),hasMoreElements:u.length>4}),(0,f.jsx)(ta.M,{data:u,userDisplayName:s,isCurrentUser:a,maxNumberOfTracks:4})]}),c.length>0&&(0,f.jsxs)("section",{className:e,children:[(0,f.jsx)(aa.r,{title:j.ag.get("web-player.soundtrap.private-songs.title"),tagline:j.ag.get("web-player.soundtrap.private-songs.tagline"),seeAllUri:o().profileURI(t,["soundtrap","private"]).toURI(),hasMoreElements:c.length>4}),(0,f.jsx)(ta.M,{data:c,userDisplayName:s,isCurrentUser:a,maxNumberOfTracks:4})]}),d.length>0&&(0,f.jsxs)("section",{className:e,children:[(0,f.jsx)(aa.r,{title:j.ag.get("web-player.soundtrap.public-songs.title"),tagline:a?j.ag.get("web-player.soundtrap.public-songs.tagline"):null,seeAllUri:o().profileURI(t,["soundtrap","public"]).toURI(),hasMoreElements:d.length>4}),(0,f.jsx)(ta.M,{data:d,userDisplayName:s,isCurrentUser:a,maxNumberOfTracks:4})]})]}):null};var ua=t(7212),da=t(26492),ca=t(4236),ma=t(62515),ga=t(75915),pa=t(94321),ha=t(29255),fa=t(52983),va=t(20246),xa=t(18261),ba=t(15852),ya=t(49961);const Ia=({imageUriOrUrl:e="",desiredMosaicSize:a=300}={})=>{if(!e)return"";if(e.startsWith("spotify:")){const[,t,...i]=e.split(":");if("image"===t)return`https://i.scdn.co/image/${i[0]}`;if("mosaic"===t)return`https://mosaic.scdn.co/${a}/${i.join("")}`}return e};var ja=t(68513),ka=t(18686),Na=t(49207),_a=t(63766),Pa=t(61913),wa=t(47991),Ra=t(42922),Sa=t(84242),Ua=t(42781);const Oa=i.memo((function({tracks:e,hasHeaderRow:a=!1,nrTracksVisible:t,uri:r}){const s=(0,ce.C)(r),l=o().userToplistURI(s,"tracks").toURI(),n=(0,i.useMemo)((()=>t?e.slice(0,t):e),[t,e]),{usePlayContextItem:u}=(0,Sa.n)({uri:l,pages:[{items:e.map((e=>({type:Ua.p.TRACK,uri:e.uri,uid:null,provider:null})))}]},{featureIdentifier:"profile",referrerIdentifier:"user_profile"}),d=(0,i.useCallback)(((e,a)=>{const t=(0,ya.X)(e?.album?.images,{desiredSize:40});return(0,f.jsx)(Pa.SS,{index:a,uri:(0,wa.$)(e),duration_ms:e.duration_ms,name:e.name,artists:e.artists,album:e.album,isPlayable:!0,isExplicit:!!e.explicit,isMOGEFRestricted:!!e.mogef19,imgUrl:t?.url||"",contextUri:l,usePlayContextItem:u},a+e.uri)}),[l,u]),c=(0,i.useMemo)((()=>[_a.QD.INDEX,_a.QD.TITLE,_a.QD.ALBUM,_a.QD.DURATION]),[]),m=(0,i.useCallback)((e=>e.uri),[]);return(0,f.jsx)(Ra.ZP,{value:"user-top-tracks-tracklist",children:(0,f.jsx)(_a.Pv,{ariaLabel:j.ag.get("top_tracks_this_month"),renderRow:d,nrTracks:n.length,tracks:n,resolveUri:m,hasHeaderRow:a,columns:c})})}),((e,a)=>e.tracks===a.tracks)),Da=i.memo((function({tracks:e,title:a,tagline:t,seeAllUri:r,className:s,uri:o,spec:l}){const n=(0,ba.$P)(),u=(0,i.useCallback)((()=>{const e=l.titleLinkFactory().hitUiNavigate({destination:r});n.logInteraction(e)}),[n,r,l]),d=(0,i.useCallback)((()=>{const e=l.titleLinkFactory().hitUiNavigate({destination:r});n.logInteraction(e)}),[n,r,l]);if(!e||0===e.length)return null;const c=e.length>4;return(0,f.jsxs)("section",{className:s,children:[(0,f.jsx)(aa.r,{title:a,tagline:t,seeAllUri:r,hasMoreElements:c,onClickTitle:u,onClickSeeAll:d}),(0,f.jsx)(ba.Nh,{spec:l,children:(0,f.jsx)(Oa,{tracks:e,uri:o,nrTracksVisible:4})})]})}),((e,a)=>e.tracks===a.tracks));function Aa(e,a){switch(a.type){case"OPEN_MODAL":return{isModalOpen:!0,modalVariant:"editProfile",shouldOpenImagePicker:!1};case"OPEN_MODAL_WITH_IMAGEPICKER":return{isModalOpen:!0,modalVariant:"editProfile",shouldOpenImagePicker:!0};case"OPEN_SOUNDTRAP_MODAL":return{isModalOpen:!0,modalVariant:"soundtrap",shouldOpenImagePicker:!1};case"CLOSE_MODAL":return{isModalOpen:!1,modalVariant:null,shouldOpenImagePicker:!1};default:return e}}const Ca=({uri:e})=>{const a=(0,C.v9)(ha.Gf),t=(0,C.v9)(ha.A$),s=(0,C.I0)(),l=(0,E.W6)(Na.Nf,{loadingValue:!1}),[n,m]=(0,ga.H)(e),g=(0,i.useMemo)((()=>(0,ya.X)(t)),[t]),[{isModalOpen:h,modalVariant:v,shouldOpenImagePicker:x},b]=function(){const[e,a]=(0,i.useReducer)(Aa,{isModalOpen:!1,modalVariant:null,shouldOpenImagePicker:!1});return[e,a]}(),y=(0,da.o)(),w=!(0,ca.k)(),{data:S,loading:U}=(0,d.J)(c.n5.getProfile,[{uri:e,playlists:10,artists:10,episodes:10}]),O=S?.public_playlists,D=S?.is_verified,A=S?.is_current_user||!1,$=S?.recently_played_artists,Q=S?.user_created_show,Z=A?g?.url||"":S?.image_url||"",X=(0,ce.C)(e),q=(0,C.v9)(pa.C7),Y=(A?a:S?.name)||"",ee=(0,ma.Z)(S?.image_url||null),{userId:ae}=(0,r.UO)(),{spec:te,logger:ie}=(0,ba.fU)(T.createDesktopProfileEventFactory,{data:{uri:e,identifier:ae}}),re=(0,i.useMemo)((()=>te.sectionTopTracksFactory()),[te]),{data:se,loading:oe}=(0,d.J)(c.n5.getFollowing,[e]),le=se?.profiles,{data:ne,loading:ue}=(0,d.J)(c.n5.getFollowers,[e]),de=ne?.profiles,me=(0,i.useMemo)((()=>(e=>e?c.n5.getUserTopArtists:()=>Promise.resolve({status:200,body:{items:[],offset:0,limit:0,total:0,href:"",next:null,previous:null}}))(A)),[A]),ge=(0,i.useMemo)((()=>(e=>e?c.n5.getUserTopTracks:()=>Promise.resolve({status:200,body:{items:[],offset:0,limit:0,total:0,href:"",next:null,previous:null}}))(A&&!q)),[A,q]),{data:pe,loading:he}=(0,d.J)(me,[]),{data:fe,loading:ve}=(0,d.J)(ge,[]),xe=pe?.body,be=fe?.body,ye=(0,E.W6)(Na.sT,{loadingValue:!1}),{projects:Ie}=(0,ra.w)(A,ae),[je,ke]=(0,i.useState)(null),Ne=(0,r.k6)();(0,i.useEffect)((()=>{if(ye&&Ie&&"soundtrap_publish"===Ne.location.state?.referrer&&Ne.location.state?.newProjectId){const e=Ie?.find((e=>e.soundtrapProjectId===Ne.location.state.newProjectId));e&&(ke(e),b({type:"OPEN_SOUNDTRAP_MODAL"}))}}),[Ne,ye,b,Ie]);const _e=(0,i.useCallback)((()=>{y({targetUri:e,intent:n?"unfollow":"follow",type:"click"});const a=te.actionBarFactory().followButtonFactory();n?(m(!1),ie.logInteraction(a.hitUnfollow({itemToBeUnfollowed:e}))):(m(!0),ie.logInteraction(a.hitFollow({itemToBeFollowed:e})))}),[n,ie,y,m,te,e]),Pe=(0,i.useCallback)((e=>{b({type:"CLOSE_MODAL"}),e?(s((0,fa.dL)(e.name)),s((0,fa.GR)(e.image?[{url:e.image,height:null,width:null}]:[]))):"soundtrap_publish"===Ne.location.state?.referrer&&Ne.location.state?.newProjectId&&Ne.replace(Ne.location.pathname)}),[s,b,Ne]),we=(0,i.useCallback)((()=>{b({type:"OPEN_MODAL"});const e=te.headerFactory().usernameFactory().hitUiReveal();ie.logInteraction(e)}),[ie,b,te]),Re=(0,i.useCallback)((()=>{b({type:"OPEN_MODAL_WITH_IMAGEPICKER"});const e=te.headerFactory().profileImageFactory().hitUiReveal();ie.logInteraction(e)}),[ie,b,te]),Se=(0,i.useMemo)((()=>[{url:Z}]),[Z]),Ue=(0,i.useCallback)((()=>{const e=te.headerFactory().usernameFactory().hitUiReveal();ie.logInteraction(e)}),[ie,te]),Oe=(0,i.useCallback)(((e,a)=>{if(!a)return;const t=te.headerFactory().followersLinkFactory().hitUiNavigate({destination:a});ie.logInteraction(t)}),[ie,te]),De=(0,i.useCallback)(((e,a)=>{if(!a)return;const t=te.headerFactory().followersLinkFactory().hitUiNavigate({destination:a});ie.logInteraction(t)}),[ie,te]),Ae=(0,i.useCallback)((()=>{const e=te.actionBarFactory().contextMenuButtonFactory().hitUiReveal();ie.logInteraction(e)}),[ie,te]);if(!S||U||oe||ue||ve||he)return(0,f.jsx)(N.h,{hasError:!1,errorMessage:j.ag.get("error.not_found.title.page")});const Ce={total:S.followers_count},Ee=I()("contentSpacing",P);function Te(e){return Q&&l?e:e-1}return(0,f.jsxs)("div",{className:_,children:[(0,f.jsx)(u.$,{children:Y}),(0,f.jsxs)(B.gF,{backgroundColor:ee,children:[(0,f.jsx)(z.W,{children:(0,f.jsx)(G.i,{text:Y})}),(0,f.jsx)(xa._,{menu:(0,f.jsx)(H.I,{uri:S.uri}),children:(0,f.jsx)("div",{className:R,children:(0,f.jsx)(J.T,{canEdit:A,name:Y,images:Se,onClick:Re,placeholderType:"user",shape:B.Kc.CIRCLE})})}),(0,f.jsxs)(B.sP,{children:[(0,f.jsx)(B.dy,{small:!0,uppercase:!0,children:D?(0,f.jsx)(ja.S,{text:j.ag.get("card.tag.profile")}):j.ag.get("card.tag.profile")}),(0,f.jsx)(xa._,{menu:(0,f.jsx)(H.I,{uri:S.uri}),children:(0,f.jsx)(B.xd,{canEdit:A,editTitle:j.ag.get("playlist.edit-details.title"),onClick:we,children:Y})}),(0,f.jsx)(B.QS,{totalFollowers:Ce.total,totalFollowing:le?.length,publicPlaylists:S.total_public_playlists_count,userUri:e,onCreatorClick:Ue,onTotalFollowersClick:Oe,onTotalFollowingClick:De})]})]}),(0,f.jsx)(M.o,{backgroundColor:ee,children:(0,f.jsxs)(M.F,{children:[!A&&(0,f.jsx)(K.r,{children:(0,f.jsx)(V.e,{isFollowing:Boolean(n),onClick:_e,disabled:w})}),(0,f.jsx)(va.y,{menu:(0,f.jsx)(H.I,{uri:S.uri,onEditProfileCallback:we}),children:(0,f.jsx)(L.z,{label:j.ag.get("more.label.context",Y),onClick:Ae})})]})}),(0,f.jsxs)(ba.Nh,{spec:te,children:[ye&&(0,f.jsx)(na,{className:Ee,userId:ae,username:X,userDisplayName:Y,isCurrentUser:A}),Q&&l&&(0,f.jsx)(ka.q,{className:Ee,total:Q.total_episode_count,title:j.ag.get("episodes"),seeAllUri:o().profileURI(X,["episodes"]).toURI(),id:"episodes",index:0,children:Q.episodes?.map(((e,a)=>(0,f.jsx)(p.B,{index:a,uri:e.uri,name:e.name,images:e.images,durationMilliseconds:1e3*parseInt(e.duration,10),releaseDate:e.publish_time?.toISOString(),description:`Stream count ${e.stream_count}`,showImages:[],resume_point:null,isExplicit:!1,is19PlusOnly:!1,sharingInfo:null},e.uri)))}),(0,f.jsx)(ka.q,{className:Ee,total:xe?.total||0,title:j.ag.get("top_artists_this_month"),tagline:j.ag.get("only_visible_to_you"),seeAllUri:o().profileURI(X,["top","artists"]).toURI(),id:"top-artists",index:Te(1),children:xe?.items.map(((e,a)=>(0,f.jsx)(W.I,{index:a,uri:e.uri,name:e.name,images:e.images},e.uri)))}),(0,f.jsx)(Da,{className:Ee,title:j.ag.get("top_tracks_this_month"),tagline:j.ag.get("only_visible_to_you"),seeAllUri:o().profileURI(X,["top","tracks"]).toURI(),uri:e,tracks:be?.items,spec:re}),(0,f.jsx)(ka.q,{className:Ee,total:S.total_public_playlists_count,title:j.ag.get("public_playlists"),seeAllUri:o().profileURI(X,["playlists"]).toURI(),id:"playlists",index:Te(2),children:O?.map(((e,a)=>(0,f.jsx)(F.Z,{index:a,uri:e.uri,name:e.name,images:[{url:Ia({imageUriOrUrl:e.image_url}),width:300,height:300}],authorName:e.owner_name,description:e.followers_count?j.ag.get("user.followers",e.followers_count):""},e.uri)))}),$?.length?(0,f.jsx)(ka.q,{className:Ee,total:$?.length,title:j.ag.get("recently_played_artists"),seeAllUri:o().profileURI(X,["recently-played-artists"]).toURI(),id:"recently-played-artists",index:Te(3),children:$?.map(((e,a)=>(0,f.jsx)(W.I,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,de?.length?(0,f.jsx)(ka.q,{className:Ee,title:j.ag.get("followers"),total:de?.length,seeAllUri:o().profileURI(X,["followers"]).toURI(),id:"followers",index:Te(4),children:de?.map(((e,a)=>(0,f.jsx)(k.P,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,le?.length?(0,f.jsx)(ka.q,{className:Ee,title:j.ag.get("following"),total:le?.length,seeAllUri:o().profileURI(X,["following"]).toURI(),id:"following",index:Te(5),children:le?.map(((e,a)=>(0,f.jsx)(k.P,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,A&&h&&("editProfile"===v?(0,f.jsx)(ea,{uri:e,name:Y,image:Z,onClose:Pe,shouldOpenImagePicker:x}):"soundtrap"===v&&ye&&je?(0,f.jsx)(ua.x,{project:je,userDisplayName:Y,onClose:Pe}):null)]})]})},Ea=e=>{const{uri:a}=e,{data:t,loading:i,error:r}=(0,d.J)(c.n5.getPlaylists,[{uri:a}]),{public_playlists:s,total_public_playlists_count:o=0}=t||{};return i?(0,f.jsx)(N.h,{hasError:null!==r,errorMessage:j.ag.get("error.not_found.title.page")}):(0,f.jsx)(h.P,{className:I()("contentSpacing",w),total:o,title:j.ag.get("public_playlists"),showAll:!0,children:s?.map(((e,a)=>(0,f.jsx)(F.Z,{index:a,uri:e.uri,name:e.name,authorName:e.owner_name,description:e.followers_count?j.ag.get("user.followers",e.followers_count):"",images:[{url:Ia({imageUriOrUrl:e.image_url}),width:300,height:300}]},e.uri)))})},Ta=e=>{const{uri:a}=e,{data:t,loading:i,error:r}=(0,d.J)(c.n5.getRecentlyPlayedArtists,[{uri:a,limit:50}]),s=t?.artists;return i?(0,f.jsx)(N.h,{hasError:null!==r,errorMessage:j.ag.get("error.not_found.title.page")}):(0,f.jsx)(h.P,{className:I()("contentSpacing",w),total:s?.length,title:j.ag.get("recently_played_artists"),showAll:!0,children:s?.map(((e,a)=>(0,f.jsx)(W.I,{index:a,name:e.name,uri:e.uri,images:[{url:e.image_url}]},e.uri)))})},Ma=()=>{const{data:e,loading:a,error:t}=(0,d.J)(c.n5.getUserTopArtists),i=e?.body;return a?(0,f.jsx)(N.h,{hasError:null!==t,errorMessage:j.ag.get("error.not_found.title.page")}):i?(0,f.jsx)(h.P,{className:I()("contentSpacing",w),total:i.items.length,title:j.ag.get("top_artists_this_month"),tagline:j.ag.get("only_visible_to_you"),showAll:!0,children:i.items.map(((e,a)=>(0,f.jsx)(W.I,{index:a,uri:e.uri,name:e.name,images:e.images},e.uri)))}):null},La=({uri:e})=>{const{data:a,loading:t,error:i}=(0,d.J)(c.n5.getProfile,[{uri:e}]);return a&&!t&&(a?.is_current_user||!1)?(0,f.jsx)(Ma,{}):(0,f.jsx)(N.h,{hasError:null!==i,errorMessage:j.ag.get("error.not_found.title.page")})},Wa=({uri:e})=>{const{data:a,loading:t,error:i}=(0,d.J)(c.n5.getUserTopTracks,[{offset:0,limit:50}]),r=a?.body;return t?(0,f.jsx)(N.h,{hasError:null!==i,errorMessage:j.ag.get("error.not_found.title.page")}):r?(0,f.jsxs)("div",{className:I()("contentSpacing",w,S),children:[(0,f.jsxs)("div",{className:U,children:[(0,f.jsx)($.D,{as:"h1",variant:"canon",className:O,children:j.ag.get("top_tracks_this_month")}),(0,f.jsx)($.D,{as:"p",variant:"mesto",children:j.ag.get("only_visible_to_you")})]}),(0,f.jsx)(Oa,{tracks:r.items,uri:e,hasHeaderRow:!0})]}):null},Fa=({uri:e})=>{const{data:a,loading:t,error:i}=(0,d.J)(c.n5.getProfile,[{uri:e}]);return a&&!t&&(a?.is_current_user||!1)?(0,f.jsx)(Wa,{uri:e}):(0,f.jsx)(N.h,{hasError:null!==i,errorMessage:j.ag.get("error.not_found.title.page")})},Ha=(0,i.memo)((function(){const{userId:e}=(0,r.UO)(),a=decodeURIComponent(e),t=o().profileURI(a).toURI();return(0,f.jsx)("section",{children:(0,f.jsxs)(r.rs,{children:[(0,f.jsx)(r.AW,{exact:!0,path:"/user/:userId/playlists",children:(0,f.jsx)(n.K,{pageId:l.Wg.PROFILE_PLAYLISTS,children:(0,f.jsx)(Ea,{uri:t})})}),(0,f.jsx)(r.AW,{exact:!0,path:"/user/:userId/top/tracks",children:(0,f.jsx)(n.K,{pageId:l.Wg.PROFILE_TOP_TRACKS,children:(0,f.jsx)(Fa,{uri:t})})}),(0,f.jsx)(r.AW,{exact:!0,path:"/user/:userId/top/artists",children:(0,f.jsx)(n.K,{pageId:l.Wg.PROFILE_TOP_ARTISTS,children:(0,f.jsx)(La,{uri:t})})}),(0,f.jsx)(r.AW,{exact:!0,path:"/user/:userId/recently-played-artists",children:(0,f.jsx)(n.K,{pageId:l.Wg.PROFILE_RECENTLY_PLAYED_ARTISTS,children:(0,f.jsx)(Ta,{uri:t})})}),(0,f.jsx)(r.AW,{exact:!0,path:"/user/:userId/following",children:(0,f.jsx)(n.K,{pageId:l.Wg.PROFILE_FOLLOWING,children:(0,f.jsx)(A,{uri:t})})}),(0,f.jsx)(r.AW,{exact:!0,path:"/user/:userId/followers",children:(0,f.jsx)(n.K,{pageId:l.Wg.PROFILE_FOLLOWERS,children:(0,f.jsx)(D,{uri:t})})}),(0,f.jsx)(r.AW,{exact:!0,path:"/user/:userId/episodes",children:(0,f.jsx)(n.K,{pageId:l.Wg.PROFILE_EPISODES,children:(0,f.jsx)(b,{uri:t})})}),(0,f.jsx)(r.AW,{exact:!0,path:"/user/:userId",children:(0,f.jsx)(n.K,{pageId:l.Wg.PROFILE,children:(0,f.jsx)(Ca,{uri:t})})})]})})}))},47991:(e,a,t)=>{t.d(a,{$:()=>i});const i=e=>e?.linked_from?.uri||e.uri}}]);
//# sourceMappingURL=xpui-routes-profile.js.map