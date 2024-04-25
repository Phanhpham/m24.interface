/**
 Abstract Class:
Abstract class là một lớp trừu tượng không thể được khởi tạo trực tiếp, mà chỉ được sử dụng để tạo ra các lớp con.
Abstract class có thể chứa phương thức trừu tượng và phương thức có cài đặt.
Các lớp con phải triển khai (implement) tất cả các phương thức trừu tượng của abstract class hoặc đánh dấu chính lớp đó là một abstract class.
*/
// Ví dụ:
abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log("Moving...");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}

const dog = new Dog();
dog.makeSound(); // Output: Woof!
dog.move(); // Output: Moving...
/**
 Interface:
Interface là một cấu trúc trừu tượng mà chỉ định các phương thức và thuộc tính mà một đối tượng phải triển khai.
Interface không chứa cài đặt của phương thức, chỉ định tên và kiểu của chúng.
Một lớp có thể triển khai nhiều interface.

 */
