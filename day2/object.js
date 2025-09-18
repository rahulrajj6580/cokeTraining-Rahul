const book = {
    name: "Js the ultimate guide",
}

Object.defineProperty(book,"edition",{
    value: 2,
    writable: false,
    enumerable: true,
    configurable: true
})


 book.edition = 3;
console.log(book);