import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, switchMap, map, of } from 'rxjs';

import { Realtor } from '../models/realtor.model';
import { RealtorAddress } from '../models/realtoraddress.model';

@Injectable({
  providedIn: 'root'
})
export class RealtorService {

  private apiUrl = 'http://localhost:8000/api/realtors'; 


  constructor(private http:HttpClient) { }

  // private handleError(error: any) {
  //   console.error('API error', error);
  //   return throwError(error);
  // }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Send the error to remote logging infrastructure
      console.error(operation, 'failed:', error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  public getAllRealtors(): Observable<Realtor[]> {
    return this.http.get<Realtor[]>(`${this.apiUrl}/allrealtors`);
    // .pipe(
    //   catchError(this.handleError<any>('getRealtorById'))
    // );
  }
  // searchRealtors(query: string): Observable<Realtor[]> {
  //   return this.http.get<Realtor[]>(`${this.apiUrl}/search?query=${query}`)
  //   .pipe(
  //     catchError(this.handleError)
  //   );
  // }
 

  createRealtor(realtor: Realtor): Observable<Realtor> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Realtor>(`${this.apiUrl}/add`, realtor, {headers}) ;
      // .pipe(
      //   catchError(error => {
      //     // Handle error
      //     console.error('Error registering realtor:', error);
      //     throw error; // Rethrow the error for the component to handle
      //   })
      // );
  }

  // updateRealtor(id: number, updatedRealtor: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/update/${id}`, updatedRealtor)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // deleteRealtor(id: number): Observable<any> {
  //   return this.http.delete<any>(`${this.apiUrl}/delete/${id}`)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }
  public getRealtorById(id: number): Observable<Realtor> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
    // .pipe(
    //   map(response => response), // You might need to modify this based on your API response structure
    //   catchError(this.handleError<any>('getRealtorById'))
    // );
  }
  

  getAddressById(addressId: number): Observable<RealtorAddress> {
    return this.http.get<RealtorAddress>(`${this.apiUrl}/addresses/${addressId}`)
      .pipe(
        catchError(this.handleError<any>('getRealtorById'))
      );
  }
 
  // public getRealtorByEmail(emailId) {
  //   return this.http.get(`${this.apiUrl}/`)
  // }
  
}


