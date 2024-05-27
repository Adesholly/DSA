

Sorting Algorithms 


1. Bubble Sort 

Bubble Sort is a simple comparison-based algorithm where each pair of adjacent elements is compared and swapped if they are in the wrong order. This process is repeated until the list is sorted. It is called "Bubble Sort" because smaller elements "bubble" to the top of the list.

    Pseudocode 

    BubbleSort(A)
    n = length(A)
    for i = 1 to n-1 do
        for j = 0 to n-i-1 do
            if A[j] > A[j+1] then
                swap A[j] and A[j+1]
            end if
        end for
    end for
    end BubbleSort

    Big O, Theta & 
    Best Case: O(n) (already sorted)
    Average Case: O(n^2)
    Worst Case: O(n^2)


