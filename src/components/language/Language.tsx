import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles.scss'
import { UzbLang,NavArrow,EnglishLangSvg} from '../../assets';
const Language = () => {
   
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [rotate,setRotate] = useState(false)
    const { i18n } = useTranslation();
    const rotateArrow = () =>{
        setRotate(!rotate)
    }
    // Tilni localStorage-dan olish
    const initialLanguage =
        typeof window !== "undefined"
            ? localStorage.getItem("language") || "uz"
            : "uz";
    
    const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

    // Tilni o'zgartirganda
    useEffect(() => {
        if (i18n && typeof i18n.changeLanguage === "function") {
            i18n.changeLanguage(selectedLanguage);
            localStorage.setItem("language", selectedLanguage);
        } else {
            console.error("i18n object or changeLanguage method is not available.");
        }
    }, [selectedLanguage, i18n]);

    // Tilni tanlash funksiyasi
    const onChangeLanguage = (value:any) => {
        setSelectedLanguage(value);
        setIsMenuOpen(false); // Menu yopish
    };

    // Har bir til uchun matn
    const getLanguageText = (lang:string) => {
        switch (lang) {
            case "uz":
                return <div className='lang-item'><img src={UzbLang} width={30} height={22}/> UZB</div>;
            case "en":
                return <div className='lang-item'><EnglishLangSvg/> ENG</div>;
            default:
                return "ENG";
        }
    };

    const languageText = getLanguageText(selectedLanguage);

    return (
        <div className='custom-dropdown' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <button onClick={rotateArrow} className='lang-btn'>
                        <p>{languageText}</p> 
                        <img className={`${rotate && "rotate"} arrowImg`} color='black' src={NavArrow}/>
            </button>
            {
                isMenuOpen && (
                    <div className="custom-dropdown-menu">
                        <div className="custom-dropdown-item"
                            onClick={() => onChangeLanguage("uz")}
                        >
                            <p className='btnText'>{getLanguageText("uz")}</p>
                        </div>
                        <div className="custom-dropdown-item"
                            onClick={() => onChangeLanguage("en")}
                        >
                            <p className='btnText'>{getLanguageText("en")}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Language;
