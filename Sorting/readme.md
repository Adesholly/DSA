

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


2. Selection sort

Selection sort divide the input list two parts: a sorted sublist of items that is built up from left to right and a sublist of the remaining unsorted items. It repeatedly selects the smallest (or largest) element from the unsorted sublist, swapping it with the leftmost unsorted element , and moving the sublist boundaries one element to the right. 


    Pseudocode

    SelectionSort(A)
    n = length(A)
    for i = 0 to n-1 do
        minIndex = i

        for j = i+1 to n-1 do
            if A[j] < A[minIndex] then

                minIndex = j

            end  if
        end for
        swap A[i] and A[minIndex]
    end for
    end SelectionSort

    Big O, Theta &

    Best Case: O(n^2)
    Average Case: O(n^2)
    Worst Case: O(n^2)

 3. Insertion Sort 

    Insertion Sort builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms, quicksort, heapsort, or merge sort. It works by taking an element from the list and inserting it into the correct position in the sorted part of the list, shifting the other elements as necessary.


    Pseudocode

    InsertionSort(A)
    n =  length(A)
    for i = 0 to n-1 do
        key = A[i]
        j = i - 1

        while j >= 0 and A[j] > key do
        A[j + 1] = A[j]
        j = j - 1
        end while

        A[j + 1] = key
    end for
    end InsertionSort


    Big O, Theta &

    Best Case: O(n) (already sorted)
    Average Case: O(n^2)
    Worst Case: O(n^2)


