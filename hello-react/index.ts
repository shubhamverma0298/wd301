// interface User {
//     name: string;
//     id: number;
//     isAdmin: boolean;
//     greet(): string;
//   }
//   let newUser: User = {
//       name: "Jane",
//       id: 1,
//       isAdmin: false,
//       greet() {
//         return `Hello, my name is ${this.name}`;
//       },
//   };
//   console.log(newUser)
//   let names: any = "hello";
//     names = 42;
//     names = false;
//     console.log(names);
//     function addUser(user: User): string {
//         return user.name + " added successfully";
//     }
//     console.log(newUser)

//     let streetName = "New Journey Street";
//     let doorNumber = 10;
    
//     let fullAddress = doorNumber +" " + streetName;
//     console.log(fullAddress);

//     let projectID: number[] = [1, 2, 3, 4, 5];    // array in typescript
//     let taskList: string[] = ["Fix Camera", "Buy Milk"];
//     console.log(projectID )
//     console.log(taskList )
//     // TUPELS IN TYPESCRIPT

//     let user: [string, string] = ["johnDoe", "mySecretPassword"]; 
//     let [username, password] = user;
//     console.log(username);
//     console.log(password);
    
    
//     interface Employee extends User {
//         salary: number;
//       }

//     interface GetGreetingFn {
//         (user: User): string;
//     }
//     const getGreeting: GetGreetingFn = (user: User) => {
//         return user.greet();
//       };
//     class Manager implements Employee {
//         name: string;
//         id: number;
//         salary: number;
//         isAdmin: boolean;
      
//         constructor(name: string, id: number, salary: number,isAdmin:boolean,) {
//           this.name = name;
//           this.id = id;
//           this.salary = salary;
//           this.isAdmin= isAdmin;
//         }
      
//         greet() {
//           return `Hi, my name is ${this.name} and I am the manager.`;
//         }
//       }
      
//       const manager = new Manager('Bob', 4, 50000,false);
//       console.log(getGreeting(manager)); 