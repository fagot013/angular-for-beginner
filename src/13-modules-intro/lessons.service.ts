import { lessonsData } from './lessons';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LessonService {
    lessons = [];

    constructor(private http: Http) {
        this.loadLessons();
    }

    loadLessons() {
        // this.lessons = lessonsData;
        this.http.get("/lessons")
            .map(res => res.json())
            .subscribe(
                lessonsData => this.lessons = lessonsData,
                err => console.error('Error occured:', err)
            );
    }

    createLesson(description:string) {
        const lesson = {description};
        this.lessons.push(lesson);

        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        this.http.post('/lessons', JSON.stringify(lesson), headers)
            .subscribe(
                ()=>{},
                err => console.log(err)
            );
    }

}