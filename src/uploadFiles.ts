import multer from 'multer';
import { Router } from 'express';

const routes = Router();

const storageAvatar = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/avatar');
  },
  filename: function (req, file, callback) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    callback(null, 'avatar' + '-' + uniqueSuffix + '.png');
  },
});

const avatarUpload = multer({ storage: storageAvatar });

routes.post('/avatar', avatarUpload.single('avatar'), (req, res) => {
  res.send(req.file);
});


//----------------- รูปบริษัท ------------------------------//

const storagePhotoCom = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/photocompany');
  },
  filename: function (req, file, callback) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    callback(null, 'company' + '-' + uniqueSuffix + '.png');
  },
});

const photoComUpload = multer({ storage: storagePhotoCom });

routes.post('/photocompany', photoComUpload.single('company'), (req, res) => {
  res.send(req.file);
});

//---------------- pdf  หนังสือรับรอง ----------------------------//bin

const storagePdfCertificate = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/pdfcertificate');
  },
  filename: function (req, file, callback) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    callback(null, 'certificate' + '-' + uniqueSuffix + '.pdf');
  },
});

const PdfCertificateUpload = multer({ storage: storagePdfCertificate });

routes.post('/pdfcertificate', PdfCertificateUpload.single('certificate'), (req, res) => {
  res.send(req.file);
});


//------------------------ pdf ใบทะเบียนภาษีมูลค่าเพิ่ม ----------------------//

const storagePdfVAT = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/vatregistration');
  },
  filename: function (req, file, callback) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    callback(null, 'vatregistration' + '-' + uniqueSuffix + '.pdf');
  },
});

const pdfVatUpload = multer({ storage: storagePdfVAT });

routes.post('/pdfvatregistration', pdfVatUpload.single('vat'), (req, res) => {
  res.send(req.file);
});


export default routes;
