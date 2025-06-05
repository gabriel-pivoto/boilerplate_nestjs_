import { Injectable } from '@nestjs/common';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';

@Injectable()
export class FruitsService {
  create(createFruitDto: CreateFruitDto) {
    console.log(createFruitDto);
    return 'This action adds a new fruit';
  }

  findAll() {
    return `This action returns all fruits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fruit`;
  }

  update(id: number, updateFruitDto: UpdateFruitDto) {
    console.log(updateFruitDto);
    return `This action updates a #${id} fruit`;
  }

  remove(id: number) {
    return `This action removes a #${id} fruit`;
  }
}
