import {Component, Input} from "@angular/core";

@Component({
    selector:'search-box',
    template: `<input placeholder="{{text}}">
              <button class="btn-clear">Clear</button> `

})
export class SearchBox {

    @Input('placeholder')
    text = 'Type your search';

}