import { Injectable } from '@angular/core';
import { Observable, observable ,interval } from 'rxjs';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AppService {


  constructor(
    public http: HttpClient
  ) {

  } // end constructor  

  public secondsCounter1 = interval(300000);
  public secondsCounter2 = interval(300000);
  public secondsCounter3 = interval(300000);
  public secondsCounter4 = interval(300000);
  public secondsCounter5 = interval(300000);
  public secondsCounter6 = interval(300000);
  public secondsCounter7 = interval(300000);
  public secondsCounter8 = interval(300000);
  public secondsCounter9 = interval(300000);


  public getWeather(data):Observable<any>{
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${data}&appid=3ba1a438394976e40b64c83eb94a1ae2`)
  }  

}
