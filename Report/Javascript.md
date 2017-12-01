# 1. Overview of JavaScript

JavaScript was initially created by a team at Netscape in 1996 with the goal of bringing interactivity to the web via a scripting language. According to Brendan Eich (the creator of JavaScript), up to this point the web was "static, text-heavy, with at best images in tables or floating on the right or left"[^2]. 

When Brendan was initially recruited by Netscape he was recruited with the aim of implementing Scheme, a dialect of Lisp that supports first-class functions [^17], in the browser however by this time Sun and Netscape were negotiating to bring Java to Netscape Navigator[^16]. An internal debate occurred about the need for two languages but Eich and other influential developers at both Sun and Netscape believed that the two languages would serve different audiences. 'Professional' developers would veer towards Java for building logic heavy components and designers and amateurs would use the scripting language as a "glue" for joining together components[^2].

Despite targeting a different audience Mocha, the language that would later evolve into JavaScript, was required by management to "look like Java", according to Eich, ruling out the existing languages Perl, Python, and Scheme. Eventually Eich settled on "Scheme-ish first-class functions and Self-ish (albeit singular) prototypes as the main ingredients" [^16]. Mocha also inherited a number of confusing Java language features such as the distinction between primitives and objects (e.g. `string` vs. `String` ) and the `Date` constructor which is a port of Java's `java.util.Date`, complete with the Y2K bug [^19]. Perl and Python are also credited to influencing Mocha's string handling and regular expressions and AWK inspired the use of the `function` keyword [^18]. The first version of the language had an incredibly short development period, Eich claims he spent "about ten days" developing the first JavaScript interpreter[^2].

After JavaScript (abandoning its previous names, Mocha and LiveScript) was released in Netscape Navigator 2 Microsoft began work on JScript, an equivalent language which shipped with Internet Explorer 3. Eich says that "At some point in late summer or early fall 1996, it became clear to me that JS was going to be standardized. Bill Gates was bitching about us changing JS all the time."[^20], which lead to JavaScript being standardised by Ecma International, an industry group that produces information standards, as ECMAScript in 1997. Since 1997 ECMAScript, now in its sixth version, has also been adopted as an ISO/IEC standard[^21].

A key moment in JavaScript's history occurred in when web developers became fascinated with Ajax, a set of techniques and technologies for making interactive websites, popularised by Google Suggest and Google Maps, spurring on an advancement in interactivity of modern websites [^22]. To alleviate the pain of manipulating the Document Object Model (DOM), the hierarchy of objects that make up a HTML web page, and to deal with the problem that  'writing JavaScript should be fun' jQuery was released in 2006[^23] and commanded immediate popularity. In 2007, large tech companies including Digg, Google, Intel, Amazon, and the BBC all reported using jQuery [^23] and in the 12 months between Sept 2007 and 2008 jquery.com received 13.5 million unique visitors[^24]. As early as 2006 it's clear that although JavaScript is a powerful and popular language, in part due to it's low barrier of entry and its unique place as the default language of the web, there are frustrations with the difficulty in reasoning about and writing JavaScript.

Google Chrome launched in 2008, with a new open source JavaScript engine named V8. When it launched V8 initially outperformed other browsers JavaScript engines on benchmarks[^25] in part due to its hidden classes, which reduces the cost of looking up properties on objects that share prototypes via inline caching, its use of a just-in time compiler (JIT) to produce assembly code rather than running an interpreter, as well as its efficient memory management [^26][^27]. The launch of the V8 engine created a so called 'browser war' during which the performance of JavaScript vastly increased across all browsers [^28].

In 2009, Node.js was launched - a JavaScript runtime based on V8 used to build asynchronous applications, popularising JavaScript as a language outside of the browser. Node.js was quickly adopted, with production applications at companies such as Uber and LinkedIn rolling out by 2011[^29][^30]. 

Due in part to popularity of Node, JavaScript is now one of the most popular languages for software development[^4][^5] with npm, Node's package manager, hosting over 475,000 packages[^31].

# 1.1 JavaScript Design

Despite its popularity, writing correct JavaScript code remains a relatively difficult problem due largely to its dynamic type system, its tendency to silently fail, and a number of quirks inherited from early versions of the language as a result of its short development cycle. Additionally, there are a number of inconsistencies in the EMCAScript standard itself which cause interpreter implementations to differ in their approach leading to unspecified behaviours. [^10] Below I'll briefly outline the semantics of JavaScript, including arrays which are the focus of this project, and the different approaches taken to analysing JavaScript code to ensure correctness.

_The design of the language is incomplete - heck there aren't even a full set of semantics. It's inconsistent and dynamic. Not only is it a scripting language it's a got additional baggage, strict mode, non-homogenous arrays, etc._ 

_Equality_

_Non-deterministic_

_Runtime field lookup_

## 1.1.1 Type System

| Type      | Details                                  |
| --------- | ---------------------------------------- |
| Undefined | The type of variables before they are assigned a value. |
| Null      | The type of the assignable singleton value `null` |
| Boolean   | A standard representation of true and false |
| String    | An ordered sequence of zero or more 16-bit unsigned integers, these are intended to represent UTF-16 characters but are not required to be |
| Number    | Represents the IEE 754 double precision numbers in the range 2 ^-253^ to 2 ^253^ as well as the special cases NaN, $\infty$ , and $ -\infty$. JavaScript's implementation of numbers includes both a positive and negative 0. Whilst most languages have multiple representations of numbers (typically split into integers and floating point numbers) all JavaScript numbers are floating point |
| Object    | Represents a collection of properties, each of which has a name and a value, as well as optionally a setter and/or getter function used to manipulate the value. To a first approximation, Objects can be thought of as a hash map |

JavaScript has six types that variables can be [^8] but the types of variables are not explicitly declared at compile time. Instead, types are dynamic and can change over the course of a program. Consider the program below.

```javascript
let foo = '1';
foo = foo * 2
foo
< 2
```

Initially `foo` is of type string but the type is implicitly coerced into a number by the `*` operator. Coercion between types occurs when the type of an operand is not the type the operator is expecting. For instance, as shown in the example above the `*` operator coerces all operands to numbers. This coercion is a source of error in programs as inputs of an invalid type can be coerced in unexpected ways.

Consider the contrived example below where the input to a function expecting an integer is instead a string. In this case the `+` operator coerces a number to a string resulting in a concatenation rather than an addition.

```javascript
function increment (x) {
  return x + 1
}

let a = '1'
let b = increment(y)
b
< 11
```

Although the previous examples have used strings and numbers, type coercion extends to booleans as well. Non-boolean expressions are coerced with the following rules `undefined`, `null`, `false`, the empty string, `NaN`, `+0`, and `-0` return false while `true`, all other numbers, all other strings, and all Objects return true [^8]. These coercion rules, whilst a common source of error, can be taken advantage of to allow shortcuts like `if (x)` to check for both undefined and null values.

JavaScript also has some idiosyncrasies for testing equality which are underpinned by its type system. There are two operators for testing equality, `==` and `===`.  The `==` operator, the 'standard' equality operator, uses coercion to test the equality of values of differing types. However the standard equality operator doesn't necessarily use the same coercion rules as other operators. For instance, whilst boolean coercion would typically any non-zero and non-NaN number to true  `5 == true` is false. This inconsistency also extends to strings, typically all non-empty strings would coerce to true but `'3' == 1` is false. Additionally, if you compare an object to any other type standard equality converts the object to a primitive which can lead to some unexpected results such as `['7'] == 7`  being true. The strict operator, `===`, by comparison has much saner behaviour - any two values not of the same type are not equal.

## 1.1.2 Objects and Prototypical Inheritance

Typical object-oriented languages define classes which guarantee the exact sets of fields and methods an instance of the class will possess. Instances of the class can be thought of as clones or replicas of the class which mimic the class' behaviour. JavaScript instead uses prototypical inheritance, in which objects have a template or prototype which define a set of properties an object has, but objects are also free to declare their own set of properties and even overwrite their prototype's properties. 

Consider the example below, in which we create a prototype, define a new object of that prototype, and then overwrite one of the values of the prototype.

```javascript
// This is a constructor, color and weight will be values that belong the constructed object
function Fruit (color, weight) {
  this.color = color
  this.weight = weight
}

// This is the set of values all fruit will inherit from the prototype
Fruit.prototype = {
  print: function () {
    console.log(`Color: ${this.color} Weight: ${this.weight}`)
  }
}

var orange = new Fruit('orange', 100)
orange instanceof Fruit // orange.prototype === Fruit.prototype
< true
orange.print()
< Color: orange Weight: 100

// hasOwnProperty checks whether a property belongs to the object or to its prototype
orange.hasOwnProperty('color') 
< true
orange.hasOwnProperty('print') // print is inherited from orange.prototype
< false
orange.print = () => console.log('A Orange')
orange.print()
< A Orange
orange.hasOwnProperty('print') // print is now defined in orange as well
< true
```

 A prototype may itself have a prototype, the sequence of prototypes which define the properties of a given object are referred to as a prototype chain[^8][^9].  By default, all created objects inherit from `Object.prototype` and functions, as a special class of object, inherit from `Function.prototype` which inherits from `Object.prototype`. These prototypes are part of the EMCAScript standard and provide utilities to make working with objects of that prototype easier. For example, `Object.prototype` provides functions for iterating over all the values of an object or all the keys in the object.

Consider the prototype chain of the example below.

````javascript
function Food (calories, portions) {
  this.calories = calories
  this.portionsPerDay = portions
}

Food.prototype = {
	caloriesPerDay: function () {
		return this.calories * this.portionsPerDay
	}
}

function Fruit (color, weight, calories, portions) {
  Food.call(this, calories, portions) // Call the food constructor
  this.color = color
  this.weight = weight
}

// The prototype of Fruit is Food, but we want to use the Fruit constructor
Fruit.prototype = Object.create(Food.prototype);
Fruit.prototype.constructor = Fruit;

// Let's add our print function to the Fruit prototype
Fruit.prototype.print = function () {
  console.log(`Color: ${this.color} Weight: ${this.weight}`)
}

let orange = new Fruit('orange', 100, 47, 5)
orange.print()
< Color: orange Weight: 100
orange.caloriesPerDay()
< 235
orange instanceof Fruit
< true
orange instanceof Food
< true
orange instanceof Object
< true
````

In the example above we have a prototype chain length of three. Our `orange` object has a prototype of `Fruit`, which has a prototype of `Food`, which has a prototype of `Object` .

![Prototype Chain](C:\Users\arran\Documents\Github\FullUnit_1718_ArranFrance\Report\prototypechain.svg)

## 1.1.3 Arrays

Unlike other languages, JavaScript does not model arrays as continuously indexed tuples. Instead arrays are  a special form of object where array elements are properties that satisfy the following test for a key `k`, `ToString(ToUint32(k)) === k && ToUint32(k) !== 2^32 - 1`. Put more simply, an array is a special case of an object where the array elements are any value where the property can be coerced to a a positive integer number less than 2^32^ - 1. These array elements are treated differently to regular properties by array prototypes and the length property. 

The length of an array is a property of the array prototype which tracks the highest index in the array. Note, that the highest index of the array does not necessarily track the number of elements in the array as arrays do not enforce any kind of ordering on their properties making it possible to create a non-contiguous array, an array with 'holes' in it, as shown in the example below. The length product is not read-only as you might expect. If you increase the, the length empty elements will be added to the end of the array and decreasing the length will truncate the array to satisfy the new length.

```javascript
let arr = [] // an empty array
arr[0] = 0
arr[2] = 2
arr
< [0, , 2]
arr.length 
< 3
```

Another by-product of arrays being special form of object is that arrays are not homogenously typed. Whilst most languages require arrays to only hold values of a single type, JavaScript objects and by extension arrays can contain multiple types of value as shown by the following example `let array = ['a', 2.0, {}, new Fruit()]` . 

As described to above, arrays can have both properties and array elements. If the property fails the array element test described above, then the value is stored as a regular object value. This can lead to subtle bugs when working with numbers if bounds are not checked as values smaller than 0 and greater than 2^32^ - 1 will not be stored as an array element, as demonstrated below.

```javascript
let arr = []
arr[0] = 'foo' // array element
arr.length
> 1
arr[4294967296] = 'bar' // 4294967296 === 2^32-1, property not an element
arr[-1] = 'baz' // -1 < 0, property not an element
arr.length
> 1
arr[4294967296]
> 'bar'
arr[-1]
> 'baz'
```

### Prototype Methods

The array prototype has a large number of helper functions that are frequently taken advantage of by developers, a number of which were added in the latest version of the EMCAScript standard [^8]. Below are some of the more commonly used and interesting functions.

| Function Name | Signature                           | Description                              |
| ------------- | :---------------------------------- | ---------------------------------------- |
| indexOf       | `indexOf(element)`                  | Returns the first index of the array that contains `element` or  -1 if `element` is not in the array |
| lastIndexOf   | `lastIndexOf(element) `             | Returns the last index of the array that contains `element` or -1 if element is not in the array |
| slice         | `slice(begin, end)`                 | Returns a copy of the array with the elements from the index `begin` up to the `end` index. If `end` is not provided it will slice from `begin` to the last element of the array |
| push          | `push(element) `                    | Increases the length of the array by one and adds `element` to the end of the array |
| pop           | `pop()`                             | Removes the last element in the array and returns it |
| unShift       | `unShift(elementA, elementB, ...) ` | Adds one or more elements to the beginning of an array and returns the new length |
| includes      | `includes(element, startIndex)`     | Returns true if the array contains element either starting from `startIndex` or the start of the array if no` startIndex` is provided |
| reverse       | `reverse()`                         | Reverses the array in place and returns a reference to the array |
| forEach       | `forEach(func) `                    | Calls `func` on each element in the array. Calls `func` with `(value, index, array)` |
| filter        | `filter(func)`                      | Returns a new array that contains elements that return true when `func` is called on them. `func` is called with `currentElement` |
| map           | `map(func)`                         | Returns a new array with the results of calling `func` on each element in the array. `func` is called with `(value, index, array)` |
| reduce        | `reduce(func, initialValue)`        | Calls `func(accumulator, value, index, array)` on every element in the array and returns the value of accumulator. If `initialValue` is provided then the first time `func` is called then `accumulator` is set to the value of `initialValue` |
| some          | `some(func)`                        | Calls `func(element, index, array)` for every element in the array. Returns true if `func` returns true for at least one element in the array |
| every         | `every(func)`                       | Calls ` func(element, index, array)` for every element in the array. Returns true if `func` returns true for all elements in the array |

# 1.2 Ensuring the Correctness of JavaScript 

As described in 1.1, assuring the correctness of JavaScript code is an unsolved problem - in part due to the fact JavaScript is a dynamically typed scripting language but also due to legacy design decisions. Efforts have been made to make the language itself safer to use, ECMAScript 5 introduced a strict mode (later made the default mode in ECMAScript 6) which restricts the use of certain language features and also defines additional circumstances that exceptions should be thrown in but there are still many errors that can occur even within the safer subset of JavaScript.

Tools like Eslint and Flow are commonly used by developers to statically analyse code and identify bugs but are limited in their scope. Eslint uses a narrow set of rules to identify possibly dangerous behaviour and Flow is constrained to reasoning about types and in some cases requires additional annotating of code to allow Flow to identify possible errors. These limited set of warnings don't fully reflect the dynamic nature of JavaScript and the subtle interactions that can occur.

Although there have been a number of attempts to produce a formal semantics for JavaScript, to allow for a more complete analysis

Generally, I believe that static analysis is insufficiently capable of 

_Approaches to understand the semantics of the language are incomplete or difficult to use_

_Talk about dynamic types, how this makes reasoning about JS as a language hard (reasoning about invariants when you don't know the type and having to handle type coercion)_ 

_Typescript_

JavaScript is an ideal candidate for symbolic execution due to the difficult nature of analysing JavaScript statically. It’s runtime dynamic typing and environment specific interactions make it hard to reason precisely about JavaScript outside of execution[^15].  Symbolic execution allows us to reason about the behaviour of a program in a more concrete fashion.

ExpoSE is a tool for symbolic execution of JavaScript. The target program is instrumented with Jalangi2, a tool that provides hooks before and after each statement is executed, which is used to build a symbolic representation of the program in Z3. Whenever program execution forks, for instance at an if statement, the negation of the current conditions of the current execution path are used to explore the next path, ensuring that all feasible paths are explored.

[^1]: 
[^2]: https://www.computerworld.com.au/article/255293/a-z_programming_languages_javascript/
[^3]: 
[^4]: https://insights.stackoverflow.com/survey/2017#most-popular-technologies
[^5]: https://www.tiobe.com/tiobe-index/
[^6]: Gardner, P. A., Maffeis, S., & Smith, G. D. (2012). Towards a program logic for JavaScript. *ACM SIGPLAN Notices*, *47*(1), 31-44.
[^7]: 
[^8]: https://www.ecma-international.org/ecma-262/
[^9]: A. H. Borning. 1986. Classes versus prototypes in object-oriented languages. In *Proceedings of 1986 ACM Fall joint computer conference* (ACM '86). IEEE Computer Society Press, Los Alamitos, CA, USA, 36-40.
[^10]: Park, D., Stefănescu, A., & Roşu, G. (2015, June). KJS: A complete formal semantics of JavaScript. In *ACM SIGPLAN Notices* (Vol. 50, No. 6, pp. 346-356). ACM.
[^11]: 
[^12]: 
[^13]: 
[^14]: 
[^15]: Andreasen, E., Feldthaus, A., Jensen, S. H., Jensen, C. S., Jonsson, P. A., Madsen, M., & Møller, A. (2012). Improving Tools for JavaScript Programmers. In *Proc. of International Workshop on Scripts to Programs. Beijing, China:[sn]* (pp. 67-82).
[^16]: https://brendaneich.com/2008/04/popularity/
[^17]: Dybvig, R. K. (1996). *The SCHEME programming language: ANSI SCHEME*. Upper Saddle, NJ: Prentice-Hall.
[^18]: https://brendaneich.com/2010/07/a-brief-history-of-javascript/
[^19]: https://www.jwz.org/blog/2010/10/every-day-i-learn-something-new-and-stupid/#comment-1048
[^20]: https://brendaneich.com/2011/06/new-javascript-engine-module-owner/
[^21]: https://www.iso.org/standard/55755.html
[^22]: http://adaptivepath.org/ideas/ajax-new-approach-web-applications/
[^23]: https://www.slideshare.net/jeresig/history-of-jquery
[^24]: https://www.slideshare.net/jeresig/state-of-jquery-08-presentation/2-Growth_Huge_growth_in_2008
[^25]: https://web.archive.org/web/20080903125550/http://community.zdnet.co.uk/blog/0%2C1000000567%2C10009139o-2000331777b%2C00.htm
[^26]: https://www.youtube.com/watch?v=hWhMKalEicY
[^27]: https://www.youtube.com/watch?v=JxUvULKf6A4
[^28]: https://cdn.oreillystatic.com/en/assets/1/event/60/Know%20Your%20Engines_%20How%20to%20Make%20Your%20JavaScript%20Fast%20Presentation%201.pdf
[^29]: https://venturebeat.com/2011/08/16/linkedin-node/
[^30]: https://www.joyent.com/blog/node-js-office-hours-curtis-chambers-uber
[^31]: https://www.npmjs.com/