let hello = 'helloWorld';

interface User {
    name: string;
    id: number;
}

const user1: User = {
    name: "Hi",
    id: 0
}

class UserAccount{
    name: string;
    id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }
}

const user2: User = new UserAccount("Murphy", 0);

function addNewUser(user: User){
    return user;
}

addNewUser(user1)

type MyBool = true | false;
type WIndowStates = "open" | "closed" | "minimized";
type POsitiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

const getLength = (obj: string | string[]) => {
    return obj.length;
}

getLength(["1","2","3"])


type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;