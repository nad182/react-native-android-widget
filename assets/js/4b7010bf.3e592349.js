"use strict";(self.webpackChunkreact_native_android_widget_docs=self.webpackChunkreact_native_android_widget_docs||[]).push([[5710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,u=c["".concat(l,".").concat(m)]||c[m]||g[m]||i;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},o="Register task handler",d={unversionedId:"tutorial/register-task-handler",id:"tutorial/register-task-handler",title:"Register task handler",description:"We designed and previewed our widget. Now we need to register a task handler that will handle the logic of adding/updating a widget to the home screen, as well as handle widget clicks.",source:"@site/docs/tutorial/register-task-handler.md",sourceDirName:"tutorial",slug:"/tutorial/register-task-handler",permalink:"/react-native-android-widget/docs/tutorial/register-task-handler",draft:!1,editUrl:"https://github.com/sAleksovski/react-native-android-widget/tree/master/docs/docs/tutorial/register-task-handler.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"default",previous:{title:"Widget Preview",permalink:"/react-native-android-widget/docs/tutorial/widget-preview"},next:{title:"Register widget",permalink:"/react-native-android-widget/docs/tutorial/register-widget"}},l={},s=[{value:"Create task handler function",id:"create-task-handler-function",level:2},{value:"Register widget task handler",id:"register-widget-task-handler",level:2},{value:"Register widget task handler (Expo)",id:"register-widget-task-handler-expo",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:s};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"register-task-handler"},"Register task handler"),(0,a.kt)("p",null,"We designed and previewed our widget. Now we need to register a ",(0,a.kt)("em",{parentName:"p"},"task handler")," that will handle the logic of adding/updating a widget to the home screen, as well as handle widget clicks."),(0,a.kt)("h2",{id:"create-task-handler-function"},"Create task handler function"),(0,a.kt)("p",null,"First, create a task handler function, containing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="widget-task-handler.ts"',title:'"widget-task-handler.ts"'},"import React from 'react';\nimport type { WidgetTaskHandlerProps } from 'react-native-android-widget';\nimport { HelloWidget } from './HelloWidget';\n\nconst nameToWidget = {\n  // Hello will be the **name** with which we will reference our widget.\n  Hello: HelloWidget,\n};\n\nexport async function widgetTaskHandler(props: WidgetTaskHandlerProps) {\n  const widgetInfo = props.widgetInfo;\n  const Widget =\n    nameToWidget[widgetInfo.widgetName as keyof typeof nameToWidget];\n\n  switch (props.widgetAction) {\n    case 'WIDGET_ADDED':\n      props.renderWidget(<Widget />);\n      break;\n\n    case 'WIDGET_RESIZED':\n      // Not needed for now\n      break;\n\n    case 'WIDGET_CLICK':\n      // Not needed for now\n      break;\n\n    default:\n      break;\n  }\n}\n")),(0,a.kt)("p",null,"We use ",(0,a.kt)("inlineCode",{parentName:"p"},"nameToWidget")," to map from the ",(0,a.kt)("strong",{parentName:"p"},"name")," to the component defining the widget (useful if we have multiple widgets). There are other ways to achieve this."),(0,a.kt)("h2",{id:"register-widget-task-handler"},"Register widget task handler"),(0,a.kt)("p",null,"In the main ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"index.tsx"),") file for our app, when we register the main component, register the widget task handler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.ts"',title:'"index.ts"'},"import { AppRegistry } from 'react-native';\nimport { registerWidgetTaskHandler } from 'react-native-android-widget';\nimport { name as appName } from './app.json';\nimport App from './App';\nimport { widgetTaskHandler } from './widget-task-handler';\n\nAppRegistry.registerComponent(appName, () => App);\nregisterWidgetTaskHandler(widgetTaskHandler);\n")),(0,a.kt)("h2",{id:"register-widget-task-handler-expo"},"Register widget task handler (Expo)"),(0,a.kt)("p",null,"If we are using Expo, there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"index.tsx"),"), but we can create it."),(0,a.kt)("p",null,"First, update ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," main field to point to ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},".js"),") instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/expo/AppEntry.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "my-expo-app",\n  "main": "index.ts",\n  ...\n}\n')),(0,a.kt)("p",null,"Create the file, using ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/expo/AppEntry.js")," as a template.\nThen import ",(0,a.kt)("inlineCode",{parentName:"p"},"widgetTaskHandler")," and register it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.ts"',title:'"index.ts"'},"import { registerRootComponent } from 'expo';\nimport { registerWidgetTaskHandler } from 'react-native-android-widget';\n\nimport App from './App';\nimport { widgetTaskHandler } from './widget-task-handler';\n\n// registerRootComponent calls AppRegistry.registerComponent('main', () => App);\n// It also ensures that whether you load the app in Expo Go or in a native build,\n// the environment is set up appropriately\nregisterRootComponent(App);\nregisterWidgetTaskHandler(widgetTaskHandler);\n")),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"We designed our widget, saw the preview, and registered a handler that will handle adding it to the home screen."),(0,a.kt)("p",null,"We still need to tell the application that there is a widget called ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello"),"."),(0,a.kt)("p",null,"Continue with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./register-widget"},"Register widget")," if you are using React Native bare"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./register-widget-expo"},"Register widget in Expo")," if you are using Expo")))}g.isMDXComponent=!0}}]);