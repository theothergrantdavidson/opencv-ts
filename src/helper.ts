
enum data {
    THRESH_BINARY = 0,
THRESH_BINARY_INV = 1,
THRESH_TRUNC = 2,
THRESH_TOZERO = 3,
THRESH_TOZERO_INV = 4,
THRESH_MASK = 7,
THRESH_OTSU = 8,
THRESH_TRIANGLE = 16,
}

const n = "ThresholdTypes";

let str = "";

Object.keys(data).forEach(key => {
str += `${key}: ${n}.${key};\n`
})


const fnStr = (`adaptiveThreshold	(	InputArray 	src,
OutputArray 	dst,
double 	maxValue,
int 	adaptiveMethod,
int 	thresholdType,
int 	blockSize,
double 	C 
)	`).replace(/\n/g, " ").replace(/[^a-zA-Z ]/g, " ").replace(/\s\s+/g, ' ').split(' ');

let replaceWords:{ [index:string] : {} } = {
'InputArray': 'Mat',
'OutputArray': 'Mat',
'int': 'number',
'double': 'number'
};


let formattedFnStr = `${fnStr[0]}(`
fnStr.shift();

let argType = undefined;

for(var i = 0; i <= fnStr.length; i+=2 ) {
const argType = replaceWords[fnStr[i]];
const arg = fnStr[i+1];

if(argType && arg) {
formattedFnStr += `${arg}: ${argType},`
}
}

console.log(`${formattedFnStr.substring(0, formattedFnStr.length - 1)}):`)



