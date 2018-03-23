import {Component, Input} from "@angular/core";

declare const module:any;

@Component({
    selector:'color-sample',
    template:`
        <div class="color-sample" [ngStyle]="{'background':color}"></div>
    `,
    styleUrls:['color-sample.css'],
    moduleId: module.id
})
export class ColorSampleComponent {
    @Input()
    color:string

}