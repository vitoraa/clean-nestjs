import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Ship {
  @PrimaryGeneratedColumn('uuid')
  id: number

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}
