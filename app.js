// Student 
{
    class Student {
        constructor(fname, lname, tel , adress) {
            this.fname = fname;
            this.lname = lname;
            this.tel = tel;
            this.adress = adress;
        }
        getFullName() {
            return `${this.fname} ${this.lname}`;
        }
        info() {
            return `${this.getFullName()} o'quvchining telefon raqami: ${this.tel} va manzili: ${this.adress}`;
        }
    }

    let student1 = new Student("John","Doe", "+998 99 999 99 99", "Tashkent");
    console.log(student1.getFullName());
    console.log(student1.info());

}
// Teacher
{
    class Teacher
    {
        constructor(fname, lname, salary , adress , level) {
            this.fname = fname;
            this.lname = lname;
            this.salary = salary;
            this.adress = adress;
            this.level = level;

        }
        getFullName() {
            return `${this.fname} ${this.lname}`;
        }
        info() {
            return `${this.getFullName()} o'qituvchi ${this.level} darajada ${this.salary} maosh oladi manzili: ${this.adress}`;
        }
    }

            let teacher1 = new Teacher("John","Doe", "500$", "Tashkent", "A");
            console.log(teacher1.getFullName());
            console.log(teacher1.info());

}
// Group
{
    class Group {
        constructor(name,room,level,studentCounts,teacher) {
            this.name = name;
            this.room = room;
            this.level = level;
            this.studentCounts = studentCounts;
            this.teacher = teacher;

        }

        fullInfo() {
            return `${this.name} guruh ${this.room} xonasi ${this.level} oy  o'quv o'quvchilar soni: ${this.studentCounts} o'qituvchi: ${this.teacher}`
        }
    }

    let group1 = new Group("A", "A", "A", "A", "A");
    console.log(group1.fullInfo());
}
// Payment
{
    class Payment {
        constructor(from, to, amount, status) {
            this.from = from;
            this.to = to;
            this.amount = amount;
            this.date = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
            this.status = Boolean(status) ? "muvaffaqiyatli o'tqazildi" : "O'tkazish bekor qilindi";
        }

    
    getStatus() {
        return `${this.from} dan ${this.to} ga  ${this.amount} miqdordagi pul  ${this.date} da ${this.status}`
    }
}

    let payment1 = new Payment("jamol", "jamshid", "100$", true);
    console.log(payment1.getStatus());

    

}
// Salary
{
    class Salary {
        constructor(to,amount,type, status) {
            this.to = to;
            this.amount = amount;
            this.type = type;
            this.date = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
            this.status = Boolean(status) ? "muvaffaqiyatli o'tqazildi" : "O'tkazish bekor qilindi";
            
        }
         getInfo() {
            return `${this.to} ga ${this.amount} ${this.type} miqdordagi pul ${this.date} da ${this.status}`
        }


    }

    let salary1 = new Salary("jamol", "100", "USD", true);
    console.log(salary1.getInfo());
}
// Organization
{
    class Organization {
        constructor(name,founder, address,employeeCount ,roomCount) {
            this.name = name;
            this.founder = founder;
            this.address = address;
            this.employeeCount = employeeCount;
            this.roomCount = roomCount;
        }
        getInfo() {
            return `${this.name} organizatsiyasi ${this.founder} tashkilotchi ${this.address} manzilida joylashgan ${this.employeeCount} ishchisi bor va ${this.roomCount} xonasi bor`
        }
    }

    let organization1 = new Organization("Najot Ta'lim", "Adhamjonov Temurbek", "Tashkent", "400", "150");
    console.log(organization1.getInfo());
}
// Kurslar
{
    class Kurs {
        constructor(name,teacher,payment, room, duration) {
            this.name = name;
            this.teacher = teacher;
            this.payment = payment;
            this.room = room;
            this.duration = duration;
        }
       getFullInfo() {
        return `${this.name} kursi ${this.teacher} o'qituvchi Narxi:${this.payment}  ${this.room} xonasi ${this.duration} oy davom etadi`
       }
    }

    let kurs1 = new Kurs("React JS", "Boburmirzo Rosulov", "1_320_000 UZS", "SLACK", "8");
    console.log(kurs1.getFullInfo());
}
// Room
{
    class Room {
        constructor(name,tableCount,chairCount, projectorCount, whiteboardCount,boardCount,bigScreenCount) {
            this.name = name;
            this.tableCount = tableCount;
            this.chairCount = chairCount;
            this.projectorCount = projectorCount;
            this.whiteboardCount = whiteboardCount;
            this.boardCount = boardCount;
            this.bigScreenCount = bigScreenCount;
        }
        getFullInfo() { 
            return `${this.name} xonasi ${this.tableCount} ta stol, ${this.chairCount} ta stul, ${this.projectorCount} ta proyektor, ${this.whiteboardCount} ta doska, ${this.boardCount} ta proyektor uchun doska, ${this.bigScreenCount} ta katta ekran`
        }
    }

    let room1 = new Room("A", "A", "A", "A", "A", "A", "A");
    console.log(room1.getFullInfo());
 }