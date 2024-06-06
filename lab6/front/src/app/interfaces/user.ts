export interface User {
        id: number;
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
        
        