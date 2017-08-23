import {Action} from "@ngrx/store";
import {Ingredient} from "../../shared/ingredient.model";
/**
 * Created by IrianLaptop on 8/23/2017.
 */
export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action{
  readonly type: string = ADD_INGREDIENT;
  constructor(public payload: Ingredient){}
}


export type ShoppingListActions = AddIngredient;
