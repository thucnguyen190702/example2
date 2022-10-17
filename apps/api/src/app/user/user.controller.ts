import { Controller, Get, Param, Post, Body, Patch, Delete, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entity/user.entity";


@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService) {}
  @Get()
  findAll():Promise<any>{
      return this.userService.findAll();
  }
  @Get(':id')
  fineOne(@Param() id:string){
    return this.userService.findOne(id);
  }
  @Post('/create')
  create(@Body() createUserDto:CreateUserDto){
      return this.userService.create(createUserDto);
  }
  @Put('update/:id')
  update(@Param() id,@Body()updateUserDto:UpdateUserDto){
      return this.userService.update(id,updateUserDto);
  }
  @Delete('delete/:id')
  delete(@Param() id:string){
      return this.userService.delete(id);
  }
}
