# 1. Overview of JavaScript

JavaScript was initially created by a team at Netscape in 1996 with the goal of bringing interactivity to the web via a scripting language. According to Brendan Eich (the creator of JavaScript), up to this point the web was "static, text-heavy, with at best images in tables or floating on the right or left"[^2]. 

When Brendan was initially recruited by Netscape he was recruited with the aim of implementing Scheme, a dialect of Lisp that supports first-class functions [^17], in the browser however by this time Sun and Netscape were negotiating to bring Java to Netscape Navigator[^16]. An internal debate occurred about the need for two languages but Eich and other influential developers at both Sun and Netscape believed that the two languages would serve different audiences. 'Professional' developers would veer towards Java for building logic heavy components and designers and amateurs would use the scripting language as a "glue" for joining together components[^2][^6].

Despite targeting a different audience Mocha, the language that would later evolve into JavaScript, was required by management to "look like Java", according to Eich, ruling out the existing languages Perl, Python, and Scheme. Eventually Eich settled on "Scheme-ish first-class functions and Self-ish (albeit singular) prototypes as the main ingredients" [^16] . Mocha also inherited a number of confusing Java language features such as the distinction between primitives and objects (e.g. `string` vs. `String` ) and the `Date` constructor which is a port of Java's `java.util.Date`, complete with the Y2K bug [^19]. Perl and Python are also credited to influencing Mocha's string handling and regular expressions and AWK inspired the use of the `function` keyword [^18]. These various influences 

After JavaScript (abandoning its previous names, Mocha and LiveScript names) was released in Netscape Navigator 2 Microsoft began work on JScript, an equivalent language which shipped with Internet Explorer 3. Eich says that "At some point in late summer or early fall 1996, it became clear to me that JS was going to be standardized. Bill Gates was bitching about us changing JS all the time."[^20], which lead to JavaScript being standardised by Ecma International, an industry group that produces information standards, as ECMAScript in 1997. EMAScript is also an ISO/IEC standard (16262)[^21].

A key moment in JavaScript's history occurred in when web developers became fascinated with Ajax, a set of techniques and technologies for making interactive websites, popularised by Google Suggest and Google Maps [^22]. To alleviate the pain of manipulating the Document Object Model (DOM), the hierarchy of objects that make up a HTML web page, and to deal with the problem that  'writing JavaScript should be fun' jQuery was released in 2006[^23] and commanded immediate popularity. In 2007, large tech companies including Digg, Google, Intel, Amazon, and the BBC all reported using jQuery [^23] and in the 12 months between Sept 2007 and 2008 jquery.com received 13.5 million unique visitors[^24]. As early as 2006 it's clear that although JavaScript is a powerful and popular language, in part due to it's low barrier of entry and its unique place as the default language of the web there are frustrations with the difficulty in reasoning about and writing JavaScript.

Google Chrome launched in 2008, with a new open source JavaScript engine named V8. When it launched V8 initially outperformed other browsers JavaScript engines on benchmarks[^25]

*Node*

*Now*

Over time JavaScript's popularity has exploded and it's now one of the most popular languages for software development[^4][^5], not only for interactive websites but also for native applications[^6], databases, and servers[^7].

# 1.1 JavaScript Design

JavaScript is not a traditional object-oriented language instead it features a unique mix of functional and prototypical-inheritance programming paradigms as well as a dynamic type system.

## 1.1.1 Type System

JavaScript has six types.[^8]  

* Undefined, is the type of the value assigned to variables before a value is assigned. 

  * Null, which is the type of the assignable value null. 


* 	Boolean, a standard representation of true and false. 


* 	String, which represents an ordered sequence of zero or more UTF-16 code units


* 	Number which represents the IEEE 754 double precision numbers, finite numbers in the range -253 to 253, and several special cases listed below
   * 	NaN, the value used for all the not a number cases defined in IEE 754
     * Positive and Negative Infinity
     * +0 and -0


*   The object type (explored further later) which represents a collection of properties, where each property is one of three types:

    * 	A named data property, which associates a value with a name
      * A named accessor property, which associates one or two functions (corresponding to get, which retrieves a value, and put, which assigns a value) with a name
      * An internal property which exists solely for the sake of specification

    In practice objects can be seen a mapping of string keys to values.

JavaScript features implicit type coercion between most operators, for instance `'3' * 2.0 === 6.0`. 

Boolean expressions are evaluated with an abstract `ToBoolean` operation which converts a value into a Boolean result. `Undefined`, `Null`, `false`, the empty string, `NaN`, `+0`, and `-0` return false while `true`, all other numbers, all other strings, and all Objects return true. [^12]

## Objects and Prototypical Inheritance

Typical object-oriented languages define classes which guarantee the exact sets of fields and methods an instance of the class will possess.[^9] JavaScript instead uses prototypical inheritance, in which classes act as a constructor functions act as a template or prototype which initially define the sets of fields an object should have but can later be replaced or added to. A prototype may itself have a prototype, the sequence of prototypes which define the properties of a given object are referred to as a prototype chain. [^10][^11] 

## Arrays

Unlike other languages JavaScript does not model arrays as continuously indexed tuples, instead arrays are special form of object where array elements are properties that satisfy the following test for a key `k`, `ToString(ToUint32(k)) === k && ToUint32(k) !== 2^32 - 1`. Consequently, arrays are neither necessarily homogenous or contiguous, `let array = ['a', 2.0, {}, new ClassA()]` and `let array = [, , , 4]` are all valid arrays [^13].

The length of an array can be accessed as a property of the array. The length property only tracks the highest index in the array and a result will include holes. The length property is not read-only, increasing the length will add empty elements to the end of the array and decreasing the length will truncate the array to satisfy the new length. Arrays are indexed using square bracket notation and can be indexed multidimensionally, for instance `a[1][0]`[^13] . Array indices _i_  that do not meet the criteria of being in the range 0 ≤ _i_ < 232−1 are treated as regular object properties, leading to the confusing situation outlined below.

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

One of the distinguishing features of arrays from regular objects is the large number of array specific prototype functions [^14]. Below are some of the more commonly used and interesting functions.

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

# Testing JavaScript with Symbolic Execution

JavaScript is an ideal candidate for symbolic execution due to the difficult nature of analysing JavaScript statically. It’s runtime dynamic typing and environment specific interactions make it hard to reason precisely about JavaScript outside of execution[^15].  Symbolic execution allows us to reason about the behaviour of a program in a more concrete fashion.

ExpoSE is a tool for symbolic execution of JavaScript. The target program is instrumented with Jalangi2, a tool that provides hooks before and after each statement is executed, which is used to build a symbolic representation of the program in Z3. Whenever program execution forks, for instance at an if statement, the negation of the current conditions of the current execution path are used to explore the next path, ensuring that all feasible paths are explored.

[^1]: https://ecma-international.org/memento/TC39.htm
[^2]: https://www.computerworld.com.au/article/255293/a-z_programming_languages_javascript/
[^3]: https://www.pcworld.com/article/201046/article.html
[^4]: https://insights.stackoverflow.com/survey/2017#most-popular-technologies
[^5]: https://www.tiobe.com/tiobe-index/
[^6]: https://code.facebook.com/posts/597378980427792/react-native-a-year-in-review/
[^7]: https://developer.telerik.com/topics/web-development/javascript-2017-beyond-browser/
[^8]: https://www.ecma-international.org/ecma-262/5.1/#sec-8
[^9]: A. H. Borning. 1986. Classes versus prototypes in object-oriented languages. In *Proceedings of 1986 ACM Fall joint computer conference* (ACM '86). IEEE Computer Society Press, Los Alamitos, CA, USA, 36-40.
[^10]: https://www.ecma-international.org/ecma-262/5.1/#sec-4.2.1
[^11]: https://www.ecma-international.org/ecma-262/5.1/#sec-15.2.4
[^12]: https://www.ecma-international.org/ecma-262/5.1/#sec-9.2
[^13]: https://www.ecma-international.org/ecma-262/5.1/#sec-15.4
[^14]: https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.3
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