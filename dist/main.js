/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n/* eslint-env browser */\r\n\r\n/*\r\n  eslint-disable\r\n  no-console,\r\n  func-names\r\n*/\r\n\r\n/** @typedef {any} TODO */\r\nvar normalizeUrl = __webpack_require__(/*! ./normalize-url */ \"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js\");\r\n\r\nvar srcByModuleId = Object.create(null);\r\nvar noDocument = typeof document === \"undefined\";\r\nvar forEach = Array.prototype.forEach;\r\n/**\r\n * @param {function} fn\r\n * @param {number} time\r\n * @returns {(function(): void)|*}\r\n */\r\n\r\nfunction debounce(fn, time) {\r\n  var timeout = 0;\r\n  return function () {\r\n    // @ts-ignore\r\n    var self = this; // eslint-disable-next-line prefer-rest-params\r\n\r\n    var args = arguments;\r\n\r\n    var functionCall = function functionCall() {\r\n      return fn.apply(self, args);\r\n    };\r\n\r\n    clearTimeout(timeout); // @ts-ignore\r\n\r\n    timeout = setTimeout(functionCall, time);\r\n  };\r\n}\r\n\r\nfunction noop() {}\r\n/**\r\n * @param {TODO} moduleId\r\n * @returns {TODO}\r\n */\r\n\r\n\r\nfunction getCurrentScriptUrl(moduleId) {\r\n  var src = srcByModuleId[moduleId];\r\n\r\n  if (!src) {\r\n    if (document.currentScript) {\r\n      src =\r\n      /** @type {HTMLScriptElement} */\r\n      document.currentScript.src;\r\n    } else {\r\n      var scripts = document.getElementsByTagName(\"script\");\r\n      var lastScriptTag = scripts[scripts.length - 1];\r\n\r\n      if (lastScriptTag) {\r\n        src = lastScriptTag.src;\r\n      }\r\n    }\r\n\r\n    srcByModuleId[moduleId] = src;\r\n  }\r\n  /**\r\n   * @param {string} fileMap\r\n   * @returns {null | string[]}\r\n   */\r\n\r\n\r\n  return function (fileMap) {\r\n    if (!src) {\r\n      return null;\r\n    }\r\n\r\n    var splitResult = src.split(/([^\\\\/]+)\\.js$/);\r\n    var filename = splitResult && splitResult[1];\r\n\r\n    if (!filename) {\r\n      return [src.replace(\".js\", \".css\")];\r\n    }\r\n\r\n    if (!fileMap) {\r\n      return [src.replace(\".js\", \".css\")];\r\n    }\r\n\r\n    return fileMap.split(\",\").map(function (mapRule) {\r\n      var reg = new RegExp(\"\".concat(filename, \"\\\\.js$\"), \"g\");\r\n      return normalizeUrl(src.replace(reg, \"\".concat(mapRule.replace(/{fileName}/g, filename), \".css\")));\r\n    });\r\n  };\r\n}\r\n/**\r\n * @param {TODO} el\r\n * @param {string} [url]\r\n */\r\n\r\n\r\nfunction updateCss(el, url) {\r\n  if (!url) {\r\n    if (!el.href) {\r\n      return;\r\n    } // eslint-disable-next-line\r\n\r\n\r\n    url = el.href.split(\"?\")[0];\r\n  }\r\n\r\n  if (!isUrlRequest(\r\n  /** @type {string} */\r\n  url)) {\r\n    return;\r\n  }\r\n\r\n  if (el.isLoaded === false) {\r\n    // We seem to be about to replace a css link that hasn't loaded yet.\r\n    // We're probably changing the same file more than once.\r\n    return;\r\n  }\r\n\r\n  if (!url || !(url.indexOf(\".css\") > -1)) {\r\n    return;\r\n  } // eslint-disable-next-line no-param-reassign\r\n\r\n\r\n  el.visited = true;\r\n  var newEl = el.cloneNode();\r\n  newEl.isLoaded = false;\r\n  newEl.addEventListener(\"load\", function () {\r\n    if (newEl.isLoaded) {\r\n      return;\r\n    }\r\n\r\n    newEl.isLoaded = true;\r\n    el.parentNode.removeChild(el);\r\n  });\r\n  newEl.addEventListener(\"error\", function () {\r\n    if (newEl.isLoaded) {\r\n      return;\r\n    }\r\n\r\n    newEl.isLoaded = true;\r\n    el.parentNode.removeChild(el);\r\n  });\r\n  newEl.href = \"\".concat(url, \"?\").concat(Date.now());\r\n\r\n  if (el.nextSibling) {\r\n    el.parentNode.insertBefore(newEl, el.nextSibling);\r\n  } else {\r\n    el.parentNode.appendChild(newEl);\r\n  }\r\n}\r\n/**\r\n * @param {string} href\r\n * @param {TODO} src\r\n * @returns {TODO}\r\n */\r\n\r\n\r\nfunction getReloadUrl(href, src) {\r\n  var ret; // eslint-disable-next-line no-param-reassign\r\n\r\n  href = normalizeUrl(href);\r\n  src.some(\r\n  /**\r\n   * @param {string} url\r\n   */\r\n  // eslint-disable-next-line array-callback-return\r\n  function (url) {\r\n    if (href.indexOf(src) > -1) {\r\n      ret = url;\r\n    }\r\n  });\r\n  return ret;\r\n}\r\n/**\r\n * @param {string} [src]\r\n * @returns {boolean}\r\n */\r\n\r\n\r\nfunction reloadStyle(src) {\r\n  if (!src) {\r\n    return false;\r\n  }\r\n\r\n  var elements = document.querySelectorAll(\"link\");\r\n  var loaded = false;\r\n  forEach.call(elements, function (el) {\r\n    if (!el.href) {\r\n      return;\r\n    }\r\n\r\n    var url = getReloadUrl(el.href, src);\r\n\r\n    if (!isUrlRequest(url)) {\r\n      return;\r\n    }\r\n\r\n    if (el.visited === true) {\r\n      return;\r\n    }\r\n\r\n    if (url) {\r\n      updateCss(el, url);\r\n      loaded = true;\r\n    }\r\n  });\r\n  return loaded;\r\n}\r\n\r\nfunction reloadAll() {\r\n  var elements = document.querySelectorAll(\"link\");\r\n  forEach.call(elements, function (el) {\r\n    if (el.visited === true) {\r\n      return;\r\n    }\r\n\r\n    updateCss(el);\r\n  });\r\n}\r\n/**\r\n * @param {string} url\r\n * @returns {boolean}\r\n */\r\n\r\n\r\nfunction isUrlRequest(url) {\r\n  // An URL is not an request if\r\n  // It is not http or https\r\n  if (!/^[a-zA-Z][a-zA-Z\\d+\\-.]*:/.test(url)) {\r\n    return false;\r\n  }\r\n\r\n  return true;\r\n}\r\n/**\r\n * @param {TODO} moduleId\r\n * @param {TODO} options\r\n * @returns {TODO}\r\n */\r\n\r\n\r\nmodule.exports = function (moduleId, options) {\r\n  if (noDocument) {\r\n    console.log(\"no window.document found, will not HMR CSS\");\r\n    return noop;\r\n  }\r\n\r\n  var getScriptSrc = getCurrentScriptUrl(moduleId);\r\n\r\n  function update() {\r\n    var src = getScriptSrc(options.filename);\r\n    var reloaded = reloadStyle(src);\r\n\r\n    if (options.locals) {\r\n      console.log(\"[HMR] Detected local css modules. Reload all css\");\r\n      reloadAll();\r\n      return;\r\n    }\r\n\r\n    if (reloaded) {\r\n      console.log(\"[HMR] css reload %s\", src.join(\" \"));\r\n    } else {\r\n      console.log(\"[HMR] Reload all css\");\r\n      reloadAll();\r\n    }\r\n  }\r\n\r\n  return debounce(update, 50);\r\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ (function(module) {

"use strict";
eval("\r\n\r\n/* eslint-disable */\r\n\r\n/**\r\n * @param {string[]} pathComponents\r\n * @returns {string}\r\n */\r\nfunction normalizeUrl(pathComponents) {\r\n  return pathComponents.reduce(function (accumulator, item) {\r\n    switch (item) {\r\n      case \"..\":\r\n        accumulator.pop();\r\n        break;\r\n\r\n      case \".\":\r\n        break;\r\n\r\n      default:\r\n        accumulator.push(item);\r\n    }\r\n\r\n    return accumulator;\r\n  },\r\n  /** @type {string[]} */\r\n  []).join(\"/\");\r\n}\r\n/**\r\n * @param {string} urlString\r\n * @returns {string}\r\n */\r\n\r\n\r\nmodule.exports = function (urlString) {\r\n  urlString = urlString.trim();\r\n\r\n  if (/^data:/i.test(urlString)) {\r\n    return urlString;\r\n  }\r\n\r\n  var protocol = urlString.indexOf(\"//\") !== -1 ? urlString.split(\"//\")[0] + \"//\" : \"\";\r\n  var components = urlString.replace(new RegExp(protocol, \"i\"), \"\").split(\"/\");\r\n  var host = components[0].toLowerCase().replace(/\\.$/, \"\");\r\n  components[0] = \"\";\r\n  var path = normalizeUrl(components);\r\n  return protocol + host + path;\r\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1655707602491\n      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://webpack-demo/./src/main.css?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/client.js":
/*!*****************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/client.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("/*\r\n  Copyright © 2018 Andrew Powell\r\n\r\n  This Source Code Form is subject to the terms of the Mozilla Public\r\n  License, v. 2.0. If a copy of the MPL was not distributed with this\r\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\r\n\r\n  The above copyright notice and this permission notice shall be\r\n  included in all copies or substantial portions of this Source Code Form.\r\n*/\r\n\r\n/**\r\n * @note This file exists merely as an easy reference for folks adding it to their configuration entries\r\n */\r\n\r\n(() => {\r\n  /* eslint-disable global-require */\r\n  const { run } = __webpack_require__(/*! ./lib/client/client */ \"./node_modules/webpack-plugin-serve/lib/client/client.js\");\r\n  let hash = '<unknown>';\r\n  let options;\r\n  try {\r\n    options = {\"compress\":null,\"headers\":null,\"historyFallback\":false,\"hmr\":true,\"host\":null,\"liveReload\":true,\"log\":{\"level\":\"info\",\"prefix\":{\"template\":\"{{level}}\"},\"name\":\"webpack-plugin-serve\"},\"open\":false,\"port\":8080,\"progress\":true,\"publicPath\":null,\"ramdisk\":false,\"secure\":false,\"static\":\"./dist\",\"status\":true,\"waitForBuild\":true,\"address\":\"[::]:8080\",\"compilerName\":null,\"wpsId\":\"07696cd\"};\r\n  } catch (e) {\r\n    const { log } = __webpack_require__(/*! ./lib/client/log */ \"./node_modules/webpack-plugin-serve/lib/client/log.js\");\r\n    log.error(\r\n      'The entry for webpack-plugin-serve was included in your build, but it does not appear that the plugin was. Please check your configuration.'\r\n    );\r\n  }\r\n\r\n  try {\r\n    // eslint-disable-next-line camelcase\r\n    hash = __webpack_require__.h();\r\n  } catch (e) {} // eslint-disable-line no-empty\r\n\r\n  run(hash, options);\r\n})();\r\n\n\n//# sourceURL=webpack://webpack-demo/./node_modules/webpack-plugin-serve/client.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/ClientSocket.js":
/*!**********************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/ClientSocket.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/*\r\n  Copyright © 2018 Andrew Powell\r\n\r\n  This Source Code Form is subject to the terms of the Mozilla Public\r\n  License, v. 2.0. If a copy of the MPL was not distributed with this\r\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\r\n\r\n  The above copyright notice and this permission notice shall be\r\n  included in all copies or substantial portions of this Source Code Form.\r\n*/\r\nconst { error, refresh, warn } = __webpack_require__(/*! ./log */ \"./node_modules/webpack-plugin-serve/lib/client/log.js\")();\r\n\r\n// ignore 1008 (HTTP 400 equivalent) and 1011 (HTTP 500 equivalent)\r\nconst ignoreCodes = [1008, 1011];\r\nconst maxAttempts = 10;\r\n\r\nclass ClientSocket {\r\n  constructor(options, ...args) {\r\n    this.args = args;\r\n    this.attempts = 0;\r\n    this.eventHandlers = [];\r\n    this.options = options;\r\n    this.retrying = false;\r\n\r\n    this.connect();\r\n  }\r\n\r\n  addEventListener(...args) {\r\n    this.eventHandlers.push(args);\r\n    this.socket.addEventListener(...args);\r\n  }\r\n\r\n  close() {\r\n    this.socket.close();\r\n  }\r\n\r\n  connect() {\r\n    if (this.socket) {\r\n      delete this.socket;\r\n    }\r\n\r\n    this.connecting = true;\r\n\r\n    this.socket = new WebSocket(...this.args);\r\n\r\n    if (this.options.retry) {\r\n      this.socket.addEventListener('close', (event) => {\r\n        if (ignoreCodes.includes(event.code)) {\r\n          return;\r\n        }\r\n\r\n        if (!this.retrying) {\r\n          warn(`The WebSocket was closed and will attempt to reconnect`);\r\n        }\r\n\r\n        this.reconnect();\r\n      });\r\n    } else {\r\n      this.socket.onclose = () => warn(`The client WebSocket was closed. ${refresh}`);\r\n    }\r\n\r\n    this.socket.addEventListener('open', () => {\r\n      this.attempts = 0;\r\n      this.retrying = false;\r\n    });\r\n\r\n    if (this.eventHandlers.length) {\r\n      for (const [name, fn] of this.eventHandlers) {\r\n        this.socket.addEventListener(name, fn);\r\n      }\r\n    }\r\n  }\r\n\r\n  reconnect() {\r\n    this.attempts += 1;\r\n    this.retrying = true;\r\n\r\n    if (this.attempts > maxAttempts) {\r\n      error(`The WebSocket could not be reconnected. ${refresh}`);\r\n      this.retrying = false;\r\n      return;\r\n    }\r\n\r\n    const timeout = 1000 * this.attempts ** 2;\r\n\r\n    setTimeout(() => this.connect(this.args), timeout);\r\n  }\r\n\r\n  removeEventListener(...args) {\r\n    const [, handler] = args;\r\n    this.eventHandlers = this.eventHandlers.filter(([, fn]) => fn === handler);\r\n    this.socket.removeEventListener(...args);\r\n  }\r\n}\r\n\r\nmodule.exports = { ClientSocket };\r\n\n\n//# sourceURL=webpack://webpack-demo/./node_modules/webpack-plugin-serve/lib/client/ClientSocket.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/client.js":
/*!****************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/client.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/*\r\n  Copyright © 2018 Andrew Powell\r\n\r\n  This Source Code Form is subject to the terms of the Mozilla Public\r\n  License, v. 2.0. If a copy of the MPL was not distributed with this\r\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\r\n\r\n  The above copyright notice and this permission notice shall be\r\n  included in all copies or substantial portions of this Source Code Form.\r\n*/\r\n/* eslint-disable global-require */\r\nconst run = (buildHash, options) => {\r\n  const { address, client = {}, hmr, progress, secure, status } = options;\r\n\r\n  options.firstInstance = !window.webpackPluginServe; // eslint-disable-line no-param-reassign\r\n\r\n  window.webpackPluginServe = window.webpackPluginServe || {\r\n    compilers: {}\r\n  };\r\n  window.webpackPluginServe.silent = !!client.silent;\r\n\r\n  const { ClientSocket } = __webpack_require__(/*! ./ClientSocket */ \"./node_modules/webpack-plugin-serve/lib/client/ClientSocket.js\");\r\n  const { replace } = __webpack_require__(/*! ./hmr */ \"./node_modules/webpack-plugin-serve/lib/client/hmr.js\");\r\n  const { error, info, warn } = __webpack_require__(/*! ./log */ \"./node_modules/webpack-plugin-serve/lib/client/log.js\")();\r\n\r\n  const protocol = secure ? 'wss' : 'ws';\r\n  const socket = new ClientSocket(client, `${client.protocol || protocol}://${client.address || address}/wps`);\r\n\r\n  const { compilerName } = options;\r\n\r\n  window.webpackPluginServe.compilers[compilerName] = {};\r\n\r\n  // prevents ECONNRESET errors on the server\r\n  window.addEventListener('beforeunload', () => socket.close());\r\n\r\n  socket.addEventListener('message', (message) => {\r\n    const { action, data = {} } = JSON.parse(message.data);\r\n    const { errors, hash = '<?>', warnings } = data || {};\r\n    const shortHash = hash.slice(0, 7);\r\n    const identifier = options.compilerName ? `(Compiler: ${options.compilerName}) ` : '';\r\n    const compiler = window.webpackPluginServe.compilers[compilerName];\r\n    const { wpsId } = data;\r\n\r\n    switch (action) {\r\n      case 'build':\r\n        compiler.done = false;\r\n        break;\r\n      case 'connected':\r\n        info(`WebSocket connected ${identifier}`);\r\n        break;\r\n      case 'done':\r\n        compiler.done = true;\r\n        break;\r\n      case 'problems':\r\n        if (data.errors.length) {\r\n          error(`${identifier}Build ${shortHash} produced errors:\\n`, errors);\r\n        }\r\n        if (data.warnings.length) {\r\n          warn(`${identifier}Build ${shortHash} produced warnings:\\n`, warnings);\r\n        }\r\n        break;\r\n      case 'reload':\r\n        window.location.reload();\r\n        break;\r\n      case 'replace':\r\n        // actions with a wpsId in tow indicate actions that should only be executed when the wpsId sent\r\n        // matches the wpsId set in options. this is how we can identify multiple compilers in the\r\n        // client.\r\n        if (wpsId && wpsId === options.wpsId) {\r\n          replace(buildHash, hash, hmr === 'refresh-on-failure');\r\n        }\r\n        break;\r\n      default:\r\n    }\r\n  });\r\n\r\n  if (options.firstInstance) {\r\n    if (progress === 'minimal') {\r\n      const { init } = __webpack_require__(/*! ./overlays/progress-minimal */ \"./node_modules/webpack-plugin-serve/lib/client/overlays/progress-minimal.js\");\r\n      init(options, socket);\r\n    } else if (progress) {\r\n      const { init } = __webpack_require__(/*! ./overlays/progress */ \"./node_modules/webpack-plugin-serve/lib/client/overlays/progress.js\");\r\n      init(options, socket);\r\n    }\r\n\r\n    if (status) {\r\n      const { init } = __webpack_require__(/*! ./overlays/status */ \"./node_modules/webpack-plugin-serve/lib/client/overlays/status.js\");\r\n      init(options, socket);\r\n    }\r\n\r\n    if (true) {\r\n      info('Hot Module Replacement is active');\r\n\r\n      if (options.liveReload) {\r\n        info('Live Reload taking precedence over Hot Module Replacement');\r\n      }\r\n    } else {}\r\n\r\n    if (false) {}\r\n  }\r\n};\r\n\r\nmodule.exports = { run };\r\n\n\n//# sourceURL=webpack://webpack-demo/./node_modules/webpack-plugin-serve/lib/client/client.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/hmr.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/hmr.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/*\r\n  Copyright © 2018 Andrew Powell\r\n\r\n  This Source Code Form is subject to the terms of the Mozilla Public\r\n  License, v. 2.0. If a copy of the MPL was not distributed with this\r\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\r\n\r\n  The above copyright notice and this permission notice shall be\r\n  included in all copies or substantial portions of this Source Code Form.\r\n*/\r\nconst { error, info, refresh, warn } = __webpack_require__(/*! ./log */ \"./node_modules/webpack-plugin-serve/lib/client/log.js\")();\r\n\r\nlet latest = true;\r\n\r\nconst hmr = (onFailure) => {\r\n  return {\r\n    onUnaccepted(data) {\r\n      onFailure();\r\n      warn('Change in unaccepted module(s):\\n', data);\r\n      warn(data);\r\n    },\r\n    onDeclined(data) {\r\n      onFailure();\r\n      warn('Change in declined module(s):\\n', data);\r\n    },\r\n    onErrored(data) {\r\n      onFailure();\r\n      error('Error in module(s):\\n', data);\r\n    }\r\n  };\r\n};\r\n\r\nconst replace = async (buildHash, hash, refreshOnFailure) => {\r\n  const { apply, check, status } = module.hot;\r\n\r\n  if (hash) {\r\n    // eslint-disable-next-line no-undef\r\n    latest = hash.includes(buildHash);\r\n  }\r\n\r\n  if (!latest) {\r\n    const hmrStatus = status();\r\n\r\n    if (hmrStatus === 'abort' || hmrStatus === 'fail') {\r\n      warn(`An HMR update was triggered, but ${hmrStatus}ed. ${refresh}`);\r\n      return;\r\n    }\r\n\r\n    let modules;\r\n\r\n    try {\r\n      modules = await check(false);\r\n    } catch (e) {\r\n      // noop. this typically happens when a MultiCompiler has more than one compiler that includes\r\n      // this script, and an update happens with a hash that isn't part of the compiler/module this\r\n      // instance was loaded for.\r\n      return;\r\n    }\r\n\r\n    if (!modules) {\r\n      warn(`No modules found for replacement. ${refresh}`);\r\n      return;\r\n    }\r\n\r\n    modules = await apply(\r\n      hmr(\r\n        refreshOnFailure\r\n          ? () => {\r\n              if (refreshOnFailure) {\r\n                // eslint-disable-next-line no-undef\r\n                location.reload();\r\n              }\r\n            }\r\n          : () => {}\r\n      )\r\n    );\r\n\r\n    if (modules) {\r\n      latest = true;\r\n      info(`Build ${hash.slice(0, 7)} replaced:\\n`, modules);\r\n    }\r\n  }\r\n};\r\n\r\nmodule.exports = { replace };\r\n\n\n//# sourceURL=webpack://webpack-demo/./node_modules/webpack-plugin-serve/lib/client/hmr.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/log.js ***!
  \*************************************************************/
/***/ (function(module) {

eval("/*\r\n  Copyright © 2018 Andrew Powell\r\n\r\n  This Source Code Form is subject to the terms of the Mozilla Public\r\n  License, v. 2.0. If a copy of the MPL was not distributed with this\r\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\r\n\r\n  The above copyright notice and this permission notice shall be\r\n  included in all copies or substantial portions of this Source Code Form.\r\n*/\r\nconst { error, info, warn } = console;\r\nconst log = {\r\n  error: error.bind(console, '⬡ wps:'),\r\n  info: info.bind(console, '⬡ wps:'),\r\n  refresh: 'Please refresh the page',\r\n  warn: warn.bind(console, '⬡ wps:')\r\n};\r\nconst noop = () => {};\r\nconst silent = {\r\n  error: noop,\r\n  info: noop,\r\n  warn: noop\r\n};\r\n\r\nmodule.exports = () => (window.webpackPluginServe.silent ? silent : log);\r\n\n\n//# sourceURL=webpack://webpack-demo/./node_modules/webpack-plugin-serve/lib/client/log.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/overlays/progress-minimal.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/overlays/progress-minimal.js ***!
  \***********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/*\r\n  Copyright © 2018 Andrew Powell, Matheus Gonçalves da Silva\r\n\r\n  This Source Code Form is subject to the terms of the Mozilla Public\r\n  License, v. 2.0. If a copy of the MPL was not distributed with this\r\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\r\n\r\n  The above copyright notice and this permission notice shall be\r\n  included in all copies or substantial portions of this Source Code Form.\r\n*/\r\nconst { addCss, addHtml } = __webpack_require__(/*! ./util */ \"./node_modules/webpack-plugin-serve/lib/client/overlays/util.js\");\r\n\r\nconst ns = 'wps-progress-minimal';\r\nconst html = `\r\n<div id=\"${ns}\" class=\"${ns}-hidden\">\r\n  <div id=\"${ns}-bar\"></div>\r\n</div>\r\n`;\r\nconst css = `\r\n#${ns} {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: 4px;\r\n  width: 100vw;\r\n  z-index: 2147483645;\r\n}\r\n\r\n#${ns}-bar {\r\n  width: 0%;\r\n  height: 4px;\r\n  background-color: rgb(186, 223, 172);\r\n}\r\n\r\n@keyframes ${ns}-fade {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n.${ns}-disappear {\r\n  animation: ${ns}-fade .3s;\r\n  animation-fill-mode: forwards;\r\n  animation-delay: .5s;\r\n}\r\n\r\n.${ns}-hidden {\r\n  display: none;\r\n}\r\n`;\r\n\r\nlet hideOnPageVisible = false;\r\n\r\nconst update = (percent) => {\r\n  const bar = document.querySelector(`#${ns}-bar`);\r\n  bar.style.width = `${percent}%`;\r\n};\r\n\r\nconst reset = (wrapper) => {\r\n  wrapper.classList.add(`${ns}-disappear`);\r\n};\r\n\r\nconst init = (options, socket) => {\r\n  if (options.firstInstance) {\r\n    document.addEventListener('DOMContentLoaded', () => {\r\n      addCss(css);\r\n      addHtml(html);\r\n\r\n      const wrapper = document.querySelector(`#${ns}`);\r\n      wrapper.addEventListener('animationend', () => {\r\n        update(0);\r\n        wrapper.classList.add(`${ns}-hidden`);\r\n      });\r\n    });\r\n\r\n    document.addEventListener('visibilitychange', () => {\r\n      if (!document.hidden && hideOnPageVisible) {\r\n        const wrapper = document.querySelector(`#${ns}`);\r\n        reset(wrapper);\r\n        hideOnPageVisible = false;\r\n      }\r\n    });\r\n  }\r\n\r\n  socket.addEventListener('message', (message) => {\r\n    const { action, data } = JSON.parse(message.data);\r\n\r\n    if (action !== 'progress') {\r\n      return;\r\n    }\r\n\r\n    const percent = Math.floor(data.percent * 100);\r\n    const wrapper = document.querySelector(`#${ns}`);\r\n\r\n    if (wrapper) {\r\n      wrapper.classList.remove(`${ns}-hidden`, `${ns}-disappear`);\r\n    }\r\n\r\n    if (data.percent === 1) {\r\n      if (document.hidden) {\r\n        hideOnPageVisible = true;\r\n      } else {\r\n        reset(wrapper);\r\n      }\r\n    } else {\r\n      hideOnPageVisible = false;\r\n    }\r\n\r\n    update(percent);\r\n  });\r\n};\r\n\r\nmodule.exports = {\r\n  init\r\n};\r\n\n\n//# sourceURL=webpack://webpack-demo/./node_modules/webpack-plugin-serve/lib/client/overlays/progress-minimal.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/overlays/progress.js":
/*!***************************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/overlays/progress.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/*\r\n  Copyright © 2018 Andrew Powell, Matheus Gonçalves da Silva\r\n\r\n  This Source Code Form is subject to the terms of the Mozilla Public\r\n  License, v. 2.0. If a copy of the MPL was not distributed with this\r\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\r\n\r\n  The above copyright notice and this permission notice shall be\r\n  included in all copies or substantial portions of this Source Code Form.\r\n*/\r\nconst { addCss, addHtml } = __webpack_require__(/*! ./util */ \"./node_modules/webpack-plugin-serve/lib/client/overlays/util.js\");\r\n\r\nconst ns = 'wps-progress';\r\nconst css = `\r\n#${ns}{\r\n  width: 200px;\r\n  height: 200px;\r\n  position: fixed;\r\n  right: 5%;\r\n  top: 5%;\r\n  transition: opacity .25s ease-in-out;\r\n  z-index: 2147483645;\r\n}\r\n\r\n#${ns}-bg {\r\n  fill: #282d35;\r\n}\r\n\r\n#${ns}-fill {\r\n  fill: rgba(0, 0, 0, 0);\r\n  stroke: rgb(186, 223, 172);\r\n  stroke-dasharray: 219.99078369140625;\r\n  stroke-dashoffset: -219.99078369140625;\r\n  stroke-width: 10;\r\n  transform: rotate(90deg)translate(0px, -80px);\r\n}\r\n\r\n#${ns}-percent {\r\n  font-family: 'Open Sans';\r\n  font-size: 18px;\r\n  fill: #ffffff;\r\n}\r\n\r\n#${ns}-percent-value {\r\n  dominant-baseline: middle;\r\n  text-anchor: middle;\r\n}\r\n\r\n#${ns}-percent-super {\r\n  fill: #bdc3c7;\r\n  font-size: .45em;\r\n  baseline-shift: 10%;\r\n}\r\n\r\n.${ns}-noselect {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  cursor: default;\r\n}\r\n\r\n@keyframes ${ns}-fade {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\ttransform: scale(1);\r\n\t\t-webkit-transform: scale(1);\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t\ttransform: scale(0);\r\n\t\t-webkit-transform: scale(0);\r\n\t}\r\n}\r\n\r\n.${ns}-disappear {\r\n  animation: ${ns}-fade .3s;\r\n  animation-fill-mode:forwards;\r\n  animation-delay: .5s;\r\n}\r\n\r\n.${ns}-hidden {\r\n  display: none;\r\n}\r\n\r\n/* Put google web font at the end, or you'll see FOUC in Firefox */\r\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');\r\n`;\r\n\r\nconst html = `\r\n<svg id=\"${ns}\" class=\"${ns}-noselect ${ns}-hidden\" x=\"0px\" y=\"0px\" viewBox=\"0 0 80 80\">\r\n  <circle id=\"${ns}-bg\" cx=\"50%\" cy=\"50%\" r=\"35\"></circle>\r\n  <path id=\"${ns}-fill\" d=\"M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0\" />\r\n  <text id=\"${ns}-percent\" x=\"50%\" y=\"51%\"><tspan id=\"${ns}-percent-value\">0</tspan><tspan id=\"${ns}-percent-super\">%</tspan></text>\r\n</svg>\r\n`;\r\n\r\nlet hideOnPageVisible = false;\r\n\r\nconst update = (percent) => {\r\n  const max = -219.99078369140625;\r\n  const value = document.querySelector(`#${ns}-percent-value`);\r\n  const track = document.querySelector(`#${ns}-fill`);\r\n  const offset = ((100 - percent) / 100) * max;\r\n\r\n  track.setAttribute('style', `stroke-dashoffset: ${offset}`);\r\n  value.innerHTML = percent.toString();\r\n};\r\n\r\nconst reset = (svg) => {\r\n  svg.classList.add(`${ns}-disappear`);\r\n};\r\n\r\nconst init = (options, socket) => {\r\n  if (options.firstInstance) {\r\n    document.addEventListener('DOMContentLoaded', () => {\r\n      addCss(css);\r\n      addHtml(html);\r\n\r\n      // Reset progress to zero after disappear animation\r\n      const svg = document.querySelector(`#${ns}`);\r\n      svg.addEventListener('animationend', () => {\r\n        update(0);\r\n        svg.classList.add(`${ns}-hidden`);\r\n      });\r\n    });\r\n\r\n    document.addEventListener('visibilitychange', () => {\r\n      if (!document.hidden && hideOnPageVisible) {\r\n        const svg = document.querySelector(`#${ns}`);\r\n        reset(svg);\r\n        hideOnPageVisible = false;\r\n      }\r\n    });\r\n  }\r\n\r\n  socket.addEventListener('message', (message) => {\r\n    const { action, data } = JSON.parse(message.data);\r\n\r\n    if (action !== 'progress') {\r\n      return;\r\n    }\r\n\r\n    const percent = Math.floor(data.percent * 100);\r\n    const svg = document.querySelector(`#${ns}`);\r\n\r\n    if (!svg) {\r\n      return;\r\n    }\r\n\r\n    // we can safely call this even if it doesn't have the class\r\n    svg.classList.remove(`${ns}-disappear`, `${ns}-hidden`);\r\n\r\n    if (data.percent === 1) {\r\n      if (document.hidden) {\r\n        hideOnPageVisible = true;\r\n      } else {\r\n        reset(svg);\r\n      }\r\n    } else {\r\n      hideOnPageVisible = false;\r\n    }\r\n\r\n    update(percent);\r\n  });\r\n};\r\n\r\nmodule.exports = { init };\r\n\n\n//# sourceURL=webpack://webpack-demo/./node_modules/webpack-plugin-serve/lib/client/overlays/progress.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/overlays/status.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/overlays/status.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/*\r\n  Copyright © 2018 Andrew Powell\r\n\r\n  This Source Code Form is subject to the terms of the Mozilla Public\r\n  License, v. 2.0. If a copy of the MPL was not distributed with this\r\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\r\n\r\n  The above copyright notice and this permission notice shall be\r\n  included in all copies or substantial portions of this Source Code Form.\r\n*/\r\nconst { addCss, addHtml, socketMessage } = __webpack_require__(/*! ./util */ \"./node_modules/webpack-plugin-serve/lib/client/overlays/util.js\");\r\n\r\nconst ns = 'wps-status';\r\nconst css = `\r\n#${ns} {\r\n  background: #282d35;\r\n  border-radius: 0.6em;\r\n  display: flex;\r\n  flex-direction: column;\r\n\tfont-family: 'Open Sans', Helvetica, Arial, sans-serif;\r\n\tfont-size: 10px;\r\n  height: 90%;\r\n  min-height: 20em;\r\n  left: 50%;\r\n  opacity: 1;\r\n  overflow: hidden;\r\n  padding-bottom: 3em;\r\n  position: absolute;\r\n  top: 2rem;\r\n  transform: translateX(-50%);\r\n  transition: opacity .25s ease-in-out;\r\n  width: 95%;\r\n  z-index: 2147483645;\r\n}\r\n\r\n@keyframes ${ns}-hidden-display {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t}\r\n\t99% {\r\n\t\tdisplay: inline-flex;\r\n\t\topacity: 0;\r\n\t}\r\n\t100% {\r\n\t\tdisplay: none;\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n#${ns}.${ns}-hidden {\r\n  animation: ${ns}-hidden-display .3s;\r\n  animation-fill-mode:forwards;\r\n  display: none;\r\n}\r\n\r\n#${ns}.${ns}-min {\r\n  animation: minimize 10s;\r\n  bottom: 2em;\r\n  cursor: pointer;\r\n  height: 6em;\r\n  left: auto;\r\n  min-height: 6em;\r\n  padding-bottom: 0;\r\n  position: absolute;\r\n  right: 2em;\r\n  top: auto;\r\n  transform: none;\r\n  width: 6em;\r\n}\r\n\r\n#${ns}.${ns}-min #${ns}-beacon {\r\n  display: block;\r\n}\r\n\r\n#${ns}-title {\r\n  color: #fff;\r\n  font-size: 1.2em;\r\n  font-weight: normal;\r\n  margin: 0;\r\n  padding: 0.6em 0;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n#${ns}.${ns}-min #${ns}-title {\r\n  display: none;\r\n}\r\n\r\n#${ns}-title-errors {\r\n  color: #ff5f58;\r\n  font-style: normal;\r\n  padding-left: 1em;\r\n}\r\n\r\n#${ns}-title-warnings {\r\n  color: #ffbd2e;\r\n  font-style: normal;\r\n  padding-left: 1em;\r\n}\r\n\r\n#${ns}-problems {\r\n  overflow-y: auto;\r\n  padding: 1em 2em;\r\n}\r\n\r\n#${ns}-problems pre {\r\n  color: #ddd;\r\n  background: #282d35;\r\n  display: block;\r\n  font-size: 1.3em;\r\n\tfont-family: 'Open Sans', Helvetica, Arial, sans-serif;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n#${ns}-problems pre em {\r\n  background: #ff5f58;\r\n  border-radius: 0.3em;\r\n  color: #641e16;\r\n  font-style: normal;\r\n  line-height: 3em;\r\n  margin-right: 0.4em;\r\n  padding: 0.1em 0.4em;\r\n  text-transform: uppercase;\r\n}\r\n\r\npre#${ns}-warnings em {\r\n  background: #ffbd2e;\r\n  color: #3e2723;\r\n}\r\n\r\npre#${ns}-success {\r\n  display: none;\r\n  text-align: center;\r\n}\r\n\r\npre#${ns}-success em {\r\n  background: #7fb900;\r\n  color: #004d40;\r\n}\r\n\r\n#${ns}-problems.${ns}-success #${ns}-success {\r\n  display: block;\r\n}\r\n\r\n#${ns}.${ns}-min #${ns}-problems {\r\n  display: none;\r\n}\r\n\r\n#${ns}-nav {\r\n  opacity: 0.5;\r\n  padding: 1.2em;\r\n  position: absolute;\r\n}\r\n\r\n#${ns}.${ns}-min #${ns}-nav {\r\n  display: none;\r\n}\r\n\r\n#${ns}-nav:hover {\r\n  opacity: 1;\r\n}\r\n\r\n#${ns}-nav div {\r\n  background: #ff5f58;\r\n  border-radius: 1.2em;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  height: 1.2em;\r\n  position: relative;\r\n  width: 1.2em;\r\n}\r\n\r\ndiv#${ns}-min {\r\n  background: #ffbd2e;\r\n  margin-left: 0.8em;\r\n}\r\n\r\n#${ns}-beacon {\r\n  border-radius: 3em;\r\n  display: none;\r\n  font-size: 10px;\r\n  height: 3em;\r\n  margin: 1.6em auto;\r\n  position: relative;\r\n  width: 3em;\r\n}\r\n\r\n#${ns}-beacon:before, #${ns}-beacon:after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(127,185,0, 0.2);\r\n  border-radius: 3em;\r\n  opacity: 0;\r\n}\r\n\r\n#${ns}-beacon:before {\r\n  animation: ${ns}-pulse 3s infinite linear;\r\n  transform: scale(1);\r\n}\r\n\r\n#${ns}-beacon:after {\r\n  animation: ${ns}-pulse 3s 2s infinite linear;\r\n}\r\n\r\n\r\n@keyframes ${ns}-pulse {\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale(0.6);\r\n  }\r\n  33% {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    transform: scale(1.4);\r\n  }\r\n}\r\n\r\n#${ns}-beacon mark {\r\n  background: rgba(127, 185, 0, 1);\r\n  border-radius: 100% 100%;\r\n  height: 1em;\r\n  left: 1em;\r\n  position: absolute;\r\n  top: 1em;\r\n  width: 1em;\r\n}\r\n\r\n#${ns}-beacon.${ns}-error mark {\r\n  background: #ff5f58;\r\n}\r\n\r\n#${ns}-beacon.${ns}-error:before, #${ns}-beacon.error:after {\r\n  background: rgba(255, 95, 88, 0.2);\r\n}\r\n\r\n#${ns}-beacon.${ns}-warning mark {\r\n  background: #ffbd2e;\r\n}\r\n\r\n#${ns}-beacon.${ns}-warning:before, #${ns}-beacon.warning:after {\r\n  background: rgba(255, 189, 46, 0.2);\r\n}\r\n\r\n/* Put google web font at the end, or you'll see FOUC in Firefox */\r\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');\r\n`;\r\n\r\nconst html = `\r\n<aside id=\"${ns}\" class=\"${ns}-hidden\" title=\"build status\">\r\n  <figure id=\"${ns}-beacon\">\r\n    <mark/>\r\n  </figure>\r\n  <nav id=\"${ns}-nav\">\r\n    <div id=\"${ns}-close\" title=\"close\"></div>\r\n    <div id=\"${ns}-min\" title=\"minmize\"></div>\r\n  </nav>\r\n  <h1 id=\"${ns}-title\">\r\n    build status\r\n    <em id=\"${ns}-title-errors\"></em>\r\n    <em id=\"${ns}-title-warnings\"></em>\r\n  </h1>\r\n  <article id=\"${ns}-problems\">\r\n    <pre id=\"${ns}-success\"><em>Build Successful</em></pre>\r\n    <pre id=\"${ns}-errors\"></pre>\r\n    <pre id=\"${ns}-warnings\"></pre>\r\n  </article>\r\n</aside>\r\n`;\r\n\r\nconst init = (options, socket) => {\r\n  const hidden = `${ns}-hidden`;\r\n  let hasProblems = false;\r\n  let aside;\r\n  let beacon;\r\n  let problems;\r\n  let preErrors;\r\n  let preWarnings;\r\n  let titleErrors;\r\n  let titleWarnings;\r\n\r\n  const reset = () => {\r\n    preErrors.innerHTML = '';\r\n    preWarnings.innerHTML = '';\r\n    problems.classList.remove(`${ns}-success`);\r\n    beacon.className = '';\r\n    titleErrors.innerText = '';\r\n    titleWarnings.innerText = '';\r\n  };\r\n\r\n  const addErrors = (errors) => {\r\n    if (errors.length) {\r\n      problems.classList.remove(`${ns}-success`);\r\n      beacon.classList.add(`${ns}-error`);\r\n\r\n      for (const error of errors) {\r\n        const markup = `<div><em>Error</em> in ${error}</div>`;\r\n        addHtml(markup, preErrors);\r\n      }\r\n\r\n      titleErrors.innerText = `${errors.length} Error(s)`;\r\n    } else {\r\n      titleErrors.innerText = '';\r\n    }\r\n    aside.classList.remove(hidden);\r\n  };\r\n\r\n  const addWarnings = (warnings) => {\r\n    if (warnings.length) {\r\n      problems.classList.remove(`${ns}-success`);\r\n\r\n      if (!beacon.classList.contains(`${ns}-error`)) {\r\n        beacon.classList.add(`${ns}-warning`);\r\n      }\r\n\r\n      for (const warning of warnings) {\r\n        const markup = `<div><em>Warning</em> in ${warning}</div>`;\r\n        addHtml(markup, preWarnings);\r\n      }\r\n\r\n      titleWarnings.innerText = `${warnings.length} Warning(s)`;\r\n    } else {\r\n      titleWarnings.innerText = '';\r\n    }\r\n\r\n    aside.classList.remove(hidden);\r\n  };\r\n\r\n  if (options.firstInstance) {\r\n    document.addEventListener('DOMContentLoaded', () => {\r\n      addCss(css);\r\n      [aside] = addHtml(html);\r\n      beacon = document.querySelector(`#${ns}-beacon`);\r\n      problems = document.querySelector(`#${ns}-problems`);\r\n      preErrors = document.querySelector(`#${ns}-errors`);\r\n      preWarnings = document.querySelector(`#${ns}-warnings`);\r\n      titleErrors = document.querySelector(`#${ns}-title-errors`);\r\n      titleWarnings = document.querySelector(`#${ns}-title-warnings`);\r\n\r\n      const close = document.querySelector(`#${ns}-close`);\r\n      const min = document.querySelector(`#${ns}-min`);\r\n\r\n      aside.addEventListener('click', () => {\r\n        aside.classList.remove(`${ns}-min`);\r\n      });\r\n\r\n      close.addEventListener('click', () => {\r\n        aside.classList.add(`${ns}-hidden`);\r\n      });\r\n\r\n      min.addEventListener('click', (e) => {\r\n        aside.classList.add(`${ns}-min`);\r\n        e.stopImmediatePropagation();\r\n      });\r\n    });\r\n  }\r\n\r\n  socketMessage(socket, (action, data) => {\r\n    if (!aside) {\r\n      return;\r\n    }\r\n\r\n    const { compilers } = window.webpackPluginServe;\r\n\r\n    switch (action) {\r\n      case 'build':\r\n        // clear errors and warnings when a new build begins\r\n        reset();\r\n        break;\r\n      case 'problems':\r\n        addErrors(data.errors);\r\n        addWarnings(data.warnings);\r\n        aside.classList.remove(hidden);\r\n        hasProblems = data.errors.length || data.warnings.length;\r\n        break;\r\n      case 'replace':\r\n        // if there's a compiler that isn't done yet, hold off and let it run the show\r\n        for (const compilerName of Object.keys(compilers)) {\r\n          if (!compilers[compilerName]) {\r\n            return;\r\n          }\r\n        }\r\n\r\n        if (hasProblems && !preErrors.children.length && !preWarnings.children.length) {\r\n          reset();\r\n          hasProblems = false;\r\n          problems.classList.add(`${ns}-success`);\r\n          aside.classList.remove(hidden);\r\n\r\n          setTimeout(() => aside.classList.add(hidden), 3e3);\r\n        }\r\n        break;\r\n      default:\r\n    }\r\n  });\r\n};\r\n\r\nmodule.exports = { init };\r\n\n\n//# sourceURL=webpack://webpack-demo/./node_modules/webpack-plugin-serve/lib/client/overlays/status.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/overlays/util.js":
/*!***********************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/overlays/util.js ***!
  \***********************************************************************/
/***/ (function(module) {

eval("/*\r\n  Copyright © 2018 Andrew Powell\r\n\r\n  This Source Code Form is subject to the terms of the Mozilla Public\r\n  License, v. 2.0. If a copy of the MPL was not distributed with this\r\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\r\n\r\n  The above copyright notice and this permission notice shall be\r\n  included in all copies or substantial portions of this Source Code Form.\r\n*/\r\nconst addHtml = (html, parent) => {\r\n  const div = document.createElement('div');\r\n  const nodes = [];\r\n\r\n  div.innerHTML = html.trim();\r\n\r\n  while (div.firstChild) {\r\n    nodes.push((parent || document.body).appendChild(div.firstChild));\r\n  }\r\n\r\n  return nodes;\r\n};\r\n\r\nconst addCss = (css) => {\r\n  const style = document.createElement('style');\r\n\r\n  style.type = 'text/css';\r\n\r\n  if (css.styleSheet) {\r\n    style.styleSheet.cssText = css;\r\n  } else {\r\n    style.appendChild(document.createTextNode(css));\r\n  }\r\n\r\n  // append the stylesheet for the svg\r\n  document.head.appendChild(style);\r\n};\r\n\r\nconst socketMessage = (socket, handler) => {\r\n  socket.addEventListener('message', (message) => {\r\n    const { action, data = {} } = JSON.parse(message.data);\r\n    handler(action, data);\r\n  });\r\n};\r\n\r\nmodule.exports = { addCss, addHtml, socketMessage };\r\n\n\n//# sourceURL=webpack://webpack-demo/./node_modules/webpack-plugin-serve/lib/client/overlays/util.js?");

/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((text = \"do we have a problem?\") => {\r\n    const element = document.createElement(\"div\");\r\n    element.className = \"rounded bg-red-100 border max-w-md m-4 p-4\"\r\n    element.innerHTML = text;\r\n    return element;\r\n});\n\n//# sourceURL=webpack://webpack-demo/./src/component.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./src/component.js\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n\r\n\r\n\r\nconsole.log(\"webpack demo\");\r\n\r\ndocument.body.appendChild((0,_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "07696cd-" + chunkId + "-wps-hmr.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "main-07696cd-wps-hmr.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "5846fb554446512515e2"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "webpack-demo:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		var createStylesheet = function(chunkId, fullhref, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = function(options) {
/******/ 			return { dispose: function() {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: function() {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = function(chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach(function(chunkId) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise(function(resolve, reject) {
/******/ 					var tag = createStylesheet(chunkId, fullhref, function() {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatewebpack_demo"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/webpack-plugin-serve/client.js");
/******/ 	
/******/ })()
;