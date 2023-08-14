const filePath = "/documents/reports/report1.pdf";
const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
const fileExtension = fileName.substring(fileName.lastIndexOf(".") + 1);

console.log(`File Name: ${fileName}, Extension: ${fileExtension}`);
