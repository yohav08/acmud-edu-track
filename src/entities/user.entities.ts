import { IsEmail, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsOptional } from "class-validator";
import { rolTypes } from 'src/interfaces/rolTypes';

@Entity({name: 'users'})
export class UsererEntity {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('text')
    name: string;

    @IsEmail()
    @Column('text')
    email: string;

    @MinLength(6)
    pwd: string;

    @Column({
        type: 'enum',
        enum: rolTypes
    })
    @IsOptional()
    rol?: rolTypes;

    @Column({
        type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP'
})
createdAt: string;
}