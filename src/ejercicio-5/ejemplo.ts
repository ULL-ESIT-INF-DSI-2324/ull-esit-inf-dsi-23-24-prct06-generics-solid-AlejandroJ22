import { EmailService, ShortMessageService, Notifier } from "./servicio-mensajeria";

// Client code
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification("Hello World!");

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification("Hello World!");