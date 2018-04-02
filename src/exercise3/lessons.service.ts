import { lessonsData } from './lessons';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { errorHandler } from '@angular/platform-browser/src/browser';


@Injectable()
export class LessonService {
    lessons = [];
    private headers = new Headers();


    constructor(private http: Http) {
        this.loadLessons();
        this.headers.append('Content-Type', 'application/json; charset=utf-8');
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
        this.http.post('/lessons', JSON.stringify(lesson), this.headers)
            .subscribe(
                ()=>{},
                err => console.log(err)
            );
    }

    deleteLesson(id:number){
        const index = this.lessons.map(lesson=> lesson.id).indexOf(id);
        if(index > -1) {
            this.lessons.splice(index, 1);
            this.http.delete('/lessons', {params: {id: id}}).subscribe(
                value => {},
                err=> console.error("Error:" + err)
            );
        }
    }

}