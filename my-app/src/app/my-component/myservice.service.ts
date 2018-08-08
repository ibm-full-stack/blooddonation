import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyserviceService {

  constructor(private http:Http) { }
  
  //code implementation of get method
  getUserDetail(){
  	return this.http.get('https://jsonplaceholder.typicode.com/users')
  	.map(res => res.json());
  }


  //POST method here
  postJSON(){
  	let json=JSON.stringify({var1:'test',var2:'3'});
  	let params='json='+json;
  	let headers=new Headers();
  	headers.append('Content-Type',
  		'application/x-www-form-urlencoded');

  	 return this.http.post('http://validate.jsontest.com',
  	 	params,{
  	 		headers:headers
  	 	}).map(res=>res.json());
  	  }

}
