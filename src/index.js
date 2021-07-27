module.exports = function reverse(n) {
   let test = Math.abs(n)
   const str = test.toString();
   let rev = [];
   for (let i = 0; i < str.length; i++) {
      rev[i] = str[(str.length - i - 1)];
   }
   return +(rev.join(""));
}