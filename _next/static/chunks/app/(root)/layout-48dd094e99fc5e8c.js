(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{9013:function(e,t,r){Promise.resolve().then(r.bind(r,63014)),Promise.resolve().then(r.t.bind(r,44193,23)),Promise.resolve().then(r.t.bind(r,26697,23)),Promise.resolve().then(r.bind(r,30945)),Promise.resolve().then(r.bind(r,77288)),Promise.resolve().then(r.bind(r,70622)),Promise.resolve().then(r.bind(r,95010)),Promise.resolve().then(r.bind(r,33255)),Promise.resolve().then(r.bind(r,13584)),Promise.resolve().then(r.bind(r,26249)),Promise.resolve().then(r.bind(r,55267)),Promise.resolve().then(r.t.bind(r,36865,23))},75475:function(e,t,r){"use strict";r.d(t,{Z:function(){return LoginDialog}});var n=r(57437),i=r(2265),s=r(73724),a=r(89394),o=r(42834),l=r(26337),d=r(91797),u=r(60987),c=r(74309),h=r(8864),m=r(16932),g=r(51718),x=r(84081),p=r(61865),f=r(23083),v=r(35691),j=r(89701);let b=i.forwardRef(function(e,t){return(0,n.jsx)(u.Z,{style:{transitionDelay:"100ms"},ref:t,...e})});function LoginDialog(e){let{closeMenuItem:t,isPrimaryButton:r}=e,{signIn:u}=(0,f.Eu)(),w=v.Ry().shape({email:v.Z_().required("Email is required").email("Please input valid email address"),password:v.Z_().required("Password is required").min(6,"Password length should be at least 6 characters").max(12,"Password cannot exceed more than 12 characters")}),{control:C,handleSubmit:Z,formState:{errors:S}}=(0,p.cI)({mode:"all",resolver:(0,j.X)(w),defaultValues:{email:"",password:""}}),[y,P]=i.useState(!1),handleClickOpen=()=>{P(!0),t&&t()},handleClose=()=>{P(!1),t&&t()},handleSaveForm=async()=>{Z(e=>{u(e.email,e.password),handleClose()})()};return(0,n.jsxs)(n.Fragment,{children:[r?(0,n.jsx)(s.Z,{variant:"outlined",className:"w-full",onClick:handleClickOpen,children:"Log in"}):(0,n.jsxs)(c.Z,{onClick:handleClickOpen,children:[(0,n.jsx)(h.Z,{children:(0,n.jsx)(m.Z,{fontSize:"small"})}),"Login"]}),(0,n.jsxs)(a.Z,{open:y,TransitionComponent:b,onClose:handleClose,"aria-describedby":"alert-dialog-slide-description",onKeyDown:e=>{"Tab"===e.key&&e.stopPropagation()},children:[(0,n.jsx)(d.Z,{children:"User Login form"}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(p.Qr,{render:e=>{var t;let{field:r}=e;return(0,n.jsx)(x.Z,{fullWidth:!0,size:"small",variant:"outlined",sx:{padding:"15px 0"},children:(0,n.jsx)(g.Z,{size:"small",label:"Email*",error:!!S.email,type:"text",onChange:r.onChange,name:r.name,value:r.value,helperText:null===(t=S.email)||void 0===t?void 0:t.message})})},name:"email",control:C}),(0,n.jsx)(p.Qr,{render:e=>{var t;let{field:r}=e;return(0,n.jsx)(x.Z,{fullWidth:!0,size:"small",variant:"outlined",sx:{padding:"15px 0"},children:(0,n.jsx)(g.Z,{size:"small",label:"Password*",error:!!S.password,type:"password",onChange:r.onChange,name:r.name,value:r.value,helperText:null===(t=S.password)||void 0===t?void 0:t.message})})},name:"password",control:C})]}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(s.Z,{onClick:handleClose,type:"button","data-testid":"cancel-login-btn",children:"Cancel"}),(0,n.jsx)(s.Z,{onClick:handleSaveForm,"data-testid":"submit-login-btn",children:"Login"})]})]})]})}},30945:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Footer}});var n=r(57437);r(2265);var i=r(61396),s=r.n(i);function Footer(){return(0,n.jsx)("footer",{className:"bg-purple-secondary text-white flex items-center",children:(0,n.jsx)("div",{className:"max-w-screen-xl mx-auto px-5 lg:px-0 w-full",children:(0,n.jsxs)("div",{className:"py-6 text-xs flex justify-center items-center flex-col",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(s(),{href:"#",children:"Privacy"})," | ",(0,n.jsx)(s(),{href:"#",children:"Terms"})]}),(0,n.jsx)("p",{className:"text-center",children:"Copyright \xa9 2023. All Rights Reserved."})]})})})}},77288:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Header}});var n=r(57437),i=r(2265),s=r(16691),a=r.n(s),o=r(63014),l=r(35843),d=r(89975),u=r(42498),c=r(52653),h=r(92375),m=r(50819),g=r(81679),x=r(84081),p=r(58991),f=r(82477),v=r(80682),j=r(33932),b=r(74309),w=r(8864),C=r(54986),Z=r(3283),S=r(52513),y=r(98599),P=r(26409),k=r(93295),A=r(59104),N=r(75475),I=r(73724),L=r(89394),O=r(42834),M=r(26337),T=r(91797),U=r(60987),z=r(51718),E=r(61865),D=r(23083),V=r(35691),R=r(89701);let F=i.forwardRef(function(e,t){return(0,n.jsx)(U.Z,{style:{transitionDelay:"100ms"},ref:t,...e})});function RegisterDialog(e){let{closeMenuItem:t}=e,{signUp:r}=(0,D.Eu)(),s=V.Ry().shape({email:V.Z_().required("Email is required").email("Please input valid email address"),username:V.Z_().required("Username is required"),password:V.Z_().required("Password is required").min(6,"Password length should be at least 6 characters").max(12,"Password cannot exceed more than 12 characters"),cpassword:V.Z_().required("Confirm Password is required").min(6,"Password length should be at least 6 characters").max(12,"Password cannot exceed more than 12 characters").oneOf([V.iH("password")],"Passwords do not match")}),{control:a,handleSubmit:o,formState:{errors:l}}=(0,E.cI)({mode:"all",resolver:(0,R.X)(s),defaultValues:{email:"",password:"",cpassword:""}}),[d,u]=i.useState(!1),handleClose=()=>{u(!1),t()},handleSaveForm=async()=>{o(e=>{r(e.email,e.password,e.username)})()};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(b.Z,{onClick:()=>{u(!0),t()},children:[(0,n.jsx)(w.Z,{children:(0,n.jsx)(P.Z,{fontSize:"small"})}),"Register"]}),(0,n.jsxs)(L.Z,{open:d,TransitionComponent:F,onClose:handleClose,onKeyDown:e=>{"Tab"===e.key&&e.stopPropagation()},children:[(0,n.jsx)(T.Z,{children:"User Register form"}),(0,n.jsxs)(M.Z,{children:[(0,n.jsx)(E.Qr,{render:e=>{var t;let{field:r}=e;return(0,n.jsx)(x.Z,{fullWidth:!0,size:"small",variant:"outlined",sx:{padding:"15px 0"},children:(0,n.jsx)(z.Z,{size:"small",label:"Email*",error:!!l.email,onChange:r.onChange,name:r.name,value:r.value,helperText:null===(t=l.email)||void 0===t?void 0:t.message})})},name:"email",control:a}),(0,n.jsx)(E.Qr,{render:e=>{var t;let{field:r}=e;return(0,n.jsx)(x.Z,{fullWidth:!0,size:"small",variant:"outlined",sx:{padding:"15px 0"},children:(0,n.jsx)(z.Z,{size:"small",label:"username*",error:!!l.username,onChange:r.onChange,name:r.name,value:r.value,helperText:null===(t=l.username)||void 0===t?void 0:t.message})})},name:"username",control:a}),(0,n.jsx)(E.Qr,{render:e=>{var t;let{field:r}=e;return(0,n.jsx)(x.Z,{fullWidth:!0,size:"small",variant:"outlined",sx:{padding:"15px 0"},children:(0,n.jsx)(z.Z,{size:"small",label:"Password*",error:!!l.password,type:"password",onChange:r.onChange,name:r.name,value:r.value,helperText:null===(t=l.password)||void 0===t?void 0:t.message})})},name:"password",control:a}),(0,n.jsx)(E.Qr,{render:e=>{var t;let{field:r}=e;return(0,n.jsx)(x.Z,{fullWidth:!0,size:"small",variant:"outlined",sx:{padding:"15px 0"},children:(0,n.jsx)(z.Z,{size:"small",label:"Confirm Password*",error:!!l.cpassword,type:"password",onChange:r.onChange,name:r.name,value:r.value,helperText:null===(t=l.cpassword)||void 0===t?void 0:t.message})})},name:"cpassword",control:a})]}),(0,n.jsxs)(O.Z,{children:[(0,n.jsx)(I.Z,{onClick:handleClose,type:"button","data-testid":"cancel-register-button",children:"Cancel"}),(0,n.jsx)(I.Z,{onClick:handleSaveForm,"data-testid":"submit-register-button",children:"Register"})]})]})]})}var _=r(36748);let J={youtubeUrl:/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/};var W=r(92006);let Y=i.forwardRef(function(e,t){return(0,n.jsx)(U.Z,{style:{transitionDelay:"100ms"},ref:t,...e})});function ShareYoutubeVideoDialog(){let{setIsReloadVideoList:e}=(0,D.n6)(),{isAuthenticated:t}=(0,D.Eu)(),{socket:r,room:s}=(0,D.sO)(),a=V.Ry().shape({url:V.Z_().required("Youtube Url is required").matches(J.youtubeUrl,"Please input valid youtube link"),thumbnail:V.Z_(),title:V.Z_()}),{control:l,handleSubmit:d,formState:{errors:u}}=(0,E.cI)({mode:"all",resolver:(0,R.X)(a),defaultValues:{url:"",thumbnail:"",title:""}}),[h,m]=i.useState(!1),handleClose=()=>{m(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,{"aria-label":"toggle share youtube video",edge:"end",onClick:()=>{if(!t){o.toast.error("Please login to continue.");return}m(!0)},children:(0,n.jsx)(_.Z,{sx:{color:"#fff"}})}),h&&(0,n.jsxs)(L.Z,{open:h,TransitionComponent:Y,keepMounted:!0,onClose:handleClose,"aria-describedby":"alert-dialog-slide-description",children:[(0,n.jsx)(T.Z,{children:"Share a youtube movie"}),(0,n.jsxs)(M.Z,{children:[(0,n.jsx)(E.Qr,{render:e=>{var t;let{field:r}=e;return(0,n.jsx)(x.Z,{fullWidth:!0,size:"small",variant:"outlined",sx:{padding:"15px 0"},children:(0,n.jsx)(z.Z,{size:"small",label:"Youtube URL*",error:!!u.url,type:"text",onChange:r.onChange,name:r.name,value:r.value,helperText:null===(t=u.url)||void 0===t?void 0:t.message})})},name:"url",control:l}),(0,n.jsx)(E.Qr,{render:e=>{var t;let{field:r}=e;return(0,n.jsx)(x.Z,{fullWidth:!0,size:"small",variant:"outlined",sx:{padding:"15px 0"},children:(0,n.jsx)(z.Z,{size:"small",label:"Title",type:"text",onChange:r.onChange,name:r.name,value:r.value,helperText:null===(t=u.url)||void 0===t?void 0:t.message})})},name:"title",control:l}),(0,n.jsx)(E.Qr,{render:e=>{var t;let{field:r}=e;return(0,n.jsx)(x.Z,{fullWidth:!0,size:"small",variant:"outlined",sx:{padding:"15px 0"},children:(0,n.jsx)(z.Z,{size:"small",label:"Youtube thumbnail",type:"text",onChange:r.onChange,name:r.name,value:r.value,helperText:null===(t=u.url)||void 0===t?void 0:t.message})})},name:"thumbnail",control:l})]}),(0,n.jsxs)(O.Z,{children:[(0,n.jsx)(I.Z,{onClick:handleClose,type:"button","data-testid":"cancel-share-video-button",children:"Cancel"}),(0,n.jsx)(I.Z,{onClick:()=>{d(async t=>{var n,i,a;let l=null!==(i=t.url.match(J.youtubeUrl))&&void 0!==i?i:"";if(l&&(null===(n=l[7])||void 0===n?void 0:n.length)!==11){o.toast.error("Youtube ID is not correct! Please check again.");return}let d=await (0,W.hp)({payload:{title:t.title,url:null!==(a=l[7])&&void 0!==a?a:"",cover:t.thumbnail}});d&&(o.toast.success("Share video successful."),handleClose(),e(!0),r&&r.emit("send_message",{videoNotification:d,room:s,sender:r.id}))})()},"data-testid":"submit-share-video-button",children:"Share"})]})]})]})}var q=r(38827),B=r(26312),Q=r(74548),H=r.n(Q),K=r(7050);function Notification(){let{videoNotification:e}=(0,D.n6)(),[t,r]=i.useState(null),s=!!t,handleClose=()=>{r(null)};return(0,n.jsxs)("div",{children:[(0,n.jsx)(c.Z,{sx:{color:"#fff"},onClick:e=>{r(e.currentTarget)},"aria-label":"notification",children:(0,n.jsx)(q.Z,{badgeContent:e.length>0?e.length:null,color:"secondary",children:(0,n.jsx)(B.Z,{})})}),s&&e.length>0&&(0,n.jsx)(j.Z,{id:"basic-menu","data-testid":"notification-popup",anchorEl:t,open:s,onClose:handleClose,children:e.map(e=>{var t,r,i;return(0,n.jsx)(b.Z,{onClick:handleClose,"data-testid":"notification-menu-item",children:(0,n.jsxs)("div",{className:"flex flex-row p-4 gap-3",children:[(0,n.jsx)("div",{className:"avatar",children:(0,n.jsx)(Z.Z,{alt:null==e?void 0:null===(t=e.author)||void 0===t?void 0:t.username,src:null==e?void 0:null===(r=e.author)||void 0===r?void 0:r.avatar})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"title",children:null==e?void 0:e.title}),(0,n.jsxs)("div",{className:"title",children:[(0,n.jsx)("span",{children:null==e?void 0:null===(i=e.author)||void 0===i?void 0:i.username})," - ",(0,n.jsx)("span",{children:H()(null==e?void 0:e.createTime).format(K.v)})]})]})]})},"".concat(e.id))})})]})}var G={src:"/_next/static/media/logo-white.9a71c785.png",height:150,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAALElEQVR42mP4W/638BvrH/FfKr9E/gj9EWT4k/638Xf+n4LfZb+r/xT/KQEAVmIUtU91rloAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},X=r(90262);let $=(0,X.tv)({slots:{headerMenuMobile:"flex flex-row items-center justify-center lg:hidden",headerMenuPc:"hidden lg:block",headerWrapper:"h-16 bg-purple-primary flex flex-row justify-between items-center px-6",searchWrapper:"max-w-[600px] w-full desktop-view"}}),ee=(0,l.ZP)("div")(e=>{let{theme:t}=e;return{position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:(0,d.Fq)(t.palette.common.white,.15),"&:hover":{backgroundColor:(0,d.Fq)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:t.spacing(3),width:"100%",[t.breakpoints.down("sm")]:{display:"none"}}}),et=(0,l.ZP)("div")(e=>{let{theme:t}=e;return{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}),er=(0,l.ZP)(y.ZP)(e=>{let{theme:t}=e;return{color:"inherit","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%",color:"#fff",[t.breakpoints.up("sm")]:{width:"12ch","&:focus":{width:"20ch"}}}}});function Header(){var e;let{headerMenuMobile:t,headerMenuPc:r,headerWrapper:s,searchWrapper:l}=$(),{isAuthenticated:d,user:y,signOut:I}=(0,D.Eu)(),[L,O]=i.useState(null),handleOpenUserMenu=e=>{O(e.currentTarget)},handleCloseUserMenu=()=>{O(null)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("header",{className:s(),"data-testid":"wrapp-header",children:[(0,n.jsxs)("div",{className:t(),children:[(0,n.jsx)(c.Z,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2,color:"#fff"},children:(0,n.jsx)(S.Z,{})}),(0,n.jsx)(a(),{src:G,alt:"logo",className:"w-[130px]"}),(0,n.jsxs)(ee,{children:[(0,n.jsx)(et,{children:(0,n.jsx)(p.Z,{sx:{color:"#fff"}})}),(0,n.jsx)(er,{placeholder:"Search…",inputProps:{"aria-label":"search"}})]})]}),(0,n.jsx)("div",{className:r(),children:(0,n.jsx)(a(),{src:G,alt:"logo",className:"w-[130px]"})}),(0,n.jsx)("div",{className:l(),children:(0,n.jsxs)(x.Z,{fullWidth:!0,size:"small",variant:"outlined",className:"group-search",sx:{borderRadius:"30px",color:"#fff"},children:[(0,n.jsx)(m.Z,{htmlFor:"outlined-adornment-password",className:"white-label",children:"Search"}),(0,n.jsx)(h.Z,{size:"small",id:"outlined-adornment-password",type:"text",className:"white-input",endAdornment:(0,n.jsx)(g.Z,{position:"end",children:(0,n.jsx)(c.Z,{onClick:()=>{o.toast.info("Feature is coming soon")},"data-testid":"header-search-icon",children:(0,n.jsx)(p.Z,{sx:{color:"#fff"}})})}),label:"Search",sx:{borderRadius:"30px",color:"#fff",borderColor:"error.main"}})]})}),(0,n.jsx)("div",{children:(0,n.jsxs)(u.Z,{spacing:2,direction:"row",className:"items-center",children:[(0,n.jsx)("div",{children:(0,n.jsx)(ShareYoutubeVideoDialog,{})}),d?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Notification,{}),(0,n.jsx)(v.Z,{title:"Account info",children:(0,n.jsx)(c.Z,{"aria-label":"toggle password visibility",edge:"end",onClick:handleOpenUserMenu,"data-testid":"authorized-menu",children:(0,n.jsx)(Z.Z,{alt:"Admin",src:null!==(e=null==y?void 0:y.avatar)&&void 0!==e?e:"/static/images/avatar/2.jpg"})})}),(0,n.jsxs)(j.Z,{id:"menu-appbar",anchorEl:L,open:!!L,onClose:handleCloseUserMenu,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[(0,n.jsxs)(b.Z,{onClick:handleCloseUserMenu,children:[(0,n.jsx)(Z.Z,{})," Hi, ",null==y?void 0:y.username]}),(0,n.jsx)(C.Z,{}),(0,n.jsxs)(b.Z,{onClick:handleCloseUserMenu,children:[(0,n.jsx)(w.Z,{children:(0,n.jsx)(P.Z,{fontSize:"small"})}),"Add another account"]}),(0,n.jsxs)(b.Z,{onClick:handleCloseUserMenu,children:[(0,n.jsx)(w.Z,{children:(0,n.jsx)(k.Z,{fontSize:"small"})}),"Settings"]}),(0,n.jsxs)(b.Z,{onClick:()=>{handleCloseUserMenu(),I()},"data-testid":"header-logout-button",children:[(0,n.jsx)(w.Z,{children:(0,n.jsx)(A.Z,{fontSize:"small"})}),"Logout"]})]})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v.Z,{title:"Open settings",children:(0,n.jsx)(c.Z,{"aria-label":"toggle password visibility",edge:"end",onClick:handleOpenUserMenu,"data-testid":"unauthorized-menu",children:(0,n.jsx)(f.Z,{sx:{color:"#fff"}})})}),(0,n.jsxs)(j.Z,{id:"register-emnu",anchorEl:L,open:!!L,onClose:handleCloseUserMenu,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},keepMounted:!0,transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[(0,n.jsx)(N.Z,{closeMenuItem:handleCloseUserMenu}),(0,n.jsx)(RegisterDialog,{closeMenuItem:handleCloseUserMenu})]})]})]})})]})})}},70622:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return LeftSideBar}});var n=r(57437);r(2265);var i=r(96507),s=r(35266),a=r(54986),o=r(69299),l=r(72502),d=r(8864),u=r(38212),c=r(78329),h=r(42863),m=r(54936),g=r(54360),x=r(63014),p=r(75475),f=r(23083);let v=[{label:"Home",icon:(0,n.jsx)(c.Z,{})},{label:"Trending",icon:(0,n.jsx)(h.Z,{})},{label:"Music",icon:(0,n.jsx)(m.Z,{})},{label:"LIVE",icon:(0,n.jsx)(g.Z,{})}];function LeftSideBar(){let{isAuthenticated:e}=(0,f.Eu)();return(0,n.jsx)("div",{className:"w-[350px] min-h-screen bg-white sticky top-0 desktop-view","data-testid":"left-bar",children:(0,n.jsxs)(i.Z,{role:"presentation",sx:{width:"100%"},children:[(0,n.jsx)(s.Z,{children:v.map(e=>(0,n.jsx)(o.ZP,{disablePadding:!0,children:(0,n.jsxs)(l.Z,{onClick:()=>{x.toast.info("Feature is coming soon")},children:[(0,n.jsx)(d.Z,{children:e.icon}),(0,n.jsx)(u.Z,{primary:e.label})]})},e.label))}),(0,n.jsx)(a.Z,{}),!e&&(0,n.jsxs)("div",{className:"px-4 py-4",children:[(0,n.jsxs)("p",{className:"text-[15px] text-[#999] mb-4",children:["Log in to view your ",(0,n.jsx)("b",{children:"Followed"})," content."]}),(0,n.jsx)(p.Z,{isPrimaryButton:!0})]})]})})}},95010:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return RightSideBar}});var n=r(57437);r(2265);var i=r(96507);function RightSideBar(){return(0,n.jsx)("div",{className:"w-[350px] desktop-view","data-testid":"right-bar",children:(0,n.jsx)(i.Z,{role:"presentation",sx:{width:"100%",padding:"10px",backgroundColor:"#fff"},children:(0,n.jsx)("iframe",{src:"https://www.youtube.com/embed/bGpFGBLRmws?autoplay=1&mute=1",allow:"autoplay; encrypted-media",allowFullScreen:!0,title:"video"})})})}},26249:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ThemeRegistry}});var n=r(57437),i=r(56335),s=r(24033),a=r(86375),o=r(33948),l=r(3857),d=r(2265),u=(0,r(98595).Z)({typography:{fontFamily:"inherit"},palette:{primary:{main:"#9b59b6"}},components:{MuiCssBaseline:{styleOverrides:{".MuiOutlinedInput-root.white-input":{".MuiOutlinedInput-notchedOutline":{borderColor:"#fff"},"&&&:hover:not(.Mui-focused, .Mui-error) .MuiOutlinedInput-notchedOutline":{borderColor:"#fff"},"&&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#fff"},".MuiOutlinedInput-input":{padding:"8.5px 14px"}},".MuiFormLabel-root":{"&.white-label":{color:"#fff","&.Mui-focused":{color:"#fff"}}}}}}});function ThemeRegistry(e){let{options:t,children:r}=e,[{cache:c,flush:h}]=(0,d.useState)(()=>{let e=(0,i.Z)(t);e.compat=!0;let r=e.insert,n=[];return e.insert=function(){for(var t=arguments.length,i=Array(t),s=0;s<t;s++)i[s]=arguments[s];let a=i[1];return void 0===e.inserted[a.name]&&n.push(a.name),r(...i)},{cache:e,flush:()=>{let e=n;return n=[],e}}});return(0,s.useServerInsertedHTML)(()=>{let e=h();if(0===e.length)return null;let t="";for(let r of e)t+=c.inserted[r];return(0,n.jsx)("style",{"data-emotion":"".concat(c.key," ").concat(e.join(" ")),dangerouslySetInnerHTML:{__html:t}},c.key)}),(0,n.jsx)(a.C,{value:c,children:(0,n.jsxs)(o.Z,{theme:u,children:[(0,n.jsx)(l.ZP,{}),r]})})}},33255:function(e,t,r){"use strict";r.r(t),r.d(t,{AuthContextProvider:function(){return AuthContextProvider},useAuthContext:function(){return useAuthContext}});var n=r(57437),i=r(2265),s=r(63014),a=r(53360);let o=(0,i.createContext)({isAuthenticated:!1,user:null,signIn:()=>void 0,signUp:()=>void 0,signOut:()=>void 0}),AuthContextProvider=e=>{let{children:t}=e,[r,l]=(0,i.useState)(!1),[d,u]=(0,i.useState)(null);(0,i.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("userLogged"));l(!!e),u(e)},[]);let handleSignedIn=e=>{u(e),l(!0)},signOut=()=>{localStorage.removeItem("userLogged"),u(null),l(!1),window.location.reload()},c=(0,i.useCallback)(async(e,t)=>{try{let r=await function(e){let{payload:t={email:"",password:""}}=e;return new Promise((e,r)=>{let n=JSON.parse(localStorage.getItem("userList"));n||localStorage.setItem("userList",JSON.stringify(a.As));let{email:i,password:s}=t,o=JSON.parse(localStorage.getItem("userList")).find(e=>e.email===i);o&&s===o.password?(localStorage.setItem("userLogged",JSON.stringify(o)),setTimeout(()=>{e(o)},1e3)):r({success:!1,message:"Login failed"})})}({payload:{email:e,password:t}});r?handleSignedIn(r):s.toast.error("Something went wrong! Please try again.")}catch(e){console.log(e),s.toast.error("Login failed! Check email and password.")}finally{}},[handleSignedIn]),h=(0,i.useCallback)(async(e,t,r)=>{try{let n=await function(e){let{payload:t={email:"",password:"",username:""}}=e;return new Promise((e,r)=>{let n=JSON.parse(localStorage.getItem("userList")),{email:i,username:s,password:a}=t,o=JSON.parse(localStorage.getItem("userList")).find(e=>e.email===i);if(o)r({success:!1,message:"User already exists."});else{let t={id:n.length+1,avatar:"",username:s,email:i,password:a};n.push(t),localStorage.setItem("userList",JSON.stringify(n)),localStorage.setItem("userLogged",JSON.stringify(t)),e(t)}})}({payload:{email:e,password:t,username:r}});n?(s.toast.success("Registration successful"),c(n.email,n.password)):s.toast.error("Something went wrong! Please try again.")}catch(e){s.toast.error("User already exists.")}finally{}},[handleSignedIn]),m=(0,i.useMemo)(()=>({isAuthenticated:r,user:d,signIn:c,signUp:h,signOut}),[r,d]);return(0,n.jsx)(o.Provider,{value:m,children:t})},useAuthContext=()=>(0,i.useContext)(o)},13584:function(e,t,r){"use strict";r.r(t),r.d(t,{CommonDataContextProvider:function(){return CommonDataContextProvider},useCommonDataContext:function(){return useCommonDataContext}});var n=r(57437),i=r(2265);let s=(0,i.createContext)({isLoading:!1,setIsLoading:()=>{},videoList:[],setVideoList:()=>{},videoActionList:[],setVideoActionList:()=>{},isReloadVideoList:null,setIsReloadVideoList:()=>{},videoNotification:[],setVideoNotification:()=>{}});function CommonDataContextProvider(e){let{children:t}=e,[r,a]=(0,i.useState)(!1),[o,l]=(0,i.useState)(null),[d,u]=(0,i.useState)([]),[c,h]=(0,i.useState)([]),[m,g]=(0,i.useState)([]),x=(0,i.useMemo)(()=>({isLoading:r,setIsLoading:a,videoList:d,setVideoList:u,videoActionList:c,setVideoActionList:h,isReloadVideoList:o,setIsReloadVideoList:l,videoNotification:m,setVideoNotification:g}),[r,d,m,c,o]);return(0,n.jsx)(s.Provider,{value:x,children:t})}let useCommonDataContext=()=>(0,i.useContext)(s)},23083:function(e,t,r){"use strict";r.d(t,{Eu:function(){return i.useAuthContext},n6:function(){return n.useCommonDataContext},sO:function(){return s.useWebSocket}});var n=r(13584),i=r(33255),s=r(55267)},55267:function(e,t,r){"use strict";r.r(t),r.d(t,{WebSocketProvider:function(){return WebSocketProvider},useWebSocket:function(){return useWebSocket}});var n,i=r(57437),s=r(2265),a=r(63388);(n||(n={})).INVALID_TOKEN="Invalid token";var o=r(62601);o.env.NEXT_PUBLIC_API_TIMEOUT&&o.env.NEXT_PUBLIC_API_TIMEOUT;let l=(0,s.createContext)({socket:null,room:""}),WebSocketProvider=e=>{let{children:t}=e,[r]=(0,s.useState)((0,a.io)("http://localhost:3002")),[n]=(0,s.useState)("video-sharing");(0,s.useEffect)(()=>{r.emit("join_room",n),console.log("join room",n)},[]);let o=(0,s.useMemo)(()=>({socket:r,room:n}),[r,n]);return(0,i.jsx)(l.Provider,{value:o,children:t})},useWebSocket=()=>(0,s.useContext)(l)},53360:function(e,t,r){"use strict";r.d(t,{As:function(){return i},P:function(){return setUserList},Uw:function(){return n},mO:function(){return setVideoList}});let n=[{id:"1",createTime:"2023-10-06T13:54:41.548Z",title:"Video title with normal icon \uD83D\uDE22",cover:"https://pic-bstarstatic.akamaized.net/ugc/737f23e85fd60d975a18a9fc6bae8d7e.jpg",url:"F5zFxUtiiis",view:4900,duration:"0:42",likes:412,dislikes:110,author:{id:"1397653875",avatar:"https://yt3.ggpht.com/7nNBZTf4pTbi2K2bySkVovGOwTD9WFFX2MKwA0xPteWTMt-AL8akzHVy3mntRk0EiA_hfI895og=s88-c-k-c0x00ffffff-no-nd-rj",username:"Jon Bih"},isTrending:!1},{id:"2",createTime:"2023-10-09T13:54:41.548Z",title:"Youtube video title",cover:"https://pic-bstarstatic.akamaized.net/ugc/737f23e85fd60d975a18a9fc6bae8d7e.jpg",url:"eQNHDV7lKgE",view:4900,duration:"0:42",likes:412,dislikes:110,author:{id:"1397653875",avatar:"https://yt3.ggpht.com/DGr01GnA3cPYEdbECByx1Ln6NGgOhEiyNA_WyVvBGCdkV3f8oWXVr6uPBAcQ4ztd5BOD1Mtht0w=s88-c-k-c0x00ffffff-no-rj",username:"Test name 2"},isTrending:!1}],i=[{id:"1",avatar:"",username:"hieudt",email:"hieudt@gmail.com",password:"123456"},{id:"2",avatar:"",username:"admin",email:"admin@gmail.com",password:"123456"}],setVideoList=()=>{localStorage.setItem("videoList",JSON.stringify(n))},setUserList=()=>{localStorage.setItem("userList",JSON.stringify(i))}},92006:function(e,t,r){"use strict";r.d(t,{N$:function(){return getAllVideo},X7:function(){return removeVideoAction},YZ:function(){return videoAction},hp:function(){return shareYoutubeVideo},lt:function(){return getVideoAction}});var n=r(53360),i=r(90569),s=r.n(i);function getAllVideo(){return new Promise((e,t)=>{let r=localStorage.getItem("videoList"),i=r?JSON.parse(r):n.Uw;r||localStorage.setItem("videoList",JSON.stringify(n.Uw)),e(i)})}function videoAction(e){let{payload:t={id:"",action:""}}=e;return new Promise((e,r)=>{let n,i=JSON.parse(localStorage.getItem("videoAction")),{id:a}=t,o=JSON.parse(localStorage.getItem("userLogged")),l={...t,author:o.id};(null==i?void 0:i.length)>0?(n=[...n=s()(i,e=>e.author===o.id).filter(e=>e.id!==a),l],i=i.concat(n)):(i=[l],n=[l]),localStorage.setItem("videoAction",JSON.stringify(i)),e(n)})}function removeVideoAction(e){let{payload:t={id:"",action:""}}=e;return new Promise((e,r)=>{let n=JSON.parse(localStorage.getItem("videoAction")),{id:i}=t;n&&(n=n.filter(e=>e.id!==i)),localStorage.setItem("videoAction",JSON.stringify(n)),e(n)})}function getVideoAction(){return new Promise((e,t)=>{let r=JSON.parse(localStorage.getItem("videoAction")),n=JSON.parse(localStorage.getItem("userLogged"));if(n){let t=r.filter(e=>e.author===n.id);e(t)}})}function shareYoutubeVideo(e){let{payload:t={title:"",url:"",cover:"",author:null}}=e;return new Promise((e,r)=>{let{title:n,url:i,cover:s}=t,a=JSON.parse(localStorage.getItem("videoList")),o={id:(null==a?void 0:a.length)+1,createTime:new Date().toDateString(),title:n,cover:s||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJNhL2iJjNAlS7mbgcQDddFu8VKaFIm-D8A&usqp=CAU",url:i,view:Math.floor(500*Math.random())+100,duration:"0:42",likes:Math.floor(500*Math.random())+100,dislikes:Math.floor(500*Math.random())+100,author:JSON.parse(localStorage.getItem("userLogged")),isTrending:!1};a.push(o),localStorage.setItem("videoList",JSON.stringify(a)),e(o)})}},7050:function(e,t,r){"use strict";r.d(t,{t:function(){return n},v:function(){return i}});let n="DD/MM/YYYY",i="DD/MM/YYYY HH:mm"},36865:function(){}},function(e){e.O(0,[279,628,971,864,744],function(){return e(e.s=9013)}),_N_E=e.O()}]);