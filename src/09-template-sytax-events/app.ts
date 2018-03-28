import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'app',
    template: `
        <span><input value="Hello World" #input>{{input.value}}</span>
        <button (click)="onClick()">Click</button>
    `
})
export class App {
    onClick() {
        alert('OK');
        // debugger;
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