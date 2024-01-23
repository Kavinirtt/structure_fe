import { Injectable } from '@angular/core';
import {jwtDecode }from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UtilService {


  constructor() { }
  jsonToQueryString(json: any) {
    if(json) {
      return '?' +
      Object.keys(json).map(function(key) {
          return encodeURIComponent(key) + '=' +
              encodeURIComponent(json[key]);
      }).join('&');
    } else {
      return ''
    }
    
  }
 
  
}
