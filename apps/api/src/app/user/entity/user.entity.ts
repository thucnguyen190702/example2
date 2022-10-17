import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

export class Photo {
  @Column()
  url: string;

  @Column()
  description: string;

  @Column()
  size: number;

  constructor(url: string, description: string, size: number) {
    this.url = url
    this.description = description
    this.size = size
  }
}
export class Profile{
  @Column()
  about:string

  @Column()
  education:string

  @Column()
  career:string
}
@Entity()
export class User{
  @ObjectIdColumn()
  id:ObjectID

  @Column()
  firstname:string

  @Column()
  lastname:string

  @Column((type)=>Profile)
  profile:Profile

  @Column((type)=>Photo)
  photo:Photo
}
