import { IRepository } from "./IRepository";
import { IMedia } from "./IMedia";
import { User } from "../user";
export class MediaRepository implements IRepository{
    user:User;
    collection: IMedia[];
    constructor(user: User){
        this.user = user;
        this.collection = [];
    }
    
    /**
      * Get user media collection.
      */
     getCollection(): IMedia[]{
        return this.collection;
    }

    /**
      * Save user collection to database.
      * @param items The selected items to be saved.
      */
    save(items: never){
        this.collection.push(items);
    }
     
}