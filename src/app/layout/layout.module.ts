
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout.routing.module';
import { LandingComponent } from './componentes/landing/landing.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnoPipe } from './shared/pipes/alumno.pipe';
import { TitleDirective } from './shared/directivas/title.directive';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MaterialModule } from './shared/modulos/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { AboutUsComponent } from './componentes/about-us/about-us.component';
import { LaborExchangeComponent } from './componentes/labor-exchange/labor-exchange.component';
import { CoursesComponent } from './componentes/courses/courses.component';


@NgModule({
  declarations: [
    LandingComponent,
    FormularioComponent,
    NavbarComponent,
    AlumnoPipe,
    TitleDirective,
    DashboardComponent,
    AboutUsComponent,
    LaborExchangeComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
})
export class LayoutModule { }
