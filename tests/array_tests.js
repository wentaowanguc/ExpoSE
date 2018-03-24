/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

function buildTestList() {
    var testList = [];

    function buildTest(file, expectPaths, expectErrors) {
        testList.push({
            path: file,
            expectPaths: expectPaths,
            expectErrors: expectErrors
        });
    }

    //Core Javascript, no symbex / annotations
    buildTest('arrays/array_bool_values.js', 3, 0);
    buildTest('arrays/array_concrete_behaviour.js', 0, 0);
    buildTest('arrays/array_explore_bounds.js', 2, 1);
    buildTest('arrays/array_homogenous_only.js', 3, 0);
    buildTest('arrays/array_includes_push_combination.js', 2, 0);
    buildTest('arrays/array_includes.js', 2, 0);
    buildTest('arrays/array_index_get_or.js', 2, 0);
    buildTest('arrays/array_index_getter_is_symbolic.js', 2, 0);
    buildTest('arrays/array_index_matches_non_symbolic_value.js', 2, 0);
    buildTest('arrays/array_index_matches_symbolic_value.js', 4, 0);
    buildTest('arrays/array_index_of.js', 2, 0);
    buildTest('arrays/array_index_of_fails.js', 3, 0);
    buildTest('arrays/array_index_of_length.js', 1, 0);
    buildTest('arrays/array_index_of_lowest.js', 1, 0);
    buildTest('arrays/array_index_of_negative.js', 1, 0);
    buildTest('arrays/array_index_of_slice_combination.js', 10, 0);
    buildTest('arrays/array_index_of.js', 2, 0);
    buildTest('arrays/array_indexof_includes_combination.js', 4, 0);
    buildTest('arrays/array_last_index_of_highest.js', 1, 0);
    buildTest('arrays/array_last_index_of_length.js', 1, 0);
    buildTest('arrays/array_last_index_of_negative.js', 1, 0);
    buildTest('arrays/array_last_index_of.js', 1, 0);
    buildTest('arrays/array_length_numbers.js', 2, 0);
    buildTest('arrays/array_pop_index_of_combination.js', 2, 0);
    buildTest('arrays/array_pop_length_decreases.js', 2, 0);
    buildTest('arrays/array_pop_value_matches.js', 3, 0);
    buildTest('arrays/array_push_index_of_combination.js', 2, 0);
    buildTest('arrays/array_push_length_increases.js', 2, 0);
    buildTest('arrays/array_push_value_matches.js', 3, 0);
    buildTest('arrays/array_set_field_change_value.js', 3, 0);
    buildTest('arrays/array_set_field_includes_combination.js', 4, 0);
    buildTest('arrays/array_set_field_increase_length.js', 3, 0);
    buildTest('arrays/array_set_length.js', 3, 0);
    buildTest('arrays/array_slice_0.js', 5, 0);
    buildTest('arrays/array_slice_end_greater_than_length.js', 5, 0);
    buildTest('arrays/array_slice_end_less_than_length.js', 5, 0);
    buildTest('arrays/array_slice_end_negative.js', 5, 0);
    buildTest('arrays/array_slice_to_reduce.js', 5, 0);
    buildTest('arrays/array_string_values.js', 5, 0);
    return testList;
}

exports["default"] = buildTestList();
module.exports = exports["default"];
