#include <iostream>




int main(){

    std::string strings;
    
    std::cout << "Enter random string: \n" ;

    std::getline(std::cin, strings);

    for (int i = 0; i < strings.length(); i++){
        if(strings[i].empty()){
            strings.clear();
        }

        std::cout << strings[i] ;


    }

}