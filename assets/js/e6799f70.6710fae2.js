"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9600],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return N}});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),i=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(o.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(t),N=s,k=d["".concat(o,".").concat(N)]||d[N]||m[N]||r;return t?n.createElement(k,p(p({ref:a},c),{},{components:t})):n.createElement(k,p({ref:a},c))}));function N(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,p=new Array(r);p[0]=d;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,p[1]=l;for(var i=2;i<r;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4926:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return o},default:function(){return N},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return m}});var n=t(3117),s=t(102),r=(t(7294),t(3905)),p=["components"],l={id:"touch-events",title:"Touch Events",sidebar_label:"Touch Events",slug:"/animations/touch-events"},o=void 0,i={unversionedId:"animations/touch-events",id:"animations/touch-events",title:"Touch Events",description:"useTouchHandler",source:"@site/docs/animations/gestures.md",sourceDirName:"animations",slug:"/animations/touch-events",permalink:"/react-native-skia/docs/animations/touch-events",editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/animations/gestures.md",tags:[],version:"current",frontMatter:{id:"touch-events",title:"Touch Events",sidebar_label:"Touch Events",slug:"/animations/touch-events"},sidebar:"tutorialSidebar",previous:{title:"Animations",permalink:"/react-native-skia/docs/animations/animations"},next:{title:"Reanimated",permalink:"/react-native-skia/docs/animations/reanimated"}},c={},m=[{value:"useTouchHandler",id:"usetouchhandler",level:3}],d={toc:m};function N(e){var a=e.components,t=(0,s.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"usetouchhandler"},"useTouchHandler"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useTouchHandler")," hook handles touches in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Canvas"),".\nIt is meant to be used with values to animate canvas elements."),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: {\n    (props: AnimatedProps<CircleProps>): JSX.Element;\n    defaultProps: {\n        c: {\n            x: number;\n            y: number;\n        };\n    };\n}\nimport Circle"},"Circle")),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const useTouchHandler: (handlers: TouchHandlers, deps?: DependencyList | undefined) => TouchHandler\nimport useTouchHandler"},"useTouchHandler")),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const useValue: <T>(v: T) => SkiaValue<T>\nimport useValue"},"useValue")),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const MyComponent: () => JSX.Element"},"MyComponent")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const cx: SkiaValue<number>"},"cx")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useValue<number>(v: number): SkiaValue<number>\nimport useValue"},"useValue")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"100"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},");")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const cy: SkiaValue<number>"},"cy")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useValue<number>(v: number): SkiaValue<number>\nimport useValue"},"useValue")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"100"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},");")),(0,r.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const touchHandler: TouchHandler"},"touchHandler")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useTouchHandler(handlers: TouchHandlers, deps?: React.DependencyList | undefined): TouchHandler\nimport useTouchHandler"},"useTouchHandler")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"({")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) onActive?: ((touchInfo: ExtendedTouchInfo) => void) | undefined"},"onActive")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ({ ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(parameter) x: number"},"x")),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(parameter) y: number"},"y")," }) "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const cx: SkiaValue<number>"},"cx")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},".",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) SkiaValue<number>.current: number"},"current")," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(parameter) x: number"},"x"),";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const cy: SkiaValue<number>"},"cy")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},".",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) SkiaValue<number>.current: number"},"current")," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(parameter) y: number"},"y"),";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    }"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  });")),(0,r.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) style?: StyleProp<ViewStyle>"},"style")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{ ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," }} "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) onTouch?: TouchHandler | undefined"},"onTouch")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,r.kt)("data-lsp",{parentName:"span",lsp:"const touchHandler: TouchHandler"},"touchHandler"),"}>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: {\n    (props: AnimatedProps<CircleProps>): JSX.Element;\n    defaultProps: {\n        c: {\n            x: number;\n            y: number;\n        };\n    };\n}\nimport Circle"},"Circle")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) cx: number | SkiaReadonlyValue<number>"},"cx")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,r.kt)("data-lsp",{parentName:"span",lsp:"const cx: SkiaValue<number>"},"cx"),"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) cy: number | SkiaReadonlyValue<number>"},"cy")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,r.kt)("data-lsp",{parentName:"span",lsp:"const cy: SkiaValue<number>"},"cy"),"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) r: number"},"r")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"10"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) color: string"},"color")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"red"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," />")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: {\n    (props: AnimatedProps<CircleProps>): JSX.Element;\n    defaultProps: {\n        c: {\n            x: number;\n            y: number;\n        };\n    };\n}\nimport Circle"},"Circle")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const useTouchHandler: (handlers: TouchHandlers, deps?: DependencyList | undefined) => TouchHandler\nimport useTouchHandler"},"useTouchHandler")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const useValue: <T>(v: T) => SkiaValue<T>\nimport useValue"},"useValue")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const MyComponent: () => JSX.Element"},"MyComponent")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const cx: SkiaValue<number>"},"cx")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useValue<number>(v: number): SkiaValue<number>\nimport useValue"},"useValue")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"100"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const cy: SkiaValue<number>"},"cy")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useValue<number>(v: number): SkiaValue<number>\nimport useValue"},"useValue")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"100"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const touchHandler: TouchHandler"},"touchHandler")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useTouchHandler(handlers: TouchHandlers, deps?: React.DependencyList | undefined): TouchHandler\nimport useTouchHandler"},"useTouchHandler")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) onActive?: ((touchInfo: ExtendedTouchInfo) => void) | undefined"},"onActive")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"({"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(parameter) x: number"},"x")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(parameter) y: number"},"y")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"})"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const cx: SkiaValue<number>"},"cx")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) SkiaValue<number>.current: number"},"current")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(parameter) x: number"},"x")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const cy: SkiaValue<number>"},"cy")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) SkiaValue<number>.current: number"},"current")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(parameter) y: number"},"y")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"},")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) style?: StyleProp<ViewStyle>"},"style")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"1"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) onTouch?: TouchHandler | undefined"},"onTouch")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const touchHandler: TouchHandler"},"touchHandler")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: {\n    (props: AnimatedProps<CircleProps>): JSX.Element;\n    defaultProps: {\n        c: {\n            x: number;\n            y: number;\n        };\n    };\n}\nimport Circle"},"Circle")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) cx: number | SkiaReadonlyValue<number>"},"cx")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const cx: SkiaValue<number>"},"cx")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) cy: number | SkiaReadonlyValue<number>"},"cy")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const cy: SkiaValue<number>"},"cy")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) r: number"},"r")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"10"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) color: string"},"color")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"red"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))))}N.isMDXComponent=!0}}]);