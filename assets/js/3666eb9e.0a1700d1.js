"use strict";(self.webpackChunkreact_native_android_widget_docs=self.webpackChunkreact_native_android_widget_docs||[]).push([[4483],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),g=i,v=u["".concat(d,".").concat(g)]||u[g]||s[g]||a;return r?n.createElement(v,o(o({ref:t},l),{},{components:r})):n.createElement(v,o({ref:t},l))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:1},o="WidgetPreview",c={unversionedId:"api/widget-preview",id:"api/widget-preview",title:"WidgetPreview",description:"react-native-android-widget exports a WidgetPreview component that can be used to preview a widget in any screen in our React Native application.",source:"@site/docs/api/widget-preview.md",sourceDirName:"api",slug:"/api/widget-preview",permalink:"/react-native-android-widget/docs/api/widget-preview",draft:!1,editUrl:"https://github.com/sAleksovski/react-native-android-widget/tree/master/docs/docs/api/widget-preview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"default",previous:{title:"Congratulations!",permalink:"/react-native-android-widget/docs/tutorial/congratulations"},next:{title:"registerWidgetTaskHandler",permalink:"/react-native-android-widget/docs/api/register-widget-task-handler"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Types",id:"types",level:2}],l={toc:p};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"widgetpreview"},"WidgetPreview"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"react-native-android-widget")," exports a ",(0,i.kt)("inlineCode",{parentName:"p"},"WidgetPreview")," component that can be used to preview a widget in any screen in our React Native application."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="HelloWidgetPreviewScreen.tsx"',title:'"HelloWidgetPreviewScreen.tsx"'},"import * as React from 'react';\nimport { StyleSheet, View } from 'react-native';\nimport { WidgetPreview } from 'react-native-android-widget';\n\nimport { HelloWidget } from './HelloWidget';\n\nexport function HelloWidgetPreviewScreen() {\n  return (\n    <View style={styles.container}>\n      <WidgetPreview\n        renderWidget={() => <HelloWidget />}\n        width={320}\n        height={200}\n      />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n")),(0,i.kt)("h2",{id:"types"},"Types"),(0,i.kt)("p",null,"Check the types in the ",(0,i.kt)("a",{parentName:"p",href:"/react-native-android-widget/docs/public-api/interfaces/WidgetPreviewProps"},"Public API")," documentation"))}s.isMDXComponent=!0}}]);