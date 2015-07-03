### Arrays

#### First

* Underscore
  ```javascript
  _.first([5, 4, 3, 2, 1]);
  ```

* ES2015

  ```javascript
  const [n] = [5, 4, 3, 2, 1];
  ```

#### Iterate

* Underscore

  ```javascript
  _.each(array, iteratee)
  ```

* ES5.1

  ```javascript
  array.forEach(iteratee)
  ```

#### Map

*  Underscore

  ```javascript
  _.map(array, iteratee)
  ```

*  ES5.1

  ```javascript
  array.map(iteratee)
  ```

#### ReduceRight

*  Underscore

  ```javascript
  _.reduceRight(array, iteratee)
  ```

*  ES5.1

  ```javascript
  array.reduceRight(iteratee)
  ```

#### Every

*  Underscore

  ```javascript
  _.every(array, predicate)
  ```

*  ES5.1

  ```javascript
  array.every(predicate)
  ```

#### Some

*  Underscore

  ```javascript
  _.some(array, predicate)
  ```

*  ES5.1

  ```javascript
  array.some(predicate)
  ```

#### Find

* Underscore

  ```javascript
  _.find(array, predicate)
  ```

* ES2015

  ```javascript
  array.find(predicate)
  ```

#### Get a property from each element in an array

* Underscore

  ```javascript
  _.pluck(array, propertyName)
  ```

* ES2015

  ```javascript
  array.map(value => value[propertyName])
  ```

#### Check if array includes an element

* Underscore

  ```javascript
  _.contains(array, element)
  ```

* ES2016

  ```javascript
  array.includes(element)
  ```

#### Convert an array-like object to array

* Underscore

  ```javascript
  _.toArray(arguments)
  ```

* ES2015

  ```javascript
  Array.from(arguments)
  ```

#### Create a copy of an array with all falsy values removed.

* Underscore

  ```javascript
  _.compact(array)
  ```

* ES2015

  ```javascript
  array.filter(x => !!x)
  ```

#### Create a copy of an array with duplicates removed

* Underscore

  ```javascript
  _.uniq(array)
  ```

* ES2015

  ```javascript
  [...new Set(array)]
  ```

#### Find the index of a value in an array

* Underscore

  ```javascript
  _.indexOf(array, value)
  ```

* ES5.1

  ```javascript
  array.indexOf(value)
  ```

#### Find the index in an array by predicate

* Underscore

  ```javascript
  _.findIndex([4, 6, 7, 12], isPrime);
  ```

* ES2015

  ```javascript
  [4, 6, 7, 12].findIndex(isPrime);
  ```

#### Create an array with n numbers, starting from x

* Underscore

  ```javascript
  _.range(x, x + n)
  ```

* ES2015

  ```javascript
  Array.from({ length: n }, (v, k) => k + x)
  ```

### Objects

#### Names of own enumerable properties

* Underscore

  ```javascript
  _.keys(object)
  ```

* ES5.1

  ```javascript
  Object.keys(object)
  ```

#### Size

* Underscore

  ```javascript
  _.size(object)
  ```

* ES5.1

  ```javascript
  Object.keys(object).length
  ```

#### Names of all enumerable properties

* Underscore

  ```javascript
  _.allKeys(object)
  ```

* ES2015

  ```javascript
  Reflect.enumerate(object)  // Returns an Iterator
  ```

#### Values

* Underscore

  ```javascript
  _.values(object)
  ```

* ES5.1

  ```javascript
  Object.keys(object).map(key => object[key])
  ```

#### Create a new object with the given prototype

* Underscore

  ```javascript
  _.create(proto, propertiesObject)
  ```

* ES5.1

  ```javascript
  Object.create(proto, propertiesObject)
  ```

#### Create a new object from merged properties

* Underscore

  ```javascript
  _.extend({}, source, { a: false })
  ```

* ES2015

  ```javascript
  Object.assign({}, source, { a: false });
  ```

* ES2016

  ```javascript
  { ...source, a: false }
  ```

#### Create a shallow clone of an object

* Underscore

  ```javascript
  _.clone(object)
  ```

* ES2016

  ```javascript
  { ...object }
  ```

#### Check if an object is an array

* Underscore

  ```javascript
  _.isArray(object)
  ```

* ES5.1

  ```javascript
  Array.isArray(object)
  ```

#### Check if an object is a finite Number

* Underscore

  ```javascript
  _.isFinite(object)
  ```

* ES2015

  ```javascript
  Number.isFinite(object)
  ```

### Functions

#### Bind a function to an object

* Underscore

  ```javascript
  foo(function () {
    this.bar();
  }.bind(this));

  foo(_.bind(object.fun, object));
  ```

* ES2015

  ```javascript
  foo(() => {
    this.bar();
  });

  foo(object.fun.bind(object));
  ```

* ES2016

  ```javascript
  foo(() => {
    this.bar();
  });

  foo(::object.fun);
  ```

### Utility

#### Identity function

* Underscore

  ```javascript
  _.identity
  ```

* ES2015

  ```javascript
  value => value
  ```

#### A function that returns a value

* Underscore

  ```javascript
  const fun = _.constant(value);
  ```

* ES2015

  ```javascript
  const fun = () => value;
  ```

#### The empty function

* Underscore

  ```javascript
  _.noop
  ```

* ES2015

  ```javascript
  () => {}
  ```

#### Now

* Underscore

  ```javascript
  _.now()
  ```

* ES5.1

  ```javascript
  Date.now()
  ```

#### Template

* Underscore

  ```javascript
  _.template("hello: <%= name %>");
  compiled({name: 'moe'});
  ```

* ES2015

  ```javascript
  const name = 'moe';
  `hello ${name}`
  ```
