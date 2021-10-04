// var obj = {};
// var obj1 = new Object;

// console.log(obj)
// console.log(obj1)

var book = {
  name: 'functional javascript',
  author: 'jwolt junaid',
  publisher: 'mr\' Ersome',
  page: 250,

  print: function() {
    console.log(this.name, this.author);
  }

}

// console.log(book)


book.publishYear = 2010

// console.log('Publish Year: ' +  book.publishYear)

book['price'] = 30;

// console.log('Price: ' +  book.price)

for (var props in book) {
  // console.log(pops)
  console.log(props+ ' = ' + book[props])
}