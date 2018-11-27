import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookcategoryComponent } from './bookcategory/bookcategory.component';
import { HttpClientModule }    from '@angular/common/http';
import { BookcategoryService} from './Services/bookcategory.service';
import { UsuarioService } from './Services/usuario.service';
@NgModule({
  declarations: [
    AppComponent,
    BookcategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BookcategoryService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
