import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulas.component.html',
  styleUrl: './formulas.component.css'
})
export class FormulasComponent {

  numero: string ='';
  capicuaBool: boolean = false;

  checkCapicua(){
    const reversed = this.numero.split('').reverse().join('');
    this.capicuaBool = this.numero === reversed;
  }


}
