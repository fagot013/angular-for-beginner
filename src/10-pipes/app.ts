import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SortPipe } from './sort.pipe';

@Component({
    selector: 'app',
    template: `
        <div class="pipe-example">
            <span><label>Uppercase Pipe: {{ message | uppercase}}</label></span>
            <span><label>Lowercase Pipe: {{ message | lowercase}}</label></span>
            <span><label>Slice Pipe: {{ message | slice:0:5}}</label></span>
            <span><label>Date Pipe: {{ date | date:'yyy-MMM-dd'}}</label></span>
            <span><label>Number Pipe: {{ pi | number:'5.1-2'}}</label></span>
            <span><label>Percent Pipe: {{ percentage | percent:'2.1-2'}}</label></span>
            <span><label>Currency Pipe: {{ amount | currency: 'USD':true:'2.1-2'}}</label></span>
            <span><label>Custom Pipe: {{ data | sort: 'DESC'}}</label></span>
        </div>
    `
})
export class App {
    message = 'Hello World!';
    date = new Date();
    pi = 3.14159263359;
    percentage = 0.0234;
    amount = 12.1234;
    data = ['A', 'B', 'H', 'C']
}

@NgModule({
    declarations: [App, SortPipe],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);