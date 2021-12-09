var serviceWorkerOption = {
  "assets": [
    "/main.6012b51f6e4ae66c45b6.bundle.js",
    "/mtproto.worker.d06814b8cd5de8e831b7.bundle.worker.js",
    "/rlottie.worker.f19ab8cde1fd94cc237b.bundle.worker.js",
    "/webp.worker.07371739e63c2d8e6f01.bundle.worker.js"
  ]
};
        
        /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/serviceWorker/index.service.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/databases/state.ts":
/*!***************************************!*\
  !*** ./src/config/databases/state.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */
const DATABASE_STATE = {
    name: 'tweb',
    version: 7,
    stores: [{
            name: 'session'
        }, {
            name: 'stickerSets'
        }, {
            name: 'users'
        }, {
            name: 'chats'
        }, {
            name: 'dialogs'
        }, {
            name: 'messages'
        }]
};
/* harmony default export */ __webpack_exports__["default"] = (DATABASE_STATE);


/***/ }),

/***/ "./src/config/debug.ts":
/*!*****************************!*\
  !*** ./src/config/debug.ts ***!
  \*****************************/
/*! exports provided: DEBUG, MOUNT_CLASS_TO, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG", function() { return DEBUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUNT_CLASS_TO", function() { return MOUNT_CLASS_TO; });
/* harmony import */ var _modes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modes */ "./src/config/modes.ts");
/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

const DEBUG =  true || false;
const ctx = typeof (window) !== 'undefined' ? window : self;
const MOUNT_CLASS_TO = DEBUG || true /*  && false */ ? ctx : {};
/* harmony default export */ __webpack_exports__["default"] = (DEBUG);
//let m = DEBUG;
/* if(!DEBUG) {
  ctx.sandpitTurtle = () => {
    //if(!m) {
      for(let i in MOUNT_CLASS_TO) {
        ctx[i] = MOUNT_CLASS_TO[i];
      }
      //m = true;
    //}
  
    //DEBUG = !DEBUG;
  };
} */
/* export const superDebug = (object: any, key: string) => {
  var d = object[key];
  var beforeStr = '', afterStr = '';
  for(var r of d) {
    beforeStr += r.before.hex + '\n';
    afterStr += r.after.hex + '\n';
  }

  beforeStr = beforeStr.trim();
  afterStr = afterStr.trim();
  //var beforeStr = d.map(r => r.before.hex).join('\n');
  //var afterStr = d.map(r => r.after.hex).join('\n');

  var dada = (name: string, str: string) => {
    var a = document.createElement('a');
    a.target = '_blank';
    a.download = name + '.txt';
    a.href = URL.createObjectURL(new Blob([str], {
      type: 'text/plain'
    }));
    document.body.append(a);
    a.click();
  };

  dada(key + '_' + 'before', beforeStr);
  dada(key + '_' + 'after', afterStr);
}

MOUNT_CLASS_TO.superDebug = superDebug; */


/***/ }),

/***/ "./src/config/modes.ts":
/*!*****************************!*\
  !*** ./src/config/modes.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 *
 * Originally from:
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */
const Modes = {
    test: location.search.indexOf('test=1') > 0 /*  || true */,
    debug: location.search.indexOf('debug=1') > 0,
    http: false,
    ssl: true,
    multipleConnections: true,
    asServiceWorker: false
};
/* harmony default export */ __webpack_exports__["default"] = (Modes);


/***/ }),

/***/ "./src/environment/ctx.ts":
/*!********************************!*\
  !*** ./src/environment/ctx.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ctx = typeof (window) !== 'undefined' ? window : self;
/* harmony default export */ __webpack_exports__["default"] = (ctx);


/***/ }),

/***/ "./src/environment/userAgent.ts":
/*!**************************************!*\
  !*** ./src/environment/userAgent.ts ***!
  \**************************************/
/*! exports provided: USER_AGENT, IS_APPLE, IS_ANDROID, IS_CHROMIUM, IS_APPLE_MOBILE, IS_SAFARI, IS_FIREFOX, IS_MOBILE_SAFARI, IS_MOBILE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_AGENT", function() { return USER_AGENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_APPLE", function() { return IS_APPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_ANDROID", function() { return IS_ANDROID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_CHROMIUM", function() { return IS_CHROMIUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_APPLE_MOBILE", function() { return IS_APPLE_MOBILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_SAFARI", function() { return IS_SAFARI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_FIREFOX", function() { return IS_FIREFOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_MOBILE_SAFARI", function() { return IS_MOBILE_SAFARI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_MOBILE", function() { return IS_MOBILE; });
/* harmony import */ var _ctx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ctx */ "./src/environment/ctx.ts");
/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

const USER_AGENT = navigator ? navigator.userAgent : null;
const IS_APPLE = navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i) !== -1;
const IS_ANDROID = navigator.userAgent.toLowerCase().indexOf('android') !== -1;
const IS_CHROMIUM = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
// https://stackoverflow.com/a/58065241
const IS_APPLE_MOBILE = (/iPad|iPhone|iPod/.test(navigator.platform) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
    !_ctx__WEBPACK_IMPORTED_MODULE_0__["default"].MSStream;
const IS_SAFARI = !!('safari' in _ctx__WEBPACK_IMPORTED_MODULE_0__["default"]) || !!(USER_AGENT && (/\b(iPad|iPhone|iPod)\b/.test(USER_AGENT) || (!!USER_AGENT.match('Safari') && !USER_AGENT.match('Chrome')))) /*  || true */;
const IS_FIREFOX = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
const IS_MOBILE_SAFARI = IS_SAFARI && IS_APPLE_MOBILE;
const IS_MOBILE = /* screen.width && screen.width < 480 ||  */ navigator.maxTouchPoints > 0 && navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i) != -1;


/***/ }),

/***/ "./src/helpers/blob.ts":
/*!*****************************!*\
  !*** ./src/helpers/blob.ts ***!
  \*****************************/
/*! exports provided: readBlobAs, readBlobAsText, readBlobAsDataURL, readBlobAsArrayBuffer, readBlobAsUint8Array, blobConstruct, blobSafeMimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBlobAs", function() { return readBlobAs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBlobAsText", function() { return readBlobAsText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBlobAsDataURL", function() { return readBlobAsDataURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBlobAsArrayBuffer", function() { return readBlobAsArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBlobAsUint8Array", function() { return readBlobAsUint8Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blobConstruct", function() { return blobConstruct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blobSafeMimeType", function() { return blobSafeMimeType; });
/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 *
 * Originally from:
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */
function readBlobAs(blob, method) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.addEventListener('loadend', (e) => resolve(e.target.result));
        reader[method](blob);
    });
}
function readBlobAsText(blob) {
    return readBlobAs(blob, 'readAsText');
}
function readBlobAsDataURL(blob) {
    return readBlobAs(blob, 'readAsDataURL');
}
function readBlobAsArrayBuffer(blob) {
    return readBlobAs(blob, 'readAsArrayBuffer');
}
function readBlobAsUint8Array(blob) {
    return readBlobAsArrayBuffer(blob).then(buffer => new Uint8Array(buffer));
}
function blobConstruct(blobParts, mimeType = '') {
    let blob;
    const safeMimeType = blobSafeMimeType(mimeType);
    try {
        blob = new Blob(blobParts, { type: safeMimeType });
    }
    catch (e) {
        // @ts-ignore
        let bb = new BlobBuilder;
        blobParts.forEach((blobPart) => {
            bb.append(blobPart);
        });
        blob = bb.getBlob(safeMimeType);
    }
    return blob;
}
// https://www.iana.org/assignments/media-types/media-types.xhtml
function blobSafeMimeType(mimeType) {
    if ([
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
        'image/bmp',
        'video/mp4',
        'video/webm',
        'video/quicktime',
        'audio/ogg',
        'audio/mpeg',
        'audio/mp4',
        'application/json',
        'application/pdf'
    ].indexOf(mimeType) === -1) {
        return 'application/octet-stream';
    }
    return mimeType;
}


/***/ }),

/***/ "./src/helpers/cancellablePromise.ts":
/*!*******************************************!*\
  !*** ./src/helpers/cancellablePromise.ts ***!
  \*******************************************/
/*! exports provided: deferredPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deferredPromise", function() { return deferredPromise; });
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop */ "./src/helpers/noop.ts");
/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

function deferredPromise() {
    let deferredHelper = {
        isFulfilled: false,
        isRejected: false,
        notify: () => { },
        notifyAll: (...args) => {
            deferredHelper.lastNotify = args;
            deferredHelper.listeners.forEach((callback) => callback(...args));
        },
        listeners: [],
        addNotifyListener: (callback) => {
            if (deferredHelper.lastNotify) {
                callback(...deferredHelper.lastNotify);
            }
            deferredHelper.listeners.push(callback);
        }
    };
    let deferred = new Promise((resolve, reject) => {
        deferredHelper.resolve = (value) => {
            if (deferred.isFulfilled || deferred.isRejected)
                return;
            deferred.isFulfilled = true;
            resolve(value);
        };
        deferredHelper.reject = (...args) => {
            if (deferred.isRejected || deferred.isFulfilled)
                return;
            deferred.isRejected = true;
            reject(...args);
        };
    });
    // @ts-ignore
    /* deferred.then = (resolve: (value: T) => any, reject: (...args: any[]) => any) => {
      const n = deferredPromise<ReturnType<typeof resolve>>();
      
    }; */
    deferred.catch(_noop__WEBPACK_IMPORTED_MODULE_0__["default"]).finally(() => {
        deferred.notify = deferred.notifyAll = deferred.lastNotify = null;
        deferred.listeners.length = 0;
        if (deferred.cancel) {
            deferred.cancel = () => { };
        }
    });
    Object.assign(deferred, deferredHelper);
    return deferred;
}


/***/ }),

/***/ "./src/helpers/context.ts":
/*!********************************!*\
  !*** ./src/helpers/context.ts ***!
  \********************************/
/*! exports provided: isWebWorker, isServiceWorker, isWorker, getWindowClients, notifySomeone, notifyAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWebWorker", function() { return isWebWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServiceWorker", function() { return isServiceWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWorker", function() { return isWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowClients", function() { return getWindowClients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifySomeone", function() { return notifySomeone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyAll", function() { return notifyAll; });
/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */
const isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
const isServiceWorker = typeof ServiceWorkerGlobalScope !== 'undefined' && self instanceof ServiceWorkerGlobalScope;
const isWorker = isWebWorker || isServiceWorker;
// в SW может быть сразу две переменных TRUE, поэтому проверяю по последней
const getWindowClients = () => {
    return self
        .clients
        .matchAll({ includeUncontrolled: false, type: 'window' });
};
const notifyServiceWorker = (all, ...args) => {
    self
        .clients
        .matchAll({ includeUncontrolled: false, type: 'window' })
        .then((listeners) => {
        if (!listeners.length) {
            //console.trace('no listeners?', self, listeners);
            return;
        }
        listeners.slice(all ? 0 : -1).forEach(listener => {
            // @ts-ignore
            listener.postMessage(...args);
        });
    });
};
const notifyWorker = (...args) => {
    // @ts-ignore
    self.postMessage(...args);
};
const noop = () => { };
const notifySomeone = isServiceWorker ? notifyServiceWorker.bind(null, false) : (isWebWorker ? notifyWorker : noop);
const notifyAll = isServiceWorker ? notifyServiceWorker.bind(null, true) : (isWebWorker ? notifyWorker : noop);


/***/ }),

/***/ "./src/helpers/noop.ts":
/*!*****************************!*\
  !*** ./src/helpers/noop.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return noop; });
function noop() { }


/***/ }),

/***/ "./src/helpers/object.ts":
/*!*******************************!*\
  !*** ./src/helpers/object.ts ***!
  \*******************************/
/*! exports provided: copy, deepEqual, defineNotNumerableProperties, getObjectKeysAndSort, safeReplaceObject, safeReplaceArrayInObject, isObject, getDeepProperty, setDeepProperty, validateInitObject, safeAssign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepEqual", function() { return deepEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineNotNumerableProperties", function() { return defineNotNumerableProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectKeysAndSort", function() { return getObjectKeysAndSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeReplaceObject", function() { return safeReplaceObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeReplaceArrayInObject", function() { return safeReplaceArrayInObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeepProperty", function() { return getDeepProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDeepProperty", function() { return setDeepProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateInitObject", function() { return validateInitObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeAssign", function() { return safeAssign; });
/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 *
 * Originally from:
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */
function copy(obj) {
    //in case of premitives
    if (obj === null || typeof (obj) !== "object") {
        return obj;
    }
    //date objects should be 
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    //handle Array
    if (Array.isArray(obj)) {
        // @ts-ignore
        const clonedArr = obj.map(el => copy(el));
        return clonedArr;
    }
    //lastly, handle objects
    // @ts-ignore
    let clonedObj = new obj.constructor();
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            clonedObj[prop] = copy(obj[prop]);
        }
    }
    return clonedObj;
}
function deepEqual(x, y) {
    const ok = Object.keys, tx = typeof x, ty = typeof y;
    return x && y && tx === 'object' && tx === ty ? (ok(x).length === ok(y).length &&
        ok(x).every(key => deepEqual(x[key], y[key]))) : (x === y);
}
function defineNotNumerableProperties(obj, names) {
    //const perf = performance.now();
    const props = { writable: true, configurable: true };
    const out = {};
    names.forEach(name => {
        if (!obj.hasOwnProperty(name)) {
            out[name] = props;
        }
    });
    Object.defineProperties(obj, out);
    //console.log('defineNotNumerableProperties time:', performance.now() - perf);
}
function getObjectKeysAndSort(object, sort = 'asc') {
    if (!object)
        return [];
    const ids = object instanceof Map ? [...object.keys()] : Object.keys(object).map(i => +i);
    if (sort === 'asc')
        return ids.sort((a, b) => a - b);
    else
        return ids.sort((a, b) => b - a);
}
function safeReplaceObject(wasObject, newObject) {
    if (!wasObject) {
        return newObject;
    }
    for (var key in wasObject) {
        if (!newObject.hasOwnProperty(key)) {
            delete wasObject[key];
        }
    }
    for (var key in newObject) {
        //if (newObject.hasOwnProperty(key)) { // useless
        wasObject[key] = newObject[key];
        //}
    }
    return wasObject;
}
/**
 * Will be used for FILE_REFERENCE_EXPIRED
 * @param key
 * @param wasObject
 * @param newObject
 */
function safeReplaceArrayInObject(key, wasObject, newObject) {
    if ('byteLength' in newObject[key]) { // Uint8Array
        newObject[key] = [...newObject[key]];
    }
    if (wasObject && wasObject[key] !== newObject[key]) {
        wasObject[key].length = newObject[key].length;
        newObject[key].forEach((v, i) => {
            wasObject[key][i] = v;
        });
        /* wasObject[key].set(newObject[key]); */
        newObject[key] = wasObject[key];
    }
}
function isObject(object) {
    return typeof (object) === 'object' && object !== null;
}
function getDeepProperty(object, key) {
    const splitted = key.split('.');
    let o = object;
    splitted.forEach(key => {
        if (!key) {
            return;
        }
        // @ts-ignore
        o = o[key];
    });
    return o;
}
function setDeepProperty(object, key, value) {
    const splitted = key.split('.');
    getDeepProperty(object, splitted.slice(0, -1).join('.'))[splitted.pop()] = value;
}
function validateInitObject(initObject, currentObject, onReplace, previousKey) {
    for (const key in initObject) {
        if (typeof (currentObject[key]) !== typeof (initObject[key])) {
            currentObject[key] = copy(initObject[key]);
            onReplace && onReplace(previousKey || key);
        }
        else if (isObject(initObject[key])) {
            validateInitObject(initObject[key], currentObject[key], onReplace, previousKey || key);
        }
    }
}
function safeAssign(object, fromObject) {
    if (!fromObject)
        return;
    for (let i in fromObject) {
        if (fromObject[i] !== undefined) {
            object[i] = fromObject[i];
        }
    }
}


/***/ }),

/***/ "./src/helpers/schedulers/debounce.ts":
/*!********************************************!*\
  !*** ./src/helpers/schedulers/debounce.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
// * Jolly Cobra's schedulers
function debounce(fn, ms, shouldRunFirst = true, shouldRunLast = true) {
    let waitingTimeout;
    let waitingPromise, resolve, reject;
    let hadNewCall = false;
    return (...args) => {
        if (!waitingPromise)
            waitingPromise = new Promise((_resolve, _reject) => (resolve = _resolve, reject = _reject));
        if (waitingTimeout) {
            clearTimeout(waitingTimeout);
            hadNewCall = true;
            reject();
            waitingPromise = new Promise((_resolve, _reject) => (resolve = _resolve, reject = _reject));
        }
        else if (shouldRunFirst) {
            // @ts-ignore
            resolve(fn(...args));
            hadNewCall = false;
        }
        waitingTimeout = setTimeout(() => {
            // will run if should run last or first but with new call
            if (shouldRunLast && (!shouldRunFirst || hadNewCall)) {
                // @ts-ignore
                resolve(fn(...args));
            }
            waitingTimeout = waitingPromise = resolve = reject = undefined;
            hadNewCall = false;
        }, ms);
        waitingPromise.catch(() => { });
        return waitingPromise;
    };
}


/***/ }),

/***/ "./src/helpers/schedulers/pause.ts":
/*!*****************************************!*\
  !*** ./src/helpers/schedulers/pause.ts ***!
  \*****************************************/
/*! exports provided: pause */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pause", function() { return pause; });
const pause = (ms) => new Promise((resolve) => {
    setTimeout(resolve, ms);
});


/***/ }),

/***/ "./src/lib/cacheStorage.ts":
/*!*********************************!*\
  !*** ./src/lib/cacheStorage.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CacheStorageController; });
/* harmony import */ var _config_modes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/modes */ "./src/config/modes.ts");
/* harmony import */ var _helpers_blob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/blob */ "./src/helpers/blob.ts");
/* harmony import */ var _filemanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filemanager */ "./src/lib/filemanager.ts");
/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class CacheStorageController {
    //private log: ReturnType<typeof logger> = logger('CS');
    constructor(dbName) {
        this.dbName = dbName;
        this.useStorage = true;
        if (_config_modes__WEBPACK_IMPORTED_MODULE_0__["default"].test) {
            this.dbName += '_test';
        }
        if (CacheStorageController.STORAGES.length) {
            this.useStorage = CacheStorageController.STORAGES[0].useStorage;
        }
        this.openDatabase();
        CacheStorageController.STORAGES.push(this);
    }
    openDatabase() {
        var _a;
        return (_a = this.openDbPromise) !== null && _a !== void 0 ? _a : (this.openDbPromise = caches.open(this.dbName));
    }
    delete(entryName) {
        return this.timeoutOperation((cache) => cache.delete('/' + entryName));
    }
    deleteAll() {
        return caches.delete(this.dbName);
    }
    get(entryName) {
        return this.timeoutOperation((cache) => cache.match('/' + entryName));
    }
    save(entryName, response) {
        // return new Promise((resolve) => {}); // DEBUG
        return this.timeoutOperation((cache) => cache.put('/' + entryName, response));
    }
    getFile(fileName, method = 'blob') {
        /* if(method === 'blob') {
          return Promise.reject();
        } */
        // const str = `get fileName: ${fileName}`;
        // console.time(str);
        return this.get(fileName).then((response) => {
            if (!response) {
                //console.warn('getFile:', response, fileName);
                throw 'NO_ENTRY_FOUND';
            }
            const promise = response[method]();
            // promise.then(() => {
            //   console.timeEnd(str);
            // });
            return promise;
        });
    }
    saveFile(fileName, blob) {
        //return Promise.resolve(blobConstruct([blob]));
        if (!(blob instanceof Blob)) {
            blob = Object(_helpers_blob__WEBPACK_IMPORTED_MODULE_1__["blobConstruct"])(blob);
        }
        const response = new Response(blob, {
            headers: {
                'Content-Length': '' + blob.size
            }
        });
        return this.save(fileName, response).then(() => blob);
    }
    timeoutOperation(callback) {
        if (!this.useStorage) {
            return Promise.reject('STORAGE_OFFLINE');
        }
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let rejected = false;
            const timeout = setTimeout(() => {
                reject();
                //console.warn('CACHESTORAGE TIMEOUT');
                rejected = true;
            }, 15e3);
            try {
                const cache = yield this.openDatabase();
                if (!cache) {
                    this.useStorage = false;
                    this.openDbPromise = undefined;
                    throw 'no cache?';
                }
                const res = yield callback(cache);
                if (rejected)
                    return;
                resolve(res);
            }
            catch (err) {
                reject(err);
            }
            clearTimeout(timeout);
        }));
    }
    getFileWriter(fileName, mimeType) {
        const fakeWriter = _filemanager__WEBPACK_IMPORTED_MODULE_2__["default"].getFakeFileWriter(mimeType, (blob) => {
            return this.saveFile(fileName, blob).catch(() => blob);
        });
        return Promise.resolve(fakeWriter);
    }
    static toggleStorage(enabled) {
        return Promise.all(this.STORAGES.map(storage => {
            storage.useStorage = enabled;
            if (!enabled) {
                return storage.deleteAll();
            }
        }));
    }
}
CacheStorageController.STORAGES = [];
//const cacheStorage = new CacheStorageController(); 
//MOUNT_CLASS_TO.cacheStorage = cacheStorage;
//export default cacheStorage;


/***/ }),

/***/ "./src/lib/filemanager.ts":
/*!********************************!*\
  !*** ./src/lib/filemanager.ts ***!
  \********************************/
/*! exports provided: FileManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileManager", function() { return FileManager; });
/* harmony import */ var _helpers_blob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/blob */ "./src/helpers/blob.ts");
/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 *
 * Originally from:
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class FileManager {
    constructor() {
        this.blobSupported = true;
        try {
            Object(_helpers_blob__WEBPACK_IMPORTED_MODULE_0__["blobConstruct"])([], '');
        }
        catch (e) {
            this.blobSupported = false;
        }
    }
    isAvailable() {
        return this.blobSupported;
    }
    write(fileWriter, bytes) {
        if (bytes instanceof Blob) { // is file bytes
            return Object(_helpers_blob__WEBPACK_IMPORTED_MODULE_0__["readBlobAsUint8Array"])(bytes).then(arr => {
                return fileWriter.write(arr);
            });
        }
        else {
            return fileWriter.write(bytes);
        }
    }
    getFakeFileWriter(mimeType, saveFileCallback) {
        const blobParts = [];
        const fakeFileWriter = {
            write: (part) => __awaiter(this, void 0, void 0, function* () {
                if (!this.blobSupported) {
                    throw false;
                }
                blobParts.push(part);
            }),
            truncate: () => {
                blobParts.length = 0;
            },
            finalize: (saveToStorage = true) => {
                const blob = Object(_helpers_blob__WEBPACK_IMPORTED_MODULE_0__["blobConstruct"])(blobParts, mimeType);
                if (saveToStorage && saveFileCallback) {
                    saveFileCallback(blob);
                }
                return blob;
            }
        };
        return fakeFileWriter;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (new FileManager());


/***/ }),

/***/ "./src/lib/idb.ts":
/*!************************!*\
  !*** ./src/lib/idb.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IDBStorage; });
/* harmony import */ var _config_modes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/modes */ "./src/config/modes.ts");
/* harmony import */ var _helpers_blob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/blob */ "./src/helpers/blob.ts");
/* harmony import */ var _helpers_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/object */ "./src/helpers/object.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "./src/lib/logger.ts");
/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 *
 * Originally from:
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */




const DEBUG = false;
class IDBStorage {
    constructor(db, storeName) {
        this.storageIsAvailable = true;
        Object(_helpers_object__WEBPACK_IMPORTED_MODULE_2__["safeAssign"])(this, db);
        if (_config_modes__WEBPACK_IMPORTED_MODULE_0__["default"].test) {
            this.name += '_test';
        }
        this.storeName = storeName;
        this.log = Object(_logger__WEBPACK_IMPORTED_MODULE_3__["logger"])('IDB-' + this.storeName);
        this.openDatabase(true);
        IDBStorage.STORAGES.push(this);
    }
    static closeDatabases(preserve) {
        this.STORAGES.forEach(storage => {
            if (preserve && preserve === storage) {
                return;
            }
            const db = storage.db;
            if (db) {
                db.onclose = () => { };
                db.close();
            }
        });
    }
    /**
     * ! WARNING ! function requires at least one opened connection
     */
    /* public static clearObjectStores() {
      const storage = this.STORAGES[0];
      this.closeDatabases(storage);
  
      const names = Array.from(storage.db.objectStoreNames);
      const promises = names.map(name => storage.clear(name));
      return Promise.all(promises);
    } */
    /* public static deleteDatabase() {
      this.closeDatabases();
  
      const storages = this.STORAGES;
      const dbNames = Array.from(new Set(storages.map(storage => storage.name)));
      const promises = dbNames.map(dbName => {
        return new Promise<void>((resolve, reject) => {
          const deleteRequest = indexedDB.deleteDatabase(dbName);
    
          deleteRequest.onerror = () => {
            reject();
          };
    
          deleteRequest.onsuccess = () => {
            resolve();
          };
        });
      });
  
      return Promise.all(promises);
    } */
    isAvailable() {
        return this.storageIsAvailable;
    }
    openDatabase(createNew = false) {
        if (this.openDbPromise && !createNew) {
            return this.openDbPromise;
        }
        const createObjectStore = (db, store) => {
            var _a;
            const os = db.createObjectStore(store.name);
            if ((_a = store.indexes) === null || _a === void 0 ? void 0 : _a.length) {
                for (const index of store.indexes) {
                    os.createIndex(index.indexName, index.keyPath, index.objectParameters);
                }
            }
        };
        try {
            var request = indexedDB.open(this.name, this.version);
            if (!request) {
                return Promise.reject();
            }
        }
        catch (error) {
            this.log.error('error opening db', error.message);
            this.storageIsAvailable = false;
            return Promise.reject(error);
        }
        let finished = false;
        setTimeout(() => {
            if (!finished) {
                request.onerror({ type: 'IDB_CREATE_TIMEOUT' });
            }
        }, 3000);
        return this.openDbPromise = new Promise((resolve, reject) => {
            request.onsuccess = (event) => {
                finished = true;
                const db = request.result;
                let calledNew = false;
                this.log('Opened');
                db.onerror = (error) => {
                    this.storageIsAvailable = false;
                    this.log.error('Error creating/accessing IndexedDB database', error);
                    reject(error);
                };
                db.onclose = (e) => {
                    this.log.error('closed:', e);
                    !calledNew && this.openDatabase();
                };
                db.onabort = (e) => {
                    this.log.error('abort:', e);
                    const transaction = e.target;
                    this.openDatabase(calledNew = true);
                    if (transaction.onerror) {
                        transaction.onerror(e);
                    }
                    db.close();
                };
                db.onversionchange = (e) => {
                    this.log.error('onversionchange, lol?');
                };
                resolve(this.db = db);
            };
            request.onerror = (event) => {
                finished = true;
                this.storageIsAvailable = false;
                this.log.error('Error creating/accessing IndexedDB database', event);
                reject(event);
            };
            request.onupgradeneeded = (event) => {
                finished = true;
                this.log.warn('performing idb upgrade from', event.oldVersion, 'to', event.newVersion);
                // @ts-ignore
                var db = event.target.result;
                this.stores.forEach((store) => {
                    /* if(db.objectStoreNames.contains(store.name)) {
                      //if(event.oldVersion === 1) {
                        db.deleteObjectStore(store.name);
                      //}
                    } */
                    if (!db.objectStoreNames.contains(store.name)) {
                        createObjectStore(db, store);
                    }
                });
            };
        });
    }
    delete(entryName) {
        //return Promise.resolve();
        if (!Array.isArray(entryName)) {
            entryName = [].concat(entryName);
        }
        return this.getObjectStore('readwrite', (objectStore) => {
            return entryName.map((entryName) => objectStore.delete(entryName));
        }, DEBUG ? 'delete: ' + entryName.join(', ') : '');
    }
    clear(storeName) {
        return this.getObjectStore('readwrite', (objectStore) => objectStore.clear(), DEBUG ? 'clear' : '', storeName);
    }
    save(entryName, value) {
        // const handleError = (error: Error) => {
        //   this.log.error('save: transaction error:', entryName, value, db, error, error && error.name);
        //   if((!error || error.name === 'InvalidStateError')/*  && false */) {
        //     setTimeout(() => {
        //       this.save(entryName, value);
        //     }, 2e3);
        //   } else {
        //     //console.error('IndexedDB saveFile transaction error:', error, error && error.name);
        //   }
        // };
        if (!Array.isArray(entryName)) {
            entryName = [].concat(entryName);
            value = [].concat(value);
        }
        return this.getObjectStore('readwrite', (objectStore) => {
            return entryName.map((entryName, idx) => objectStore.put(value[idx], entryName));
        }, DEBUG ? 'save: ' + entryName.join(', ') : '');
    }
    saveFile(fileName, blob) {
        //return Promise.resolve(blobConstruct([blob]));
        if (!(blob instanceof Blob)) {
            blob = Object(_helpers_blob__WEBPACK_IMPORTED_MODULE_1__["blobConstruct"])([blob]);
        }
        return this.save(fileName, blob);
    }
    get(entryName) {
        //return Promise.reject();
        if (!Array.isArray(entryName)) {
            entryName = [].concat(entryName);
        }
        return this.getObjectStore('readonly', (objectStore) => {
            return entryName.map((entryName) => objectStore.get(entryName));
        }, DEBUG ? 'get: ' + entryName.join(', ') : '');
    }
    getObjectStore(mode, objectStore, log, storeName = this.storeName) {
        let perf;
        if (log) {
            perf = performance.now();
            this.log(log + ': start');
        }
        return this.openDatabase().then((db) => {
            return new Promise((resolve, reject) => {
                /* if(mode === 'readwrite') {
                  return;
                } */
                const transaction = db.transaction([storeName], mode);
                transaction.onerror = (e) => {
                    clearTimeout(timeout);
                    reject(transaction.error);
                };
                transaction.oncomplete = (e) => {
                    clearTimeout(timeout);
                    if (log) {
                        this.log(log + ': end', performance.now() - perf);
                    }
                    const results = r.map(r => r.result);
                    resolve(isArray ? results : results[0]);
                };
                const timeout = setTimeout(() => {
                    this.log.error('transaction not finished', transaction);
                }, 10000);
                /* transaction.addEventListener('abort', (e) => {
                  //handleError();
                  this.log.error('IndexedDB: transaction abort!', transaction.error);
                }); */
                const requests = objectStore(transaction.objectStore(storeName));
                const isArray = Array.isArray(requests);
                const r = isArray ? requests : [].concat(requests);
                // const length = r.length;
                // /* let left = length;
                // const onRequestFinished = (error?: Error) => {
                //   if(!--left) {
                //     resolve(result);
                //     clearTimeout(timeout);
                //   }
                // }; */
                // for(let i = 0; i < length; ++i) {
                //   const request = r[i];
                //   request.onsuccess = () => {
                //     onRequestFinished();
                //   };
                //   request.onerror = (e) => {
                //     onRequestFinished(transaction.error);
                //   };
                // }
            });
        });
    }
    getAll() {
        return this.getObjectStore('readonly', (objectStore) => objectStore.getAll(), DEBUG ? 'getAll' : '');
    }
}
IDBStorage.STORAGES = [];


/***/ }),

/***/ "./src/lib/logger.ts":
/*!***************************!*\
  !*** ./src/lib/logger.ts ***!
  \***************************/
/*! exports provided: LogTypes, LOG_LEVELS, logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogTypes", function() { return LogTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_LEVELS", function() { return LOG_LEVELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony import */ var _config_debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/debug */ "./src/config/debug.ts");
/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

var LogTypes;
(function (LogTypes) {
    LogTypes[LogTypes["None"] = 0] = "None";
    LogTypes[LogTypes["Error"] = 1] = "Error";
    LogTypes[LogTypes["Warn"] = 2] = "Warn";
    LogTypes[LogTypes["Log"] = 4] = "Log";
    LogTypes[LogTypes["Debug"] = 8] = "Debug";
})(LogTypes || (LogTypes = {}));
;
const LOG_LEVELS = [LogTypes.None, LogTypes.Error, LogTypes.Warn, LogTypes.Log, LogTypes.Debug];
const _logTimer = Date.now();
function dT() {
    return '[' + ((Date.now() - _logTimer) / 1000).toFixed(3) + ']';
}
function logger(prefix, type = LogTypes.Log | LogTypes.Warn | LogTypes.Error, ignoreDebugReset = false) {
    if (!_config_debug__WEBPACK_IMPORTED_MODULE_0__["default"] && !ignoreDebugReset /*  || true */) {
        type = LogTypes.Error;
    }
    //level = LogLevels.log | LogLevels.warn | LogLevels.error | LogLevels.debug
    function Log(...args) {
        return type & LogTypes.Log && console.log(dT(), prefix, ...args);
    }
    Log.warn = function (...args) {
        return type & LogTypes.Warn && console.warn(dT(), prefix, ...args);
    };
    Log.info = function (...args) {
        return type & LogTypes.Log && console.info(dT(), prefix, ...args);
    };
    Log.error = function (...args) {
        return type & LogTypes.Error && console.error(dT(), prefix, ...args);
    };
    Log.trace = function (...args) {
        return type & LogTypes.Log && console.trace(dT(), prefix, ...args);
    };
    /* Log.debug = function(...args: any[]) {
      return level & LogLevels.debug && console.log(dT(), prefix, ...args);
    }; */
    Log.debug = function (...args) {
        return type & LogTypes.Debug && console.debug(dT(), prefix, ...args);
    };
    Log.setPrefix = function (_prefix) {
        prefix = '[' + _prefix + ']:';
    };
    Log.setPrefix(prefix);
    Log.setLevel = function (level) {
        type = LOG_LEVELS.slice(0, level + 1).reduce((acc, v) => acc | v, 0);
    };
    return Log;
}
;


/***/ }),

/***/ "./src/lib/serviceWorker/cache.ts":
/*!****************************************!*\
  !*** ./src/lib/serviceWorker/cache.ts ***!
  \****************************************/
/*! exports provided: CACHE_ASSETS_NAME, requestCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CACHE_ASSETS_NAME", function() { return CACHE_ASSETS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestCache", function() { return requestCache; });
/* harmony import */ var _helpers_schedulers_pause__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/schedulers/pause */ "./src/helpers/schedulers/pause.ts");
/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const ctx = self;
const CACHE_ASSETS_NAME = 'cachedAssets';
function isCorrectResponse(response) {
    return response.ok && response.status === 200;
}
function timeoutRace(promise) {
    return Promise.race([
        promise,
        Object(_helpers_schedulers_pause__WEBPACK_IMPORTED_MODULE_0__["pause"])(10000).then(() => Promise.reject())
    ]);
}
function requestCache(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const cache = await ctx.caches.open(CACHE_ASSETS_NAME);
            const cache = yield timeoutRace(ctx.caches.open(CACHE_ASSETS_NAME));
            const file = yield timeoutRace(cache.match(event.request, { ignoreVary: true }));
            if (file && isCorrectResponse(file)) {
                return file;
            }
            const headers = { 'Vary': '*' };
            let response = yield fetch(event.request, { headers });
            if (isCorrectResponse(response)) {
                cache.put(event.request, response.clone());
            }
            else if (response.status === 304) { // possible fix for 304 in Safari
                const url = event.request.url.replace(/\?.+$/, '') + '?' + (Math.random() * 100000 | 0);
                response = yield fetch(url, { headers });
                if (isCorrectResponse(response)) {
                    cache.put(event.request, response.clone());
                }
            }
            return response;
        }
        catch (err) {
            return fetch(event.request);
        }
    });
}


/***/ }),

/***/ "./src/lib/serviceWorker/index.service.ts":
/*!************************************************!*\
  !*** ./src/lib/serviceWorker/index.service.ts ***!
  \************************************************/
/*! exports provided: log, deferredPromises */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deferredPromises", function() { return deferredPromises; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logger */ "./src/lib/logger.ts");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache */ "./src/lib/serviceWorker/cache.ts");
/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stream */ "./src/lib/serviceWorker/stream.ts");
/* harmony import */ var _push__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./push */ "./src/lib/serviceWorker/push.ts");
/* harmony import */ var _cacheStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cacheStorage */ "./src/lib/cacheStorage.ts");
/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */





const log = Object(_logger__WEBPACK_IMPORTED_MODULE_0__["logger"])('SW', _logger__WEBPACK_IMPORTED_MODULE_0__["LogTypes"].Error | _logger__WEBPACK_IMPORTED_MODULE_0__["LogTypes"].Debug | _logger__WEBPACK_IMPORTED_MODULE_0__["LogTypes"].Log | _logger__WEBPACK_IMPORTED_MODULE_0__["LogTypes"].Warn);
const ctx = self;
const deferredPromises = new Map();
;
;
;
;
;
const taskListeners = {
    notifications_clear: () => {
        Object(_push__WEBPACK_IMPORTED_MODULE_3__["closeAllNotifications"])();
    },
    ping: (task, event) => {
        Object(_push__WEBPACK_IMPORTED_MODULE_3__["onPing"])(task, event);
    },
    requestFilePart: (task, e) => {
        const windowClient = e.source;
        const promises = deferredPromises.get(windowClient.id);
        if (!promises) {
            return;
        }
        const promise = promises[task.id];
        if (promise) {
            if (task.error) {
                promise.reject(task.error);
            }
            else {
                promise.resolve(task.payload);
            }
            delete promises[task.id];
        }
    },
    toggleStorage: (task) => {
        _cacheStorage__WEBPACK_IMPORTED_MODULE_4__["default"].toggleStorage(task.payload);
    }
};
ctx.addEventListener('message', (e) => {
    const task = e.data;
    const callback = taskListeners[task.type];
    if (callback) {
        callback(task, e);
    }
});
//const cacheStorage = new CacheStorageController('cachedAssets');
/* let taskId = 0;

export function getTaskId() {
  return taskId;
}

export function incrementTaskId() {
  return taskId++;
} */
const onFetch = (event) => {
    if (event.request.url.indexOf(location.origin + '/') === 0 && event.request.url.match(/\.(js|css|jpe?g|json|wasm|png|mp3|svg|tgs|ico|woff2?|ttf|webmanifest?)(?:\?.*)?$/)) {
        return event.respondWith(Object(_cache__WEBPACK_IMPORTED_MODULE_1__["requestCache"])(event));
    }
    try {
        const [, url, scope, params] = /http[:s]+\/\/.*?(\/(.*?)(?:$|\/(.*)$))/.exec(event.request.url) || [];
        //log.debug('[fetch]:', event);
        switch (scope) {
            case 'stream': {
                Object(_stream__WEBPACK_IMPORTED_MODULE_2__["default"])(event, params);
                break;
            }
        }
    }
    catch (err) {
        event.respondWith(new Response('', {
            status: 500,
            statusText: 'Internal Server Error',
        }));
    }
};
const onChangeState = () => {
    ctx.onfetch = onFetch;
};
ctx.addEventListener('install', (event) => {
    log('installing');
    event.waitUntil(ctx.skipWaiting()); // Activate worker immediately
});
ctx.addEventListener('activate', (event) => {
    log('activating', ctx);
    event.waitUntil(ctx.caches.delete(_cache__WEBPACK_IMPORTED_MODULE_1__["CACHE_ASSETS_NAME"]));
    event.waitUntil(ctx.clients.claim());
});
ctx.onerror = (error) => {
    log.error('error:', error);
};
ctx.onunhandledrejection = (error) => {
    log.error('onunhandledrejection:', error);
};
ctx.onoffline = ctx.ononline = onChangeState;
onChangeState();


/***/ }),

/***/ "./src/lib/serviceWorker/push.ts":
/*!***************************************!*\
  !*** ./src/lib/serviceWorker/push.ts ***!
  \***************************************/
/*! exports provided: closeAllNotifications, onPing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeAllNotifications", function() { return closeAllNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onPing", function() { return onPing; });
/* harmony import */ var _config_databases_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/databases/state */ "./src/config/databases/state.ts");
/* harmony import */ var _environment_userAgent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environment/userAgent */ "./src/environment/userAgent.ts");
/* harmony import */ var _idb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../idb */ "./src/lib/idb.ts");
/* harmony import */ var _index_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.service */ "./src/lib/serviceWorker/index.service.ts");
/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 *
 * Originally from:
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const ctx = self;
const defaultBaseUrl = location.protocol + '//' + location.hostname + location.pathname.split('/').slice(0, -1).join('/') + '/';
class SomethingGetter {
    constructor(db, storeName, defaults) {
        this.defaults = defaults;
        this.cache = {};
        this.storage = new _idb__WEBPACK_IMPORTED_MODULE_2__["default"](db, storeName);
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.cache[key] !== undefined) {
                return this.cache[key];
            }
            let value;
            try {
                value = yield this.storage.get(key);
            }
            catch (err) {
            }
            if (this.cache[key] !== undefined) {
                return this.cache[key];
            }
            if (value === undefined) {
                const callback = this.defaults[key];
                value = typeof (callback) === 'function' ? callback() : callback;
            }
            return this.cache[key] = value;
        });
    }
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            this.cache[key] = value;
            try {
                this.storage.save(key, value);
            }
            catch (err) {
            }
        });
    }
}
const getter = new SomethingGetter(_config_databases_state__WEBPACK_IMPORTED_MODULE_0__["default"], 'session', {
    push_mute_until: 0,
    push_last_alive: 0,
    push_lang: {},
    push_settings: {}
});
ctx.addEventListener('push', (event) => {
    const obj = event.data.json();
    Object(_index_service__WEBPACK_IMPORTED_MODULE_3__["log"])('push', obj);
    let hasActiveWindows = false;
    const checksPromise = Promise.all([
        getter.get('push_mute_until'),
        getter.get('push_last_alive'),
        ctx.clients.matchAll({ type: 'window' })
    ]).then((result) => {
        const [muteUntil, lastAliveTime, clientList] = result;
        Object(_index_service__WEBPACK_IMPORTED_MODULE_3__["log"])('matched clients', clientList);
        hasActiveWindows = clientList.length > 0;
        if (hasActiveWindows) {
            throw 'Supress notification because some instance is alive';
        }
        const nowTime = Date.now();
        if (userInvisibleIsSupported() &&
            muteUntil &&
            nowTime < muteUntil) {
            throw `Supress notification because mute for ${Math.ceil((muteUntil - nowTime) / 60000)} min`;
        }
        if (!obj.badge) {
            throw 'No badge?';
        }
    });
    checksPromise.catch(reason => {
        Object(_index_service__WEBPACK_IMPORTED_MODULE_3__["log"])(reason);
    });
    const notificationPromise = checksPromise.then(() => {
        return Promise.all([getter.get('push_settings'), getter.get('push_lang')]);
    }).then((result) => {
        return fireNotification(obj, result[0], result[1]);
    });
    const closePromise = notificationPromise.catch(() => {
        Object(_index_service__WEBPACK_IMPORTED_MODULE_3__["log"])('Closing all notifications on push', hasActiveWindows);
        if (userInvisibleIsSupported() || hasActiveWindows) {
            return closeAllNotifications();
        }
        return ctx.registration.showNotification('Telegram', {
            tag: 'unknown_peer'
        }).then(() => {
            if (hasActiveWindows) {
                return closeAllNotifications();
            }
            setTimeout(() => closeAllNotifications(), hasActiveWindows ? 0 : 100);
        }).catch((error) => {
            _index_service__WEBPACK_IMPORTED_MODULE_3__["log"].error('Show notification error', error);
        });
    });
    event.waitUntil(closePromise);
});
ctx.addEventListener('notificationclick', (event) => {
    const notification = event.notification;
    Object(_index_service__WEBPACK_IMPORTED_MODULE_3__["log"])('On notification click: ', notification.tag);
    notification.close();
    const action = event.action;
    if (action === 'mute1d' && userInvisibleIsSupported()) {
        Object(_index_service__WEBPACK_IMPORTED_MODULE_3__["log"])('[SW] mute for 1d');
        getter.set('push_mute_until', Date.now() + 86400e3);
        return;
    }
    const data = notification.data;
    if (!data) {
        return;
    }
    const promise = ctx.clients.matchAll({
        type: 'window'
    }).then((clientList) => {
        data.action = action;
        pendingNotification = { type: 'push_click', payload: data };
        for (let i = 0; i < clientList.length; i++) {
            const client = clientList[i];
            if ('focus' in client) {
                client.focus();
                client.postMessage(pendingNotification);
                pendingNotification = undefined;
                return;
            }
        }
        if (ctx.clients.openWindow) {
            return getter.get('push_settings').then((settings) => {
                return ctx.clients.openWindow(settings.baseUrl || defaultBaseUrl);
            });
        }
    }).catch((error) => {
        _index_service__WEBPACK_IMPORTED_MODULE_3__["log"].error('Clients.matchAll error', error);
    });
    event.waitUntil(promise);
});
ctx.addEventListener('notificationclose', onCloseNotification);
let notifications = new Set();
let pendingNotification;
function pushToNotifications(notification) {
    if (!notifications.has(notification)) {
        notifications.add(notification);
        // @ts-ignore
        notification.onclose = onCloseNotification;
    }
}
function onCloseNotification(event) {
    removeFromNotifications(event.notification);
}
function removeFromNotifications(notification) {
    notifications.delete(notification);
}
function closeAllNotifications() {
    for (const notification of notifications) {
        try {
            notification.close();
        }
        catch (e) { }
    }
    let promise;
    if ('getNotifications' in ctx.registration) {
        promise = ctx.registration.getNotifications({}).then((notifications) => {
            for (let i = 0, len = notifications.length; i < len; ++i) {
                try {
                    notifications[i].close();
                }
                catch (e) { }
            }
        }).catch((error) => {
            _index_service__WEBPACK_IMPORTED_MODULE_3__["log"].error('Offline register SW error', error);
        });
    }
    else {
        promise = Promise.resolve();
    }
    notifications.clear();
    return promise;
}
function userInvisibleIsSupported() {
    return _environment_userAgent__WEBPACK_IMPORTED_MODULE_1__["IS_FIREFOX"];
}
function fireNotification(obj, settings, lang) {
    const icon = 'assets/img/logo_filled_rounded.png';
    let title = obj.title || 'Telegram';
    let body = obj.description || '';
    let peerId;
    if (obj.custom) {
        if (obj.custom.channel_id) {
            peerId = '' + -obj.custom.channel_id;
        }
        else if (obj.custom.chat_id) {
            peerId = '' + -obj.custom.chat_id;
        }
        else {
            peerId = obj.custom.from_id || '';
        }
    }
    obj.custom.peerId = '' + peerId;
    let tag = 'peer' + peerId;
    if (settings && settings.nopreview) {
        title = 'Telegram';
        body = lang.push_message_nopreview || 'You have a new message';
        tag = 'unknown_peer';
    }
    Object(_index_service__WEBPACK_IMPORTED_MODULE_3__["log"])('show notify', title, body, icon, obj);
    const actions = [{
            action: 'mute1d',
            title: lang.push_action_mute1d || 'Mute for 24H'
        } /* , {
          action: 'push_settings',
          title: lang.push_action_settings || 'Settings'
        } */
    ];
    const notificationPromise = ctx.registration.showNotification(title, {
        body,
        icon,
        tag,
        data: obj,
        actions
    });
    return notificationPromise.then((event) => {
        // @ts-ignore
        if (event && event.notification) {
            // @ts-ignore
            pushToNotifications(event.notification);
        }
    }).catch((error) => {
        _index_service__WEBPACK_IMPORTED_MODULE_3__["log"].error('Show notification promise', error);
    });
}
function onPing(task, event) {
    const client = event.ports && event.ports[0] || event.source;
    const payload = task.payload;
    if (payload.localNotifications) {
        getter.set('push_last_alive', Date.now());
    }
    if (pendingNotification &&
        client &&
        'postMessage' in client) {
        client.postMessage(pendingNotification, []);
        pendingNotification = undefined;
    }
    if (payload.lang) {
        getter.set('push_lang', payload.lang);
    }
    if (payload.settings) {
        getter.set('push_settings', payload.settings);
    }
}


/***/ }),

/***/ "./src/lib/serviceWorker/stream.ts":
/*!*****************************************!*\
  !*** ./src/lib/serviceWorker/stream.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onStreamFetch; });
/* harmony import */ var _helpers_blob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/blob */ "./src/helpers/blob.ts");
/* harmony import */ var _helpers_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/cancellablePromise */ "./src/helpers/cancellablePromise.ts");
/* harmony import */ var _helpers_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/context */ "./src/helpers/context.ts");
/* harmony import */ var _helpers_schedulers_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/schedulers/debounce */ "./src/helpers/schedulers/debounce.ts");
/* harmony import */ var _cacheStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cacheStorage */ "./src/lib/cacheStorage.ts");
/* harmony import */ var _index_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.service */ "./src/lib/serviceWorker/index.service.ts");
/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeout */ "./src/lib/serviceWorker/timeout.ts");
/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const cacheStorage = new _cacheStorage__WEBPACK_IMPORTED_MODULE_4__["default"]('cachedStreamChunks');
const CHUNK_TTL = 86400;
const CHUNK_CACHED_TIME_HEADER = 'Time-Cached';
const clearOldChunks = () => {
    return cacheStorage.timeoutOperation((cache) => {
        return cache.keys().then(requests => {
            const filtered = new Map();
            const timestamp = Date.now() / 1000 | 0;
            for (const request of requests) {
                const match = request.url.match(/\/(\d+?)\?/);
                if (match && !filtered.has(match[1])) {
                    filtered.set(match[1], request);
                }
            }
            const promises = [];
            for (const [id, request] of filtered) {
                const promise = cache.match(request).then((response) => {
                    if ((+response.headers.get(CHUNK_CACHED_TIME_HEADER) + CHUNK_TTL) <= timestamp) {
                        Object(_index_service__WEBPACK_IMPORTED_MODULE_5__["log"])('will delete stream chunk:', id);
                        return cache.delete(request, { ignoreSearch: true, ignoreVary: true });
                    }
                });
                promises.push(promise);
            }
            return Promise.all(promises);
        });
    });
};
setInterval(clearOldChunks, 1800e3);
setInterval(() => {
    Object(_helpers_context__WEBPACK_IMPORTED_MODULE_2__["getWindowClients"])().then((clients) => {
        for (const [clientId, promises] of _index_service__WEBPACK_IMPORTED_MODULE_5__["deferredPromises"]) {
            if (!clients.find(client => client.id === clientId)) {
                for (const taskId in promises) {
                    const promise = promises[taskId];
                    promise.reject();
                }
                _index_service__WEBPACK_IMPORTED_MODULE_5__["deferredPromises"].delete(clientId);
            }
        }
    });
}, 120e3);
const streams = new Map();
class Stream {
    constructor(info) {
        this.info = info;
        this.loadedOffsets = new Set();
        this.destroy = () => {
            streams.delete(this.id);
        };
        this.id = Stream.getId(info);
        streams.set(this.id, this);
        // ! если грузить очень большое видео чанками по 512Кб в мобильном Safari, то стрим не запустится
        this.limitPart = info.size > (75 * 1024 * 1024) ? STREAM_CHUNK_UPPER_LIMIT : STREAM_CHUNK_MIDDLE_LIMIT;
        this.destroyDebounced = Object(_helpers_schedulers_debounce__WEBPACK_IMPORTED_MODULE_3__["default"])(this.destroy, 150000, false, true);
    }
    requestFilePartFromWorker(alignedOffset, limit, fromPreload = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = {
                type: 'requestFilePart',
                payload: [this.info.dcId, this.info.location, alignedOffset, limit]
            };
            const taskId = JSON.stringify(task);
            task.id = taskId;
            const windowClient = yield Object(_helpers_context__WEBPACK_IMPORTED_MODULE_2__["getWindowClients"])().then((clients) => {
                if (!clients.length) {
                    return;
                }
                return clients.find(client => _index_service__WEBPACK_IMPORTED_MODULE_5__["deferredPromises"].has(client.id)) || clients[0];
            });
            if (!windowClient) {
                throw new Error('no window');
            }
            let promises = _index_service__WEBPACK_IMPORTED_MODULE_5__["deferredPromises"].get(windowClient.id);
            if (!promises) {
                _index_service__WEBPACK_IMPORTED_MODULE_5__["deferredPromises"].set(windowClient.id, promises = {});
            }
            let deferred = promises[taskId];
            if (deferred) {
                return deferred.then(uploadFile => uploadFile.bytes);
            }
            windowClient.postMessage(task);
            this.loadedOffsets.add(alignedOffset);
            deferred = promises[taskId] = Object(_helpers_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__["deferredPromise"])();
            const bytesPromise = deferred.then(uploadFile => uploadFile.bytes);
            this.saveChunkToCache(bytesPromise, alignedOffset, limit);
            !fromPreload && this.preloadChunks(alignedOffset, alignedOffset + (this.limitPart * 15));
            return bytesPromise;
        });
    }
    requestFilePartFromCache(alignedOffset, limit, fromPreload) {
        const key = this.getChunkKey(alignedOffset, limit);
        return cacheStorage.getFile(key).then((blob) => {
            return fromPreload ? new Uint8Array() : Object(_helpers_blob__WEBPACK_IMPORTED_MODULE_0__["readBlobAsUint8Array"])(blob);
        }, (error) => {
            if (error === 'NO_ENTRY_FOUND') {
                return;
            }
        });
    }
    requestFilePart(alignedOffset, limit, fromPreload) {
        return this.requestFilePartFromCache(alignedOffset, limit, fromPreload).then(bytes => {
            return bytes || this.requestFilePartFromWorker(alignedOffset, limit, fromPreload);
        });
    }
    saveChunkToCache(deferred, alignedOffset, limit) {
        return deferred.then(bytes => {
            const key = this.getChunkKey(alignedOffset, limit);
            const response = new Response(bytes, {
                headers: {
                    'Content-Length': '' + bytes.length,
                    'Content-Type': 'application/octet-stream',
                    [CHUNK_CACHED_TIME_HEADER]: '' + (Date.now() / 1000 | 0)
                }
            });
            return cacheStorage.save(key, response);
        });
    }
    preloadChunk(offset) {
        if (this.loadedOffsets.has(offset)) {
            return;
        }
        this.loadedOffsets.add(offset);
        this.requestFilePart(offset, this.limitPart, true);
    }
    preloadChunks(offset, end) {
        if (end > this.info.size) {
            end = this.info.size;
        }
        if (!offset) { // load last chunk for bounds
            this.preloadChunk(alignOffset(offset, this.limitPart));
        }
        else { // don't preload next chunks before the start
            for (; offset < end; offset += this.limitPart) {
                this.preloadChunk(offset);
            }
        }
    }
    requestRange(range) {
        this.destroyDebounced();
        const possibleResponse = responseForSafariFirstRange(range, this.info.mimeType, this.info.size);
        if (possibleResponse) {
            return possibleResponse;
        }
        let [offset, end] = range;
        /* if(info.size > limitPart && isSafari && offset === limitPart) {
          //end = info.size - 1;
          //offset = info.size - 1 - limitPart;
          offset = info.size - (info.size % limitPart);
        } */
        const limit = end && end < this.limitPart ? alignLimit(end - offset + 1) : this.limitPart;
        const alignedOffset = alignOffset(offset, limit);
        if (!end) {
            end = Math.min(offset + limit, this.info.size - 1);
        }
        return this.requestFilePart(alignedOffset, limit).then(ab => {
            //log.debug('[stream] requestFilePart result:', result);
            // if(isSafari) {
            if (offset !== alignedOffset || end !== (alignedOffset + limit)) {
                ab = ab.slice(offset - alignedOffset, end - alignedOffset + 1);
            }
            const headers = {
                'Accept-Ranges': 'bytes',
                'Content-Range': `bytes ${offset}-${offset + ab.byteLength - 1}/${this.info.size || '*'}`,
                'Content-Length': `${ab.byteLength}`
            };
            if (this.info.mimeType) {
                headers['Content-Type'] = this.info.mimeType;
            }
            // simulate slow connection
            //setTimeout(() => {
            return new Response(ab, {
                status: 206,
                statusText: 'Partial Content',
                headers,
            });
            //}, 2.5e3);
        });
    }
    getChunkKey(alignedOffset, limit) {
        return this.id + '?offset=' + alignedOffset + '&limit=' + limit;
    }
    static get(info) {
        var _a;
        return (_a = streams.get(this.getId(info))) !== null && _a !== void 0 ? _a : new Stream(info);
    }
    static getId(info) {
        return info.location.id;
    }
}
function onStreamFetch(event, params) {
    const range = parseRange(event.request.headers.get('Range'));
    const info = JSON.parse(decodeURIComponent(params));
    const stream = Stream.get(info);
    //log.debug('[stream]', url, offset, end);
    event.respondWith(Promise.race([
        Object(_timeout__WEBPACK_IMPORTED_MODULE_6__["default"])(45 * 1000),
        stream.requestRange(range)
    ]));
}
function responseForSafariFirstRange(range, mimeType, size) {
    if (range[0] === 0 && range[1] === 1) {
        return new Response(new Uint8Array(2).buffer, {
            status: 206,
            statusText: 'Partial Content',
            headers: {
                'Accept-Ranges': 'bytes',
                'Content-Range': `bytes 0-1/${size || '*'}`,
                'Content-Length': '2',
                'Content-Type': mimeType || 'video/mp4',
            },
        });
    }
    return null;
}
/* const STREAM_CHUNK_UPPER_LIMIT = 256 * 1024;
const SMALLEST_CHUNK_LIMIT = 256 * 4; */
/* const STREAM_CHUNK_UPPER_LIMIT = 1024 * 1024;
const SMALLEST_CHUNK_LIMIT = 1024 * 4; */
const STREAM_CHUNK_MIDDLE_LIMIT = 512 * 1024;
const STREAM_CHUNK_UPPER_LIMIT = 1024 * 1024;
const SMALLEST_CHUNK_LIMIT = 512 * 4;
function parseRange(header) {
    if (!header)
        return [0, 0];
    const [, chunks] = header.split('=');
    const ranges = chunks.split(', ');
    const [offset, end] = ranges[0].split('-');
    return [+offset, +end || 0];
}
function alignOffset(offset, base = SMALLEST_CHUNK_LIMIT) {
    return offset - (offset % base);
}
function alignLimit(limit) {
    return Math.pow(2, Math.ceil(Math.log(limit) / Math.log(2)));
}


/***/ }),

/***/ "./src/lib/serviceWorker/timeout.ts":
/*!******************************************!*\
  !*** ./src/lib/serviceWorker/timeout.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return timeout; });
function timeout(delay) {
    return new Promise(((resolve) => {
        setTimeout(() => {
            resolve(new Response('', {
                status: 408,
                statusText: 'Request timed out.',
            }));
        }, delay);
    }));
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9kYXRhYmFzZXMvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9kZWJ1Zy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL21vZGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnZpcm9ubWVudC9jdHgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vudmlyb25tZW50L3VzZXJBZ2VudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9ibG9iLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2NhbmNlbGxhYmxlUHJvbWlzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9jb250ZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL25vb3AudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3NjaGVkdWxlcnMvZGVib3VuY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvc2NoZWR1bGVycy9wYXVzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NhY2hlU3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2ZpbGVtYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvaWRiLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvbG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvc2VydmljZVdvcmtlci9jYWNoZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NlcnZpY2VXb3JrZXIvaW5kZXguc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NlcnZpY2VXb3JrZXIvcHVzaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NlcnZpY2VXb3JrZXIvc3RyZWFtLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvc2Vy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QU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFM0MsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxNQUFjLEVBQUUsSUFBSSxHQUFHLG9CQUFvQjtJQUM5RCxPQUFPLE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsS0FBYTtJQUMvQixPQUFPLFVBQUMsRUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDO0FBQ3ZELENBQUM7Ozs7Ozs7Ozs7Ozs7QUMvU0Q7QUFBQTtBQUFlLFNBQVMsT0FBTyxDQUFDLEtBQWE7SUFDM0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDOUIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE9BQU8sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxHQUFHO2dCQUNYLFVBQVUsRUFBRSxvQkFBb0I7YUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDTixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyIsImZpbGUiOiJzdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xpYi9zZXJ2aWNlV29ya2VyL2luZGV4LnNlcnZpY2UudHNcIik7XG4iLCIvKlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW9yZXRoYW53b3Jkcy90d2ViXHJcbiAqIENvcHlyaWdodCAoQykgMjAxOS0yMDIxIEVkdWFyZCBLdXptZW5rb1xyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW9yZXRoYW53b3Jkcy90d2ViL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gJy4nO1xyXG5cclxuY29uc3QgREFUQUJBU0VfU1RBVEU6IERhdGFiYXNlPCdzZXNzaW9uJyB8ICdzdGlja2VyU2V0cycgfCAndXNlcnMnIHwgJ2NoYXRzJyB8ICdtZXNzYWdlcycgfCAnZGlhbG9ncyc+ID0ge1xyXG4gIG5hbWU6ICd0d2ViJyxcclxuICB2ZXJzaW9uOiA3LFxyXG4gIHN0b3JlczogW3tcclxuICAgIG5hbWU6ICdzZXNzaW9uJ1xyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdzdGlja2VyU2V0cydcclxuICB9LCB7XHJcbiAgICBuYW1lOiAndXNlcnMnXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ2NoYXRzJ1xyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdkaWFsb2dzJ1xyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdtZXNzYWdlcydcclxuICB9XVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgREFUQUJBU0VfU1RBVEU7XHJcbiIsIi8qXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3JldGhhbndvcmRzL3R3ZWJcclxuICogQ29weXJpZ2h0IChDKSAyMDE5LTIwMjEgRWR1YXJkIEt1em1lbmtvXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3JldGhhbndvcmRzL3R3ZWIvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCBNb2RlcyBmcm9tIFwiLi9tb2Rlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFQlVHID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyB8fCBNb2Rlcy5kZWJ1ZztcclxuY29uc3QgY3R4OiBhbnkgPSB0eXBlb2Yod2luZG93KSAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBzZWxmO1xyXG5leHBvcnQgY29uc3QgTU9VTlRfQ0xBU1NfVE86IGFueSA9IERFQlVHIHx8IHRydWUvKiAgJiYgZmFsc2UgKi8gPyBjdHggOiB7fTtcclxuZXhwb3J0IGRlZmF1bHQgREVCVUc7XHJcblxyXG4vL2xldCBtID0gREVCVUc7XHJcbi8qIGlmKCFERUJVRykge1xyXG4gIGN0eC5zYW5kcGl0VHVydGxlID0gKCkgPT4ge1xyXG4gICAgLy9pZighbSkge1xyXG4gICAgICBmb3IobGV0IGkgaW4gTU9VTlRfQ0xBU1NfVE8pIHtcclxuICAgICAgICBjdHhbaV0gPSBNT1VOVF9DTEFTU19UT1tpXTtcclxuICAgICAgfVxyXG4gICAgICAvL20gPSB0cnVlO1xyXG4gICAgLy99XHJcbiAgXHJcbiAgICAvL0RFQlVHID0gIURFQlVHO1xyXG4gIH07XHJcbn0gKi9cclxuXHJcbi8qIGV4cG9ydCBjb25zdCBzdXBlckRlYnVnID0gKG9iamVjdDogYW55LCBrZXk6IHN0cmluZykgPT4ge1xyXG4gIHZhciBkID0gb2JqZWN0W2tleV07XHJcbiAgdmFyIGJlZm9yZVN0ciA9ICcnLCBhZnRlclN0ciA9ICcnO1xyXG4gIGZvcih2YXIgciBvZiBkKSB7XHJcbiAgICBiZWZvcmVTdHIgKz0gci5iZWZvcmUuaGV4ICsgJ1xcbic7XHJcbiAgICBhZnRlclN0ciArPSByLmFmdGVyLmhleCArICdcXG4nO1xyXG4gIH1cclxuXHJcbiAgYmVmb3JlU3RyID0gYmVmb3JlU3RyLnRyaW0oKTtcclxuICBhZnRlclN0ciA9IGFmdGVyU3RyLnRyaW0oKTtcclxuICAvL3ZhciBiZWZvcmVTdHIgPSBkLm1hcChyID0+IHIuYmVmb3JlLmhleCkuam9pbignXFxuJyk7XHJcbiAgLy92YXIgYWZ0ZXJTdHIgPSBkLm1hcChyID0+IHIuYWZ0ZXIuaGV4KS5qb2luKCdcXG4nKTtcclxuXHJcbiAgdmFyIGRhZGEgPSAobmFtZTogc3RyaW5nLCBzdHI6IHN0cmluZykgPT4ge1xyXG4gICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBhLnRhcmdldCA9ICdfYmxhbmsnO1xyXG4gICAgYS5kb3dubG9hZCA9IG5hbWUgKyAnLnR4dCc7XHJcbiAgICBhLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtzdHJdLCB7XHJcbiAgICAgIHR5cGU6ICd0ZXh0L3BsYWluJ1xyXG4gICAgfSkpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoYSk7XHJcbiAgICBhLmNsaWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgZGFkYShrZXkgKyAnXycgKyAnYmVmb3JlJywgYmVmb3JlU3RyKTtcclxuICBkYWRhKGtleSArICdfJyArICdhZnRlcicsIGFmdGVyU3RyKTtcclxufVxyXG5cclxuTU9VTlRfQ0xBU1NfVE8uc3VwZXJEZWJ1ZyA9IHN1cGVyRGVidWc7ICovXHJcbiIsIi8qXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3JldGhhbndvcmRzL3R3ZWJcclxuICogQ29weXJpZ2h0IChDKSAyMDE5LTIwMjEgRWR1YXJkIEt1em1lbmtvXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3JldGhhbndvcmRzL3R3ZWIvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKiBcclxuICogT3JpZ2luYWxseSBmcm9tOlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vemh1a292L3dlYm9ncmFtXHJcbiAqIENvcHlyaWdodCAoQykgMjAxNCBJZ29yIFpodWtvdiA8aWdvci5iZWF0bGVAZ21haWwuY29tPlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vemh1a292L3dlYm9ncmFtL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5jb25zdCBNb2RlcyA9IHtcclxuICB0ZXN0OiBsb2NhdGlvbi5zZWFyY2guaW5kZXhPZigndGVzdD0xJykgPiAwLyogIHx8IHRydWUgKi8sXHJcbiAgZGVidWc6IGxvY2F0aW9uLnNlYXJjaC5pbmRleE9mKCdkZWJ1Zz0xJykgPiAwLFxyXG4gIGh0dHA6IGZhbHNlLCAvL2xvY2F0aW9uLnNlYXJjaC5pbmRleE9mKCdodHRwPTEnKSA+IDAsXHJcbiAgc3NsOiB0cnVlLCAvLyBsb2NhdGlvbi5zZWFyY2guaW5kZXhPZignc3NsPTEnKSA+IDAgfHwgbG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonICYmIGxvY2F0aW9uLnNlYXJjaC5pbmRleE9mKCdzc2w9MCcpID09PSAtMSxcclxuICBtdWx0aXBsZUNvbm5lY3Rpb25zOiB0cnVlLFxyXG4gIGFzU2VydmljZVdvcmtlcjogZmFsc2VcclxufTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RlcztcclxuIiwiY29uc3QgY3R4ID0gdHlwZW9mKHdpbmRvdykgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogc2VsZjtcblxuZXhwb3J0IGRlZmF1bHQgY3R4OyIsIi8qXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3JldGhhbndvcmRzL3R3ZWJcclxuICogQ29weXJpZ2h0IChDKSAyMDE5LTIwMjEgRWR1YXJkIEt1em1lbmtvXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3JldGhhbndvcmRzL3R3ZWIvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCBjdHggZnJvbSAnLi9jdHgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVTRVJfQUdFTlQgPSBuYXZpZ2F0b3IgPyBuYXZpZ2F0b3IudXNlckFnZW50IDogbnVsbDtcclxuZXhwb3J0IGNvbnN0IElTX0FQUExFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zZWFyY2goL09TIFh8aVBob25lfGlQYWR8aU9TL2kpICE9PSAtMTtcclxuZXhwb3J0IGNvbnN0IElTX0FORFJPSUQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignYW5kcm9pZCcpICE9PSAtMTtcclxuZXhwb3J0IGNvbnN0IElTX0NIUk9NSVVNID0gL0Nocm9tZS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAvR29vZ2xlIEluYy8udGVzdChuYXZpZ2F0b3IudmVuZG9yKTtcclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81ODA2NTI0MVxyXG5leHBvcnQgY29uc3QgSVNfQVBQTEVfTU9CSUxFID0gKC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkgfHxcclxuICAobmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEpKSAmJlxyXG4gICEoY3R4IGFzIGFueSkuTVNTdHJlYW07XHJcblxyXG5leHBvcnQgY29uc3QgSVNfU0FGQVJJID0gISEoJ3NhZmFyaScgaW4gY3R4KSB8fCAhIShVU0VSX0FHRU5UICYmICgvXFxiKGlQYWR8aVBob25lfGlQb2QpXFxiLy50ZXN0KFVTRVJfQUdFTlQpIHx8ICghIVVTRVJfQUdFTlQubWF0Y2goJ1NhZmFyaScpICYmICFVU0VSX0FHRU5ULm1hdGNoKCdDaHJvbWUnKSkpKS8qICB8fCB0cnVlICovO1xyXG5leHBvcnQgY29uc3QgSVNfRklSRUZPWCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAtMTtcclxuXHJcbmV4cG9ydCBjb25zdCBJU19NT0JJTEVfU0FGQVJJID0gSVNfU0FGQVJJICYmIElTX0FQUExFX01PQklMRTtcclxuXHJcbmV4cG9ydCBjb25zdCBJU19NT0JJTEUgPSAvKiBzY3JlZW4ud2lkdGggJiYgc2NyZWVuLndpZHRoIDwgNDgwIHx8ICAqL25hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDAgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5zZWFyY2goL2lPU3xpUGhvbmUgT1N8QW5kcm9pZHxCbGFja0JlcnJ5fEJCMTB8U2VyaWVzID9bNjRdMHxKMk1FfE1JRFB8b3BlcmEgbWluaXxvcGVyYSBtb2JpfG1vYmkuK0dlY2tvfFdpbmRvd3MgUGhvbmUvaSkgIT0gLTE7XHJcbiIsIi8qXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3JldGhhbndvcmRzL3R3ZWJcclxuICogQ29weXJpZ2h0IChDKSAyMDE5LTIwMjEgRWR1YXJkIEt1em1lbmtvXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3JldGhhbndvcmRzL3R3ZWIvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKiBcclxuICogT3JpZ2luYWxseSBmcm9tOlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vemh1a292L3dlYm9ncmFtXHJcbiAqIENvcHlyaWdodCAoQykgMjAxNCBJZ29yIFpodWtvdiA8aWdvci5iZWF0bGVAZ21haWwuY29tPlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vemh1a292L3dlYm9ncmFtL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVhZEJsb2JBcyhibG9iOiBCbG9iLCBtZXRob2Q6ICdyZWFkQXNUZXh0Jyk6IFByb21pc2U8c3RyaW5nPjtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRCbG9iQXMoYmxvYjogQmxvYiwgbWV0aG9kOiAncmVhZEFzRGF0YVVSTCcpOiBQcm9taXNlPHN0cmluZz47XHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkQmxvYkFzKGJsb2I6IEJsb2IsIG1ldGhvZDogJ3JlYWRBc0FycmF5QnVmZmVyJyk6IFByb21pc2U8QXJyYXlCdWZmZXI+O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVhZEJsb2JBcyhibG9iOiBCbG9iLCBtZXRob2Q6ICdyZWFkQXNBcnJheUJ1ZmZlcicgfCAncmVhZEFzVGV4dCcgfCAncmVhZEFzRGF0YVVSTCcpOiBQcm9taXNlPGFueT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlKSA9PiB7XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCAoZSkgPT4gcmVzb2x2ZShlLnRhcmdldC5yZXN1bHQpKTtcclxuICAgIHJlYWRlclttZXRob2RdKGJsb2IpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYjogQmxvYikge1xyXG4gIHJldHVybiByZWFkQmxvYkFzKGJsb2IsICdyZWFkQXNUZXh0Jyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkQmxvYkFzRGF0YVVSTChibG9iOiBCbG9iKSB7XHJcbiAgcmV0dXJuIHJlYWRCbG9iQXMoYmxvYiwgJ3JlYWRBc0RhdGFVUkwnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iOiBCbG9iKSB7XHJcbiAgcmV0dXJuIHJlYWRCbG9iQXMoYmxvYiwgJ3JlYWRBc0FycmF5QnVmZmVyJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkQmxvYkFzVWludDhBcnJheShibG9iOiBCbG9iKSB7XHJcbiAgcmV0dXJuIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iKS50aGVuKGJ1ZmZlciA9PiBuZXcgVWludDhBcnJheShidWZmZXIpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJsb2JDb25zdHJ1Y3QoYmxvYlBhcnRzOiBhbnksIG1pbWVUeXBlOiBzdHJpbmcgPSAnJyk6IEJsb2Ige1xyXG4gIGxldCBibG9iO1xyXG4gIGNvbnN0IHNhZmVNaW1lVHlwZSA9IGJsb2JTYWZlTWltZVR5cGUobWltZVR5cGUpO1xyXG4gIHRyeSB7XHJcbiAgICBibG9iID0gbmV3IEJsb2IoYmxvYlBhcnRzLCB7dHlwZTogc2FmZU1pbWVUeXBlfSk7XHJcbiAgfSBjYXRjaChlKSB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBsZXQgYmIgPSBuZXcgQmxvYkJ1aWxkZXI7XHJcbiAgICBibG9iUGFydHMuZm9yRWFjaCgoYmxvYlBhcnQ6IGFueSkgPT4ge1xyXG4gICAgICBiYi5hcHBlbmQoYmxvYlBhcnQpO1xyXG4gICAgfSk7XHJcbiAgICBibG9iID0gYmIuZ2V0QmxvYihzYWZlTWltZVR5cGUpO1xyXG4gIH1cclxuICByZXR1cm4gYmxvYjtcclxufVxyXG5cclxuLy8gaHR0cHM6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvbWVkaWEtdHlwZXMueGh0bWxcclxuZXhwb3J0IGZ1bmN0aW9uIGJsb2JTYWZlTWltZVR5cGUobWltZVR5cGU6IHN0cmluZykge1xyXG4gIGlmKFtcclxuICAgICdpbWFnZS9qcGVnJyxcclxuICAgICdpbWFnZS9wbmcnLFxyXG4gICAgJ2ltYWdlL2dpZicsXHJcbiAgICAnaW1hZ2Uvd2VicCcsXHJcbiAgICAnaW1hZ2UvYm1wJyxcclxuICAgICd2aWRlby9tcDQnLFxyXG4gICAgJ3ZpZGVvL3dlYm0nLFxyXG4gICAgJ3ZpZGVvL3F1aWNrdGltZScsXHJcbiAgICAnYXVkaW8vb2dnJyxcclxuICAgICdhdWRpby9tcGVnJyxcclxuICAgICdhdWRpby9tcDQnLFxyXG4gICAgJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgJ2FwcGxpY2F0aW9uL3BkZidcclxuICBdLmluZGV4T2YobWltZVR5cGUpID09PSAtMSkge1xyXG4gICAgcmV0dXJuICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1pbWVUeXBlO1xyXG59XHJcbiIsIi8qXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3JldGhhbndvcmRzL3R3ZWJcclxuICogQ29weXJpZ2h0IChDKSAyMDE5LTIwMjEgRWR1YXJkIEt1em1lbmtvXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3JldGhhbndvcmRzL3R3ZWIvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCBub29wIGZyb20gXCIuL25vb3BcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FuY2VsbGFibGVQcm9taXNlPFQ+IGV4dGVuZHMgUHJvbWlzZTxUPiB7XHJcbiAgcmVzb2x2ZT86ICh2YWx1ZTogVCkgPT4gdm9pZCxcclxuICByZWplY3Q/OiAoLi4uYXJnczogYW55W10pID0+IHZvaWQsXHJcbiAgY2FuY2VsPzogKCkgPT4gdm9pZCxcclxuXHJcbiAgbm90aWZ5PzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkLFxyXG4gIG5vdGlmeUFsbD86ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCxcclxuICBsYXN0Tm90aWZ5PzogYW55LFxyXG4gIGxpc3RlbmVycz86IEFycmF5PCguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZD4sXHJcbiAgYWRkTm90aWZ5TGlzdGVuZXI/OiAoY2FsbGJhY2s6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCkgPT4gdm9pZCxcclxuXHJcbiAgaXNGdWxmaWxsZWQ/OiBib29sZWFuLFxyXG4gIGlzUmVqZWN0ZWQ/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZlcnJlZFByb21pc2U8VD4oKSB7XHJcbiAgbGV0IGRlZmVycmVkSGVscGVyOiBhbnkgPSB7XHJcbiAgICBpc0Z1bGZpbGxlZDogZmFsc2UsIFxyXG4gICAgaXNSZWplY3RlZDogZmFsc2UsXHJcblxyXG4gICAgbm90aWZ5OiAoKSA9PiB7fSwgXHJcbiAgICBub3RpZnlBbGw6ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgICBkZWZlcnJlZEhlbHBlci5sYXN0Tm90aWZ5ID0gYXJncztcclxuICAgICAgZGVmZXJyZWRIZWxwZXIubGlzdGVuZXJzLmZvckVhY2goKGNhbGxiYWNrOiBhbnkpID0+IGNhbGxiYWNrKC4uLmFyZ3MpKTtcclxuICAgIH0sIFxyXG5cclxuICAgIGxpc3RlbmVyczogW10sXHJcbiAgICBhZGROb3RpZnlMaXN0ZW5lcjogKGNhbGxiYWNrOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQpID0+IHtcclxuICAgICAgaWYoZGVmZXJyZWRIZWxwZXIubGFzdE5vdGlmeSkge1xyXG4gICAgICAgIGNhbGxiYWNrKC4uLmRlZmVycmVkSGVscGVyLmxhc3ROb3RpZnkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkZWZlcnJlZEhlbHBlci5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IGRlZmVycmVkOiBDYW5jZWxsYWJsZVByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBkZWZlcnJlZEhlbHBlci5yZXNvbHZlID0gKHZhbHVlOiBUKSA9PiB7XHJcbiAgICAgIGlmKGRlZmVycmVkLmlzRnVsZmlsbGVkIHx8IGRlZmVycmVkLmlzUmVqZWN0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGRlZmVycmVkLmlzRnVsZmlsbGVkID0gdHJ1ZTtcclxuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBkZWZlcnJlZEhlbHBlci5yZWplY3QgPSAoLi4uYXJnczogYW55W10pID0+IHtcclxuICAgICAgaWYoZGVmZXJyZWQuaXNSZWplY3RlZCB8fCBkZWZlcnJlZC5pc0Z1bGZpbGxlZCkgcmV0dXJuO1xyXG4gICAgICBcclxuICAgICAgZGVmZXJyZWQuaXNSZWplY3RlZCA9IHRydWU7XHJcbiAgICAgIHJlamVjdCguLi5hcmdzKTtcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICAvKiBkZWZlcnJlZC50aGVuID0gKHJlc29sdmU6ICh2YWx1ZTogVCkgPT4gYW55LCByZWplY3Q6ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55KSA9PiB7XHJcbiAgICBjb25zdCBuID0gZGVmZXJyZWRQcm9taXNlPFJldHVyblR5cGU8dHlwZW9mIHJlc29sdmU+PigpO1xyXG4gICAgXHJcbiAgfTsgKi9cclxuXHJcbiAgZGVmZXJyZWQuY2F0Y2gobm9vcCkuZmluYWxseSgoKSA9PiB7XHJcbiAgICBkZWZlcnJlZC5ub3RpZnkgPSBkZWZlcnJlZC5ub3RpZnlBbGwgPSBkZWZlcnJlZC5sYXN0Tm90aWZ5ID0gbnVsbDtcclxuICAgIGRlZmVycmVkLmxpc3RlbmVycy5sZW5ndGggPSAwO1xyXG5cclxuICAgIGlmKGRlZmVycmVkLmNhbmNlbCkge1xyXG4gICAgICBkZWZlcnJlZC5jYW5jZWwgPSAoKSA9PiB7fTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgT2JqZWN0LmFzc2lnbihkZWZlcnJlZCwgZGVmZXJyZWRIZWxwZXIpO1xyXG5cclxuICByZXR1cm4gZGVmZXJyZWQ7XHJcbn0iLCIvKlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW9yZXRoYW53b3Jkcy90d2ViXHJcbiAqIENvcHlyaWdodCAoQykgMjAxOS0yMDIxIEVkdWFyZCBLdXptZW5rb1xyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW9yZXRoYW53b3Jkcy90d2ViL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgaXNXZWJXb3JrZXIgPSB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZTtcclxuZXhwb3J0IGNvbnN0IGlzU2VydmljZVdvcmtlciA9IHR5cGVvZiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGU7XHJcbmV4cG9ydCBjb25zdCBpc1dvcmtlciA9IGlzV2ViV29ya2VyIHx8IGlzU2VydmljZVdvcmtlcjtcclxuXHJcbi8vINCyIFNXINC80L7QttC10YIg0LHRi9GC0Ywg0YHRgNCw0LfRgyDQtNCy0LUg0L/QtdGA0LXQvNC10L3QvdGL0YUgVFJVRSwg0L/QvtGN0YLQvtC80YMg0L/RgNC+0LLQtdGA0Y/RjiDQv9C+INC/0L7RgdC70LXQtNC90LXQuVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFdpbmRvd0NsaWVudHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChzZWxmIGFzIGFueSBhcyBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUpXHJcbiAgLmNsaWVudHNcclxuICAubWF0Y2hBbGwoeyBpbmNsdWRlVW5jb250cm9sbGVkOiBmYWxzZSwgdHlwZTogJ3dpbmRvdycgfSk7XHJcbn07XHJcblxyXG5jb25zdCBub3RpZnlTZXJ2aWNlV29ya2VyID0gKGFsbDogYm9vbGVhbiwgLi4uYXJnczogYW55W10pID0+IHtcclxuICAoc2VsZiBhcyBhbnkgYXMgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlKVxyXG4gIC5jbGllbnRzXHJcbiAgLm1hdGNoQWxsKHsgaW5jbHVkZVVuY29udHJvbGxlZDogZmFsc2UsIHR5cGU6ICd3aW5kb3cnIH0pXHJcbiAgLnRoZW4oKGxpc3RlbmVycykgPT4ge1xyXG4gICAgaWYoIWxpc3RlbmVycy5sZW5ndGgpIHtcclxuICAgICAgLy9jb25zb2xlLnRyYWNlKCdubyBsaXN0ZW5lcnM/Jywgc2VsZiwgbGlzdGVuZXJzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxpc3RlbmVycy5zbGljZShhbGwgPyAwIDogLTEpLmZvckVhY2gobGlzdGVuZXIgPT4ge1xyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIGxpc3RlbmVyLnBvc3RNZXNzYWdlKC4uLmFyZ3MpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBub3RpZnlXb3JrZXIgPSAoLi4uYXJnczogYW55W10pID0+IHtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgKHNlbGYgYXMgYW55IGFzIERlZGljYXRlZFdvcmtlckdsb2JhbFNjb3BlKS5wb3N0TWVzc2FnZSguLi5hcmdzKTtcclxufTtcclxuXHJcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBub3RpZnlTb21lb25lID0gaXNTZXJ2aWNlV29ya2VyID8gbm90aWZ5U2VydmljZVdvcmtlci5iaW5kKG51bGwsIGZhbHNlKSA6IChpc1dlYldvcmtlciA/IG5vdGlmeVdvcmtlciA6IG5vb3ApO1xyXG5leHBvcnQgY29uc3Qgbm90aWZ5QWxsID0gaXNTZXJ2aWNlV29ya2VyID8gbm90aWZ5U2VydmljZVdvcmtlci5iaW5kKG51bGwsIHRydWUpIDogKGlzV2ViV29ya2VyID8gbm90aWZ5V29ya2VyIDogbm9vcCk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vb3AoKSB7fVxyXG4iLCIvKlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW9yZXRoYW53b3Jkcy90d2ViXHJcbiAqIENvcHlyaWdodCAoQykgMjAxOS0yMDIxIEVkdWFyZCBLdXptZW5rb1xyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW9yZXRoYW53b3Jkcy90d2ViL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICogXHJcbiAqIE9yaWdpbmFsbHkgZnJvbTpcclxuICogaHR0cHM6Ly9naXRodWIuY29tL3podWtvdi93ZWJvZ3JhbVxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTQgSWdvciBaaHVrb3YgPGlnb3IuYmVhdGxlQGdtYWlsLmNvbT5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL3podWtvdi93ZWJvZ3JhbS9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvcHk8VD4ob2JqOiBUKTogVCB7XHJcbiAgLy9pbiBjYXNlIG9mIHByZW1pdGl2ZXNcclxuICBpZihvYmogPT09IG51bGwgfHwgdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIpIHtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG4gXHJcbiAgLy9kYXRlIG9iamVjdHMgc2hvdWxkIGJlIFxyXG4gIGlmKG9iaiBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShvYmouZ2V0VGltZSgpKSBhcyBhbnk7XHJcbiAgfVxyXG4gXHJcbiAgLy9oYW5kbGUgQXJyYXlcclxuICBpZihBcnJheS5pc0FycmF5KG9iaikpIHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGNvbnN0IGNsb25lZEFycjogVCA9IG9iai5tYXAoZWwgPT4gY29weShlbCkpIGFzIGFueSBhcyBUO1xyXG4gICAgcmV0dXJuIGNsb25lZEFycjtcclxuICB9XHJcbiBcclxuICAvL2xhc3RseSwgaGFuZGxlIG9iamVjdHNcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgbGV0IGNsb25lZE9iaiA9IG5ldyBvYmouY29uc3RydWN0b3IoKTtcclxuICBmb3IodmFyIHByb3AgaW4gb2JqKXtcclxuICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4gICAgICBjbG9uZWRPYmpbcHJvcF0gPSBjb3B5KG9ialtwcm9wXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjbG9uZWRPYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwRXF1YWwoeDogYW55LCB5OiBhbnkpOiBib29sZWFuIHtcclxuICBjb25zdCBvayA9IE9iamVjdC5rZXlzLCB0eCA9IHR5cGVvZiB4LCB0eSA9IHR5cGVvZiB5O1xyXG4gIHJldHVybiB4ICYmIHkgJiYgdHggPT09ICdvYmplY3QnICYmIHR4ID09PSB0eSA/IChcclxuICAgIG9rKHgpLmxlbmd0aCA9PT0gb2soeSkubGVuZ3RoICYmXHJcbiAgICAgIG9rKHgpLmV2ZXJ5KGtleSA9PiBkZWVwRXF1YWwoeFtrZXldLCB5W2tleV0pKVxyXG4gICkgOiAoeCA9PT0geSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVOb3ROdW1lcmFibGVQcm9wZXJ0aWVzPFQgZXh0ZW5kcyBhbnk+KG9iajogVCwgbmFtZXM6IChrZXlvZiBUKVtdKSB7XHJcbiAgLy9jb25zdCBwZXJmID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgY29uc3QgcHJvcHMgPSB7d3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX07XHJcbiAgY29uc3Qgb3V0OiB7W25hbWUgaW4ga2V5b2YgVF0/OiB0eXBlb2YgcHJvcHN9ID0ge307XHJcbiAgbmFtZXMuZm9yRWFjaChuYW1lID0+IHtcclxuICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkobmFtZSkpIHtcclxuICAgICAgb3V0W25hbWVdID0gcHJvcHM7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMob2JqLCBvdXQpO1xyXG4gIC8vY29uc29sZS5sb2coJ2RlZmluZU5vdE51bWVyYWJsZVByb3BlcnRpZXMgdGltZTonLCBwZXJmb3JtYW5jZS5ub3coKSAtIHBlcmYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0S2V5c0FuZFNvcnQob2JqZWN0OiB7W2tleTogc3RyaW5nXTogYW55fSwgc29ydDogJ2FzYycgfCAnZGVzYycgPSAnYXNjJykge1xyXG4gIGlmKCFvYmplY3QpIHJldHVybiBbXTtcclxuICBjb25zdCBpZHMgPSBvYmplY3QgaW5zdGFuY2VvZiBNYXAgPyBbLi4ub2JqZWN0LmtleXMoKV0gOiBPYmplY3Qua2V5cyhvYmplY3QpLm1hcChpID0+ICtpKTtcclxuICBpZihzb3J0ID09PSAnYXNjJykgcmV0dXJuIGlkcy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XHJcbiAgZWxzZSByZXR1cm4gaWRzLnNvcnQoKGEsIGIpID0+IGIgLSBhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVSZXBsYWNlT2JqZWN0KHdhc09iamVjdDogYW55LCBuZXdPYmplY3Q6IGFueSkge1xyXG4gIGlmKCF3YXNPYmplY3QpIHtcclxuICAgIHJldHVybiBuZXdPYmplY3Q7XHJcbiAgfVxyXG5cclxuICBmb3IodmFyIGtleSBpbiB3YXNPYmplY3QpIHtcclxuICAgIGlmKCFuZXdPYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICBkZWxldGUgd2FzT2JqZWN0W2tleV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IodmFyIGtleSBpbiBuZXdPYmplY3QpIHtcclxuICAgIC8vaWYgKG5ld09iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7IC8vIHVzZWxlc3NcclxuICAgICAgd2FzT2JqZWN0W2tleV0gPSBuZXdPYmplY3Rba2V5XTtcclxuICAgIC8vfVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gd2FzT2JqZWN0O1xyXG59XHJcblxyXG4vKipcclxuICogV2lsbCBiZSB1c2VkIGZvciBGSUxFX1JFRkVSRU5DRV9FWFBJUkVEXHJcbiAqIEBwYXJhbSBrZXkgXHJcbiAqIEBwYXJhbSB3YXNPYmplY3QgXHJcbiAqIEBwYXJhbSBuZXdPYmplY3QgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2FmZVJlcGxhY2VBcnJheUluT2JqZWN0PEs+KGtleTogSywgd2FzT2JqZWN0OiBhbnksIG5ld09iamVjdDogYW55KSB7XHJcbiAgaWYoJ2J5dGVMZW5ndGgnIGluIG5ld09iamVjdFtrZXldKSB7IC8vIFVpbnQ4QXJyYXlcclxuICAgIG5ld09iamVjdFtrZXldID0gWy4uLm5ld09iamVjdFtrZXldXTtcclxuICB9XHJcblxyXG4gIGlmKHdhc09iamVjdCAmJiB3YXNPYmplY3Rba2V5XSAhPT0gbmV3T2JqZWN0W2tleV0pIHtcclxuICAgIHdhc09iamVjdFtrZXldLmxlbmd0aCA9IG5ld09iamVjdFtrZXldLmxlbmd0aDtcclxuICAgIChuZXdPYmplY3Rba2V5XSBhcyBhbnlbXSkuZm9yRWFjaCgodiwgaSkgPT4ge1xyXG4gICAgICB3YXNPYmplY3Rba2V5XVtpXSA9IHY7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiB3YXNPYmplY3Rba2V5XS5zZXQobmV3T2JqZWN0W2tleV0pOyAqL1xyXG4gICAgbmV3T2JqZWN0W2tleV0gPSB3YXNPYmplY3Rba2V5XTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdDxUIGV4dGVuZHMgUmVjb3JkPGFueSwgYW55Pj4ob2JqZWN0OiBhbnkpOiBvYmplY3QgaXMgVCB7XHJcbiAgcmV0dXJuIHR5cGVvZihvYmplY3QpID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWVwUHJvcGVydHkob2JqZWN0OiBhbnksIGtleTogc3RyaW5nKSB7XHJcbiAgY29uc3Qgc3BsaXR0ZWQgPSBrZXkuc3BsaXQoJy4nKTtcclxuICBsZXQgbzogYW55ID0gb2JqZWN0O1xyXG4gIHNwbGl0dGVkLmZvckVhY2goa2V5ID0+IHtcclxuICAgIGlmKCFrZXkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBvID0gb1trZXldO1xyXG4gIH0pO1xyXG4gIFxyXG4gIHJldHVybiBvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVlcFByb3BlcnR5KG9iamVjdDogYW55LCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gIGNvbnN0IHNwbGl0dGVkID0ga2V5LnNwbGl0KCcuJyk7XHJcbiAgZ2V0RGVlcFByb3BlcnR5KG9iamVjdCwgc3BsaXR0ZWQuc2xpY2UoMCwgLTEpLmpvaW4oJy4nKSlbc3BsaXR0ZWQucG9wKCldID0gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUluaXRPYmplY3QoaW5pdE9iamVjdDogYW55LCBjdXJyZW50T2JqZWN0OiBhbnksIG9uUmVwbGFjZT86IChrZXk6IHN0cmluZykgPT4gdm9pZCwgcHJldmlvdXNLZXk/OiBzdHJpbmcpIHtcclxuICBmb3IoY29uc3Qga2V5IGluIGluaXRPYmplY3QpIHtcclxuICAgIGlmKHR5cGVvZihjdXJyZW50T2JqZWN0W2tleV0pICE9PSB0eXBlb2YoaW5pdE9iamVjdFtrZXldKSkge1xyXG4gICAgICBjdXJyZW50T2JqZWN0W2tleV0gPSBjb3B5KGluaXRPYmplY3Rba2V5XSk7XHJcbiAgICAgIG9uUmVwbGFjZSAmJiBvblJlcGxhY2UocHJldmlvdXNLZXkgfHwga2V5KTtcclxuICAgIH0gZWxzZSBpZihpc09iamVjdChpbml0T2JqZWN0W2tleV0pKSB7XHJcbiAgICAgIHZhbGlkYXRlSW5pdE9iamVjdChpbml0T2JqZWN0W2tleV0sIGN1cnJlbnRPYmplY3Rba2V5XSwgb25SZXBsYWNlLCBwcmV2aW91c0tleSB8fCBrZXkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVBc3NpZ24ob2JqZWN0OiBhbnksIGZyb21PYmplY3Q6IGFueSkge1xyXG4gIGlmKCFmcm9tT2JqZWN0KSByZXR1cm47XHJcbiAgXHJcbiAgZm9yKGxldCBpIGluIGZyb21PYmplY3QpIHtcclxuICAgIGlmKGZyb21PYmplY3RbaV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBvYmplY3RbaV0gPSBmcm9tT2JqZWN0W2ldO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyAqIEpvbGx5IENvYnJhJ3Mgc2NoZWR1bGVyc1xyXG5cclxuaW1wb3J0IHsgQW55RnVuY3Rpb24sIEF3YWl0ZWQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlPEYgZXh0ZW5kcyBBbnlGdW5jdGlvbj4oXHJcbiAgZm46IEYsXHJcbiAgbXM6IG51bWJlcixcclxuICBzaG91bGRSdW5GaXJzdCA9IHRydWUsXHJcbiAgc2hvdWxkUnVuTGFzdCA9IHRydWUsXHJcbikge1xyXG4gIGxldCB3YWl0aW5nVGltZW91dDogbnVtYmVyO1xyXG4gIGxldCB3YWl0aW5nUHJvbWlzZTogUHJvbWlzZTxBd2FpdGVkPFJldHVyblR5cGU8Rj4+PiwgcmVzb2x2ZTogKHJlc3VsdDogYW55KSA9PiB2b2lkLCByZWplY3Q6ICgpID0+IHZvaWQ7XHJcbiAgbGV0IGhhZE5ld0NhbGwgPSBmYWxzZTtcclxuXHJcbiAgcmV0dXJuICguLi5hcmdzOiBQYXJhbWV0ZXJzPEY+KTogdHlwZW9mIHdhaXRpbmdQcm9taXNlID0+IHtcclxuICAgIGlmKCF3YWl0aW5nUHJvbWlzZSkgd2FpdGluZ1Byb21pc2UgPSBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIF9yZWplY3QpID0+IChyZXNvbHZlID0gX3Jlc29sdmUsIHJlamVjdCA9IF9yZWplY3QpKTtcclxuXHJcbiAgICBpZih3YWl0aW5nVGltZW91dCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQod2FpdGluZ1RpbWVvdXQpO1xyXG4gICAgICBoYWROZXdDYWxsID0gdHJ1ZTtcclxuICAgICAgcmVqZWN0KCk7XHJcbiAgICAgIHdhaXRpbmdQcm9taXNlID0gbmV3IFByb21pc2UoKF9yZXNvbHZlLCBfcmVqZWN0KSA9PiAocmVzb2x2ZSA9IF9yZXNvbHZlLCByZWplY3QgPSBfcmVqZWN0KSk7XHJcbiAgICB9IGVsc2UgaWYoc2hvdWxkUnVuRmlyc3QpIHtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICByZXNvbHZlKGZuKC4uLmFyZ3MpKTtcclxuICAgICAgaGFkTmV3Q2FsbCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHdhaXRpbmdUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vIHdpbGwgcnVuIGlmIHNob3VsZCBydW4gbGFzdCBvciBmaXJzdCBidXQgd2l0aCBuZXcgY2FsbFxyXG4gICAgICBpZihzaG91bGRSdW5MYXN0ICYmICghc2hvdWxkUnVuRmlyc3QgfHwgaGFkTmV3Q2FsbCkpIHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgcmVzb2x2ZShmbiguLi5hcmdzKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdhaXRpbmdUaW1lb3V0ID0gd2FpdGluZ1Byb21pc2UgPSByZXNvbHZlID0gcmVqZWN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICBoYWROZXdDYWxsID0gZmFsc2U7XHJcbiAgICB9LCBtcykgYXMgYW55O1xyXG5cclxuICAgIHdhaXRpbmdQcm9taXNlLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIHJldHVybiB3YWl0aW5nUHJvbWlzZTtcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBwYXVzZSA9IChtczogbnVtYmVyKSA9PiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xyXG59KTtcclxuIiwiLypcclxuICogaHR0cHM6Ly9naXRodWIuY29tL21vcmV0aGFud29yZHMvdHdlYlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTktMjAyMSBFZHVhcmQgS3V6bWVua29cclxuICogaHR0cHM6Ly9naXRodWIuY29tL21vcmV0aGFud29yZHMvdHdlYi9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IE1vZGVzIGZyb20gJy4uL2NvbmZpZy9tb2Rlcyc7XHJcbmltcG9ydCB7IGJsb2JDb25zdHJ1Y3QgfSBmcm9tICcuLi9oZWxwZXJzL2Jsb2InO1xyXG5pbXBvcnQgRmlsZU1hbmFnZXIgZnJvbSAnLi9maWxlbWFuYWdlcic7XHJcbi8vaW1wb3J0IHsgTU9VTlRfQ0xBU1NfVE8gfSBmcm9tICcuL210cHJvdG8vbXRwcm90b19jb25maWcnO1xyXG4vL2ltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vcG9seWZpbGwnO1xyXG5cclxuZXhwb3J0IHR5cGUgQ2FjaGVTdG9yYWdlRGJOYW1lID0gJ2NhY2hlZEZpbGVzJyB8ICdjYWNoZWRTdHJlYW1DaHVua3MnIHwgJ2NhY2hlZEFzc2V0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWNoZVN0b3JhZ2VDb250cm9sbGVyIHtcclxuICBwcml2YXRlIHN0YXRpYyBTVE9SQUdFUzogQ2FjaGVTdG9yYWdlQ29udHJvbGxlcltdID0gW107XHJcbiAgcHJpdmF0ZSBvcGVuRGJQcm9taXNlOiBQcm9taXNlPENhY2hlPjtcclxuXHJcbiAgcHJpdmF0ZSB1c2VTdG9yYWdlID0gdHJ1ZTtcclxuXHJcbiAgLy9wcml2YXRlIGxvZzogUmV0dXJuVHlwZTx0eXBlb2YgbG9nZ2VyPiA9IGxvZ2dlcignQ1MnKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYk5hbWU6IENhY2hlU3RvcmFnZURiTmFtZSkge1xyXG4gICAgaWYoTW9kZXMudGVzdCkge1xyXG4gICAgICB0aGlzLmRiTmFtZSArPSAnX3Rlc3QnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKENhY2hlU3RvcmFnZUNvbnRyb2xsZXIuU1RPUkFHRVMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMudXNlU3RvcmFnZSA9IENhY2hlU3RvcmFnZUNvbnRyb2xsZXIuU1RPUkFHRVNbMF0udXNlU3RvcmFnZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5vcGVuRGF0YWJhc2UoKTtcclxuICAgIENhY2hlU3RvcmFnZUNvbnRyb2xsZXIuU1RPUkFHRVMucHVzaCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3BlbkRhdGFiYXNlKCk6IFByb21pc2U8Q2FjaGU+IHtcclxuICAgIHJldHVybiB0aGlzLm9wZW5EYlByb21pc2UgPz8gKHRoaXMub3BlbkRiUHJvbWlzZSA9IGNhY2hlcy5vcGVuKHRoaXMuZGJOYW1lKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVsZXRlKGVudHJ5TmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy50aW1lb3V0T3BlcmF0aW9uKChjYWNoZSkgPT4gY2FjaGUuZGVsZXRlKCcvJyArIGVudHJ5TmFtZSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlbGV0ZUFsbCgpIHtcclxuICAgIHJldHVybiBjYWNoZXMuZGVsZXRlKHRoaXMuZGJOYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQoZW50cnlOYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnRpbWVvdXRPcGVyYXRpb24oKGNhY2hlKSA9PiBjYWNoZS5tYXRjaCgnLycgKyBlbnRyeU5hbWUpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzYXZlKGVudHJ5TmFtZTogc3RyaW5nLCByZXNwb25zZTogUmVzcG9uc2UpIHtcclxuICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge30pOyAvLyBERUJVR1xyXG4gICAgcmV0dXJuIHRoaXMudGltZW91dE9wZXJhdGlvbigoY2FjaGUpID0+IGNhY2hlLnB1dCgnLycgKyBlbnRyeU5hbWUsIHJlc3BvbnNlKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RmlsZShmaWxlTmFtZTogc3RyaW5nLCBtZXRob2Q6ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JyA9ICdibG9iJyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAvKiBpZihtZXRob2QgPT09ICdibG9iJykge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcclxuICAgIH0gKi9cclxuXHJcbiAgICAvLyBjb25zdCBzdHIgPSBgZ2V0IGZpbGVOYW1lOiAke2ZpbGVOYW1lfWA7XHJcbiAgICAvLyBjb25zb2xlLnRpbWUoc3RyKTtcclxuICAgIHJldHVybiB0aGlzLmdldChmaWxlTmFtZSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYoIXJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLndhcm4oJ2dldEZpbGU6JywgcmVzcG9uc2UsIGZpbGVOYW1lKTtcclxuICAgICAgICB0aHJvdyAnTk9fRU5UUllfRk9VTkQnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2VbbWV0aG9kXSgpO1xyXG4gICAgICAvLyBwcm9taXNlLnRoZW4oKCkgPT4ge1xyXG4gICAgICAvLyAgIGNvbnNvbGUudGltZUVuZChzdHIpO1xyXG4gICAgICAvLyB9KTtcclxuICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzYXZlRmlsZShmaWxlTmFtZTogc3RyaW5nLCBibG9iOiBCbG9iIHwgVWludDhBcnJheSkge1xyXG4gICAgLy9yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGJsb2JDb25zdHJ1Y3QoW2Jsb2JdKSk7XHJcbiAgICBpZighKGJsb2IgaW5zdGFuY2VvZiBCbG9iKSkge1xyXG4gICAgICBibG9iID0gYmxvYkNvbnN0cnVjdChibG9iKSBhcyBCbG9iO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJsb2IsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LUxlbmd0aCc6ICcnICsgYmxvYi5zaXplXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcy5zYXZlKGZpbGVOYW1lLCByZXNwb25zZSkudGhlbigoKSA9PiBibG9iIGFzIEJsb2IpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRpbWVvdXRPcGVyYXRpb248VD4oY2FsbGJhY2s6IChjYWNoZTogQ2FjaGUpID0+IFByb21pc2U8VD4pIHtcclxuICAgIGlmKCF0aGlzLnVzZVN0b3JhZ2UpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdTVE9SQUdFX09GRkxJTkUnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oYXN5bmMocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGxldCByZWplY3RlZCA9IGZhbHNlO1xyXG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgLy9jb25zb2xlLndhcm4oJ0NBQ0hFU1RPUkFHRSBUSU1FT1VUJyk7XHJcbiAgICAgICAgcmVqZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB9LCAxNWUzKTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY2FjaGUgPSBhd2FpdCB0aGlzLm9wZW5EYXRhYmFzZSgpO1xyXG4gICAgICAgIGlmKCFjYWNoZSkge1xyXG4gICAgICAgICAgdGhpcy51c2VTdG9yYWdlID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm9wZW5EYlByb21pc2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICB0aHJvdyAnbm8gY2FjaGU/JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNhbGxiYWNrKGNhY2hlKTtcclxuXHJcbiAgICAgICAgaWYocmVqZWN0ZWQpIHJldHVybjtcclxuICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEZpbGVXcml0ZXIoZmlsZU5hbWU6IHN0cmluZywgbWltZVR5cGU6IHN0cmluZykge1xyXG4gICAgY29uc3QgZmFrZVdyaXRlciA9IEZpbGVNYW5hZ2VyLmdldEZha2VGaWxlV3JpdGVyKG1pbWVUeXBlLCAoYmxvYikgPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5zYXZlRmlsZShmaWxlTmFtZSwgYmxvYikuY2F0Y2goKCkgPT4gYmxvYik7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZha2VXcml0ZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB0b2dnbGVTdG9yYWdlKGVuYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLlNUT1JBR0VTLm1hcChzdG9yYWdlID0+IHtcclxuICAgICAgc3RvcmFnZS51c2VTdG9yYWdlID0gZW5hYmxlZDtcclxuICAgICAgXHJcbiAgICAgIGlmKCFlbmFibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2UuZGVsZXRlQWxsKCk7XHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuXHJcbi8vY29uc3QgY2FjaGVTdG9yYWdlID0gbmV3IENhY2hlU3RvcmFnZUNvbnRyb2xsZXIoKTsgXHJcbi8vTU9VTlRfQ0xBU1NfVE8uY2FjaGVTdG9yYWdlID0gY2FjaGVTdG9yYWdlO1xyXG4vL2V4cG9ydCBkZWZhdWx0IGNhY2hlU3RvcmFnZTtcclxuIiwiLypcclxuICogaHR0cHM6Ly9naXRodWIuY29tL21vcmV0aGFud29yZHMvdHdlYlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTktMjAyMSBFZHVhcmQgS3V6bWVua29cclxuICogaHR0cHM6Ly9naXRodWIuY29tL21vcmV0aGFud29yZHMvdHdlYi9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqIFxyXG4gKiBPcmlnaW5hbGx5IGZyb206XHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS96aHVrb3Yvd2Vib2dyYW1cclxuICogQ29weXJpZ2h0IChDKSAyMDE0IElnb3IgWmh1a292IDxpZ29yLmJlYXRsZUBnbWFpbC5jb20+XHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS96aHVrb3Yvd2Vib2dyYW0vYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGJsb2JDb25zdHJ1Y3QsIHJlYWRCbG9iQXNVaW50OEFycmF5IH0gZnJvbSBcIi4uL2hlbHBlcnMvYmxvYlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVNYW5hZ2VyIHtcclxuICBwdWJsaWMgYmxvYlN1cHBvcnRlZCA9IHRydWU7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBibG9iQ29uc3RydWN0KFtdLCAnJyk7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgdGhpcy5ibG9iU3VwcG9ydGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBpc0F2YWlsYWJsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmJsb2JTdXBwb3J0ZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyB3cml0ZShmaWxlV3JpdGVyOiBSZXR1cm5UeXBlPEZpbGVNYW5hZ2VyWydnZXRGYWtlRmlsZVdyaXRlciddPiwgYnl0ZXM6IFVpbnQ4QXJyYXkgfCBCbG9iIHwgc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZihieXRlcyBpbnN0YW5jZW9mIEJsb2IpIHsgLy8gaXMgZmlsZSBieXRlc1xyXG4gICAgICByZXR1cm4gcmVhZEJsb2JBc1VpbnQ4QXJyYXkoYnl0ZXMpLnRoZW4oYXJyID0+IHtcclxuICAgICAgICByZXR1cm4gZmlsZVdyaXRlci53cml0ZShhcnIpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmaWxlV3JpdGVyLndyaXRlKGJ5dGVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRGYWtlRmlsZVdyaXRlcihtaW1lVHlwZTogc3RyaW5nLCBzYXZlRmlsZUNhbGxiYWNrPzogKGJsb2I6IEJsb2IpID0+IFByb21pc2U8QmxvYj4pIHtcclxuICAgIGNvbnN0IGJsb2JQYXJ0czogQXJyYXk8VWludDhBcnJheSB8IHN0cmluZz4gPSBbXTtcclxuICAgIGNvbnN0IGZha2VGaWxlV3JpdGVyID0ge1xyXG4gICAgICB3cml0ZTogYXN5bmMocGFydDogVWludDhBcnJheSB8IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmKCF0aGlzLmJsb2JTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgIHRocm93IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBibG9iUGFydHMucHVzaChwYXJ0KTtcclxuICAgICAgfSxcclxuICAgICAgdHJ1bmNhdGU6ICgpID0+IHtcclxuICAgICAgICBibG9iUGFydHMubGVuZ3RoID0gMDtcclxuICAgICAgfSxcclxuICAgICAgZmluYWxpemU6IChzYXZlVG9TdG9yYWdlID0gdHJ1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJsb2IgPSBibG9iQ29uc3RydWN0KGJsb2JQYXJ0cywgbWltZVR5cGUpO1xyXG5cclxuICAgICAgICBpZihzYXZlVG9TdG9yYWdlICYmIHNhdmVGaWxlQ2FsbGJhY2spIHtcclxuICAgICAgICAgIHNhdmVGaWxlQ2FsbGJhY2soYmxvYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBibG9iO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gZmFrZUZpbGVXcml0ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRmlsZU1hbmFnZXIoKTtcclxuIiwiLypcclxuICogaHR0cHM6Ly9naXRodWIuY29tL21vcmV0aGFud29yZHMvdHdlYlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTktMjAyMSBFZHVhcmQgS3V6bWVua29cclxuICogaHR0cHM6Ly9naXRodWIuY29tL21vcmV0aGFud29yZHMvdHdlYi9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqIFxyXG4gKiBPcmlnaW5hbGx5IGZyb206XHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS96aHVrb3Yvd2Vib2dyYW1cclxuICogQ29weXJpZ2h0IChDKSAyMDE0IElnb3IgWmh1a292IDxpZ29yLmJlYXRsZUBnbWFpbC5jb20+XHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS96aHVrb3Yvd2Vib2dyYW0vYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSAnLi4vY29uZmlnL2RhdGFiYXNlcyc7XHJcbmltcG9ydCBNb2RlcyBmcm9tICcuLi9jb25maWcvbW9kZXMnO1xyXG5pbXBvcnQgeyBibG9iQ29uc3RydWN0IH0gZnJvbSAnLi4vaGVscGVycy9ibG9iJztcclxuaW1wb3J0IHsgc2FmZUFzc2lnbiB9IGZyb20gJy4uL2hlbHBlcnMvb2JqZWN0JztcclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xyXG5cclxuLyoqXHJcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9JREJPYmplY3RTdG9yZS9jcmVhdGVJbmRleFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgSURCSW5kZXggPSB7XHJcbiAgaW5kZXhOYW1lOiBzdHJpbmcsXHJcbiAga2V5UGF0aDogc3RyaW5nLFxyXG4gIG9iamVjdFBhcmFtZXRlcnM6IElEQkluZGV4UGFyYW1ldGVyc1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgSURCU3RvcmUgPSB7XHJcbiAgbmFtZTogc3RyaW5nLCBcclxuICBpbmRleGVzPzogSURCSW5kZXhbXVxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgSURCT3B0aW9ucyA9IHtcclxuICBuYW1lPzogc3RyaW5nLFxyXG4gIHN0b3JlTmFtZTogc3RyaW5nLFxyXG4gIHN0b3Jlcz86IElEQlN0b3JlW10sXHJcbiAgdmVyc2lvbj86IG51bWJlclxyXG59O1xyXG5cclxuY29uc3QgREVCVUcgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElEQlN0b3JhZ2U8VCBleHRlbmRzIERhdGFiYXNlPGFueT4+IHtcclxuICBwcml2YXRlIHN0YXRpYyBTVE9SQUdFUzogSURCU3RvcmFnZTxEYXRhYmFzZTxhbnk+PltdID0gW107XHJcbiAgcHJpdmF0ZSBvcGVuRGJQcm9taXNlOiBQcm9taXNlPElEQkRhdGFiYXNlPjtcclxuICBwcml2YXRlIGRiOiBJREJEYXRhYmFzZTtcclxuICBwcml2YXRlIHN0b3JhZ2VJc0F2YWlsYWJsZSA9IHRydWU7XHJcblxyXG4gIHByaXZhdGUgbG9nOiBSZXR1cm5UeXBlPHR5cGVvZiBsb2dnZXI+O1xyXG4gIFxyXG4gIHByaXZhdGUgbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgdmVyc2lvbjogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RvcmVzOiBJREJTdG9yZVtdO1xyXG4gIHByaXZhdGUgc3RvcmVOYW1lOiBUWydzdG9yZXMnXVswXVsnbmFtZSddO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYjogVCwgc3RvcmVOYW1lOiB0eXBlb2YgZGJbJ3N0b3JlcyddWzBdWyduYW1lJ10pIHtcclxuICAgIHNhZmVBc3NpZ24odGhpcywgZGIpO1xyXG5cclxuICAgIGlmKE1vZGVzLnRlc3QpIHtcclxuICAgICAgdGhpcy5uYW1lICs9ICdfdGVzdCc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdG9yZU5hbWUgPSBzdG9yZU5hbWU7XHJcblxyXG4gICAgdGhpcy5sb2cgPSBsb2dnZXIoJ0lEQi0nICsgdGhpcy5zdG9yZU5hbWUpO1xyXG5cclxuICAgIHRoaXMub3BlbkRhdGFiYXNlKHRydWUpO1xyXG5cclxuICAgIElEQlN0b3JhZ2UuU1RPUkFHRVMucHVzaCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY2xvc2VEYXRhYmFzZXMocHJlc2VydmU/OiBJREJTdG9yYWdlPERhdGFiYXNlPGFueT4+KSB7XHJcbiAgICB0aGlzLlNUT1JBR0VTLmZvckVhY2goc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmKHByZXNlcnZlICYmIHByZXNlcnZlID09PSBzdG9yYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBkYiA9IHN0b3JhZ2UuZGI7XHJcbiAgICAgIGlmKGRiKSB7XHJcbiAgICAgICAgZGIub25jbG9zZSA9ICgpID0+IHt9O1xyXG4gICAgICAgIGRiLmNsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogISBXQVJOSU5HICEgZnVuY3Rpb24gcmVxdWlyZXMgYXQgbGVhc3Qgb25lIG9wZW5lZCBjb25uZWN0aW9uXHJcbiAgICovXHJcbiAgLyogcHVibGljIHN0YXRpYyBjbGVhck9iamVjdFN0b3JlcygpIHtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSB0aGlzLlNUT1JBR0VTWzBdO1xyXG4gICAgdGhpcy5jbG9zZURhdGFiYXNlcyhzdG9yYWdlKTtcclxuXHJcbiAgICBjb25zdCBuYW1lcyA9IEFycmF5LmZyb20oc3RvcmFnZS5kYi5vYmplY3RTdG9yZU5hbWVzKTtcclxuICAgIGNvbnN0IHByb21pc2VzID0gbmFtZXMubWFwKG5hbWUgPT4gc3RvcmFnZS5jbGVhcihuYW1lKSk7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gIH0gKi9cclxuXHJcbiAgLyogcHVibGljIHN0YXRpYyBkZWxldGVEYXRhYmFzZSgpIHtcclxuICAgIHRoaXMuY2xvc2VEYXRhYmFzZXMoKTtcclxuXHJcbiAgICBjb25zdCBzdG9yYWdlcyA9IHRoaXMuU1RPUkFHRVM7XHJcbiAgICBjb25zdCBkYk5hbWVzID0gQXJyYXkuZnJvbShuZXcgU2V0KHN0b3JhZ2VzLm1hcChzdG9yYWdlID0+IHN0b3JhZ2UubmFtZSkpKTtcclxuICAgIGNvbnN0IHByb21pc2VzID0gZGJOYW1lcy5tYXAoZGJOYW1lID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBkZWxldGVSZXF1ZXN0ID0gaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKGRiTmFtZSk7XHJcbiAgXHJcbiAgICAgICAgZGVsZXRlUmVxdWVzdC5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgfTtcclxuICBcclxuICAgICAgICBkZWxldGVSZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgfSAqL1xyXG5cclxuICBwdWJsaWMgaXNBdmFpbGFibGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlSXNBdmFpbGFibGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlbkRhdGFiYXNlKGNyZWF0ZU5ldyA9IGZhbHNlKTogUHJvbWlzZTxJREJEYXRhYmFzZT4ge1xyXG4gICAgaWYodGhpcy5vcGVuRGJQcm9taXNlICYmICFjcmVhdGVOZXcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMub3BlbkRiUHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVPYmplY3RTdG9yZSA9IChkYjogSURCRGF0YWJhc2UsIHN0b3JlOiBJREJTdG9yZSkgPT4ge1xyXG4gICAgICBjb25zdCBvcyA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKHN0b3JlLm5hbWUpO1xyXG5cclxuICAgICAgaWYoc3RvcmUuaW5kZXhlcz8ubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yKGNvbnN0IGluZGV4IG9mIHN0b3JlLmluZGV4ZXMpIHtcclxuICAgICAgICAgIG9zLmNyZWF0ZUluZGV4KGluZGV4LmluZGV4TmFtZSwgaW5kZXgua2V5UGF0aCwgaW5kZXgub2JqZWN0UGFyYW1ldGVycyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4odGhpcy5uYW1lLCB0aGlzLnZlcnNpb24pO1xyXG5cclxuICAgICAgaWYoIXJlcXVlc3QpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICB0aGlzLmxvZy5lcnJvcignZXJyb3Igb3BlbmluZyBkYicsIChlcnJvciBhcyBFcnJvcikubWVzc2FnZSk7XHJcbiAgICAgIHRoaXMuc3RvcmFnZUlzQXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZpbmlzaGVkID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYoIWZpbmlzaGVkKSB7XHJcbiAgICAgICAgcmVxdWVzdC5vbmVycm9yKHt0eXBlOiAnSURCX0NSRUFURV9USU1FT1VUJ30gYXMgRXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9LCAzMDAwKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5vcGVuRGJQcm9taXNlID0gbmV3IFByb21pc2U8SURCRGF0YWJhc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBmaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgZGIgPSByZXF1ZXN0LnJlc3VsdDtcclxuICAgICAgICBsZXQgY2FsbGVkTmV3ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMubG9nKCdPcGVuZWQnKTtcclxuICBcclxuICAgICAgICBkYi5vbmVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnN0b3JhZ2VJc0F2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5sb2cuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nL2FjY2Vzc2luZyBJbmRleGVkREIgZGF0YWJhc2UnLCBlcnJvcik7XHJcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGRiLm9uY2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sb2cuZXJyb3IoJ2Nsb3NlZDonLCBlKTtcclxuICAgICAgICAgICFjYWxsZWROZXcgJiYgdGhpcy5vcGVuRGF0YWJhc2UoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBkYi5vbmFib3J0ID0gKGUpID0+IHtcclxuICAgICAgICAgIHRoaXMubG9nLmVycm9yKCdhYm9ydDonLCBlKTtcclxuICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZS50YXJnZXQgYXMgSURCVHJhbnNhY3Rpb247XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRoaXMub3BlbkRhdGFiYXNlKGNhbGxlZE5ldyA9IHRydWUpO1xyXG5cclxuICAgICAgICAgIGlmKHRyYW5zYWN0aW9uLm9uZXJyb3IpIHtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25lcnJvcihlKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkYi5jbG9zZSgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGRiLm9udmVyc2lvbmNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxvZy5lcnJvcignb252ZXJzaW9uY2hhbmdlLCBsb2w/Jyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmRiID0gZGIpO1xyXG4gICAgICB9O1xyXG4gIFxyXG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBmaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlSXNBdmFpbGFibGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvZy5lcnJvcignRXJyb3IgY3JlYXRpbmcvYWNjZXNzaW5nIEluZGV4ZWREQiBkYXRhYmFzZScsIGV2ZW50KTtcclxuICAgICAgICByZWplY3QoZXZlbnQpO1xyXG4gICAgICB9O1xyXG4gIFxyXG4gICAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxvZy53YXJuKCdwZXJmb3JtaW5nIGlkYiB1cGdyYWRlIGZyb20nLCBldmVudC5vbGRWZXJzaW9uLCAndG8nLCBldmVudC5uZXdWZXJzaW9uKTtcclxuXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHZhciBkYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQgYXMgSURCRGF0YWJhc2U7XHJcbiAgICAgICAgdGhpcy5zdG9yZXMuZm9yRWFjaCgoc3RvcmUpID0+IHtcclxuICAgICAgICAgIC8qIGlmKGRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoc3RvcmUubmFtZSkpIHtcclxuICAgICAgICAgICAgLy9pZihldmVudC5vbGRWZXJzaW9uID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgZGIuZGVsZXRlT2JqZWN0U3RvcmUoc3RvcmUubmFtZSk7XHJcbiAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgfSAqL1xyXG4gICAgXHJcbiAgICAgICAgICBpZighZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhzdG9yZS5uYW1lKSkge1xyXG4gICAgICAgICAgICBjcmVhdGVPYmplY3RTdG9yZShkYiwgc3RvcmUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVsZXRlKGVudHJ5TmFtZTogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIC8vcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoZW50cnlOYW1lKSkge1xyXG4gICAgICBlbnRyeU5hbWUgPSBbXS5jb25jYXQoZW50cnlOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5nZXRPYmplY3RTdG9yZSgncmVhZHdyaXRlJywgKG9iamVjdFN0b3JlKSA9PiB7XHJcbiAgICAgIHJldHVybiAoZW50cnlOYW1lIGFzIHN0cmluZ1tdKS5tYXAoKGVudHJ5TmFtZSkgPT4gb2JqZWN0U3RvcmUuZGVsZXRlKGVudHJ5TmFtZSkpO1xyXG4gICAgfSwgREVCVUcgPyAnZGVsZXRlOiAnICsgZW50cnlOYW1lLmpvaW4oJywgJykgOiAnJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXIoc3RvcmVOYW1lPzogSURCU3RvcmFnZTxUPlsnc3RvcmVOYW1lJ10pIHtcclxuICAgIHJldHVybiB0aGlzLmdldE9iamVjdFN0b3JlKCdyZWFkd3JpdGUnLCAob2JqZWN0U3RvcmUpID0+IG9iamVjdFN0b3JlLmNsZWFyKCksIERFQlVHID8gJ2NsZWFyJyA6ICcnLCBzdG9yZU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNhdmUoZW50cnlOYW1lOiBzdHJpbmcgfCBzdHJpbmdbXSwgdmFsdWU6IGFueSB8IGFueVtdKSB7XHJcbiAgICAvLyBjb25zdCBoYW5kbGVFcnJvciA9IChlcnJvcjogRXJyb3IpID0+IHtcclxuICAgIC8vICAgdGhpcy5sb2cuZXJyb3IoJ3NhdmU6IHRyYW5zYWN0aW9uIGVycm9yOicsIGVudHJ5TmFtZSwgdmFsdWUsIGRiLCBlcnJvciwgZXJyb3IgJiYgZXJyb3IubmFtZSk7XHJcbiAgICAvLyAgIGlmKCghZXJyb3IgfHwgZXJyb3IubmFtZSA9PT0gJ0ludmFsaWRTdGF0ZUVycm9yJykvKiAgJiYgZmFsc2UgKi8pIHtcclxuICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgICAgIHRoaXMuc2F2ZShlbnRyeU5hbWUsIHZhbHVlKTtcclxuICAgIC8vICAgICB9LCAyZTMpO1xyXG4gICAgLy8gICB9IGVsc2Uge1xyXG4gICAgLy8gICAgIC8vY29uc29sZS5lcnJvcignSW5kZXhlZERCIHNhdmVGaWxlIHRyYW5zYWN0aW9uIGVycm9yOicsIGVycm9yLCBlcnJvciAmJiBlcnJvci5uYW1lKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfTtcclxuXHJcbiAgICBpZighQXJyYXkuaXNBcnJheShlbnRyeU5hbWUpKSB7XHJcbiAgICAgIGVudHJ5TmFtZSA9IFtdLmNvbmNhdChlbnRyeU5hbWUpO1xyXG4gICAgICB2YWx1ZSA9IFtdLmNvbmNhdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzLmdldE9iamVjdFN0b3JlKCdyZWFkd3JpdGUnLCAob2JqZWN0U3RvcmUpID0+IHtcclxuICAgICAgcmV0dXJuIChlbnRyeU5hbWUgYXMgc3RyaW5nW10pLm1hcCgoZW50cnlOYW1lLCBpZHgpID0+IG9iamVjdFN0b3JlLnB1dCh2YWx1ZVtpZHhdLCBlbnRyeU5hbWUpKTtcclxuICAgIH0sIERFQlVHID8gJ3NhdmU6ICcgKyBlbnRyeU5hbWUuam9pbignLCAnKSA6ICcnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzYXZlRmlsZShmaWxlTmFtZTogc3RyaW5nLCBibG9iOiBCbG9iIHwgVWludDhBcnJheSkge1xyXG4gICAgLy9yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGJsb2JDb25zdHJ1Y3QoW2Jsb2JdKSk7XHJcbiAgICBpZighKGJsb2IgaW5zdGFuY2VvZiBCbG9iKSkge1xyXG4gICAgICBibG9iID0gYmxvYkNvbnN0cnVjdChbYmxvYl0pIGFzIEJsb2I7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc2F2ZShmaWxlTmFtZSwgYmxvYik7XHJcbiAgfVxyXG5cclxuICAvKiBwdWJsaWMgc2F2ZUZpbGVCYXNlNjQoZGI6IElEQkRhdGFiYXNlLCBmaWxlTmFtZTogc3RyaW5nLCBibG9iOiBCbG9iIHwgYW55KTogUHJvbWlzZTxCbG9iPiB7XHJcbiAgICBpZih0aGlzLmdldEJsb2JTaXplKGJsb2IpID4gMTAgKiAxMDI0ICogMTAyNCkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZighKGJsb2IgaW5zdGFuY2VvZiBCbG9iKSkge1xyXG4gICAgICB2YXIgc2FmZU1pbWVUeXBlID0gYmxvYlNhZmVNaW1lVHlwZShibG9iLnR5cGUgfHwgJ2ltYWdlL2pwZWcnKTtcclxuICAgICAgdmFyIGFkZHJlc3MgPSAnZGF0YTonICsgc2FmZU1pbWVUeXBlICsgJztiYXNlNjQsJyArIGJ5dGVzVG9CYXNlNjQoYmxvYik7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2VQdXRCNjRTdHJpbmcoZGIsIGZpbGVOYW1lLCBhZGRyZXNzKS50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gYmxvYjtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRoaXMuc3RvcmFnZUlzQXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8QmxvYj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZVB1dEI2NFN0cmluZyhkYiwgZmlsZU5hbWUsIHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoYmxvYik7XHJcbiAgICAgICAgfSwgcmVqZWN0KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICByZWFkZXIub25lcnJvciA9IHJlamVjdDtcclxuICAgIH0pO1xyXG4gICAgXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRoaXMuc3RvcmFnZUlzQXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcm9taXNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0b3JhZ2VQdXRCNjRTdHJpbmcoZGI6IElEQkRhdGFiYXNlLCBmaWxlTmFtZTogc3RyaW5nLCBiNjRzdHJpbmc6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIG9iamVjdFN0b3JlID0gZGIudHJhbnNhY3Rpb24oW3RoaXMuc3RvcmVOYW1lXSwgJ3JlYWR3cml0ZScpXHJcbiAgICAgICAgLm9iamVjdFN0b3JlKHRoaXMuc3RvcmVOYW1lKTtcclxuICAgICAgdmFyIHJlcXVlc3QgPSBvYmplY3RTdG9yZS5wdXQoYjY0c3RyaW5nLCBmaWxlTmFtZSk7XHJcbiAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgIHRoaXMuc3RvcmFnZUlzQXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfTtcclxuICBcclxuICAgICAgcmVxdWVzdC5vbmVycm9yID0gcmVqZWN0O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0QmxvYlNpemUoYmxvYjogYW55KSB7XHJcbiAgICByZXR1cm4gYmxvYi5zaXplIHx8IGJsb2IuYnl0ZUxlbmd0aCB8fCBibG9iLmxlbmd0aDtcclxuICB9ICovXHJcblxyXG4gIHB1YmxpYyBnZXQ8VD4oZW50cnlOYW1lOiBzdHJpbmdbXSk6IFByb21pc2U8VFtdPjtcclxuICBwdWJsaWMgZ2V0PFQ+KGVudHJ5TmFtZTogc3RyaW5nKTogUHJvbWlzZTxUPjtcclxuICBwdWJsaWMgZ2V0PFQ+KGVudHJ5TmFtZTogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPFQ+IHwgUHJvbWlzZTxUW10+IHtcclxuICAgIC8vcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XHJcblxyXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoZW50cnlOYW1lKSkge1xyXG4gICAgICBlbnRyeU5hbWUgPSBbXS5jb25jYXQoZW50cnlOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5nZXRPYmplY3RTdG9yZTxUPigncmVhZG9ubHknLCAob2JqZWN0U3RvcmUpID0+IHtcclxuICAgICAgcmV0dXJuIChlbnRyeU5hbWUgYXMgc3RyaW5nW10pLm1hcCgoZW50cnlOYW1lKSA9PiBvYmplY3RTdG9yZS5nZXQoZW50cnlOYW1lKSk7XHJcbiAgICB9LCBERUJVRyA/ICdnZXQ6ICcgKyBlbnRyeU5hbWUuam9pbignLCAnKSA6ICcnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T2JqZWN0U3RvcmU8VD4obW9kZTogSURCVHJhbnNhY3Rpb25Nb2RlLCBvYmplY3RTdG9yZTogKG9iamVjdFN0b3JlOiBJREJPYmplY3RTdG9yZSkgPT4gSURCUmVxdWVzdCB8IElEQlJlcXVlc3RbXSwgbG9nPzogc3RyaW5nLCBzdG9yZU5hbWUgPSB0aGlzLnN0b3JlTmFtZSkge1xyXG4gICAgbGV0IHBlcmY6IG51bWJlcjtcclxuXHJcbiAgICBpZihsb2cpIHtcclxuICAgICAgcGVyZiA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICB0aGlzLmxvZyhsb2cgKyAnOiBzdGFydCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLm9wZW5EYXRhYmFzZSgpLnRoZW4oKGRiKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLyogaWYobW9kZSA9PT0gJ3JlYWR3cml0ZScpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9ICovXHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oW3N0b3JlTmFtZV0sIG1vZGUpO1xyXG5cclxuICAgICAgICB0cmFuc2FjdGlvbi5vbmVycm9yID0gKGUpID0+IHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgIHJlamVjdCh0cmFuc2FjdGlvbi5lcnJvcik7XHJcbiAgICAgICAgfTtcclxuICBcclxuICAgICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gKGUpID0+IHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHJcbiAgICAgICAgICBpZihsb2cpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2cobG9nICsgJzogZW5kJywgcGVyZm9ybWFuY2Uubm93KCkgLSBwZXJmKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCByZXN1bHRzID0gci5tYXAociA9PiByLnJlc3VsdCk7XHJcbiAgICAgICAgICByZXNvbHZlKGlzQXJyYXkgPyByZXN1bHRzIDogcmVzdWx0c1swXSk7XHJcbiAgICAgICAgfTtcclxuICBcclxuICAgICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxvZy5lcnJvcigndHJhbnNhY3Rpb24gbm90IGZpbmlzaGVkJywgdHJhbnNhY3Rpb24pO1xyXG4gICAgICAgIH0sIDEwMDAwKTtcclxuICBcclxuICAgICAgICAvKiB0cmFuc2FjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAvL2hhbmRsZUVycm9yKCk7XHJcbiAgICAgICAgICB0aGlzLmxvZy5lcnJvcignSW5kZXhlZERCOiB0cmFuc2FjdGlvbiBhYm9ydCEnLCB0cmFuc2FjdGlvbi5lcnJvcik7XHJcbiAgICAgICAgfSk7ICovXHJcbiAgXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSBvYmplY3RTdG9yZSh0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzdG9yZU5hbWUpKTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkocmVxdWVzdHMpO1xyXG4gICAgICAgIGNvbnN0IHI6IElEQlJlcXVlc3RbXSA9IGlzQXJyYXkgPyByZXF1ZXN0cyA6IFtdLmNvbmNhdChyZXF1ZXN0cykgYXMgYW55O1xyXG5cclxuICAgICAgICAvLyBjb25zdCBsZW5ndGggPSByLmxlbmd0aDtcclxuICAgICAgICAvLyAvKiBsZXQgbGVmdCA9IGxlbmd0aDtcclxuXHJcbiAgICAgICAgLy8gY29uc3Qgb25SZXF1ZXN0RmluaXNoZWQgPSAoZXJyb3I/OiBFcnJvcikgPT4ge1xyXG4gICAgICAgIC8vICAgaWYoIS0tbGVmdCkge1xyXG4gICAgICAgIC8vICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgLy8gICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB9OyAqL1xyXG5cclxuICAgICAgICAvLyBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAvLyAgIGNvbnN0IHJlcXVlc3QgPSByW2ldO1xyXG4gICAgICAgIC8vICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIG9uUmVxdWVzdEZpbmlzaGVkKCk7XHJcbiAgICAgICAgLy8gICB9O1xyXG5cclxuICAgICAgICAvLyAgIHJlcXVlc3Qub25lcnJvciA9IChlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIG9uUmVxdWVzdEZpbmlzaGVkKHRyYW5zYWN0aW9uLmVycm9yKTtcclxuICAgICAgICAvLyAgIH07XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEFsbDxUPigpOiBQcm9taXNlPFRbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0T2JqZWN0U3RvcmU8VFtdPigncmVhZG9ubHknLCAob2JqZWN0U3RvcmUpID0+IG9iamVjdFN0b3JlLmdldEFsbCgpLCBERUJVRyA/ICdnZXRBbGwnIDogJycpO1xyXG4gIH1cclxuXHJcbiAgLyogcHVibGljIGdldEFsbEtleXMoKTogUHJvbWlzZTxBcnJheTxzdHJpbmc+PiB7XHJcbiAgICBjb25zb2xlLnRpbWUoJ2dldEFsbEVudHJpZXMnKTtcclxuICAgIHJldHVybiB0aGlzLm9wZW5EYXRhYmFzZSgpLnRoZW4oKGRiKSA9PiB7XHJcbiAgICAgIHZhciBvYmplY3RTdG9yZSA9IGRiLnRyYW5zYWN0aW9uKFt0aGlzLnN0b3JlTmFtZV0sICdyZWFkb25seScpXHJcbiAgICAgICAgLm9iamVjdFN0b3JlKHRoaXMuc3RvcmVOYW1lKTtcclxuICAgICAgdmFyIHJlcXVlc3QgPSBvYmplY3RTdG9yZS5nZXRBbGxLZXlzKCk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgIHZhciByZXN1bHQgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgY29uc29sZS50aW1lRW5kKCdnZXRBbGxFbnRyaWVzJyk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9IHJlamVjdDtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9ICovXHJcblxyXG4gIC8qIHB1YmxpYyBpc0ZpbGVFeGlzdHMoZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc29sZS50aW1lKCdpc0ZpbGVFeGlzdHMnKTtcclxuICAgIHJldHVybiB0aGlzLm9wZW5EYXRhYmFzZSgpLnRoZW4oKGRiKSA9PiB7XHJcbiAgICAgIHZhciBvYmplY3RTdG9yZSA9IGRiLnRyYW5zYWN0aW9uKFt0aGlzLnN0b3JlTmFtZV0sICdyZWFkb25seScpXHJcbiAgICAgICAgLm9iamVjdFN0b3JlKHRoaXMuc3RvcmVOYW1lKTtcclxuICAgICAgdmFyIHJlcXVlc3QgPSBvYmplY3RTdG9yZS5vcGVuQ3Vyc29yKGZpbGVOYW1lKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgdmFyIGN1cnNvciA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgICByZXNvbHZlKCEhY3Vyc29yKTtcclxuICAgICAgICAgIGNvbnNvbGUudGltZUVuZCgnaXNGaWxlRXhpc3RzJyk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9IHJlamVjdDtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9ICovXHJcblxyXG4gIC8qIHB1YmxpYyBnZXRGaWxlV3JpdGVyKGZpbGVOYW1lOiBzdHJpbmcsIG1pbWVUeXBlOiBzdHJpbmcpIHtcclxuICAgIHZhciBmYWtlV3JpdGVyID0gRmlsZU1hbmFnZXIuZ2V0RmFrZUZpbGVXcml0ZXIobWltZVR5cGUsIChibG9iKSA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNhdmVGaWxlKGZpbGVOYW1lLCBibG9iKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFrZVdyaXRlcik7XHJcbiAgfSAqL1xyXG59XHJcbiIsIi8qXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW9yZXRoYW53b3Jkcy90d2ViXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTktMjAyMSBFZHVhcmQgS3V6bWVua29cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3JldGhhbndvcmRzL3R3ZWIvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCBERUJVRyBmcm9tIFwiLi4vY29uZmlnL2RlYnVnXCI7XG5cbmV4cG9ydCBlbnVtIExvZ1R5cGVzIHtcbiAgTm9uZSA9IDAsXG4gIEVycm9yID0gMSxcbiAgV2FybiA9IDIsXG4gIExvZyA9IDQsXG4gIERlYnVnID0gOFxufTtcblxuZXhwb3J0IGNvbnN0IExPR19MRVZFTFMgPSBbTG9nVHlwZXMuTm9uZSwgTG9nVHlwZXMuRXJyb3IsIExvZ1R5cGVzLldhcm4sIExvZ1R5cGVzLkxvZywgTG9nVHlwZXMuRGVidWddO1xuXG5jb25zdCBfbG9nVGltZXIgPSBEYXRlLm5vdygpO1xuZnVuY3Rpb24gZFQoKSB7XG4gIHJldHVybiAnWycgKyAoKERhdGUubm93KCkgLSBfbG9nVGltZXIpIC8gMTAwMCkudG9GaXhlZCgzKSArICddJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2dlcihwcmVmaXg6IHN0cmluZywgdHlwZTogTG9nVHlwZXMgPSBMb2dUeXBlcy5Mb2cgfCBMb2dUeXBlcy5XYXJuIHwgTG9nVHlwZXMuRXJyb3IsIGlnbm9yZURlYnVnUmVzZXQgPSBmYWxzZSkge1xuICBpZighREVCVUcgJiYgIWlnbm9yZURlYnVnUmVzZXQvKiAgfHwgdHJ1ZSAqLykge1xuICAgIHR5cGUgPSBMb2dUeXBlcy5FcnJvcjtcbiAgfVxuXG4gIC8vbGV2ZWwgPSBMb2dMZXZlbHMubG9nIHwgTG9nTGV2ZWxzLndhcm4gfCBMb2dMZXZlbHMuZXJyb3IgfCBMb2dMZXZlbHMuZGVidWdcblxuICBmdW5jdGlvbiBMb2coLi4uYXJnczogYW55W10pIHtcbiAgICByZXR1cm4gdHlwZSAmIExvZ1R5cGVzLkxvZyAmJiBjb25zb2xlLmxvZyhkVCgpLCBwcmVmaXgsIC4uLmFyZ3MpO1xuICB9XG4gIFxuICBMb2cud2FybiA9IGZ1bmN0aW9uKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgcmV0dXJuIHR5cGUgJiBMb2dUeXBlcy5XYXJuICYmIGNvbnNvbGUud2FybihkVCgpLCBwcmVmaXgsIC4uLmFyZ3MpO1xuICB9O1xuICBcbiAgTG9nLmluZm8gPSBmdW5jdGlvbiguLi5hcmdzOiBhbnlbXSkge1xuICAgIHJldHVybiB0eXBlICYgTG9nVHlwZXMuTG9nICYmIGNvbnNvbGUuaW5mbyhkVCgpLCBwcmVmaXgsIC4uLmFyZ3MpO1xuICB9O1xuICBcbiAgTG9nLmVycm9yID0gZnVuY3Rpb24oLi4uYXJnczogYW55W10pIHtcbiAgICByZXR1cm4gdHlwZSAmIExvZ1R5cGVzLkVycm9yICYmIGNvbnNvbGUuZXJyb3IoZFQoKSwgcHJlZml4LCAuLi5hcmdzKTtcbiAgfTtcbiAgXG4gIExvZy50cmFjZSA9IGZ1bmN0aW9uKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgcmV0dXJuIHR5cGUgJiBMb2dUeXBlcy5Mb2cgJiYgY29uc29sZS50cmFjZShkVCgpLCBwcmVmaXgsIC4uLmFyZ3MpO1xuICB9O1xuXG4gIC8qIExvZy5kZWJ1ZyA9IGZ1bmN0aW9uKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgcmV0dXJuIGxldmVsICYgTG9nTGV2ZWxzLmRlYnVnICYmIGNvbnNvbGUubG9nKGRUKCksIHByZWZpeCwgLi4uYXJncyk7XG4gIH07ICovXG5cbiAgTG9nLmRlYnVnID0gZnVuY3Rpb24oLi4uYXJnczogYW55W10pIHtcbiAgICByZXR1cm4gdHlwZSAmIExvZ1R5cGVzLkRlYnVnICYmIGNvbnNvbGUuZGVidWcoZFQoKSwgcHJlZml4LCAuLi5hcmdzKTtcbiAgfTtcblxuICBMb2cuc2V0UHJlZml4ID0gZnVuY3Rpb24oX3ByZWZpeDogc3RyaW5nKSB7XG4gICAgcHJlZml4ID0gJ1snICsgX3ByZWZpeCArICddOic7XG4gIH07XG5cbiAgTG9nLnNldFByZWZpeChwcmVmaXgpO1xuXG4gIExvZy5zZXRMZXZlbCA9IGZ1bmN0aW9uKGxldmVsOiAwIHwgMSB8IDIgfCAzIHwgNCkge1xuICAgIHR5cGUgPSBMT0dfTEVWRUxTLnNsaWNlKDAsIGxldmVsICsgMSkucmVkdWNlKChhY2MsIHYpID0+IGFjYyB8IHYsIDApIGFzIGFueTtcbiAgfTtcbiAgXG4gIHJldHVybiBMb2c7XG59O1xuIiwiLypcclxuICogaHR0cHM6Ly9naXRodWIuY29tL21vcmV0aGFud29yZHMvdHdlYlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTktMjAyMSBFZHVhcmQgS3V6bWVua29cclxuICogaHR0cHM6Ly9naXRodWIuY29tL21vcmV0aGFud29yZHMvdHdlYi9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgcGF1c2UgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9zY2hlZHVsZXJzL3BhdXNlXCI7XHJcblxyXG5jb25zdCBjdHggPSBzZWxmIGFzIGFueSBhcyBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGU7XHJcbmV4cG9ydCBjb25zdCBDQUNIRV9BU1NFVFNfTkFNRSA9ICdjYWNoZWRBc3NldHMnO1xyXG5cclxuZnVuY3Rpb24gaXNDb3JyZWN0UmVzcG9uc2UocmVzcG9uc2U6IFJlc3BvbnNlKSB7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLm9rICYmIHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0aW1lb3V0UmFjZTxUIGV4dGVuZHMgUHJvbWlzZTxhbnk+Pihwcm9taXNlOiBUKSB7XHJcbiAgcmV0dXJuIFByb21pc2UucmFjZShbXHJcbiAgICBwcm9taXNlLFxyXG4gICAgcGF1c2UoMTAwMDApLnRoZW4oKCkgPT4gUHJvbWlzZS5yZWplY3QoKSlcclxuICBdKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RDYWNoZShldmVudDogRmV0Y2hFdmVudCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCBjYWNoZSA9IGF3YWl0IGN0eC5jYWNoZXMub3BlbihDQUNIRV9BU1NFVFNfTkFNRSk7XHJcbiAgICBjb25zdCBjYWNoZSA9IGF3YWl0IHRpbWVvdXRSYWNlKGN0eC5jYWNoZXMub3BlbihDQUNIRV9BU1NFVFNfTkFNRSkpO1xyXG4gICAgY29uc3QgZmlsZSA9IGF3YWl0IHRpbWVvdXRSYWNlKGNhY2hlLm1hdGNoKGV2ZW50LnJlcXVlc3QsIHtpZ25vcmVWYXJ5OiB0cnVlfSkpO1xyXG4gIFxyXG4gICAgaWYoZmlsZSAmJiBpc0NvcnJlY3RSZXNwb25zZShmaWxlKSkge1xyXG4gICAgICByZXR1cm4gZmlsZTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGhlYWRlcnM6IEhlYWRlcnNJbml0ID0geydWYXJ5JzogJyonfTtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGV2ZW50LnJlcXVlc3QsIHtoZWFkZXJzfSk7XHJcbiAgICBpZihpc0NvcnJlY3RSZXNwb25zZShyZXNwb25zZSkpIHtcclxuICAgICAgY2FjaGUucHV0KGV2ZW50LnJlcXVlc3QsIHJlc3BvbnNlLmNsb25lKCkpO1xyXG4gICAgfSBlbHNlIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gMzA0KSB7IC8vIHBvc3NpYmxlIGZpeCBmb3IgMzA0IGluIFNhZmFyaVxyXG4gICAgICBjb25zdCB1cmwgPSBldmVudC5yZXF1ZXN0LnVybC5yZXBsYWNlKC9cXD8uKyQvLCAnJykgKyAnPycgKyAoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCB8IDApO1xyXG4gICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge2hlYWRlcnN9KTtcclxuICAgICAgaWYoaXNDb3JyZWN0UmVzcG9uc2UocmVzcG9uc2UpKSB7XHJcbiAgICAgICAgY2FjaGUucHV0KGV2ZW50LnJlcXVlc3QsIHJlc3BvbnNlLmNsb25lKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfSBjYXRjaChlcnIpIHtcclxuICAgIHJldHVybiBmZXRjaChldmVudC5yZXF1ZXN0KTtcclxuICB9XHJcbn1cclxuIiwiLypcclxuICogaHR0cHM6Ly9naXRodWIuY29tL21vcmV0aGFud29yZHMvdHdlYlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTktMjAyMSBFZHVhcmQgS3V6bWVua29cclxuICogaHR0cHM6Ly9naXRodWIuY29tL21vcmV0aGFud29yZHMvdHdlYi9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuLy9pbXBvcnQgQ2FjaGVTdG9yYWdlQ29udHJvbGxlciBmcm9tICcuLi9jYWNoZVN0b3JhZ2UnO1xyXG5pbXBvcnQgdHlwZSB7IE1vZGlmeSwgV29ya2VyVGFza1RlbXBsYXRlLCBXb3JrZXJUYXNrVm9pZFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5pbXBvcnQgdHlwZSB7IElucHV0RmlsZUxvY2F0aW9uLCBJbnB1dFdlYkZpbGVMb2NhdGlvbiwgVXBsb2FkRmlsZSB9IGZyb20gJy4uLy4uL2xheWVyJztcclxuaW1wb3J0IHR5cGUgeyBXZWJQdXNoQXBpTWFuYWdlciB9IGZyb20gJy4uL210cHJvdG8vd2ViUHVzaEFwaU1hbmFnZXInO1xyXG5pbXBvcnQgdHlwZSB7IFB1c2hOb3RpZmljYXRpb25PYmplY3QgfSBmcm9tICcuL3B1c2gnO1xyXG5pbXBvcnQgdHlwZSB7IFRvZ2dsZVN0b3JhZ2VUYXNrIH0gZnJvbSAnLi4vbXRwcm90by9tdHByb3Rvd29ya2VyJztcclxuaW1wb3J0IHR5cGUgeyBNeVVwbG9hZEZpbGUgfSBmcm9tICcuLi9tdHByb3RvL2FwaUZpbGVNYW5hZ2VyJztcclxuaW1wb3J0IHsgbG9nZ2VyLCBMb2dUeXBlcyB9IGZyb20gJy4uL2xvZ2dlcic7XHJcbmltcG9ydCB7IENhbmNlbGxhYmxlUHJvbWlzZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvY2FuY2VsbGFibGVQcm9taXNlJztcclxuaW1wb3J0IHsgQ0FDSEVfQVNTRVRTX05BTUUsIHJlcXVlc3RDYWNoZSB9IGZyb20gJy4vY2FjaGUnO1xyXG5pbXBvcnQgb25TdHJlYW1GZXRjaCBmcm9tICcuL3N0cmVhbSc7XHJcbmltcG9ydCB7IGNsb3NlQWxsTm90aWZpY2F0aW9ucywgb25QaW5nIH0gZnJvbSAnLi9wdXNoJztcclxuaW1wb3J0IENhY2hlU3RvcmFnZUNvbnRyb2xsZXIgZnJvbSAnLi4vY2FjaGVTdG9yYWdlJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2cgPSBsb2dnZXIoJ1NXJywgTG9nVHlwZXMuRXJyb3IgfCBMb2dUeXBlcy5EZWJ1ZyB8IExvZ1R5cGVzLkxvZyB8IExvZ1R5cGVzLldhcm4pO1xyXG5jb25zdCBjdHggPSBzZWxmIGFzIGFueSBhcyBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGU7XHJcbmV4cG9ydCBjb25zdCBkZWZlcnJlZFByb21pc2VzOiBNYXA8V2luZG93Q2xpZW50WydpZCddLCB7W3Rhc2tJZDogc3RyaW5nXTogQ2FuY2VsbGFibGVQcm9taXNlPGFueT59PiA9IG5ldyBNYXAoKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEZpbGVQYXJ0VGFzayBleHRlbmRzIE1vZGlmeTxXb3JrZXJUYXNrVGVtcGxhdGUsIHtpZDogc3RyaW5nfT4ge1xyXG4gIHR5cGU6ICdyZXF1ZXN0RmlsZVBhcnQnLFxyXG4gIHBheWxvYWQ6IFtudW1iZXIsIElucHV0RmlsZUxvY2F0aW9uIHwgSW5wdXRXZWJGaWxlTG9jYXRpb24sIG51bWJlciwgbnVtYmVyXVxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0RmlsZVBhcnRUYXNrUmVzcG9uc2UgZXh0ZW5kcyBNb2RpZnk8V29ya2VyVGFza1RlbXBsYXRlLCB7aWQ6IHN0cmluZ30+IHtcclxuICB0eXBlOiAncmVxdWVzdEZpbGVQYXJ0JyxcclxuICBwYXlsb2FkPzogTXlVcGxvYWRGaWxlLFxyXG4gIG9yaWdpbmFsUGF5bG9hZD86IFJlcXVlc3RGaWxlUGFydFRhc2tbJ3BheWxvYWQnXVxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlV29ya2VyUGluZ1Rhc2sgZXh0ZW5kcyBXb3JrZXJUYXNrVm9pZFRlbXBsYXRlIHtcclxuICB0eXBlOiAncGluZycsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgbG9jYWxOb3RpZmljYXRpb25zOiBib29sZWFuLFxyXG4gICAgbGFuZzoge1xyXG4gICAgICBwdXNoX2FjdGlvbl9tdXRlMWQ6IHN0cmluZ1xyXG4gICAgICBwdXNoX2FjdGlvbl9zZXR0aW5nczogc3RyaW5nXHJcbiAgICAgIHB1c2hfbWVzc2FnZV9ub3ByZXZpZXc6IHN0cmluZ1xyXG4gICAgfSxcclxuICAgIHNldHRpbmdzOiBXZWJQdXNoQXBpTWFuYWdlclsnc2V0dGluZ3MnXVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VydmljZVdvcmtlck5vdGlmaWNhdGlvbnNDbGVhclRhc2sgZXh0ZW5kcyBXb3JrZXJUYXNrVm9pZFRlbXBsYXRlIHtcclxuICB0eXBlOiAnbm90aWZpY2F0aW9uc19jbGVhcidcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VydmljZVdvcmtlclB1c2hDbGlja1Rhc2sgZXh0ZW5kcyBXb3JrZXJUYXNrVm9pZFRlbXBsYXRlIHtcclxuICB0eXBlOiAncHVzaF9jbGljaycsXHJcbiAgcGF5bG9hZDogUHVzaE5vdGlmaWNhdGlvbk9iamVjdFxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgU2VydmljZVdvcmtlclRhc2sgPSBSZXF1ZXN0RmlsZVBhcnRUYXNrUmVzcG9uc2UgfCBTZXJ2aWNlV29ya2VyUGluZ1Rhc2sgfCBTZXJ2aWNlV29ya2VyTm90aWZpY2F0aW9uc0NsZWFyVGFzayB8IFRvZ2dsZVN0b3JhZ2VUYXNrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgIFxyXG5jb25zdCB0YXNrTGlzdGVuZXJzOiB7XHJcbiAgW3R5cGUgaW4gU2VydmljZVdvcmtlclRhc2tbJ3R5cGUnXV06ICh0YXNrOiBhbnksIGV2ZW50OiBFeHRlbmRhYmxlTWVzc2FnZUV2ZW50KSA9PiB2b2lkXHJcbn0gPSB7XHJcbiAgbm90aWZpY2F0aW9uc19jbGVhcjogKCkgPT4ge1xyXG4gICAgY2xvc2VBbGxOb3RpZmljYXRpb25zKCk7XHJcbiAgfSxcclxuICBwaW5nOiAodGFzazogU2VydmljZVdvcmtlclBpbmdUYXNrLCBldmVudCkgPT4ge1xyXG4gICAgb25QaW5nKHRhc2ssIGV2ZW50KTtcclxuICB9LFxyXG4gIHJlcXVlc3RGaWxlUGFydDogKHRhc2s6IFJlcXVlc3RGaWxlUGFydFRhc2tSZXNwb25zZSwgZTogRXh0ZW5kYWJsZU1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgY29uc3Qgd2luZG93Q2xpZW50ID0gZS5zb3VyY2UgYXMgV2luZG93Q2xpZW50O1xyXG4gICAgY29uc3QgcHJvbWlzZXMgPSBkZWZlcnJlZFByb21pc2VzLmdldCh3aW5kb3dDbGllbnQuaWQpO1xyXG4gICAgaWYoIXByb21pc2VzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9taXNlID0gcHJvbWlzZXNbdGFzay5pZF07XHJcbiAgICBpZihwcm9taXNlKSB7XHJcbiAgICAgIGlmKHRhc2suZXJyb3IpIHtcclxuICAgICAgICBwcm9taXNlLnJlamVjdCh0YXNrLmVycm9yKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9taXNlLnJlc29sdmUodGFzay5wYXlsb2FkKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBkZWxldGUgcHJvbWlzZXNbdGFzay5pZF07XHJcbiAgICB9XHJcbiAgfSxcclxuICB0b2dnbGVTdG9yYWdlOiAodGFzazogVG9nZ2xlU3RvcmFnZVRhc2spID0+IHtcclxuICAgIENhY2hlU3RvcmFnZUNvbnRyb2xsZXIudG9nZ2xlU3RvcmFnZSh0YXNrLnBheWxvYWQpO1xyXG4gIH1cclxufTtcclxuY3R4LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZSkgPT4ge1xyXG4gIGNvbnN0IHRhc2sgPSBlLmRhdGEgYXMgU2VydmljZVdvcmtlclRhc2s7XHJcbiAgY29uc3QgY2FsbGJhY2sgPSB0YXNrTGlzdGVuZXJzW3Rhc2sudHlwZV07XHJcbiAgaWYoY2FsbGJhY2spIHtcclxuICAgIGNhbGxiYWNrKHRhc2ssIGUpO1xyXG4gIH1cclxufSk7XHJcbiAgICAgICAgICBcclxuXHJcbi8vY29uc3QgY2FjaGVTdG9yYWdlID0gbmV3IENhY2hlU3RvcmFnZUNvbnRyb2xsZXIoJ2NhY2hlZEFzc2V0cycpO1xyXG4vKiBsZXQgdGFza0lkID0gMDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrSWQoKSB7XHJcbiAgcmV0dXJuIHRhc2tJZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluY3JlbWVudFRhc2tJZCgpIHtcclxuICByZXR1cm4gdGFza0lkKys7XHJcbn0gKi9cclxuXHJcbmNvbnN0IG9uRmV0Y2ggPSAoZXZlbnQ6IEZldGNoRXZlbnQpOiB2b2lkID0+IHtcclxuICBpZihldmVudC5yZXF1ZXN0LnVybC5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbiArICcvJykgPT09IDAgJiYgZXZlbnQucmVxdWVzdC51cmwubWF0Y2goL1xcLihqc3xjc3N8anBlP2d8anNvbnx3YXNtfHBuZ3xtcDN8c3ZnfHRnc3xpY298d29mZjI/fHR0Znx3ZWJtYW5pZmVzdD8pKD86XFw/LiopPyQvKSkge1xyXG4gICAgcmV0dXJuIGV2ZW50LnJlc3BvbmRXaXRoKHJlcXVlc3RDYWNoZShldmVudCkpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IFssIHVybCwgc2NvcGUsIHBhcmFtc10gPSAvaHR0cFs6c10rXFwvXFwvLio/KFxcLyguKj8pKD86JHxcXC8oLiopJCkpLy5leGVjKGV2ZW50LnJlcXVlc3QudXJsKSB8fCBbXTtcclxuXHJcbiAgICAvL2xvZy5kZWJ1ZygnW2ZldGNoXTonLCBldmVudCk7XHJcbiAgXHJcbiAgICBzd2l0Y2goc2NvcGUpIHtcclxuICAgICAgY2FzZSAnc3RyZWFtJzoge1xyXG4gICAgICAgIG9uU3RyZWFtRmV0Y2goZXZlbnQsIHBhcmFtcyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGNhdGNoKGVycikge1xyXG4gICAgZXZlbnQucmVzcG9uZFdpdGgobmV3IFJlc3BvbnNlKCcnLCB7XHJcbiAgICAgIHN0YXR1czogNTAwLFxyXG4gICAgICBzdGF0dXNUZXh0OiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcclxuICAgIH0pKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBvbkNoYW5nZVN0YXRlID0gKCkgPT4ge1xyXG4gIGN0eC5vbmZldGNoID0gb25GZXRjaDtcclxufTtcclxuXHJcbmN0eC5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgKGV2ZW50KSA9PiB7XHJcbiAgbG9nKCdpbnN0YWxsaW5nJyk7XHJcbiAgZXZlbnQud2FpdFVudGlsKGN0eC5za2lwV2FpdGluZygpKTsgLy8gQWN0aXZhdGUgd29ya2VyIGltbWVkaWF0ZWx5XHJcbn0pO1xyXG5cclxuY3R4LmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgKGV2ZW50KSA9PiB7XHJcbiAgbG9nKCdhY3RpdmF0aW5nJywgY3R4KTtcclxuICBldmVudC53YWl0VW50aWwoY3R4LmNhY2hlcy5kZWxldGUoQ0FDSEVfQVNTRVRTX05BTUUpKTtcclxuICBldmVudC53YWl0VW50aWwoY3R4LmNsaWVudHMuY2xhaW0oKSk7XHJcbn0pO1xyXG5cclxuY3R4Lm9uZXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICBsb2cuZXJyb3IoJ2Vycm9yOicsIGVycm9yKTtcclxufTtcclxuXHJcbmN0eC5vbnVuaGFuZGxlZHJlamVjdGlvbiA9IChlcnJvcikgPT4ge1xyXG4gIGxvZy5lcnJvcignb251bmhhbmRsZWRyZWplY3Rpb246JywgZXJyb3IpO1xyXG59O1xyXG5cclxuY3R4Lm9ub2ZmbGluZSA9IGN0eC5vbm9ubGluZSA9IG9uQ2hhbmdlU3RhdGU7XHJcblxyXG5vbkNoYW5nZVN0YXRlKCk7XHJcbiIsIi8qXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3JldGhhbndvcmRzL3R3ZWJcclxuICogQ29weXJpZ2h0IChDKSAyMDE5LTIwMjEgRWR1YXJkIEt1em1lbmtvXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3JldGhhbndvcmRzL3R3ZWIvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKiBcclxuICogT3JpZ2luYWxseSBmcm9tOlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vemh1a292L3dlYm9ncmFtXHJcbiAqIENvcHlyaWdodCAoQykgMjAxNCBJZ29yIFpodWtvdiA8aWdvci5iZWF0bGVAZ21haWwuY29tPlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vemh1a292L3dlYm9ncmFtL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9jb25maWcvZGF0YWJhc2VzXCI7XHJcbmltcG9ydCBEQVRBQkFTRV9TVEFURSBmcm9tIFwiLi4vLi4vY29uZmlnL2RhdGFiYXNlcy9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBJU19GSVJFRk9YIH0gZnJvbSBcIi4uLy4uL2Vudmlyb25tZW50L3VzZXJBZ2VudFwiO1xyXG5pbXBvcnQgSURCU3RvcmFnZSBmcm9tIFwiLi4vaWRiXCI7XHJcbmltcG9ydCB7IGxvZywgU2VydmljZVdvcmtlclBpbmdUYXNrLCBTZXJ2aWNlV29ya2VyUHVzaENsaWNrVGFzayB9IGZyb20gXCIuL2luZGV4LnNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IGN0eCA9IHNlbGYgYXMgYW55IGFzIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZTtcclxuY29uc3QgZGVmYXVsdEJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0bmFtZSArIGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJykuc2xpY2UoMCwgLTEpLmpvaW4oJy8nKSArICcvJztcclxuXHJcbmV4cG9ydCB0eXBlIFB1c2hOb3RpZmljYXRpb25PYmplY3QgPSB7XHJcbiAgbG9jX2tleTogc3RyaW5nLFxyXG4gIGxvY19hcmdzOiBzdHJpbmdbXSxcclxuICAvL3VzZXJfaWQ6IG51bWJlciwgLy8gc2hvdWxkIGJlIG51bWJlclxyXG4gIGN1c3RvbToge1xyXG4gICAgY2hhbm5lbF9pZD86IHN0cmluZywgLy8gc2hvdWxkIGJlIG51bWJlclxyXG4gICAgY2hhdF9pZD86IHN0cmluZywgLy8gc2hvdWxkIGJlIG51bWJlclxyXG4gICAgZnJvbV9pZD86IHN0cmluZywgLy8gc2hvdWxkIGJlIG51bWJlclxyXG4gICAgbXNnX2lkOiBzdHJpbmcsXHJcbiAgICBwZWVySWQ/OiBzdHJpbmcgLy8gc2hvdWxkIGJlIG51bWJlclxyXG4gIH0sXHJcbiAgc291bmQ/OiBzdHJpbmcsXHJcbiAgcmFuZG9tX2lkOiBudW1iZXIsXHJcbiAgYmFkZ2U/OiBzdHJpbmcsIC8vIHNob3VsZCBiZSBudW1iZXJcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gIG11dGU6IHN0cmluZywgLy8gc2hvdWxkIGJlIG51bWJlclxyXG4gIHRpdGxlOiBzdHJpbmcsXHJcblxyXG4gIGFjdGlvbj86ICdtdXRlMWQnIHwgJ3B1c2hfc2V0dGluZ3MnLCAvLyB3aWxsIGJlIHNldCBiZWZvcmUgcG9zdE1lc3NhZ2UgdG8gbWFpbiB0aHJlYWRcclxufTtcclxuXHJcbmNsYXNzIFNvbWV0aGluZ0dldHRlcjxUIGV4dGVuZHMgRGF0YWJhc2U8YW55PiwgU3RvcmFnZSBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+IHtcclxuICBwcml2YXRlIGNhY2hlOiBQYXJ0aWFsPFN0b3JhZ2U+ID0ge307XHJcbiAgcHJpdmF0ZSBzdG9yYWdlOiBJREJTdG9yYWdlPFQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGRiOiBULCBcclxuICAgIHN0b3JlTmFtZTogdHlwZW9mIGRiWydzdG9yZXMnXVtudW1iZXJdWyduYW1lJ10sIFxyXG4gICAgcHJpdmF0ZSBkZWZhdWx0czoge1xyXG4gICAgICBbUHJvcGVydHkgaW4ga2V5b2YgU3RvcmFnZV06ICgodmFsdWU6IFN0b3JhZ2VbUHJvcGVydHldKSA9PiBTdG9yYWdlW1Byb3BlcnR5XSkgfCBTdG9yYWdlW1Byb3BlcnR5XVxyXG4gICAgfVxyXG4gICkge1xyXG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IElEQlN0b3JhZ2U8VD4oZGIsIHN0b3JlTmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0PFQgZXh0ZW5kcyBrZXlvZiBTdG9yYWdlPihrZXk6IFQpIHtcclxuICAgIGlmKHRoaXMuY2FjaGVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHZhbHVlOiBTdG9yYWdlW1RdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFsdWUgPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0KGtleSBhcyBzdHJpbmcpO1xyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5jYWNoZVtrZXldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5kZWZhdWx0c1trZXldO1xyXG4gICAgICB2YWx1ZSA9IHR5cGVvZihjYWxsYmFjaykgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjaygpIDogY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHNldDxUIGV4dGVuZHMga2V5b2YgU3RvcmFnZT4oa2V5OiBULCB2YWx1ZTogU3RvcmFnZVtUXSkge1xyXG4gICAgdGhpcy5jYWNoZVtrZXldID0gdmFsdWU7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5zdG9yYWdlLnNhdmUoa2V5IGFzIHN0cmluZywgdmFsdWUpO1xyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG50eXBlIFB1c2hTdG9yYWdlID0ge1xyXG4gIHB1c2hfbXV0ZV91bnRpbDogbnVtYmVyLFxyXG4gIHB1c2hfbGFzdF9hbGl2ZTogbnVtYmVyLFxyXG4gIHB1c2hfbGFuZzogUGFydGlhbDxTZXJ2aWNlV29ya2VyUGluZ1Rhc2tbJ3BheWxvYWQnXVsnbGFuZyddPlxyXG4gIHB1c2hfc2V0dGluZ3M6IFBhcnRpYWw8U2VydmljZVdvcmtlclBpbmdUYXNrWydwYXlsb2FkJ11bJ3NldHRpbmdzJ10+XHJcbn07XHJcblxyXG5jb25zdCBnZXR0ZXIgPSBuZXcgU29tZXRoaW5nR2V0dGVyPHR5cGVvZiBEQVRBQkFTRV9TVEFURSwgUHVzaFN0b3JhZ2U+KERBVEFCQVNFX1NUQVRFLCAnc2Vzc2lvbicsIHtcclxuICBwdXNoX211dGVfdW50aWw6IDAsXHJcbiAgcHVzaF9sYXN0X2FsaXZlOiAwLFxyXG4gIHB1c2hfbGFuZzoge30sXHJcbiAgcHVzaF9zZXR0aW5nczoge31cclxufSk7XHJcblxyXG5jdHguYWRkRXZlbnRMaXN0ZW5lcigncHVzaCcsIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IG9iajogUHVzaE5vdGlmaWNhdGlvbk9iamVjdCA9IGV2ZW50LmRhdGEuanNvbigpO1xyXG4gIGxvZygncHVzaCcsIG9iaik7XHJcblxyXG4gIGxldCBoYXNBY3RpdmVXaW5kb3dzID0gZmFsc2U7XHJcbiAgY29uc3QgY2hlY2tzUHJvbWlzZSA9IFByb21pc2UuYWxsKFtcclxuICAgIGdldHRlci5nZXQoJ3B1c2hfbXV0ZV91bnRpbCcpLCBcclxuICAgIGdldHRlci5nZXQoJ3B1c2hfbGFzdF9hbGl2ZScpLCBcclxuICAgIGN0eC5jbGllbnRzLm1hdGNoQWxsKHt0eXBlOiAnd2luZG93J30pXHJcbiAgXSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICBjb25zdCBbbXV0ZVVudGlsLCBsYXN0QWxpdmVUaW1lLCBjbGllbnRMaXN0XSA9IHJlc3VsdDtcclxuICAgIFxyXG4gICAgbG9nKCdtYXRjaGVkIGNsaWVudHMnLCBjbGllbnRMaXN0KTtcclxuICAgIGhhc0FjdGl2ZVdpbmRvd3MgPSBjbGllbnRMaXN0Lmxlbmd0aCA+IDA7XHJcbiAgICBpZihoYXNBY3RpdmVXaW5kb3dzKSB7XHJcbiAgICAgIHRocm93ICdTdXByZXNzIG5vdGlmaWNhdGlvbiBiZWNhdXNlIHNvbWUgaW5zdGFuY2UgaXMgYWxpdmUnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBub3dUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGlmKHVzZXJJbnZpc2libGVJc1N1cHBvcnRlZCgpICYmXHJcbiAgICAgICAgbXV0ZVVudGlsICYmXHJcbiAgICAgICAgbm93VGltZSA8IG11dGVVbnRpbCkge1xyXG4gICAgICB0aHJvdyBgU3VwcmVzcyBub3RpZmljYXRpb24gYmVjYXVzZSBtdXRlIGZvciAke01hdGguY2VpbCgobXV0ZVVudGlsIC0gbm93VGltZSkgLyA2MDAwMCl9IG1pbmA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIW9iai5iYWRnZSkge1xyXG4gICAgICB0aHJvdyAnTm8gYmFkZ2U/JztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY2hlY2tzUHJvbWlzZS5jYXRjaChyZWFzb24gPT4ge1xyXG4gICAgbG9nKHJlYXNvbik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG5vdGlmaWNhdGlvblByb21pc2UgPSBjaGVja3NQcm9taXNlLnRoZW4oKCkgPT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtnZXR0ZXIuZ2V0KCdwdXNoX3NldHRpbmdzJyksIGdldHRlci5nZXQoJ3B1c2hfbGFuZycpXSlcclxuICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIHJldHVybiBmaXJlTm90aWZpY2F0aW9uKG9iaiwgcmVzdWx0WzBdLCByZXN1bHRbMV0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjbG9zZVByb21pc2UgPSBub3RpZmljYXRpb25Qcm9taXNlLmNhdGNoKCgpID0+IHtcclxuICAgIGxvZygnQ2xvc2luZyBhbGwgbm90aWZpY2F0aW9ucyBvbiBwdXNoJywgaGFzQWN0aXZlV2luZG93cyk7XHJcbiAgICBpZih1c2VySW52aXNpYmxlSXNTdXBwb3J0ZWQoKSB8fCBoYXNBY3RpdmVXaW5kb3dzKSB7XHJcbiAgICAgIHJldHVybiBjbG9zZUFsbE5vdGlmaWNhdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3R4LnJlZ2lzdHJhdGlvbi5zaG93Tm90aWZpY2F0aW9uKCdUZWxlZ3JhbScsIHtcclxuICAgICAgdGFnOiAndW5rbm93bl9wZWVyJ1xyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIGlmKGhhc0FjdGl2ZVdpbmRvd3MpIHtcclxuICAgICAgICByZXR1cm4gY2xvc2VBbGxOb3RpZmljYXRpb25zKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2xvc2VBbGxOb3RpZmljYXRpb25zKCksIGhhc0FjdGl2ZVdpbmRvd3MgPyAwIDogMTAwKTtcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBsb2cuZXJyb3IoJ1Nob3cgbm90aWZpY2F0aW9uIGVycm9yJywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGV2ZW50LndhaXRVbnRpbChjbG9zZVByb21pc2UpO1xyXG59KTtcclxuXHJcbmN0eC5hZGRFdmVudExpc3RlbmVyKCdub3RpZmljYXRpb25jbGljaycsIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGV2ZW50Lm5vdGlmaWNhdGlvbjtcclxuICBsb2coJ09uIG5vdGlmaWNhdGlvbiBjbGljazogJywgbm90aWZpY2F0aW9uLnRhZyk7XHJcbiAgbm90aWZpY2F0aW9uLmNsb3NlKCk7XHJcblxyXG4gIGNvbnN0IGFjdGlvbiA9IGV2ZW50LmFjdGlvbiBhcyBQdXNoTm90aWZpY2F0aW9uT2JqZWN0WydhY3Rpb24nXTtcclxuICBpZihhY3Rpb24gPT09ICdtdXRlMWQnICYmIHVzZXJJbnZpc2libGVJc1N1cHBvcnRlZCgpKSB7XHJcbiAgICBsb2coJ1tTV10gbXV0ZSBmb3IgMWQnKTtcclxuICAgIGdldHRlci5zZXQoJ3B1c2hfbXV0ZV91bnRpbCcsIERhdGUubm93KCkgKyA4NjQwMGUzKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdGE6IFB1c2hOb3RpZmljYXRpb25PYmplY3QgPSBub3RpZmljYXRpb24uZGF0YTtcclxuICBpZighZGF0YSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvbWlzZSA9IGN0eC5jbGllbnRzLm1hdGNoQWxsKHtcclxuICAgIHR5cGU6ICd3aW5kb3cnXHJcbiAgfSkudGhlbigoY2xpZW50TGlzdCkgPT4ge1xyXG4gICAgZGF0YS5hY3Rpb24gPSBhY3Rpb247XHJcbiAgICBwZW5kaW5nTm90aWZpY2F0aW9uID0ge3R5cGU6ICdwdXNoX2NsaWNrJywgcGF5bG9hZDogZGF0YX07XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2xpZW50TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjbGllbnQgPSBjbGllbnRMaXN0W2ldO1xyXG4gICAgICBpZignZm9jdXMnIGluIGNsaWVudCkge1xyXG4gICAgICAgIGNsaWVudC5mb2N1cygpO1xyXG4gICAgICAgIGNsaWVudC5wb3N0TWVzc2FnZShwZW5kaW5nTm90aWZpY2F0aW9uKTtcclxuICAgICAgICBwZW5kaW5nTm90aWZpY2F0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGN0eC5jbGllbnRzLm9wZW5XaW5kb3cpIHtcclxuICAgICAgcmV0dXJuIGdldHRlci5nZXQoJ3B1c2hfc2V0dGluZ3MnKS50aGVuKChzZXR0aW5ncykgPT4ge1xyXG4gICAgICAgIHJldHVybiBjdHguY2xpZW50cy5vcGVuV2luZG93KHNldHRpbmdzLmJhc2VVcmwgfHwgZGVmYXVsdEJhc2VVcmwpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIGxvZy5lcnJvcignQ2xpZW50cy5tYXRjaEFsbCBlcnJvcicsIGVycm9yKTtcclxuICB9KVxyXG5cclxuICBldmVudC53YWl0VW50aWwocHJvbWlzZSk7XHJcbn0pO1xyXG5cclxuY3R4LmFkZEV2ZW50TGlzdGVuZXIoJ25vdGlmaWNhdGlvbmNsb3NlJywgb25DbG9zZU5vdGlmaWNhdGlvbik7XHJcblxyXG5sZXQgbm90aWZpY2F0aW9uczogU2V0PE5vdGlmaWNhdGlvbj4gPSBuZXcgU2V0KCk7XHJcbmxldCBwZW5kaW5nTm90aWZpY2F0aW9uOiBTZXJ2aWNlV29ya2VyUHVzaENsaWNrVGFzaztcclxuZnVuY3Rpb24gcHVzaFRvTm90aWZpY2F0aW9ucyhub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbikge1xyXG4gIGlmKCFub3RpZmljYXRpb25zLmhhcyhub3RpZmljYXRpb24pKSB7XHJcbiAgICBub3RpZmljYXRpb25zLmFkZChub3RpZmljYXRpb24pO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbm90aWZpY2F0aW9uLm9uY2xvc2UgPSBvbkNsb3NlTm90aWZpY2F0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25DbG9zZU5vdGlmaWNhdGlvbihldmVudDogTm90aWZpY2F0aW9uRXZlbnQpIHtcclxuICByZW1vdmVGcm9tTm90aWZpY2F0aW9ucyhldmVudC5ub3RpZmljYXRpb24pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZyb21Ob3RpZmljYXRpb25zKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKSB7XHJcbiAgbm90aWZpY2F0aW9ucy5kZWxldGUobm90aWZpY2F0aW9uKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlQWxsTm90aWZpY2F0aW9ucygpIHtcclxuICBmb3IoY29uc3Qgbm90aWZpY2F0aW9uIG9mIG5vdGlmaWNhdGlvbnMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIG5vdGlmaWNhdGlvbi5jbG9zZSgpO1xyXG4gICAgfSBjYXRjaChlKSB7fVxyXG4gIH1cclxuXHJcbiAgbGV0IHByb21pc2U6IFByb21pc2U8dm9pZD47XHJcbiAgaWYoJ2dldE5vdGlmaWNhdGlvbnMnIGluIGN0eC5yZWdpc3RyYXRpb24pIHtcclxuICAgIHByb21pc2UgPSBjdHgucmVnaXN0cmF0aW9uLmdldE5vdGlmaWNhdGlvbnMoe30pLnRoZW4oKG5vdGlmaWNhdGlvbnMpID0+IHtcclxuICAgICAgZm9yKGxldCBpID0gMCwgbGVuID0gbm90aWZpY2F0aW9ucy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBub3RpZmljYXRpb25zW2ldLmNsb3NlKCk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7fVxyXG4gICAgICB9XHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgbG9nLmVycm9yKCdPZmZsaW5lIHJlZ2lzdGVyIFNXIGVycm9yJywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcblxyXG4gIG5vdGlmaWNhdGlvbnMuY2xlYXIoKTtcclxuXHJcbiAgcmV0dXJuIHByb21pc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZXJJbnZpc2libGVJc1N1cHBvcnRlZCgpIHtcclxuICByZXR1cm4gSVNfRklSRUZPWDtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlyZU5vdGlmaWNhdGlvbihvYmo6IFB1c2hOb3RpZmljYXRpb25PYmplY3QsIHNldHRpbmdzOiBQdXNoU3RvcmFnZVsncHVzaF9zZXR0aW5ncyddLCBsYW5nOiBQdXNoU3RvcmFnZVsncHVzaF9sYW5nJ10pIHtcclxuICBjb25zdCBpY29uID0gJ2Fzc2V0cy9pbWcvbG9nb19maWxsZWRfcm91bmRlZC5wbmcnO1xyXG4gIGxldCB0aXRsZSA9IG9iai50aXRsZSB8fCAnVGVsZWdyYW0nO1xyXG4gIGxldCBib2R5ID0gb2JqLmRlc2NyaXB0aW9uIHx8ICcnO1xyXG4gIGxldCBwZWVySWQ6IHN0cmluZztcclxuXHJcbiAgaWYob2JqLmN1c3RvbSkge1xyXG4gICAgaWYob2JqLmN1c3RvbS5jaGFubmVsX2lkKSB7XHJcbiAgICAgIHBlZXJJZCA9ICcnICsgLW9iai5jdXN0b20uY2hhbm5lbF9pZDtcclxuICAgIH0gZWxzZSBpZihvYmouY3VzdG9tLmNoYXRfaWQpIHtcclxuICAgICAgcGVlcklkID0gJycgKyAtb2JqLmN1c3RvbS5jaGF0X2lkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGVlcklkID0gb2JqLmN1c3RvbS5mcm9tX2lkIHx8ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb2JqLmN1c3RvbS5wZWVySWQgPSAnJyArIHBlZXJJZDtcclxuICBsZXQgdGFnID0gJ3BlZXInICsgcGVlcklkO1xyXG5cclxuICBpZihzZXR0aW5ncyAmJiBzZXR0aW5ncy5ub3ByZXZpZXcpIHtcclxuICAgIHRpdGxlID0gJ1RlbGVncmFtJztcclxuICAgIGJvZHkgPSBsYW5nLnB1c2hfbWVzc2FnZV9ub3ByZXZpZXcgfHwgJ1lvdSBoYXZlIGEgbmV3IG1lc3NhZ2UnO1xyXG4gICAgdGFnID0gJ3Vua25vd25fcGVlcic7XHJcbiAgfVxyXG5cclxuICBsb2coJ3Nob3cgbm90aWZ5JywgdGl0bGUsIGJvZHksIGljb24sIG9iaik7XHJcblxyXG4gIGNvbnN0IGFjdGlvbnM6IChPbWl0PE5vdGlmaWNhdGlvbkFjdGlvbiwgJ2FjdGlvbic+ICYge2FjdGlvbjogUHVzaE5vdGlmaWNhdGlvbk9iamVjdFsnYWN0aW9uJ119KVtdID0gW3tcclxuICAgIGFjdGlvbjogJ211dGUxZCcsXHJcbiAgICB0aXRsZTogbGFuZy5wdXNoX2FjdGlvbl9tdXRlMWQgfHwgJ011dGUgZm9yIDI0SCdcclxuICB9LyogLCB7XHJcbiAgICBhY3Rpb246ICdwdXNoX3NldHRpbmdzJyxcclxuICAgIHRpdGxlOiBsYW5nLnB1c2hfYWN0aW9uX3NldHRpbmdzIHx8ICdTZXR0aW5ncydcclxuICB9ICovXTtcclxuXHJcbiAgY29uc3Qgbm90aWZpY2F0aW9uUHJvbWlzZSA9IGN0eC5yZWdpc3RyYXRpb24uc2hvd05vdGlmaWNhdGlvbih0aXRsZSwge1xyXG4gICAgYm9keSxcclxuICAgIGljb24sXHJcbiAgICB0YWcsXHJcbiAgICBkYXRhOiBvYmosXHJcbiAgICBhY3Rpb25zXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBub3RpZmljYXRpb25Qcm9taXNlLnRoZW4oKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBpZihldmVudCAmJiBldmVudC5ub3RpZmljYXRpb24pIHtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICBwdXNoVG9Ob3RpZmljYXRpb25zKGV2ZW50Lm5vdGlmaWNhdGlvbik7XHJcbiAgICB9XHJcbiAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICBsb2cuZXJyb3IoJ1Nob3cgbm90aWZpY2F0aW9uIHByb21pc2UnLCBlcnJvcik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvblBpbmcodGFzazogU2VydmljZVdvcmtlclBpbmdUYXNrLCBldmVudDogRXh0ZW5kYWJsZU1lc3NhZ2VFdmVudCkge1xyXG4gIGNvbnN0IGNsaWVudCA9IGV2ZW50LnBvcnRzICYmIGV2ZW50LnBvcnRzWzBdIHx8IGV2ZW50LnNvdXJjZTtcclxuICBjb25zdCBwYXlsb2FkID0gdGFzay5wYXlsb2FkO1xyXG5cclxuICBpZihwYXlsb2FkLmxvY2FsTm90aWZpY2F0aW9ucykge1xyXG4gICAgZ2V0dGVyLnNldCgncHVzaF9sYXN0X2FsaXZlJywgRGF0ZS5ub3coKSk7XHJcbiAgfVxyXG5cclxuICBpZihwZW5kaW5nTm90aWZpY2F0aW9uICYmXHJcbiAgICAgIGNsaWVudCAmJlxyXG4gICAgICAncG9zdE1lc3NhZ2UnIGluIGNsaWVudCkge1xyXG4gICAgY2xpZW50LnBvc3RNZXNzYWdlKHBlbmRpbmdOb3RpZmljYXRpb24sIFtdKTtcclxuICAgIHBlbmRpbmdOb3RpZmljYXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBpZihwYXlsb2FkLmxhbmcpIHtcclxuICAgIGdldHRlci5zZXQoJ3B1c2hfbGFuZycsIHBheWxvYWQubGFuZyk7XHJcbiAgfVxyXG5cclxuICBpZihwYXlsb2FkLnNldHRpbmdzKSB7XHJcbiAgICBnZXR0ZXIuc2V0KCdwdXNoX3NldHRpbmdzJywgcGF5bG9hZC5zZXR0aW5ncyk7XHJcbiAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3JldGhhbndvcmRzL3R3ZWJcclxuICogQ29weXJpZ2h0IChDKSAyMDE5LTIwMjEgRWR1YXJkIEt1em1lbmtvXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3JldGhhbndvcmRzL3R3ZWIvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IHJlYWRCbG9iQXNVaW50OEFycmF5IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvYmxvYlwiO1xyXG5pbXBvcnQgeyBDYW5jZWxsYWJsZVByb21pc2UsIGRlZmVycmVkUHJvbWlzZSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2NhbmNlbGxhYmxlUHJvbWlzZVwiO1xyXG5pbXBvcnQgeyBnZXRXaW5kb3dDbGllbnRzIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvY29udGV4dFwiO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcIi4uLy4uL2hlbHBlcnMvc2NoZWR1bGVycy9kZWJvdW5jZVwiO1xyXG5pbXBvcnQgeyBJbnB1dEZpbGVMb2NhdGlvbiwgVXBsb2FkRmlsZSB9IGZyb20gXCIuLi8uLi9sYXllclwiO1xyXG5pbXBvcnQgQ2FjaGVTdG9yYWdlQ29udHJvbGxlciBmcm9tIFwiLi4vY2FjaGVTdG9yYWdlXCI7XHJcbmltcG9ydCB7IERvd25sb2FkT3B0aW9ucyB9IGZyb20gXCIuLi9tdHByb3RvL2FwaUZpbGVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFJlcXVlc3RGaWxlUGFydFRhc2ssIGRlZmVycmVkUHJvbWlzZXMsIGxvZyB9IGZyb20gXCIuL2luZGV4LnNlcnZpY2VcIjtcclxuaW1wb3J0IHRpbWVvdXQgZnJvbSBcIi4vdGltZW91dFwiO1xyXG5cclxuY29uc3QgY2FjaGVTdG9yYWdlID0gbmV3IENhY2hlU3RvcmFnZUNvbnRyb2xsZXIoJ2NhY2hlZFN0cmVhbUNodW5rcycpO1xyXG5jb25zdCBDSFVOS19UVEwgPSA4NjQwMDtcclxuY29uc3QgQ0hVTktfQ0FDSEVEX1RJTUVfSEVBREVSID0gJ1RpbWUtQ2FjaGVkJztcclxuXHJcbmNvbnN0IGNsZWFyT2xkQ2h1bmtzID0gKCkgPT4ge1xyXG4gIHJldHVybiBjYWNoZVN0b3JhZ2UudGltZW91dE9wZXJhdGlvbigoY2FjaGUpID0+IHtcclxuICAgIHJldHVybiBjYWNoZS5rZXlzKCkudGhlbihyZXF1ZXN0cyA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkOiBNYXA8U3RyZWFtSWQsIFJlcXVlc3Q+ID0gbmV3IE1hcCgpO1xyXG4gICAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpIC8gMTAwMCB8IDA7XHJcbiAgICAgIGZvcihjb25zdCByZXF1ZXN0IG9mIHJlcXVlc3RzKSB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSByZXF1ZXN0LnVybC5tYXRjaCgvXFwvKFxcZCs/KVxcPy8pO1xyXG4gICAgICAgIGlmKG1hdGNoICYmICFmaWx0ZXJlZC5oYXMobWF0Y2hbMV0pKSB7XHJcbiAgICAgICAgICBmaWx0ZXJlZC5zZXQobWF0Y2hbMV0sIHJlcXVlc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8YW55PltdID0gW107XHJcbiAgICAgIGZvcihjb25zdCBbaWQsIHJlcXVlc3RdIG9mIGZpbHRlcmVkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNhY2hlLm1hdGNoKHJlcXVlc3QpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZigoK3Jlc3BvbnNlLmhlYWRlcnMuZ2V0KENIVU5LX0NBQ0hFRF9USU1FX0hFQURFUikgKyBDSFVOS19UVEwpIDw9IHRpbWVzdGFtcCkge1xyXG4gICAgICAgICAgICBsb2coJ3dpbGwgZGVsZXRlIHN0cmVhbSBjaHVuazonLCBpZCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWNoZS5kZWxldGUocmVxdWVzdCwge2lnbm9yZVNlYXJjaDogdHJ1ZSwgaWdub3JlVmFyeTogdHJ1ZX0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5zZXRJbnRlcnZhbChjbGVhck9sZENodW5rcywgMTgwMGUzKTtcclxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gIGdldFdpbmRvd0NsaWVudHMoKS50aGVuKChjbGllbnRzKSA9PiB7XHJcbiAgICBmb3IoY29uc3QgW2NsaWVudElkLCBwcm9taXNlc10gb2YgZGVmZXJyZWRQcm9taXNlcykge1xyXG4gICAgICBpZighY2xpZW50cy5maW5kKGNsaWVudCA9PiBjbGllbnQuaWQgPT09IGNsaWVudElkKSkge1xyXG4gICAgICAgIGZvcihjb25zdCB0YXNrSWQgaW4gcHJvbWlzZXMpIHtcclxuICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBwcm9taXNlc1t0YXNrSWRdO1xyXG4gICAgICAgICAgcHJvbWlzZS5yZWplY3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmVycmVkUHJvbWlzZXMuZGVsZXRlKGNsaWVudElkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59LCAxMjBlMyk7XHJcblxyXG50eXBlIFN0cmVhbVJhbmdlID0gW251bWJlciwgbnVtYmVyXTtcclxudHlwZSBTdHJlYW1JZCA9IERvY0lkO1xyXG5jb25zdCBzdHJlYW1zOiBNYXA8U3RyZWFtSWQsIFN0cmVhbT4gPSBuZXcgTWFwKCk7XHJcbmNsYXNzIFN0cmVhbSB7XHJcbiAgcHJpdmF0ZSBkZXN0cm95RGVib3VuY2VkOiAoKSA9PiB2b2lkO1xyXG4gIHByaXZhdGUgaWQ6IFN0cmVhbUlkO1xyXG4gIHByaXZhdGUgbGltaXRQYXJ0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBsb2FkZWRPZmZzZXRzOiBTZXQ8bnVtYmVyPiA9IG5ldyBTZXQoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmZvOiBEb3dubG9hZE9wdGlvbnMpIHtcclxuICAgIHRoaXMuaWQgPSBTdHJlYW0uZ2V0SWQoaW5mbyk7XHJcbiAgICBzdHJlYW1zLnNldCh0aGlzLmlkLCB0aGlzKTtcclxuXHJcbiAgICAvLyAhINC10YHQu9C4INCz0YDRg9C30LjRgtGMINC+0YfQtdC90Ywg0LHQvtC70YzRiNC+0LUg0LLQuNC00LXQviDRh9Cw0L3QutCw0LzQuCDQv9C+IDUxMtCa0LEg0LIg0LzQvtCx0LjQu9GM0L3QvtC8IFNhZmFyaSwg0YLQviDRgdGC0YDQuNC8INC90LUg0LfQsNC/0YPRgdGC0LjRgtGB0Y9cclxuICAgIHRoaXMubGltaXRQYXJ0ID0gaW5mby5zaXplID4gKDc1ICogMTAyNCAqIDEwMjQpID8gU1RSRUFNX0NIVU5LX1VQUEVSX0xJTUlUIDogU1RSRUFNX0NIVU5LX01JRERMRV9MSU1JVDtcclxuICAgIHRoaXMuZGVzdHJveURlYm91bmNlZCA9IGRlYm91bmNlKHRoaXMuZGVzdHJveSwgMTUwMDAwLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kgPSAoKSA9PiB7XHJcbiAgICBzdHJlYW1zLmRlbGV0ZSh0aGlzLmlkKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGFzeW5jIHJlcXVlc3RGaWxlUGFydEZyb21Xb3JrZXIoYWxpZ25lZE9mZnNldDogbnVtYmVyLCBsaW1pdDogbnVtYmVyLCBmcm9tUHJlbG9hZCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCB0YXNrOiBPbWl0PFJlcXVlc3RGaWxlUGFydFRhc2ssICdpZCc+ID0ge1xyXG4gICAgICB0eXBlOiAncmVxdWVzdEZpbGVQYXJ0JyxcclxuICAgICAgcGF5bG9hZDogW3RoaXMuaW5mby5kY0lkLCB0aGlzLmluZm8ubG9jYXRpb24sIGFsaWduZWRPZmZzZXQsIGxpbWl0XVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0YXNrSWQgPSBKU09OLnN0cmluZ2lmeSh0YXNrKTtcclxuICAgICh0YXNrIGFzIFJlcXVlc3RGaWxlUGFydFRhc2spLmlkID0gdGFza0lkO1xyXG5cclxuICAgIGNvbnN0IHdpbmRvd0NsaWVudCA9IGF3YWl0IGdldFdpbmRvd0NsaWVudHMoKS50aGVuKChjbGllbnRzKSA9PiB7XHJcbiAgICAgIGlmKCFjbGllbnRzLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNsaWVudHMuZmluZChjbGllbnQgPT4gZGVmZXJyZWRQcm9taXNlcy5oYXMoY2xpZW50LmlkKSkgfHwgY2xpZW50c1swXTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKCF3aW5kb3dDbGllbnQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyB3aW5kb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJvbWlzZXMgPSBkZWZlcnJlZFByb21pc2VzLmdldCh3aW5kb3dDbGllbnQuaWQpO1xyXG4gICAgaWYoIXByb21pc2VzKSB7XHJcbiAgICAgIGRlZmVycmVkUHJvbWlzZXMuc2V0KHdpbmRvd0NsaWVudC5pZCwgcHJvbWlzZXMgPSB7fSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBkZWZlcnJlZCA9IHByb21pc2VzW3Rhc2tJZF0gYXMgQ2FuY2VsbGFibGVQcm9taXNlPFVwbG9hZEZpbGUudXBsb2FkRmlsZT47XHJcbiAgICBpZihkZWZlcnJlZCkge1xyXG4gICAgICByZXR1cm4gZGVmZXJyZWQudGhlbih1cGxvYWRGaWxlID0+IHVwbG9hZEZpbGUuYnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB3aW5kb3dDbGllbnQucG9zdE1lc3NhZ2UodGFzayk7XHJcbiAgICB0aGlzLmxvYWRlZE9mZnNldHMuYWRkKGFsaWduZWRPZmZzZXQpO1xyXG4gICAgXHJcbiAgICBkZWZlcnJlZCA9IHByb21pc2VzW3Rhc2tJZF0gPSBkZWZlcnJlZFByb21pc2U8VXBsb2FkRmlsZS51cGxvYWRGaWxlPigpO1xyXG4gICAgY29uc3QgYnl0ZXNQcm9taXNlID0gZGVmZXJyZWQudGhlbih1cGxvYWRGaWxlID0+IHVwbG9hZEZpbGUuYnl0ZXMpO1xyXG5cclxuICAgIHRoaXMuc2F2ZUNodW5rVG9DYWNoZShieXRlc1Byb21pc2UsIGFsaWduZWRPZmZzZXQsIGxpbWl0KTtcclxuICAgICFmcm9tUHJlbG9hZCAmJiB0aGlzLnByZWxvYWRDaHVua3MoYWxpZ25lZE9mZnNldCwgYWxpZ25lZE9mZnNldCArICh0aGlzLmxpbWl0UGFydCAqIDE1KSk7XHJcblxyXG4gICAgcmV0dXJuIGJ5dGVzUHJvbWlzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVxdWVzdEZpbGVQYXJ0RnJvbUNhY2hlKGFsaWduZWRPZmZzZXQ6IG51bWJlciwgbGltaXQ6IG51bWJlciwgZnJvbVByZWxvYWQ/OiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBrZXkgPSB0aGlzLmdldENodW5rS2V5KGFsaWduZWRPZmZzZXQsIGxpbWl0KTtcclxuICAgIHJldHVybiBjYWNoZVN0b3JhZ2UuZ2V0RmlsZShrZXkpLnRoZW4oKGJsb2I6IEJsb2IpID0+IHtcclxuICAgICAgcmV0dXJuIGZyb21QcmVsb2FkID8gbmV3IFVpbnQ4QXJyYXkoKSA6IHJlYWRCbG9iQXNVaW50OEFycmF5KGJsb2IpO1xyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgIGlmKGVycm9yID09PSAnTk9fRU5UUllfRk9VTkQnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVxdWVzdEZpbGVQYXJ0KGFsaWduZWRPZmZzZXQ6IG51bWJlciwgbGltaXQ6IG51bWJlciwgZnJvbVByZWxvYWQ/OiBib29sZWFuKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0RmlsZVBhcnRGcm9tQ2FjaGUoYWxpZ25lZE9mZnNldCwgbGltaXQsIGZyb21QcmVsb2FkKS50aGVuKGJ5dGVzID0+IHtcclxuICAgICAgcmV0dXJuIGJ5dGVzIHx8IHRoaXMucmVxdWVzdEZpbGVQYXJ0RnJvbVdvcmtlcihhbGlnbmVkT2Zmc2V0LCBsaW1pdCwgZnJvbVByZWxvYWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNhdmVDaHVua1RvQ2FjaGUoZGVmZXJyZWQ6IFByb21pc2U8VWludDhBcnJheT4sIGFsaWduZWRPZmZzZXQ6IG51bWJlciwgbGltaXQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGRlZmVycmVkLnRoZW4oYnl0ZXMgPT4ge1xyXG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmdldENodW5rS2V5KGFsaWduZWRPZmZzZXQsIGxpbWl0KTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYnl0ZXMsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1MZW5ndGgnOiAnJyArIGJ5dGVzLmxlbmd0aCxcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcclxuICAgICAgICAgIFtDSFVOS19DQUNIRURfVElNRV9IRUFERVJdOiAnJyArIChEYXRlLm5vdygpIC8gMTAwMCB8IDApXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBjYWNoZVN0b3JhZ2Uuc2F2ZShrZXksIHJlc3BvbnNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcmVsb2FkQ2h1bmsob2Zmc2V0OiBudW1iZXIpIHtcclxuICAgIGlmKHRoaXMubG9hZGVkT2Zmc2V0cy5oYXMob2Zmc2V0KSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sb2FkZWRPZmZzZXRzLmFkZChvZmZzZXQpO1xyXG4gICAgdGhpcy5yZXF1ZXN0RmlsZVBhcnQob2Zmc2V0LCB0aGlzLmxpbWl0UGFydCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByZWxvYWRDaHVua3Mob2Zmc2V0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XHJcbiAgICBpZihlbmQgPiB0aGlzLmluZm8uc2l6ZSkge1xyXG4gICAgICBlbmQgPSB0aGlzLmluZm8uc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZighb2Zmc2V0KSB7IC8vIGxvYWQgbGFzdCBjaHVuayBmb3IgYm91bmRzXHJcbiAgICAgIHRoaXMucHJlbG9hZENodW5rKGFsaWduT2Zmc2V0KG9mZnNldCwgdGhpcy5saW1pdFBhcnQpKTtcclxuICAgIH0gZWxzZSB7IC8vIGRvbid0IHByZWxvYWQgbmV4dCBjaHVua3MgYmVmb3JlIHRoZSBzdGFydFxyXG4gICAgICBmb3IoOyBvZmZzZXQgPCBlbmQ7IG9mZnNldCArPSB0aGlzLmxpbWl0UGFydCkge1xyXG4gICAgICAgIHRoaXMucHJlbG9hZENodW5rKG9mZnNldCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXF1ZXN0UmFuZ2UocmFuZ2U6IFN0cmVhbVJhbmdlKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3lEZWJvdW5jZWQoKTtcclxuXHJcbiAgICBjb25zdCBwb3NzaWJsZVJlc3BvbnNlID0gcmVzcG9uc2VGb3JTYWZhcmlGaXJzdFJhbmdlKHJhbmdlLCB0aGlzLmluZm8ubWltZVR5cGUsIHRoaXMuaW5mby5zaXplKTtcclxuICAgIGlmKHBvc3NpYmxlUmVzcG9uc2UpIHtcclxuICAgICAgcmV0dXJuIHBvc3NpYmxlUmVzcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IFtvZmZzZXQsIGVuZF0gPSByYW5nZTtcclxuXHJcbiAgICAvKiBpZihpbmZvLnNpemUgPiBsaW1pdFBhcnQgJiYgaXNTYWZhcmkgJiYgb2Zmc2V0ID09PSBsaW1pdFBhcnQpIHtcclxuICAgICAgLy9lbmQgPSBpbmZvLnNpemUgLSAxO1xyXG4gICAgICAvL29mZnNldCA9IGluZm8uc2l6ZSAtIDEgLSBsaW1pdFBhcnQ7XHJcbiAgICAgIG9mZnNldCA9IGluZm8uc2l6ZSAtIChpbmZvLnNpemUgJSBsaW1pdFBhcnQpO1xyXG4gICAgfSAqL1xyXG5cclxuICAgIGNvbnN0IGxpbWl0ID0gZW5kICYmIGVuZCA8IHRoaXMubGltaXRQYXJ0ID8gYWxpZ25MaW1pdChlbmQgLSBvZmZzZXQgKyAxKSA6IHRoaXMubGltaXRQYXJ0O1xyXG4gICAgY29uc3QgYWxpZ25lZE9mZnNldCA9IGFsaWduT2Zmc2V0KG9mZnNldCwgbGltaXQpO1xyXG5cclxuICAgIGlmKCFlbmQpIHtcclxuICAgICAgZW5kID0gTWF0aC5taW4ob2Zmc2V0ICsgbGltaXQsIHRoaXMuaW5mby5zaXplIC0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdEZpbGVQYXJ0KGFsaWduZWRPZmZzZXQsIGxpbWl0KS50aGVuKGFiID0+IHtcclxuICAgICAgLy9sb2cuZGVidWcoJ1tzdHJlYW1dIHJlcXVlc3RGaWxlUGFydCByZXN1bHQ6JywgcmVzdWx0KTtcclxuXHJcbiAgICAgIC8vIGlmKGlzU2FmYXJpKSB7XHJcbiAgICAgIGlmKG9mZnNldCAhPT0gYWxpZ25lZE9mZnNldCB8fCBlbmQgIT09IChhbGlnbmVkT2Zmc2V0ICsgbGltaXQpKSB7XHJcbiAgICAgICAgYWIgPSBhYi5zbGljZShvZmZzZXQgLSBhbGlnbmVkT2Zmc2V0LCBlbmQgLSBhbGlnbmVkT2Zmc2V0ICsgMSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgICAgICAgJ0FjY2VwdC1SYW5nZXMnOiAnYnl0ZXMnLFxyXG4gICAgICAgICdDb250ZW50LVJhbmdlJzogYGJ5dGVzICR7b2Zmc2V0fS0ke29mZnNldCArIGFiLmJ5dGVMZW5ndGggLSAxfS8ke3RoaXMuaW5mby5zaXplIHx8ICcqJ31gLFxyXG4gICAgICAgICdDb250ZW50LUxlbmd0aCc6IGAke2FiLmJ5dGVMZW5ndGh9YFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYodGhpcy5pbmZvLm1pbWVUeXBlKSB7XHJcbiAgICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB0aGlzLmluZm8ubWltZVR5cGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHNpbXVsYXRlIHNsb3cgY29ubmVjdGlvblxyXG4gICAgICAvL3NldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoYWIsIHtcclxuICAgICAgICAgIHN0YXR1czogMjA2LFxyXG4gICAgICAgICAgc3RhdHVzVGV4dDogJ1BhcnRpYWwgQ29udGVudCcsXHJcbiAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAvL30sIDIuNWUzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDaHVua0tleShhbGlnbmVkT2Zmc2V0OiBudW1iZXIsIGxpbWl0OiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmlkICsgJz9vZmZzZXQ9JyArIGFsaWduZWRPZmZzZXQgKyAnJmxpbWl0PScgKyBsaW1pdDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0KGluZm86IERvd25sb2FkT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHN0cmVhbXMuZ2V0KHRoaXMuZ2V0SWQoaW5mbykpID8/IG5ldyBTdHJlYW0oaW5mbyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBnZXRJZChpbmZvOiBEb3dubG9hZE9wdGlvbnMpIHtcclxuICAgIHJldHVybiAoaW5mby5sb2NhdGlvbiBhcyBJbnB1dEZpbGVMb2NhdGlvbi5pbnB1dERvY3VtZW50RmlsZUxvY2F0aW9uKS5pZDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uU3RyZWFtRmV0Y2goZXZlbnQ6IEZldGNoRXZlbnQsIHBhcmFtczogc3RyaW5nKSB7XHJcbiAgY29uc3QgcmFuZ2UgPSBwYXJzZVJhbmdlKGV2ZW50LnJlcXVlc3QuaGVhZGVycy5nZXQoJ1JhbmdlJykpO1xyXG4gIGNvbnN0IGluZm86IERvd25sb2FkT3B0aW9ucyA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtcykpO1xyXG4gIGNvbnN0IHN0cmVhbSA9IFN0cmVhbS5nZXQoaW5mbyk7XHJcblxyXG4gIC8vbG9nLmRlYnVnKCdbc3RyZWFtXScsIHVybCwgb2Zmc2V0LCBlbmQpO1xyXG5cclxuICBldmVudC5yZXNwb25kV2l0aChQcm9taXNlLnJhY2UoW1xyXG4gICAgdGltZW91dCg0NSAqIDEwMDApLFxyXG4gICAgc3RyZWFtLnJlcXVlc3RSYW5nZShyYW5nZSlcclxuICBdKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3BvbnNlRm9yU2FmYXJpRmlyc3RSYW5nZShyYW5nZTogU3RyZWFtUmFuZ2UsIG1pbWVUeXBlOiBzdHJpbmcsIHNpemU6IG51bWJlcik6IFJlc3BvbnNlIHtcclxuICBpZihyYW5nZVswXSA9PT0gMCAmJiByYW5nZVsxXSA9PT0gMSkge1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShuZXcgVWludDhBcnJheSgyKS5idWZmZXIsIHtcclxuICAgICAgc3RhdHVzOiAyMDYsXHJcbiAgICAgIHN0YXR1c1RleHQ6ICdQYXJ0aWFsIENvbnRlbnQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0FjY2VwdC1SYW5nZXMnOiAnYnl0ZXMnLFxyXG4gICAgICAgICdDb250ZW50LVJhbmdlJzogYGJ5dGVzIDAtMS8ke3NpemUgfHwgJyonfWAsXHJcbiAgICAgICAgJ0NvbnRlbnQtTGVuZ3RoJzogJzInLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiBtaW1lVHlwZSB8fCAndmlkZW8vbXA0JyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbi8qIGNvbnN0IFNUUkVBTV9DSFVOS19VUFBFUl9MSU1JVCA9IDI1NiAqIDEwMjQ7XHJcbmNvbnN0IFNNQUxMRVNUX0NIVU5LX0xJTUlUID0gMjU2ICogNDsgKi9cclxuLyogY29uc3QgU1RSRUFNX0NIVU5LX1VQUEVSX0xJTUlUID0gMTAyNCAqIDEwMjQ7XHJcbmNvbnN0IFNNQUxMRVNUX0NIVU5LX0xJTUlUID0gMTAyNCAqIDQ7ICovXHJcbmNvbnN0IFNUUkVBTV9DSFVOS19NSURETEVfTElNSVQgPSA1MTIgKiAxMDI0O1xyXG5jb25zdCBTVFJFQU1fQ0hVTktfVVBQRVJfTElNSVQgPSAxMDI0ICogMTAyNDtcclxuY29uc3QgU01BTExFU1RfQ0hVTktfTElNSVQgPSA1MTIgKiA0O1xyXG5cclxuZnVuY3Rpb24gcGFyc2VSYW5nZShoZWFkZXI6IHN0cmluZyk6IFN0cmVhbVJhbmdlIHtcclxuICBpZighaGVhZGVyKSByZXR1cm4gWzAsIDBdO1xyXG4gIGNvbnN0IFssIGNodW5rc10gPSBoZWFkZXIuc3BsaXQoJz0nKTtcclxuICBjb25zdCByYW5nZXMgPSBjaHVua3Muc3BsaXQoJywgJyk7XHJcbiAgY29uc3QgW29mZnNldCwgZW5kXSA9IHJhbmdlc1swXS5zcGxpdCgnLScpO1xyXG5cclxuICByZXR1cm4gWytvZmZzZXQsICtlbmQgfHwgMF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsaWduT2Zmc2V0KG9mZnNldDogbnVtYmVyLCBiYXNlID0gU01BTExFU1RfQ0hVTktfTElNSVQpIHtcclxuICByZXR1cm4gb2Zmc2V0IC0gKG9mZnNldCAlIGJhc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbGlnbkxpbWl0KGxpbWl0OiBudW1iZXIpIHtcclxuICByZXR1cm4gMiAqKiBNYXRoLmNlaWwoTWF0aC5sb2cobGltaXQpIC8gTWF0aC5sb2coMikpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVvdXQoZGVsYXk6IG51bWJlcik6IFByb21pc2U8UmVzcG9uc2U+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKChyZXNvbHZlKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoJycsIHtcclxuICAgICAgICBzdGF0dXM6IDQwOCxcclxuICAgICAgICBzdGF0dXNUZXh0OiAnUmVxdWVzdCB0aW1lZCBvdXQuJyxcclxuICAgICAgfSkpO1xyXG4gICAgfSwgZGVsYXkpO1xyXG4gIH0pKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9