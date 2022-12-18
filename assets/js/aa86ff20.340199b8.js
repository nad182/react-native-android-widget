"use strict";(self.webpackChunkreact_native_android_widget_docs=self.webpackChunkreact_native_android_widget_docs||[]).push([[1188],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=i,g=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return r?n.createElement(g,a(a({ref:t},d),{},{components:r})):n.createElement(g,a({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},574:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:1},a="FlexWidget",c={unversionedId:"primitives/flex-widget",id:"primitives/flex-widget",title:"FlexWidget",description:"Widget container that lays out child widgets using flexbox.",source:"@site/docs/primitives/flex-widget.md",sourceDirName:"primitives",slug:"/primitives/flex-widget",permalink:"/react-native-android-widget/docs/primitives/flex-widget",draft:!1,editUrl:"https://github.com/sAleksovski/react-native-android-widget/tree/master/docs/docs/primitives/flex-widget.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"default",previous:{title:"requestWidgetUpdate",permalink:"/react-native-android-widget/docs/api/request-widget-update"},next:{title:"OverlapWidget",permalink:"/react-native-android-widget/docs/primitives/overlap-widget"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],d={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"flexwidget"},"FlexWidget"),(0,i.kt)("p",null,"Widget container that lays out child widgets using flexbox."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { FlexWidget } from 'react-native-android-widget';\n\nexport function MyWidget() {\n  return (\n    <FlexWidget\n      style={{\n        alignItems: 'center',\n        justifyContent: 'center',\n      }}\n    >\n      ...\n    </FlexWidget>\n  );\n}\n")),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("p",null,"Check the props in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/public-api/interfaces/FlexWidgetProps"},"Public API")," documentation"))}p.isMDXComponent=!0}}]);