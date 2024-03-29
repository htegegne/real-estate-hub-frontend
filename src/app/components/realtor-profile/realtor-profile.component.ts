import { Component, OnDestroy, OnInit } from '@angular/core';
import { RealtorService } from '../../services/realtor.service';
//import { Realtor } from '../../models/realtor.model';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable, Subscription, of, switchMap } from 'rxjs';
import {RealtorAddress } from '../../models/realtoraddress.model';
import { Realtor } from '../../models/realtor.model';

@Component({
  selector: 'app-realtor-profile',
  standalone: true,
  imports: [CommonModule,
    HttpClientModule],
  templateUrl: './realtor-profile.component.html',
  styleUrl: './realtor-profile.component.css'
})

export class RealtorProfileComponent implements OnInit {

  realtor!: Observable<Realtor>;
 // realtorId: number | undefined;
  
  constructor(
    private _route: ActivatedRoute, 
    private realtorService : RealtorService) {}

  ngOnInit(): void {
    const realtorId = Number(this._route.snapshot.paramMap.get('id'));
    this.getRealtor(realtorId);
    //this._route.params.subscribe(params => {
   //   const realtorId = +params['id'];
      console.log('Realtor ID:', realtorId);
  //  this.getRealtor(realtorId);
    //console.log(realtorId);
   
   // });
  }
  // getRealtor(id: number) : void {
  //   this.realtorService.getRealtorById(id).subscribe(
  //     (data: Realtor) => {
  //       this.realtor = of(data);
  //     },
  //     error => {
  //       console.error('Error fetching realtor details:', error);
  //     }
  //   );
  getRealtor(realtorId: number) : void {
    this.realtor = this.realtorService.getRealtorById(realtorId);
  }
    // const id = this._route.snapshot?.paramMap.get('id');
    // if (id && !isNaN(+id)) {
    //   const realtorId = +id;
    //   this.realtor$ = this.realtorService.getRealtorById(realtorId);
    //   console.log(realtorId);
    // } else {
    //   console.error('Realtor ID is not provided.(from realtor profile)');
    // }
    //throw new Error('Method not implemented.');
  
}