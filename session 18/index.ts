/*
    interface:giao diện
    dùng để dinh nghĩa cac thuoc tính và phương thưc các lớp con kế thừa bắt buộc phải triển khai
    ==> cũng giống như abstract
    - có những điểm gì khác nhau so vs abstract
    - để tạo abstract thì dùng tu khôas abstract
    - để tạo interface thì dùng interface
    -trong interface se gồm có thuoc tính va phương thức 
    - đối vs phương thức thì ko co phần thân tức la nó chỉ định nghĩa thôi
    - đối với interface thì ko thể dùng kiểu ket hợp (union và intersection)
    - có thể khới tạo đối tượng từ interface ko?
    ==> ko the khoi tạo doi tượng từ interface 
    - interface sinh ra nhằm mục đích gì ??
    ==> - interface la 1 cái khuôn mẫu cho các class khác kế thừa phải tuân theo 
    - các class con khi kế thừa interface băt buoc phải trien khai các thuoc tinh va phương thức cua interface(implement)
    - 1 class có the trien khai nhieu interface k?
    ==> được 
    - interface có ke thừa interface dc ko?
    ==> có thể ke thua 
    - trong interface thì ko thể đăt access modifier đc 
 */

interface Sales {
  name: string;
  sale(): string;
  sale1():void;
}
interface Sales1 {
  name: string;
  address: string;
}
class Person111 implements Sales {
  name: string;
  address: string;
  constructor(name: string,address:string) {
    this.name = name;
    this.address = address;
  }
  // bat buoc phai trien khai pthuc sale trong interface
  sale(): string {
    return "giam gia 5%";
  }
  sale1(): string {
    return "giam gia 15%";
  }
}
