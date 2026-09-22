import { Component } from '@angular/core';
import { womensareeData } from '../../../../../Data/Women/women_saree';
import { mensjeansData } from '../../../../../Data/Men/mens_jeans';
import { womentopData } from '../../../../../Data/Women/women_top';
import { womenlehangaData } from '../../../../../Data/Women/women_lehanga';
import { womenmaxidressData } from '../../../../../Data/Women/women_maxidress';
import { menskurtaData } from '../../../../../Data/Men/mens_kurta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    womenSarees : any;
    mensJeans : any;
    womenTops : any;
    lehangaCholi : any;
    womenDress : any;
    menskurta : any;

    ngOnInit() {
      this.womenSarees = womensareeData.slice(0,5);
      this.mensJeans = mensjeansData.slice(0,5);
      this.womenTops = womentopData.slice(0,5);
      this.lehangaCholi = womenlehangaData.slice(0,5);
      this.womenDress = womenmaxidressData.slice(0,5);
      this.menskurta = menskurtaData.slice(0,5);
    }
}
