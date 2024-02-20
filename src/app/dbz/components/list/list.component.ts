import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  }];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();
  // public onDelete = new EventEmitter<number>();
  // onDelete = Index value:number

  onDeleteCharacter( index: number ):void {
    //TODO: Emiitr el ID del personaje
    console.log('ondelete desde list: ' + index);
    this.onDelete.emit(index);
  }

}
