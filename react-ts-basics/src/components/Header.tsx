import {type HeaderProps} from "../interfaces/CommonInterfaces.tsx"

function Header({ image: {src, alt}, children }: HeaderProps) {
    return (
        <header>
            <img src={src} alt={alt} />
            {children}
        </header>
    )
}

export default Header