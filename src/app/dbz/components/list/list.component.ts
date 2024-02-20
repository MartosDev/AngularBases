import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // Se puede especificar otro nombre, sino usa default (characterList)
  // @Input( {alias: 'characterTest'})
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

}
