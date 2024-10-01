import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, OneToOne, ManyToMany } from 'typeorm';
import { Role } from './role.entity';
import { UserState } from './userState.entity';
import { BookState } from '../../books/entities/bookState.entity';
import { Book } from '../../books/entities/book.entity';
// import { UserCollection } from './userCollection.entity';

@Entity('app_user')
export class AppUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToOne(() => Role, role => role.users, { nullable: false })
  role: Role;

  @ManyToMany(() => Book, book => book.author)
  books: Book[];

  @OneToOne(() => UserState, userState => userState.appUser)
  userState: UserState;

  @OneToMany(() => BookState, bookState => bookState.user)
  bookStates: BookState[];

//   @OneToOne(() => UserCollection, userCollection => userCollection.userId)
//   collection: UserCollection;


  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
