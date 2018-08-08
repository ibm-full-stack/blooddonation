import { Component, OnInit } from '@angular/core';
import {Customer} from './customermodel';
import {MyserviceService} from './myservice.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
	namecomp:string="Component here!!!!";
	getData:string;
	postData:string;

	
constructor( private _httpService:MyserviceService) { }
  

  ngOnInit() {
  }
  //create the customer array for handling the data
	custArray:Array<Customer> =new Array();
	

	model=new Customer('',' ');

	submitted=false;

	onSubmit(){
		this.submitted=true;
	}
	//event here which create the customer
	createCustomer(){
		this.custArray.push(new Customer(this.model.name,this.model.age));
	}




//create method for service call

onTestGet(){
	this._httpService.getUserDetail()
	.subscribe(
         data => this.getData=JSON.stringify(data),
         error =>alert(error),
         ()=>console.log("finshed")
		);
}


//write the post method call to service
onTestPost(){

	this._httpService.postJSON()
	.subscribe(
        data=>this.postData=JSON.stringify(data),
        error=>alert(error),
        ()=>console.log("finsihed")
		);
}

}
