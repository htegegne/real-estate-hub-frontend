import { RouterModule, Routes } from '@angular/router';
import { RealtorComponent } from './components/realtor/realtor.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealtorProfileComponent } from './components/realtor-profile/realtor-profile.component';
import { SearchRealtorComponent } from './components/search-realtor/search-realtor.component';
import { UpdateRealtorComponent } from './components/update-realtor/update-realtor.component';
import { DeleteRealtorComponent } from './components/delete-realtor/delete-realtor.component';
import { CreateRealtorComponent } from './components/create-realtor/create-realtor.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'realtors', component: RealtorComponent},
    {path: '', component: HomeComponent},
    {path: 'realtor-profile/:id', component: RealtorProfileComponent},
    {path: 'create-realtor', component: CreateRealtorComponent}
    // {path: 'searchRealtor', component: SearchRealtorComponent},
    // {path: 'updateRealtor', component: UpdateRealtorComponent},
    // {path: 'deleteRealtor', component: DeleteRealtorComponent}

   // { path: '**', component: PageNotFoundComponent }

  
];

