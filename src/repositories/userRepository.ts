import { PrismaClient, Role } from "@prisma/client";

export class UserRepository {
    prisma = new PrismaClient()

    public async getById(idUser: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: idUser // Condição de busca pelo ID do usuário
            }
        });
        return user; // Retorna o usuário encontrado ou null
    }

    public async getByEmail(emailUser: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: emailUser // Condição de busca pelo email do usuário
            }
        });
        return user; // Retorna o usuário encontrado ou null
    }

    public async getByCpf(cpfUser: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                cpf: cpfUser // Condição de busca pelo cpf do usuário
            }
        });
        return user; // Retorna o usuário encontrado ou null
    }

    public async getByPhone(phoneUser: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                phone: phoneUser // Condição de busca pelo phone do usuário
            }
        });
        return user; // Retorna o usuário encontrado ou null
    }

    public async create(createUserParams: 
        { 
            name: string, 
            cpf: string, 
            email: string, 
            password: string, 
            phone: string, 
            role: Role 
        }
    ) {
        const user = await this.prisma.user.create({
            data: createUserParams // Dados do usuário a ser criado
        });
        return user; // Retorna o usuário criado
    }

    public async getAll(){
        const users = await this.prisma.user.findMany()

        return users
    }

    public async update(idUser:string, updateUserParams:
        {
            name?:string,
            email?:string,
            cpf?:string,
            password?:string,
            phone?:string,
            role?:Role
        }
    ){
        const userUpdated = await this.prisma.user.update({
            where:{
                id:idUser
            },
            data:updateUserParams
        })

        return userUpdated
    }
    
    public async delete(userId:string){
        const userDeleted = await this.prisma.user.delete({
            where:{
                id:userId
            }
        })
        return userDeleted
    }
}