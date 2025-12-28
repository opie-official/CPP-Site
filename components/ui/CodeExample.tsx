'use client'

import "./styles/code_example.css"
import {ReactNode, useState} from "react";



const code=[
    `#include <iostream>
int main() {
    std::string user_name = "user";
    std::cout << "Hello, " << user_name << "!" << std::endl;
    return 0;
}
`,
    `#include <iostream>
#include <future>
#include <thread>
#include <chrono>

int main() {
    int count = 10;
    auto f1 = std::async(std::launch::async, [&count] {
        for (int i = 0; i < count; ++i) {
            std::cout << "1";
            std::this_thread::sleep_for(std::chrono::milliseconds(1));
        }
    });
    auto f2 = std::async(std::launch::async, [&count] {
        for (int i = 0; i < count; ++i) {
            std::cout << "2";`,
    `#include <iostream>

class Car {
private:
    int speed;
public:
    void setSpeed(int s) { speed = s; }
    int getSpeed() const { return speed; }
};

int main() {
    Car myCar;
    myCar.setSpeed(100);
    std::cout << "Speed: " << myCar.getSpeed() << " km/h" << std::endl;
    return 0;
}
`,
    `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    int sum = 0;
    std::for_each(numbers.begin(), numbers.end(), [&sum](int x) {
        sum += x;
    });
    std::cout << "Sum = " << sum << std::endl;
    return 0;
}
`,
    `#include <iostream>

#if defined(_WIN32) || defined(_WIN64)
    #define PLATFORM_NAME "Windows"
#elif defined(__linux__)
    #define PLATFORM_NAME "Linux"
#elif defined(__APPLE__)
    #define PLATFORM_NAME "macOS"
#else
    #define PLATFORM_NAME "Unknown platform"
#endif

int main() {
    std::cout << "Running on " << PLATFORM_NAME << std::endl;
    return 0;
}
`,
    `#include <cassert>

int add(int a, int b) {
    return a + b;
}

int main() {
    assert(add(2, 3) == 5);
    assert(add(-1, 1) == 0);
    std::cout << "All tests passed!" << std::endl;
    return 0;
}
`,
    `
#include <avr/io.h> 
#include <util/delay.h> 

int main() {
  DDRB |= (1 << PB5);
  while (1) {
    PORTB |= (1 << PB5);
    _delay_ms(1000); 
    PORTB &= ~(1 << PB5);
    _delay_ms(1000); 
  }
  return 0;
}`,
]






interface Props{
    children: ReactNode
}



const regex=/(?<=#\s*\w+\s*)(<\w+>|"\w+")|\d+|'.*'|".*"|[+\-*/%=:;.,^<>!~|&()\[\]{}?]+|\w+/gm;


function CodeParser(props: Props){




}


export default function CodeExample(){


    const [cell, setCell]=useState(0);


    return (<div id={"code-example"}>
        <div></div>
    </div>)
}


