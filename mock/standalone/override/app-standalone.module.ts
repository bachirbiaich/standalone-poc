import {NgModule} from "@angular/core";
import { AppModule } from "src/app/app.module";
import { MockServicesModule } from "mock/standalone/services/mock-services.module";
import { AppComponent } from "src/app/app.component";

@NgModule({
  imports: [AppModule, MockServicesModule],
  bootstrap: [AppComponent]
})
export class AppStandaloneModule { }
