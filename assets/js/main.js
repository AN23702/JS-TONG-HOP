console.log("Hello world");

// Biến
    /*Khai báo và gán giá trị cho biến
     + let: sử dụng khi biến hay được cập nhật
     + const: sử dụng khi biến ít được cập nhật*/
     
    let name = "An"; //Biến dạng chữ string
    let age = 22; //Biến dạng số number

    console.log(name); //Dùng để xem giá trị của biến
    console.log(age);

    console.log(typeof name); //Dùng toán tử typeof để xem kiểu dữ liệu của biến


// Phạm vi của biến
    /*Phạm vị biến toàn cục global:
    + Được khai báo bên ngoài function hoặc là bên ngoài block
    + Có thể sử dụng trong toàn chương trình*/ 

    let fullName = "Nguyễn Đức An";
    console.log(fullName);

    /*Phạm vi biến cục bộ:
    + Giúp tổng hợp các logic
    + Khai báo biến trong function thì chỉ sử dụng trong function
    + Khai báo biến toàn cục vẫn có thể dùng trong function*/ 
    
    let hello = () => {             //Khai báo function
        let height = 100;
        console.log(height);
    }

    hello();                       //Triển khai function


// Kiểu dữ liệu string

    // Nối chuỗi
    let firstName = "Nguyễn";
    let lastName = "Đức An";
    let fullName2 = firstName +" "+ lastName;

    console.log(fullName2);

    // Dùng ký tự back-tick `` dùng các biến, biểu thức ngay trong chuỗi và dùng ngoặc kép ngoặc đơn thoải mái
    let bornYear = 2002;
    let year = 2024;

    console.log(`Năm nay tôi ${year-bornYear} tuổi`)


/*Function
+ hàm Function dùng để tập hợp các đoạn code giúp thực thi tác vụ củ thể nào đó
+ Tham số Parameter là biến trong khai báo hàm
+ Đối số Argument là giá trị thực của biến này được truyền vào hàm*/

    let sum = (a,b) => {
        console.log(a+b);
    }

    sum(3,4);

/*Các kiểu hàm function:
+ Hàm không có tham số
+ Hàm có tham sô
+ Hàm trả về kết quả*/
    
    let sum1 = (c,d) => {
        return c + d;       //Những câu lệnh đằng sau từ khóa return sẽ không được thực thi
    }

    let data = sum1(5,9);
    console.log(data);

//Hàm không trả về kết quả: hàm không có từ khóa return sẽ không trả về kết quả

