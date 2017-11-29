# 1. Overview of JavaScript

JavaScript was initially created by a team at Netscape in 1996 with the goal of bringing interactivity to the web via a scripting language. According to Brendan Eich (the creator of JavaScript), up to this point the web was "static, text-heavy, with at best images in tables or floating on the right or left"[^2]. 

When Brendan was initially recruited by Netscape he was recruited with the aim of implementing Scheme, a dialect of Lisp that supports first-class functions [^17], in the browser however by this time Sun and Netscape were negotiating to bring Java to Netscape Navigator[^16]. An internal debate occurred about the need for two languages but Eich and other influential developers at both Sun and Netscape believed that the two languages would serve different audiences. 'Professional' developers would veer towards Java for building logic heavy components and designers and amateurs would use the scripting language as a "glue" for joining together components[^2].

Despite targeting a different audience Mocha, the language that would later evolve into JavaScript, was required by management to "look like Java", according to Eich, ruling out the existing languages Perl, Python, and Scheme. Eventually Eich settled on "Scheme-ish first-class functions and Self-ish (albeit singular) prototypes as the main ingredients" [^16] . Mocha also inherited a number of confusing Java language features such as the distinction between primitives and objects (e.g. `string` vs. `String` ) and the `Date` constructor which is a port of Java's `java.util.Date`, complete with the Y2K bug [^19]. Perl and Python are also credited to influencing Mocha's string handling and regular expressions and AWK inspired the use of the `function` keyword [^18]. The first version of the language had an incredibly short development period, Eich claims he spent "about ten days" developing the first JavaScript interpreter [^2].

After JavaScript (abandoning its previous names, Mocha and LiveScript) was released in Netscape Navigator 2 Microsoft began work on JScript, an equivalent language which shipped with Internet Explorer 3. Eich says that "At some point in late summer or early fall 1996, it became clear to me that JS was going to be standardized. Bill Gates was bitching about us changing JS all the time."[^20], which lead to JavaScript being standardised by Ecma International, an industry group that produces information standards, as ECMAScript in 1997. ECMAScript is also an ISO/IEC standard (16262)[^21].

A key moment in JavaScript's history occurred in when web developers became fascinated with Ajax, a set of techniques and technologies for making interactive websites, popularised by Google Suggest and Google Maps, spurring on an advancement in interactivity of modern websites [^22]. To alleviate the pain of manipulating the Document Object Model (DOM), the hierarchy of objects that make up a HTML web page, and to deal with the problem that  'writing JavaScript should be fun' jQuery was released in 2006[^23] and commanded immediate popularity. In 2007, large tech companies including Digg, Google, Intel, Amazon, and the BBC all reported using jQuery [^23] and in the 12 months between Sept 2007 and 2008 jquery.com received 13.5 million unique visitors[^24]. As early as 2006 it's clear that although JavaScript is a powerful and popular language, in part due to it's low barrier of entry and its unique place as the default language of the web, there are frustrations with the difficulty in reasoning about and writing JavaScript.

Google Chrome launched in 2008, with a new open source JavaScript engine named V8. When it launched V8 initially outperformed other browsers JavaScript engines on benchmarks[^25] in part due to its hidden classes, which reduces the cost of looking up properties on objects that share prototypes via inline caching, its use of a just-in time compiler (JIT) to produce assembly code rather than running an interpreter, as well as its efficient memory management [^26][^27]. The launch of the V8 engine created a so called 'browser war' during which the performance of JavaScript vastly increased across all browsers [^28].

In 2009, Node.js was launched - a JavaScript runtime based on V8 used to build asynchronous applications, popularising JavaScript as a language outside of the browser. Node.js was quickly adopted, with production applications at companies such as Uber and LinkedIn rolling out by 2011[^29][^30]. 

Due in part to popularity of Node, JavaScript is now one of the most popular languages for software development[^4][^5] with npm, Node's package manager, hosting over 475,000 packages[^31].

# 1.1 JavaScript Design

Despite its popularity, writing correct JavaScript code remains a relatively difficult problem. Due largely to its dynamic type system, its tendency to silently fail, and a number of quirks inherited from early versions of the language as a result of its short development cycle. Additionally, there are a number of inconsistencies in the EMCAScript standard itself which cause interpreter implementations to differ in the approach leading to unspecified behaviours. [^10] Below I'll briefly outline the semantics of JavaScript and the different approaches taken to analysing JavaScript code.

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
| Object    | Represents a collection of properties, each of which has a name and a value, as well as optionally a setter and/or getter function used to manipulate the value. To a first approximation, Objects can be thought of as a hash map. |

JavaScript has six types that variables can be [^8] but the types of variables are not explicitly declared at compile time. Instead, types are dynamic and can change over the course of a program. Consider the program below.

```javascript
var foo = '1';
foo = foo * 2
foo
> 2
```

Initially `foo` is of type string but the type is implicitly coerced into a number by the `*` operator. Coercion between types occurs when the type of an operand is not the type the operator is expecting. For instance, as shown in the example above the `*` operator coerces all operands to numbers. This coercion is a source of error in programs as inputs of an invalid type can be coerced in unexpected ways.

Consider the contrived example below where the input to a function expecting an integer is instead a string. In this case the `+` operator coerces a number to a string resulting in a concatenation rather than an addition.

```javascript
function increment (x) {
  return x + 1
}

var a = '1'
var b = increment(y)
b
> 11
```

Although the previous examples have used strings and numbers, type coercion extends to booleans as well. Non-boolean expressions are coerced with the following rules `undefined`, `null`, `false`, the empty string, `NaN`, `+0`, and `-0` return false while `true`, all other numbers, all other strings, and all Objects return true [^8]. These coercion rules allow shortcuts like `if (x)` to check for both undefined and null values.

## Objects and Prototypical Inheritance

Typical object-oriented languages define classes which guarantee the exact sets of fields and methods an instance of the class will possess.[^9] JavaScript instead uses prototypical inheritance, in which classes act as a constructor functions act as a template or prototype which initially define the sets of fields an object should have but can later be replaced or added to. A prototype may itself have a prototype, the sequence of prototypes which define the properties of a given object are referred to as a prototype chain. [^8]

## Arrays

Unlike other languages JavaScript does not model arrays as continuously indexed tuples, instead arrays are special form of object where array elements are properties that satisfy the following test for a key `k`, `ToString(ToUint32(k)) === k && ToUint32(k) !== 2^32 - 1`. Consequently, arrays are neither necessarily homogenous or contiguous, `let array = ['a', 2.0, {}, new ClassA()]` and `let array = [, , , 4]` are all valid arrays [^8].

The length of an array can be accessed as a property of the array. The length property only tracks the highest index in the array and a result will include holes. The length property is not read-only, increasing the length will add empty elements to the end of the array and decreasing the length will truncate the array to satisfy the new length. Arrays are indexed using square bracket notation and can be indexed multidimensionally, for instance `a[1][0]`[^8] . Array indices _i_  that do not meet the criteria of being in the range 0 ≤ _i_ < 2^232^−1 are treated as regular object properties, leading to the confusing situation outlined below.

```javascript
var arr = []
arr[0] = 'foo' // array element
arr.length
> 1
arr[4294967296] = 'bar' // 2^32-1, property not an element
arr[-1] = 'baz' // property not an element
arr.length
> 1
arr[4294967296]
> 'bar'
arr[-1]
> 'baz'
```

### Prototype Methods

One of the distinguishing features of arrays from regular objects is the large number of array specific prototype functions [^8]. Below are some of the more commonly used and interesting functions.

*        `indexOf(element)` returns the first index of the array that contains *element* or returns -1 if `element` is not in the array


*        `lastIndexOf(element) ` returns the last index of the array that contains element or returns -1 if element is not in the array


*        `slice(begin, end)`, `slice(begin)` returns a copy of the array with the elements from the index `begin` up to the `end` index. If `end` is not provided it will slice from `begin` to the end of the array.


*        `push(element) `increases the length of the array by one and adds *element * to the end of the array
*        `pop()` removes the last element in the array and returns it

  * `unShift(elementA, elementB, ...) ` adds one or more elements to the beginning of an array and returns the new length


* 	`includes(element)`, `includes(element, startIndex)` returns true if the array contains element either starting from `startIndex` or the start of the array if no` startIndex` is provided
  * `reverse()` reverses the array in place and returns a reference to the array
  * `forEach(func) `calls `func` on each element in the array. Calls `func` with `(value, index, array)`
  * `filter(func)` returns a new array that contains elements that return true when `func` is called on them. `func` is called with `currentElement`
  * `map(func)` returns a new array with the results of calling func on each element in the array. func is called with (value, index, array)
  * `reduce(func)` `reduce(func, initialValue)` Calls `func(accumulator, value, index, array)` on every element in the array and returns the value of accumulator. If `initialValue` is provided then the first time `func` is called then `accumulator` is set to the value of `initialValue`. 


* 	`some(func)` Calls `func(element, index, array)` for every element in the array. Returns true if `func` returns true for at least one element in the array.


* 	`every(func)` Calls` func(element, index, array)` for every element in the array. Returns true if `func` returns true for all elements in the array. 

# Correctness of JavaScript 

_Flow and EsLint enforce the use of the subset of the language and constrain the developer_

_Approaches to understand the semantics of the language are incomplete or difficult to use_

_Talk about dynamic types, how this makes reasoning about JS as a language hard (reasoning about invariants when you don't know the type and having to handle type coercion)_

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