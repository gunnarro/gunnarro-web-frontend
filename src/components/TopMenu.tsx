import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { LANGUAGES } from '../constants/index';

import { Navbar } from 'reactstrap';


const isActive = ({ isActive }: any) => `link ${isActive ? 'active' : ''}`

export const TopMenu = () => {

    const { i18n, t } = useTranslation()

    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value
        i18n.changeLanguage(lang_code)
    }

    return (
    <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>
        <nav>
            <div>
                <NavLink className={isActive} to='/'>{t('home')}</NavLink>
                <NavLink className={isActive} to='/about'>{t('about')}</NavLink>
                <NavLink className={isActive} to='/todo'>{t('todo')}</NavLink>
            </div>

            <select defaultValue={i18n.language} onChange={onChangeLang}  >
                {
                    LANGUAGES.map(({ code, label }) => (
                        <option
                            key={code}
                            value={code}
                        >{label}</option>
                    ))
                }
            </select>
        </nav>
    </Navbar>
    )
}