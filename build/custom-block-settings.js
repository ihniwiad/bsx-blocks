!function(e){var l={};function t(a){if(l[a])return l[a].exports;var n=l[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=l,t.d=function(e,l,a){t.o(e,l)||Object.defineProperty(e,l,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,l){if(1&l&&(e=t(e)),8&l)return e;if(4&l&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&l&&"string"!=typeof e)for(var n in e)t.d(a,n,function(l){return e[l]}.bind(null,n));return a},t.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(l,"a",l),l},t.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},t.p="",t(t.s=22)}({0:function(e,l){!function(){e.exports=this.wp.element}()},1:function(e,l,t){"use strict";t.d(l,"z",(function(){return y})),t.d(l,"Z",(function(){return w})),t.d(l,"r",(function(){return S})),t.d(l,"e",(function(){return B})),t.d(l,"db",(function(){return T})),t.d(l,"D",(function(){return A})),t.d(l,"w",(function(){return I})),t.d(l,"v",(function(){return L})),t.d(l,"U",(function(){return D})),t.d(l,"a",(function(){return P})),t.d(l,"E",(function(){return M})),t.d(l,"G",(function(){return W})),t.d(l,"f",(function(){return q})),t.d(l,"Q",(function(){return N})),t.d(l,"n",(function(){return z})),t.d(l,"o",(function(){return R})),t.d(l,"p",(function(){return _})),t.d(l,"q",(function(){return F})),t.d(l,"y",(function(){return H})),t.d(l,"X",(function(){return V})),t.d(l,"h",(function(){return X})),t.d(l,"bb",(function(){return G})),t.d(l,"m",(function(){return U})),t.d(l,"Y",(function(){return J})),t.d(l,"W",(function(){return Y})),t.d(l,"J",(function(){return K})),t.d(l,"K",(function(){return Q})),t.d(l,"I",(function(){return Z})),t.d(l,"H",(function(){return $})),t.d(l,"R",(function(){return ee})),t.d(l,"S",(function(){return le})),t.d(l,"T",(function(){return te})),t.d(l,"s",(function(){return ae})),t.d(l,"fb",(function(){return ne})),t.d(l,"b",(function(){return be})),t.d(l,"N",(function(){return se})),t.d(l,"M",(function(){return oe})),t.d(l,"O",(function(){return re})),t.d(l,"P",(function(){return ce})),t.d(l,"L",(function(){return ue})),t.d(l,"i",(function(){return ie})),t.d(l,"j",(function(){return xe})),t.d(l,"d",(function(){return ve})),t.d(l,"c",(function(){return ke})),t.d(l,"g",(function(){return de})),t.d(l,"cb",(function(){return pe})),t.d(l,"u",(function(){return ge})),t.d(l,"k",(function(){return he})),t.d(l,"l",(function(){return fe})),t.d(l,"x",(function(){return me})),t.d(l,"gb",(function(){return Oe})),t.d(l,"F",(function(){return je})),t.d(l,"t",(function(){return Ce})),t.d(l,"V",(function(){return Ee})),t.d(l,"ab",(function(){return ye})),t.d(l,"B",(function(){return we})),t.d(l,"A",(function(){return Se})),t.d(l,"C",(function(){return Be})),t.d(l,"eb",(function(){return Te}));var a=t(0),n=t(2),b=wp.i18n,s=b.__,o=(b.setLocaleData,wp.blockEditor),r=o.URLInput,c=(o.RichText,o.MediaUpload),u=o.AlignmentToolbar,i=wp.components,x=i.TextControl,v=(i.PanelBody,i.ToggleControl),k=i.SelectControl,d=i.RadioControl,p=(i.SVG,i.Path,i.Button),g=[{value:"",label:s("– unset –","bsx-blocks")},{value:"0",label:s("none (0)","bsx-blocks")},{value:"1",label:s("extra small","bsx-blocks")},{value:"2",label:s("small","bsx-blocks")},{value:"3",label:s("medium","bsx-blocks")},{value:"4",label:s("large","bsx-blocks")},{value:"5",label:s("extra large","bsx-blocks")}],h=[{value:"",label:s("– unset –","bsx-blocks")},{value:"xs",label:s("Default (XS up)","bsx-blocks")},{value:"sm",label:s("SM up","bsx-blocks")},{value:"md",label:s("MD up","bsx-blocks")},{value:"lg",label:s("LG up","bsx-blocks")},{value:"xl",label:s("XL up","bsx-blocks")}],f=[{value:"",label:s("– unset –","bsx-blocks")},{value:"all",label:s("All","bsx-blocks")},{value:"t",label:s("Before","bsx-blocks")},{value:"b",label:s("After","bsx-blocks")},{value:"2",label:s("Y (before & after)","bsx-blocks")},{value:"3",label:s("Left","bsx-blocks")},{value:"4",label:s("Right","bsx-blocks")},{value:"5",label:s("X (left & right)","bsx-blocks")}],m=[{value:"",label:s("– unset –","bsx-blocks")},{value:"white",label:s("White","bsx-blocks")},{value:"primary",label:s("Primary","bsx-blocks")},{value:"secondary",label:s("Secondary","bsx-blocks")},{value:"success",label:s("Success","bsx-blocks")},{value:"danger",label:s("Danger","bsx-blocks")},{value:"warning",label:s("Warning","bsx-blocks")},{value:"info",label:s("Info","bsx-blocks")},{value:"light",label:s("Light","bsx-blocks")},{value:"dark",label:s("Dark","bsx-blocks")}],O=[{value:"",label:s("– unset –","bsx-blocks")},{value:"white",label:s("White","bsx-blocks")},{value:"primary",label:s("Primary","bsx-blocks")},{value:"secondary",label:s("Secondary","bsx-blocks")},{value:"success",label:s("Success","bsx-blocks")},{value:"danger",label:s("Danger","bsx-blocks")},{value:"warning",label:s("Warning","bsx-blocks")},{value:"info",label:s("Info","bsx-blocks")},{value:"light",label:s("Light","bsx-blocks")},{value:"dark",label:s("Dark","bsx-blocks")},{value:"white-50",label:s("White transparent","bsx-blocks")},{value:"black-50",label:s("Black transparent","bsx-blocks")},{value:"inherit",label:s("Inherit","bsx-blocks")}],j=[{value:"primary",label:s("Primary","bsx-blocks")},{value:"secondary",label:s("Secondary","bsx-blocks")},{value:"success",label:s("Success","bsx-blocks")},{value:"danger",label:s("Danger","bsx-blocks")},{value:"warning",label:s("Warning","bsx-blocks")},{value:"info",label:s("Info","bsx-blocks")},{value:"light",label:s("Light","bsx-blocks")},{value:"dark",label:s("Dark","bsx-blocks")},{value:"link",label:s("Link Button","bsx-blocks")},{value:"text-link",label:s("Text link","bsx-blocks")}],C=[{value:"",label:s("– unset –","bsx-blocks")},{value:"white",label:s("White","bsx-blocks")},{value:"white-opaque",label:s("White opaque","bsx-blocks")},{value:"white-transparent",label:s("White transparent","bsx-blocks")},{value:"black",label:s("Black","bsx-blocks")},{value:"black-opaque",label:s("Black opaque","bsx-blocks")},{value:"black-transparent",label:s("Black transparent","bsx-blocks")},{value:"primary",label:s("Primary","bsx-blocks")},{value:"primary-opaque",label:s("Primary opaque","bsx-blocks")},{value:"primary-transparent",label:s("Primary transparent","bsx-blocks")},{value:"secondary",label:s("Secondary","bsx-blocks")},{value:"secondary-opaque",label:s("Secondary opaque","bsx-blocks")},{value:"secondary-transparent",label:s("Secondary transparent","bsx-blocks")},{value:"success",label:s("Success","bsx-blocks")},{value:"success-opaque",label:s("Success opaque","bsx-blocks")},{value:"success-transparent",label:s("Success transparent","bsx-blocks")},{value:"danger",label:s("Danger","bsx-blocks")},{value:"danger-opaque",label:s("Danger opaque","bsx-blocks")},{value:"danger-transparent",label:s("Danger transparent","bsx-blocks")},{value:"warning",label:s("Warning","bsx-blocks")},{value:"warning-opaque",label:s("Warning opaque","bsx-blocks")},{value:"warning-transparent",label:s("Warning transparent","bsx-blocks")},{value:"info",label:s("Info","bsx-blocks")},{value:"info-opaque",label:s("Info opaque","bsx-blocks")},{value:"info-transparent",label:s("Info transparent","bsx-blocks")},{value:"light",label:s("Light","bsx-blocks")},{value:"light-opaque",label:s("Light opaque","bsx-blocks")},{value:"light-transparent",label:s("Light transparent","bsx-blocks")},{value:"dark",label:s("Dark","bsx-blocks")},{value:"dark-opaque",label:s("Dark opaque","bsx-blocks")},{value:"dark-transparent",label:s("Dark transparent","bsx-blocks")},{value:"transparent",label:s("Transparent","bsx-blocks")}],E=[{icon:"editor-alignleft",title:s("Align left","bsx-blocks"),align:"left"},{icon:"editor-aligncenter",title:s("Align center","bsx-blocks"),align:"center"},{icon:"editor-alignright",title:s("Align right","bsx-blocks"),align:"right"},{icon:"editor-alignleft",title:s("– unset –","bsx-blocks"),align:""}],y=function(e,l){return Object(a.createElement)(v,{label:s("Spam protected email link (default activated)","bsx-blocks"),checked:!e,onChange:l,help:s("If activated email will not be easily readable for machines.","bsx-blocks")})},w=function(e,l){return Object(a.createElement)(v,{label:s("Open in new tab","bsx-blocks"),checked:"_blank"==e,onChange:l})},S=function(e,l){return Object(a.createElement)(v,{label:s("Disabled","bsx-blocks"),checked:!!e,onChange:l})},B=function(e,l){return Object(a.createElement)(v,{label:s("Below navbar","bsx-blocks"),checked:!!e,onChange:l,help:s("Enable if element is overlayed by navbar and needs a spacer top.","bsx-blocks")})},T=function(e,l){return Object(a.createElement)(v,{label:s("Touch footer","bsx-blocks"),checked:!!e,onChange:l,help:s("Enable if element touch footer without spacing.","bsx-blocks")})},A=function(e,l){return Object(a.createElement)(v,{label:s("Inverse text color","bsx-blocks"),checked:!!e,onChange:l})},I=function(e,l){return Object(a.createElement)(v,{label:s("Inherit text color to headings","bsx-blocks"),checked:!!e,onChange:l})},L=function(e,l){return Object(a.createElement)(v,{label:s("Inherit font weight to headings","bsx-blocks"),checked:!!e,onChange:l})},D=function(e,l){return Object(a.createElement)(v,{label:s("Rounded","bsx-blocks"),checked:!!e,onChange:l})},P=function(e,l){return Object(a.createElement)(v,{label:s("Alert","bsx-blocks"),checked:!!e,onChange:l})},M=function(e,l){return Object(a.createElement)(v,{label:s("Is image gallery parent","bsx-blocks"),checked:!!e,onChange:l})},W=function(e,l){return Object(a.createElement)(r,{label:s("Link URL","bsx-blocks"),value:e,onChange:l})},q=function(e,l){return Object(a.createElement)(v,{label:s("Limit fixed background","bsx-blocks"),checked:!!e,onChange:l,help:s("If enabled large displays (>=2.000px) will have static background attachement.","bsx-blocks")})},N=function(e,l){return Object(a.createElement)(x,{label:s("Rel (optional)","bsx-blocks"),value:e,onChange:l})},z=function(e,l){return Object(a.createElement)(x,{label:s("data-fn (optional)","bsx-blocks"),value:e,onChange:l})},R=function(e,l){return Object(a.createElement)(x,{label:s("data-fn-options (optional)","bsx-blocks"),value:e,onChange:l})},_=function(e,l){return Object(a.createElement)(x,{label:s("data-fn-target (optional)","bsx-blocks"),value:e,onChange:l})},F=function(e,l){return Object(a.createElement)(x,{label:s("data-tg (optional)","bsx-blocks"),value:e,onChange:l})},H=function(e,l){return Object(a.createElement)(x,{label:s("Icon key","bsx-blocks"),value:e,onChange:l})},V=function(e,l,t){var b=m;return Object(a.createElement)(k,{label:s("State","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t)})},X=function(e,l,t){var b=C;return Object(a.createElement)(k,{label:s("Background Color","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t)})},G=function(e,l,t){var b=O;return Object(a.createElement)(k,{label:s("Text Color","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t)})},U=function(e,l,t){var b=j;return Object(a.createElement)(k,{label:s("Color / Appearance","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t)})},J=function(e,l){return Object(a.createElement)(k,{label:s("Button Type","bsx-blocks"),value:e,onChange:l,options:[{value:"outline",label:s("Outline","bsx-blocks")},{value:"",label:s("Filled","bsx-blocks")}]})},Y=function(e,l){return Object(a.createElement)(k,{label:s("Size","bsx-blocks"),value:e,onChange:l,options:[{value:"",label:s("– unset –","bsx-blocks")},{value:"sm",label:s("Small","bsx-blocks")},{value:"lg",label:s("Large","bsx-blocks")}]})},K=function(e,l,t){var b=g;return Object(a.createElement)(k,{label:s("Margin left","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t)})},Q=function(e,l,t){var b=g;return Object(a.createElement)(k,{label:s("Margin right","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t)})},Z=function(e,l,t){var b=g;return Object(a.createElement)(k,{label:s("Margin before","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t),help:s("Spacer before element","bsx-blocks")})},$=function(e,l,t){var b=g;return Object(a.createElement)(k,{label:s("Margin after","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t),help:s("Spacer after element","bsx-blocks")})},ee=function(e,l,t,b){var o=h;return Object(a.createElement)(k,{label:s("Responsive margin breakpoint","bsx-blocks")+(b?" "+b:""),value:e,onChange:l,options:Object(n.a)(o,t)})},le=function(e,l,t,b){var o=f;return Object(a.createElement)(k,{label:s("Responsive margin position","bsx-blocks")+(b?" "+b:""),value:e,onChange:l,options:Object(n.a)(o,t)})},te=function(e,l,t,b){var o=g;return Object(a.createElement)(k,{label:s("Responsive margin size","bsx-blocks")+(b?" "+b:""),value:e,onChange:l,options:Object(n.a)(o,t)})},ae=function(e,l,t){var b=[{value:"",label:s("– unset –","bsx-blocks")},{value:"block",label:s("Block","bsx-blocks")},{value:"inline-block",label:s("Inline-block","bsx-blocks")},{value:"inline",label:s("Inline","bsx-blocks")},{value:"flex",label:s("Flex","bsx-blocks")}];return Object(a.createElement)(k,{label:s("Display","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t)})},ne=function(e,l,t){var b=[{value:"",label:s("– unset –","bsx-blocks")},{value:"middle",label:s("Middle","bsx-blocks")},{value:"baseline",label:s("Baseline","bsx-blocks")},{value:"top",label:s("Top","bsx-blocks")},{value:"bottom",label:s("Bottom","bsx-blocks")},{value:"text-bottom",label:s("Text ottom","bsx-blocks")},{value:"text-top",label:s("Text top","bsx-blocks")}];return Object(a.createElement)(k,{label:s("Vertical align","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t)})},be=function(e,l,t,b,o){var r=[{value:"",label:s("– unset –","bsx-blocks")},{value:"start",label:s("Start","bsx-blocks")},{value:"center",label:s("Center","bsx-blocks")},{value:"end",label:s("End","bsx-blocks")}];return Object(a.createElement)(k,{label:s("Align items","bsx-blocks")+(o?" "+o:""),value:e,onChange:l,options:Object(n.a)(r,t),disabled:b})},se=function(e,l,t){var b=g;return Object(a.createElement)(k,{label:s("Padding before","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t),help:s("Inner spacer before","bsx-blocks")})},oe=function(e,l,t){var b=g;return Object(a.createElement)(k,{label:s("Padding after","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t),help:s("Inner spacer after","bsx-blocks")})},re=function(e,l,t){var b=g;return Object(a.createElement)(k,{label:s("Padding left","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t),help:s("Inner spacer left","bsx-blocks")})},ce=function(e,l,t){var b=g;return Object(a.createElement)(k,{label:s("Padding right","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t),help:s("Inner spacer right","bsx-blocks")})},ue=function(e,l,t){var b=[{value:"div",label:s("div","bsx-blocks")},{value:"section",label:s("section","bsx-blocks")},{value:"ul",label:s("ul","bsx-blocks")},{value:"ol",label:s("ol","bsx-blocks")},{value:"li",label:s("li","bsx-blocks")},{value:"h1",label:s("h1","bsx-blocks")},{value:"h2",label:s("h2","bsx-blocks")},{value:"h3",label:s("h3","bsx-blocks")},{value:"h4",label:s("h4","bsx-blocks")},{value:"h5",label:s("h5","bsx-blocks")},{value:"h6",label:s("h6","bsx-blocks")}];return Object(a.createElement)(k,{label:s("Node name","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t),help:s("Node name (please edit only if you know what you’re doing)","bsx-blocks")})},ie=function(e,l,t){var b=[{value:"c",label:s("Center center","bsx-blocks")},{value:"c25",label:s("Center 25%","bsx-blocks")},{value:"c66",label:s("Center 66%","bsx-blocks")},{value:"c75",label:s("Center 75%","bsx-blocks")},{value:"ct",label:s("Center top","bsx-blocks")},{value:"rc",label:s("Right center","bsx-blocks")},{value:"33c",label:s("33% center","bsx-blocks")},{value:"80c",label:s("80% center","bsx-blocks")},{value:"66t",label:s("66% top","bsx-blocks")},{value:"66c",label:s("66% center","bsx-blocks")}];return Object(a.createElement)(k,{label:s("Background position","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t)})},xe=function(e,l,t){var b=[{value:"cover",label:s("Cover","bsx-blocks")},{value:"contain",label:s("Contain","bsx-blocks")},{value:"100a",label:s("100% auto","bsx-blocks")}];return Object(a.createElement)(k,{label:s("Background size","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t)})},ve=function(e,l,t){var b=[{value:"",label:s("Fix height","bsx-blocks")},{value:"vh",label:s("Viewport dependent height","bsx-blocks")},{value:"st",label:s("Static height","bsx-blocks")}];return Object(a.createElement)(k,{label:s("Banner height type","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t),help:s("Viewport dependant height will be e.g. all viewport height or viewport height - ? pixels. Static height instead depends only on the banners contents.","bsx-blocks")})},ke=function(e,l,t){var b=[{value:"1",label:s("1 (biggest)","bsx-blocks")},{value:"2",label:s("2","bsx-blocks")},{value:"3",label:s("3","bsx-blocks")},{value:"4",label:s("4","bsx-blocks")},{value:"5",label:s("5","bsx-blocks")},{value:"6",label:s("6 (smallest)","bsx-blocks")}];return Object(a.createElement)(k,{label:s("Banner height size","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t),help:s("Choose from 1 (maximum) to 3 (minimum)","bsx-blocks")})},de=function(e,l,t){var b=[{value:"",label:s("– unset –","bsx-blocks")},{value:"static",label:s("static","bsx-blocks")},{value:"fixed",label:s("fixed","bsx-blocks")}];return Object(a.createElement)(k,{label:s("Background attachement","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t)})},pe=function(e,l,t){var b=[{value:"",label:s("– unset –","bsx-blocks")},{value:"dark",label:s("Dark","bsx-blocks")},{value:"darker",label:s("Darker","bsx-blocks")},{value:"darkest",label:s("Darkest","bsx-blocks")},{value:"light",label:s("Light","bsx-blocks")},{value:"primary",label:s("Primary","bsx-blocks")}];return Object(a.createElement)(k,{label:s("Text shadow","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t)})},ge=function(e,l,t){var b=[{value:"",label:s("– unset –","bsx-blocks")},{value:"light",label:s("Light","bsx-blocks")},{value:"normal",label:s("Normal","bsx-blocks")},{value:"bold",label:s("Bold","bsx-blocks")}];return Object(a.createElement)(k,{label:s("Font weight","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t)})},he=function(e,l,t){var b=[{value:"",label:s("– unset –","bsx-blocks")},{value:"true",label:s("Around","bsx-blocks")},{value:"bottom",label:s("Bottom","bsx-blocks")}];return Object(a.createElement)(k,{label:s("Border","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t)})},fe=function(e,l,t){var b=m;return Object(a.createElement)(k,{label:s("Border color","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t)})},me=function(e,l,t){var b=[{value:"",label:s("– Default –","bsx-blocks")},{value:"s",label:s("Solid","bsx-blocks")},{value:"b",label:s("Brand","bsx-blocks")}];return Object(a.createElement)(k,{label:s("Border color","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t)})},Oe=function(e,l,t){var b=[{value:"",label:s("– unset –","bsx-blocks")},{value:"100",label:s("100 %","bsx-blocks")}];return Object(a.createElement)(k,{label:s("Width","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t)})},je=function(e,l,t){var b=[{value:"",label:s("– unset –","bsx-blocks")},{value:"space-between",label:s("Space between","bsx-blocks")}];return Object(a.createElement)(k,{label:s("Justify content","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t)})},Ce=function(e,l,t){var b=[{value:"",label:s("– unset –","bsx-blocks")},{value:"column",label:s("Column","bsx-blocks")}];return Object(a.createElement)(k,{label:s("Flex direction","bsx-blocks"),value:e,onChange:l,options:Object(n.a)(b,t)})},Ee=function(e,l,t){var b=[{value:"1",label:s("100%","bsx-blocks")},{value:"0.75",label:s("75%","bsx-blocks")},{value:"0.5",label:s("50%","bsx-blocks")},{value:"0.25",label:s("25%","bsx-blocks")}];return Object(a.createElement)(d,{label:s("Scale","bsx-blocks"),selected:e+"",options:Object(n.a)(b,t),onChange:l})},ye=function(e,l){return Object(a.createElement)(u,{label:s("Alignment","bsx-blocks"),value:e,onChange:l,alignmentControls:E})},we=function(e,l,t,n){var b=s(void 0!==n&&"p"===n?"Change / upload portrait image":"Change / upload image","bsx-blocks");return Object(a.createElement)(c,{onSelect:t,allowedTypes:"image",value:e,render:function(e){var t=e.open;return Object(a.createElement)(p,{className:"bsxui-config-panel-img-button has-margin-bottom",onClick:t},Object(a.createElement)("img",{class:"bsxui-config-panel-img",src:l,alt:b}))}})},Se=function(e,l,t){var n=s(void 0!==t&&"p"===t?"Change / upload portrait image":"Change / upload image","bsx-blocks");return Object(a.createElement)(c,{onSelect:l,allowedTypes:"image",value:e,render:function(e){var l=e.open;return Object(a.createElement)(p,{onClick:l,isSecondary:!0},n)}})},Be=function(e,l){return Object(a.createElement)("div",{class:"bsxui-initial-inline-control"},Object(a.createElement)("div",{class:"bsxui-initial-inline-control-heading"},s("Please select template","bsx-blocks")),Object(a.createElement)("div",{className:"bsxui-icon-text-button-list"},e.map((function(e,t){return Object(a.createElement)(p,{label:e.title,onClick:function(){l(e.name)},className:"bsxui-icon-text-button-list-item "},Object(a.createElement)("div",{class:"bsxui-icon-text-button-list-item-icon"},e.icon),Object(a.createElement)("div",{class:"bsxui-icon-text-button-list-item-label"},e.title))}))))},Te=function(e,l,t){return Object(a.createElement)("div",{className:"bsxui-icon-text-button-list"},e.map((function(e,n){return Object(a.createElement)(p,{label:e.title,onClick:function(){t(e.name)},className:"bsxui-icon-text-button-list-item "+(l===e.name?"active":"")},Object(a.createElement)("div",{class:"bsxui-icon-text-button-list-item-icon"},e.icon),Object(a.createElement)("div",{class:"bsxui-icon-text-button-list-item-label"},e.title))})))}},2:function(e,l,t){"use strict";t.d(l,"a",(function(){return a})),t.d(l,"b",(function(){return n}));var a=function(e,l){var t=[];return void 0!==l&&l.length>0?e.forEach((function(e){void 0!==l.find((function(l){return l===e.value}))&&t.push(e)})):t=e,t},n=function(e,l){var t=e.find((function(e){return e.name===l}));return t||{}}},22:function(e,l,t){"use strict";t.r(l);var a=t(0),n=t(3),b=t(1),s=wp.i18n.__,o=wp.element.Fragment,r=wp.hooks.addFilter,c=wp.components,u=(c.ToggleControl,c.TextControl),i=c.PanelBody,x=c.SelectControl,v=wp.compose.createHigherOrderComponent,k=wp.blockEditor,d=k.InspectorControls,p=k.InspectorAdvancedControls,g=["core/paragraph","core/heading"],h=v((function(e){return function(l){l.name;var t=l.attributes,r=l.setAttributes,c=(l.isSelected,t.id),v=t.textSize,k=t.textColor,h=t.fontWeight,f=t.textShadow,m=t.belowNavbar,O=t.marginBefore,j=t.marginAfter,C=(t.className,Object(n.a)({textSize:v,textColor:k,fontWeight:h,textShadow:f,belowNavbar:m,marginBefore:O,marginAfter:j},"bsxui-core-block-wrapper")),E=Object(a.createElement)(o,null,g.includes(l.name)&&"undefiend"!=typeof C&&C?Object(a.createElement)("div",{className:C},Object(a.createElement)(e,l)):Object(a.createElement)(e,l));return g.includes(l.name)&&l.isSelected?Object(a.createElement)(o,null,E,Object(a.createElement)(d,null,Object(a.createElement)(i,{title:s("BSX global settings","bsx-blocks")},Object(a.createElement)(u,{label:s("ID","bsx-blocks"),value:c,onChange:function(e){r({id:e})},help:s("Add ID if necessary (optional).","bsx-blocks")}),Object(a.createElement)(x,{label:s("Text size (optional)","bsx-blocks"),value:v,onChange:function(e){r({textSize:e})},options:[{value:"",label:s("– unset –","bsx-blocks")},{value:"lead",label:s("Larger","bsx-blocks")},{value:"small",label:s("Smaller","bsx-blocks")},{value:"h6",label:s("Heading 6 (smallest)","bsx-blocks")},{value:"h5",label:s("Heading 5","bsx-blocks")},{value:"h4",label:s("Heading 4","bsx-blocks")},{value:"h3",label:s("Heading 3","bsx-blocks")},{value:"h2",label:s("Heading 2","bsx-blocks")},{value:"h1",label:s("Heading 1 (biggest)","bsx-blocks")},{value:"display-4",label:s("Large 4 (smallest)","bsx-blocks")},{value:"display-3",label:s("Large 3","bsx-blocks")},{value:"display-2",label:s("Large 2","bsx-blocks")},{value:"display-1",label:s("Large 1 (biggest)","bsx-blocks")}]}),Object(b.bb)(k,(function(e){r({textColor:e})})),Object(b.u)(h,(function(e){r({fontWeight:e})})),Object(b.cb)(f,(function(e){r({textShadow:e})})),Object(a.createElement)(x,{label:s("Margin before","bsx-blocks"),value:O,onChange:function(e){r({marginBefore:e})},options:[{value:"",label:s("– unset –","bsx-blocks")},{value:"0",label:s("none (0)","bsx-blocks")},{value:"1",label:s("extra small","bsx-blocks")},{value:"2",label:s("small","bsx-blocks")},{value:"3",label:s("medium","bsx-blocks")},{value:"4",label:s("large","bsx-blocks")},{value:"5",label:s("extra large","bsx-blocks")}],help:s("Spacer before element","bsx-blocks")}),Object(a.createElement)(x,{label:s("Margin after","bsx-blocks"),value:j,onChange:function(e){r({marginAfter:e})},options:[{value:"",label:s("– unset –","bsx-blocks")},{value:"0",label:s("none (0)","bsx-blocks")},{value:"1",label:s("extra small","bsx-blocks")},{value:"2",label:s("small","bsx-blocks")},{value:"3",label:s("medium","bsx-blocks")},{value:"4",label:s("large","bsx-blocks")},{value:"5",label:s("extra large","bsx-blocks")}],help:s("Spacer after element","bsx-blocks")}))),Object(a.createElement)(p,null,Object(b.e)(m,(function(e){r({belowNavbar:e})})))):E}}),"addGlobalBlockSettings");r("blocks.registerBlockType","bsx-blocks/custom-attributes",(function(e){return void 0!==e.attributes&&g.includes(e.name)&&(void 0===e.attributes.id&&(e.attributes=Object.assign(e.attributes,{id:{type:"string"}})),void 0===e.attributes.belowNavbar&&(e.attributes=Object.assign(e.attributes,{belowNavbar:{type:"boolean"}})),void 0===e.attributes.textSize&&(e.attributes=Object.assign(e.attributes,{textSize:{type:"string"}})),void 0===e.attributes.textColor&&(e.attributes=Object.assign(e.attributes,{textColor:{type:"string"}})),void 0===e.attributes.fontWeight&&(e.attributes=Object.assign(e.attributes,{fontWeight:{type:"string"}})),void 0===e.attributes.textShadow&&(e.attributes=Object.assign(e.attributes,{textShadow:{type:"string"}})),void 0===e.attributes.marginBefore&&(e.attributes=Object.assign(e.attributes,{marginBefore:{type:"string"}})),void 0===e.attributes.marginAfter&&(e.attributes=Object.assign(e.attributes,{marginAfter:{type:"string"}})),void 0===e.attributes.dataTest&&(e.attributes=Object.assign(e.attributes,{dataTest:{type:"string"}}))),e})),r("editor.BlockEdit","bsx-blocks/add-global-block-settings",h),r("blocks.getSaveContent.extraProps","bsx-blocks/apply-extra-attributes",(function(e,l,t){t.id;var a=t.textSize,n=t.textColor,b=t.fontWeight,s=t.textShadow,o=t.belowNavbar,r=t.marginBefore,c=t.marginAfter;if(t.dataTest,g.includes(l.name)){t.id&&(e.id=t.id),t.dataTest&&(e.dataTest=t.dataTest);var u=void 0!==e.className?e.className.split(" "):[];void 0!==a&&a&&(u.includes(a)||u.push(a)),void 0!==n&&n&&(u.includes("text-"+n)||u.push("text-"+n)),void 0!==b&&b&&(u.includes("font-weight-"+b)||u.push("font-weight-"+b)),void 0!==s&&s&&(u.includes("text-shadow-"+s)||u.push("text-shadow-"+s)),void 0!==o&&o&&(u.includes("below-navbar-content")||u.push("below-navbar-content"));var i=["left","center","right"],x=null!=t.textAlign?t.textAlign:t.align;if(x&&i.includes(x))u.push("text-"+x);else for(var v=0;v<u.length;v++)0==u[v].indexOf("text-")&&i.includes(u[v].substring("text-".length))&&u.splice(v,1);void 0!==r&&r&&r==c?u.includes("my-"+r)||u.push("my-"+r):(void 0!==r&&r&&(u.includes("mt-"+r)||u.includes("my-"+r)||u.push("mt-"+r)),void 0!==c&&c&&(u.includes("mb-"+c)||u.includes("my-"+c)||u.push("mb-"+c))),e.className=u.join(" ")}return e}))},3:function(e,l,t){"use strict";function a(e,l){var t=e.belowNavbar,a=e.touchFooter,n=e.display,b=e.marginBefore,s=e.marginAfter,o=e.marginLeft,r=e.marginRight,c=e.resMargin1Breakpoint,u=e.resMargin1Position,i=e.resMargin1Size,x=e.resMargin2Breakpoint,v=e.resMargin2Position,k=e.resMargin2Size,d=e.paddingBefore,p=e.paddingAfter,g=e.paddingLeft,h=e.paddingRight,f=e.bgColor,m=e.textColor,O=e.textSize,j=e.rounded,C=e.textAlign,E=e.textShadow,y=e.fontWeight,w=e.inverseTextColor,S=e.headingInheritTextColor,B=e.headingInheritFontWeight,T=e.width,A=e.imgThumbnail,I=e.borderState,L=e.border,D=e.hoverShadow,P=e.hoverMove,M=e.disabled,W=e.verticalAlign,q=e.speechBubble,N=e.isAlert,z=e.state,R=void 0!==l?l.split(" "):[];return t&&R.push("below-navbar-content"),a&&R.push("mb-n-footer-space"),n&&R.push("d-"+n),b&&b===s&&b===o&&b===r?R.push("m-"+b):(b&&b===s?R.push("my-"+b):(b&&R.push("mt-"+b),s&&R.push("mb-"+s)),o&&o===r?R.push("mx-"+o):(o&&R.push("ml-"+o),r&&R.push("mr-"+r))),c&&u&&i&&R.push("m"+("all"===u?"":u)+"-"+("xs"===c?"":c+"-")+i),x&&v&&k&&R.push("m"+("all"===v?"":v)+"-"+("xs"===x?"":x+"-")+k),d&&d===p&&d===g&&d===h?R.push("p-"+d):(d&&d===p?R.push("py-"+d):(d&&R.push("pt-"+d),p&&R.push("pb-"+p)),g&&g===h?R.push("px-"+g):(g&&R.push("pl-"+g),h&&R.push("pr-"+h))),f&&R.push("bg-"+f),m&&R.push("text-"+m),O&&R.push(O),E&&R.push("text-shadow-"+E),y&&R.push("font-weight-"+y),w&&R.push("text-inverse"),S&&R.push("heading-inherit-text"),B&&R.push("heading-inherit-font-weight"),j&&(1==j||"rounded"==j?R.push("rounded"):R.push("rounded-"+j)),C&&R.push("text-"+C),T&&R.push("w-"+T),A&&R.push("img-thumbnail"),L&&("true"==L?R.push("border"):R.push("border-"+L)),I&&R.push("border-"+I),D&&R.push("hover-shadow"),P&&R.push("hover-move"),M&&R.push("disabled"),W&&R.push("align-"+W),q&&(R.push("speech-bubble"),"md"!=q&&R.push("speech-bubble-"+q)),N&&(R.push("alert"),z&&R.push("alert-"+z)),R.join(" ")}t.d(l,"a",(function(){return a}))}});