import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  static categories = [
    {
      id: 1,
      name: 'Technology',
    },
    {
      id: 2,
      name: 'Business',
    },
    {
      id: 3,
      name: 'Finance',
    },
  ];

  findAll() {
    return CategoriesService.categories;
  }

  findOne(id: number) {
    return CategoriesService.categories.find((category) => category.id === id);
  }

  create(categoryDto: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const newCategory = {
      id: CategoriesService.categories.length + 1,
      ...categoryDto,
    };
    CategoriesService.categories.push(newCategory);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return newCategory;
  }
}
