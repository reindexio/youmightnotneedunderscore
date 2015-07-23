### Arrays

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

* Underscore

  ```javascript
  _.map(array, iteratee)
  ```

* ES5.1

  ```javascript
  array.map(iteratee)
  ```

#### Use a function to accumulate a single value from an array (left-to-right)

* Underscore

  ```javascript
  _.reduce(array, iteratee, memo)
  ```

* ES5.1

  ```javascript
  array.reduce(iteratee, memo)
  ```


#### Use a function to accumulate a single value from an array (right-to-left)

* Underscore

  ```javascript
  _.reduceRight(array, iteratee, memo)
  ```

* ES5.1

  ```javascript
  array.reduceRight(iteratee, memo)
  ```

#### Test whether all elements in an array pass a predicate

* Underscore

  ```javascript
  _.every(array, predicate)
  ```

* ES5.1

  ```javascript
  array.every(predicate)
  ```

#### Test whether some element in an array passes a predicate

* Underscore

  ```javascript
  _.some(array, predicate)
  ```

* ES5.1

  ```javascript
  array.some(predicate)
  ```

#### Find a value in an array

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
  _.includes(array, element)
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
  [...arguments]
  ```

#### Create a copy of an array with all falsy values removed

* Underscore

  ```javascript
  _.compact(array)
  ```

* ES5.1

  ```javascript
  array.filter(Boolean)
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
  Array.from(Array(n), (v, k) => k + x)
  ```

### Objects

#### Names of own enumerable properties as an array

* Underscore

  ```javascript
  _.keys(object)
  ```

* ES5.1

  ```javascript
  Object.keys(object)
  ```

#### Number of keys in an object

* Underscore

  ```javascript
  _.size(object)
  ```

* ES5.1

  ```javascript
  Object.keys(object).length
  ```

#### Names of all enumerable properties as an array

* Underscore

  ```javascript
  _.allKeys(object)
  ```

* ES2015

  ```javascript
  [...Reflect.enumerate(object)]
  ```

#### Values

* Underscore

  ```javascript
  _.values(object)
  ```

* ES2015

  ```javascript
  Object.keys(object).map(key => object[key])
  ```

#### Create a new object with the given prototype and properties

* Underscore

  ```javascript
  _.create(proto, properties)
  ```

* ES2015

  ```javascript
  Object.assign(Object.create(proto), properties)
  ```

#### Create a new object from merged own properties

* Underscore

  ```javascript
  _.assign({}, source, { a: false })
  ```

* ES2015

  ```javascript
  Object.assign({}, source, { a: false })
  ```

* ES2016

  ```javascript
  { ...source, a: false }
  ```

#### Create a shallow clone of own properties of an object

* Underscore

  ```javascript
  _.extendOwn({}, object)
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
  _.isNumber(object) && _.isFinite(object)
  ```

* ES2015

  ```javascript
  Number.isFinite(object)
  ```

### Functions

#### Bind a function to an object

* Underscore

  ```javascript
  foo(_.bind(function () {
    this.bar();
  }, this));

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
  var FUN = _.constant(value);
  ```

* ES2015

  ```javascript
  const FUN = () => value;
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

#### Get the current time in milliseconds since the epoch

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
  var greeting = _.template("hello <%= name %>");
  greeting({ name: 'moe' });
  ```

* ES2015

  ```javascript
  const greeting = ({ name }) => `hello ${name}`;
  greeting({ name: 'moe' });
  ```
