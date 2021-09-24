var Counstructor = function(name) {
    this.name = name;
}
Counstructor.prototype.method1   = function() {};
Counstructor.prototype.property1 =  'Constructor Prototype Property';

var instance = new Counstructor('Instance');
console.dir(Counstructor);
console.dir(instance);