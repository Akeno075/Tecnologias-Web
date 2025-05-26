(()=>{
class MyClass {
  private _myProperty: string = '';

  // Getter method
  get myProperty(): string {
    return this._myProperty;
  }

  // Setter method
  set myProperty(value: string) {
    this._myProperty = value;
  }
}

const instance = new MyClass();
instance.myProperty = 'Hello'; // Setter is called
console.log(instance.myProperty); // Getter is called: Output: Hello
});