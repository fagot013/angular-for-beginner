import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Component, NgModule} from "@angular/core";
import { Heroes } from './heroes';



@Component({
    selector:'app',
    template:`
        <heroes></heroes>
    `
})
export class App{

}

@NgModule({
    declarations: [App, Heroes],
    imports: [BrowserModule],
    bootstrap:[App]
})
export class AppModule{

}

platformBrowserDynamic().bootstrapModule(AppModule);