export interface User {
        producer:string;
            name:string;
            generation:number;
            _links:{
                
                    self: {
                    href: string;
                    },
                    user: {
                    href: string;
                    }
                    }
            }
        
        