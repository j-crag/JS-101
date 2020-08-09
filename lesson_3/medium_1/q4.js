// Alyssa was asked to write an implementation of a rolling buffer.
// You can add and remove elements from a rolling buffer.
// However, once the buffer becomes full, any new elements will displace
// the oldest elements in the buffer.

const { of } = require('cli-table');

// She wrote two implementations of the code for adding elements to the buffer.
// In presenting the code to her team leader, she said "Take your pick. Do you prefer push()
// or concat() for modifying the buffer?".

// Is there a difference between these implementations,
// other than the method she used to add an element to the buffer?

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// Yes, there is a difference. In the second implementation, Alyssa assumes that .concat() modifys its
// caller in place, but it doesn't. It returns a new copy of the concatenated elements. So, maxBufferSize
// will always compare to the length of the original buffer, and the oldest element will not be removed.
// The following code corrects the second implementation:

// second implementation.

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  let newBuffer = buffer.concat(newElement);
  if (newBuffer.length > maxBufferSize) {
    newBuffer.shift();
  }
  return newBuffer;
}

console.log(addToRollingBuffer1([1, 2, 3], 3, 'jeff'));
console.log(addToRollingBuffer2([1, 2, 3], 3, 'jeff'));
