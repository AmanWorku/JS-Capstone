/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Kodchasan', sans-serif;\r\n}\r\n\r\n:root {\r\n  --yellow: #f0c808;\r\n  --blue: #06aed5;\r\n  --red: #dd1c1a;\r\n}\r\n\r\n/* Basic layout  */\r\n\r\n.page-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.logo {\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.logo a {\r\n  text-decoration: none;\r\n  color: var(--red);\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  gap: 2em;\r\n  list-style-type: none;\r\n}\r\n\r\n.nav-link {\r\n  text-decoration: none;\r\n  font-size: 1.6em;\r\n  padding: 0.25rem 0.5rem;\r\n  color: darkblue;\r\n  position: relative;\r\n  transition: all 2s;\r\n}\r\n\r\n.nav-link.active {\r\n  font-weight: bolder;\r\n}\r\n\r\n.total-box {\r\n  display: block;\r\n\r\n  /* border: solid 2px darkslateblue; */\r\n  background-color: var(--yellow);\r\n  padding: 0.5rem;\r\n  color: white;\r\n  border-radius: 0.25rem;\r\n  margin-left: 2rem;\r\n}\r\n\r\n#item-count {\r\n  height: 100%;\r\n  padding: 0.25rem;\r\n  border-left: solid 1px #fff;\r\n}\r\n\r\n/* Navigation link animation  */\r\n.nav-link::after {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0;\r\n  width: 0%;\r\n  content: '.';\r\n  color: transparent;\r\n  background: #aaa;\r\n  height: 1px;\r\n  text-align: left;\r\n  opacity: 0;\r\n}\r\n\r\n.nav-link:hover {\r\n  color: #fff;\r\n  z-index: 1;\r\n}\r\n\r\n.nav-link:hover::after {\r\n  z-index: -10;\r\n  animation: fill 1s forwards;\r\n  opacity: 1;\r\n}\r\n\r\n/* Keyframes */\r\n@keyframes fill {\r\n  0% {\r\n    width: 0%;\r\n    height: 1px;\r\n  }\r\n\r\n  50% {\r\n    width: 100%;\r\n    height: 1px;\r\n  }\r\n\r\n  100% {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--blue);\r\n  }\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  background-color: #333;\r\n  padding: 2rem 1rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\nfooter p {\r\n  color: var(--blue);\r\n}\r\n\r\n.github-link {\r\n  color: var(--yellow);\r\n  text-decoration: none;\r\n}\r\n\r\n/* Gallery layout  */\r\n.gallery {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 1.5rem;\r\n  padding: 2rem;\r\n  background-color: aliceblue;\r\n  min-height: 80vh;\r\n}\r\n\r\n.gallery.hide {\r\n  display: none;\r\n}\r\n\r\n.character-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #fff;\r\n  padding: 0.5rem;\r\n  box-shadow: 0 0 20px -8px #d0d0d0cb;\r\n  border-radius: 0.25rem;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.character-card:hover {\r\n  box-shadow: 0 5px 20px 8px #d0d0d0cb;\r\n}\r\n\r\n.card-header {\r\n  padding: 0.5rem 0.25rem;\r\n  margin: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n}\r\n\r\n.card-header h3 {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.frame {\r\n  background-color: lightskyblue;\r\n  width: 100%;\r\n  height: 250px;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n.like-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0.3rem;\r\n  min-width: 5rem;\r\n  gap: 0.5rem;\r\n  background: none;\r\n  color: crimson;\r\n  border: solid 1px #333;\r\n  border-radius: 0.25em;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.like-btn:hover {\r\n  border-color: rgb(255, 165, 177);\r\n  box-shadow: 0 3px 20px -5px #f23e3e;\r\n}\r\n\r\n.like-btn:active i {\r\n  transform: scale(1.4);\r\n}\r\n\r\n.like-counter {\r\n  color: darkslateblue;\r\n  font-weight: 700;\r\n}\r\n\r\n.comment-btn {\r\n  margin: auto;\r\n  padding: 0.5rem;\r\n  font-size: 1.3rem;\r\n  background-color: cornflowerblue;\r\n  border: solid 1px cornflowerblue;\r\n  color: white;\r\n  border-radius: 0.25em;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.comment-btn:hover {\r\n  background-color: white;\r\n  color: cornflowerblue;\r\n  box-shadow: 0 3px 10px 0.8px #a2a1a19c;\r\n  transform: translateY(-3px);\r\n}\r\n\r\n.loading-text {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n/* Error Page  */\r\n.error-page {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: darksalmon;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.error-page h2 {\r\n  font-size: 3em;\r\n}\r\n\r\n.error-page.hide {\r\n  display: none;\r\n}\r\n\r\n.refresh-btn {\r\n  padding: 0.5rem 1.5rem;\r\n  font-size: 1em;\r\n  background: none;\r\n  border-radius: 25rem;\r\n  border: solid 1px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  background-color: white;\r\n}\r\n\r\n.refresh-btn:hover {\r\n  box-shadow:\r\n    -7px -7px 20px 0 rgba(253, 120, 120, 0.4),\r\n    -4px -4px 5px 0 rgba(255, 120, 120, 0.4),\r\n    7px 7px 20px 0 #0002,\r\n    4px 4px 5px 0 #0001;\r\n}\r\n\r\n/* Popup Section */\r\n\r\n.popup {\r\n  display: none;\r\n}\r\n\r\n.popup.active {\r\n  display: block;\r\n  flex-direction: column;\r\n  background-color: rgba(8, 19, 91, 0.566);\r\n  backdrop-filter: blur(10px);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 999;\r\n  padding: 0.5rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup .close-btn {\r\n  font-size: 3.5em;\r\n  font-weight: 900;\r\n  position: absolute;\r\n  top: 2em;\r\n  right: 2em;\r\n  color: rgb(255, 255, 255);\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n.popup .close-btn:hover {\r\n  color: rgb(130, 130, 130);\r\n  cursor: pointer;\r\n  transition: 0.3s ease;\r\n}\r\n\r\n.popup-container {\r\n  padding: 0 100px;\r\n  width: 80%;\r\n  margin-inline: auto;\r\n  margin: 5% auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 10px solid;\r\n  border-image: linear-gradient(to right, rgb(53, 101, 234), darkorchid) 1;\r\n  background-color: white;\r\n  border-radius:15px;\r\n  box-shadow:  33px 33px 66px #00000058,\r\n             -33px -33px 66px #0000002e;\r\n}\r\n\r\n.popup-content {\r\n  margin: auto;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n  margin-bottom: 30px;\r\n  padding-top: 25px;\r\n}\r\n\r\n.popup-content h2 {\r\n  text-align: center;\r\n  font-size: 3em;\r\n  font-weight: 900;\r\n}\r\n\r\n.popup-content h3 {\r\n  font-size: 1.6em;\r\n  font-weight: 900;\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.popup-content p {\r\n  font-size: 1.2em;\r\n  font-weight: bold;\r\n}\r\n\r\n.popup-img {\r\n  padding-top: 15%;\r\n  align-self: flex-start;\r\n}\r\n\r\n.description .label {\r\n  font-size: 1.5em;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\nform input[type='text'] {\r\n  padding: 10px 10px;\r\n  border: solid 2px rgb(21, 67, 153);\r\n  color: rgb(21, 67, 153);\r\n  border-radius: 0.25em;\r\n  height: 40px;\r\n  font-size: 1.5em;\r\n}\r\n\r\nform textarea {\r\n  padding: 10px 10px;\r\n  font-size: 1.5em;\r\n  border: solid 2px rgb(21, 67, 153);\r\n  color: rgb(21, 67, 153);\r\n  border-radius: 0.25em;\r\n  height: 100px;\r\n}\r\n\r\nform input[type='submit'] {\r\n  background-color: cornflowerblue;\r\n  border: solid 1px cornflowerblue;\r\n  color: white;\r\n  border-radius: 0.25em;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  padding: 10px 10px;\r\n  font-size: 1.45em;\r\n}\r\n\r\nform input[type='submit']:hover {\r\n  background-color: white;\r\n  color: cornflowerblue;\r\n  box-shadow: 0 3px 10px 0.8px #a2a1a19c;\r\n  transform: translateY(-3px);\r\n}\r\n\r\n#success-message {\r\n  font-size: 0.5 em;\r\n  color: rgb(35, 167, 35);\r\n}\r\n\r\n#error-message {\r\n  font-size: 0.5 em;\r\n  color: rgb(199, 0, 0);\r\n}\r\n\r\n.new-comment {\r\n  list-style-type: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  font-size: 1.2em;\r\n  columns: 2;\r\n  -webkit-columns: 2;\r\n  -moz-columns: 2;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .gallery {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .popup-container {\r\n    padding: 0.2rem;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .page-header {\r\n    padding: 0.2rem;\r\n  }\r\n\r\n  .logo a {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .nav {\r\n    gap: 1rem;\r\n  }\r\n\r\n  .nav-link {\r\n    font-size: 1rem;\r\n    padding: 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 530px) {\r\n  .gallery {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .nav {\r\n    gap: 0.5rem;\r\n  }\r\n\r\n  .logo a {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .nav-link {\r\n    font-size: 0.8rem;\r\n    padding: 0;\r\n  }\r\n\r\n  .total-box .label {\r\n    display: none;\r\n  }\r\n\r\n  #item-count {\r\n    border: none;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Kodchasan', sans-serif;\r\n}\r\n\r\n:root {\r\n  --yellow: #f0c808;\r\n  --blue: #06aed5;\r\n  --red: #dd1c1a;\r\n}\r\n\r\n/* Basic layout  */\r\n\r\n.page-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.logo {\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.logo a {\r\n  text-decoration: none;\r\n  color: var(--red);\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  gap: 2em;\r\n  list-style-type: none;\r\n}\r\n\r\n.nav-link {\r\n  text-decoration: none;\r\n  font-size: 1.6em;\r\n  padding: 0.25rem 0.5rem;\r\n  color: darkblue;\r\n  position: relative;\r\n  transition: all 2s;\r\n}\r\n\r\n.nav-link.active {\r\n  font-weight: bolder;\r\n}\r\n\r\n.total-box {\r\n  display: block;\r\n\r\n  /* border: solid 2px darkslateblue; */\r\n  background-color: var(--yellow);\r\n  padding: 0.5rem;\r\n  color: white;\r\n  border-radius: 0.25rem;\r\n  margin-left: 2rem;\r\n}\r\n\r\n#item-count {\r\n  height: 100%;\r\n  padding: 0.25rem;\r\n  border-left: solid 1px #fff;\r\n}\r\n\r\n/* Navigation link animation  */\r\n.nav-link::after {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0;\r\n  width: 0%;\r\n  content: '.';\r\n  color: transparent;\r\n  background: #aaa;\r\n  height: 1px;\r\n  text-align: left;\r\n  opacity: 0;\r\n}\r\n\r\n.nav-link:hover {\r\n  color: #fff;\r\n  z-index: 1;\r\n}\r\n\r\n.nav-link:hover::after {\r\n  z-index: -10;\r\n  animation: fill 1s forwards;\r\n  opacity: 1;\r\n}\r\n\r\n/* Keyframes */\r\n@keyframes fill {\r\n  0% {\r\n    width: 0%;\r\n    height: 1px;\r\n  }\r\n\r\n  50% {\r\n    width: 100%;\r\n    height: 1px;\r\n  }\r\n\r\n  100% {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--blue);\r\n  }\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  background-color: #333;\r\n  padding: 2rem 1rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\nfooter p {\r\n  color: var(--blue);\r\n}\r\n\r\n.github-link {\r\n  color: var(--yellow);\r\n  text-decoration: none;\r\n}\r\n\r\n/* Gallery layout  */\r\n.gallery {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 1.5rem;\r\n  padding: 2rem;\r\n  background-color: aliceblue;\r\n  min-height: 80vh;\r\n}\r\n\r\n.gallery.hide {\r\n  display: none;\r\n}\r\n\r\n.character-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #fff;\r\n  padding: 0.5rem;\r\n  box-shadow: 0 0 20px -8px #d0d0d0cb;\r\n  border-radius: 0.25rem;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.character-card:hover {\r\n  box-shadow: 0 5px 20px 8px #d0d0d0cb;\r\n}\r\n\r\n.card-header {\r\n  padding: 0.5rem 0.25rem;\r\n  margin: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n}\r\n\r\n.card-header h3 {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.frame {\r\n  background-color: lightskyblue;\r\n  width: 100%;\r\n  height: 250px;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n.like-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0.3rem;\r\n  min-width: 5rem;\r\n  gap: 0.5rem;\r\n  background: none;\r\n  color: crimson;\r\n  border: solid 1px #333;\r\n  border-radius: 0.25em;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.like-btn:hover {\r\n  border-color: rgb(255, 165, 177);\r\n  box-shadow: 0 3px 20px -5px #f23e3e;\r\n}\r\n\r\n.like-btn:active i {\r\n  transform: scale(1.4);\r\n}\r\n\r\n.like-counter {\r\n  color: darkslateblue;\r\n  font-weight: 700;\r\n}\r\n\r\n.comment-btn {\r\n  margin: auto;\r\n  padding: 0.5rem;\r\n  font-size: 1.3rem;\r\n  background-color: cornflowerblue;\r\n  border: solid 1px cornflowerblue;\r\n  color: white;\r\n  border-radius: 0.25em;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.comment-btn:hover {\r\n  background-color: white;\r\n  color: cornflowerblue;\r\n  box-shadow: 0 3px 10px 0.8px #a2a1a19c;\r\n  transform: translateY(-3px);\r\n}\r\n\r\n.loading-text {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n/* Error Page  */\r\n.error-page {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: darksalmon;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.error-page h2 {\r\n  font-size: 3em;\r\n}\r\n\r\n.error-page.hide {\r\n  display: none;\r\n}\r\n\r\n.refresh-btn {\r\n  padding: 0.5rem 1.5rem;\r\n  font-size: 1em;\r\n  background: none;\r\n  border-radius: 25rem;\r\n  border: solid 1px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  background-color: white;\r\n}\r\n\r\n.refresh-btn:hover {\r\n  box-shadow:\r\n    -7px -7px 20px 0 rgba(253, 120, 120, 0.4),\r\n    -4px -4px 5px 0 rgba(255, 120, 120, 0.4),\r\n    7px 7px 20px 0 #0002,\r\n    4px 4px 5px 0 #0001;\r\n}\r\n\r\n/* Popup Section */\r\n\r\n.popup {\r\n  display: none;\r\n}\r\n\r\n.popup.active {\r\n  display: block;\r\n  flex-direction: column;\r\n  background-color: rgba(8, 19, 91, 0.566);\r\n  backdrop-filter: blur(10px);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 999;\r\n  padding: 0.5rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup .close-btn {\r\n  font-size: 3.5em;\r\n  font-weight: 900;\r\n  position: absolute;\r\n  top: 2em;\r\n  right: 2em;\r\n  color: rgb(255, 255, 255);\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n.popup .close-btn:hover {\r\n  color: rgb(130, 130, 130);\r\n  cursor: pointer;\r\n  transition: 0.3s ease;\r\n}\r\n\r\n.popup-container {\r\n  padding: 0 100px;\r\n  width: 80%;\r\n  margin-inline: auto;\r\n  margin: 5% auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 10px solid;\r\n  border-image: linear-gradient(to right, rgb(53, 101, 234), darkorchid) 1;\r\n  background-color: white;\r\n  border-radius:15px;\r\n  box-shadow:  33px 33px 66px #00000058,\r\n             -33px -33px 66px #0000002e;\r\n}\r\n\r\n.popup-content {\r\n  margin: auto;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n  margin-bottom: 30px;\r\n  padding-top: 25px;\r\n}\r\n\r\n.popup-content h2 {\r\n  text-align: center;\r\n  font-size: 3em;\r\n  font-weight: 900;\r\n}\r\n\r\n.popup-content h3 {\r\n  font-size: 1.6em;\r\n  font-weight: 900;\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.popup-content p {\r\n  font-size: 1.2em;\r\n  font-weight: bold;\r\n}\r\n\r\n.popup-img {\r\n  padding-top: 15%;\r\n  align-self: flex-start;\r\n}\r\n\r\n.description .label {\r\n  font-size: 1.5em;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\nform input[type='text'] {\r\n  padding: 10px 10px;\r\n  border: solid 2px rgb(21, 67, 153);\r\n  color: rgb(21, 67, 153);\r\n  border-radius: 0.25em;\r\n  height: 40px;\r\n  font-size: 1.5em;\r\n}\r\n\r\nform textarea {\r\n  padding: 10px 10px;\r\n  font-size: 1.5em;\r\n  border: solid 2px rgb(21, 67, 153);\r\n  color: rgb(21, 67, 153);\r\n  border-radius: 0.25em;\r\n  height: 100px;\r\n}\r\n\r\nform input[type='submit'] {\r\n  background-color: cornflowerblue;\r\n  border: solid 1px cornflowerblue;\r\n  color: white;\r\n  border-radius: 0.25em;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  padding: 10px 10px;\r\n  font-size: 1.45em;\r\n}\r\n\r\nform input[type='submit']:hover {\r\n  background-color: white;\r\n  color: cornflowerblue;\r\n  box-shadow: 0 3px 10px 0.8px #a2a1a19c;\r\n  transform: translateY(-3px);\r\n}\r\n\r\n#success-message {\r\n  font-size: 0.5 em;\r\n  color: rgb(35, 167, 35);\r\n}\r\n\r\n#error-message {\r\n  font-size: 0.5 em;\r\n  color: rgb(199, 0, 0);\r\n}\r\n\r\n.new-comment {\r\n  list-style-type: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  font-size: 1.2em;\r\n  columns: 2;\r\n  -webkit-columns: 2;\r\n  -moz-columns: 2;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .gallery {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .popup-container {\r\n    padding: 0.2rem;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .page-header {\r\n    padding: 0.2rem;\r\n  }\r\n\r\n  .logo a {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .nav {\r\n    gap: 1rem;\r\n  }\r\n\r\n  .nav-link {\r\n    font-size: 1rem;\r\n    padding: 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 530px) {\r\n  .gallery {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .nav {\r\n    gap: 0.5rem;\r\n  }\r\n\r\n  .logo a {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .nav-link {\r\n    font-size: 0.8rem;\r\n    padding: 0;\r\n  }\r\n\r\n  .total-box .label {\r\n    display: none;\r\n  }\r\n\r\n  #item-count {\r\n    border: none;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/add-comment.js":
/*!************************************!*\
  !*** ./src/modules/add-comment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const INV_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const addComment = async (appId, itemId, uname, ucomment) => {
  const url = `${INV_API + appId}/comments?item_id=${itemId}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemId,
      username: uname,
      comment: ucomment,
    }),
  });
  const data = await response.json();
  return data || null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);

/***/ }),

/***/ "./src/modules/add-like.js":
/*!*********************************!*\
  !*** ./src/modules/add-like.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/modules/constants.js");
/* harmony import */ var _update_likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-likes.js */ "./src/modules/update-likes.js");
/* harmony import */ var _get_likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-likes.js */ "./src/modules/get-likes.js");




const addLike = async (event) => {
  // Get item_id from clicked btn (id = #like-01349493090)
  const charId = event.target.closest('.like-btn').id.split('-')[1];
  // Create new like
  await fetch(`${_constants_js__WEBPACK_IMPORTED_MODULE_0__.INV_API + _constants_js__WEBPACK_IMPORTED_MODULE_0__.APP_ID}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: charId }),
  });
  // Update on the page
  const likedItems = await (0,_get_likes_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_update_likes_js__WEBPACK_IMPORTED_MODULE_1__["default"])(likedItems, charId);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);


/***/ }),

/***/ "./src/modules/comment-counter.js":
/*!****************************************!*\
  !*** ./src/modules/comment-counter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countComment = (data) => {
  let i = 0;
  data.forEach((element) => {
    if (element.username !== '' && element.comment !== '') {
      i += 1;
    }
  });
  return i;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComment);

/***/ }),

/***/ "./src/modules/constants.js":
/*!**********************************!*\
  !*** ./src/modules/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "APP_ID": () => (/* binding */ APP_ID),
/* harmony export */   "INV_API": () => (/* binding */ INV_API)
/* harmony export */ });
// Main API to fetch data
const API_URL = 'https://www.amiiboapi.com/api/amiibo';
// Involvement for likes and comments
const INV_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
// App id for involvement API
const APP_ID = 'dRuHy6BFXNSTiZHMOETw';


/***/ }),

/***/ "./src/modules/display-characters.js":
/*!*******************************************!*\
  !*** ./src/modules/display-characters.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popup_detail_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup-detail.js */ "./src/modules/popup-detail.js");
/* harmony import */ var _add_like_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-like.js */ "./src/modules/add-like.js");



const makeElement = (tag, ...classes) => {
  const elem = document.createElement(tag);
  classes.forEach((className) => {
    elem.classList.add(className);
  });
  return elem;
};

const appendChildren = (elem, ...children) => {
  children.forEach((child) => elem.appendChild(child));
};

const makeCharacterCard = (character) => {
  const card = makeElement('section', 'character-card');
  const frame = makeElement('div', 'frame');
  const img = makeElement('img', 'card-img');
  const header = makeElement('div', 'card-header');
  const name = makeElement('h3', 'card-name');
  const likeBtn = makeElement('button', 'like-btn');
  const likeIcon = makeElement('i', 'fa-solid', 'fa-heart');
  const likeCounter = makeElement('span', 'like-counter');
  const commentBtn = makeElement('button', 'comment-btn');
  const commentIcon = makeElement('i', 'fa-regular', 'fa-comment');
  img.src = character.image;
  name.innerText = character.name;
  commentBtn.id = character.id;
  commentBtn.innerText = 'Comment';
  commentBtn.onclick = _popup_detail_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  likeCounter.innerText = 'Like 0';
  likeBtn.id = `like-${character.id}`;
  likeBtn.onclick = _add_like_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  frame.appendChild(img);
  commentBtn.appendChild(commentIcon);
  appendChildren(likeBtn, likeIcon, likeCounter);
  appendChildren(header, name, likeBtn);
  appendChildren(card, frame, header, commentBtn);
  return card;
};

const displayCharacters = (characters) => {
  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.textContent = '';
  characters.forEach((character) => {
    character.id = character.head + character.tail;
    const card = makeCharacterCard(character);
    galleryContainer.appendChild(card);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCharacters);


/***/ }),

/***/ "./src/modules/display-error.js":
/*!**************************************!*\
  !*** ./src/modules/display-error.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayErrorPage = () => {
  const errorPage = document.querySelector('.error-page');
  const gallery = document.querySelector('.gallery');
  errorPage.classList.toggle('hide');
  gallery.classList.toggle('hide');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayErrorPage);


/***/ }),

/***/ "./src/modules/get-characters.js":
/*!***************************************!*\
  !*** ./src/modules/get-characters.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/modules/constants.js");
/* harmony import */ var _display_error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-error.js */ "./src/modules/display-error.js");



const getCharacters = async () => {
  const response = await fetch(`${_constants_js__WEBPACK_IMPORTED_MODULE_0__.API_URL}?type=figure`);
  if (!response.ok) {
    (0,_display_error_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
  const data = await response.json();
  return data.amiibo;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCharacters);


/***/ }),

/***/ "./src/modules/get-comments.js":
/*!*************************************!*\
  !*** ./src/modules/get-comments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const INV_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const getComments = async (appId, itemId) => {
  const url = `${INV_API + appId}/comments?item_id=${itemId}`;
  const response = await fetch(url).catch((err) => err);
  const data = await response.json();
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);


/***/ }),

/***/ "./src/modules/get-likes.js":
/*!**********************************!*\
  !*** ./src/modules/get-likes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/modules/constants.js");
/* harmony import */ var _display_error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-error.js */ "./src/modules/display-error.js");



const getLikes = async () => {
  const url = `${_constants_js__WEBPACK_IMPORTED_MODULE_0__.INV_API + _constants_js__WEBPACK_IMPORTED_MODULE_0__.APP_ID}/likes`;
  const response = await fetch(url);
  if (!response.ok) {
    (0,_display_error_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
  const data = await response.json();
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);


/***/ }),

/***/ "./src/modules/item-counter.js":
/*!*************************************!*\
  !*** ./src/modules/item-counter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getItemCount = () => {
  const characterCards = document.querySelectorAll('.character-card');
  return characterCards.length || 0;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getItemCount);


/***/ }),

/***/ "./src/modules/like-counter.js":
/*!*************************************!*\
  !*** ./src/modules/like-counter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const likeCounter = (likedItems, id) => {
  const item = likedItems.find((item) => item.item_id === id);
  return item ? item.likes : 0;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likeCounter);


/***/ }),

/***/ "./src/modules/popup-detail.js":
/*!*************************************!*\
  !*** ./src/modules/popup-detail.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-comments.js */ "./src/modules/get-comments.js");
/* harmony import */ var _add_comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-comment.js */ "./src/modules/add-comment.js");
/* harmony import */ var _comment_counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment-counter.js */ "./src/modules/comment-counter.js");




const popup = document.querySelector('.popup');
const gallery = document.querySelector('.gallery');
const closeBtn = document.querySelector('.close-btn');
const API_URL = 'https://www.amiiboapi.com/api/amiibo';
const popImage = document.querySelector('.popup-img');
const popTitle = document.querySelector('.pop-name');
const series = document.querySelector('.series');
const gameSeries = document.querySelector('.game-series');
const newComment = document.querySelector('.new-comment');
const submit = document.querySelector('.submit');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const numberOfComments = document.getElementById('number-of-comments');

const getItem = async (itemId) => {
  const result = await fetch(`${API_URL}/?id=${itemId}`);
  const data = await result.json();
  popImage.src = data.amiibo.image;
  popTitle.innerHTML = data.amiibo.name;
  series.innerHTML = data.amiibo.amiiboSeries;
  gameSeries.innerHTML = data.amiibo.gameSeries;
  let nOfComments = 0;
  try {
    const comment = await (0,_get_comments_js__WEBPACK_IMPORTED_MODULE_0__["default"])('dRuHy6BFXNSTiZHMOETw', itemId);
    newComment.innerHTML = '';
    if (comment) {
      comment.forEach((element) => {
        if (element.username !== '' && element.comment !== '') {
          newComment.innerHTML += `<li>${element.creation_date} <b>${element.username} </b>: ${element.comment}</li>`;
        }
      });
      nOfComments = (0,_comment_counter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(comment);
    }
  } catch (error) {
    nOfComments = 0;
  }

  numberOfComments.innerHTML = nOfComments;
  submit.addEventListener('click', () => {
    const uname = document.getElementById('name').value;
    const ucomment = document.getElementById('comment').value;
    if (uname !== '' && ucomment !== '') {
      (0,_add_comment_js__WEBPACK_IMPORTED_MODULE_1__["default"])('dRuHy6BFXNSTiZHMOETw', itemId, uname, ucomment);
      successMessage.innerHTML = 'Comment succesfully added. Please reload to see changes.';
    } else {
      errorMessage.innerHTML = 'Please fill in all the fields.';
    }
  });
};

const showPopup = (e) => {
  popup.classList.toggle('active');
  gallery.classList.toggle('hide');
  const itemId = e.target.id;
  getItem(itemId);
};

const closePopup = () => {
  popup.classList.toggle('active');
  gallery.classList.toggle('hide');
};

closeBtn.addEventListener('click', closePopup);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopup);


/***/ }),

/***/ "./src/modules/update-likes.js":
/*!*************************************!*\
  !*** ./src/modules/update-likes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _like_counter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./like-counter.js */ "./src/modules/like-counter.js");


const updateLikes = async (likedItems, charId) => {
  // Count likes for given id and update on the page
  const totalLikes = (0,_like_counter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(likedItems, charId);
  const likesCount = document.querySelector(`#like-${charId} .like-counter`);
  likesCount.innerText = `Like ${totalLikes}`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLikes);


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_get_characters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/get-characters.js */ "./src/modules/get-characters.js");
/* harmony import */ var _modules_display_characters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display-characters.js */ "./src/modules/display-characters.js");
/* harmony import */ var _modules_update_likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/update-likes.js */ "./src/modules/update-likes.js");
/* harmony import */ var _modules_get_likes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/get-likes.js */ "./src/modules/get-likes.js");
/* harmony import */ var _modules_item_counter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/item-counter.js */ "./src/modules/item-counter.js");







const refreshGallery = async () => {
  // Get characters from Api
  const characters = await (0,_modules_get_characters_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  // Get total likes
  const likedItems = await (0,_modules_get_likes_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  // Update on the page
  (0,_modules_display_characters_js__WEBPACK_IMPORTED_MODULE_2__["default"])(characters);
  characters.forEach((character) => (0,_modules_update_likes_js__WEBPACK_IMPORTED_MODULE_3__["default"])(likedItems, character.id));
  // Update total items
  const totalItems = (0,_modules_item_counter_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  document.querySelector('#item-count').innerText = totalItems;
};

refreshGallery();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHdCQUF3QixPQUFPLHFCQUFxQiwwQkFBMEIsbUJBQW1CLE9BQU8sNkJBQTZCLHNCQUFzQixPQUFPLHVCQUF1QixxQkFBcUIsT0FBTyxLQUFLLFdBQVcsZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxRQUFRLE9BQU8sT0FBTyxhQUFhLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssNEJBQTRCLGdCQUFnQixpQkFBaUIsNkJBQTZCLDJDQUEyQyxLQUFLLGVBQWUsd0JBQXdCLHNCQUFzQixxQkFBcUIsS0FBSyxpREFBaUQsb0JBQW9CLHFDQUFxQywwQkFBMEIsMkJBQTJCLEtBQUssZUFBZSxjQUFjLG9CQUFvQiwwQkFBMEIsS0FBSyxpQkFBaUIsNEJBQTRCLHdCQUF3QixLQUFLLGNBQWMsb0JBQW9CLGVBQWUsNEJBQTRCLEtBQUssbUJBQW1CLDRCQUE0Qix1QkFBdUIsOEJBQThCLHNCQUFzQix5QkFBeUIseUJBQXlCLEtBQUssMEJBQTBCLDBCQUEwQixLQUFLLG9CQUFvQixxQkFBcUIsOENBQThDLHdDQUF3QyxzQkFBc0IsbUJBQW1CLDZCQUE2Qix3QkFBd0IsS0FBSyxxQkFBcUIsbUJBQW1CLHVCQUF1QixrQ0FBa0MsS0FBSyw4REFBOEQseUJBQXlCLGdCQUFnQixjQUFjLGVBQWUsZ0JBQWdCLGdCQUFnQixtQkFBbUIseUJBQXlCLHVCQUF1QixrQkFBa0IsdUJBQXVCLGlCQUFpQixLQUFLLHlCQUF5QixrQkFBa0IsaUJBQWlCLEtBQUssZ0NBQWdDLG1CQUFtQixrQ0FBa0MsaUJBQWlCLEtBQUssNENBQTRDLFVBQVUsa0JBQWtCLG9CQUFvQixPQUFPLGVBQWUsb0JBQW9CLG9CQUFvQixPQUFPLGdCQUFnQixvQkFBb0IscUJBQXFCLHNDQUFzQyxPQUFPLEtBQUssZ0JBQWdCLHlCQUF5Qiw2QkFBNkIseUJBQXlCLHdCQUF3QixLQUFLLGtCQUFrQix5QkFBeUIsS0FBSyxzQkFBc0IsMkJBQTJCLDRCQUE0QixLQUFLLDJDQUEyQyxvQkFBb0IsNENBQTRDLGtCQUFrQixvQkFBb0Isa0NBQWtDLHVCQUF1QixLQUFLLHVCQUF1QixvQkFBb0IsS0FBSyx5QkFBeUIsb0JBQW9CLDZCQUE2Qiw2QkFBNkIsc0JBQXNCLDBDQUEwQyw2QkFBNkIsMkJBQTJCLEtBQUssK0JBQStCLDJDQUEyQyxLQUFLLHNCQUFzQiw4QkFBOEIsZ0JBQWdCLG9CQUFvQixxQ0FBcUMsOEJBQThCLEtBQUsseUJBQXlCLHdCQUF3QixLQUFLLGdCQUFnQixxQ0FBcUMsa0JBQWtCLG9CQUFvQiw2QkFBNkIsS0FBSyxtQkFBbUIsa0JBQWtCLG1CQUFtQiwwQkFBMEIsS0FBSyxtQkFBbUIsb0JBQW9CLDBCQUEwQixzQkFBc0Isc0JBQXNCLGtCQUFrQix1QkFBdUIscUJBQXFCLDZCQUE2Qiw0QkFBNEIsc0JBQXNCLDJCQUEyQixLQUFLLHlCQUF5Qix1Q0FBdUMsMENBQTBDLEtBQUssNEJBQTRCLDRCQUE0QixLQUFLLHVCQUF1QiwyQkFBMkIsdUJBQXVCLEtBQUssc0JBQXNCLG1CQUFtQixzQkFBc0Isd0JBQXdCLHVDQUF1Qyx1Q0FBdUMsbUJBQW1CLDRCQUE0QixzQkFBc0IsMkJBQTJCLEtBQUssNEJBQTRCLDhCQUE4Qiw0QkFBNEIsNkNBQTZDLGtDQUFrQyxLQUFLLHVCQUF1Qix3QkFBd0IsS0FBSywwQ0FBMEMsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGdCQUFnQixzQkFBc0IsYUFBYSxjQUFjLGVBQWUsZ0JBQWdCLG1DQUFtQyx3QkFBd0IsS0FBSyx3QkFBd0IscUJBQXFCLEtBQUssMEJBQTBCLG9CQUFvQixLQUFLLHNCQUFzQiw2QkFBNkIscUJBQXFCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHNCQUFzQiwyQkFBMkIsOEJBQThCLEtBQUssNEJBQTRCLDZLQUE2SyxLQUFLLDJDQUEyQyxvQkFBb0IsS0FBSyx1QkFBdUIscUJBQXFCLDZCQUE2QiwrQ0FBK0Msa0NBQWtDLHNCQUFzQixhQUFhLGNBQWMsZUFBZSxtQkFBbUIsa0JBQWtCLG1CQUFtQixzQkFBc0IseUJBQXlCLEtBQUssMkJBQTJCLHVCQUF1Qix1QkFBdUIseUJBQXlCLGVBQWUsaUJBQWlCLGdDQUFnQyx1QkFBdUIsbUJBQW1CLEtBQUssaUNBQWlDLGdDQUFnQyxzQkFBc0IsNEJBQTRCLEtBQUssMEJBQTBCLHVCQUF1QixpQkFBaUIsMEJBQTBCLHNCQUFzQixvQkFBb0IsMEJBQTBCLDBCQUEwQiw4QkFBOEIseUJBQXlCLCtFQUErRSw4QkFBOEIseUJBQXlCLHdGQUF3RixLQUFLLHdCQUF3QixtQkFBbUIsMEJBQTBCLDhCQUE4QixvQkFBb0IsNkJBQTZCLGdCQUFnQiwwQkFBMEIsd0JBQXdCLEtBQUssMkJBQTJCLHlCQUF5QixxQkFBcUIsdUJBQXVCLEtBQUssMkJBQTJCLHVCQUF1Qix1QkFBdUIseUJBQXlCLDBCQUEwQixLQUFLLDBCQUEwQix1QkFBdUIsd0JBQXdCLEtBQUssb0JBQW9CLHVCQUF1Qiw2QkFBNkIsS0FBSyw2QkFBNkIsdUJBQXVCLEtBQUssY0FBYyxvQkFBb0IsNkJBQTZCLGdCQUFnQixLQUFLLGlDQUFpQyx5QkFBeUIseUNBQXlDLDhCQUE4Qiw0QkFBNEIsbUJBQW1CLHVCQUF1QixLQUFLLHVCQUF1Qix5QkFBeUIsdUJBQXVCLHlDQUF5Qyw4QkFBOEIsNEJBQTRCLG9CQUFvQixLQUFLLG1DQUFtQyx1Q0FBdUMsdUNBQXVDLG1CQUFtQiw0QkFBNEIsc0JBQXNCLDJCQUEyQix5QkFBeUIsd0JBQXdCLEtBQUsseUNBQXlDLDhCQUE4Qiw0QkFBNEIsNkNBQTZDLGtDQUFrQyxLQUFLLDBCQUEwQix3QkFBd0IsOEJBQThCLEtBQUssd0JBQXdCLHdCQUF3Qiw0QkFBNEIsS0FBSyxzQkFBc0IsNEJBQTRCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLHVCQUF1QixpQkFBaUIseUJBQXlCLHNCQUFzQixLQUFLLG1DQUFtQyxnQkFBZ0IsOENBQThDLE9BQU8sNEJBQTRCLHdCQUF3QiwrQkFBK0IsT0FBTyx3QkFBd0Isd0JBQXdCLE9BQU8sbUJBQW1CLHdCQUF3QixPQUFPLGdCQUFnQixrQkFBa0IsT0FBTyxxQkFBcUIsd0JBQXdCLG1CQUFtQixPQUFPLEtBQUssbUNBQW1DLGdCQUFnQixtQ0FBbUMsT0FBTyxnQkFBZ0Isb0JBQW9CLE9BQU8sbUJBQW1CLHdCQUF3QixPQUFPLHFCQUFxQiwwQkFBMEIsbUJBQW1CLE9BQU8sNkJBQTZCLHNCQUFzQixPQUFPLHVCQUF1QixxQkFBcUIsT0FBTyxLQUFLLHVCQUF1QjtBQUN0L3FCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCLG9CQUFvQixPQUFPO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJ3QjtBQUNMO0FBQ047QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrREFBTyxHQUFHLGlEQUFNLENBQUM7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJCQUEyQixpQkFBaUI7QUFDNUMsR0FBRztBQUNIO0FBQ0EsMkJBQTJCLHlEQUFRO0FBQ25DLEVBQUUsNERBQVc7QUFDYjtBQUNBO0FBQ0EsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNwQnZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7O0FDVjNCO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMbUM7QUFDTjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdEQUFTO0FBQ2hDO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEMsb0JBQW9CLG9EQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BEakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQUztBQUNTO0FBQ2xEO0FBQ0E7QUFDQSxrQ0FBa0Msa0RBQU8sQ0FBQztBQUMxQztBQUNBLElBQUksNkRBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1o3QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCLG9CQUFvQixPQUFPO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHNCO0FBQ0M7QUFDbEQ7QUFDQTtBQUNBLGlCQUFpQixrREFBTyxHQUFHLGlEQUFNLENBQUM7QUFDbEM7QUFDQTtBQUNBLElBQUksNkRBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2J4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNMNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGlCO0FBQ0Y7QUFDTTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxRQUFRLE9BQU8sT0FBTztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0REFBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx1QkFBdUIsS0FBSyxrQkFBa0IsUUFBUSxnQkFBZ0I7QUFDL0c7QUFDQSxPQUFPO0FBQ1Asb0JBQW9CLCtEQUFZO0FBQ2hDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJEQUFVO0FBQ2hCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRW1CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0REFBVztBQUNoQyxxREFBcUQsUUFBUTtBQUM3RCxpQ0FBaUMsV0FBVztBQUM1QztBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7O1VDVDNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNtQztBQUNRO0FBQ1o7QUFDTjtBQUNPO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixzRUFBYTtBQUN4QztBQUNBLDJCQUEyQixpRUFBUTtBQUNuQztBQUNBLEVBQUUsMEVBQWlCO0FBQ25CLG9DQUFvQyxvRUFBVztBQUMvQztBQUNBLHFCQUFxQixvRUFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9tb2R1bGVzL2FkZC1jb21tZW50LmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvbW9kdWxlcy9hZGQtbGlrZS5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvY29tbWVudC1jb3VudGVyLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvbW9kdWxlcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9tb2R1bGVzL2Rpc3BsYXktY2hhcmFjdGVycy5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvZGlzcGxheS1lcnJvci5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvZ2V0LWNoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9tb2R1bGVzL2dldC1jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvZ2V0LWxpa2VzLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvbW9kdWxlcy9pdGVtLWNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9tb2R1bGVzL2xpa2UtY291bnRlci5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvcG9wdXAtZGV0YWlsLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvbW9kdWxlcy91cGRhdGUtbGlrZXMuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waXhlbC1icm9zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BpeGVsLWJyb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BpeGVsLWJyb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9waXhlbC1icm9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ0tvZGNoYXNhbicsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0teWVsbG93OiAjZjBjODA4O1xcclxcbiAgLS1ibHVlOiAjMDZhZWQ1O1xcclxcbiAgLS1yZWQ6ICNkZDFjMWE7XFxyXFxufVxcclxcblxcclxcbi8qIEJhc2ljIGxheW91dCAgKi9cXHJcXG5cXHJcXG4ucGFnZS1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJlbTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAycztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rLmFjdGl2ZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG90YWwtYm94IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcblxcclxcbiAgLyogYm9yZGVyOiBzb2xpZCAycHggZGFya3NsYXRlYmx1ZTsgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNpdGVtLWNvdW50IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxuICBib3JkZXItbGVmdDogc29saWQgMXB4ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIE5hdmlnYXRpb24gbGluayBhbmltYXRpb24gICovXFxyXFxuLm5hdi1saW5rOjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogMCU7XFxyXFxuICBjb250ZW50OiAnLic7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYWFhO1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rOmhvdmVyOjphZnRlciB7XFxyXFxuICB6LWluZGV4OiAtMTA7XFxyXFxuICBhbmltYXRpb246IGZpbGwgMXMgZm9yd2FyZHM7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBLZXlmcmFtZXMgKi9cXHJcXG5Aa2V5ZnJhbWVzIGZpbGwge1xcclxcbiAgMCUge1xcclxcbiAgICB3aWR0aDogMCU7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxufVxcclxcblxcclxcbi5naXRodWItbGluayB7XFxyXFxuICBjb2xvcjogdmFyKC0teWVsbG93KTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogR2FsbGVyeSBsYXlvdXQgICovXFxyXFxuLmdhbGxlcnkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FsbGVyeS5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaGFyYWN0ZXItY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAtOHB4ICNkMGQwZDBjYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJhY3Rlci1jYXJkOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggOHB4ICNkMGQwZDBjYjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjI1cmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1oZWFkZXIgaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5mcmFtZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW07XFxyXFxuICBtaW4td2lkdGg6IDVyZW07XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBjb2xvcjogY3JpbXNvbjtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuOmhvdmVyIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMTY1LCAxNzcpO1xcclxcbiAgYm94LXNoYWRvdzogMCAzcHggMjBweCAtNXB4ICNmMjNlM2U7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWJ0bjphY3RpdmUgaSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWNvdW50ZXIge1xcclxcbiAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG4ge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMC44cHggI2EyYTFhMTljO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGluZy10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFcnJvciBQYWdlICAqL1xcclxcbi5lcnJvci1wYWdlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NhbG1vbjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3ItcGFnZSBoMiB7XFxyXFxuICBmb250LXNpemU6IDNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLXBhZ2UuaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaC1idG4ge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cmVtO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaC1idG46aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzpcXHJcXG4gICAgLTdweCAtN3B4IDIwcHggMCByZ2JhKDI1MywgMTIwLCAxMjAsIDAuNCksXFxyXFxuICAgIC00cHggLTRweCA1cHggMCByZ2JhKDI1NSwgMTIwLCAxMjAsIDAuNCksXFxyXFxuICAgIDdweCA3cHggMjBweCAwICMwMDAyLFxcclxcbiAgICA0cHggNHB4IDVweCAwICMwMDAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQb3B1cCBTZWN0aW9uICovXFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC5hY3RpdmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCAxOSwgOTEsIDAuNTY2KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNsb3NlLWJ0biB7XFxyXFxuICBmb250LXNpemU6IDMuNWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMmVtO1xcclxcbiAgcmlnaHQ6IDJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNsb3NlLWJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogcmdiKDEzMCwgMTMwLCAxMzApO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDAgMTAwcHg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gIG1hcmdpbjogNSUgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAxMHB4IHNvbGlkO1xcclxcbiAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYig1MywgMTAxLCAyMzQpLCBkYXJrb3JjaGlkKSAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOjE1cHg7XFxyXFxuICBib3gtc2hhZG93OiAgMzNweCAzM3B4IDY2cHggIzAwMDAwMDU4LFxcclxcbiAgICAgICAgICAgICAtMzNweCAtMzNweCA2NnB4ICMwMDAwMDAyZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRlbnQge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250ZW50IGgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogM2VtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRlbnQgaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjZlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGVudCBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltZyB7XFxyXFxuICBwYWRkaW5nLXRvcDogMTUlO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIC5sYWJlbCB7XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J3RleHQnXSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxyXFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMjEsIDY3LCAxNTMpO1xcclxcbiAgY29sb3I6IHJnYigyMSwgNjcsIDE1Myk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHRleHRhcmVhIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMjEsIDY3LCAxNTMpO1xcclxcbiAgY29sb3I6IHJnYigyMSwgNjcsIDE1Myk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggY29ybmZsb3dlcmJsdWU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS40NWVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J3N1Ym1pdCddOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwLjhweCAjYTJhMWExOWM7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XFxyXFxufVxcclxcblxcclxcbiNzdWNjZXNzLW1lc3NhZ2Uge1xcclxcbiAgZm9udC1zaXplOiAwLjUgZW07XFxyXFxuICBjb2xvcjogcmdiKDM1LCAxNjcsIDM1KTtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yLW1lc3NhZ2Uge1xcclxcbiAgZm9udC1zaXplOiAwLjUgZW07XFxyXFxuICBjb2xvcjogcmdiKDE5OSwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi5uZXctY29tbWVudCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBjb2x1bW5zOiAyO1xcclxcbiAgLXdlYmtpdC1jb2x1bW5zOiAyO1xcclxcbiAgLW1vei1jb2x1bW5zOiAyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5nYWxsZXJ5IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGFnZS1oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubG9nbyBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdiB7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGluayB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUzMHB4KSB7XFxyXFxuICAuZ2FsbGVyeSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdiB7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28gYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGluayB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvdGFsLWJveCAubGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2l0ZW0tY291bnQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUEsa0JBQWtCOztBQUVsQjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjOztFQUVkLHFDQUFxQztFQUNyQywrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7O0FBRUEsK0JB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QjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixzQ0FBc0M7RUFDdEMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ0tvZGNoYXNhbicsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0teWVsbG93OiAjZjBjODA4O1xcclxcbiAgLS1ibHVlOiAjMDZhZWQ1O1xcclxcbiAgLS1yZWQ6ICNkZDFjMWE7XFxyXFxufVxcclxcblxcclxcbi8qIEJhc2ljIGxheW91dCAgKi9cXHJcXG5cXHJcXG4ucGFnZS1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJlbTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAycztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rLmFjdGl2ZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG90YWwtYm94IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcblxcclxcbiAgLyogYm9yZGVyOiBzb2xpZCAycHggZGFya3NsYXRlYmx1ZTsgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNpdGVtLWNvdW50IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxuICBib3JkZXItbGVmdDogc29saWQgMXB4ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIE5hdmlnYXRpb24gbGluayBhbmltYXRpb24gICovXFxyXFxuLm5hdi1saW5rOjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogMCU7XFxyXFxuICBjb250ZW50OiAnLic7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYWFhO1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rOmhvdmVyOjphZnRlciB7XFxyXFxuICB6LWluZGV4OiAtMTA7XFxyXFxuICBhbmltYXRpb246IGZpbGwgMXMgZm9yd2FyZHM7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBLZXlmcmFtZXMgKi9cXHJcXG5Aa2V5ZnJhbWVzIGZpbGwge1xcclxcbiAgMCUge1xcclxcbiAgICB3aWR0aDogMCU7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxufVxcclxcblxcclxcbi5naXRodWItbGluayB7XFxyXFxuICBjb2xvcjogdmFyKC0teWVsbG93KTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogR2FsbGVyeSBsYXlvdXQgICovXFxyXFxuLmdhbGxlcnkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FsbGVyeS5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaGFyYWN0ZXItY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAtOHB4ICNkMGQwZDBjYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJhY3Rlci1jYXJkOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggOHB4ICNkMGQwZDBjYjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjI1cmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1oZWFkZXIgaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5mcmFtZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW07XFxyXFxuICBtaW4td2lkdGg6IDVyZW07XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBjb2xvcjogY3JpbXNvbjtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuOmhvdmVyIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMTY1LCAxNzcpO1xcclxcbiAgYm94LXNoYWRvdzogMCAzcHggMjBweCAtNXB4ICNmMjNlM2U7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWJ0bjphY3RpdmUgaSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWNvdW50ZXIge1xcclxcbiAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG4ge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMC44cHggI2EyYTFhMTljO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGluZy10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFcnJvciBQYWdlICAqL1xcclxcbi5lcnJvci1wYWdlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NhbG1vbjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3ItcGFnZSBoMiB7XFxyXFxuICBmb250LXNpemU6IDNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLXBhZ2UuaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaC1idG4ge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cmVtO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaC1idG46aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzpcXHJcXG4gICAgLTdweCAtN3B4IDIwcHggMCByZ2JhKDI1MywgMTIwLCAxMjAsIDAuNCksXFxyXFxuICAgIC00cHggLTRweCA1cHggMCByZ2JhKDI1NSwgMTIwLCAxMjAsIDAuNCksXFxyXFxuICAgIDdweCA3cHggMjBweCAwICMwMDAyLFxcclxcbiAgICA0cHggNHB4IDVweCAwICMwMDAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQb3B1cCBTZWN0aW9uICovXFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC5hY3RpdmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCAxOSwgOTEsIDAuNTY2KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNsb3NlLWJ0biB7XFxyXFxuICBmb250LXNpemU6IDMuNWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMmVtO1xcclxcbiAgcmlnaHQ6IDJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNsb3NlLWJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogcmdiKDEzMCwgMTMwLCAxMzApO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDAgMTAwcHg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gIG1hcmdpbjogNSUgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAxMHB4IHNvbGlkO1xcclxcbiAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYig1MywgMTAxLCAyMzQpLCBkYXJrb3JjaGlkKSAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOjE1cHg7XFxyXFxuICBib3gtc2hhZG93OiAgMzNweCAzM3B4IDY2cHggIzAwMDAwMDU4LFxcclxcbiAgICAgICAgICAgICAtMzNweCAtMzNweCA2NnB4ICMwMDAwMDAyZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRlbnQge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250ZW50IGgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogM2VtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRlbnQgaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjZlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGVudCBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltZyB7XFxyXFxuICBwYWRkaW5nLXRvcDogMTUlO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIC5sYWJlbCB7XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J3RleHQnXSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxyXFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMjEsIDY3LCAxNTMpO1xcclxcbiAgY29sb3I6IHJnYigyMSwgNjcsIDE1Myk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHRleHRhcmVhIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMjEsIDY3LCAxNTMpO1xcclxcbiAgY29sb3I6IHJnYigyMSwgNjcsIDE1Myk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggY29ybmZsb3dlcmJsdWU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS40NWVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J3N1Ym1pdCddOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwLjhweCAjYTJhMWExOWM7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XFxyXFxufVxcclxcblxcclxcbiNzdWNjZXNzLW1lc3NhZ2Uge1xcclxcbiAgZm9udC1zaXplOiAwLjUgZW07XFxyXFxuICBjb2xvcjogcmdiKDM1LCAxNjcsIDM1KTtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yLW1lc3NhZ2Uge1xcclxcbiAgZm9udC1zaXplOiAwLjUgZW07XFxyXFxuICBjb2xvcjogcmdiKDE5OSwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi5uZXctY29tbWVudCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBjb2x1bW5zOiAyO1xcclxcbiAgLXdlYmtpdC1jb2x1bW5zOiAyO1xcclxcbiAgLW1vei1jb2x1bW5zOiAyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5nYWxsZXJ5IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGFnZS1oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubG9nbyBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdiB7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGluayB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUzMHB4KSB7XFxyXFxuICAuZ2FsbGVyeSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdiB7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28gYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGluayB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvdGFsLWJveCAubGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2l0ZW0tY291bnQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IElOVl9BUEkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcclxuXHJcbmNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoYXBwSWQsIGl0ZW1JZCwgdW5hbWUsIHVjb21tZW50KSA9PiB7XHJcbiAgY29uc3QgdXJsID0gYCR7SU5WX0FQSSArIGFwcElkfS9jb21tZW50cz9pdGVtX2lkPSR7aXRlbUlkfWA7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgaXRlbV9pZDogaXRlbUlkLFxyXG4gICAgICB1c2VybmFtZTogdW5hbWUsXHJcbiAgICAgIGNvbW1lbnQ6IHVjb21tZW50LFxyXG4gICAgfSksXHJcbiAgfSk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gZGF0YSB8fCBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkQ29tbWVudDsiLCJpbXBvcnQgeyBJTlZfQVBJLCBBUFBfSUQgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCB1cGRhdGVMaWtlcyBmcm9tICcuL3VwZGF0ZS1saWtlcy5qcyc7XHJcbmltcG9ydCBnZXRMaWtlcyBmcm9tICcuL2dldC1saWtlcy5qcyc7XHJcblxyXG5jb25zdCBhZGRMaWtlID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgLy8gR2V0IGl0ZW1faWQgZnJvbSBjbGlja2VkIGJ0biAoaWQgPSAjbGlrZS0wMTM0OTQ5MzA5MClcclxuICBjb25zdCBjaGFySWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmxpa2UtYnRuJykuaWQuc3BsaXQoJy0nKVsxXTtcclxuICAvLyBDcmVhdGUgbmV3IGxpa2VcclxuICBhd2FpdCBmZXRjaChgJHtJTlZfQVBJICsgQVBQX0lEfS9saWtlc2AsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogY2hhcklkIH0pLFxyXG4gIH0pO1xyXG4gIC8vIFVwZGF0ZSBvbiB0aGUgcGFnZVxyXG4gIGNvbnN0IGxpa2VkSXRlbXMgPSBhd2FpdCBnZXRMaWtlcygpO1xyXG4gIHVwZGF0ZUxpa2VzKGxpa2VkSXRlbXMsIGNoYXJJZCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRMaWtlO1xyXG4iLCJjb25zdCBjb3VudENvbW1lbnQgPSAoZGF0YSkgPT4ge1xyXG4gIGxldCBpID0gMDtcclxuICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGlmIChlbGVtZW50LnVzZXJuYW1lICE9PSAnJyAmJiBlbGVtZW50LmNvbW1lbnQgIT09ICcnKSB7XHJcbiAgICAgIGkgKz0gMTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gaTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvdW50Q29tbWVudDsiLCIvLyBNYWluIEFQSSB0byBmZXRjaCBkYXRhXHJcbmV4cG9ydCBjb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vd3d3LmFtaWlib2FwaS5jb20vYXBpL2FtaWlibyc7XHJcbi8vIEludm9sdmVtZW50IGZvciBsaWtlcyBhbmQgY29tbWVudHNcclxuZXhwb3J0IGNvbnN0IElOVl9BUEkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcclxuLy8gQXBwIGlkIGZvciBpbnZvbHZlbWVudCBBUElcclxuZXhwb3J0IGNvbnN0IEFQUF9JRCA9ICdkUnVIeTZCRlhOU1RpWkhNT0VUdyc7XHJcbiIsImltcG9ydCBzaG93UG9wdXAgZnJvbSAnLi9wb3B1cC1kZXRhaWwuanMnO1xyXG5pbXBvcnQgYWRkTGlrZSBmcm9tICcuL2FkZC1saWtlLmpzJztcclxuXHJcbmNvbnN0IG1ha2VFbGVtZW50ID0gKHRhZywgLi4uY2xhc3NlcykgPT4ge1xyXG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgY2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcclxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBlbGVtO1xyXG59O1xyXG5cclxuY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSAoZWxlbSwgLi4uY2hpbGRyZW4pID0+IHtcclxuICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gZWxlbS5hcHBlbmRDaGlsZChjaGlsZCkpO1xyXG59O1xyXG5cclxuY29uc3QgbWFrZUNoYXJhY3RlckNhcmQgPSAoY2hhcmFjdGVyKSA9PiB7XHJcbiAgY29uc3QgY2FyZCA9IG1ha2VFbGVtZW50KCdzZWN0aW9uJywgJ2NoYXJhY3Rlci1jYXJkJyk7XHJcbiAgY29uc3QgZnJhbWUgPSBtYWtlRWxlbWVudCgnZGl2JywgJ2ZyYW1lJyk7XHJcbiAgY29uc3QgaW1nID0gbWFrZUVsZW1lbnQoJ2ltZycsICdjYXJkLWltZycpO1xyXG4gIGNvbnN0IGhlYWRlciA9IG1ha2VFbGVtZW50KCdkaXYnLCAnY2FyZC1oZWFkZXInKTtcclxuICBjb25zdCBuYW1lID0gbWFrZUVsZW1lbnQoJ2gzJywgJ2NhcmQtbmFtZScpO1xyXG4gIGNvbnN0IGxpa2VCdG4gPSBtYWtlRWxlbWVudCgnYnV0dG9uJywgJ2xpa2UtYnRuJyk7XHJcbiAgY29uc3QgbGlrZUljb24gPSBtYWtlRWxlbWVudCgnaScsICdmYS1zb2xpZCcsICdmYS1oZWFydCcpO1xyXG4gIGNvbnN0IGxpa2VDb3VudGVyID0gbWFrZUVsZW1lbnQoJ3NwYW4nLCAnbGlrZS1jb3VudGVyJyk7XHJcbiAgY29uc3QgY29tbWVudEJ0biA9IG1ha2VFbGVtZW50KCdidXR0b24nLCAnY29tbWVudC1idG4nKTtcclxuICBjb25zdCBjb21tZW50SWNvbiA9IG1ha2VFbGVtZW50KCdpJywgJ2ZhLXJlZ3VsYXInLCAnZmEtY29tbWVudCcpO1xyXG4gIGltZy5zcmMgPSBjaGFyYWN0ZXIuaW1hZ2U7XHJcbiAgbmFtZS5pbm5lclRleHQgPSBjaGFyYWN0ZXIubmFtZTtcclxuICBjb21tZW50QnRuLmlkID0gY2hhcmFjdGVyLmlkO1xyXG4gIGNvbW1lbnRCdG4uaW5uZXJUZXh0ID0gJ0NvbW1lbnQnO1xyXG4gIGNvbW1lbnRCdG4ub25jbGljayA9IHNob3dQb3B1cDtcclxuICBsaWtlQ291bnRlci5pbm5lclRleHQgPSAnTGlrZSAwJztcclxuICBsaWtlQnRuLmlkID0gYGxpa2UtJHtjaGFyYWN0ZXIuaWR9YDtcclxuICBsaWtlQnRuLm9uY2xpY2sgPSBhZGRMaWtlO1xyXG4gIGZyYW1lLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgY29tbWVudEJ0bi5hcHBlbmRDaGlsZChjb21tZW50SWNvbik7XHJcbiAgYXBwZW5kQ2hpbGRyZW4obGlrZUJ0biwgbGlrZUljb24sIGxpa2VDb3VudGVyKTtcclxuICBhcHBlbmRDaGlsZHJlbihoZWFkZXIsIG5hbWUsIGxpa2VCdG4pO1xyXG4gIGFwcGVuZENoaWxkcmVuKGNhcmQsIGZyYW1lLCBoZWFkZXIsIGNvbW1lbnRCdG4pO1xyXG4gIHJldHVybiBjYXJkO1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheUNoYXJhY3RlcnMgPSAoY2hhcmFjdGVycykgPT4ge1xyXG4gIGNvbnN0IGdhbGxlcnlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeScpO1xyXG4gIGdhbGxlcnlDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICBjaGFyYWN0ZXJzLmZvckVhY2goKGNoYXJhY3RlcikgPT4ge1xyXG4gICAgY2hhcmFjdGVyLmlkID0gY2hhcmFjdGVyLmhlYWQgKyBjaGFyYWN0ZXIudGFpbDtcclxuICAgIGNvbnN0IGNhcmQgPSBtYWtlQ2hhcmFjdGVyQ2FyZChjaGFyYWN0ZXIpO1xyXG4gICAgZ2FsbGVyeUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDaGFyYWN0ZXJzO1xyXG4iLCJjb25zdCBkaXNwbGF5RXJyb3JQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGVycm9yUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1wYWdlJyk7XHJcbiAgY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5Jyk7XHJcbiAgZXJyb3JQYWdlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICBnYWxsZXJ5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlFcnJvclBhZ2U7XHJcbiIsImltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCBkaXNwbGF5RXJyb3JQYWdlIGZyb20gJy4vZGlzcGxheS1lcnJvci5qcyc7XHJcblxyXG5jb25zdCBnZXRDaGFyYWN0ZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0/dHlwZT1maWd1cmVgKTtcclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICBkaXNwbGF5RXJyb3JQYWdlKCk7XHJcbiAgfVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGEuYW1paWJvO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0Q2hhcmFjdGVycztcclxuIiwiY29uc3QgSU5WX0FQSSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xyXG5cclxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoYXBwSWQsIGl0ZW1JZCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IGAke0lOVl9BUEkgKyBhcHBJZH0vY29tbWVudHM/aXRlbV9pZD0ke2l0ZW1JZH1gO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKS5jYXRjaCgoZXJyKSA9PiBlcnIpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRDb21tZW50cztcclxuIiwiaW1wb3J0IHsgSU5WX0FQSSwgQVBQX0lEIH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xyXG5pbXBvcnQgZGlzcGxheUVycm9yUGFnZSBmcm9tICcuL2Rpc3BsYXktZXJyb3IuanMnO1xyXG5cclxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gYCR7SU5WX0FQSSArIEFQUF9JRH0vbGlrZXNgO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICBkaXNwbGF5RXJyb3JQYWdlKCk7XHJcbiAgfVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRMaWtlcztcclxuIiwiY29uc3QgZ2V0SXRlbUNvdW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNoYXJhY3RlckNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJhY3Rlci1jYXJkJyk7XHJcbiAgcmV0dXJuIGNoYXJhY3RlckNhcmRzLmxlbmd0aCB8fCAwO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0SXRlbUNvdW50O1xyXG4iLCJjb25zdCBsaWtlQ291bnRlciA9IChsaWtlZEl0ZW1zLCBpZCkgPT4ge1xyXG4gIGNvbnN0IGl0ZW0gPSBsaWtlZEl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaXRlbV9pZCA9PT0gaWQpO1xyXG4gIHJldHVybiBpdGVtID8gaXRlbS5saWtlcyA6IDA7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsaWtlQ291bnRlcjtcclxuIiwiaW1wb3J0IGdldENvbW1lbnRzIGZyb20gJy4vZ2V0LWNvbW1lbnRzLmpzJztcclxuaW1wb3J0IGFkZENvbW1lbnQgZnJvbSAnLi9hZGQtY29tbWVudC5qcyc7XHJcbmltcG9ydCBjb3VudENvbW1lbnQgZnJvbSAnLi9jb21tZW50LWNvdW50ZXIuanMnO1xyXG5cclxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcclxuY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5Jyk7XHJcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpO1xyXG5jb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vd3d3LmFtaWlib2FwaS5jb20vYXBpL2FtaWlibyc7XHJcbmNvbnN0IHBvcEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWltZycpO1xyXG5jb25zdCBwb3BUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtbmFtZScpO1xyXG5jb25zdCBzZXJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyaWVzJyk7XHJcbmNvbnN0IGdhbWVTZXJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zZXJpZXMnKTtcclxuY29uc3QgbmV3Q29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY29tbWVudCcpO1xyXG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XHJcbmNvbnN0IHN1Y2Nlc3NNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Y2Nlc3MtbWVzc2FnZScpO1xyXG5jb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3ItbWVzc2FnZScpO1xyXG5jb25zdCBudW1iZXJPZkNvbW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bWJlci1vZi1jb21tZW50cycpO1xyXG5cclxuY29uc3QgZ2V0SXRlbSA9IGFzeW5jIChpdGVtSWQpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS8/aWQ9JHtpdGVtSWR9YCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XHJcbiAgcG9wSW1hZ2Uuc3JjID0gZGF0YS5hbWlpYm8uaW1hZ2U7XHJcbiAgcG9wVGl0bGUuaW5uZXJIVE1MID0gZGF0YS5hbWlpYm8ubmFtZTtcclxuICBzZXJpZXMuaW5uZXJIVE1MID0gZGF0YS5hbWlpYm8uYW1paWJvU2VyaWVzO1xyXG4gIGdhbWVTZXJpZXMuaW5uZXJIVE1MID0gZGF0YS5hbWlpYm8uZ2FtZVNlcmllcztcclxuICBsZXQgbk9mQ29tbWVudHMgPSAwO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb21tZW50ID0gYXdhaXQgZ2V0Q29tbWVudHMoJ2RSdUh5NkJGWE5TVGlaSE1PRVR3JywgaXRlbUlkKTtcclxuICAgIG5ld0NvbW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBpZiAoY29tbWVudCkge1xyXG4gICAgICBjb21tZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudC51c2VybmFtZSAhPT0gJycgJiYgZWxlbWVudC5jb21tZW50ICE9PSAnJykge1xyXG4gICAgICAgICAgbmV3Q29tbWVudC5pbm5lckhUTUwgKz0gYDxsaT4ke2VsZW1lbnQuY3JlYXRpb25fZGF0ZX0gPGI+JHtlbGVtZW50LnVzZXJuYW1lfSA8L2I+OiAke2VsZW1lbnQuY29tbWVudH08L2xpPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgbk9mQ29tbWVudHMgPSBjb3VudENvbW1lbnQoY29tbWVudCk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIG5PZkNvbW1lbnRzID0gMDtcclxuICB9XHJcblxyXG4gIG51bWJlck9mQ29tbWVudHMuaW5uZXJIVE1MID0gbk9mQ29tbWVudHM7XHJcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgdW5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xyXG4gICAgY29uc3QgdWNvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudCcpLnZhbHVlO1xyXG4gICAgaWYgKHVuYW1lICE9PSAnJyAmJiB1Y29tbWVudCAhPT0gJycpIHtcclxuICAgICAgYWRkQ29tbWVudCgnZFJ1SHk2QkZYTlNUaVpITU9FVHcnLCBpdGVtSWQsIHVuYW1lLCB1Y29tbWVudCk7XHJcbiAgICAgIHN1Y2Nlc3NNZXNzYWdlLmlubmVySFRNTCA9ICdDb21tZW50IHN1Y2Nlc2Z1bGx5IGFkZGVkLiBQbGVhc2UgcmVsb2FkIHRvIHNlZSBjaGFuZ2VzLic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gJ1BsZWFzZSBmaWxsIGluIGFsbCB0aGUgZmllbGRzLic7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzaG93UG9wdXAgPSAoZSkgPT4ge1xyXG4gIHBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gIGdhbGxlcnkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG4gIGNvbnN0IGl0ZW1JZCA9IGUudGFyZ2V0LmlkO1xyXG4gIGdldEl0ZW0oaXRlbUlkKTtcclxufTtcclxuXHJcbmNvbnN0IGNsb3NlUG9wdXAgPSAoKSA9PiB7XHJcbiAgcG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgZ2FsbGVyeS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbn07XHJcblxyXG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUG9wdXApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd1BvcHVwO1xyXG4iLCJpbXBvcnQgbGlrZUNvdW50ZXIgZnJvbSAnLi9saWtlLWNvdW50ZXIuanMnO1xyXG5cclxuY29uc3QgdXBkYXRlTGlrZXMgPSBhc3luYyAobGlrZWRJdGVtcywgY2hhcklkKSA9PiB7XHJcbiAgLy8gQ291bnQgbGlrZXMgZm9yIGdpdmVuIGlkIGFuZCB1cGRhdGUgb24gdGhlIHBhZ2VcclxuICBjb25zdCB0b3RhbExpa2VzID0gbGlrZUNvdW50ZXIobGlrZWRJdGVtcywgY2hhcklkKTtcclxuICBjb25zdCBsaWtlc0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpa2UtJHtjaGFySWR9IC5saWtlLWNvdW50ZXJgKTtcclxuICBsaWtlc0NvdW50LmlubmVyVGV4dCA9IGBMaWtlICR7dG90YWxMaWtlc31gO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlTGlrZXM7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgZ2V0Q2hhcmFjdGVycyBmcm9tICcuL21vZHVsZXMvZ2V0LWNoYXJhY3RlcnMuanMnO1xyXG5pbXBvcnQgZGlzcGxheUNoYXJhY3RlcnMgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXktY2hhcmFjdGVycy5qcyc7XHJcbmltcG9ydCB1cGRhdGVMaWtlcyBmcm9tICcuL21vZHVsZXMvdXBkYXRlLWxpa2VzLmpzJztcclxuaW1wb3J0IGdldExpa2VzIGZyb20gJy4vbW9kdWxlcy9nZXQtbGlrZXMuanMnO1xyXG5pbXBvcnQgZ2V0SXRlbUNvdW50IGZyb20gJy4vbW9kdWxlcy9pdGVtLWNvdW50ZXIuanMnO1xyXG5cclxuY29uc3QgcmVmcmVzaEdhbGxlcnkgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gR2V0IGNoYXJhY3RlcnMgZnJvbSBBcGlcclxuICBjb25zdCBjaGFyYWN0ZXJzID0gYXdhaXQgZ2V0Q2hhcmFjdGVycygpO1xyXG4gIC8vIEdldCB0b3RhbCBsaWtlc1xyXG4gIGNvbnN0IGxpa2VkSXRlbXMgPSBhd2FpdCBnZXRMaWtlcygpO1xyXG4gIC8vIFVwZGF0ZSBvbiB0aGUgcGFnZVxyXG4gIGRpc3BsYXlDaGFyYWN0ZXJzKGNoYXJhY3RlcnMpO1xyXG4gIGNoYXJhY3RlcnMuZm9yRWFjaCgoY2hhcmFjdGVyKSA9PiB1cGRhdGVMaWtlcyhsaWtlZEl0ZW1zLCBjaGFyYWN0ZXIuaWQpKTtcclxuICAvLyBVcGRhdGUgdG90YWwgaXRlbXNcclxuICBjb25zdCB0b3RhbEl0ZW1zID0gZ2V0SXRlbUNvdW50KCk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tY291bnQnKS5pbm5lclRleHQgPSB0b3RhbEl0ZW1zO1xyXG59O1xyXG5cclxucmVmcmVzaEdhbGxlcnkoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9