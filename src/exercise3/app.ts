import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { lessonsData } from './lessons';
import { LessonsListComponent } from './lessons-list.component';
import { LessonService } from './lessons.service';
import { HttpModule } from '@angular/http';
import { LessonsModule } from './lessons.module';

@Component({
    selector: 'app',
    template: `
        <input class="add-lesson" placeholder="Add Lesson" 
               (keyup.enter)="lessonsService.createLesson(input.value)" #input>
        <lessons-list [lessons]="lessonsService.lessons" (delete)="lessonsService.deleteLesson($event)"></lessons-list>
    `
})
export class App {

    constructor(public lessonsService: LessonService){

    }

}

@NgModule({
    declarations: [App],
    imports: [BrowserModule, HttpModule, LessonsModule],
    bootstrap: [App],
    providers: []
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);