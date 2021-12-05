import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  message: string[] = [];

  constructor() { }

  add(msg: string) {
    this.message.push(msg)
  }

  clear() {
    this.message = [];
  }
}
