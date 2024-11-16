export default function consoleLog(value, title) {
  !title && console.log('-|_|'.repeat(10));
  title && console.log('-|_|'.repeat(10) + ' ' + title);
  console.log(value);
  return value;
}
