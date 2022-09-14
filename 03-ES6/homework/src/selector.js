var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ

};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector.includes('#')) return 'id';
  if (selector[0] === '.') return 'class';
  if (selector.includes('.', [1])) return 'tag.class';
  if (!selector.includes('.') && !selector.includes('#')) return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = el => el.id === selector.substring(1);
  } else if (selectorType === "class") {
    matchFunction = el => el.classList.contains(selector.substring(1));
  } else if (selectorType === "tag.class") {    
    matchFunction = el => {
      let aux = selector.split('.');
      //if(el.tagName === aux[0] || el.classList.contains(aux[1])) return true;      
      return false;
    }
  } else if (selectorType === "tag") {
    matchFunction = el => el.tagName.toLowerCase() === selector;
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
