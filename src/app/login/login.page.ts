import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  loadingToShow: any;

  items: any;
  result: JSON;
  // tslint:disable-next-line: ban-types
  allData: any = [];
  // tslint:disable-next-line: variable-name
  obj_json: any;

  // tslint:disable-next-line: variable-name
  id_code: string;
  sur: string;
  fname: string;
  lname: string;
  login: string;
  dep: string;
  picpath: string;
  email: string;
  constructor(
    public http: HttpClient,
    public loadingController: LoadingController,
    public router: Router) { }

  ngOnInit() {
  }

  // tslint:disable-next-line: one-line
  async getUrl() {
    // tslint:disable-next-line: max-line-length
    await this.http.get('http://it.e-tech.ac.th/ripx/api/getData.php?username=' + this.username + '&password=' + this.password + '&fbclid=IwAR3aMPkZe7V3bBimp0jGw-OBZVp_ynXm5UAfUO1m3p32rYdyLUO6wOMgvRU')
      .subscribe(
        data => {
          const obj = (data as any);
          // tslint:disable-next-line: variable-name
          this.items = JSON.stringify(obj);
          this.allData = JSON.parse(this.items);
          // tslint:disable-next-line: no-string-literal
// tslint:disable-next-line: triple-equals
          if (this.allData.userDetail[0].login == true) {
            this.login = this.allData.userDetail[0].login;
            this.id_code = this.allData.userDetail[0].id_code[0];
            this.sur = this.allData.userDetail[0].surname[0];
            this.fname = this.allData.userDetail[0].fname[0];
            this.lname = this.allData.userDetail[0].lname[0];
            this.dep = this.allData.userDetail[0].status[0];
            this.picpath = this.allData.userDetail[0].picts[0];
            this.email = this.allData.userDetail[0].email[0];
            this.showAutoHideLoader();
            this.router.navigate(['/tabs/home/']);
          }
          // tslint:disable-next-line: comment-format
          //console.log(this.allData.userDetail[0].id_code[0]);
        }, error => {
          console.log(error);
        }
      );
  }

  showAutoHideLoader() {
    this.loadingController.create({
      message: 'รอสักครู่....',
      duration: 500
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed! after 2 Seconds');
      });
    });
  }

}
