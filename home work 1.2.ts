//ДЗ 1.2
//Задание №1
const a = 5;
const multiple = 4 * a;
console.log (multiple);

//Задание №2
const s = 6;
const secondPowerArea = s * s;
console.log (secondPowerArea);

//Задание №3
const rectangle_1 = 5;
const rectangle_2 = 44;
const multipleRecnatgleSides = rectangle_1 * rectangle_2;
console.log (multipleRecnatgleSides);


// Задание №4
const d = 53;
const dDivide = d / 2;
console.log (dDivide);


// Задание №5
const aA = 33;
const V = aA*aA*aA;
const S = aA*aA;
console.log (V)
console.log (S);

// Задание №6

const aAa = 50;
const bBb = 40;
const cCc = 50;
const sS = aAa*bBb;
const vV = sS**3;

console.log (sS)
console.log (vV)

//Задание №7

const r = 25
const l = r ** 2;
const sC = l*3.14;
console.log (l);
console.log (sC);

//Задание №8
const numbA = 50;
const numbB = 83;
const numbC = (numbA+numbB);
const numbD = numbC / 2;
console.log (numbC);
console.log (numbD);


//Задание №9
const geoA = 7;
const geoB = 16;
const multC = geoA * geoB;
const sqrt = Math.sqrt(multC);
console.log (multC);
console.log (sqrt);

//Задание №10
const nNullA = 14;
const nNullB = 11;
const nNullC = nNullA+nNullB;
const nNullD = nNullA*nNullB;
const nNullE = nNullA/nNullB;
const nNullF = (nNullA**2)/(nNullB **2);
const nNullG = nNullA - nNullB;
console.log (nNullA, nNullB, nNullC, nNullD, nNullE, nNullF, nNullG);


//Задание №11
const absA = 18;
const absB = 14;
const absC = absA + absB;
const absD = absA * absB;
const absE = absA - absB;
const absF = absA / absB;
const absG = Math.abs(absA);
const absH = Math.abs(absB);
console.log (absC, absD, absE, absF, absG, absH);


//Задание №12
const triA = 30;
const triB = 23;
const triC = triA*triB/2;
const triD = Math.sqrt(345);
const triE = triA+triB+triD;
console.log(triC);//Площадь
console.log(triD);//Гипотенуза
console.log(triE);//Периметр


//Задание №13
const circleR1 = 4;
const circleR2 = 7;
const circleS1 = Math.pow(circleR1,2)*Math.PI;
const circleS2 = Math.pow(circleR2,2)*Math.PI;
const circleS3 = circleS2 - circleS1;
console.log(circleS1);
console.log(circleS2);
console.log(circleS3);


//Задание №14
const segA = 3;
const segB = 7;
const segC = 15;
const segAC = Math.abs(segC)-Math.abs(segA);
const segBC = Math.abs(segC)-Math.abs(segB);
const segSum = Math.abs(segAC)+Math.abs(segBC);
console.log(segAC);
console.log(segBC);
console.log(segSum);


//Задание №15
const segment1 = 5;
const segment2 = 8;
const segment3 = 14;
const segment13 = Math.abs(segment3)-Math.abs(segment1);
const segment23 = Math.abs(segment3)-Math.abs(segment2);
const segment1223 = Math.abs(segment13)*Math.abs(segment23);

console.log(segment13);
console.log(segment23);
console.log(segment1223);


//Задание №16
const x1 = 12;
const y1 = 10;
const x2 = 2;
const y2 = 3;
const sideX1X2 = Math.abs(x1-x2);
const sideY1Y2 = Math.abs(y1-y2);
const rectP = Math.abs(sideX1X2+sideY1Y2)*2;
const rectS = sideX1X2*sideY1Y2;
console.log(sideX1X2);
console.log(sideY1Y2);
console.log(rectP);
console.log(rectS);


//Задание №17;
const pointX1 = 16;
const pointY1 = 14;
const pointX2 = 4;
const pointY2 = 2;
const segmX1X2 = Math.abs(pointX1-pointX2);
const segmY1Y2 = Math.abs(pointY2-pointY1);
const segmD = Math.sqrt(pointX1-pointX2)+Math.sqrt(pointY1-pointY2);
console.log(segmX1X2);
console.log(segmY1Y2);
console.log(segmD);