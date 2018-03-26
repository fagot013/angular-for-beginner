import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Component, NgModule} from "@angular/core";
import { Heroes } from './heroes';
import { Hero } from './Hero';



@Component({
    selector:'app',
    template:`
        <heroes>
            <hero id="1" name="Superman"></hero>
            <hero id="2" name="Batman"></hero>
            <hero id="3" name="Batgrils"></hero>
            <hero id="4" name="Flash"></hero>
            <hero id="5" name="Green Lantern"></hero>
        </heroes>
    `
})
export class App{

}

@NgModule({
    declarations: [App, Heroes, Hero],
    imports: [BrowserModule],
    bootstrap:[App]
})
export class AppModule{

}

platformBrowserDynamic().bootstrapModule(AppModule);