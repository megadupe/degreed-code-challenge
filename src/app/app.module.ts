import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MoviesServiceService } from './movies-service.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [MoviesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
