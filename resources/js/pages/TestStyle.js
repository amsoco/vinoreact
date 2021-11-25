import { Button, ButtonBackUp } from '../components/styles/Button.styled';
import { Input, Select } from '../components/styles/Input.styled';
//import BouteilleBlackLogo from "../assets/images/bouteilleBlack.png";
import Chevron from "../assets/svg/chevron.svg";
import Accordeon from "../components/Accordeon";
import NavBar from "../components/NavBar";

const TestStyle = () => {
    const test = () => {
        console.log("test");
    };

    const backTop = () => {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }

    return (
        <div>
            {/* <Button
                onClick={() => test()}
                bg="#fff"
                color="#303031"
                colorHover="#fff"
                bgHover="#303031"
            >
                AJOUTER
            </Button>
            <Button bg="#303031" color="#fff">
                BOIRE
            </Button >
            <Input placeholder="Nom Usager" ></Input> */}

            <NavBar/>
            <Accordeon titre='Description' content="Vin mousseu bon"></Accordeon>
            <Accordeon titre='Modification' content={  <Select>
                    <option>Cellier</option>
                </Select>}>  
            </Accordeon>
            <Accordeon titre='Notes' content="Je suis un amateur alors je connais ça"></Accordeon>
            <Accordeon titre='Yesss' content="I'm baby xOXO franzen iPhone, hell of paleo selvage slow-carb keytar cardigan green juice. Polaroid fixie distillery alors je connais ça Je suis un amateur alors je connais ça Je suis un amateur alors je connais ça Je suis un amateur alors je connais ça Je suis un amateur alors je connais ça Je suis un amateur alors je connais ça Je suis un amateur alors je connais ça Je suis un amateur alors je connais ça"></Accordeon>
            <Accordeon titre='Vino' content="Je suis un amateur alors je connais ça Je suis un amateur alors je connais ça Je suis un amateur "></Accordeon>
           
           {/* /// <img src={BouteilleBlackLogo} alt="logo" />  */}
            <ButtonBackUp onClick={()=> backTop()}> <img src={Chevron} alt="chevron" /> </ButtonBackUp>
        </div>
    );
};

export default TestStyle;
