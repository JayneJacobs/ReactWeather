// function getTempCallback (location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
//   getTempCallback('Philadelphia', function (err, temp) {
//     if (err) {
//       console.log('error', err);
//     } else {
//       console.log('success', temp)
//     }
//   });
//
//   function getTempPromise (location) {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function() {
//         resolve (79);
//         reject('City not found');
//       }, 360000);
//     });
//   }
//
//   getTempPromise('Philadelphia').then(function (temp) {
//     console.log('promise success', temp);
//
//   }, function (err) {
//     console.log('promise error', err);
//
//   })
//if (typeof someNumber === 'number') {

  function addPromise (a, b) {
   return new Promise(function (resolve, reject) {
   if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
      } else {
      reject('you did not use a number');
    }
     });
   }

          addPromise(5,11).then(function (sum) {
             console.log('success', sum);

       }, function (err) {
            console.log('error', err);

       });

       addPromise('bad',11).then(function (sum) {
          console.log('success', sum);

    }, function (err) {
         console.log('error', err);

    });

 //    addPromise(joe,sally).then(function (sum) {
 //       console.log('this should not show up', sum);
 //
 // }, function (err) {
 //      console.log('error', err);
 //
 // });
 //
