import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Category } from './category.entity';

@Entity('products')
export class Product {
  @ApiProperty({readOnly: true})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;
  
  @ApiProperty()
  @Column({ nullable: true })
  description: string;

  @ApiProperty({
    type: Number,
    format: 'float',
    description: 'Price of the product'
  })
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

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

  @ApiProperty({
    type: String,
    description: 'The ID of the category this product belongs to'
  })
  @Column()
  category_id: string;

  @ManyToOne(() => Category, category => category.products)
  category: Category;
}