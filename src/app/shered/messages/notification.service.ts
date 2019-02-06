import { EventEmitter } from '@angular/core';


export class NotificationService{

    contructor() {}
    notifier = new EventEmitter<string>()

    notify(message: string){
        this.notifier.emit(message)
    }

}