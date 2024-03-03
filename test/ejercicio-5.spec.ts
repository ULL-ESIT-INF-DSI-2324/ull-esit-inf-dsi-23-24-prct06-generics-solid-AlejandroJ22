import "mocha"
import { expect } from 'chai';
import { EmailService, ShortMessageService, Notifier } from "../src/ejercicio-5/servicio-mensajeria";

describe('EmailService', () => {
  it('envía la notidicación vía Email', () => {
    const emailService = new EmailService();
    const message = 'Test email notification';
    expect(() => emailService.notify(message)).to.not.throw();
  });
});

describe('ShortMessageService', () => {
  it('envía la notidicación vía SMS', () => {
    const smsService = new ShortMessageService();
    const message = 'Test SMS notification';
    expect(() => smsService.notify(message)).to.not.throw();
  });
});

describe('Notifier', () => {
  it('envía la notidicación', () => {
    const emailNotifier = new Notifier(new EmailService());
    const smsNotifier = new Notifier(new ShortMessageService());

    const emailMessage = 'Test email notification';
    const smsMessage = 'Test SMS notification';

    expect(() => emailNotifier.sendNotification(emailMessage)).to.not.throw();
    expect(() => smsNotifier.sendNotification(smsMessage)).to.not.throw();
  });
});
