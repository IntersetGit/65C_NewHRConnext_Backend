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
  rolesEnum.forEach(async (role) => {
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

  provinceEnum.forEach(async (e) => {
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

  districtEnum.forEach(async (e) => {
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

  amphoeEnum.forEach(async (e) => {
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
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
