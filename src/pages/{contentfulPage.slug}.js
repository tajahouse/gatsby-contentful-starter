import React from 'react';
import { Layout } from 'components';

export default function ContentfulPage(props){
    console.log("Our prop",props)
    return(
        <Layout>
            <h1> Contentful page</h1>
        </Layout>

    )
}