import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'app',
    template: `
        <div class="color-sample" [style.background]="'red'">Color Sample</div>
        <button [disabled]="true">Disabled</button>
        <input [required]="true"/>
    `
})
export class App {

}

@NgModule({
    declarations: [App],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);