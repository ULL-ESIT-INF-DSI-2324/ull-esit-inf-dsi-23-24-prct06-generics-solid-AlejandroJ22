/**
 * Interfaz que representa un servicio de notificación.
 */
interface NofierMessages {
  /**
   * Método para enviar una notificación.
   * @param message: el mensaje que se enviará.
   */
  notify(message: string): void;
}

/**
 * Clase que representa un servicio de notificación por correo electrónico.
 * Implementa la interfaz NotifierMessages.
 */
export class EmailService implements NofierMessages {
  /**
   *Envía una notificación por correo electrónico.
   * @param message: el mensaje que se enviará.
   */
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

/**
 * Clase que representa un servicio de notificación por SMS.
 * Implementa la interfaz NotifierMessages.
 */
export class ShortMessageService implements NofierMessages {
  /**
   * Envía una notificación por SMS.
   * @param message: el mensaje que se enviará.
   */
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

/**
 * Clase genérica para envío de notificaciones utilizando diferentes servicios.
 * @template T: parámetro de tipo que extiende la interfaz NotifierMessages.
 */
export class Notifier<T extends NofierMessages> {
  /**
   * Construye una instancia de Notificador.
   * @param notificationService: el servicio de notificación que se utilizará.
   */
  constructor(private notificationService: T) {}
  /**
   * Envía una notificación utilizando el servicio especificado.
   * @param message: el mensaje que se enviará.
   */
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}