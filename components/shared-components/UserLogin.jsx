import React, {Component} from 'react'
import Header from '@/shared-components/TopicLeft'
import I18, { Link } from '@/core/i18n';

class UserLogin extends Component {

    render() {
        const { onSubmit, errorMessage, username, password, onChange, formValid, t} = this.props;
        return (
            <div>
                <Header borderColor="border-cb-red" english={t('userLoginTitleSmall')} thai={t('userLoginTitleBig')} englishColor="text-cb-pink" />
                <div className="text-red mb-4">{t(errorMessage)}</div>
                <form onSubmit={onSubmit}>
                    <span className="font-cu-heading">{t('userLogin_Email')}</span>
                    <input autoComplete="new-username" className="bg-cb-grey-light rounded-lg mt-2 w-full h-8 mb-10 p-6" value={username} onChange={onChange} type="text" name="username" />
                    <div className="flex justify-between">
                        <span className="font-cu-heading">{t('userLogin_Password')}</span>
                        {/* <span className="font-cu-heading font-semibold text-grey">{t('userLoginForgotPassword')}</span> */}
                        {/* hide forgot password feature */}
                    </div>
                    <input autoComplete="new-password" className="bg-cb-grey-light rounded-lg mt-2 w-full h-8 mb-10 p-6" value={password} onChange={onChange} type="password" name="password" />
                    <div className="flex flex-row justify-between items-center">
                        <Link href="/registerForm"><a className="no-underline"><span className="font-cu-heading text-grey underline">{t('userLoginRegister')}</span></a></Link>
                        <button disabled={!formValid} type="submit" className="font-cu-heading px-10 py-3 text-white bg-cb-pink rounded-lg btn" id="confirm">{t('userLoginLogin')}</button>
                    </div>
                </form>
            </div>
        );
    }
}


export default I18.withNamespaces('login')(UserLogin)
