/**
 * Adds seed data to your db
 *
 * @link https://www.prisma.io/docs/guides/database/seed-database
 */

import { PrismaClient } from '@prisma/client';
import rolesEnum from '../enum/roles.enum';

const prisma = new PrismaClient();


const main = async () => {

    await rolesEnum.forEach(async (role) => {
        await prisma.role.upsert({
            where: {
                id : role.id
            },
            create: {
                id : role.id,
                name: role.name
            },
            update: {}
        })
    });
}

main().catch(e => {
    console.error(e);
    process.exit(1);    
}).finally( async () => {
    await prisma.$disconnect();
})
