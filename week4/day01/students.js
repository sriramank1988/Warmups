var exam_results = {
  Greg: {
    Biology: [90, 75, 23, 60],
    Maths: [100, 80, 30, 45]
  },
  Sarah: {
    Biology: [70, 65, 80, 95],
    Maths: [80, 77, 64, 90]
  },
  Thomas: {
    Biology: [40, 60, 75, 98],
    Maths: [36, 50, 67, 82]
  }
}


console.log(`Greg's score in his first biology exam : ${exam_results.Greg.Biology[0]}`);
console.log(`Sarah's score in her last maths exam : ${exam_results.Sarah.Maths[exam_results.Sarah.Maths.length - 1]}`);
console.log(`Thomas's highest score in Maths this year : ${Math.max(...exam_results.Thomas.Maths)}`);
console.log(`Greg's lowest score in Biology this year : ${Math.min.apply(null,exam_results.Greg.Biology)}`);

//const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
//exam_results.Sarah.Maths.reduce((a,b)=> a+b, 0)




