import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { MongoRepository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";


@Injectable()
export class UserService {
  constructor(@InjectRepository(User)
              private readonly userRepository: MongoRepository<User>) {
  }

  create(userDto: CreateUserDto) {
    return this.userRepository.create(userDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id : string) {
    return await this.userRepository.findOneBy(id);
  }
  update(id:string,userDto:UpdateUserDto){
    return this.userRepository.update(id,userDto);
  }
  delete(id:string){
    return this.userRepository.delete(id)
  }
}
