import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { MembersComponent } from './members/members.component';
import { PaymentsComponent } from './payments/payments.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';
import { AdministrationComponent } from './administration/administration.component';

const routes: Routes = [
  { path : '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'home', component: OverviewComponent },
  { path : 'members', component: MembersComponent },
  { path : 'payments', component: PaymentsComponent },
  { path : 'attendance', component: AttendanceComponent },
  { path : 'statistics', component: StatisticsComponent },
  { path : 'settings', component: SettingsComponent },
  { path : 'administration', component: AdministrationComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
