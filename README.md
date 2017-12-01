Hey Johannes!

I've implemented symoblic homogenous arrays! It does not support any array prototypes yet aside from `.length`.

I've put some test cases inside `/tests/arrays` which can be executed with a  test runner `./scripts/array_tests/`.

For installation instructions see the `ExpoSE_Original_README.md` - in short you need `node` (7.5.0), `clang`, and  `npm`, `clang`, `clang++`, `gnuplot`, `make`, `python2` and then type `npm start`.

I've pointed z3js to the correct branch which is `af-array-support` but if that fails for any reason place that version of z3js inside `Analyser/node_modules/z3javascript`. 

Here are a list of my contributions so far to `z3js` as that's not available from the RHUL Github.

* Add `Context` to Expressions, Model, and Solver
* Add mkSeqSort
* Add mkArraySort
* Add mkArray
* Replace asConstant kinds with sort kinds
* Add selectFromIndex
* Add asConstant cases for arrays
* Change asConstant signature to take a model 
* Attempted a parsing of sequences