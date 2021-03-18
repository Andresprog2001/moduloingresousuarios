import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  postRequest(route: string, data?:any) {

    let config:any = {
      responseType: "json"
    }

    return this.http.post(route, data, config);
  }

  putRequest(route: string, data?:any){
    let config: any = {
      responseType: "json"
    }
    return this.http.put(route, data, config);
  }

  getRequest(route: string){
    let config: any = {
      responseType: "json"
    }
    const header = new HttpHeaders().set('Authorization', '57ydf544ljka559ahjkfgd1');
    config["header"] = header;
    return this.http.get(route, config);  
  }
}
