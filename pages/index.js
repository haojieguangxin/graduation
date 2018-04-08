/**
 * Created by zhang-j on 2018/3/22.
 */
import Link from 'next/link'
import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'

const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
            <a>{props.name}</a>
        </Link>
        <style jsx>
            {`
                  a {
                    font-family: "Arial";
                  }

                  li {
                    list-style: none;
                    margin: 5px 0;
                  }

                  a {
                    text-decoration: none;
                    color: blue;
                  }

                  a:hover {
                    opacity: 0.6;
                  }
                `}
        </style>
    </li>
);

// const Index = (props) => {
//     return (
//         <Layout>
//             <h1>Batman TV Shows</h1>
//             <ul>
//                 {props.shows.map(({show}) => (
//                     <PostLink key={show.id} id={show.id} name={show.name}/>
//                 ))}
//             </ul>
//             <style jsx>
//                 {`
//                   h1 {
//                     font-family: "Arial";
//                   }
//
//                   ul {
//                     padding: 0;
//                   }
//                 `}
//             </style>
//         </Layout>
//     );
// };
//
// Index.getInitialProps = async function () {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//     const data = await res.json();
//
//     console.log(`Show data fetched. Count: ${data.length}`);
//
//     return {
//         shows: data
//     };
// };

const Index = (props) => {
    const seo = {
        title: '中国制造网-立足内贸领域，专注中国制造的B2B电子商务平台',
        keywords: '中国制造网,B2B电子商务平台,内贸平台,免费发布产品,行业市场,采购批发,公司黄页,行业资讯',
        description: '中国制造网-国内著名B2B电子商务平台，覆盖全行业品类：工业品、原材料、家居百货和商务服务等。为供应商提供免费搭建企业展厅、免费发布产品、移动营销及深度推广服务，帮助供应商获取商机。为采购商提供采购寻源、采供协同、采购管理、在线交易、供应链金融等服务，帮助企业提升采购效率、降低采购成本。'
    };
    return (
        <Layout {...seo}>
            <div>
                <div className="">Hello</div>
            </div>
        </Layout>
    );
};

export default Index;