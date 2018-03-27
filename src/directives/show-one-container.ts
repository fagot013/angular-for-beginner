import { ContentChildren, Directive, QueryList } from '@angular/core';
import { ShowOneTrigger } from './show-one-trigger';
import { ShowOne } from './show-one';


@Directive({
    selector: '[showOneContainer]'
})
export class ShowOneContainer {
    triggers: ShowOneTrigger[] = [];

    @ContentChildren(ShowOne)
    items: QueryList<ShowOne>;

    add(trigger: ShowOneTrigger) {
        this.triggers.push(trigger);
    }

    show(id: string) {
         this.items.forEach(item => item.active = item.id == id);
         this.triggers.forEach( (trigger:ShowOneTrigger) => trigger.active = trigger.id == id);
    }
}