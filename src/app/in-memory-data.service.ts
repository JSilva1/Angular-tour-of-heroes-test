import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb(){
        const heroes = [
            {id: 10 ,name:"Flash"},
            {id: 4, name:"Doctor Strange"},
            {id: 2, name:"Aquaman"},
            {id: 8, name:"Thor"},
            {id: 9, name:"Iron Man"},
            {id: 11 ,name:"Seiya"},
            {id: 99 ,name:"Goku"},
            {id: 1, name:"Naruto"},
            {id: 3, name:"Hulk"},
            {id: 13 ,name:"Supergirl"},
            {id: 100 ,name:"Superman"}
        ];
        return {heroes};
    }
}