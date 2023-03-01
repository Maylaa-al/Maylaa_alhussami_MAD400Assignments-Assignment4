import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONTENT } from '../Data/mock-content';
import { IContent } from '../icontent';

@Injectable({
  providedIn: 'root'
})
export class BettaService {

  constructor() {

   }


  getBetta() : Observable<IContent[]>{
    return of(CONTENT);
    }

    
}
