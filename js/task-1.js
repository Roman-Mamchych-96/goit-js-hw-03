function slugify(title) {

    const myArrayfirst = title.split(" ");
    const myArraysecond = myArrayfirst.join("-");
    const myArraysecondthird = myArraysecond.toLowerCase();
    return myArraysecondthird

}

console.log(slugify("Arrays for beginners")); 
console.log(slugify("English for developer")); 
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); 