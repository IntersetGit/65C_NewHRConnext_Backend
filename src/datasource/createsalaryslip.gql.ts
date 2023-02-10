import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import { Resolvers } from '../generated/graphql';
import gql from 'graphql-tag';
import { v4 } from 'uuid';
import dayjs from 'dayjs';
const PDFDocument = require('pdfkit-table');
import path from 'path'
import fs from 'fs'
import { late } from 'zod';
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

            let resultmonth // เดือน
            let Year //ปี
            let company_name = null
            let address1 = null
            let address2 = null
            let staffcode = null
            let firstname = null
            let lastname = null
            let banknumber = null
            let bank_name = null
            let bank_code = null
            let base_salary = null
            let Pro_emp_month = null
            let department = null
            let Position = null
            let pro_emp = null

            let Com = null
            let Position_income = null
            let Ot = null
            let Special_income = null
            let Other_in = null
            let Travel_income = null
            let Bursary = null
            let Welfare_money = null
            let Bonus = null
            //รายหัก
            let Vat_per = null
            let Ss_per = null
            let vat = null
            let Social_security = null
            let Late = null
            let Miss = null
            let Ra = null
            let Other = null
            let Provident_employee = null
            let Total_income = null
            let Total_expense = null
            let Net = null
            let Income_collect = null
            let Vat_collect = null
            let Social_secu_collect = null

            const data = await ctx.prisma.user.findMany({
                include: {
                    profile: true,
                    salary: { where: { month: args.month, AND: { years: args.years } } },
                    companyBranch: { include: { company: true, expense_company: true } },
                    Position_user: { include: { mas_positionlevel2: true, mas_positionlevel3: true }, orderBy: { date: 'desc' } },
                    bookbank_log: { include: { mas_bank: true }, orderBy: { date: 'desc' } },
                    mas_all_collect: true
                },
                where: {
                    id: args.userId as string,
                }

            })
            console.log(data);

            for (let i = 0; i < data.length; i++) {

                company_name = data[i].companyBranch?.company?.name

                address1 = data[i].companyBranch?.address
                address2 = data[i].companyBranch?.address_2
                staffcode = data[i].profile?.staff_code
                firstname = data[i].profile?.firstname_th
                lastname = data[i].profile?.lastname_th
                
                Ss_per = data[i].companyBranch?.expense_company[0].ss_per
                Vat_per = data[i].companyBranch?.expense_company[0].vat_per

                let bookbank_Log = data[i].bookbank_log
                for (let a = 0; a < bookbank_Log.length; a++) {
                    banknumber = bookbank_Log[0].bank_number
                    bank_name = bookbank_Log[0].mas_bank?.name
                    bank_code = bookbank_Log[0].mas_bank?.bank_code
                    base_salary = bookbank_Log[0].base_salary
                    Pro_emp_month = bookbank_Log[0].provident_emp
                }

                let position = data[i].Position_user
                for (let a = 0; a < position.length; a++) {
                    department = position[0].mas_positionlevel2?.name
                    Position = position[0].mas_positionlevel3?.name
                }

                let Salary = data[i].salary
                for (let a = 0; a < Salary.length; a++) {
                    //รายได้

                    Com = Salary[i].commission
                    Position_income = Salary[i].position_income
                    Ot = Salary[i].ot
                    Special_income = Salary[i].special_income
                    Other_in = Salary[i].other_income
                    Travel_income = Salary[i].travel_income
                    Bursary = Salary[i].bursary
                    Welfare_money = Salary[i].welfare_money
                    Bonus = Salary[i].bonus
                    //รายหัก
                    // Vatper = Salary[i].vatper
                    // Ss_per = Salary[i].ss_per
                    vat = Salary[i].vat
                    Social_security = Salary[i].social_security
                    Late = Salary[i].late
                    Miss = Salary[i].miss
                    Ra = Salary[i].ra
                    Other = Salary[i].other
                    Provident_employee = Salary[i].provident_employee
                    //กรอบขวา
                    Total_income = Salary[i].total_income
                    Total_expense = Salary[i].total_expense
                    Net = Salary[i].net

                    let Month = Salary[i].month
                    let date = new Date(Month as string)
                    resultmonth = date.toLocaleDateString('th-TH', {
                        month: 'long',
                    })

                    Year = Salary[i].years

                }

                let mas_collect = data[i].mas_all_collect
                for (let a = 0; a < mas_collect.length; a++) {
                    pro_emp = mas_collect[a].provident_collect_employee
                    Income_collect = mas_collect[a].income_collect
                    Vat_collect = mas_collect[a].vat_collect
                    Social_secu_collect = mas_collect[a].social_secu_collect

                }
            }

            console.log(resultmonth)
            console.log(Number(Year) + 543)
            // check ค่าว่าง
            if (address2 === null) {
                address2 = ''
            }
            if (Com === null) {
                Com = 0
            }
            if (Position_income === null) {
                Position_income = 0
            }
            if (Special_income === null) {
                Special_income = 0
            }
            if (Ot === null) {
                Ot = 0
            }
            if (Bonus === null) {
                Bonus = 0
            }
            if (Other_in === null) {
                Other_in = 0
            }
            if (Travel_income === null) {
                Travel_income = 0
            }
            if (Bursary === null) {
                Bursary = 0
            }
            if (Welfare_money === null) {
                Welfare_money = 0
            }
            if (vat === null) {
                vat = 0
            }
            if (Social_security === null) {
                Social_security = 0
            }
            if (Late === null) {
                Late = 0
            }
            if (Miss === null) {
                Miss = 0
            }
            if (Ra === null) {
                Ra = 0
            }
            if (Other === null) {
                Other = 0
            }
            if (Provident_employee === null) {
                Provident_employee = 0
            }
            if (Total_income === null) {
                Total_income = 0
            }
            if (Total_expense === null) {
                Total_expense = 0
            }
            let pdfDoc = new PDFDocument({ size: 'A4' });
            let pdfpath = path.resolve('./public/assets/payment/test.pdf')
            let convertpath = pdfpath.replace(/\\/g, '/')
            let paths = pdfDoc.pipe(fs.createWriteStream(convertpath));
            pdfDoc
                .font('./public/font/THSarabunNewBold.ttf')
                .fontSize(16)
                .text(`${company_name}`, 100, 90, { align: 'center' });
            pdfDoc.fontSize(12).text(`${address1} ${address2}\n\n`, { align: 'center' });
            pdfDoc.lineJoin('miter')
                .rect(20, 153, 560, 20)
                // .lineTo(19, 560)
                // .lineTo(580, 560)
                // .lineTo(580, 300)
                .stroke();

            pdfDoc.fontSize(16).text("ใบแจ้งเงินเดือน (PAY SLIP)\n", 100, 154, { align: 'center' });

            pdfDoc.fontSize(12).text(`รหัสพนักงาน  ${staffcode}`, 20, 185, { align: 'left', lineBreak: false }).text(`ประจำงวด  ${resultmonth} ${(Number(Year)) + 543}`, { align: 'right' });
            // pdfDoc.fontSize(12).text("ประจำงวด  ธันวาคม 2565", { align: 'right' });
            pdfDoc.fontSize(12).text(`ชื่อพนักงาน/Emp.  ${firstname} ${lastname}`, 20, 200, { align: 'left', lineBreak: false }).text(`เลขที่บัญชี ${bank_code} : ${banknumber}`, { align: 'right' });
            // pdfDoc.fontSize(12).text("ชื่อพนักงาน/Emp  นาย ปวเรศ วิศรุต", { align: 'right' , lineBreak : false}).text("เลขที่บัญชีธนาคาร  SCB:XXXXXXXXXX", { align: 'right' });
            pdfDoc.fontSize(12).text(`แผนก/Dep.  ${department}`, 20, 215, { align: 'left', lineBreak: false }).text(`ตำแหน่ง  ${Position}`, { align: 'right' });

            // pdfDoc.fontSize(12).text("แผนก/Dep.  Developer", { align: 'right' , lineBreak : false}).text("ตำแหน่ง  ซุ่มโจมตี", { align: 'right' });
            ///////////////////////////////////////////////////////////////////////
            pdfDoc.lineJoin('miter') //กรอบซ้าย
                .rect(20, 240, 185, 20)
                .lineTo(19, 520) //เส้นซ้าย
                .lineTo(205, 520) //เส้นล่าง
                .lineTo(205, 260) //เส้นขวา
                .stroke()

            pdfDoc.fontSize(12).text("รายได้ (Income)", 85, 243, { align: 'left' }) // หัวตาราง

            pdfDoc.fontSize(12).text("เงินเดือนค่าจ้าง", 25, 265, { align: 'left' })
            pdfDoc.fontSize(12).text(`${base_salary?.toFixed(2)}`, 100, 265, { width: 100, align: 'right' })

            pdfDoc.fontSize(12).text("ค่าคอมมิชชั่น", 25, 285, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Com?.toFixed(2)}`, 100, 285, { width: 100, align: 'right' })

            pdfDoc.fontSize(12).text("ค่าตำแหน่ง", 25, 305, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Position_income?.toFixed(2)}`, 100, 305, { width: 100, align: 'right' })

            pdfDoc.fontSize(12).text("เงินพิเศษ", 25, 325, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Special_income?.toFixed(2)}`, 100, 325, { width: 100, align: 'right' })

            pdfDoc.fontSize(12).text("ค่าล่วงเวลา", 25, 345, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Ot?.toFixed(2)}`, 100, 345, { width: 100, align: 'right' })

            pdfDoc.fontSize(12).text("รายได้อื่น", 25, 365, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Other_in?.toFixed(2)}`, 100, 365, { width: 100, align: 'right' })

            pdfDoc.fontSize(12).text("ค่าเดินทาง", 25, 385, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Travel_income?.toFixed(2)}`, 100, 385, { width: 100, align: 'right' })

            pdfDoc.fontSize(12).text("เงินอุดหนุน", 25, 405, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Bursary?.toFixed(2)}`, 100, 405, { width: 100, align: 'right' })

            pdfDoc.fontSize(12).text("เงินสวัสดิการ", 25, 425, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Welfare_money?.toFixed(2)}`, 100, 425, { width: 100, align: 'right' })

            pdfDoc.fontSize(12).text("เงินโบนัส", 25, 445, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Bonus?.toFixed(2)}`, 100, 445, { width: 100, align: 'right' })

            // เงินได้สะสม ภาษีสะสม
            pdfDoc.lineJoin('miter') //กรอบกลางล่าง ประกันสังคมสะสม
                .rect(19, 480, 186, 20)
                .stroke()
            pdfDoc.fontSize(12).text("เงินได้สะสม", 25, 483, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Income_collect?.toFixed(2)}`, 100, 483, { width: 100, align: 'right' })
            pdfDoc.lineJoin('miter') //กรอบกลางล่าง กองทุนสำรองเลี้ยงชีพสะสม
                .rect(19, 500, 186, 20)
                .stroke()
            pdfDoc.fontSize(12).text("ภาษีสะสม", 25, 503, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Vat_collect?.toFixed(2)}`, 100, 503, { width: 100, align: 'right' })
            ///////////////////////////////////////////////////////////////////////
            pdfDoc.lineJoin('miter') //กรอบกลาง
                .rect(205, 240, 185, 20)
                .lineTo(205, 520)
                .lineTo(390, 520)
                .lineTo(390, 260)
                .stroke()

            pdfDoc.fontSize(12).text("รายการหัก (Deduction)", 255, 243, { align: 'left' })

            pdfDoc.fontSize(12).text(`ภาษีหัก ณ ที่จ่าย (${Vat_per}%)`, 210, 265, { align: 'left' })
            pdfDoc.fontSize(12).text(`${vat?.toFixed(2)}`, 285, 265, { width: 100, align: 'right' })

            pdfDoc.fontSize(12).text(`ประกันสังคม (${Ss_per}%)`, 210, 285, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Social_security?.toFixed(2)}`, 285, 285, { width: 100, align: 'right' })

            pdfDoc.fontSize(12).text("หักมาทำงานสาย", 210, 305, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Late?.toFixed(2)}`, 285, 305, { width: 100, align: 'right' })

            pdfDoc.fontSize(12).text("หักขาดงาน", 210, 325, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Miss?.toFixed(2)}`, 285, 325, { width: 100, align: 'right' })

            pdfDoc.fontSize(12).text("หักลากิจ / ลาป่วย", 210, 345, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Ra?.toFixed(2)}`, 285, 345, { width: 100, align: 'right' })

            pdfDoc.fontSize(12).text("หักอื่น ๆ ", 210, 365, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Other?.toFixed(2)}`, 285, 365, { width: 100, align: 'right' })

            pdfDoc.fontSize(12).text(`กองทุนสำรองเลี้ยงชีพ (${Pro_emp_month}%)`, 210, 385, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Provident_employee?.toFixed(2)}`, 285, 385, { width: 100, align: 'right' })

            pdfDoc.lineJoin('miter') //กรอบกลางล่าง ประกันสังคมสะสม
                .rect(205, 480, 185, 20)
                .stroke()
            pdfDoc.fontSize(12).text("ประกันสังคมสะสม", 211, 483, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Social_secu_collect?.toFixed(2)}`, 285, 483, { width: 100, align: 'right' })

            pdfDoc.lineJoin('miter') //กรอบกลางล่าง กองทุนสำรองเลี้ยงชีพสะสม
                .rect(205, 500, 185, 20)
                .stroke()
            pdfDoc.fontSize(12).text("กองทุนสำรองเลี้ยงชีพสะสม", 211, 503, { align: 'left' })
            pdfDoc.fontSize(12).text(`${pro_emp?.toFixed(2)}`, 285, 503, { width: 100, align: 'right' })

            ///////////////////////////////////////////////////////////////////////
            pdfDoc.lineJoin('miter') //กรอบขวา
                .rect(390, 240, 190, 0)
                .lineTo(390, 520)
                .lineTo(580, 520)
                .lineTo(580, 240)
                .stroke()

            pdfDoc.fontSize(12).text("รวมเงินได้", 400, 265, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Total_income?.toFixed(2)}`, 470, 265, { width: 100, align: 'right' })
            pdfDoc.fontSize(12).text("รวมเงินหัก", 400, 285, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Total_expense?.toFixed(2)}`, 470, 285, { width: 100, align: 'right' })

            pdfDoc.fontSize(12).text("เงินได้สุทธิ", 400, 325, { align: 'left' })
            pdfDoc.fontSize(12).text(`${Net?.toFixed(2)}`, 460, 335, { width: 100, align: 'right' })
            pdfDoc.fontSize(12).text("(Net Income)", 400, 345, { align: 'left' })
            pdfDoc.lineJoin('miter') //กรอบขวา
                .rect(480, 330, 90, 0)
                .lineTo(480, 355)
                .lineTo(570, 355)
                .lineTo(570, 330)
                .stroke()

            pdfDoc.fontSize(12).text("ลงชื่อผู้รับเงิน/Sign", 395, 485, { lineBreak: false }).text(" _____________") //บรรทัดต่อกัน
            pdfDoc.fontSize(12).text("วันที่/Date", 395, 505, { lineBreak: false }).text("  __________________")
            // pdfDoc.fontSize(12).text("___________________", 470, 505)
            pdfDoc.end();
            console.log(pdfDoc)

            return {
                message: 'success',
                status: true
            }

        }
    },
}


const resolversSlipComposition = {
    'Query.SalarySlip': [authenticate()],
};

export const salarySlipResolvers = composeResolvers(
    resolversslip,
    resolversSlipComposition,
);


