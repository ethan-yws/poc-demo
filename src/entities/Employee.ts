import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm";

@Entity("employee")
export class Employee extends BaseEntity {
  @PrimaryColumn()
  serialNum: string;

  @Column()
  companyName: string;

  @Column()
  employeeMarkme: string;

  @Column()
  description: string;

  @Column()
  leave: string;
}
