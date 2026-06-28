class Student {
  constructor(
    public name: string,
    public age: number,
    public type: string,
    public email: string,
  ) {}
}

interface StudentBuilder {
  reset(): this;
  setName(name: string): this;
  setAge(age: number): this;
  setEmail(email: string): this;
  setType(type: string): this;
}

class ConcreteStudentBuilder implements StudentBuilder {
  private name!: string;
  private age!: number;
  private email!: string;
  private type!: string;

  reset(): this {
    this.name = "";
    this.age = 0;
    this.email = "";
    this.type = "";
    return this;
  }

  setName(name: string): this {
    this.name = name;
    return this;
  }

  setAge(age: number): this {
    this.age = age;
    return this;
  }

  setEmail(email: string): this {
    this.email = email;
    return this;
  }

  setType(type: string): this {
    this.type = type;
    return this;
  }

  build(): Student {
    const student = new Student(this.name, this.age, this.type, this.email);
    this.reset(); // ready for next build
    return student;
  }
}

class StudentDirector {
  createScienceStudent(builder: StudentBuilder) {
    builder.reset().setType("Science");
  }

  createCommerceStudent(builder: StudentBuilder) {
    builder.reset().setType("Commerce");
  }

  createMBAStudent(builder: StudentBuilder) {
    builder.reset().setType("MBA");
  }

  createArtsStudent(builder: StudentBuilder) {
    builder.reset().setType("Arts");
  }
}

const director = new StudentDirector();
const builder = new ConcreteStudentBuilder();

// Create Science Student
director.createScienceStudent(builder);

const scienceStudent = builder
  .setName("Alice")
  .setAge(20)
  .setEmail("alice@uni.com")
  .build();

console.log(scienceStudent);

// Create MBA Student
director.createMBAStudent(builder);

const mbaStudent = builder
  .setName("Bob")
  .setAge(25)
  .setEmail("bob@uni.com")
  .build();

console.log(mbaStudent);
