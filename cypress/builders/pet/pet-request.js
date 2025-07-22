import { Tag } from './tag';
import { Category } from './category';
import { DataGenerator } from '../../utils/data-generator';

export class PetRequest {
  pet = {
    id: null,
    name: '',
    category: { id: null, name: '' },
    photoUrls: [],
    tags: [],
    status: '',
  };

  withId(id) {
    this.pet.id = id;
    return this;
  }

  withName(name) {
    this.pet.name = name;
    return this;
  }

  withCategory(category) {
    this.pet.category = category;
    return this;
  }

  withPhotoUrls(urls) {
    this.pet.photoUrls = urls;
    return this;
  }

  withTags(tags) {
    this.pet.tags = tags;
    return this;
  }

  withStatus(status) {
    this.pet.status = status;
    return this;
  }

  build() {
    return this.pet;
  }

  static getRequest() {
    return new PetRequest()
      .withId(DataGenerator.randomId())
      .withName(DataGenerator.randomFirstName())
      .withCategory(Category.getRequest().build())
      .withPhotoUrls(['https://image.com/firulais.jpg'])
      .withTags([Tag.getRequest().build()])
      .withStatus('success');
  }

  static getRequestWithoutId() {
    return new PetRequest()
      .withName(DataGenerator.randomFirstName())
      .withCategory(Category.getRequest().build())
      .withPhotoUrls(['https://image.com/firulais.jpg'])
      .withTags([Tag.getRequest().build()])
      .withStatus('success');
  }

  static getRequestInvalid() {
    return new PetRequest()
      .withId('invalid_id')
      .withName(DataGenerator.randomFirstName())
      .withCategory(Category.getRequest().build())
      .withPhotoUrls(['https://image.com/firulais.jpg'])
      .withTags([Tag.getRequest().build()])
      .withStatus('success');
  }
}
