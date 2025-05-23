import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { CommonModule } from '@angular/common';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent, TemplateBindingComponent, TemplateVariablesComponent],
  template: ` 
  
  <h1>Curso de Angular</h1>
  <app-template-variables />
`,
})
export class AppComponent {}


// <router-outlet />
// <app-new-component /> 
// <app-template-binding />