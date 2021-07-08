// READING FILES ASYNCHRONOUSLY 

const {readFile, writeFile} = require('fs');

console.log('STEP 1: Start task');
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    // console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result)=>{
                if(err){
                    console.log(err);
                    return
                }
                console.log('STEP 2: Done with task');
            }
        )
    })
})
console.log('STEP 3: Starting next task');