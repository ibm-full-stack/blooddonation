import { Component } from '@angular/core';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  name:string='Full Stack';
  userName="Tranning";
  //writing event in angular and binding
  clickMessage:string="idel";
  onClickMe(){
  	this.clickMessage="I am Bharat";

  }

}
