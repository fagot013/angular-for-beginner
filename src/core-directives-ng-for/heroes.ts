import { Component, ContentChildren, QueryList } from '@angular/core';
import { Hero } from './Hero';

const HEROES = [
    {id:1, name:'Superman'},
    {id:2, name:'Batman'},
    {id:5, name:'BatGirl'},
    {id:3, name:'Robin'},
    {id:4, name:'Flash'}
];

@Component({
    selector:'heroes',
    template:`
        <table>
            <thead>
                <th>Name1</th>
                <th>Index</th>
                <!--<th>Even</th>-->
                <!--<th>Odd</th>-->
                <!--<th>First</th>-->
                <!--<th>Last</th>-->
            </thead>
            <tbody>
                <tr *ngFor='let hero of heroes; trackBy: track(hero)
                ;let i = index; let isOdd = odd; let isEven = even; let isFirst = first; let isLast = last'>
                    <td>{{hero.name}}</td>
                    <td>{{i}}</td>
                    <!--<td>{{isEven}}</td>-->
                    <!--<td>{{isOdd}}</td>-->
                    <!--<td>{{isFirst}}</td>-->
                    <!--<td>{{isLast}}</td>-->
                </tr>                
            </tbody>
        </table>
    `
})
export class Heroes {
    // heroes: HEROES;

    @ContentChildren(Hero)
    heroes: QueryList<Hero>;

    track(hero) {
        return hero ? hero.id: undefined;
    }
}