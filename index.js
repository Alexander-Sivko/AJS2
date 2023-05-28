"use strict"

// 1 //

// try{
//     var x=Num.MAX_VALUE;
//   }
//   catch(e){
//    alert('Виникла помилка: '+e);
//   }

// 2 //

// try {
//     user = { /*...*/ };
//   } catch (err) {
//     if (err instanceof ReferenceError) {
//       alert('ReferenceError'); // "ReferenceError" помилка доступу до невизначеної змінної
//     }
//   }

const books = [
    { 
      author: "Люсі Фолі",
      name: "Список запрошених",
      price: 70 
    }, 
    {
     author: "Сюзанна Кларк",
     name: "Джонатан Стрейндж і м-р Норрелл",
    }, 
    { 
      name: "Дизайн. Книга для недизайнерів.",
      price: 70
    }, 
    { 
      author: "Алан Мур",
      name: "Неономікон",
      price: 70
    }, 
    {
     author: "Террі Пратчетт",
     name: "Рухомі картинки",
     price: 40
    },
    {
     author: "Анґус Гайленд",
     name: "Коти в мистецтві",
    }
  ];

  class Root {
    constructor (booksData) {
        this.books = booksData;
        this.rootContainer = document.createElement('div');
        this.ulContainer = document.createElement('ul');
    };
 
    createElements () {
        this.rootContainer.id = "root";
        this.ulContainer.className = "root__content";

        this.rootContainer.append(this.ulContainer);
        this.renderBooks(); 
    };

    renderBooks() {
        this.books.forEach(item => {
            const {author, name, price} = item;
            if (author && name && price){
                const li = document.createElement('li');
                li.textContent = `${author}, ${name}, ${price}`;
                this.ulContainer.append(li);
            } else{
                console.log(item);
            } 
        });
    }

    render(selector = 'body') {
        this.createElements();
        document.querySelector(selector).append(this.rootContainer);
    };

};

const root = new Root(books);

root.render();