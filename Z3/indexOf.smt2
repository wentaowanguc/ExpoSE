(define-fun targetValue () Int 5) ;The value being searched for
 
; The array is full of 1s and as a single 6
(declare-const targetArray (Array Int Int))
(assert (= targetArray (store (store ((as const (Array Int Int)) 0) 3 5) 10 5)))
 
(declare-const matchingIndex Int)
 
(assert (or (= (select targetArray matchingIndex) targetValue) (= matchingIndex -1)))
(assert (>= matchingIndex 0))
 
;Should make the problem unsat
(assert (= matchingIndex 10))
 
;Imply that if matchingIndex must be the min in the list
(assert (=> (= (select targetArray matchingIndex) targetValue) (not (exists ((i Int)) (and (< i matchingIndex) (= (select targetArray i) targetValue))))))
 
(check-sat)
(get-model)