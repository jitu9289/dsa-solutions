/**
 * Two Sum
 * https://leetcode.com/problemset/?search=Two%20Sum
 * Category: Arrays & Hashing   |   Difficulty: —
 *
 * Write your solution below, then click "Visual Debug" to run it
 * step-by-step, or "Save to GitHub" to commit it under solutions/<category>/.
 */

function solve(arr,t) {
  // TODO: your code here
   const map =new Map();
        const ans=[];
        for(let i=0;i<arr.length;i++){
           if(map.has(t-arr[i])){
            ans.push(map.get(t-arr[i]))
            ans.push(i);
           }else{
            map.set(arr[i],i);
           }
        }
    return ans;
}

// Runs your solution so the debugger has something to step through.
// Edit the call / arguments to match your function signature.
console.log(solve([2,7,11,15],17));
