import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'app',
    template: `
        <span><label>Message1:</label>{{'Hello World'}}</span>
        <span><label>Message2:</label>{{message}}</span>
        <span><label>Message3:</label>{{0 == 0}}</span>
        <span><label>Message4:</label>{{condition ? 'Truthy' : 'Falsy'}}</span>
        <span><label>Message5:</label>{{calculatedValue}}</span>
        <!--<span><label>Message6:</label>{{vm?.value || 'Default!'}}</span>-->
    `
})
export class App {
    message = 'Hello Interpolation World';
    condition = true;

    get calculatedValue() {
        return 'Calculated value';
    }
}

@NgModule({
    declarations: [App],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {


}

platformBrowserDynamic().bootstrapModule(AppModule);