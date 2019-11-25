import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AnimalsEffects } from './animals/animals.effects';
import { reducers } from '.';
import { AnimalsFacade } from './animals/animals.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AnimalsEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [AnimalsFacade]
})
export class CoreStateModule {}
