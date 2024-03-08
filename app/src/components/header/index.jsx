import integralmedica from '../../assets/integralmedica.svg'
import Icon from '../mobilemenu/icon'

/**
 * ø Este componente é responsável por renderizar o banner, a logo, e o menu de amburguer para mobile.
 * 
 * ø Passo o estado para o ICON que é o menu de amburguer poder fechar e abrir o menu mobile e fazer a animação.
 */
export default function Header({ setOpen, open }) {
    return (
        <div className="w-full flex md:flex-col bg-red-700 justify-center items-center max-w-full">
            <div className='md:hidden'>
                <Icon setOpen={setOpen} open={open} />
            </div>
            <div className="w-full max-w-[1200px] md:h-[80px]  flex items-center justify-center">
                <div>
                </div>
                <img className='w-full h-full max-w-[144px]' src={integralmedica} alt="" />
            </div>
        </div>
    )
}