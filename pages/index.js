/**
 * Created by zhang-j on 2018/3/22.
 */
import Layout from '../components/MyLayout'
import '../public/style/scss/module/index.scss'

const Index = () => {
    const seo = {
        title: '中国制造网-立足内贸领域，专注中国制造的B2B电子商务平台',
        keywords: '中国制造网,B2B电子商务平台,内贸平台,免费发布产品,行业市场,采购批发,公司黄页,行业资讯',
        description: '中国制造网-国内著名B2B电子商务平台，覆盖全行业品类：工业品、原材料、家居百货和商务服务等。为供应商提供免费搭建企业展厅、免费发布产品、移动营销及深度推广服务，帮助供应商获取商机。为采购商提供采购寻源、采供协同、采购管理、在线交易、供应链金融等服务，帮助企业提升采购效率、降低采购成本。'
    };
    return (
        <Layout {...seo}>
            <div>
                <div className="main-hd">
                    <h1>Hello World!</h1>
                </div>
                <ul className="main-bd">
                    <li>
                        <a href="/theme">
                            <i className="iconfont iconfont-home-theme"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/list">
                            <i className="iconfont iconfont-home-list"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/aboutus">
                            <i className="iconfont iconfont-home-aboutus"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </Layout>
    );
};

export default Index;