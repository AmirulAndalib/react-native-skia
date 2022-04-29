"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2682],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=i(a),k=r,N=c["".concat(p,".").concat(k)]||c[k]||d[k]||s;return a?n.createElement(N,l(l({ref:t},m),{},{components:a})):n.createElement(N,l({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<s;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7062:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return d}});var n=a(3117),r=a(102),s=(a(7294),a(3905)),l=["components"],o={id:"image",title:"Image",sidebar_label:"Image",slug:"/images"},p=void 0,i={unversionedId:"image",id:"image",title:"Image",description:"Images can be drawn by specifying the output rectangle and how the image should fit into that rectangle.",source:"@site/docs/image.md",sourceDirName:".",slug:"/images",permalink:"/react-native-skia/docs/images",editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/image.md",tags:[],version:"current",frontMatter:{id:"image",title:"Image",sidebar_label:"Image",slug:"/images"},sidebar:"tutorialSidebar",previous:{title:"Box",permalink:"/react-native-skia/docs/shapes/box"},next:{title:"SVG",permalink:"/react-native-skia/docs/images-svg"}},m={},d=[{value:"Example",id:"example",level:3},{value:"fit=&quot;contain&quot;",id:"fitcontain",level:3},{value:"fit=&quot;cover&quot;",id:"fitcover",level:3},{value:"fit=&quot;fill&quot;",id:"fitfill",level:3},{value:"fit=&quot;fitHeight&quot;",id:"fitfitheight",level:3},{value:"fit=&quot;fitWidth&quot;",id:"fitfitwidth",level:3},{value:"fit=&quot;scaleDown&quot;",id:"fitscaledown",level:3},{value:"fit=&quot;none&quot;",id:"fitnone",level:3},{value:"Instance Methods",id:"instance-methods",level:2}],c={toc:d};function k(e){var t=e.components,o=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Images can be drawn by specifying the output rectangle and how the image should fit into that rectangle."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"image"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"SkImage")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Image instance.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"x"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Left position of the destination image.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"y"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Right position of the destination image.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"width"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Width of the destination image.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"height"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Height of the destination image.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"fit?"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Fit")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Method to make the image fit into the rectangle. Value can be ",(0,s.kt)("inlineCode",{parentName:"td"},"contain"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"fill"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"cover")," ",(0,s.kt)("inlineCode",{parentName:"td"},"fitHeight"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"fitWidth"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"scaleDown"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"none")," (default is ",(0,s.kt)("inlineCode",{parentName:"td"},"contain"),").")))),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," { ",(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Image: {\n    (props: AnimatedProps<ImageProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image"},"Image")),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const useImage: (source: DataSource) => import("./Image").SkImage | null\nimport useImage'},"useImage")," } "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const ImageDemo: () => JSX.Element"},"ImageDemo")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// Alternatively, you can pass an image URL directly")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},'// for instance: const image = useImage("https://bit.ly/3fkulX5");')),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | null"},"image")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) useImage(source: DataSource): SkImage | null\nimport useImage"},"useImage")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any"},"require")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"../../assets/oslo.jpg"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"));")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) style?: StyleProp<ViewStyle>"},"style")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{ ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," }}>")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      {",(0,s.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | null"},"image")," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"&&"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        <"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Image: {\n    (props: AnimatedProps<ImageProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image"},"Image"))),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"          "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) image: SkImage"},"image")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,s.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage"},"image"),"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"          "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(JSX attribute) fit: "contain"'},"fit")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"contain"')),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"          "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) x: number"},"x")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"0"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"          "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) y: number"},"y")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"0"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"          "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width: number | SkiaReadonlyValue<number>"},"width")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"256"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"          "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height: number | SkiaReadonlyValue<number>"},"height")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"256"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        />")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      )}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Image: {\n    (props: AnimatedProps<ImageProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image"},"Image")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const useImage: (source: DataSource) => import("./Image").SkImage | null\nimport useImage'},"useImage")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const ImageDemo: () => JSX.Element"},"ImageDemo")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// Alternatively, you can pass an image URL directly")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#616E88"}},'// for instance: const image = useImage("https://bit.ly/3fkulX5");')),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | null"},"image")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) useImage(source: DataSource): SkImage | null\nimport useImage"},"useImage")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any"},"require")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"../../assets/oslo.jpg"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"))"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) style?: StyleProp<ViewStyle>"},"style")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"1"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | null"},"image")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"&&"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Image: {\n    (props: AnimatedProps<ImageProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image"},"Image"))),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"          "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) image: SkImage"},"image")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage"},"image")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"          "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(JSX attribute) fit: "contain"'},"fit")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"contain"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"          "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) x: number"},"x")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"0"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"          "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) y: number"},"y")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"0"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"          "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width: number | SkiaReadonlyValue<number>"},"width")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"256"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"          "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height: number | SkiaReadonlyValue<number>"},"height")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"256"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      )"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,s.kt)("h3",{id:"fitcontain"},'fit="contain"'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"fit=&quot;contain&quot;",src:a(5684).Z,width:"768",height:"256"})),(0,s.kt)("h3",{id:"fitcover"},'fit="cover"'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"fit=&quot;cover&quot;",src:a(305).Z,width:"768",height:"256"})),(0,s.kt)("h3",{id:"fitfill"},'fit="fill"'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"fit=&quot;fill&quot;",src:a(2200).Z,width:"768",height:"256"})),(0,s.kt)("h3",{id:"fitfitheight"},'fit="fitHeight"'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"fit=&quot;fitHeight&quot;",src:a(792).Z,width:"768",height:"256"})),(0,s.kt)("h3",{id:"fitfitwidth"},'fit="fitWidth"'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"fit=&quot;fitWidth&quot;",src:a(7593).Z,width:"768",height:"256"})),(0,s.kt)("h3",{id:"fitscaledown"},'fit="scaleDown"'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"fit=&quot;fitWidth&quot;",src:a(1463).Z,width:"768",height:"256"})),(0,s.kt)("h3",{id:"fitnone"},'fit="none"'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"fit=&quot;none&quot;",src:a(4742).Z,width:"768",height:"256"})),(0,s.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"height"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Returns the possibly scaled height of the image.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"width"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Returns the possibly scaled width of the image.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"encodeToBytes"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Encodes Image pixels, returning result as UInt8Array")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"encodeToBase64"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Encodes Image pixels, returning result as a base64 encoded string")))))}k.isMDXComponent=!0},5684:function(e,t,a){t.Z=a.p+"assets/images/contain-feb18e23f3d0efa665f2cf1005d1f578.png"},305:function(e,t,a){t.Z=a.p+"assets/images/cover-d876e99ed6b72cd68d4cf2de2da0368b.png"},2200:function(e,t,a){t.Z=a.p+"assets/images/fill-f171bf1f95388655be7dd89930ba35ac.png"},792:function(e,t,a){t.Z=a.p+"assets/images/fitHeight-1c9334534883f9df13fe0362cb0e9180.png"},7593:function(e,t,a){t.Z=a.p+"assets/images/fitWidth-0ce6d3402dc86f3796438d76c6c230f9.png"},4742:function(e,t,a){t.Z=a.p+"assets/images/none-5afc0e6ba4602acd65d5704fb5dee8da.png"},1463:function(e,t,a){t.Z=a.p+"assets/images/scaleDown-feb18e23f3d0efa665f2cf1005d1f578.png"}}]);