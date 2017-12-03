import { Injectable } from '@angular/core';


@Injectable()
export class MessageService {

  messages : string[]  = [];

  add( message : string )
  {
    let date: Date
    date = new Date();
    let timestring: string
    timestring = "** "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" ** ";
    message = timestring + message;
    this.messages.push( message )
  }

  clear()
  {
    this.messages = [];
  }



}
