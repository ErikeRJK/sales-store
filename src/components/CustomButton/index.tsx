import { Button } from "../ui/button";

interface CustomButtonProps{
    variant?: string
    onClick?: ()=> void
}

export default function CustomButton({variant, onClick}:CustomButtonProps){

    function getStyles(){
        switch(variant){
            case "primary":
                return "px-4 py-2 bg-red-500"
            case "secondary":
                return "px-4 py-2 bg-green-500"
            default:
                return "px-4 py-2 bg-blue-500"
        }
    }

    return(
        <Button 
        className={
            getStyles()
        }
        onClick={onClick}
        >

        </Button>
    )
}