import * as bcrypt from 'bcrypt'
import { Role } from 'src/users/user.schema'
import { UsersService } from 'src/users/users.service'
export async function seedAdmin(usersService:UsersService) {
    const adminEmail = 'admin@test.com';
    const exists = await usersService.findByEmail(adminEmail);
    if(exists){
        console.log('admin alredy existes');
        return;
    }
    const hashedPassword = await bcrypt.hash('123456',10);
    await usersService.create({
        email:adminEmail,
        password:hashedPassword,
        role:Role.ADMIN,
    })
    console.log('admin user created')
}