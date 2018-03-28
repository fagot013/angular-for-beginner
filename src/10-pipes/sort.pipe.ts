import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        let sorted = value.sort();
        if(args.length > 0 && args[0] === 'DESC') {
            sorted = sorted.reverse();
        }
        return sorted;
    }

}