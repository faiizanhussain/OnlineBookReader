// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
// import { Book } from '../../books/entities/book.entity';
// import { AppUser } from './user.entity';

// @Entity('user_collection')
// export class UserCollection {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column({ name: 'collection_name', nullable: false })
//   collectionName: string;

//   @OneToOne(() => AppUser, user => user.collection)
//   @JoinColumn({ name: 'user_id' })
//   userId: AppUser;

//   @OneToMany(() => Book, book => book.collection)
//   @JoinColumn({ name: 'books' })
//   books: Book[];

//   @CreateDateColumn()
//   createdAt: Date;

//   @UpdateDateColumn()
//   updatedAt: Date;
// }