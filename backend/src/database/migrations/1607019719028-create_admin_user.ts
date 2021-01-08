import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import User from "../../models/User";

export class CreateAdminUser1547919837483 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let user = new User();
    user.email = "admin";
    user.password = "admin";
    user.hashPassword();
    console.log(user);
    console.log('TESTESTE \n\n\n\n\n');
    const userRepository = getRepository(User);
    await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}