(declare-const x Int)
(assert (= x 5)) ; This is the value to be searched for 
(declare-const r Int) ; This is the result, this should be 0
(declare-const a (Array Int Int)) ; The array
(assert (= a ((as const (Array Int Int)) 1))) ; The array is full of 1s

(assert (= a (store a 3 5)))

(assert 
  (or (forall ((j Int)) (not (= (select a j) x)) ) 
    (= r -1)
    (exists ((i Int)) 
      (and 
        (and 
          (and (= (select a i) x) (> i -1)) ; There exists an index where the stored value = x where the index >= 0
          true ;(forall ((k Int)) (and (and (< k i) (> k -1)) (! (= (select a k) r)) )) ; and for all values less than than index, the stored value isn't x
        )
        (= r i) ; Set r as the index
      )
    )
  )
)

(check-sat)
(get-model)