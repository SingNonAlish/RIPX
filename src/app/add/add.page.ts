import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  items: any;
  result: JSON;
  allData: any = [];
  // obj_json: any;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.getRemark();
  }

  async getRemark() {
    await this.http.get('http://it.e-tech.ac.th/ripx/api/getRemark.php')
    .subscribe(
      data => {
        const obj = (data as any);
        // tslint:disable-next-line: variable-name
        this.items = JSON.stringify(obj);
        this.allData = JSON.parse(this.items);
        console.log(this.allData);
      });
  }
}
