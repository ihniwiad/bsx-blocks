!function(e){var t={};function l(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=8)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,l){var n=l(3),o=l(4),s=l(5),c=l(7);e.exports=function(e,t){return n(e)||o(e,t)||s(e,t)||c()}},function(e,t){e.exports=function(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var l=[],n=!0,o=!1,s=void 0;try{for(var c,a=e[Symbol.iterator]();!(n=(c=a.next()).done)&&(l.push(c.value),!t||l.length!==t);n=!0);}catch(e){o=!0,s=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw s}}return l}}},function(e,t,l){var n=l(6);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?n(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,l){"use strict";l.r(t);var n=l(1),o=l.n(n),s=l(0),c=wp.i18n,a=c.__,i=(c.setLocaleData,wp.blocks.registerBlockType),r=wp.blockEditor,b=r.InnerBlocks,u=r.InspectorControls,m=wp.components,d=m.TextControl,f=m.PanelBody,g=m.RangeControl,h=m.ToggleControl,p=m.Button,z=wp.data.withSelect,k=function(e){var t=["xs","sm","md","lg","xl"],l=[];return e.forEach((function(e,n){var o=t[n],s="";e&&(s+="col","xs"==o||(s+="-"+o),"null"!=e&&(s+="-"+e),l.push(s))})),l.join(" ")};i("bsx-blocks/col",{title:a("BSX Column","bsx-blocks"),icon:"grid-view",category:"layout",parent:["bsx-blocks/row-with-cols"],attributes:{colConfig:{type:"string"},rowConfig:{type:"string"},fromRowConfig:{type:"string"},colType:{type:"string",default:"custom"},enableInheritanceFromRow:{type:"boolean",default:!0},sizeXs:{type:"string",default:""},sizeSm:{type:"string",default:""},sizeMd:{type:"string",default:"4"},sizeLg:{type:"string",default:""},sizeXl:{type:"string",default:""}},getEditWrapperProps:function(e){return{"data-size":e.sizeXs,"data-size-sm":e.sizeSm,"data-size-md":e.sizeMd,"data-size-lg":e.sizeLg,"data-size-xl":e.sizeXl}},edit:z((function(e,t){var l=t.clientId,n=e("core/block-editor"),o=n.getBlockParentsByBlockName,s=n.getBlockAttributes,c=o(l,"bsx-blocks/row-with-cols");return{parentAttributes:s(c[c.length-1])}}))((function(e){e.className;var t=e.attributes,l=t.rowConfig,n=t.colConfig,c=t.fromRowConfig,i=t.colType,r=t.enableInheritanceFromRow,m=t.sizeXs,z=t.sizeSm,x=t.sizeMd,C=t.sizeLg,v=t.sizeXl,w=e.setAttributes,y=e.parentAttributes,j=k([m,z,x,C,v]);if(w({fromRowConfig:y.fromRowConfig}),e.attributes){console.log("build col: ");for(var E=0,O=Object.entries(e.attributes);E<O.length;E++){var S=o()(O[E],2),X=S[0],M=S[1];console.log('key: "'+X+'", value: "'+M+'"')}}return[Object(s.createElement)(u,null,Object(s.createElement)(f,{title:a("Column Sizes (individual Column)","bsx-blocks")},"custom"===i&&Object(s.createElement)(s.Fragment,null,Object(s.createElement)(h,{label:a("Enable Inheritance","bsx-blocks"),checked:!!r,onChange:function(e){w({enableInheritanceFromRow:e})},help:a("Allows overwriting single Column Settings from Row","bsx-blocks")}),Object(s.createElement)("div",{class:"components-base-control"},Object(s.createElement)(p,{onClick:function(e){console.log("onClickEnableInheritanceFromRow"),w({sizeXs:y.sizeXs,sizeSm:y.sizeSm,sizeMd:y.sizeMd,sizeLg:y.sizeLg,sizeXl:y.sizeXl})},isSecondary:!0,disabled:!r},a("Inherit Settings for this Column","bsx-blocks")))),Object(s.createElement)(g,{label:a("XS Column Width","bsx-blocks"),value:parseInt(m),onChange:function(e){w({sizeXs:e?e.toString():""})},min:0,max:12,help:a("1 ... 12 or empty","bsx-blocks"),className:"mb-0"}),Object(s.createElement)(h,{label:a("XS Equal Width","bsx-blocks"),checked:"null"==m,onChange:function(e){e?w({sizeXs:"null"}):"null"==m&&w({sizeXs:""})},className:"mb-0"}),Object(s.createElement)(h,{label:a("XS Auto Width","bsx-blocks"),checked:"auto"==m,onChange:function(e){e?w({sizeXs:"auto"}):"auto"==m&&w({sizeXs:""})}}),Object(s.createElement)(g,{label:a("SM Column Width","bsx-blocks"),value:parseInt(z),onChange:function(e){w({sizeSm:e?e.toString():""})},min:0,max:12,help:a("1 ... 12 or empty","bsx-blocks"),className:"mb-0"}),Object(s.createElement)(h,{label:a("SM Equal Width","bsx-blocks"),checked:"null"==z,onChange:function(e){e?w({sizeSm:"null"}):"null"==z&&w({sizeSm:""})},className:"mb-0"}),Object(s.createElement)(h,{label:a("SM Auto Width","bsx-blocks"),checked:"auto"==z,onChange:function(e){e?w({sizeSm:"auto"}):"auto"==z&&w({sizeSm:""})}}),Object(s.createElement)(g,{label:a("MD Column Width","bsx-blocks"),value:parseInt(x),onChange:function(e){w({sizeMd:e?e.toString():""})},min:0,max:12,help:a("1 ... 12 or empty","bsx-blocks"),className:"mb-0"}),Object(s.createElement)(h,{label:a("MD Equal Width","bsx-blocks"),checked:"null"==x,onChange:function(e){e?w({sizeMd:"null"}):"null"==x&&w({sizeMd:""})},className:"mb-0"}),Object(s.createElement)(h,{label:a("MD Auto Width","bsx-blocks"),checked:"auto"==x,onChange:function(e){e?w({sizeMd:"auto"}):"auto"==x&&w({sizeMd:""})}}),Object(s.createElement)(g,{label:a("LG Column Width","bsx-blocks"),value:parseInt(C),onChange:function(e){w({sizeLg:e?e.toString():""})},min:0,max:12,help:a("1 ... 12 or empty","bsx-blocks"),className:"mb-0"}),Object(s.createElement)(h,{label:a("LG Equal Width","bsx-blocks"),checked:"null"==C,onChange:function(e){e?w({sizeLg:"null"}):"null"==C&&w({sizeLg:""})},className:"mb-0"}),Object(s.createElement)(h,{label:a("LG Auto Width","bsx-blocks"),checked:"auto"==C,onChange:function(e){e?w({sizeLg:"auto"}):"auto"==C&&w({sizeLg:""})}}),Object(s.createElement)(g,{label:a("XL Column Width","bsx-blocks"),value:parseInt(v),onChange:function(e){w({sizeXl:e?e.toString():""})},min:0,max:12,help:a("1 ... 12 or empty","bsx-blocks"),className:"mb-0"}),Object(s.createElement)(h,{label:a("XL Equal Width","bsx-blocks"),checked:"null"==v,onChange:function(e){e?w({sizeXl:"null"}):"null"==v&&w({sizeXl:""})},className:"mb-0"}),Object(s.createElement)(h,{label:a("XL Auto Width","bsx-blocks"),checked:"auto"==v,onChange:function(e){e?w({sizeXl:"auto"}):"auto"==v&&w({sizeXl:""})}}),Object(s.createElement)(d,{label:a("Col config (test)","bsx-blocks"),value:n,onChange:function(e){w({colConfig:e})}}))),Object(s.createElement)("div",{className:j,"data-col-config":n,"data-row-config":l,"data-from-row-config":c,"data-col-type":i},Object(s.createElement)(b,{renderAppender:function(){return Object(s.createElement)(b.ButtonBlockAppender,null)}}))]})),save:function(e){e.className;var t=e.attributes,l=t.colConfig,n=t.rowConfig,o=t.fromRowConfig,c=t.colType,a=(t.enableInheritanceFromRow,t.sizeXs),i=t.sizeSm,r=t.sizeMd,u=t.sizeLg,m=t.sizeXl,d=k([a,i,r,u,m]);return Object(s.createElement)("div",{className:d,"data-col-config":l,"data-row-config":n,"data-from-row-config":o,"data-col-type":c},Object(s.createElement)(b.Content,null))}});var x=l(2),C=l.n(x);function v(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}var w=wp.i18n,y=w.__,j=(w.setLocaleData,wp.blocks.registerBlockType),E=wp.blockEditor,O=E.InnerBlocks,S=E.InspectorControls,X=wp.components,M=X.TextControl,L=X.PanelBody,I=X.RangeControl,N=X.ToggleControl,T=X.SelectControl,A=X.Button,W=(X.SVG,X.Path,wp.data),B=W.withSelect,V=W.withDispatch,R=function(e,t,l,n){var o=["row"];return e&&o.push("align-items-"+e),t&&o.push("justify-content-"+t),l&&o.push("no-gutters"),n&&o.push("form-row"),o.join(" ")};j("bsx-blocks/row-with-cols",{title:y("BSX Columns","bsx-blocks"),icon:"grid-view",category:"layout",attributes:{rowConfig:{type:"string"},fromRowConfig:{type:"string",default:"Test hello! :D"},templateName:{type:"string",default:"1-1-1"},enableInheritanceToCols:{type:"boolean",default:!1},alignItems:{type:"string"},justifyContent:{type:"string"},noGutters:{type:"boolean"},formRow:{type:"boolean"},sizeXs:{type:"string",default:""},sizeSm:{type:"string",default:""},sizeMd:{type:"string",default:"4"},sizeLg:{type:"string",default:""},sizeXl:{type:"string",default:""}},getEditWrapperProps:function(e){return{"data-align-items":e.alignItems,"data-justify-content":e.justifyContent,"data-no-gutters":e.noGutters,"data-form-row":e.formRow}},edit:B((function(e,t){var l=t.clientId,n=e("core/block-editor"),o=n.getBlocksByClientId,s=n.getBlockAttributes,c=o(l)[0]?o(l)[0].innerBlocks:[],a=[];return c.forEach((function(e,t){a.push(s(e.clientId))})),{children:c,childrenAttributes:a}}))(V((function(e){return{updateBlockAttributes:e("core/block-editor").updateBlockAttributes}}))((function(e){e.clientId,e.className;var t,l,n=e.attributes,o=n.rowConfig,c=n.fromRowConfig,a=n.templateName,i=n.enableInheritanceToCols,r=n.alignItems,b=n.justifyContent,u=n.noGutters,m=n.formRow,d=n.sizeXs,f=n.sizeSm,g=n.sizeMd,h=n.sizeLg,p=n.sizeXl,z=e.setAttributes,k=(e.isSelected,e.children),x=e.childrenAttributes,w=e.updateBlockAttributes,j=[{name:"1-1",title:y("2 Columns (1:1)","bsx-blocks"),icon:Object(s.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},Object(s.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"})),template:[["bsx-blocks/col",{colType:"default",sizeXs:"",sizeSm:"",sizeMd:"6",sizeLg:"",sizeXl:""}],["bsx-blocks/col",{colType:"default",sizeXs:"",sizeSm:"",sizeMd:"6",sizeLg:"",sizeXl:""}]],templateLock:!1},{name:"1-2",title:y("2 Columns (1:2)","bsx-blocks"),icon:Object(s.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},Object(s.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z"})),template:[["bsx-blocks/col",{colType:"default",sizeXs:"",sizeSm:"",sizeMd:"4",sizeLg:"",sizeXl:""}],["bsx-blocks/col",{colType:"default",sizeXs:"",sizeSm:"",sizeMd:"8",sizeLg:"",sizeXl:""}]],templateLock:!1},{name:"2-1",title:y("2 Columns (2:1)","bsx-blocks"),icon:Object(s.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},Object(s.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z"})),template:[["bsx-blocks/col",{colType:"default",sizeXs:"",sizeSm:"",sizeMd:"8",sizeLg:"",sizeXl:""}],["bsx-blocks/col",{colType:"default",sizeXs:"",sizeSm:"",sizeMd:"4",sizeLg:"",sizeXl:""}]],templateLock:!1},{name:"1-1-1",title:y("3 Columns (1:1:1)","bsx-blocks"),icon:Object(s.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},Object(s.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"})),template:[["bsx-blocks/col",{colType:"default",sizeXs:"",sizeSm:"",sizeMd:"4",sizeLg:"",sizeXl:""}],["bsx-blocks/col",{colType:"default",sizeXs:"",sizeSm:"",sizeMd:"4",sizeLg:"",sizeXl:""}],["bsx-blocks/col",{colType:"default",sizeXs:"",sizeSm:"",sizeMd:"4",sizeLg:"",sizeXl:""}]],templateLock:!1},{name:"1-2-1",title:y("3 Columns (1:2:1)","bsx-blocks"),icon:Object(s.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},Object(s.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM31 34H17V14h14v20zm2 0V14h6v20h-6zm-18 0H9V14h6v20z"})),template:[["bsx-blocks/col",{colType:"default",sizeXs:"",sizeSm:"",sizeMd:"3",sizeLg:"",sizeXl:""}],["bsx-blocks/col",{colType:"default",sizeXs:"",sizeSm:"",sizeMd:"6",sizeLg:"",sizeXl:""}],["bsx-blocks/col",{colType:"default",sizeXs:"",sizeSm:"",sizeMd:"3",sizeLg:"",sizeXl:""}]],templateLock:!1},{name:"custom",title:y("Custom","bsx-blocks"),icon:Object(s.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},Object(s.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M23.58 26.28c0-.600003.1499985-1.099998.45-1.5.3000015-.400002.7433304-.8399976 1.33-1.32.5600028-.4533356.9833319-.8699981 1.27-1.25s.43-.8433306.43-1.39c0-.5466694-.1733316-1.0566643-.52-1.53s-.986662-.71-1.92-.71c-1.1066722 0-1.8533314.2766639-2.24.83-.3866686.5533361-.58 1.1766632-.58 1.87 0 .1466674.0033333.2666662.01.36.0066667.0933338.01.1533332.01.18h-1.78c-.0133334-.0533336-.0266666-.146666-.04-.28-.0133334-.133334-.02-.2733326-.02-.42 0-.7733372.1766649-1.4666636.53-2.08.3533351-.6133364.8899964-1.0999982 1.61-1.46.7200036-.3600018 1.5999948-.54 2.64-.54 1.2133394 0 2.2033295.3233301 2.97.97s1.15 1.5099946 1.15 2.59c0 .7066702-.1033323 1.3033309-.31 1.79-.2066677.4866691-.4533319.8799985-.74 1.18-.2866681.3000015-.6566644.6233316-1.11.97-.4800024.3866686-.8333322.7166653-1.06.99-.2266678.2733347-.34.6233312-.34 1.05v.82h-1.74zm-.14 2.56h2V31h-2zM39 12c1.1046 0 2 .8954 2 2v20c0 1.1046-.8954 2-2 2H9c-1.10457 0-2-.8954-2-2V14c0-1.1046.89543-2 2-2h30zm0 22V14H9v20h30z"})),template:[["bsx-blocks/col",{colType:"custom",sizeXs:"",sizeSm:"",sizeMd:"4",sizeLg:"",sizeXl:""}]],templateLock:!1}],E=function(e){var t=j.find((function(t){return t.name===e}));return t?t.template:[]},X=E(a),W=(t=a,!!(l=j.find((function(e){return e.name===t})))&&l.templateLock),B=function(e){X=E(e);var t="custom"==e?"custom":"default";console.log('onColsTemplateChange: "'+e+'"'),console.log('colType: "'+t+'"'),"custom"!=e?k.forEach((function(e,l){if(X.length>l){var n=X[l][1];w(e.clientId,function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?v(Object(l),!0).forEach((function(t){C()(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):v(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({colType:t},n))}})):k.forEach((function(e,l){var n={colType:t};w(e.clientId,n)})),z({templateName:e})},V=R(r,b,u,m);return[Object(s.createElement)(S,null,Object(s.createElement)(L,{title:y("Columns Layout","bsx-blocks")},Object(s.createElement)("div",{className:"block-editor-block-styles"},j.map((function(e,t){return Object(s.createElement)(A,{label:e.title,onClick:function(){B(e.name)},className:"block-editor-block-styles__item d-flex flex-column "+(a===e.name?"is-active":"")},Object(s.createElement)("div",{class:"block-editor-block-styles__item-preview border-0 p-0"},e.icon),Object(s.createElement)("div",{class:"block-editor-block-styles__item-label"},e.title))})))),Object(s.createElement)(L,{title:y("Row Settings","bsx-blocks")},Object(s.createElement)(T,{label:y("Vertical Align","bsx-blocks"),value:r,onChange:function(e){z({alignItems:e})},options:[{value:"",label:y("– unset –","bsx-blocks")},{value:"start",label:y("Start","bsx-blocks")},{value:"center",label:y("Center","bsx-blocks")},{value:"end",label:y("End","bsx-blocks")}]}),Object(s.createElement)(T,{label:y("Justify Content","bsx-blocks"),value:b,onChange:function(e){z({justifyContent:e})},options:[{value:"",label:y("– unset –","bsx-blocks")},{value:"start",label:y("Start","bsx-blocks")},{value:"center",label:y("Center","bsx-blocks")},{value:"end",label:y("End","bsx-blocks")},{value:"between",label:y("Between","bsx-blocks")},{value:"around",label:y("Around","bsx-blocks")}]}),Object(s.createElement)(N,{label:y("No Gutters","bsx-blocks"),checked:!!u,onChange:function(e){z({noGutters:e}),!0===e&&z({formRow:!1})}}),Object(s.createElement)(N,{label:y("Form Row","bsx-blocks"),checked:!!m,onChange:function(e){z({formRow:e}),!0===e&&z({noGutters:!1})}})),"custom"===a&&Object(s.createElement)(L,{title:y("Inherit Columns Settings","bsx-blocks")},Object(s.createElement)(N,{label:y("Enable Inheritance","bsx-blocks"),checked:!!i,onChange:function(e){z({enableInheritanceToCols:e})},help:y("Equal Columns, overwriting single Columns Settings when clicking button below (if Columns allows inheritance)","bsx-blocks")}),Object(s.createElement)("div",{class:"components-base-control"},Object(s.createElement)(A,{onClick:function(){console.log("onClickEnableInheritanceToCols"),k.forEach((function(e,t){if(x[t].enableInheritanceFromRow){var l={sizeXs:d,sizeSm:f,sizeMd:g,sizeLg:h,sizeXl:p};w(e.clientId,l)}}))},isSecondary:!0,disabled:!i},y("Inherit Settings to Columns","bsx-blocks"))),Object(s.createElement)(I,{label:y("XS Column Width","bsx-blocks"),value:parseInt(d),onChange:function(e){z({sizeXs:e?e.toString():""})},min:0,max:12,help:y("1 ... 12 or empty","bsx-blocks"),disabled:!i,className:"mb-0"}),Object(s.createElement)(N,{label:y("XS Equal Width","bsx-blocks"),checked:"null"==d,onChange:function(e){i&&(e?z({sizeXs:"null"}):"null"==d&&z({sizeXs:""}))},className:"mb-0"}),Object(s.createElement)(N,{label:y("XS Auto Width","bsx-blocks"),checked:"auto"==d,onChange:function(e){i&&(e?z({sizeXs:"auto"}):"auto"==d&&z({sizeXs:""}))}}),Object(s.createElement)(I,{label:y("SM Column Width","bsx-blocks"),value:parseInt(f),onChange:function(e){z({sizeSm:e?e.toString():""})},min:0,max:12,help:y("1 ... 12 or empty","bsx-blocks"),disabled:!i,className:"mb-0"}),Object(s.createElement)(N,{label:y("SM Equal Width","bsx-blocks"),checked:"null"==f,onChange:function(e){i&&(e?z({sizeSm:"null"}):"null"==f&&z({sizeSm:""}))},className:"mb-0"}),Object(s.createElement)(N,{label:y("SM Auto Width","bsx-blocks"),checked:"auto"==f,onChange:function(e){i&&(e?z({sizeSm:"auto"}):"auto"==f&&z({sizeSm:""}))}}),Object(s.createElement)(I,{label:y("MD Column Width","bsx-blocks"),value:parseInt(g),onChange:function(e){z({sizeMd:e?e.toString():""})},min:0,max:12,help:y("1 ... 12 or empty","bsx-blocks"),disabled:!i,className:"mb-0"}),Object(s.createElement)(N,{label:y("MD Equal Width","bsx-blocks"),checked:"null"==g,onChange:function(e){i&&(e?z({sizeMd:"null"}):"null"==g&&z({sizeMd:""}))},className:"mb-0"}),Object(s.createElement)(N,{label:y("MD Auto Width","bsx-blocks"),checked:"auto"==g,onChange:function(e){i&&(e?z({sizeMd:"auto"}):"auto"==g&&z({sizeMd:""}))}}),Object(s.createElement)(I,{label:y("LG Column Width","bsx-blocks"),value:parseInt(h),onChange:function(e){z({sizeLg:e?e.toString():""})},min:0,max:12,help:y("1 ... 12 or empty","bsx-blocks"),disabled:!i,className:"mb-0"}),Object(s.createElement)(N,{label:y("LG Equal Width","bsx-blocks"),checked:"null"==h,onChange:function(e){i&&(e?z({sizeLg:"null"}):"null"==h&&z({sizeLg:""}))},className:"mb-0"}),Object(s.createElement)(N,{label:y("LG Auto Width","bsx-blocks"),checked:"auto"==h,onChange:function(e){i&&(e?z({sizeLg:"auto"}):"auto"==h&&z({sizeLg:""}))}}),Object(s.createElement)(I,{label:y("XL Column Width","bsx-blocks"),value:parseInt(p),onChange:function(e){z({sizeXl:e?e.toString():""})},min:0,max:12,help:y("1 ... 12 or empty","bsx-blocks"),disabled:!i,className:"mb-0"}),Object(s.createElement)(N,{label:y("XL Equal Width","bsx-blocks"),checked:"null"==p,onChange:function(e){i&&(e?z({sizeXl:"null"}):"null"==p&&z({sizeXl:""}))},className:"mb-0"}),Object(s.createElement)(N,{label:y("XL Auto Width","bsx-blocks"),checked:"auto"==p,onChange:function(e){i&&(e?z({sizeXl:"auto"}):"auto"==p&&z({sizeXl:""}))}}),Object(s.createElement)(M,{label:y("Row config (test)","bsx-blocks"),value:o,onChange:function(e){k.forEach((function(t,l){var n={rowConfig:e};w(t.clientId,n)})),z({rowConfig:e})}}),Object(s.createElement)(M,{label:y("From row config (test)","bsx-blocks"),value:c,onChange:function(e){z({fromRowConfig:e})}}))),Object(s.createElement)("div",{className:V,"data-row-config":o,"data-from-row-config":c,"data-template-name":a},Object(s.createElement)(O,{template:X,templateLock:W,allowedBlocks:["bsx-blocks/col"]}))]}))),save:function(e){e.className;var t=e.attributes,l=t.rowConfig,n=t.fromRowConfig,o=t.templateName,c=(t.enableInheritanceToCols,t.alignItems),a=t.justifyContent,i=t.noGutters,r=t.formRow,b=(t.sizeXs,t.sizeSm,t.sizeMd,t.sizeLg,t.sizeXl,R(c,a,i,r));return Object(s.createElement)("div",{className:b,"data-row-config":l,"data-from-row-config":n,"data-template-name":o},Object(s.createElement)(O.Content,null))}})}]);