Hey Johannes and my second market!

I've implemented symoblic homogenous arrays! It does not support any array prototypes yet aside from `.length` and `.length` is not symbolically modifiable yet.  

I've put some test cases inside `/tests/arrays` which can be executed with a  test runner `./scripts/array_tests/`.

For installation instructions see the `ExpoSE_Original_README.md` - in short you need `node` (7.5.0), `clang`, and  `npm`, `clang`, `clang++`, `gnuplot`, `make`, `python2` and then type `npm start`.

I've pointed z3js to the correct branch which is `af-array-support` but if that fails for any reason place that version of z3js (https://github.com/ExpoSEJS/z3javascript/tree/af-array-support) inside `Analyser/node_modules/z3javascript`. 

My modifications to ExpoSE and z3javascript are as follows:

**z3javascript**:

* `src/Expr.js`: Add getAstSortKind (L79), selectFromIndex (L89), toNumber(L74), getAstSortName(L83), and I heavily modified asConstant (L93) including passing the model to asConstant (changes interface). I also added context to the Expr object constructor (requiring simple interface changes in `src/Model`, `src/Context`, and `src/Expr`: https://github.com/ExpoSEJS/z3javascript/commit/2e22e18baf904f8053b53cbe033b8378e1b4c719).
* `src/post_em_bindings.js` and `src/post_ref_bindings.js`: I added a (currently redundant) sort const for `Z3.SEQ_SORT`.
* `src/Context.js`: Added mkArray (L103), mkArraySort(L218), and the now redundant mkSeqSort (L223)

**ExpoSE**:

* `tests/arrays/*` - all array tests
* `/src/Analyser/SymbolicState` Refactor to extract sort checking logic: L169-185 and L192-195. Extend to support arrays in  L345-357, L367-369
* Alter `asConstant` to use model L84-85, L91, L95, and L101 in `Analyser/src/FunctionModels` and L222 in `/src/Analyser/SymbolicState`