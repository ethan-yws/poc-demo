import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";
import { Person } from "./Person";

@Entity("personUpdated")
export class PersonUpdated extends Person {
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

  @CreateDateColumn()
  created_at: Date;
}
