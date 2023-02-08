import { User } from './../generated/graphql';
import { salary } from './../generated/client/index.d';
import { Resolvers } from '../generated/graphql';
import gql from 'graphql-tag';
import { v4 } from 'uuid';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import dayjs from 'dayjs';
const PDFDocument = require('pdfkit');
import path from 'path'
import fs from 'fs'

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
            let pdfDoc = new PDFDocument;
            pdfDoc.registerFont('Heading Font', '/public/font/Sarabun-Bold.ttf', 'Sarabun-Bold');
            pdfDoc.font('Heading Font')
            let pdfpath = path.resolve('test.pdf')
            let convertpath = pdfpath.replace(/\\/g, '/')
            let paths = pdfDoc.pipe(fs.createWriteStream(convertpath));
            pdfDoc.text("This text is left aligned ทดสอบภาษาไทย", { align: 'left' })
            pdfDoc.text("This text is at the center", { align: 'center' })
            pdfDoc.text("This text is right aligned", { align: 'right' })
            pdfDoc.text("This text needs to be slightly longer so that we can see that justification actually works as intended", { align: 'justify' })

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


