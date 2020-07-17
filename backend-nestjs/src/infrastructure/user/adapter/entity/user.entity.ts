import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false})
  firstname: string;

  @Column({ type: 'varchar', nullable: false})
  lastname: string;

  @Column({ type: 'varchar', nullable: false})
  email: string;

  @Column({ type: 'varchar', nullable: false})
  country: string;

}