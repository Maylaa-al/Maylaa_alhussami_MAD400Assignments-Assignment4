import { Component } from '@angular/core';
import { IContent } from '../icontent';
import { BettaService } from '../services/betta.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  bettasArray: IContent[];

  constructor(private bettaService: BettaService) {
    this.bettasArray = [];
  }

  ngOnInit() {
    this.bettaService.getBetta().subscribe(content => this.bettasArray = content);
    }
}
