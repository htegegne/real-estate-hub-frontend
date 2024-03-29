import { Component, OnInit } from '@angular/core';
import { RealtorService } from '../../services/realtor.service';
import { Realtor } from '../../models/realtor.model';
import { error } from 'console';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RealtorAddress } from '../../models/realtoraddress.model';

@Component({
  selector: 'app-realtor',
   standalone: true,
   imports: [ CommonModule,
              HttpClientModule,
            RouterLink,
              RouterLinkActive
             
            ],
  templateUrl: './realtor.component.html',
  styleUrl: './realtor.component.css'
})
export class RealtorComponent implements OnInit{

  realtors: Realtor[] = [];
  address!: RealtorAddress;
  realtorId: number | undefined;
  constructor(
    private realtorService: RealtorService,
    private router: Router,
    private _route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.realtorId = +params['id'];
    });
    this.getAllRealtors();
  }

  getAllRealtors() {
    this.realtorService.getAllRealtors().subscribe(
      (data: Realtor[]) => { // Specify the type of data expected (Realtor[])
       
        this.realtors = data;
      //  console.log(data);
       
      },
      error => {
        console.error('Error fetching realtors:', error);
      }
    );
  }
  viewRealtorDetails(realtorID: number): void {
    if (realtorID !== undefined) {
    console.log('realtorId:', realtorID);
    this.router.navigate(['./realtor-profile', realtorID]);
  } else {
    console.error('Realtor ID is undefined (from realtor comp).');
  }
  }
  

}
