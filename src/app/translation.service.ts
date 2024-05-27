import { Injectable } from '@angular/core';
import { typeTranslations, abilityTranslations } from './translations';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  translateType(type: string): string {
    return typeTranslations[type] || type;
  }

  translateAbility(ability: string): string {
    return abilityTranslations[ability] || ability;
  }
}
