import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Song extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  artist: string;

  @Column()
  title: string;
}
