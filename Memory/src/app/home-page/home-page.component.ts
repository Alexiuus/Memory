import { Component } from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class homePageComponent {
    title = 'Memory';
    urlImage = "../../assets/person.jpg";
}