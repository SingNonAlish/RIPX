import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  items: any;
  result: JSON;
  allDataRemark: any = [];
  constructor(public getdataSer: GetDataService, public http: HttpClient) { }

  ngOnInit() {
    this.getRemark();
  }

  async getRemark() {
    // this.getdataSer.getRemark(url);
    // console.log(this.getdataSer.allData[0].datarem.remname);
    await this.http.get('http://it.e-tech.ac.th/ripx/api/getRemark.php')
    .subscribe(
      data => {
        const obj = (data as any);
        // tslint:disable-next-line: variable-name
        this.items = JSON.stringify(obj);
        this.allDataRemark = JSON.parse(this.items);
        // console.log(this.allDataRemark);
        // console.log(this.allDataRemark[0].datarem.remname);
      });
  }
}
