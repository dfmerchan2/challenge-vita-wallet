import {DataGenerator} from "../../utils/data-generator";

export class Tag {
    tag = {
        id: null,
        name: ''
    };

    withId(id) {
        this.tag.id = id;
        return this;
    }

    withName(name) {
        this.tag.name = name;
        return this;
    }

    build() {
        return this.tag;
    }

    static getRequest() {
        return new Tag()
            .withId(DataGenerator.randomId(1))
            .withName(DataGenerator.randomFirstName());
    }
}
