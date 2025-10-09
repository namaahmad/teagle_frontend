import "react";

declare module 'react' {
    export interface HTMLAttributes<T> {
        code?: any;
    }
}