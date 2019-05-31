import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  idstu: string;
  sur: string;
  fname: string;
  lname: string;
  // tslint:disable-next-line: variable-name
  id_class: string;

  loadingToShow: any;

  items: any;
  result: JSON;
  // tslint:disable-next-line: ban-types
  allData: any = [];
  // tslint:disable-next-line: variable-name
  obj_json: any;
  constructor(
    public http: HttpClient,
    public loadingController: LoadingController,
    public router: Router) { }

  ngOnInit() {
  }

  async getStu() {
    // tslint:disable-next-line: max-line-length
    await this.http.get('http://it.e-tech.ac.th/ripx/api/getStu.php?idstu=' + this.idstu + '&fbclid=IwAR3aMPkZe7V3bBimp0jGw-OBZVp_ynXm5UAfUO1m3p32rYdyLUO6wOMgvRU')
      .subscribe(
        data => {
          const obj = (data as any);
          // tslint:disable-next-line: variable-name
          this.items = JSON.stringify(obj);
          this.allData = JSON.parse(this.items);
          console.log(this.allData);
          if (this.items.length !== 2) {
            // console.log('true');
            this.sur = this.allData.GetStudByIdResult.student.surname;
            this.fname = this.allData.GetStudByIdResult.student.firstname;
            this.lname = this.allData.GetStudByIdResult.student.lastname;
            //   this.showAutoHideLoader();
          } else {
            this.sur = '';
            this.fname = '';
            this.lname = '';
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
