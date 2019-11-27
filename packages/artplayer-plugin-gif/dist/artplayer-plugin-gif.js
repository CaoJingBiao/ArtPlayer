/*!
 * artplayer-plugin-gif.js v3.2.4
 * Github: https://github.com/zhw2590582/ArtPlayer#readme
 * (c) 2017-2019 Harvey Zack
 * Released under the MIT License.
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).artplayerPluginGif=t()}(this,(function(){"use strict";var e=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e};"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function t(e,t){return e(t={exports:{}},t.exports),t.exports}var r=t((function(e,t){!function(t,r,i,n){var o,a,s={URL:t.URL||t.webkitURL||t.mozURL||t.msURL,getUserMedia:(a=i.getUserMedia||i.webkitGetUserMedia||i.mozGetUserMedia||i.msGetUserMedia,a?a.bind(i):a),requestAnimFrame:t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame,requestTimeout:function(e,t){if(e=e||s.noop,t=t||0,!s.requestAnimFrame)return setTimeout(e,t);var r=(new Date).getTime(),i=new Object,n=s.requestAnimFrame;return i.value=n((function o(){(new Date).getTime()-r>=t?e.call():i.value=n(o)})),i},Blob:t.Blob||t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||t.MSBlobBuilder,btoa:(o=t.btoa||function(e){for(var t="",r=0,i=e.length,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o=void 0,a=void 0,s=void 0,c=void 0,d=void 0,l=void 0,u=void 0;r<i;)c=(o=e.charCodeAt(r++))>>2,d=(3&o)<<4|(a=e.charCodeAt(r++))>>4,l=(15&a)<<2|(s=e.charCodeAt(r++))>>6,u=63&s,isNaN(a)?l=u=64:isNaN(s)&&(u=64),t=t+n.charAt(c)+n.charAt(d)+n.charAt(l)+n.charAt(u);return t},o?o.bind(t):s.noop),isObject:function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},isEmptyObject:function(e){return s.isObject(e)&&!Object.keys(e).length},isArray:function(e){return e&&Array.isArray(e)},isFunction:function(e){return e&&"function"==typeof e},isElement:function(e){return e&&1===e.nodeType},isString:function(e){return"string"==typeof e||"[object String]"===Object.prototype.toString.call(e)},isSupported:{canvas:function(){var e=r.createElement("canvas");return e&&e.getContext&&e.getContext("2d")},webworkers:function(){return t.Worker},blob:function(){return s.Blob},Uint8Array:function(){return t.Uint8Array},Uint32Array:function(){return t.Uint32Array},videoCodecs:function(){var e=r.createElement("video"),t={mp4:!1,h264:!1,ogv:!1,ogg:!1,webm:!1};try{e&&e.canPlayType&&(t.mp4=""!==e.canPlayType('video/mp4; codecs="mp4v.20.8"'),t.h264=""!==(e.canPlayType('video/mp4; codecs="avc1.42E01E"')||e.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')),t.ogv=""!==e.canPlayType('video/ogg; codecs="theora"'),t.ogg=""!==e.canPlayType('video/ogg; codecs="theora"'),t.webm=-1!==e.canPlayType('video/webm; codecs="vp8, vorbis"'))}catch(e){}return t}()},noop:function(){},each:function(e,t){var r=void 0,i=void 0;if(s.isArray(e))for(r=-1,i=e.length;++r<i&&!1!==t(r,e[r]););else if(s.isObject(e))for(r in e)if(e.hasOwnProperty(r)&&!1===t(r,e[r]))break},mergeOptions:function(e,t){if(s.isObject(e)&&s.isObject(t)&&Object.keys){var r={};return s.each(e,(function(t,i){r[t]=e[t]})),s.each(t,(function(i,n){var o=t[i];s.isObject(o)&&e[i]?r[i]=s.mergeOptions(e[i],o):r[i]=o})),r}},setCSSAttr:function(e,t,r){s.isElement(e)&&(s.isString(t)&&s.isString(r)?e.style[t]=r:s.isObject(t)&&s.each(t,(function(t,r){e.style[t]=r})))},removeElement:function(e){s.isElement(e)&&e.parentNode&&e.parentNode.removeChild(e)},createWebWorker:function(e){if(!s.isString(e))return{};try{var t=new s.Blob([e],{type:"text/javascript"}),r=s.URL.createObjectURL(t);return{objectUrl:r,worker:new Worker(r)}}catch(e){return""+e}},getExtension:function(e){return e.substr(e.lastIndexOf(".")+1,e.length)},getFontSize:function(){var e=arguments.length>0&&arguments[0]!==n?arguments[0]:{};if(!r.body||!1===e.resizeFont)return e.fontSize;var t=e.text,i=e.gifWidth,o=parseInt(e.fontSize,10),a=parseInt(e.minFontSize,10),s=r.createElement("div"),c=r.createElement("span");for(s.setAttribute("width",i),s.appendChild(c),c.innerHTML=t,c.style.fontSize=o+"px",c.style.textIndent="-9999px",c.style.visibility="hidden",r.body.appendChild(c);c.offsetWidth>i&&o>=a;)c.style.fontSize=--o+"px";return r.body.removeChild(c),o+"px"},webWorkerError:!1},c=Object.freeze({default:s}),d={validate:function(e){e=s.isObject(e)?e:{};var t={};return s.each(d.validators,(function(r,i){var n=i.errorCode;if(!e[n]&&!i.condition)return(t=i).error=!0,!1})),delete t.condition,t},isValid:function(e){var t=!0!==d.validate(e).error;return t},validators:[{condition:s.isFunction(s.getUserMedia),errorCode:"getUserMedia",errorMsg:"The getUserMedia API is not supported in your browser"},{condition:s.isSupported.canvas(),errorCode:"canvas",errorMsg:"Canvas elements are not supported in your browser"},{condition:s.isSupported.webworkers(),errorCode:"webworkers",errorMsg:"The Web Workers API is not supported in your browser"},{condition:s.isFunction(s.URL),errorCode:"window.URL",errorMsg:"The window.URL API is not supported in your browser"},{condition:s.isSupported.blob(),errorCode:"window.Blob",errorMsg:"The window.Blob File API is not supported in your browser"},{condition:s.isSupported.Uint8Array(),errorCode:"window.Uint8Array",errorMsg:"The window.Uint8Array function constructor is not supported in your browser"},{condition:s.isSupported.Uint32Array(),errorCode:"window.Uint32Array",errorMsg:"The window.Uint32Array function constructor is not supported in your browser"}],messages:{videoCodecs:{errorCode:"videocodec",errorMsg:"The video codec you are trying to use is not supported in your browser"}}},l=Object.freeze({default:d}),u=function(){},f={sampleInterval:10,numWorkers:2,filter:"",gifWidth:200,gifHeight:200,interval:.1,numFrames:10,frameDuration:1,keepCameraOn:!1,images:[],video:null,webcamVideoElement:null,cameraStream:null,text:"",fontWeight:"normal",fontSize:"16px",minFontSize:"10px",resizeFont:!1,fontFamily:"sans-serif",fontColor:"#ffffff",textAlign:"center",textBaseline:"bottom",textXCoordinate:null,textYCoordinate:null,progressCallback:u,completeCallback:u,saveRenderingContexts:!1,savedRenderingContexts:[],crossOrigin:"Anonymous"},g=Object.freeze({default:f});function m(){return d.isValid()}function h(){var e,t,r,i,n,o=256,a=499,s=491,c=487,d=503,l=3*d,u=o-1,f=4,g=100,m=16,h=1<<m,p=10,v=10,b=h>>v,w=h<<p-v,y=6,C=(o>>3)*(1<<y),S=30,x=1024,O=256,k=1<<18,F=[],W=[],E=[],A=[];function R(e,t,r,i,a){var s,c,d,l,u,f,g;for((d=t-e)<-1&&(d=-1),(l=t+e)>o&&(l=o),s=t+1,c=t-1,f=1;s<l||c>d;){if(u=A[f++],s<l){g=n[s++];try{g[0]-=u*(g[0]-r)/k|0,g[1]-=u*(g[1]-i)/k|0,g[2]-=u*(g[2]-a)/k|0}catch(e){}}if(c>d){g=n[c--];try{g[0]-=u*(g[0]-r)/k|0,g[1]-=u*(g[1]-i)/k|0,g[2]-=u*(g[2]-a)/k|0}catch(e){}}}}function T(e,t,r,i,o){var a=n[t],s=e/x;a[0]-=s*(a[0]-r)|0,a[1]-=s*(a[1]-i)|0,a[2]-=s*(a[2]-o)|0}function U(e,t,r){var i,a,s,c,d,l,u,g,h,y;for(h=g=~(1<<31),u=l=-1,i=0;i<o;i++)(a=(y=n[i])[0]-e)<0&&(a=-a),(s=y[1]-t)<0&&(s=-s),a+=s,(s=y[2]-r)<0&&(s=-s),(a+=s)<g&&(g=a,l=i),(c=a-(W[i]>>m-f))<h&&(h=c,u=i),d=E[i]>>v,E[i]-=d,W[i]+=d<<p;return E[l]+=b,W[l]-=w,u}(function(e,a,s){var c,d;for(t=e,r=a,i=s,n=new Array(o),c=0;c<o;c++)n[c]=new Array(4),(d=n[c])[0]=d[1]=d[2]=(c<<f+8)/o|0,E[c]=h/o|0,W[c]=0}).apply(this,arguments);var j={map:function(e,t,r){var i,a,s,c,d,l,u;for(d=1e3,u=-1,a=(i=F[t])-1;i<o||a>=0;)i<o&&((s=(l=n[i])[1]-t)>=d?i=o:(i++,s<0&&(s=-s),(c=l[0]-e)<0&&(c=-c),(s+=c)<d&&((c=l[2]-r)<0&&(c=-c),(s+=c)<d&&(d=s,u=l[3])))),a>=0&&((s=t-(l=n[a])[1])>=d?a=-1:(a--,s<0&&(s=-s),(c=l[0]-e)<0&&(c=-c),(s+=c)<d&&((c=l[2]-r)<0&&(c=-c),(s+=c)<d&&(d=s,u=l[3]))));return u},process:function(){return function(){var n,o,u,m,h,p,v,b,w,k,F,W,E,j;for(r<l&&(i=1),e=30+(i-1)/3,W=t,E=0,j=r,k=(F=r/(3*i))/g|0,b=x,(v=(p=C)>>y)<=1&&(v=0),n=0;n<v;n++)A[n]=b*((v*v-n*n)*O/(v*v));for(w=r<l?3:r%a!=0?3*a:r%s!=0?3*s:r%c!=0?3*c:3*d,n=0;n<F;)if(T(b,o=U(u=(255&W[E+0])<<f,m=(255&W[E+1])<<f,h=(255&W[E+2])<<f),u,m,h),0!==v&&R(v,o,u,m,h),(E+=w)>=j&&(E-=r),0===k&&(k=1),++n%k==0)for(b-=b/e,(v=(p-=p/S)>>y)<=1&&(v=0),o=0;o<v;o++)A[o]=b*((v*v-o*o)*O/(v*v))}(),function(){var e;for(e=0;e<o;e++)n[e][0]>>=f,n[e][1]>>=f,n[e][2]>>=f,n[e][3]=e}(),function(){var e,t,r,i,a,s,c,d;for(c=0,d=0,e=0;e<o;e++){for(r=e,i=(a=n[e])[1],t=e+1;t<o;t++)(s=n[t])[1]<i&&(r=t,i=s[1]);if(s=n[r],e!=r&&(t=s[0],s[0]=a[0],a[0]=t,t=s[1],s[1]=a[1],a[1]=t,t=s[2],s[2]=a[2],a[2]=t,t=s[3],s[3]=a[3],a[3]=t),i!=c){for(F[c]=d+e>>1,t=c+1;t<i;t++)F[t]=e;c=i,d=e}}for(F[c]=d+u>>1,t=c+1;t<256;t++)F[t]=u}(),function(){for(var e=[],t=new Array(o),r=0;r<o;r++)t[n[r][3]]=r;for(var i=0,a=0;a<o;a++){var s=t[a];e[i++]=n[s][0],e[i++]=n[s][1],e[i++]=n[s][2]}return e}()}};return j}function p(){try{this.onmessage=function(t){var r,i=t.data||{};i.gifshot&&(r=e.run(i),postMessage(r))}}catch(e){}var e={dataToRGB:function(e,t,r){for(var i=t*r*4,n=0,o=[];n<i;)o.push(e[n++]),o.push(e[n++]),o.push(e[n++]),n++;return o},componentizedPaletteToArray:function(e){e=e||[];for(var t=[],r=0;r<e.length;r+=3){var i=e[r],n=e[r+1],o=e[r+2];t.push(i<<16|n<<8|o)}return t},processFrameWithQuantizer:function(e,t,r,i){for(var n=this.dataToRGB(e,t,r),o=new h(n,n.length,i),a=o.process(),s=new Uint32Array(this.componentizedPaletteToArray(a)),c=t*r,d=new Uint8Array(c),l=0,u=0;u<c;u++){var f=n[l++],g=n[l++],m=n[l++];d[u]=o.map(f,g,m)}return{pixels:d,palette:s}},run:function(e){var t=e=e||{},r=t.height,i=(t.palette,t.sampleInterval),n=t.width,o=e.data;return this.processFrameWithQuantizer(o,n,r,i)}};return e}function v(e,t,r,i){var o=0,a=(i=i===n?{}:i).loop===n?null:i.loop,s=i.palette===n?null:i.palette;if(t<=0||r<=0||t>65535||r>65535)throw"Width/Height invalid.";e[o++]=71,e[o++]=73,e[o++]=70,e[o++]=56,e[o++]=57,e[o++]=97;if(e[o++]=255&t,e[o++]=t>>8&255,e[o++]=255&r,e[o++]=r>>8&255,e[o++]=0|(null!==s?128:0),e[o++]=0,e[o++]=0,null!==a){if(a<0||a>65535)throw"Loop count invalid.";e[o++]=33,e[o++]=255,e[o++]=11,e[o++]=78,e[o++]=69,e[o++]=84,e[o++]=83,e[o++]=67,e[o++]=65,e[o++]=80,e[o++]=69,e[o++]=50,e[o++]=46,e[o++]=48,e[o++]=3,e[o++]=1,e[o++]=255&a,e[o++]=a>>8&255,e[o++]=0}var c=!1;this.addFrame=function(t,r,i,a,d,l){if(!0===c&&(--o,c=!1),l=l===n?{}:l,t<0||r<0||t>65535||r>65535)throw"x/y invalid.";if(i<=0||a<=0||i>65535||a>65535)throw"Width/Height invalid.";if(d.length<i*a)throw"Not enough pixels for the frame size.";var u=!0,f=l.palette;if(f!==n&&null!==f||(u=!1,f=s),f===n||null===f)throw"Must supply either a local or global palette.";for(var g=function(e){var t=e.length;if(t<2||t>256||t&t-1)throw"Invalid code/color length, must be power of 2 and 2 .. 256.";return t}(f),m=0;g>>=1;)++m;g=1<<m;var h=l.delay===n?0:l.delay,p=l.disposal===n?0:l.disposal;if(p<0||p>3)throw"Disposal out of range.";var v=!1,b=0;if(l.transparent!==n&&null!==l.transparent&&(v=!0,(b=l.transparent)<0||b>=g))throw"Transparent color index.";if((0!==p||v||0!==h)&&(e[o++]=33,e[o++]=249,e[o++]=4,e[o++]=p<<2|(!0===v?1:0),e[o++]=255&h,e[o++]=h>>8&255,e[o++]=b,e[o++]=0),e[o++]=44,e[o++]=255&t,e[o++]=t>>8&255,e[o++]=255&r,e[o++]=r>>8&255,e[o++]=255&i,e[o++]=i>>8&255,e[o++]=255&a,e[o++]=a>>8&255,e[o++]=!0===u?128|m-1:0,!0===u)for(var w=0,y=f.length;w<y;++w){var C=f[w];e[o++]=C>>16&255,e[o++]=C>>8&255,e[o++]=255&C}o=function(e,t,r,i){e[t++]=r;var o=t++,a=1<<r,s=a-1,c=a+1,d=c+1,l=r+1,u=0,f=0;function g(r){for(;u>=r;)e[t++]=255&f,f>>=8,u-=8,t===o+256&&(e[o]=255,o=t++)}function m(e){f|=e<<u,u+=l,g(8)}var h=i[0]&s,p={};m(a);for(var v=1,b=i.length;v<b;++v){var w=i[v]&s,y=h<<8|w,C=p[y];if(C===n){for(f|=h<<u,u+=l;u>=8;)e[t++]=255&f,f>>=8,u-=8,t===o+256&&(e[o]=255,o=t++);4096===d?(m(a),d=c+1,l=r+1,p={}):(d>=1<<l&&++l,p[y]=d++),h=w}else h=C}m(h),m(c),g(1),o+1===t?e[o]=0:(e[o]=t-o-1,e[t++]=0);return t}(e,o,m<2?2:m,d)},this.end=function(){return!1===c&&(e[o++]=59,c=!0),o}}var b=function(){},w=function(e){this.canvas=null,this.ctx=null,this.repeat=0,this.frames=[],this.numRenderedFrames=0,this.onRenderCompleteCallback=b,this.onRenderProgressCallback=b,this.workers=[],this.availableWorkers=[],this.generatingGIF=!1,this.options=e,this.initializeWebWorkers(e)};w.prototype={workerMethods:p(),initializeWebWorkers:function(e){var t,i=h.toString()+"("+p.toString()+"());",n=void 0,o=void 0,a=void 0,c=-1,d="";for(t=e.numWorkers;++c<t;)n=s.createWebWorker(i),s.isObject(n)?(o=n.objectUrl,a=n.worker,this.workers.push({worker:a,objectUrl:o}),this.availableWorkers.push(a)):(d=n,s.webWorkerError=!!n);this.workerError=d,this.canvas=r.createElement("canvas"),this.canvas.width=e.gifWidth,this.canvas.height=e.gifHeight,this.ctx=this.canvas.getContext("2d"),this.frames=[]},getWorker:function(){return this.availableWorkers.pop()},freeWorker:function(e){this.availableWorkers.push(e)},byteMap:function(){for(var e=[],t=0;t<256;t++)e[t]=String.fromCharCode(t);return e}(),bufferToString:function(e){for(var t=e.length,r="",i=-1;++i<t;)r+=this.byteMap[e[i]];return r},onFrameFinished:function(e){var t=this,r=t.frames,i=!!(t.options.images||[]).length,n=r.every((function(e){return!e.beingProcessed&&e.done}));t.numRenderedFrames++,i&&e(t.numRenderedFrames/r.length),t.onRenderProgressCallback(.75*t.numRenderedFrames/r.length),n?t.generatingGIF||t.generateGIF(r,t.onRenderCompleteCallback):s.requestTimeout((function(){t.processNextFrame()}),1)},processFrame:function(e){var t=this,r=(this.options,this.options),i=r.progressCallback,o=r.sampleInterval,a=this.frames,s=void 0,c=void 0,d=function(){var e=arguments.length>0&&arguments[0]!==n?arguments[0]:{},r=e.data;delete s.data,s.pixels=Array.prototype.slice.call(r.pixels),s.palette=Array.prototype.slice.call(r.palette),s.done=!0,s.beingProcessed=!1,t.freeWorker(c),t.onFrameFinished(i)};(s=a[e]).beingProcessed||s.done?this.onFrameFinished():(s.sampleInterval=o,s.beingProcessed=!0,s.gifshot=!0,(c=this.getWorker())?(c.onmessage=d,c.postMessage(s)):d({data:t.workerMethods.run(s)}))},startRendering:function(e){this.onRenderCompleteCallback=e;for(var t=0;t<this.options.numWorkers&&t<this.frames.length;t++)this.processFrame(t)},processNextFrame:function(){for(var e=-1,t=0;t<this.frames.length;t++){var r=this.frames[t];if(!r.done&&!r.beingProcessed){e=t;break}}e>=0&&this.processFrame(e)},generateGIF:function(e,t){var r=[],i={loop:this.repeat},n=this.options,o=n.interval,a=n.frameDuration,c=!!n.images.length,d=n.gifHeight,l=n.gifWidth,u=new v(r,l,d,i),f=this.onRenderProgressCallback,g=c?100*o:0,m=void 0;this.generatingGIF=!0,s.each(e,(function(t,r){var i=r.palette;f(.75+.25*r.position*1/e.length);for(var n=0;n<a;n++)u.addFrame(0,0,l,d,r.pixels,{palette:i,delay:g})})),u.end(),f(1),this.frames=[],this.generatingGIF=!1,s.isFunction(t)&&(m=this.bufferToString(r),t("data:image/gif;base64,"+s.btoa(m)))},setRepeat:function(e){this.repeat=e},addFrame:function(e,t){t=s.isObject(t)?t:{};var r=this.ctx,i=this.options,n=i.gifWidth,o=i.gifHeight,a=s.getFontSize(t),c=t,d=c.filter,l=c.fontColor,u=c.fontFamily,f=c.fontWeight,g=(c.gifHeight,c.gifWidth,c.text),m=c.textAlign,h=c.textBaseline,p=t.textXCoordinate?t.textXCoordinate:"left"===m?1:"right"===m?n:n/2,v=t.textYCoordinate?t.textYCoordinate:"top"===h?1:"center"===h?o/2:o,b=f+" "+a+" "+u,w=void 0;try{r.filter=d,r.drawImage(e,0,0,n,o),g&&(r.font=b,r.fillStyle=l,r.textAlign=m,r.textBaseline=h,r.fillText(g,p,v)),w=r.getImageData(0,0,n,o),this.addFrameImageData(w)}catch(e){return""+e}},addFrameImageData:function(){var e=arguments.length>0&&arguments[0]!==n?arguments[0]:{},t=this.frames,r=e.data;this.frames.push({data:r,width:e.width,height:e.height,palette:null,dithering:null,done:!1,beingProcessed:!1,position:t.length})},onRenderProgress:function(e){this.onRenderProgressCallback=e},isRendering:function(){return this.generatingGIF},getBase64GIF:function(e){var t=this;t.startRendering((function(r){t.destroyWorkers(),s.requestTimeout((function(){e(r)}),0)}))},destroyWorkers:function(){if(!this.workerError){var e=this.workers;s.each(e,(function(e,t){var r=t.worker,i=t.objectUrl;r.terminate(),s.URL.revokeObjectURL(i)}))}}};var y=function(){},C={getGIF:function(){var e=arguments.length>0&&arguments[0]!==n?arguments[0]:{},t=arguments[1];t=s.isFunction(t)?t:y;var i=r.createElement("canvas"),o=void 0,a=e.images,c=!!a.length,d=e.cameraStream,l=e.crop,u=e.filter,f=e.fontColor,g=e.fontFamily,m=e.fontWeight,h=e.keepCameraOn,p=(e.numWorkers,e.progressCallback),v=e.saveRenderingContexts,b=e.savedRenderingContexts,C=e.text,S=e.textAlign,x=e.textBaseline,O=e.videoElement,k=e.videoHeight,F=e.videoWidth,W=e.webcamVideoElement,E=Number(e.gifWidth),A=Number(e.gifHeight),R=Number(e.interval),T=(Number(e.sampleInterval),c?0:1e3*R),U=[],j=b.length?b.length:e.numFrames,M=j,I=new w(e),P=s.getFontSize(e),V=e.textXCoordinate?e.textXCoordinate:"left"===S?1:"right"===S?E:E/2,L=e.textYCoordinate?e.textYCoordinate:"top"===x?1:"center"===x?A/2:A,H=m+" "+P+" "+g,z=l?Math.floor(l.scaledWidth/2):0,G=l?F-l.scaledWidth:0,B=l?Math.floor(l.scaledHeight/2):0,D=l?k-l.scaledHeight:0,N=function e(){var r=M-1;function i(){var i;v&&U.push(o.getImageData(0,0,E,A)),C&&(o.font=H,o.fillStyle=f,o.textAlign=S,o.textBaseline=x,o.fillText(C,V,L)),i=o.getImageData(0,0,E,A),I.addFrameImageData(i),p((j-(M=r))/j),r>0&&s.requestTimeout(e,T),M||I.getBase64GIF((function(e){t({error:!1,errorCode:"",errorMsg:"",image:e,cameraStream:d,videoElement:O,webcamVideoElement:W,savedRenderingContexts:U,keepCameraOn:h})}))}b.length?(o.putImageData(b[j-M],0,0),i()):function e(){try{G>F&&(G=F),D>k&&(D=k),z<0&&(z=0),B<0&&(B=0),o.filter=u,o.drawImage(O,z,B,G,D,0,0,E,A),i()}catch(t){if("NS_ERROR_NOT_AVAILABLE"!==t.name)throw t;s.requestTimeout(e,100)}}()};j=j!==n?j:10,R=R!==n?R:.1,i.width=E,i.height=A,o=i.getContext("2d"),function e(){b.length||0!==O.currentTime?N():s.requestTimeout(e,100)}()},getCropDimensions:function(){var e=arguments.length>0&&arguments[0]!==n?arguments[0]:{},t=e.videoWidth,r=e.videoHeight,i=e.gifWidth,o=e.gifHeight,a={width:0,height:0,scaledWidth:0,scaledHeight:0};return t>r?(a.width=Math.round(t*(o/r))-i,a.scaledWidth=Math.round(a.width*(r/o))):(a.height=Math.round(r*(i/t))-o,a.scaledHeight=Math.round(a.height*(t/i))),a}},S={loadedData:!1,defaultVideoDimensions:{width:640,height:480},findVideoSize:function e(t){e.attempts=e.attempts||0;var r=t.cameraStream,i=t.completedCallback,n=t.videoElement;n&&(n.videoWidth>0&&n.videoHeight>0?(n.removeEventListener("loadeddata",S.findVideoSize),i({videoElement:n,cameraStream:r,videoWidth:n.videoWidth,videoHeight:n.videoHeight})):e.attempts<10?(e.attempts+=1,s.requestTimeout((function(){S.findVideoSize(t)}),400)):i({videoElement:n,cameraStream:r,videoWidth:S.defaultVideoDimensions.width,videoHeight:S.defaultVideoDimensions.height}))},onStreamingTimeout:function(e){s.isFunction(e)&&e({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - Timed out while trying to start streaming",image:null,cameraStream:{}})},stream:function(e){var t=s.isArray(e.existingVideo)?e.existingVideo[0]:e.existingVideo,r=e.cameraStream,i=e.completedCallback,n=e.streamedCallback,o=e.videoElement;if(s.isFunction(n)&&n(),t){if(s.isString(t))o.src=t,o.innerHTML='<source src="'+t+'" type="video/'+s.getExtension(t)+'" />';else if(t instanceof Blob){try{o.src=s.URL.createObjectURL(t)}catch(e){}o.innerHTML='<source src="'+t+'" type="'+t.type+'" />'}}else if(o.mozSrcObject)o.mozSrcObject=r;else if(s.URL)try{o.srcObject=r,o.src=s.URL.createObjectURL(r)}catch(e){o.srcObject=r}o.play(),s.requestTimeout((function e(){e.count=e.count||0,!0===S.loadedData?(S.findVideoSize({videoElement:o,cameraStream:r,completedCallback:i}),S.loadedData=!1):(e.count+=1)>10?S.findVideoSize({videoElement:o,cameraStream:r,completedCallback:i}):e()}),0)},startStreaming:function(e){var t=s.isFunction(e.error)?e.error:s.noop,i=s.isFunction(e.streamed)?e.streamed:s.noop,n=s.isFunction(e.completed)?e.completed:s.noop,o=e.crossOrigin,a=e.existingVideo,c=e.lastCameraStream,d=e.options,l=e.webcamVideoElement,u=s.isElement(a)?a:l||r.createElement("video");o&&(u.crossOrigin=d.crossOrigin),u.autoplay=!0,u.loop=!0,u.muted=!0,u.addEventListener("loadeddata",(function(e){S.loadedData=!0,d.offset&&(u.currentTime=d.offset)})),a?S.stream({videoElement:u,existingVideo:a,completedCallback:n}):c?S.stream({videoElement:u,cameraStream:c,streamedCallback:i,completedCallback:n}):s.getUserMedia({video:!0},(function(e){S.stream({videoElement:u,cameraStream:e,streamedCallback:i,completedCallback:n})}),t)},startVideoStreaming:function(e){var t=arguments.length>1&&arguments[1]!==n?arguments[1]:{},r=t.timeout!==n?t.timeout:0,i=t.callback,o=t.webcamVideoElement,a=void 0;r>0&&(a=s.requestTimeout((function(){S.onStreamingTimeout(i)}),1e4)),S.startStreaming({error:function(){i({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - the user probably denied permission",image:null,cameraStream:{}})},streamed:function(){clearTimeout(a)},completed:function(){var t=arguments.length>0&&arguments[0]!==n?arguments[0]:{},r=t.cameraStream,i=t.videoElement,o=t.videoHeight,a=t.videoWidth;e({cameraStream:r,videoElement:i,videoHeight:o,videoWidth:a})},lastCameraStream:t.lastCameraStream,webcamVideoElement:o,crossOrigin:t.crossOrigin,options:t})},stopVideoStreaming:function(e){var t=e=s.isObject(e)?e:{},r=t.keepCameraOn,i=t.videoElement,n=t.webcamVideoElement,o=e.cameraStream||{},a=o.getTracks&&o.getTracks()||[],c=!!a.length,d=a[0];!r&&c&&s.isFunction(d.stop)&&d.stop(),s.isElement(i)&&!n&&(i.pause(),s.isFunction(s.URL.revokeObjectURL)&&!s.webWorkerError&&i.src&&s.URL.revokeObjectURL(i.src),s.removeElement(i))}};function x(e){e=s.isObject(e)?e:{},S.stopVideoStreaming(e)}function O(e,t){var i=e.options||{},n=i.images,o=i.video,a=Number(i.gifWidth),c=Number(i.gifHeight),d=(Number(i.numFrames),e.cameraStream),l=e.videoElement,u=e.videoWidth,f=e.videoHeight,g=C.getCropDimensions({videoWidth:u,videoHeight:f,gifHeight:c,gifWidth:a}),m=t;i.crop=g,i.videoElement=l,i.videoWidth=u,i.videoHeight=f,i.cameraStream=d,s.isElement(l)&&(l.width=a+g.width,l.height=c+g.height,i.webcamVideoElement||(s.setCSSAttr(l,{position:"fixed",opacity:"0"}),r.body.appendChild(l)),l.play(),C.getGIF(i,(function(e){n&&n.length||o&&o.length||x(e),m(e)})))}function k(e,t){if(t=s.isFunction(e)?e:t,e=s.isObject(e)?e:{},s.isFunction(t)){var i=s.mergeOptions(f,e)||{},o=e.cameraStream,a=i.images,c=a?a.length:0,l=i.video,u=i.webcamVideoElement;i=s.mergeOptions(i,{gifWidth:Math.floor(i.gifWidth),gifHeight:Math.floor(i.gifHeight)}),c?function(){var e=arguments.length>0&&arguments[0]!==n?arguments[0]:{},t=e.callback,i=e.images,o=e.options,a=e.imagesLength,c=d.validate({getUserMedia:!0,"window.URL":!0}),l=[],u=0,f=void 0,g=void 0;if(c.error)return t(c);function m(){s.each(l,(function(e,t){t&&(t.text?g.addFrame(t.img,o,t.text):g.addFrame(t,o))})),function(e,t){e.getBase64GIF((function(e){t({error:!1,errorCode:"",errorMsg:"",image:e})}))}(g,t)}g=new w(o),s.each(i,(function(e,i){var n=i;i.src&&(n=n.src),s.isElement(n)?(o.crossOrigin&&(n.crossOrigin=o.crossOrigin),l[e]=n,(u+=1)===a&&m()):s.isString(n)&&(f=new Image,o.crossOrigin&&(f.crossOrigin=o.crossOrigin),function(r){i.text&&(r.text=i.text),r.onerror=function(e){var r=void 0;if(0===--a)return(r={}).error="None of the requested images was capable of being retrieved",t(r)},r.onload=function(t){i.text?l[e]={img:r,text:r.text}:l[e]=r,(u+=1)===a&&m(),s.removeElement(r)},r.src=n}(f),s.setCSSAttr(f,{position:"fixed",opacity:"0"}),r.body.appendChild(f))}))}({images:a,imagesLength:c,callback:t,options:i}):l?function(){var e=arguments.length>0&&arguments[0]!==n?arguments[0]:{},t=e.callback,r=e.existingVideo,i=e.options,o=d.validate({getUserMedia:!0,"window.URL":!0}),a=void 0,c=void 0;if(o.error)return t(o);if(s.isElement(r)&&r.src){if(c=r.src,a=s.getExtension(c),!s.isSupported.videoCodecs[a])return t(d.messages.videoCodecs)}else s.isArray(r)&&s.each(r,(function(e,t){if(a=t instanceof Blob?t.type.substr(t.type.lastIndexOf("/")+1,t.length):t.substr(t.lastIndexOf(".")+1,t.length),s.isSupported.videoCodecs[a])return r=t,!1}));S.startStreaming({completed:function(e){e.options=i||{},O(e,t)},existingVideo:r,crossOrigin:i.crossOrigin,options:i})}({existingVideo:l,callback:t,options:i}):function(){var e=arguments.length>0&&arguments[0]!==n?arguments[0]:{},t=e.callback,r=e.lastCameraStream,i=e.options,o=e.webcamVideoElement;if(!m())return t(d.validate());i.savedRenderingContexts.length?C.getGIF(i,(function(e){t(e)})):S.startVideoStreaming((function(){var e=arguments.length>0&&arguments[0]!==n?arguments[0]:{};e.options=i||{},O(e,t)}),{lastCameraStream:r,callback:t,webcamVideoElement:o,crossOrigin:i.crossOrigin})}({lastCameraStream:o,callback:t,webcamVideoElement:u,options:i})}}var F={utils:c,error:l,defaultOptions:g,createGIF:k,takeSnapShot:function(e,t){if(t=s.isFunction(e)?e:t,e=s.isObject(e)?e:{},s.isFunction(t)){var r=s.mergeOptions(f,e);k(s.mergeOptions(r,{interval:.1,numFrames:1,gifWidth:Math.floor(r.gifWidth),gifHeight:Math.floor(r.gifHeight)}),t)}},stopVideoStreaming:x,isSupported:function(){return d.isValid()},isWebCamGIFSupported:m,isExistingVideoGIFSupported:function(e){var t=!1;if(s.isArray(e)&&e.length){if(s.each(e,(function(e,r){s.isSupported.videoCodecs[r]&&(t=!0)})),!t)return!1}else if(s.isString(e)&&e.length&&!s.isSupported.videoCodecs[e])return!1;return d.isValid({getUserMedia:!0})},isExistingImagesGIFSupported:function(){return d.isValid({getUserMedia:!0})},VERSION:"0.4.5"};"function"==typeof n&&n.amd?n([],(function(){return F})):e.exports=F}("undefined"!=typeof window?window:{},"undefined"!=typeof document?document:{createElement:function(){}},"undefined"!=typeof window?window.navigator:{})})),i=t((function(e){var t;t=function(){return function(e,t,r){t=t||"",r=r||512;for(var i=atob(e),n=[],o=0;o<i.length;o+=r){for(var a=i.slice(o,o+r),s=new Array(a.length),c=0;c<a.length;c++)s[c]=a.charCodeAt(c);var d=new Uint8Array(s);n.push(d)}return new Blob(n,{type:t})}},e.exports?(e.exports=t(),e.exports.default=e.exports):window.b64toBlob=t()}));function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(t){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?n(Object(i),!0).forEach((function(r){e(t,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}return function(e){var t=e.constructor.utils,n=t.errorHandle,a=t.clamp,s=t.downloadFile,c=e.i18n,d=e.notice,l=e.layers,u=e.player,f=e.loading,g=e.option,m=g.theme,h=g.title,p=e.events.proxy,v=e.template.$video;c.update({"zh-cn":{"Long press, gif length is between 1 second and 10 seconds":"长按，gif 长度为 1 ~ 10 秒","Gif time is too short":"Gif 时间太短","Start creating gif...":"开始创建 gif...","Create gif successfully":"创建 gif 成功","There is another gif in the processing":"正有另一个 gif 在创建中","Release the mouse to start":"放开鼠标即可开始"},"zh-tw":{"Long press, gif length is between 1 second and 10 seconds":"長按，gif 長度為 1 ~ 10 秒","Gif time is too short":"Gif 時間太短","Start creating gif...":"開始創建 gif...","Create gif successfully":"創建 gif 成功","There is another gif in the processing":"正有另一個 gif 在創建中","Release the mouse to start":"放開鼠標即可開始"}});var b=null;l.add({name:"artplayer-plugin-gif-progress",style:{position:"absolute",top:"0",left:"0",height:"3px",width:"0%","background-color":m}},(function(e){b=e}));var w=1e4,y=!1,C=0,S=null,x=!1,O=0;function k(){b.style.width="0%",clearTimeout(S),S=null}return e.on("destroy",(function(){S&&clearTimeout(S)})),{name:"artplayerPluginGif",attach:function(t){p(t,"mousedown",(function(){x=!0,k(),O=u.currentTime,C=new Date,d.show=c.get("Long press, gif length is between 1 second and 10 seconds"),function e(){S=setTimeout((function(){var t=parseInt(b.style.width,10);t<=100?(b.style.width="".concat(t+1,"%"),e()):d.show=c.get("Release the mouse to start")}),w/100)}()})),p(document,"mouseup",(function(){x&&(x=!1,function(){k();var t=new Date-C;if(y)d.show=c.get("There is another gif in the processing");else if(t<1e3)d.show=c.get("Gif time is too short");else{var r=Math.floor(a(t,1e3,w)/100),i=v.videoWidth,n=v.videoHeight;e.plugins.artplayerPluginGif.create({numFrames:r,offset:Math.floor(O),gifHeight:200,gifWidth:i/n*200},(function(e){s(e,"".concat(h||"unnamed",".gif"))}))}}(),O=0)}))},create:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;y=!0,f.show=!0,e.emit("artplayerPluginGif:start"),d.show=c.get("Start creating gif..."),r.createGIF(o({},t,{video:[v.src],crossOrigin:"anonymous"}),(function(t){if(t.error)d.show=t.errorMsg,n(!1,t.errorMsg);else if("function"==typeof a){var r=t.image.split(",")[1],o=i(r,"image/gif"),s=URL.createObjectURL(o);d.show=c.get("Create gif successfully"),e.emit("artplayerPluginGif",s),a(s)}y=!1,f.show=!1,e.emit("artplayerPluginGif:end")}))}}}}));
