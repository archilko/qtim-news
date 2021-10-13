import {
  CreateDateColumn,
  Generated,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index(['id'], { unique: true })
abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  @Generated('increment')
  id: number;

  @CreateDateColumn({
    type: 'timestamp with time zone',
    name: 'created_at',
  })
  public readonly createdAt!: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    name: 'updated_at',
  })
  public readonly updatedAt!: Date;
}

export { BaseEntity };
