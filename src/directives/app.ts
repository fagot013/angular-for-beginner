import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'app',
    template: `
        <div class="tab-container">
            <ul class="tab-buttons">
                <li>Superman</li>
                <li>Batman</li>
                <li>Flash</li>
            </ul>           
            
            <div class="tab-panel">
                <div class="logo superman"></div>
            </div>
            <div class="tab-panel">
                <div class="logo batman"></div>
            </div>
            <div class="tab-panel">
                <div class="logo flash"></div>
            </div>
        </div>
    `
})
export class App {

}

@NgModule({
        declarations: [App],
        imports: [BrowserModule],
        bootstrap: [App]
    }
)
export class AppModule {

}
platformBrowserDynamic().bootstrapModule(AppModule);
