import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
//import {saveAs} from 'file-saver';
@Injectable()
export class TestService {

  constructor(private http: HttpClient) { }




  //getappsecdesignfile ( token, tool5filepath ) : Observable<any>{

  // console.log("In Service tool5filepath: ", tool5filepath);
  // console.log("In Service token", token);
  // console.log("In Service GET url: ", "");
  // const blob = new Blob(['hello'],{type:"text"});
  // saveAs(blob,'text.txt');

  // let encodedtool5filepath = encodeURIComponent(tool5filepath);
  // console.log('Encoded File Path: ', encodedtool5filepath);

  // let getfileparams = new HttpParams().set('filepath', encodedtool5filepath);
  // let getfileheaders = new HttpHeaders().set('Accept', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet').set('Authorization', token);

  // return this.http.get("", {responseType: 'blob', params: getfileparams, headers: getfileheaders});
  //}
}
