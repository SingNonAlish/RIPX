import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(public http: HttpClient) { }

  getUser(userx: string, passx: string) {
    // tslint:disable-next-line: max-line-length
    return this.http.get('http://it.e-tech.ac.th/ripx/api/getData.php?username=' + userx + '&password=' + passx + '&fbclid=IwAR3aMPkZe7V3bBimp0jGw-OBZVp_ynXm5UAfUO1m3p32rYdyLUO6wOMgvRU').subscribe(data => {
      JSON.stringify(data);
      // console.log(JSON.stringify(data));
    });
  }
}
