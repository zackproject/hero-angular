import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
 // constructor(private messageService: MessageService) { }
  //expone en cache la lista de mensajes
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
    console.log("cambiado", this.messages);
    
  }

  clear() {
    console.log("limpiado");
    
    this.messages = [];
  }
}
