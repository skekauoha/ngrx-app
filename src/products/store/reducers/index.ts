import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
};

// 'products' comes from products.module in the forFeature('products', reducers)
export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
  );

// pizza state
// creates a selector starting from the 'products', then specifically the pizzaState
export const getPizzaState = createSelector(getProductsState, (state: ProductsState) => state.pizzas);

// creates a selector starting from the pizzaState, then specifically the pizza data
export const getPizzasEntities = createSelector(getPizzaState, fromPizzas.getPizzasEntities);

export const getAllPizzas = createSelector(
  getPizzasEntities,
  (entities) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
)
// creates a selector starting from the pizzaState, then specifically the pizza loaded state
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
// creates a selector starting from the pizzaState, then specifically the pizza loading state
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
