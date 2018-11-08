// @codekit-prepend "../data/animals.js";
// @codekit-prepend "../data/plants.js";
// @codekit-prepend "../data/fruits.js";
// @codekit-prepend "../data/objects.js";
// @codekit-prepend "../data/elements.js";
// @codekit-prepend "../data/alignments.js";

var app = new Vue({
  el: '#app',
  data: {
    //test: {name: 'banana'},
    animals: dataAnimals,
    plants: dataPlants,
    fruits: dataFruits,
    objects: dataObjects,
    elements: dataElements,
    alignments: dataAlignments,
    ingredients: ['animals', 'animals', 'plants', 'elements'],
    combo: []
  },
  methods: {
    brainstorm: function() {
      this.combo = [];
      // clear the "combo" array
      for (i = 0; i < this.ingredients.length; i++) {
        this.combo.push(this.getIngredient(this.ingredients[i]));
        // fill the "combo" array with the elements listed in the "ingredients" list
      }
    },
    getIngredient: function(ingredients) {
      var index = Math.floor(Math.random() * this[ingredients].length);
      // generate a random "index" number
      var ingredient = this[ingredients][index];
      // pick the "ingredient" from the "ingredients" list corresponding to the random "index" number
      return ingredient;
    },
    replaceIngredient: function(index) {
      Vue.set(this.combo, index, this.getIngredient(this.ingredients[index]));
      // replace the "ingredient" in the "combo" array with another, similar "ingredient"
    }
  }
});

app.brainstorm();
