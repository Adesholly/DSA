#include <iostream>

void bubbleSort (int array[], int size);


int main (){

    // Example 

    std::string strings [] = {"boy", "man", "female", "male", "husband", "wife", "son"};
    int numbers[] = {12, 2, 7, 8, 5,3,1,90, 4, 15};
    int size = sizeof(numbers)/sizeof(numbers[0]);


    bubbleSort(numbers, size);

    for (int element : numbers){

        std::cout << element << " ";
    }

    std::cout << "\n";

}



void bubbleSort (int array[], int size) {

    int temp;

    for (int i = 0; i < size - 1; i++){
        for(int j = 0; j < size - i - 1; j++){

            if(array[j] > array[j + 1]){
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

}