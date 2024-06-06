export interface User {
        producer:string;
            name:string;
            generation:number;
            imageUrl: string;
            _links?:{
                
                    self: {
                    href: string;
                    },
                    user: {
                    href: string;
                    }
                    }
            }
        
        