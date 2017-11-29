import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { MembersComponent } from './members/members.component';
import { PaymentsComponent } from './payments/payments.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';
import { AdministrationComponent } from './administration/administration.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    MembersComponent,
    PaymentsComponent,
    AttendanceComponent,
    StatisticsComponent,
    SettingsComponent,
    AdministrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
