import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CollapseOnClick } from './collapse-on-click.directive';

@Component({
    selector: 'app',
    template:`
        <div collapse-on-click class="collapsed card card-strong disabled-text-selection">
            <i class="md-icon collapsible-indicator">arrow_drop_down</i>
            <div class="collapsible-section">
                This page section is collapsible, double click it and it will collapse or expand.
            </div>
        </div>
    `
})
export class App{

}

@NgModule({
    declarations: [App, CollapseOnClick],
    imports: [BrowserModule],
    bootstrap:[App]
})
export class AppModule{

}

platformBrowserDynamic().bootstrapModule(AppModule);