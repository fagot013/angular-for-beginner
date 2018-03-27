import {Component, Input} from "@angular/core";


@Component({
    selector:'color-preview',
    styles:[
        '.color-previewer{ margin-top: 50px; margin-bottom: 50px; font-weight: bold; font-size: 21px; text-transform: uppercase}'
    ],
    template:`
        <div class="color-previewer" [ngStyle]="{'color':color}">
            Preview Text Color
        </div>
    `,

})
export class ColorPreviewer {

    @Input()
    color:String;
}