import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ShowOneTrigger } from './show-one-trigger';
import { ShowOneContainer } from './show-one-container';
import { ShowOne } from './show-one';

@Component({
    selector: 'app',
    template: `
        <div class="tab-container" showOneContainer> 
            <ul class="tab-buttons">
                <li showOneTrigger="superman" [active]="true">Superman</li>
                <li showOneTrigger="batman">Batman</li>
                <li showOneTrigger="flash">Flash</li>
            </ul>           
            
            <div class="tab-panel" showOne="superman" [active]="true">
                <div class="logo superman"></div>
            </div>
            <div class="tab-panel" showOne="batman">
                <div class="logo batman"></div> 
            </div>
            <div class="tab-panel" showOne="flash">
                <div class="logo flash"></div>
            </div>
        </div>
    `
})
export class App {

}

@NgModule({
        declarations: [App, ShowOneTrigger, ShowOneContainer, ShowOne ],
        imports: [BrowserModule],
        bootstrap: [App]
    }
)
export class AppModule {

}
platformBrowserDynamic().bootstrapModule(AppModule);
