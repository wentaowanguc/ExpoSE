# README

## Directory Structure

`Report` contains my report source code. `Presentation` contains my presentation delivered in Term 1. `Documents` contains the final report PDF.

## Installation and Running

For installation and usage instructions refer to the manual in the appendix of my report or `ExpoSE_Original_README.md` - in short you need `node` (8.10.0 recommended), `clang`, and  `npm`, `clang`, `clang++`, `gnuplot`, `make`, `python2` and then type `npm start` to start installation.

## My Code Contributions

My modifications to ExpoSE and Z3JS are deliniated by a comment `// AF Final Year Project` (excluding scripts) but I also indicate the functions that I have written or heavily modified below. The last commit hash from the main ExpoSE repo is `4f5690769d55771f049431c6cc8b4a384e1f767c`, my commits begin at `a8310cb38d7204d43de57507786b3bf5184e0851`.

**Z3JS**:
* `src/Expr.js`: Add getAstSortKind, selectFromIndex, toNumber, getAstSortName, copyProperties, incrementLengthCounter, getLengthCounter, setStartIndex, increaseStartIndex, getStartIndex, hasType, setType, getType, setName, getName, setLength, getLength, setAtIndex, and selectFromIndex. I also heavily modified asConstant including changing the function signature to pass the model to asConstant.. I also added context to the Expr object constructor (requiring simple interface changes in `src/Model`, `src/Context`, and `src/Expr`: https://github.com/ExpoSEJS/z3javascript/commit/2e22e18baf904f8053b53cbe033b8378e1b4c719).
* `src/Context.js`: Added mkArray, mkArraySort, mkSeqSort, mkSelect, mkStore, mkConstArray, mkBound, mkForAllConst, mkExists, mkExistsConst, and mkPattern.
* `src/Model.js`: Modified eval
* `src/post_em_bindings.js` and `src/post_ref_bindings.js`: I added a sort const for `Z3.SEQ_SORT`.
* `src/Z3Utils.js`: Add astArray

**ExpoSE**:
* `tests/arrays/*`: All array tests
* `Analyser/src/Config`: Add flag to disable array support
* `Analyser/src/SymbolicExecution`: Heavily modify putField
* `Analyser/src/SymbolicState`: Modify and refactor symbolicField. Add _symbolicFieldArrayLookup, _isFieldAccessWithinBounds, _symbolicFieldSeqLookup, symbolicSetField, makeArray.
* `Analyser/src/FunctionModels`: models[Array], models[Array.prototype.indexOf], models[Array.prototype.lastIndexOf], models[Array.prototype.includes],  models[Array.prototype.push],  models[Array.prototype.pop], models[Array.prototype.slice]. 
* Alter `asConstant` to use model L84-85, L91, L95, and L101 in `Analyser/src/FunctionModels` and L222 in `Analyser/src/SymbolicState`

**Scripts**
`scripts/array_tests`, `report/polyfill_harness`, `report/Tests/extract_time_taken.py`