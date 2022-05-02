const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(cat) {
    cats.push(cat);
}

function destructivelyPrependCat(cat) {
    cats.unshift(cat);
}

function destructivelyRemoveLastCat(cat) {
    cats.pop(cat);
}

function destructivelyRemoveFirstCat(cat) {
    cats.shift(cat)
}

function appendCat(name) {
const allCats = [...cats, name]    
    return allCats;
}

function prependCat(name) {
    const allCats = [name, ...cats]
    return allCats;
}

function removeLastCat() {
    const allCats = cats.slice(0, cats.length - 1)
    return allCats;
}

function removeFirstCat() {
    const allCats = cats.slice(1);
    return allCats;
}
    
