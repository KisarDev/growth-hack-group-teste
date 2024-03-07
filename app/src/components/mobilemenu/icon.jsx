import { useState, useEffect } from 'react';

export default function Icon({ setOpen, open }) {
    const [isActivate, setIsActivate] = useState(false);

    function handleClickButton() {
        setOpen(!open);
        const button = document.querySelector('button:focus')
        if (button) {
            button.focus();
        }

    }

    useEffect(() => {
        // Lógica para manipular animações e transições com base no estado isActivate
        // Por exemplo, você pode adicionar ou remover classes CSS com base em isActivate
        if (open) {
            // Ativar animações ou transições
            console.log('Ativar animações ou transições');

        } else {
            // Desativar animações ou transições
            document.body.focus()
            console.log('Desativar botão')
        }
    }, [open]);

    return (
        <div>
            <button onClick={handleClickButton} className={open ? "group relative" : "relative"}>
                <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all border-black border ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                    <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                        <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
                        <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                        <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>

                        <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                            <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                            <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    );
}

