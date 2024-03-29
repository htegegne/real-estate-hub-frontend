
//import { Injectable } from '@angular/core';

import { RealtorAddress } from "./realtoraddress.model";

// @Injectable({
//   providedIn: 'root'
// })
export class Realtor {
    
  realtorID : number;  //variable will hold value at run-time.
  addressId: number;
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
  phoneNumber: string;
  realtorAddress: RealtorAddress;
  constructor(
    realtorId: number,
   addressId: number,
    firstName: string,
    lastName: string,
    emailId: string,
    password: string,
    phoneNumber: string,
    realtorAddress: RealtorAddress
    ) {
        this.realtorID = realtorId;
        this.addressId = addressId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.realtorAddress = realtorAddress;
    }
}
