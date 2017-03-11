function foo() {
  quux = 5;
  var bar;
  function zip() {
  	bar = true;
  	var quux = 5;
  }
  return zip;
}