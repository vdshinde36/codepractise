/**
 * Problem : Reverse javascript Integer Array
 * 
 * given array of size n reverse all element of array
 * 
 */


 /**
  * Time Complexity : O(n) - Average Case
  * Space Complexity : O(n) - auxillary space
  * @param {Array} arr input array
  */
 /*
 function reverse(arr){
     let reverse = [];
     if(! arr instanceof Array){
         throw new Error('Paramter should be Array');
     }
     for(let i = arr.length-1;i>=0;i--){
         reverse.push(arr[i]);
     }
     return reverse;
 }
*/

/**
 * Time Complexity : O(n/2) _ Average Case
  * Space Complexity : O(1) - auxillary space
 * @param {Array} arr 
 */
/*
 function reverse(arr){
     let temp = 0;
     for(let i=0,j=arr.length-1; i<j;i++,j--){
         temp=arr[i];
         arr[i]=arr[j];
         arr[j]=temp;
     }
 }


 let arr = [];
 console.log(arr);
 reverse(arr);
 console.log(arr);


*/




 // more functional approch

 const reverse = (arr) => {
     return arr.map((element, index, callbackArr) => callbackArr[(callbackArr.length-1) - index]);
 }

 let arr = [1,2,3,5];
 console.log(arr);
 console.log(reverse(arr));
