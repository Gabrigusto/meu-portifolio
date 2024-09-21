import { styled } from "@mui/material"
import theme from "../../theme"
import { ReactNode } from "react"

interface StyledButtonProps {
    children : ReactNode
}


const StyledButton: React.FC<StyledButtonProps> = ({children}) => {
    const StyledButton = styled("button")(() => ({
       backgroundColor: "transparent",
       border: `1px solid ${theme.palette.primary.contrastText}´,}`,
       borderRadius: "3px",
       padding: "5px 15px",
       width: "100%",
       color: theme.palette.primary.contrastText,
       '&:hover':{
        backgroundColor :theme.palette.secondary.contrastText
       }

    }))


    return (
      <>
       
        <StyledButton>

        {children}

        </StyledButton>

      </>
    )
  }
  
  export default StyledButton
  