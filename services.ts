import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private baseUrl = 'http://localhost:3000/api/hotels';

  constructor(private http: HttpClient) { }

  superAdminLogin(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }

  createHotel(hotelData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, hotelData);
  }

  getHotels(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  updateHotel(id: string, hotelData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, hotelData);
  }

  deleteHotel(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  toggleHotel(id: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/toggle/${id}`, null);
  }

  approveHotel(id: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/approve/${id}`, null);
  }

  rejectHotel(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/reject/${id}`);
  }
}
