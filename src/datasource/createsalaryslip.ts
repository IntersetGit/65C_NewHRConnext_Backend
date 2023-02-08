import { User } from './../generated/graphql';
import { salary } from './../generated/client/index.d';
import { Resolvers } from '../generated/graphql';
import gql from 'graphql-tag';
import { v4 } from 'uuid';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';

import dayjs from 'dayjs';
const PDFDocument = require('pdfkit-table');
import path from 'path'
import fs from 'fs'
// const font = require('./sarabunbold.ttf')

export const salarySlipTypedef = gql`
    type salaryslip {
        id: ID
        link: String
    }

    type Query {
    SalartSlip: salaryslip
  }
`
const resolvers: Resolvers = {
    Query: {
        async SalartSlip(parant: any, args: any, ctx: any) {
            let pdfDoc = new PDFDocument({ size: 'A4' });
            // pdfDoc.registerFont('Sarabun', './public/font/PalatinoBold.ttf', 'Sarabun-Bold');
            // pdfDoc.font('./public/font/PalatinoBold.ttf', 'Sarabun-Bold')
            let pdfpath = path.resolve('./public/assets/payment/test.pdf')
            let convertpath = pdfpath.replace(/\\/g, '/')
            let paths = pdfDoc.pipe(fs.createWriteStream(convertpath));
            pdfDoc
                .font('./public/font/THSarabunNewBold.ttf')
                .fontSize(16)
                .text('บริษัท อินเตอร์ ฯ จำกัด', 100, 100, { align: 'center' });
            pdfDoc.fontSize(12).text("3300 แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900\n\n", { align: 'center' });
            pdfDoc.lineJoin('miter')
                .rect(75, 150, 500, 20)
                .stroke();
            pdfDoc.fontSize(16).text("ใบแจ้งเงินเดือน (PAY SLIP)\n", { align: 'center' });

            pdfDoc.fontSize(12).text("รหัสพนักงาน  22-090", {align: 'right' , lineBreak : false}).text("ประจำงวด  ธันวาคม 2565", { align: 'right' });
            // pdfDoc.fontSize(12).text("ประจำงวด  ธันวาคม 2565", { align: 'right' });

            // pdfDoc.fontSize(12).text("ชื่อพนักงาน/Emp  นาย ปวเรศ วิศรุต", { align: 'right' , lineBreak : false}).text("เลขที่บัญชีธนาคาร  SCB:XXXXXXXXXX", { align: 'right' });
           

            // pdfDoc.fontSize(12).text("แผนก/Dep.  Developer", { align: 'right' , lineBreak : false}).text("ตำแหน่ง  ซุ่มโจมตี", { align: 'right' });
           

            pdfDoc.end();
            console.log(pdfDoc)
        }
    }

}

const resolversComposition = {
    'Query.SalartSlip': [authenticate()],
};

export const salarySlipResolvers = composeResolvers(
    resolvers,
    resolversComposition,
);


