import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
    name: "default",
    type: "mongodb",
    host: "localhost",
    url: "mongodb+srv://thucnguyen190702:thucnguyen190702@cluster0.ibzko8w.mongodb.net/FirstDB",
    database: "example2",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoLoadEntities: true,
    entities: [join(__dirname, '**/**.entity{.ts}')],
    synchronize:true,
  })],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
