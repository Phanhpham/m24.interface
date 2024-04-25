interface Geometry {
  calculatePerimeter(): void;
}
class Circle implements Geometry {
  private radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  //khi implements geometry thi phai trien khai 2 pthuc cua interface
  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
  calculatePerimeter(): number {
    // tính chu vi cua hinh tron
    return 2 * Math.PI * this.radius;
  }
}
// Tạo đối tượng (intance)từ lớp Circle
let circle1 = new Circle(5);
class Rectangle implements Geometry {
  private width: number;
  private height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  calculateArea(): void {}
  calculatePerimeter() {}
}
