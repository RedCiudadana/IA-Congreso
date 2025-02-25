/*!
 * VERSION: 0.5.1
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=function(e){var i=e.nodeType,r="";if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)r+=t(e)}else if(3===i||4===i)return e.nodeValue;return r},e=_gsScope._gsDefine.plugin({propName:"text",API:2,version:"0.5.1",init:function(e,i,r){var s,n;if(!("innerHTML"in e))return!1;if(this._target=e,"object"!=typeof i&&(i={value:i}),void 0===i.value)return this._text=this._original=[""],!0;for(this._delimiter=i.delimiter||"",this._original=t(e).replace(/\s+/g," ").split(this._delimiter),this._text=i.value.replace(/\s+/g," ").split(this._delimiter),this._runBackwards=r.vars.runBackwards===!0,this._runBackwards&&(s=this._original,this._original=this._text,this._text=s),"string"==typeof i.newClass&&(this._newclassName=i.newClass,this._hasclassName=!0),"string"==typeof i.oldClass&&(this._oldclassName=i.oldClass,this._hasclassName=!0),s=this._original.length-this._text.length,n=0>s?this._original:this._text,this._fillChar=i.fillChar||(i.padSpace?"&nbsp;":""),0>s&&(s=-s);--s>-1;)n.push(this._fillChar);return!0},set:function(t){t>1?t=1:0>t&&(t=0),this._runBackwards&&(t=1-t);var e,i,r,s=this._text.length,n=0|t*s+.5;this._hasClass?(e=this._newClass&&0!==n,i=this._oldClass&&n!==s,r=(e?"<span className='"+this._newClass+"'>":"")+this._text.slice(0,n).join(this._delimiter)+(e?"</span>":"")+(i?"<span className='"+this._oldClass+"'>":"")+this._delimiter+this._original.slice(n).join(this._delimiter)+(i?"</span>":"")):r=this._text.slice(0,n).join(this._delimiter)+this._delimiter+this._original.slice(n).join(this._delimiter),this._target.innerHTML="&nbsp;"===this._fillChar&&-1!==r.indexOf("  ")?r.split("  ").join("&nbsp;&nbsp;"):r}}),i=e.prototype;i._newclassName=i._oldclassName=i._delimiter=""}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
