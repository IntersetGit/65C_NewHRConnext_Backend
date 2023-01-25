/**
 * Adds seed data to your db
 *
 * @link https://www.prisma.io/docs/guides/database/seed-database
 */

import { PrismaClient } from '../src/generated/client';
import rolesEnum from '../enum/roles.enum';
import provinceEnum from '../enum/province.enum';
import districtEnum from '../enum/district.enum';
import amphoeEnum from '../enum/amphoe.enum';
import { createPassword } from '../src/utils/passwords';

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

  const user = await prisma.user.upsert({
    where: {
      id: 'ff2631fc-9c89-4491-b845-296e1c0d66a3',
    },
    create: {
      id: 'ff2631fc-9c89-4491-b845-296e1c0d66a3',
      email: 'interset@gmail.com',
      password: await createPassword('Interset@1234'),
      islogin: false,
      isActive: true,
      isOwner: true,
      roleId: 'd0bff324-e70c-494e-b4c3-da220cd0d9af',
      createdAt: '2023-01-25T04:48:57.188Z',
      profile: {
        create: {
          id: '90607862-13f0-4edd-a419-38b247d2083f',
          bio: 'Hello world',
          firstname_th: 'อินเตอร์เซ็ต',
          firstname_en: 'Interset',
          lastname_en: 'Devs',
          lastname_th: 'เดฟ',
          dob: '2023-01-19T04:48:06.846Z',
          age: '20',
          relationship: 'Single',
          tel: '0649453094',
        },
      },
    },
    update: {},
  });
  const createFakeCompany = await prisma.company.upsert({
    where: {
      id: 'ba9536cd-522d-40c4-a6fd-da96d4284b70',
    },
    create: {
      id: 'ba9536cd-522d-40c4-a6fd-da96d4284b70',
      name: 'บริษัท อินเตอร์ เซต รีเสิรช์ แอนด์ โซลูชั่น จำกัด',
      companyCode: 'Interset',
      userlimit: 100,
      createdAt: '2023-01-25T04:48:57.199Z',
      updatedAt: '2023-01-25T04:48:57.199Z',
      ownerId: 'ff2631fc-9c89-4491-b845-296e1c0d66a3',
    },
    update: {},
  });

  const createFakeBranch = await prisma.companyBranch.upsert({
    where: {
      id: '4d4bebf3-7f56-4af8-aac3-b3231d54902a',
    },
    create: {
      id: '4d4bebf3-7f56-4af8-aac3-b3231d54902a',
      isMainbranch: true,
      name: 'สำนักงานใหญ่',
      address:
        '3300/119 ตึกช้าง อาคารบี ชั้น 23 ถนนพหลโยธิน แขวงจอมพล เขตจตุจักร กรุงเทพฯ 10900',
      city: '924f8ac4-fa10-41e0-8fb2-8005bc457710',
      state: '0e451125-a597-4f76-ba92-d27c52071cf9',
      zip: '10900',
      country: 'd61deee2-467c-4860-a789-a0f4285a4d43',
      tel: '052146354',
      company_type: 'สำนักงานใหญ่',
      createdAt: '2023-01-25T04:48:57.210Z',
      updatedAt: '2023-01-25T04:48:57.210Z',
      companyId: 'ba9536cd-522d-40c4-a6fd-da96d4284b70',
    },
    update: {},
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
