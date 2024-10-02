import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { AppUser } from './user.entity';

@Entity('user_state')
export class UserState {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => AppUser, user => user.userState)
  @JoinColumn({ name: 'app_user_id' })
  appUser: AppUser;

  @Column({ name: 'font_size', default: 12 })
  fontSize: number;

  @Column({ name: 'font_family', default: 'Arial' })
  fontFamily: string;

  @Column({ name: 'no_of_characters_per_line', default: 80 })
  noOfCharactersPerLine: number;

  @Column({ name: 'no_of_lines_per_page', default: 10 })
  noOfLinesPerPage: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
