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
    
}
