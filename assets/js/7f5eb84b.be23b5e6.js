"use strict";(self.webpackChunkreact_native_android_widget_docs=self.webpackChunkreact_native_android_widget_docs||[]).push([[9069],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=i.createContext({}),l=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),h=l(r),k=a,s=h["".concat(p,".").concat(k)]||h[k]||c[k]||n;return r?i.createElement(s,o(o({ref:t},m),{},{components:r})):i.createElement(s,o({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=h;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var l=2;l<n;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var i=r(7462),a=(r(7294),r(3905));const n={id:"CommonStyleProps",title:"Interface: CommonStyleProps",sidebar_label:"CommonStyleProps",sidebar_position:0,custom_edit_url:null},o=void 0,d={unversionedId:"public-api/interfaces/CommonStyleProps",id:"public-api/interfaces/CommonStyleProps",title:"Interface: CommonStyleProps",description:"Hierarchy",source:"@site/docs/public-api/interfaces/CommonStyleProps.md",sourceDirName:"public-api/interfaces",slug:"/public-api/interfaces/CommonStyleProps",permalink:"/react-native-android-widget/docs/public-api/interfaces/CommonStyleProps",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CommonStyleProps",title:"Interface: CommonStyleProps",sidebar_label:"CommonStyleProps",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"BorderStyleProps",permalink:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps"},next:{title:"FlexWidgetProps",permalink:"/react-native-android-widget/docs/public-api/interfaces/FlexWidgetProps"}},p={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"margin",id:"margin",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"marginHorizontal",id:"marginhorizontal",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"marginVertical",id:"marginvertical",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"marginTop",id:"margintop",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"marginBottom",id:"marginbottom",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"marginLeft",id:"marginleft",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"marginRight",id:"marginright",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"padding",id:"padding",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"paddingHorizontal",id:"paddinghorizontal",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"paddingVertical",id:"paddingvertical",level:3},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"paddingTop",id:"paddingtop",level:3},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"paddingBottom",id:"paddingbottom",level:3},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"paddingLeft",id:"paddingleft",level:3},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"paddingRight",id:"paddingright",level:3},{value:"Inherited from",id:"inherited-from-13",level:4},{value:"height",id:"height",level:3},{value:"Inherited from",id:"inherited-from-14",level:4},{value:"width",id:"width",level:3},{value:"Inherited from",id:"inherited-from-15",level:4},{value:"backgroundColor",id:"backgroundcolor",level:3},{value:"Inherited from",id:"inherited-from-16",level:4},{value:"backgroundGradient",id:"backgroundgradient",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Inherited from",id:"inherited-from-17",level:4},{value:"borderWidth",id:"borderwidth",level:3},{value:"Inherited from",id:"inherited-from-18",level:4},{value:"borderTopWidth",id:"bordertopwidth",level:3},{value:"Inherited from",id:"inherited-from-19",level:4},{value:"borderBottomWidth",id:"borderbottomwidth",level:3},{value:"Inherited from",id:"inherited-from-20",level:4},{value:"borderLeftWidth",id:"borderleftwidth",level:3},{value:"Inherited from",id:"inherited-from-21",level:4},{value:"borderRightWidth",id:"borderrightwidth",level:3},{value:"Inherited from",id:"inherited-from-22",level:4},{value:"borderColor",id:"bordercolor",level:3},{value:"Inherited from",id:"inherited-from-23",level:4},{value:"borderTopColor",id:"bordertopcolor",level:3},{value:"Inherited from",id:"inherited-from-24",level:4},{value:"borderBottomColor",id:"borderbottomcolor",level:3},{value:"Inherited from",id:"inherited-from-25",level:4},{value:"borderLeftColor",id:"borderleftcolor",level:3},{value:"Inherited from",id:"inherited-from-26",level:4},{value:"borderRightColor",id:"borderrightcolor",level:3},{value:"Inherited from",id:"inherited-from-27",level:4},{value:"borderRadius",id:"borderradius",level:3},{value:"Inherited from",id:"inherited-from-28",level:4},{value:"borderTopLeftRadius",id:"bordertopleftradius",level:3},{value:"Inherited from",id:"inherited-from-29",level:4},{value:"borderTopRightRadius",id:"bordertoprightradius",level:3},{value:"Inherited from",id:"inherited-from-30",level:4},{value:"borderBottomLeftRadius",id:"borderbottomleftradius",level:3},{value:"Inherited from",id:"inherited-from-31",level:4},{value:"borderBottomRightRadius",id:"borderbottomrightradius",level:3},{value:"Inherited from",id:"inherited-from-32",level:4},{value:"borderStyle",id:"borderstyle",level:3},{value:"Inherited from",id:"inherited-from-33",level:4},{value:"rotation",id:"rotation",level:3},{value:"Inherited from",id:"inherited-from-34",level:4}],m={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/MarginStyleProps"},(0,a.kt)("inlineCode",{parentName:"a"},"MarginStyleProps")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/PaddingStyleProps"},(0,a.kt)("inlineCode",{parentName:"a"},"PaddingStyleProps")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/SizeStyleProps"},(0,a.kt)("inlineCode",{parentName:"a"},"SizeStyleProps")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BackgroundStyleProps"},(0,a.kt)("inlineCode",{parentName:"a"},"BackgroundStyleProps")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps"},(0,a.kt)("inlineCode",{parentName:"a"},"BorderStyleProps")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/OtherStyleProps"},(0,a.kt)("inlineCode",{parentName:"a"},"OtherStyleProps"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CommonStyleProps"))),(0,a.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/FlexWidgetStyle"},(0,a.kt)("inlineCode",{parentName:"a"},"FlexWidgetStyle"))),(0,a.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/IconWidgetStyle"},(0,a.kt)("inlineCode",{parentName:"a"},"IconWidgetStyle"))),(0,a.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/TextWidgetStyle"},(0,a.kt)("inlineCode",{parentName:"a"},"TextWidgetStyle"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"margin"},"margin"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"margin"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/MarginStyleProps"},"MarginStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/MarginStyleProps#margin"},"margin")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"marginhorizontal"},"marginHorizontal"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"marginHorizontal"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/MarginStyleProps"},"MarginStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/MarginStyleProps#marginhorizontal"},"marginHorizontal")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"marginvertical"},"marginVertical"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"marginVertical"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/MarginStyleProps"},"MarginStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/MarginStyleProps#marginvertical"},"marginVertical")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"margintop"},"marginTop"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"marginTop"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/MarginStyleProps"},"MarginStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/MarginStyleProps#margintop"},"marginTop")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"marginbottom"},"marginBottom"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"marginBottom"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/MarginStyleProps"},"MarginStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/MarginStyleProps#marginbottom"},"marginBottom")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"marginleft"},"marginLeft"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"marginLeft"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/MarginStyleProps"},"MarginStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/MarginStyleProps#marginleft"},"marginLeft")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"marginright"},"marginRight"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"marginRight"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/MarginStyleProps"},"MarginStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/MarginStyleProps#marginright"},"marginRight")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"padding"},"padding"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"padding"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/PaddingStyleProps"},"PaddingStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/PaddingStyleProps#padding"},"padding")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"paddinghorizontal"},"paddingHorizontal"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"paddingHorizontal"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/PaddingStyleProps"},"PaddingStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/PaddingStyleProps#paddinghorizontal"},"paddingHorizontal")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"paddingvertical"},"paddingVertical"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"paddingVertical"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/PaddingStyleProps"},"PaddingStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/PaddingStyleProps#paddingvertical"},"paddingVertical")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"paddingtop"},"paddingTop"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"paddingTop"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/PaddingStyleProps"},"PaddingStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/PaddingStyleProps#paddingtop"},"paddingTop")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"paddingbottom"},"paddingBottom"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"paddingBottom"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/PaddingStyleProps"},"PaddingStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/PaddingStyleProps#paddingbottom"},"paddingBottom")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"paddingleft"},"paddingLeft"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"paddingLeft"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/PaddingStyleProps"},"PaddingStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/PaddingStyleProps#paddingleft"},"paddingLeft")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"paddingright"},"paddingRight"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"paddingRight"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-13"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/PaddingStyleProps"},"PaddingStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/PaddingStyleProps#paddingright"},"paddingRight")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"height"},"height"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"height"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"wrap_content"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"match_parent"')),(0,a.kt)("h4",{id:"inherited-from-14"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/SizeStyleProps"},"SizeStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/SizeStyleProps#height"},"height")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"width"},"width"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"width"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"wrap_content"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"match_parent"')),(0,a.kt)("h4",{id:"inherited-from-15"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/SizeStyleProps"},"SizeStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/SizeStyleProps#width"},"width")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"backgroundcolor"},"backgroundColor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"backgroundColor"),": ",(0,a.kt)("a",{parentName:"p",href:"../#colorprop"},(0,a.kt)("inlineCode",{parentName:"a"},"ColorProp"))),(0,a.kt)("h4",{id:"inherited-from-16"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BackgroundStyleProps"},"BackgroundStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BackgroundStyleProps#backgroundcolor"},"backgroundColor")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"backgroundgradient"},"backgroundGradient"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"backgroundGradient"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"from")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../#colorprop"},(0,a.kt)("inlineCode",{parentName:"a"},"ColorProp")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"to")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../#colorprop"},(0,a.kt)("inlineCode",{parentName:"a"},"ColorProp")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"orientation")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"TOP_BOTTOM"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"TR_BL"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"RIGHT_LEFT"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"BR_TL"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"BOTTOM_TOP"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"BL_TR"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"LEFT_RIGHT"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"TL_BR"'))))),(0,a.kt)("h4",{id:"inherited-from-17"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BackgroundStyleProps"},"BackgroundStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BackgroundStyleProps#backgroundgradient"},"backgroundGradient")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"borderwidth"},"borderWidth"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"borderWidth"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-18"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps"},"BorderStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps#borderwidth"},"borderWidth")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"bordertopwidth"},"borderTopWidth"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"borderTopWidth"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-19"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps"},"BorderStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps#bordertopwidth"},"borderTopWidth")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"borderbottomwidth"},"borderBottomWidth"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"borderBottomWidth"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-20"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps"},"BorderStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps#borderbottomwidth"},"borderBottomWidth")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"borderleftwidth"},"borderLeftWidth"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"borderLeftWidth"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-21"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps"},"BorderStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps#borderleftwidth"},"borderLeftWidth")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"borderrightwidth"},"borderRightWidth"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"borderRightWidth"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-22"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps"},"BorderStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps#borderrightwidth"},"borderRightWidth")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"bordercolor"},"borderColor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"borderColor"),": ",(0,a.kt)("a",{parentName:"p",href:"../#colorprop"},(0,a.kt)("inlineCode",{parentName:"a"},"ColorProp"))),(0,a.kt)("h4",{id:"inherited-from-23"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps"},"BorderStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps#bordercolor"},"borderColor")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"bordertopcolor"},"borderTopColor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"borderTopColor"),": ",(0,a.kt)("a",{parentName:"p",href:"../#colorprop"},(0,a.kt)("inlineCode",{parentName:"a"},"ColorProp"))),(0,a.kt)("h4",{id:"inherited-from-24"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps"},"BorderStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps#bordertopcolor"},"borderTopColor")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"borderbottomcolor"},"borderBottomColor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"borderBottomColor"),": ",(0,a.kt)("a",{parentName:"p",href:"../#colorprop"},(0,a.kt)("inlineCode",{parentName:"a"},"ColorProp"))),(0,a.kt)("h4",{id:"inherited-from-25"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps"},"BorderStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps#borderbottomcolor"},"borderBottomColor")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"borderleftcolor"},"borderLeftColor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"borderLeftColor"),": ",(0,a.kt)("a",{parentName:"p",href:"../#colorprop"},(0,a.kt)("inlineCode",{parentName:"a"},"ColorProp"))),(0,a.kt)("h4",{id:"inherited-from-26"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps"},"BorderStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps#borderleftcolor"},"borderLeftColor")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"borderrightcolor"},"borderRightColor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"borderRightColor"),": ",(0,a.kt)("a",{parentName:"p",href:"../#colorprop"},(0,a.kt)("inlineCode",{parentName:"a"},"ColorProp"))),(0,a.kt)("h4",{id:"inherited-from-27"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps"},"BorderStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps#borderrightcolor"},"borderRightColor")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"borderradius"},"borderRadius"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"borderRadius"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-28"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps"},"BorderStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps#borderradius"},"borderRadius")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"bordertopleftradius"},"borderTopLeftRadius"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"borderTopLeftRadius"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-29"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps"},"BorderStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps#bordertopleftradius"},"borderTopLeftRadius")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"bordertoprightradius"},"borderTopRightRadius"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"borderTopRightRadius"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-30"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps"},"BorderStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps#bordertoprightradius"},"borderTopRightRadius")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"borderbottomleftradius"},"borderBottomLeftRadius"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"borderBottomLeftRadius"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-31"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps"},"BorderStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps#borderbottomleftradius"},"borderBottomLeftRadius")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"borderbottomrightradius"},"borderBottomRightRadius"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"borderBottomRightRadius"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-32"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps"},"BorderStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps#borderbottomrightradius"},"borderBottomRightRadius")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"borderstyle"},"borderStyle"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"borderStyle"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"solid"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"dotted"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"dashed"')),(0,a.kt)("h4",{id:"inherited-from-33"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps"},"BorderStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/BorderStyleProps#borderstyle"},"borderStyle")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"rotation"},"rotation"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"rotation"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-34"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/OtherStyleProps"},"OtherStyleProps"),".",(0,a.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/OtherStyleProps#rotation"},"rotation")))}c.isMDXComponent=!0}}]);