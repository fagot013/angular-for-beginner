import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CollapseOnClick } from './collapse-on-click.directive';

@Component({
    selector: 'app',
    template: `
        <div collapse-on-click [collapsed]='collapsed' (collapsed)='onToggle($event)' #cp='collapsible'
             class="card card-strong disabled-text-selection"
             [class.collapsed]='cp.collapsed'
        >
            <i class="md-icon collapsible-indicator">arrow_drop_down</i>
            <div class="collapsible-section">
                This page section is collapsible, double click it and it will collapse or expand.
            </div>
        </div>
    `
})
export class App {
    collapsed = false;

    onToggle(collapsed) {
        console.log(collapsed);
    }
}

@NgModule({
    declarations: [App, CollapseOnClick],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);