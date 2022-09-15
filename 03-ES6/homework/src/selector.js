var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);
  for (let i = 0; i < startEl.children.length; i++) {
    let child = startEl.children[i];
    let elementsFound = traverseDomAndCollectElements(matchFunc, child);
    resultSet = [...resultSet, ...elementsFound];    
  }
  return resultSet;
};

  // Detecta y devuelve el tipo de selector
  // devuelve uno de estos tipos: id, class, tag.class, tag


  var selectorTypeMatcher = function (selector) {
    // tu código aquí
    if (selector.includes('#')) return 'id';
    if (selector[0] === '.') return 'class';
    if (selector.includes('.')) return 'tag.class';
    return 'tag';
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
        let [t,c] = selector.split('.');
        //if (el.tagName === t || el.classList.contains(c)) return true; return false;  estoy haciendo lo mismo que abajo        
        return matchFunctionMaker(t)(el) && matchFunctionMaker("." + c)(el);
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
