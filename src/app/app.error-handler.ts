import { Observable } from 'rxjs/Observable';
import {HttpErrorResponse} from '@angular/common/http'

export class ErrorHandler{
    static handlerError(error: HttpErrorResponse | any){

        let errorMessage: string
        if(error instanceof HttpErrorResponse){
            errorMessage = `Erro ${error.error} ao acessar a URL ${error.url} - ${error.statusText}`

        }else{
            errorMessage = error.toString()
        }
        console.log(errorMessage)

        return Observable.throw(errorMessage)

    }
}