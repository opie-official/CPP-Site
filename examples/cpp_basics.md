# "Hello, world!" Program

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, world!" << std::endl;
    return 0;
}
```


# Add two numbers


```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << a + b;
    return 0;
}
```

# Check that number is even

```cpp
#include <iostream>
using namespace std;

int main() {
    int x;
    cin >> x;

    if (x % 2 == 0)
        cout << "Even";
    else
        cout << "Odd";

    return 0;
}
```


# Maximum of two numbers

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    if (a > b)
        cout << a;
    else
        cout << b;

    return 0;
}

```



# N-numbers sum

```cpp
#include <iostream>
using namespace std;

int main() {
    int n, sum = 0;
    cin >> n;

    for (int i = 1; i <= n; i++)
        sum += i;

    cout << sum;
    return 0;
}
```



# Factorial

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    long long fact = 1;
    cin >> n;

    for (int i = 1; i <= n; i++)
        fact *= i;

    cout << fact;
    return 0;
}
```


# Multiplication table on number

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 1; i <= 10; i++)
        cout << n << " * " << i << " = " << n * i << endl;

    return 0;
}
```


# An amount of digits in number

``` cpp
#include <iostream>
using namespace std;

int main() {
    int n, count = 0;
    cin >> n;

    while (n != 0) {
        n /= 10;
        count++;
    }

    cout << count;
    return 0;
}
```



# Check if number is primary

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    bool prime = true;
    cin >> n;

    if (n <= 1) prime = false;

    for (int i = 2; i * i <= n; i++)
        if (n % i == 0)
            prime = false;

    if (prime)
        cout << "Prime";
    else
        cout << "Not prime";

    return 0;
}
```


# A sum of array`s elements


```cpp
#include <iostream>
using namespace std;

int main() {
    int n, sum = 0;
    cin >> n;

    int arr[n];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
        sum += arr[i];
    }

    cout << sum;
    return 0;
}
```