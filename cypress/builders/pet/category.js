import {DataGenerator} from "../../utils/data-generator";

export class Category {
    category = {
        id: null,
        name: ''
    };

    withId(id) {
        this.category.id = id;
        return this;
    }

    withName(name) {
        this.category.name = name;
        return this;
    }

    build() {
        return this.category;
    }

    static getRequest() {
        return new Category()
            .withId(DataGenerator.randomId(1))
            .withName(DataGenerator.randomFirstName());
    }
}