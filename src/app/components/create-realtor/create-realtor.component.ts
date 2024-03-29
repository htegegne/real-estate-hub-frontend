import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RealtorService } from '../../services/realtor.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { RealtorAddress } from '../../models/realtoraddress.model';
import { Realtor } from '../../models/realtor.model';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-realtor',
  standalone: true,
  imports: [CommonModule, 
    HttpClientModule,
            RouterLink,
              RouterLinkActive,
              ReactiveFormsModule],
  templateUrl: './create-realtor.component.html',
  styleUrl: './create-realtor.component.css'
})
export class CreateRealtorComponent implements OnInit {

  registrationForm!: FormGroup;
  registrationError: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private realtorService: RealtorService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      realtorAddress: this.formBuilder.group({
        subCity: ['', Validators.required],
        district: ['', Validators.required],
        houseNo: ['', Validators.required],
        blockName: ['']
      })
      // Add more fields for the address if needed
    });
  }
  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.registrationError = undefined; // Clear previous error
      // Create RealtorAddress instance from form values
      const addressFormValue = this.registrationForm.get('realtorAddress')!.value;
      const realtorAddress = new RealtorAddress(
        0, // Set addressId to 0, assuming it will be assigned by the backend
        addressFormValue.subCity,
        addressFormValue.district,
        addressFormValue.houseNo,
        addressFormValue.blockName
       
      );

      // Create Realtor instance from form values
      const realtor = new Realtor(
        0, // Set realtorID to 0, assuming it will be assigned by the backend
        0, // Set addressId to 0 initially
        this.registrationForm.value.firstName,
        this.registrationForm.value.lastName,
        this.registrationForm.value.email,
        this.registrationForm.value.password,
        this.registrationForm.value.phoneNumber,
        realtorAddress
      );
      // Create a custom HTTP request with the Content-Type header
const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});
      this.realtorService.createRealtor(this.registrationForm.value)
        .subscribe(
          (newRealtor) => {
            // Registration successfule
            this.router.navigate(['./realtor-details', newRealtor.realtorID]);
            console.log(newRealtor.realtorID);
          },
          error => {
            // Registration failed, display an error message
            this.registrationError = error.message;
          }
        );
    } else {
      // Form is invalid, display validation errors
      this.registrationError = 'Please fill out all required fields correctly.';
    }
  }
}
