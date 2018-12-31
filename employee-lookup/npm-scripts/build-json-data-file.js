/**
 * `npm run build-json-data-file` to execute this script.
 *  Converts csv data file to json.
 */

const fs = require('fs')
const csvparse = require('csv-parse')
const path = require('path')

const inputfp = path.join('public', 'data', 'directory.csv')
const parser = csvparse({
    columns: ['lname','fname','location','email','phone1','phone2']
})
const output = []
let count = 1

const ws = fs.createWriteStream(path.join('public', 'data', 'directory.json'))

parser.on('readable', function(){
  let record
  while(record = parser.read()) {
    record.id = String(count)
    output.push(record)
    count++
  }
})

parser.on('error', function(err){
  console.log(err.message)
})

parser.on('end', function(){
  ws.write(JSON.stringify(output))
  ws.end();
})

ws.on('finish', function(){
  console.log('file has been written.')
})

fs.createReadStream(inputfp).pipe(parser);
