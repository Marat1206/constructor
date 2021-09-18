function Student (name, surName, yearOfBirth) {
    this.name = name;
    this.surname = surName;
    this.yearOfBirth = yearOfBirth;
    this.whatAge = function () {
        return 2021 - this.yearOfBirth;
    }
    this.getAverageMark = new Array(10);
    this.attendance  = new Array(10);

    this.calcMarks = (num = 1) =>{
        if(!this.getAverageMark) return undefined;

        let average = this.getAverageMark.reduce( (sum, curr) => sum + curr)
            / this.getAverageMark.length;

        let pow = Math.pow(10, num);

        return Math.round(average * pow) / pow

    }

    this.calcAtt = () =>
        this.attendance.reduce( (sum, curr) => sum + curr)
        / this.attendance.length;

    this.present = () =>{
        let attIndex = this.attendance.findIndex(elem => elem === undefined);
        this.attendance[attIndex] = true;
    };

    this.absent = () =>{
        let attIndex = this.attendance.findIndex(elem => elem === undefined);
        this.attendance[attIndex] = false;
    };

    this.mark = function (marks){
        if (marks => 0 && marks <= 10){
            let  markIndex = this.getAverageMark.findIndex(elem => elem === undefined);
            this.getAverageMark[markIndex] = marks;
        }else {
            console.log("Mark must be from 0 till 10");
        }
    };

    this.sum = function () {
        if (this.calcMarks() > 9 && this.calcAtt() > 0.9) {
            return 'Ути какой молодчинка!'
        }
        if (this.calcMarks() > 9 || this.calcAtt() > 0.9) {
            return 'Норм, но можно лучше'
        }
        if (this.calcMarks() < 9 && this.calcAtt() < 0.9){
            return 'Редиска!!'
        }
    }
}

let student = new Student('Marat', 'Nurmagomedov', 1995);
console.log(student);
console.log(student.whatAge());
student.absent();
student.absent()
student.absent()
student.absent()
student.absent()
student.present();
student.present();
student.present();
student.present();
student.present();
student.mark(3);
student.mark(5);
student.mark(10);
student.mark(10);
student.mark(10);
student.mark(10);
student.mark(10);
student.mark(10);
student.mark(10);
student.mark(10);
student.mark(10);


console.log(student.calcMarks());
console.log(student.calcAtt());

console.log(student.sum());
