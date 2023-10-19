export function isValidEmail(target: any, propertyKey: string) {
    let value: string;
  
    const getter = function () {
      return value;
    };
  
    const setter = function (newVal: string) {
      if (!newVal.includes("@")) {
        throw new Error("Niepoprawny adres email");
      }
      value = newVal;
    };
  
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  }
 export function required(target: object, name: string) {
    Object.defineProperty(target, name, {
    get: function () { return this[`__${name}`]; },
    set: function (value?: string) {
    if (value === null || value === undefined || value.length === 0)
    throw new Error(`${name} nie może być puste`);
    this[`__${name}`] = value;
    }
    })
    }
  
export function notEmpty(message: string = "To pole nie może być puste"): PropertyDecorator {
    return (target: Object, propertyKey: string | symbol) => {
      const key = propertyKey.toString();
  
      let value: string;
  
      const getter = function () {
        return value;
      };
  
      const setter = function (newValue: string) {
        if (!newValue || !newValue.trim()) {
          throw new Error(message);
        }
        value = newValue;
      };
  
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
      });
    };
  }