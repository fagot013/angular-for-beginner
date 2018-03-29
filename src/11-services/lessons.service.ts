import { lessonsData } from './lessons';
import { Injectable } from '@angular/core';


@Injectable()
export class LessonService {
    lessons = [];

    constructor() {
        this.loadLessons();
    }

    loadLessons() {
        this.lessons = lessonsData;
    }

}