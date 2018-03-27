import {Component, EventEmitter, Input, Output} from "@angular/core";
import {BLUE, RED} from "./constants";

declare const module:any;
@Component({
    selector: 'color-picker',
    moduleId: module.id,
    template: `
        <div class="color-title" [ngStyle]="{'color':color}">Prick a Color:</div>
        
        <div class="color-picker">
            <div class="color-sample color-sample-blue" (click)="choose('${BLUE}')"></div>
            <div class="color-sample color-sample-red"  (click)="choose('${RED}')"></div>
        </div>
    `,
    styleUrls:['color-picker.css']
})
export class ColorPicker {

    @Input()
    color:String;

    @Output("color")
    colorOutput = new EventEmitter();


    choose(color:string) {
        this.color = color;
        this.colorOutput.emit(color);
    }

    reset() {
        this.color = 'black';
        this.colorOutput.emit(this.color);
    }


}