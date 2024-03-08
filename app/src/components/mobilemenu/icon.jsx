import { useEffect } from 'react';

/**
 * ø Este componente é responsável por renderizar o icone/botão de hamburguer apenas para mobile.
 * 
 * ø Passo o estado para o ICON que é o menu de amburguer poder fechar e abrir o menu mobile e fazer a animação.
 * 
 * ø Erro do EsLint por não tipar, sem necessidades de tipagem para fins de tesde de habilidade.
 *✔ Porem em um projeto real, com certeza TYPARIA.
 */
export default function Icon({ setOpen, open }) {

    /**
     * ✔ Essa função está no onClick do elemento button HTML abaixo.
     * 
     * ✔ Quando ativada se o valor do estado OPEN for true ele troca para false e vice-versa.
     */
    function handleClickButton() {
        setOpen(!open);
    }

    // Dexei esse bloco de codigo do hook com o console log apenas com intuito de mostrar que eu poderia ter feito as animações e as funcionalidades do botão de uma forma diferente, sempre que o estado open trocasse seu valor para true ou false.
    //Oque faz ? Fica ouvindo se o estado OPEN mudou de estado e se sim poderia aplicar uma lógica para fazer qualquer coisa com o botão.
    useEffect(() => {
        if (open) {
            // Ativar animações ou transições
            // poderia fazer a lógica e a animação aqui, porem com um ternário resolvi, então em uma aplicação real ficaria mais simples.
            console.log('Ativar animações ou transições');

        } else {
            // Desativar animações ou transições
            // Uma forma de segurança para o botão não ter a chance de bugar com o FOCUS do usuário, mas não é extremamente necessário.
            document.body.focus()
            console.log('Desativar botão')
        }
        //fica ouvindo o estado open se ele mudar de estado ele executa os blocos de codigo acima.
        //Se deixassemos o array vazio ele executaria apenas uma vez ao ser renderizado oque ocasionaria bugs.
    }, [open]);

    return (
        //Botão de hamburguer para mobile.
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

