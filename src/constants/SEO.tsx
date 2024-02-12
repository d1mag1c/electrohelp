import React, {FC} from 'react';
import { Helmet } from 'react-helmet-async';

export type ISeo = {
    title : string,
    description : string
}

const SEO:FC<ISeo> = ({title, description}) =>  {
    return (
        <Helmet>
            <meta name="robots" content="none"/>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta property="og:locale" content="ru_RU"/>
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content="ElectroHelp"/>
            <meta property="og:url" content="https://electrohelp.by/"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>

            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
        </Helmet>
    )
}

export default SEO