import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BaseSiteService, RoutingService} from '@spartacus/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  website: string;

  constructor(private baseSiteService: BaseSiteService) {
  }

  ngOnInit(): void {
    this.baseSiteService.getActive().subscribe(
      data => {
        if (data === 'electronics-spa') {
          this.website = 'esika';
        } else {
          this.website = "lbel";
        }
      }
    );
  }

}
