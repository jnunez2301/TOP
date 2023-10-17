## Following the MDN Docs

Whe should have a DB like

Book{
    title: String,
    author: Author[1] -> {
        first_name: String,
        family_name: String,
        date_of_birth: Date,
        date_of_death: Date,
        
        name: String,
        liefspan: String,
        url: String
    },
    summary: String,
    ISBN: String,
    genre: Genre[0...*] ->{
        name: String,
        url: String
    }
    url: String

    BookInstance: {
        book: Book,
        imprint: String,
        status: enum,
        due_back: Date,
        url: String
    }
}
