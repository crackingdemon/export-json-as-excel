
const data = [{
    "Segment": "Entertainment",
    "Country": "India",
    "Product": "Laptop",
    "Discount": "10 %",
},
{
    "Segment": "Entertainment",
    "Country": "china",
    "Product": "mi phone",
    "Discount": "20 %",
},
{
    "Segment": "Entertainment",
    "Country": "Korea",
    "Product": "Samsung Mobile",
    "Discount": "20 %",
}];
document.getElementById("json").innerHTML = JSON.stringify(data, undefined, 4);

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


function downloadAsExcel(){ 
    const worksheet = XLSX.utils.json_to_sheet(data); 


const workbook = {
    Sheets:{
        'data':worksheet
    },
    SheetNames:['data']
};
const excelBuffer = XLSX.write(workbook,{bookType:'xlsx',type:'array'});
console.log(excelBuffer);
saveAsexcel(excelBuffer,'myFile')
}

function saveAsexcel(buffer,filename){
const data = new Blob([buffer],{ EXCEL_TYPE});
saveAs(data,filename+'_export_'+new Date().getTime()+EXCEL_EXTENSION);
}












