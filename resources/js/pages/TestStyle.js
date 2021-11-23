import { Button, ButtonBackUp } from '../components/styles/Button.styled';
import { Input, Select } from '../components/styles/Input.styled';
import BouteilleBlackLogo from "../assets/svg/bouteilleBlack.png";

const TestStyle = () => {


    const test = () => {
        console.log('test');
    }

    return (
        
        <div>
            <Button  onClick={()=>test()} bg="#fff" color="#303031" colorHover='#fff' bgHover="#303031">AJOUTER</Button>
            <Button bg="#303031" color="#fff">BOIRE</Button>
            <Input placeholder="Nom Usager"></Input>
            <ButtonBackUp></ButtonBackUp>
            <Select>
                <option>Cellier</option>
            </Select>
            <img src={BouteilleBlackLogo} alt="logo" /> 
        </div>
    )
}

export default TestStyle;