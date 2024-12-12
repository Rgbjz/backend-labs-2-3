import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from './product.entity';

@Entity('categories')
export class Category {
  @ApiProperty({ readOnly: true })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({ nullable: true })
  description: string;

  @ApiProperty()
  @Column()
  image: string;

  @ApiProperty({
    readOnly: true,
    type: String,
    format: 'date-time',
    description: 'Date and time the category was created'
  })
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty({
    readOnly: true,
    type: String,
    format: 'date-time',
    description: 'Date and time the category was last updated'
  })
  @CreateDateColumn()
  updated_at: Date;

  @OneToMany(() => Product, product => product.category)
  products: Product[];
}