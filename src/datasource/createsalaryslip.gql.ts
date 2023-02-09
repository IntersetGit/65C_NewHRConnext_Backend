import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import { Resolvers } from '../generated/graphql';
import gql from 'graphql-tag';
import { v4 } from 'uuid';
import dayjs from 'dayjs';
const PDFDocument = require('pdfkit-table');
import path from 'path'
import fs from 'fs'
// const font = require('./sarabunbold.ttf')

export const salarySlipTypedef = gql`

    
type slipresolvers {
    message: String
    status: Boolean
}

type Query{
    SalarySlip(userId: String, month: String, years: String): slipresolvers
}



`
const resolversslip: Resolvers = {
    Query: {
        async SalarySlip(p, args, ctx) {
            const data = await ctx.prisma.user.findMany({
                include: {
                    profile: true,
                    salary: { where: { month: args.month, AND: { years: args.years } } },
                    companyBranch: { include: { company: true } },
                    Position_user: { include: { mas_positionlevel3: true }, orderBy: { date: 'desc' } },
                    bookbank_log: { include: { mas_bank: true } }
                },
                where: {
                    id: args.userId as string,
                }

            })
            console.log(data);

            return {
                message: 'success',
                status: true
            }

        }
    },





    // let pdfDoc = new PDFDocument({ size: 'A4' });
    // let pdfpath = path.resolve('./public/assets/payment/test.pdf')
    // let convertpath = pdfpath.replace(/\\/g, '/')
    // let paths = pdfDoc.pipe(fs.createWriteStream(convertpath));
    // pdfDoc
    //     .font('./public/font/THSarabunNewBold.ttf')
    //     .fontSize(16)
    //     .text('บริษัท อินเตอร์ ฯ จำกัด', 100, 100, { align: 'center' });
    // pdfDoc.fontSize(12).text("3300 แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900\n\n", { align: 'center' });
    // pdfDoc.lineJoin('miter')
    //     .rect(20, 153, 560, 20)
    //     // .lineTo(19, 560)
    //     // .lineTo(580, 560)
    //     // .lineTo(580, 300)
    //     .stroke();

    // pdfDoc.fontSize(16).text("ใบแจ้งเงินเดือน (PAY SLIP)\n", { align: 'center' });

    // pdfDoc.fontSize(12).text("รหัสพนักงาน  22-090", 20, 185, { align: 'left', lineBreak: false }).text("ประจำงวด  ธันวาคม 2565", { align: 'right' });
    // // pdfDoc.fontSize(12).text("ประจำงวด  ธันวาคม 2565", { align: 'right' });
    // pdfDoc.fontSize(12).text("ชื่อพนักงาน/Emp.  นาย ปวเรศ วิศรุต", 20, 200, { align: 'left', lineBreak: false }).text("เลขที่บัญชีธนาคาร  SCB:XXXXXXXXXX", { align: 'right' });
    // // pdfDoc.fontSize(12).text("ชื่อพนักงาน/Emp  นาย ปวเรศ วิศรุต", { align: 'right' , lineBreak : false}).text("เลขที่บัญชีธนาคาร  SCB:XXXXXXXXXX", { align: 'right' });
    // pdfDoc.fontSize(12).text("แผนก/Dep.  Developer", 20, 215, { align: 'left', lineBreak: false }).text("ตำแหน่ง  XXXXXXXXXXXXXXXXXX", { align: 'right' });

    // // pdfDoc.fontSize(12).text("แผนก/Dep.  Developer", { align: 'right' , lineBreak : false}).text("ตำแหน่ง  ซุ่มโจมตี", { align: 'right' });
    // ///////////////////////////////////////////////////////////////////////
    // pdfDoc.lineJoin('miter') //กรอบซ้าย
    //     .rect(20, 240, 185, 20)
    //     .lineTo(19, 520) //เส้นซ้าย
    //     .lineTo(205, 520) //เส้นล่าง
    //     .lineTo(205, 260) //เส้นขวา
    //     .stroke()

    // pdfDoc.fontSize(12).text("รายได้ (Income)", 85, 243, { align: 'left' }) // หัวตาราง

    // pdfDoc.fontSize(12).text("เงินเดือนค่าจ้าง", 25, 265, { align: 'left' })
    // pdfDoc.fontSize(12).text("xxxxx.00", 100, 265, { width: 100, align: 'right' })

    // pdfDoc.fontSize(12).text("ค่าคอมมิชชั่น", 25, 285, { align: 'left' })
    // pdfDoc.fontSize(12).text("XXXX.00", 100, 285, { width: 100, align: 'right' })

    // pdfDoc.fontSize(12).text("ค่าตำแหน่ง", 25, 305, { align: 'left' })
    // pdfDoc.fontSize(12).text("-", 100, 305, { width: 100, align: 'right' })

    // pdfDoc.fontSize(12).text("เงินพิเศษ", 25, 325, { align: 'left' })
    // pdfDoc.fontSize(12).text("-", 100, 325, { width: 100, align: 'right' })

    // pdfDoc.fontSize(12).text("ค่าล่วงเวลา", 25, 345, { align: 'left' })
    // pdfDoc.fontSize(12).text("-", 100, 345, { width: 100, align: 'right' })

    // pdfDoc.fontSize(12).text("รายได้อื่น", 25, 365, { align: 'left' })
    // pdfDoc.fontSize(12).text("-", 100, 365, { width: 100, align: 'right' })

    // pdfDoc.fontSize(12).text("ค่าเดินทาง", 25, 385, { align: 'left' })
    // pdfDoc.fontSize(12).text("-", 100, 385, { width: 100, align: 'right' })

    // pdfDoc.fontSize(12).text("เงินอุดหนุน", 25, 405, { align: 'left' })
    // pdfDoc.fontSize(12).text("-", 100, 405, { width: 100, align: 'right' })

    // pdfDoc.fontSize(12).text("เงินสวัสดิการ", 25, 425, { align: 'left' })
    // pdfDoc.fontSize(12).text("-", 100, 425, { width: 100, align: 'right' })

    // pdfDoc.fontSize(12).text("เงินโบนัส", 25, 445, { align: 'left' })
    // pdfDoc.fontSize(12).text("-", 100, 445, { width: 100, align: 'right' })

    // // เงินได้สะสม ภาษีสะสม
    // pdfDoc.lineJoin('miter') //กรอบกลางล่าง ประกันสังคมสะสม
    //     .rect(19, 480, 186, 20)
    //     .stroke()
    // pdfDoc.fontSize(12).text("เงินได้สะสม", 25, 483, { align: 'left' })
    // pdfDoc.fontSize(12).text("X,XXX,XXX.00", 100, 483, { width: 100, align: 'right' })
    // pdfDoc.lineJoin('miter') //กรอบกลางล่าง กองทุนสำรองเลี้ยงชีพสะสม
    //     .rect(19, 500, 186, 20)
    //     .stroke()
    // pdfDoc.fontSize(12).text("ภาษีสะสม", 25, 503, { align: 'left' })
    // pdfDoc.fontSize(12).text("X,XXX,XXX.00", 100, 503, { width: 100, align: 'right' })
    // ///////////////////////////////////////////////////////////////////////
    // pdfDoc.lineJoin('miter') //กรอบกลาง
    //     .rect(205, 240, 185, 20)
    //     .lineTo(205, 520)
    //     .lineTo(390, 520)
    //     .lineTo(390, 260)
    //     .stroke()

    // pdfDoc.fontSize(12).text("รายการหัก (Deduction)", 255, 243, { align: 'left' })

    // pdfDoc.fontSize(12).text("ภาษีหัก ณ ที่จ่าย (5%)", 210, 265, { align: 'left' })
    // pdfDoc.fontSize(12).text("XXXX.00", 285, 265, { width: 100, align: 'right' })

    // pdfDoc.fontSize(12).text("ประกันสังคม (5%)", 210, 285, { align: 'left' })
    // pdfDoc.fontSize(12).text("XXX.00", 285, 285, { width: 100, align: 'right' })

    // pdfDoc.fontSize(12).text("หักมาทำงานสาย", 210, 305, { align: 'left' })
    // pdfDoc.fontSize(12).text("-", 285, 305, { width: 100, align: 'right' })

    // pdfDoc.fontSize(12).text("หักขาดงาน", 210, 325, { align: 'left' })
    // pdfDoc.fontSize(12).text("-", 285, 325, { width: 100, align: 'right' })

    // pdfDoc.fontSize(12).text("หักลากิจ / ลาป่วย", 210, 345, { align: 'left' })
    // pdfDoc.fontSize(12).text("-", 285, 345, { width: 100, align: 'right' })

    // pdfDoc.fontSize(12).text("หักอื่น ๆ ", 210, 365, { align: 'left' })
    // pdfDoc.fontSize(12).text("-", 285, 365, { width: 100, align: 'right' })

    // pdfDoc.fontSize(12).text("กองทุนสำรองเลี้ยงชีพ (3%)", 210, 385, { align: 'left' })
    // pdfDoc.fontSize(12).text("-", 285, 385, { width: 100, align: 'right' })

    // pdfDoc.lineJoin('miter') //กรอบกลางล่าง ประกันสังคมสะสม
    //     .rect(205, 480, 185, 20)
    //     .stroke()
    // pdfDoc.fontSize(12).text("ประกันสังคมสะสม", 211, 483, { align: 'left' })
    // pdfDoc.fontSize(12).text("X,000.00", 285, 483, { width: 100, align: 'right' })

    // pdfDoc.lineJoin('miter') //กรอบกลางล่าง กองทุนสำรองเลี้ยงชีพสะสม
    //     .rect(205, 500, 185, 20)
    //     .stroke()
    // pdfDoc.fontSize(12).text("กองทุนสำรองเลี้ยงชีพสะสม", 211, 503, { align: 'left' })
    // pdfDoc.fontSize(12).text("-", 285, 503, { width: 100, align: 'right' })

    // ///////////////////////////////////////////////////////////////////////
    // pdfDoc.lineJoin('miter') //กรอบขวา
    //     .rect(390, 240, 190, 0)
    //     .lineTo(390, 520)
    //     .lineTo(580, 520)
    //     .lineTo(580, 240)
    //     .stroke()

    // pdfDoc.fontSize(12).text("รวมเงินได้", 400, 265, { align: 'left' })
    // pdfDoc.fontSize(12).text("X,000.00", 470, 265, { width: 100, align: 'right' })
    // pdfDoc.fontSize(12).text("รวมเงินหัก", 400, 285, { align: 'left' })
    // pdfDoc.fontSize(12).text("XXX.00", 470, 285, { width: 100, align: 'right' })

    // pdfDoc.fontSize(12).text("เงินได้สุทธิ", 400, 325, { align: 'left' })
    // pdfDoc.fontSize(12).text("X,XXX,XXX.00", 460, 335, { width: 100, align: 'right' })
    // pdfDoc.fontSize(12).text("(Net Income)", 400, 345, { align: 'left' })
    // pdfDoc.lineJoin('miter') //กรอบขวา
    //     .rect(480, 330, 90, 0)
    //     .lineTo(480, 355)
    //     .lineTo(570, 355)
    //     .lineTo(570, 330)
    //     .stroke()

    // pdfDoc.fontSize(12).text("ลงชื่อผู้รับเงิน/Sign", 395, 485, { lineBreak: false }).text(" _____________") //บรรทัดต่อกัน
    // pdfDoc.fontSize(12).text("วันที่/Date", 395, 505, { lineBreak: false }).text("  __________________")
    // // pdfDoc.fontSize(12).text("___________________", 470, 505)
    // pdfDoc.end();
    // console.log(pdfDoc)
    // return {
    //     message: 'success',
    //     result: true,
    // };


}


const resolversSlipComposition = {
    'Query.SalarySlip': [authenticate()],
};

export const salarySlipResolvers = composeResolvers(
    resolversslip,
    resolversSlipComposition,
);


