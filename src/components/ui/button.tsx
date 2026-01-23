import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react'

// configuraçãoa CVA:
const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowap rounded-md text-sm font-medium",
    {
        variants: {
            variant:{
                default:"bg-blue-500 text-white",
                ghost: "hover:bg-[#5593f7] text-white"
                
            },
            size:{
                default: "h-10 px-4 py-2",
                icon: "h-10 w-10",

            }
        },
        defaultVariants:{
            variant: "default",
            size: "default"
        }
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>{
        asChild?: boolean;
    }

    

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, variant, size, asChild = false, ...props}) => {
        return(
            <button>

            </button>
        )
    }
)

