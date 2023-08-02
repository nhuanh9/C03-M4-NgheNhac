import {User} from "../entity/user";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {SECRET} from "../middleware/jwt";

class UserService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    findUser = async (username) => {
        let userObj =  this.userRepository.findOneBy({
            where:{
                username: username
            }
        })
        if(!userObj){
            return "Fail"
        } else {
            return userObj.username
        }
    }

    register = async (user) => {
        if(user.username === this.findUser(user.username)){
            return "Account already exists"
        } else {
            user.password = await bcrypt.hash(user.password, 10);
            return this.userRepository.save(user);
        }
    }


    checkUser = async (user) => {
        let userFind = await this.userRepository.findOneBy({username: user.username});
        if (!userFind) {
            return 'User is not exist'
        } else {
            let passWordCompare = bcrypt.compare(user.password, userFind.password);
            if (passWordCompare) {
                let payload = {
                    idUser: userFind.id,
                    username: userFind.username,
                    role: userFind.role
                }
                return jwt.sign(payload, SECRET, {
                    expiresIn: 36000 * 10 * 100
                })
            } else {
                return 'Password is wrong'
            }
        }
    }

}

export default new UserService();
