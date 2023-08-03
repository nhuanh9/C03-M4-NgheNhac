import { User } from "../entity/user";
import { AppDataSource } from "../data-source";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET } from "../middleware/jwt";

class UserService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    register = async (user: User) => {
        let userObj = this.userRepository.findOne({
            where: {
                username: user.username
            }
        })
        if (user.username === userObj.username) {
            return "Account already exists"
        } else {
            return this.userRepository.save(user);
        }
    }

    checkUser = (user) => {
        const query = 'SELECT * FROM user WHERE username = ? AND password = ?';
        return this.userRepository.query(query, [user.username, user.password]);
    };

    findAll = async () => {
        return this.userRepository.find()
    }
    findById = async (id) => {
        return this.userRepository.find({
            where: {
                id: id
            }
        })
    }
}

export default new UserService();
