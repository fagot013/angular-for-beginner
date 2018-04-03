import { lessonsData } from './lessons';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 import { xhrHeaders } from './xhr-headers';


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
        this.http.post('/lessons', JSON.stringify(lesson), xhrHeaders())
            .subscribe(
                ()=>{},
                err => console.log(err)
            );
    }

    deleteLesson(id:number){
        // const index = this.lessons.map(lesson=> lesson.id).indexOf(id);
        const index = this.lessons.findIndex(lesson=> lesson.id === id);
        if(index > -1) {
            this.lessons.splice(index, 1);
            this.http.delete(`/lessons/${id}`, xhrHeaders()).subscribe(
                value => {},
                err=> console.error("Error:" + err)
            );
        }
    }

}