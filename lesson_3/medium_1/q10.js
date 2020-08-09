//Consider these two simple functions:

function foo(param = 'no') {
  return 'yes';
}

function bar(param = 'no') {
  return param === 'no' ? 'yes' : 'no';
}

//What will the following function invocation return?

console.log(bar(foo()));

// It returns 'no'.

// In function foo, the default parameter is set to 'no', but the function doesn't
// return the paramater, it returns 'yes'. So calling foo will always result in a return of 'yes'.
// Similarly, function bar has a default parameter set to 'no', and will set it's local param variable
// to 'no' in the case that an argument isn't passed to it. But in this case, bar is passed a
// funtion call to foo, which results with bar setting its local parameter to foo's return value of 'yes'.
// 'yes' === 'no' evaluates to false, so bar returns 'no'.
