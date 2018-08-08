import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-blood-donation-reg',
  templateUrl: './blood-donation-reg.component.html',
  styleUrls: ['./blood-donation-reg.component.css']
})
export class BloodDonationRegComponent implements OnInit {
 angForm: FormGroup;
 name;
 email;

  constructor(private builder: FormBuilder) {
  this.createForm();
   }

   createForm(){
   	this.angForm=this.builder.group({
   		user: ['',Validators.required ],
   		pass: ['',Validators.required ],
   		email: ['',Validators.required ],
   		mobile: ['',Validators.required ],
   		caddress: ['',Validators.required ],
   		paddress: ['',Validators.required ]
   	});
   }
 show(){
    //alert(this.angForm.controls['caddress'].value);
    //set pwd
    this.angForm.controls['paddress'].setValue(this.angForm.controls['caddress'].value);
  }

 /*
add(){
	alert(this.angForm.controls['name'].value);
	//this.angForm.controls['paddress'].setValue(this.angForm.controls['caddress'].value);
}
*/

  ngOnInit() {
  }

}
