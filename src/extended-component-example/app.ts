import {Component, NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {ColorPicker} from "./color-picker/color-picker";
import {ColorPreviewer} from "./color-previewer/color-previewer";


@Component({
    selector:'app',
    template:` 
        <h3>Component Interaction</h3>
        <color-picker #picker (color)="previewer.color = $event"></color-picker>
        
        <color-preview #previewer></color-preview>
        
        <button (click)="picker.reset()">Reset</button>
    `
})
export class App {
    color:String;
}

@NgModule({
    declarations: [App, ColorPicker, ColorPreviewer],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);