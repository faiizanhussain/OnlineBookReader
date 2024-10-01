import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne,  } from 'typeorm';
import { AppUser } from '../../users/entities/user.entity';
import { IsOptional } from 'class-validator';
// import { UserCollection } from '../../users/entities/userCollection.entity';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @ManyToOne(() => AppUser, user => user.books, { nullable: false })
  author: AppUser;

  @Column()
  @IsOptional()
  fileUrl: string;

  // @ManyToOne(() => UserCollection, (collection) => collection.books)
  // collection: UserCollection;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}