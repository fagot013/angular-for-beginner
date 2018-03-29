import { lessonsData } from './lessons';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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
                lessonsData => this.lessons = lessonsData
            );
    }

}