A long ago: Leibniz mechanized human reasoning and Hilbert Entscheidungs problem

90s: impractical due to decidability and complexity (?)

SAT problem: an arbitary formula with 
SAT problem is (NP compete)

Chaff first solver which could solve even large SAT problems

SAT NP Complete easier than expected because:

*  

SAT solvers produce a boolean expression, whether an expression is satisfiable or not

Real world sat problems have structure and modularity -> short proofs

Combine SAT with theory reasoning -> SMT

SMT-Lib exists



Eager Solving in SMT: Transform a problem into a simpler equivalent propositional formula and use a SAT solver
So called eager because it uses all theory information from the beginning.
Need to create sophisticated encodings for each theory

Boolean propagation (if `x` is false then `x ^ y` is false)

Equality solving and substitution
Static learning
Rewriting: evaluating/propagating constants
Rewriting: normalizing and flattening terms
Rewriting: language reduction (e.g. ite removal, writing all
inequalities in terms of ≤) 

Preprocessing - simple, matches real world problems which tend to have structure,

Lazy Solving:
SAT solver run on skeleton of formula (?)
Assignment is checked for theory satisfiability by a separate theory solver (?)
Theory propogation can be used (?)



(DP vs DPLL)

Unit Propagation: x AND (y OR z OR x) AND (not x OR a OR b) => a or b

Pure Literal: (x OR y) AND (not y or z) AND (not x OR y OR z) => (not y or z) (y or not z)

**Davis Putnam (DP)**

Boolean Resolution

DP eliminates quantifiers but does not scale, exponential in worse case

**DPLL**
Branching rule  assigns a specific value to a variable

DPLL uses model finding

