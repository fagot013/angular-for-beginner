import {Component, Input} from "@angular/core";

@Component({
    selector:'search-box',
    template: `<input placeholder="{{text}}" #input>
              <button class="btn-clear"(click)="clear(input)">Clear</button> `

})
export class SearchBox {

    @Input('placeholder')
    text = 'Type your search';

    clear(input:any) {
        console.log('Clear clicked ...');
        input.value = '';
    }

}