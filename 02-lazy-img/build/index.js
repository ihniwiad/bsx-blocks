!function(e){var t={};function a(i){if(t[i])return t[i].exports;var l=t[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=t,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(i,l,function(t){return e[t]}.bind(null,l));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,a){"use strict";a.r(t);var i=a(0),l=wp.i18n,n=l.__,c=(l.setLocaleData,wp.blocks.registerBlockType),r=wp.blockEditor,o=r.RichText,s=r.MediaUpload,m=r.InspectorControls,u=wp.components,d=u.Button,b=u.TextControl,g=u.PanelBody;c("bsx-blocks/lazy-img",{title:n("BSX Lazy Image","bsx-blocks"),icon:"format-image",category:"layout",attributes:{mediaID:{type:"number"},mediaURL:{type:"string"},mediaAlt:{type:"string"},mediaWidth:{type:"number"},mediaHeight:{type:"number"},figcaption:{type:"array",source:"children",selector:"figcaption"}},edit:function(e){var t=e.className,a=e.attributes,l=a.mediaID,c=a.mediaURL,r=a.mediaAlt,u=a.mediaWidth,p=a.mediaHeight,f=a.figcaption,h=e.setAttributes,y=e.isSelected;return[Object(i.createElement)(m,null,Object(i.createElement)(g,{title:n("BSX Block Settings","bsx-blocks")},Object(i.createElement)(b,{label:n("Width","bsx-blocks"),className:"mediaWidth",value:u,onChange:function(e){h({mediaWidth:e})}}),Object(i.createElement)(b,{label:n("Height","bsx-blocks"),className:"mediaHeight",value:p,onChange:function(e){h({mediaHeight:e})}}))),Object(i.createElement)("div",{className:t},Object(i.createElement)("div",{className:l?"bsx-ui-img-upload":"bsx-ui-img-upload border bg-light p-2"},Object(i.createElement)(s,{onSelect:function(e){h({mediaURL:e.url,mediaID:e.id,mediaAlt:e.alt,mediaWidth:e.sizes.full.width,mediaHeight:e.sizes.full.height})},allowedTypes:"image",value:l,render:function(e){var t=e.open;return Object(i.createElement)(d,{className:l?"bsx-ui-img-btn h-auto w-100 px-0":"button button-large",onClick:t},l?Object(i.createElement)("img",{className:"img-fluid",src:c,alt:n("Select / upload Image","bsx-blocks")}):n("Select / upload Image","bsx-blocks"))}})),Object(i.createElement)(o,{tagName:"figcaption",multiline:!1,placeholder:n("Caption (optional)","bsx-blocks"),value:f,onChange:function(e){h({figcaption:e})}}),y&&Object(i.createElement)("div",{class:"border bg-light mt-2 px-1"},Object(i.createElement)("div",null,Object(i.createElement)(b,{label:n("Alt","bsx-blocks"),className:"mediaAlt",value:r,onChange:function(e){h({mediaAlt:e})}}))))]},save:function(e){var t=e.className,a=e.attributes,l=a.mediaURL,n=a.mediaAlt,c=a.mediaWidth,r=a.mediaHeight,s=a.figcaption;return Object(i.createElement)("div",{className:t},l&&Object(i.createElement)("figure",null,Object(i.createElement)("script",null,"document.write( '",Object(i.createElement)("img",{className:"img-fluid",src:"",alt:n,width:c,height:r,"data-src":l,"data-fn":"lazyload"}),"' );"),Object(i.createElement)("noscript",null,Object(i.createElement)("img",{className:"img-fluid",src:l,alt:n,width:c,height:r})),s&&!o.isEmpty(s)&&Object(i.createElement)(o.Content,{tagName:"figcaption",className:"font-italic",value:s})))}})}]);