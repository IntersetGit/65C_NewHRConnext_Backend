/**
 * Adds seed data to your db
 *
 * @link https://www.prisma.io/docs/guides/database/seed-database
 */

import { PrismaClient } from '@prisma/client';
import rolesEnum from '../enum/roles.enum';
import provinceEnum from '../enum/province.enum';
import districtEnum from '../enum/district.enum';
import amphoeEnum from '../enum/amphoe.enum';

const prisma = new PrismaClient();

const main = async () => {
  const role = await rolesEnum.forEach(async (role) => {
    await prisma.role.upsert({
      where: {
        id: role.id,
      },
      create: {
        id: role.id,
        name: role.name,
      },
      update: {},
    });
  });

  const procince = await provinceEnum.forEach(async (e) => {
    await prisma.province.upsert({
      where: {
        id: e.identifier,
      },
      create: {
        id: e.identifier,
        name: e.name,
      },
      update: {},
    });
  });

  const district = await districtEnum.forEach(async (e) => {
    await prisma.district.upsert({
      where: {
        id: e.identifier,
      },
      create: {
        id: e.identifier,
        provinceId: e.parent,
        name: e.name,
      },
      update: {},
    });
  });

  const amphoe = await amphoeEnum.forEach(async (e) => {
    await prisma.amphoe.upsert({
      where: {
        id: e.identifier,
      },
      create: {
        id: e.identifier,
        districtId: e.parent,
        zipcode: e.zip.toString(),
        name: e.name,
      },
      update: {},
    });
  });
};

main()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
