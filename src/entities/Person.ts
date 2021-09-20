import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm";

@Entity("person")
export class Person extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: string;

  @Column()
  birthday: string;

  @Column()
  dollar: string;
}
