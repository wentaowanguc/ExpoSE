(declare-const x Int)
(assert (= x 1)) ; This is the value to be searched for 
(declare-const r Bool) ; This is the result, this should be 0
(declare-const a (Array Int Int)) ; The array
(assert (= a ((as const (Array Int Int)) 1))) ; The array is full of 1s

(declare-const length Int) ;length
(assert (= length 1))

(assert 
  (exists ((i Int)) (and (and (= (select a i) x) (< i length)) (<= i 0)) ) 
)

(check-sat)
(get-model)