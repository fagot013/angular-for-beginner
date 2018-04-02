import { NgModule } from '@angular/core';
import { LessonService } from './lessons.service';
import { LessonsListComponent } from './lessons-list.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule],
    exports: [LessonsListComponent],
    declarations: [LessonsListComponent],
    providers: [LessonService]

})
export class LessonsModule {

}