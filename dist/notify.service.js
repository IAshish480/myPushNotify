"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var NotifyService = (function () {
    function NotifyService() {
        this.permission = this.isSupported() ? 'default' : 'denied';
    }
    NotifyService.prototype.isSupported = function () {
        return 'Notification' in window;
    };
    NotifyService.prototype.requestPermission = function () {
        var self = this;
        if ('Notification' in window) {
            Notification.requestPermission(function (status) {
                return self.permission = status;
            });
        }
    };
    NotifyService.prototype.create = function (title, options, redirectLink) {
        var self = this;
        return new rxjs_1.Observable(function (obs) {
            if (!('Notification' in window)) {
                console.log('Notifications are not available in this environment');
                obs.complete();
            }
            if (self.permission !== 'granted') {
                console.log('The user hasn\'t granted you permission to send push notifications');
                obs.complete();
            }
            var _notify = new Notification(title, options);
            _notify.onshow = function (e) {
                return obs.next({
                    notification: _notify,
                    event: e
                });
            };
            _notify.onclick = function (e) {
                window.open(redirectLink, '_blank');
                return obs.next({
                    notification: _notify,
                    event: e
                });
            };
            _notify.onerror = function (e) {
                return obs.error({
                    notification: _notify,
                    event: e
                });
            };
            _notify.onclose = function () {
                return obs.complete();
            };
        });
    };
    NotifyService.prototype.generateNotification = function (source, callback) {
        console.log(source);
        var self = this;
        source.forEach(function (item) {
            var options = {
                body: item.alertContent,
                icon: './assets/imgs/logo.png',
                silent: item['silent'] ? item['silent'] : false,
                renotify: item['renotify'] ? item['renotify'] : false,
                tag: item['renotify'] ? 'renotify' : '',
            };
            setTimeout(function () {
                var redirectLink = item['redirectLink'] ? item['redirectLink'] : '';
                self.create(item.title, options, redirectLink).subscribe(function (val) {
                    return callback(val);
                });
            }, 1000);
        });
    };
    return NotifyService;
}());
NotifyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], NotifyService);
exports.NotifyService = NotifyService;
