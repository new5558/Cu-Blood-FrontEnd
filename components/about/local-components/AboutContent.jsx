import React from 'react';
import I18 from '@/core/i18n';

class AboutContent extends React.Component {
    render() {
      const { t } = this.props;
        return (
            <div className='layout-narrow py-8'>
                <Paragraph title={<div className='font-bold'>{t('aboutContentHeader')}</div>} body={t('aboutContentBody1')} />
                <Paragraph title={t('aboutContentsubHeader1')} body={t('aboutContentsubBody1')} />
                <Paragraph title={t('aboutContentsubHeader2')} body={t('aboutContentsubBody2')} />
                <Paragraph title={t('aboutContentsubHeader3')} body={t('aboutContentsubBody3')} />
                <Paragraph title={t('aboutContentsubHeader4')} body={
                    <div>
                        <div className='py-4'>
                            {t('aboutContentsubBody4-1')}
                        </div >
                        <div className='py-4 font-semibold'>
                            {t('aboutContentsubBody4-2')}
                        </div>
                        <div className='py-4'>
                            {t('aboutContentsubBody4-3')}
                        </div>
                        <div className='py-4 text-pink'>
                            {t('aboutContentsubBody4-4')}
                        </div>
                    </div>
                } />


                <div className="flex flex-col font-cu-heading text-2xl py-4">
                    <span className="text-4xl font-bold"> {t('logo')}</span>
                    <div className="w-full flex w-64 h-64 justify-center">
                        <img src='/static/logo/logo1.png' style={{maxHeight: "16rem"}} alt="logo"></img>
                    </div>
                    <span className="mt-8"> {t('logoText')} </span>
                </div>


                <div className="flex flex-col font-cu-heading text-2xl py-4">
                    <span className="text-4xl font-bold"> {t('mascot')}</span>
                    <div className="w-full flex w-64 h-64 justify-center">
                        <img src='/static/logo/mascot.png' style={{maxHeight: "16rem"}} alt="mascot"></img>
                    </div>
                    {t('mascotText')}
                </div>
                

                <hr className="border-solid border-grey w-full mt-8" style={{ borderBottomWidth: '0.05rem', maxWidth: '600px' }} />
            </div>
        )
    }
}

const Paragraph = (props) => {
    const { title, body } = props;

    return (
        <div className='flex flex-col font-cu-heading text-2xl pt-10 items-center md:items-start text-center md:text-left'>
            <div className='font-medium pb-6 text-4xl'>
                {title}
            </div>
            <div>
                {body}
            </div>
        </div>
    )
}
export default I18.withNamespaces('about')(AboutContent);
