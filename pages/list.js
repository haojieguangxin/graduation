/**
 * Created by zhang-j on 2018/4/9.
 */
import axios from 'axios';

const ListItem = (props) => {
    return (
        <li>
            {props.title} {props.addTime}
        </li>
    );
};

const List = (props) => {
    return (
        <ul>
            {
                props.list.map(function(item, index) {
                    return <ListItem key={index} title={item.title} addTime={item.addTime} />;
                })
            }
        </ul>
    )
};

List.getInitialProps = async () => {
    const {data} = await axios.get('http://localhost:3000/api/list');
    return {
        list: data
    };
};

export default List;