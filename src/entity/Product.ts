import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./Category";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 255})
    name: string;

    @Column({type: "varchar", length: 255})
    des: string;

    @Column({type: "int"})
    price: number;

    @ManyToOne(() => Category, (category) => category.id)
    category: Category
}
