import multer from "multer"
export const fileValidation = {
  image: ['image/png', 'image/jpeg', 'image/webp'],
  pdf: ['appliction/pdf']
};

function fileUpload(customValidation = []) {
  const storage = multer.diskStorage({});

  function fileFilter(req, file, cb) {
    if (customValidation.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb("Invalid Format", false);
    }
  }
  const upload = multer({ fileFilter, storage });
  return upload;
}
export default fileUpload;