import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { lessonsData } from './lessons';
import { LessonsListComponent } from './lessons-list.component';
import { LessonService } from './lessons.service';
import { HttpModule } from '@angular/http';

@Component({
    selector: 'app',
    template: `
        <lessons-list [lessons]="lessonsService.lessons"></lessons-list>
    `
})
export class App {

    constructor(private lessonsService: LessonService){

    }

}

@NgModule({
    declarations: [App, LessonsListComponent],
    imports: [BrowserModule, HttpModule],
    bootstrap: [App],
    providers: [LessonService]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);