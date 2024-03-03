"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const servicio_mensajeria_1 = require("../src/ejercicio-5/servicio-mensajeria");
describe('EmailService', () => {
    it('should send email notification', () => {
        const emailService = new servicio_mensajeria_1.EmailService();
        const message = 'Test email notification';
        (0, chai_1.expect)(() => emailService.notify(message)).to.not.throw();
    });
});
describe('ShortMessageService', () => {
    it('should send SMS notification', () => {
        const smsService = new servicio_mensajeria_1.ShortMessageService();
        const message = 'Test SMS notification';
        (0, chai_1.expect)(() => smsService.notify(message)).to.not.throw();
    });
});
describe('Notifier', () => {
    it('should send notification through specified service', () => {
        const emailNotifier = new servicio_mensajeria_1.Notifier(new servicio_mensajeria_1.EmailService());
        const smsNotifier = new servicio_mensajeria_1.Notifier(new servicio_mensajeria_1.ShortMessageService());
        const emailMessage = 'Test email notification';
        const smsMessage = 'Test SMS notification';
        (0, chai_1.expect)(() => emailNotifier.sendNotification(emailMessage)).to.not.throw();
        (0, chai_1.expect)(() => smsNotifier.sendNotification(smsMessage)).to.not.throw();
    });
});
