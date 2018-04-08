/**
 * Created by zhang-j on 2018/3/22.
 */
import Header from './Header'
import Head from 'next/head'
// import '../public/style/base/base_import.scss'

const MyLayout = (props) => (
    <div>
        <Head>
            <title>{props.title || '中国'}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="Keywords" content={props.keywords} />
            <meta name="Description" content={props.description} />
        </Head>
        {/*<Header/>*/}
        {props.children}
    </div>
);
export default MyLayout;