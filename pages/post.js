/**
 * Created by zhang-j on 2018/3/22.
 */
import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'

const Post = (props) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary}</p>

        {/*<img src={props.show.image.medium} alt=""/>*/}
    </Layout>
);

Post.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetch show: ${show.name}`);
    return {show};
};

export default Post;