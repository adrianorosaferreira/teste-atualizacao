import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskSearchComponent } from './navbar/task-search/task-search.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';

import { TaskService } from './tasks/shared/task.service';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTaskDataService } from './in-memory-task-data.service';

// rxjs operators







// rxjs extensions
import 'rxjs/add/Observable/of';
import 'rxjs/add/Observable/throw';

// jquery plugins
import * as $ from 'jquery';
import * as datetimepicker from 'eonasdan-bootstrap-datetimepicker';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    TaskSearchComponent,
    TaskDetailComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryTaskDataService)
  ],
  providers: [
    TaskService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
