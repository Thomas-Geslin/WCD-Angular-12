import { Component } from '@angular/core';
import { NasaService } from './service/nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'NasaApiDialogue'

  public imgOfTheDay: any;

  constructor(public nasaService: NasaService) { }

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe(APOD => {
      this.imgOfTheDay = APOD;
      console.log(APOD)
    })
  }

}
