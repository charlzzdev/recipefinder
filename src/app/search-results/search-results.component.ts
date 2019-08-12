import { Component } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent {
  recipes = [];

  async fetchRecipe(id: number) {
    const res = await fetch(`https://www.food2fork.com/api/get?key=c481f3a84bf7098d43a3bc7699a7567c&rId=${id}`);
    const recipe = await res.json();

    this.recipes.forEach(item => {
      if (item.recipe_id === recipe.recipe.recipe_id) {
        item.ingredients = recipe.recipe.ingredients;
      }
    });
  }

  async searchByKeywords(event, query: string, page: number = 1) {
    event.preventDefault();
    const res = await fetch(`https://www.food2fork.com/api/search?key=c481f3a84bf7098d43a3bc7699a7567c&q=${query}&page=${page}`);
    const results = await res.json();

    this.recipes = results.recipes;
  }

  enterSearch(event, query: string, page: number = 1) {
    event.preventDefault();
  }
}
