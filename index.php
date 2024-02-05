<?php

$array = [3,3];
$targ = 6;

// $array = [2,4,6,7,9,3];
// $targ = 10;


print_r(twoSum($array,$targ));

function twoSum($nums, $target) {
    $new = null;
    for($i = 0;$i<count($nums);$i++){
        // for($j = $i + 1; $j < count($nums);$j++){
        //     if($target === $nums[$i] + $nums[$j]){
        //         return [$i,$j];
        //     }
        // }
        if($nums[$i] + $new === $target){
            return [$nums[$i],$new];
        }
       
    }
}