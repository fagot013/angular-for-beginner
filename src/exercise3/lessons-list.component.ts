import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
    selector: 'lessons-list',
    template: `
        <table class="lessons-list card card-strong">
            <tr *ngFor="let lesson of lessons">
                <td>
                    <img class="lesson-logo"
                         src="https://material.angularjs.org/latest/img/icons/angular-logo.svg">
                </td>
                <td>
                    {{lesson.description}} <button #delete (click)="onDelete(lesson)">Delete</button>
                </td>
            </tr>
        </table>
    `
})
export class LessonsListComponent {

    @Output()
    delete = new EventEmitter();

    @Input()
    lessons = [];

    onDelete(lesson){
        this.delete.emit(lesson.id);
    }

}