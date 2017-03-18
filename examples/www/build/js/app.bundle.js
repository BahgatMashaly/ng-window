webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowInstance; });
/**
 * Created by Bahgat on 1/15/16.
 */

var WindowInstance = (function () {
    function WindowInstance(config) {
        this.config = config;
        this._resultDeffered = new __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* PromiseCompleter */]();
    }
    Object.defineProperty(WindowInstance.prototype, "backdropRef", {
        get: function () {
            return this._backdropRef;
        },
        set: function (value) {
            this._backdropRef = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowInstance.prototype, "bootstrapRef", {
        get: function () {
            return this._bootstrapRef;
        },
        set: function (value) {
            this._bootstrapRef = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowInstance.prototype, "result", {
        /**
         * A Promise that is resolved on a close event and rejected on a dimiss event.
         * @returns {Promise<T>|any|*|Promise<any>}
         */
        get: function () {
            return this._resultDeffered.promise;
        },
        enumerable: true,
        configurable: true
    });
    WindowInstance.prototype.dispose = function () {
        this._bootstrapRef.destroy();
        this._backdropRef.destroy();
    };
    /**
     *  Close the modal with a return value, i.e: result.
     */
    WindowInstance.prototype.close = function (result) {
        if (result === void 0) { result = null; }
        this.dispose();
        // this._resultDeffered.resolve(result);
    };
    WindowInstance.prototype.dismiss = function () {
        this.dispose();
    };
    return WindowInstance;
}());



/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_BootstrapWindowContainer__ = __webpack_require__(261);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_BootstrapWindowContainer__["a"]; });
/* unused harmony reexport DragEvent */
/* unused harmony reexport IDragListener */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ModalBackdrop__ = __webpack_require__(262);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ModalBackdrop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_utils__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__src_utils__["c"]; });
/* unused harmony reexport global */
/* unused harmony reexport Position */
/* unused harmony reexport PromiseCompleter */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__src_utils__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_WindowConfig__ = __webpack_require__(263);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__src_WindowConfig__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_WindowInstance__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__src_WindowInstance__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_WindowsInjetor__ = __webpack_require__(393);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__src_WindowsInjetor__["a"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */
// export * from './src';







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_window__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form2; });
/**
 * Created by Bahgat on 5/30/16.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Form2 = (function () {
    function Form2(dialog) {
        this.dialog = dialog;
        this.dialog.bootstrapRef.instance.addSizeChangedListener(this);
    }
    Form2.prototype.onAfterDialogSizeChanged = function (event) {
        console.log("ttttt");
    };
    Form2.prototype.ngOnDestroy = function () {
    };
    return Form2;
}());
Form2 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dayesGroupByHour',
        template: __webpack_require__(397),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_window__["f" /* WindowInstance */]])
], Form2);



/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__WindowInstance__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(66);
/* unused harmony export DragEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapWindowContainer; });
/**
 * Created by Bahgat on 1/15/16.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var makeInputObservable = function (node, eventName, useCapture) {
    return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].fromEventPattern(function (handler) { node.addEventListener(eventName, handler, useCapture); }, function (handler) { node.removeEventListener(eventName, handler, useCapture); });
};
var DragEvent = (function () {
    function DragEvent(mouseDown, mouseMove, position, offset) {
        this.mouseDown = mouseDown;
        this.mouseMove = mouseMove;
        this.position = position;
        this.offset = offset;
        this.cancelled = false;
    }
    return DragEvent;
}());

var BootstrapWindowContainer = (function () {
    function BootstrapWindowContainer(dialogInstance) {
        this.MaxmizeStatus = false;
        this.MinimizeStatus = false;
        this._isDragging = false;
        this._mouseDelay = 50;
        this._mouseDistance = 5;
        this._mouseDistanceMet = false;
        this._containment = null;
        this.sizeChangedlisteners = Array();
        // this.SV = SV;
        __WEBPACK_IMPORTED_MODULE_3__utils__["d" /* global */].MaxZIndex++;
        this.compZIndex = __WEBPACK_IMPORTED_MODULE_3__utils__["d" /* global */].MaxZIndex;
        this.dialogInstance = dialogInstance;
    }
    BootstrapWindowContainer.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function (_) { return _this.finish_Init(_this.modalDialog_ViewContainer); });
    };
    BootstrapWindowContainer.prototype.set_finish_Init = function (callback) {
        this.finish_Init = callback;
    };
    //onClick(dragEvent: DragEvent) {
    //    if( this.compZIndex !=SV.MaxZIndex) {
    //        SV.MaxZIndex++;
    //        this.compZIndex = SV.MaxZIndex;
    //    }
    //}
    BootstrapWindowContainer.prototype.documentKeypress = function (event) {
        if (this.dialogInstance.config.keyboard &&
            this.dialogInstance.config.keyboard.indexOf(event.keyCode) > -1) {
            this.dialogInstance.close();
        }
    };
    BootstrapWindowContainer.prototype.close = function () {
        this.dialogInstance.close();
    };
    BootstrapWindowContainer.prototype.headerDblclick = function (event) {
        if (event.srcElement.className == "titleBar" || event.srcElement.className == "title") {
            this.maximize(event);
        }
    };
    BootstrapWindowContainer.prototype.maximize = function (event) {
        if (!this.dialogInstance.config.canMaximize)
            return;
        if (!this.MaxmizeStatus) {
            this._originalTop = this.dialogInstance.config.position.top;
            this._originalLeft = this.dialogInstance.config.position.left;
            if (this.MinimizeStatus) {
                this.MinimizeStatus = false;
            }
            else {
                this._originalHeight = this.dialogInstance.config.size.height;
                this._originalWidth = this.dialogInstance.config.size.width;
            }
            this.dialogInstance.config.position.top = this.dialogInstance.config.minusTop; //jQuery('#af-header-0')[0].offsetHeight
            this.dialogInstance.config.position.left = this.dialogInstance.config.minusLeft;
            // backdropRef
            //if(elementRef.nativeElement.children[0].tagName=="ION-NAVBAR")
            //{
            //    config.size.height = elementRef.nativeElement.parentElement.offsetHeight-50
            //}
            if (this.dialogInstance.config.navbarHeight > 0) {
                this.dialogInstance.config.size.height = this.dialogInstance.backdropRef.location.nativeElement.closest("ion-page").offsetHeight - this.dialogInstance.config.minusHeight - this.dialogInstance.config.navbarHeight; //40 بتاعة الهيدر
                this.dialogInstance.config.size.width = this.dialogInstance.backdropRef.location.nativeElement.closest("ion-page").offsetWidth - this.dialogInstance.config.minusWidth;
                // this.dialogInstance.config.size.height  = this.dialogInstance.backdropRef.location.nativeElement.offsetHeight-this.dialogInstance.config.navbarHeight;//40 بتاعة الهيدر
                // this.dialogInstance.config.size.width = this.dialogInstance.backdropRef.location.nativeElement.offsetWidth-3;
            }
            else {
                this.dialogInstance.config.size.height = this.dialogInstance.backdropRef.location.nativeElement.offsetParent.clientHeight - this.dialogInstance.config.minusHeight + 2;
                this.dialogInstance.config.size.width = this.dialogInstance.backdropRef.location.nativeElement.offsetParent.clientWidth - this.dialogInstance.config.minusWidth + 2;
                // this.dialogInstance.config.size.height  = this.dialogInstance.backdropRef.location.nativeElement.closest(".modal-dialog").offsetHeight-44;//40 بتاعة الهيدر
                // this.dialogInstance.config.size.width = this.dialogInstance.backdropRef.location.nativeElement.closest(".modal-dialog").offsetWidth-5;
                // this.dialogInstance.config.size.height  = this.dialogInstance.backdropRef.location.nativeElement.offsetHeight-44;//40 بتاعة الهيدر
                // this.dialogInstance.config.size.width = this.dialogInstance.backdropRef.location.nativeElement.offsetWidth-5;
            }
        }
        else {
            this.dialogInstance.config.position.top = this._originalTop;
            this.dialogInstance.config.position.left = this._originalLeft;
            this.dialogInstance.config.size.width = this._originalWidth;
            this.dialogInstance.config.size.height = this._originalHeight;
        }
        this.MaxmizeStatus = !this.MaxmizeStatus;
        this.sizeChanged(event);
    };
    BootstrapWindowContainer.prototype.minimize = function (e) {
        //    tempSizeForminimize
        //  tempPositionminimize
        if (!this.MinimizeStatus) {
            if (this.MaxmizeStatus) {
                this.dialogInstance.config.size.width = 200;
                this.dialogInstance.config.size.height = 1;
                this.dialogInstance.config.position.top = this._originalTop;
                this.dialogInstance.config.position.left = this._originalLeft;
                this.MaxmizeStatus = false;
            }
            else {
                this._originalHeight = this.dialogInstance.config.size.height;
                this._originalWidth = this.dialogInstance.config.size.width;
                this._originalTop = this.dialogInstance.config.position.top;
                this._originalLeft = this.dialogInstance.config.position.left;
                this.dialogInstance.config.size.width = 200;
                this.dialogInstance.config.size.height = 1;
            }
            //توسيط الشاشة
            // this.dialogInstance.config.position.top = (window.innerHeight / 2 - this.tempSize.height / 2)
            // this.dialogInstance.config.position.left = (window.innerWidth / 2 - this.tempSize.width / 2)
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3__utils__["d" /* global */].MaxZIndex++;
            this.dialogInstance.config.position.top = this._originalTop;
            this.dialogInstance.config.position.left = this._originalLeft;
            this.dialogInstance.config.size.width = this._originalWidth;
            this.dialogInstance.config.size.height = this._originalHeight;
        }
        this.MinimizeStatus = !this.MinimizeStatus;
        this.sizeChanged(e);
    };
    BootstrapWindowContainer.prototype.initEvents = function () {
        var _this = this;
        //  click keydown keyup keypress mouseover mouseenter  mouseout mouseleave mousedown mouseup mousemove change blur focus scroll resize load unload beforeunload
        var mouseDownObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].fromEvent(this.dialogInstance.bootstrapRef.location.nativeElement, 'mousedown').filter(function (md) { return md.which == 1; });
        var mouseMoveObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].fromEvent(document, 'mousemove');
        var mouseUpObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].fromEvent(document, 'mouseup');
        var clickObservable = makeInputObservable(this.dialogInstance.bootstrapRef.location.nativeElement, 'click', true);
        var dragObservable = mouseDownObservable.flatMap(function (mouseDownEvent) {
            //mouseDownEvent.preventDefault();
            mouseDownEvent.stopPropagation();
            _this._start();
            return mouseMoveObservable
                .map(function (mouseMoveEvent) {
                _this._update(mouseDownEvent, mouseMoveEvent);
                console.log("map mouseMoveEvent");
                //console.log("offsetY" + mouseMoveEvent.offsetY);
                //console.log("pageY" + mouseMoveEvent.pageY);
                //console.log("screenY" + mouseMoveEvent.screenY);
                return new DragEvent(mouseDownEvent, mouseMoveEvent, _this._generatePosition(mouseMoveEvent), new __WEBPACK_IMPORTED_MODULE_3__utils__["c" /* CustomPosition */](_this._dragOffsetX, _this._dragOffsetY));
            })
                .filter(function (e) {
                console.log("filter mouseMoveEvent");
                console.log(_this._isDragging);
                return _this._isDragging;
            })
                .takeUntil(mouseUpObservable.map(function (mouseUpEvent) {
                console.log("takeUntil");
                clearInterval(_this._mouseDelayTimer);
                if (_this._isDragging) {
                    console.log("this._isDragging=true");
                    //this.mydragCode(mouseUpEvent);
                    //  this.dragStop.next(mouseUpEvent);
                }
            })
                .zip(clickObservable.map(function (clickEvent) {
                if (_this._isDragging) {
                    clickEvent.stopPropagation();
                    console.log("this._isDragging=false");
                    _this._isDragging = false;
                    _this.sizeChanged(event);
                }
            })));
        });
        this._dragSubscription = dragObservable.subscribe(function (event) {
            _this.onDrag(event);
            //this.drag.next(event);
            setTimeout(function () {
                if (!event.cancelled) {
                    if (event.mouseDown.srcElement.className != "titleBar" && event.mouseDown.srcElement.className != "title") {
                        _this.MaxmizeStatus = false;
                        _this.MinimizeStatus = false;
                    }
                    if (event.mouseDown.srcElement.className == "titleBar" || event.mouseDown.srcElement.className == "title") {
                        _this.dialogInstance.config.position.top = event.position.top;
                        _this.dialogInstance.config.position.left = event.position.left;
                    }
                    else if (event.mouseDown.srcElement.className == "bottom-bar") {
                        _this.dialogInstance.config.size.height = _this._originalHeight + event.offset.top;
                    }
                    else if (event.mouseDown.srcElement.className == "right-bar") {
                        _this.dialogInstance.config.size.width = _this._originalWidth + event.offset.left;
                    }
                    else if (event.mouseDown.srcElement.className == "left-bar") {
                        console.log("aaa");
                        console.log(event.offset.left);
                        console.log("old width:" + _this.dialogInstance.config.size.width);
                        _this.dialogInstance.config.size.width = _this._originalWidth - event.offset.left;
                        _this.dialogInstance.config.position.left = _this._originalLeft + event.offset.left;
                        console.log("new width:" + _this.dialogInstance.config.size.width);
                    }
                    else if (event.mouseDown.srcElement.className == "top-bar") {
                        _this.dialogInstance.config.position.top = _this._originalTop + event.offset.top;
                        _this.dialogInstance.config.size.height = _this._originalHeight - event.offset.top;
                    }
                    else if (event.mouseDown.srcElement.className == "right-bottom-corner") {
                        _this.dialogInstance.config.size.height = _this._originalHeight + event.offset.top;
                        _this.dialogInstance.config.size.width = _this._originalWidth + event.offset.left;
                    }
                    else if (event.mouseDown.srcElement.className == "left-bottom-corner") {
                        _this.dialogInstance.config.size.height = _this._originalHeight + event.offset.top;
                        _this.dialogInstance.config.size.width = _this._originalWidth - event.offset.left;
                        _this.dialogInstance.config.position.left = _this._originalLeft + event.offset.left;
                    }
                    else if (event.mouseDown.srcElement.className == "left-top-corner") {
                        _this.dialogInstance.config.position.top = _this._originalTop + event.offset.top;
                        _this.dialogInstance.config.size.height = _this._originalHeight - event.offset.top;
                        _this.dialogInstance.config.size.width = _this._originalWidth - event.offset.left;
                        _this.dialogInstance.config.position.left = _this._originalLeft + event.offset.left;
                    }
                    else if (event.mouseDown.srcElement.className == "right-top-corner") {
                        _this.dialogInstance.config.size.width = _this._originalWidth + event.offset.left;
                        _this.dialogInstance.config.position.top = _this._originalTop + event.offset.top;
                        _this.dialogInstance.config.size.height = _this._originalHeight - event.offset.top;
                    }
                    //  event.cancelled = true;
                }
            });
        });
    };
    BootstrapWindowContainer.prototype.ngOnDestroy = function () {
        this._dragSubscription.unsubscribe();
    };
    Object.defineProperty(BootstrapWindowContainer.prototype, "config", {
        set: function (value) {
            this._config = value;
            this.setConfig(this._config);
        },
        enumerable: true,
        configurable: true
    });
    BootstrapWindowContainer.prototype.setConfig = function (config) {
        for (var key in config) {
            var value = config[key];
            switch (key) {
                case 'axis':
                    this._axis = value;
                    break;
                case 'delay':
                    this._mouseDelay = parseInt(value);
                    break;
                case 'distance':
                    this._mouseDistance = parseInt(value);
                    break;
                case 'containment':
                    this._containment = value;
                    break;
                case 'model':
                    this._model = value;
                    break;
            }
        }
    };
    BootstrapWindowContainer.prototype._generatePosition = function (event) {
        var posX = (this._axis == 'y') ? this._elementStartX : this._elementStartX + this._dragOffsetX;
        var posY = (this._axis == 'x') ? this._elementStartY : this._elementStartY + this._dragOffsetY;
        return new __WEBPACK_IMPORTED_MODULE_3__utils__["c" /* CustomPosition */](posX, posY);
    };
    BootstrapWindowContainer.prototype._start = function () {
        var _this = this;
        if (this.compZIndex != __WEBPACK_IMPORTED_MODULE_3__utils__["d" /* global */].MaxZIndex) {
            __WEBPACK_IMPORTED_MODULE_3__utils__["d" /* global */].MaxZIndex++;
            this.compZIndex = __WEBPACK_IMPORTED_MODULE_3__utils__["d" /* global */].MaxZIndex;
        }
        this._isDragging = false;
        this._mouseDelayMet = this._mouseDelay == 0;
        this._mouseDistanceMet = this._mouseDistance == 0;
        this._elementStartX = this.dialogInstance.bootstrapRef.location.nativeElement.offsetLeft;
        this._elementStartY = this.dialogInstance.bootstrapRef.location.nativeElement.offsetTop;
        if (!this._mouseDelayMet) {
            this._mouseDelayTimer = window.setTimeout(function () {
                _this._mouseDelayMet = true;
            }, this._mouseDelay);
        }
    };
    BootstrapWindowContainer.prototype._update = function (mouseDownEvent, mouseMoveEvent) {
        this._dragOffsetX = mouseMoveEvent.clientX - mouseDownEvent.clientX;
        this._dragOffsetY = mouseMoveEvent.clientY - mouseDownEvent.clientY;
        this._mouseDistanceMet = Math.abs(this._dragOffsetX) > this._mouseDistance || Math.abs(this._dragOffsetY) > this._mouseDistance;
        if (!this._isDragging && this._mouseDelayMet && this._mouseDistanceMet) {
            this.onDragStart(event);
            // this.dragStart.next(event);
            this._isDragging = true;
        }
    };
    BootstrapWindowContainer.prototype._setStyle = function (styleName, styleValue) {
        if (this._model) {
            this._model[styleName] = styleValue;
        }
        else {
            try {
                // this._renderer.setElementStyle(this.dialogInstance.bootstrapRef.location, styleName, styleValue);
                console.log("ok");
            }
            catch (e) {
                console.log(e.message);
            }
        }
    };
    BootstrapWindowContainer.prototype.onDrag = function (dragEvent) {
        console.log("dragggg");
    };
    BootstrapWindowContainer.prototype.onDrag1 = function (dragEvent) {
        console.log("draggggtooooop");
    };
    BootstrapWindowContainer.prototype.onDragStart = function (event) {
        this._originalWidth = this.dialogInstance.config.size.width;
        this._originalHeight = this.dialogInstance.config.size.height;
        this._originalLeft = this.dialogInstance.config.position.left;
        this._originalTop = this.dialogInstance.config.position.top;
        //  this.resizeStart.next(event);
    };
    BootstrapWindowContainer.prototype.addSizeChangedListener = function (listener) {
        this.sizeChangedlisteners.push(listener);
    };
    BootstrapWindowContainer.prototype.sizeChanged = function (event) {
        for (var i = 0; i < this.sizeChangedlisteners.length; i++) {
            try {
                // setTimeout(() => {
                this.sizeChangedlisteners[i].onAfterDialogSizeChanged(event);
                // },5 );
            }
            catch (ex) {
            }
        }
        // for (var listener:IDragListener in this.sizeChangedlisteners) {
        //
        //             this.sizeChangedlisteners[listener].onAfterDialogSizeChanged(event);
        // }
    };
    return BootstrapWindowContainer;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalDialog', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object)
], BootstrapWindowContainer.prototype, "modalDialog_ViewContainer", void 0);
BootstrapWindowContainer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bootstrap-modal',
        // inputs: ['dialogInstance.Myconfig.size.height' ],
        host: {
            //  'tabindex': '-1 ,  بتعمل بوردر
            'role': 'dialog',
            //'(body:keydown)': 'documentKeypress($event)',
            // '(click)': 'onClick()',
            //'[style.top]': "dialogInstance.config.position.top_y=='-1px' ? '50%' : dialogInstance.config.position.top_y",
            '[style.top]': "dialogInstance.config.position.top + 'px'",
            '[style.left]': "dialogInstance.config.position.left +'px'",
            //'[style.transform]': "dialogInstance.config.position.top == '50' ?  'translate(-50%, -50%)' :  ''  ",
            '[style.z-index]': "compZIndex",
            //لو عايز سكرول لازم تحطله بخلاف السايز الخص بالكونتينت بتحط طول وعرض
            style: "\n        position: absolute;\n   display: block;\n\n         ",
            class: 'ngPopup  in',
        },
        template: "\n\n    <div class=\"modal-dialog \"     \n\n [style.width]=\"dialogInstance.config.size.width + 'px'\"\n [style.height]=\"dialogInstance.config.size.height + 'px' \"\n  >\n\n <div class=\"resizeCorner\"  [hidden]=\"!dialogInstance.config.isResizable\"  >\n<div class=\"left-top-corner\"></div>\n<div class=\"left-bottom-corner\"></div>\n<div class=\"right-top-corner\"  ></div>\n<div class=\"right-bottom-corner\"></div>\n</div>\n\n<div class=\"resizeBar\"  [hidden]=\"!dialogInstance.config.isResizable\"    >\n<div class=\"top-bar\" ></div>\n<div class=\"right-bar\" ></div>\n<div class=\"bottom-bar\"></div>\n<div class=\"left-bar\"></div>\n</div>\n\n\n<div class=\"titleBar\"  style=\"cursor:pointer\" (dblclick)=\"headerDblclick($event)\"  >\n    <span class=\"title\">{{dialogInstance.config.Title}} </span><div class=\"iconGroup\">\n    <span   [style.display]=\"dialogInstance.config.canMinimize==false? 'none' : 'inline' \" [class]=\"MinimizeStatus == false ? 'glyphicon glyphicon-minus' : 'glyphicon glyphicon-plus' \"     (click)=\"minimize($event)\"></span >\n    <span [style.display]=\"dialogInstance.config.canMaximize==false? 'none' : 'inline' \"   [class]=\"MaxmizeStatus == false ? 'glyphicon glyphicon-resize-full' : 'glyphicon glyphicon-resize-small' \"  (click)=\"maximize($event)\"></span>\n     <span class=\"glyphicon glyphicon-remove\" (click)=\"close()\"></span>\n   </div>\n</div>\n   <div class=\"modal-content\"    >\n      <!--<div class=\"modal-content\"   style=\"display: block;height:100%;width:100%\" >-->\n\n            <div id=\"xxx\" #modalDialog></div>\n         </div>\n    </div> \n",
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__WindowInstance__["a" /* WindowInstance */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__WindowInstance__["a" /* WindowInstance */]) === "function" && _b || Object])
], BootstrapWindowContainer);

var _a, _b;


/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WindowInstance__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowBackdrop; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Created by Bahgat on 1/15/16.
 */
var WindowBackdrop = (function () {
    function WindowBackdrop(dialog) {
        this.dialog = dialog;
        this.BackdropZindex = __WEBPACK_IMPORTED_MODULE_2__utils__["d" /* global */].MaxZIndex++;
        //if (!dialog.inElement) {
        this.position = this.width = this.height = null;
        this.top = this.left = this.right = this.bottom = null;
        //} else {
        //    this.position = 'absolute';
        //    this.height = '100%';
        //    this.width = '100%';
        //    this.top = this.left = this.right = this.bottom = '0';
        //}
    }
    return WindowBackdrop;
}());
WindowBackdrop = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        //directives:[IONIC_DIRECTIVES],
        selector: 'modal-backdrop',
        host: {
            '[style.position]': 'position',
            '[style.height]': 'height',
            '[style.width]': 'width',
            '[style.top]': 'top',
            '[style.left]': 'left',
            '[style.right]': 'right',
            '[style.bottom]': 'bottom',
        },
        template: '<div [hidden]="!dialog.config.BlockParentUI"  [style.position]="position" [style.z-index]="BackdropZindex" class="in modal-backdrop my" #modalBackdrop></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__WindowInstance__["a" /* WindowInstance */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__WindowInstance__["a" /* WindowInstance */]) === "function" && _a || Object])
], WindowBackdrop);

var _a;
// @NgModule({
//     imports: [
//         WindowBackdrop
//
//     ] ,
//     exports:[ WindowBackdrop],
//
//
// })
// export class ModalBackdrop_module {} 


/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_src_facade_lang__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowConfig; });
/**
 * Created by Bahgat on 1/15/16.
 */


var WindowConfig = (function () {
    function WindowConfig(Title, size, BlockParentUI, canMinimize, canMaximize, openAsMaximize, //for first time
        centerInsideParent, isResizable, position, 
        // public attachToBody: boolean = false,
        keyboard) {
        if (Title === void 0) { Title = ""; }
        if (size === void 0) { size = new __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Size */](300, 150); }
        if (BlockParentUI === void 0) { BlockParentUI = false; }
        if (canMinimize === void 0) { canMinimize = true; }
        if (canMaximize === void 0) { canMaximize = true; }
        if (openAsMaximize === void 0) { openAsMaximize = false; }
        if (centerInsideParent === void 0) { centerInsideParent = true; }
        if (isResizable === void 0) { isResizable = true; }
        if (position === void 0) { position = new __WEBPACK_IMPORTED_MODULE_1__utils__["c" /* CustomPosition */](50, 50); }
        // public attachToBody: boolean = false,
        if (keyboard === void 0) { keyboard = undefined; }
        this.Title = Title;
        this.size = size;
        this.BlockParentUI = BlockParentUI;
        this.canMinimize = canMinimize;
        this.canMaximize = canMaximize;
        this.openAsMaximize = openAsMaximize;
        this.centerInsideParent = centerInsideParent;
        this.isResizable = isResizable;
        this.position = position;
        this.navbarHeight = 0;
        this.minusLeft = 7;
        this.minusTop = 3;
        this.minusWidth = 14;
        this.minusHeight = 44;
        if (keyboard === undefined) {
            keyboard = [27];
        }
        else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_common_src_facade_lang__["a" /* isPresent */])(keyboard) && !Array.isArray(keyboard)) {
            keyboard = (!isNaN(keyboard)) ? [keyboard] : null;
        }
        this.keyboard = keyboard;
    }
    return WindowConfig;
}());



/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_window__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form2_form2__ = __webpack_require__(168);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form1; });
/**
 * Created by Bahgat on 5/30/16.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Form1 = (function () {
    function Form1(dialog, modal, viewContainer, elementRef) {
        this.dialog = dialog;
        this.modal = modal;
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
        this.dialog.bootstrapRef.instance.addSizeChangedListener(this);
    }
    Form1.prototype.openForm2 = function () {
        var self = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1_ng_window__["d" /* WindowConfig */]("Form 2 inside From 1", new __WEBPACK_IMPORTED_MODULE_1_ng_window__["e" /* Size */](300, 300)); ///سيتم التوسيط فقط في حالة عدم اعطاء قيم للمكان حيث سيعتبرها -
        config.centerInsideParent = true;
        config.BlockParentUI = true;
        var temp = {};
        config.forAny = [temp];
        config.openAsMaximize = true;
        config.centerInsideParent = true;
        this.modal.openWindow(__WEBPACK_IMPORTED_MODULE_2__form2_form2__["a" /* Form2 */], config, this.viewContainer);
    };
    Form1.prototype.ngAfterViewInit = function () {
    };
    Form1.prototype.onAfterDialogSizeChanged = function (event) {
    };
    Form1.prototype.ngOnDestroy = function () {
    };
    return Form1;
}());
Form1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'Form1',
        template: __webpack_require__(396),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_window__["f" /* WindowInstance */], __WEBPACK_IMPORTED_MODULE_1_ng_window__["c" /* WindowsInjetor */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], Form1);



/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_window__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__moduls_form1_form1__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__moduls_form2_form2__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(161);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by bahgat.mashaly on 10/1/16.
 */






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_2_ng_window__["a" /* WindowBackdrop */],
            __WEBPACK_IMPORTED_MODULE_2_ng_window__["b" /* BootstrapWindowContainer */],
            __WEBPACK_IMPORTED_MODULE_4__moduls_form2_form2__["a" /* Form2 */],
            __WEBPACK_IMPORTED_MODULE_3__moduls_form1_form1__["a" /* Form1 */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */]
            // IonicModule.forRoot(MyApp,  {
            //     // menuType: 'overlay',
            //     platforms: {
            //         ios: {
            //             menuType: 'push',
            //         }
            //     }
            //     // mode: 'ios' ,
            //
            //     // modalLeave:'modal-slide-in',
            //     // modalEnter :'modal-slide-out'
            // })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* MyApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_2_ng_window__["a" /* WindowBackdrop */],
            __WEBPACK_IMPORTED_MODULE_2_ng_window__["b" /* BootstrapWindowContainer */],
            __WEBPACK_IMPORTED_MODULE_3__moduls_form1_form1__["a" /* Form1 */],
            __WEBPACK_IMPORTED_MODULE_4__moduls_form2_form2__["a" /* Form2 */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2_ng_window__["c" /* WindowsInjetor */],
        ],
    })
], AppModule);



/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_src_facade_lang__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__WindowConfig__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WindowInstance__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ModalBackdrop__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BootstrapWindowContainer__ = __webpack_require__(261);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowsInjetor; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WindowsInjetor = (function () {
    //@ViewChild('target', {read: ViewContainerRef}) target;
    function WindowsInjetor(componentFactoryResolver, appRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
    }
    /**
     * openWindow a new modal window.
     * @param componentType A Component class (type) to render in the window. e.g: `ModalContent`.
     * @param ParentViewContainerRefORRootApp The parent location of the component. Note that it is not a rendered hierarchy, it is an injection hierarchy. e.g: the `ElementRef` of your current router view, etc...
     * @param parentInjector The injector used to create new component, if your `componentType` needs special injection (e.g: ModalContnetData) make sure you supply a suitable Injector.
     * @param config Modal configuration/options.
     * @returns Promise<WindowInstance> A promise of WindowInstance.
     */
    WindowsInjetor.prototype.openWindow = function (componentType, options, ParentViewContainerRefORRootApp, anchorNameWillBe, bindings) {
        var _this = this;
        if (!ParentViewContainerRefORRootApp) {
            //for ionic
            if (this.appRef.components[0]._component._overlayPortal) {
                ParentViewContainerRefORRootApp = this.appRef.components[0]._component._overlayPortal._viewport;
            }
            else {
                var appInstance = this.appRef['_rootComponents'][0].instance;
                if (!appInstance.viewContainerRef) {
                    var appName = this.appRef['_rootComponents'][0].name;
                    throw new Error("Missing 'viewContainerRef' declaration in " + appName + " constructor , please declare viewContainerRef in the constructor of your app root componant : " + appName + " witn name viewContainerRef :(");
                }
                else {
                    ParentViewContainerRefORRootApp = appInstance.viewContainerRef;
                }
            }
        }
        var config = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_common_src_facade_lang__["a" /* isPresent */])(options) ? options : new __WEBPACK_IMPORTED_MODULE_2__WindowConfig__["a" /* WindowConfig */]();
        //   config = (config) ? WindowConfig.makeValid(config, _config) : _config;
        var dialog = new __WEBPACK_IMPORTED_MODULE_3__WindowInstance__["a" /* WindowInstance */](config);
        var temp_bindings = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolve([
            { provide: __WEBPACK_IMPORTED_MODULE_2__WindowConfig__["a" /* WindowConfig */], useValue: config },
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], useValue: ParentViewContainerRefORRootApp }
        ]);
        if (bindings) {
            temp_bindings = temp_bindings.concat(bindings);
        }
        dialog.inElement = !!anchorNameWillBe;
        var dialogBindings = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolve([{ provide: __WEBPACK_IMPORTED_MODULE_3__WindowInstance__["a" /* WindowInstance */], useValue: dialog }]);
        return this.createBackdrop2(ParentViewContainerRefORRootApp, dialogBindings, anchorNameWillBe)
            .then(function (backdropRef) {
            dialog.backdropRef = backdropRef;
            var scroll_right = 0;
            // ParentViewContainerRefORRootApp.element.nativeElement.children[0].tagName == "ION-NAVBAR" &&
            if (dialog.backdropRef.location.nativeElement.parentElement.tagName == "SCROLL-CONTENT") {
                config.navbarHeight = 50;
                scroll_right = 18;
            }
            else {
                scroll_right = config.minusWidth;
            }
            if (config.openAsMaximize) {
                config.position.top = config.minusTop;
                config.position.left = config.minusLeft;
                if (ParentViewContainerRefORRootApp.element.nativeElement.parentElement.offsetParent) {
                    config.size.width = ParentViewContainerRefORRootApp.element.nativeElement.parentElement.offsetParent.clientWidth - scroll_right;
                    config.size.height = ParentViewContainerRefORRootApp.element.nativeElement.parentElement.offsetParent.clientHeight - config.navbarHeight - config.minusHeight;
                }
                else {
                    config.size.width = ParentViewContainerRefORRootApp.element.nativeElement.parentElement.clientWidth - scroll_right;
                    config.size.height = ParentViewContainerRefORRootApp.element.nativeElement.parentElement.clientHeight - config.navbarHeight - config.minusHeight;
                }
            }
            else if (config.centerInsideParent) {
                // DOM.setStyle(userComponent, 'width', '100%');
                // DOM.getStyle(ParentViewContainerRefORRootApp.nativeElement.innerHeight,'innerHeight')
                // DOM.getStyle('innerWidth')
                if (ParentViewContainerRefORRootApp.element.nativeElement.innerHeight) {
                    config.position.top = (ParentViewContainerRefORRootApp.element.nativeElement.innerHeight / 2 - config.size.height / 2);
                    config.position.left = (ParentViewContainerRefORRootApp.element.nativeElement.innerWidth / 2 - config.size.width / 2);
                }
                else {
                    config.position.top = (ParentViewContainerRefORRootApp.element.nativeElement.parentElement.offsetHeight / 2 - config.size.height / 2);
                    config.position.left = (ParentViewContainerRefORRootApp.element.nativeElement.parentElement.offsetWidth / 2 - config.size.width / 2);
                }
            }
            var modalDataBindings = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolve([{
                    provide: __WEBPACK_IMPORTED_MODULE_3__WindowInstance__["a" /* WindowInstance */],
                    useValue: dialog
                }]).concat(temp_bindings);
            var that = _this;
            // this.componentLoader.loadAsRoot()
            return _this.injectViewToBackdrop(ParentViewContainerRefORRootApp, dialogBindings)
                .then(function (bootstrapRef) {
                dialog.bootstrapRef = bootstrapRef;
                // bootstrapRef.location.nativeElement.appendChild()
                //  bootstrapRef.location.nativeElement.appendChild(bootstrapRef.hostView);
                return new Promise(function (resolve, reject) {
                    bootstrapRef.instance.set_finish_Init(function (viewContainerRefx) {
                        var factory = that.componentFactoryResolver.resolveComponentFactory(componentType);
                        // let factory:ComponentFactory<any> = bootstrapRef.instance.componentFactoryResolver.resolveComponentFactory(componentType);
                        var contentRef = viewContainerRefx.createComponent(factory);
                        bootstrapRef.instance.initEvents();
                        dialog.contentRef = contentRef;
                        resolve(contentRef.instance);
                        // bootstrapRef.instance.resolver.resolveComponent(componentType).then((factory:ComponentFactory<any>) => {
                        // });
                    });
                });
                //   this.componentLoader.loadNextToLocation(componentType,viewContainerRefx,modalDataBindings)
                //       .then ( function (contentRef)
                //       {
                //     bootstrapRef.instance.initEvents()
                //     dialog.contentRef = contentRef;
                //     return contentRef.instance;
                //
                // } );
                // }
                // );
            });
            // return this.componentLoader.loadIntoLocation( BootstrapWindowContainer, backdropRef.location, 'modalBackdrop', dialogBindings)
            //     .then(bootstrapRef => {
            //             dialog.bootstrapRef = bootstrapRef;
            //
            //             return this.componentLoader.loadIntoLocation(
            //                 componentType, bootstrapRef.location, 'modalDialog', modalDataBindings)
            //                 .then(contentRef => {
            //                         bootstrapRef.instance.initEvents()
            //                         dialog.contentRef = contentRef;
            //                        return contentRef.instance;
            //
            //                     }
            //                 );
            //         }
            //     );
        });
    };
    WindowsInjetor.prototype.createBackdrop2 = function (elementRef_viewContaner, bindings, anchorName) {
        var factory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__ModalBackdrop__["a" /* WindowBackdrop */]);
        var childInjector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].fromResolvedProviders(bindings, elementRef_viewContaner.parentInjector);
        return Promise.resolve(elementRef_viewContaner.createComponent(factory, elementRef_viewContaner.length, childInjector));
    };
    WindowsInjetor.prototype.injectViewToBackdrop = function (elementRef_viewContaner, bindings) {
        var factory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__BootstrapWindowContainer__["a" /* BootstrapWindowContainer */]);
        var childInjector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].fromResolvedProviders(bindings, elementRef_viewContaner.parentInjector);
        return Promise.resolve(elementRef_viewContaner.createComponent(factory, elementRef_viewContaner.length, childInjector));
    };
    return WindowsInjetor;
}());
WindowsInjetor = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]) === "function" && _b || Object])
], WindowsInjetor);

var _a, _b;


/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moduls_form1_form1__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moduls_form2_form2__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_window__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/**
 * Created by bahgat.mashaly on 10/1/16.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// require("./shared/myLib/logger")
var MyApp = (function () {
    // @ViewChild('mainContainer', {read: ViewContainerRef}) target;
    function MyApp(myInjector, viewContainerRef) {
        this.myInjector = myInjector;
        this.viewContainerRef = viewContainerRef;
    }
    MyApp.prototype.ngAfterViewInit = function () {
    };
    MyApp.prototype.openForm1 = function () {
        var self = this;
        var config = new __WEBPACK_IMPORTED_MODULE_3_ng_window__["d" /* WindowConfig */]("Form 1", new __WEBPACK_IMPORTED_MODULE_3_ng_window__["e" /* Size */](400, 400)); ///سيتم التوسيط فقط في حالة عدم اعطاء قيم للمكان حيث سيعتبرها -
        // config.centerInsideParent = true;
        // config.BlockParentUI = true;
        var temp = {};
        // temp["deviceOrCustomer"]=deviceOrCustomer;
        //
        // temp["devices"]=devices;
        config.forAny = [temp];
        config.openAsMaximize = false;
        //  config.openAsMaximize=true;
        this.myInjector.openWindow(__WEBPACK_IMPORTED_MODULE_1__moduls_form1_form1__["a" /* Form1 */], config);
    };
    MyApp.prototype.openForm2 = function () {
        var self = this;
        var config = new __WEBPACK_IMPORTED_MODULE_3_ng_window__["d" /* WindowConfig */]("Form 2", new __WEBPACK_IMPORTED_MODULE_3_ng_window__["e" /* Size */](300, 300)); ///سيتم التوسيط فقط في حالة عدم اعطاء قيم للمكان حيث سيعتبرها -
        config.position = new __WEBPACK_IMPORTED_MODULE_3_ng_window__["g" /* CustomPosition */](100, 200);
        config.centerInsideParent = false;
        var temp = {};
        config.forAny = [temp];
        config.openAsMaximize = false;
        this.myInjector.openWindow(__WEBPACK_IMPORTED_MODULE_2__moduls_form2_form2__["a" /* Form2 */], config).then();
    };
    return MyApp;
}());
MyApp = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'my-app',
        template: __webpack_require__(395),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng_window__["c" /* WindowsInjetor */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
], MyApp);



/***/ }),

/***/ 395:
/***/ (function(module, exports) {

module.exports = "\n\n<input type=\"button\" value=\"open Form1\" (click)=\"openForm1()\">\n\n\n\n<input type=\"button\" value=\"open Form2\" (click)=\"openForm2()\">\n\n\n";

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

module.exports = "\n\n\n<div > i'm Form 1</div>\n\n<input type=\"button\" value=\"open form 2 inside me\" (click)=\"openForm2()\">\n\n\n";

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

module.exports = "\n<div > i'm Form 2</div>\n\n\n\n";

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromiseCompleter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Size; });
/* unused harmony export Position */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CustomPosition; });
/**
 * Created by bahgat.mashaly on 10/6/16.
 */
var PromiseCompleter = (function () {
    function PromiseCompleter() {
        var _this = this;
        this.promise = new Promise(function (res, rej) {
            _this.resolve = res;
            _this.reject = rej;
        });
    }
    return PromiseCompleter;
}());

var global = (function () {
    function global() {
    }
    Object.defineProperty(global, "MaxZIndex", {
        get: function () {
            return this._MaxZIndex;
        },
        set: function (value) {
            this._MaxZIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    return global;
}());

global._MaxZIndex = 10;
var Size = (function () {
    function Size(height, width) {
        if (height === void 0) { height = 100; }
        if (width === void 0) { width = 100; }
        this.height = height;
        this.width = width;
    }
    return Size;
}());

var Position = (function () {
    function Position(left_x, top_y) {
        if (left_x === void 0) { left_x = "50%"; }
        if (top_y === void 0) { top_y = "50%"; }
        this.left_x = left_x;
        this.top_y = top_y;
    }
    return Position;
}());

var CustomPosition = (function () {
    function CustomPosition(left, top) {
        this.left = left;
        this.top = top;
    }
    return CustomPosition;
}());



/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);


/***/ })

},[672]);
//# sourceMappingURL=app.bundle.js.map