import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = ({ monstersList }) => (
    <div className='card-list'>
    {monstersList.map((monster)=> {
        const { name, email, id } = monster;
        return(
            <Card key={id} name={name} email={email} id={id}/>
        )
        })}
</div>
)

// class CardList extends Component {
//     render() {

//         const { monstersList } = this.props;

//         return (
//             <div className='card-list'>
//                 {monstersList.map((monster)=> {
//                     const { name, email, id } = monster;
//                     return(
//                         <Card name={name} email={email} id={id}/>
//                     )
//                     })}
//             </div>
//         )

//     }
// }

export default CardList;