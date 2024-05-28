#include <iostream>


void selectionSort( int array[], int size);

int main (){

     // Example 

    std::string strings [] = {"boy", "man", "female", "male", "husband", "wife", "son"};
    int numbers[] = {12, 2, 7, 8, 2, 5,3,1,90, 4, 15};
    int size = sizeof(numbers)/sizeof(numbers[0]);


    selectionSort(numbers, size);

    for (int i = 0; i < size; i++){

        std::cout << numbers[i] << " ";
    }

    std::cout << "\n";


}



void selectionSort( int array[], int size){


    for (int i = 0; i < size - 1; i++){
        int minIndex = i;

        for (int j = i+1; j < size ; j++){
            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }
    
        int temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;

   
    }

}