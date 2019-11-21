import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AnimalsEffects } from './animals/animals.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot([AnimalsEffects]),
    StoreDevtoolsModule.instrument(),
  ]
})
export class CoreStateModule {}
