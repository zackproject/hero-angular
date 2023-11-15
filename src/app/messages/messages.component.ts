import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})


export class MessagesComponent {
  //'messageService' como pública porque será enlazada en la plantilla del componente.
  constructor(public messageService: MessageService) { }
  //title = "Mensaje"
}
