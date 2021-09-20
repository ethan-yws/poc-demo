import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";
import { Employee } from "./Employee";

@Entity("employee")
export class EmployeeUpdated extends Employee {
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

  @CreateDateColumn()
  created_at: Date;
}
