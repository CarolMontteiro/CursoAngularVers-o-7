import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Dener Troquatte';
  public age = 30;
  public isDisable = true;
  public srcValue = 
  'https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/privadas-antigas/foto-oficial/fotos/45774283825_8673b82f64_m.jpg/@@images/image.jpeg';
  public isTextDecoration = this.age >= 32 ? 'underline' : 'none'

  public condition = this.age > 1 ? 'teste' : 'teste2'
}
