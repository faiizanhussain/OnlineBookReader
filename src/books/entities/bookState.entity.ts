import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { AppUser } from '../../users/entities/user.entity';
import { Book } from './book.entity';

@Entity('book_state')
export class BookState {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => AppUser, user => user.bookStates)
  @JoinColumn({ name: 'app_user_id' })
  user: AppUser;

  @ManyToOne(() => Book, book => bookStates => bookStates)
  @JoinColumn({ name: 'book_id'})
  book: Book;

  @Column({ name: 'reading_status' })
  readingStatus: boolean;

  @Column({ name: 'last_read_character', nullable: true })
  lastReadCharacter: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}