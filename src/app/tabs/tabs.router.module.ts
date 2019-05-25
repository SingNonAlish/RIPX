import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TabsPage } from './tabs.page';
const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'add', loadChildren: '../add/add.module#AddPageModule' },
      { path: 'report', loadChildren: '../report/report.module#ReportPageModule' },
    ]
  }
];

@NgModule({
  imports: [
    //   RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
// tslint:disable-next-line: eofline
export class TabsRoutingModule { }