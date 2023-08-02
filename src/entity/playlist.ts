import { Entity,ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";

@Entity()
export class Playlist {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (userObj)=> userObj.id)
    user: User
}
