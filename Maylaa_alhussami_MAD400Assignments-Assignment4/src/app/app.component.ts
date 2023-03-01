import { Component, OnInit } from '@angular/core';
import { IContent } from './icontent';
import { BettaService } from './services/betta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  singleItem?: IContent;
  title = 'M_Alhussami_BettaFish';

  constructor(private bettaService: BettaService) {
    
}

// ngOnInit():void {
//   this.bettaService.getBetta(2).subscribe(betta: IContent) => {
//     this.singleItem = betta;
//   }
}

