"use strict";(self.webpackChunkreact_native_android_widget_docs=self.webpackChunkreact_native_android_widget_docs||[]).push([[1400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),k=i,m=u["".concat(d,".").concat(k)]||u[k]||s[k]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={id:"WidgetTaskHandlerProps",title:"Interface: WidgetTaskHandlerProps",sidebar_label:"WidgetTaskHandlerProps",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"public-api/interfaces/WidgetTaskHandlerProps",id:"public-api/interfaces/WidgetTaskHandlerProps",title:"Interface: WidgetTaskHandlerProps",description:"Properties",source:"@site/docs/public-api/interfaces/WidgetTaskHandlerProps.md",sourceDirName:"public-api/interfaces",slug:"/public-api/interfaces/WidgetTaskHandlerProps",permalink:"/react-native-android-widget/docs/public-api/interfaces/WidgetTaskHandlerProps",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"WidgetTaskHandlerProps",title:"Interface: WidgetTaskHandlerProps",sidebar_label:"WidgetTaskHandlerProps",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"WidgetPreviewProps",permalink:"/react-native-android-widget/docs/public-api/interfaces/WidgetPreviewProps"},next:{title:"WithAndroidWidgetsParams",permalink:"/react-native-android-widget/docs/public-api/interfaces/WithAndroidWidgetsParams"}},d={},p=[{value:"Properties",id:"properties",level:2},{value:"widgetInfo",id:"widgetinfo",level:3},{value:"widgetAction",id:"widgetaction",level:3},{value:"renderWidget",id:"renderwidget",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"clickAction",id:"clickaction",level:3},{value:"clickActionData",id:"clickactiondata",level:3}],c={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"widgetinfo"},"widgetInfo"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"widgetInfo"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/WidgetInfo"},(0,i.kt)("inlineCode",{parentName:"a"},"WidgetInfo"))),(0,i.kt)("p",null,"Information about the widget being handled."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"widgetaction"},"widgetAction"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"widgetAction"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"WIDGET_ADDED"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"WIDGET_RESIZED"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"WIDGET_CLICK"')),(0,i.kt)("p",null,"What kind of action is being handled"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"renderwidget"},"renderWidget"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"renderWidget"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"widgetComponent"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Element"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"widgetComponent"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Function that needs to be called with the Widget JSX to render"),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"widgetComponent")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Element"))))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"clickaction"},"clickAction"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"clickAction"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Click action if widgetAction was WIDGET_CLICK"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"clickactiondata"},"clickActionData"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"clickActionData"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,i.kt)("p",null,"Additional click action data if widgetAction was ",(0,i.kt)("inlineCode",{parentName:"p"},"WIDGET_CLICK")))}s.isMDXComponent=!0}}]);