import { Action } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';

// Load pizzas ---> [Products] is just a namespace and doesn't have to be named in this way
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

// Action Creators
export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

// action types ---> tie into reducers
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
