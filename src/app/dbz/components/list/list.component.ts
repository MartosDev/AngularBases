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
  public onDelete: EventEmitter<string> = new EventEmitter();
  // public onDelete = new EventEmitter<number>();1
  // onDelete = Index value:number

  onDeleteCharacter( id?: string ):void {
    //TODO: Emitir el ID del personaje
    if( !id ) return;

    this.onDelete.emit(id);
  }

}
