    export class User {
        UserID: number;
        FullName: string;
        IdNum: string;
        UserName: string;
        BirthDate: Date;
        Gender: number;
        Email: string;
        Password: string;
        image: string="test";
        Role: string="customer";

        constructor () {
        this.UserID=1; //for put test
        this.FullName="Guest";
        this.Role="Guest";

        }

    }

